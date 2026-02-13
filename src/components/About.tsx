"use client";

import AnimatedSection from "./AnimatedSection";

const techStack = [
  { name: "n8n", color: "bg-accent" },
  { name: "Supabase", color: "bg-[#10B981]" },
  { name: "Twilio", color: "bg-[#EF4444]" },
  { name: "OpenAI", color: "bg-[#8B5CF6]" },
  { name: "Claude", color: "bg-accent-warm" },
  { name: "Webflow", color: "bg-[#146EF5]" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-surface-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <AnimatedSection>
            <div className="relative mx-auto flex h-72 w-72 items-center justify-center lg:mx-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/10 to-[#8B5CF6]/8 blur-xl" />
              <div className="relative h-64 w-64 overflow-hidden rounded-full bg-surface border-2 border-border">
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-5xl font-bold font-heading bg-gradient-to-br from-accent to-[#8B5CF6] bg-clip-text text-transparent">
                    DG
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="text-center lg:text-left">
              <span className="section-eyebrow text-accent">ABOUT</span>
              <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
                Meet Douglas
              </h2>

              <div className="relative mt-5 space-y-4 text-foreground/70 text-[1.0625rem] leading-relaxed">
                <p>
                  I&apos;m Douglas — an AI automation engineer at
                  PricewaterhouseCoopers by day and a builder of AI systems for
                  small businesses by night.
                </p>
                <p>
                  I&apos;ve deployed 23+ production automation systems using n8n,
                  Supabase, Twilio, and leading AI APIs. Every system I build is
                  designed to run itself — so you can focus on growing your
                  business, not babysitting software.
                </p>
                <p>
                  My background in enterprise AI at PwC means I bring Fortune 500
                  rigor to small business problems.
                </p>
              </div>

              <div className="mt-7">
                <p className="text-sm font-medium uppercase tracking-widest text-foreground/40">
                  Built with
                </p>
                <div className="mt-3 flex flex-wrap justify-center gap-2.5 lg:justify-start">
                  {techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground/65"
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${tech.color}`}
                      />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
