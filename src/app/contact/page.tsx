import ContactForm from "@/components/contact-form";
export const metadata = { title: "Contact | Nexovia" };
export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">Let's build your system</h1>
        <p className="text-muted mb-8 leading-relaxed">
          Fill out the form and our growth engineer will reach out within 24 hours to schedule your free strategy audit.
        </p>
        <div className="space-y-4 text-sm text-muted">
          <div className="flex items-center gap-3">📧 hello@nexovia.io</div>
          <div className="flex items-center gap-3">📍 Remote-First, Global Coverage</div>
          <div className="flex items-center gap-3">⚡ Avg. response time: 4 hours</div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}