"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ArrowUpRight from "@/components/ui/ArrowUpRight";

const navigationGroups = [
  {
    title: "About Vela",
    links: [
      { href: "/about", label: "About overview" },
      { href: "/about#capacity", label: "Capacity and continuity" },
      { href: "/about#founder", label: "Founder profile" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services", label: "All services" },
      { href: "/services#executive-pa", label: "Executive PA and diary management" },
      { href: "/services#event-planning", label: "Event planning and management" },
      { href: "/services#business-optimisation", label: "Business optimisation" },
      { href: "/services#event-hosting", label: "Event hosting and representation" },
      { href: "/services#who-its-for", label: "Who we work with" },
    ],
  },
  {
    title: "Next steps",
    links: [
      { href: "/#journey", label: "Consultation process" },
      { href: "/#testimonials", label: "Client feedback preview" },
      { href: "/#contact", label: "Contact and enquiry form" },
    ],
  },
];

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const exploreMenuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const closeNavigation = () => {
    setMobileMenuOpen(false);
    if (exploreMenuRef.current) exploreMenuRef.current.open = false;
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        isScrolled
          ? "border-vela-taupe/25 bg-vela-silk shadow-[0_8px_24px_rgba(10,10,10,0.06)]"
          : "border-vela-silk/30 bg-vela-silk/90 shadow-none backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex min-h-[68px] max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-8 lg:min-h-[76px] lg:px-12">
        <Link
          href="/"
          className="shrink-0 font-serif text-[clamp(1.2rem,5vw,1.65rem)] tracking-[-0.06em] text-vela-obsidian"
          aria-label="Vela Support home"
          onClick={closeNavigation}
        >
          Vela Support<span className="text-vela-gold">.</span>
        </Link>

        <button
          aria-expanded={mobileMenuOpen}
          aria-controls="primary-navigation"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          className="button-interaction flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] border border-vela-taupe/35 lg:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          type="button"
        >
          <span className="h-px w-5 bg-vela-obsidian" />
          <span className="h-px w-5 bg-vela-obsidian" />
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primary navigation"
          className={`${
            mobileMenuOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-full max-h-[calc(100svh-68px)] flex-col overflow-y-auto border-b border-vela-taupe/30 bg-vela-silk px-4 pb-6 pt-3 shadow-lg sm:px-8 lg:static lg:flex lg:max-h-none lg:flex-row lg:items-center lg:gap-3 lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none xl:gap-6`}
        >
          {primaryLinks.map((link) => (
            <Link
              className="flex min-h-12 items-center border-b border-vela-taupe/20 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-vela-obsidian transition-colors hover:text-vela-gold lg:border-0 lg:px-1 lg:py-2"
              href={link.href}
              key={link.href}
              onClick={closeNavigation}
            >
              {link.label}
            </Link>
          ))}

          <details
            ref={exploreMenuRef}
            className="nav-dropdown relative border-b border-vela-taupe/20 lg:border-0"
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                event.currentTarget.open = false;
                event.currentTarget.querySelector("summary")?.focus();
              }
            }}
          >
            <summary className="flex min-h-12 cursor-pointer list-none items-center gap-2 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-vela-obsidian transition-colors hover:text-vela-gold lg:px-1 lg:py-2">
              Explore
              <span aria-hidden="true" className="text-xs">
                +
              </span>
            </summary>
            <div className="nav-dropdown-panel lg:absolute lg:left-1/2 lg:top-full lg:z-50 lg:w-[min(90vw,780px)] lg:-translate-x-1/2 lg:border lg:border-vela-taupe/25 lg:bg-vela-silk lg:p-6 lg:shadow-[0_18px_42px_rgba(10,10,10,0.12)]">
              <div className="grid gap-5 lg:grid-cols-[0.8fr_1.5fr_1fr] lg:gap-8">
                {navigationGroups.map((group) => (
                  <section key={group.title}>
                    <h2 className="border-b border-vela-taupe/30 pb-2 font-mono text-[9px] uppercase tracking-[0.14em] text-vela-gold">
                      {group.title}
                    </h2>
                    <ul className="mt-2">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            className="flex min-h-11 items-center py-2 text-sm leading-snug text-vela-obsidian transition-colors hover:text-vela-gold focus-visible:text-vela-gold focus-visible:outline-none"
                            href={link.href}
                            onClick={closeNavigation}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </details>

          <Link
            className="button-interaction mt-5 inline-flex min-h-12 w-fit items-center gap-4 bg-vela-obsidian px-4 py-3 font-mono text-[9px] uppercase tracking-[0.11em] text-vela-silk transition-colors hover:bg-vela-gold hover:text-vela-obsidian lg:ml-1 lg:mt-0 xl:px-5 xl:tracking-[0.13em]"
            href="/#contact"
            onClick={closeNavigation}
          >
            Request a consultation <ArrowUpRight />
          </Link>
        </nav>
      </div>
    </header>
  );
}
