'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import type { Language } from '@/lib/i18n'

interface NavigationProps {
  lang: Language
  translations: Record<string, any>
}

export function Navigation({ lang, translations }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { label: lang === 'en' ? 'Why Choose Us' : 'Pourquoi Nous', href: '#why-choose' },
    { label: lang === 'en' ? 'Training Tracks' : 'Parcours Formation', href: '#tracks' },
    { label: lang === 'en' ? 'Career Integration' : 'Insertion Carrière', href: '#career' },
    { label: lang === 'en' ? 'Success Stories' : 'Histoires de Succès', href: '#testimonials' },
    { label: lang === 'en' ? 'Admission' : 'Admission', href: '#admission' },
    { label: lang === 'en' ? 'FAQ' : 'FAQ', href: '#faq' },
    { label: lang === 'en' ? 'Contact' : 'Contact', href: '#contact' },
  ]

  const switchLanguage = (newLang: Language) => {
    const newPathname = pathname.replace(`/${lang}`, `/${newLang}`)
    router.push(newPathname)
    setShowLangMenu(false)
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="WeCode Africa Logo" 
              className="h-6 w-auto max-w-none object-contain"
              style={{ 
                filter: 'brightness(1.1)', 
                maxHeight: '24px',
                height: 'auto',
                maxWidth: '160px'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop Language & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-card transition-colors flex items-center gap-2"
                aria-label={translations.common.language}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                {lang.toUpperCase()}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {showLangMenu && (
                <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg overflow-hidden shadow-lg z-50">
                  <button
                    onClick={() => switchLanguage('en')}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                      lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-background'
                    }`}
                  >
                    {translations.common.english}
                  </button>
                  <button
                    onClick={() => switchLanguage('fr')}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                      lang === 'fr' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-background'
                    }`}
                  >
                    {translations.common.french}
                  </button>
                </div>
              )}
            </div>

            <a 
              href="https://tally.so/r/7Rl829" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all font-medium text-sm shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              {lang === 'en' ? 'Apply Now' : 'Postuler'}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-slide-up">
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-card rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div className="border-t border-border pt-4">
                <p className="px-4 py-2 text-xs text-muted-foreground uppercase tracking-wider mb-2">{translations.common.language}</p>
                <button
                  onClick={() => switchLanguage('en')}
                  className={`w-full px-4 py-2 text-left text-sm rounded-lg transition-colors ${
                    lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-card'
                  }`}
                >
                  {translations.common.english}
                </button>
                <button
                  onClick={() => switchLanguage('fr')}
                  className={`w-full px-4 py-2 text-left text-sm rounded-lg transition-colors mt-2 ${
                    lang === 'fr' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-card'
                  }`}
                >
                  {translations.common.french}
                </button>
              </div>

              <a 
                href="https://tally.so/r/7Rl829" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all font-medium text-center block shadow-lg"
              >
                {lang === 'en' ? 'Apply Now' : 'Postuler'}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
