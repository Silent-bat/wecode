'use client'

import { useState } from 'react'
import type { Language } from '@/lib/i18n'

interface TrainingTracksProps {
  lang: Language
  translations: any
}

export function TrainingTracks({ lang, translations }: TrainingTracksProps) {
  const [expandedTrack, setExpandedTrack] = useState<number | null>(1)
  const trackData = translations?.trainingTracks || {}

  if (!trackData.tracks) return null

  return (
    <section id="tracks" className="py-16 md:py-24 bg-gradient-to-b from-background via-background/95 to-background px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            {trackData.title}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-pretty">
            {trackData.subtitle}
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          {trackData.tracks.map((track: any) => (
            <div
              key={track.id}
              className="group bg-gradient-to-r from-slate-900 to-slate-800/50 border border-cyan-500/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              {/* Header */}
              <button
                onClick={() => setExpandedTrack(expandedTrack === track.id ? null : track.id)}
                className="w-full px-6 md:px-8 py-6 flex items-start justify-between gap-4 hover:bg-cyan-500/5 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1 text-left">
                  <span className="text-4xl flex-shrink-0 mt-1">{track.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {track.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300">
                      {track.description}
                    </p>
                  </div>
                </div>
                <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-cyan-500 flex items-center justify-center transition-transform duration-300 ${expandedTrack === track.id ? 'bg-cyan-500' : ''}`}>
                  <span className="text-white text-sm">{expandedTrack === track.id ? '−' : '+'}</span>
                </div>
              </button>

              {/* Expanded Content */}
              {expandedTrack === track.id && (
                <div className="px-6 md:px-8 pb-6 border-t border-cyan-500/20 space-y-4 bg-slate-900/50">
                  {/* What You'll Learn */}
                  <div>
                    <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">
                      {lang === 'en' ? 'What You\'ll Learn' : 'Ce que tu vas apprendre'}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {track.learn}
                    </p>
                  </div>

                  {/* Career Paths */}
                  <div>
                    <h4 className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-2">
                      {lang === 'en' ? 'Career Paths' : 'Débouchés'}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {track.careers}
                    </p>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2">
                      {lang === 'en' ? 'Certifications' : 'Certifications'}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {track.certifications}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <a
                      href="https://tally.so/r/7Rl829"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                    >
                      {lang === 'en' ? 'Apply to This Track' : 'Postuler à Cette Piste'}
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Benefits Note */}
        <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-cyan-500/10 to-orange-500/10 border border-cyan-500/20 rounded-xl">
          <p className="text-center text-gray-300 text-sm md:text-base leading-relaxed">
            {lang === 'en' 
              ? 'All tracks include hands-on projects, expert mentorship, career coaching, and direct access to our employer partner network. Choose the track that aligns with your career goals!'
              : 'Toutes les pistes incluent des projets pratiques, un mentorat expert, un coaching carrière et un accès direct à notre réseau de partenaires employeurs. Choisis la piste qui correspond à tes objectifs professionnels!'
            }
          </p>
        </div>
      </div>
    </section>
  )
}
