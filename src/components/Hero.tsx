export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-brand-bg-top px-5 pt-20 pb-16 text-center">
      <div className="mx-auto max-w-2xl">
        {/* Logo */}
        <div className="mb-10">
          <img
            src="/logo_final.svg"
            alt="Realm Financial Services LLC"
            className="mx-auto h-20 w-auto sm:h-28"
          />
        </div>

        {/* Spaced wordmark echo */}
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-brand-slate">
          R E A L M &nbsp; F I N A N C I A L &nbsp; S E R V I C E S
        </p>

        <h1 className="font-heading text-3xl font-bold leading-tight text-brand-navy sm:text-4xl md:text-5xl">
          Balancing your books.
          <br />
          Elevating your business.
        </h1>

        <p className="mt-5 text-lg text-brand-navy/70 sm:text-xl">
          Taking the stress out of your business finances.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-brand-teal px-8 py-3 text-base font-semibold text-brand-white transition-colors hover:bg-brand-teal-hover focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2"
          >
            Get in Touch
          </a>
          <a
            href="tel:7324568311"
            className="inline-flex items-center rounded-full border-2 border-brand-teal px-8 py-3 text-base font-semibold text-brand-teal transition-colors hover:bg-brand-teal hover:text-brand-white focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call / Text
          </a>
        </div>
      </div>
    </section>
  );
}
