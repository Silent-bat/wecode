import { Metadata } from 'next'

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = '/'
): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://wecodeafrica.com'
  const fullUrl = `${baseUrl}${path}`

  return {
    title: `${title} | WeCode Africa`,
    description,
    canonical: fullUrl,
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'WeCode Africa',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'WeCode Africa - Tech Career Accelerator',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/og-image.png`],
    },
  }
}
