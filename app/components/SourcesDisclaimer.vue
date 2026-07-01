<template>
  <section class="sd">
    <h2 class="sd-title">How this lookup works &amp; where the data comes from</h2>
    <p class="sd-body">
      Your public IP is read from your connection at request time and looked up in real time — it is not
      logged or stored on this site. Geolocation, ISP, ASN, and the VPN/proxy and datacenter flags are
      returned by <a href="https://ip-api.com" target="_blank" rel="noopener">ip-api.com</a>, whose database
      maps IP ranges to locations and known networks. IP geolocation is an estimate, typically accurate to
      the city or region — not your street address — and can be coarse for mobile and shared connections.
    </p>

    <h3 class="sd-subtitle">Sources &amp; references</h3>
    <ul class="sd-sources">
      <li>
        <a href="https://ip-api.com/docs" target="_blank" rel="noopener">ip-api.com</a>
        — real-time IP geolocation, ISP/ASN, and proxy/hosting detection used by this tool
      </li>
      <li>
        <a href="https://www.rfc-editor.org/rfc/rfc791" target="_blank" rel="noopener">RFC 791 (IPv4)</a>
        &amp;
        <a href="https://www.rfc-editor.org/rfc/rfc8200" target="_blank" rel="noopener">RFC 8200 (IPv6)</a>
        — the internet standards that define IP addressing
      </li>
      <li>
        <a href="https://www.rfc-editor.org/rfc/rfc1918" target="_blank" rel="noopener">RFC 1918</a>
        — the private address ranges (10.x, 172.16–31.x, 192.168.x) used behind your router
      </li>
    </ul>

    <p class="sd-disclaimer">
      <strong>For information only.</strong> iplocator.dev is a free diagnostic tool. Detection results
      depend on third-party databases and can produce false positives or negatives; a "not detected" result
      is not a guarantee of anonymity. Nothing here is security or legal advice. Questions or a wrong result?
      <NuxtLink to="/about" class="sd-link">Read more about the site</NuxtLink> or
      <NuxtLink to="/contact" class="sd-link">get in touch</NuxtLink>.
    </p>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.sd {
  border: 1px solid #1e293b;
  border-radius: 12px;
  background: #0f172a;
  padding: 20px 22px;
}
.sd-title { font-size: 17px; font-weight: 600; color: #f1f5f9; margin-bottom: 8px; }
.sd-body { font-size: 14px; line-height: 1.65; color: #94a3b8; margin-bottom: 16px; }
.sd-body a { color: #38bdf8; text-decoration: none; }
.sd-body a:hover { text-decoration: underline; }
.sd-subtitle {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #64748b;
  margin-bottom: 8px;
}
.sd-sources { list-style: none; padding: 0; margin: 0 0 16px; font-size: 13px; color: #94a3b8; }
.sd-sources li { padding: 4px 0; border-bottom: 1px solid #1e293b; }
.sd-sources li:last-child { border-bottom: none; }
.sd-sources a { color: #38bdf8; text-decoration: none; font-weight: 500; }
.sd-sources a:hover { text-decoration: underline; }
.sd-disclaimer { font-size: 12.5px; line-height: 1.6; color: #8b97a8; }
.sd-link { color: #38bdf8; text-decoration: none; }
.sd-link:hover { text-decoration: underline; }
</style>
