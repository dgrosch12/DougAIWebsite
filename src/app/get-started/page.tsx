import { Suspense } from "react";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import IntakeForm from "@/components/IntakeForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Get Started — Douglas AI",
  description:
    "Quick form, no sales calls. I'll send you a Loom walkthrough of exactly what I'd automate in your business.",
};

export default function GetStartedPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <Suspense>
          <IntakeForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
