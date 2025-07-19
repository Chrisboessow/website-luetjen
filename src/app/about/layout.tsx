import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Über uns | Lütjen Tor- und Metallbau',
  description: 'Lernen Sie unser Team kennen - die Menschen hinter Lütjen Tor- und Metallbau.'
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 