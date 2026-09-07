import {
  Armchair,
  Tractor,
  Monitor,
  HardHat,
  ShoppingBasket,
  Pencil,
  SprayCan,
  Cpu,
  Building,
  Stethoscope,
} from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import PageHero from '../components/PageHero'
import ProcessSteps from '../components/ProcessSteps'
import agriInputsImg from '../assets/agri-inputs.jpg'

const CATEGORIES = [
  { icon: Armchair, label: 'Office Furniture' },
  { icon: Tractor, label: 'Agricultural Inputs & Machinery' },
  { icon: Monitor, label: 'Office Equipment' },
  { icon: HardHat, label: 'Personal Protective Equipment (PPE)' },
  { icon: ShoppingBasket, label: 'Groceries & Consumables' },
  { icon: Pencil, label: 'Stationery' },
  { icon: SprayCan, label: 'Cleaning Materials, Tools & Equipment' },
  { icon: Cpu, label: 'ICT & Technology Equipment' },
  { icon: Building, label: 'Building Materials' },
  { icon: Stethoscope, label: 'Medical Supplies' },
]

const STEPS = [
  {
    title: 'Client Request',
    body: "We receive the client's product requirements, specifications, quantities, delivery location and timeframe.",
  },
  {
    title: 'Requirement Assessment',
    body: 'We clarify specifications and identify the most suitable sourcing approach.',
  },
  {
    title: 'Supplier Sourcing',
    body: "We identify reliable suppliers and obtain relevant quotations based on the client's requirements.",
  },
  {
    title: 'Quotation & Evaluation',
    body: 'We compare supplier pricing, quality, availability, lead time and other relevant considerations.',
  },
  {
    title: 'Client Approval',
    body: 'Where applicable, the preferred option and final cost are presented to the client for approval.',
  },
  {
    title: 'Procurement',
    body: 'After approval and according to agreed payment and purchase terms, we place the order and coordinate procurement.',
  },
  {
    title: 'Quality & Quantity Verification',
    body: 'We verify the goods against the agreed requirements as far as practicable before dispatch or delivery.',
  },
  {
    title: 'Logistics & Delivery',
    body: 'We coordinate transportation and delivery to the agreed destination.',
  },
  {
    title: 'Handover & Completion',
    body: 'The goods are delivered, relevant documentation is provided, and the assignment is closed after confirming completion.',
  },
]

export default function ProcurementSupply() {
  return (
    <>
      <PageHero eyebrow="Procurement & Supply" title="We simplify procurement, end to end.">
        We source and supply a broad range of products for businesses, institutions,
        organisations, agricultural operations and other clients — identifying suitable
        suppliers, coordinating purchasing and logistics, and delivering according to your
        requirements.
      </PageHero>

      <section className="py-20 sm:py-24 px-5 sm:px-8 lg:px-10 bg-bg">
        <ScrollReveal className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[13px] font-bold uppercase tracking-wider text-accent mb-3">
              What We Supply
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-primary tracking-tight text-balance">
              Ten categories, one sourcing model.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((c) => (
              <div
                key={c.label}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:border-accent/40"
              >
                <div className="shrink-0 w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-accent">
                  <c.icon
                    className="w-5 h-5 text-accent transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.75}
                  />
                </div>
                <span className="text-[14.5px] font-medium text-navy leading-snug">{c.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-2xl mx-auto rounded-2xl border border-line bg-white p-6 sm:p-7 flex gap-5 items-center shadow-sm">
            <img
              src={agriInputsImg}
              alt="Fertilizer granules"
              className="hidden sm:block w-20 h-20 rounded-xl object-cover shrink-0"
            />
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded mb-2">
                Track record
              </span>
              <p className="text-[14px] text-navy leading-relaxed">
                Already supplying recurring agricultural-input orders — including
                cross-border delivery — sourced from ETG in Lusaka.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <ProcessSteps
        eyebrow="How It Works"
        title="Our procurement process"
        steps={STEPS}
      />
    </>
  )
}
