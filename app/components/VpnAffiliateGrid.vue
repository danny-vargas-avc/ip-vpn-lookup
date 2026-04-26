<template>
  <div>
    <h2 class="text-xl font-semibold text-slate-100 mb-2">
      {{ isExposed ? 'Protect yourself with a trusted VPN' : 'Compare top VPN providers' }}
    </h2>
    <p class="text-sm text-slate-400 mb-5">
      {{ isExposed
        ? 'Hide your IP address and encrypt your connection. These providers are trusted by millions.'
        : 'Already using a VPN? See how your current provider stacks up against the top options.'
      }}
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <VpnAffiliateCard
        v-for="vpn in vpns"
        :key="vpn.name"
        v-bind="vpn"
        :cta-text="isExposed ? 'Get Protected' : 'Compare Plans'"
      />
    </div>
    <p class="text-xs text-slate-600 mt-3">
      Affiliate disclosure: we may earn a commission if you sign up through these links, at no extra cost to you.
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ isExposed: boolean }>()

// PLACEHOLDER: replace hrefs with real affiliate URLs before launch
const vpns = [
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
</script>
