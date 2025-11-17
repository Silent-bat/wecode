import Link from 'next/link'
import Image from 'next/image'
import type { Language } from '@/lib/i18n'

interface FooterProps {
  lang: Language
  translations: Record<string, any>
}

export function Footer({ lang, translations }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: translations.footer.company,
      links: [
        { label: translations.footer.about, href: '#' },
        { label: translations.footer.careers, href: '#' },
        { label: translations.footer.blog, href: '#' },
      ],
    },
    {
      title: translations.footer.resources,
      links: [
        { label: translations.footer.documentation, href: '#' },
        { label: translations.footer.guides, href: '#' },
      ],
    },
    {
      title: translations.footer.community,
      links: [
        { label: translations.footer.blog, href: '#' },
        { label: translations.footer.contact, href: '#contact' },
      ],
    },
  ]

  const socialLinks = [
    { icon: '𝕏', href: '#', label: 'Twitter' },
    { icon: '💼', href: '#', label: 'LinkedIn' },
    { icon: '🐙', href: '#', label: 'GitHub' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-black border-t border-slate-700 overflow-hidden">
      {/* Footer grid background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="WeCode Africa Logo" 
                className="h-10 w-auto max-w-none object-contain"
                style={{ 
                  filter: 'brightness(1.2)', 
                  maxHeight: '40px',
                  height: 'auto',
                  maxWidth: '240px'
                }}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {translations.footer.madeByCommunity}
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-border text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center text-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold text-foreground">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} {translations.common.wecode} Africa. {translations.footer.copyright}
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              {translations.footer.terms}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {translations.footer.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
