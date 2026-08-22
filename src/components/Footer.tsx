import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-primary px-5 sm:px-8 lg:px-10 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[13.5px] text-white/70">
        <Logo />
        <div className="flex items-center gap-5">
          <a
            href="#supply"
            className="py-2.5 text-white/80 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm transition-colors"
          >
            What We Supply
          </a>
          <a
            href="#process"
            className="py-2.5 text-white/80 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm transition-colors"
          >
            How It Works
          </a>
          <a
            href="#about"
            className="py-2.5 text-white/80 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm transition-colors"
          >
            About
          </a>
          <a
            href="#why"
            className="py-2.5 text-white/80 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm transition-colors"
          >
            Why Choose Us
          </a>
          <a
            href="#contact"
            className="py-2.5 text-white/80 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm transition-colors"
          >
            Contact
          </a>
        </div>
        <div>© {year} Avanty Frontier Limited — Lusaka, Zambia</div>
      </div>
    </footer>
  )
}
