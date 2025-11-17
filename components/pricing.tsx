import type { Language } from '@/lib/i18n'

interface PricingProps {
  lang: Language
  translations: Record<string, any>
}

export function Pricing({ lang, translations }: PricingProps) {
  const pricingTiers = [
    {
      name: translations.pricing.standard,
      price: '₦500,000',
      period: `Full-time • 8 ${translations.pricing.months}`,
      features: [
        'Complete curriculum access',
        'Expert mentorship',
        'Project portfolio building',
        'Career coaching sessions',
        'Job placement support',
        'Alumni network access',
        'Certificate of completion',
      ],
      highlighted: false,
    },
    {
      name: translations.pricing.extended,
      price: '₦350,000',
      period: `Part-time • 16 ${translations.pricing.months}`,
      features: [
        'Complete curriculum access',
        'Expert mentorship',
        'Project portfolio building',
        'Career coaching sessions',
        'Job placement support',
        'Alumni network access',
        'Certificate of completion',
        'Flexible schedule',
      ],
      highlighted: true,
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-foreground">{translations.pricing.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {translations.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border-2 transition-all ${
                tier.highlighted
                  ? 'border-primary bg-primary/5 shadow-lg shadow-primary/20 md:scale-105'
                  : 'border-border bg-card hover:border-primary/50'
              }`}
            >
              {tier.highlighted && (
                <div className="mb-4 inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                  {translations.pricing.popular}
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
              <p className="text-muted-foreground mb-4">{tier.period}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">{tier.price}</span>
              </div>

              <button
                className={`w-full mb-8 py-3 rounded-lg font-semibold transition-all ${
                  tier.highlighted
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border-2 border-primary text-primary hover:bg-primary/10'
                }`}
              >
                {translations.common.applyNow}
              </button>

              <div className="space-y-3">
                <p className="text-sm text-muted-foreground font-medium">{translations.pricing.features}</p>
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-secondary/10 border border-secondary/30 rounded-xl text-center">
          <p className="text-muted-foreground mb-2">Need financial assistance?</p>
          <p className="text-foreground font-semibold">
            We offer scholarship opportunities and flexible payment plans. Contact us for details.
          </p>
        </div>
      </div>
    </section>
  )
}
