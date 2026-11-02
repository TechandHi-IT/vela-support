import Link from "next/link";

const legalLinks = [
  { href: "/privacy-policy", label: "GDPR Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/ip-infringement-policy", label: "IP Infringement Policy" },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-vela-obsidian px-4 pb-7 pt-12 text-vela-silk sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
      <div className="mx-auto max-w-[1500px]">
        <p className="mb-8 max-w-2xl font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-vela-taupe sm:text-[10px] sm:tracking-[0.18em]">
          Executive and lifestyle support, delivered with care and accountability.
        </p>

        <div className="mt-8 flex flex-col justify-between gap-8 border-t border-vela-silk/20 pt-6 md:mt-12 md:flex-row md:items-end">
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
