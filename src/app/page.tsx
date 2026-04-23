"use client";

import Hero from "@/components/sections/hero";
import Trust from "@/components/sections/trust";
import CTASection from "@/components/sections/cta";
import { motion } from "framer-motion";
import ROICalculator from "@/components/roi-calculator";
import ServiceCard from "@/components/sections/service-card";
//import PortfolioShowcase from "@/components/sections/portfolio-showcase";
import AIPromptGenerator from "@/components/sections/ai-prompt-generator";
import EventsSection from "@/components/sections/events-section";
import HeroMulti from "@/components/sections/hero-multi";
import CaseStudiesHome from "@/components/sections/case-studies-home";
import WhyNexovia from "@/components/sections/why-nexovia";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import ServicesPreview from "@/components/sections/services-preview";
import TestimonialsInfinite from "@/components/sections/testimonials-infinite";



export default function Home() {
  const fadeIn = { 
    hidden: { opacity: 0, y: 40 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } 
  };

  return (
    <>
     <HeroMulti 
        variant="classic"           // Variante par défaut
        autoRotate={true}          // Activer/désactiver la rotation auto
        rotateInterval={30000}     // Durée entre rotations (ms)
        onVariantChange={(v) => console.log("Variant changed:", v)} // Callback optionnel
      />
      {/* <Hero /> */}

      {/*<ServicesPreview />*/}

      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} 
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre stack de croissance 2026</h2>
          <p className="text-muted max-w-2xl mx-auto">5 piliers interconnectés pour transformer votre présence digitale en machine à clients.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "🎯", title: "Acquisition & Conversion", desc: "Sites web, landing pages, funnels et SEO optimisés pour transformer vos visiteurs en clients." },
            { icon: "🤖", title: "Automatisation & IA", desc: "Chatbots, agents IA et workflows automatisés pour qualifier et booker 24/7." },
            { icon: "⚙️", title: "Systèmes Business", desc: "CRM, dashboards et pipelines sur-mesure. On ne fait pas un site, on construit une machine." },
            { icon: "💰", title: "Monétisation & Paiement", desc: "Intégration Stripe, abonnements, e-commerce et tunnels de vente à haute conversion." },
            { icon: "📊", title: "Data & Optimisation", desc: "Analytics, A/B testing et CRO pour scaler ce qui fonctionne et éliminer les fuites." },
            { icon: "📱", title: "Developpement Mobile", desc: "Developpement mobile natif et cross-platform pour iOS et Android." }
            

          ].map((s, i) => (
            <ServiceCard key={i} {...s} link="/services" />
          ))}
        </div>
      </motion.section>


      {/*<Trust />
      {/*<AIPromptGenerator />  */}

      <CaseStudiesHome />
      <WhyNexovia />
      {/* <TestimonialsCarousel /> */}
    
      
      {/*<motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={fadeIn} 
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The problem we solve</h2>
          <p className="text-muted max-w-2xl mx-auto">Most businesses suffer from fragmented tech, manual outreach, and websites that don't convert. We fix the foundation.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Leaky Websites", desc: "Slow, confusing, and built for aesthetics over conversion." },
            { title: "Manual Workflows", desc: "Teams wasting hours on tasks that could run on autopilot." },
            { title: "Disconnected Data", desc: "CRM, emails, and analytics living in separate silos." },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border border-border/50 bg-card/30 hover:border-accent/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent">⚠️</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      
      {/* <PortfolioShowcase /> */}
    

      {/* <section className="py-24 px-6 bg-gradient-to-b from-bg to-surface/30">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">See exactly what you could earn</h2>
              <p className="text-muted mb-6">Our clients typically 2-4x their lead conversion within 90 days. Try the calculator.</p>
              <ul className="space-y-3 text-muted">
                <li className="flex items-center gap-2">✅ Custom automation workflows</li>
                <li className="flex items-center gap-2">✅ CRM pipeline setup included</li>
                <li className="flex items-center gap-2">✅ 30-day results guarantee</li>
              </ul>
            </div>
            <ROICalculator />
          </div>
      </section>

      {/*<motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeIn} 
        className="max-w-4xl mx-auto px-6 py-24"
      >
        <div className="bg-gradient-to-br from-surface to-card p-8 md:p-12 rounded-3xl border border-border/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
          <h3 className="text-3xl font-bold mb-4 relative z-10">Ready to stop leaking revenue?</h3>
          <p className="text-muted mb-8 relative z-10 max-w-lg">Book a 30-minute strategy call. We'll audit your current setup and show you exactly where you're losing money.</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-black px-8 py-4 rounded-full font-semibold transition-all relative z-10">
            Claim Your Strategy Session
          </a>
        </div>
      </motion.section>

      {/* <EventsSection />  */}

      <TestimonialsInfinite />

      <CTASection />
    </>
  );
}