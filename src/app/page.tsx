import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { OurWorkSection } from "@/components/OurWorkSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TechnologySection } from "@/components/TechnologySection";
import { WorkSection } from "@/components/WorkSection";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { WebsiteTypesSection } from "@/components/WebsiteTypesSection";

export default function Home() {
  return (
    <main>
      <SeoJsonLd />
      <Header />
      <HeroSection />
      <WebsiteTypesSection />
      <WorkSection />
      <OurWorkSection />
      <ServicesSection />
      <TechnologySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
