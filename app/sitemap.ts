import { MetadataRoute } from 'next';
import { getAllCategories, getSortedPostsData } from '@/lib/posts';

export const dynamic = 'force-static';

const BASE_URL = 'https://se-health-lab.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData();
  const categories = getAllCategories();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/posts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const categoryEntries: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...categoryEntries,
    ...postEntries,
  ];
}
