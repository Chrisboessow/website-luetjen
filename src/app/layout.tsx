import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lütjen GmbH - Ihr Partner für Tore & Metallbau',
  description: 'Seit über 40 Jahren Ihr zuverlässiger Partner für Industrietore, Brandschutztore und Metallbau. Qualität und Service aus einer Hand.',
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