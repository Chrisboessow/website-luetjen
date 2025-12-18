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
            className="fixed bottom-4 left-4 z-50 w-14 h-14 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full shadow-lg border-2 border-primary-500 flex items-center justify-center hover:shadow-xl transition-all duration-200 hover:scale-105 hover:from-primary-700 hover:to-primary-800"
          >
            <span className="text-xl text-white">🍪</span>
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
              className="fixed bottom-20 left-4 z-50 max-w-sm bg-white rounded-xl shadow-2xl border-2 border-primary-200 p-5"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full flex items-center justify-center">
                  <span className="text-lg text-white">🍪</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    Cookies & Datenschutz
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. 
                    Weitere Informationen finden Sie in unserer{' '}
                    <a href="/datenschutz" className="text-primary-600 hover:text-primary-700 underline font-medium">
                      Datenschutzerklärung
                    </a>.
                  </p>
                  <div className="flex space-x-3">
                    <button
                      onClick={acceptCookies}
                      className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      Akzeptieren
                    </button>
                    <button
                      onClick={declineCookies}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-200 border border-gray-300 hover:border-gray-400"
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
