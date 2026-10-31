"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We review your priorities, weekly workload and recurring coordination tasks. Together, we identify what to delegate and what should remain with you.",
  },
  {
    number: "02",
    title: "Proposal",
    description:
      "You receive a written scope covering responsibilities, response expectations, working arrangements and fees. We confirm availability before the engagement begins.",
  },
  {
    number: "03",
    title: "Commencement",
    description:
      "We establish the agreed processes, manage tasks within scope and review priorities at regular intervals. These reviews keep the service aligned as your requirements change.",
  },
];

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".journey-progress",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".journey-list",
              start: "top 65%",
              end: "bottom 65%",
              scrub: true,
            },
          },
        );

        gsap.utils.toArray<HTMLElement>(".journey-marker").forEach((marker) => {
          gsap.fromTo(
            marker,
            { backgroundColor: "rgba(142, 142, 147, 0.25)", scale: 0.96 },
            {
              backgroundColor: "#B8860B",
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: marker,
                start: "top 68%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="bg-vela-silk px-6 py-28 text-vela-obsidian sm:px-10 sm:py-40 lg:px-16"
      aria-labelledby="journey-heading"
    >
      <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <p className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-vela-taupe sm:text-xs">
            <span aria-hidden="true" className="h-px w-8 bg-vela-gold" />
            A clear three-step process
          </p>
          <h2
            id="journey-heading"
            className="max-w-xl text-5xl font-medium uppercase leading-[0.88] tracking-[-0.07em] sm:text-7xl"
          >
            What happens
            <br />
            next<span className="text-vela-gold">?</span>
          </h2>
          <p className="mt-7 max-w-sm text-base leading-relaxed text-vela-taupe">
            Each engagement begins with a review of your requirements, followed by a written scope and a structured start.
          </p>
        </div>

        <div className="journey-list relative">
          <div
            aria-hidden="true"
            className="absolute bottom-10 left-[19px] top-10 w-px bg-vela-taupe/35"
          />
          <div
            aria-hidden="true"
            className="journey-progress absolute bottom-10 left-[19px] top-10 w-px origin-top bg-vela-gold"
          />

          <ol className="relative">
            {steps.map((step) => (
              <li
                className="relative grid min-h-[220px] grid-cols-[40px_1fr] gap-6 border-b border-vela-taupe/35 py-8 first:pt-0 last:min-h-0 last:border-0 last:pb-0 sm:min-h-[250px] sm:gap-8"
                key={step.number}
              >
                <span
                  aria-hidden="true"
                  className="journey-marker relative z-10 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-vela-taupe/25 font-mono text-[10px] text-vela-obsidian"
                >
                  {step.number}
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-vela-taupe">
                    Step {step.number}
                  </p>
                  <h3 className="mt-3 text-3xl font-medium tracking-[-0.055em] sm:text-5xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-vela-taupe sm:text-base">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
