"use client";
import { motion, useInView, useMotionValue, useSpring, useEffect, useRef, ReactNode } from "framer-motion";

// 🔢 Compteur animé
export const AnimatedCounter = ({ value, suffix = "", prefix = "", duration = 2 }: { value: number; suffix?: string; prefix?: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(0);
  const sv = useSpring(mv, { duration, damping: 15, stiffness: 100 });
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => { if (inView) mv.set(value); }, [inView, value, mv]);
  useEffect(() => {
    const unsub = sv.on("change", (latest) => { if (ref.current) ref.current.textContent = `${prefix}${Math.round(latest).toLocaleString()}${suffix}`; });
    return unsub;
  }, [sv, prefix, suffix]);

  return <span ref={ref} className="font-bold tabular-nums">{prefix}0{suffix}</span>;
};

// 📝 Révélation texte mot par mot
export const TextReveal = ({ children, className = "" }: { children: string; className?: string }) => {
  const words = children.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="inline-block mr-[0.25em]">
          {word}
        </motion.span>
      ))}
    </span>
  );
};

// 🎴 Card hover premium
export const HoverCard = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div whileHover={{ y: -6, transition: { type: "spring", stiffness: 400, damping: 25 } }}
    className={`relative overflow-hidden rounded-2xl border border-border/50 bg-card/40 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-colors ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    {children}
  </motion.div>
);