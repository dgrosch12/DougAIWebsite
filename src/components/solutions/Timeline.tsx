import type { TimelineStep } from "@/lib/products";

interface TimelineProps {
  steps: TimelineStep[];
  accentColor: string;
  accentRgb: string;
}

export default function Timeline({
  steps,
  accentColor,
  accentRgb,
}: TimelineProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-heading sm:text-3xl">
          How It Works
        </h2>

        <div className="relative mt-12">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: `rgba(${accentRgb}, 0.15)` }}
          />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <div key={i} className="relative pl-16">
                {/* Dot */}
                <div
                  className="absolute left-4 top-1 flex h-5 w-5 items-center justify-center rounded-full"
                  style={{ background: accentColor }}
                >
                  <div className="h-2 w-2 rounded-full bg-accent-foreground" />
                </div>

                <div>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: accentColor }}
                  >
                    {step.day}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] text-foreground/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
