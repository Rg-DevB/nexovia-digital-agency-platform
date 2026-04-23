"use client";
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Erreur");
      
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <Input name="name" placeholder="Full Name" required className="bg-card/50 border-border focus:ring-accent" />
      <Input name="email" type="email" placeholder="Work Email" required className="bg-card/50 border-border focus:ring-accent" />
      <Textarea name="message" placeholder="Tell us about your project" rows={5} required className="bg-card/50 border-border focus:ring-accent resize-none" />
      <Button type="submit" disabled={loading} className="w-full bg-accent hover:bg-accent/90 text-black font-semibold">
        {loading ? <Loader2 className="animate-spin h-4 w-4 mr-2" /> : null}
        Send Message
      </Button>
      <AnimatePresence>
        {status === "success" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-400 text-sm flex items-center gap-2 mt-2">
            <CheckCircle size={14} /> Message envoyé. Nous répondons sous 24h.
          </motion.div>
        )}
        {status === "error" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm flex items-center gap-2 mt-2">
            <AlertCircle size={14} /> Échec de l'envoi. Réessaie ou contacte-nous directement.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}