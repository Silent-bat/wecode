import { notFound } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { WhyChooseSection } from '@/components/why-choose-section'
import { ProgramOverview } from '@/components/program-overview'
import { KeyProgramInfo } from '@/components/key-program-info'
import { ProgramDetails } from '@/components/program-details'
import { Locations } from '@/components/locations'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { TrainingTracks } from '@/components/training-tracks'
import { Pricing } from '@/components/pricing'
import { Partners } from '@/components/partners'
import { CareerIntegration } from '@/components/career-integration'
import { AdmissionProcess } from '@/components/admission-process'
import { AccessiblePricing } from '@/components/accessible-pricing'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { FloatingApplyButton } from '@/components/floating-apply-button'
import { SkipToContent } from '@/components/accessibility-utilities'
import type { Language } from '@/lib/i18n'
import { enTranslations } from '@/lib/translations/en'
import { frTranslations } from '@/lib/translations/fr'

const translations: Record<Language, any> = {
  en: enTranslations,
  fr: frTranslations,
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params

  if (!['en', 'fr'].includes(lang)) {
    notFound()
  }

  const currentTranslations = translations[lang as Language]

  return (
    <main className="min-h-screen bg-background">
      <SkipToContent />
      <Navigation lang={lang as Language} translations={currentTranslations} />
      <div id="main-content" className="scroll-smooth">
        {/* Hero Section */}
        <HeroSection lang={lang as Language} translations={currentTranslations} />
        
        {/* Why Choose WeCode Africa */}
        <WhyChooseSection lang={lang as Language} translations={currentTranslations} />
        
        {/* Key Program Information */}
        <KeyProgramInfo lang={lang as Language} translations={currentTranslations} />
        
        {/* Our Specialized Training Tracks */}
        <TrainingTracks lang={lang as Language} translations={currentTranslations} />
        
        {/* Career Integration & Professional Insertion */}
        <CareerIntegration lang={lang as Language} />
        
        {/* Success Stories (Testimonials) */}
        <Testimonials lang={lang as Language} translations={currentTranslations} />
        
        {/* Simple and Fast Admission Process */}
        <AdmissionProcess lang={lang as Language} />
        
        {/* Accessible Pricing */}
        <AccessiblePricing lang={lang as Language} />
        
        {/* Frequently Asked Questions */}
        <FAQ lang={lang as Language} translations={currentTranslations} />
        
        {/* Our Partners & Supporters */}
        <Partners lang={lang as Language} translations={currentTranslations} />
      </div>
      <Footer lang={lang as Language} translations={currentTranslations} />
      <ScrollToTop />
      <FloatingApplyButton lang={lang as Language} />
    </main>
  )
}
