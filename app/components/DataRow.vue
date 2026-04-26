<template>
  <div class="px-4 py-3 flex items-center justify-between gap-2">
    <span class="text-xs text-slate-500 uppercase tracking-wider font-medium flex-shrink-0">{{ label }}</span>
    <span class="text-sm text-slate-200 text-right font-mono truncate">{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  value: string
}>()
</script>
