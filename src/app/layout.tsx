import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lütjen GmbH - Tore, Türen & Metallbau seit 1980 | Worpswede',
  description: 'Seit 1980 Ihr zuverlässiger Partner für Industrietore, Privattore, Brandschutztore und Metallbau in Worpswede und Umgebung. TÜV-konforme Wartung, 24h-Notdienst. Jetzt Beratung anfordern!',
  keywords: [
    'Tore Worpswede',
    'Metallbau Worpswede', 
    'Industrietore',
    'Privattore',
    'Brandschutztore',
    'Garagentore',
    'Torwartung',
    'Notdienst',
    'Lütjen GmbH',
    'Metallbauer',
    'Türen',
    'Zaun',
    'Hoftore'
  ],
  authors: [{ name: 'Lütjen GmbH' }],
  creator: 'Lütjen GmbH',
  publisher: 'Lütjen GmbH',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://luetjen-gmbh.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lütjen GmbH - Tore, Türen & Metallbau seit 1980',
    description: 'Seit 1980 Ihr zuverlässiger Partner für Industrietore, Privattore, Brandschutztore und Metallbau in Worpswede und Umgebung.',
    url: 'https://luetjen-gmbh.de',
    siteName: 'Lütjen GmbH',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/images/logos/Logo2025-removebg-preview.png',
        width: 800,
        height: 600,
        alt: 'Lütjen GmbH Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lütjen GmbH - Tore, Türen & Metallbau seit 1980',
    description: 'Seit 1980 Ihr zuverlässiger Partner für Industrietore, Privattore, Brandschutztore und Metallbau in Worpswede.',
    images: ['/images/logos/Logo2025-removebg-preview.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code', // Placeholder - muss später hinzugefügt werden
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        {/* Facebook SDK */}
        <div id="fb-root"></div>
        <Script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v18.0&autoLogAppEvents=1"
          nonce="random123"
          strategy="afterInteractive"
        />
        <Script
          strategy="afterInteractive"
          src="https://platform.linkedin.com/badges/js/profile.js"
        />
        <script
          async
          src="https://platform.linkedin.com/badges/js/profile.js"
          type="text/javascript"
        ></script>
        <script
          async
          defer
          src="https://platform.linkedin.com/company-profile-widget"
          type="text/javascript"
        ></script>
        
        {/* Structured Data - Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Lütjen GmbH",
              "description": "Seit 1980 Ihr zuverlässiger Partner für Industrietore, Privattore, Brandschutztore und Metallbau in Worpswede und Umgebung.",
              "url": "https://luetjen-gmbh.de",
              "telephone": "+49-4221-80979-80",
              "email": "info@luetjen-gmbh.de",
              "foundingDate": "1980",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Annenheider Str. 29",
                "addressLocality": "Worpswede",
                "postalCode": "27726",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "53.3167",
                "longitude": "8.9167"
              },
              "openingHours": [
                "Mo-Fr 07:00-17:00"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "53.3167",
                  "longitude": "8.9167"
                },
                "geoRadius": "50000"
              },
              "services": [
                "Industrietore",
                "Privattore", 
                "Garagentore",
                "Brandschutztore",
                "Metallbau",
                "Torwartung",
                "Notdienst"
              ],
              "logo": "https://luetjen-gmbh.de/images/logos/Logo2025-removebg-preview.png",
              "image": "https://luetjen-gmbh.de/images/logos/Logo2025-removebg-preview.png",
              "sameAs": [
                "https://www.facebook.com/100063706848038",
                "https://www.linkedin.com/company/72820721",
                "https://www.instagram.com/luetjen.tore"
              ]
            })
          }}
        />
        
        {/* Google Analytics - Placeholder */}
        {/* 
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        */}
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
        <Script 
          src="https://beta.leadconnectorhq.com/loader.js"  
          data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js" 
          data-widget-id="685ce000c6f044bb7ab1c3e1"
        />
      </body>
    </html>
  )
} 