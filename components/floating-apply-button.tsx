'use client'

import { useState, useEffect } from 'react'
import type { Language } from '@/lib/i18n'

interface FloatingApplyButtonProps {
  lang: Language
}

export function FloatingApplyButton({ lang }: FloatingApplyButtonProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after user scrolls down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://tally.so/r/7Rl829"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 font-bold text-sm"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated pulse ring */}
        <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" />
        
        {/* Background gradient animation */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content */}
        <span className="relative flex items-center gap-3">
          {/* Icon */}
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <svg 
              className="w-5 h-5 transition-transform group-hover:scale-110" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
          
          {/* Text */}
          <span className={`transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
            {lang === 'en' ? 'Apply Now' : 'Postuler Maintenant'}
          </span>
        </span>
      </a>
      
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-background border border-border rounded-lg text-foreground text-xs whitespace-nowrap animate-fade-in">
          {lang === 'en' ? 'Start your tech journey!' : 'Commencez votre parcours tech!'}
        </div>
      )}
    </div>
  )
}