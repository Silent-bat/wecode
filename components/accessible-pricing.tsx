'use client'

import type { Language } from '@/lib/i18n'

interface AccessiblePricingProps {
  lang: Language
}

export function AccessiblePricing({ lang }: AccessiblePricingProps) {
  const inclusions = [
    {
      title: lang === 'en' ? "Qwasar Platform Access" : "Accès Plateforme Qwasar",
      icon: "💻",
      description: lang === 'en' ? "Complete access to the Qwasar platform" : "Accès complet à la plateforme Qwasar"
    },
    {
      title: lang === 'en' ? "Cloud Platforms & Courses" : "Plateformes et Cours Cloud", 
      icon: "☁️",
      description: lang === 'en' ? "AWS/Google Cloud platforms and courses" : "Plateformes et cours cloud AWS/Google"
    },
    {
      title: lang === 'en' ? "Career Coaching" : "Coaching Carrière",
      icon: "🎯", 
      description: lang === 'en' ? "Personalized career guidance" : "Accompagnement carrière personnalisé"
    },
    {
      title: lang === 'en' ? "Job Support" : "Accompagnement Emploi",
      icon: "🤝",
      description: lang === 'en' ? "Support until employment" : "Accompagnement jusqu'à l'emploi"
    }
  ]

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Hero-style Advanced Animated Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Aurora Effect */}
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-green-500/30 via-emerald-500/30 to-teal-500/30 rounded-full blur-3xl animate-aurora [animation-delay:19s]" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-l from-blue-500/25 via-cyan-500/25 to-teal-500/25 rounded-full blur-3xl animate-aurora [animation-delay:26s]" />
        
        {/* Morphing Shapes */}
        <div className="absolute top-1/4 left-1/3 transform w-[550px] h-[550px] bg-gradient-to-br from-green-500/8 via-transparent to-emerald-500/8 animate-morph blur-2xl [animation-delay:20s]" />
        
        {/* Floating Investment Particles */}
        <div className="absolute inset-0">
          {['💎', '💰', '💳', '📈', '🎓', '🚀'].map((icon, i) => (
            <div
              key={i}
              className="absolute text-sm animate-particles-drift opacity-35"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8 + 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              {icon}
            </div>
          ))}
        </div>
        
        {/* Sparkle Effects */}
        <div className="absolute inset-0">
          {[...Array(17)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-full animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2 + 4}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/5 to-background/20" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full text-sm font-medium text-green-400 border border-green-400/30">
            <span className="text-lg">💎</span>
            {lang === 'en' ? 'Affordable Pricing' : 'Tarifs Accessibles'}
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent">
            {lang === 'en' ? 'Invest in Your Tech Future' : 'Investis dans Ton Avenir Tech'}
          </h2>
          
          <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            {lang === 'en'
              ? 'WeCode Africa offers international quality training at an accessible price for talented individuals across the entire African continent.'
              : 'WeCode Africa propose une formation de qualité internationale à un tarif accessible pour les talents à travers tout le continent africain.'}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Program Fee Card */}
          <div className="group relative p-8 bg-gradient-to-br from-green-500/10 via-slate-800/90 to-green-500/5 rounded-3xl border border-green-400/30 hover:border-green-400/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-2xl">
                  🎓
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {lang === 'en' ? 'Program Fee' : 'Tarif Programme'}
                  </h3>
                  <p className="text-green-200">
                    {lang === 'en' ? '7-9 months intensive training' : '7-9 mois de formation intensive'}
                  </p>
                </div>
              </div>

              <div className="text-center py-8">
                <div className="text-5xl font-black text-green-400 mb-2">
                  300 000 <span className="text-2xl">FCFA</span>
                </div>
                <p className="text-green-200">
                  {lang === 'en' ? 'with international certifications included' : 'avec certifications internationales incluses'}
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-green-100 text-center font-medium">
                  {lang === 'en' ? 'Includes:' : 'Inclut:'}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {inclusions.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-green-100">
                      <span className="text-base">{item.icon}</span>
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Application Fee Card */}
          <div className="group relative p-8 bg-gradient-to-br from-blue-500/10 via-slate-800/90 to-blue-500/5 rounded-3xl border border-blue-400/30 hover:border-blue-400/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-2xl">
                  📋
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {lang === 'en' ? 'Application Fee' : 'Frais de Dossier'}
                  </h3>
                  <p className="text-blue-200">
                    {lang === 'en' ? 'One-time application processing' : 'Traitement unique de candidature'}
                  </p>
                </div>
              </div>

              <div className="text-center py-8">
                <div className="text-5xl font-black text-blue-400 mb-2">
                  5 000 <span className="text-2xl">FCFA</span>
                </div>
                <p className="text-red-300 font-medium">
                  {lang === 'en' ? 'non-refundable' : 'non remboursables'}
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                  <p className="text-sm text-blue-100 text-center">
                    {lang === 'en' 
                      ? 'This fee covers application processing and initial assessment'
                      : 'Ces frais couvrent le traitement de ta candidature et l\'évaluation initiale'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="text-center p-8 bg-gradient-to-r from-slate-800/50 via-slate-700/50 to-slate-800/50 rounded-2xl border border-slate-600/50 backdrop-blur-sm">
          <p className="text-lg text-slate-200 leading-relaxed max-w-4xl mx-auto">
            {lang === 'en'
              ? 'These fees cover complete access to the Qwasar platform, AWS/Google Cloud platforms and courses (excluding Google Cloud and AWS certification exam costs), career coaching, and support until employment.'
              : "Ces frais couvrent l'accès complet à la plateforme Qwasar, les plateformes et cours cloud AWS/Google (hors coût de passage de certification Google Cloud et AWS), le coaching carrière, et l'accompagnement jusqu'à l'emploi."}
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="space-y-6">
            <p className="text-green-200 text-lg font-medium">
              {lang === 'en' ? 'Ready to invest in your future?' : 'Prêt à investir dans ton avenir?'}
            </p>
            
            <a 
              href="https://tally.so/r/7Rl829" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-500 hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              
              <span className="relative flex items-center gap-3">
                <span className="text-2xl">💳</span>
                {lang === 'en' ? 'Apply Now - Secure Your Spot' : 'Postuler Maintenant - Sécurise Ta Place'}
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}