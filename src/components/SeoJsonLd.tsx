const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "WieldTech",
  url: "https://wieldtech.dev",
  email: "hello@wieldtech.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Phuket",
    addressCountry: "TH",
  },
  description: "WieldTech designs and builds thoughtful web experiences.",
  areaServed: "Thailand",
  knowsAbout: [
    "Web Development",
    "UX/UI Design",
    "Web Performance",
    "Accessibility",
  ],
};
export function SeoJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
