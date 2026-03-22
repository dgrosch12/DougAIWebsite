"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
const navLinks = [
  { label: "Process", href: "#process" },
  { label: "Solutions", href: "#solutions" },
  { label: "Results", href: "#results" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    if (isHomepage) {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${href}`);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isHomepage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  const handleGetStarted = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileOpen(false);
    if (isHomepage) {
      const target = document.querySelector("#contact");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {isHomepage ? (
              <a
                href="#"
                onClick={handleLogoClick}
                className="text-lg font-bold tracking-tight text-heading"
              >
                Douglas<span className="gradient-text">AI</span>
              </a>
            ) : (
              <Link
                href="/"
                onClick={handleLogoClick}
                className="text-lg font-bold tracking-tight text-heading"
              >
                Douglas<span className="gradient-text">AI</span>
              </Link>
            )}

            {/* Desktop nav */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={isHomepage ? link.href : `/${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[0.9375rem] text-foreground/70 transition-colors hover:text-heading"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={isHomepage ? "#contact" : "/#contact"}
                onClick={handleGetStarted}
                className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent-hover"
              >
                Free AI Audit
              </a>
            </div>

            {/* Mobile hamburger */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative z-50 flex h-10 w-10 items-center justify-center"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                <div className="flex w-6 flex-col gap-1.5">
                  <span
                    className={`block h-0.5 w-full bg-heading transition-all duration-300 ${
                      mobileOpen ? "translate-y-2 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-full bg-heading transition-all duration-300 ${
                      mobileOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-full bg-heading transition-all duration-300 ${
                      mobileOpen ? "-translate-y-2 -rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile slide-in drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 z-40 flex h-full w-72 flex-col bg-background border-l border-border px-6 pt-24 md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={isHomepage ? link.href : `/${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="border-b border-border py-4 text-lg text-foreground/70 transition-colors hover:text-heading"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={isHomepage ? "#contact" : "/#contact"}
                onClick={handleGetStarted}
                className="mt-6 rounded-lg bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
              >
                Free AI Audit
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
