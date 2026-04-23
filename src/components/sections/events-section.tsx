"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, ArrowRight, PlayCircle, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const events = [
  {
    id: 1,
    title: "Webinar: Automatisation IA 2026",
    type: "upcoming",
    date: "2026-02-15T18:00:00",
    duration: "60 min",
    location: "En ligne (Zoom)",
    attendees: 234,
    spots: 500,
    description: "Découvrez les 5 workflows IA qui transforment les PME en licornes.",
    image: "/events/webinar-ai.jpg",
    cta: "Réserver ma place",
    color: "from-accent to-blue-600"
  },
  {
    id: 2,
    title: "Workshop: Funnels de Conversion",
    type: "upcoming",
    date: "2026-02-28T14:00:00",
    duration: "3h",
    location: "Paris + Replay",
    attendees: 45,
    spots: 50,
    description: "Atelier pratique: construisez votre funnel haute conversion en 3h.",
    image: "/events/workshop.jpg",
    cta: "S'inscrire (5 places)",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 3,
    title: "Masterclass: Systèmes CRM",
    type: "replay",
    date: "2026-01-10T18:00:00",
    duration: "90 min",
    location: "Replay disponible",
    attendees: 892,
    spots: null,
    description: "Comment nous avons automatisé 10M€ de CA pour nos clients.",
    image: "/events/masterclass.jpg",
    cta: "Voir le replay",
    color: "from-orange-500 to-red-600"
  }
];

const getCountdown = (date: string) => {
  const diff = new Date(date).getTime() - new Date().getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  return { days, hours, isSoon: days <= 3 };
};

export default function EventsSection() {
  const [timeLeft, setTimeLeft] = useState<Record<number, { days: number; hours: number }>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      const counts: Record<number, { days: number; hours: number }> = {};
      events.forEach(event => {
        if (event.type === "upcoming") {
          counts[event.id] = getCountdown(event.date);
        }
      });
      setTimeLeft(counts);
    }, 3600000); // Update hourly

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-bg via-surface/20 to-bg relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-medium">
            Événements & Formation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Apprenez de nos <span className="gradient-text">experts</span></h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Webinars, workshops et masterclasses pour maîtriser l'automatisation et la croissance.
          </p>
        </motion.div>

        <div className="space-y-6">
          {events.map((event, i) => {
            const countdown = timeLeft[event.id];
            const isUrgent = countdown?.isSoon;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "group relative p-6 md:p-8 rounded-2xl border border-border/50 bg-card/40 hover:border-accent/40 transition-all duration-500",
                  "hover:shadow-xl hover:shadow-accent/5 overflow-hidden"
                )}
              >
                {/* Badge type */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-semibold",
                      event.type === "upcoming" ? "bg-green-500/10 text-green-400 border border-green-500/30" :
                      event.type === "replay" ? "bg-blue-500/10 text-blue-400 border border-blue-500/30" :
                      "bg-purple-500/10 text-purple-400 border border-purple-500/30"
                    )}>
                      {event.type === "upcoming" ? "🔴 En direct" : event.type === "replay" ? "📼 Replay" : "🎫 Complet"}
                    </span>
                    {isUrgent && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/30 animate-pulse">
                        Bientôt !
                      </span>
                    )}
                  </div>
                  
                  {event.type === "upcoming" && countdown && (
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Clock size={14} />
                      <span>Dans {countdown.days}j {countdown.hours}h</span>
                    </div>
                  )}
                </div>

                {/* Contenu */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{event.title}</h3>
                    <p className="text-muted mb-4 leading-relaxed">{event.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-accent" />
                        {new Date(event.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} className="text-accent" />
                        {event.duration}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-accent" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users size={14} className="text-accent" />
                        {event.attendees} {event.spots ? `/ ${event.spots}` : "participants"}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    {/* Progress bar si spots limitées */}
                    {event.spots && (
                      <div className="mb-4">
                        <div className="flex justify-between text-xs text-muted mb-1">
                          <span>Places disponibles</span>
                          <span>{event.spots - event.attendees} restantes</span>
                        </div>
                        <div className="h-2 bg-bg rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(event.attendees / event.spots) * 100}%` }}
                            viewport={{ once: true }}
                            className={cn("h-full rounded-full", isUrgent ? "bg-red-500" : "bg-accent")}
                          />
                        </div>
                      </div>
                    )}

                    <Button 
                      className={cn(
                        "w-full font-semibold transition-all",
                        event.type === "replay" 
                          ? "bg-surface hover:bg-surface/80 text-foreground border border-border/50"
                          : "bg-gradient-to-r " + event.color + " text-white hover:opacity-90 shadow-lg"
                      )}
                    >
                      {event.type === "replay" ? <PlayCircle size={18} className="mr-2" /> : <Ticket size={18} className="mr-2" />}
                      {event.cta}
                      <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </div>
                </div>

                {/* Décoration */}
                <div className={cn("absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br opacity-10 rounded-full blur-3xl pointer-events-none", event.color)} />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Newsletter Events */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl border border-border/50 bg-gradient-to-br from-surface to-card/50 text-center"
        >
          <h3 className="text-xl font-bold mb-2">Ne manquez aucun événement</h3>
          <p className="text-muted mb-4 text-sm">Recevez nos invitations en avant-première + replays exclusifs.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="votre@email.com" 
              className="flex-1 px-4 py-2.5 rounded-xl bg-bg/50 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
            <Button className="bg-accent hover:bg-accent/90 text-black font-semibold whitespace-nowrap">
              S'inscrire
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}