import Hero from "@/components/sections/Hero";
import FounderNote from "@/components/sections/FounderNote";
import ServicesParallax from "@/components/sections/ServicesParallax";
import Journey from "@/components/sections/Journey";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <FounderNote />
      <ServicesParallax />
      <Journey />
      <Testimonials />
      <Contact />
    </main>
  );
}
