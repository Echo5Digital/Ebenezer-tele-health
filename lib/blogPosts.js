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

export const blogPosts = [
  {
    slug: "test-echo5-flatdata-connectivity-check",
    title: "Test: Echo5 FlatData Connectivity Check",
    category: "Fitness & Lifestyle",
    date: "September 23, 2026",
    author: "Ebenezer Health Clinic",
    excerpt: "A real end-to-end test publish for the new flatData publish mode.",
    image: "/blog-images/test-echo5-flatdata-connectivity-check/featured.jpg",
    bodyImage: "/blog-images/test-echo5-flatdata-connectivity-check/featured.jpg",
    bodyImageAlt: "Test: Echo5 FlatData Connectivity Check",
    featured: false,
    tags: ["wellness routine"],
    sections: [
      {
        "heading": "Start With Hydration",
        "body": "After sleeping for several hours, your body is naturally dehydrated. Drinking a glass of water first thing in the morning helps kickstart your metabolism and rehydrate your cells before you reach for coffee."
      },
      {
        "heading": "Get Some Morning Light",
        "body": "Exposure to natural light early in the day helps regulate your circadian rhythm, which affects sleep quality, mood, and energy levels throughout the day. Step outside for five to ten minutes if possible. Open your blinds as soon as you wake up. Sit near a window while you eat breakfast."
      },
      {
        "heading": "Move Your Body",
        "body": "You don't need an intense workout to benefit from morning movement. Light stretching, a short walk, or a few minutes of yoga can help wake up your muscles and improve circulation."
      }
    ],
    callout: {
      "heading": "Test Echo5 Connectivity Check",
      "body": "This is a real test publish used to verify the flatData publish mode end-to-end for Ebenezer Health Clinic — the AI blog publishing integration built this session. This test post will be removed after verification."
    },
  },
  {
    slug: 'small-habits-that-make-a-big-difference',
    title: 'Small Habits That Make a Big Difference',
    category: 'Fitness & Lifestyle',
    date: 'August 26, 2026',
    author: 'Ebenezer Health Clinic',
    excerpt:
      'Healthy living doesn’t have to be complicated. Discover simple daily habits that can boost your energy, improve your mood, and support long-term wellness.',
    image: '/blog-fitness-habits.jpg',
    featured: false,
  },
  {
    slug: 'fuel-your-body-with-better-choices',
    title: 'Fuel Your Body with Better Choices',
    category: 'Nutrition',
    date: 'August 20, 2026',
    author: 'Ebenezer Health Clinic',
    excerpt:
      'Learn how balanced nutrition can help you feel stronger, think clearer, and support your overall health — one meal at a time.',
    image: '/blog-nutrition-choices.jpg',
    featured: false,
  },
  {
    slug: 'the-power-of-good-sleep',
    title: 'The Power of Good Sleep',
    category: 'Mental Health',
    date: 'August 14, 2026',
    author: 'Ebenezer Health Clinic',
    excerpt:
      'Quality sleep is essential for your physical health, mental clarity, and emotional balance. Here’s how to improve your sleep habits and wake up refreshed.',
    image: '/blog-good-sleep.jpg',
    featured: false,
  },
  {
    slug: 'why-preventive-care-matters',
    title: 'Why Preventive Care Matters',
    category: 'Preventive Care',
    date: 'August 14, 2026',
    author: 'Ebenezer Health Clinic',
    readTime: '5 min read',
    excerpt:
      'Preventive care helps you stay ahead of health problems, catch issues early, and live a longer, healthier life.',
    image: '/blog-preventive-care.jpg',
    bodyImage: '/blog-preventive-care-visit.jpg',
    bodyImageAlt: 'A doctor consulting with a patient during a preventive care checkup',
    featured: true,
    tags: ['Preventive Care', 'Health Tips', 'Wellness', 'Primary Care'],
    sections: [
      {
        heading: 'Helps You Catch Problems Early',
        body:
          'Many health conditions, like high blood pressure, diabetes, and certain cancers, don’t show symptoms at first. Regular checkups and screenings can help detect these issues early, when they’re easier to treat and manage.',
      },
      {
        heading: 'Keeps You Healthier for Longer',
        body:
          'Preventive care includes vaccines, screenings, and lifestyle guidance — all of which work together to reduce your risk of serious illness and help you enjoy a longer, healthier life.',
      },
      {
        heading: 'Saves You Time and Money',
        body:
          'By preventing health problems before they become serious, you can avoid costly treatments, hospital visits, and time away from work or family.',
      },
      {
        heading: 'Supports Your Overall Well-Being',
        body:
          'Preventive care isn’t just about avoiding illness — it’s about helping you feel your best. From better energy and sleep to improved mental health, small steps make a big difference.',
      },
    ],
    callout: {
      heading: 'Your health is your greatest asset.',
      body:
        'Take charge today with preventive care and give yourself the best chance for a healthier tomorrow.',
    },
  },
]

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
