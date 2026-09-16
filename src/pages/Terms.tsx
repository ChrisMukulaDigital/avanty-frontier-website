import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ScrollReveal from '../components/ScrollReveal'
import { EMAIL } from '../lib/contact'

const LAST_UPDATED = '17 September 2026'

export default function Terms() {
  return (
    <>
      <PageHero eyebrow="Terms & Conditions" title="The terms behind this site.">
        What using this website and requesting a quote means, in plain terms.
      </PageHero>

      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-10 bg-white">
        <ScrollReveal className="max-w-3xl mx-auto space-y-10 text-[15px] leading-relaxed text-slate">
          <p className="text-[12px] font-bold uppercase tracking-widest text-accent">
            Last updated {LAST_UPDATED}
          </p>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Using this website</h2>
            <p>
              By using avantyfrontier.com, you agree to use it for its intended purpose:
              learning about Avanty Frontier's procurement, supply, and cleaning services, and
              getting in touch to request a quote. You agree not to misuse the site —
              scraping it at scale, attempting to access data that isn't yours, or
              interfering with how it runs for other visitors.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Quotes and orders</h2>
            <p>
              Prices, availability, and delivery timelines shared informally — over WhatsApp,
              email, or through the quote request form — are indicative until confirmed in
              writing. We source and coordinate procurement or cleaning services only after
              you've approved a written quote, and only proceed with an order once it's
              confirmed in writing on both sides.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">No online payments</h2>
            <p>
              This website does not process payments. All payment arrangements are made
              directly with Avanty Frontier via an official quotation or invoice. Our banking
              details are never published on this site and are shared with clients only
              through an authorised quotation, invoice, or contract.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Our content</h2>
            <p>
              Avanty Frontier's name, logo, and the text and images on this site belong to us
              or are used with permission. You're welcome to share and link to our pages; you
              need our written permission to republish our content elsewhere or use our
              branding for your own materials.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">No guarantee, no liability</h2>
            <p>
              We keep this site accurate to the best of our knowledge. Product availability,
              pricing, and delivery timelines are always subject to confirmation at the time
              of your enquiry, since we source from third-party suppliers rather than holding
              our own inventory. The site is provided as-is, and we aren't liable for losses
              arising from its use.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Changes to these terms</h2>
            <p>
              We'll update this page as our services and operations change, and update the
              date at the top when we do. See our{' '}
              <Link to="/privacy" className="font-semibold text-navy underline decoration-accent decoration-2 underline-offset-4">
                Privacy Policy
              </Link>{' '}
              for how we handle your information specifically.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Contact</h2>
            <p>
              Questions about these terms:{' '}
              <a href={`mailto:${EMAIL}`} className="font-semibold text-navy underline decoration-accent decoration-2 underline-offset-4">
                {EMAIL}
              </a>
              .
            </p>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
