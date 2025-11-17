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
      icon: '✉️',
      label: translations.contact.email,
      value: 'info@wecodeafrica.com',
      href: 'mailto:info@wecodeafrica.com',
    },
    {
      icon: '📞',
      label: translations.contact.phone,
      value: '+237 XXX XXX XXX',
      href: 'tel:+237XXX',
    },
    {
      icon: '📍',
      label: translations.contact.headquarters,
      value: 'Douala, Cameroon',
      href: '#',
    },
  ]

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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/60 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-foreground mb-2">{info.label}</h4>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">{info.value}</p>
                  </div>
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Info Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 border border-primary/20">
              <h4 className="font-bold text-xl text-foreground mb-4">
                {lang === 'en' ? 'Office Hours' : 'Heures de Bureau'}
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{lang === 'en' ? 'Monday - Friday' : 'Lundi - Vendredi'}</span>
                  <span className="font-semibold text-primary">9:00 - 18:00 WAT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{lang === 'en' ? 'Saturday' : 'Samedi'}</span>
                  <span className="font-semibold text-primary">10:00 - 16:00 WAT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{lang === 'en' ? 'Sunday' : 'Dimanche'}</span>
                  <span className="text-muted-foreground">{lang === 'en' ? 'Closed' : 'Fermé'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-gradient-to-br from-card/80 to-card/60 p-8 rounded-2xl border border-border/50 shadow-2xl backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitted && (
                <div className="p-6 bg-gradient-to-r from-secondary/20 to-primary/20 border border-primary/50 text-primary rounded-xl animate-fade-in flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium">{translations.contact.success}</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    {translations.contact.namePlaceholder === 'your@email.com' ? 'Full Name' : translations.contact.namePlaceholder}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder={translations.contact.namePlaceholder}
                    className="w-full px-6 py-4 bg-background/50 border border-border/50 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    {translations.contact.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder={translations.contact.emailPlaceholder}
                    className="w-full px-6 py-4 bg-background/50 border border-border/50 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      {translations.contact.phone} (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+237 XXX XXX"
                      className="w-full px-6 py-4 bg-background/50 border border-border/50 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Location
                    </label>
                    <select
                      value={formState.location}
                      onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                      className="w-full px-6 py-4 bg-background/50 border border-border/50 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground backdrop-blur-sm"
                    >
                      <option value="">Select location</option>
                      <option value="cameroon">Cameroon</option>
                      <option value="gabon">Gabon</option>
                      <option value="togo">Togo</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    {translations.contact.messagePlaceholder === 'Tell us about yourself...' ? 'Message' : translations.contact.messagePlaceholder}
                  </label>
                  <textarea
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder={translations.contact.messagePlaceholder}
                    rows={5}
                    className="w-full px-6 py-4 bg-background/50 border border-border/50 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground resize-none backdrop-blur-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full px-8 py-4 bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-3">
                    <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {translations.contact.send}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
