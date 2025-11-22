'use client'

import type { Language } from '@/lib/i18n'

interface KeyProgramInfoProps {
  lang: Language
  translations: any
}

export function KeyProgramInfo({ lang, translations }: KeyProgramInfoProps) {
  const t = (key: string) => {
    return key.split('.').reduce((obj, k) => obj?.[k], translations)
  }

  const infos = [
    {
      label: t('keyProgramInfo.applicationDeadline'),
      value: t('keyProgramInfo.applicationDeadlineDate'),
      icon: '📅'
    },
    {
      label: t('keyProgramInfo.programStart'),
      value: t('keyProgramInfo.programStartDate'),
      icon: '🚀'
    },
    {
      label: t('keyProgramInfo.duration'),
      value: t('keyProgramInfo.durationValue'),
      icon: '⏱️'
    },
    {
      label: t('keyProgramInfo.prerequisites'),
      value: t('keyProgramInfo.prerequisitesValue'),
      icon: '📚'
    },
    {
      label: t('keyProgramInfo.modalities'),
      value: t('keyProgramInfo.modalitiesValue'),
      icon: '🌍'
    },
    {
      label: t('keyProgramInfo.capacity'),
      value: t('keyProgramInfo.capacityValue'),
      icon: '👥'
    },
    {
      label: lang === 'en' ? 'Program Fee (Cameroon)' : 'Tarif Programme (Cameroun)',
      value: lang === 'en' 
        ? '175000 XAF (Discounted price thanks to partners, actual value 1,500,000 XAF)'
        : '175000 F CFA (Prix remisé grâce aux partenaires, valeur réelle 1 500 000 F CFA)',
      icon: '💰'
    },
    {
      label: t('keyProgramInfo.applicationFee'),
      value: t('keyProgramInfo.applicationFeeValue'),
      icon: '🎯'
    }
  ]

  return (
    <section className="relative w-full py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      {/* Hero-style Advanced Animated Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Aurora Effect */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-full blur-3xl animate-aurora [animation-delay:3s]" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-l from-secondary/25 via-accent/25 to-secondary/25 rounded-full blur-3xl animate-aurora [animation-delay:10s]" />
        
        {/* Morphing Shapes */}
        <div className="absolute top-1/3 right-1/4 transform w-[500px] h-[500px] bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 animate-morph blur-2xl [animation-delay:4s]" />
        
        {/* Floating Code Particles */}
        <div className="absolute inset-0">
          {['{ }', '< >', '[ ]', '( )', '=>', '&&'].map((code, i) => (
            <div
              key={i}
              className="absolute text-xs font-mono text-primary/30 animate-particles-drift"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8 + 2}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              {code}
            </div>
          ))}
        </div>
        
        {/* Sparkle Effects */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2 + 1}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/5 to-background/20" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {t('keyProgramInfo.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infos.map((info, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-transparent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">{info.icon}</span>
                <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                  {info.label}
                </p>
              </div>

              <p className="text-lg md:text-base font-bold text-foreground leading-tight text-balance">
                {info.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl border border-accent/30 bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10">
          <p className="text-center text-sm md:text-base text-foreground/80">
            {lang === 'en' 
              ? '⭐ Apply early to secure your spot! Limited capacity with 200 selected learners per cohort.' 
              : '⭐ Postulez tôt pour assurer votre place ! Capacité limitée avec 200 apprenants sélectionnés par cohorte.'}
          </p>
        </div>
      </div>
    </section>
  )
}
