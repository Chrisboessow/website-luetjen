'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon, PhoneIcon, TruckIcon } from '@heroicons/react/24/solid'
import BaseSection from '@/components/layout/BaseSection'
import SectionHeader from '@/components/layout/SectionHeader'

const productTypes = [
  {
    name: "Dockshelter",
    description: "Wetterschutz und Abdichtung für Ihre Verladerampe",
    image: "/images/products/Dockshelter(Andockdichtung).jpg",
    features: [
      "Aufblasbare Dichtung für optimalen Abschluss",
      "Wetterschutz bei jeder Witterung",
      "Energieersparnis durch Abdichtung",
      "Anpassung an verschiedene LKW-Größen"
    ],
    applications: ["Logistikzentren", "Warenlager", "Distributionszentren"]
  },
  {
    name: "Verladebrücken",
    description: "Sichere Verbindung zwischen Rampe und LKW",
    image: "/images/products/Verladebrücken.jpg",
    features: [
      "Tragkraft bis 6 Tonnen",
      "Höhenausgleich automatisch",
      "Rutschfeste Oberfläche",
      "Hydraulischer oder mechanischer Antrieb"
    ],
    applications: ["Speditionen", "Industriebetriebe", "Handelszentren"]
  },
  {
    name: "Überbrückungsbleche",
    description: "Flexible Lösung für verschiedene Fahrzeughöhen",
    image: "/images/products/überbrückungsbleche.jpg",
    features: [
      "Einstellbarer Neigungswinkel",
      "Robuste Stahlkonstruktion",
      "Rutschfeste Auflagen",
      "Platzsparende Lagerung"
    ],
    applications: ["Kleinbetriebe", "Flexible Verladestellen", "Servicefahrzeuge"]
  },
  {
    name: "Torabdichtungen",
    description: "Komplette Abdichtungssysteme für Verladeöffnungen",
    image: "/images/products/Torabdichtungen.jpg",
    features: [
      "Umlaufende Dichtung",
      "Minimierung von Energieverlusten",
      "Schutz vor Witterungseinflüssen",
      "Individuelle Anpassung"
    ],
    applications: ["Kühlhäuser", "Temperaturkritische Lager", "Pharmalogistik"]
  }
]

const benefits = [
  {
    title: "Effizienzsteigerung",
    description: "Bis zu 30% schnellere Be- und Entladung durch optimierte Prozesse",
    icon: "⚡",
    metric: "30% schneller"
  },
  {
    title: "Energieersparnis",
    description: "Reduzierte Heiz- und Kühlkosten durch bessere Abdichtung",
    icon: "💰",
    metric: "Bis zu 40% Ersparnis"
  },
  {
    title: "Sicherheit",
    description: "Minimiertes Unfallrisiko durch sichere Verladetechnik",
    icon: "🛡️",
    metric: "100% Sicherheit"
  },
  {
    title: "Witterungsschutz",
    description: "Schutz von Waren und Personal vor Wind und Wetter",
    icon: "🌦️",
    metric: "Ganzjähriger Schutz"
  }
]

const industries = [
  {
    name: "Logistik & Spedition",
    description: "Optimierte Umschlagszeiten für den Gütertransport",
    features: ["24/7 Betrieb", "Schnelle Abwicklung", "Verschiedene LKW-Typen"]
  },
  {
    name: "Lebensmittelindustrie",
    description: "Hygienische und temperaturkontrollierte Verladung",
    features: ["HACCP-konform", "Temperaturschutz", "Kontaminationsschutz"]
  },
  {
    name: "Automobilindustrie",
    description: "Präzise Verladung sensibler Fahrzeugteile",
    features: ["Staubfrei", "Erschütterungsarm", "Just-in-Time Lieferung"]
  },
  {
    name: "Pharma & Chemie",
    description: "Sichere Handhabung kritischer Güter",
    features: ["Reinraumstandard", "Kontaminationsschutz", "Dokumentation"]
  }
]

export default function VerladetechnikPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Zurück zu Leistungen
            </Link>
            <h1 className="relative inline-block text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              <span className="relative">
                Verladetechnik
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="15"
                  viewBox="0 0 400 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 12.5C133.667 4.16667 267.333 4.16667 399 12.5"
                    stroke="#2563eb"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Professionelle Lösungen für effiziente Logistikprozesse - von Docksheltern bis zu Verladebrücken.
            </p>
          </div>
        </div>
      </section>

      {/* Product Types */}
      <BaseSection>
        <SectionHeader
          title="Unsere Verladetechnik-Lösungen"
          subtitle="Für jeden Logistikbedarf die passende Ausstattung"
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {productTypes.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback für fehlende Bilder
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' font-family='Arial, sans-serif' font-size='16' fill='%236b7280'%3E" + product.name + "%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Eigenschaften:</h4>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-5 w-5 flex-none text-primary-600 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Ideal für:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span 
                      key={app}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {app}
                    </span>
                  ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </BaseSection>

      {/* Benefits */}
      <BaseSection className="bg-gray-50">
        <SectionHeader
          title="Ihre Vorteile mit unserer Verladetechnik"
          subtitle="Messbare Verbesserungen für Ihr Unternehmen"
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-white rounded-xl p-6 shadow-md"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <div className="text-2xl font-bold text-primary-600">{benefit.metric}</div>
            </motion.div>
          ))}
        </div>
      </BaseSection>

      {/* Industries */}
      <BaseSection>
        <SectionHeader
          title="Branchenlösungen"
          subtitle="Spezialisierte Lösungen für verschiedene Industriezweige"
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <TruckIcon className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
              <p className="text-gray-600 mb-4">{industry.description}</p>
              <div className="space-y-2">
                {industry.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary-600" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </BaseSection>

      {/* ROI Calculator */}
      <BaseSection className="bg-blue-50">
        <div className="rounded-2xl bg-white p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Investition, die sich rechnet
            </h2>
            <p className="text-gray-700">
              Unsere Verladetechnik amortisiert sich häufig bereits im ersten Jahr
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">30%</div>
              <div className="text-gray-900 font-semibold mb-2">Zeitersparnis</div>
              <div className="text-gray-600 text-sm">Schnellere Be- und Entladung</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-gray-900 font-semibold mb-2">Energieersparnis</div>
              <div className="text-gray-600 text-sm">Reduzierte Heiz-/Kühlkosten</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">12-18</div>
              <div className="text-gray-900 font-semibold mb-2">Monate ROI</div>
              <div className="text-gray-600 text-sm">Typische Amortisationsdauer</div>
            </div>
          </div>
        </div>
      </BaseSection>

      {/* CTA Section */}
      <BaseSection>
        <div className="rounded-2xl bg-primary-900 px-6 py-16 sm:p-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Optimieren Sie Ihre Logistikprozesse
          </h2>
          <p className="mx-auto max-w-xl text-lg text-primary-100 mb-8">
            Lassen Sie sich beraten und entdecken Sie das Potenzial für Ihre Verladestelle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="btn-primary bg-white text-primary-900 hover:bg-primary-50"
            >
              Kostenlose Beratung
            </Link>
            <a
              href="tel:+494792955740"
              className="btn-secondary border-white text-white hover:bg-white hover:text-primary-900 flex items-center justify-center gap-2"
            >
              <PhoneIcon className="h-5 w-5" />
              04792 95574-0
            </a>
          </div>
        </div>
      </BaseSection>
    </main>
  )
} 