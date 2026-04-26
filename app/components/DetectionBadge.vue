<template>
  <span
    class="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full"
    :class="detected
      ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
      : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'"
  >
    <span>●</span>
    {{ detected ? labelOn : labelOff }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  detected: boolean
  labelOn: string
  labelOff: string
}>()
</script>
