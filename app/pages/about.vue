<template>
  <main class="max-w-2xl mx-auto px-4 py-12">
    <Breadcrumb :crumbs="[{ label: 'Home', href: '/' }, { label: 'About' }]" class="mb-6" />
    <h1 class="text-3xl font-bold text-slate-100 mb-6">About iplocator.dev</h1>
    <div class="space-y-4 text-slate-400 leading-relaxed">
      <p>
        I'm Danny Vargas, a software developer, and I built iplocator.dev because every "what's my IP" site I
        landed on was either covered in pop-ups pushing a VPN, or hiding the actual information behind three
        scroll-screens of SEO filler. I just wanted to see my public IP, my approximate location, my ISP, and
        whether the VPN I'd just turned on was actually working.
      </p>
      <p>
        So this site does that, fast. The page loads, your IP and geolocation are right there at the top, and
        below it is a VPN/proxy detection check that tells you whether your traffic looks like a residential
        connection or a known datacenter. The lookup happens via
        <a href="https://ip-api.com" target="_blank" rel="noopener" class="text-sky-400 hover:text-sky-300">ip-api.com</a>,
        and your IP is looked up in real time and shown only to you — I don't log or store it on my end.
      </p>
      <p>
        The pages here are written to actually explain what an IP address is, how geolocation works, and how to
        tell whether a VPN is really protecting you — not just to funnel you toward a product. Where I mention a
        VPN, I try to keep it neutral and educational. If I ever add provider links, any affiliate ones will be
        clearly disclosed, and I'll only point to services I've actually used. If something on the site is wrong,
        broken, or feels misleading,
        <NuxtLink to="/contact" class="text-sky-400 hover:text-sky-300">let me know</NuxtLink>.
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
usePageMeta({
  title: 'About iplocator.dev — Why I Built This',
  description: 'Why I built iplocator.dev: a fast, no-popup IP lookup and VPN detection tool. Powered by ip-api.com, no IPs logged on my end.',
  path: '/about',
})
</script>
