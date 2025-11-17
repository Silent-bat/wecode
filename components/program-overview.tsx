import type { Language } from '@/lib/i18n'

interface ProgramOverviewProps {
  lang: Language
  translations: Record<string, any>
}

export function ProgramOverview({ lang, translations }: ProgramOverviewProps) {
  const features = translations.programOverview.features || []

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
    <section id="programme" className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-foreground">{t('programOverview.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {t('programOverview.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature: any, index: number) => (
            <div
              key={index}
              className="group p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="text-4xl mb-4">
                {index === 0 ? '📚' : index === 1 ? '👥' : index === 2 ? '🚀' : index === 3 ? '🌍' : index === 4 ? '💼' : '🏆'}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
