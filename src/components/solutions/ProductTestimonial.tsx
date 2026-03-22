"use client";

import type { TestimonialData } from "@/lib/products";
import AnimatedSection from "@/components/AnimatedSection";

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
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <AnimatedSection>
          <div
            className="relative rounded-2xl border border-border border-l-4 bg-surface-elevated p-8 lg:p-12"
            style={{ borderLeftColor: accentColor }}
          >
            {/* Large quote mark */}
            <span
              className="absolute -top-5 left-8 text-8xl font-bold leading-none"
              style={{ color: `rgba(${accentRgb}, 0.15)` }}
            >
              &ldquo;
            </span>

            {/* Stars */}
            <div className="mb-6 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  style={{ color: accentColor }}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>

            <blockquote className="text-xl font-medium leading-relaxed text-heading sm:text-2xl">
              {testimonial.quote}
            </blockquote>

            {/* Author */}
            <div className="mt-6 border-t border-border pt-6">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold"
                  style={{
                    background: `rgba(${accentRgb}, 0.15)`,
                    color: accentColor,
                  }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-heading">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-foreground/50">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
