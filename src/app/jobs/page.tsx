'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  WrenchScrewdriverIcon,
  BoltIcon,
  AcademicCapIcon,
  CurrencyEuroIcon,
  TruckIcon,
  UserGroupIcon,
  ClockIcon,
  TrophyIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

const jobPositions = [
  {
    title: 'Metallbauer (m/w/d)',
    type: 'Vollzeit',
    location: '',
    description: 'Erfahrener Metallbauer für Tore, Türen und Metallbaukonstruktionen gesucht.',
    requirements: [
      'Abgeschlossene Ausbildung als Metallbauer',
      'Mehrjährige Berufserfahrung',
      'Führerschein Klasse B',
      'Teamfähigkeit und Zuverlässigkeit'
    ],
    benefits: ['Firmenwagen möglich', 'Attraktive Vergütung', 'Weiterbildungsmöglichkeiten'],
    icon: WrenchScrewdriverIcon
  },
  {
    title: 'Elektriker (m/w/d)',
    type: 'Vollzeit',
    location: '',
    description: 'Ausgelernte Elektrofachkraft für Torantriebe und elektrische Installationen.',
    requirements: [
      'Abgeschlossene Ausbildung als Elektriker',
      'Erfahrung mit Torantrieben von Vorteil',
      'Führerschein Klasse B',
      'Sorgfältige Arbeitsweise'
    ],
    benefits: ['Firmenwagen möglich', 'Übertarifliche Bezahlung', 'Fortbildungen'],
    icon: BoltIcon
  }
]

const teamTestimonials = [
  {
    name: 'Dennis Schwenzfeier',
    role: 'Metallbaumeister',
    image: '/images/team/schwenzfeier-dennis.jpg',
    quote: 'Bei Lütjen arbeite ich gerne, weil hier jeder Tag anders ist und wir als Team gemeinsam anspruchsvolle Projekte verwirklichen.'
  },
  {
    name: 'Thomas Kirsch',
    role: 'Elektriker',
    image: '/images/team/kirsch-thomas.jpeg',
    quote: 'Die Vielfalt der Projekte und das familiäre Arbeitsklima machen jeden Arbeitstag besonders.'
  },
  {
    name: 'Christoph Lütjen',
    role: 'Geschäftsführer',
    image: '/images/team/luetjen-christoph.jpeg',
    quote: 'Wir investieren in unsere Mitarbeiter, denn sie sind das Fundament unseres Erfolgs seit 1980.'
  }
]

const benefits = [
  {
    icon: CurrencyEuroIcon,
    title: 'Attraktive Vergütung',
    description: 'Übertarifliche Bezahlung und leistungsgerechte Prämien'
  },
  {
    icon: TruckIcon,
    title: 'Firmenwagen',
    description: 'Firmenwagen für qualifizierte Mitarbeiter möglich'
  },
  {
    icon: TrophyIcon,
    title: 'Weiterbildung',
    description: 'Fortbildungen und Meisterkurse werden unterstützt'
  },
  {
    icon: UserGroupIcon,
    title: 'Familiäres Team',
    description: 'Arbeiten in einem eingespielten, freundlichen Team'
  },
  {
    icon: ClockIcon,
    title: 'Work-Life-Balance',
    description: 'Geregelte Arbeitszeiten und bezahlte Überstunden'
  },
  {
    icon: AcademicCapIcon,
    title: 'Ausbildung',
    description: 'Vom Azubi zum Meister - wir fördern deine Entwicklung'
  }
]

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 pt-[72px] sm:pt-[80px] lg:pt-[88px]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-0">
              Bau mit uns die <span className="text-primary-200">Zukunft</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-primary-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
              Werde Teil des Lütjen-Teams und gestalte mit uns seit über 40 Jahren 
              Tore, Türen und Metallbaukonstruktionen auf höchstem Niveau.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="https://wa.me/4917660476322?text=Hallo,%20ich%20interessiere%20mich%20für%20eine%20Stelle%20bei%20Lütjen%20GmbH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-lg text-primary-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
              >
                📱 Bewirb dich per WhatsApp
              </a>
              <a
                href="tel:+4947929557400"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-base sm:text-lg font-medium rounded-lg text-white hover:bg-white hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Ruf uns an
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Team Testimonials */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
              Lerne deine zukünftigen Kollegen kennen
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Erfahre aus erster Hand, warum unsere Mitarbeiter gerne bei Lütjen arbeiten.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{testimonial.name}</h3>
                <p className="text-primary-600 text-sm font-medium mb-4">{testimonial.role}</p>
                <blockquote className="text-gray-600 italic">
                  "{testimonial.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Positions */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Offene Stellen
            </h2>
            <p className="text-xl text-gray-600">
              Finde deinen Platz in unserem Team
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 max-w-4xl mx-auto lg:grid-cols-2">
            {jobPositions.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <job.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="ml-4 flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 truncate">{job.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 gap-1 sm:gap-2">
                      <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-medium w-fit">
                        {job.type}
                      </span>
                      {job.location && <span className="text-xs sm:text-sm">{job.location}</span>}
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{job.description}</p>

                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Anforderungen:</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start text-xs sm:text-sm text-gray-600">
                        <span className="text-primary-500 mr-2 flex-shrink-0">•</span>
                        <span className="flex-1">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Das bieten wir:</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {job.benefits.map((benefit, benefitIndex) => (
                      <span
                        key={benefitIndex}
                        className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <a
                    href={`https://wa.me/4917660476322?text=Hallo,%20ich%20interessiere%20mich%20für%20die%20Stelle%20als%20${encodeURIComponent(job.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-3 border border-transparent text-sm sm:text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                  >
                    📱 Per WhatsApp bewerben
                  </a>
                  <a
                    href={`mailto:bewerbungen@luetjen-tore.de?subject=Bewerbung%20als%20${encodeURIComponent(job.title)}`}
                    className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-3 border border-gray-300 text-sm sm:text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                  >
                    <EnvelopeIcon className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                    Per E-Mail bewerben
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Warum Lütjen als Arbeitgeber?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seit über 40 Jahren sind wir ein verlässlicher Arbeitgeber in der Region. 
              Das sind deine Vorteile bei uns:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-primary-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Wir freuen uns auf deine Bewerbung! Kontaktiere uns über den Weg, 
              der für dich am bequemsten ist.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <a
                href="https://wa.me/4917660476322?text=Hallo,%20ich%20interessiere%20mich%20für%20eine%20Stelle%20bei%20Lütjen%20GmbH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-lg text-primary-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
              >
                📱 WhatsApp: 0176 60476322
              </a>
              <a
                href="tel:+4947929557400"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-base sm:text-lg font-medium rounded-lg text-white hover:bg-white hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <PhoneIcon className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                04792 955740
              </a>
              <a
                href="mailto:bewerbungen@luetjen-tore.de?subject=Bewerbung"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-base sm:text-lg font-medium rounded-lg text-white hover:bg-white hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 w-full sm:w-auto justify-center text-center"
              >
                <EnvelopeIcon className="w-4 sm:w-5 h-4 sm:h-5 mr-2 flex-shrink-0" />
                <span className="truncate">bewerbungen@luetjen-tore.de</span>
              </a>
            </div>
            <p className="text-primary-200 mt-6 text-sm">
              Oder komm einfach vorbei: Annenheider Str. 29, 27726 Worpswede
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
