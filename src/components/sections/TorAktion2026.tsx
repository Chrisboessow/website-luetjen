'use client';

import { motion } from 'framer-motion';
import { CheckIcon, StarIcon, GiftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const TorAktion2026 = () => {
  const highlights = [
    {
      icon: CheckIcon,
      title: "Keine Preisanpassung",
      description: "Bei den 7 gängigen ISO 20-Aktions-Größen für alle Aktionsfarben"
    },
    {
      icon: StarIcon,
      title: "TOP-Verkaufspreis",
      description: "Ab 999,- Euro inkl. MwSt. (UVP) bei ISO 20"
    },
    {
      icon: GiftIcon,
      title: "Exklusive Highlights",
      description: "Premium-Sektionaltor Evolution, NovoPort® Speed, Satin grey"
    }
  ];

  const aktionen = [
    {
      title: "ISO 20 – Toooooooooooor!",
      subtitle: "1:0 für Sie!",
      description: "Sektionaltore ISO 20 mit WM-Rabatt",
      preis: "ab 999€",
      link: "https://www.novoferm.de/aktionen/vermarktung-iso20-aktion-2026",
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "ISO 45 – Traumtore",
      subtitle: "Mit Jubelgarantie!",
      description: "Sektionaltore ISO 45 zur Weltmeisterschaft",
      preis: "Aktionspreis",
      link: "https://www.novoferm.de/aktionen/vermarktung-iso45-aktion-2026",
      gradient: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Fußball-Hintergrund-Elemente */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-4 border-gray-400"></div>
        <div className="absolute top-32 right-20 w-16 h-16 rounded-full border-4 border-gray-400"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full border-4 border-gray-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full mb-6">
            <span className="text-2xl">⚽</span>
            <span className="text-sm font-semibold text-gray-700">WM 2026 SPECIAL</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Tor-Aktionen zur Fußball-WM 2026
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vom <strong>01.03. - 31.08.2026</strong> profitieren Sie von unseren exklusiven 
            Novoferm Tor-Aktionen zur Weltmeisterschaft!
          </p>
        </motion.div>

        {/* Aktionen Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {aktionen.map((aktion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-primary-200">
                <div className={`bg-gradient-to-r ${aktion.gradient} p-6 text-white relative`}>
                  <div className="absolute top-4 right-4 text-4xl opacity-20">⚽</div>
                  <h3 className="text-2xl font-bold mb-2">{aktion.title}</h3>
                  <p className="text-xl font-semibold opacity-90">{aktion.subtitle}</p>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{aktion.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-primary-600">{aktion.preis}</span>
                    <span className="text-sm text-gray-500">inkl. MwSt.</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href="/kontakt"
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
                    >
                      Jetzt anfragen
                    </a>
                    <a
                      href={aktion.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 border border-gray-300 hover:border-primary-300 text-gray-700 hover:text-primary-600 rounded-lg font-medium transition-all duration-200"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Ihre Vorteile auf einen Blick
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <highlight.icon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{highlight.title}</h4>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Zusätzliche Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Weitere WM-Highlights
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Attraktive Zubehöre zu TOP-Preisen (SmartHome-Paket)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Neue Haustüren „NovoPorta Home" ab 1.499€</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Stahl-Mehrzwecktür als preisgünstige Garagen-Nebentür</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-4">
                <span className="text-4xl text-white">🏆</span>
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Weltmeisterliche Qualität
              </p>
              <p className="text-gray-600">
                Novoferm Premium-Tore zur WM 2026
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="/kontakt"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            <span>⚽</span>
            Jetzt WM-Aktion sichern!
            <span>🏆</span>
          </a>
          <p className="text-sm text-gray-500 mt-3">
            Aktion gültig vom 01.03. - 31.08.2026
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TorAktion2026;
