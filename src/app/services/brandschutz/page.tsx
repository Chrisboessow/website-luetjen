'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon, PhoneIcon, ShieldCheckIcon, DocumentCheckIcon } from '@heroicons/react/24/solid'
import BaseSection from '@/components/layout/BaseSection'
import SectionHeader from '@/components/layout/SectionHeader'

const productTypes = [
  {
    name: "Brandschutztüren",
    description: "Zertifizierte Türen für höchste Sicherheitsanforderungen",
    image: "/images/products/Brandschutztür.jpg",
    features: [
      "Feuerwiderstandsklassen T30, T60, T90",
      "Selbstschließende Funktion",
      "Rauchschutz-Eigenschaften",
      "CE-Kennzeichnung nach EN 16034"
    ],
    applications: ["Bürogebäude", "Krankenhäuser", "Schulen", "Hotels"]
  },
  {
    name: "Brandschutztore",
    description: "Großflächiger Brandschutz für industrielle Anwendungen",
    image: "/images/products/Brandschutztor.jpg",
    features: [
      "Feuerwiderstand bis T120",
      "Automatische Schließsysteme",
      "Integration in Brandmeldeanlagen",
      "Windlastbeständigkeit"
    ],
    applications: ["Industriehallen", "Logistikzentren", "Parkhäuser", "Flughangars"]
  },
  {
    name: "Rauchschutztüren",
    description: "Schutz vor Rauchausbreitung im Brandfall",
    image: "/images/products/rauchschutztür.jpg",
    features: [
      "Rauchschutzklasse Sa",
      "Selbstschließende Türschließer",
      "Dichtungssysteme",
      "Sichtfenster optional"
    ],
    applications: ["Treppenhäuser", "Flure", "Aufzugsbereiche", "Fluchwege"]
  },
  {
    name: "Kombinierte Systeme",
    description: "Brandschutz und Rauchschutz in einem System",
    image: "/images/products/Kombinierte-Systeme.jpg",
    features: [
      "T30-RS oder T90-RS Zertifizierung",
      "Magnetfeststellanlagen",
      "Brandfallsteuerung",
      "Wartungsfreundlich"
    ],
    applications: ["Komplexe Gebäude", "Mehrgeschossige Bauten", "Öffentliche Einrichtungen"]
  }
]

const certifications = [
  {
    name: "DIN 4102",
    description: "Deutsche Norm für Brandverhalten von Baustoffen",
    icon: "🇩🇪"
  },
  {
    name: "EN 16034",
    description: "Europäische Norm für Brandschutztüren",
    icon: "🇪🇺"
  },
  {
    name: "CE-Kennzeichnung",
    description: "Bestätigung der Konformität mit EU-Richtlinien",
    icon: "✅"
  },
  {
    name: "TÜV-Zertifiziert",
    description: "Regelmäßige Prüfung und Überwachung",
    icon: "🔍"
  }
]

const maintenanceServices = [
  {
    title: "Jährliche Wartung",
    description: "Gesetzlich vorgeschriebene Wartung nach DIN 14677",
    features: ["Funktionsprüfung", "Dichtigkeitskontrolle", "Dokumentation"]
  },
  {
    title: "Reparaturservice",
    description: "Schnelle Reparatur bei Defekten oder Beschädigungen",
    features: ["24h Verfügbarkeit", "Originalersatzteile", "Zertifizierte Monteure"]
  },
  {
    title: "Modernisierung",
    description: "Upgrade bestehender Anlagen auf aktuelle Normen",
    features: ["Normkonformität", "Kosteneffizienz", "Minimale Ausfallzeiten"]
  }
]

export default function BrandschutzPage() {
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
                Brandschutz
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
              Zertifizierte Brandschutztüren und -tore für maximale Sicherheit in Ihrem Gebäude.
            </p>
          </div>
        </div>
      </section>

      {/* Product Types */}
      <BaseSection>
        <SectionHeader
          title="Unsere Brandschutz-Lösungen"
          subtitle="Für jeden Sicherheitsbedarf die richtige Lösung"
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
                <h4 className="font-semibold text-gray-900 mb-3">Anwendungsbereiche:</h4>
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
                Ihr Vorteil durch professionellen Brandschutz
              </h2>
              <p className="text-gray-700 mb-6">
                Investieren Sie in die Sicherheit Ihres Gebäudes und profitieren Sie von unserer Expertise.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-none mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Maximale Sicherheit</h4>
                    <p className="text-gray-600 text-sm">TÜV-geprüfte Systeme für optimalen Brandschutz</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-none mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Rechtssicherheit</h4>
                    <p className="text-gray-600 text-sm">Vollständige Compliance mit allen Vorschriften</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-none mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Wertsteigerung</h4>
                    <p className="text-gray-600 text-sm">Erhöhung der Gebäudesicherheit und des Immobilienwerts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl text-green-600 mx-auto mb-4 text-center">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Ihre Sicherheit</h3>
              <p className="text-gray-600 mb-4 text-center">
                Professioneller Brandschutz schützt Leben und Werte.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center border-b border-gray-200 py-2">
                  <span className="text-gray-600">Brandschutz</span>
                  <span className="font-semibold text-green-600">+90 Minuten</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 py-2">
                  <span className="text-gray-600">Versicherungsschutz</span>
                  <span className="font-semibold text-green-600">100%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Wartungskosten</span>
                  <span className="font-semibold text-green-600">-30%</span>
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
            Sicherheit beginnt mit der richtigen Beratung
          </h2>
          <p className="mx-auto max-w-xl text-lg text-primary-100 mb-8">
            Lassen Sie sich von unseren Brandschutz-Experten beraten und finden Sie die optimale Lösung.
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