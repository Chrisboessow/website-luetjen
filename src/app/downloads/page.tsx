'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'

const downloads = [
  {
    name: 'Hörmann',
    description: 'Industrie- und Privattore',
    logo: '/images/partners/hörmann-removebg-preview.png',
    kataloge: [
      {
        name: 'Garagentore',
        url: 'https://www.hoermann.de/mediacenter/preview/282235de/Garagen_Sektionaltore.pdf?20250409132107'
      }
    ]
  },
  {
    name: 'Novoferm',
    description: 'Tore und Türsysteme',
    logo: '/images/partners/NOVOFERM_Logo_4c_TuToZaAn_RZ-removebg-preview.png',
    kataloge: [
      {
        name: 'Industrietore',
        url: 'https://www.novoferm.de/fileadmin/files/novoferm_de/Dateien/Broschueren/1201_Novoferm_Industrie_Sektionaltorbr_2_20_Ansicht_ES.pdf'
      },
      {
        name: 'Garagentore',
        url: 'https://www.novoferm.de/fileadmin/files/novoferm_ch/Dateien/Prospekte/de/2582_NF_Sektionaltor_Br_11_22_DS_Ansicht.pdf'
      },
      {
        name: 'Alle Broschüren',
        url: 'https://www.novoferm.de/downloads/broschueren'
      }
    ]
  }
]

export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-16 pt-20 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Unsere Partner
          </motion.h1>
        </div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <div className="grid grid-cols-2 gap-8 items-center justify-items-center">
            {downloads.map((partner) => (
              <div key={partner.name} className="relative w-full h-32 px-8">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mx-auto mt-16 max-w-4xl border-t border-gray-200" />

        {/* Downloads Section */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Produktkataloge
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg leading-8 text-gray-600"
          >
            Hier finden Sie die aktuellen Produktkataloge unserer Partner
          </motion.p>
        </div>

        {/* Downloads List */}
        <div className="mx-auto mt-16 max-w-2xl">
          {downloads.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-8 last:mb-0"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{partner.name}</h3>
              <div className="space-y-3">
                {partner.kataloge.map((katalog) => (
                  <a
                    key={katalog.name}
                    href={katalog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center justify-between rounded-lg bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900 hover:bg-primary-50"
                  >
                    <span>{katalog.name}</span>
                    <ArrowDownTrayIcon className="h-5 w-5 text-gray-400 group-hover:text-primary-600" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Copyright Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-sm text-gray-500">
            Alle Produktbilder und Kataloge sind Eigentum der jeweiligen Hersteller. 
            Die Verwendung erfolgt mit freundlicher Genehmigung unserer Partner.
          </p>
        </motion.div>
      </div>
    </main>
  )
} 