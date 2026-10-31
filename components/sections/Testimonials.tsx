"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const reviews = [
  {
    quote:
      "Diary priorities and correspondence are handled with care, giving me a clearer view of the decisions that need my attention.",
    clientType: "Executive support",
  },
  {
    quote:
      "The event plan was clear at every stage, from the first brief through supplier coordination and the final handover.",
    clientType: "Event management",
  },
  {
    quote:
      "Having one point of contact makes it easier to share context and keep regular work moving to schedule.",
    clientType: "Private client support",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".review-card",
          { y: 24, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.65,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 78%",
            },
          },
        );
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="scroll-mt-24 overflow-hidden bg-[#eeedf0] px-6 py-24 text-vela-obsidian sm:px-10 sm:py-32 lg:px-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 sm:flex-row sm:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-vela-taupe sm:text-xs">
              <span aria-hidden="true" className="h-px w-8 bg-vela-gold" />
              Client feedback preview
            </p>
            <h2
              id="testimonials-heading"
              className="text-5xl font-medium uppercase leading-[0.9] tracking-[-0.07em] sm:text-7xl"
            >
              Reviews
              <br />
              and feedback
            </h2>
          </div>
          <a
            href="https://www.trustpilot.com/review/velasupport.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="button-interaction inline-flex min-h-12 w-fit items-center gap-3 border border-vela-taupe/40 bg-vela-silk px-4 py-3 transition-colors hover:border-vela-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vela-gold"
            aria-label="Visit Vela Support on Trustpilot"
          >
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center bg-[#00b67a] text-xl leading-none text-white"
            >
              ★
            </span>
            <span>
              <span className="block text-sm font-semibold">Trustpilot</span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.12em] text-vela-taupe">
                Visit profile
              </span>
            </span>
            <span aria-hidden="true" className="ml-2 text-sm">
              ↗
            </span>
          </a>
        </div>

        <div
          role="note"
          className="mb-6 border-l-2 border-vela-gold bg-vela-silk/70 px-4 py-3 text-xs leading-relaxed text-vela-taupe sm:text-sm"
        >
          Sample review copy for layout preview only. These are mock reviews,
          not genuine Trustpilot reviews or client endorsements. Replace them
          with client-approved feedback before publication.
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {reviews.map((review, index) => (
            <article
              className="review-card flex min-h-[260px] flex-col border border-vela-taupe/30 bg-vela-silk p-6 transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(10,10,10,0.07)] sm:min-h-[290px] sm:p-8"
              key={review.clientType}
            >
              <div
                className="flex items-center gap-1 text-[#00b67a]"
                aria-label="Sample five-star rating"
              >
                {Array.from({ length: 5 }, (_, starIndex) => (
                  <span aria-hidden="true" key={starIndex}>
                    ★
                  </span>
                ))}
                <span className="ml-2 font-mono text-[8px] uppercase tracking-[0.12em] text-vela-taupe">
                  Sample
                </span>
              </div>
              <blockquote className="mt-7 flex-1 text-lg leading-relaxed tracking-[-0.02em] sm:text-xl">
                “{review.quote}”
              </blockquote>
              <div className="mt-6 flex items-end justify-between gap-4 border-t border-vela-taupe/30 pt-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-vela-taupe">
                  {review.clientType}
                </p>
                <span className="font-mono text-[9px] text-vela-gold">
                  0{index + 1}
                </span>
              </div>
            </article>
          ))}
        </div>

        <aside className="mt-8 grid gap-4 border-t border-vela-taupe/40 pt-6 sm:grid-cols-[auto_1fr] sm:gap-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-vela-gold">
            Client confidentiality
          </span>
          <p className="max-w-3xl text-sm leading-relaxed text-vela-taupe sm:text-base">
            Client privacy is central to our service. Names, identifying
            details and endorsements are shared only with permission.
          </p>
        </aside>
      </div>
    </section>
  );
}
