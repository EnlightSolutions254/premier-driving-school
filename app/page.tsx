import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoursesPreview from "@/components/CoursesPreview";
import Testimonials from "@/components/Testimonials";
import BranchesPreview from "@/components/BranchesPreview";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Premier Driving School Kenya | Top Rated NTSA Certified Driving School",
  description: "Enroll at Premier Driving School Kenya. Certified NTSA instructors, flexible schedules, modern vehicles, & transparent pricing. Call 0111 333 599 today!",
  keywords: [
    "driving school Kenya",
    "best driving school Nairobi",
    "NTSA driving school",
    "Class B driving lessons",
    "heavy commercial truck training Kenya",
    "motorcycle riding lessons Kenya",
    "PSV license training",
    "driving lessons Nakuru Mombasa Kisumu",
  ],
  openGraph: {
    title: "Premier Driving School Kenya | Learn. Drive. Succeed.",
    description: "Kenya's trusted driving school helping thousands of students become safe and confident drivers with NTSA-certified instructors and 12 branches nationwide.",
    type: "website",
    locale: "en_KE",
    siteName: "Premier Driving School Kenya",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <CoursesPreview />
      <Testimonials />
      <BranchesPreview />
      <CTA />
    </main>
  );
}
