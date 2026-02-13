"use client";

import { motion } from "framer-motion";

const stats = [
  { highlight: "23+", label: "systems deployed" },
  { highlight: "$2M+", label: "in client revenue influenced" },
  {
    highlight: "Trusted",
    label: "by agencies & service businesses nationwide",
  },
];

export default function Hero() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-20 text-center lg:pt-36 lg:pb-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-heading sm:text-5xl md:text-6xl lg:text-7xl"
        >
          I Build AI Systems That Make Your Business Money{" "}
          <span className="gradient-text">While You Sleep</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70 leading-relaxed sm:text-xl"
        >
          Productized AI automation for home service companies and marketing
          agencies. From 10-second lead response to fully automated content
          engines — deployed in days, not months.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#solutions"
            onClick={(e) => handleScroll(e, "#solutions")}
            className="w-full rounded-xl bg-accent px-10 py-4 text-center text-[1.0625rem] font-semibold text-accent-foreground transition-all hover:bg-accent-hover sm:w-auto"
          >
            See My Systems
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="w-full rounded-xl border border-border px-10 py-4 text-center text-[1.0625rem] font-semibold text-heading transition-all hover:border-accent/40 hover:bg-accent/5 sm:w-auto"
          >
            Book a Free AI Audit
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 border-t border-border pt-8"
        >
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="hidden h-1 w-1 rounded-full bg-accent/50 sm:block sm:-ml-2" />
                )}
                <span className="text-heading font-semibold text-lg">
                  {stat.highlight}
                </span>
                <span className="text-foreground/50 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
