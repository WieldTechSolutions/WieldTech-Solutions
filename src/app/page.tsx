import { ContactSection } from "@/components/contact/ContactSection";
import { HeroSection } from "@/components/home/HeroSection";
import { OurWorkSection } from "@/components/home/OurWorkSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { TrustedOrganizationsSection } from "@/components/home/TrustedOrganizationsSection";
import { WorkSection } from "@/components/home/WorkSection";
import { Header } from "@/components/layout/Header";
import { ScrollToSection } from "@/components/shared/ScrollToSection";
import { SeoJsonLd } from "@/components/shared/SeoJsonLd";
import { WebsiteTypesSection } from "@/components/website-types/WebsiteTypesSection";

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
