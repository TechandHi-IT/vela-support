"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const legalLinks = [
  { href: "/privacy-policy", label: "GDPR Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/ip-infringement-policy", label: "IP Infringement Policy" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".footer-logo",
          { y: 20, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 92%",
            },
          },
        );
      });

      return () => media.revert();
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      className="overflow-hidden bg-vela-obsidian px-6 pb-7 pt-14 text-vela-silk sm:px-10 sm:pt-20 lg:px-16"
    >
      <div className="mx-auto max-w-[1500px]">
        <p className="mb-8 font-mono text-[9px] uppercase tracking-[0.18em] text-vela-taupe">
          Executive and lifestyle support, delivered with care and accountability.
        </p>
        <Image
          src="/vela-logo.png"
          alt="Vela Support UK"
          width={560}
          height={550}
          className="footer-logo h-auto w-[min(68vw,320px)]"
        />

        <div className="mt-12 flex flex-col justify-between gap-8 border-t border-vela-silk/20 pt-6 md:flex-row md:items-end">
          <div className="space-y-2 text-xs text-vela-taupe">
            <p>Review priorities, agree the scope and coordinate the details.</p>
            <a className="hover:text-vela-silk" href="mailto:info@velasupport.co.uk">
              info@velasupport.co.uk
            </a>
          </div>
          <nav aria-label="Legal" className="flex flex-col gap-3 sm:flex-row sm:gap-6">
            {legalLinks.map((link) => (
              <Link
                className="w-fit font-mono text-[9px] uppercase tracking-[0.1em] text-vela-taupe transition-colors hover:text-vela-silk"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-vela-taupe">
            © Vela Support
          </p>
        </div>
      </div>
    </footer>
  );
}
