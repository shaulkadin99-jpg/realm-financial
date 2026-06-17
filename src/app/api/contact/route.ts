import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASSWORD;
  const contactTo = process.env.CONTACT_TO;

  if (!smtpUser || !smtpPass || !contactTo) {
    console.error("Missing email environment variables.");
    return NextResponse.json(
      { error: "Server configuration error. Please try again later." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    "",
    `Message:`,
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    await transporter.sendMail({
      from: `"Realm Financial Website" <${smtpUser}>`,
      to: contactTo,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to send email:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 500 }
    );
  }
}
