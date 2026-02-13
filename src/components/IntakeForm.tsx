"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
};

interface FormErrors {
  [key: string]: string;
}

export default function IntakeForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
      // [FORM_ENDPOINT] — Replace with your actual form submission endpoint
      // For now, logs to console and shows success state
      console.log("Form submitted:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitted(true);
      setFormData(initialFormData);
    } catch {
      console.error("Form submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-white/[0.08] bg-surface px-4 py-3 text-sm text-white placeholder-[#E8E8ED]/30 transition-all focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30";
  const errorClasses = "mt-1 text-xs text-[#FF4444]";

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-accent/[0.04] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s Find{" "}
              <span className="text-accent-warm">$10,000+</span> in Hidden
              Revenue in Your Business
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#E8E8ED]/50">
              Fill out this 2-minute form and I&apos;ll send you a personalized
              video walkthrough of exactly what I&apos;d automate — free, no
              strings attached.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mx-auto mt-12 max-w-2xl">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card rounded-2xl p-12 text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <svg
                      className="h-8 w-8 text-accent"
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
                  <h3 className="mt-6 text-2xl font-bold text-white">
                    You&apos;re In!
                  </h3>
                  <p className="mt-3 text-[#E8E8ED]/60">
                    I&apos;ll review your submission and send you a personalized
                    Loom walkthrough within 24 hours. Keep an eye on your inbox.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-accent underline-offset-4 hover:underline"
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
                  className="glass-card rounded-2xl p-8 sm:p-10"
                  noValidate
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="mb-1.5 block text-sm font-medium text-[#E8E8ED]/70"
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

                    {/* Business Name */}
                    <div>
                      <label
                        htmlFor="businessName"
                        className="mb-1.5 block text-sm font-medium text-[#E8E8ED]/70"
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

                    {/* Website */}
                    <div>
                      <label
                        htmlFor="website"
                        className="mb-1.5 block text-sm font-medium text-[#E8E8ED]/70"
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

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-[#E8E8ED]/70"
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

                    {/* Industry */}
                    <div>
                      <label
                        htmlFor="industry"
                        className="mb-1.5 block text-sm font-medium text-[#E8E8ED]/70"
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
                        <option value="recruiting">Recruiting</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.industry && (
                        <p className={errorClasses}>{errors.industry}</p>
                      )}
                    </div>

                    {/* Lead Volume */}
                    <div>
                      <label
                        htmlFor="leadVolume"
                        className="mb-1.5 block text-sm font-medium text-[#E8E8ED]/70"
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

                    {/* Budget */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="budget"
                        className="mb-1.5 block text-sm font-medium text-[#E8E8ED]/70"
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

                    {/* Headache */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="headache"
                        className="mb-1.5 block text-sm font-medium text-[#E8E8ED]/70"
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

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-8 w-full rounded-lg bg-accent px-8 py-4 text-base font-semibold text-[#0A0A0F] transition-all hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Submitting..." : "Get My Free AI Audit"}
                  </button>

                  {/* Calendly alternative */}
                  <div className="mt-6 text-center">
                    <p className="text-sm text-[#E8E8ED]/40">
                      Or, if you&apos;d rather talk live:
                    </p>
                    {/* [CALENDLY_LINK] — Replace with your Calendly URL */}
                    <a
                      href="[CALENDLY_LINK]"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-medium text-accent underline-offset-4 hover:underline"
                    >
                      Book a Call Instead
                    </a>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
