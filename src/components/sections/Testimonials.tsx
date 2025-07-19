'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useState, useEffect } from 'react'

// Fallback-Testimonials für den Fall, dass die API nicht erreichbar ist
const fallbackTestimonials = [
  {
    content: 'Lädt...',
    author: {
      name: 'Lädt...',
      role: 'Google Rezension',
      image: '/images/testimonials/placeholder-1.jpg'
    },
    rating: 5,
  },
  {
    content: 'Lädt...',
    author: {
      name: 'Lädt...',
      role: 'Google Rezension',
      image: '/images/testimonials/placeholder-2.jpg'
    },
    rating: 5,
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [testimonials, setTestimonials] = useState(fallbackTestimonials)
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState({ totalReviews: 16, averageRating: 5.0 })

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/google-reviews')
        if (!response.ok) throw new Error('Failed to fetch reviews')
        const data = await response.json()
        setTestimonials(data)
        
        // Lade auch die Statistiken
        const statsResponse = await fetch('/api/google-reviews', { method: 'POST' })
        if (statsResponse.ok) {
          const statsData = await statsResponse.json()
          setStats(statsData)
        }
      } catch (error) {
        console.error('Error fetching reviews:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchReviews()
  }, [])

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 2 >= testimonials.length ? 0 : prevIndex + 2
    )
  }

  const previousTestimonials = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 2 < 0 ? testimonials.length - 2 : prevIndex - 2
    )
  }

  const currentTestimonials = [
    testimonials[currentIndex],
    testimonials[currentIndex + 1]
  ].filter(Boolean) // Filter null/undefined values if we have odd number of testimonials

  if (isLoading) {
    return (
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Was unsere Kunden sagen
            </h2>
          </div>
          <div className="mt-16 flex justify-center">
            <div className="animate-pulse space-y-8">
              <div className="h-4 bg-gray-200 rounded w-48"></div>
              <div className="h-4 bg-gray-200 rounded w-64"></div>
              <div className="h-4 bg-gray-200 rounded w-52"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Was unsere Kunden sagen
          </motion.h2>
          
          {/* Google Reviews Statistik */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 flex items-center justify-center gap-4"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-orange-500" />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-900">
              {stats.averageRating.toFixed(1)}
            </span>
            <span className="text-gray-600">
              • {stats.totalReviews} Google-Bewertungen
            </span>
          </motion.div>
        </div>

        <div className="relative">
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {currentTestimonials.map((testimonial, index) => (
              <motion.div
                key={currentIndex + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50 hover:shadow-xl hover:ring-orange-500/20 transition duration-300"
              >
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-orange-500/70" />
                  ))}
                </div>
                <blockquote className="mt-6 text-lg font-medium leading-8 text-gray-900">
                  {testimonial.content}
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.author.image}
                      alt={testimonial.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">
                      {testimonial.author.name}
                    </div>
                    <div className="text-gray-600">
                      {testimonial.author.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={previousTestimonials}
              className="rounded-full bg-white p-2 text-gray-400 shadow-lg ring-1 ring-gray-200/50 hover:text-gray-900 hover:ring-orange-500/20 transition duration-300"
              disabled={testimonials.length <= 2}
            >
              <ChevronLeftIcon className="h-6 w-6" />
              <span className="sr-only">Vorherige Bewertungen</span>
            </button>
            <button
              onClick={nextTestimonials}
              className="rounded-full bg-white p-2 text-gray-400 shadow-lg ring-1 ring-gray-200/50 hover:text-gray-900 hover:ring-orange-500/20 transition duration-300"
              disabled={testimonials.length <= 2}
            >
              <ChevronRightIcon className="h-6 w-6" />
              <span className="sr-only">Nächste Bewertungen</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 