<template>
  <header class="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
      <NuxtLink to="/" class="flex items-center gap-2.5 flex-shrink-0 group">
        <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-sky-600 text-white text-xs font-bold group-hover:bg-sky-500 transition-colors">
          ⊕
        </span>
        <span class="font-semibold text-slate-100 text-sm tracking-tight">IPLocator</span>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-0.5">
        <NuxtLink
          v-for="link in links"
          :key="link.href"
          :to="link.href"
          class="text-sm text-slate-400 hover:text-slate-100 hover:bg-slate-800 px-3 py-1.5 rounded-md transition-colors"
          active-class="text-sky-400 bg-sky-500/10 hover:bg-sky-500/10 hover:text-sky-400"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <NuxtLink to="/" class="md:hidden text-sm font-medium text-sky-400">
        My IP
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
const links = [
  { href: '/', label: 'My IP' },
  { href: '/what-is-my-ip', label: 'What Is My IP' },
  { href: '/vpn-checker', label: 'VPN Checker' },
]
</script>
