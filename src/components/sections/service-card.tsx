"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceCard({ icon, title, desc, link }: { icon: string; title: string; desc: string; link?: string }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative p-6 rounded-2xl border border-border/50 bg-card/40 hover:border-accent/30 transition-all overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="text-3xl mb-4 relative z-10">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 relative z-10 group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-muted text-sm leading-relaxed mb-4 relative z-10">{desc}</p>
      {link && (
        <Link href={link} className="text-xs font-medium text-accent group-hover:underline relative z-10 inline-flex items-center gap-1">
          Voir le détail →
        </Link>
      )}
    </motion.div>
  );
}