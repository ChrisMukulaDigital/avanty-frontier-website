import { useState, type FormEvent } from 'react'
import { ArrowUp } from 'lucide-react'
import WhatsAppMockup from './WhatsAppMockup'

const WHATSAPP_NUMBER = '260950611757'

function buildWhatsAppLink(message: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message.trim() ? `${base}?text=${encodeURIComponent(message.trim())}` : base
}

/** Faint, self-authored topographic texture — no external image dependency. */
function FieldTexture() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <pattern id="topo" width="120" height="120" patternUnits="userSpaceOnUse">
          <path
            d="M0 60 Q30 20 60 60 T120 60"
            fill="none"
            stroke="#9C7A2E"
            strokeWidth="1"
          />
          <path
            d="M0 90 Q30 50 60 90 T120 90"
            fill="none"
            stroke="#9C7A2E"
            strokeWidth="1"
          />
          <path
            d="M0 30 Q30 -10 60 30 T120 30"
            fill="none"
            stroke="#9C7A2E"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#topo)" />
    </svg>
  )
}

export default function Hero() {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    window.open(buildWhatsAppLink(query), '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden bg-cream"
    >
      <FieldTexture />

      <div className="flex-1 min-h-16 sm:min-h-20 lg:min-h-24 shrink-0" />

      <div className="relative z-10 flex flex-col items-center text-center px-5">
        <h1 className="text-ink font-normal leading-[1.05] tracking-tight text-[40px] min-[400px]:text-[44px] sm:text-6xl lg:text-7xl xl:text-[80px]">
          <span className="block animate-fade-up">Sourced right.</span>
          <span className="block animate-fade-up [animation-delay:100ms]">
            Delivered on time.
          </span>
        </h1>

        <form
          onSubmit={handleSubmit}
          className="animate-fade-up [animation-delay:220ms] mt-5 sm:mt-6 w-full max-w-xl"
        >
          <div className="flex items-center gap-3 rounded-full bg-white/70 backdrop-blur-md ring-1 ring-line pl-5 pr-1.5 py-1.5">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What do you need sourced?"
              className="flex-1 bg-transparent text-sm sm:text-base text-ink placeholder-grey outline-none py-2"
            />
            <button
              type="submit"
              aria-label="Send to WhatsApp"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-ink text-white hover:scale-105 active:scale-95 transition-transform shrink-0 flex items-center justify-center"
            >
              <ArrowUp className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </button>
          </div>
        </form>

        <p className="animate-fade-up [animation-delay:340ms] mt-4 sm:mt-5 text-grey text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
          Agricultural inputs and cleaning supplies, sourced from vetted suppliers and
          delivered on schedule — no chasing vendors, no gambling on quality.
        </p>

        <div className="animate-fade-up [animation-delay:460ms] mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://wa.me/260950611757"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#333] hover:shadow-lg transition-all"
          >
            WhatsApp Us
          </a>
          <a
            href="mailto:info@avantyfrontier.com"
            className="text-grey text-sm font-medium px-6 py-2.5 rounded-full ring-1 ring-line hover:bg-cream transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>

      <div className="flex-1 min-h-10 sm:min-h-12 lg:min-h-16 shrink-0" />

      <div className="animate-hero-rise [animation-delay:620ms] relative z-0 w-[86%] sm:w-[60%] lg:w-[40%] max-w-sm mx-auto shrink-0 -mb-10 sm:-mb-16">
        <WhatsAppMockup />
      </div>
    </section>
  )
}
