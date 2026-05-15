<template>
  <div class="min-h-screen bg-slate-950 flex items-center justify-center px-4">
    <div class="max-w-lg text-center">
      <p class="text-sm font-mono text-sky-400 mb-3">{{ error?.statusCode || 404 }}</p>
      <h1 class="text-3xl font-bold text-slate-100 mb-3">
        {{ error?.statusCode === 404 ? 'Page not found' : 'Something went wrong' }}
      </h1>
      <p class="text-slate-400 mb-8 leading-relaxed">
        {{ error?.statusCode === 404
          ? "That URL isn't a page we have. Maybe try one of these:"
          : "An unexpected error. Try heading back home and reloading." }}
      </p>
      <div class="flex flex-wrap justify-center gap-2 mb-8">
        <NuxtLink to="/" class="text-sm bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-lg transition-colors">My IP</NuxtLink>
        <NuxtLink to="/vpn-checker" class="text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg transition-colors">VPN Checker</NuxtLink>
        <NuxtLink to="/what-is-my-ip" class="text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg transition-colors">What is my IP</NuxtLink>
      </div>
      <button @click="handleError" class="text-sm text-slate-500 hover:text-slate-300 underline transition-colors">
        Clear error and reload
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ error: { statusCode?: number; message?: string } | null }>()

const handleError = () => clearError({ redirect: '/' })
</script>
