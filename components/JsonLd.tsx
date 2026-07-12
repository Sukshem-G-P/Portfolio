import { siteConfig } from "@/lib/site";

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}/photo.jpg`,
    jobTitle: siteConfig.role,
    email: `mailto:${siteConfig.social.email}`,
    telephone: siteConfig.social.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    worksFor: {
      "@type": "Organization",
      name: "FareFirst",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Canara Engineering College",
    },
    // sameAs is the key field: it tells Google these profiles all belong
    // to the same entity, which is what surfaces LinkedIn/GitHub/LeetCode
    // together in a knowledge-panel-style result for your name.
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.leetcode,
      siteConfig.social.gfg,
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
