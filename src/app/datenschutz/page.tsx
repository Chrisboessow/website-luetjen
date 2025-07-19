import { Metadata } from 'next'
import BaseSection from '@/components/layout/BaseSection'
import SectionHeader from '@/components/layout/SectionHeader'

export const metadata: Metadata = {
  title: 'Datenschutz | Lütjen Tor- und Metallbau',
  description: 'Datenschutzerklärung der Lütjen GmbH - Informationen zum Umgang mit Ihren Daten.',
}

export default function DatenschutzPage() {
  return (
    <main className="bg-white">
      <BaseSection>
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Datenschutzerklärung"
            subtitle="Informationen zum Umgang mit Ihren Daten"
            centered
          />

          <div className="mt-16 space-y-16">
            {/* 1. Datenschutz auf einen Blick */}
            <div className="rounded-2xl bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">1. Datenschutz auf einen Blick</h2>
              <div className="mt-6 space-y-6 text-gray-600">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Allgemeine Hinweise</h3>
                  <p className="text-lg leading-relaxed">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Datenerfassung auf dieser Website</h3>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                  <p className="text-lg mb-4">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt "Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Wie erfassen wir Ihre Daten?</h4>
                  <p className="text-lg mb-4">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                  </p>
                  <p className="text-lg mb-4">
                    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Wofür nutzen wir Ihre Daten?</h4>
                  <p className="text-lg mb-4">
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                  <p className="text-lg">
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Hosting */}
            <div className="rounded-2xl bg-primary-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">2. Hosting</h2>
              <div className="mt-6 space-y-6 text-gray-600">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">IONOS</h3>
                  <p className="text-lg leading-relaxed">
                    Wir hosten unsere Website bei IONOS SE. Anbieter ist die IONOS SE, Elgendorfer Str. 57, 56410 Montabaur (nachfolgend IONOS). Wenn Sie unsere Website besuchen, erfasst IONOS verschiedene Logfiles inklusive Ihrer IP-Adressen. Details entnehmen Sie der Datenschutzerklärung von IONOS: https://www.ionos.de/terms-gtc/terms-privacy.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
            <div className="rounded-2xl bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              <div className="mt-6 space-y-6 text-gray-600">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Datenschutz</h3>
                  <p className="text-lg leading-relaxed">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Hinweis zur verantwortlichen Stelle</h3>
                  <p className="text-lg leading-relaxed">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <p className="text-lg mt-4">
                    Lütjen GmbH<br />
                    Jan-Weber-Straße 16<br />
                    27726 Worpswede<br /><br />
                    Telefon: +49 4792 95574-0<br />
                    E-Mail: info@luetjen-tore.de
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Datenerfassung auf dieser Website */}
            <div className="rounded-2xl bg-primary-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">4. Datenerfassung auf dieser Website</h2>
              <div className="mt-6 space-y-6 text-gray-600">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies</h3>
                  <p className="text-lg leading-relaxed">
                    Unsere Internetseiten verwenden so genannte "Cookies". Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Server-Log-Dateien</h3>
                  <p className="text-lg leading-relaxed">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Analyse-Tools und Werbung */}
            <div className="rounded-2xl bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">5. Analyse-Tools und Werbung</h2>
              <div className="mt-6 space-y-6 text-gray-600">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">IONOS WebAnalytics</h3>
                  <p className="text-lg leading-relaxed">
                    Diese Website nutzt die Analysedienste von IONOS WebAnalytics. Anbieter ist die 1&1 IONOS SE, Elgendorfer Straße 57, D – 56410 Montabaur.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Plugins und Tools */}
            <div className="rounded-2xl bg-primary-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">6. Plugins und Tools</h2>
              <div className="mt-6 space-y-6 text-gray-600">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Adobe Fonts</h3>
                  <p className="text-lg leading-relaxed">
                    Diese Website nutzt zur einheitlichen Darstellung bestimmter Schriftarten Web Fonts von Adobe. Anbieter ist die Adobe Systems Incorporated, 345 Park Avenue, San Jose, CA 95110-2704, USA (Adobe).
                  </p>
                </div>
              </div>
            </div>

            {/* 7. eCommerce und Zahlungsanbieter */}
            <div className="rounded-2xl bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">7. eCommerce und Zahlungsanbieter</h2>
              <div className="mt-6 space-y-6 text-gray-600">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Verarbeiten von Kunden- und Vertragsdaten</h3>
                  <p className="text-lg leading-relaxed">
                    Wir erheben, verarbeiten und nutzen personenbezogene Kunden- und Vertragsdaten zur Begründung, inhaltlichen Ausgestaltung und Änderung unserer Vertragsbeziehungen.
                  </p>
                </div>
              </div>
            </div>

            {/* 8. Eigene Dienste */}
            <div className="rounded-2xl bg-primary-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">8. Eigene Dienste</h2>
              <div className="mt-6 space-y-6 text-gray-600">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Umgang mit Bewerberdaten</h3>
                  <p className="text-lg leading-relaxed">
                    Wir bieten Ihnen die Möglichkeit, sich bei uns zu bewerben (z. B. per E-Mail, postalisch oder via Online-Bewerberformular). Im Folgenden informieren wir Sie über Umfang, Zweck und Verwendung Ihrer im Rahmen des Bewerbungsprozesses erhobenen personenbezogenen Daten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseSection>
    </main>
  )
} 