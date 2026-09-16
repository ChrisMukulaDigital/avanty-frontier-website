import PageHero from '../components/PageHero'
import ScrollReveal from '../components/ScrollReveal'
import { EMAIL } from '../lib/contact'

const LAST_UPDATED = '17 September 2026'

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Privacy Policy" title="How we handle your information.">
        What we collect and how we use it, in plain terms.
      </PageHero>

      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-10 bg-white">
        <ScrollReveal className="max-w-3xl mx-auto space-y-10 text-[15px] leading-relaxed text-slate">
          <p className="text-[12px] font-bold uppercase tracking-widest text-accent">
            Last updated {LAST_UPDATED}
          </p>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Who we are</h2>
            <p>
              Avanty Frontier Limited is a Zambian private company limited by shares, based in
              Lusaka. This policy covers avantyfrontier.com. For anything in this policy,
              write to{' '}
              <a href={`mailto:${EMAIL}`} className="font-semibold text-navy underline decoration-accent decoration-2 underline-offset-4">
                {EMAIL}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">What we collect</h2>
            <p className="mb-4">This website has no backend and no database. Specifically:</p>
            <ul className="space-y-3 list-disc pl-5">
              <li>
                <b className="text-navy">The quote request form.</b> The form on our homepage
                and Contact page builds a WhatsApp or email message directly in your browser.
                Nothing is submitted to us or stored anywhere until you choose to send it —
                at that point it becomes a WhatsApp message or email like any other, sent
                through your own WhatsApp or email app.
              </li>
              <li>
                <b className="text-navy">WhatsApp, email, or phone enquiries.</b> When you
                contact us directly, we receive and keep whatever you choose to share — your
                name, company, the products or services you need, quantities, and delivery
                details — so we can prepare a quote and fulfil your order.
              </li>
              <li>
                <b className="text-navy">No cookies or tracking scripts.</b> This site does
                not currently run analytics, advertising pixels, or tracking cookies.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">How we use it</h2>
            <p>
              We use what you share with us only to respond to your enquiry, prepare quotes,
              and coordinate sourcing, cleaning services, and delivery — consistent with our
              own lead-tracking process for every enquiry, closed or not. We don't use it for
              anything beyond that, and we don't sell or rent it to anyone.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Third parties</h2>
            <p>
              Once you send a message via WhatsApp or email, that message is carried by
              WhatsApp (Meta) or your email provider under their own privacy terms — we have
              no control over how those platforms handle transmission. This website itself is
              hosted on Vercel, which may process standard technical logs (like IP address and
              browser type) as part of running the hosting infrastructure.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Payments and banking details</h2>
            <p>
              We do not collect or process payments through this website, and we do not
              publish our banking details here. Banking information is only ever shared with
              clients through an authorised quotation, invoice, or contract.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">How long we keep it</h2>
            <p>
              We keep enquiry and order information for as long as it's actually needed —
              typically for the life of the business relationship and as required for our own
              record-keeping. If you'd like your information reviewed or removed, write to us
              and we'll act on it.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Your rights</h2>
            <p>
              You can ask us what information we hold about you, ask us to correct it, or ask
              us to delete it. Write to{' '}
              <a href={`mailto:${EMAIL}`} className="font-semibold text-navy underline decoration-accent decoration-2 underline-offset-4">
                {EMAIL}
              </a>{' '}
              and we'll act on it.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Children</h2>
            <p>
              This website is intended for businesses, institutions, organisations, and adult
              individuals sourcing procurement or cleaning services. We do not knowingly
              collect information from children.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Changes to this policy</h2>
            <p>We'll update this page as our practices change, and update the date at the top when we do.</p>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
