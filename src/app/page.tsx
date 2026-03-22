import { Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Process from "@/components/Process";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
import IntakeForm from "@/components/IntakeForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <LogoMarquee />
        <section id="process">
          <Process />
        </section>
        <Solutions />
        <section id="results">
          <Testimonials />
        </section>
        <Suspense>
          <IntakeForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
