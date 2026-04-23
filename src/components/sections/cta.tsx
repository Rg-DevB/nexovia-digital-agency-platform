import Link from "next/link";
export default function CTASection() {
  return (
    <section className="py-24 text-center px-6 border-t border-border/30">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Build your next system today</h2>
      <p className="text-muted max-w-2xl mx-auto mb-10">Join 50+ businesses scaling faster with Nexovia's engineered digital infrastructure.</p>
      <Link href="/contact" className="bg-white text-black hover:bg-gray-200 px-10 py-4 rounded-full font-semibold transition-all inline-block">
        Get Started Now
      </Link>
    </section>
  );
}