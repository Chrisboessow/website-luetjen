import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { initials: string } }
) {
  const initials = params.initials.toUpperCase()
  
  // Verschiedene Farben für unterschiedliche Initialen
  const colors = [
    { bg: '#FF6B6B', text: '#FFFFFF' }, // Rot
    { bg: '#4ECDC4', text: '#FFFFFF' }, // Türkis  
    { bg: '#45B7D1', text: '#FFFFFF' }, // Blau
    { bg: '#96CEB4', text: '#FFFFFF' }, // Grün
    { bg: '#FECA57', text: '#FFFFFF' }, // Gelb
    { bg: '#FF9FF3', text: '#FFFFFF' }, // Pink
    { bg: '#54A0FF', text: '#FFFFFF' }, // Hellblau
    { bg: '#5F27CD', text: '#FFFFFF' }, // Lila
  ]
  
  // Wähle Farbe basierend auf den Initialen
  const colorIndex = initials.charCodeAt(0) % colors.length
  const selectedColor = colors[colorIndex]
  
  const svg = `
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="${selectedColor.bg}"/>
      <text x="50" y="50" 
            font-family="system-ui, -apple-system, sans-serif" 
            font-size="28" 
            font-weight="600" 
            fill="${selectedColor.text}" 
            text-anchor="middle" 
            dominant-baseline="central">
        ${initials}
      </text>
    </svg>
  `
  
  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400', // Cache für 24 Stunden
    },
  })
} 