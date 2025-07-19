import TeamMember from '@/components/team/TeamMember';

interface TeamMember {
  name: string;
  position: string;
  description: string;
  imageUrl?: string;
  linkedinUrl?: string;
}

const teamMembers: {
  office: TeamMember[];
  field: TeamMember[];
} = {
  office: [
    {
      name: "Franziska Burichter",
      position: "Personal & Marketing",
      description: "Franziska jongliert seit 2004 erfolgreich mit Personal, Marketing und dem Chaos im Büro.",
      imageUrl: "/images/team/burichter-franziska.jpeg",
    },
    {
      name: "Christoph Lütjen",
      position: "Geschäftsführer",
      description: "Metallbaumeister und seit 2010 Geschäftsführer – Christoph führt das Unternehmen mit Familientradition und Leidenschaft.",
      imageUrl: "/images/team/luetjen-christoph.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/christoph-l%C3%BCtjen-9a1b3b1b3/",
    },
    {
      name: "Sonja Düwelsdorf",
      position: "Auftragsbearbeitung",
      description: "Sonja ist seit 2010 dabei und kümmert sich zuverlässig um Auftragsbearbeitung und alles rund ums Büro.",
      imageUrl: "/images/team/düwelsdorf-sonja.jpeg",
    },
    {
      name: "Astrid Pietzke-Fromm",
      position: "Rechnungswesen",
      description: "Zuverlässig und genau – Astrid ist seit 2011 unsere Ansprechpartnerin für Rechnungen",
      imageUrl: "/images/team/pietzke-fromm-astrid.jpeg",
    },
    {
      name: "Valeri Dillmann",
      position: "Disposition",
      description: "Valeri ist verantwortlich für die Disposition und die Arbeitseinteilung unserer Monteure",
      imageUrl: "/images/team/dillmann-valeri.jpeg",
    },
    {
      name: "Kirsten Stelljes",
      position: "Rechnungswesen",
      description: "Mit viel Sorgfalt und Erfahrung sorgt Kirsten dafür, dass alle Rechnungen stimmen",
      imageUrl: "/images/team/stelljes-kirsten.jpeg",
    },
    {
      name: "Renee Wedemeyer",
      position: "Auftragsbearbeitung",
      description: "Ob Ausschreibung oder Angeot - Renee kalkuliert präzise und mit Überblick.",
      imageUrl: "/images/team/wedemeyer-renee.jpeg",
    },
    {
      name: "Oliver Brandt",
      position: "Auftragsbearbeitung",
      description: "Bei Angeboten und Auftragsbestätigungen ist Oliver der Mann für den schnellen Überblick",
      imageUrl: "/images/team/brandt-oliver.jpeg",
    },
    {
      name: "Yvonne Lütjen",
      position: "Kundenbetreuung Wartungsverträge",
      description: "Yvonne kümmert sich um Wartungsverträge und sorgt dafür, dass alle Wartungsunterlagen griffbereit sind.",
      imageUrl: "/images/team/lütjen-yvonne.jpg",
    },
    {
      name: "Steffen Koschade",
      position: "Auftragsbearbeitung",
      description: "Steffen kümmert sich um die Kalkulation und macht aus Zahlen klare, faire Angebote.",
      imageUrl: "/images/team/koschade-steffen.jpg",
    },
    {
      name: "Luca Mahnken",
      position: "Azubi Büro",
      description: "Als Büro-Azubi unterstützt Luca unser Team und lernt alles rund um Organisation und Verwaltung.",
    },
  ],
  field: [
    {
      name: "Thomas Kirsch",
      position: "Elektriker",
      description: "Thomas ist seit 1997 dabei und quasi Inventar bei unserem Stammkunden – ohne ihn läuft die Betriebsschlosserei dort nicht rund",
      imageUrl: "/images/team/kirsch-thomas.jpeg",
    },
    {
      name: "Matthias Mahnken",
      position: "Elektriker",
      description: "Matthias sorgt seit 2004 als Elektriker dafür, dass Strom und Steuerungen bei uns zuverlässig laufen.",
      imageUrl: "/images/team/mahnken-matthias.jpeg",
    },
    {
      name: "Horst Potschka",
      position: "Maurer",
      description: "Horst ist Maurer und unser Spezialist für Türen und Zargen – passt, sitzt, wackelt nicht.",
      imageUrl: "/images/team/potschka-horst.jpeg",
    },
    {
      name: "Dennis Schwenzfeier",
      position: "Metallbauer",
      description: "Dennis, unser Metallbaumeister aus eigener Ausbildung",
      imageUrl: "/images/team/schwenzfeier-dennis.jpg",
    },
    {
      name: "Sven Preckel",
      position: "Metallbauer",
      description: "Seit 2010 sorgt Sven draußen auf den Baustellen dafür, dass Tore wieder laufen wie geschmiert",
      imageUrl: "/images/team/preckel-sven.jpeg",
    },
    {
      name: "Ralph Sänger",
      position: "Metallbauer",
      description: "Ralph ist unser erfahrener Hoftorspezialist und in der Werkstatt zuständig für individuelle Metallbauarbeiten",
      imageUrl: "/images/team/sänger-ralph.jpeg",
    },
    {
      name: "Michael Wendelken",
      position: "Maurer",
      description: "Michael ist unser Allrounder – vor allem wenn's um Maurerarbeiten und Zäune geht.",
      imageUrl: "/images/team/wendelken-michael.jpeg",
    },
    {
      name: "Kamil Kurzawski",
      position: "Metallbauer",
      description: "Kamil hat bei uns seine Ausbildung zum Metallbauer gemacht und ist jetzt unser Mann für Tormontagen und Reparaturen",
      imageUrl: "/images/team/kurzawski-kamil.jpeg",
    },
    {
      name: "Tobias Gerdes",
      position: "Metallbauer",
      description: "Tobias, ausgebildeter Metallbauer bei uns, bleibt bei jeder Tormontage cool und sorgt für reibungslose Reparaturen",
      imageUrl: "/images/team/gerdes-tobias.jpeg",
    },
    {
      name: "Andreas Kessner",
      position: "Metallbauer",
      description: "Andreas ist Metallbauer und jeden Tag bei einem festen Kunden vor Ort – unsere zuverlässige Stütze in der Betriebsschlosserei.",
      imageUrl: "/images/team/kesser-andreas.jpeg",
    },
    {
      name: "Mike Seelow",
      position: "Metallbauer",
      description: "Mike hat bei uns seine Ausbildung gemacht, ist seit 2017 im Team und montiert hauptsächlich Privattore – Reparaturen von Toranlagen gehören auch zu seinem Revier.",
      imageUrl: "/images/team/seelow-mike.jpeg",
    },
    {
      name: "Daniel Warschun",
      position: "Elektriker",
      description: "Daniel ist seit 2018 unser Mann für Strom – wenn's funkt, war's Absicht.",
      imageUrl: "/images/team/warschun-daniel.jpeg",
    },
    {
      name: "Lucas Vagts",
      position: "Metallbauer",
      description: "Lucas, ausgebildeter Metallbauer bei uns, packt überall mit an und kümmert sich um Reparaturen aller Art.",
      imageUrl: "/images/team/vagts-lucas.jpeg",
    },
    {
      name: "Florian Uhlig",
      position: "Metallbauer",
      description: "Unser Mann für Wartungen von Toren und UVV-Prüfungen – zuverlässig und kompetent im Einsatz",
      imageUrl: "/images/team/uhlig-florian.jpeg",
    },
    {
      name: "Felix Metzner",
      position: "Metallbauer",
      description: "Felix ist Metallbauer und bringt sein handwerkliches Können zuverlässig bei uns ein",
      imageUrl: "/images/team/metzner-felix.jpg",
    },
    {
      name: "Marius Wellbrock",
      position: "Elektriker",
      description: "Marius ist unser Elektriker, der mit viel Know-how für den richtigen Durchblick sorgt.",
      imageUrl: "/images/team/wellbrock-marius.jpg",
    },
    {
      name: "Horst Stelljes",
      position: "Lagerist",
      description: "Horst hält als Lagerist bei uns den Laden am Laufen – immer den Überblick und alles im Griff.",
      imageUrl: "/images/team/stelljes-horst.jpg",
    },
    {
      name: "Julian Vagts",
      position: "Metallbauer",
      description: "Julian ist unser Metallbauer, der bei Reparaturen und Montagen immer einen kühlen Kopf behält",
      imageUrl: "/images/team/vagts-julian.jpg",
    },
    {
      name: "Nils Stelljes",
      position: "Metallbauer",
      description: "Nils hat bei uns gelernt, fünf Jahre woanders Erfahrung gesammelt, seinen Meister gemacht und ist jetzt mit voller Power wieder am Start.",
      imageUrl: "/images/team/stelljes-nils.jpg",
    },
    {
      name: "Oliver Pillinger",
      position: "Elektriker",
      description: "Oliver ist der Mann für alles Elektrische an unseren Toranlagen – sorgt dafür, dass alles rund läuft.",
    },
    {
      name: "André Berg",
      position: "Metallbauer",
      description: "André ist unser Metallbauer und Türenspezialist – wenn's um Türen geht, kennt er jeden Trick.",
      imageUrl: "/images/team/berg-andre.jpg",
    },
    {
      name: "Viktor Henning",
      position: "Metallbauer",
      description: "Viktor bringt als Metallbauer sein Können in jedes Projekt ein und sorgt dafür, dass alles läuft.",
    },
    {
      name: "Fiete Fischer",
      position: "Azubi Metall",
      description: "Fiete lernt als Metallbauer-Azubi bei uns das Handwerk von der Pike auf – motiviert und engagiert",
      imageUrl: "/images/team/fischer-fiete.jpg",
    },
    {
      name: "Maurice Krause",
      position: "Azubi Metall",
      description: "Als Metallbauer-Azubi sammelt Maurice täglich praktische Erfahrung und wächst mit jeder Aufgabe.",
      imageUrl: "/images/team/krause-maurice.jpg",
    },
    {
      name: "Robin Segelken",
      position: "Azubi Metall",
      description: "Robin bringt frischen Wind ins Team – engagiert, lernbereit und voller Tatendrang.",
      imageUrl: "/images/team/segelken-robin.jpg",
    },
    {
      name: "Finn Hesse",
      position: "Azubi Metall",
      description: "Als angehender Metallbauer lernt Finn bei uns das Handwerk von Grund auf.",
    },
    {
      name: "Miguel Fischer",
      position: "Azubi Metall",
      description: "(erst ab 01.08.25)",
    },
  ],
};

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">Unser Team</h1>
      
      {/* Büro-Team */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Büro-Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.office.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              position={member.position}
              description={member.description}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>

      {/* Außendienst-Team */}
      <div>
        <h2 className="text-3xl font-semibold text-center mb-8">Außendienst-Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.field.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              position={member.position}
              description={member.description}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 