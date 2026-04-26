export function usePageMeta(opts: { title: string; description: string; path: string }) {
  const { public: { siteUrl } } = useRuntimeConfig()
  const url = `${siteUrl}${opts.path}`

  useSeoMeta({
    title: opts.title,
    description: opts.description,
    ogTitle: opts.title,
    ogDescription: opts.description,
    ogUrl: url,
    ogType: 'website',
    twitterCard: 'summary',
  })

  return { url }
}
