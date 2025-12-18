'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieBanner() {
  const [showButton, setShowButton] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // Prüfe ob Cookie-Zustimmung bereits gegeben wurde
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Zeige Button nach 2 Sekunden
      const timer = setTimeout(() => {
        setShowButton(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowButton(false)
    setShowPopup(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setShowButton(false)
    setShowPopup(false)
  }

  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  return (
    <>
      {/* Cookie Button */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={togglePopup}
            className="fixed bottom-4 left-4 z-50 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            <span className="text-xl">🍪</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cookie Popup */}
      <AnimatePresence>
        {showPopup && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-25 z-40"
              onClick={() => setShowPopup(false)}
            />
            
            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed bottom-20 left-4 z-50 max-w-sm bg-white rounded-lg shadow-2xl border border-gray-200 p-4"
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
          </>
        )}
      </AnimatePresence>
    </>
  )
}
