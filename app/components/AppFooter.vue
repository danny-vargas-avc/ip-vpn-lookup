<template>
  <footer class="bg-slate-900 border-t border-slate-800 mt-20">
    <div class="max-w-6xl mx-auto px-4 py-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <div>
          <h3 class="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Tools</h3>
          <ul class="space-y-2">
            <li v-for="link in toolLinks" :key="link.href">
              <NuxtLink
                :to="link.href"
                class="text-sm text-slate-400 hover:text-slate-100 transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Popular Searches</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                What is my IP address
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/vpn-checker" class="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                Is my VPN working
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/what-is-my-ip" class="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                Find my IP location
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/vpn-checker" class="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                Check VPN detection
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <div class="flex items-center gap-2 mb-4">
            <span class="inline-flex items-center justify-center w-6 h-6 rounded bg-sky-600 text-white text-xs font-bold">⊕</span>
            <span class="font-semibold text-slate-200 text-sm">IPLocator</span>
          </div>
          <p class="text-sm text-slate-500 leading-relaxed">
            Free IP address lookup and VPN detection. See your public IP, location, ISP, and whether your VPN is masking your real identity.
          </p>
        </div>

      </div>

      <div class="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
        <span>© {{ new Date().getFullYear() }} iplocator.dev</span>
        <nav class="flex gap-4">
          <NuxtLink to="/privacy" class="hover:text-slate-400 transition-colors">Privacy</NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const toolLinks = [
  { href: '/', label: 'IP Address Lookup' },
  { href: '/what-is-my-ip', label: 'What Is My IP' },
  { href: '/vpn-checker', label: 'VPN Checker' },
]
</script>
