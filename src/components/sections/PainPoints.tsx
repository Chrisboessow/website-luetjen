'use client'

import { motion } from 'framer-motion'
import BaseSection from '../layout/BaseSection'
import { FaRegLightbulb, FaRegClock, FaRegChartBar } from 'react-icons/fa'
import Link from 'next/link'

const painPoints = [
  {
    icon: FaRegClock,
    title: 'Zeitverlust durch Wartung',
    description:
      'Ausfälle und Störungen Ihrer Tore kosten Sie wertvolle Zeit und Geld.',
    solution: '24/7 Notdienst für Wartungskunden'
  },
  {
    icon: FaRegChartBar,
    title: 'Austauschbare Anbieter',
    description:
      'Sie suchen einen Partner, der sich durch echte Qualität und erstklassigen Service abhebt.',
    solution: 'Premium Qualitätsgarantie'
  },
  {
    icon: FaRegLightbulb,
    title: 'Sicherheitsrisiken',
    description:
      'Veraltete Toranlagen gefährden die Sicherheit Ihrer Mitarbeiter und Ihres Betriebs.',
    solution: 'Modernste Sicherheitstechnik'
  },
]

export default function PainPoints() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-600"
          >
            Problem erkannt?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Kennen Sie das?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Für jede dieser Herausforderungen haben wir die passende Lösung.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-16 max-w-7xl"
        >
          <div className="grid gap-8 lg:grid-cols-3">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600/10">
                    <point.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{point.title}</h3>
                </div>
                <p className="mt-6 text-base leading-7 text-gray-600">{point.description}</p>
                <div className="mt-8 flex items-center gap-2">
                  <div className="h-px flex-1 bg-gray-200"></div>
                  <span className="text-sm font-medium text-gray-500">Unsere Lösung</span>
                  <div className="h-px flex-1 bg-gray-200"></div>
                </div>
                <p className="mt-4 text-base font-medium text-primary-600">{point.solution}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/kontakt"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary-600 px-8 py-3 text-white transition hover:bg-primary-700"
          >
            <span className="font-semibold">
              Jetzt Beratungsgespräch vereinbaren
            </span>
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 