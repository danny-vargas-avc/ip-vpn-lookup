<template>
  <!--
    Monetization gate: the affiliate grid only renders once adsenseEnabled is
    flipped on (post-approval) AND real affiliate URLs are wired into data/vpns.ts.
    During AdSense review it renders nothing, so there are no dead CTA links or
    made-for-ads framing. The neutral VpnGuide section carries the VPN content.
  -->
  <div v-if="adsenseEnabled && vpnProviders.every(v => !v.href.startsWith('#'))">
    <h2 class="text-xl font-semibold text-slate-100 mb-2">Compare trusted VPN providers</h2>
    <p class="text-sm text-slate-400 mb-5">
      If you decide a VPN fits your needs, these are established providers with independently audited no-logs policies.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <VpnAffiliateCard
        v-for="vpn in vpnProviders"
        :key="vpn.name"
        v-bind="vpn"
        cta-text="Visit site"
      />
    </div>
    <p class="text-xs text-slate-600 mt-3">
      Affiliate disclosure: some links are affiliate links — I may earn a commission if you sign up through them, at no extra cost to you.
    </p>
  </div>
</template>

<script setup lang="ts">
import { vpnProviders } from '../../data/vpns'

const { public: { adsenseEnabled } } = useRuntimeConfig()
</script>
