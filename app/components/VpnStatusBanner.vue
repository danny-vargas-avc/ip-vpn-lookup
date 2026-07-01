<template>
  <div
    class="rounded-xl border px-5 py-4 flex items-start gap-3"
    :class="isExposed
      ? 'bg-sky-500/10 border-sky-500/30'
      : 'bg-emerald-500/10 border-emerald-500/30'"
  >
    <span class="text-2xl flex-shrink-0 mt-0.5">{{ isExposed ? 'ℹ️' : '🛡️' }}</span>
    <div>
      <p class="font-semibold text-sm" :class="isExposed ? 'text-sky-300' : 'text-emerald-300'">
        {{ isExposed ? 'No VPN or proxy detected' : 'VPN, proxy, or datacenter detected' }}
      </p>
      <p class="text-sm mt-0.5" :class="isExposed ? 'text-sky-400/80' : 'text-emerald-400/80'">
        {{ isExposed
          ? 'This looks like a regular ISP connection. The IP and approximate location above are what websites you visit can see — which is normal for everyday browsing.'
          : 'This IP is flagged as a VPN, proxy, or datacenter address, so your real ISP address isn\'t directly visible to the sites you visit.'
        }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ isExposed: boolean }>()
</script>
