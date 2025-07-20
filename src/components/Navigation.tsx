'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Leistungen', href: '/services' },
  { name: 'Über uns', href: '/about' },
  { name: 'Social Media', href: '/social' },
]

const Logo = ({ className = '', width = 240, height = 78 }: { className?: string, width?: number, height?: number }) => (
  <div className={cn("relative", className)} style={{ width, height }}>
    <Image
      src="/images/logos/Logo2025-removebg-preview.png"
      alt="Lütjen Logo"
      fill
      className="object-contain"
      priority
      sizes={`(max-width: 640px) ${width * 0.8}px, ${width}px`}
      quality={100}
    />
  </div>
)

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Verhindere Scrollen wenn Mobile-Menü offen ist
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header className={cn(
      'fixed inset-x-0 top-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    )}>
      <nav className="mx-auto flex h-[72px] sm:h-[80px] lg:h-[88px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Lütjen GmbH</span>
            <Logo width={180} height={58} className="sm:hidden" />
            <Logo className="hidden sm:block" />
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100/50 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Menü öffnen</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-base xl:text-lg font-semibold leading-6 transition-all duration-200',
                scrolled 
                  ? 'text-gray-900 hover:text-primary-600' 
                  : 'text-gray-900 hover:text-primary-600'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/kontakt"
            className="btn-primary text-base xl:text-lg"
          >
            Jetzt Beratung anfordern
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            
            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 sm:px-6 py-safe sm:max-w-sm shadow-xl"
              style={{ top: 0 }}
            >
              <div className="sticky top-0 bg-white pt-6 -mx-4 px-4 sm:-mx-6 sm:px-6">
                <div className="flex items-center justify-between">
                  <Link 
                    href="/" 
                    className="-m-1.5 p-1.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Lütjen</span>
                    <Logo width={180} height={58} className="sm:hidden" />
                    <Logo width={220} height={71} className="hidden sm:block" />
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100/50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Menü schließen</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root pb-safe">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-1 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group -mx-3 flex items-center gap-2 rounded-lg px-3 py-3 text-base sm:text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="flex-1">{item.name}</span>
                        <svg
                          className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          viewBox="0 0 20 20"
                          fill="none"
                          aria-hidden="true"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                            transform="rotate(-90 10 10)"
                          />
                        </svg>
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/kontakt"
                      className="btn-primary w-full justify-center text-base sm:text-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Jetzt Beratung anfordern
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
} 