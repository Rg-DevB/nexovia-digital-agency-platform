"use client";
import { motion } from "framer-motion";

const logos = ["Stripe", "Webflow", "Laravel", "Shopify", "HubSpot", "Vercel"];

export default function Trust() {
  return (
    <section className="py-12 border-y border-border/30 bg-card/20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs font-medium text-muted mb-8 uppercase tracking-widest">Trusted by forward-thinking companies</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
          {logos.map((name, i) => (
            <motion.span key={i} whileHover={{ scale: 1.1, opacity: 1 }} className="text-xl font-bold tracking-tight text-white/80">{name}</motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}