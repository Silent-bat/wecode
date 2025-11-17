export type Language = 'en' | 'fr'

export const languages: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
}

export function loadTranslations(lang: Language): Record<string, any> {
  const translations: Record<Language, Record<string, any>> = {
    en: require('@/public/locales/en.json'),
    fr: require('@/public/locales/fr.json'),
  }
  return translations[lang] || translations.en
}

export function t(translations: Record<string, any>, key: string, defaultValue: string = ''): string {
  const keys = key.split('.')
  let value: any = translations

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return defaultValue || key
    }
  }

  return typeof value === 'string' ? value : defaultValue || key
}
