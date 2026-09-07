import { Link } from 'react-router-dom'
import { ArrowRight, PackageSearch, SprayCan } from 'lucide-react'
import Hero from '../components/Hero'
import Process from '../components/Process'
import ScrollReveal from '../components/ScrollReveal'
import agriInputsImg from '../assets/agri-inputs.jpg'
import cleaningSuppliesImg from '../assets/cleaning-supplies.jpg'
import { whatsappLink } from '../lib/contact'

const OFFERS = [
  {
    to: '/procurement-supply',
    image: agriInputsImg,
    imageAlt: 'Fertilizer granules',
    icon: PackageSearch,
    tag: 'Procurement & Supply',
    title: 'Ten categories, one sourcing model.',
    body: 'From agricultural inputs to ICT equipment, PPE, and building materials — we source, verify and deliver, so you never juggle multiple vendors.',
  },
  {
    to: '/cleaning-services',
    image: cleaningSuppliesImg,
    imageAlt: 'Cleaning supplies and tools',
    icon: SprayCan,
    tag: 'Cleaning Services',
    title: 'Clean, safe, presentable environments.',
    body: 'Corporate, office, residential, deep and post-construction cleaning — scheduled around your operating hours, with consistent quality checks.',
  },
]

const REASONS = [
  'Sourced from suppliers we already know and trust — not the first vendor who answers the phone.',
  'One point of contact for sourcing, quality checks, and delivery — no juggling separate vendors.',
  'Pricing and delivery timelines confirmed in writing before you commit.',
  'Integrated procurement and cleaning — access both from one company.',
]

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-20 sm:py-24 px-5 sm:px-8 lg:px-10 bg-bg">
        <ScrollReveal className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-[13px] font-bold uppercase tracking-wider text-accent mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-primary tracking-tight text-balance mb-4">
            Two service lines, one standard of reliability.
          </h2>
          <p className="text-slate text-base sm:text-lg max-w-xl mx-auto mb-12">
            We hold no inventory. We source from suppliers we already know, add a
            transparent margin and service fee, and coordinate delivery.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {OFFERS.map((offer) => (
              <Link
                key={offer.to}
                to={offer.to}
                className="group rounded-2xl border border-line bg-white overflow-hidden text-left block transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="h-44 sm:h-52 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-7 sm:p-8">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded mb-4">
                    <offer.icon className="w-3.5 h-3.5" aria-hidden="true" />
                    {offer.tag}
                  </span>
                  <h3 className="text-xl font-semibold text-primary mb-3">{offer.title}</h3>
                  <p className="text-[15px] text-slate leading-relaxed mb-4">{offer.body}</p>
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent">
                    Learn more
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <Process />

      <section className="py-20 sm:py-24 px-5 sm:px-8 lg:px-10 bg-mist">
        <ScrollReveal className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-[13px] font-bold uppercase tracking-wider text-accent mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-navy tracking-tight text-balance mb-12">
            Why work with Avanty
          </h2>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 mb-10 text-left">
            {REASONS.map((reason) => (
              <div key={reason} className="flex gap-3 items-start">
                <span className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0" />
                <p className="text-navy text-[15px] sm:text-base leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>

          <Link
            to="/why-choose-us"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent hover:text-primary transition-colors"
          >
            See all reasons
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </ScrollReveal>
      </section>

      <section className="py-20 sm:py-24 px-5 sm:px-8 lg:px-10 bg-primary text-center">
        <ScrollReveal className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight text-balance mb-4">
            Ready to place an order?
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8">
            Send us what you need and we'll come back with a quote and a delivery date —
            usually within a day.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#e65a02] hover:shadow-lg transition-all"
            >
              WhatsApp Us
            </a>
            <Link
              to="/contact"
              className="text-white text-sm font-medium px-6 py-2.5 rounded-full ring-1 ring-white/30 hover:bg-white/10 transition-colors"
            >
              Get a detailed quote
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
