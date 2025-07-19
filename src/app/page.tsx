import React from 'react'
import Hero from '@/components/sections/Hero'
import WhatMakesUsSpecial from '@/components/sections/WhatMakesUsSpecial'
import Process from '@/components/sections/Process'
import FAQ from '@/components/sections/FAQ'
import PainPoints from '@/components/sections/PainPoints'
import Testimonials from '@/components/sections/Testimonials'
import Partners from '@/components/sections/Partners'

export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <Testimonials />
      <Partners />
      <WhatMakesUsSpecial />
      <Process />
      <FAQ />
    </main>
  )
} 