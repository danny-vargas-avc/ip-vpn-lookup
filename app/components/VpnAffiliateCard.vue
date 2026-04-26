<template>
  <div class="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col gap-4 hover:border-slate-700 transition-colors">
    <div class="flex items-center justify-between gap-2">
      <span class="font-bold text-slate-100 text-lg">{{ name }}</span>
      <span v-if="badge" class="text-xs font-medium bg-sky-500/15 text-sky-400 border border-sky-500/30 px-2 py-0.5 rounded-full">
        {{ badge }}
      </span>
    </div>
    <p class="text-sm text-slate-400 leading-relaxed flex-1">{{ tagline }}</p>
    <a
      :href="href"
      target="_blank"
      rel="noopener sponsored"
      class="block text-center text-sm font-semibold py-2.5 px-4 rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors"
    >
      {{ ctaText }}
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  tagline: string
  ctaText: string
  href: string
  badge?: string
}>()
</script>
