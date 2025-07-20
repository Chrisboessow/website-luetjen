'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PlayIcon, PauseIcon, SpeakerWaveIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import BaseSection from '@/components/layout/BaseSection'

const teamOffice = [
  {
    name: 'Christoph Lütjen',
    role: 'Geschäftsführer',
    image: '/images/team/luetjen-christoph.jpeg',
    linkedin: 'https://www.linkedin.com/in/christoph-lutjen'
  },
  {
    name: 'Renee Wedemeyer',
    role: 'Auftragsbearbeitung',
    image: '/images/team/wedemeyer-renee.jpeg',
    linkedin: ''
  },
  {
    name: 'Valeri Dillmann',
    role: 'Disposition',
    image: '/images/team/dillmann-valeri.JPG',
    linkedin: ''
  },
  {
    name: 'Steffen Koschade',
    role: 'Auftragsbearbeitung',
    image: '/images/team/koschade-steffen.jpg',
    linkedin: ''
  },
  {
    name: 'Sonja Düwelsdorf',
    role: 'Auftragsbearbeitung',
    image: '/images/team/düwelsdorf-sonja.jpeg',
    linkedin: ''
  },
  {
    name: 'Oliver Brandt',
    role: 'Auftragsbearbeitung',
    image: '/images/team/brandt-oliver.jpeg',
    linkedin: ''
  },
  {
    name: 'Astrid Pietzke-Fromm',
    role: 'Rechnungswesen',
    image: '/images/team/pietzke-fromm-astrid.jpeg',
    linkedin: ''
  },
  {
    name: 'Kirsten Stelljes',
    role: 'Rechnungswesen',
    image: '/images/team/stelljes-kirsten.jpeg',
    linkedin: ''
  },
  {
    name: 'Franziska Burichter',
    role: 'Personal & Marketing',
    image: '/images/team/burichter-franziska.jpeg',
    linkedin: ''
  },
  {
    name: 'Yvonne Lütjen',
    role: 'Kundenbetreuung Wartungsverträge',
    image: '/images/team/lütjen-yvonne.jpg',
    linkedin: ''
  },
  {
    name: 'Luca Mahnken',
    role: 'Azubi Büro',
    image: '/images/team/mahnken-luca.jpg',
    linkedin: ''
  }
]

const teamField = [
  {
    name: 'Joachim Fromm',
    role: 'Metallbauer',
    image: '/images/team/fromm-joachim.jpeg',
    linkedin: ''
  },
  {
    name: 'Thomas Kirsch',
    role: 'Elektriker',
    image: '/images/team/kirsch-thomas.jpeg',
    linkedin: ''
  },
  {
    name: 'Matthias Mahnken',
    role: 'Elektriker',
    image: '/images/team/mahnken-matthias.jpeg',
    linkedin: ''
  },
  {
    name: 'Horst Potschka',
    role: 'Maurer',
    image: '/images/team/potschka-horst.jpeg',
    linkedin: ''
  },
  {
    name: 'Dennis Schwenzfeier',
    role: 'Metallbaumeister',
    image: '/images/team/schwenzfeier-dennis.jpg',
    linkedin: ''
  },
  {
    name: 'Sven Preckel',
    role: 'Metallbauer',
    image: '/images/team/preckel-sven.jpeg',
    linkedin: ''
  },
  {
    name: 'Ralph Sänger',
    role: 'Metallbauer',
    image: '/images/team/sänger-ralph.jpeg',
    linkedin: ''
  },
  {
    name: 'Michael Wendelken',
    role: 'Maurer',
    image: '/images/team/wendelken-michael.jpeg',
    linkedin: ''
  },
  {
    name: 'Kamil Kurzawski',
    role: 'Metallbauer',
    image: '/images/team/kurzawski-kamil.jpeg',
    linkedin: ''
  },
  {
    name: 'Tobias Gerdes',
    role: 'Metallbauer',
    image: '/images/team/gerdes-tobias.jpeg',
    linkedin: ''
  },
  {
    name: 'Andreas Kessner',
    role: 'Metallbauer',
    image: '/images/team/kesser-andreas.jpeg',
    linkedin: ''
  },
  {
    name: 'Mike Seelow',
    role: 'Metallbauer',
    image: '/images/team/seelow-mike.jpeg',
    linkedin: ''
  },
  {
    name: 'Daniel Warschun',
    role: 'Elektriker',
    image: '/images/team/warschun-daniel.jpeg',
    linkedin: ''
  },
  {
    name: 'Lucas Vagts',
    role: 'Metallbauer',
    image: '/images/team/vagts-lucas.jpeg',
    linkedin: ''
  },
  {
    name: 'Florian Uhlig',
    role: 'Metallbauer',
    image: '/images/team/uhlig-florian.jpeg',
    linkedin: ''
  },
  {
    name: 'Marius Wellbrock',
    role: 'Elektriker',
    image: '/images/team/wellbrock-marius.jpg',
    linkedin: ''
  },
  {
    name: 'Horst Stelljes',
    role: 'Lagerist',
    image: '/images/team/stelljes-horst.jpg',
    linkedin: ''
  },
  {
    name: 'Julian Vagts',
    role: 'Metallbauer',
    image: '/images/team/vagts-julian.jpg',
    linkedin: ''
  },
  {
    name: 'Nils Stelljes',
    role: 'Metallbaumeister',
    image: '/images/team/stelljes-nils.jpg',
    linkedin: ''
  },
  {
    name: 'Oliver Pillinger',
    role: 'Elektriker',
    image: '/images/team/pilinger-oliver.JPG',
    linkedin: ''
  },
  {
    name: 'André Berg',
    role: 'Metallbauer',
    image: '/images/team/berg-andre.jpg',
    linkedin: ''
  },
  {
    name: 'Viktor Henning',
    role: 'Metallbauer',
    image: '👤', // Person-Icon als Platzhalter
    linkedin: ''
  },
  // Azubis
  {
    name: 'Fiete Fischer',
    role: 'Azubi Metall',
    image: '/images/team/fischer-fiete.jpg',
    linkedin: ''
  },
  {
    name: 'Maurice Krause',
    role: 'Azubi Metall',
    image: '/images/team/krause-maurice.jpg',
    linkedin: ''
  },
  {
    name: 'Robin Segelken',
    role: 'Azubi Metall',
    image: '/images/team/segelken-robin.jpg',
    linkedin: ''
  },
  {
    name: 'Finn Hesse',
    role: 'Azubi Metall',
    image: '👤', // Person-Icon als Platzhalter
    linkedin: ''
  },
  {
    name: 'Miguel Fischer',
    role: 'Azubi Metall (ab 1.8.2024)',
    image: '👤', // Person-Icon als Platzhalter
    linkedin: ''
  }
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('office')
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="mx-auto max-w-2xl text-center pt-24 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="relative inline-block text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Über{' '}
            <span className="relative">
              uns
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
                  strokeWidth="16"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg leading-8 text-gray-600"
        >
          Seit über 40 Jahren sind wir Ihr zuverlässiger Partner für Tore und Metallbau.
          Qualität, Innovation und Kundenzufriedenheit stehen bei uns an erster Stelle.
        </motion.p>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Video Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative w-full mt-16 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl"
        >
          <div className="relative w-full overflow-hidden rounded-lg shadow-xl" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              style={{ objectFit: 'cover' }}
              src={`https://www.youtube-nocookie.com/embed/mz0QKUTC2s8?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
              title="Über Lütjen Tor- und Metallbau GmbH"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Content Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div className="flex flex-col justify-between rounded-3xl bg-gray-50 px-8 py-10 hover:bg-gray-100 transition duration-300">
            <div>
              <h3 className="text-base font-semibold leading-7 text-primary-600">Tradition</h3>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                40 Jahre Erfahrung
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Was 1983 als Familienunternehmen begann, hat sich zu einem modernen Betrieb entwickelt. 
                Dabei verbinden wir traditionelles Handwerk mit zukunftsweisender Technologie.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-3xl bg-gray-50 px-8 py-10 hover:bg-gray-100 transition duration-300">
            <div>
              <h3 className="text-base font-semibold leading-7 text-primary-600">Innovation</h3>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                Modernste Technik
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Mit modernster Technik und innovativen Lösungen realisieren wir maßgeschneiderte Projekte.
                Qualität und Präzision stehen bei uns an erster Stelle.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <div className="py-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Unser Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Menschen, die mit Leidenschaft und Expertise Ihre Projekte verwirklichen.
            </p>

            {/* Tab Buttons */}
            <div className="mt-12 flex justify-center space-x-4">
              <button
                onClick={() => setActiveTab('office')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === 'office'
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Büro-Team
              </button>
              <button
                onClick={() => setActiveTab('field')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === 'field'
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Außendienst-Team
              </button>
            </div>
          </div>

          {/* Team Sections */}
          <div className="mt-16 relative">
            {/* Büro-Team */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: activeTab === 'office' ? 1 : 0,
                x: activeTab === 'office' ? 0 : -20,
                display: activeTab === 'office' ? 'block' : 'none'
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:mt-4 lg:mx-0 lg:max-w-none lg:grid-cols-2"
              >
                {teamOffice.map((person) => (
                  <div
                    key={person.name}
                    className="rounded-3xl bg-gray-50 p-8 hover:bg-gray-100 transition duration-300 group"
                  >
                    <div className="flex justify-center">
                      <div className="relative w-full aspect-[4/5] max-w-sm overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                        {typeof person.image === 'string' && person.image.startsWith('/') ? (
                          <Image
                            src={person.image}
                            alt={person.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={person.name === 'Christoph Lütjen'}
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-6xl">
                            {person.image}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                        {person.name}
                      </h3>
                      <p className="text-base leading-7 text-primary-600">{person.role}</p>
                      {person.linkedin && (
                        <div className="mt-4 flex items-center space-x-3">
                          <a 
                            href={person.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#0A66C2] transition-colors duration-300"
                          >
                            <svg
                              className="h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Außendienst-Team */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: activeTab === 'field' ? 1 : 0,
                x: activeTab === 'field' ? 0 : 20,
                display: activeTab === 'field' ? 'block' : 'none'
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:mt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3"
              >
                {teamField.map((person) => (
                  <div
                    key={person.name}
                    className="rounded-3xl bg-gray-50 p-8 hover:bg-gray-100 transition duration-300 group"
                  >
                    <div className="flex justify-center">
                      <div className="relative w-full aspect-[4/5] max-w-sm overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                        {typeof person.image === 'string' && person.image.startsWith('/') ? (
                          <Image
                            src={person.image}
                            alt={person.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-6xl">
                            {person.image}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                        {person.name}
                      </h3>
                      <p className="text-base leading-7 text-primary-600">{person.role}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
} 