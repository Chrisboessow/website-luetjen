'use client'

import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

const social = [
  { name: 'Facebook', href: 'https://www.facebook.com/100063706848038', icon: FaFacebook },
  { name: 'Instagram', href: 'https://www.instagram.com/luetjen.tore/', icon: FaInstagram },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/72820721', icon: FaLinkedin },
]

export default function Footer() {
  return (
    <footer className="bg-white py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8 sm:space-y-12">
          {/* Social Media */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-8 sm:gap-16"
          >
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-900 transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6 sm:h-8 sm:w-8" />
              </a>
            ))}
          </motion.div>

          {/* Copyright & Legal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-500"
          >
            <p className="text-center text-base sm:text-lg">&copy; {new Date().getFullYear()} Lütjen GmbH. Alle Rechte vorbehalten.</p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-base sm:text-lg">
              <Link href="/impressum" className="hover:text-gray-900 transition-colors">Impressum</Link>
              <span className="hidden sm:inline">&</span>
              <Link href="/datenschutz" className="hover:text-gray-900 transition-colors">Datenschutz</Link>
            </div>
            <div className="text-xs sm:text-sm text-gray-400">
              Powered by{' '}
              <a 
                href="https://www.ayce.studio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gray-900 transition-colors"
              >
                AYCE
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
} 