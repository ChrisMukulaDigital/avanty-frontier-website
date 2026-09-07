import { Link } from 'react-router-dom'
import Logo from './Logo'
import { MOTTO } from '../lib/contact'

const LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Procurement & Supply', to: '/procurement-supply' },
  { label: 'Cleaning Services', to: '/cleaning-services' },
  { label: 'Why Choose Us', to: '/why-choose-us' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-primary px-5 sm:px-8 lg:px-10 py-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 text-center">
        <Link to="/">
          <Logo />
        </Link>
        <p className="text-accent text-[12px] font-semibold uppercase tracking-wider">{MOTTO}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13.5px]">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="py-2.5 text-white/80 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-[13px] text-white/60">
          © {year} Avanty Frontier Limited — Lusaka, Zambia
        </div>
      </div>
    </footer>
  )
}
