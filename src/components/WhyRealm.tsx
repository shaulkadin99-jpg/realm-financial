"use client";

import { useRef, useEffect, useState } from "react";

const reasons = [
  {
    label: "Save Time",
    description:
      "Focus on running your business while we handle the numbers.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Stay Organized",
    description:
      "Clean, structured records that keep your finances in order year-round.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    label: "Know Your Numbers",
    description:
      "Gain clarity and confidence with accurate, timely financial insights.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function WhyRealm() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-brand-bg-top px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-brand-slate">
          Why Choose Us
        </p>
        <h2 className="text-center font-heading text-2xl font-bold text-brand-navy sm:text-3xl">
          Why Realm
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {reasons.map((reason, i) => (
            <div
              key={reason.label}
              className={`flex flex-col items-center text-center ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-brand-teal/15 p-4 text-brand-teal">
                {reason.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold text-brand-navy">
                {reason.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
