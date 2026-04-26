export interface VpnProvider {
  name: string
  tagline: string
  href: string
  badge?: string
}

// PLACEHOLDER: replace hrefs with real affiliate URLs before launch
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
