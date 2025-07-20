'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'
import Script from 'next/script'
import { useRef, useEffect } from 'react'

export default function Contact() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleIframeResize = () => {
      const iframe = iframeRef.current
      const container = containerRef.current
      
      if (iframe && container) {
        const observer = new ResizeObserver((entries) => {
          for (const entry of entries) {
            const height = entry.contentRect.height
            // Mehr Platz auf Mobile
            const extraSpace = window.innerWidth < 640 ? 80 : 40
            container.style.height = `${height + extraSpace}px`
          }
        })
        
        observer.observe(iframe)
        return () => observer.disconnect()
      }
    }

    handleIframeResize()
    window.addEventListener('resize', handleIframeResize)
    return () => window.removeEventListener('resize', handleIframeResize)
  }, [])

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Telefon',
      content: '04792 95574-0',
      link: 'tel:+494792955740',
    },
    {
      icon: FaEnvelope,
      title: 'E-Mail',
      content: 'info@luetjen-tore.de',
      link: 'mailto:info@luetjen-tore.de',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Adresse',
      content: 'Jan-Weber-Straße 16, 27726 Worpswede',
      link: 'https://www.google.com/maps/place/L%C3%BCtjen+GmbH+Toranlagen+und+Metallbau/@53.2589909,8.9554803,17z/data=!3m1!4b1!4m6!3m5!1s0x47b13b1ac63d6713:0x9f3bd2fffd04ab0!8m2!3d53.2589877!4d8.9580552!16s%2Fg%2F1td1nycn?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D',
    },
  ]

  return (
    <main className="pt-20 sm:pt-28 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 lg:text-6xl"
            >
              Kontaktieren Sie
              <span className="relative mt-2 block text-primary-600">
                uns heute.
                <svg
                  className="absolute -bottom-1 left-0 w-full hidden sm:block"
                  height="15"
                  viewBox="0 0 400 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 12.5C133.667 4.16667 267.333 4.16667 399 12.5"
                    stroke="#2563eb"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600"
            >
              Wir sind für Sie da. Kontaktieren Sie uns für eine persönliche Beratung oder ein unverbindliches Angebot.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="mt-10 sm:mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.icon === FaMapMarkerAlt ? '_blank' : undefined}
                rel={info.icon === FaMapMarkerAlt ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center rounded-xl sm:rounded-2xl bg-white p-6 sm:p-8 text-center shadow-lg ring-1 ring-gray-200/50 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary-600/10">
                  <div className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full bg-primary-100 flex items-center justify-center">
                    {info.icon === FaPhone && <PhoneIcon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600" />}
                    {info.icon === FaEnvelope && <EnvelopeIcon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600" />}
                    {info.icon === FaMapMarkerAlt && <MapPinIcon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600" />}
                  </div>
                </div>
                <h2 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-gray-900">{info.title}</h2>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">{info.content}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mt-10 sm:mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-xl sm:rounded-2xl bg-primary-600/5 shadow-xl ring-1 ring-primary-900/10"
            >
              <div className="p-4 sm:p-8">
                <div className="mb-6 sm:mb-8 text-center">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary-900">Kontaktformular</h2>
                  <p className="mt-2 text-base sm:text-lg font-medium text-primary-700">Wir melden uns innerhalb von 24 Stunden bei Ihnen</p>
                </div>

                <div ref={containerRef} className="relative" style={{ minHeight: '713px' }}>
                  <iframe
                    ref={iframeRef}
                    src="https://api.leadconnectorhq.com/widget/form/OvvU1LpTWzCsTsLktQdq"
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      borderRadius: '20px',
                      position: 'absolute',
                      top: 0,
                      left: 0
                    }}
                    id="inline-OvvU1LpTWzCsTsLktQdq" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Form 0"
                    data-height="713"
                    data-layout-iframe-id="inline-OvvU1LpTWzCsTsLktQdq"
                    data-form-id="OvvU1LpTWzCsTsLktQdq"
                    title="Kontaktformular"
                  />
                  <Script src="https://link.msgsndr.com/js/form_embed.js" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unsere Versprechen Section */}
      <section className="mt-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Unsere Versprechen
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-gray-600"
            >
              Was uns auszeichnet und Sie von uns erwarten können
            </motion.p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200/50 hover:shadow-md hover:ring-primary-500/50 transition duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                <ClockIcon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">24/7 Notdienst</h3>
              <p className="mt-2 text-gray-600">
                Rund um die Uhr für unsere Wartungskunden da.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600/10">
                <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">40 Jahre Erfahrung</h3>
              <p className="mt-2 text-gray-600">
                Profitieren Sie von unserem langjährigen Know-how und unserer Expertise in allen Bereichen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600/10">
                <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Regionale Präsenz</h3>
              <p className="mt-2 text-gray-600">
                Von Bremen bis Hamburg - wir sind in Ihrer Nähe und kennen die lokalen Anforderungen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600/10">
                <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Schnelle Reaktionszeit</h3>
              <p className="mt-2 text-gray-600">
                Kurze Wartezeiten und schnelle Lösungen - wir wissen, dass Zeit kostbar ist.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600/10">
                <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Persönliche Beratung</h3>
              <p className="mt-2 text-gray-600">
                Individuelle Lösungen und kompetente Beratung für Ihre spezifischen Anforderungen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600/10">
                <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Qualitätsgarantie</h3>
              <p className="mt-2 text-gray-600">
                Hochwertige Materialien und erstklassige Handwerkskunst für langlebige Lösungen.
              </p>
            </motion.div>
          </div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mx-auto mt-16 max-w-2xl text-center"
          >
            <p className="text-base text-gray-600">
              Besuchen Sie uns in{' '}
              <a
                href="https://www.google.com/maps/place/L%C3%BCtjen+GmbH+Toranlagen+und+Metallbau/@53.2589909,8.9554803,17z/data=!3m1!4b1!4m6!3m5!1s0x47b13b1ac63d6713:0x9f3bd2fffd04ab0!8m2!3d53.2589877!4d8.9580552!16s%2Fg%2F1td1nycn?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary-600 hover:text-primary-500"
              >
                Jan-Weber-Straße 16, 27726 Worpswede
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 