import ServiceDetail from "@/components/sections/service-detail";

export const metadata = { title: "Services | Nexovia" };

const servicesData = [
  {
    icon: "🎯",
    title: "Acquisition & Conversion",
    objective: "Objectif : Générer des clients qualifiés",
    services: ["Sites web optimisés conversion", "Landing pages performantes", "UX/UI design stratégique", "Funnels & parcours client", "SEO & contenu stratégique"],
    pitch: "On vous aide à avoir plus de clients"
  },
  {
    icon: "🤖",
    title: "Automatisation & IA",
    objective: "Objectif : Le plus gros levier de différenciation",
    services: ["Automatisation emails & CRM", "Chatbots intelligents (Web, WhatsApp, IG)", "IA pour support client", "IA génération de contenu", "Agents IA personnalisés (RDV, qualification)"],
    pitch: "Un bot qui répond 24/7 et book des rendez-vous"
  },
  {
    icon: "⚙️",
    title: "Systèmes Business",
    objective: "Objectif : Construire des machines complètes",
    services: ["CRM personnalisé", "Dashboard business & KPIs", "Tracking des performances", "Pipelines de vente automatisés", "Intégrations (Zapier, APIs custom)"],
    pitch: "Tu ne fais plus un site → tu fais un système complet"
  },
  {
    icon: "💰",
    title: "Monétisation & Paiement",
    objective: "Objectif : Aider le client à gagner de l’argent",
    services: ["Intégration Stripe & paiements", "Systèmes d’abonnement (SaaS/Membership)", "E-commerce optimisé", "Tunnels de vente avancés"],
    pitch: "Maximisez chaque transaction et récurrence"
  },
  {
    icon: "📊",
    title: "Data & Optimisation",
    objective: "Objectif : Améliorer les résultats en continu",
    services: ["Analytics avancés & tracking", "A/B testing structuré", "Optimisation conversion (CRO)", "Analyse comportement utilisateur"],
    pitch: "Ne devinez plus. Mesurez, itérez et scalez."
  },

    {
      icon: "📱",
      title: "Developpement Mobile",
      objective: "Objectif : Avoir plus de clients",
      pitch: "On vous aide à avoir plus de clients",
      services: [
        "Sites web optimisés conversion",
        "Landing pages performantes",
        "UX/UI design stratégique",
        "Funnels & parcours client",
        "SEO & contenu stratégique",
      ],
    }

];

export default function ServicesPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Nos Services 2026</h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Nous ne vendons pas des prestations isolées. Nous construisons des <span className="text-white font-medium">systèmes de croissance</span> complets, mesurables et scalables.
        </p>
      </div>

      <div className="space-y-6">
        {servicesData.map((s, i) => (
          <ServiceDetail key={i} {...s} index={i} />
        ))}
      </div>

      <div className="mt-16 text-center p-8 rounded-2xl border border-border/50 bg-gradient-to-br from-surface to-card/50">
        <h3 className="text-2xl font-bold mb-3">Pas sûr de par quoi commencer ?</h3>
        <p className="text-muted mb-6">Répondez à 5 questions. Nous vous recommandons le stack exact pour votre business.</p>
        <a href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-black px-6 py-3 rounded-full font-semibold transition-all">
          Obtenir mon audit gratuit →
        </a>
      </div>
    </section>
  );
}