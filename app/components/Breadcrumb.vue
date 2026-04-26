<template>
  <nav aria-label="Breadcrumb">
    <ol class="flex items-center flex-wrap gap-1 text-sm text-slate-500">
      <li v-for="(crumb, i) in crumbs" :key="i" class="flex items-center gap-1">
        <span v-if="i > 0" aria-hidden="true" class="text-slate-700">/</span>
        <NuxtLink
          v-if="crumb.href"
          :to="crumb.href"
          class="hover:text-slate-300 transition-colors"
        >
          {{ crumb.label }}
        </NuxtLink>
        <span v-else class="text-slate-300" aria-current="page">{{ crumb.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  crumbs: Array<{ label: string; href?: string }>
}>()
</script>
