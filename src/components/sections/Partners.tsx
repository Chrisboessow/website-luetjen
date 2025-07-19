'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import BaseSection from '../layout/BaseSection'
import SectionHeader from '../layout/SectionHeader'

const partners = [
  {
    name: 'Hörmann',
    logo: '/images/partners/hörmann-removebg-preview.png'
  },
  {
    name: 'Novoferm',
    logo: '/images/partners/NOVOFERM_Logo_4c_TuToZaAn_RZ-removebg-preview.png'
  },
  {
    name: 'MFZ',
    logo: '/images/partners/MFZ-removebg-preview.png'
  },
  {
    name: 'Condoor',
    logo: '/images/partners/Logo-Condoor-Door-Solutions-removebg-preview.png'
  },
  {
    name: 'Berner',
    logo: '/images/partners/BERNER_LOGO_4c-removebg-preview.png'
  },
  {
    name: 'Teckentrup',
    logo: '/images/partners/Teckentrup_Logo_CMYK_Black_-_Kopie-removebg-preview.png'
  }
]

export default function Partners() {
  return (
    <BaseSection className="bg-gray-50">
      <SectionHeader
        title="Unsere Partner"
        subtitle="Wir arbeiten mit führenden Herstellern zusammen"
        centered
      />
      
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-8 px-4 sm:grid-cols-3 md:gap-12 lg:grid-cols-6">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-center"
          >
            <div className="relative h-16 w-full">
              <Image
                src={partner.logo}
                alt={`${partner.name} Logo`}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </BaseSection>
  )
} 