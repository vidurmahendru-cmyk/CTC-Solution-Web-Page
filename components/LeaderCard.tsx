"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface Leader {
  name: string;
  role: string;
  img: string;
  bio: string;
}

interface LeaderCardProps {
  leader: Leader;
  idx: number;
}

export default function LeaderCard({ leader, idx }: LeaderCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Trigger animation when the card is 100px into the viewport
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px" });

  return (
    <AnimatedSection delay={idx * 0.1}>
      <div 
        ref={containerRef}
        className={`group cursor-pointer ${isInView ? "is-in-view" : ""}`}
      >
        <div className="aspect-[4/5] bg-surface-container mb-6 rounded-2xl overflow-hidden relative border border-outline-variant/20 shadow-sm card-hover">
          <Image
            alt={`Portrait of ${leader.name}`}
            className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 ease-[0.25,0.46,0.45,0.94] lg:group-hover:grayscale-0 lg:group-hover:opacity-100 lg:group-hover:scale-105 max-lg:group-[.is-in-view]:grayscale-0 max-lg:group-[.is-in-view]:opacity-100 max-lg:group-[.is-in-view]:scale-105"
            width={400}
            height={500}
            unoptimized
            src={leader.img}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 lg:group-hover:opacity-100 max-lg:group-[.is-in-view]:opacity-100"></div>
        </div>
        <h4 className="text-xl font-headline font-bold text-on-background">{leader.name}</h4>
        <p className="text-sm font-semibold tracking-tight gradient-text">{leader.role}</p>
        <p className="text-xs text-on-surface-variant mt-3 leading-relaxed border-t border-outline-variant/20 pt-3">{leader.bio}</p>
      </div>
    </AnimatedSection>
  );
}
