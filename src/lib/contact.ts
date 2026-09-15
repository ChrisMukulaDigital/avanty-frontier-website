// Single source of truth for Avanty's contact & company details.
// Update here and every CTA/link across the site follows.

export const WHATSAPP_NUMBER = '260769007656' // digits only, country code, no leading + — the active WhatsApp line
export const WHATSAPP_DISPLAY = '0769 007 656' // local format shown to visitors

// All registered company phone lines, per the official Company Profile.
// Only WHATSAPP_NUMBER above is known to be WhatsApp-enabled, so these are
// offered as plain phone contacts, not wa.me links.
export const PHONE_NUMBERS = ['+260 950 611 757', '+260 976 653 612', '+260 769 007 656']

export const EMAIL = 'info@avantyfrontier.com'
export const ADDRESS = 'Plot 2856, Meanwood Ndeke, Chongwe, Lusaka, Zambia'
export const MOTTO = 'Move Forward. Source Better. Serve Better.'

export const SOCIALS = {
  facebook: 'https://www.facebook.com/share/1DyxCCW4Nz/?mibextid=wwXIfr',
  instagram:
    'https://www.instagram.com/avantyfrontier?stkn=MTYwMnFwcHBmN2hwMw%3D%3D&utm_source=qr',
  linkedin: 'https://www.linkedin.com/company/avanty-frontier-limited/',
  x: 'https://x.com/avantyfrontier?s=11',
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message?.trim() ? `${base}?text=${encodeURIComponent(message.trim())}` : base
}
