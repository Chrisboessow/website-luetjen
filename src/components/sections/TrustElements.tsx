'use client'

import { motion } from 'framer-motion'
import { Star, Award, Users, Clock, UserCircle, Medal, Shield } from 'lucide-react'

const stats = [
  { name: 'Jahre Erfahrung', value: '40+' },
  { name: 'Zufriedene Kunden', value: '1000+' },
  { name: 'Projekte realisiert', value: '5000+' },
  { name: 'Mitarbeiter', value: '40+' },
]

const testimonials = [
  {
    content: 'Die Zusammenarbeit mit Lütjen war von Anfang an professionell und zuverlässig. Besonders beeindruckt hat uns die termingerechte Umsetzung.',
    author: {
      name: 'Michael Schmidt',
      role: 'Geschäftsführer',
      company: 'Schmidt Logistik GmbH',
    },
  },
  {
    content: 'Hervorragende Beratung und erstklassige Qualität. Das Team von Lütjen hat uns optimal bei der Planung und Umsetzung unterstützt.',
    author: {
      name: 'Sandra Meyer',
      role: 'Projektleiterin',
      company: 'Meyer Industries AG',
    },
  },
]

const certifications = [
  { name: 'ISO 9001', icon: <Shield className="h-16 w-16" /> },
  { name: 'TÜV Zertifiziert', icon: <Award className="h-16 w-16" /> },
  { name: 'Meisterbetrieb', icon: <Medal className="h-16 w-16" /> },
]

export default function TrustElements() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Was unsere Kunden sagen
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5"
            >
              <blockquote className="text-gray-900">
                <p className="text-lg leading-8">"{testimonial.content}"</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <UserCircle className="h-10 w-10 text-primary-600" />
                <div>
                  <div className="font-semibold">{testimonial.author.name}</div>
                  <div className="text-gray-600">{testimonial.author.role} - {testimonial.author.company}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Zertifizierungen & Auszeichnungen
          </h2>
        </div>
        <div className="mx-auto mt-16 flex justify-center gap-x-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="text-primary-600">{cert.icon}</div>
              <p className="text-sm font-medium text-gray-600">{cert.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 