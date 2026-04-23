export const metadata = { title: "About | Nexovia" };
export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h1 className="text-4xl font-bold mb-6 gradient-text">Who We Are</h1>
      <p className="text-lg text-muted leading-relaxed mb-12">
        Nexovia was founded with a single mission: eliminate digital friction for growing businesses. 
        We combine elite frontend engineering with backend automation to create systems that work while you sleep.
      </p>
      <div className="grid md:grid-cols-3 gap-6 text-left">
        {[
          { t: "Mission", d: "Democratize enterprise-grade automation for SMEs." },
          { t: "Vision", d: "A world where business growth is predictable, not accidental." },
          { t: "Values", d: "Radical transparency, shipping fast, and measurable ROI." },
        ].map((v, i) => (
          <div key={i} className="p-6 rounded-xl border border-border/50 bg-card/40">
            <h3 className="text-accent font-semibold mb-2">{v.t}</h3>
            <p className="text-muted text-sm">{v.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}