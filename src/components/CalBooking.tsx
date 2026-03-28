"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import AnimatedSection from "./AnimatedSection";

export default function CalBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: {
            "cal-bg": "#E8ECEE",
            "cal-bg-emphasis": "#FFFFFF",
            "cal-bg-subtle": "#F3F5F7",
            "cal-bg-muted": "#E8ECEE",
            "cal-text": "#172B36",
            "cal-text-emphasis": "#172B36",
            "cal-text-subtle": "#114C5A",
            "cal-border": "#C4CCD2",
            "cal-border-emphasis": "#C4CCD2",
            "cal-border-subtle": "#E8ECEE",
            "cal-brand": "#2A7DE1",
            "cal-brand-emphasis": "#1A8A9E",
            "cal-brand-text": "#FFFFFF",
            "cal-brand-subtle": "#E8ECEE",
          },
          dark: {
            "cal-brand": "#2A7DE1",
            "cal-brand-text": "#FFFFFF",
          },
        },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-surface">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <p className="section-label">Book a Call</p>
            <h2 className="mt-3 headline-xl text-heading">
              Let&apos;s Talk About{" "}
              <span className="gradient-text">Your Business</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/60">
              Pick a time that works for you. I&apos;ll review your answers
              beforehand so we can hit the ground running.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mx-auto mt-12 max-w-4xl">
            <Cal
              calLink="doug-grosch-vlvhax/30min"
              config={{ layout: "month_view", theme: "light" }}
              style={{
                width: "100%",
                height: "100%",
                overflow: "scroll",
              }}
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
