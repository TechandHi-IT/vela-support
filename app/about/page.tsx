import type { Metadata } from "next";
import Link from "next/link";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import EditorialImageHero from "@/components/sections/EditorialImageHero";

export const metadata: Metadata = {
  title: "About Vela Support | Discreet Executive & Lifestyle Support",
  description:
    "Meet Vela Support UK: discreet, founder-led executive support, lifestyle coordination and event services for people who value clarity, control and time.",
};

export default function AboutPage() {
  return (
    <main>
      <EditorialImageHero
        eyebrow="About Vela Support"
        title="We protect the hours your work depends on."
        image="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=2400&q=90"
        imageAlt="Architectural view of London framed by classic city rooftops"
      />

      <section
        id="capacity"
        className="scroll-mt-24 bg-[#f0e7e2] px-6 py-24 text-vela-obsidian sm:px-10 sm:py-36 lg:px-16"
      >
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.65fr_1.35fr] md:gap-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-vela-taupe">
            Capacity and continuity
          </p>
          <div>
            <h2 className="font-serif text-5xl leading-[0.98] tracking-[-0.05em] sm:text-7xl">
              Deliberate capacity.
              <br />
              Consistent service.
            </h2>
            <p className="mt-8 max-w-3xl text-lg leading-[1.75] text-vela-taupe sm:text-xl">
              Executive and lifestyle support relies on context, timely
              responses and continuity. We set a considered limit on active
              engagements and review available capacity before accepting new
              work. This allows us to plan the attention and response standards
              each client requires.
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-[1.75] text-vela-taupe sm:text-xl">
              Every engagement has a named point of contact, clear
              responsibilities and agreed response expectations. We retain
              working context through delivery and review priorities regularly
              with each client.
            </p>
          </div>
        </div>
      </section>

      <section
        id="founder"
        className="scroll-mt-24 bg-vela-silk px-6 py-24 text-vela-obsidian sm:px-10 sm:py-36 lg:px-16"
      >
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col justify-center py-4 lg:py-10">
            <p className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-vela-taupe">
              <span aria-hidden="true" className="h-px w-8 bg-vela-gold" />
              How the work is delivered
            </p>
            <h2 className="font-serif text-5xl leading-[0.98] tracking-[-0.05em] sm:text-7xl">
              Elevating
              <br />
              every detail<span className="text-vela-gold">.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-[1.75] text-vela-taupe sm:text-xl">
              At Vela Support UK, we manage diary priorities, correspondence,
              event logistics and representation. We begin with a review of
              your requirements, define responsibilities and response
              expectations in a written scope, then deliver against that
              agreement. Regular reviews keep priorities and capacity visible.
              We use your working pattern and assumptions to estimate
              opportunity cost, with actual outcomes depending on how
              recovered time is used.
            </p>
            <p className="mt-8 border-t border-vela-taupe/35 pt-5 font-mono text-[10px] uppercase tracking-[0.16em]">
              Dolapo Balade, Founder of Vela Support
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A] px-6 py-20 text-vela-silk sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-vela-gold">
              Start with the numbers
            </p>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
              Where is your time going, and what does it cost?
            </h2>
          </div>
          <Link
            className="button-interaction inline-flex w-fit items-center gap-5 border border-vela-silk/35 px-5 py-4 font-mono text-[9px] uppercase tracking-[0.14em] transition-colors hover:border-vela-gold hover:text-vela-gold"
            href="/#contact"
          >
            Review your requirements <ArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
