import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Admissions | Premier Driving School Kenya",
  description: "Enroll or get in touch with Premier Driving School Kenya. Fill in our online admission form or contact any of our 12 nationwide branches.",
};

export default function ContactPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Dark Premium Hero Section with Background Image */}
      <section className="relative pt-44 pb-24 bg-navy/85 hero-gradient flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-65"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        {/* Modern Visual Grid Overlay */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/40 to-navy/10" />

        {/* Hero Content */}
        <div className="mx-auto max-w-6xl px-6 relative z-10 w-full text-center flex flex-col items-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase text-gold mb-4">
              <span className="bg-gold text-navy px-2.5 py-1 rounded-full font-bold text-[10px]">FINAL STRETCH</span>
              ADMISSIONS & CONTACT
            </div>
            <h1 className="font-display font-bold text-white text-[clamp(34px,5vw,56px)] leading-tight tracking-tight">
              Tell Us Where You Want To Go
            </h1>
            <p className="mt-4 text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
              Fill in your details, select your preferred course and branch, and we&apos;ll reach out within one business day to schedule your first lesson.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Decorative Blur */}
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-96 h-96 rounded-full bg-amber-100/20 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-3xl px-6 relative z-10">
          {/* Contact Form Client Component */}
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
