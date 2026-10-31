"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const philosophy =
  "We work with a considered number of clients at any one time. Executive and lifestyle support relies on context, continuity, timely responses and clear accountability. We review capacity before agreeing new work, then define responsibilities and response expectations in writing. A named point of contact retains context throughout delivery. Regular reviews keep workload and priorities aligned with the agreed scope. This approach supports consistent service and dependable outcomes.";

const operatingPrinciples = [
  {
    number: "01",
    title: "Understand the requirement",
    detail:
      "We review priorities, response needs and current workload before preparing a defined scope.",
  },
  {
    number: "02",
    title: "Clear accountability",
    detail:
      "A named point of contact coordinates requests and maintains working context.",
  },
  {
    number: "03",
    title: "Capacity and continuity",
    detail:
      "We confirm availability and response expectations before an engagement begins.",
  },
];

export default function FounderNote() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const words = gsap.utils.toArray<HTMLElement>(".founder-word");

        gsap.fromTo(
          words,
          { color: "#8E8E93" },
          {
            color: "#0A0A0A",
            stagger: 0.025,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "bottom 65%",
              scrub: 0.8,
            },
          },
        );

        gsap.from(".principle-row", {
          x: -12,
          autoAlpha: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".principle-list",
            start: "top 78%",
          },
        });
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-vela-silk px-6 py-24 text-vela-obsidian sm:px-10 sm:py-36 lg:px-16"
      aria-labelledby="founder-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-vela-taupe sm:text-xs">
              <span aria-hidden="true" className="h-px w-8 bg-vela-gold" />
              Capacity and continuity
            </p>
            <h2
              id="founder-heading"
              className="max-w-xl font-serif text-5xl leading-[0.93] tracking-[-0.06em] sm:text-7xl"
            >
              Deliberate capacity.
              <br />
              Consistent service.
            </h2>
          </div>

          <div className="lg:pt-12">
            <p className="max-w-3xl text-xl leading-[1.65] tracking-[-0.025em] sm:text-2xl sm:leading-[1.7]">
              {philosophy.split(" ").map((word, index) => (
                <span className="founder-word" key={`${word}-${index}`}>
                  {word}{" "}
                </span>
              ))}
            </p>
            <p className="mt-8 border-t border-vela-taupe/40 pt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-vela-taupe sm:text-xs">
              Dolapo Balade, Founder of Vela Support
            </p>
          </div>
        </div>

        <div className="principle-list mt-16 grid border-t border-vela-taupe/35 md:grid-cols-3">
          {operatingPrinciples.map((principle) => (
            <article
              className="principle-row border-b border-vela-taupe/35 py-6 md:border-b-0 md:border-r md:px-6 md:py-8 md:first:pl-0 md:last:border-r-0"
              key={principle.number}
            >
              <p className="font-mono text-[10px] tracking-[0.14em] text-vela-gold">
                {principle.number}
              </p>
              <h3 className="mt-5 font-serif text-2xl tracking-[-0.03em] sm:text-3xl">
                {principle.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-vela-taupe sm:text-base">
                {principle.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
