'use client'

import { motion } from 'framer-motion'
import BaseSection from '../layout/BaseSection'
import SectionHeader from '../layout/SectionHeader'

const benefits = [
  {
    title: 'Schnellste Umsetzung',
    description: 'Von der <u>ersten Beratung</u> bis zur <u>fertigen Montage</u> in Rekordzeit',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Höchste Qualität',
    description: '<u>Eigene Fertigung</u> und <u>zertifizierte Montage</u> für perfekte Ergebnisse',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Garantierte Sicherheit',
    description: '<u>24/7 Notdienst für Wartungskunden</u> und <u>regelmäßige Wartung</u> für Ihre Sorglosigkeit',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

export default function WhyChooseUs() {
  return (
    <BaseSection>
      <SectionHeader
        title="Warum Lütjen?"
        subtitle="Profitieren Sie von 40 Jahren Erfahrung und Expertise"
        centered
      />

      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="relative inline-block text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Warum{' '}
            <span className="relative">
              Lütjen
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
            ?
          </h2>
        </motion.div>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card card-hover relative overflow-hidden"
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary-50" />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                {benefit.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {benefit.title}
              </h3>
              <p
                className="mt-2 text-gray-600"
                dangerouslySetInnerHTML={{ __html: benefit.description }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 flex justify-center"
      >
        <button className="btn-primary">
          Jetzt 5-Minuten Beratung sichern
        </button>
      </motion.div>
    </BaseSection>
  )
} 