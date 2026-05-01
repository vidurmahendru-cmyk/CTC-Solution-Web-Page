"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About Us" },
  { href: "#resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-outline-variant/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.span
            className="text-xl font-extrabold tracking-tighter text-primary font-headline cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            CTC Solutions
          </motion.span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-semibold tracking-tight font-body group transition-colors duration-200 ${
                  active ? "text-primary" : "text-secondary hover:text-primary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          {/* CTA */}
          <Link href="/contact" className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,72,141,0.28)" }}
              whileTap={{ scale: 0.97 }}
              className="architectural-gradient text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20"
            >
              Request Demo
            </motion.button>
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-on-surface"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block h-0.5 bg-current rounded-full"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/96 backdrop-blur-xl border-t border-outline-variant/20"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm font-semibold text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <button className="architectural-gradient text-white px-5 py-3 rounded-lg text-sm font-bold w-full mt-1">
                  Request Demo
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
