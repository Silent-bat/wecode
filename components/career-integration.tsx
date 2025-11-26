'use client'

import Image from 'next/image'
import type { Language } from '@/lib/i18n'

interface CareerIntegrationProps {
  lang: Language
}

export function CareerIntegration({ lang }: CareerIntegrationProps) {
  const tracks = [
    {
      title: "Fullstack/Software",
      roles: "Full Stack Developer, Front/Back End Dev, Junior Software Engineer",
      icon: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data/AI", 
      roles: "Data Analyst, ML Trainee, MLOps Junior",
      icon: "🤖",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud/DevOps",
      roles: "Cloud/DevOps Trainee, Ops/Support, NOC Technician", 
      icon: "☁️",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Sécurité",
      roles: "Cloud Security Junior, SecOps Starter",
      icon: "🔐", 
      color: "from-red-500 to-orange-500"
    }
  ]

  const careerSteps = [
    {
      step: "01",
      title: lang === 'en' ? "GitHub Portfolio" : "Portfolio GitHub",
      description: lang === 'en' 
        ? "Build professional demo projects that impress recruiters with real-world applications and clean code architecture" 
        : "Construis des projets démonstrateurs professionnels qui impressionnent les recruteurs avec des applications réelles et une architecture de code propre",
      image: "/images/github-portfolio.jpg",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10 border-blue-500/30"
    },
    {
      step: "02",
      title: lang === 'en' ? "Intensive Coaching" : "Coaching Intensif", 
      description: lang === 'en'
        ? "Master interview techniques through realistic simulations and receive personalized feedback to boost your confidence"
        : "Maîtrise les techniques d'entretien grâce à des simulations réalistes et reçois des retours personnalisés pour booster ta confiance",
      image: "/images/interview-coaching.jpg",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10 border-purple-500/30"
    },
    {
      step: "03",
      title: lang === 'en' ? "Employer Network" : "Réseau Employeurs",
      description: lang === 'en'
        ? "Get directly connected with our network of hiring partners and access exclusive job opportunities in the tech industry" 
        : "Connecte-toi directement avec notre réseau de partenaires de recrutement et accède à des opportunités d'emploi exclusives dans l'industrie tech",
      image: "/images/employer-network.jpg",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10 border-green-500/30"
    }
  ]

  return (
    <section id="career" className="relative py-24 px-6 bg-gradient-to-b from-background via-slate-900/50 to-background overflow-hidden">
      {/* Falling Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full text-sm font-medium text-green-400 border border-green-400/30">
            <span className="text-lg">🚀</span>
            {lang === 'en' ? 'Career Integration' : 'Insertion Professionnelle & Carrière'}
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent">
            {lang === 'en' ? 'Your Success, Our Mission' : 'Ton Succès, Notre Mission'}
          </h2>
          
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            {lang === 'en'
              ? 'WeCode Africa goes beyond technical training. We support you until your first job with a comprehensive and personalized integration program.'
              : "WeCode Africa ne se limite pas à la formation technique. Nous t'accompagnons jusqu'à ton premier emploi avec un programme d'insertion complet et personnalisé."}
          </p>
        </div>

        {/* Career Integration Steps */}
        <div className="space-y-16 mb-16">
          {careerSteps.map((step, index) => (
            <div 
              key={index}
              className={`group relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center gap-12`}
            >
              {/* Step Number & Visual */}
              <div className="flex-shrink-0 relative">
                <div className={`w-80 h-64 rounded-2xl bg-gradient-to-br ${step.color} p-1 group-hover:scale-105 transition-transform duration-500 shadow-2xl`}>
                  <div className="w-full h-full rounded-xl bg-slate-800/90 flex flex-col items-center justify-center border border-white/10 relative overflow-hidden">
                    {/* Professional SVG Images */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {index === 0 && (
                        /* GitHub Portfolio Visual */
                        <div className="w-full h-full p-6 flex flex-col items-center justify-center">
                          <div className="w-full max-w-48 bg-slate-700/80 rounded-lg p-4 mb-4">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                              <div className="flex-1 bg-slate-600 h-1 rounded ml-2"></div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                </svg>
                                <div className="w-16 h-2 bg-blue-400 rounded"></div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <div className="w-20 h-1 bg-slate-500 rounded"></div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                <div className="w-14 h-1 bg-slate-500 rounded"></div>
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-white/60 text-center">Professional Portfolio</div>
                        </div>
                      )}
                      
                      {index === 1 && (
                        /* Interview Coaching Visual */
                        <div className="w-full h-full p-6 flex flex-col items-center justify-center">
                          <div className="relative w-32 h-32 mb-4">
                            {/* Video call interface */}
                            <div className="w-full h-full bg-slate-700 rounded-lg border border-slate-600 relative overflow-hidden">
                              <div className="absolute top-2 left-2 right-2 flex justify-between">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <div className="flex gap-1">
                                  <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                                  <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                                  <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                                </div>
                              </div>
                              {/* Coach avatar */}
                              <div className="absolute bottom-2 right-2 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded border-2 border-white flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                              </div>
                              {/* Student avatar */}
                              <div className="absolute bottom-2 left-2 w-8 h-8 bg-gradient-to-br from-green-400 to-cyan-400 rounded border-2 border-white flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-white/60 text-center">1-on-1 Coaching</div>
                        </div>
                      )}
                      
                      {index === 2 && (
                        /* Employer Network Visual */
                        <div className="w-full h-full p-6 flex flex-col items-center justify-center">
                          <div className="w-full max-w-48 space-y-3">
                            {/* Company logos simulation */}
                            <div className="flex justify-center gap-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">T</div>
                              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded flex items-center justify-center text-white text-xs font-bold">G</div>
                              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">M</div>
                            </div>
                            <div className="flex justify-center gap-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded flex items-center justify-center text-white text-xs font-bold">A</div>
                              <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded flex items-center justify-center text-white text-xs font-bold">S</div>
                              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded flex items-center justify-center text-white text-xs font-bold">F</div>
                            </div>
                            {/* Connection lines */}
                            <div className="relative flex justify-center">
                              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                              </div>
                              {/* Connection lines */}
                              <div className="absolute inset-0">
                                {[...Array(6)].map((_, i) => (
                                  <div
                                    key={i}
                                    className="absolute w-px h-6 bg-gradient-to-t from-cyan-400/50 to-transparent"
                                    style={{
                                      left: '50%',
                                      top: '-12px',
                                      transform: `translateX(-50%) rotate(${i * 60}deg)`,
                                      transformOrigin: 'bottom'
                                    }}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-white/60 text-center mt-2">Partner Network</div>
                        </div>
                      )}
                    </div>
                    
                    {/* Step badge overlay */}
                    <div className="absolute bottom-4 left-4 z-10">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg border-2 border-white/20`}>
                        {step.step}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Connecting line (except last step) */}
                {index < careerSteps.length - 1 && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-blue-400/50 to-transparent lg:hidden" />
                )}
              </div>

              {/* Step Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'} text-center space-y-6`}>
                <div className={`inline-block px-4 py-2 ${step.bgColor} rounded-full text-sm font-medium border`}>
                  {lang === 'en' ? `Step ${step.step}` : `Étape ${step.step}`}
                </div>
                
                <h3 className="text-4xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {step.description}
                </p>

                {/* 10000 Codeurs Community - Only for Intensive Coaching */}
                {index === 1 && (
                  <div className={`mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-xl max-w-2xl ${index % 2 === 0 ? 'lg:mx-0' : 'lg:ml-auto'} mx-auto`}>
                    <p className="text-base text-purple-200 leading-relaxed">
                      {lang === 'en'
                        ? 'Join the 10,000 Coders community to improve visibility, digital culture, posture, network, leadership and succeed in your professional integration.'
                        : 'Intègre la communauté 10.000 codeurs pour améliorer visibilité, culture numérique, posture, réseau, leadership et réussir ton insertion professionnelle.'
                      }
                    </p>
                  </div>
                )}

                {/* Step Benefits */}
                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'} justify-center`}>
                  {index === 0 && (
                    <>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">GitHub</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Projects</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Portfolio</span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Mock Interviews</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Feedback</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Confidence</span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Job Matching</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Direct Contact</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Exclusive Opportunities</span>
                    </>
                  )}
                </div>
              </div>

              {/* Horizontal connecting line for desktop */}
              {index < careerSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-12 h-1 bg-gradient-to-r from-blue-400/50 to-transparent transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>

        {/* Career Tracks */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {lang === 'en' ? 'Career Objectives by Track' : 'Objectifs Métiers par Track'}
            </h3>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
              {lang === 'en' 
                ? 'Choose your specialization and discover the exciting career opportunities waiting for you in African tech'
                : 'Choisis ta spécialisation et découvre les opportunités de carrière passionnantes qui t\'attendent dans la tech africaine'
              }
            </p>
          </div>

          {/* Image and Tracks Layout */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Image Section */}
            <div className="lg:col-span-2">
              <div className="sticky top-8">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-2 backdrop-blur-sm border border-blue-400/20">
                    <Image
                      src="/images/newimage.png"
                      alt="African tech professionals in different career tracks"
                      width={500}
                      height={500}
                      className="w-full h-auto aspect-square object-cover rounded-2xl shadow-2xl transition-all duration-700 group-hover:scale-[1.02]"
                    />
                    {/* Refined overlay with career stats */}
                    <div className="absolute inset-2 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/20">
                          <div className="flex justify-between items-center text-center">
                            <div>
                              <div className="text-xl font-bold text-blue-300">4</div>
                              <div className="text-xs text-blue-100 uppercase tracking-wide">
                                {lang === 'en' ? 'Tracks' : 'Filières'}
                              </div>
                            </div>
                            <div className="w-px h-8 bg-white/30"></div>
                            <div>
                              <div className="text-xl font-bold text-purple-300">12+</div>
                              <div className="text-xs text-purple-100 uppercase tracking-wide">
                                {lang === 'en' ? 'Roles' : 'Métiers'}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Career track indicators */}
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-white text-sm">🎯</span>
                    </div>
                  </div>
                  
                  {/* Refined floating elements */}
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce opacity-80" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse opacity-80" />
                </div>
              </div>
            </div>

            {/* Tracks Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
            {tracks.map((track, index) => (
              <div 
                key={index}
                className="group p-6 bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${track.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {track.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-white">
                    {track.title}
                  </h4>
                  
                  <p className="text-sm text-blue-200 leading-relaxed">
                    {track.roles}
                  </p>
                </div>
              </div>
            ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="https://tally.so/r/7Rl829" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
          >
            <span className="text-2xl">🎯</span>
            {lang === 'en' ? 'Start Your Career Journey' : 'Commence Ton Parcours Professionnel'}
          </a>
        </div>
      </div>
    </section>
  )
}