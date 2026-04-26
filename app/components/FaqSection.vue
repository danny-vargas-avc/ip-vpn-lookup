<template>
  <section aria-label="Frequently Asked Questions">
    <h2 class="text-xl font-semibold text-slate-100 mb-4">Frequently Asked Questions</h2>
    <div class="space-y-3">
      <details
        v-for="(faq, i) in faqs"
        :key="i"
        class="group border border-slate-800 rounded-lg bg-slate-900/50 hover:border-slate-700 transition-colors"
      >
        <summary class="flex items-center justify-between cursor-pointer px-4 py-3.5 font-medium text-slate-200 list-none">
          {{ faq.question }}
          <span class="ml-4 text-slate-600 group-open:rotate-180 transition-transform duration-200 flex-shrink-0">▾</span>
        </summary>
        <div class="px-4 pb-4 pt-1 text-slate-400 text-sm leading-relaxed">
          {{ faq.answer }}
        </div>
      </details>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Faq } from '../../data/types'

defineProps<{
  faqs: Faq[]
}>()
</script>
