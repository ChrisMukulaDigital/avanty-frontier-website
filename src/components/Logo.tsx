interface LogoProps {
  className?: string
}

/**
 * Placeholder wordmark until Avanty has a finished mark.
 * Swap the JSX below for a real <img>/<svg> mark later — everything
 * that renders the logo imports this one component.
 */
export default function Logo({ className = '' }: LogoProps) {
  return (
    <span
      className={`inline-flex items-baseline gap-1 text-[15px] sm:text-[17px] font-bold tracking-[0.04em] ${className}`}
    >
      <span className="text-ink">AVANTY</span>
      <span className="text-gold uppercase text-[12px] sm:text-[13px] tracking-[0.14em]">
        Frontier
      </span>
    </span>
  )
}
