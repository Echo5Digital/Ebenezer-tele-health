// Blog content data, keyed by slug — plain JS data arrays, matching this
// repo's existing convention (see CREDENTIALS/VALUES in app/about/page.js)
// rather than introducing a CMS or MDX pipeline. New posts are appended
// here by the internal publishing system.

export const BLOG_CATEGORIES = [
  'Fitness & Lifestyle',
  'Nutrition',
  'Mental Health',
  "Women's Health",
  'Preventive Care',
]

export const blogPosts = []

export function getAllPosts() {
  return blogPosts
}

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug) || null
}

export function getFeaturedPost() {
  return blogPosts.find((p) => p.featured) || null
}

export function getRecentPosts(excludeSlug, limit = 3) {
  return blogPosts.filter((p) => p.slug !== excludeSlug).slice(0, limit)
}

export function getCategoryCounts() {
  const counts = BLOG_CATEGORIES.map((name) => ({
    name,
    count: blogPosts.filter((p) => p.category === name).length,
  }))
  return [{ name: 'All Posts', count: blogPosts.length }, ...counts]
}

