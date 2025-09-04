'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { XMarkIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

export default function JobsPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      // Zeige Popup nach 30% der Bildschirmhöhe
      if (scrollPosition > windowHeight * 0.3 && !hasScrolled) {
        setHasScrolled(true)
        // Warte 2 Sekunden bevor das Popup erscheint
        setTimeout(() => {
          setIsVisible(true)
        }, 2000)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasScrolled])

  const closePopup = () => {
    setIsVisible(false)
    // Merke dir dass User das Popup geschlossen hat (für diese Session)
    sessionStorage.setItem('jobsPopupClosed', 'true')
  }

  // Prüfe ob Popup bereits geschlossen wurde
  useEffect(() => {
    const popupClosed = sessionStorage.getItem('jobsPopupClosed')
    if (popupClosed) {
      setIsVisible(false)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={closePopup}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ 
              type: 'spring', 
              damping: 35, 
              stiffness: 200,
              duration: 0.8,
              ease: "easeOut"
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-lg sm:max-w-xl">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 px-8 py-6">
                <button
                  onClick={closePopup}
                  className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                  aria-label="Popup schließen"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
                
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <BriefcaseIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      Wir suchen Verstärkung!
                    </h3>
                    <p className="text-primary-100 text-base">
                      Werde Teil unseres Teams
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 py-6">
                <div className="space-y-6">
                  <p className="text-gray-600 text-base leading-relaxed text-center">
                    Du bist <span className="font-semibold text-gray-900">Metallbauer</span> oder{' '}
                    <span className="font-semibold text-gray-900">Elektriker</span> und suchst einen 
                    neuen Job? Dann bewirb dich jetzt bei uns!
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl">
                      <span className="w-3 h-3 bg-green-500 rounded-full mb-2"></span>
                      <span className="text-sm font-medium text-gray-900">Attraktive Vergütung</span>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl">
                      <span className="w-3 h-3 bg-green-500 rounded-full mb-2"></span>
                      <span className="text-sm font-medium text-gray-900">Firmenwagen möglich</span>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl">
                      <span className="w-3 h-3 bg-green-500 rounded-full mb-2"></span>
                      <span className="text-sm font-medium text-gray-900">Familiäres Arbeitsklima</span>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 space-y-4">
                  <Link
                    href="/jobs"
                    onClick={closePopup}
                    className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-semibold rounded-xl text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Stellenanzeigen ansehen
                  </Link>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="https://wa.me/4917660476322?text=Hallo,%20ich%20interessiere%20mich%20für%20eine%20Stelle%20bei%20Lütjen%20GmbH"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closePopup}
                      className="inline-flex items-center justify-center px-4 py-3 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                    >
                      📱 WhatsApp
                    </a>
                    <a
                      href="tel:+4947929557400"
                      onClick={closePopup}
                      className="inline-flex items-center justify-center px-4 py-3 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                    >
                      📞 Anrufen
                    </a>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center font-medium">
                  Seit 1980 dein zuverlässiger Arbeitgeber in Worpswede
                </p>
              </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
