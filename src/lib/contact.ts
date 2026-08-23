// Single source of truth for Avanty's contact details.
// Update here and every CTA/link across the site follows.

export const WHATSAPP_NUMBER = '260769007656' // digits only, country code, no leading +
export const WHATSAPP_DISPLAY = '0769 007 656' // local format shown to visitors
export const EMAIL = 'info@avantyfrontier.com'

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message?.trim() ? `${base}?text=${encodeURIComponent(message.trim())}` : base
}
