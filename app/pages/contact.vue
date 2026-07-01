<template>
  <main class="max-w-2xl mx-auto px-4 py-12">
    <Breadcrumb :crumbs="[{ label: 'Home', href: '/' }, { label: 'Contact' }]" class="mb-6" />
    <h1 class="text-3xl font-bold text-slate-100 mb-6">Contact</h1>
    <div class="space-y-4 text-slate-400 leading-relaxed">
      <p>
        Wrong geolocation, VPN false-positive, or feedback on the site — send it over.
      </p>
      <p>
        <a href="mailto:dannyvargashb@gmail.com" class="text-sky-400 hover:text-sky-300 transition-colors">dannyvargashb@gmail.com</a>
      </p>
      <p class="text-sm text-slate-500">
        If you're reporting a wrong location, sharing your approximate city/region (not exact address — I don't
        need that) helps me confirm whether it's a database issue I should flag upstream to ip-api.com.
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
usePageMeta({
  title: 'Contact — iplocator.dev',
  description: 'Contact iplocator.dev about wrong geolocation, VPN false-positives, or site feedback. Email dannyvargashb@gmail.com.',
  path: '/contact',
})
</script>
