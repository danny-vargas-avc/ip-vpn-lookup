<template>
  <main class="max-w-3xl mx-auto px-4 py-10">
    <Breadcrumb :crumbs="[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]" class="mb-6" />
    <h1 class="text-3xl font-bold text-slate-100 mb-2">Privacy Policy</h1>
    <p class="text-slate-500 text-sm mb-8">Last updated: April 2026</p>

    <div class="space-y-8 text-slate-400 leading-relaxed">
      <section>
        <h2 class="text-lg font-semibold text-slate-200 mb-2">What this site does</h2>
        <p>iplocator.dev is a free IP address lookup and VPN detection tool. When you visit, your browser calls our API endpoint which queries ip-api.com to return geolocation and network data about your IP address. This data is displayed to you and is not stored by this site.</p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-slate-200 mb-2">Information we do not collect</h2>
        <p>We do not log, store, or transmit your IP address to any database we control. We do not use cookies for tracking. We do not build profiles of visitors.</p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-slate-200 mb-2">Third-party services</h2>
        <ul class="list-disc list-inside space-y-1 mt-2">
          <li><strong class="text-slate-300">ip-api.com</strong> — performs the IP lookup on our behalf. Their <a href="https://ip-api.com/docs/legal" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:text-sky-300">privacy policy</a> governs how they handle data.</li>
          <li><strong class="text-slate-300">Google Analytics</strong> — we use GA4 to measure aggregate traffic (pages visited, session duration). No personally identifiable information is shared with Google through this tool.</li>
          <li><strong class="text-slate-300">Google AdSense</strong> — we display ads. Google may use cookies to serve relevant ads. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:text-sky-300">Google's privacy policy</a>.</li>
          <li><strong class="text-slate-300">VPN affiliate links</strong> — links to NordVPN, ExpressVPN, and Surfshark are affiliate links. Clicking them may set a cookie on those third-party sites.</li>
        </ul>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-slate-200 mb-2">Affiliate disclosure</h2>
        <p>This site participates in affiliate programs. If you sign up for a VPN through our links, we may receive a commission at no additional cost to you. This does not affect our recommendations.</p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-slate-200 mb-2">Contact</h2>
        <p>Questions about this policy? You can find contact details on the <NuxtLink to="/" class="text-sky-400 hover:text-sky-300">homepage</NuxtLink>.</p>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
usePageMeta({
  title: 'Privacy Policy — iplocator.dev',
  description: 'Privacy policy for iplocator.dev. We do not store your IP address. Learn how this tool handles your data.',
  path: '/privacy',
})
</script>
