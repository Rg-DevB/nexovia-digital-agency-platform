"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ROICalculator() {
  const [leads, setLeads] = useState(150);
  const [conversion, setConversion] = useState(3);
  const [dealValue, setDealValue] = useState(2000);

  const potential = Math.round((leads * (conversion / 100)) * dealValue * 3); // 3 mois

  return (
    <div className="w-full max-w-lg mx-auto p-6 md:p-8 rounded-2xl border border-border/50 bg-gradient-to-br from-surface to-card/80 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-accent/10 rounded-lg text-accent"><TrendingUp size={20} /></div>
        <h3 className="text-xl font-bold">Calculate Your Growth Potential</h3>
      </div>

      <div className="space-y-5">
        {[
          { label: "Monthly Website Visitors", value: leads, min: 50, max: 5000, step: 50, set: setLeads, sfx: "" },
          { label: "Current Conversion Rate (%)", value: conversion, min: 0.5, max: 15, step: 0.5, set: setConversion, sfx: "%" },
          { label: "Average Deal Value (€)", value: dealValue, min: 100, max: 10000, step: 100, set: setDealValue, sfx: "€" }
        ].map((f, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-muted">{f.label}</span>
              <span className="font-mono text-white">{f.value}{f.sfx}</span>
            </div>
            <input type="range" min={f.min} max={f.max} step={f.step} value={f.value}
              onChange={(e) => f.set(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-card rounded-full appearance-none cursor-pointer accent-accent" />
          </div>
        ))}
      </div>

      <motion.div initial={false} animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 0.3 }}
        className="mt-8 p-4 rounded-xl bg-accent/5 border border-accent/20 text-center">
        <p className="text-sm text-muted mb-1">Estimated 90-Day Revenue Potential</p>
        <p className="text-3xl md:text-4xl font-bold gradient-text">+{potential.toLocaleString()}€</p>
      </motion.div>

      <Button className="w-full mt-6 bg-accent hover:bg-accent/90 text-black font-semibold">
        Get Your Custom Plan <ArrowRight size={16} className="ml-2" />
      </Button>
    </div>
  );
}