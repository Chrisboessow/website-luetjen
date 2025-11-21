'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Prüfe ob Cookie-Zustimmung bereits gegeben wurde
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Zeige Banner nach 2 Sekunden
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-4 left-4 z-50 max-w-sm bg-white rounded-lg shadow-2xl border border-gray-200 p-4"
        >
          <div className="flex items-start space-x-3">
            <div className="text-2xl">🍪</div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Cookies & Datenschutz
              </h3>
              <p className="text-xs text-gray-600 mb-3">
                Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. 
                Weitere Informationen finden Sie in unserer{' '}
                <a href="/datenschutz" className="text-primary-600 hover:text-primary-700 underline">
                  Datenschutzerklärung
                </a>.
              </p>
              <div className="flex space-x-2">
                <button
                  onClick={acceptCookies}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-xs px-3 py-2 rounded-md transition-colors duration-200"
                >
                  Akzeptieren
                </button>
                <button
                  onClick={declineCookies}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs px-3 py-2 rounded-md transition-colors duration-200"
                >
                  Ablehnen
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
