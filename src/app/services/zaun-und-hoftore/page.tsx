'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon, PhoneIcon, HomeIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'
import BaseSection from '@/components/layout/BaseSection'
import SectionHeader from '@/components/layout/SectionHeader'

const productTypes = [
  {
    name: "Sicherheitszäune",
    description: "Robuste Abgrenzung für gewerbliche und industrielle Bereiche",
    image: "/images/products/Hoftore&einfahrtstore.jpg",
    features: [
      "Überkletterschutz bis 6 Meter Höhe",
      "Verschiedene Sicherheitsklassen",
      "Korrosionsbeständige Beschichtung",
      "Integration von Sicherheitstechnik",
      "Individuelle Anpassung an Ihr Gelände",
      "Professionelle Montage inklusive"
    ],
    applications: ["Industriegelände", "Logistikzentren", "Kraftwerke", "Recyclinghöfe", "Gewerbeparks", "Sicherheitsbereiche"]
  },
  {
    name: "Hoftore & Einfahrtstore",
    description: "Repräsentative und funktionale Toranlegen für Ihr Grundstück",
    image: "/images/products/Einfahrtstor.jpg",
    features: [
      "Automatische Öffnung per Fernbedienung",
      "Verschiedene Antriebssysteme",
      "Individuelle Designgestaltung",
      "Zutrittskontrollsysteme",
      "Integration in Gebäudeleittechnik",
      "Wartungsarme Konstruktion"
    ],
    applications: ["Privathäuser", "Firmengelände", "Wohnanlagen", "Parkhäuser", "Industriebetriebe", "Logistikzentren"]
  }
]

const materials = [
  {
    name: "Aluminium",
    description: "Leicht, korrosionsbeständig und wartungsarm",
    benefits: ["Rostfrei", "Leicht", "Langlebig", "Recyclebar"],
    icon: "✨"
  },
  {
    name: "Verzinkter Stahl",
    description: "Robust und preiswert für höchste Beanspruchung",
    benefits: ["Sehr stabil", "Kosteneffizient", "Bewährt", "Reparabel"],
    icon: "💪"
  },
  {
    name: "Edelstahl",
    description: "Premium-Material für anspruchsvolle Anwendungen",
    benefits: ["Hochwertig", "Hygienisch", "Wartungsfrei", "Zeitlos"],
    icon: "👑"
  },
  {
    name: "Holz-Metall-Kombination",
    description: "Natürliche Optik mit stabiler Konstruktion",
    benefits: ["Natürlich", "Warm", "Individuell", "Nachhaltig"],
    icon: "🌳"
  }
]



export default function ZaunUndHoftorePage() {
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
                Zaun & Hoftore
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
              Sichere und attraktive Einfriedungslösungen für Gewerbe und Privat - von Sicherheitszäunen bis zu automatischen Hoftoren.
            </p>
          </div>
        </div>
      </section>

      {/* Product Types */}
      <BaseSection>
        <SectionHeader
          title="Unsere Zaun- und Tor-Lösungen"
          subtitle="Für jeden Bedarf die passende Einfriedung"
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
                        className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium"
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

      {/* Materials */}
      <BaseSection className="bg-gray-50">
        <SectionHeader
          title="Materialvielfalt"
          subtitle="Für jeden Anspruch das richtige Material"
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {materials.map((material, index) => (
            <motion.div
              key={material.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-white rounded-xl p-6 shadow-md"
            >
              <div className="text-5xl mb-4">{material.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{material.name}</h3>
              <p className="text-gray-600 mb-4">{material.description}</p>
              <div className="space-y-2">
                {material.benefits.map((benefit) => (
                  <div key={benefit} className="text-sm text-gray-600 bg-gray-50 rounded px-2 py-1">
                    {benefit}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </BaseSection>



      {/* Advantages Section */}
      <BaseSection>
        <div className="rounded-2xl bg-green-50 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ihr Vorteil durch moderne Zäune und Tore
              </h2>
              <p className="text-gray-700 mb-6">
                Unsere hochwertigen Zäune und Tore bieten nicht nur Sicherheit, sondern steigern auch den Wert Ihrer Immobilie.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-none mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Maximale Sicherheit</h4>
                    <p className="text-gray-600 text-sm">Zertifizierte Sicherheitssysteme und Zutrittskontrolle</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-none mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Wertsteigerung</h4>
                    <p className="text-gray-600 text-sm">Hochwertige Materialien und zeitloses Design</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-none mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Langfristige Kostenersparnis</h4>
                    <p className="text-gray-600 text-sm">Wartungsarme Konstruktion und lange Lebensdauer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl text-green-600 mx-auto mb-4 text-center">🏠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Ihre Investition</h3>
              <p className="text-gray-600 mb-4 text-center">
                Eine hochwertige Einfriedung ist eine Investition in die Zukunft.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center border-b border-gray-200 py-2">
                  <span className="text-gray-600">Immobilienwert</span>
                  <span className="font-semibold text-green-600">+5-10%</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 py-2">
                  <span className="text-gray-600">Einbruchschutz</span>
                  <span className="font-semibold text-green-600">+80%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Lebensdauer</span>
                  <span className="font-semibold text-green-600">20+ Jahre</span>
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
            Grenzen Sie sich ab - mit Stil und Sicherheit
          </h2>
          <p className="mx-auto max-w-xl text-lg text-primary-100 mb-8">
            Lassen Sie sich beraten und finden Sie die perfekte Einfriedungslösung für Ihr Projekt.
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