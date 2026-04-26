<template>
  <div class="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
    <!-- IP address hero -->
    <div class="px-6 py-5 border-b border-slate-800">
      <p class="text-xs font-medium text-slate-500 uppercase tracking-widest mb-1">Your IP Address</p>
      <p class="text-3xl font-mono font-bold text-slate-100 tracking-tight">{{ data.query }}</p>
    </div>

    <!-- Data grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
      <div class="divide-y divide-slate-800">
        <DataRow label="Location" :value="`${data.city}, ${data.regionName}`" />
        <DataRow label="Country" :value="`${countryFlag} ${data.country}`" />
        <DataRow label="Timezone" :value="data.timezone" />
        <DataRow label="ISP" :value="data.isp" />
      </div>
      <div class="divide-y divide-slate-800">
        <DataRow label="Organization" :value="data.org || '—'" />
        <DataRow label="ASN" :value="data.as || '—'" />
        <div class="px-4 py-3 flex items-center justify-between gap-2">
          <span class="text-xs text-slate-500 uppercase tracking-wider font-medium">VPN / Proxy</span>
          <DetectionBadge :detected="data.proxy" label-on="Detected" label-off="Not detected" />
        </div>
        <div class="px-4 py-3 flex items-center justify-between gap-2">
          <span class="text-xs text-slate-500 uppercase tracking-wider font-medium">Datacenter</span>
          <DetectionBadge :detected="data.hosting" label-on="Yes" label-off="No" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IpData } from '../../data/types'

const props = defineProps<{ data: IpData }>()

const countryFlag = computed(() => {
  const code = props.data.countryCode
  if (!code || code.length !== 2) return '🌍'
  return code.toUpperCase().replace(/./g, c => String.fromCodePoint(0x1F1E6 - 65 + c.charCodeAt(0)))
})
</script>
