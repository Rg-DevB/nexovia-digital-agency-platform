"use client";


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, ArrowRight, PlayCircle, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const events = [
  { id: 1, title: "Webinar: Automatisation IA 2026", type: "upcoming", date: "2026-02-15T18:00:00", duration: "60 min", location: "En ligne (Zoom)", attendees: 234, spots: 500, desc: "Découvrez les 5 workflows IA qui transforment les PME en licornes.", color: "from-accent to-blue-600" },
  { id: 2, title: "Workshop: Funnels de Conversion", type: "upcoming", date: "2026-02-28T14:00:00", duration: "3h", location: "Paris + Replay", attendees: 45, spots: 50, desc: "Atelier pratique: construisez votre funnel haute conversion en 3h.", color: "from-purple-500 to-pink-600" },
  { id: 3, title: "Masterclass: Systèmes CRM", type: "replay", date: "2026-01-10T18:00:00", duration: "90 min", location: "Replay disponible", attendees: 892, spots: null, desc: "Comment nous avons automatisé 10M€ de CA pour nos clients.", color: "from-orange-500 to-red-600" }
];

const getCountdown = (date: string) => {
  const diff = new Date(date).getTime() - new Date().getTime();
  if (diff <= 0) return null;
  return { days: Math.floor(diff / 86400000), hours: Math.floor((diff % 86400000) / 3600000) };
};

export default function EventsPage() {
  const [counts, setCounts] = useState<Record<number, { days: number; hours: number } | null>>({});
  useEffect(() => {
    const update = () => {
      const c: Record<number, any> = {};
      events.forEach(e => { if (e.type === "upcoming") c[e.id] = getCountdown(e.date); });
      setCounts(c);
    };
    update();
    const id = setInterval(update, 3600000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 mb-4 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-medium">Événements</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Apprenez de nos <span className="gradient-text">experts</span></h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">Webinars, workshops et masterclasses pour maîtriser l'automatisation.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((ev, i) => {
          const cd = counts[ev.id];
          return (
            <motion.div key={ev.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className={cn("group flex flex-col rounded-2xl border border-border/50 bg-card/40 overflow-hidden hover:border-accent/40 transition-all duration-500", "hover:shadow-xl hover:shadow-accent/5")}>
              <div className={cn("h-40 w-full relative bg-gradient-to-br", ev.color)}>
                <div className="absolute inset-0 flex items-center justify-center"><Calendar size={48} className="text-white/30" /></div>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold bg-black/60 backdrop-blur text-white border border-white/10">
                  {ev.type === "upcoming" ? "🔴 LIVE" : "📼 REPLAY"}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{ev.title}</h3>
                <p className="text-muted text-sm mb-4 leading-relaxed flex-1">{ev.desc}</p>

                <div className="space-y-2 mb-5 text-xs text-muted">
                  <div className="flex items-center gap-2"><Calendar size={12} className="text-accent" /> {new Date(ev.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", hour: "2-digit", minute:"2-digit" })}</div>
                  <div className="flex items-center gap-2"><Clock size={12} className="text-accent" /> {ev.duration}</div>
                  <div className="flex items-center gap-2"><MapPin size={12} className="text-accent" /> {ev.location}</div>
                  <div className="flex items-center gap-2"><Users size={12} className="text-accent" /> {ev.attendees} {ev.spots ? `/ ${ev.spots}` : "participants"}</div>
                </div>

                {ev.type === "upcoming" && (
                  <div className="mb-4">
                    <div className="flex justify-between text-[10px] text-muted mb-1.5">
                      <span>Places restantes</span>
                      <span className="text-accent font-semibold">{ev.spots - ev.attendees}</span>
                    </div>
                    <div className="h-1.5 bg-bg rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${(ev.attendees / ev.spots) * 100}%` }} className={cn("h-full rounded-full", cd && cd.days <= 3 ? "bg-red-500" : "bg-accent")} />
                    </div>
                  </div>
                )}

                <Button className={cn("w-full mt-auto font-semibold", ev.type === "replay" ? "bg-surface hover:bg-surface/80 border border-border/50" : `bg-gradient-to-r ${ev.color} text-white hover:opacity-90`)}>
                  {ev.type === "replay" ? <PlayCircle size={16} className="mr-2" /> : <Ticket size={16} className="mr-2" />}
                  {ev.type === "replay" ? "Voir le replay" : cd ? `Réserver (${cd.days}j)` : "Réserver"}
                  <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}