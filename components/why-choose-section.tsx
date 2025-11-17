'use client'

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
