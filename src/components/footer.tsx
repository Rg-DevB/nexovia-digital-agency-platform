"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Mail, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────
// Language Switcher (déplacé dans le footer)
// ─────────────────────────────────────────────────────────────
const LanguageSwitcher = () => {
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
    // 🔌 Future i18n: router.push(`/${code}${pathname}`)
  };

  const active = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
    { code: "ar", label: "العربية", flag: "🇦🇪" },
  ].find(l => l.code === current);

  return (
    <div className="relative inline-block">
      <button 
        onClick={() => setOpen(!open)} 
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl hover:bg-surface/60 transition-colors text-muted hover:text-foreground border border-border/50"
      >
        <Globe size={17} />
        <span className="text-sm font-medium">{active?.flag} {active?.label}</span>
        <ChevronDown size={14} className={cn("transition-transform duration-200", open && "rotate-180")} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute bottom-full left-0 mb-3 w-56 p-2 rounded-xl bg-card border border-border/50 shadow-2xl shadow-black/40 z-50"
            >
              {[
                { code: "en", label: "English", flag: "🇺🇸" },
                { code: "fr", label: "Français", flag: "🇫🇷" },
                { code: "es", label: "Español", flag: "🇪🇸" },
                { code: "de", label: "Deutsch", flag: "🇩🇪" },
                { code: "ar", label: "العربية", flag: "🇦🇪" },
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => select(lang.code)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all",
                    current === lang.code 
                      ? "bg-accent/10 text-accent font-medium" 
                      : "text-muted hover:bg-surface/60 hover:text-foreground"
                  )}
                >
                  <span className="text-lg">{lang.flag}</span>
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
};

// ─────────────────────────────────────────────────────────────
// Footer Principal
// ─────────────────────────────────────────────────────────────
export default function Footer() {
  const year = new Date().getFullYear();
  
  const nav = {
    "Services": [
      { href: "/services#acquisition", label: "Acquisition & Conversion" },
      { href: "/services#ia", label: "Automatisation & IA" },
      { href: "/services#systems", label: "Systèmes Business" },
      { href: "/services#payment", label: "Monétisation & Paiement" },
    ],
    "Agency": [
      { href: "/about", label: "Our Story" },
      { href: "/process", label: "Methodology" },
      { href: "/portfolio", label: "Case Studies" },
      { href: "/contact", label: "Contact" },
    ],
    "Legal": [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/cookies", label: "Cookie Policy" },
    ]
  };

  return (
    <footer className="border-t border-border/50 bg-bg/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Top Section: Brand + Language */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-14 pb-8 border-b border-border/30">
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-2">
              <span className="gradient-text">Nex</span>ovia
            </h3>
            <p className="text-muted text-sm max-w-sm leading-relaxed">
              Transform your ambitions into intelligent systems
            </p>
          </div>
          <LanguageSwitcher />
        </div>

        {/* Navigation Links - All aligned on same baseline */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 mb-16">
          {/* Services Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-5">Services</h4>
            <ul className="space-y-3.5">
              {nav.Services.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted hover:text-accent transition-colors inline-block hover:translate-x-0.5 duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Agency Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-5">Agency</h4>
            <ul className="space-y-3.5">
              {nav.Agency.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted hover:text-accent transition-colors inline-block hover:translate-x-0.5 duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-5">Legal</h4>
            <ul className="space-y-3.5">
              {nav.Legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted hover:text-accent transition-colors inline-block hover:translate-x-0.5 duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-5">Connect</h4>
            <div className="flex gap-3">
              {[
                { name: "Twitter", href: "#" },
                { name: "LinkedIn", href: "#" },
                { name: "GitHub", href: "#" },
                { name: "Instagram", href: "#" }
              ].map((s) => (
                <a 
                  key={s.name}
                  href={s.href} 
                  className="p-2.5 rounded-xl bg-surface/60 hover:bg-card border border-border/50 text-muted hover:text-accent transition-all hover:-translate-y-0.5"
                  aria-label={s.name}
                >
                  {/* Icônes SVG inline pour éviter lucide-react conflicts */}
                  {s.name === "Twitter" && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>}
                  {s.name === "LinkedIn" && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>}
                  {s.name === "GitHub" && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>}
                  {s.name === "Instagram" && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Card - Full Width, Centered */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-10 rounded-3xl border border-border/50 bg-gradient-to-br from-card/60 to-surface/40 backdrop-blur-sm text-center relative overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-semibold">
                <Mail size={14} />
                <span>Stay Ahead</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                Get weekly growth tactics & automation blueprints
              </h3>
              <p className="text-muted text-sm md:text-base mb-7 max-w-lg mx-auto">
                No fluff. Just actionable insights from our team + exclusive early access to new tools.
              </p>
              
              <form 
                onSubmit={async (e) => {
                  e.preventDefault();
                  const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
                  try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subscribe`, {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ email }),
                    });
                    if (res.ok) alert("✅ You're in! Check your inbox.");
                    else alert("❌ Email already subscribed or invalid.");
                  } catch { alert("❌ Network error. Please try again."); }
                  e.currentTarget.reset();
                }} 
                className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
              >
                <input 
                  name="email"
                  type="email" 
                  placeholder="hello@company.com" 
                  required
                  className="flex-1 px-5 py-3.5 rounded-xl bg-bg/60 border border-border/60 text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-base"
                />
                <button 
                  type="submit" 
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-black px-7 py-3.5 rounded-xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shadow-lg shadow-accent/20"
                >
                  Subscribe
                  <ArrowRight size={18} />
                </button>
              </form>
              
              <p className="text-[11px] text-muted/60 mt-4">
                Unsubscribe anytime. We respect your inbox. <Link href="/privacy" className="underline hover:text-accent">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted/60">
          <p>© {year} Nexovia Agency. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">🌍 Available worldwide</span>
            <span className="w-1 h-1 rounded-full bg-muted/40" />
            <a href="mailto:hello@nexovia.io" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              ✉️ hello@nexovia.io
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}