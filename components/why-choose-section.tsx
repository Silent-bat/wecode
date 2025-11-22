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

        {/* Optimized Layout with Right Image */}
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Content Column - Left side */}
          <div className="lg:col-span-3 order-1 lg:order-1">
            <div className="grid gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-[#001A2E]/50 to-[#0D3B66]/50 border border-[#00D4AA]/20 hover:border-[#00D4AA]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00D4AA]/10 hover:translate-x-2"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-3xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {icons[index]}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                  {card.description}
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#00D4AA] to-[#FF9500] rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 w-full" />
              
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
            </div>
          </div>

          {/* Image Column - Right side */}
          <div className="lg:col-span-2 order-2 lg:order-2">
            <div className="sticky top-8">
              <div className="relative group">
                {/* Enhanced Image Container */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 p-3 backdrop-blur-sm border border-primary/30">
                  <Image
                    src="/images/8BI1Oy1hp3M30ICkqiPyO.png"
                    alt="African tech professionals collaborating"
                    width={500}
                    height={500}
                    className="w-full h-auto aspect-square object-cover rounded-2xl shadow-2xl transition-all duration-700 group-hover:scale-[1.03] group-hover:shadow-3xl"
                    priority
                  />
                  {/* Enhanced overlay gradient */}
                  <div className="absolute inset-3 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Success indicator */}
                  <div className="absolute top-5 left-5 bg-green-500/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  {/* Feature highlights overlay */}
                  <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-md rounded-xl p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
                    <div className="text-white text-center">
                      <div className="text-sm font-semibold mb-1">
                        {lang === 'en' ? 'WeCode Africa Excellence' : 'Excellence WeCode Africa'}
                      </div>
                      <div className="flex justify-center gap-4 text-xs">
                        <span className="text-primary">🚀 Innovation</span>
                        <span className="text-secondary">🌍 Standards</span>
                        <span className="text-green-400">💼 Results</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced floating elements with connection lines */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-secondary to-primary rounded-full animate-bounce opacity-90" />
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse opacity-90" />
                
                {/* Connection lines to content */}
                <div className="hidden lg:block absolute -left-8 top-1/4 w-8 h-px bg-gradient-to-l from-primary/50 to-transparent" />
                <div className="hidden lg:block absolute -left-8 top-1/2 w-8 h-px bg-gradient-to-l from-secondary/50 to-transparent" />
                <div className="hidden lg:block absolute -left-8 top-3/4 w-8 h-px bg-gradient-to-l from-primary/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
