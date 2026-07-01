import type { Faq } from './types'

export interface AdSlots {
  belowTool: string
  inContent: string
}

export interface ContentSection {
  heading: string
  paragraphs: string[]
}

export interface PageData {
  path: string
  breadcrumb: string
  title: string
  description: string
  heading: string
  tagline: string
  /** Short lead-in shown next to the lookup tool. */
  intro: string
  /** Main long-form, crawlable content. Distinct per page to avoid duplication. */
  sections: ContentSection[]
  /** Show the VPN guide + (gated) provider comparison. Only the VPN page does. */
  vpnSection?: boolean
  faqs: Faq[]
  adSlots: AdSlots
}

export const pages: Record<string, PageData> = {
  '/': {
    path: '/',
    breadcrumb: 'IP Lookup',
    title: 'What Is My IP Address? — Free IP Lookup & Geolocation',
    description: 'Instantly find your public IP address and see the city, ISP, and connection type it maps to. Free IP lookup — no sign-up, and your IP is never logged.',
    heading: 'What Is My IP Address?',
    tagline: 'Your public IP, location, ISP, and VPN status — detected in real time.',
    adSlots: { belowTool: '1234567890', inContent: '0987654321' },
    intro: `Your public IP address is the identifier your internet provider assigns to your connection, and it's the one piece of information every website you visit can read automatically — no permission needed. The lookup above shows you exactly what that looks like from the outside: your IP, the city and ISP it resolves to, and whether it's flagged as a VPN, proxy, or datacenter address.`,
    sections: [
      {
        heading: 'What your IP address reveals about you',
        paragraphs: [
          `An IP address on its own is just a number, but the databases built around it turn that number into a rough profile. The most common lookup returns your approximate location — usually accurate to your city or metro area, occasionally only to your region or country. It is not your street address: what the databases actually store is the location your ISP registered for a block of addresses, which is why the pin often lands on a datacenter or a neighbouring town rather than your house.`,
          `Beyond location, your IP reveals which internet provider you're using, the organisation that owns the address block (the "ASN"), and often the type of connection — home broadband, mobile carrier, business line, or a cloud datacenter. Advertisers and analytics networks use this to group visitors by region and provider; fraud-detection systems use it to spot logins coming from unexpected places or from known proxy ranges.`,
          `None of this identifies you by name. But combined with other signals your browser leaks — screen size, fonts, time zone, the sites you're logged into — an IP address is one more data point that can help a tracker recognise you across visits. That's the honest reason people care about it, and it's worth understanding rather than being alarmed about.`,
        ],
      },
      {
        heading: 'How this lookup works',
        paragraphs: [
          `When you open this page, your browser makes a request to our lookup endpoint. That request carries your public IP the same way it does for any site you visit. We pass the IP to ip-api.com, which returns the geolocation and network details you see, and we display them straight back to you. Your IP is looked up in real time and shown to you only — it isn't stored or logged on our side.`,
          `A quick guide to the fields: ISP is the provider selling you the connection; Organization is whoever owns the address block (often the same, sometimes a parent company or hosting firm); ASN is the routing identifier for that block. The "VPN / Proxy" flag is set when your IP appears in databases of known VPN and proxy services, and "Datacenter" is set when the address belongs to a hosting provider rather than a residential ISP — a common tell that traffic is coming through a server rather than a home connection.`,
          `Geolocation from an IP is an estimate, not a measurement. It comes from databases that map address ranges to places, and those records can be stale or coarse — especially for mobile networks and ISPs that route whole regions through a central hub. If the map looks wrong, that's usually why, not a bug in the lookup.`,
        ],
      },
      {
        heading: 'IP addresses and your privacy',
        paragraphs: [
          `For everyday browsing, your IP being visible is normal and unavoidable — servers need somewhere to send the pages you request, the same way the post needs a return address. The privacy question is about who gets to correlate that address over time, and how much else they can attach to it.`,
          `If you'd rather not expose your real IP — on public Wi-Fi, when a site is region-locked, or just as a matter of preference — a reputable VPN replaces it with the address of a server you connect through, and Tor routes it through several relays for stronger anonymity at the cost of speed. Both are legitimate tools with trade-offs; neither makes you invisible on its own. The VPN checker on this site tells you whether the address you're currently presenting is one that gets flagged as a VPN, which is a useful sanity check after you turn one on.`,
        ],
      },
    ],
    faqs: [
      {
        question: 'What is an IP address and why does it matter?',
        answer: 'An IP address (Internet Protocol address) is a numerical label assigned to every device connected to a network. Your public IP is what websites see when you visit them — it can reveal your approximate location, your ISP, and whether you\'re using a VPN. It matters for privacy because it can be used to group and track your activity across sites.',
      },
      {
        question: 'Can websites see my exact home address from my IP?',
        answer: 'No. An IP address reveals your approximate location — typically accurate to your city or region — not your street address. Your ISP knows which specific address corresponds to your IP, but websites only see the city-level geolocation. That said, your approximate location combined with other browser data can still help identify you.',
      },
      {
        question: 'Why does my detected location look wrong?',
        answer: 'IP geolocation is based on databases that map IP ranges to physical locations, and those databases can be outdated or imprecise — especially for mobile connections and ISPs that route traffic through regional hubs. Your IP might show the city of your ISP\'s server rather than your actual location.',
      },
      {
        question: 'Does using a VPN hide my real IP address?',
        answer: 'Yes — a VPN replaces your real IP with the IP of the server you\'re connected to, so websites see the server\'s address, not yours. However, DNS leaks or WebRTC leaks can expose your real IP even when the VPN is active. The VPN Checker on this site tells you whether your current IP is flagged as a VPN.',
      },
      {
        question: 'Does this tool store my IP address?',
        answer: 'No. Your IP is looked up in real time and displayed to you — it\'s not logged or stored by this site. The lookup itself is performed by ip-api.com; their privacy policy governs how they handle the request.',
      },
    ],
  },

  '/what-is-my-ip': {
    path: '/what-is-my-ip',
    breadcrumb: 'IP Address Guide',
    title: 'What Is an IP Address? IPv4, IPv6, Static & Dynamic Explained',
    description: 'A plain-English guide to IP addresses: public vs private, IPv4 vs IPv6, static vs dynamic, and how to find, change, or hide yours. See your live IP at the top.',
    heading: 'What Is an IP Address? A Practical Guide',
    tagline: 'Public vs private, IPv4 vs IPv6, static vs dynamic — and how to change or hide yours.',
    adSlots: { belowTool: '1234567891', inContent: '0987654322' },
    intro: `Your current public IP is shown above. If you're here to understand what that number actually is — the difference between the address your router shows the world and the one your laptop uses on your home network, or why your IP keeps changing — this guide walks through it in plain English.`,
    sections: [
      {
        heading: 'Public vs. private IP addresses',
        paragraphs: [
          `Most homes and offices have two kinds of IP address in play at once. The public IP — the one shown at the top of this page — is what your router presents to the wider internet, and it's shared by every device on your network. Private IPs (the familiar 192.168.x.x or 10.x.x.x addresses) are handed out by your router to each device behind it: your phone, your laptop, the smart TV.`,
          `Your router bridges the two using NAT (Network Address Translation), rewriting the "from" address on outgoing traffic so replies find their way back to the right device. That's why every device in your house appears to the outside world under a single public IP, and why a site can't tell your phone apart from your laptop by IP alone. This tool only ever sees the public address — it has no way to reach the private ones behind your router.`,
        ],
      },
      {
        heading: 'IPv4 vs. IPv6',
        paragraphs: [
          `IPv4 is the original format you'll recognise: four numbers from 0–255 separated by dots, like 203.0.113.42. It allows about 4.3 billion unique addresses — a number that sounded limitless in the 1980s and ran out years ago. To cope, providers lean heavily on NAT and address sharing, which is part of why so many people sit behind the same public IP.`,
          `IPv6 is the long-term fix: much longer addresses written in hexadecimal (like 2001:db8:85a3::8a2e:370:7334), with enough room to give every device its own address many times over. Adoption is well underway, and many connections now run "dual-stack" — IPv4 and IPv6 at the same time. This tool reports the IPv4 address your connection presents, which is still what the majority of sites log.`,
        ],
      },
      {
        heading: 'Dynamic vs. static IP addresses',
        paragraphs: [
          `Most home connections use a dynamic IP: your ISP leases you an address from a pool and can change it, typically when you reboot your router, when the lease expires, or during maintenance. That's normal and usually invisible — the address just quietly changes. It's also why the IP you see today may differ from the one you saw last week.`,
          `A static IP never changes and is usually something you pay extra for. Businesses want them for hosting servers, running mail, or whitelisting access to internal systems; most home users have no need for one. If you're not sure which you have, check the same IP over a few days — if it moves, it's dynamic. Note that some ISPs also use carrier-grade NAT (CGNAT), where even your "public" IP is shared with other customers, which can complicate hosting anything from home.`,
        ],
      },
      {
        heading: 'How to find, change, or hide your IP',
        paragraphs: [
          `Finding it is the easy part — it's at the top of this page. Changing it depends on your setup: on a dynamic connection, rebooting your router (or leaving it off for a while) often pulls a new address; if you need a specific change, your ISP can usually help. Static addresses only change if your provider reassigns them.`,
          `Hiding your IP is a different goal, and the tools differ by trade-off. A VPN routes your traffic through a server and presents that server's IP to the sites you visit — fast and convenient, and the most common choice. Tor bounces your traffic through several volunteer relays for much stronger anonymity, at a real cost to speed. Public proxies exist too, but free ones are often slow, unreliable, and untrustworthy for anything sensitive. Whichever you use, the VPN checker on this site is a quick way to confirm the address you're now presenting isn't your home one.`,
        ],
      },
      {
        heading: 'Why your detected IP or location can look off',
        paragraphs: [
          `A few things routinely surprise people. If your location is wrong by a city or more, it's almost always the geolocation database being coarse or stale for your address block, not a fault in the lookup. If you're on mobile data, your IP often resolves to your carrier's regional hub rather than where you're standing. If you have a VPN running that you forgot about, the tool will faithfully show the VPN's IP and location. And on some ISPs, CGNAT means the public IP you see is shared, so it may not behave the way a dedicated address would.`,
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the difference between IPv4 and IPv6?',
        answer: 'IPv4 is the traditional format (e.g., 192.168.1.1) — four numbers between 0–255 separated by dots, allowing about 4.3 billion addresses. IPv6 is the newer format (e.g., 2001:db8::1) with vastly more addresses. Most traffic still uses IPv4, but IPv6 adoption is growing and many connections run both at once. This tool shows your IPv4 address.',
      },
      {
        question: 'What is the difference between a public and a private IP?',
        answer: 'Your public IP is the single address your router presents to the internet, shared by every device on your network — that\'s the one shown here. Private IPs (like 192.168.x.x) are assigned by your router to each device behind it and aren\'t visible to outside websites. Your router translates between the two using NAT.',
      },
      {
        question: 'Can my IP address change?',
        answer: 'Yes. Most home connections use a dynamic IP, meaning your ISP can assign a new address at any time — usually when you restart your router or when the address lease expires. Some ISPs change IPs more often than others. Businesses and power users can pay for a static IP that never changes.',
      },
      {
        question: 'Is my IP the same on mobile data and Wi-Fi?',
        answer: 'No. When you switch from Wi-Fi to mobile data, your device gets a different public IP assigned by your mobile carrier. The location and ISP shown will also differ — mobile IPs often resolve to the carrier\'s regional hub rather than your exact location.',
      },
      {
        question: 'How do I hide my IP address?',
        answer: 'The most common way is a VPN, which routes your traffic through a server and presents that server\'s IP instead of yours. Tor offers stronger anonymity at the cost of speed by relaying your traffic through several nodes. Proxies also exist, but free public proxies should be avoided for anything sensitive.',
      },
    ],
  },

  '/vpn-checker': {
    path: '/vpn-checker',
    breadcrumb: 'VPN Checker',
    title: 'Is My VPN Working? — Free VPN Detection & Leak Check',
    description: 'Test whether your VPN is actually hiding your IP. See what websites detect about your connection, learn to spot DNS and WebRTC leaks, and verify your VPN works.',
    heading: 'Is My VPN Working?',
    tagline: 'Check whether websites can detect your VPN — and whether it\'s leaking your real IP.',
    vpnSection: true,
    adSlots: { belowTool: '1234567892', inContent: '0987654323' },
    intro: `The lookup above shows the IP and ISP that websites currently see for your connection. If your VPN is doing its job, that should be the VPN server's address and provider — not your home ISP. If your real ISP is showing while a VPN is on, something is leaking. Below is how to read the result and confirm your VPN is actually working.`,
    sections: [
      {
        heading: 'What "VPN detected" actually means',
        paragraphs: [
          `This checker looks at the public IP your connection presents and asks a simple question: is this address in a database of known VPN, proxy, or datacenter ranges? If it is, you'll see it flagged. That flag is how streaming services and some websites decide you're on a VPN and choose to block or challenge you.`,
          `A "detected" result isn't a problem for privacy — it means the site can tell you're using a VPN, but it still can't see who you are or where you really are. A "not detected" result is more nuanced than it sounds: it can mean the VPN's IP simply isn't in the database yet, that you're on a residential VPN routing through real home addresses, or — the case to watch for — that your real IP is showing because of a leak. The way to tell them apart is to check whether the ISP shown is your VPN provider or your home internet company.`,
        ],
      },
      {
        heading: 'Why a VPN can still leak your real IP',
        paragraphs: [
          `Turning a VPN on doesn't guarantee every request goes through the tunnel. The classic failure is a DNS leak: your traffic is encrypted, but the domain lookups that translate site names to addresses slip out through your ISP's resolver, so your ISP (and anyone watching it) can still see which sites you visit. Good VPNs route DNS through the tunnel and advertise "DNS leak protection" — worth confirming it's enabled in the settings.`,
          `WebRTC leaks are sneakier. WebRTC is a browser feature for real-time audio and video, and it can reveal your real IP directly to a web page, bypassing the VPN at the browser level. Because it happens in the browser rather than on the network, a server-side check like this one can't see it — you test for it with a dedicated WebRTC leak tool or by disabling WebRTC in your browser. Finally, if your kill switch isn't on, a dropped VPN connection silently reverts you to your normal IP without warning, and IPv6 traffic can escape a tunnel that only covers IPv4.`,
        ],
      },
      {
        heading: 'How to verify your VPN is working',
        paragraphs: [
          `Run through this quickly whenever you want to be sure. First, note your real IP and ISP with the VPN off (reload this page). Then connect the VPN and reload: the IP should change and the ISP should now be the VPN provider or a datacenter, not your home internet company. If the ISP still shows your home provider, you have a leak — check that the VPN actually connected and that its kill switch is on.`,
          `Next, run a dedicated DNS leak test and a WebRTC leak test — those cover the two paths this server-side check can't see. If all three agree (new IP, DNS through the tunnel, no WebRTC exposure), your VPN is doing what it's supposed to. It's worth repeating the check occasionally, since an app update or a settings change can quietly turn protection off.`,
        ],
      },
      {
        heading: 'How to choose a VPN, if you decide you need one',
        paragraphs: [
          `A VPN is a tool, not a magic privacy button, and the right one depends on what you're actually trying to do — stream region-locked content, avoid snooping on public Wi-Fi, or just reduce how easily you're profiled. A few things are worth looking for regardless. An independently audited no-logs policy matters more than marketing claims; a published third-party audit is the difference between "we promise" and "someone checked." The provider's jurisdiction affects what it can be compelled to hand over.`,
          `On the technical side, modern protocols like WireGuard are fast and well-regarded; built-in DNS leak protection and a reliable kill switch are close to essential; and support for the number of devices you actually use saves money. Speed and server locations matter if you're streaming. Free VPNs deserve real caution — running a VPN network costs money, and when you're not paying, the business model is often selling the very data you're trying to protect. If you already use a VPN, use the checker above to confirm it's genuinely masking your IP, not just showing a "connected" badge.`,
        ],
      },
    ],
    faqs: [
      {
        question: 'What does it mean if my VPN isn\'t detected?',
        answer: 'If your VPN is active but not detected, it could mean: (1) the VPN IP isn\'t in the detection database yet, (2) you\'re using a residential VPN that routes through real ISP addresses, or (3) there\'s a leak and your real IP is showing. Cross-check the ISP shown — if your VPN app says "connected" but this tool shows your home ISP, you have a leak.',
      },
      {
        question: 'What is a DNS leak and how does it affect my VPN?',
        answer: 'A DNS leak happens when your DNS queries (the lookups that translate domain names into IP addresses) bypass the VPN tunnel and go through your ISP\'s resolver. Your IP may be hidden, but your ISP can still see which sites you visit. Good VPNs include DNS leak protection — check that it\'s enabled in your VPN\'s settings.',
      },
      {
        question: 'Why is my VPN detected even though I want to stay anonymous?',
        answer: 'Detection means your IP is in a database of known VPN ranges — many sites use this to block VPN users, especially streaming services. From a privacy standpoint, being detected as a VPN user still hides your real identity: sites know you\'re using a VPN, but not who you are or where you really are.',
      },
      {
        question: 'Which VPNs are hardest to detect?',
        answer: 'Residential VPNs, which route traffic through real home IP addresses rather than datacenters, are hardest to detect. Some providers also offer obfuscation features that make VPN traffic look like ordinary HTTPS. For most privacy purposes, any reputable VPN provides sufficient protection — hard-to-detect matters mainly for bypassing strict geo-blocks.',
      },
      {
        question: 'Does this tool check for WebRTC leaks?',
        answer: 'No. This tool checks whether your public IP (as seen by our server) is flagged as a VPN or proxy. WebRTC leaks happen inside your browser and bypass the VPN at the browser level, so a server-side check can\'t catch them. To test for WebRTC leaks, use a dedicated WebRTC leak tool or disable WebRTC in your browser.',
      },
    ],
  },
}
