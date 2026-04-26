<template>
  <main class="max-w-3xl mx-auto px-4 py-10 space-y-10">
    <div>
      <Breadcrumb :crumbs="crumbs" class="mb-4" />
      <h1 class="text-3xl font-bold text-slate-100 mb-2">{{ page.heading }}</h1>
      <p class="text-slate-400">{{ page.tagline }}</p>
    </div>

    <IpLookupWidget />

    <AdUnit slot="1234567891" placement="below-tool" />

    <div class="space-y-4">
      <p v-for="(paragraph, i) in bodyParagraphs" :key="i" class="text-slate-400 leading-relaxed">
        {{ paragraph }}
      </p>
    </div>

    <VpnAffiliateGrid :is-exposed="true" />

    <AdUnit slot="0987654322" placement="in-content" />

    <FaqSection :faqs="page.faqs" />

    <nav class="border-t border-slate-800 pt-6">
      <p class="text-xs text-slate-500 uppercase tracking-widest mb-3">Related</p>
      <div class="flex flex-wrap gap-3">
        <NuxtLink to="/" class="text-sm text-sky-400 hover:text-sky-300 transition-colors">IP Lookup →</NuxtLink>
        <NuxtLink to="/vpn-checker" class="text-sm text-sky-400 hover:text-sky-300 transition-colors">VPN Checker →</NuxtLink>
      </div>
    </nav>
  </main>
</template>

<script setup lang="ts">
import { pages } from '../../data/pages'

const page = pages['/what-is-my-ip']
const crumbs = [{ label: 'Home', href: '/' }, { label: 'What Is My IP' }]
const bodyParagraphs = page.body.trim().split('\n\n')

usePageMeta({ title: page.title, description: page.description, path: page.path })

const { injectWebApplication, injectFaqPage, injectBreadcrumbList } = useJsonLd()
injectWebApplication(page.heading, page.description, page.path)
injectFaqPage(page.faqs)
injectBreadcrumbList(crumbs)
</script>
