"use client";
import { motion } from "framer-motion";
import { Calendar, FileText, Code, Rocket, TrendingUp } from "lucide-react";
import FAQAccordion from "@/components/sections/faq-accordion";

const steps = [
  {
    icon: <FileText size={24} />,
    title: "1. Discovery & Audit",
    desc: "Nous analysons ton business, tes fuites de revenus et ton écosystème technique actuel.",
    deliverables: ["Rapport d'audit complet", "Mapping des processus", "Identification des quick wins"],
    duration: "3-5 jours",
    color: "text-accent"
  },
  {
    icon: <Calendar size={24} />,
    title: "2. Architecture & Stratégie",
    desc: "Nous concevons le blueprint de ton système : stack technique, flux de données, parcours client.",
    deliverables: ["Wireframes validés", "Architecture technique", "Roadmap détaillée"],
    duration: "5-7 jours",
    color: "text-secondary"
  },
  {
    icon: <Code size={24} />,
    title: "3. Développement & Intégration",
    desc: "Construction itérative avec tests continus. Tu suis l'avancement en temps réel.",
    deliverables: ["Build complet", "Intégrations CRM/IA", "Tests QA & sécurité"],
    duration: "2-4 semaines",
    color: "text-accent"
  },
  {
    icon: <Rocket size={24} />,
    title: "4. Launch & Training",
    desc: "Mise en production, formation de ton équipe et vérification de tous les déclencheurs.",
    deliverables: ["Mise en ligne", "Session de formation", "Documentation complète"],
    duration: "1 semaine",
    color: "text-secondary"
  },
  {
    icon: <TrendingUp size={24} />,
    title: "5. Optimisation & Scale",
    desc: "Monitoring actif, A/B testing, ajustements data-driven et passage à l'échelle.",
    deliverables: ["Dashboard de suivi", "Rapports mensuels", "Support & itérations"],
    duration: "Continu",
    color: "text-accent"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function ProcessPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <span className="inline-block px-3 py-1 mb-4 rounded-full border border-border/50 bg-surface text-xs font-medium text-accent">Méthodologie</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">De l'idée au système <span className="gradient-text">autonome</span></h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">Pas de boîte noire. Un processus transparent, itératif et orienté résultats.</p>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="relative space-y-12 md:space-y-16">
        {/* Ligne centrale */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-secondary/30 to-transparent md:-translate-x-1/2" />

        {steps.map((step, i) => (
          <motion.div key={i} variants={itemVariants} className={`relative flex flex-col md:flex-row gap-6 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
            {/* Point sur la timeline */}
            <div className="absolute left-6 md:left-1/2 top-6 w-4 h-4 rounded-full bg-bg border-2 border-accent md:-translate-x-1/2 z-10" />
            
            {/* Carte contenu */}
            <div className="ml-14 md:ml-0 md:w-[calc(50%-2rem)] p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-accent/30 transition-all group">
              <div className={`flex items-center gap-3 mb-3 ${step.color}`}>
                {step.icon}
                <span className="text-xs font-bold uppercase tracking-wider">{step.duration}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">{step.desc}</p>
              <div className="space-y-2">
                {step.deliverables.map((d, di) => (
                  <div key={di} className="flex items-center gap-2 text-xs text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                    {d}
                  </div>
                ))}
              </div>
            </div>

            {/* Espace vide pour l'alternance */}
            <div className="hidden md:block md:w-[calc(50%-2rem)]" />
          </motion.div>
        ))}
      </motion.div>

      <FAQAccordion />

      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
        className="mt-24 p-8 rounded-2xl border border-border/50 bg-gradient-to-br from-surface to-card/50 text-center">
        <h3 className="text-2xl font-bold mb-3">Prêt à lancer ton système ?</h3>
        <p className="text-muted mb-6 max-w-lg mx-auto">Nous prenons 3 nouveaux clients par mois. Réserve ton créneau d'audit gratuit.</p>
        <a href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-black px-6 py-3 rounded-full font-semibold transition-all">
          Démarrer le processus →
        </a>
      </motion.div>
    </section>
  );
}