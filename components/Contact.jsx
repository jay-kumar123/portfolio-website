"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    // Opens the user's mail client — no backend required
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:jaykumar@example.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 600);
  }

  return (
    <section id="contact" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="section-label">Contact</p>
            <h2 className="display mt-4 text-4xl font-bold md:text-5xl">
              Let&apos;s build something
            </h2>
            <p className="mt-5 max-w-md text-[var(--muted)] leading-relaxed">
              Have a project, collaboration, or opportunity in mind? Drop a
              message — I&apos;ll get back as soon as I can.
            </p>

            <div className="mt-10 space-y-4 text-sm">
              <a
                href="mailto:jaykumar@example.com"
                className="flex items-center gap-3 text-[var(--ink-soft)] transition-colors hover:text-[var(--accent)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                  @
                </span>
                jaykumar@example.com
              </a>
              <p className="flex items-center gap-3 text-[var(--ink-soft)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--warm-soft)] text-[var(--warm)]">
                  ◈
                </span>
                Open to freelance & junior roles
              </p>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-[var(--line)] bg-[rgba(255,255,255,0.55)] p-6 backdrop-blur-md md:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="field"
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="block sm:col-span-1">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="field"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                  Message
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea…"
                  className="field"
                  required
                />
              </label>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="btn btn-warm"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Opening mail…" : "Send Message"}
                </button>

                {status === "sent" && (
                  <p className="text-sm font-medium text-[var(--accent)]">
                    Thanks — your mail client should open next.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm font-medium text-[var(--warm)]">
                    Please fill in all fields.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
