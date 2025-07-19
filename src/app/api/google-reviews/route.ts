import { NextResponse } from 'next/server'

// Echte Google-Rezensionen für Lütjen GmbH
const reviews = [
  {
    content: "Unser Garagentor war seit gestern defekt, haben Fa.Lütjen angerufen und zeitnah für heute einen Termin bekommen, um es sofort reparieren zu lassen. Die beiden sehr kompetenten Monteure Herr Uhlig und Herr J.Vagts haben TOP akkurat, sauber, dabei erklärend und zügig das Garagentor wieder zum Laufen gebracht. Mehr geht nicht. Immer wieder gerne. Vielen Dank an das gesamte Team der Firma Lütjen.",
    author: {
      name: "Jens Meyer",
      role: "Google Rezension • vor 3 Wochen",
      initials: "JM"
    },
    rating: 5,
    time: Date.now() - (3 * 7 * 24 * 60 * 60 * 1000) // vor 3 Wochen
  },
  {
    content: "Vom ersten Mailkontakt bis hin zum Einbau war alles sehr gelungen. Die Mitarbeiter waren sehr freundlich und kompetent. Wir haben uns gefreut, eine tolle Firma hier in der Nähe zu haben, die so gute Arbeit macht. Weiter so. 🤗",
    author: {
      name: "Tanja Lieske",
      role: "Google Rezension • vor 2 Monaten",
      initials: "TL"
    },
    rating: 5,
    time: Date.now() - (2 * 30 * 24 * 60 * 60 * 1000) // vor 2 Monaten
  },
  {
    content: "Super Service! Das Lütjen Team hat mein Garagentor schnell repariert. Die Monteure vor Ort waren pünktlich und höflich. Am Telefon hatte ich durchweg immer sehr freundliche Sachbearbeiter*innen. Faire Preise. Jetzt läuft alles wieder einwandfrei. Absolut empfehlenswert!",
    author: {
      name: "Michael Weltzer",
      role: "Google Rezension • vor 8 Monaten",
      initials: "MW"
    },
    rating: 5,
    time: Date.now() - (8 * 30 * 24 * 60 * 60 * 1000) // vor 8 Monaten
  },
  {
    content: "Bin sehr zufrieden mit Fa.Lütjen. Hat alles super geklappt. Über die Erstberatung, das Angebot, die Terminabsprache und der Einbau. Auch der Preis für das Garagentor ist gegenüber anderen Anbieter sehr gut.",
    author: {
      name: "Reinhard Bauer",
      role: "Google Rezension • vor 7 Monaten",
      initials: "RB"
    },
    rating: 5,
    time: Date.now() - (7 * 30 * 24 * 60 * 60 * 1000) // vor 7 Monaten
  },
  {
    content: "Die Zusammenarbeit mit Lütjen war äußerst angenehm und professionell! Besonders die persönliche Betreuung durch den Inhaber hebt sich positiv hervor und machte das Projekt zu dem was es war. Das gesamte Team ist super aufgestellt und besteht aus geschultem Fachpersonal, das jederzeit mit Kompetenz und Freundlichkeit überzeugt. Hier fühlt man sich wirklich gut aufgehoben – absolut empfehlenswert!",
    author: {
      name: "Gian Schiavone",
      role: "Google Rezension • vor 8 Monaten",
      initials: "GS"
    },
    rating: 5,
    time: Date.now() - (8 * 30 * 24 * 60 * 60 * 1000) // vor 8 Monaten
  },
  {
    content: "Nach einem Problem mit dem Garagentor, kam der Inhaber abends um 20 Uhr noch persönlich rum, um uns vorerst weiterzuhelfen!! Vielen Dank nochmals dafür! Auch der Einbau vor 8 Jahren war sehr gut und hat reibungslos funktioniert! Nur zu empfehlen 👍👍👍",
    author: {
      name: "Michael Brandt",
      role: "Google Rezension • vor 9 Monaten",
      initials: "MB"
    },
    rating: 5,
    time: Date.now() - (9 * 30 * 24 * 60 * 60 * 1000) // vor 9 Monaten
  }
]

export async function GET() {
  try {
    // Formatiere die Reviews in das benötigte Format
    const formattedReviews = reviews.map((review) => ({
      content: review.content,
      author: {
        name: review.author.name,
        role: review.author.role,
        image: `/api/avatar/${review.author.initials}`, // Dynamischer Avatar mit Initialen
        initials: review.author.initials
      },
      rating: review.rating,
      time: review.time
    }))

    return NextResponse.json(formattedReviews)
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    )
  }
}

// Zusätzliche Metadaten für die Gesamtstatistik
export async function POST() {
  return NextResponse.json({
    totalReviews: 16,
    averageRating: 5.0,
    starDistribution: {
      5: 16,
      4: 0,
      3: 0,
      2: 0,
      1: 0
    }
  })
} 