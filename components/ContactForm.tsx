"use client";

import { useState } from "react";
import { courses, branches } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdarqope";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    course: courses[0].tag,
    branch: branches[0].name,
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: form.fullName,
          phone: form.phone,
          email: form.email,
          course: form.course,
          branch: form.branch,
          message: form.message,
        }),
      });

      if (!response.ok) {
        throw new Error("We could not send your inquiry. Please try again or call 0111 333 599.");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      {status === "sent" ? (
        <div className="bg-white border border-slate-100 rounded-[32px] p-10 md:p-14 text-center shadow-[0_20px_40px_-15px_rgba(15,23,42,0.08)]">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl shadow-inner font-bold">✓</div>
          <h2 className="font-display font-bold text-navy text-2xl mb-3 tracking-tight">Inquiry Received Successfully</h2>
          <p className="text-slate-500 max-w-sm mx-auto leading-relaxed">
            Thank you for choosing Premier Driving School. A member of our admissions team will call you shortly to confirm your booking.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-[32px] border border-slate-100 p-8 md:p-12 space-y-6 shadow-[0_24px_48px_-15px_rgba(15,23,42,0.06)] hover:shadow-xl hover:border-gold/20 transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-2">Full name</label>
              <input
                required
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                placeholder="Wanjiru Kamau"
                className="w-full px-4 py-3.5 rounded-2xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold bg-slate-50/50 text-navy font-medium text-sm transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-2">Phone number</label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+254 7XX XXX XXX"
                className="w-full px-4 py-3.5 rounded-2xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold bg-slate-50/50 text-navy font-medium text-sm transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-2">Email address</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@email.com"
              className="w-full px-4 py-3.5 rounded-2xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold bg-slate-50/50 text-navy font-medium text-sm transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-2">Preferred course</label>
              <select
                value={form.course}
                onChange={(e) => setForm({ ...form, course: e.target.value })}
                className="w-full px-4 py-3.5 rounded-2xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold bg-slate-50/50 text-navy font-medium text-sm transition-all cursor-pointer"
              >
                {courses.map((c) => (
                  <option key={c.slug} value={c.tag}>{c.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-2">Preferred branch</label>
              <select
                value={form.branch}
                onChange={(e) => setForm({ ...form, branch: e.target.value })}
                className="w-full px-4 py-3.5 rounded-2xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold bg-slate-50/50 text-navy font-medium text-sm transition-all cursor-pointer"
              >
                {branches.map((b) => (
                  <option key={b.slug} value={b.name}>{b.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-2">Message</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us about your schedule, experience, or any questions."
              className="w-full px-4 py-3.5 rounded-2xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold bg-slate-50/50 text-navy font-medium text-sm transition-all resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-600 font-medium">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full px-6 py-4 rounded-full bg-gold text-navy font-bold shadow-[0_8px_24px_-8px_rgba(245,158,11,0.5)] hover:bg-navy hover:text-white hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60 disabled:translate-y-0 disabled:shadow-none"
          >
            {status === "sending" ? "Sending..." : "Submit Application →"}
          </button>
        </form>
      )}
    </>
  );
}
