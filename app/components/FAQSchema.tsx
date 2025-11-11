export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wie läuft die Zusammenarbeit mit Scalecraft ab?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Zusammenarbeit beginnt mit einem kostenlosen Erstgespräch, in dem wir deine Anforderungen besprechen und einen maßgeschneiderten Plan erstellen."
        }
      },
      {
        "@type": "Question",
        "name": "Wie schnell kann ein Projekt starten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In der Regel können wir innerhalb von 48 Stunden nach Vertragsabschluss mit deinem Projekt starten."
        }
      },
      {
        "@type": "Question",
        "name": "Was unterscheidet Scalecraft von klassischen Agenturen oder Freelancern?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir bieten die Flexibilität von Freelancern mit der Zuverlässigkeit und Qualität einer Agentur, kombiniert mit strukturierten Prozessen und einem festen Ansprechpartner."
        }
      },
      {
        "@type": "Question",
        "name": "Wie funktioniert die BAT-Methode?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die BAT-Methode (Brief, Approve, Track) ist unser strukturierter Prozess für effiziente Projektumsetzung mit klaren Briefings, schnellen Freigaben und transparentem Tracking."
        }
      },
      {
        "@type": "Question",
        "name": "Für wen ist Scalecraft geeignet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Scalecraft ist ideal für Agenturen, Freelancer und Creators, die ihre Designprozesse professionalisieren und skalieren möchten."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Leistungen kann ich outsourcen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Du kannst alle Design- und Creative-Leistungen outsourcen, von Social Media Content über Webdesign bis hin zu Branding und Motion Graphics."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

