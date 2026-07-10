import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href="https://wa.me/254111333599"
        aria-label="Contact us on WhatsApp at 0111 333 599"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 sm:h-14 sm:w-14"
      >
        <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
      </a>
      <a
        href="tel:+254111333599"
        aria-label="Call us at 0111 333 599"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-lg transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 sm:h-14 sm:w-14"
      >
        <FaPhoneAlt className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
      </a>
    </div>
  );
}