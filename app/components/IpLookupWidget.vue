<template>
  <div>
    <!-- Loading skeleton -->
    <div v-if="status === 'idle' || status === 'pending'" class="space-y-4">
      <div class="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden animate-pulse">
        <div class="px-6 py-5 border-b border-slate-800">
          <div class="h-3 w-24 bg-slate-800 rounded mb-2" />
          <div class="h-9 w-48 bg-slate-800 rounded" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-0">
          <div v-for="i in 8" :key="i" class="px-4 py-3 border-b border-slate-800">
            <div class="h-3 w-full bg-slate-800 rounded" />
          </div>
        </div>
      </div>
      <div class="w-full h-48 rounded-xl bg-slate-900 border border-slate-800 animate-pulse" />
    </div>

    <!-- Error state -->
    <div v-else-if="status === 'error'" class="bg-slate-900 border border-red-500/30 rounded-2xl p-8 text-center">
      <p class="text-slate-300 font-medium mb-1">Unable to detect your IP address</p>
      <p class="text-sm text-slate-500 mb-4">The lookup service returned an error. Please try again.</p>
      <button
        class="text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors border border-sky-500/30 px-4 py-2 rounded-lg"
        @click="refresh()"
      >
        Try again
      </button>
    </div>

    <!-- Result state -->
    <div v-else-if="data?.status === 'success'" class="space-y-4">
      <IpResultCard :data="data" />
      <IpMiniMap :lat="data.lat" :lon="data.lon" />
      <VpnStatusBanner :is-exposed="isExposed" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IpData } from '../../data/types'

// server: false — detect the client's IP, not the server's (SSR would return localhost)
const { data, status, refresh } = useFetch<IpData>('/api/lookup', { server: false })

const isExposed = computed(() => {
  if (!data.value) return true
  return !data.value.proxy && !data.value.hosting
})
</script>
