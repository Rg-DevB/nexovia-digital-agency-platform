"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
  { q: "Combien de temps faut-il pour lancer mon système ?", a: "En moyenne 3 à 5 semaines du Discovery au Launch. Les projets d'automatisation pure peuvent être déployés en 7-10 jours. Nous livrons par sprints pour que tu voies la valeur rapidement." },
  { q: "Travaillez-vous avec des entreprises hors Europe ?", a: "Oui. Nous travaillons 100% à distance avec des clients dans 15+ pays. Notre stack est cloud-native et nos processus asynchrones s'adaptent à ton fuseau horaire." },
  { q: "Que se passe-t-il si l'IA ou l'automatisation bug ?", a: "Chaque système inclut des logs, des alertes Slack/email et un dashboard de monitoring. Nous offrons 30 jours de garantie 'fix it free' + un support prioritaire." },
  { q: "Avez-vous besoin d'accès root à mes comptes ?", a: "Non. Nous te guidons pour créer des clés API en lecture/écriture limitée. Tu gardes le contrôle total à 100% et peux révoquer l'accès à tout moment." },
  { q: "Comment sont structurés vos tarifs ?", a: "Sur-mesure. Un setup starter commence à 2 500€, les systèmes complets (CRM + IA + Funnel + Analytics) tournent entre 5 000€ et 12 000€. L'audit gratuit te donne un devis précis et transparent." }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-20 max-w-3xl mx-auto px-6">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">Questions fréquentes</h3>
      <div className="space-y-3">
        {faqData.map((item, i) => (
          <div key={i} className="border border-border/50 rounded-xl overflow-hidden bg-card/40 hover:border-accent/30 transition-colors">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)} 
              className="w-full flex justify-between items-center p-5 text-left hover:bg-surface/30 transition-colors"
            >
              <span className="font-medium text-foreground pr-4">{item.q}</span>
              <ChevronDown className={cn("w-5 h-5 text-accent transition-transform duration-300 flex-shrink-0", openIndex === i && "rotate-180")} />
            </button>
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: "auto", opacity: 1 }} 
                  exit={{ height: 0, opacity: 0 }} 
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-5 pt-0 text-muted text-sm leading-relaxed border-t border-border/30">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}