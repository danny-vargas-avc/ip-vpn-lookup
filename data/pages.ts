import type { Faq } from './types'

export interface PageData {
  path: string
  title: string
  description: string
  heading: string
  tagline: string
  body: string
  faqs: Faq[]
  breadcrumb: string
}

export const pages: Record<string, PageData> = {
  '/': {
    path: '/',
    title: 'What Is My IP Address? — IP Lookup & VPN Checker',
    description: 'Instantly find your public IP address, see your geolocation and ISP, and check whether your VPN is working. Free IP lookup tool — no sign-up required.',
    heading: 'What Is My IP Address?',
    tagline: 'Your public IP, location, ISP, and VPN status — detected instantly.',
    body: `Your IP address is a unique identifier assigned by your internet service provider every time you connect to the internet. It reveals your approximate location, your ISP, and whether you're connecting through a VPN or proxy server.

Every website you visit can see this information automatically — you don't need to share it. Advertisers, trackers, and even cybercriminals use IP addresses to profile users, serve targeted ads, and in some cases, identify individuals.

This tool queries your connection in real time and shows you exactly what the internet sees when you visit any website: your public IPv4 address, your city and country, your internet provider, and whether your IP is flagged as a VPN, proxy, or datacenter. The mini map shows your approximate geolocation based on your IP — not your device's GPS.`,
    faqs: [
      {
        question: 'What is an IP address and why does it matter?',
        answer: 'An IP address (Internet Protocol address) is a numerical label assigned to every device connected to a network. Your public IP is what websites see when you visit them — it can reveal your approximate location, your ISP, and whether you\'re using a VPN. It matters for privacy because it can be used to track your online activity across sites.',
      },
      {
        question: 'Can websites see my exact home address from my IP?',
        answer: 'No. An IP address reveals your approximate location — typically accurate to your city or region — not your street address. Your ISP knows which specific address corresponds to your IP, but websites only see the city-level geolocation. That said, your approximate location combined with other browser data can still be used to identify you.',
      },
      {
        question: 'Why does my detected location look wrong?',
        answer: 'IP geolocation is based on databases that map IP ranges to physical locations. These databases can be outdated or imprecise, especially for mobile connections and ISPs that route traffic through regional hubs. Your IP might show a city that\'s the location of your ISP\'s server rather than your actual location.',
      },
      {
        question: 'Does using a VPN hide my real IP address?',
        answer: 'Yes — a VPN replaces your real IP with the IP of the VPN server you\'re connected to. Websites see the VPN server\'s IP, not yours. However, some VPNs have DNS leaks or WebRTC leaks that can expose your real IP even when the VPN is active. Our VPN Checker tool detects whether your connection is flagged as a VPN.',
      },
      {
        question: 'Does this tool store my IP address?',
        answer: 'No. Your IP is looked up in real time and displayed to you — it\'s not logged or stored by this site. The lookup is performed by ip-api.com on our behalf; their privacy policy governs their data handling.',
      },
    ],
  },

  '/what-is-my-ip': {
    path: '/what-is-my-ip',
    title: 'What Is My IP Address? — Find Your IP Instantly',
    description: 'See your public IPv4 address, internet provider, city, and country in seconds. Free IP address lookup — no sign-up, no tracking.',
    heading: 'What Is My IP Address?',
    tagline: 'Find your public IP, location, and ISP instantly.',
    body: `When you connect to the internet, your ISP assigns you a public IP address. This address is visible to every website you visit — it\'s how servers know where to send the data you requested. Think of it like the return address on a letter.

Unlike your physical address, your IP address changes periodically (unless you have a static IP) and only reveals your city or region, not your exact street address. But it can still be used to track you across websites, block you from region-locked content, or serve you location-targeted ads.

Knowing your IP address is useful when troubleshooting network issues, setting up port forwarding, configuring firewall rules, or verifying that your VPN is masking your real connection. This tool shows your current public IP along with the location and ISP your provider has registered for it.`,
    faqs: [
      {
        question: 'Why is my IP address different from what other tools show?',
        answer: 'Different IP lookup tools use different geolocation databases, and these can disagree — especially for mobile networks and ISPs that route through central hubs. Our tool uses ip-api.com\'s database. If your IP shows a different city in another tool, it means the two databases have different records for your IP range.',
      },
      {
        question: 'What is the difference between IPv4 and IPv6?',
        answer: 'IPv4 is the traditional format (e.g., 192.168.1.1) — four numbers between 0–255 separated by dots. IPv6 is the newer format (e.g., 2001:db8::1) that supports far more unique addresses. Most internet traffic still uses IPv4, but IPv6 adoption is growing. This tool currently shows your IPv4 address.',
      },
      {
        question: 'Can my IP address change?',
        answer: 'Yes. Most home internet connections use a dynamic IP, meaning your ISP can assign you a new IP address at any time — usually when you restart your router. Some ISPs change IPs more frequently than others. Businesses and power users can pay for a static IP that never changes.',
      },
      {
        question: 'Is my IP address the same on mobile data and Wi-Fi?',
        answer: 'No. When you switch from Wi-Fi to mobile data, your device gets a different public IP assigned by your mobile carrier. The location and ISP shown will also differ — mobile IPs often resolve to the carrier\'s regional hub rather than your exact location.',
      },
      {
        question: 'How do I hide my IP address?',
        answer: 'The most reliable way is to use a VPN (Virtual Private Network). A VPN routes your traffic through a server in another location, replacing your real IP with the server\'s IP. Other methods include Tor (slower but more anonymous) and proxy servers (less secure). Free proxies in particular should be avoided for sensitive browsing.',
      },
    ],
  },

  '/vpn-checker': {
    path: '/vpn-checker',
    title: 'Is My VPN Working? — Check VPN Detection Online',
    description: 'Test whether your VPN is hiding your real IP address. Our VPN detection tool shows you exactly what websites see — and whether your VPN is actually working.',
    heading: 'Is My VPN Working?',
    tagline: 'Check whether websites can detect your VPN connection.',
    body: `A VPN should mask your real IP address and make your traffic appear to originate from the VPN server\'s location. But not all VPNs work perfectly — DNS leaks, WebRTC leaks, and improperly configured kill switches can expose your real IP even when you think you\'re protected.

This tool checks whether your current IP address is flagged as belonging to a VPN provider, proxy service, or datacenter. If your VPN is working correctly, you should see your IP as a VPN-flagged address — not your home ISP. If your real ISP appears here despite having a VPN active, you likely have a leak.

Note that VPN detection relies on databases of known VPN and datacenter IP ranges. A newly provisioned VPN IP might not be flagged yet, and some residential VPNs deliberately avoid detection. A "not detected" result doesn\'t necessarily mean you\'re fully anonymous — it means the IP isn\'t in known VPN databases.`,
    faqs: [
      {
        question: 'What does it mean if my VPN isn\'t detected?',
        answer: 'If your VPN is active but not detected, it could mean: (1) the VPN IP you\'re using isn\'t in the ip-api.com database yet, (2) you\'re using a residential VPN that routes through real ISP addresses, or (3) there\'s a leak and your real IP is showing. Cross-check with your VPN app — if it shows "connected" and this tool shows your home ISP, you have a leak.',
      },
      {
        question: 'What is a DNS leak and how does it affect my VPN?',
        answer: 'A DNS leak occurs when your DNS queries (the lookups that translate domain names to IP addresses) bypass the VPN tunnel and go directly through your ISP. This means websites and your ISP can see what sites you\'re visiting even if your IP is masked. Good VPNs include DNS leak protection — check your VPN\'s settings to confirm it\'s enabled.',
      },
      {
        question: 'Why is my VPN detected even though I want to stay anonymous?',
        answer: 'VPN detection means your IP is in a database of known VPN provider IP ranges. Many websites use this to block VPN users (e.g., streaming services with geo-restrictions). From a privacy standpoint, being detected as a VPN user still hides your real identity — websites know you\'re using a VPN but don\'t know who you are.',
      },
      {
        question: 'Which VPNs are hardest to detect?',
        answer: 'Residential VPNs (which route traffic through real home IP addresses rather than datacenters) are the hardest to detect. Providers like Mullvad, ProtonVPN, and some NordVPN obfuscated servers also offer obfuscation features that make VPN traffic look like regular HTTPS traffic. For most privacy use cases, any reputable VPN provides sufficient protection.',
      },
      {
        question: 'Does this tool check for WebRTC leaks?',
        answer: 'This tool checks whether your public IP (as seen by our server) is flagged as a VPN or proxy. WebRTC leaks happen inside your browser and can bypass the VPN at the browser level — our server-side check won\'t catch these. To test for WebRTC leaks, disable WebRTC in your browser settings or use a browser extension designed for leak testing.',
      },
    ],
  },
}
