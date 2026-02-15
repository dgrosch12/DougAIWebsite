import type { TestimonialData } from "@/lib/products";

interface ProductTestimonialProps {
  testimonial: TestimonialData;
  accentColor: string;
  accentRgb: string;
}

export default function ProductTestimonial({
  testimonial,
  accentColor,
  accentRgb,
}: ProductTestimonialProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <span
          className="text-6xl font-bold leading-none"
          style={{ color: `rgba(${accentRgb}, 0.2)` }}
        >
          &ldquo;
        </span>
        <blockquote className="mt-2 text-xl font-medium text-heading leading-relaxed sm:text-2xl">
          {testimonial.quote}
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold"
            style={{
              background: `rgba(${accentRgb}, 0.15)`,
              color: accentColor,
            }}
          >
            {testimonial.initials}
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-heading">
              {testimonial.name}
            </p>
            <p className="text-xs text-foreground/50">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
