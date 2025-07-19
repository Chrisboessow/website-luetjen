'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BaseSectionProps {
  children: React.ReactNode
  className?: string
  containerSize?: 'md' | 'lg' | 'xl'
  withGradient?: boolean
  reverseGradient?: boolean
}

export default function BaseSection({
  children,
  className,
  containerSize = 'xl',
  withGradient = false,
  reverseGradient = false,
}: BaseSectionProps) {
  const containerClass = {
    md: 'container-md',
    lg: 'container-lg',
    xl: 'container-xl',
  }[containerSize]

  return (
    <section
      className={cn(
        'section-spacing',
        withGradient && 'gradient-bg',
        reverseGradient && 'gradient-bg-reverse',
        className
      )}
    >
      <div className={containerClass}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
} 