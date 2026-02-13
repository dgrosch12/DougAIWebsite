"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface Product {
  name: string;
  tagline: string;
  bullets: string[];
  pricing: string;
  bestFor: string;
  details: string;
}

const products: Product[] = [
  {
    name: "Speed-to-Lead System",
    tagline: "Connect with every lead within 10 seconds of form submission",
    bullets: [
      "Automated conference call connecting you to the lead instantly",
      "Hangup detection & intelligent callback system",
      "Spam filtering & lead qualification",
      "Works with any web form, CRM, or landing page",
    ],
    pricing: "Starting at $2,500 setup + $400/month",
    bestFor: "HVAC, plumbing, roofing, electrical, pest control, home services",
    details:
      "The Speed-to-Lead System monitors your web forms 24/7. The moment a lead submits a form, the system instantly initiates a conference call — connecting you directly with the prospect while they're still on your website. It includes intelligent hangup detection that triggers automatic callbacks, spam filtering to save you from junk leads, and full lead qualification scoring. Integrates with any web form, CRM, or landing page you're currently using.",
  },
  {
    name: "AI Blog Automation System",
    tagline: "Publish 30+ SEO-optimized blog posts per month on autopilot",
    bullets: [
      "AI-generated content matched to your brand voice",
      "Keyword research & SEO optimization built in",
      "Auto-publishes directly to Webflow, WordPress, or Brizy",
      "Performance tracking & content calendar management",
    ],
    pricing: "Starting at $3,000 setup + $750/month",
    bestFor: "Marketing agencies, web design firms, businesses that need content at scale",
    details:
      "Stop paying writers thousands for a handful of blog posts. This system generates 30+ high-quality, SEO-optimized articles per month — matched to your brand voice and target keywords. It handles keyword research, content planning, writing, editing, image selection, and publishing — all automatically. Posts are published directly to your Webflow, WordPress, or Brizy site on a schedule you control. Includes a performance dashboard to track rankings and traffic.",
  },
  {
    name: "AI Hiring & Screening System",
    tagline: "Screen hundreds of applicants in minutes, not days",
    bullets: [
      "AI scores and ranks every candidate against your criteria",
      "Custom screening rubrics tailored to your role",
      "Automated tier assignments (S/A/B/C/F)",
      "Integrates with Google Forms, Typeform, or any application source",
    ],
    pricing: "Starting at $3,000 setup + $500/month",
    bestFor: "Recruiting firms, growing companies, high-volume hiring",
    details:
      "Every applicant is automatically scored and ranked against your custom criteria the moment they apply. The system assigns tier ratings (S/A/B/C/F) based on screening rubrics you define — experience, skills, culture fit, deal-breakers, and more. You get a ranked shortlist of top candidates within minutes of receiving applications, not days. Works with Google Forms, Typeform, or any existing application source.",
  },
  {
    name: "Job Scraping & Lead Enrichment",
    tagline: "Find, verify, and enrich leads from any source automatically",
    bullets: [
      "Multi-source scraping (job boards, directories, Google Maps)",
      "Automated email finding & verification",
      "AI-powered data enrichment & qualification",
      "Clean, deduplicated lead lists delivered to your CRM",
    ],
    pricing: "Starting at $2,000 setup + $300/month",
    bestFor: "Recruiting firms, sales teams, agencies doing outbound",
    details:
      "This system automatically scrapes leads from job boards, business directories, Google Maps, and other public sources. Each lead is enriched with verified email addresses, company data, and AI-powered qualification scores. Duplicates are removed, data is cleaned, and the final lead lists are delivered directly to your CRM — ready for outreach. Perfect for recruiting firms and sales teams doing outbound prospecting at scale.",
  },
  {
    name: "Custom AI Build",
    tagline: "Got a unique workflow? I'll automate it.",
    bullets: [
      "End-to-end discovery, design, and deployment",
      "Built on n8n, Supabase, and leading AI APIs",
      "Full ownership of your system — no vendor lock-in",
      "Ongoing support & optimization available",
    ],
    pricing: "Starting at $5,000+",
    bestFor: "Any business with repetitive processes eating up time and money",
    details:
      "If you have a unique workflow that doesn't fit neatly into one of my productized systems, I'll build something custom. We start with a discovery session to map your process, then I design and deploy a tailored automation system. Everything is built on n8n, Supabase, and leading AI APIs — you own the entire system with no vendor lock-in. Ongoing support and optimization are available to keep everything running smoothly.",
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className="glass-card group relative flex h-full flex-col rounded-2xl p-8"
      >
        {/* Hover glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none" />

        <div className="relative flex flex-1 flex-col">
          <h3 className="text-xl font-bold text-white">{product.name}</h3>
          <p className="mt-2 text-[#E8E8ED]/60">{product.tagline}</p>

          <ul className="mt-5 flex-1 space-y-3">
            {product.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#E8E8ED]/70">
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-white/[0.06] pt-5">
            <p className="text-lg font-bold text-accent">{product.pricing}</p>
            <p className="mt-1 text-xs text-[#E8E8ED]/40">
              Best for: {product.bestFor}
            </p>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-5 rounded-lg border border-white/[0.1] px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-accent/40 hover:bg-accent/5"
          >
            {expanded ? "Show Less" : "Learn More"}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-sm leading-relaxed text-[#E8E8ED]/50">
                  {product.details}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              AI Systems You Can Buy{" "}
              <span className="gradient-text">Today</span>
            </h2>
            <p className="mt-4 text-lg text-[#E8E8ED]/50">
              Productized solutions — pick what you need, deployed in days.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {products.map((product, i) => (
            <ProductCard key={i} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
