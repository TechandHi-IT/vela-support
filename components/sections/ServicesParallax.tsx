"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import { gsap, useGSAP } from "@/lib/gsap";

const services = [
  {
    number: "01",
    title: "Executive PA & Diary Management",
    description:
      "We organise diary priorities, manage correspondence and escalate decisions requiring your attention. Regular reviews identify coordination hours and tasks suitable for delegation.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Light-filled executive office with a considered, minimal interior",
  },
  {
    number: "02",
    title: "Event Planning and Management",
    description:
      "We define the brief and budget, coordinate suppliers, prepare a run-of-show, plan contingencies and oversee delivery on site. One lead coordinates each stage.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Elegant private event arranged in a bright, refined space",
  },
  {
    number: "03",
    title: "Business Optimisation",
    description:
      "We review recurring administration, follow-ups, supplier coordination and internal workflows. Agreed improvements reduce friction and keep leadership time focused on priorities.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Modern collaborative workplace with natural light",
  },
  {
    number: "04",
    title: "Event Hosting and Representation",
    description:
      "We agree a briefing, responsibilities and decision authority before an event. We then represent you or your organisation and provide a concise handover afterwards.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Thoughtfully styled reception space ready to welcome guests",
  },
];

export default function ServicesParallax() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".service-card");

        cards.forEach((card, index) => {
          const image = card.querySelector<HTMLElement>(".service-image");
          if (!image) return;

          gsap.fromTo(
            card,
            { y: 26, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            },
          );

          gsap.fromTo(
            image,
            { yPercent: index % 2 === 0 ? 10 : -10 },
            {
              yPercent: index % 2 === 0 ? -10 : 10,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
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
      ref={sectionRef}
      className="bg-[#eeedf0] px-6 py-28 text-vela-obsidian sm:px-10 sm:py-36 lg:px-16"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-vela-taupe sm:text-xs">
              <span aria-hidden="true" className="h-px w-8 bg-vela-gold" />
              Executive and lifestyle services
            </p>
            <h2
              id="services-heading"
              className="max-w-3xl text-5xl font-medium uppercase leading-[0.88] tracking-[-0.07em] sm:text-7xl"
            >
              Support for
              <br />
              the working day<span className="text-vela-gold">.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-vela-taupe sm:text-base">
            Defined responsibilities, clear communication and regular reviews help keep each engagement aligned with your priorities.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {services.map((service) => (
            <article
              className="service-card group relative min-w-0 overflow-hidden bg-vela-silk"
              key={service.number}
            >
              <Link
                href="/#contact"
                className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vela-gold"
                aria-label={`Discuss ${service.title}`}
              >
                <div className="relative h-[260px] overflow-hidden sm:h-[340px]">
                  <Image
                    className="service-image scale-[1.14] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.2]"
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-neutral-950/55 via-transparent to-transparent"
                  />
                  <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-vela-gold font-mono text-xs text-vela-silk">
                    {service.number}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/70 text-white transition-colors group-hover:border-vela-gold group-hover:bg-vela-gold group-hover:text-vela-silk"
                  >
                    <ArrowUpRight />
                  </span>
                </div>
                <div className="flex items-start justify-between gap-6 p-5 sm:p-7">
                  <div>
                    <h3 className="max-w-md text-2xl font-medium leading-tight tracking-[-0.045em] sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-vela-taupe sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
