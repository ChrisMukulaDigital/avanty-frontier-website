import { useState, type FormEvent } from 'react'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import PageHero from '../components/PageHero'
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from '../components/SocialIcons'
import { ADDRESS, EMAIL, PHONE_NUMBERS, SOCIALS, WHATSAPP_DISPLAY, whatsappLink } from '../lib/contact'

const SOCIAL_LINKS = [
  { label: 'Facebook', href: SOCIALS.facebook, Icon: FacebookIcon },
  { label: 'Instagram', href: SOCIALS.instagram, Icon: InstagramIcon },
  { label: 'LinkedIn', href: SOCIALS.linkedin, Icon: LinkedinIcon },
  { label: 'X (Twitter)', href: SOCIALS.x, Icon: XIcon },
]

const CATEGORIES = [
  'Agricultural inputs',
  'Cleaning & hygiene consumables',
  'Cleaning services',
  'Other procurement',
]

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
    window.open(whatsappLink(buildMessage()), '_blank', 'noopener,noreferrer')
  }

  const emailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    'Sourcing Enquiry',
  )}&body=${encodeURIComponent(buildMessage())}`

  return (
    <>
      <PageHero eyebrow="Contact" title="Ready to place an order?">
        Send us what you need and we'll come back with a quote and a delivery date —
        usually within a day.
      </PageHero>

      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-10 bg-primary">
        <ScrollReveal className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8 items-start">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-line bg-white p-6 sm:p-7 text-left transition-all duration-300 hover:shadow-lg hover:shadow-black/10"
            >
              <div className="mb-4">
                <label className="block text-[13px] font-semibold text-navy mb-1.5" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-line px-3.5 py-2.5 text-sm text-navy placeholder-slate outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[13px] font-semibold text-navy mb-1.5" htmlFor="category">
                  What do you need?
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-lg border border-line px-3.5 py-2.5 text-sm text-navy outline-none focus:ring-2 focus:ring-accent bg-white"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-5">
                <label className="block text-[13px] font-semibold text-navy mb-1.5" htmlFor="details">
                  Quantity, timing, delivery location
                </label>
                <textarea
                  id="details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows={3}
                  placeholder="e.g. 40 bags Compound D, needed before 15 Sept, delivered to Lusaka"
                  className="w-full rounded-lg border border-line px-3.5 py-2.5 text-sm text-navy placeholder-slate outline-none focus:ring-2 focus:ring-accent resize-y"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-accent text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#e65a02] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Send via WhatsApp
              </button>
              <a
                href={emailHref}
                className="mt-3 w-full flex items-center justify-center gap-2 text-slate text-sm font-medium px-6 py-3 rounded-full ring-1 ring-line hover:bg-bg hover:text-navy active:bg-line/60 transition-colors"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Send via Email instead
              </a>
              <p className="mt-3 text-[12px] text-slate text-center">
                Nothing here goes to a server — this just opens WhatsApp or your email app
                with your message pre-filled.
              </p>
            </form>

            <div className="rounded-2xl border border-line bg-white p-6 sm:p-7 text-left transition-all duration-300 hover:shadow-lg hover:shadow-black/10">
              <h3 className="text-[15px] font-semibold text-navy mb-4">Prefer to reach us directly?</h3>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-navy text-sm font-medium py-3 border-b border-line hover:text-accent active:text-accent/70 transition-colors"
              >
                <MessageCircle
                  className="w-4 h-4 text-accent transition-transform duration-300 group-hover:scale-125"
                  aria-hidden="true"
                />
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  WhatsApp: {WHATSAPP_DISPLAY}
                </span>
              </a>

              <div className="flex items-start gap-3 text-navy text-sm font-medium py-3 border-b border-line">
                <Phone className="w-4 h-4 text-accent mt-0.5" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  {PHONE_NUMBERS.map((num) => (
                    <a key={num} href={`tel:${num.replace(/\s/g, '')}`} className="hover:text-accent active:text-accent/70 transition-colors">
                      {num}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-3 text-navy text-sm font-medium py-3 border-b border-line hover:text-accent active:text-accent/70 transition-colors"
              >
                <Mail
                  className="w-4 h-4 text-accent transition-transform duration-300 group-hover:scale-125"
                  aria-hidden="true"
                />
                <span className="transition-transform duration-300 group-hover:translate-x-1">{EMAIL}</span>
              </a>

              <div className="flex items-start gap-3 text-navy text-sm font-medium py-3 border-b border-line">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                <span>{ADDRESS}</span>
              </div>

              <div className="flex items-center gap-3 pt-4">
                {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-navy bg-bg hover:bg-accent hover:text-white active:scale-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-all"
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </a>
                ))}
              </div>

              <p className="mt-4 text-[13px] text-slate leading-relaxed">
                Every inbound message is answered within 4 business hours, with a written
                quote to follow within 24.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
