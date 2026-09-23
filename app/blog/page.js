import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Calendar, HeartPulse, Search, User } from 'lucide-react'
import {
  getAllPosts,
  getCategoryCounts,
  getFeaturedPost,
  getRecentPosts,
} from '@/lib/blogPosts'

export const metadata = {
  title: {
    absolute: 'Health & Wellness Blog | Ebenezer Health Clinic — OKC',
  },
  description:
    'Practical health tips, nutrition advice, and wellness insights from Ebenezer Health Clinic — serving Oklahoma City with in-person and telehealth care.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/blog',
  },
}

const blogPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Ebenezer Health Clinic Blog',
  url: 'https://www.ebenezerhealthclinic.com/blog',
  description:
    'Practical tips, expert advice, and encouraging insights to help you feel your best — mind, body, and spirit.',
  publisher: { '@id': 'https://www.ebenezerhealthclinic.com/#organization' },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const heroPost = posts[0]
  const latestPosts = posts.slice(0, 3)
  const featuredPost = getFeaturedPost()
  const recentPosts = getRecentPosts(heroPost?.slug, 3)
  const categories = getCategoryCounts()

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageSchema) }}
      />

      {/* ════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden border-b border-gray-100 -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
        style={{
          backgroundImage: "url('/blog-hero-banner.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Color overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(239,246,252,0.55)' }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span style={{ color: 'var(--navy)' }} className="font-medium">Blog</span>
          </nav>

          <div className="max-w-2xl">
            <Badge
              variant="mint"
              className="mb-4 text-xs font-bold uppercase tracking-widest"
            >
              {heroPost?.category}
            </Badge>
            <h1
              className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: 'var(--navy)' }}
            >
              Simple Ways to Support Your Health Every Day
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-xl">
              Practical tips, expert advice, and encouraging insights to help
              you feel your best — mind, body, and spirit.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <div
                className="h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(26,166,183,0.12)' }}
              >
                <User className="h-4 w-4" style={{ color: 'var(--primary)' }} aria-hidden="true" />
              </div>
              <span>By {heroPost?.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          MAIN CONTENT — articles grid + sidebar
      ════════════════════════════════════════════════════════ */}
      <section className="section-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            {/* ── Main column ─────────────────────────────────── */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-8"
                style={{ color: 'var(--navy)' }}
              >
                Latest Articles
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {latestPosts.map((post) => (
                  <ArticleCard key={post.slug} post={post} />
                ))}
              </div>

              {featuredPost && (
                <>
                  <h2
                    className="text-2xl md:text-3xl font-bold mb-8"
                    style={{ color: 'var(--navy)' }}
                  >
                    Featured Article
                  </h2>
                  <FeaturedArticleCard post={featuredPost} />
                </>
              )}
            </div>

            {/* ── Sidebar ──────────────────────────────────────── */}
            <aside className="space-y-8">
              {/* Search */}
              <form
                action="/blog"
                className="relative"
                role="search"
                aria-label="Search articles"
              >
                <label htmlFor="blog-search" className="sr-only">Search articles</label>
                <input
                  id="blog-search"
                  type="search"
                  name="q"
                  placeholder="Search articles..."
                  className="w-full rounded-xl border border-gray-200 py-3 pl-4 pr-11 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                >
                  <Search className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>

              {/* Categories */}
              <div>
                <h3
                  className="text-sm font-bold uppercase tracking-widest mb-4"
                  style={{ color: 'var(--navy)' }}
                >
                  Categories
                </h3>
                <ul className="space-y-1">
                  {categories.map((cat, i) => (
                    <li key={cat.name}>
                      <Link
                        href={i === 0 ? '/blog' : `/blog?category=${encodeURIComponent(cat.name)}`}
                        className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
                          i === 0
                            ? 'font-semibold'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        style={i === 0 ? { color: 'var(--primary)', backgroundColor: 'rgba(26,166,183,0.08)' } : {}}
                      >
                        {cat.name}
                        <span
                          className="text-xs font-semibold rounded-full h-5 min-w-[20px] px-1.5 flex items-center justify-center"
                          style={{
                            backgroundColor: i === 0 ? 'rgba(26,166,183,0.15)' : '#F3F4F6',
                            color: i === 0 ? 'var(--primary)' : '#6B7280',
                          }}
                        >
                          {cat.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div>
                <h3
                  className="text-sm font-bold uppercase tracking-widest mb-4"
                  style={{ color: 'var(--navy)' }}
                >
                  Recent Posts
                </h3>
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.slug}>
                      <Link href={`/blog/${post.slug}`} className="flex items-center gap-3 group">
                        <div className="relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div className="min-w-0">
                          <p
                            className="text-sm font-semibold leading-snug line-clamp-2 transition-colors group-hover:text-primary"
                            style={{ color: 'var(--navy)' }}
                          >
                            {post.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                            <Calendar className="h-3 w-3" aria-hidden="true" />
                            {post.date}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA card */}
              <div
                className="rounded-2xl p-6 text-center"
                style={{ backgroundColor: 'var(--cream)' }}
              >
                <div
                  className="mx-auto h-12 w-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(26,166,183,0.15)' }}
                >
                  <HeartPulse className="h-6 w-6" style={{ color: 'var(--primary)' }} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--navy)' }}>
                  Find the Right Care for You
                </h3>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  Our team is here to support your health journey with
                  compassionate, personalized care.
                </p>
                <a
                  href="https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=RThiMDN3R1ZQUGZlYytLRUxqQ0UrZz09&lid=aFhJc2tsSlJuZjdqU0tVT1N5TWxXQT09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-sm"
                >
                  Book Your Visit
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          NEWSLETTER
      ════════════════════════════════════════════════════════ */}
      <section className="section-light pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl px-6 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center gap-8 md:gap-10"
            style={{ backgroundColor: 'var(--cream)' }}
          >
            <div className="flex items-start gap-4 flex-1">
              <div
                className="h-11 w-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(26,166,183,0.15)' }}
                aria-hidden="true"
              >
                <ArrowRight className="h-5 w-5 -rotate-45" style={{ color: 'var(--primary)' }} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2" style={{ color: 'var(--navy)' }}>
                  Get Health Tips &amp; Updates
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md">
                  Sign up for our newsletter and receive the latest health
                  tips, clinic updates, and wellness advice — straight to your
                  inbox.
                </p>
              </div>
            </div>

            <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Enter your email address"
                className="rounded-lg border border-gray-200 px-4 py-3 text-sm w-full sm:w-72 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              />
              <button type="submit" className="btn-primary text-sm whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

function ArticleCard({ post }) {
  return (
    <article className="rounded-2xl border border-gray-100 overflow-hidden bg-white shadow-sm">
      <Link href={`/blog/${post.slug}`} className="block relative aspect-[4/3]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </Link>
      <div className="p-5">
        <Badge variant="mint" className="mb-3 text-[11px] font-bold uppercase tracking-widest">
          {post.category}
        </Badge>
        <h3 className="text-lg font-bold mb-2 leading-snug">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors" style={{ color: 'var(--navy)' }}>
            {post.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors hover:gap-2.5"
          style={{ color: 'var(--primary)' }}
        >
          Read Article
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}

function FeaturedArticleCard({ post }) {
  return (
    <article className="rounded-2xl border border-gray-100 overflow-hidden bg-white shadow-sm grid grid-cols-1 sm:grid-cols-[280px_1fr]">
      <Link href={`/blog/${post.slug}`} className="relative aspect-[4/3] sm:aspect-auto sm:h-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 280px, 100vw"
        />
      </Link>
      <div className="p-6 flex flex-col justify-center">
        <Badge variant="mint" className="mb-3 self-start text-[11px] font-bold uppercase tracking-widest">
          {post.category}
        </Badge>
        <h3 className="text-xl font-bold mb-2 leading-snug">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors" style={{ color: 'var(--navy)' }}>
            {post.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors hover:gap-2.5"
          style={{ color: 'var(--primary)' }}
        >
          Read Article
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
