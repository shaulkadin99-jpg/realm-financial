"use client";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-5 pt-20 pb-16 text-center overflow-hidden" style={{ background: "linear-gradient(to bottom, #9DD5D2, #C2E6E4, #ECF7F7)" }}>
      {/* Floating circles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute top-[10%] left-[5%] h-64 w-64 rounded-full bg-brand-white/15 blur-3xl" style={{ animation: "float-slow 18s ease-in-out infinite" }} />
        <span className="absolute top-[60%] right-[8%] h-40 w-40 rounded-full bg-brand-white/12 blur-2xl" style={{ animation: "float-mid 14s ease-in-out infinite" }} />
        <span className="absolute top-[25%] right-[20%] h-20 w-20 rounded-full bg-brand-white/20 blur-xl" style={{ animation: "float-fast 10s ease-in-out infinite" }} />
        <span className="absolute bottom-[15%] left-[15%] h-32 w-32 rounded-full bg-brand-white/12 blur-2xl" style={{ animation: "float-mid-reverse 16s ease-in-out infinite" }} />
        <span className="absolute top-[45%] left-[40%] h-14 w-14 rounded-full bg-brand-white/18 blur-lg" style={{ animation: "float-fast 10s ease-in-out infinite 2s" }} />
        <span className="absolute bottom-[30%] right-[35%] h-48 w-48 rounded-full bg-brand-white/10 blur-3xl" style={{ animation: "float-slow 18s ease-in-out infinite 4s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Logo */}
        <div className="mb-10 hero-animate-1">
          <img
            src="/logo_final.svg"
            alt="Realm Financial Services LLC"
            className="mx-auto h-40 w-auto sm:h-56"
          />
        </div>

        <h1 className="font-heading text-3xl font-bold leading-tight text-brand-navy sm:text-4xl md:text-5xl hero-animate-2">
          Balancing your books.
          <br />
          Elevating your business.
        </h1>

        <p className="mt-5 text-lg text-brand-navy/70 sm:text-xl hero-animate-3">
          Taking the stress out of your business finances.
        </p>

        <div className="mt-10 hero-animate-4">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-brand-teal px-8 py-3 text-base font-semibold text-brand-white transition-colors hover:bg-brand-teal-hover focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Circular office photo — bottom left, partially off-screen */}
      {/* Scrolling ticker */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-brand-white/20 bg-brand-white/10 backdrop-blur-sm py-3" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 25s linear infinite" }}>
          {[0, 1].map((i) => (
            <span key={i} className="flex items-center text-sm font-medium tracking-wide text-brand-navy/50">
              <svg className="mx-4 h-4 w-4 text-brand-teal/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              <span>Bookkeeping</span>
              <svg className="mx-4 h-4 w-4 text-brand-teal/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Cash Management</span>
              <svg className="mx-4 h-4 w-4 text-brand-teal/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              <span>Bill Payments</span>
              <svg className="mx-4 h-4 w-4 text-brand-teal/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" /></svg>
              <span>Invoicing &amp; Collections</span>
              <svg className="mx-4 h-4 w-4 text-brand-teal/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              <span>Financial Reporting</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
