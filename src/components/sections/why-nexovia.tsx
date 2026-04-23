"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Zap, Globe2 } from "lucide-react";

const benefits = [
  { icon: <Shield size={20} />, title: "Zéro template", desc: "Chaque système est architecturé sur-mesure pour votre business model." },
  { icon: <Zap size={20} />, title: "ROI mesurable", desc: "On ne livre pas du code. On livre des résultats tracés dans des dashboards." },
  { icon: <Globe2 size={20} />, title: "AI-Native", desc: "L'IA n'est pas un gadget chez nous. C'est le moteur de vos workflows." },
  { icon: <CheckCircle2 size={20} />, title: "Transparence totale", desc: "Accès repo, logs en temps réel, formation incluse. Vous gardez le contrôle." }
];

const stats = [
  { value: "50+", label: "Systèmes déployés" },
  { value: "340%", label: "ROI moyen en 6 mois" },
  { value: "24/7", label: "Uptime garanti" },
  { value: "15+", label: "Pays couverts" }
];

export default function WhyNexovia() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-surface/20 to-bg relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Pourquoi <span className="gradient-text">Nexovia</span> ?</h2>
          <p className="text-muted max-w-2xl mx-auto">Nous ne sommes pas une agence classique. Nous construisons des machines de croissance.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border/50 bg-card/30 hover:border-accent/30 transition-colors"
            >
              <div className="text-accent mb-4">{b.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{b.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats / Anecdotes bar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl border border-border/50 bg-gradient-to-r from-card/40 to-surface/30 backdrop-blur-sm text-center"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold gradient-text mb-1">{s.value}</span>
              <span className="text-xs md:text-sm text-muted uppercase tracking-wider">{s.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="text-center mt-8 text-sm text-muted/80 italic">
          💡 Anecdote : Un client a récupéré son investissement en 14 jours grâce à notre agent IA de qualification. Aujourd'hui, il scale à +15k€/mois sans recruter.
        </motion.p>
      </div>
    </section>
  );
}