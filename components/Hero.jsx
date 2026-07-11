export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden pt-24"
    >
      {/* Full-bleed portrait plane */}
      <div className="pointer-events-none absolute inset-0 hero-media">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.22] md:opacity-[0.28]"
          style={{
            backgroundImage: "url('/profile-image.jpeg')",
            filter: "grayscale(20%) contrast(1.05)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(232,238,244,0.97)] via-[rgba(232,238,244,0.88)] to-[rgba(232,238,244,0.35)] md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(232,238,244,0.95)] via-transparent to-[rgba(232,238,244,0.4)]" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100svh-6rem)] max-w-6xl items-end gap-10 px-5 pb-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-8 md:pb-24">
        <div className="max-w-xl">
          <p className="section-label hero-animate">Aspiring Web Developer</p>

          <h1 className="display hero-animate hero-animate-d1 mt-5 text-[clamp(3.2rem,9vw,5.75rem)] font-extrabold text-[var(--ink)]">
            Jay Kumar
          </h1>

          <p className="hero-animate hero-animate-d2 mt-5 max-w-md text-base leading-relaxed text-[var(--ink-soft)] md:text-lg">
            Building clean, captivating interfaces with React, Next.js, and
            Tailwind — blending aesthetics with solid functionality.
          </p>

          <div className="hero-animate hero-animate-d3 mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-primary">
              Hire Me
            </a>
            <a href="#projects" className="btn btn-ghost">
              See Portfolio
            </a>
          </div>
        </div>

        <aside className="hero-stats flex gap-8 border-t border-[var(--line)] pt-8 md:flex-col md:items-end md:border-t-0 md:pl-10 md:pt-0">
          {[
            { value: "1+", label: "Year Learning" },
            { value: "5+", label: "Projects Built" },
            { value: "100%", label: "Dedication" },
          ].map((stat) => (
            <div key={stat.label} className="md:text-right">
              <p className="display text-3xl font-bold text-[var(--accent)] md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">{stat.label}</p>
            </div>
          ))}
        </aside>
      </div>

      {/* Portrait accent — studio gray fills to top so it matches the photo backdrop */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[40%] h-[800px] lg:block"
        style={{
          background:
            "linear-gradient(to left, #d6d6d6 55%, transparent 100%)",
        }}
      >
        <div className="absolute bottom-0 right-0 top-20 w-full overflow-hidden">
          <img
            src="/profile-image.jpeg"
            alt=""
            className="hero-media h-full w-full object-cover object-top"
            style={{
              maskImage:
                "linear-gradient(to left, black 55%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, black 55%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
