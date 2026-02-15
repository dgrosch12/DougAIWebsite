export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface BeforeAfterItem {
  before: string;
  after: string;
}

export interface CaseStudyData {
  headline: string;
  metrics: { value: string; label: string }[];
  description: string;
  industry: string;
}

export interface TestimonialData {
  quote: string;
  name: string;
  company: string;
  role: string;
  initials: string;
}

export interface TimelineStep {
  day: string;
  title: string;
  description: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  heroDescription: string;
  features: Feature[];
  pricing: string;
  bestFor: string;
  details: string;
  videoPlaceholderText: string;
  beforeAfter: BeforeAfterItem[];
  caseStudy: CaseStudyData;
  testimonial: TestimonialData;
  timeline: TimelineStep[];
  category: string;
  pricingNote?: string;
}

export interface CardTheme {
  tintClass: string;
  accentColor: string;
  accentRgb: string;
  iconBg: string;
  iconColor: string;
}

export const products: Product[] = [
  {
    slug: "speed-to-lead",
    name: "Speed-to-Lead System",
    tagline: "Connect with every lead within 10 seconds of form submission",
    heroDescription:
      "Monitors your web forms around the clock and connects you to new leads via conference call within 10 seconds of form submission. Includes smart callback logic, spam filtering, and lead scoring.",
    features: [
      {
        title: "Instant Conference Call",
        description:
          "The moment a lead submits a form, the system initiates a conference call connecting you directly with the prospect — while they're still on your site.",
        icon: "phone",
      },
      {
        title: "Intelligent Callback",
        description:
          "Hangup detection triggers automatic callbacks so you never lose a lead. If they don't answer, the system retries on a smart schedule.",
        icon: "refresh",
      },
      {
        title: "Spam Filtering & Qualification",
        description:
          "AI-powered filtering scores every lead before connecting you. Junk leads are blocked, qualified leads get priority routing.",
        icon: "shield",
      },
      {
        title: "Universal Integration",
        description:
          "Works with any web form, CRM, or landing page you currently use. No ripping out your existing tech stack.",
        icon: "plug",
      },
    ],
    pricing: "Starting at $2,500 setup + $400/month",
    bestFor: "HVAC, plumbing, roofing, electrical, pest control, home services",
    details:
      "Watches your web forms around the clock. The moment someone submits, the system dials you and the lead into a conference call — while they're still on your site.",
    videoPlaceholderText:
      "Watch how a lead goes from form submission to live phone call in under 10 seconds",
    beforeAfter: [
      {
        before: "30+ minute average response time to new leads",
        after: "Under 10 seconds — while the lead is still on your site",
      },
      {
        before: "Leads go cold before your team even sees the notification",
        after: "Automatic conference call connects you instantly",
      },
      {
        before: "No way to know which leads are real vs. spam",
        after: "AI qualification scores every lead before it reaches you",
      },
      {
        before: "Missed calls and voicemails that never get returned",
        after: "Intelligent callback system retries automatically",
      },
    ],
    caseStudy: {
      headline: "Elite HVAC Solutions increased close rate by 35%",
      metrics: [
        { value: "35%", label: "Increase in close rate" },
        { value: "10s", label: "Average response time" },
        { value: "$47K", label: "Additional revenue in 90 days" },
        { value: "12x", label: "ROI on system cost" },
      ],
      description:
        "Elite HVAC was losing 60% of their web leads to slow follow-up. After deploying Speed-to-Lead, they connected with every lead within 10 seconds. Close rate jumped 35% in the first month, generating $47K in additional revenue within 90 days.",
      industry: "Home Services",
    },
    testimonial: {
      quote:
        "Douglas built our speed-to-lead system and our close rate jumped 35% in the first month. We were leaving so much money on the table before.",
      name: "Marcus T.",
      company: "Elite HVAC Solutions",
      role: "Owner",
      initials: "MT",
    },
    timeline: [
      {
        day: "Day 1",
        title: "Discovery & Setup",
        description:
          "We map your lead sources, configure form monitoring, and set up your call routing preferences.",
      },
      {
        day: "Day 2-3",
        title: "Integration & Testing",
        description:
          "System is connected to your forms and CRM. We run live tests with your team to dial in the experience.",
      },
      {
        day: "Day 4-5",
        title: "Go Live & Monitor",
        description:
          "System goes live. We monitor the first 48 hours of real leads, fine-tuning spam filters and callback timing.",
      },
      {
        day: "Ongoing",
        title: "Optimize & Support",
        description:
          "Monthly performance reviews, filter tuning, and priority support. Your system gets smarter over time.",
      },
    ],
    category: "Lead Response",
    pricingNote: "Includes 30 days of monitoring and support",
  },
  {
    slug: "blog-automation",
    name: "AI Blog Automation System",
    tagline: "Publish 30+ SEO-optimized blog posts per month on autopilot",
    heroDescription:
      "Publishes 30+ SEO-optimized articles per month to your CMS, matched to your brand voice and target keywords. Replaces the $3K/month freelance writer with a system that runs itself.",
    features: [
      {
        title: "Brand Voice Matching",
        description:
          "AI learns your tone, style, and terminology. Every article sounds like your best writer — consistently, at scale.",
        icon: "pen",
      },
      {
        title: "SEO Built In",
        description:
          "Keyword research, meta descriptions, internal linking, and content structure are optimized automatically for every post.",
        icon: "search",
      },
      {
        title: "Auto-Publish to Your CMS",
        description:
          "Posts are published directly to Webflow, WordPress, or Brizy on a schedule you control. Zero manual uploads.",
        icon: "upload",
      },
      {
        title: "Performance Dashboard",
        description:
          "Track rankings, traffic, and engagement for every article. See what's working and double down.",
        icon: "chart",
      },
    ],
    pricing: "Starting at $3,000 setup + $750/month",
    bestFor:
      "Marketing agencies, web design firms, businesses that need content at scale",
    details:
      "Generates 30+ articles per month, optimized for search and matched to your voice. Published straight to your CMS on a schedule you set.",
    videoPlaceholderText:
      "See how 30+ blog posts go from keyword research to published — fully automated",
    beforeAfter: [
      {
        before: "Paying writers $3,000/month for 4 blog posts",
        after: "30+ SEO-optimized posts per month at a fraction of the cost",
      },
      {
        before: "Weeks of back-and-forth on edits and revisions",
        after: "Content published on autopilot, matched to your brand voice",
      },
      {
        before: "No keyword strategy — writing whatever feels right",
        after: "AI-driven keyword research targeting high-intent searches",
      },
      {
        before: "Manual uploads, formatting, and scheduling for every post",
        after: "Auto-published to your CMS on a schedule you set",
      },
    ],
    caseStudy: {
      headline: "Bright Digital Agency tripled organic traffic in 90 days",
      metrics: [
        { value: "3x", label: "Organic traffic increase" },
        { value: "30+", label: "Posts published per month" },
        { value: "87%", label: "Reduction in content costs" },
        { value: "90", label: "Days to measurable results" },
      ],
      description:
        "Bright Digital was spending $3,000/month on freelance writers producing just 4 posts. After switching to AI Blog Automation, they published 30+ monthly posts and tripled their organic traffic in 90 days — while cutting content costs by 87%.",
      industry: "Marketing Agency",
    },
    testimonial: {
      quote:
        "We went from publishing 4 blog posts a month to 30+ — all optimized, on-brand, and hands-free. Our organic traffic tripled in 90 days.",
      name: "Sarah K.",
      company: "Bright Digital Agency",
      role: "Founder",
      initials: "SK",
    },
    timeline: [
      {
        day: "Day 1-2",
        title: "Brand Voice & Keywords",
        description:
          "We analyze your existing content, extract your brand voice, and build a keyword strategy aligned with your business goals.",
      },
      {
        day: "Day 3-5",
        title: "System Build & CMS Integration",
        description:
          "We configure the content pipeline and connect it to your CMS. First batch of test articles are generated for your review.",
      },
      {
        day: "Day 6-7",
        title: "Calibration & Launch",
        description:
          "You review sample posts, we fine-tune voice and quality. Then we flip the switch and start publishing on schedule.",
      },
      {
        day: "Ongoing",
        title: "Optimize & Scale",
        description:
          "Monthly performance reports, keyword refreshes, and content calendar updates. Scale up or adjust as you grow.",
      },
    ],
    category: "Content",
    pricingNote: "Includes keyword research and CMS setup",
  },
  {
    slug: "custom-build",
    name: "Custom AI Build",
    tagline: "Got a unique workflow? I'll automate it.",
    heroDescription:
      "Don't see what you need above? I'll build it from scratch. End-to-end — discovery, build, deployment. Runs on n8n, Supabase, and best-in-class AI APIs. You own everything.",
    features: [
      {
        title: "End-to-End Discovery",
        description:
          "We map your entire workflow, identify bottlenecks, and design a system that eliminates manual steps.",
        icon: "map",
      },
      {
        title: "Built on Open Infrastructure",
        description:
          "Everything runs on n8n, Supabase, and leading AI APIs. No proprietary platforms. You own the code.",
        icon: "code",
      },
      {
        title: "No Vendor Lock-In",
        description:
          "Full ownership of your system. Export, modify, or migrate at any time. Your data, your infrastructure.",
        icon: "unlock",
      },
      {
        title: "Ongoing Support Available",
        description:
          "Optional monthly support for monitoring, optimization, and iteration as your business evolves.",
        icon: "headset",
      },
    ],
    pricing: "Starting at $5,000+",
    bestFor:
      "Any business with repetitive processes eating up time and money",
    details:
      "Got a workflow that doesn't fit the productized systems? I'll build it custom — end-to-end, from discovery to deployment.",
    videoPlaceholderText:
      "See how a custom AI system is scoped, built, and deployed in days — not months",
    beforeAfter: [
      {
        before: "Hours spent on repetitive manual processes every week",
        after: "Fully automated workflow that runs itself 24/7",
      },
      {
        before: "Locked into expensive SaaS tools that don't fit",
        after: "Custom-built system you own — no monthly platform fees",
      },
      {
        before: "Months-long development timelines with dev agencies",
        after: "Deployed in days, not months — using proven automation patterns",
      },
      {
        before: "No visibility into what's happening in your workflows",
        after: "Full monitoring, logging, and alerting built in",
      },
    ],
    caseStudy: {
      headline: "A property management firm saved 35 hours per week",
      metrics: [
        { value: "35hrs", label: "Saved per week" },
        { value: "5 days", label: "From discovery to deployment" },
        { value: "$8K/mo", label: "In operational savings" },
        { value: "100%", label: "System ownership" },
      ],
      description:
        "A property management firm was spending 35+ hours per week on tenant communication, maintenance requests, and vendor coordination. We built a custom AI system that automated 90% of these workflows — deployed in 5 days with full ownership.",
      industry: "Property Management",
    },
    testimonial: {
      quote:
        "Douglas built us a system that replaced 3 different SaaS tools we were paying for. It does exactly what we need, and we own it completely.",
      name: "Rachel M.",
      company: "Keystone Properties",
      role: "Operations Manager",
      initials: "RM",
    },
    timeline: [
      {
        day: "Day 1",
        title: "Discovery Session",
        description:
          "We map your workflow end-to-end, identify the highest-impact automation opportunities, and define success criteria.",
      },
      {
        day: "Day 2-3",
        title: "System Design & Build",
        description:
          "Architecture is designed, automations are built, and integrations are configured. You get progress updates throughout.",
      },
      {
        day: "Day 4-5",
        title: "Testing & Deployment",
        description:
          "System is tested with real data, edge cases are handled, and we deploy to production with monitoring in place.",
      },
      {
        day: "Ongoing",
        title: "Support & Iteration",
        description:
          "Optional monthly support for monitoring, performance optimization, and adding new capabilities as your needs evolve.",
      },
    ],
    category: "Custom",
    pricingNote: "Scope and pricing determined during discovery",
  },
];

export const cardThemes: CardTheme[] = [
  {
    tintClass: "card-blue",
    accentColor: "#00D4FF",
    accentRgb: "0,212,255",
    iconBg: "bg-[#00D4FF]/10",
    iconColor: "text-[#00D4FF]",
  },
  {
    tintClass: "card-emerald",
    accentColor: "#10B981",
    accentRgb: "16,185,129",
    iconBg: "bg-[#10B981]/10",
    iconColor: "text-[#10B981]",
  },
  {
    tintClass: "card-rose",
    accentColor: "#F43F5E",
    accentRgb: "244,63,94",
    iconBg: "bg-[#F43F5E]/10",
    iconColor: "text-[#F43F5E]",
  },
];
