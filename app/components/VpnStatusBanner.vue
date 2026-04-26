<template>
  <div
    class="rounded-xl border px-5 py-4 flex items-start gap-3"
    :class="isExposed
      ? 'bg-red-500/10 border-red-500/30'
      : 'bg-emerald-500/10 border-emerald-500/30'"
  >
    <span class="text-2xl flex-shrink-0 mt-0.5">{{ isExposed ? '⚠️' : '🛡️' }}</span>
    <div>
      <p class="font-semibold text-sm" :class="isExposed ? 'text-red-300' : 'text-emerald-300'">
        {{ isExposed ? 'Your IP address is exposed' : 'VPN detected — you\'re protected' }}
      </p>
      <p class="text-sm mt-0.5" :class="isExposed ? 'text-red-400/80' : 'text-emerald-400/80'">
        {{ isExposed
          ? 'Every website you visit can see your real IP address and approximate location. A VPN hides this in seconds.'
          : 'Your real IP is hidden from the sites you visit. See how your current provider compares to the best options.'
        }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ isExposed: boolean }>()
</script>
