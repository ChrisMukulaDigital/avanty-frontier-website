import agriInputsImg from '../assets/agri-inputs.jpg'
import cleaningSuppliesImg from '../assets/cleaning-supplies.jpg'
import ScrollReveal from './ScrollReveal'

const AGRI_ITEMS = ['Fertilizer', 'Planting equipment', 'Other seasonal inputs, sourced on request']
const CLEANING_ITEMS = [
  'Industrial detergents & disinfectants',
  'Sanitizers',
  'PPE (personal protective equipment)',
  'Dispensers',
]

interface OfferCardProps {
  image: string
  imageAlt: string
  tag: string
  title: string
  items: string[]
  proof: string
  honestGap?: boolean
}

function OfferCard({ image, imageAlt, tag, title, items, proof, honestGap }: OfferCardProps) {
  return (
    <div className="group rounded-2xl border border-line bg-white overflow-hidden text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/5 hover:border-line">
      <div className="h-44 sm:h-52 overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-7 sm:p-8">
        <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#7c5f20] bg-gold/10 px-2.5 py-1 rounded mb-4">
          {tag}
        </span>
        <h3 className="text-xl font-semibold text-ink mb-4">{title}</h3>
        <ul className="space-y-2 mb-6">
          {items.map((item) => (
            <li key={item} className="flex gap-2 text-[15px] text-grey">
              <span className="text-gold mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <div
          className={`text-[13.5px] rounded px-3.5 py-2.5 border-l-2 ${
            honestGap ? 'border-line bg-cream text-grey' : 'border-gold bg-cream text-ink'
          }`}
        >
          {proof}
        </div>
      </div>
    </div>
  )
}

export default function Supply() {
  return (
    <section id="supply" className="py-20 sm:py-24 px-5 sm:px-8 lg:px-10 bg-white">
      <ScrollReveal className="max-w-5xl mx-auto text-center">
        <span className="inline-block text-[13px] font-bold uppercase tracking-wider text-[#7c5f20] mb-3">
          What We Supply
        </span>
        <h2 className="text-3xl sm:text-4xl font-normal text-ink tracking-tight text-balance mb-4">
          Two categories, one sourcing model.
        </h2>
        <p className="text-grey text-base sm:text-lg max-w-xl mx-auto mb-12">
          We hold no inventory. We source from suppliers we already know, add a
          transparent margin and service fee, and coordinate delivery.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <OfferCard
            image={agriInputsImg}
            imageAlt="Fertilizer granules"
            tag="Agricultural Inputs"
            title="Fertilizers & planting equipment"
            items={AGRI_ITEMS}
            proof="Already supplying recurring agricultural-input orders — including cross-border delivery — sourced from ETG in Lusaka."
          />
          <OfferCard
            image={cleaningSuppliesImg}
            imageAlt="Cleaning supplies and tools"
            tag="Cleaning & Hygiene Supplies"
            title="Consumables for offices & institutions"
            items={CLEANING_ITEMS}
            proof="A new offer, built on the same sourcing model — we don't yet have a completed cleaning order to point to, and we're not going to pretend otherwise."
            honestGap
          />
        </div>
      </ScrollReveal>
    </section>
  )
}
