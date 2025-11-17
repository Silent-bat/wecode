import type { Language } from '@/lib/i18n'

interface LocationsProps {
  lang: Language
  translations: Record<string, any>
}

export function Locations({ lang, translations }: LocationsProps) {
  const locations = [
    {
      country: translations.locations.cameroon,
      cities: ['Douala', 'Yaoundé'],
      startDate: 'January 2025',
      available: true,
    },
    {
      country: translations.locations.gabon,
      cities: ['Libreville'],
      startDate: 'February 2025',
      available: true,
    },
    {
      country: translations.locations.togo,
      cities: ['Lomé'],
      startDate: 'February 2025',
      available: true,
    },
    {
      country: translations.locations.senegal,
      cities: ['Dakar'],
      startDate: 'March 2025',
      available: false,
    },
  ]

  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-foreground">{translations.locations.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {translations.locations.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border-2 transition-all ${
                location.available
                  ? 'border-primary bg-background hover:shadow-lg hover:shadow-primary/20'
                  : 'border-border bg-muted/10 opacity-60'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground">{location.country}</h3>
                {location.available ? (
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                    {translations.locations.enrolling}
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-xs font-semibold">
                    {translations.locations.openSoon}
                  </span>
                )}
              </div>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Cities:</span> {location.cities.join(', ')}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Next Cohort:</span> {location.startDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
