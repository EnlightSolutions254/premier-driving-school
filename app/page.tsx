import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoursesPreview from "@/components/CoursesPreview";
import Testimonials from "@/components/Testimonials";
import BranchesPreview from "@/components/BranchesPreview";
import CTA from "@/components/CTA";

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
