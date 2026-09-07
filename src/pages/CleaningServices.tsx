import { Building2, Briefcase, Home, Sparkles, Hammer } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import PageHero from '../components/PageHero'
import ProcessSteps from '../components/ProcessSteps'
import cleaningSuppliesImg from '../assets/cleaning-supplies.jpg'

const SERVICES = [
  { icon: Building2, label: 'Corporate & Commercial Building Cleaning' },
  { icon: Briefcase, label: 'Office Cleaning' },
  { icon: Home, label: 'Residential Cleaning' },
  { icon: Sparkles, label: 'Deep Cleaning' },
  { icon: Hammer, label: 'Post-Construction Cleaning' },
]

// Deduplicated from the source company profile, which listed "Site Assessment"
// twice (steps 2 and 6) with identical text — collapsed to one clean 6-step flow.
const STEPS = [
  {
    title: 'Client Consultation',
    body: 'We understand the premises, cleaning requirements, frequency, preferred schedule and specific areas of concern.',
  },
  {
    title: 'Site Assessment',
    body: 'Where required, we assess the premises to determine the scope of work, labour requirements, equipment and materials.',
  },
  {
    title: 'Cleaning Plan & Quotation',
    body: 'We define the service scope, schedule and deliverables and provide a quotation based on the agreed requirements.',
  },
  {
    title: 'Service Scheduling',
    body: 'Once approved, we agree on the start date, frequency and access arrangements.',
  },
  {
    title: 'Quality Check',
    body: 'We review the completed work against the agreed scope and address identified areas requiring attention.',
  },
  {
    title: 'Ongoing Service & Feedback',
    body: 'For recurring clients, we maintain the agreed schedule, communicate with the client and use feedback to improve service delivery.',
  },
]

export default function CleaningServices() {
  return (
    <>
      <PageHero eyebrow="Cleaning Services" title="Clean, safe, presentable environments.">
        Professional cleaning solutions for corporate and residential clients, with a focus
        on cleanliness, presentation, hygiene, consistency and client satisfaction.
      </PageHero>

      <section className="py-20 sm:py-24 px-5 sm:px-8 lg:px-10 bg-bg">
        <ScrollReveal className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[13px] font-bold uppercase tracking-wider text-accent mb-3">
              Our Cleaning Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-primary tracking-tight text-balance">
              Five service lines, one standard.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {SERVICES.map((s) => (
              <div
                key={s.label}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:border-accent/40"
              >
                <div className="shrink-0 w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-accent">
                  <s.icon
                    className="w-5 h-5 text-accent transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.75}
                  />
                </div>
                <span className="text-[14.5px] font-medium text-navy leading-snug">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl border border-line bg-white p-6 sm:p-7 flex gap-5 items-center">
            <img
              src={cleaningSuppliesImg}
              alt="Cleaning supplies and tools"
              className="hidden sm:block w-20 h-20 rounded-xl object-cover shrink-0"
            />
            <p className="text-[14px] text-navy leading-relaxed">
              For corporate clients, cleaning schedules can be structured around your
              operating hours to minimise disruption — covering offices, reception areas,
              corridors, meeting rooms, kitchens, washrooms and other agreed spaces. For
              recurring contracts, we focus on consistency, clear responsibilities, quality
              checks and responsive communication.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <ProcessSteps eyebrow="How It Works" title="Our cleaning process" steps={STEPS} />
    </>
  )
}
