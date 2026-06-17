import { NextResponse } from "next/server";
import { Resend } from "resend";
import { promises as fs } from "fs";
import path from "path";

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

  const apiKey = process.env.RESEND_API_KEY;
  const contactTo = process.env.CONTACT_TO;

  if (!apiKey || !contactTo) {
    console.error("Missing email environment variables.");
    return NextResponse.json(
      { error: "Server configuration error. Please try again later." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

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
    await resend.emails.send({
      from: "Realm Financial Website <onboarding@resend.dev>",
      to: contactTo,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text,
    });

    // Save submission to JSON file
    try {
      const dataDir = path.join(process.cwd(), "data");
      const filePath = path.join(dataDir, "submissions.json");
      await fs.mkdir(dataDir, { recursive: true });

      let submissions = [];
      try {
        const existing = await fs.readFile(filePath, "utf-8");
        submissions = JSON.parse(existing);
      } catch {
        // File doesn't exist yet
      }

      submissions.push({
        name,
        email,
        phone: phone || null,
        message,
        sentFrom: "onboarding@resend.dev",
        sentTo: contactTo,
        timestamp: new Date().toISOString(),
      });

      await fs.writeFile(filePath, JSON.stringify(submissions, null, 2));
    } catch (err) {
      console.error("Failed to save submission to file:", err);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to send email:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 500 }
    );
  }
}
