import {
  Award,
  Handshake,
  Headset,
  Lightbulb,
  ScrollText,
  ShieldCheck,
  Timer,
  Trophy,
  BadgeCheck,
  FileCheck2,
  Building2,
} from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import PageHero from '../components/PageHero'
import { MOTTO } from '../lib/contact'
import ericPhoto from '../assets/eric-simwinga.jpg'

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Integrity First',
    body: 'We do what is right, communicate honestly and keep our commitments.',
  },
  {
    icon: Timer,
    title: 'Reliability in Action',
    body: 'Our clients should be able to depend on us to respond, deliver and follow through.',
  },
  {
    icon: Award,
    title: 'Professional by Design',
    body: 'We conduct every engagement with discipline, respect, organisation and attention to detail.',
  },
  {
    icon: Headset,
    title: 'Client Centred Service',
    body: "We listen, understand the requirement and tailor our solution to the client's needs.",
  },
  {
    icon: Trophy,
    title: 'Quality Without Compromise',
    body: 'We pursue products and services that meet the required standard and continuously improve our work.',
  },
  {
    icon: Handshake,
    title: 'Value Every Time',
    body: 'We seek practical solutions that balance quality, cost and long-term value.',
  },
  {
    icon: ScrollText,
    title: 'Accountability Always',
    body: 'We take responsibility for our decisions, performance and results.',
  },
  {
    icon: Lightbulb,
    title: 'Progress & Innovation',
    body: "We look for better ways to source, supply, clean and serve as our clients' needs evolve.",
  },
]

const PRINCIPLES = [
  {
    title: 'Source',
    body: 'We buy from suppliers we already know and trust — not the first vendor who answers the phone.',
  },
  {
    title: 'Coordinate logistics',
    body: 'Transport arranged through a third-party logistics provider, including cross-border where needed.',
  },
  {
    title: 'Deliver',
    body: 'Goods handed over to you or an agreed point, with an invoice and written record on file.',
  },
]

const COMPLIANCE = [
  {
    icon: FileCheck2,
    title: 'Registered with PACRA',
    body: 'Incorporated in Zambia as a private company limited by shares.',
  },
  {
    icon: BadgeCheck,
    title: 'TPIN Registered',
    body: 'Registered with the Zambia Revenue Authority.',
  },
  {
    icon: ShieldCheck,
    title: 'NAPSA Compliant',
    body: "In good standing with the National Pension Scheme Authority.",
  },
]

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Avanty" title="Built on a working relationship, not a concept.">
        Avanty Frontier Limited is a Zambian-owned company focused on procurement and
        supply, and professional cleaning services — providing reliable, practical
        solutions to businesses, institutions, organisations, and individuals.
      </PageHero>

      <section className="py-20 sm:py-24 px-5 sm:px-8 lg:px-10 bg-white">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-[13px] font-bold uppercase tracking-wider text-accent mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-navy tracking-tight text-balance mb-6">
            Two service lines, one standard
          </h2>
          <p className="text-slate text-base sm:text-lg leading-relaxed mb-4">
            We help our clients source and access quality products efficiently — from
            office and ICT equipment to agricultural inputs, cleaning supplies, PPE,
            building materials, stationery, furniture, and other essential goods. Through
            our procurement and supply services, we connect clients with suitable
            suppliers while focusing on quality, value, timely delivery, and dependable
            service.
          </p>
          <p className="text-slate text-base sm:text-lg leading-relaxed mb-10">
            Our professional cleaning services provide clean, safe, and well-maintained
            environments for offices, homes, and other facilities, including routine,
            deep, and post-construction cleaning.
          </p>

          <div className="h-px bg-line max-w-xs mx-auto mb-10" />

          <p className="text-slate text-base sm:text-lg leading-relaxed mb-4">
            "Avanty" is inspired by the Italian word "Avanti", meaning "move forward." The
            spelling was deliberately chosen to create a distinctive corporate identity and
            differentiate the business from existing names.
          </p>
          <p className="text-slate text-base sm:text-lg leading-relaxed">
            "Frontier" represents new territory, opportunity, progress and the willingness to
            go beyond conventional limits. Together, Avanty Frontier represents a company
            that moves forward, explores opportunities, and helps clients move their
            operations forward.
          </p>
          <p className="mt-8 text-accent font-semibold tracking-wide text-[15px] uppercase">
            {MOTTO}
          </p>
        </ScrollReveal>
      </section>

      <section className="py-20 sm:py-24 px-5 sm:px-8 lg:px-10 bg-bg">
        <ScrollReveal className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="rounded-2xl border border-line bg-white p-7 sm:p-8">
              <h3 className="text-[13px] font-bold uppercase tracking-wider text-accent mb-3">
                Vision
              </h3>
              <p className="text-navy text-base leading-relaxed">
                To become a trusted and highly respected Zambian sourcing, supply and
                facilities services company, recognised for reliability, quality, innovation
                and excellence, while building lasting value for clients, suppliers, employees
                and communities.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-7 sm:p-8">
              <h3 className="text-[13px] font-bold uppercase tracking-wider text-accent mb-3">
                Mission
              </h3>
              <p className="text-navy text-base leading-relaxed">
                To make it easier for our clients to get what they need and maintain the
                environments in which they work and live — connecting them to quality
                products, dependable suppliers and professional cleaning solutions, delivered
                on time and to the standard they expect.
              </p>
            </div>
          </div>
          <p className="max-w-2xl mx-auto text-center text-navy text-base sm:text-lg leading-relaxed">
            At Avanty Frontier, we are driven by a simple philosophy: move forward, create
            value, and build lasting relationships. We aim to grow into a trusted and
            diversified Zambian enterprise by delivering solutions that make our clients'
            work easier and their operations more efficient.
          </p>
        </ScrollReveal>
      </section>

      <section className="py-20 sm:py-24 px-5 sm:px-8 lg:px-10 bg-mist">
        <ScrollReveal className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-[13px] font-bold uppercase tracking-wider text-accent mb-3">
              Founder
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-navy tracking-tight text-balance">
              Eric Simwinga
            </h2>
          </div>

          <div className="grid sm:grid-cols-[280px_1fr] gap-8 sm:gap-10 items-start max-w-3xl mx-auto">
            <div className="mx-auto sm:mx-0 w-48 sm:w-full aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-line shadow-sm">
              <img
                src={ericPhoto}
                alt="Eric Simwinga, Founder of Avanty Frontier Limited"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p className="text-navy text-base sm:text-lg leading-relaxed mb-4">
                Eric Simwinga is a Zambian Agricultural Economist, entrepreneur, visionary
                leader, and young professional passionate about creating positive change and
                meaningful growth.
              </p>
              <p className="text-slate text-[15px] leading-relaxed mb-4">
                He holds a Bachelor's degree in Agricultural Economics from the University of
                Zambia, where his journey in leadership began. During his time at the
                University, Eric held various leadership positions within the School of
                Agricultural Sciences and went on to significantly lead the School of
                Agricultural Sciences during the 2023/24 academic year.
              </p>
              <p className="text-slate text-[15px] leading-relaxed">
                Beyond academics and leadership, Eric is driven by a desire to learn, build,
                and contribute to a better future. He believes that meaningful progress
                begins with a positive mindset, purposeful action, and the courage to pursue
                ideas that can make a difference.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="py-20 sm:py-24 px-5 sm:px-8 lg:px-10 bg-white">
        <ScrollReveal className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[13px] font-bold uppercase tracking-wider text-accent mb-3">
              Our Core Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-navy tracking-tight text-balance">
              What guides every engagement
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-line bg-bg p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:border-accent/40"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="text-[15px] font-semibold text-navy mb-2">{v.title}</h3>
                <p className="text-[13.5px] text-slate leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="py-20 sm:py-24 px-5 sm:px-8 lg:px-10 bg-bg">
        <ScrollReveal className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-[13px] font-bold uppercase tracking-wider text-accent mb-3">
              How We Operate
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-navy tracking-tight text-balance">
              Source. Coordinate. Deliver.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl border border-line bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
              >
                <span className="text-[11px] font-bold text-accent">0{i + 1}</span>
                <h3 className="text-[15px] font-semibold text-navy mt-1 mb-2">{p.title}</h3>
                <p className="text-[13.5px] text-slate leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="py-20 sm:py-24 px-5 sm:px-8 lg:px-10 bg-white">
        <ScrollReveal className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-[13px] font-bold uppercase tracking-wider text-accent mb-3">
              Compliance
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-navy tracking-tight text-balance">
              Registered and compliant in Zambia
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {COMPLIANCE.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-line bg-bg p-6 text-center flex flex-col items-center"
              >
                <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center mb-4">
                  <c.icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="text-[15px] font-semibold text-navy mb-1.5">{c.title}</h3>
                <p className="text-[13.5px] text-slate leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-10 bg-bg">
        <ScrollReveal className="max-w-2xl mx-auto rounded-2xl border border-line bg-white p-7 sm:p-8 text-center shadow-sm">
          <Building2 className="w-6 h-6 text-primary mx-auto mb-4" strokeWidth={1.75} aria-hidden="true" />
          <p className="text-navy text-[15px] sm:text-base leading-relaxed italic">
            "We help Zambian businesses, institutions, and agricultural buyers who struggle
            with unreliable, inconsistent supply to get what they need, when they need it,
            at a fair price — by sourcing from vetted local suppliers and managing quality
            and logistics end-to-end."
          </p>
        </ScrollReveal>
      </section>
    </>
  )
}
