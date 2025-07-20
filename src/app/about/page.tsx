'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
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
    <div className="bg-white">
      <BaseSection>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Über uns
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Seit über 40 Jahren sind wir Ihr zuverlässiger Partner für Toranlagen und Metallbau in der Region. 
              Mit unserem erfahrenen Team bieten wir maßgeschneiderte Lösungen für Industrie, Gewerbe und Privatkunden.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"
          >
            <div className="relative w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl">
              <div className="relative w-full overflow-hidden rounded-lg shadow-xl" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 h-full w-full"
                  style={{ objectFit: 'cover' }}
                  src={`https://www.youtube.com/embed/mz0QKUTC2s8?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0${isPlaying ? '&autoplay=1' : ''}`}
                  title="Über Lütjen Tor- und Metallbau GmbH"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>

          <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Unser Team
            </motion.h2>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('office')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'office'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Büro-Team
            </button>
            <button
              onClick={() => setActiveTab('field')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'field'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Montage-Team
            </button>
          </div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            role="list"
            className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            {(activeTab === 'office' ? teamOffice : teamField).map((person) => (
              <li key={person.name} className="rounded-2xl bg-gray-50 p-8">
                <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full">
                  {typeof person.image === 'string' && person.image.startsWith('/') ? (
                    <Image
                      className="object-cover"
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-200 text-4xl">
                      {person.image}
                    </div>
                  )}
                </div>
                <h3 className="mt-6 text-center text-lg font-semibold leading-7 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-center text-sm leading-6 text-gray-600">{person.role}</p>
                {person.linkedin && (
                  <div className="mt-4 flex justify-center">
                    <Link
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </motion.ul>
        </div>
      </BaseSection>
    </div>
  )
} 