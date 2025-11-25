'use client'

import { useState } from 'react'
import type { Language } from '@/lib/i18n'

interface ContactSectionProps {
  lang: Language
  translations: Record<string, any>
}

export function ContactSection({ lang, translations }: ContactSectionProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormState({ name: '', email: '', phone: '', location: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      country: 'Cameroun',
      icon: '🇨🇲',
      email: 'Info@jfn-univ.com',
      phone: '+237 6940056760',
    },
    {
      country: 'Gabon',
      icon: '🇬🇦',
      email: 'sylvientchandi@gmail.com',
      phone: '+241 077323211',
    },
    {
      country: 'Togo',
      icon: '🇹🇬',
      email: 'Contact@fondation-teolis.org',
      phone: '+228 92807353',
    },
  ]

  const partnershipInfo = {
    icon: '🤝',
    label: translations.contact.partnerships || 'Partenariats',
    email: 'Info@jfn-univ.com'
  }

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Hero-style Advanced Animated Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Aurora Effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/30 via-emerald-500/30 to-teal-500/30 rounded-full blur-3xl animate-aurora [animation-delay:11s]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-500/25 via-indigo-500/25 to-purple-500/25 rounded-full blur-3xl animate-aurora [animation-delay:18s]" />
        
        {/* Morphing Shapes */}
        <div className="absolute top-1/3 right-1/3 transform w-[520px] h-[520px] bg-gradient-to-br from-green-500/8 via-transparent to-teal-500/8 animate-morph blur-2xl [animation-delay:12s]" />
        
        {/* Floating Contact Particles */}
        <div className="absolute inset-0">
          {['📧', '📱', '💬', '📍', '🌐', '📞'].map((icon, i) => (
            <div
              key={i}
              className="absolute text-sm animate-particles-drift opacity-35"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8 + 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              {icon}
            </div>
          ))}
        </div>
        
        {/* Sparkle Effects */}
        <div className="absolute inset-0">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-full animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2 + 2.5}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/5 to-background/20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full text-sm font-medium text-primary border border-primary/30">
            <span className="text-lg">📧</span>
            Contact Us
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            {translations.contact.title}
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            {translations.contact.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Promotional Banner */}
          <div className="mb-12 p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl border border-primary/20 text-center">
            <h4 className="text-xl font-bold text-foreground mb-4">
              {lang === 'en' 
                ? 'Join the Next WeCodeAfrica Cohort'
                : 'Rejoins la Prochaine Promotion WeCodeAfrica'
              }
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl mx-auto">
              {lang === 'en'
                ? 'Don\'t miss this opportunity to become a professional developer in less than a year. Applications are open until January 1st, 2026 for a start on January 5th, 2026.'
                : 'Ne manque pas cette opportunité de devenir développeur professionnel en moins d\'un an. Les candidatures sont ouvertes jusqu\'au 1er janvier 2026 pour un démarrage le 5 janvier 2026.'
              }
            </p>
            <p className="text-lg font-semibold text-primary">
              {lang === 'en'
                ? 'With WeCode Africa, you\'re not just choosing training, you\'re choosing a springboard to an international tech career and unlimited opportunities.'
                : 'Avec WeCode Africa, tu ne choisis pas seulement une formation, tu choisis un tremplin vers une carrière tech internationale et des opportunités illimitées.'
              }
            </p>
          </div>
          
          {/* Contact Information by Country */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-card/80 to-card/60 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{info.country}</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email :</p>
                      <a
                        href={`mailto:${info.email}`}
                        className="text-primary hover:text-primary/80 transition-colors font-medium text-sm break-all"
                      >
                        {info.email}
                      </a>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {lang === 'en' ? 'Phone :' : 'Téléphone :'}
                      </p>
                      <a
                        href={`tel:${info.phone}`}
                        className="text-primary hover:text-primary/80 transition-colors font-medium text-sm"
                      >
                        {info.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partnership Contact */}
          <div className="text-center p-6 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 rounded-xl border border-primary/20">
            <h3 className="font-semibold text-foreground mb-3 flex items-center justify-center gap-2">
              <span className="text-xl">🤝</span>
              {lang === 'en' ? 'Partnerships' : 'Partenariats'}
            </h3>
            <a
              href={`mailto:${partnershipInfo.email}`}
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              {partnershipInfo.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
