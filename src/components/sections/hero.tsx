"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 glow-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-border/50 bg-card/50 text-xs font-medium tracking-wide text-accent">
            Digital Agency for Growth
          </span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          We build digital systems that <span className="gradient-text">generate clients automatically</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop losing leads to slow websites and broken processes. We engineer high-converting platforms and automated workflows tailored for modern SMEs.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-black px-8 py-4 rounded-full font-semibold transition-all hover:scale-[1.02] shadow-lg shadow-accent/20">
            Book a Free Call <ArrowRight size={18} />
          </Link>
          <Link href="/portfolio" className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-border hover:border-white/40 hover:bg-card/50 transition-all">
            View Case Studies
          </Link>
        </motion.div>
      </div>
    </section>
  );
}