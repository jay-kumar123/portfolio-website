export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="display text-lg font-semibold">
          Jay<span className="text-[var(--accent)]">.</span>
        </p>
        <p className="text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Jay Kumar. Crafted with care.
        </p>
        <a
          href="#home"
          className="text-sm font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--accent)]"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
