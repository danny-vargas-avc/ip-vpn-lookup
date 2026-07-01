<template>
  <div class="byline">
    <div class="byline-row">
      <span class="byline-avatar" aria-hidden="true">DV</span>
      <span class="byline-text">
        Written &amp; maintained by
        <NuxtLink to="/about" class="byline-link">Danny Vargas</NuxtLink>
      </span>
    </div>
    <div class="byline-meta">
      <span>Last updated <strong>{{ updated }}</strong></span>
      <span class="byline-dot">·</span>
      <span>
        Geolocation &amp; network data from
        <a href="https://ip-api.com" target="_blank" rel="noopener" class="byline-link">ip-api.com</a>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  updated?: string
}>(), {
  updated: 'January 2026',
})
</script>

<style scoped>
.byline {
  border-top: 1px solid #1e293b;
  border-bottom: 1px solid #1e293b;
  padding: 12px 0;
  margin: 8px 0 4px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.byline-row { display: flex; align-items: center; gap: 10px; }
.byline-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #0284c7;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  flex-shrink: 0;
}
.byline-text { font-size: 14px; color: #cbd5e1; }
.byline-meta {
  font-size: 12px;
  color: #64748b;
  padding-left: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}
.byline-dot { color: #334155; }
.byline-link { color: #38bdf8; text-decoration: none; }
.byline-link:hover { text-decoration: underline; }
</style>
