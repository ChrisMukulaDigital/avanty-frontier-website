import ScrollReveal from './ScrollReveal'

export interface Step {
  title: string
  body: string
}

interface ProcessStepsProps {
  eyebrow: string
  title: string
  intro?: string
  steps: Step[]
}

export default function ProcessSteps({ eyebrow, title, intro, steps }: ProcessStepsProps) {
  return (
    <section className="py-20 sm:py-24 px-5 sm:px-8 lg:px-10 bg-white">
      <ScrollReveal className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-[13px] font-bold uppercase tracking-wider text-accent mb-3">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-navy tracking-tight text-balance mb-4">
            {title}
          </h2>
          {intro && <p className="text-slate text-base sm:text-lg max-w-xl mx-auto">{intro}</p>}
        </div>

        <ol className="space-y-6">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-5 rounded-2xl border border-line bg-bg p-6">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-white text-[15px] font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <h3 className="text-[16px] font-semibold text-navy mb-1.5">{step.title}</h3>
                <p className="text-[14.5px] text-slate leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </ScrollReveal>
    </section>
  )
}
