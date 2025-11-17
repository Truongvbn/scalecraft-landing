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
          "text": "Nach einem kurzen Erstgespräch erhältst du Zugang zu unserem strukturierten Workflow. Du gibst dein Briefing ab – wir übernehmen den Rest: Planung, Design und Übergabe."
        }
      },
      {
        "@type": "Question",
        "name": "Wie schnell kann ein Projekt starten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In der Regel innerhalb von 3–5 Werktagen nach Kickoff. Wir arbeiten mit klaren Timelines und liefern zuverlässig – auch bei kurzfristigen Deadlines."
        }
      },
      {
        "@type": "Question",
        "name": "Was unterscheidet Scalecraft von klassischen Agenturen oder Freelancern?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir kombinieren die Effizienz eines dedizierten Designteams mit der Flexibilität externer Ressourcen. Kein Ticketsystem, keine Kommunikationslücken – dein persönlicher Ansprechpartner koordiniert alles. Arbeiten wie DEIN OFFSHORE TEAM"
        }
      },
      {
        "@type": "Question",
        "name": "Wie funktioniert die BAT-Methode?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unsere BAT-Methode (Business Development – Account Management – Team Lead) sorgt für Struktur, klare Verantwortlichkeiten und Priorisierung. So bleibt dein Designprozess messbar, transparent und skalierbar."
        }
      },
      {
        "@type": "Question",
        "name": "Für wen ist Scalecraft geeignet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Für E-Commerce-AMAZON - Agenturen, Freelancer und Marketing-Teams, die mehr Design-Output brauchen, ohne interne Ressourcen aufzubauen."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Leistungen kann ich outsourcen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Von Amazon-Visuals über Ad Creatives, Landingpage-Designs, 3D-Renderings bis hin zu Branding-Systemen – unser Team deckt die gesamte Design-Pipeline ab."
        }
      },
      {
        "@type": "Question",
        "name": "Wie flexibel sind die Kapazitäten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Du kannst monatlich zwischen verschiedenen Stundenpaketen wählen – von 80 bis 640 Stunden. Ohne langfristige Bindung, jederzeit skalierbar."
        }
      },
      {
        "@type": "Question",
        "name": "Wie gewährleistet ihr gleichbleibende Qualität?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Durch feste Ansprechpartner, interne Qualitätssicherung und klar dokumentierte Workflows. Jedes Creative durchläuft eine Review-Schleife, bevor es final übergeben wird."
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

