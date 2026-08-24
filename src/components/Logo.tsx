import logoImg from '../assets/logo.png'

interface LogoProps {
  className?: string
}

/**
 * Avanty's real logo. Full-color lockup (navy "AVANTY", orange "FRONTIER")
 * designed for a light background — always rendered on a deep-blue surface
 * here (Navbar, Footer), so it sits on a white chip for legibility rather
 * than needing a separate reversed/white asset.
 */
export default function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center bg-white rounded-lg px-3 py-1.5 shadow-sm ${className}`}>
      <img src={logoImg} alt="Avanty Frontier Limited" className="h-9 sm:h-10 w-auto" />
    </span>
  )
}
