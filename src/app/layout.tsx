import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Realm Financial Services — Bookkeeping & Financial Management",
  description:
    "Professional bookkeeping, cash management, invoicing, and financial reporting for small businesses. Taking the stress out of your business finances.",
  verification: {
    google: "LOLwj9B9V7VZybbhueWc6yx96q5rUeaLEKDGrUSK3yc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
