'use client'

import { useState } from 'react'
import type { Language } from '@/lib/i18n'

interface FAQProps {
  lang: Language
  translations: Record<string, any>
}

export function FAQ({ lang, translations }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: lang === 'en' ? "Who can apply to the program?" : "Qui peut candidater au programme ?",
      answer: lang === 'en' 
        ? "Any candidate with a Bachelor+3 in STEM (science, technology, engineering, mathematics) or proven development experience demonstrated by a portfolio of concrete projects."
        : "Tout candidat avec un Bac+3 en STEM (sciences, technologie, ingénierie, mathématiques) ou une expérience en développement prouvée par un portfolio de projets concrets.",
    },
    {
      question: lang === 'en' ? "Is the program 100% online?" : "Le programme est-il 100% en ligne ?",
      answer: lang === 'en'
        ? "We offer total flexibility: remote training with in-person option at our partner centers according to your preferences."
        : "Nous offrons une flexibilité totale : formation à distance avec option présentiel dans nos centres partenaires selon tes préférences.",
    },
    {
      question: lang === 'en' ? "What is the weekly workload?" : "Quelle est la charge de travail hebdomadaire ?",
      answer: lang === 'en'
        ? "Plan for 15 to 25 hours per week on average, with intensity peaks before major project deliveries. The pace adapts to your schedule."
        : "Prévois entre 15 et 25 heures par semaine en moyenne, avec des pics d'intensité avant les rendus de projets majeurs. Le rythme s'adapte à ton emploi du temps.",
    },
    {
      question: lang === 'en' ? "Will I receive a recognized certificate?" : "Obtiendrai-je un certificat reconnu ?",
      answer: lang === 'en'
        ? "Yes, absolutely! You will receive Qwasar certificates and AWS/Google Cloud certifications according to your track, all based on your deliverables and validated portfolio."
        : "Oui, absolument ! Tu recevras des certificats Qwasar et les certifications AWS/Google Cloud selon ta track, tous basés sur tes livrables et ton portfolio validé.",
    },
    {
      question: lang === 'en' ? "Is there help finding employment?" : "Y a-t-il une aide pour trouver un emploi ?",
      answer: lang === 'en'
        ? "We offer comprehensive career coaching: interview preparation, portfolio optimization, and direct connection with our network of active employer partners."
        : "Nous proposons un coaching carrière complet : préparation d'entretiens, optimisation du portfolio, et mise en relation directe avec notre réseau de partenaires employeurs actifs.",
    },
  ]

  return (
    <section id="faq" className="relative py-24 px-6 overflow-hidden">
      {/* Hero-style Advanced Animated Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Aurora Effect */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/30 via-purple-500/30 to-fuchsia-500/30 rounded-full blur-3xl animate-aurora [animation-delay:14s]" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-l from-blue-500/25 via-cyan-500/25 to-teal-500/25 rounded-full blur-3xl animate-aurora [animation-delay:21s]" />
        
        {/* Morphing Shapes */}
        <div className="absolute top-1/4 left-1/3 transform w-[480px] h-[480px] bg-gradient-to-br from-violet-500/8 via-transparent to-purple-500/8 animate-morph blur-2xl [animation-delay:15s]" />
        
        {/* Floating FAQ Particles */}
        <div className="absolute inset-0">
          {['❓', '💡', '📋', '✅', '🤔', '💬'].map((icon, i) => (
            <div
              key={i}
              className="absolute text-sm animate-particles-drift opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8 + 6}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              {icon}
            </div>
          ))}
        </div>
        
        {/* Sparkle Effects */}
        <div className="absolute inset-0">
          {[...Array(13)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 rounded-full animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2 + 3}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/5 to-background/20" />

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full text-sm font-medium text-primary border border-primary/30">
            <span className="text-lg">❓</span>
            FAQ
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            {lang === 'en' ? 'Frequently Asked Questions' : 'Questions Fréquemment Posées'}
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            {lang === 'en' ? 'Everything you need to know' : 'Tout ce que tu dois savoir'}
          </p>
        </div>

        {/* Enhanced FAQ Grid */}
        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-card/80 to-card/60 rounded-2xl border border-border/50 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-8 hover:bg-primary/5 transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-primary group-hover:bg-primary/10'
                    }`}>
                      {index + 1}
                    </div>
                    <h3 className="font-bold text-foreground text-lg md:text-xl leading-tight pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-primary/20 rotate-180' 
                      : 'hover:bg-primary/10'
                  }`}>
                    <svg
                      className="w-5 h-5 text-primary transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Animated Answer */}
              <div className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-8 border-t border-primary/20 bg-primary/5">
                  <div className="flex gap-4 pt-6">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base animate-fade-in">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help CTA */}
        <div className="text-center pt-8">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {lang === 'en' ? 'Still have questions?' : 'Vous avez encore des questions?'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {lang === 'en' 
                ? 'Our team is here to help you every step of the way. Get in touch for personalized guidance.'
                : 'Notre équipe est là pour vous aider à chaque étape. Contactez-nous pour des conseils personnalisés.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://tally.so/r/7Rl829" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-primary/50 text-primary rounded-xl font-semibold hover:bg-primary/10 transition-all duration-300 text-center"
              >
                {lang === 'en' ? 'Apply Now' : 'Postuler Maintenant'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
