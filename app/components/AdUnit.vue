<template>
  <div class="w-full overflow-hidden bg-slate-900 rounded-xl" :style="{ minHeight: MIN_HEIGHTS[placement] }">
    <ins
      v-if="adsenseId"
      class="adsbygoogle block"
      :data-ad-client="adsenseId"
      :data-ad-slot="slot"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const props = defineProps<{
  slot: string
  placement: 'below-tool' | 'in-content'
}>()

const { public: { adsenseId } } = useRuntimeConfig()

const MIN_HEIGHTS: Record<typeof props.placement, string> = {
  'below-tool': '90px',
  'in-content': '250px',
}

onMounted(() => {
  if (adsenseId && typeof window !== 'undefined' && (window as any).adsbygoogle) {
    ;(window as any).adsbygoogle.push({})
  }
})
</script>
