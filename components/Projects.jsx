import Reveal from "./Reveal";

const projects = [
  {
    id: 1,
    name: "Calculator",
    description:
      "A clean, responsive calculator built for everyday math — fast inputs, clear layout, and a polished UI.",
    image: "/project-images/cla.png",
    link: "https://calculaor-swart.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-label">Projects</p>
          <h2 className="display mt-4 max-w-xl text-4xl font-bold md:text-5xl">
            Selected work
          </h2>
          <p className="mt-4 max-w-lg text-[var(--muted)]">
            Real builds I&apos;ve shipped while learning — more on the way.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) + 1}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card group block overflow-hidden rounded-3xl border border-[var(--line)] bg-[rgba(255,255,255,0.5)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--accent)] hover:shadow-[0_28px_50px_rgba(12,18,34,0.12)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--ink)]">
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,18,34,0.55)] via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-4 right-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[var(--ink)] transition-transform duration-300 group-hover:translate-x-0.5">
                    View live →
                  </span>
                </div>

                <div className="p-6 md:p-7">
                  <h3 className="display text-2xl font-semibold transition-colors group-hover:text-[var(--accent)]">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-[var(--accent-soft)] px-2.5 py-1 text-xs font-medium text-[var(--accent)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
