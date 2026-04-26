import type { Faq } from '../../data/types'

export function useJsonLd() {
  const { public: { siteUrl } } = useRuntimeConfig()

  function injectWebApplication(name: string, description: string, path: string) {
    const url = `${siteUrl}${path}`
    useHead({
      link: [{ rel: 'canonical', href: url }],
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name,
          description,
          url,
          applicationCategory: 'NetworkApplication',
          operatingSystem: 'Any',
          inLanguage: 'en-US',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        }),
      }],
    })
  }

  function injectFaqPage(faqs: Faq[]) {
    if (!faqs.length) return
    useHead({
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }),
      }],
    })
  }

  function injectBreadcrumbList(crumbs: Array<{ label: string; href?: string }>) {
    useHead({
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: crumbs.map((crumb, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: crumb.label,
            ...(crumb.href ? { item: siteUrl + crumb.href } : {}),
          })),
        }),
      }],
    })
  }

  return { injectWebApplication, injectFaqPage, injectBreadcrumbList }
}
