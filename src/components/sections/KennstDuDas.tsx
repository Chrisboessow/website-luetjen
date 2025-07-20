'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function KennstDuDas() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Was sagen unsere Kunden?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Über 1000 zufriedene Kunden schätzen unsere Qualität, Zuverlässigkeit und den erstklassigen Service.
          </p>
          <div className="mt-8">
            <Link
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
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 