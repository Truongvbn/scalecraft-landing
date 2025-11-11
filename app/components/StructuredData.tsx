export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Scalecraft",
    "url": "https://scalecraft.com",
    "logo": "https://scalecraft.com/scalecraft-logo.png",
    "description": "Performance Design Outsourcing für E-Commerce Agenturen & DTC Brands",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["German", "English"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/scalecraftdh/",
      "https://www.linkedin.com/in/dachoa/"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Scalecraft",
    "url": "https://scalecraft.com",
    "description": "Scalecraft liefert dir ein eingespieltes Performance-Designteam – optimiert für Amazon / E-Commerce Agenturen und Freelancer.",
    "publisher": {
      "@type": "Organization",
      "name": "Scalecraft"
    },
    "inLanguage": "de-DE"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Design Outsourcing",
    "provider": {
      "@type": "Organization",
      "name": "Scalecraft"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Germany"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Design Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Commerce Design",
            "description": "Performance Design für E-Commerce und Amazon"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Design System",
            "description": "Strukturierte Design-Systeme für schnellere Creative-Produktion"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "BAT-Methode",
            "description": "Business Development – Account Management – Team Lead Methode"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

