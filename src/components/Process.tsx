import { MessageCircle, FileCheck2, Truck } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const STEPS = [
  {
    icon: MessageCircle,
    title: 'Tell us what you need',
    body: 'Send a WhatsApp message or email with the product, quantity, and when you need it. Every inbound message is answered within 4 business hours.',
  },
  {
    icon: FileCheck2,
    title: 'We source and quote',
    body: 'We confirm price and delivery timeline in writing — WhatsApp or email, never verbal-only — within 24 hours of confirming what you need.',
  },
  {
    icon: Truck,
    title: 'We deliver, on schedule',
    body: 'We manage sourcing and logistics through to delivery, and confirm once it is in your hands. Every order has an invoice and written record on file.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-24 px-5 sm:px-8 lg:px-10 bg-cream">
      <ScrollReveal className="max-w-5xl mx-auto text-center">
        <span className="inline-block text-[13px] font-bold uppercase tracking-wider text-[#7c5f20] mb-3">
          How It Works
        </span>
        <h2 className="text-3xl sm:text-4xl font-normal text-ink tracking-tight text-balance mb-4">
          Three steps, start to finish.
        </h2>
        <p className="text-grey text-base sm:text-lg max-w-xl mx-auto mb-14">
          No account to set up, no portal to log into — every order runs through
          WhatsApp or email.
        </p>

        <div className="relative grid sm:grid-cols-3 gap-10 sm:gap-6">
          {STEPS.map((step, i) => (
            <div key={step.title} className="group relative flex flex-col items-center text-center">
              {i < STEPS.length - 1 && (
                <div
                  className="hidden sm:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-line"
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10 w-16 h-16 rounded-full bg-ink flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-gold group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gold/30">
                <step.icon
                  className="w-6 h-6 text-gold transition-colors duration-300 group-hover:text-ink"
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="text-[17px] font-semibold text-ink mb-2">
                {i + 1}. {step.title}
              </h3>
              <p className="text-[14.5px] text-grey leading-relaxed max-w-[260px]">{step.body}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
