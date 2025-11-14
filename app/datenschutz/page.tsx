import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Scalecraft",
  description: "Datenschutzerklärung von Scalecraft",
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-16 md:px-8 md:py-24">
        {/* Back to Home Link */}
        <Link 
          href="/" 
          className="inline-flex items-center text-[#404040] hover:text-[#252525] mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Zurück zur Startseite
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-[#252525] mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-lg max-w-none text-[#404040]">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#252525] mb-4">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-xl font-semibold text-[#252525] mb-3 mt-6">Allgemeine Hinweise</h3>
            <p className="leading-relaxed mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
              Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
              denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema 
              Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold text-[#252525] mb-3 mt-6">Datenerfassung auf dieser Website</h3>
            <p className="leading-relaxed mb-4">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung 
              entnehmen.
            </p>

            <p className="leading-relaxed mb-4">
              <strong>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
              z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch 
              oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind 
              vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). 
              Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>

            <p className="leading-relaxed mb-4">
              <strong>Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
              Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <p className="leading-relaxed mb-4">
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
              oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt 
              haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das 
              Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten 
              zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#252525] mb-4">2. Hosting</h2>
            
            <h3 className="text-xl font-semibold text-[#252525] mb-3 mt-6">Vercel</h3>
            <p className="leading-relaxed mb-4">
              Wir hosten unsere Website bei Vercel. Anbieter ist Vercel Inc., 340 S Lemon Ave #4133, 
              Walnut, CA 91789, USA (nachfolgend Vercel).
            </p>
            <p className="leading-relaxed mb-4">
              Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen. 
              Details entnehmen Sie der Datenschutzerklärung von Vercel:{" "}
              <a 
                href="https://vercel.com/legal/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#ec6036] hover:text-[#f1983f] underline"
              >
                https://vercel.com/legal/privacy-policy
              </a>
            </p>
            <p className="leading-relaxed mb-4">
              Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein 
              berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#252525] mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-xl font-semibold text-[#252525] mb-3 mt-6">Datenschutz</h3>
            <p className="leading-relaxed mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
              Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften 
              sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold text-[#252525] mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
            <p className="leading-relaxed mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="leading-relaxed mb-4">
              Công Ty TNHH DH Ventures Vietnam<br />
              Số 31 ngõ 5 Lê Trọng Tấn<br />
              Phường La Khê, Quận Hà Đông<br />
              Hanoi, 12122, Vietnam<br />
              <br />
              Telefon: [Telefonnummer]<br />
              E-Mail: [E-Mail-Adresse]
            </p>
            <p className="leading-relaxed mb-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit 
              anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, 
              E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            <h3 className="text-xl font-semibold text-[#252525] mb-3 mt-6">Speicherdauer</h3>
            <p className="leading-relaxed mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
              verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
            </p>

            <h3 className="text-xl font-semibold text-[#252525] mb-3 mt-6">SSL- bzw. TLS-Verschlüsselung</h3>
            <p className="leading-relaxed mb-4">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine 
              SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die 
              Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer 
              Browserzeile.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#252525] mb-4">4. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-xl font-semibold text-[#252525] mb-3 mt-6">Cookies</h3>
            <p className="leading-relaxed mb-4">
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien und richten 
              auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung 
              (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
            </p>

            <h3 className="text-xl font-semibold text-[#252525] mb-3 mt-6">Calendly</h3>
            <p className="leading-relaxed mb-4">
              Auf unserer Website haben Sie die Möglichkeit, Termine mit uns zu vereinbaren. Für die Terminbuchung 
              nutzen wir das Tool „Calendly". Anbieter ist die Calendly LLC, 271 17th St NW, 10th Floor, Atlanta, 
              Georgia 30363, USA (nachfolgend „Calendly").
            </p>
            <p className="leading-relaxed mb-4">
              Zum Zweck der Terminbuchung geben Sie die abgefragten Daten und den Wunschtermin in die dafür 
              vorgesehene Maske ein. Die eingegebenen Daten werden für die Planung, Durchführung und ggf. für die 
              Nachbereitung des Termins verwendet.
            </p>
            <p className="leading-relaxed mb-4">
              Weitere Informationen finden Sie in der Datenschutzerklärung von Calendly:{" "}
              <a 
                href="https://calendly.com/de/pages/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#ec6036] hover:text-[#f1983f] underline"
              >
                https://calendly.com/de/pages/privacy
              </a>
            </p>
          </section>

          <p className="text-sm text-[#8987a1] mt-12">
            Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </main>
    </div>
  );
}
