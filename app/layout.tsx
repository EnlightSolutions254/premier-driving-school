import type { Metadata } from "next";
import { Sora, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import RoadProgress from "@/components/RoadProgress";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--font-sora" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-plex-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://premier-driving-school.vercel.app"),
  title: "Premier Driving School Kenya | Learn. Drive. Succeed.",
  description:
    "Kenya's trusted driving school helping thousands of students become safe and confident drivers. NTSA-certified instructors, modern vehicles, 12 branches nationwide.",
  keywords: [
    "driving school Kenya",
    "NTSA driving school",
    "driving lessons Nairobi",
    "driving classes Kenya",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Premier Driving School Kenya | Learn. Drive. Succeed.",
    description:
      "NTSA-certified instruction, modern vehicles, and flexible lessons across Kenya.",
    type: "website",
    url: "/",
    locale: "en_KE",
    siteName: "Premier Driving School Kenya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premier Driving School Kenya",
    description: "Professional driver training across Kenya with NTSA-certified instructors.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-body antialiased">
        <SmoothScrollProvider />
        <RoadProgress />
        <Navbar />
        {children}
        <FloatingContactButtons />
        <Footer />
      </body>
    </html>
  );
}
