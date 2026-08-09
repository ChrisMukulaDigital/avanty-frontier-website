import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'What We Supply', href: '#supply' },
  { label: 'How It Works', href: '#process' },
  { label: 'About', href: '#about' },
]

const MOBILE_LINKS = [...NAV_LINKS, { label: 'Contact', href: '#contact' }]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="animate-fade-down sticky top-0 z-30 bg-cream/90 backdrop-blur-md border-b border-line">
      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-10 py-4 sm:py-5">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-grey hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/260950611757"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink text-white text-[13px] font-medium px-4 sm:px-5 py-2 rounded-full hover:bg-[#333] transition-colors"
          >
            Get a Quote
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-9 h-9 rounded-full text-ink hover:bg-ink/10 flex items-center justify-center transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute left-4 right-4 top-full rounded-2xl bg-white/90 backdrop-blur-xl ring-1 ring-line px-5 py-3 animate-fade-up">
          {MOBILE_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-[15px] text-grey hover:text-ink py-3 border-b border-line last:border-b-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
