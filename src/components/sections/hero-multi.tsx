"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Shield, Zap, TrendingUp, Users, Sparkles, Pause, RotateCw } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type HeroVariant = "classic" | "trustline" | "video";

interface HeroProps {
  variant?: HeroVariant;
  autoRotate?: boolean;
  rotateInterval?: number; // en ms, default 30000
  onVariantChange?: (v: HeroVariant) => void;
}

const cta = {
  primary: { label: "Book a Free Call", href: "/contact", icon: ArrowRight },
  secondary: { label: "View Case Studies", href: "/portfolio" }
};

const trustMetrics = [
  { icon: Users, value: "50+", label: "Clients satisfaits" },
  { icon: TrendingUp, value: "+340%", label: "ROI moyen" },
  { icon: Zap, value: "24/7", label: "Systèmes actifs" },
  { icon: Shield, value: "99.9%", label: "Uptime garanti" }
];

const logos = ["Stripe", "Vercel", "Laravel", "Shopify", "HubSpot", "Zapier"];

// ─────────────────────────────────────────────────────────────
// VARIANT 1: CLASSIC PRO (Redesign Premium)
// ─────────────────────────────────────────────────────────────
const ClassicHero = () => (
  <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-bg">
    {/* Background Layers */}
    <div className="absolute inset-0 bg-gradient-to-br from-bg via-surface/30 to-bg" />
    
    {/* Animated gradient orbs */}
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px] animate-pulse delay-1000" />
    
    {/* Subtle grid pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(42,50,69,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(42,50,69,0.08)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
    
    {/* Radial spotlight */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,209,255,0.08)_0%,transparent_70%)] pointer-events-none" />

    <div className="max-w-6xl mx-auto text-center relative z-10 pt-20 pb-12">
      {/* Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 16 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-8 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
        </span>
        <span className="text-accent text-xs font-semibold tracking-wide uppercase">Digital Growth Agency</span>
      </motion.div>

      {/* Headline */}
      <motion.h1 
        initial={{ opacity: 0, y: 24 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-7"
      >
        We build digital systems that{" "}
        <span className="gradient-text relative inline-block">
          generate clients automatically
          <motion.span 
            className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-accent/60 to-secondary/60 rounded-full"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-lg sm:text-xl md:text-2xl text-muted/90 max-w-3xl mx-auto mb-12 leading-relaxed"
      >
        Stop losing leads to slow websites and broken processes. We engineer{" "}
        <span className="text-foreground font-medium border-b border-accent/30 pb-0.5">high-converting platforms</span> and{" "}
        <span className="text-foreground font-medium border-b border-accent/30 pb-0.5">automated workflows</span>{" "}
        tailored for modern SMEs that refuse to stagnate.
      </motion.p>

      {/* CTAs */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.45 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
      >
        <Link href="/contact" className="group relative inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent/90 text-black px-9 py-4.5 rounded-full font-semibold text-base transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-accent/25 overflow-hidden">
          <span className="relative z-10">Book Your Free Strategy Call</span>
          <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} className="relative z-10">
            <ArrowRight size={19} />
          </motion.span>
          <span className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
        
        <Link href="/portfolio" className="group inline-flex items-center justify-center gap-2 px-9 py-4.5 rounded-full border border-border/60 hover:border-accent/50 hover:bg-card/50 transition-all text-muted hover:text-foreground backdrop-blur-sm">
          <span>View Case Studies</span>
          <ArrowUpRight size={18} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </Link>
      </motion.div>

      {/* Trust metrics */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.65, duration: 0.8 }}
        className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
      >
        {[
          { value: "50+", label: "Clients" },
          { value: "+340%", label: "Avg. ROI" },
          { value: "24/7", label: "Active Systems" },
          { value: "15+", label: "Countries" }
        ].map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ delay: 0.75 + i * 0.08 }}
            className="text-center"
          >
            <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
            <div className="text-xs text-muted/70 uppercase tracking-wider mt-0.5">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Partner logos */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-16 pt-8 border-t border-border/30"
      >
        <p className="text-xs text-muted/60 mb-5 uppercase tracking-widest">Trusted by innovative teams</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {["Stripe", "Vercel", "Laravel", "Shopify", "HubSpot", "Zapier"].map((logo, i) => (
            <motion.span 
              key={logo} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1.1 + i * 0.06 }}
              className="text-sm md:text-base font-semibold text-muted/70 hover:text-foreground transition-colors cursor-default"
            >
              {logo}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ delay: 1.3 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="w-7 h-11 rounded-full border-2 border-muted/30 flex items-start justify-center p-2"
      >
        <motion.div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,209,255,0.5)]" animate={{ y: [0, 14, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }} />
      </motion.div>
    </motion.div>
  </section>
);

// ─────────────────────────────────────────────────────────────
// VARIANT 2: TRUSTLINE
// ─────────────────────────────────────────────────────────────
const TrustLineHero = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  useEffect(() => { const id = setInterval(() => setActiveMetric(p => (p + 1) % trustMetrics.length), 3000); return () => clearInterval(id); }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center px-6 overflow-hidden bg-gradient-to-b from-bg to-surface/30">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
        {[...Array(5)].map((_, i) => (
          <motion.div key={i} className="absolute w-1 h-1 bg-accent/30 rounded-full"
            animate={{ y: ["100vh", "-10vh"], x: [`${20 + i * 15}%`, `${25 + i * 15}%`], opacity: [0, 1, 0] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.3, ease: "linear" }} />
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs font-semibold">
            <Shield size={14} /> Proven Results
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Trusted by <span className="gradient-text">growth-focused</span> businesses worldwide
          </h1>
          <p className="text-lg text-muted mb-8 leading-relaxed max-w-lg">
            We don't just promise results. We deliver <span className="text-foreground font-medium">measurable growth</span> through engineered systems that scale with you.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {trustMetrics.map((m, i) => (
              <motion.button key={i} onClick={() => setActiveMetric(i)}
                className={cn("p-4 rounded-xl border text-left transition-all", activeMetric === i ? "border-accent/50 bg-accent/5 shadow-lg shadow-accent/10" : "border-border/50 bg-card/30 hover:border-accent/30")}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <m.icon className={cn("w-5 h-5 mb-2", activeMetric === i ? "text-accent" : "text-muted")} />
                <div className={cn("text-2xl font-bold", activeMetric === i ? "text-accent" : "text-foreground")}>{m.value}</div>
                <div className="text-xs text-muted">{m.label}</div>
              </motion.button>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href={cta.primary.href} className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-black px-7 py-3.5 rounded-full font-semibold transition-all">
              {cta.primary.label} <ArrowRight size={18} />
            </Link>
            <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border/50 hover:border-white/40 transition-all text-muted hover:text-foreground">
              <Play size={16} /> Watch demo
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
          <div className="relative p-6 md:p-8 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm">
            <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent text-2xl font-serif">"</div>
            <AnimatePresence mode="wait">
              <motion.div key={activeMetric} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="space-y-4">
                <p className="text-muted leading-relaxed italic">
                  {activeMetric === 0 && "Nexovia transformed our lead flow. We went from 5 to 45 qualified demos per week—in 60 days."}
                  {activeMetric === 1 && "The ROI dashboard alone saved us 20 hours/month. Now we scale what works, automatically."}
                  {activeMetric === 2 && "Their AI agent books meetings while we sleep. It's like having a 24/7 sales rep."}
                  {activeMetric === 3 && "99.9% uptime, zero downtime during Black Friday. That's the reliability we needed."}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-black font-bold text-sm">
                    {["JD", "ML", "SK", "TR"][activeMetric]}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{["Julien D.", "Marie L.", "Sophie K.", "Thomas R."][activeMetric]}</div>
                    <div className="text-xs text-muted">{["CEO, FinFlow", "CMO, Aura Retail", "Founder, Nova", "CTO, SwiftPay"][activeMetric]}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-6">
              {trustMetrics.map((_, i) => (
                <button key={i} onClick={() => setActiveMetric(i)} className={cn("w-2 h-2 rounded-full transition-all", i === activeMetric ? "bg-accent w-4" : "bg-border/50 hover:bg-border")} />
              ))}
            </div>
          </div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full bg-accent text-black text-xs font-semibold shadow-lg shadow-accent/25">
            ★ 4.9/5 from 50+ clients
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────
// VARIANT 3: VIDEO IMMERSIVE (Fullscreen)
// ─────────────────────────────────────────────────────────────
const VideoHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoUrl = "/videos/hero-ai-tech.mp4"; // Remplace par ta vidéo

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fullscreen Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Loading placeholder */}
        <div className={cn("absolute inset-0 bg-gradient-to-br from-bg via-surface to-bg transition-opacity duration-700", videoLoaded ? "opacity-0" : "opacity-100")} />
        
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
            videoLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        
        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,209,255,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10 px-6 pt-24 pb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-8 rounded-full border border-accent/40 bg-black/40 backdrop-blur-md text-accent text-xs font-semibold tracking-wide"
        >
          <Sparkles size={15} className="animate-pulse" />
          <span>AI-Powered Growth Engine</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 32 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.03] mb-7"
        >
          The future of{" "}
          <span className="gradient-text">client acquisition</span>{" "}
          is autonomous
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7, delay: 0.28 }}
          className="text-lg sm:text-xl md:text-2xl text-muted/95 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          AI agents, smart workflows, and conversion-optimized systems that work{" "}
          <span className="text-foreground font-semibold border-b border-accent/40 pb-0.5">24/7</span>—
          so you can focus on strategy, not execution.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.42 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
        >
          <Link href="/contact" className="group relative inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent/90 text-black px-9 py-4.5 rounded-full font-semibold text-base transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-accent/30">
            <span className="relative z-10">Start Your Automation</span>
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="relative z-10">
              <ArrowRight size={19} />
            </motion.span>
          </Link>
          
          <button 
            onClick={() => setIsPlaying(true)}
            className="group inline-flex items-center gap-3 px-8 py-4.5 rounded-full border border-white/25 hover:border-white/45 hover:bg-white/10 backdrop-blur-md transition-all"
          >
            <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center text-black group-hover:scale-110 transition-transform shadow-lg shadow-accent/25">
              <Play size={19} fill="currentColor" className="ml-0.5" />
            </div>
            <span className="text-foreground font-medium text-base">Watch Demo Reel</span>
          </button>
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.58 }}
          className="flex flex-wrap justify-center items-center gap-3 md:gap-4"
        >
          {["Next.js", "Laravel", "OpenAI", "Stripe", "Zapier", "Vercel"].map((tech, i) => (
            <motion.span 
              key={tech}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 0.85, y: 0 }}
              transition={{ delay: 0.68 + i * 0.07 }}
              className="px-4 py-2 rounded-full bg-black/35 border border-white/15 text-xs text-muted/85 hover:text-foreground hover:border-white/35 transition-all cursor-default backdrop-blur-sm"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={() => setIsPlaying(false)}
          >
            <motion.div 
              initial={{ scale: 0.94, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.94, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden border border-border/40 shadow-2xl shadow-black/60"
              onClick={e => e.stopPropagation()}
            >
              <video autoPlay controls className="w-full h-full object-contain bg-black" src={videoUrl} />
              <button 
                onClick={() => setIsPlaying(false)}
                className="absolute top-5 right-5 p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white transition-colors border border-white/10"
                aria-label="Close video"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none z-10" />
    </section>
  );
};

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT: Auto-Rotate + Controls
// ─────────────────────────────────────────────────────────────
export default function HeroMulti({ variant = "classic", autoRotate = true, rotateInterval = 30000, onVariantChange }: HeroProps) {
  const [currentVariant, setCurrentVariant] = useState<HeroVariant>(variant);
  const [isPaused, setIsPaused] = useState(!autoRotate);
  const [progress, setProgress] = useState(0);
  const inactivityTimer = useRef<NodeJS.Timeout>();
  const progressInterval = useRef<NodeJS.Timeout>();
  const rotateIntervalRef = useRef<NodeJS.Timeout>();
  const containerRef = useRef<HTMLDivElement>(null);

  const variants: HeroVariant[] = ["classic", "trustline", "video"];
  const currentIndex = variants.indexOf(currentVariant);

  // Reset inactivity timer
  const resetInactivity = useCallback(() => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    if (autoRotate && !isPaused) {
      inactivityTimer.current = setTimeout(() => setIsPaused(false), 10000);
    }
  }, [autoRotate, isPaused]);

  // Progress bar animation
  useEffect(() => {
    if (isPaused) { setProgress(0); if (progressInterval.current) clearInterval(progressInterval.current); return; }
    setProgress(0);
    const start = Date.now();
    progressInterval.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min((elapsed / rotateInterval) * 100, 100);
      setProgress(p);
      if (p >= 100) clearInterval(progressInterval.current!);
    }, 100);
    return () => { if (progressInterval.current) clearInterval(progressInterval.current); };
  }, [currentVariant, isPaused, rotateInterval]);

  // Auto-rotate logic
  useEffect(() => {
    if (!autoRotate || isPaused) { if (rotateIntervalRef.current) clearInterval(rotateIntervalRef.current); return; }
    rotateIntervalRef.current = setInterval(() => {
      setCurrentVariant(prev => variants[(variants.indexOf(prev) + 1) % variants.length]);
    }, rotateInterval);
    return () => { if (rotateIntervalRef.current) clearInterval(rotateIntervalRef.current); };
  }, [autoRotate, isPaused, rotateInterval]);

  // Notify parent
  useEffect(() => { if (onVariantChange) onVariantChange(currentVariant); }, [currentVariant, onVariantChange]);

  // Event listeners for pause on interaction
  useEffect(() => {
    const el = containerRef.current; if (!el) return;
    const pause = () => { setIsPaused(true); if (inactivityTimer.current) clearTimeout(inactivityTimer.current); };
    const resume = () => { if (autoRotate) resetInactivity(); };
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("click", pause);
    document.addEventListener("mousemove", resetInactivity);
    document.addEventListener("keydown", resetInactivity);
    return () => {
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("click", pause);
      document.removeEventListener("mousemove", resetInactivity);
      document.removeEventListener("keydown", resetInactivity);
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      if (progressInterval.current) clearInterval(progressInterval.current);
      if (rotateIntervalRef.current) clearInterval(rotateIntervalRef.current);
    };
  }, [autoRotate, resetInactivity]);

  const nextVariant = () => { setCurrentVariant(variants[(currentIndex + 1) % variants.length]); setIsPaused(true); setTimeout(() => autoRotate && setIsPaused(false), 10000); };
  const prevVariant = () => { setCurrentVariant(variants[(currentIndex - 1 + variants.length) % variants.length]); setIsPaused(true); setTimeout(() => autoRotate && setIsPaused(false), 10000); };
  const togglePause = () => setIsPaused(p => !p);

  return (
    <div ref={containerRef} className="relative">
      {/* Variant switcher (dev only) */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-4 right-4 z-50 flex gap-2 p-2 rounded-xl bg-card border border-border/50 shadow-lg">
          {variants.map((v) => (
            <button key={v} onClick={() => { setCurrentVariant(v); setIsPaused(true); }}
              className={cn("px-3 py-1.5 rounded-lg text-xs font-medium transition-all", currentVariant === v ? "bg-accent text-black" : "bg-surface text-muted hover:text-foreground")}>
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>
      )}

      {/* Auto-rotate controls (bottom center) */}
      {autoRotate && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg">
          
          {/* Progress bar */}
          <div className="w-24 h-1 bg-border/50 rounded-full overflow-hidden">
            <motion.div className="h-full bg-accent rounded-full" style={{ width: `${progress}%` }} />
          </div>

          {/* Nav buttons */}
          <button onClick={prevVariant} className="p-1.5 rounded-full hover:bg-surface transition-colors text-muted hover:text-foreground" aria-label="Previous variant">
            <ArrowRight size={14} className="rotate-180" />
          </button>
          
          {/* Pause/Play */}
          <button onClick={togglePause} className="p-1.5 rounded-full hover:bg-surface transition-colors text-muted hover:text-foreground" aria-label={isPaused ? "Resume auto-rotate" : "Pause auto-rotate"}>
            {isPaused ? <Play size={14} fill="currentColor" /> : <Pause size={14} />}
          </button>
          
          <button onClick={nextVariant} className="p-1.5 rounded-full hover:bg-surface transition-colors text-muted hover:text-foreground" aria-label="Next variant">
            <ArrowRight size={14} />
          </button>

          {/* Variant dots */}
          <div className="flex gap-1.5 ml-2 pl-2 border-l border-border/50">
            {variants.map((v, i) => (
              <button key={v} onClick={() => { setCurrentVariant(v); setIsPaused(true); setTimeout(() => autoRotate && setIsPaused(false), 10000); }}
                className={cn("w-2 h-2 rounded-full transition-all", currentVariant === v ? "bg-accent w-4" : "bg-border/50 hover:bg-border")} aria-label={`Show ${v} variant`} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Animated variant content */}
      <AnimatePresence mode="wait">
        <motion.div key={currentVariant} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}>
          {currentVariant === "classic" && <ClassicHero />}
          {currentVariant === "trustline" && <TrustLineHero />}
          {currentVariant === "video" && <VideoHero />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}