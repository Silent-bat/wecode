'use client'

import type { Language } from '@/lib/i18n'

interface AdmissionProcessProps {
  lang: Language
}

export function AdmissionProcess({ lang }: AdmissionProcessProps) {
  const steps = [
    {
      number: "01",
      title: lang === 'en' ? "Online Application" : "Candidature en Ligne",
      description: lang === 'en'
        ? "Fill out our detailed application form. Share your motivations, career project, and academic or professional background."
        : "Remplis notre formulaire de candidature détaillé. Partage tes motivations, ton projet professionnel et ton parcours académique ou professionnel.",
      icon: "📝",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02", 
      title: lang === 'en' ? "Application Review" : "Revue de Dossier",
      description: lang === 'en'
        ? "Our team carefully evaluates your profile: motivations, career project, technical prerequisites and fit with our training tracks. Open to all African countries."
        : "Notre équipe évalue attentivement ton profil : motivations, projet professionnel, prérequis techniques et adéquation avec nos tracks de formation. Ouvert à tous les pays africains.",
      icon: "🔍",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      title: lang === 'en' ? "Validation & Onboarding" : "Validation & Onboarding", 
      description: lang === 'en'
        ? "Once accepted, immediately access the platform, receive your personalized schedule and all necessary resources to get started."
        : "Une fois accepté, accède immédiatement à la plateforme, reçois ton planning personnalisé et toutes les ressources nécessaires pour bien démarrer.",
      icon: "🚀",
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Hero-style Advanced Animated Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Aurora Effect */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-purple-500/30 rounded-full blur-3xl animate-aurora [animation-delay:16s]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-purple-500/25 via-violet-500/25 to-fuchsia-500/25 rounded-full blur-3xl animate-aurora [animation-delay:23s]" />
        
        {/* Morphing Shapes */}
        <div className="absolute top-1/3 right-1/3 transform w-[500px] h-[500px] bg-gradient-to-br from-blue-500/8 via-transparent to-indigo-500/8 animate-morph blur-2xl [animation-delay:17s]" />
        
        {/* Floating Process Particles */}
        <div className="absolute inset-0">
          {['📝', '🔍', '✅', '📋', '⚡', '🎯'].map((icon, i) => (
            <div
              key={i}
              className="absolute text-sm animate-particles-drift opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8 + 7}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              {icon}
            </div>
          ))}
        </div>
        
        {/* Sparkle Effects */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2 + 3.5}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/5 to-background/20" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium text-blue-400 border border-blue-400/30">
            <span className="text-lg">⚡</span>
            {lang === 'en' ? 'Admission Process' : 'Processus d\'Admission'}
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            {lang === 'en' ? 'Simple and Fast Admission Process' : 'Processus d\'Admission Simple et Rapide'}
          </h2>
          
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            {lang === 'en'
              ? 'Joining WeCode Africa is easy. Our three-step admission process ensures that each candidate is evaluated fairly and receives support from the beginning.'
              : "Rejoindre WeCode Africa est facile. Notre processus d'admission en trois étapes garantit que chaque candidat est évalué équitablement et bénéficie d'un accompagnement dès le début."}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`group relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center gap-12`}
            >
              {/* Step Number & Icon */}
              <div className="flex-shrink-0 relative">
                <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${step.color} p-1 group-hover:scale-110 transition-transform duration-500`}>
                  <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center border-2 border-white/20">
                    <span className="text-3xl mb-1">{step.icon}</span>
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                </div>
                
                {/* Connecting line (except last step) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-blue-400/50 to-transparent lg:hidden" />
                )}
              </div>

              {/* Step Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'} text-center`}>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Horizontal connecting line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-12 h-1 bg-gradient-to-r from-blue-400/50 to-transparent transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="space-y-6">
            <p className="text-blue-200 text-lg">
              {lang === 'en' ? 'Ready to start your tech journey?' : 'Prêt à commencer ton parcours tech?'}
            </p>
            
            <a 
              href="https://tally.so/r/7Rl829" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 hover:scale-105 relative overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              
              <span className="relative flex items-center gap-3">
                <span className="text-2xl">📋</span>
                {lang === 'en' ? 'Start Your Application' : 'Commence Ta Candidature'}
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