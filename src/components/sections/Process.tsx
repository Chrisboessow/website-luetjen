'use client'

import { motion } from 'framer-motion'
import BaseSection from '../layout/BaseSection'
import Link from 'next/link'

const steps = [
  {
    number: '1',
    title: 'Kostenlose Beratung',
    description:
      'In einem persönlichen Gespräch erfassen wir Ihre Anforderungen und erstellen ein unverbindliches Angebot für Ihre individuelle Lösung.',
  },
  {
    number: '2',
    title: 'Vor-Ort Vermessung',
    description:
      'Unser Expertenteam kommt zu Ihnen und nimmt exakte Maße auf. Dabei berücksichtigen wir alle baulichen Gegebenheiten für eine perfekte Passform.',
  },
  {
    number: '3',
    title: 'Maßanfertigung',
    description:
      'In unserer hauseigenen Werkstatt fertigen wir Ihr Produkt nach höchsten Qualitätsstandards. Jedes Detail wird sorgfältig geprüft.',
  },
  {
    number: '4',
    title: 'Professionelle Montage',
    description:
      'Unsere erfahrenen Monteure installieren Ihr Produkt fachgerecht und erklären Ihnen alle Funktionen. Für einen reibungslosen Start.',
  },
  {
    number: '5',
    title: 'Wartung & Service',
    description:
      'Mit unserem Wartungsservice bleiben Ihre Anlagen langfristig in bestem Zustand. Wir sind auch nach der Montage jederzeit für Sie da.',
  },
]

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="relative inline-block text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Unser gemeinsamer Weg zu{' '}
            <span className="relative">
              Ihrer Lösung
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
          </h2>
        </motion.div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="overflow-hidden rounded-2xl bg-white shadow-lg"
          >
            <div className="grid items-center gap-8 p-8 lg:grid-cols-[auto,1fr]">
              <div className="text-7xl font-bold text-primary-600 lg:text-8xl">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 flex justify-center"
      >
        <Link href="/kontakt" className="btn-primary">
          Jetzt kostenloses Beratungsgespräch vereinbaren
        </Link>
      </motion.div>
    </section>
  )
} 