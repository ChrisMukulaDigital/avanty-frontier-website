import ScrollReveal from '../components/ScrollReveal'
import PageHero from '../components/PageHero'

const REASONS = [
  {
    title: 'Reliable Sourcing',
    body: 'We work to identify suitable suppliers and practical sourcing options for client requirements.',
  },
  {
    title: 'Flexible Procurement Solutions',
    body: 'We can respond to different product categories, quantities and client requirements.',
  },
  {
    title: 'Professional Customer Service',
    body: 'We prioritise clear communication, responsiveness and follow-through.',
  },
  {
    title: 'Broad Product Coverage',
    body: 'Our range allows clients to consolidate different procurement requirements through one service provider.',
  },
  {
    title: 'Cleaning Reliability',
    body: 'Our cleaning approach is structured around scope, scheduling, quality checks and ongoing feedback.',
  },
  {
    title: 'Competitive Pricing',
    body: 'We compare available options and seek value for money.',
  },
  {
    title: 'Quality Assurance',
    body: 'We pay attention to specifications, quantities and agreed standards.',
  },
  {
    title: 'Local Supplier Network',
    body: 'We aim to build dependable relationships with local suppliers and service providers.',
  },
  {
    title: 'Integrated Procurement & Cleaning',
    body: 'Clients can access both supply and cleaning solutions from one company.',
  },
  {
    title: 'Tailored Cleaning Solutions',
    body: "Cleaning services can be designed around the client's premises, operating hours and frequency requirements.",
  },
  {
    title: 'Long-Term Partnership',
    body: "We aim to become an extension of our clients' operations rather than simply a once-off vendor.",
  },
]

export default function WhyChooseUs() {
  return (
    <>
      <PageHero eyebrow="Why Choose Us" title="Why work with Avanty Frontier">
        Reliability is the whole pitch — here's what backs it up.
      </PageHero>

      <section className="py-20 sm:py-24 px-5 sm:px-8 lg:px-10 bg-mist">
        <ScrollReveal className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REASONS.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-line bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
              >
                <span className="mt-1 mb-3 block w-2 h-2 rounded-full bg-accent" />
                <h3 className="text-[15px] font-semibold text-navy mb-2">{r.title}</h3>
                <p className="text-[13.5px] text-slate leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
