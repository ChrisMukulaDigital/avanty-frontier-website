import type { ReactNode } from 'react'

interface PageHeroProps {
  eyebrow: string
  title: string
  children?: ReactNode
}

/** Compact blue page header used by every sub-page (About, Procurement & Supply, etc.) */
export default function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section className="bg-primary px-5 sm:px-8 lg:px-10 py-16 sm:py-20 text-center">
      <span className="inline-block text-[13px] font-bold uppercase tracking-wider text-accent mb-3">
        {eyebrow}
      </span>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight text-balance mb-4 max-w-3xl mx-auto">
        {title}
      </h1>
      {children && (
        <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {children}
        </p>
      )}
    </section>
  )
}
