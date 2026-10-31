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
      className="relative isolate flex min-h-[min(760px,78svh)] items-end overflow-hidden bg-vela-obsidian text-vela-silk"
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

      <div className="editorial-hero-copy mx-auto w-full max-w-[1600px] px-6 pb-12 pt-40 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
        <p className="mb-6 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/80 sm:text-[10px]">
          <span aria-hidden="true" className="h-px w-8 bg-vela-gold" />
          {eyebrow}
        </p>
        <h1 className="max-w-5xl font-serif text-[clamp(3.2rem,8vw,8rem)] leading-[0.92] tracking-[-0.055em] text-white">
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
        className="absolute bottom-6 right-6 font-mono text-[9px] uppercase tracking-[0.16em] text-white/70 sm:right-10 lg:right-16"
      >
        London · United Kingdom
      </div>
    </section>
  );
}
