"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  duration?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.65,
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  const initial = {
    opacity: 0,
    y: direction === "up" ? 40 : 0,
    x:
      direction === "left" ? 40 : direction === "right" ? -40 : 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
