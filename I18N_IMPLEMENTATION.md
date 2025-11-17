# WeCode Africa - i18n (Internationalization) Implementation

## Overview
The WeCode Africa website now supports full internationalization with English and French languages. The implementation uses Next.js App Router with locale-based routing and a comprehensive translation system.

## Architecture

### Routing Structure
- **English**: `/en/*`
- **French**: `/fr/*`
- **Default**: Requests without locale automatically redirect to `/en/`

### Key Components

#### 1. Middleware (`middleware.ts`)
- Handles automatic locale detection and redirection
- Ensures all routes are prefixed with a locale
- Default locale is English (`en`)

#### 2. Layout Structure (`app/[lang]/layout.tsx`)
- Dynamic metadata based on language
- Generates static parameters for both locales
- Sets proper `lang` attribute on HTML element

#### 3. Page Routing (`app/[lang]/page.tsx`)
- Loads appropriate translations based on locale
- Passes translations to all components as props
- Validates language parameter

### Translation Files

#### Location: `lib/translations/`
- `en.ts` - English translations
- `fr.ts` - French translations

#### Translation Keys Structure
\`\`\`
{
  "common": { ... },
  "navigation": { ... },
  "hero": { ... },
  "programOverview": { ... },
  "programDetails": { ... },
  "locations": { ... },
  "testimonials": { ... },
  "faq": { ... },
  "pricing": { ... },
  "contact": { ... },
  "footer": { ... }
}
\`\`\`

### Components with i18n Support

All major components have been updated to accept language and translations as props:

1. **Navigation** (`components/navigation.tsx`)
   - Language switcher with dropdown menu
   - Translates all navigation items
   - Mobile-responsive language selection

2. **Hero Section** (`components/hero-section.tsx`)
   - Badge, title, and description translations
   - CTA button text translations
   - Stats label translations

3. **Program Overview** (`components/program-overview.tsx`)
   - Feature titles and descriptions
   - Section heading translations

4. **Program Details** (`components/program-details.tsx`)
   - Duration and structure translations
   - Learning timeline translations

5. **Locations** (`components/locations.tsx`)
   - Location names and descriptions
   - Status indicators ("Enrolling", "Open Soon")

6. **Testimonials** (`components/testimonials.tsx`)
   - Testimonial text translations
   - Title and subtitle translations

7. **FAQ** (`components/faq.tsx`)
   - All question and answer translations

8. **Pricing** (`components/pricing.tsx`)
   - Plan names, pricing period translations
   - Feature descriptions

9. **Contact Section** (`components/contact-section.tsx`)
   - Form labels and placeholders
   - Success/error message translations
   - Location select options

10. **Footer** (`components/footer.tsx`)
    - All footer link texts
    - Section titles
    - Copyright and attribution text

## How to Use

### Accessing Different Languages
- English: `https://yourdomain.com/en`
- French: `https://yourdomain.com/fr`

### Language Switcher
The language switcher in the navigation header allows users to switch between English and French. It's available in both desktop and mobile views.

## Adding New Translations

To add a new translation key:

1. Add the key to both `lib/translations/en.ts` and `lib/translations/fr.ts`
2. In your component, use the translation helper function:

\`\`\`tsx
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

// Usage: t('common.applyNow')
\`\`\`

## Adding a New Language

To add a new language (e.g., Spanish):

1. Create `lib/translations/es.ts` with all translation keys
2. Update `lib/i18n.ts` language type:
   \`\`\`ts
   export type Language = 'en' | 'fr' | 'es'
   \`\`\`
3. Update `middleware.ts` locales array:
   \`\`\`ts
   const locales = ['en', 'fr', 'es']
   \`\`\`
4. Update `app/[lang]/page.tsx` to import and include Spanish translations
5. Import the new translations in the page component

## SEO Considerations

- Each language version has its own metadata
- HTML lang attribute is properly set for each locale
- Canonical URLs should include the language prefix
- Alternate links can be implemented for better SEO

## Performance Notes

- Translations are loaded at build time
- No runtime translation library overhead
- Fast locale switching with client-side navigation
- All translations are static (compiled with the app)

## Browser Language Detection (Optional Enhancement)

To detect browser language preference and redirect automatically:

\`\`\`tsx
// In middleware.ts, add browser language detection
const preferredLocale = request.headers.get('accept-language')?.split(',')[0].split('-')[0]
// Then use this to redirect to preferred language if not in supported list
\`\`\`

## Testing Different Languages

Use the language switcher in the navigation to test both English and French versions. All content should update instantly without page reload.
