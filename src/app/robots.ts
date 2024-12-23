import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ['*', 'Googlebot'],
        allow: ['/'],
      },
      {
        userAgent: 'Unnecesarrybot',
        disallow: ['/'],
      },
    ],
    sitemap: 'https://blog.burgeonadaire.com/sitemap.xml',
  }
}