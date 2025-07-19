'use client'

import { motion } from 'framer-motion'
import { CheckCircleIcon, StarIcon, PlayIcon, PauseIcon, SpeakerWaveIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

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
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:pb-24 lg:flex lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Ihr Partner für
              <br />
              <span className="relative mt-2 block text-primary-600">
                Tore & Metallbau.
                <svg
                  className="absolute -bottom-1 left-0 w-full"
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
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Seit über 40 Jahren liefern wir hochwertige Toranlagen und Metallbaulösungen für Industrie, Gewerbe und Privatkunden. Qualität und Service, die überzeugen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 space-y-4"
          >
            {benefits.map((benefit, index) => (
              <div key={benefit} className="flex items-center gap-3">
                <div className="rounded-full bg-orange-100 p-1">
                  <CheckCircleIcon className="h-5 w-5 flex-none text-orange-600" />
                </div>
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex items-center gap-6"
          >
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              Jetzt Beratung anfordern
            </button>
            <a 
              href="https://www.google.com/search?q=L%C3%BCtjen+Tor-+und+Metallbau+GmbH&oq=L%C3%BCtjen+Tor-+und+Metallbau+GmbH"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-orange-500" />
                ))}
              </div>
              <span className="font-semibold">5.0</span>
              <span className="text-sm text-gray-500">(16 Google-Bewertungen)</span>
            </a>
          </motion.div>
        </div>

        <div className="mx-auto mt-14 flex max-w-2xl flex-col sm:mt-16 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-16">
          <div className="max-w-3xl flex-none sm:max-w-4xl lg:max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl"
            >
              <div 
                className="relative aspect-video w-full overflow-hidden rounded-lg shadow-xl bg-black"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
                onTouchStart={() => setShowControls(true)}
                onTouchEnd={() => !isMobile && setTimeout(() => setShowControls(false), 3000)}
              >
                <video
                  ref={videoRef}
                  playsInline
                  className="h-full w-full object-cover"
                  onEnded={() => setIsPlaying(false)}
                  onClick={togglePlayPause}
                  poster="/images/hero-placeholder.jpg"
                >
                  <source src="./video/hero-placeholder2.mp4" type="video/mp4" />
                </video>
                
                {/* Play Button Overlay - nur anzeigen wenn nicht gestartet */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <button
                      onClick={handlePlay}
                      className="group relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 hover:bg-white hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-500/30"
                    >
                      <PlayIcon className="ml-1 h-6 w-6 sm:h-8 sm:w-8 text-gray-900 transition-transform group-hover:scale-110" />
                    </button>
                  </div>
                )}
                
                {/* Video Controls - anzeigen bei Hover/Touch oder auf Mobile */}
                {isPlaying && (showControls || isMobile) && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                    <div className="flex items-center gap-2 sm:gap-4">
                      {/* Play/Pause Button */}
                      <button
                        onClick={togglePlayPause}
                        className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-200 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                      >
                        {isPlaying ? (
                          <PauseIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        ) : (
                          <PlayIcon className="ml-0.5 h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        )}
                      </button>

                      {/* Volume Control */}
                      <div className="flex items-center gap-2 flex-1 max-w-xs">
                        <SpeakerWaveIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white flex-shrink-0" />
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          value={volume}
                          onChange={handleVolumeChange}
                          className="flex-1 h-1 bg-white/30 rounded-lg appearance-none slider cursor-pointer"
                          style={{
                            background: `linear-gradient(to right, #f97316 0%, #f97316 ${volume * 100}%, rgba(255,255,255,0.3) ${volume * 100}%, rgba(255,255,255,0.3) 100%)`
                          }}
                        />
                        <span className="text-white text-xs sm:text-sm font-medium min-w-8 text-center">
                          {Math.round(volume * 100)}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Fullscreen Button - separat unten rechts */}
                {isPlaying && (
                  <button
                    onClick={handleFullscreen}
                    className="absolute bottom-4 right-4 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-all duration-200 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <ArrowsPointingOutIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </button>
                )}
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