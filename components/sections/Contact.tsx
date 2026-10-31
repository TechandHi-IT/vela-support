"use client";

import { useActionState, useRef } from "react";
import Link from "next/link";
import { submitContact, type ContactFormState } from "@/app/actions/contact";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import { gsap, useGSAP } from "@/lib/gsap";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

const services = [
  "Executive PA & Diary Management",
  "Event Planning and Management",
  "Business Optimisation",
  "Event Hosting and Representation",
];

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  "",
);
const whatsappMessage = encodeURIComponent(
  "Hello Vela Support, I'd like to explore how you can support me.",
);
const whatsappUrl = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  : `https://wa.me/?text=${whatsappMessage}`;

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState,
  );

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".contact-heading-line", {
          yPercent: 35,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        });

        gsap.from(".contact-form-panel", {
          y: 20,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-form-panel",
            start: "top 82%",
          },
        });
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  const fieldError = (name: keyof NonNullable<ContactFormState["fieldErrors"]>) =>
    state.fieldErrors?.[name];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="scroll-mt-24 relative overflow-hidden bg-vela-silk px-6 py-28 text-vela-obsidian sm:px-10 sm:py-36 lg:px-16"
      aria-labelledby="contact-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-12 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(184,134,11,0.12),transparent_68%)]"
      />
      <div className="relative mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-16 lg:h-fit">
          <p className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-vela-taupe sm:text-xs">
            <span aria-hidden="true" className="h-px w-8 bg-vela-gold" />
            Consultation and scope
          </p>
          <h2
            id="contact-heading"
            className="text-[clamp(2.8rem,6.8vw,6.5rem)] font-medium uppercase leading-[0.86] tracking-[-0.075em]"
          >
            <span className="block overflow-hidden">
              <span className="contact-heading-line block">
                LET&apos;S REVIEW
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="contact-heading-line block text-vela-taupe">
                YOUR TIME
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="contact-heading-line block">AND DEFINE</span>
            </span>
            <span className="block overflow-hidden">
              <span className="contact-heading-line block">
                THE SUPPORT.
              </span>
            </span>
          </h2>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-vela-taupe sm:text-lg">
            We will review where your time goes, estimate its opportunity cost
            using agreed assumptions, and map the operational work. Then we can
            define a support structure around your priorities and available
            capacity.
            <span className="mt-4 block font-medium text-vela-obsidian">
              We manage the details, so you can focus on priority work.
            </span>
          </p>

          <div className="mt-10 space-y-5 border-t border-vela-taupe/40 pt-6">
            <a
              className="button-interaction block w-fit text-sm underline decoration-vela-gold/60 underline-offset-4 hover:decoration-vela-gold"
              href="mailto:info@velasupport.co.uk"
            >
              info@velasupport.co.uk
            </a>
            <a
              className="button-interaction block w-fit text-sm underline decoration-vela-gold/60 underline-offset-4 hover:decoration-vela-gold"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact us on WhatsApp <ArrowUpRight />
            </a>
            {!whatsappNumber && (
              <p className="max-w-sm text-xs leading-relaxed text-vela-taupe">
                Set NEXT_PUBLIC_WHATSAPP_NUMBER to link directly to Vela
                Support; the current link opens WhatsApp with a prepared message.
              </p>
            )}
          </div>

          <div className="mt-10 overflow-hidden border border-vela-taupe/35 bg-[#eeedf0]">
            <iframe
              title="Google Maps search for Vela Support UK"
              src="https://maps.google.com/maps?q=Vela%20Support%20UK&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="h-52 w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Vela+Support+UK"
              target="_blank"
              rel="noopener noreferrer"
              className="button-interaction block px-4 py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-vela-taupe hover:text-vela-obsidian"
            >
              Google Business Profile · View map <ArrowUpRight />
            </a>
          </div>
        </div>

        <div className="contact-form-panel border border-vela-taupe/35 bg-white/70 p-6 sm:p-10">
          <div className="mb-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-vela-gold">
              Confidential Consultation Form
            </p>
            <p className="mt-3 text-sm leading-relaxed text-vela-taupe">
              Tell us about your priorities and the work you would like
              support with. We will review the requirements and discuss a
              defined scope. Any time-value estimate uses agreed assumptions.
              Your enquiry is sent to info@velasupport.co.uk.
            </p>
          </div>

          <form action={formAction} className="space-y-5">
            <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
              <label htmlFor="companyWebsite">Company website</label>
              <input
                autoComplete="off"
                id="companyWebsite"
                name="companyWebsite"
                tabIndex={-1}
                type="text"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  className="mb-2 block font-mono text-[9px] uppercase tracking-[0.14em]"
                  htmlFor="fullName"
                >
                  Full name
                </label>
                <input
                  autoComplete="name"
                  className="w-full border border-vela-taupe/40 bg-transparent px-3 py-3 text-sm outline-none transition-colors focus:border-vela-gold"
                  id="fullName"
                  maxLength={120}
                  name="fullName"
                  required
                />
                {fieldError("fullName") && (
                  <p className="mt-1 text-xs text-red-700">
                    {fieldError("fullName")}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="mb-2 block font-mono text-[9px] uppercase tracking-[0.14em]"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  autoComplete="email"
                  className="w-full border border-vela-taupe/40 bg-transparent px-3 py-3 text-sm outline-none transition-colors focus:border-vela-gold"
                  id="email"
                  maxLength={254}
                  name="email"
                  required
                  type="email"
                />
                {fieldError("email") && (
                  <p className="mt-1 text-xs text-red-700">
                    {fieldError("email")}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="mb-2 block font-mono text-[9px] uppercase tracking-[0.14em]"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  autoComplete="tel"
                  className="w-full border border-vela-taupe/40 bg-transparent px-3 py-3 text-sm outline-none transition-colors focus:border-vela-gold"
                  id="phone"
                  maxLength={40}
                  name="phone"
                  required
                  type="tel"
                />
                {fieldError("phone") && (
                  <p className="mt-1 text-xs text-red-700">
                    {fieldError("phone")}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="mb-2 block font-mono text-[9px] uppercase tracking-[0.14em]"
                  htmlFor="serviceType"
                >
                  Service type
                </label>
                <select
                  className="w-full border border-vela-taupe/40 bg-vela-silk px-3 py-3 text-sm outline-none transition-colors focus:border-vela-gold"
                  id="serviceType"
                  name="serviceType"
                  required
                  defaultValue=""
                >
                  <option disabled value="">
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {fieldError("serviceType") && (
                  <p className="mt-1 text-xs text-red-700">
                    {fieldError("serviceType")}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                className="mb-2 block font-mono text-[9px] uppercase tracking-[0.14em]"
                htmlFor="requirements"
              >
                Requirements and priorities
              </label>
              <textarea
                className="min-h-36 w-full resize-y border border-vela-taupe/40 bg-transparent px-3 py-3 text-sm outline-none transition-colors focus:border-vela-gold"
                id="requirements"
                maxLength={5000}
                name="requirements"
                required
              />
              {fieldError("requirements") && (
                <p className="mt-1 text-xs text-red-700">
                  {fieldError("requirements")}
                </p>
              )}
            </div>

            <p className="text-xs leading-relaxed text-vela-taupe">
              Your details are treated confidentially. Read our{" "}
              <Link
                className="underline underline-offset-2"
                href="/privacy-policy"
              >
                GDPR Privacy Policy
              </Link>
              .
            </p>

            <button
              className="button-interaction flex w-full items-center justify-between bg-vela-obsidian px-5 py-4 text-left font-mono text-[10px] uppercase tracking-[0.14em] text-vela-silk transition-colors hover:bg-vela-gold hover:text-vela-obsidian disabled:cursor-wait disabled:opacity-60"
              disabled={isPending}
              type="submit"
            >
              <span>{isPending ? "Sending securely…" : "Request a consultation"}</span>
              <ArrowUpRight />
            </button>

            <p
              aria-live="polite"
              className={`min-h-5 text-sm ${
                state.status === "success"
                  ? "text-green-800"
                  : state.status === "error"
                    ? "text-red-700"
                    : "text-vela-taupe"
              }`}
            >
              {state.message}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
