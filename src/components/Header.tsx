"use client";

import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-white/90 backdrop-blur-sm border-b border-brand-pale/60">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-5 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/logo_final.svg"
            alt="Realm Financial Services LLC"
            className="h-8 w-auto sm:h-10"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-navy hover:text-brand-teal transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-brand-teal px-5 py-2 text-sm font-semibold text-brand-white transition-colors hover:bg-brand-teal-hover focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 text-brand-navy"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {menuOpen && (
        <nav
          className="md:hidden bg-brand-white border-t border-brand-pale/60 px-5 pb-4 pt-2"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm font-medium text-brand-navy hover:text-brand-teal transition-colors py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-brand-teal px-5 py-2 text-sm font-semibold text-brand-white transition-colors hover:bg-brand-teal-hover"
                onClick={() => setMenuOpen(false)}
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
