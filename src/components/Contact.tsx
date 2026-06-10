"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-brand-white px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-brand-slate">
          Reach Out
        </p>
        <h2 className="text-center font-heading text-2xl font-bold text-brand-navy sm:text-3xl">
          Contact
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-brand-navy">
                Name <span className="text-brand-teal">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-brand-pale bg-brand-bg-soft/50 px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/40 outline-none transition-colors focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand-navy">
                Email <span className="text-brand-teal">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-brand-pale bg-brand-bg-soft/50 px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/40 outline-none transition-colors focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-brand-navy">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-xl border border-brand-pale bg-brand-bg-soft/50 px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/40 outline-none transition-colors focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-brand-navy">
                Message <span className="text-brand-teal">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded-xl border border-brand-pale bg-brand-bg-soft/50 px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/40 outline-none transition-colors focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 resize-y"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center rounded-full bg-brand-teal px-8 py-3 text-sm font-semibold text-brand-white transition-colors hover:bg-brand-teal-hover focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending…
                </>
              ) : (
                "Send"
              )}
            </button>

            {status === "success" && (
              <p className="rounded-xl bg-success/10 px-4 py-3 text-sm font-medium text-success" role="status">
                Thank you! We&apos;ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600" role="alert">
                {errorMsg}
              </p>
            )}
          </form>

          {/* Contact info + badges */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              {/* Phone */}
              <a
                href="tel:7324568311"
                className="flex items-center gap-4 rounded-xl border border-brand-pale p-4 transition-colors hover:bg-brand-bg-soft"
              >
                <span className="inline-flex items-center justify-center rounded-full bg-brand-teal/10 p-3 text-brand-teal">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-slate">
                    Phone
                  </p>
                  <p className="font-medium text-brand-navy">732.456.8311</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@realmfinancialservices.com"
                className="flex items-center gap-4 rounded-xl border border-brand-pale p-4 transition-colors hover:bg-brand-bg-soft"
              >
                <span className="inline-flex items-center justify-center rounded-full bg-brand-teal/10 p-3 text-brand-teal">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-slate">
                    Email
                  </p>
                  <p className="font-medium text-brand-navy">
                    info@realmfinancialservices.com
                  </p>
                </div>
              </a>

              {/* Website */}
              <div className="flex items-center gap-4 rounded-xl border border-brand-pale p-4">
                <span className="inline-flex items-center justify-center rounded-full bg-brand-teal/10 p-3 text-brand-teal">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-slate">
                    Website
                  </p>
                  <p className="font-medium text-brand-navy">
                    realmfinancialservices.com
                  </p>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="rounded-2xl bg-brand-bg-soft p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-slate">
                Certifications
              </p>
              <ul className="list-none space-y-2">
                <li className="text-sm font-medium text-brand-navy">Intuit Bookkeeping Trained</li>
                <li className="text-sm font-medium text-brand-navy">QuickBooks ProAdvisor Level 2</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
