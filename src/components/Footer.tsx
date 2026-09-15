import { Link } from 'react-router-dom'
import Logo from './Logo'
import { MOTTO, SOCIALS } from '../lib/contact'
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from './SocialIcons'

const LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Procurement & Supply', to: '/procurement-supply' },
  { label: 'Cleaning Services', to: '/cleaning-services' },
  { label: 'Why Choose Us', to: '/why-choose-us' },
  { label: 'Contact', to: '/contact' },
]

const SOCIAL_LINKS = [
  { label: 'Facebook', href: SOCIALS.facebook, Icon: FacebookIcon },
  { label: 'Instagram', href: SOCIALS.instagram, Icon: InstagramIcon },
  { label: 'LinkedIn', href: SOCIALS.linkedin, Icon: LinkedinIcon },
  { label: 'X (Twitter)', href: SOCIALS.x, Icon: XIcon },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-primary px-5 sm:px-8 lg:px-10 py-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 text-center">
        <Link to="/" className="active:opacity-70 transition-opacity">
          <Logo />
        </Link>
        <p className="text-accent text-[12px] font-semibold uppercase tracking-wider">{MOTTO}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13.5px]">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="py-2.5 text-white/80 hover:text-accent active:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 active:bg-white/20 active:scale-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-all"
            >
              <Icon className="w-4 h-4" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="text-[13px] text-white/60">
          © {year} Avanty Frontier Limited — Lusaka, Zambia
        </div>
      </div>
    </footer>
  )
}
