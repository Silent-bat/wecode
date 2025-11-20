'use client'

import Image from 'next/image'
import type { Language } from '@/lib/i18n'

interface WhyChooseCard {
  title: string
  description: string
}

interface WhyChooseSectionProps {
  lang: Language
  translations: Record<string, any>
}

export function WhyChooseSection({ lang, translations }: WhyChooseSectionProps) {
  const cards: WhyChooseCard[] = translations.whyChoose?.cards || []

  const icons = [
    '🚀', // Project-Based Learning
    '🌍', // International Standards
    '💼', // Professional Integration
    '⚡'  // Total Flexibility
  ]

  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key
      }
    }
    return value
  }

  return (
    <section className="relative py-20 px-6 md:px-12 overflow-hidden" id="why-choose">
      {/* Hero-style Advanced Animated Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Aurora Effect */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 rounded-full blur-3xl animate-aurora" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-secondary/30 via-accent/30 to-secondary/30 rounded-full blur-3xl animate-aurora [animation-delay:7s]" />
        
        {/* Morphing Shapes */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-morph blur-2xl" />
        
        {/* Neural Network Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-grid-why" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="currentColor" className="text-primary/50"/>
              <circle cx="0" cy="0" r="1" fill="currentColor" className="text-secondary/30"/>
              <circle cx="100" cy="0" r="1" fill="currentColor" className="text-accent/40"/>
              <circle cx="0" cy="100" r="1" fill="currentColor" className="text-primary/40"/>
              <circle cx="100" cy="100" r="1" fill="currentColor" className="text-secondary/50"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid-why)"/>
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#neural-gradient)"
              strokeWidth="1"
              strokeDasharray="5,5"
              className="animate-neural"
              style={{animationDelay: `${i * 0.5}s`}}
            />
          ))}
        </svg>
        
        {/* Floating Code Particles */}
        <div className="absolute inset-0">
          {['<>', '{}', '[]', '/>', '&&', '||', '=>', '++'].map((code, i) => (
            <div
              key={i}
              className="absolute text-xs font-mono text-primary/40 animate-particles-drift"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              {code}
            </div>
          ))}
        </div>
        
        {/* Sparkle Effects */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-pretty">
            {t('whyChoose.title')}
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              {/* Image Container with Enhanced Visual Effects */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 p-2 backdrop-blur-sm border border-primary/20">
                <Image
                  src="/images/8BI1Oy1hp3M30ICkqiPyO.png"
                  alt="African tech professionals collaborating"
                  width={600}
                  height={600}
                  className="w-full h-auto aspect-square object-cover rounded-2xl shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-3xl"
                  priority
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-2 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Tech elements overlay */}
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse">
                  <span className="text-white text-sm font-bold">💡</span>
                </div>
              </div>
              
              {/* Refined floating elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-secondary to-primary rounded-full animate-bounce opacity-80" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse opacity-80" />
            </div>
          </div>

          {/* Text Column */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full text-sm font-semibold text-primary border border-primary/25 backdrop-blur-sm">
                <span className="text-xl">🌍</span>
                {lang === 'en' ? 'Leading African Tech Education' : 'Formation Tech Africaine de Pointe'}
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                {lang === 'en' 
                  ? 'Transform Your Future with African Tech Excellence'
                  : 'Transformez Votre Avenir avec l\'Excellence Tech Africaine'
                }
              </h3>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                {lang === 'en' 
                  ? 'Join a community of ambitious African developers who are transforming the continent\'s tech landscape through innovative education and real-world experience.'
                  : 'Rejoignez une communauté de développeurs africains ambitieux qui transforment le paysage technologique du continent grâce à une éducation innovante et une expérience du monde réel.'
                }
              </p>
              
              {/* Enhanced Statistics Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-gradient-to-br from-secondary/10 to-transparent rounded-xl border border-secondary/20">
                  <div className="text-2xl font-bold text-secondary mb-1">500+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    {lang === 'en' ? 'Graduates' : 'Diplômés'}
                  </div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-transparent rounded-xl border border-primary/20">
                  <div className="text-2xl font-bold text-primary mb-1">90%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    {lang === 'en' ? 'Job Placement' : 'Placement Pro'}
                  </div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-secondary/10 to-transparent rounded-xl border border-secondary/20">
                  <div className="text-2xl font-bold text-secondary mb-1">15+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    {lang === 'en' ? 'Countries' : 'Pays'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#001A2E]/50 to-[#0D3B66]/50 border border-[#00D4AA]/20 hover:border-[#00D4AA]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00D4AA]/10"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {icons[index]}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {card.description}
              </p>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#00D4AA] to-[#FF9500] rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
