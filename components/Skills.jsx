"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";

const frontend = [
  { name: "HTML", icon: "/html.png", level: 90 },
  { name: "CSS", icon: "/css.png", level: 88 },
  { name: "JavaScript", icon: "/js.png", level: 80 },
  { name: "React", icon: "/react.png", level: 78 },
  { name: "Next.js", icon: "/next ja.png", level: 72 },
  { name: "Tailwind CSS", icon: "/talwind.png", level: 85 },
];

const tools = [
  { name: "Git", icon: "/git.png", level: 75 },
  { name: "GitHub", icon: "/github.png", level: 78 },
];

function SkillCard({ skill }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className="skill-card group rounded-2xl border border-[var(--line)] bg-[rgba(255,255,255,0.45)] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[rgba(255,255,255,0.75)] hover:shadow-[0_20px_40px_rgba(13,115,119,0.12)]"
      style={{ "--level": `${skill.level}%` }}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm transition-transform duration-300 group-hover:scale-110">
          <img
            src={skill.icon}
            alt=""
            className="h-9 w-9 object-contain"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-semibold text-[var(--ink)]">{skill.name}</h3>
            <span className="text-xs font-medium text-[var(--muted)]">
              {skill.level}%
            </span>
          </div>
          <div className="skill-bar mt-3">
            <span />
          </div>
        </div>
      </div>
    </article>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div>
      <Reveal>
        <h3 className="display text-2xl font-semibold md:text-3xl">{title}</h3>
      </Reveal>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((skill, i) => (
          <Reveal key={skill.name} delay={(i % 3) + 1}>
            <SkillCard skill={skill} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-label">Skills</p>
          <h2 className="display mt-4 max-w-xl text-4xl font-bold md:text-5xl">
            Tools I use to ship ideas
          </h2>
          <p className="mt-4 max-w-lg text-[var(--muted)]">
            Frontend foundations and everyday tools — growing with every
            project.
          </p>
        </Reveal>

        <div className="mt-14 space-y-16">
          <SkillGroup title="Frontend" items={frontend} />
          <SkillGroup title="Tools" items={tools} />
        </div>
      </div>
    </section>
  );
}
