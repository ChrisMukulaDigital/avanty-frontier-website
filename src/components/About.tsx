import ScrollReveal from './ScrollReveal'

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

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 px-5 sm:px-8 lg:px-10 bg-white">
      <ScrollReveal className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-[13px] font-bold uppercase tracking-wider text-[#7c5f20] mb-3">
            About Avanty
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-ink tracking-tight mb-4">
            Built on a working relationship, not a concept.
          </h2>
          <p className="text-grey text-base sm:text-lg max-w-2xl mx-auto">
            Before Avanty existed as a company, its founder was already sourcing
            agricultural inputs from ETG in Lusaka for a recurring buyer, delivered
            across multiple cycles — including cross-border into DRC. That relationship
            came through referral. Avanty Frontier Limited was formed to formalize it
            into a proper company, and to extend the same model into a second category:
            cleaning and hygiene consumables.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mb-14">
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.title}
              className="rounded-2xl border border-line bg-cream p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5 hover:border-gold/40"
            >
              <span className="text-[11px] font-bold text-gold">0{i + 1}</span>
              <h3 className="text-[15px] font-semibold text-ink mt-1 mb-2">{p.title}</h3>
              <p className="text-[13.5px] text-grey leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto rounded-2xl border border-line bg-cream p-7 sm:p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-ink/5">
          <p className="text-ink text-[15px] sm:text-base leading-relaxed italic">
            "We help Zambian businesses, institutions, and agricultural buyers who
            struggle with unreliable, inconsistent supply to get what they need, when
            they need it, at a fair price — by sourcing from vetted local suppliers and
            managing quality and logistics end-to-end."
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}
