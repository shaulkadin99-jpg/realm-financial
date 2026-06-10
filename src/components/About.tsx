export default function About() {
  return (
    <section id="about" className="bg-brand-bg-soft px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-slate">
          About
        </p>
        <h2 className="font-heading text-2xl font-bold text-brand-navy sm:text-3xl">
          About
        </h2>

        {/* Placeholder — two-column-ready layout */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-brand-navy/60 italic">
              [About content — to be completed]
            </p>
          </div>
          <div>{/* Right column reserved for photo or additional content */}</div>
        </div>
      </div>
    </section>
  );
}
