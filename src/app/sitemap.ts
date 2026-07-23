import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/about', '/services', '/why-choose-us', '/careers', '/employers', '/restaurant', '/faq', '/testimonials', '/terms', '/privacy', '/contact'];

  return routes.map((route) => ({
    url: `https://benbaxlimitedcompany.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
