import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line bg-white px-5 sm:px-8 lg:px-10 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[13.5px] text-grey">
        <Logo />
        <div className="flex items-center gap-5">
          <a href="#supply" className="hover:text-ink transition-colors">
            What We Supply
          </a>
          <a href="#process" className="hover:text-ink transition-colors">
            How It Works
          </a>
          <a href="#about" className="hover:text-ink transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-ink transition-colors">
            Contact
          </a>
        </div>
        <div>© {year} Avanty Frontier Limited — Lusaka, Zambia</div>
      </div>
    </footer>
  )
}
