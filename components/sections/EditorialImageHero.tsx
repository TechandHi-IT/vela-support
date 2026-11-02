"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type EditorialImageHeroProps = {
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
  description?: string;
};

export default function EditorialImageHero({
  eyebrow,
  title,
  image,
  imageAlt,
  description,
}: EditorialImageHeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".editorial-hero-image",
          { yPercent: -8, scale: 1.12 },
          {
            yPercent: 8,
            scale: 1.12,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
        );

        gsap.from(".editorial-hero-copy > *", {
          y: 16,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
        });
      });

      return () => media.revert();
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="relative isolate flex min-h-[min(680px,74svh)] items-end overflow-hidden bg-vela-obsidian text-vela-silk sm:min-h-[min(760px,78svh)]"
      aria-label={eyebrow}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          className="editorial-hero-image object-cover"
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          unoptimized
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-vela-obsidian/65 via-vela-obsidian/20 to-vela-obsidian/10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-vela-obsidian/55 via-transparent to-vela-obsidian/15"
        />
      </div>

      <div className="editorial-hero-copy mx-auto w-full max-w-[1600px] px-4 pb-14 pt-32 sm:px-8 sm:pb-16 sm:pt-40 lg:px-12 lg:pb-20">
        <p className="mb-5 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/80 sm:mb-6 sm:text-[10px] sm:tracking-[0.2em]">
          <span aria-hidden="true" className="h-px w-8 bg-vela-gold" />
          {eyebrow}
        </p>
        <h1 className="max-w-5xl text-balance font-serif text-[clamp(2.8rem,10vw,8rem)] leading-[0.94] tracking-[-0.055em] text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {description}
          </p>
        )}
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-5 right-4 font-mono text-[8px] uppercase tracking-[0.12em] text-white/70 sm:bottom-6 sm:right-8 sm:text-[9px] sm:tracking-[0.16em] lg:right-12"
      >
        London · United Kingdom
      </div>
    </section>
  );
}
