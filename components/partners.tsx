'use client'

import Image from 'next/image'
import type { Language } from '@/lib/i18n'

interface PartnersProps {
  lang: Language
  translations: any
}

export function Partners({ lang, translations }: PartnersProps) {
  const partners = [
    {
      name: translations.partners.amazon,
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fxw7jzeUF5348NelReHc3lHEJuZeXn.png',
      alt: 'Amazon'
    },
    {
      name: translations.partners.cadit,
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AIjeXdeCzkxGLfnBT1GqsXvuj7Mxf8.png',
      alt: 'CADIT - Cameroon Digital Tank'
    },
    {
      name: translations.partners.enovation,
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jognVICMdXmvjLzHPaSEAX90wu4ZTN.png',
      alt: 'Enovation Factory'
    },
    {
      name: translations.partners.blueTech,
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-miXKwHH5ndI16muHj5PU7ZYZO1ezMv.png',
      alt: 'Blue Tech'
    },
    {
      name: translations.partners.googleCloud,
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cLAp9f4Zx1JdDoPtODoItXHsiutSM7.png',
      alt: 'Google Cloud'
    },
    {
      name: translations.partners.ecole24,
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KH8YPzMU80tkzdsSgEmIGDoj2l04DL.png',
      alt: 'Ecole 24'
    },
    {
      name: translations.partners.jfn,
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cOXsHQo1C0Di0C8mR8wCKiSegNMbS0.png',
      alt: 'JFN Hightech University Institute'
    },
    {
      name: translations.partners.teolis,
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1VIQ18bksZyG0pw2IoVqmsEBdCTLtl.png',
      alt: 'Fondation Teolis'
    },
    {
      name: translations.partners.mountainHub,
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mlJO4Gxp7vBqD2ry5r4dsI6ZgRkyaJ.png',
      alt: 'Mountain Hub'
    }
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Hero-style Advanced Animated Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Aurora Effect */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-indigo-500/30 rounded-full blur-3xl animate-aurora [animation-delay:8s]" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-l from-purple-500/25 via-pink-500/25 to-red-500/25 rounded-full blur-3xl animate-aurora [animation-delay:15s]" />
        
        {/* Morphing Shapes */}
        <div className="absolute top-1/3 left-1/4 transform w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/8 via-transparent to-blue-500/8 animate-morph blur-2xl [animation-delay:9s]" />
        
        {/* Floating Partnership Particles */}
        <div className="absolute inset-0">
          {['🤝', '🌍', '🏢', '🔗', '💼', '🌟'].map((icon, i) => (
            <div
              key={i}
              className="absolute text-sm animate-particles-drift opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8 + 4}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              {icon}
            </div>
          ))}
        </div>
        
        {/* Sparkle Effects */}
        <div className="absolute inset-0">
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-full animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/5 to-background/20" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-balance text-4xl md:text-5xl font-bold text-white mb-4">
            {translations.partners.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {translations.partners.subtitle}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center min-h-[180px]"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Logo Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.alt}
                  className="max-w-full max-h-24 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                />
              </div>

              {/* Tooltip - Partner Name */}
              <div className="absolute bottom-2 left-2 right-2 bg-gray-900/80 backdrop-blur-sm text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center truncate">
                {partner.name}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg mb-6">
            {lang === 'en' 
              ? 'Become part of our growing network of partners'
              : 'Faites partie de notre réseau croissant de partenaires'}
          </p>
          <a
            href={`/${lang}#contact`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            {lang === 'en' ? 'Get in Touch' : 'Nous Contacter'}
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
