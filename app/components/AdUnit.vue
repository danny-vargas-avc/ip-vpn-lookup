<template>
  <div v-if="showAd" class="w-full overflow-hidden bg-slate-900 rounded-xl" :style="{ minHeight: MIN_HEIGHTS[placement] }">
    <ins
      class="adsbygoogle block"
      :data-ad-client="adsenseId"
      :data-ad-slot="slot"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'

const props = defineProps<{
  slot: string
  placement: 'below-tool' | 'in-content'
}>()

const { public: { adsenseId, adsenseEnabled } } = useRuntimeConfig()

// Only render ad markup once the account is approved and real slot IDs are wired.
// Until then nothing renders — no empty placeholder boxes on review pages.
const showAd = computed(() => Boolean(adsenseEnabled && adsenseId))

const MIN_HEIGHTS: Record<typeof props.placement, string> = {
  'below-tool': '90px',
  'in-content': '250px',
}

onMounted(() => {
  if (showAd.value && typeof window !== 'undefined' && (window as any).adsbygoogle) {
    ;(window as any).adsbygoogle.push({})
  }
})
</script>
