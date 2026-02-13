"use client";

import { motion } from "framer-motion";

const stats = [
  "23+ systems deployed",
  "$2M+ in client revenue influenced",
  "Trusted by agencies and service businesses nationwide",
];

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/[0.07] blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -20, 30, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.95, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent-warm/[0.05] blur-[100px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-20 text-center lg:pt-40 lg:pb-28">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          I Build AI Systems That Make Your Business Money{" "}
          <span className="gradient-text">While You Sleep</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-[#E8E8ED]/60 sm:text-xl"
        >
          Productized AI automation for home service companies and marketing
          agencies. From 10-second lead response to fully automated content
          engines — deployed in days, not months.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#solutions"
            onClick={(e) => handleScroll(e, "#solutions")}
            className="w-full rounded-lg bg-accent px-8 py-4 text-base font-semibold text-[#0A0A0F] transition-all hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] sm:w-auto"
          >
            See My Systems
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="w-full rounded-lg border border-white/[0.12] px-8 py-4 text-base font-semibold text-white transition-all hover:border-accent/40 hover:bg-white/[0.03] sm:w-auto"
          >
            Book a Free AI Audit
          </a>
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              {i > 0 && (
                <span className="hidden h-1 w-1 rounded-full bg-accent/50 sm:block" />
              )}
              <span className="text-sm text-[#E8E8ED]/50">{stat}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
