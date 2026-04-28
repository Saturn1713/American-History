export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-navy text-parchment">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl font-bold text-gold">American History</div>
            <p className="mt-3 text-sm text-parchment/70">
              An interactive digital museum exploring the people, ideas, and artifacts that shaped
              the United States — built for curious minds.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold">Visit</div>
            <ul className="mt-3 space-y-1 text-sm text-parchment/70">
              
              <li>Designed for ages 11+</li>
              <li>Works on phone, tablet & computer</li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold">For Learners</div>
            <p className="mt-3 text-sm text-parchment/70">
              Use the Quiz hall to test what you discovered. Click any glowing artifact to learn
              more — every era has hidden fun facts to find.
            </p>
          </div>
        </div>
        <div className="gold-divider mt-10" />
        <p className="mt-6 text-center text-xs text-parchment/50">
          © {new Date().getFullYear()} American History Museum • An educational project
        </p>
      </div>
    </footer>
  );
}
