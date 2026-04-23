"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, TrendingUp, Users, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "FinFlow SaaS Platform",
    category: "automation",
    client: "FinTech Startup",
    image: "/projects/finflow.jpg",
    stats: { conversion: "+127%", efficiency: "40h/mois", roi: "340%" },
    tags: ["Next.js", "Stripe", "AI Agents", "CRM"],
    description: "Automatisation complète du onboarding client avec qualification IA",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    title: "Aura E-commerce",
    category: "conversion",
    client: "Retail Brand",
    image: "/projects/aura.jpg",
    stats: { conversion: "+68%", revenue: "+240K€", cart: "-45%" },
    tags: ["Shopify Plus", "CRO", "Analytics", "A/B Testing"],
    description: "Refonte UX complète + tunnel de vente optimisé",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    title: "Nova Consulting Hub",
    category: "systems",
    client: "Cabinet Conseil",
    image: "/projects/nova.jpg",
    stats: { leads: "+312%", time: "-15h/semaine", close: "+89%" },
    tags: ["HubSpot", "Zapier", "Dashboard", "APIs"],
    description: "Système CRM sur-mesure avec scoring automatique des leads",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 4,
    title: "TechFlow Academy",
    category: "monetization",
    client: "EdTech",
    image: "/projects/techflow.jpg",
    stats: { mrr: "+45K€", churn: "-23%", ltv: "+156%" },
    tags: ["Membership", "Stripe", "Video Platform", "Community"],
    description: "Plateforme d'abonnement avec contenu exclusif et communauté",
    color: "from-green-500/20 to-emerald-500/20"
  }
];

const categories = [
  { id: "all", label: "Tous les projets" },
  { id: "automation", label: "Automatisation & IA" },
  { id: "conversion", label: "Conversion" },
  { id: "systems", label: "Systèmes" },
  { id: "monetization", label: "Monétisation" }
];

export default function PortfolioShowcase() {
  const [filter, setFilter] = useState("all");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background dynamique */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface/20 to-bg pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos réalisations <span className="gradient-text">concrètes</span></h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            +50 systèmes déployés. Voici une sélection de nos projets les plus impactants.
          </p>
        </motion.div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
                filter === cat.id 
                  ? "bg-accent text-black border-accent shadow-lg shadow-accent/25"
                  : "bg-card/40 text-muted border-border/50 hover:border-accent/50 hover:text-foreground"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid projets */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={cn(
                  "group relative rounded-2xl overflow-hidden border border-border/50 bg-card/40 hover:border-accent/40 transition-all duration-500",
                  "hover:shadow-2xl hover:shadow-accent/10"
                )}
              >
                {/* Image avec overlay */}
                <div className="relative h-64 overflow-hidden">
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-60", project.color)} />
                  <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white/20">
                    {project.title.charAt(0)}
                  </div>
                  
                  {/* Stats overlay */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: hoveredId === project.id ? 1 : 0, y: hoveredId === project.id ? 0 : 20 }}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm p-6 flex items-center justify-center"
                  >
                    <div className="grid grid-cols-3 gap-6 w-full">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-accent mb-1">{value}</div>
                          <div className="text-xs text-muted uppercase tracking-wider">{key}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">{project.title}</h3>
                      <p className="text-sm text-muted">{project.client}</p>
                    </div>
                    <button className="p-2 rounded-full bg-surface hover:bg-accent hover:text-black transition-all">
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                  
                  <p className="text-muted text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-surface border border-border/50 text-xs text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors">
            Voir tous les projets <ExternalLink size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}