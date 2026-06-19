export default function Footer() {
  return (
    <footer className="bg-brand-navy px-5 pt-16 pb-8 text-brand-white/80">
      <div className="mx-auto max-w-5xl">
        {/* Top section */}
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">
            <img
              src="/logo_final.svg"
              alt="Realm Financial Services LLC"
              className="h-20 w-auto brightness-0 invert"
            />
            <p className="mt-6 text-sm leading-relaxed text-brand-white/50">
              Professional bookkeeping &amp; financial management for small
              businesses that want to grow with confidence.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-teal">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-white/60">
              <li>Bookkeeping</li>
              <li>Cash Management</li>
              <li>Bill Payments</li>
              <li>Invoicing &amp; Collections</li>
              <li>Financial Reporting</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-teal">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="inline-flex items-center gap-2 text-brand-white/50">
                  <svg className="h-4 w-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  732.456.8311
                </span>
              </li>
              <li>
                <a
                  href="mailto:info@realmfinancialservices.com"
                  className="inline-flex items-center gap-2 text-brand-white/70 hover:text-brand-white transition-colors"
                >
                  <svg className="h-4 w-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@realmfinancialservices.com
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-brand-white/50">
                  <svg className="h-4 w-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  realmfinancialservices.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-12 border-t border-brand-white/10 pt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-xs text-brand-white/40">
            &copy; {new Date().getFullYear()} Realm Financial Services LLC. All
            rights reserved.
          </p>
          <a
            href="#"
            className="text-xs text-brand-white/40 hover:text-brand-teal transition-colors"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
