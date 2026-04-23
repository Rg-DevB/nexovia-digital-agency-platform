"use client";
import { motion } from "framer-motion";
import { Zap, Target, BarChart3 } from "lucide-react";
import Link from "next/link";

const services = [
  { icon: <Target size={24} />, title: "Acquisition & Conversion", desc: "Sites, landing pages et funnels optimisés pour transformer vos visiteurs en clients qualifiés.", link: "/services#acquisition" },
  { icon: <Zap size={24} />, title: "Automatisation & IA", desc: "Chatbots, agents IA et workflows 24/7 qui qualifient, bookent et suivent sans intervention humaine.", link: "/services#ia" },
  { icon: <BarChart3 size={24} />, title: "Systèmes & Data", desc: "CRM sur-mesure, dashboards temps réel et pipelines de vente qui scalent avec votre croissance.", link: "/services#systems" }
];

export default function ServicesPreview() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-bg to-surface/20">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Notre stack de croissance</h2>
          <p className="text-muted max-w-2xl mx-auto">5 piliers interconnectés. Voici les 3 moteurs principaux.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group p-8 rounded-2xl border border-border/50 bg-card/40 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 border border-accent/20">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-5">{s.desc}</p>
                <Link href={s.link} className="text-sm font-medium text-accent hover:underline inline-flex items-center gap-1">
                  Découvrir →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}