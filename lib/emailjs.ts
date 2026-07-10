import emailjs from "@emailjs/browser";

// Set these three values in .env.local — see README for setup instructions:
// NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export interface InquiryPayload {
  fullName: string;
  phone: string;
  email: string;
  course: string;
  branch: string;
  message: string;
}

export async function sendInquiry(payload: InquiryPayload) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      "EmailJS is not configured. Add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to .env.local."
    );
  }

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      full_name: payload.fullName,
      phone: payload.phone,
      email: payload.email,
      course: payload.course,
      branch: payload.branch,
      message: payload.message,
    },
    { publicKey: PUBLIC_KEY }
  );
}
