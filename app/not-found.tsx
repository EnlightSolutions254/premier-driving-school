import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-navy text-white px-6 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-md text-center">
        <span className="inline-block bg-white/5 backdrop-blur-md text-gold font-mono text-xs tracking-widest px-4 py-2 rounded-full border border-white/10 mb-6">
          ERROR 404
        </span>
        <h1 className="font-display font-extrabold text-white text-[clamp(48px,10vw,80px)] leading-none mb-4 tracking-tight">
          Lost Your Way?
        </h1>
        <p className="text-slate-400 text-sm md:text-base mb-10 leading-relaxed font-body">
          The road you are looking for doesn&apos;t exist. Let&apos;s get you back on track to your licence.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3.5 rounded-full bg-gold text-navy font-bold shadow-[0_8px_24px_-8px_rgba(245,158,11,0.6)] hover:bg-white hover:-translate-y-0.5 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
