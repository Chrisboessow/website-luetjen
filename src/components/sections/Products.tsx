'use client'

import { motion } from 'framer-motion'
import ProductCard from '../products/ProductCard'
import Link from 'next/link'
import { DoorClosed, Wrench, Shield, Cog } from 'lucide-react'

const products = [
  {
    title: 'Sektionaltore',
    description: 'Maximale Sicherheit und Platzersparnis für Ihr Unternehmen. Perfekt für häufige Nutzung und hohe Ansprüche.',
    icon: <DoorClosed className="h-48 w-48 text-primary-600" />,
    features: [
      { text: 'Bis zu 40% mehr Platz vor dem Tor' },
      { text: 'Optimale Wärmedämmung spart Energiekosten' },
      { text: 'Einbruchsicher durch Mehrfachverriegelung' },
      { text: 'In 2 Wochen einsatzbereit' },
    ],
    href: '/tore/sektionaltore',
  },
  {
    title: 'Rolltore',
    description: 'Die platzsparende Lösung für mehr Effizienz. Ideal wenn jeder Zentimeter zählt und schneller Zugang wichtig ist.',
    icon: <Cog className="h-48 w-48 text-primary-600" />,
    features: [
      { text: 'Maximale Raumnutzung durch kompakte Bauweise' },
      { text: 'Schneller Zugang durch kurze Öffnungszeiten' },
      { text: 'Geringer Wartungsaufwand spart Kosten' },
      { text: 'Individuelle Anpassung an Ihre Anforderungen' },
    ],
    href: '/tore/rolltore',
  },
  {
    title: 'Brandschutztore',
    description: 'Sicherheit die Leben rettet. Zertifizierte Brandschutztore, die im Ernstfall zuverlässig funktionieren.',
    icon: <Shield className="h-48 w-48 text-primary-600" />,
    features: [
      { text: 'Erfüllt alle Brandschutzvorschriften' },
      { text: 'Automatische Auslösung im Notfall' },
      { text: '24/7 Notdienst für Wartungskunden' },
      { text: 'Regelmäßige Wartung & Prüfung' },
    ],
    href: '/tore/brandschutztore',
  },
  {
    title: 'Metallbau nach Maß',
    description: 'Ihre Vision - unsere Handwerkskunst. Individuelle Lösungen für besondere Anforderungen, gefertigt in unserer Werkstatt.',
    icon: <Wrench className="h-48 w-48 text-primary-600" />,
    features: [
      { text: 'Maßgenaue Fertigung nach Ihren Wünschen' },
      { text: 'Beratung durch erfahrene Metallbaumeister' },
      { text: 'Kurze Lieferzeiten durch eigene Produktion' },
      { text: 'Montage durch unser Fachpersonal' },
    ],
    href: '/metallbau',
  },
]

export default function Products() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Maßgeschneiderte Lösungen für Ihre Anforderungen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Von der ersten Idee bis zum fertigen Produkt - wir begleiten Sie durch den gesamten Prozess.
            Profitieren Sie von unserer 40-jährigen Erfahrung und dem Know-how unserer Experten.
          </motion.p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-2">
          {products.map((product, index) => (
            <Link
              key={product.title}
              href={product.href}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200/50 transition duration-300 hover:shadow-lg hover:ring-orange-500/20"
            >
              <div className="flex flex-col items-start justify-between">
                <div className="flex w-full flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-8 transition-transform duration-300 group-hover:scale-105"
                  >
                    {product.icon}
                  </motion.div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                      {product.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                      {product.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-8 space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3">
                      <svg className="h-5 w-5 flex-none text-orange-500/70" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-16 max-w-xl text-center"
        >
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Nicht gefunden was Sie suchen?
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Wir fertigen auch Sonderlösungen nach Ihren speziellen Anforderungen.
            Ein kurzes Gespräch genügt, und wir finden die perfekte Lösung für Sie.
          </p>
          <div className="mt-8">
            <Link
              href="/kontakt"
              className="rounded-md bg-primary-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Jetzt unverbindlich beraten lassen
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 