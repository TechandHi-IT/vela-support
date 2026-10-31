"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power2.out" } })
          .fromTo(
            ".hero-kicker",
            { autoAlpha: 0, y: 10 },
            { autoAlpha: 1, y: 0, duration: 0.5 },
          )
          .fromTo(
            ".hero-line",
            { clipPath: "inset(0 0 100% 0)", yPercent: 8 },
            {
              clipPath: "inset(0 0 0% 0)",
              yPercent: 0,
              duration: 0.8,
              stagger: 0.1,
            },
            "-=0.15",
          )
          .fromTo(
            ".hero-image-frame",
            { autoAlpha: 0, y: 18 },
            { autoAlpha: 1, y: 0, duration: 0.85 },
            "-=0.5",
          )
          .fromTo(
            ".hero-detail",
            { autoAlpha: 0, y: 12 },
            { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.1 },
            "-=0.25",
          );

        gsap.to(".hero-image", {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      return () => media.revert();
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="scroll-mt-24 relative overflow-hidden bg-vela-silk px-6 pb-12 text-vela-obsidian sm:px-10 sm:pb-16 lg:px-16"
      aria-labelledby="hero-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_32%,rgba(184,134,11,0.07),transparent_35%)]"
      />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="flex items-center justify-between border-b border-vela-obsidian/15 py-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-vela-taupe sm:text-[10px]">
            Executive and lifestyle support
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-vela-taupe sm:text-[10px]">
            United Kingdom
          </p>
        </div>

        <div className="grid items-center gap-10 py-12 sm:py-16 lg:min-h-[min(720px,78svh)] lg:grid-cols-[1.05fr_0.85fr] lg:gap-16 lg:py-10">
          <div className="hero-copy">
            <p className="hero-kicker mb-6 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-vela-gold sm:mb-8 sm:text-[10px]">
              <span aria-hidden="true" className="h-px w-8 bg-vela-gold" />
              A considered approach to time
            </p>

            <h1
              id="hero-title"
              className="max-w-3xl font-sans text-[clamp(3.4rem,7vw,6.8rem)] font-medium uppercase leading-[0.88] tracking-[-0.08em]"
            >
              <span className="sr-only">Time is money. We protect both.</span>
              <span aria-hidden="true" className="block">
                <span className="hero-line block">Time is</span>
                <span className="hero-line block text-vela-gold">money.</span>
                <span className="hero-line mt-4 block text-[0.37em] leading-[1.05] tracking-[-0.045em] sm:mt-5">
                  We protect both.
                </span>
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-relaxed text-vela-obsidian/75 sm:mt-9 sm:text-base">
              Senior professionals can spend 8 to 12 hours each week on
              coordination and administration. Vela Support manages diary
              priorities, correspondence, event logistics and representation,
              giving you more time for work that depends on your experience.
            </p>

            <Link
              className="button-interaction mt-7 inline-flex items-center gap-4 border-b border-vela-gold pb-2 font-mono text-[9px] uppercase tracking-[0.14em] transition-colors hover:text-vela-gold sm:mt-9"
              href="/#contact"
            >
              Review your time and priorities <ArrowUpRight />
            </Link>
          </div>

          <figure className="hero-image-frame relative mx-auto h-[min(48svh,480px)] min-h-[300px] w-full max-w-[560px] overflow-hidden bg-[#e6ded5] lg:ml-auto lg:h-[min(68svh,620px)]">
            <Image
              className="hero-image object-cover"
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=90"
              alt="A bright, professionally arranged office with natural materials and a clear view of the workspace"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              unoptimized
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-vela-obsidian/45 via-transparent to-vela-obsidian/5"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
              <span className="max-w-[220px] font-mono text-[9px] uppercase leading-relaxed tracking-[0.13em] sm:text-[10px]">
                Operational support for focused leadership
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.13em]">
                Vela Support · UK
              </span>
            </figcaption>
          </figure>
        </div>

        <div className="hero-detail grid border-y border-vela-obsidian/15 sm:grid-cols-3">
          <div className="border-b border-vela-obsidian/15 py-4 sm:border-b-0 sm:border-r sm:py-5 sm:pr-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-vela-taupe">
              Coordination time
            </p>
            <p className="mt-1 text-lg tracking-[-0.035em] sm:text-xl">
              8–12 <span className="text-sm text-vela-taupe">hrs / week</span>
            </p>
          </div>
          <div className="border-b border-vela-obsidian/15 py-4 sm:border-b-0 sm:border-r sm:px-5 sm:py-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-vela-taupe">
              Assumed hourly value
            </p>
            <p className="mt-1 text-lg tracking-[-0.035em] sm:text-xl">
              £150–£300 <span className="text-sm text-vela-taupe">/ hr</span>
            </p>
          </div>
          <div className="py-4 sm:py-5 sm:pl-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-vela-taupe">
              Annualised opportunity cost
            </p>
            <p className="mt-1 text-lg tracking-[-0.035em] sm:text-xl">
              £62.4k–£187.2k
            </p>
          </div>
        </div>

        <p className="mt-3 max-w-4xl font-mono text-[8px] uppercase leading-relaxed tracking-[0.08em] text-vela-taupe sm:text-[9px]">
          Illustrative calculation: weekly hours × assumed hourly value × 52
          weeks. Actual opportunity cost depends on each person&apos;s role and
          working pattern.
        </p>
      </div>
    </section>
  );
}
