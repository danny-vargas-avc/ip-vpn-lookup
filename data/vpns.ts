export interface VpnProvider {
  name: string
  tagline: string
  href: string
  badge?: string
}

// The affiliate grid stays HIDDEN until two things are true:
//   1. adsenseEnabled is flipped on (post AdSense approval), and
//   2. every href below is a real affiliate URL (no leading '#').
// The '#' placeholders below are intentionally non-functional so the grid
// cannot render dead links during review. Replace them with real URLs when
// the affiliate programs are approved, then flip NUXT_PUBLIC_ADSENSE_ENABLED=true.
export const vpnProviders: VpnProvider[] = [
  {
    name: 'NordVPN',
    tagline: 'Industry-leading security with 6,000+ servers in 111 countries. No-logs policy audited by independent firms.',
    href: '#nordvpn',
    badge: 'Top Pick',
  },
  {
    name: 'ExpressVPN',
    tagline: 'Blazing-fast speeds, TrustedServer technology, and apps for every device. 30-day money-back guarantee.',
    href: '#expressvpn',
  },
  {
    name: 'Surfshark',
    tagline: 'Unlimited devices on one plan. CleanWeb blocks ads and trackers. Great value for families.',
    href: '#surfshark',
    badge: 'Best Value',
  },
]
