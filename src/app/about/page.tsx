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
  const [volume, setVolume] = useState(0.5)
  const [showControls, setShowControls] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Check for mobile device
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (mobile && isPlaying) {
        setShowControls(true)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isPlaying])

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.volume = volume
      videoRef.current.play()
      setIsPlaying(true)
      if (isMobile) {
        setShowControls(true)
      }
    }
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        (videoRef.current as any).webkitRequestFullscreen()
      } else if ((videoRef.current as any).mozRequestFullScreen) {
        (videoRef.current as any).mozRequestFullScreen()
      }
    }
  }

  return (
    <div className="bg-white">
      {/* Video Section */}
      <div className="relative w-full bg-gray-900/5 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-xl">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/3rCy51Y-Phc?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0${isPlaying ? '&autoplay=1' : ''}`}
                  title="Lütjen Tor- und Metallbau GmbH - Über Uns"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <BaseSection>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Unser Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Lernen Sie die Menschen kennen, die täglich ihr Bestes geben, um Ihre Projekte erfolgreich umzusetzen.
            </motion.p>
          </div>

          <div className="mt-8 flex justify-center space-x-4 mb-12">
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {(activeTab === 'office' ? teamOffice : teamField).map((person) => (
              <motion.li
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-100">
                  {person.image.startsWith('/') ? (
                    <Image
                      className="aspect-square w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl bg-gray-200">
                      {person.image}
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-gray-600">{person.role}</p>
                </div>
                {person.linkedin && (
                  <Link
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-primary-600 hover:text-primary-700"
                  >
                    LinkedIn Profil
                  </Link>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </BaseSection>
    </div>
  )
} 