'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const testimonials = [
  {
    content: 'Die Zusammenarbeit mit Lütjen war äußerst angenehm und professionell! Besonders die persönliche Betreuung durch den Inhaber hebt sich positiv hervor und machte...',
    author: {
      name: 'Gian Schiavone',
      role: 'Google Rezension',
      image: '👤'
    },
    rating: 5,
  },
  {
    content: 'Bin sehr zufrieden mit Fa.Lütjen. Hat alles super geklappt. Über die Erstberatung, das Angebot, die Terminabsprache und der Einbau. Auch der Preis für das Garagentor ist gegenüber anderen Anbieter sehr gut.',
    author: {
      name: 'Reinhard Bauer',
      role: 'Google Rezension',
      image: '👤'
    },
    rating: 5,
  },
  {
    content: 'Nach einem Problem mit dem Garagentor, kam der Inhaber abends um 20 Uhr noch persönlich rum, um uns vorerst weiterzuhelfen!! Vielen Dank nochmals dafür!',
    author: {
      name: 'Michael Brandt',
      role: 'Google Rezension',
      image: '👤'
    },
    rating: 5,
  },
  {
    content: 'Unser Garagentor war seit gestern defekt, haben Fa.Lütjen angerufen und zeitnah für heute einen Termin bekommen, um es sofort reparieren zu lassen. Die beiden sehr...',
    author: {
      name: 'Jens Meyer',
      role: 'Google Rezension',
      image: '👤'
    },
    rating: 5,
  },
  {
    content: 'Vom ersten Mailkontakt bis hin zum Einbau war alles sehr gelungen. Die Mitarbeiter waren sehr freundlich und kompetent. Wir haben uns gefreut, eine tolle Firma hier in der Nähe zu haben, die so gute Arbeit macht. Weiter so. 🤗',
    author: {
      name: 'Tanja Lieske',
      role: 'Google Rezension',
      image: '👤'
    },
    rating: 5,
  },
  {
    content: 'Super Service! Das Lütjen Team hat mein Garagentor schnell repariert. Die Monteure vor Ort waren pünktlich und höflich. Am Telefon hatte ich durchweg immer sehr...',
    author: {
      name: 'Michael Weltzer',
      role: 'Google Rezension',
      image: '👤'
    },
    rating: 5,
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const stats = { totalReviews: 16, averageRating: 5.0 }

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + (window.innerWidth >= 1024 ? 2 : 1) >= testimonials.length ? 0 : prevIndex + (window.innerWidth >= 1024 ? 2 : 1)
    )
  }

  const previousTestimonials = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - (window.innerWidth >= 1024 ? 2 : 1) < 0 ? testimonials.length - (window.innerWidth >= 1024 ? 2 : 1) : prevIndex - (window.innerWidth >= 1024 ? 2 : 1)
    )
  }

  const currentTestimonials = [
    testimonials[currentIndex],
    window.innerWidth >= 1024 ? testimonials[currentIndex + 1] : null
  ].filter(Boolean)

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl"
          >
            Was unsere Kunden sagen
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-6 flex items-center justify-center gap-2 sm:gap-4"
          >
            <div className="flex items-center gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
              ))}
            </div>
            <span className="text-base sm:text-lg font-semibold text-gray-900">
              {stats.averageRating.toFixed(1)}
            </span>
            <span className="text-sm sm:text-base text-gray-600">
              • {stats.totalReviews} Google-Bewertungen
            </span>
          </motion.div>
        </div>

        <div className="relative">
          <div className="mx-auto mt-8 sm:mt-12 lg:mt-16 grid max-w-lg gap-6 lg:max-w-none lg:grid-cols-2">
            {currentTestimonials.map((testimonial, index) => (
              <motion.div
                key={currentIndex + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 shadow-lg ring-1 ring-gray-200/50 hover:shadow-xl hover:ring-orange-500/20 transition duration-300"
              >
                <div className="flex gap-0.5 sm:gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500/70" />
                  ))}
                </div>
                <blockquote className="mt-4 sm:mt-6 text-base sm:text-lg font-medium leading-7 sm:leading-8 text-gray-900">
                  {testimonial.content}
                </blockquote>
                <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
                  <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-base sm:text-lg font-semibold">
                      {testimonial.author.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-semibold text-gray-900">
                      {testimonial.author.name}
                    </div>
                    <div className="text-sm sm:text-base text-gray-600">
                      {testimonial.author.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 flex justify-center gap-3 sm:gap-4">
            <button
              onClick={previousTestimonials}
              className="rounded-full bg-white p-1.5 sm:p-2 text-gray-400 shadow-lg ring-1 ring-gray-200/50 hover:text-gray-900 hover:ring-orange-500/20 transition duration-300"
              disabled={testimonials.length <= (window.innerWidth >= 1024 ? 2 : 1)}
            >
              <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">Vorherige Bewertungen</span>
            </button>
            <button
              onClick={nextTestimonials}
              className="rounded-full bg-white p-1.5 sm:p-2 text-gray-400 shadow-lg ring-1 ring-gray-200/50 hover:text-gray-900 hover:ring-orange-500/20 transition duration-300"
              disabled={testimonials.length <= (window.innerWidth >= 1024 ? 2 : 1)}
            >
              <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">Nächste Bewertungen</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 