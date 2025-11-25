'use client'

import Image from 'next/image'
import type { Language } from '@/lib/i18n'

interface PartnersProps {
  lang: Language
  translations: any
}

export function Partners({ lang, translations }: PartnersProps) {
  const partnerCategories = [
    {
      title: lang === 'en' ? 'Technology Partners' : 'Partenaires Technologiques',
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      partners: [
        {
          name: 'Qwasar',
          logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-miXKwHH5ndI16muHj5PU7ZYZO1ezMv.png',
          alt: 'Qwasar'
        },
        {
          name: translations.partners.amazon,
          logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fxw7jzeUF5348NelReHc3lHEJuZeXn.png',
          alt: 'Amazon Web Services'
        },
        {
          name: translations.partners.googleCloud,
          logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cLAp9f4Zx1JdDoPtODoItXHsiutSM7.png',
          alt: 'Google Cloud'
        }
      ]
    },
    {
      title: lang === 'en' ? 'Academic Partners & Innovation Hubs' : 'Partenaires Académiques & Hubs Innovation',
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30',
      partners: [
        {
          name: translations.partners.jfn,
          logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cOXsHQo1C0Di0C8mR8wCKiSegNMbS0.png',
          alt: 'JFN Hightech University Institute'
        },
        {
          name: translations.partners.mountainHub,
          logo: '/images/mountainhub.jpeg',
          alt: 'Mountain Hub'
        },
        {
          name: '10000 Codeurs',
          logo: '/images/10000Codeurs.png',
          alt: '10000 Codeurs'
        },
        {
          name: translations.partners.enovation,
          logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jognVICMdXmvjLzHPaSEAX90wu4ZTN.png',
          alt: 'Enovation Factory'
        },
        {
          name: 'Ecole 241',
          logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KH8YPzMU80tkzdsSgEmIGDoj2l04DL.png',
          alt: 'Ecole 241'
        },
        {
          name: 'Ogooue Labs',
          logo: '/images/ougue_labs.png',
          alt: 'Ogooue Labs'
        }
      ]
    },
    {
      title: lang === 'en' ? 'Placement & Recruitment Partners' : 'Partenaires Placement & Recrutement',
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      partners: [
        {
          name: 'Breedj',
          logo: '/images/breej.jpeg',
          alt: 'Breedj'
        },
        {
          name: translations.partners.teolis,
          logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1VIQ18bksZyG0pw2IoVqmsEBdCTLtl.png',
          alt: 'Fondation Teolis'
        },
        {
          name: translations.partners.cadit,
          logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AIjeXdeCzkxGLfnBT1GqsXvuj7Mxf8.png',
          alt: 'CADIT - Cameroon Digital Tank'
        }
      ]
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

        {/* Partners by Category */}
        <div className="space-y-16">
          {partnerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <div className={`w-16 h-1 bg-gradient-to-r ${category.color.replace('/20', '')} rounded-full mx-auto`}></div>
              </div>

              {/* Category Partners Grid */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto`}>
                {category.partners.map((partner, index) => (
                  <div
                    key={index}
                    className={`group relative p-6 rounded-xl border ${category.borderColor} bg-gradient-to-br ${category.color} hover:border-opacity-70 transition-all duration-300 flex items-center justify-center min-h-[160px]`}
                  >
                    {/* Hover effect background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color.replace('/20', '/10')} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* Logo Container */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.alt}
                        className={`max-w-full max-h-20 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300 ${
                          partner.name === 'Mountain Hub' ? 'bg-white rounded-lg p-2' : ''
                        }`}
                      />
                    </div>

                    {/* Tooltip - Partner Name */}
                    <div className="absolute bottom-2 left-2 right-2 bg-gray-900/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center truncate">
                      {partner.name}
                    </div>
                  </div>
                ))}
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
          
          <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20 max-w-md mx-auto">
            <h3 className="text-white font-semibold mb-3">
              {lang === 'en' ? 'Partnership Contact' : 'Contact Partenariat'}
            </h3>
            <a 
              href="mailto:Info@jfn-univ.com" 
              className="text-primary hover:text-primary/80 transition-colors font-semibold text-lg"
            >
              Info@jfn-univ.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
