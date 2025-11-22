import Link from 'next/link'
import type { Language } from '@/lib/i18n'
import { AnimatedBackground } from './animated-background'

interface HeroSectionProps {
  lang: Language
  translations: Record<string, any>
}

export function HeroSection({ lang, translations }: HeroSectionProps) {
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
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Aurora Effect */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 rounded-full blur-3xl animate-aurora" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-secondary/30 via-accent/30 to-secondary/30 rounded-full blur-3xl animate-aurora [animation-delay:7s]" />
        
        {/* Morphing Shapes */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-morph blur-2xl" />
        
        {/* Neural Network Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="currentColor" className="text-primary/50"/>
              <circle cx="0" cy="0" r="1" fill="currentColor" className="text-secondary/30"/>
              <circle cx="100" cy="0" r="1" fill="currentColor" className="text-accent/40"/>
              <circle cx="0" cy="100" r="1" fill="currentColor" className="text-primary/40"/>
              <circle cx="100" cy="100" r="1" fill="currentColor" className="text-secondary/50"/>
            </pattern>
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" className="text-primary/30"/>
              <stop offset="50%" stopColor="currentColor" className="text-secondary/20"/>
              <stop offset="100%" stopColor="currentColor" className="text-accent/30"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)"/>
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

      {/* Live Coding Badge - Responsive positioning */}
      <div className="hidden md:block absolute top-8 right-32 z-20">
        <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-slate-800/80 via-slate-700/80 to-slate-800/80 backdrop-blur-xl text-primary rounded-2xl text-sm font-bold border border-primary/40 shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
          <div className="relative">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse block" />
            <span className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping" />
          </div>
          <span className="text-white">Live Coding Environment</span>
          <span className="px-2 py-1 bg-primary/20 text-primary rounded-md text-xs font-mono">2026</span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Enhanced Left Content */}
        <div className="space-y-12 animate-fade-in">
          <div className="space-y-8">
            
            {/* Partner Logos - Moved to top */}
            <div className="flex items-center justify-start gap-8 mb-8">
              <div className="flex items-center gap-6 opacity-90 hover:opacity-100 transition-opacity duration-300">
                <div className="relative group">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fxw7jzeUF5348NelReHc3lHEJuZeXn.png" 
                    alt="AWS" 
                    className="h-10 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="relative group">
                  <img 
                    src="https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Logo.png" 
                    alt="Google Cloud" 
                    className="h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="relative group">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-miXKwHH5ndI16muHj5PU7ZYZO1ezMv.png" 
                    alt="Blue Tech" 
                    className="h-10 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            
            {/* Mobile version of Live Coding Badge - positioned after logos */}
            <div className="md:hidden flex justify-end mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-800/80 via-slate-700/80 to-slate-800/80 backdrop-blur-xl text-primary rounded-xl text-xs font-bold border border-primary/40">
                <div className="relative">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse block" />
                  <span className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping" />
                </div>
                <span className="text-white">Live Coding Environment</span>
                <span className="px-1 py-0.5 bg-primary/20 text-primary rounded text-xs font-mono">2026</span>
              </div>
            </div>
            
            {/* Dynamic Title with Typing Effect */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-balance leading-[0.9] tracking-tight">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-wave">
                  Code
                </span>
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                  Africa's
                </span>
                <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-wave [animation-delay:0.5s]">
                  Future
                </span>
              </h1>
              
              {/* Animated Underline */}
              <div className="flex items-center gap-4">
                <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-pulse" />
                <div className="h-0.5 w-32 bg-gradient-to-r from-secondary/50 to-transparent rounded-full" />
              </div>
            </div>
            
            {/* Enhanced Description with Typewriter Effect */}
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-blue-100 text-balance leading-relaxed max-w-2xl font-light">
                {t('hero.description')}
              </p>
              
              {/* Key Features Pills */}
              <div className="flex flex-wrap gap-3 pt-4">
                {['Pan-African', '100% Remote', 'Job Guarantee', 'Expert Mentors'].map((feature, i) => (
                  <span 
                    key={feature}
                    className={`px-4 py-2 bg-white/10 backdrop-blur-sm text-blue-100 rounded-full text-sm font-medium border border-white/20 animate-fade-in animate-delay-${i + 1}`}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="space-y-8">
            {/* Single Primary CTA - Enhanced */}
            <div className="flex justify-start">
              <a 
                href="https://tally.so/r/7Rl829" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-16 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 font-bold text-2xl overflow-hidden text-center transform hover:scale-110 hover:-translate-y-2"
              >
                {/* Enhanced Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Multiple Shimmer Effects */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent skew-x-12 delay-200" />
                
                {/* Pulsing outer ring */}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/30 animate-ping opacity-20"></div>
                
                <span className="relative flex items-center justify-center gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  Start Your Journey
                  <svg className="w-7 h-7 transition-transform group-hover:translate-x-3 group-hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
            
            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-blue-200">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No upfront fees
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Job guarantee
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                24/7 support
              </div>
            </div>
          </div>

          {/* Revolutionary Stats Section */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
            {[
              { value: "500+", label: "Graduates", color: "text-blue-400", icon: "users" },
              { value: "84%", label: "Job Placement", color: "text-green-400", icon: "briefcase" },
              { value: "4.9/5", label: "Student Rating", color: "text-yellow-400", icon: "star" }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="mb-2">
                  <div className={`w-8 h-8 mx-auto ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon === 'users' && (
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                    {stat.icon === 'briefcase' && (
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v6m-8-6v6m0 0v5a2 2 0 002 2h4a2 2 0 002-2v-5" />
                      </svg>
                    )}
                    {stat.icon === 'star' && (
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className={`text-3xl md:text-4xl font-black ${stat.color} group-hover:scale-110 transition-transform duration-300 mb-1`}>
                  {stat.value}
                </div>
                <div className="text-xs text-blue-200 font-medium group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revolutionary Right Visual - Interactive 3D Dashboard */}
        <div className="relative h-[700px] flex items-center justify-center animate-slide-up">
          {/* 3D Dashboard Container */}
          <div className="relative w-full h-full perspective-1000">
            {/* Main Dashboard */}
            <div className="relative w-full h-full bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-black/90 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl transform hover:rotate-y-5 transition-transform duration-700 overflow-hidden">
              
              {/* Dashboard Header */}
              <div className="p-6 border-b border-white/10 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse [animation-delay:0.3s]"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse [animation-delay:0.6s]"></div>
                  </div>
                  <span className="text-white/80 text-sm font-mono">qwasar.io</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">W</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">WeCode Africa</h4>
                    <p className="text-white/60 text-sm">Live Coding Environment</p>
                  </div>
                </div>
              </div>

              {/* Code Editor Simulation */}
              <div className="p-6 space-y-4">
                <div className="bg-slate-900/80 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-4 h-4 bg-green-400 rounded animate-pulse"></div>
                    <span className="text-green-400 text-sm font-mono">main.js</span>
                  </div>
                  
                  {/* Animated Code Lines */}
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-purple-400 animate-fade-in">
                      <span className="text-blue-400">function</span> buildFuture() {'{'}
                    </div>
                    <div className="text-white/80 pl-4 animate-fade-in animate-delay-1">
                      <span className="text-orange-400">const</span> <span className="text-blue-300">skills</span> = [
                    </div>
                    <div className="text-green-400 pl-8 animate-fade-in animate-delay-2">
                      'React', 'Node.js', 'Python', 'AI/ML'
                    </div>
                    <div className="text-white/80 pl-4 animate-fade-in animate-delay-3">
                      ];
                    </div>
                    <div className="text-yellow-400 pl-4 animate-fade-in animate-delay-4">
                      <span className="text-pink-400">return</span> skills.map(skill {'=>'} career);
                    </div>
                    <div className="text-purple-400 animate-fade-in animate-delay-5">
                      {'}'}
                    </div>
                  </div>
                </div>

                {/* Live Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                      <span className="text-blue-200 text-xs font-semibold">LIVE STUDENTS</span>
                    </div>
                    <div className="text-blue-400 text-2xl font-bold">127</div>
                  </div>
                  
                  <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-4 border border-green-400/30">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-ping [animation-delay:0.5s]"></div>
                      <span className="text-green-200 text-xs font-semibold">PROJECTS DEPLOYED</span>
                    </div>
                    <div className="text-green-400 text-2xl font-bold">1,247</div>
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-white/60 mb-1">
                      <span>Frontend Mastery</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-[85%] animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs text-white/60 mb-1">
                      <span>Backend Skills</span>
                      <span>78%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full w-[78%] animate-pulse [animation-delay:0.3s]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Achievement Badges */}
              <div className="absolute inset-0 pointer-events-none">
                {['🏆', '🚀', '💡', '⚡', '🌟'].map((emoji, i) => (
                  <div
                    key={i}
                    className="absolute text-2xl opacity-70 animate-float hover:opacity-100 transition-opacity"
                    style={{
                      left: `${15 + (i * 18)}%`,
                      top: `${20 + (i * 15)}%`,
                      animationDelay: `${i * 0.7}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
