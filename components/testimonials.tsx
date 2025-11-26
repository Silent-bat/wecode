import type { Language } from '@/lib/i18n'

interface TestimonialsProps {
  lang: Language
  translations: Record<string, any>
}

export function Testimonials({ lang, translations }: TestimonialsProps) {
  const successStories = [
    {
      name: 'Fru Duna Tamambang Nji',
      role: 'Data Scientist',
      company: 'Tech Solutions Douala',
      image: '👩‍💻',
      text: translations.testimonials.testimonial1,
      rating: 5,
      achievement: 'Increased salary by 300%',
      timeToHire: '2 weeks after certification',
      track: 'Data Analytics'
    },
    {
      name: 'Lyne Boussamba',
      role: 'DevOps Engineer',
      company: 'Digital Innovation Libreville',
      image: '👨‍💻',
      text: translations.testimonials.testimonial2,
      rating: 5,
      achievement: 'Built 3 production apps',
      timeToHire: '1 month after certification',
      track: 'DevOps & Cloud'
    },
    {
      name: 'Kwame Mensah',
      role: 'Fullstack Developer',
      company: 'Tech Hub Lomé',
      image: '👩‍💼',
      text: translations.testimonials.testimonial3,
      rating: 5,
      achievement: 'Leading a dev team',
      timeToHire: '3 weeks after certification',
      track: 'Fullstack Cloud'
    },
  ]

  return (
    <section id="testimonials" className="relative py-24 px-6 overflow-hidden">
      {/* Hero-style Advanced Animated Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Aurora Effect */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/30 via-orange-500/30 to-red-500/30 rounded-full blur-3xl animate-aurora [animation-delay:5s]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-l from-green-500/25 via-blue-500/25 to-purple-500/25 rounded-full blur-3xl animate-aurora [animation-delay:12s]" />
        
        {/* Morphing Shapes */}
        <div className="absolute top-1/4 right-1/3 transform w-[550px] h-[550px] bg-gradient-to-br from-yellow-500/8 via-transparent to-orange-500/8 animate-morph blur-2xl [animation-delay:6s]" />
        
        {/* Floating Success Particles */}
        <div className="absolute inset-0">
          {['🏆', '⭐', '🚀', '💡', '🎯', '✨'].map((icon, i) => (
            <div
              key={i}
              className="absolute text-sm animate-particles-drift opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8 + 3}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              {icon}
            </div>
          ))}
        </div>
        
        {/* Sparkle Effects */}
        <div className="absolute inset-0">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2 + 1.5}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/5 to-background/20" />
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full text-sm font-medium text-primary border border-primary/30">
            <span className="text-lg">🌟</span>
            Success Stories
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            {translations.testimonials.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            {translations.testimonials.subtitle}
          </p>
        </div>

        {/* Enhanced Success Stories Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-card/50 via-card to-card/80 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 backdrop-blur-sm"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Profile Section */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {story.image}
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-xs">
                      ✓
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-foreground">{story.name}</h4>
                    <p className="text-primary font-medium text-sm">{story.role}</p>
                    <p className="text-muted-foreground text-sm">{story.company}</p>
                  </div>
                </div>

                {/* Achievement Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-background/30 rounded-xl border border-border/30">
                  <div className="text-center">
                    <div className="text-lg font-bold text-secondary">{story.achievement}</div>
                    <div className="text-xs text-muted-foreground">Career Impact</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{story.timeToHire}</div>
                    <div className="text-xs text-muted-foreground">Time to Hire</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <span key={i} className="text-secondary text-lg">★</span>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({story.rating}.0)</span>
                </div>

                {/* Testimonial */}
                <blockquote className="text-muted-foreground leading-relaxed mb-4 italic">
                  "{story.text}"
                </blockquote>

                {/* Track Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/30">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  {story.track} Track
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center pt-8">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a 
              href="https://tally.so/r/7Rl829" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              {lang === 'en' ? 'Start Your Success Story' : 'Commencez Votre Histoire de Succès'}
            </a>
            <button className="px-8 py-3 border-2 border-primary/50 text-primary rounded-xl font-semibold hover:bg-primary/10 transition-all duration-300">
              {lang === 'en' ? 'Read More Stories' : 'Lire Plus d\'Histoires'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
