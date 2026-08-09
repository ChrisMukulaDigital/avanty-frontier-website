import { useState, type FormEvent } from 'react'
import { Mail, MessageCircle } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const WHATSAPP_NUMBER = '260950611757'
const CATEGORIES = ['Agricultural inputs', 'Cleaning & hygiene consumables', 'Something else']

export default function Contact() {
  const [name, setName] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])
  const [details, setDetails] = useState('')

  const buildMessage = () => {
    const lines = [
      `Hi Avanty, I'd like a quote.`,
      name.trim() && `Name: ${name.trim()}`,
      `Category: ${category}`,
      details.trim() && `Details: ${details.trim()}`,
    ].filter(Boolean)
    return lines.join('\n')
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const emailHref = `mailto:info@avantyfrontier.com?subject=${encodeURIComponent(
    'Sourcing Enquiry',
  )}&body=${encodeURIComponent(buildMessage())}`

  return (
    <section id="contact" className="py-20 sm:py-24 px-5 sm:px-8 lg:px-10 bg-cream">
      <ScrollReveal className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-[13px] font-bold uppercase tracking-wider text-[#7c5f20] mb-3">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-ink tracking-tight mb-4">
            Ready to place an order?
          </h2>
          <p className="text-grey text-base sm:text-lg max-w-xl mx-auto">
            Send us what you need and we'll come back with a quote and a delivery date
            — usually within a day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 items-start">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-line bg-white p-6 sm:p-7 text-left transition-all duration-300 hover:shadow-lg hover:shadow-ink/5"
          >
            <div className="mb-4">
              <label className="block text-[13px] font-semibold text-ink mb-1.5" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink placeholder-grey outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[13px] font-semibold text-ink mb-1.5" htmlFor="category">
                What do you need?
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink outline-none focus:ring-1 focus:ring-gold bg-white"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-5">
              <label className="block text-[13px] font-semibold text-ink mb-1.5" htmlFor="details">
                Quantity, timing, delivery location
              </label>
              <textarea
                id="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={3}
                placeholder="e.g. 40 bags Compound D, needed before 15 Sept, delivered to Lusaka"
                className="w-full rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink placeholder-grey outline-none focus:ring-1 focus:ring-gold resize-y"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#25d366] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#1da851] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Send via WhatsApp
            </button>
            <a
              href={emailHref}
              className="mt-3 w-full flex items-center justify-center gap-2 text-grey text-sm font-medium px-6 py-3 rounded-full ring-1 ring-line hover:bg-cream hover:text-ink transition-colors"
            >
              <Mail className="w-4 h-4" />
              Send via Email instead
            </a>
            <p className="mt-3 text-[12px] text-grey/70 text-center">
              Nothing here goes to a server — this just opens WhatsApp or your email app
              with your message pre-filled.
            </p>
          </form>

          <div className="rounded-2xl border border-line bg-white p-6 sm:p-7 text-left transition-all duration-300 hover:shadow-lg hover:shadow-ink/5">
            <h3 className="text-[15px] font-semibold text-ink mb-4">Prefer to reach us directly?</h3>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-ink text-sm font-medium py-3 border-b border-line hover:text-[#1da851] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25d366] transition-transform duration-300 group-hover:scale-125" />
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                WhatsApp: 0950 611 757
              </span>
            </a>
            <a
              href="mailto:info@avantyfrontier.com"
              className="group flex items-center gap-3 text-ink text-sm font-medium py-3 hover:text-gold transition-colors"
            >
              <Mail className="w-4 h-4 text-gold transition-transform duration-300 group-hover:scale-125" />
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                info@avantyfrontier.com
              </span>
            </a>
            <p className="mt-4 text-[13px] text-grey leading-relaxed">
              Every inbound message is answered within 4 business hours, with a written
              quote to follow within 24.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
