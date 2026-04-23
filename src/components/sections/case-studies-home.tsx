"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const featured = [
  { id: 1, title: "FinFlow SaaS", client: "FinTech", stats: { roi: "+340%", time: "-40h/m" }, color: "from-blue-500/20 to-cyan-500/20" },
  { id: 2, title: "Aura Retail", client: "E-commerce", stats: { conv: "+68%", drop: "-45%" }, color: "from-purple-500/20 to-pink-500/20" },
  { id: 3, title: "Nova Consulting", client: "B2B", stats: { leads: "+312%", close: "+89%" }, color: "from-orange-500/20 to-red-500/20" }
];

export default function CaseStudiesHome() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Résultats <span className="gradient-text">concrets</span></h2>
          </motion.div>
          <Link href="/portfolio" className="text-muted hover:text-accent transition-colors text-sm font-medium inline-flex items-center gap-1">
            Voir tous les projets <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <AnimatePresence>
            {featured.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                  "group relative h-72 rounded-2xl overflow-hidden border border-border/50 cursor-pointer",
                  "hover:border-accent/40 transition-all duration-500"
                )}
              >
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-70", p.color)} />
                <div className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-white/10 select-none">{p.title[0]}</div>
                
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: hovered === p.id ? 1 : 0 }} 
                  className="absolute inset-0 bg-black/85 backdrop-blur-sm p-6 flex flex-col items-center justify-center gap-4"
                >
                  <div className="grid grid-cols-2 gap-6 w-full text-center">
                    {Object.entries(p.stats).map(([k, v]) => (
                      <div key={k}><div className="text-2xl font-bold text-accent">{v}</div><div className="text-[10px] text-muted uppercase">{k}</div></div>
                    ))}
                  </div>
                  <span className="text-xs text-accent font-medium border border-accent/30 px-3 py-1 rounded-full">Voir l'étude de cas</span>
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">{p.title}</h3>
                  <p className="text-xs text-muted/80">{p.client}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}