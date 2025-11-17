'use client'

import { useMemo } from 'react'
import type { Language } from './i18n'

export function useTranslations(lang: Language, translations: Record<string, any>) {
  return useMemo(() => {
    return {
      t: (key: string, defaultValue?: string) => {
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
      },
      lang,
    }
  }, [lang, translations])
}
