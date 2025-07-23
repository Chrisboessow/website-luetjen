'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon, PhoneIcon, ShieldCheckIcon, ClockIcon, DocumentCheckIcon, ExclamationTriangleIcon, ChartBarIcon, CurrencyEuroIcon, DocumentIcon } from '@heroicons/react/24/solid'
import BaseSection from '@/components/layout/BaseSection'
import SectionHeader from '@/components/layout/SectionHeader'

const serviceTypes = [
  {
    name: "TÜV-konforme Wartung",
    description: "Gesetzlich vorgeschriebene Wartung für maximale Rechtssicherheit",
    image: "/images/products/TÜV-konforme-Wartung.jpg",
    features: [
      "Jährliche UVV-Prüfung nach DGUV Vorschrift 3",
      "Prüfung nach ASR A1.7 (Arbeitsstättenrichtlinie)",
      "Prüfung nach BetrSichV",
      "Vollständige Dokumentation",
      "Zertifizierte Prüfer"
    ],
    applications: ["Gewerbekunden", "Industriebetriebe", "Öffentliche Einrichtungen"],
    highlight: "Besonders wichtig für Gewerbekunden"
  },
  {
    name: "24/7 Notdienst",
    description: "Rund um die Uhr für unsere Wartungskunden verfügbar",
    image: "/images/products/24hnotdienst.jpg",
    features: [
      "Sofortige Störungsbeseitigung",
      "Originalersatzteile am Fahrzeug",
      "Erfahrene Servicetechniker",
      "Minimale Ausfallzeiten"
    ],
    applications: ["Wartungskunden", "Logistikzentren", "Produktionsbetriebe"],
    highlight: "Nur für Wartungskunden"
  },
  {
    name: "Präventive Wartung",
    description: "Regelmäßige Kontrolle verhindert teure Ausfälle",
    image: "/images/products/präventive-wartung.jpg",
    features: [
      "Halbjährliche Inspektion",
      "Verschleißteile-Kontrolle",
      "Funktionsprüfung aller Komponenten",
      "Wartungsplan nach Herstellervorgaben"
    ],
    applications: ["Alle Toranlagen", "Kritische Betriebe", "Hochfrequente Nutzung"],
    highlight: "Verlängert Lebensdauer"
  },
  {
    name: "Reparatur & Modernisierung",
    description: "Schnelle Reparaturen und technische Upgrades",
    image: "/images/products/Metallbau1.jpg",
    features: [
      "Originalersatzteile aller Hersteller",
      "Modernisierung auf aktuelle Standards",
      "Sicherheitstechnik-Updates",
      "Energieeffizienz-Verbesserungen"
    ],
    applications: ["Defekte Anlagen", "Veraltete Technik", "Sicherheits-Upgrades"],
    highlight: "Kosteneffiziente Alternative"
  }
]

const legalRequirements = [
  {
    title: "ASR A1.7",
    description: "Technische Regeln für Arbeitsstätten - Türen und Tore",
    frequency: "Regelmäßig",
    penalty: "Bußgeld & Haftung bei Unfällen",
    details: [
      "Sicherheitsanforderungen für Türen und Tore",
      "Schutz vor Gefährdungen am Arbeitsplatz",
      "Spezifikationen für Fluchtwege",
      "Vorgaben für Wartung und Prüfung"
    ]
  },
  {
    title: "DIN 18650",
    description: "Sicherheit an kraftbetätigten Türen und Toren",
    frequency: "Nach Herstellervorgaben",
    penalty: "Haftung bei Unfällen",
    details: [
      "Sicherheitsanforderungen für automatische Systeme",
      "Prüfverfahren für Türantriebe",
      "Schutz vor Quetsch- und Scherstellen",
      "Anforderungen an Sicherheitssensoren"
    ]
  },
  {
    title: "DIN 14677",
    description: "Wartung von Feststellanlagen",
    frequency: "Mindestens jährlich",
    penalty: "Gewährleistungsverlust",
    details: [
      "Regelmäßige Überprüfung von Brandschutztüren",
      "Dokumentation aller Wartungsarbeiten",
      "Prüfung der Sicherheitsfunktionen",
      "Fachgerechte Instandhaltung"
    ]
  }
]

// Service information for individual maintenance contracts
const maintenanceInfo = {
  individualContracts: true,
  pricingPerGate: {
    few: { gates: "1-5", price: "~120€" },
    many: { gates: "20+", price: "~40€" }
  },
  emergencyService: {
    price: "150€",
    condition: "nur für Wartungsvertragskunden"
  }
}

export default function ServiceUndWartungPage() {
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
                Service & Wartung
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
              TÜV-konforme Wartung und 24/7 Notdienst für maximale Betriebssicherheit und Rechtssicherheit Ihrer Toranlagen.
            </p>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <BaseSection>
        <SectionHeader
          title="Unsere Service-Leistungen"
          subtitle="Professionelle Wartung und Service für alle Toranlagen"
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {serviceTypes.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback für fehlende Bilder
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' font-family='Arial, sans-serif' font-size='16' fill='%236b7280'%3E" + service.name + "%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {service.highlight}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Leistungen:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
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
                    {service.applications.map((app) => (
                      <span 
                        key={app}
                        className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
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

      {/* Standards Section */}
      <BaseSection className="bg-gray-50">
        <SectionHeader
          title="Wichtige Normen für Ihre Sicherheit"
          subtitle="Wir halten uns an alle relevanten Vorschriften"
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <DocumentCheckIcon className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">ASR A1.7</h3>
                <p className="text-sm text-gray-500">Technische Regeln für Arbeitsstätten</p>
              </div>
            </div>
            <p className="text-gray-600">
              Regelt die Sicherheitsanforderungen für Türen und Tore in Arbeitsstätten.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <ShieldCheckIcon className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">DIN 18650</h3>
                <p className="text-sm text-gray-500">Sicherheit an kraftbetätigten Türen</p>
              </div>
            </div>
            <p className="text-gray-600">
              Sicherheitsanforderungen für automatische Türsysteme und Schutz vor Quetsch- und Scherstellen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <DocumentCheckIcon className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">DIN 14677</h3>
                <p className="text-sm text-gray-500">Wartung von Feststellanlagen</p>
              </div>
            </div>
            <p className="text-gray-600">
              Regelt die regelmäßige Überprüfung und Wartung von Brandschutztüren und -toren.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <ShieldCheckIcon className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">EN 16034</h3>
                <p className="text-sm text-gray-500">Brandschutznorm für Tore und Türen</p>
              </div>
            </div>
            <p className="text-gray-600">
              Europäische Norm für Brandschutz- und Rauchschutztüren mit definierten Feuerwiderstandsklassen.
            </p>
          </motion.div>
        </div>
      </BaseSection>

      {/* Advantages Section */}
      <BaseSection>
        <div className="rounded-2xl bg-green-50 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ihr Vorteil durch regelmäßige Wartung
            </h2>
              <p className="text-gray-700 mb-6">
                Professionelle Wartung sichert nicht nur die Betriebssicherheit, sondern spart auch langfristig Kosten.
            </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-none mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Rechtssicherheit & Compliance</h4>
                    <p className="text-gray-600 text-sm">TÜV-konforme Wartung nach allen gesetzlichen Vorgaben</p>
                </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-none mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Kosteneinsparung</h4>
                    <p className="text-gray-600 text-sm">Vermeidung teurer Reparaturen durch präventive Wartung</p>
                </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-none mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Werterhalt der Anlage</h4>
                    <p className="text-gray-600 text-sm">Längere Lebensdauer durch professionelle Pflege</p>
                </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl text-green-600 mx-auto mb-4 text-center">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Ihre Ersparnis</h3>
              <p className="text-gray-600 mb-4 text-center">
                Regelmäßige Wartung rechnet sich durch vermiedene Schäden und Ausfälle.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center border-b border-gray-200 py-2">
                  <span className="text-gray-600">Reparaturkosten</span>
                  <span className="font-semibold text-green-600">-60%</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 py-2">
                  <span className="text-gray-600">Ausfallzeiten</span>
                  <span className="font-semibold text-green-600">-80%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Lebensdauer</span>
                  <span className="font-semibold text-green-600">+50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseSection>

      {/* CTA Section */}
      <BaseSection>
        <div className="rounded-2xl bg-primary-900 px-6 py-16 sm:p-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Sichern Sie sich Ihren Wartungsvertrag
          </h2>
          <p className="mx-auto max-w-xl text-lg text-primary-100 mb-8">
            Profitieren Sie von unserer Erfahrung und sichern Sie sich alle Vorteile eines Wartungsvertrags.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="btn-primary bg-white text-primary-900 hover:bg-primary-50"
            >
              Wartungsvertrag anfragen
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