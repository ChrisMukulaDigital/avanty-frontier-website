import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'What We Supply', href: '#supply' },
  { label: 'How It Works', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Why Choose Us', href: '#why' },
]

const MOBILE_LINKS = [...NAV_LINKS, { label: 'Contact', href: '#contact' }]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="animate-fade-down sticky top-0 z-30 bg-primary shadow-sm">
      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-10 py-4 sm:py-5">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-white/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm transition-colors"
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
            className="bg-accent text-white text-[13px] font-medium px-4 sm:px-5 py-2.5 rounded-full hover:bg-[#e65a02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
          >
            Get a Quote
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-11 h-11 rounded-full text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent flex items-center justify-center transition-colors"
          >
            {open ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute left-4 right-4 top-full rounded-2xl bg-white shadow-lg ring-1 ring-line px-5 py-3 animate-fade-up">
          {MOBILE_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-[15px] text-slate hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm py-3 border-b border-line last:border-b-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
