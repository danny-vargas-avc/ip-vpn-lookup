<template>
  <main class="max-w-3xl mx-auto px-4 py-10">
    <Breadcrumb :crumbs="[{ label: 'Home', href: '/' }, { label: 'Terms of Use' }]" class="mb-6" />
    <h1 class="text-3xl font-bold text-slate-100 mb-2">Terms of Use</h1>
    <p class="text-slate-500 text-sm mb-8">Last updated: May 2026</p>

    <div class="space-y-6 text-slate-400 leading-relaxed">
      <section>
        <h2 class="text-lg font-semibold text-slate-200 mb-2">Use of this site</h2>
        <p>
          iplocator.dev is a free IP address lookup and VPN detection tool. You can use it for any personal
          purpose — checking your IP, verifying your VPN is masking it, or troubleshooting your network.
        </p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-slate-200 mb-2">Geolocation accuracy</h2>
        <p>
          IP-based geolocation is an approximation. The location you see is typically your ISP's regional
          routing point, not your physical address — accuracy is usually city-level at best. We rely on
          <a href="https://ip-api.com" target="_blank" rel="noopener" class="text-sky-400 hover:text-sky-300">ip-api.com</a>
          for the lookup; their database has the usual limitations of any IP geolocation service.
        </p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-slate-200 mb-2">VPN detection</h2>
        <p>
          The VPN/proxy detection is heuristic. It checks signals like ASN, hosting type, and known datacenter
          ranges. It will catch most common VPNs but can miss residential-IP VPNs or flag legitimate hosting
          customers. Treat the result as a strong hint, not a definitive verdict.
        </p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-slate-200 mb-2">Affiliate links</h2>
        <p>
          Some VPN provider links on this site are affiliate links. If you sign up via these links, the provider
          may pay us a commission. This does not change the price you pay or our editorial recommendations.
        </p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-slate-200 mb-2">Limitation of liability</h2>
        <p>
          iplocator.dev is provided "as is" with no warranty. We are not liable for decisions made based on
          IP or VPN-status results — verify with your VPN provider's own status page if it matters.
        </p>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
usePageMeta({
  title: 'Terms of Use — iplocator.dev',
  description: 'Terms of use for iplocator.dev. Free IP lookup and VPN detection tool, provided as-is with no warranty.',
  path: '/terms',
})
</script>
