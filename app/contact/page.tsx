"use client";

import { useState } from "react";
import { courses, branches } from "@/lib/data";
import { sendInquiry } from "@/lib/emailjs";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
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
      await sendInquiry(form);
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <main className="pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase text-royal mb-4">
            <span className="bg-gold text-navy px-2 py-0.5 rounded font-semibold">Final stretch</span>
            Apply / contact
          </div>
          <h1 className="font-display font-bold text-navy text-[clamp(34px,5vw,54px)] leading-tight mb-4">
            Tell us where you want to go
          </h1>
          <p className="text-[#64748B] text-lg leading-relaxed">
            Fill in your details and preferred course and branch — we&apos;ll reach out within one
            business day to schedule your first lesson.
          </p>
        </div>

        {status === "sent" ? (
          <div className="bg-lightgray rounded-2xl p-10 text-center">
            <h2 className="font-display font-semibold text-navy text-2xl mb-2">Inquiry received</h2>
            <p className="text-[#64748B]">Thank you — a member of our team will call you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#EEF1F5] p-8 md:p-10 space-y-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.15)]">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate mb-2">Full name</label>
                <input
                  required
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  placeholder="Wanjiru Kamau"
                  className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:border-royal transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate mb-2">Phone number</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+254 7XX XXX XXX"
                  className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:border-royal transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate mb-2">Email address</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@email.com"
                className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:border-royal transition-colors"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate mb-2">Preferred course</label>
                <select
                  value={form.course}
                  onChange={(e) => setForm({ ...form, course: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:border-royal transition-colors"
                >
                  {courses.map((c) => (
                    <option key={c.slug} value={c.tag}>{c.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate mb-2">Preferred branch</label>
                <select
                  value={form.branch}
                  onChange={(e) => setForm({ ...form, branch: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:border-royal transition-colors"
                >
                  {branches.map((b) => (
                    <option key={b.slug} value={b.name}>{b.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate mb-2">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your schedule, experience, or any questions."
                className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:border-royal transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-6 py-4 rounded-full bg-gold text-navy font-semibold hover:-translate-y-0.5 transition-transform disabled:opacity-60 disabled:translate-y-0"
            >
              {status === "sending" ? "Sending..." : "Send inquiry"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
