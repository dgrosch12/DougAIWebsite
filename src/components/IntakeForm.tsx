"use client";

import { useState, useEffect, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface FormData {
  fullName: string;
  businessName: string;
  website: string;
  industry: string;
  headache: string;
  leadVolume: string;
  budget: string;
  email: string;
  interestedProduct: string;
}

const initialFormData: FormData = {
  fullName: "",
  businessName: "",
  website: "",
  industry: "",
  headache: "",
  leadVolume: "",
  budget: "",
  email: "",
  interestedProduct: "",
};

interface FormErrors {
  [key: string]: string;
}

export default function IntakeForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const product = searchParams.get("product");
    if (product) {
      setFormData((prev) => ({ ...prev, interestedProduct: product }));
    }
  }, [searchParams]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    if (!formData.businessName.trim())
      newErrors.businessName = "Business name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.industry) newErrors.industry = "Please select your industry";
    if (!formData.headache.trim())
      newErrors.headache = "Please describe your biggest challenge";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      setFormData(initialFormData);
    } catch {
      console.error("Form submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-border bg-surface-elevated px-4 py-3 text-base text-heading placeholder-foreground/35 transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15";
  const errorClasses = "mt-1 text-sm text-danger";

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-surface">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <p className="section-label">Get Started</p>
            <h2 className="mt-3 headline-xl text-heading">
              Tell Me About{" "}
              <span className="gradient-text">Your Business</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/60">
              Quick form, no sales calls. I&apos;ll send you a Loom video
              walking through exactly what I&apos;d automate and why.
            </p>
            <p className="mt-2 text-sm text-foreground/40">
              You&apos;ll have it in your inbox within 24 hours.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mx-auto mt-12 max-w-2xl">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl border border-border bg-surface-elevated p-8 lg:p-10 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                    <svg
                      className="h-7 w-7 text-accent"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-heading">
                    You&apos;re In!
                  </h3>
                  <p className="mt-3 text-foreground/60">
                    I&apos;ll review your submission and send you a personalized
                    Loom walkthrough within 24 hours. Keep an eye on your inbox.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 text-sm text-accent underline-offset-4 hover:underline"
                  >
                    Submit another response
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-border bg-surface-elevated p-8 lg:p-10 shadow-sm"
                  noValidate
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="mb-1.5 block text-sm font-medium text-heading/70"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={inputClasses}
                      />
                      {errors.fullName && (
                        <p className={errorClasses}>{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="businessName"
                        className="mb-1.5 block text-sm font-medium text-heading/70"
                      >
                        Business Name *
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Acme Services LLC"
                        className={inputClasses}
                      />
                      {errors.businessName && (
                        <p className={errorClasses}>{errors.businessName}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="website"
                        className="mb-1.5 block text-sm font-medium text-heading/70"
                      >
                        Website URL
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://yoursite.com"
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-heading/70"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@acmeservices.com"
                        className={inputClasses}
                      />
                      {errors.email && (
                        <p className={errorClasses}>{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="industry"
                        className="mb-1.5 block text-sm font-medium text-heading/70"
                      >
                        Industry *
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none`}
                      >
                        <option value="">Select your industry</option>
                        <option value="home-services">Home Services</option>
                        <option value="marketing-agency">
                          Marketing Agency
                        </option>
                        <option value="recruiting">
                          Recruiting / Staffing
                        </option>
                        <option value="web-design">
                          Web Design / SEO Agency
                        </option>
                        <option value="real-estate">Real Estate</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.industry && (
                        <p className={errorClasses}>{errors.industry}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="leadVolume"
                        className="mb-1.5 block text-sm font-medium text-heading/70"
                      >
                        Monthly Leads/Inquiries
                      </label>
                      <select
                        id="leadVolume"
                        name="leadVolume"
                        value={formData.leadVolume}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none`}
                      >
                        <option value="">Select range</option>
                        <option value="under-20">Under 20</option>
                        <option value="20-50">20-50</option>
                        <option value="50-100">50-100</option>
                        <option value="100+">100+</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="mb-1.5 block text-sm font-medium text-heading/70"
                      >
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none`}
                      >
                        <option value="">Select budget range</option>
                        <option value="under-1k">Under $1K</option>
                        <option value="1-3k">$1K - $3K</option>
                        <option value="3-5k">$3K - $5K</option>
                        <option value="5k+">$5K+</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="interestedProduct"
                        className="mb-1.5 block text-sm font-medium text-heading/70"
                      >
                        Interested In
                      </label>
                      <select
                        id="interestedProduct"
                        name="interestedProduct"
                        value={formData.interestedProduct}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none`}
                      >
                        <option value="">Select a product</option>
                        <option value="speed-to-lead">Speed-to-Lead System</option>
                        <option value="blog-automation">AI Blog Generator for SEO</option>
                        <option value="call-transcript-crm">Call Transcript CRM System</option>
                        <option value="website-foundation">Website Foundation System</option>
                        <option value="lead-sourcing">Lead Sourcing System</option>
                        <option value="meeting-summarizer">Enterprise Meeting Summarizer</option>
                        <option value="custom-build">Custom AI Build</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="headache"
                        className="mb-1.5 block text-sm font-medium text-heading/70"
                      >
                        What&apos;s your biggest operational headache right now? *
                      </label>
                      <textarea
                        id="headache"
                        name="headache"
                        value={formData.headache}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell me about the process or task that's eating up the most time in your business..."
                        className={`${inputClasses} resize-none`}
                      />
                      {errors.headache && (
                        <p className={errorClasses}>{errors.headache}</p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-7 w-full rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground transition-all hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting
                      ? "Submitting..."
                      : "Send It Over"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
