"use client";
import { motion } from "framer-motion";

interface ServiceDetailProps {
  icon: string;
  title: string;
  objective: string;
  services: string[];
  pitch: string;
  index: number;
}

export default function ServiceDetail({ icon, title, objective, services, pitch, index }: ServiceDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative p-6 md:p-8 rounded-2xl border border-border/50 bg-card/40 hover:border-accent/30 transition-all group"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-3xl border border-accent/20">
            {icon}
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{title}</h3>
            <p className="text-sm font-medium text-accent/80 mt-1">{objective}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {services.map((s, i) => (
              <span key={i} className="px-3 py-1.5 text-xs font-medium rounded-full bg-surface border border-border/50 text-muted">
                {s}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-border/30">
            <p className="text-sm text-muted italic">
              <span className="text-white font-semibold not-italic">💡 Ce que vous achetez :</span> "{pitch}"
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}