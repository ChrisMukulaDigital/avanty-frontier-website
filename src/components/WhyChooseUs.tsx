import ScrollReveal from './ScrollReveal'

const REASONS = [
  "Sourced from suppliers we've already worked with — not the first vendor who answers the phone.",
  'One point of contact for sourcing, quality checks, and delivery — no juggling separate vendors.',
  'Pricing and delivery timelines confirmed in writing before you commit.',
  "Built by people who've done this before — this isn't a first attempt at sourcing and logistics.",
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 sm:py-24 px-5 sm:px-8 lg:px-10 bg-mist">
      <ScrollReveal className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-[13px] font-bold uppercase tracking-wider text-accent mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-navy tracking-tight text-balance mb-4">
            Why work with Avanty
          </h2>
          <p className="text-slate text-base sm:text-lg max-w-xl mx-auto">
            Reliability is the whole pitch — here's what backs it up.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {REASONS.map((reason) => (
            <div key={reason} className="flex gap-3 items-start">
              <span className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0" />
              <p className="text-navy text-[15px] sm:text-base leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
