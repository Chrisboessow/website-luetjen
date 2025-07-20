'use client'

import { motion } from 'framer-motion'
import { CheckCircleIcon, StarIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import Image from 'next/image'

const trustLogos = [
  { image: '/images/partners/hörmann-removebg-preview.png', name: 'Hörmann' },
  { image: '/images/partners/NOVOFERM_Logo_4c_TuToZaAn_RZ-removebg-preview.png', name: 'Novoferm' },
  { image: '/images/partners/MFZ-removebg-preview.png', name: 'MFZ' },
  { image: '/images/partners/Logo-Condoor-Door-Solutions-removebg-preview.png', name: 'Condoor' },
  // Duplicate logos for seamless scrolling
  { image: '/images/partners/BERNER_LOGO_4c-removebg-preview.png', name: 'Berner' },
  { image: '/images/partners/Teckentrup_Logo_CMYK_Black_-_Kopie-removebg-preview.png', name: 'Teckentrup' },
  { image: '/images/partners/hörmann-removebg-preview.png', name: 'Hörmann' },
  { image: '/images/partners/NOVOFERM_Logo_4c_TuToZaAn_RZ-removebg-preview.png', name: 'Novoferm' },
]

const benefits = [
  'Tiefes Vertrauen durch 40 Jahre Erfahrung',
  'Maßgeschneiderte Lösungen für Unternehmen & Privatkunden',
  '24/7 Notdienst für Wartungskunden',
]

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative overflow-hidden bg-white pt-[72px] sm:pt-[80px] lg:pt-[88px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-12 pt-6 sm:pb-16 sm:pt-8 lg:flex lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 lg:text-6xl">
              Ihr Partner für
              <br />
              <span className="relative mt-2 block text-primary-600">
                Tore & Metallbau.
                <svg
                  className="absolute -bottom-1 left-0 w-full hidden sm:block"
                  height="15"
                  viewBox="0 0 400 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 12.5C133.667 4.16667 267.333 4.16667 399 12.5"
                    stroke="#f97316"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg leading-8 text-gray-600"
          >
            Seit über 40 Jahren liefern wir hochwertige Toranlagen und Metallbaulösungen für Industrie, Gewerbe und Privatkunden. Qualität und Service, die überzeugen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 sm:mt-8 space-y-3 sm:space-y-4"
          >
            {benefits.map((benefit, index) => (
              <div key={benefit} className="flex items-center gap-2 sm:gap-3">
                <div className="rounded-full bg-orange-100 p-1">
                  <CheckCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 flex-none text-orange-600" />
                </div>
                <p className="text-sm sm:text-base text-gray-600">{benefit}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            <a 
              href="/kontakt"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Jetzt Beratung anfordern
            </a>
            <a 
              href="https://www.google.com/search?q=L%C3%BCtjen+Tor-+und+Metallbau+GmbH&oq=L%C3%BCtjen+Tor-+und+Metallbau+GmbH"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                ))}
              </div>
              <span className="font-semibold">5.0</span>
              <span className="text-xs sm:text-sm text-gray-500">(16 Google-Bewertungen)</span>
            </a>
          </motion.div>
        </div>

        <div className="mx-auto mt-8 sm:mt-14 flex max-w-2xl flex-col sm:mt-16 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-16">
          <div className="max-w-3xl flex-none sm:max-w-4xl lg:max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl"
            >
              <div className="relative w-full overflow-hidden rounded-lg shadow-xl" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 h-full w-full"
                  style={{ objectFit: 'cover' }}
                  src={`https://www.youtube-nocookie.com/embed/YZd-b7fY1KE?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                  title="Lütjen Tor- und Metallbau GmbH"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </div>

          {/* Trust Logos Marquee */}
          <div className="relative mt-6 w-full max-w-2xl overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative py-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-white before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-white after:content-['']"
            >
              <div className="flex">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="flex shrink-0"
                >
                  {trustLogos.map((logo, idx) => (
                    <div
                      key={idx}
                      className="mx-8 flex w-[100px] h-[60px] flex-shrink-0 items-center justify-center relative"
                    >
                      <Image
                        src={logo.image}
                        alt={logo.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </motion.div>
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="flex shrink-0"
                >
                  {trustLogos.slice(0, 4).map((logo, idx) => (
                    <div
                      key={idx}
                      className="mx-8 flex w-[100px] h-[60px] flex-shrink-0 items-center justify-center relative"
                    >
                      <Image
                        src={logo.image}
                        alt={logo.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 