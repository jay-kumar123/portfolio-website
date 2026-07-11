import Reveal from "./Reveal";

const highlights = [
  {
    title: "BSc Botany",
    detail: "Graduate with a curiosity for systems — now applied to the web.",
  },
  {
    title: "Modern Stack",
    detail: "React, Next.js, and Tailwind for fast, polished interfaces.",
  },
  {
    title: "Always Building",
    detail: "Shipping small projects to sharpen craft and problem-solving.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-label">About</p>
          <h2 className="display mt-4 max-w-2xl text-4xl font-bold md:text-5xl">
            Who I am & what I care about
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <Reveal delay={1}>
            <p className="text-lg leading-relaxed text-[var(--ink-soft)] md:text-xl md:leading-8">
              I&apos;m Jay Kumar, an aspiring web developer learning React,
              Next.js, and modern frontend tools. I enjoy turning ideas into
              clear interfaces — solving problems, refining details, and
              shipping work that feels good to use.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Passionate about blending aesthetics with functionality across
              web experiences, with curiosity for iOS and Android along the
              way.
            </p>
          </Reveal>

          <div className="flex flex-col gap-6">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i + 1}>
                <div className="border-l-2 border-[var(--accent)] pl-5">
                  <h3 className="display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
