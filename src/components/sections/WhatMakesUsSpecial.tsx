'use client'

import { motion } from 'framer-motion'
import BaseSection from '../layout/BaseSection'
import { CheckIcon, TrophyIcon, ExclamationTriangleIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'

const questions = [
  {
    icon: <CheckIcon className="h-8 w-8" />,
    text: 'Welche Probleme lösen wir für Sie?',
    description: 'Wir bieten Komplettlösungen für alle Ihre Tor- und Metallbauanforderungen - von der Planung bis zur Wartung.',
  },
  {
    icon: <TrophyIcon className="h-8 w-8" />,
    text: 'Warum sind wir der richtige Partner?',
    description: '40 Jahre Erfahrung, eigene Fertigung und ein hochqualifiziertes Team machen uns zu Ihrem verlässlichen Partner.',
  },
  {
    icon: <ExclamationTriangleIcon className="h-8 w-8" />,
    text: 'Was verpassen Sie ohne uns?',
    description: 'Maßgeschneiderte Lösungen, schnellen Service und die Sicherheit eines erfahrenen Partners an Ihrer Seite.',
  },
  {
    icon: <ChatBubbleBottomCenterTextIcon className="h-8 w-8" />,
    text: 'Was sagen unsere Kunden?',
    description: 'Über 1000 zufriedene Kunden schätzen unsere Qualität, Zuverlässigkeit und den erstklassigen Service.',
  },
]

export default function WhatMakesUsSpecial() {
  return (
    <section className="relative overflow-hidden bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="relative inline-block text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Was macht{' '}
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
            </span>{' '}
            besonders?
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg leading-8 text-gray-600"
        >
          Einen großen Teil Ihres Erfolgs machen die richtigen Partner aus.
          Erfahren Sie, warum Lütjen die beste Wahl für Sie ist:
        </motion.p>
      </div>

      <div className="mx-auto mt-16 max-w-5xl">
        <div className="grid gap-12 sm:grid-cols-2">
          {questions.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-primary-600 text-white">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.text}
                </h3>
                <p className="mt-2 text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 flex justify-center"
      >
        <a
          href="/kontakt"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary-600 px-8 py-3 text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
        >
          <span className="font-semibold">
            Jetzt unverbindliches Angebot anfordern
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
        </a>
      </motion.div>
    </section>
  )
} 