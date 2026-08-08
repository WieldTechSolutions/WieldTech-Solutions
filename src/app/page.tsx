import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { OurWorkSection } from "@/components/OurWorkSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TechnologySection } from "@/components/TechnologySection";
import { TrustedOrganizationsSection } from "@/components/TrustedOrganizationsSection";
import { WorkSection } from "@/components/WorkSection";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { ScrollToSection } from "@/components/ScrollToSection";
import { WebsiteTypesSection } from "@/components/WebsiteTypesSection";

export default function Home() {
  return (
    <main>
      <SeoJsonLd />
      <ScrollToSection />
      <Header />
      <HeroSection />
      <WebsiteTypesSection />
      <WorkSection />
      <TrustedOrganizationsSection />
      <OurWorkSection />
      <ServicesSection />
      <TechnologySection />
      <ContactSection />
    </main>
  );
}
