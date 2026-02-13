"use client";

import AnimatedSection from "./AnimatedSection";

const techStack = [
  "n8n",
  "Supabase",
  "Twilio",
  "OpenAI",
  "Claude",
  "Webflow",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Photo placeholder */}
          <AnimatedSection>
            <div className="relative mx-auto flex h-80 w-80 items-center justify-center lg:mx-0">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-accent-warm/10 blur-xl" />
              <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-accent/20 bg-surface">
                {/* Placeholder — replace with actual photo */}
                <div className="flex h-full w-full items-center justify-center text-6xl font-bold text-accent/20 font-heading">
                  D
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Bio */}
          <AnimatedSection delay={0.15}>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Meet Douglas
              </h2>

              <div className="mt-6 space-y-4 text-[#E8E8ED]/60 leading-relaxed">
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

              {/* Tech stack */}
              <div className="mt-8">
                <p className="text-xs font-medium uppercase tracking-widest text-[#E8E8ED]/30">
                  Built with
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/[0.08] bg-surface px-4 py-1.5 text-sm text-[#E8E8ED]/50"
                    >
                      {tech}
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
