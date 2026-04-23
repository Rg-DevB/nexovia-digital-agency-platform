"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { id: 1, name: "Julien D.", role: "CEO, FinFlow", text: "Nexovia a transformé notre pipeline. On est passé de 5 à 45 démos qualifiées/semaine en 60 jours. L'IA de qualification est bluffante.", avatar: "JD" },
  { id: 2, name: "Marie L.", role: "CMO, Aura Retail", text: "Le tunnel de vente optimisé a réduit notre taux d'abandon de 45%. Le dashboard ROI nous donne enfin de la visibilité claire.", avatar: "ML" },
  { id: 3, name: "Thomas R.", role: "CTO, SwiftPay", text: "99.9% d'uptime, zéro friction d'intégration. Leur approche 'système complet' change la donne face aux freelances classiques.", avatar: "TR" },
  { id: 4, name: "Sophie K.", role: "Founder, Nova", text: "On a économisé 15h/semaine sur l'admin. Le CRM sur-mesure tourne comme une horloge. Support réactif et transparent.", avatar: "SK" }
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const next = () => { setIndex((i) => (i + 1) % testimonials.length); setIsPaused(true); setTimeout(() => setIsPaused(false), 8000); };
  const prev = () => { setIndex((i) => (i - 1 + testimonials.length) % testimonials.length); setIsPaused(true); setTimeout(() => setIsPaused(false), 8000); };

  return (
    <section className="py-24 px-6 bg-bg border-t border-border/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12">
          Ils nous font <span className="gradient-text">confiance</span>
        </motion.h2>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-8 md:p-12 min-h-[280px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[index].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <Quote size={32} className="text-accent/30 mb-6" />
                <p className="text-lg md:text-xl text-muted/90 leading-relaxed italic max-w-2xl mb-8">
                  "{testimonials[index].text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-black font-bold text-sm">
                    {testimonials[index].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">{testimonials[index].name}</div>
                    <div className="text-sm text-muted">{testimonials[index].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="p-3 rounded-full border border-border/50 bg-card hover:border-accent/50 hover:text-accent transition-all" aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => { setIndex(i); setIsPaused(true); setTimeout(() => setIsPaused(false), 8000); }}
                  className={`w-2 h-2 rounded-full transition-all ${i === index ? "bg-accent w-4" : "bg-border/50 hover:bg-border"}`} aria-label={`Go to testimonial ${i + 1}`} />
              ))}
            </div>
            <button onClick={next} className="p-3 rounded-full border border-border/50 bg-card hover:border-accent/50 hover:text-accent transition-all" aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}