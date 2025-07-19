'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function KennstDuDas() {
  return (
    <section className="bg-blue-100 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Test: Kennst du das?</h2>
        <div className="text-center">
          <Link
            href="/kontakt"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg"
          >
            Test Button
          </Link>
        </div>
      </div>
    </section>
  )
} 