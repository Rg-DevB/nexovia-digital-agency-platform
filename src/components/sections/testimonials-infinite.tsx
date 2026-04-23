"use client";
import { Quote } from "lucide-react";
import Image from "next/image";


const testimonials = [
  { id: 1, name: "Julien D.", company: "CEO, FinFlow", quote: "Nexovia a transformé notre pipeline. On est passé de 5 à 45 démos qualifiées/semaine en 60 jours. L'IA de qualification est bluffante.", avatar: "https://i.pravatar.cc/150?u=jd" },
  { id: 2, name: "Marie L.", company: "CMO, Aura Retail", quote: "Le tunnel de vente optimisé a réduit notre taux d'abandon de 45%. Le dashboard ROI nous donne enfin de la visibilité claire.", avatar: "https://i.pravatar.cc/150?u=ml" },
  { id: 3, name: "Thomas R.", company: "CTO, SwiftPay", quote: "99.9% d'uptime, zéro friction d'intégration. Leur approche 'système complet' change la donne face aux agences classiques.", avatar: "https://i.pravatar.cc/150?u=tr" },
  { id: 4, name: "Sophie K.", company: "Founder, Nova", quote: "On a économisé 15h/semaine sur l'admin. Le CRM sur-mesure tourne comme une horloge. Support réactif et transparent.", avatar: "https://i.pravatar.cc/150?u=sk" },
  { id: 5, name: "Alex M.", company: "Director, TechScale", quote: "L'IA de qualification est bluffante. Notre équipe commerciale ne traite plus que des leads chauds. ROI atteint en 14 jours.", avatar: "https://i.pravatar.cc/150?u=am" },
  { id: 6, name: "Elena V.", company: "VP Sales, CloudBase", quote: "Un investissement récupéré en 3 semaines. Le système scale parfaitement avec notre croissance internationale.", avatar: "https://i.pravatar.cc/150?u=ev" },
];

// Duplication pour boucle infinie sans coupure
const items = [...testimonials, ...testimonials];

export default function TestimonialsInfinite() {
  return (
    <section className="py-24 overflow-hidden bg-bg border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Ils nous font <span className="gradient-text">confiance</span></h2>
        <p className="text-muted max-w-2xl mx-auto">Retours de dirigeants et fondateurs qui ont scalé avec nos systèmes.</p>
      </div>

      <div className="relative group">
        {/* Fades latéraux premium */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] py-2">
          {items.map((t, i) => (
            <div key={i} className="flex-shrink-0 w-[340px] md:w-[380px] p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-accent/30 hover:bg-card/60 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-accent/20">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t.name}</h4>
                  <p className="text-xs text-muted">{t.company}</p>
                </div>
              </div>
              <Quote size={20} className="text-accent/40 mb-3" />
              <p className="text-muted text-sm leading-relaxed italic">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}