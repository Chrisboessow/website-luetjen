'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ProductFeature {
  text: string
}

interface ProductCardProps {
  title: string
  description: string
  imageUrl: string
  features: ProductFeature[]
  href: string
}

export default function ProductCard({ title, description, imageUrl, features, href }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-xl"
    >
      <div className="aspect-h-4 aspect-w-3 relative h-80">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="relative p-6">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="mt-3 text-gray-600">{description}</p>
        
        <div className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary-600" />
              <span className="text-sm text-gray-600">{feature.text}</span>
            </div>
          ))}
        </div>

        <Link 
          href={href}
          className="mt-6 inline-flex items-center gap-2 text-primary-600 hover:text-primary-700"
        >
          Mehr erfahren
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Quick Info Overlay */}
      <div className="absolute inset-0 flex translate-y-[100%] flex-col justify-end bg-primary-600/95 p-6 text-white transition-transform duration-300 group-hover:translate-y-0">
        <h4 className="text-xl font-bold">{title}</h4>
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-primary-600 hover:bg-gray-50"
        >
          Jetzt anfragen
        </Link>
      </div>
    </motion.div>
  )
} 