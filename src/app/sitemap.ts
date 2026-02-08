import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/about', '/services', '/why-choose-us', '/careers', '/employers', '/contact'];

  return routes.map((route) => ({
    url: `https://benbaxventures.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
