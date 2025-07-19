'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Script from 'next/script'
import { InstagramEmbed, FacebookEmbed, LinkedInEmbed } from 'react-social-media-embed'
import { Instagram, Facebook, Linkedin, Loader2 } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'

const PLATFORM_COLORS = {
  instagram: 'from-pink-500 to-purple-500',
  facebook: 'from-blue-600 to-blue-700',
  linkedin: 'from-blue-500 to-blue-600'
} as const;

const PLATFORM_ICONS = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin
} as const;

const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/luetjen.tore/',
  facebook: 'https://www.facebook.com/100063706848038',
  linkedin: 'https://www.linkedin.com/company/l%C3%BCtjen-gmbh'
} as const;

interface SocialFeedProps {
  platform: keyof typeof PLATFORM_COLORS;
  url: string;
}

function SocialFeedContainer({ platform, children }: { 
  platform: keyof typeof PLATFORM_COLORS;
  children: React.ReactNode;
}) {
  const Icon = PLATFORM_ICONS[platform];
  
  return (
    <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${PLATFORM_COLORS[platform]} flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold capitalize">{platform}</h2>
      </div>
      {children}
    </motion.div>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
    </div>
  );
}

function SocialFeed({ platform, url }: SocialFeedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  const getEmbedCode = () => {
    switch (platform) {
      case 'instagram':
        return (
          <div className="social-card" data-platform="instagram">
            <iframe
              src="https://www.instagram.com/luetjen.tore/embed"
              width="328"
              height="450"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              className="feed-frame"
            />
            <a 
              href="https://www.instagram.com/luetjen.tore/"
              target="_blank"
              rel="noopener noreferrer"
              className="view-profile-btn"
            >
              <FaInstagram className="social-icon" />
              Auf Instagram folgen
            </a>
          </div>
        );
      case 'facebook':
        return (
          <div className="social-card" data-platform="facebook">
            <div className="feed-preview">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F100063706848038&tabs=timeline&width=328&height=450&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false"
                width="328"
                height="450"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="feed-frame"
              />
            </div>
            <a 
              href="https://www.facebook.com/100063706848038"
              target="_blank"
              rel="noopener noreferrer"
              className="view-profile-btn"
            >
              <FaFacebook className="social-icon" />
              Auf Facebook folgen
            </a>
          </div>
        );
      case 'linkedin':
        return (
          <div className="social-card" data-platform="linkedin">
            <div className="feed-preview">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7352233800401076227"
                width="328"
                height="450"
                frameBorder="0"
                allowFullScreen={true}
                title="Lütjen GmbH LinkedIn Post"
                className="feed-frame"
                allow="autoplay; encrypted-media"
              />
            </div>
            <a 
              href="https://www.linkedin.com/company/72820721"
              target="_blank"
              rel="noopener noreferrer"
              className="view-profile-btn"
            >
              <FaLinkedin className="social-icon" />
              Auf LinkedIn folgen
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div ref={ref}>
      <SocialFeedContainer platform={platform}>
        <AnimatePresence>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="overflow-hidden flex justify-center"
            >
              {getEmbedCode()}
            </motion.div>
          )}
        </AnimatePresence>
      </SocialFeedContainer>
        </div>
  );
}

export default function SocialPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-16">
      {/* Hero Section */}
      <div className="mx-auto max-w-2xl text-center pt-24 sm:pt-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
        >
          <h1 className="relative inline-block text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Social Media
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Folgen Sie uns auf unseren Social-Media-Kanälen und bleiben Sie auf dem Laufenden.
          </p>
        </motion.div>
                </div>

      {/* Social Media Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(Object.keys(SOCIAL_LINKS) as Array<keyof typeof SOCIAL_LINKS>).map((platform) => (
            <SocialFeed
              key={platform}
              platform={platform}
              url={SOCIAL_LINKS[platform]}
            />
            ))}
          </div>
        </div>

      {/* Social Media SDKs */}
      <div id="fb-root" />
      <Script strategy="lazyOnload">
        {`
          // Facebook SDK
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v12.0";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        `}
      </Script>
    </main>
  );
} 