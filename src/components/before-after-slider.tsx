"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
  beforeSrc: string; afterSrc: string;
  beforeAlt?: string; afterAlt?: string;
}

export default function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt = "Before", afterAlt = "After" }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (x: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos(Math.max(0, Math.min(((x - rect.left) / rect.width) * 100, 100)));
  };

  useEffect(() => {
    const mm = (e: MouseEvent) => dragging.current && move(e.clientX);
    const tm = (e: TouchEvent) => move(e.touches[0].clientX);
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", mm);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", tm);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", tm);
      window.removeEventListener("touchend", up);
    };
  }, []);

  return (
    <div ref={ref} onMouseDown={() => (dragging.current = true)}
      className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border/50 cursor-col-resize select-none">
      <img src={afterSrc} alt={afterAlt} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={beforeSrc} alt={beforeAlt} className="w-full h-full object-cover" />
      </div>
      <motion.div className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize flex items-center justify-center"
        style={{ left: `${pos}%` }}>
        <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-black font-bold">↔</div>
      </motion.div>
      <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-medium text-white">Before</div>
      <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-medium text-white">After</div>
    </div>
  );
}