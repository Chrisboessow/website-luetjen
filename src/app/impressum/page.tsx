import { Metadata } from 'next'
import BaseSection from '@/components/layout/BaseSection'
import SectionHeader from '@/components/layout/SectionHeader'

export const metadata: Metadata = {
  title: 'Impressum | Lütjen Tor- und Metallbau',
  description: 'Rechtliche Informationen und Impressum der Lütjen GmbH.',
}

export default function ImpressumPage() {
  return (
    <main className="bg-white">
      <BaseSection>
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            title="Impressum"
            subtitle="Rechtliche Informationen der Lütjen GmbH"
            centered
          />

          <div className="mt-16 space-y-16">
            {/* Angaben gemäß § 5 TMG */}
            <div className="rounded-2xl bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">Angaben gemäß § 5 TMG</h2>
              <div className="mt-6 space-y-4 text-gray-600">
                <p className="text-lg">
                  Lütjen GmbH<br />
                  Jan-Weber-Straße 16<br />
                  27726 Worpswede
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-lg">
                    Handelsregister: 121074<br />
                    Registergericht: Amtsgericht Walsrode
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-lg">
                    <span className="font-semibold text-gray-900">Vertreten durch:</span><br />
                    Christoph Lütjen
                  </p>
                </div>
              </div>
            </div>

            {/* Kontakt */}
            <div className="rounded-2xl bg-primary-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">Kontakt</h2>
              <div className="mt-6 space-y-2 text-lg text-gray-600">
                <p>Telefon: 04792 95574-0</p>
                <p>Telefax: 04792 955 74-29</p>
                <p>E-Mail: info@luetjen-tore.de</p>
              </div>
            </div>

            {/* Umsatzsteuer-ID */}
            <div className="rounded-2xl bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">Umsatzsteuer-ID</h2>
              <p className="mt-6 text-lg text-gray-600">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                <span className="font-semibold text-primary-600">DE203804505</span>
              </p>
            </div>

            {/* Berufshaftpflichtversicherung */}
            <div className="rounded-2xl bg-primary-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">Angaben zur Berufshaftpflichtversicherung</h2>
              <div className="mt-6 space-y-4 text-lg text-gray-600">
                <p>
                  <span className="font-semibold text-gray-900">Name und Sitz des Versicherers:</span><br />
                  HDI Versicherung AG<br />
                  30650 Hannover
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Geltungsraum der Versicherung:</span><br />
                  Deutschland
                </p>
              </div>
            </div>

            {/* Verbraucherstreitbeilegung */}
            <div className="rounded-2xl bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
              <p className="mt-6 text-lg text-gray-600">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            {/* Urheberrechtshinweise */}
            <div className="rounded-2xl bg-primary-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">Urheberrechtshinweise</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Alle Texte, Bilder sowie das Layout dieser Site sind urheberrechtlich geschützt. Die Verwendung der Inhalte dieser Internetseite bedürfen einer schriftlichen Genehmigung durch den Verantwortlichen dieser Site. Die auf dieser Internetseite genannten Produktbezeichnungen oder Firmennamen sind Eigentum der jeweiligen Inhaber und unterliegen als solche dem gesetzlichen warenzeichen-, marken- und/oder patentrechtlichen Schutz. Ein Gegendarstellungsanspruch gilt nur im Sinne des §10 MDStV.
              </p>
            </div>

            {/* Haftungsausschluss */}
            <div className="rounded-2xl bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">Haftungsausschluss</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Die Inhalte dieser Seiten dienen nur zur Ihrer ausschließlichen Information und sind nach bestem Wissen und Gewissen zusammengestellt worden. Eine Haftung für die Vollständigkeit, Aktualität und die Richtigkeit der Inhalte wird in keinem Fall übernommen. Die Inhalte anderer Websites, auf die diese Internetseite mit Hyperlinks verweist, entziehen sich der Kontrolle und Verantwortlichkeit des Verantwortlichen dieser Site. Wenn Sie diesen Links folgen, dann tun Sie das auf eigene Gefahr.
              </p>
            </div>
          </div>
        </div>
      </BaseSection>
    </main>
  )
} 