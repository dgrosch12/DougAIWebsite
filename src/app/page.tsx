import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Problem from "@/components/Problem";
import Solutions from "@/components/Solutions";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import About from "@/components/About";
import IntakeForm from "@/components/IntakeForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <LogoMarquee />
        <Problem />
        <Solutions />
        <HowItWorks />
        <Results />
        <About />
        <IntakeForm />
      </main>
      <Footer />
    </>
  );
}
