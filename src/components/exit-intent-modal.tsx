"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ExitIntentModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || localStorage.getItem("nexovia_exit_seen")) return;
    const leave = (e: MouseEvent) => {
      if (e.clientY <= 0) { setOpen(true); localStorage.setItem("nexovia_exit_seen", "true"); }
    };
    document.addEventListener("mouseleave", leave);
    return () => document.removeEventListener("mouseleave", leave);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setDone(true); /* Ajoute ta logique API ici */ }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }}
            className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 max-w-md w-full relative shadow-2xl">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-muted hover:text-white"><X size={20} /></button>
            
            {!done ? (
              <>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4"><Gift size={24} /></div>
                <h3 className="text-2xl font-bold mb-2">Wait! Don't leave empty-handed</h3>
                <p className="text-muted mb-6">Download our free <span className="text-white font-medium">"2025 Client Acquisition Playbook"</span> used by 500+ SMEs.</p>
                <form onSubmit={submit} className="space-y-3">
                  <Input type="email" placeholder="Enter your work email" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-bg/50 border-border/50" />
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-black font-semibold">Get Free Playbook →</Button>
                </form>
                <p className="text-xs text-muted/60 text-center mt-4">No spam. Unsubscribe anytime.</p>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 mx-auto mb-4">✓</div>
                <h4 className="text-xl font-bold mb-2">Check your inbox!</h4>
                <p className="text-muted text-sm">The playbook is on its way.</p>
                <button onClick={() => setOpen(false)} className="mt-6 text-accent text-sm font-medium hover:underline">Close</button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}