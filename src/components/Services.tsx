"use client";

import { useRef, useEffect, useState } from "react";

const services = [
  {
    name: "Bookkeeping",
    description:
      "Accurate, up-to-date records so you always know where your business stands.",
    image: "/images/services/bookkeeping.jpg",
  },
  {
    name: "Cash Management",
    description:
      "Monitor cash flow, plan ahead, and keep your finances on solid ground.",
    image: "/images/services/cash-management.jpg",
  },
  {
    name: "Bill Payments",
    description:
      "Timely, organized bill processing so nothing falls through the cracks.",
    image: "/images/services/bill-payments.jpg",
  },
  {
    name: "Invoicing & Collections",
    description:
      "Professional invoicing and follow-up to keep revenue flowing smoothly.",
    image: "/images/services/invoicing.jpg",
  },
  {
    name: "Financial Reporting",
    description:
      "Clear, actionable reports that help you make confident business decisions.",
    image: "/images/services/financial-reporting.jpg",
  },
];

export default function Services() {
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
      id="services"
      ref={sectionRef}
      className="bg-brand-white px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-brand-slate">
          What We Do
        </p>
        <h2 className="text-center font-heading text-2xl font-bold text-brand-navy sm:text-3xl">
          Services
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.name}
              className={`rounded-2xl border border-brand-pale bg-brand-bg-soft p-7 transition-shadow hover:shadow-md ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 flex items-center gap-4">
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-[60px] w-[60px] rounded-full object-cover bg-brand-teal/10 shrink-0"
                />
                <h3 className="font-heading text-lg font-semibold text-brand-navy">
                  {service.name}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-body">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
