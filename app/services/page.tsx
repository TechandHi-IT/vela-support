import type { Metadata } from "next";
import Link from "next/link";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import EditorialImageHero from "@/components/sections/EditorialImageHero";
import ServicePillars from "@/components/sections/ServicePillars";

const audience = [
  "Founders, principals, and senior executives",
  "Individuals who value efficiency, privacy, and refined execution",
  "International families and business leaders",
  "Clients without an established UK office or local support team",
];

export const metadata: Metadata = {
  title: "Services | Executive and Lifestyle Support | Vela Support",
  description:
    "Explore Vela Support's executive PA, event management, business optimisation, and event representation services.",
};

export default function ServicesPage() {
  return (
    <main>
      <EditorialImageHero
        eyebrow="Executive and lifestyle support"
        title="Support, structured around your priorities."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=90"
        imageAlt="Minimal, elegant office interior with natural light and architectural lines"
        description="We map the operational work, define the scope and confirm capacity before taking responsibility for delivery."
      />

      <section className="bg-[#f0e7e2] px-6 py-20 text-vela-obsidian sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-vela-taupe">
            The Vela approach
          </p>
          <div>
            <h2 className="font-serif text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">
              Clear scope.
              <br />
              Consistent delivery.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-vela-taupe sm:text-lg">
              Each engagement begins with a review of recurring work,
              decisions and coordination. We agree responsibilities, working
              arrangements and available capacity in a written scope. Time
              value estimates use agreed assumptions and are reviewed in
              context.
            </p>
          </div>
        </div>
      </section>

      <ServicePillars />

      <section
        id="who-its-for"
        className="scroll-mt-24 bg-[#f0e7e2] px-6 py-24 text-vela-obsidian sm:px-10 sm:py-36 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-vela-taupe">
            A considered fit
          </p>
          <h2 className="text-center font-serif text-5xl leading-[0.98] tracking-[-0.05em] sm:text-7xl">
            Who this service is for
          </h2>
          <ul className="mx-auto mt-12 max-w-4xl">
            {audience.map((item, index) => (
              <li
                className="grid gap-3 border-t border-vela-taupe/35 py-6 sm:grid-cols-[70px_1fr] sm:items-center sm:py-8"
                key={item}
              >
                <span className="font-mono text-[10px] tracking-[0.14em] text-vela-gold">
                  0{index + 1}
                </span>
                <span className="text-xl leading-snug text-vela-taupe sm:text-2xl">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-vela-silk px-6 py-20 text-center text-vela-obsidian sm:px-10 sm:py-28">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-vela-gold">
          Discuss your requirements
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
          Let&apos;s review your priorities and support requirements.
        </h2>
        <Link
          className="button-interaction mt-8 inline-flex items-center gap-5 bg-vela-obsidian px-6 py-4 font-mono text-[9px] uppercase tracking-[0.14em] text-vela-silk transition-colors hover:bg-vela-gold hover:text-vela-obsidian"
          href="/#contact"
        >
          Request a consultation <ArrowUpRight />
        </Link>
      </section>
    </main>
  );
}
