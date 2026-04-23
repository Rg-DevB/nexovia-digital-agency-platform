"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "ar", label: "العربية", flag: "🇦🇪" },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("nexovia-lang") || "en";
    setCurrent(saved);
  }, []);

  const select = (code: string) => {
    setCurrent(code);
    localStorage.setItem("nexovia-lang", code);
    setOpen(false);
    // 🔌 Intégration i18n future : useRouter().push(`/${code}${pathname}`)
  };

  const active = languages.find(l => l.code === current);

  return (
    <div className="relative">
      <button 
        onClick={() => setOpen(!open)} 
        className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-surface transition-colors text-muted hover:text-foreground border border-transparent hover:border-border/50"
      >
        <Globe size={16} />
        <span className="text-sm font-medium hidden sm:inline">{active?.flag} {active?.label}</span>
        <ChevronDown size={14} className={cn("transition-transform duration-200", open && "rotate-180")} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop invisible pour fermer au clic extérieur */}
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute right-0 top-full mt-2 w-52 p-2 rounded-xl bg-card border border-border/50 shadow-2xl shadow-black/40 z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => select(lang.code)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all",
                    current === lang.code 
                      ? "bg-accent/10 text-accent font-medium" 
                      : "text-muted hover:bg-surface hover:text-foreground"
                  )}
                >
                  <span className="text-base">{lang.flag}</span>
                  <span>{lang.label}</span>
                  {current === lang.code && <div className="ml-auto w-2 h-2 rounded-full bg-accent shadow-[0_0_6px_rgba(0,209,255,0.6)]" />}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}