<template>
  <ClientOnly>
    <div ref="mapEl" class="w-full h-48 rounded-xl overflow-hidden border border-slate-800" />
    <template #fallback>
      <div class="w-full h-48 rounded-xl bg-slate-900 border border-slate-800 animate-pulse" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { Map } from 'leaflet'

const props = defineProps<{ lat: number; lon: number }>()

const mapEl = ref<HTMLElement | null>(null)
let mapInstance: Map | null = null

onMounted(async () => {
  if (!mapEl.value) return
  const L = (await import('leaflet')).default
  if (!mapEl.value) return  // guard against unmount during async import
  mapInstance = L.map(mapEl.value, { zoomControl: false, attributionControl: false }).setView([props.lat, props.lon], 10)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapInstance)
  L.circleMarker([props.lat, props.lon], {
    radius: 8,
    color: '#0ea5e9',
    fillColor: '#0ea5e9',
    fillOpacity: 0.5,
    weight: 2,
  }).addTo(mapInstance)
})

onUnmounted(() => {
  mapInstance?.remove()
  mapInstance = null
})
</script>
