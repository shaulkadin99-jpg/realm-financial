export default function Footer() {
  return (
    <footer className="bg-brand-navy px-5 py-12 text-brand-white/80">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <img
            src="/logo_final.svg"
            alt="Realm Financial Services LLC"
            className="h-7 w-auto brightness-0 invert sm:h-9"
          />
          <p className="text-sm text-brand-white/60">
            Professional bookkeeping &amp; financial services
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm sm:items-end">
          <a
            href="tel:7324568311"
            className="hover:text-brand-white transition-colors"
          >
            732.456.8311
          </a>
          <a
            href="mailto:info@realmfinancialservices.com"
            className="hover:text-brand-white transition-colors"
          >
            info@realmfinancialservices.com
          </a>
          <span className="text-brand-white/50">realmfinancialservices.com</span>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-5xl border-t border-brand-white/10 pt-6 text-center text-xs text-brand-white/40">
        &copy; {new Date().getFullYear()} Realm Financial Services LLC. All
        rights reserved.
      </div>
    </footer>
  );
}
