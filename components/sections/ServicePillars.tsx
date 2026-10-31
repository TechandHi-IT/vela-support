"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const services = [
  {
    id: "executive-pa",
    number: "01",
    title: "Executive PA & Diary Management",
    description:
      "We organise diary priorities, manage correspondence and escalate decisions requiring your attention. Regular reviews identify coordination hours and tasks suitable for delegation.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
    alt: "Bright, considered executive office interior",
  },
  {
    id: "event-planning",
    number: "02",
    title: "Event Planning and Management",
    description:
      "We define the brief and budget, coordinate suppliers, prepare a run-of-show, plan contingencies and oversee delivery on site. One lead coordinates each stage.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=85",
    alt: "Elegant private event arranged in a refined venue",
  },
  {
    id: "business-optimisation",
    number: "03",
    title: "Business Optimisation",
    description:
      "We review recurring administration, follow-ups, supplier coordination and internal workflows. Agreed improvements reduce friction and keep leadership time focused on priorities.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    alt: "Sunlit, contemporary business workspace",
  },
  {
    id: "event-hosting",
    number: "04",
    title: "Event Hosting and Representation",
    description:
      "We agree a briefing, responsibilities and decision authority before an event. We then represent you or your organisation and provide a concise handover afterwards.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85",
    alt: "Thoughtfully styled reception setting for guests",
  },
];

export default function ServicePillars() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".service-pillar").forEach((pillar) => {
          const image = pillar.querySelector<HTMLElement>(".service-pillar-image");
          const content = pillar.querySelector<HTMLElement>(".service-pillar-copy");

          if (content) {
            gsap.from(content, {
              x: pillar.classList.contains("service-pillar-reverse") ? 24 : -24,
              autoAlpha: 0,
              duration: 0.85,
              ease: "power2.out",
              scrollTrigger: {
                trigger: pillar,
                start: "top 78%",
              },
            });
          }

          if (image) {
            gsap.fromTo(
              image,
              { yPercent: 9, scale: 1.12 },
              {
                yPercent: -9,
                scale: 1.12,
                ease: "none",
                scrollTrigger: {
                  trigger: pillar,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              },
            );
          }
        });
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-vela-silk px-6 py-20 text-vela-obsidian sm:px-10 sm:py-28 lg:px-16"
      aria-label="Our four service pillars"
    >
      <div className="mx-auto max-w-[1400px]">
        {services.map((service, index) => (
          <article
            className={`service-pillar grid scroll-mt-24 items-center gap-8 border-t border-vela-taupe/35 py-10 md:grid-cols-2 md:gap-12 md:py-16 ${
              index % 2 === 1 ? "service-pillar-reverse" : ""
            }`}
            id={service.id}
            key={service.id}
          >
            <div
              className={`service-pillar-image-wrap relative h-[320px] overflow-hidden sm:h-[440px] ${
                index % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <Image
                className="service-pillar-image object-cover"
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-vela-obsidian/30 to-transparent"
              />
              <span className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.16em] text-white">
                Vela Support · {service.number}
              </span>
            </div>

            <div
              className={`service-pillar-copy py-4 ${
                index % 2 === 1 ? "md:order-1 md:pl-10 lg:pl-20" : "md:pr-10 lg:pr-20"
              }`}
            >
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.16em] text-vela-gold">
                Service {service.number}
              </p>
              <h2 className="max-w-xl font-serif text-4xl leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                {service.title}
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-vela-taupe sm:text-lg">
                {service.description}
              </p>
              <Link
                className="button-interaction mt-8 inline-flex items-center gap-4 border-b border-vela-gold/60 pb-2 font-mono text-[9px] uppercase tracking-[0.14em] transition-colors hover:border-vela-gold"
                href="/#contact"
              >
                Discuss your requirements <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
