const SITE_URL = 'https://iplocator.dev'

export function usePageMeta(opts: { title: string; description: string; path: string }) {
  const url = `${SITE_URL}${opts.path}`

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
