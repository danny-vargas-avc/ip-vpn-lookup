<template>
  <div class="min-h-screen bg-slate-950 flex flex-col">
    <NuxtRouteAnnouncer />
    <AppHeader />
    <div class="flex-1">
      <NuxtPage />
    </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
})
</script>
