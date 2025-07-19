'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon, PhoneIcon, HomeIcon } from '@heroicons/react/24/solid'
import BaseSection from '@/components/layout/BaseSection'
import SectionHeader from '@/components/layout/SectionHeader'

const productTypes = [
  {
    name: "Sektional-Garagentore",
    description: "Die moderne Lösung für Ihre Garage",
    image: "/images/products/sektional-privattor2.jpg",
    features: [
      "Platzsparend durch vertikales Öffnen",
      "Hohe Wärmedämmung bis 1,2 W/m²K",
      "Verschiedene Designs und Farben",
      "Integrierte Schlupftüren verfügbar"
    ],
    applications: ["Einfamilienhäuser", "Doppelgaragen", "Reihenhäuser"]
  },
  {
    name: "Rolltor-Garagentore",
    description: "Kompakt und robust für jede Garagengröße",
    image: "/images/products/Rolltor-garage.jpg",
    features: [
      "Besonders platzsparend",
      "Robust und langlebig",
      "Einfache Bedienung",
      "Wirtschaftliche Lösung"
    ],
    applications: ["Kleingaragen", "Mietobjekte", "Nebengebäude"]
  },
  {
    name: "Einfahrtstore",
    description: "Repräsentative Einfahrtslösungen",
    image: "/images/products/Einfahrtstor.jpg",
    features: [
      "Automatische Öffnung per Fernbedienung",
      "Verschiedene Materialien (Aluminium, Stahl)",
      "Integrierte Sicherheitstechnik",
      "Individuelle Designgestaltung"
    ],
    applications: ["Grundstückseinfahrten", "Villen", "Firmenparkplätze"]
  },
  {
    name: "Smart Home Tore",
    description: "Intelligente Vernetzung für modernen Komfort",
    image: "/images/products/smart-home-tor.jpg",
    features: [
      "App-Steuerung von überall",
      "Integration in Smart Home Systeme",
      "Automatische Zeitsteuerung",
      "Status-Benachrichtigungen"
    ],
    applications: ["Moderne Häuser", "Tech-affine Haushalte", "Ferienhäuser"]
  }
]

const smartFeatures = [
  {
    title: "App-Steuerung",
    description: "Öffnen und schließen Sie Ihr Tor von überall per Smartphone",
    icon: "📱"
  },
  {
    title: "Automatische Beleuchtung",
    description: "LED-Beleuchtung aktiviert sich automatisch bei Nutzung",
    icon: "💡"
  },
  {
    title: "Sicherheitssensoren",
    description: "Hinderniserkennung und automatischer Stopp für maximale Sicherheit",
    icon: "🛡️"
  },
  {
    title: "Zeitsteuerung",
    description: "Programmierbare Öffnungs- und Schließzeiten",
    icon: "⏰"
  }
]

export default function PrivattorePage() {
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
                Privattore
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
              Sichere, komfortable und energieeffiziente Garagentore und Einfahrtstore für Ihr Zuhause.
            </p>
          </div>
        </div>
      </section>

      {/* Product Types */}
      <BaseSection>
        <SectionHeader
          title="Tore für Ihr Zuhause"
          subtitle="Von der klassischen Garage bis zur smarten Einfahrt"
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

      {/* Smart Features */}
      <BaseSection className="bg-gray-50">
        <SectionHeader
          title="Smart Home Integration"
          subtitle="Moderne Technologie für maximalen Komfort"
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {smartFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-white rounded-xl p-6 shadow-md"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </BaseSection>

      {/* Energy Efficiency */}
      <BaseSection>
        <div className="rounded-2xl bg-green-50 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Energieeffizienz für Ihr Zuhause
              </h2>
              <p className="text-gray-700 mb-6">
                Unsere modernen Garagentore helfen Ihnen dabei, Heizkosten zu sparen und 
                den Komfort in Ihrem Zuhause zu erhöhen.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-none mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Bis zu 40% Energieersparnis</h4>
                    <p className="text-gray-600 text-sm">Durch hochwertige Wärmedämmung</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-none mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Dichtungssystem</h4>
                    <p className="text-gray-600 text-sm">Verhindert Zugluft und Wärmeverlust</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-none mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">LED-Beleuchtung</h4>
                    <p className="text-gray-600 text-sm">Energiesparende Ausleuchtung</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <HomeIcon className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Ihr Vorteil</h3>
              <p className="text-gray-600 mb-4 text-center">
                Ein gut gedämmtes Garagentor kann Ihre Heizkosten um bis zu 40% reduzieren.
              </p>
              <div className="text-center text-3xl font-bold text-green-600">
                Bis zu 500€ Ersparnis/Jahr
              </div>
            </div>
          </div>
        </div>
      </BaseSection>

      {/* CTA Section */}
      <BaseSection>
        <div className="rounded-2xl bg-primary-900 px-6 py-16 sm:p-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Ihr neues Garagentor wartet auf Sie
          </h2>
          <p className="mx-auto max-w-xl text-lg text-primary-100 mb-8">
            Lassen Sie sich kostenlos beraten und entdecken Sie die Möglichkeiten für Ihr Zuhause.
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