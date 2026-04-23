"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import BeforeAfterSlider from "@/components/before-after-slider";


// Dans la boucle de tes projets
<BeforeAfterSlider 
  beforeSrc="/projects/auraretail-before.jpg" 
  afterSrc="/projects/auraretail-after.jpg" 

/>

const projects = [
  { id: 1, title: "FinFlow SaaS", category: "automation", client: "FinTech Startup", stats: { conversion: "+127%", efficiency: "40h/m", roi: "340%" }, tags: ["Next.js", "Stripe", "AI Agents"], desc: "Automatisation complète du onboarding client avec qualification IA", color: "from-blue-500/20 to-cyan-500/20" },
  { id: 2, title: "Aura E-commerce", category: "conversion", client: "Retail Brand", stats: { conversion: "+68%", revenue: "+240K€", cart: "-45%" }, tags: ["Shopify Plus", "CRO", "A/B Testing"], desc: "Refonte UX complète + tunnel de vente optimisé", color: "from-purple-500/20 to-pink-500/20" },
  { id: 3, title: "Nova Consulting", category: "systems", client: "Cabinet Conseil", stats: { leads: "+312%", time: "-15h/w", close: "+89%" }, tags: ["HubSpot", "Zapier", "APIs"], desc: "Système CRM sur-mesure avec scoring automatique", color: "from-orange-500/20 to-red-500/20" },
  { id: 4, title: "TechFlow Academy", category: "monetization", client: "EdTech", stats: { mrr: "+45K€", churn: "-23%", ltv: "+156%" }, tags: ["Membership", "Stripe", "Video"], desc: "Plateforme d'abonnement avec communauté intégrée", color: "from-green-500/20 to-emerald-500/20" },
  { id: 5, title: "GreenBuild Corp", category: "automation", client: "Construction", stats: { quotes: "+85%", admin: "-20h/w", error: "-90%" }, tags: ["Forms AI", "Auto-Invoicing"], desc: "Génération automatique de devis et suivi de chantier", color: "from-yellow-500/20 to-orange-500/20" },
  { id: 6, title: "SwiftPay Gateway", category: "conversion", client: "Payment Tech", stats: { checkout: "+42%", drop: "-60%", ltv: "+110%" }, tags: ["React", "Stripe Connect", "Webhooks"], desc: "Optimisation du funnel de paiement multi-devises", color: "from-indigo-500/20 to-blue-500/20" }
];

const categories = [
  { id: "all", label: "Tous les projets" },
  { id: "automation", label: "Automatisation & IA" },
  { id: "conversion", label: "Conversion" },
  { id: "systems", label: "Systèmes" },
  { id: "monetization", label: "Monétisation" }
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 mb-4 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium">Portfolio</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos réalisations <span className="gradient-text">concrètes</span></h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">+50 systèmes déployés. Voici une sélection de nos projets les plus impactants.</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button key={cat.id} onClick={() => setFilter(cat.id)} className={cn("px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border", filter === cat.id ? "bg-accent text-black border-accent shadow-lg shadow-accent/25" : "bg-card/40 text-muted border-border/50 hover:border-accent/50 hover:text-foreground")}>
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)} onMouseLeave={() => setHoveredId(null)}
              className={cn("group relative rounded-2xl overflow-hidden border border-border/50 bg-card/40 hover:border-accent/40 transition-all duration-500", "hover:shadow-2xl hover:shadow-accent/10")}>
              <div className="relative h-56 overflow-hidden">
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-60", project.color)} />
                <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white/20 select-none">{project.title.charAt(0)}</div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: hoveredId === project.id ? 1 : 0 }} className="absolute inset-0 bg-black/80 backdrop-blur-sm p-6 flex flex-col items-center justify-center gap-4">
                  <div className="grid grid-cols-3 gap-4 w-full text-center">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key}><div className="text-xl font-bold text-accent">{value}</div><div className="text-[10px] text-muted uppercase">{key}</div></div>
                    ))}
                  </div>
                  <a href="/contact" className="inline-flex items-center gap-1 text-xs text-accent hover:underline"><ExternalLink size={12} /> Voir le cas complet</a>
                </motion.div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-xs text-muted mb-3">{project.client}</p>
                <p className="text-muted text-sm mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (<span key={tag} className="px-2.5 py-1 rounded-full bg-surface border border-border/50 text-[10px] font-medium text-muted">{tag}</span>))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}