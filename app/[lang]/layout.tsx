import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'
import type { Language } from '@/lib/i18n'
import { GlowingGridBackground } from '@/components/glowing-grid-background'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === 'en'

  return {
    title: isEnglish ? 'WeCode Africa - Tech Career Accelerator' : 'WeCode Africa - Accélérateur de Carrière Tech',
    description: isEnglish
      ? 'Intensive bootcamp program designed to transform aspiring developers into industry-ready professionals across Africa'
      : 'Programme de bootcamp intensif conçu pour transformer les développeurs en herbe en professionnels de l\'industrie à travers l\'Afrique',
    generator: 'v0.app',
    icons: {
      icon: [
        {
          url: '/icon-light-32x32.png',
          media: '(prefers-color-scheme: light)',
        },
        {
          url: '/icon-dark-32x32.png',
          media: '(prefers-color-scheme: dark)',
        },
        {
          url: '/icon.svg',
          type: 'image/svg+xml',
        },
      ],
      apple: '/apple-icon.png',
    },
  }
}

export async function generateStaticParams() {
  return ['en', 'fr'].map((lang) => ({ lang }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params

  return (
    <html suppressHydrationWarning lang={lang}>
      <body className={`font-sans antialiased dark bg-slate-900`}>
        <GlowingGridBackground />
        {children}
      </body>
    </html>
  )
}
