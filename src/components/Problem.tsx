"use client";

import AnimatedSection from "./AnimatedSection";

const problems = [
  {
    icon: (
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    headline: "Your Leads Go Cold",
    description:
      "You take 30 minutes to respond. Your competitors respond in 10 seconds. Every minute of delay drops conversion rates by 10%.",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    headline: "You're Overpaying for Content",
    description:
      "You're paying writers $3,000/month for 4 blog posts when AI can produce 30 at higher quality — with SEO built in.",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    headline: "Hiring Takes Forever",
    description:
      "You're screening 300 job applications by hand when AI can rank every candidate against your exact criteria in minutes.",
  },
];

export default function Problem() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <span className="section-eyebrow text-danger">THE PROBLEM</span>
            <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
              Sound Familiar?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/60">
              These problems cost you thousands every month.
            </p>
          </div>
        </AnimatedSection>

        <div className="section-container mt-14">
          <div className="grid gap-6 md:grid-cols-3">
            {problems.map((problem, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group relative h-full rounded-xl border border-danger/15 bg-danger/[0.03] p-7 lg:p-8 transition-colors hover:border-danger/25">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-danger/10 text-danger">
                    {problem.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-heading leading-snug">
                    {problem.headline}
                  </h3>
                  <p className="mt-2.5 text-foreground/60 text-[0.9375rem] leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
