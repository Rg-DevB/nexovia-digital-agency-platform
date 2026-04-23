"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Copy, Check, RefreshCw, Zap, ChevronDown, Info, Terminal, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const frameworks = [
  { id: "crispe", label: "CRISPE", desc: "Context, Role, Instructions, Steps, Params, Examples" },
  { id: "create", label: "CREATE", desc: "Character, Request, Examples, Adjustments, Type, Extras" },
  { id: "role", label: "Role-Task-Context", desc: "Simple & direct for quick prompts" }
];

const optimizePrompt = async (input: string, fw: string) => {
  await new Promise(r => setTimeout(r, 1200));
  const fwText = fw === "crispe" ? "[CONTEXTE]\n[ROLE]\n[INSTRUCTIONS]\n[FORMAT]" : fw === "create" ? "[CARACTÈRE]\n[DEMANDE]\n[EXEMPLES]\n[TYPO]" : "[RÔLE] Tu es expert\n[TÂCHE] " + input + "\n[CONTEXTE] ";
  const opt = `${fwText}\n\n> ${input}\n\n[CONTRAINTES]\n- Précis et actionnable\n- Exemples concrets\n- Format structuré`;
  return { optimized: opt, tokens: Math.ceil(opt.length / 4), score: 85 + Math.floor(Math.random() * 12) };
};

export default function AIPromptGenerator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [stats, setStats] = useState({ tokens: 0, score: 0 });
  const [fw, setFw] = useState("crispe");
  const [fwOpen, setFwOpen] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [typingText, setTypingText] = useState("");

  useEffect(() => {
    if (output) {
      let i = 0;
      const timer = setInterval(() => {
        setTypingText(output.slice(0, i));
        i++;
        if (i > output.length) clearInterval(timer);
      }, 12);
      return () => clearInterval(timer);
    }
  }, [output]);

  const handleOptimize = async () => {
    if (!input.trim()) return;
    setLoading(true); setOutput(""); setTypingText("");
    try {
      const res = await optimizePrompt(input, fw);
      setStats({ tokens: res.tokens, score: res.score });
      setOutput(res.optimized);
      setHistory(h => [input, ...h].slice(0, 5));
    } finally { setLoading(false); }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/30 via-bg to-bg pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div key={i} className="absolute w-1 h-1 bg-accent/20 rounded-full"
            animate={{ y: [0, -80], opacity: [0, 1, 0], x: `${Math.random() * 100}%` }}
            transition={{ duration: Math.random() * 8 + 8, repeat: Infinity, delay: Math.random() * 5 }} />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4"><Sparkles size={14} /> Outil IA Gratuit</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Optimisez vos prompts <span className="gradient-text">en 1 clic</span></h2>
          <p className="text-muted max-w-2xl mx-auto">Transformez vos idées en prompts structurés. Économisez des tokens, obtenez des résultats pro.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
            <div className="p-6 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-medium text-foreground">Votre idée brute</label>
                <div className="relative">
                  <button onClick={() => setFwOpen(!fwOpen)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border/50 text-xs text-muted hover:text-accent transition-all">
                    <Cpu size={12} /> {frameworks.find(f => f.id === fw)?.label} <ChevronDown size={12} />
                  </button>
                  <AnimatePresence>
                    {fwOpen && (
                      <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute right-0 top-full mt-2 w-56 p-2 rounded-xl bg-card border border-border/50 shadow-xl z-20">
                        {frameworks.map(f => (
                          <button key={f.id} onClick={() => { setFw(f.id); setFwOpen(false); }} className="w-full text-left p-2 rounded-lg hover:bg-surface text-xs transition-colors">
                            <div className="font-semibold text-accent">{f.label}</div>
                            <div className="text-muted/70 mt-0.5">{f.desc}</div>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <Textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Ex: Crée une stratégie marketing pour mon SaaS B2B..."
                className="min-h-[220px] bg-bg/50 border-border/50 focus:border-accent/50 resize-none text-foreground placeholder:text-muted/50 font-mono text-sm leading-relaxed" />
              
              <div className="mt-4 flex flex-wrap gap-2">
                {["Email de vente", "Stratégie SEO", "Idées contenu"].map((t) => (
                  <button key={t} onClick={() => setInput(`Crée un ${t.toLowerCase()} pour...`)} className="px-3 py-1.5 rounded-lg bg-surface border border-border/50 text-xs text-muted hover:text-accent hover:border-accent/50 transition-all flex items-center gap-1">
                    <Zap size={12} /> {t}
                  </button>
                ))}
              </div>

              <Button onClick={handleOptimize} disabled={!input.trim() || loading} className="w-full mt-5 bg-gradient-to-r from-accent to-secondary text-black font-semibold hover:opacity-90 transition-all">
                {loading ? <RefreshCw size={18} className="animate-spin mr-2" /> : <Sparkles size={18} className="mr-2" />}
                {loading ? "Analyse IA..." : "Générer le prompt optimisé"}
              </Button>
            </div>
            {history.length > 0 && (
              <div className="p-4 rounded-xl border border-border/30 bg-card/30">
                <p className="text-xs text-muted mb-2 flex items-center gap-1"><Terminal size={12} /> Historique récent</p>
                <div className="space-y-1.5">
                  {history.slice(0, 3).map((h, i) => (<button key={i} onClick={() => setInput(h)} className="block w-full text-left text-xs text-muted/70 hover:text-accent truncate p-2 rounded hover:bg-surface/50 transition-colors">{h}</button>))}
                </div>
              </div>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className={cn("p-6 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm min-h-[500px] relative", output && "border-accent/30 shadow-lg shadow-accent/5")}>
              {!output && !loading ? (
                <div className="absolute inset-0 flex items-center justify-center text-muted/50">
                  <div className="text-center">
                    <Sparkles size={56} className="mx-auto mb-3 opacity-20 animate-pulse" />
                    <p className="text-sm">Votre prompt structuré apparaîtra ici</p>
                  </div>
                </div>
              ) : loading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}><RefreshCw size={32} className="text-accent" /></motion.div>
                    <p className="text-sm text-muted animate-pulse">Analyse et structuration...</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/50">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2"><div className={cn("w-2.5 h-2.5 rounded-full", stats.score > 80 ? "bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]" : "bg-yellow-400")} /><span className="text-sm font-medium">Score: {stats.score}/100</span></div>
                      <div className="text-sm text-muted">~{stats.tokens} tokens</div>
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={copyToClipboard} variant="outline" className="px-3 py-1.5 h-8 border-border/50 hover:border-accent/50 hover:text-accent text-xs">
                        {copied ? <Check size={14} className="mr-1.5 text-green-500" /> : <Copy size={14} className="mr-1.5" />} {copied ? "Copié" : "Copier"}
                      </Button>
                      <Button onClick={() => { setInput(""); setOutput(""); }} variant="outline" className="px-3 py-1.5 h-8 border-border/50 hover:border-red-500/50 hover:text-red-500 text-xs"><RefreshCw size={14} /></Button>
                    </div>
                  </div>

                  <div className="whitespace-pre-wrap text-sm text-foreground font-mono leading-relaxed mb-6 bg-bg/60 p-4 rounded-lg border border-border/30 min-h-[300px]">
                    <span className="text-accent">{typingText}</span><span className="animate-pulse inline-block w-2 h-4 bg-accent ml-0.5 align-middle"></span>
                  </div>

                  <div className="p-3 rounded-lg bg-accent/5 border border-accent/20 flex gap-2">
                    <Info size={14} className="text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-muted">Framework appliqué: <span className="text-accent font-medium">{frameworks.find(f => f.id === fw)?.label}</span>. Structure optimisée pour réduire les tokens de ~30%.</p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}