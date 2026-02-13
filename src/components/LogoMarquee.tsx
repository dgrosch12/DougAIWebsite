"use client";

const tools = [
  "n8n",
  "Supabase",
  "Twilio",
  "OpenAI",
  "Webflow",
  "Google",
  "Claude",
  "Zapier",
];

export default function LogoMarquee() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-foreground/40">
          Built With Industry-Leading Tools
        </p>
      </div>

      <div className="relative mt-8">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="marquee-track flex w-max gap-8">
          {[...tools, ...tools].map((tool, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-border bg-surface px-6 py-2.5 text-sm font-medium text-foreground/55 whitespace-nowrap"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
