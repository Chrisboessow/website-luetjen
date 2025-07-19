'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import BaseSection from '../layout/BaseSection'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const faqs = [
  {
    question: 'Wie lange dauert die Installation eines neuen Tores?',
    answer:
      'Die Installationszeit variiert je nach Produkt. Ein Standard-Sektionaltor ist typischerweise in 4-6 Stunden installiert. Für komplexere Systeme oder bei zusätzlichen Anforderungen kann es auch einen ganzen Arbeitstag dauern.',
  },
  {
    question: 'Bieten Sie auch Wartungsservice an?',
    answer:
      'Ja, wir bieten regelmäßige Wartungsservices für alle unsere Produkte an. Ein gut gewartetes Tor hält länger und funktioniert zuverlässiger. Wir empfehlen eine jährliche Wartung, um die Sicherheit und Funktionalität zu gewährleisten.',
  },
  {
    question: 'Wie lange beträgt die Garantiezeit?',
    answer:
      'Wir gewähren 2 Jahre Garantie auf alle unsere Produkte und Installationen. Bei Abschluss eines Wartungsvertrags verlängert sich die Garantiezeit auf bis zu 5 Jahre.',
  },
  {
    question: 'Gibt es einen 24/7 Notdienst?',
    answer:
      'Ja, unser Notdienst ist rund um die Uhr für unsere Wartungskunden erreichbar. Bei technischen Problemen oder Störungen sind wir innerhalb weniger Stunden bei Ihnen vor Ort.',
  },
  {
    question: 'In welchem Gebiet sind Sie tätig?',
    answer:
      'Wir sind in ganz Niedersachsen, Bremen und Hamburg für Sie im Einsatz. Unser Hauptsitz befindet sich in der Region Bremen.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden bg-gray-100 py-24 sm:py-32">
      <BaseSection>
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="relative inline-block text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Häufig gestellte{' '}
              <span className="relative">
                Fragen
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

        <div className="mx-auto mt-16 max-w-3xl divide-y divide-gray-900/10">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="flex w-full items-start justify-between gap-x-6 py-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold leading-7 text-gray-900">
                  {faq.question}
                </h3>
                <ChevronDownIcon
                  className={cn(
                    'h-6 w-6 flex-none text-gray-400 transition-transform',
                    openIndex === index ? 'rotate-180' : ''
                  )}
                />
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                )}
              >
                <p className="pb-6 text-gray-600">{faq.answer}</p>
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
          <Link href="/kontakt" className="btn-primary">
            Weitere Fragen? Kontaktieren Sie uns
          </Link>
        </motion.div>
      </BaseSection>
    </section>
  )
} 