'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon, ClockIcon, ShieldCheckIcon, CogIcon } from '@heroicons/react/24/solid'
import BaseSection from '@/components/layout/BaseSection'
import SectionHeader from '@/components/layout/SectionHeader'

const services = [
  {
    title: "Industrietore",
    description: "Maßgeschneiderte Torlösungen für Ihre industriellen Anforderungen. Von Sektionaltoren bis zu Schnelllauftoren.",
    image: "/images/products/sektional-garagentor.jpg",
    features: [
      "Sektionaltore für optimale Raumnutzung",
      "Schnelllauftore für hohe Frequenzen",
      "Rolltore für große Öffnungen",
      "Brandschutztore nach aktuellen Normen"
    ]
  },
  {
    title: "Privattore",
    description: "Hochwertige Garagentore und Einfahrtstore für Ihr Zuhause - sicher, komfortabel und energieeffizient.",
    image: "/images/products/Privattor-vorzeigebild.jpg",
    features: [
      "Garagentore in allen Ausführungen",
      "Einfahrtstore & Schranken",
      "Smart Home Integration",
      "Energieeffiziente Dämmung"
    ]
  },
  {
    title: "Brandschutz",
    description: "Zertifizierte Brandschutztüren und -tore für maximale Sicherheit in gewerblichen und privaten Gebäuden.",
    image: "/images/products/Brandschutz-vorzeige.jpg",
    features: [
      "Brandschutztore nach DIN 4102",
      "Brandschutztüren T30/T60/T90",
      "Rauchschutztüren & -tore",
      "Prüfung & Zertifizierung"
    ]
  },
  {
    title: "Verladetechnik",
    description: "Professionelle Lösungen für effiziente Logistikprozesse - von Docksheltern bis zu Verladebrücken.",
    image: "/images/products/Verladetechnik-vorzeige.jpg",
    features: [
      "Dockshelter & Docseal",
      "Verladebrücken & Rampen",
      "Ütorsteiger & Hublifte",
      "Sicherheitssysteme"
    ]
  },
  {
    title: "Zaun & Hoftore",
    description: "Sichere und attraktive Einfriedungslösungen für Gewerbe und Industrie. Professionelle Sicherheitszäune und automatische Einfahrtstore.",
    image: "/images/products/Zaunhofschiebetor-vorzeige.jpg",
    features: [
      "Sicherheitszäune für Industrie",
      "Automatische Hofeinfahrten",
      "Professionelle Zutrittskontrolle",
      "Wartungsarme Konstruktion"
    ]
  },
  {
    title: "Service & Wartung",
    description: "Professionelle Wartung und TÜV-Prüfung Ihrer Toranlagen für maximale Betriebssicherheit und Rechtssicherheit.",
    image: "/images/products/TÜV-konforme-Wartung.jpg",
    features: [
      "TÜV-konforme Wartung & Prüfung",
      "Gesetzlich vorgeschriebene UVV-Prüfung",
      "24/7 Notdienst für Wartungskunden",
      "Dokumentation für Gewerbekunden"
    ]
  }
]

const serviceHighlights = [
  {
    title: "TÜV-konforme Wartung",
    description: "Gesetzlich vorgeschriebene Prüfungen für Gewerbekunden nach UVV und BetrSichV",
    icon: ShieldCheckIcon,
    highlight: "Für Gewerbekunden besonders wichtig"
  },
  {
    title: "24/7 Notdienst",
    description: "Schnelle Hilfe für Wartungskunden bei technischen Störungen rund um die Uhr",
    icon: ClockIcon,
    highlight: "Minimale Ausfallzeiten"
  },
  {
    title: "Vollservice aus einer Hand",
    description: "Von der Planung über die Montage bis zur regelmäßigen Wartung",
    icon: CogIcon,
    highlight: "Ein Ansprechpartner für alles"
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="relative inline-block text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Unsere{' '}
              <span className="relative">
              Leistungen
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
              Von der Planung bis zur TÜV-konformen Wartung - wir bieten Ihnen das komplette Leistungsspektrum aus einer Hand.
            </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <BaseSection>
        <SectionHeader
          title="Unsere Kernkompetenzen"
          subtitle="Sechs Bereiche, in denen wir Ihnen höchste Qualität und Sicherheit bieten"
        />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link 
              href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace('&', 'und')}`}
              key={service.title} 
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer h-full flex flex-col"
            >
                <div className="relative h-64 w-full overflow-hidden flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
                <div className="p-6 space-y-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{service.description}</p>
                  <ul className="space-y-2 mt-auto">
                  {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-4 w-4 flex-none text-primary-600 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </BaseSection>

      {/* Service Highlights */}
      <BaseSection className="bg-gray-50">
        <SectionHeader
          title="Was uns besonders macht"
          subtitle="Ihre Vorteile bei der Zusammenarbeit mit uns"
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {serviceHighlights.map((highlight, index) => (
            <motion.div 
              key={highlight.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg text-center"
            >
              <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <highlight.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {highlight.description}
              </p>
              <span className="inline-block px-3 py-1 text-xs font-medium text-primary-600 bg-primary-50 rounded-full">
                {highlight.highlight}
              </span>
            </motion.div>
          ))}
        </div>
      </BaseSection>

      {/* TÜV & Compliance Section */}
      <BaseSection>
        <div className="rounded-2xl bg-primary-50 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                TÜV-konforme Wartung für Gewerbekunden
              </h2>
              <p className="text-gray-700 mb-6">
                Als gewerblicher Betreiber von Toranlagen sind Sie gesetzlich verpflichtet, 
                regelmäßige Sicherheitsprüfungen durchführen zu lassen. Wir übernehmen das für Sie.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldCheckIcon className="h-6 w-6 text-primary-600 flex-none mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">UVV-Prüfung</h4>
                    <p className="text-gray-600 text-sm">Jährliche Sicherheitsprüfung nach Unfallverhütungsvorschrift</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheckIcon className="h-6 w-6 text-primary-600 flex-none mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">BetrSichV-Konformität</h4>
                    <p className="text-gray-600 text-sm">Prüfung nach Betriebssicherheitsverordnung</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheckIcon className="h-6 w-6 text-primary-600 flex-none mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Vollständige Dokumentation</h4>
                    <p className="text-gray-600 text-sm">Prüfprotokolle und Nachweise für Ihre Unterlagen</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ihre Rechtssicherheit</h3>
              <p className="text-gray-600 mb-4">
                Mit unserer TÜV-konformen Wartung sind Sie als Gewerbekunde auf der sicheren Seite.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Haftungsschutz für Betreiber</li>
                <li>✓ Minimierung von Betriebsausfällen</li>
                <li>✓ Verlängerung der Anlagenlebensdauer</li>
                <li>✓ Compliance mit allen Vorschriften</li>
              </ul>
            </div>
          </div>
        </div>
      </BaseSection>

      {/* CTA Section */}
      <BaseSection>
        <div className="rounded-2xl bg-primary-900 px-6 py-16 sm:p-16">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Bereit für Ihr nächstes Projekt?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100">
              Kontaktieren Sie uns für eine kostenlose Beratung. Wir finden die perfekte Lösung für Ihre Anforderungen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontakt"
                className="btn-primary bg-white text-primary-900 hover:bg-primary-50"
              >
                Kostenlose Beratung
              </a>
              <a
                href="tel:+4949214029850"
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary-900"
              >
                Sofort anrufen
              </a>
            </div>
          </div>
        </div>
      </BaseSection>
    </main>
  )
} 