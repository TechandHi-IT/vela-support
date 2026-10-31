"use client";

import Image from "next/image";
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
      <div className="mx-auto flex min-h-[76px] max-w-[1600px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 font-serif text-[1.65rem] tracking-[-0.06em] text-vela-obsidian"
          aria-label="Vela Support home"
          onClick={closeNavigation}
        >
          <Image
            src="/vela-sail.png"
            alt=""
            width={42}
            height={42}
            priority
          />
          <span>
            Vela Support<span className="text-vela-gold">.</span>
          </span>
        </Link>

        <button
          aria-expanded={mobileMenuOpen}
          aria-controls="primary-navigation"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          className="button-interaction flex h-12 w-12 flex-col items-center justify-center gap-[5px] border border-vela-taupe/35 md:hidden"
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
          } absolute left-0 right-0 top-full max-h-[calc(100svh-76px)] flex-col overflow-y-auto border-b border-vela-taupe/30 bg-vela-silk px-5 pb-6 pt-3 shadow-lg md:static md:flex md:max-h-none md:flex-row md:items-center md:gap-4 md:overflow-visible md:border-0 md:bg-transparent md:p-0 md:shadow-none lg:gap-6`}
        >
          {primaryLinks.map((link) => (
            <Link
              className="flex min-h-12 items-center border-b border-vela-taupe/20 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-vela-obsidian transition-colors hover:text-vela-gold md:border-0 md:px-1 md:py-2"
              href={link.href}
              key={link.href}
              onClick={closeNavigation}
            >
              {link.label}
            </Link>
          ))}

          <details
            ref={exploreMenuRef}
            className="nav-dropdown relative border-b border-vela-taupe/20 md:border-0"
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                event.currentTarget.open = false;
                event.currentTarget.querySelector("summary")?.focus();
              }
            }}
          >
            <summary className="flex min-h-12 cursor-pointer list-none items-center gap-2 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-vela-obsidian transition-colors hover:text-vela-gold md:px-1 md:py-2">
              Explore
              <span aria-hidden="true" className="text-xs">
                +
              </span>
            </summary>
            <div className="nav-dropdown-panel md:absolute md:left-1/2 md:top-full md:z-50 md:w-[min(90vw,780px)] md:-translate-x-1/2 md:border md:border-vela-taupe/25 md:bg-vela-silk md:p-6 md:shadow-[0_18px_42px_rgba(10,10,10,0.12)]">
              <div className="grid gap-5 md:grid-cols-[0.8fr_1.5fr_1fr] md:gap-8">
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
            className="button-interaction mt-5 inline-flex min-h-12 w-fit items-center gap-4 bg-vela-obsidian px-5 py-3 font-mono text-[9px] uppercase tracking-[0.13em] text-vela-silk transition-colors hover:bg-vela-gold hover:text-vela-obsidian md:ml-1 md:mt-0"
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
