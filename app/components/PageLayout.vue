<template>
  <main class="max-w-3xl mx-auto px-4 py-10 space-y-10">
    <div>
      <Breadcrumb :crumbs="crumbs" class="mb-4" />
      <h1 class="text-3xl font-bold text-slate-100 mb-2">{{ page.heading }}</h1>
      <p class="text-slate-400 mb-4">{{ page.tagline }}</p>
      <p class="text-slate-400 leading-relaxed">{{ page.intro }}</p>
    </div>

    <IpLookupWidget />

    <AdUnit :slot="page.adSlots.belowTool" placement="below-tool" />

    <article class="space-y-8">
      <section v-for="section in page.sections" :key="section.heading" class="space-y-3">
        <h2 class="text-xl font-semibold text-slate-100">{{ section.heading }}</h2>
        <p
          v-for="(paragraph, i) in section.paragraphs"
          :key="i"
          class="text-slate-400 leading-relaxed"
        >
          {{ paragraph }}
        </p>
      </section>
    </article>

    <AdUnit :slot="page.adSlots.inContent" placement="in-content" />

    <VpnAffiliateGrid v-if="page.vpnSection" />

    <AuthorByline />

    <SourcesDisclaimer />

    <FaqSection :faqs="page.faqs" />

    <nav class="border-t border-slate-800 pt-6">
      <p class="text-xs text-slate-500 uppercase tracking-widest mb-3">Related</p>
      <div class="flex flex-wrap gap-3">
        <NuxtLink
          v-for="rel in relatedPages"
          :key="rel.path"
          :to="rel.path"
          class="text-sm text-sky-400 hover:text-sky-300 transition-colors"
        >
          {{ rel.breadcrumb }} →
        </NuxtLink>
      </div>
    </nav>
  </main>
</template>

<script setup lang="ts">
import { pages } from '../../data/pages'

const props = defineProps<{ path: string }>()

const page = pages[props.path]
const crumbs = [{ label: 'Home', href: '/' }, { label: page.breadcrumb }]
const relatedPages = Object.values(pages).filter(p => p.path !== props.path)

usePageMeta({ title: page.title, description: page.description, path: page.path })

const { injectWebApplication, injectFaqPage, injectBreadcrumbList } = useJsonLd()
injectWebApplication(page.heading, page.description, page.path)
injectFaqPage(page.faqs)
injectBreadcrumbList(crumbs)
</script>
