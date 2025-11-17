/**
 * Accessibility and performance utilities for the WeCode Africa website
 */

export const SkipToContent = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
  >
    Skip to main content
  </a>
)

/**
 * Loading skeleton component for improved perceived performance
 */
export const CardSkeleton = () => (
  <div className="p-6 bg-card rounded-xl border border-border animate-pulse">
    <div className="h-4 bg-muted rounded w-3/4 mb-3" />
    <div className="h-3 bg-muted rounded w-full mb-2" />
    <div className="h-3 bg-muted rounded w-5/6" />
  </div>
)

/**
 * Focus visible styles - ensures keyboard navigation is always visible
 */
export const FocusRingClasses = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background'

/**
 * Semantic headings with proper hierarchy
 */
export const PageHeading = ({ children, level = 1 }: { children: React.ReactNode; level?: 1 | 2 | 3 }) => {
  const HeadingComponent = `h${level}` as const
  const sizeClasses = {
    1: 'text-5xl md:text-6xl',
    2: 'text-4xl md:text-5xl',
    3: 'text-3xl md:text-4xl',
  }

  return (
    <HeadingComponent className={`font-bold text-foreground ${sizeClasses[level]}`}>
      {children}
    </HeadingComponent>
  )
}
