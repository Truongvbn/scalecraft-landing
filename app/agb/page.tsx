import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB | Scalecraft",
  description: "Allgemeine Geschäftsbedingungen von Scalecraft",
};

export default function AGBPage() {
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

        <h1 className="text-4xl md:text-5xl font-bold text-[#252525] mb-8">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <div className="prose prose-lg max-w-none text-[#404040]">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#252525] mb-4">§ 1 Anwendungsbereich</h2>
            <p className="leading-relaxed mb-4">
              <strong>§1.1</strong> Alle Leistungen und Angebote von Công Ty TNHH DH Ventures Vietnam 
              (nachfolgend „Scalecraft") erfolgen ausschließlich aufgrund dieser Allgemeinen Geschäftsbedingungen. 
              Diese sind Bestandteil aller Verträge, die Scalecraft mit ihren Vertragspartnern (nachfolgend auch 
              „Kunde" genannt) über die von ihr angebotenen Lieferungen oder Leistungen schließt. Sie gelten auch 
              für alle zukünftigen Leistungen oder Angebote an den Kunden, selbst wenn sie nicht nochmals gesondert 
              vereinbart werden.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>§1.2</strong> Geschäftsbedingungen des Kunden oder Dritter finden keine Anwendung, auch wenn 
              Scalecraft ihrer Geltung im Einzelfall nicht gesondert widerspricht. Selbst wenn Scalecraft auf ein 
              Schreiben oder eine E-Mail Bezug nimmt, das Geschäftsbedingungen des Kunden oder eines Dritten enthält 
              oder auf solche verweist, liegt darin kein Einverständnis mit der Geltung jener Geschäftsbedingungen.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>§1.3</strong> Die Angebote und Leistungen von Scalecraft richten sich ausschließlich an 
              Unternehmer (§ 14 BGB) und an Kaufleute (HGB).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#252525] mb-4">§ 2 Leistungen</h2>
            <p className="leading-relaxed mb-4">
              <strong>§2.1</strong> Scalecraft erbringt onlinebasierte Beratungsdienstleistungen für (Online-) 
              Marketingagenturen, insbesondere in den Bereichen der betrieblichen Prozessoptimierung und des 
              Projektmanagements. Soweit nicht ausdrücklich schriftlich abweichend vereinbart, schuldet Scalecraft 
              dem Kunden nicht die Erbringung eines konkreten Erfolgs, insbesondere nicht das Erreichen konkreter 
              Umsatzgrenzen/Kennzahlen.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>§2.2</strong> Der Kunde hat die ihm obliegenden Mitwirkungshandlungen stets vollständig und 
              fristgemäß auf erstes Anfordern von Scalecraft zu erbringen. Unterlässt der Kunde eine 
              Mitwirkungshandlung und verhindert damit die Leistungserbringung durch Scalecraft, bleibt der 
              Vergütungsanspruch von Scalecraft unberührt.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>§2.3</strong> In Bezug auf die von Scalecraft zu erbringenden Dienstleistungen gegenüber dem 
              Kunden steht Scalecraft hinsichtlich der Ausführung ein Leistungsbestimmungsrecht nach § 315 BGB zu.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>§2.4</strong> Scalecraft ist berechtigt, dem Kunden geschuldete Leistungen auch von 
              Subunternehmern und Dritten erbringen zu lassen. Eine Leistungserbringung in Person wird nicht geschuldet.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#252525] mb-4">§ 3 Zahlungen, Preise, Bedingungen</h2>
            <p className="leading-relaxed mb-4">
              <strong>§3.1</strong> Die Preise, die von Scalecraft angegeben und mitgeteilt werden, sind verbindlich. 
              Die mitgeteilten Preise verstehen sich jeweils netto zuzüglich gesetzlicher Umsatzsteuer.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>§3.2</strong> Die vom Kunden geschuldete Vergütung ist vorbehaltlich anderslautender 
              Individualabrede sofort, in voller Höhe und im Voraus fällig.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>§3.3</strong> Scalecraft stellt dem Kunden eine ordnungsgemäße und die Umsatzsteuer ausweisende 
              Rechnung aus (ggf. durch Erfüllungsgehilfen).
            </p>
            <p className="leading-relaxed mb-4">
              <strong>§3.4</strong> Die Aufrechnung mit Gegenforderungen ist wechselseitig nur zulässig, wenn der 
              jeweils andere Vertragspartner die Aufrechnung anerkannt hat oder diese rechtskräftig festgestellt ist. 
              Dasselbe gilt für die Ausübung eines Zurückbehaltungsrechts durch eine Vertragspartei.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#252525] mb-4">§ 4 Kündigung, Laufzeit</h2>
            <p className="leading-relaxed mb-4">
              <strong>§4.1</strong> Der Vertrag hat die individuell zwischen den Parteien vereinbarte Mindestlaufzeit. 
              Die vorzeitige Kündigung ist ausgeschlossen.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>§4.2</strong> Etwaige freie Kündigungsrechte vor Ablauf der Vertragslaufzeit sind ausgeschlossen.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>§4.3</strong> Kündigungen bedürfen zu ihrer Wirksamkeit stets der Schriftform.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>§4.4</strong> Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt stets unberührt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#252525] mb-4">§ 5 Verzug / außerordentliche Kündigung</h2>
            <p className="leading-relaxed mb-4">
              <strong>§5.1</strong> Fristen für die Leistungserbringung durch Scalecraft beginnen nicht, bevor der 
              Rechnungsbetrag bei Scalecraft eingegangen ist und vereinbarungsgemäß die für die Dienstleistungen 
              notwendigen Daten bei Scalecraft vollständig vorliegen beziehungsweise die notwendigen 
              Mitwirkungshandlungen komplett erbracht sind.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>§5.2</strong> Ist der Kunde mit fälligen Zahlungen im Verzug, behält Scalecraft sich vor, 
              weitere Leistungen bis zum Ausgleich des offenen Betrages nicht auszuführen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#252525] mb-4">§ 6 Erfüllung</h2>
            <p className="leading-relaxed mb-4">
              <strong>§6.1</strong> Scalecraft wird die vereinbarten Dienstleistungen gemäß Angebot mit der 
              erforderlichen Sorgfalt durchführen. Scalecraft ist berechtigt, sich dazu uneingeschränkt der Hilfe 
              Dritter zu bedienen.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>§6.2</strong> Ist Scalecraft gehindert, die vereinbarten Dienstleistungen zu erbringen und 
              stammen die Hinderungsgründe aus der Sphäre des Kunden, bleibt der Vergütungsanspruch von Scalecraft 
              unberührt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#252525] mb-4">§ 7 Nutzungsrechte</h2>
            <p className="leading-relaxed mb-4">
              <strong>§7.1</strong> Der Kunde erhält für die Dauer der Vertragslaufzeit ein einfaches, dauerhaftes 
              und nicht übertragbares Nutzungsrecht in Bezug auf die von Scalecraft erstellten und zur Verfügung 
              gestellten Arbeits- und Beratungsmaterialien.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>§7.2</strong> Die Weitergabe der Arbeits- und Leistungsergebnisse an Dritte (auch verbundene 
              Unternehmen) wird ausgeschlossen. Gleiches gilt für eine Bearbeitung nach § 23 UrhG.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#252525] mb-4">§ 8 Widerrufsrecht</h2>
            <p className="leading-relaxed mb-4">
              Ein Widerrufsrecht für Unternehmer im Sinne des § 14 BGB und Kaufleute gemäß Handelsgesetzbuch (HGB) 
              besteht weder von Gesetzes wegen noch wird ein solches von Scalecraft anderweitig eingeräumt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#252525] mb-4">§ 9 Haftung</h2>
            <p className="leading-relaxed mb-4">
              <strong>§9.1</strong> Scalecraft haftet auf Schadensersatz – gleich aus welchem Rechtsgrund – nur für 
              Vorsatz und grobe Fahrlässigkeit. Bei einfacher Fahrlässigkeit haftet Scalecraft nur für Schäden aus 
              der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für Schäden aus der Verletzung einer 
              wesentlichen Vertragspflicht.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>§9.2</strong> Die Haftung nach dem Produkthaftungsgesetz bleibt ebenso stets unberührt wie die 
              für die Übernahme einer Garantie.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#252525] mb-4">§ 10 Schlussbestimmungen</h2>
            <p className="leading-relaxed mb-4">
              <strong>§10.1</strong> Abweichungen von diesen AGB sind nur wirksam, wenn sie schriftlich vereinbart 
              wurden. Im Einzelfall getroffene, individuelle Vereinbarungen mit dem Kunden haben in jedem Fall 
              Vorrang vor diesen AGB.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>§10.2</strong> Das gesamte Vertragsverhältnis zwischen Scalecraft und dem Kunden unterliegt 
              deutschem Recht unter Ausschluss des UN-Kaufrechts.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>§10.3</strong> Sollten eine oder mehrere Bestimmungen des Vertrags aus tatsächlichen oder 
              rechtlichen Gründen unwirksam oder undurchführbar sein oder werden, so wird die Wirksamkeit der 
              übrigen Vertragsbestimmungen hierdurch nicht berührt.
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
