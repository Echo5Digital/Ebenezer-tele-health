import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import {
  Calendar,
  Clock,
  Facebook,
  Instagram,
  HeartPulse,
  Search,
  User,
  ArrowRight,
} from 'lucide-react'
import {
  getAllPosts,
  getPostBySlug,
  getCategoryCounts,
  getRecentPosts,
} from '@/lib/blogPosts'
import { BOOKING_URL } from '@/lib/constants'

const SITE_URL = 'https://www.ebenezerhealthclinic.com'

// Accepts either the current shape (paragraphs: string[]) or the older
// single-string shape (body: string) still used by a few existing posts —
// avoids a one-time data migration for content published before paragraphs
// were split out.
function getParagraphs(entry) {
  if (entry?.paragraphs) return entry.paragraphs
  if (entry?.body) return [entry.body]
  return []
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return { title: 'Post Not Found | Ebenezer Health Clinic' }
  }
  return {
    title: { absolute: `${post.title} | Ebenezer Health Clinic` },
    description: post.excerpt,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
  }
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const recentPosts = getRecentPosts(post.slug, 4)
  const categories = getCategoryCounts()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Ebenezer Health Clinic' },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
  }

  const faqSchema = post.faqs?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* ════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden border-b border-gray-100 -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
        style={{ backgroundColor: 'var(--cream)' }}
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span aria-hidden="true">/</span>
            <span style={{ color: 'var(--navy)' }} className="font-medium">{post.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Text column */}
            <div>
              <Badge
                variant="mint"
                className="mb-4 text-xs font-bold uppercase tracking-widest"
              >
                {post.category}
              </Badge>
              <h1
                className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
                style={{ color: 'var(--navy)' }}
              >
                {post.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-xl">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <div
                    className="h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(26,166,183,0.12)' }}
                  >
                    <User className="h-4 w-4" style={{ color: 'var(--primary)' }} aria-hidden="true" />
                  </div>
                  By {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" style={{ color: 'var(--primary)' }} aria-hidden="true" />
                  {post.date}
                </span>
                {post.readTime && (
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" style={{ color: 'var(--primary)' }} aria-hidden="true" />
                    {post.readTime}
                  </span>
                )}
              </div>
            </div>

            {/* Hero image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] lg:aspect-[4/3]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          MAIN CONTENT — article body + sticky sidebar
      ════════════════════════════════════════════════════════ */}
      <section className="section-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
            {/* ── Main column ─────────────────────────────────── */}
            <div>
              {post.bodyImage && (
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-10">
                  <Image
                    src={post.bodyImage}
                    alt={post.bodyImageAlt || post.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, 100vw"
                  />
                </div>
              )}

              <div className="space-y-8 mb-10">
                {post.sections?.map((section, i) => (
                  <div key={section.heading}>
                    <h2
                      className="text-xl md:text-2xl font-bold mb-3 flex items-baseline gap-2.5"
                      style={{ color: 'var(--navy)' }}
                    >
                      <span style={{ color: 'var(--primary)' }}>{i + 1}.</span>
                      {section.heading}
                    </h2>
                    {section.cards ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        {section.cards.map((card) => (
                          <div
                            key={card.heading}
                            className="rounded-xl border border-gray-100 p-5"
                          >
                            <p className="font-bold text-sm mb-2" style={{ color: 'var(--navy)' }}>
                              {card.heading}
                            </p>
                            <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                              {getParagraphs(card).map((para, pi) => (
                                <p key={pi} dangerouslySetInnerHTML={{ __html: para }} />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-base text-gray-600 leading-relaxed space-y-4">
                        {getParagraphs(section).map((para, pi) => (
                          <p key={pi} dangerouslySetInnerHTML={{ __html: para }} />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {post.callout && (
                <div
                  className="rounded-2xl p-6 flex items-start gap-4 mb-10"
                  style={{ backgroundColor: 'var(--cream)' }}
                >
                  <div
                    className="h-11 w-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(26,166,183,0.15)' }}
                  >
                    <HeartPulse className="h-5 w-5" style={{ color: 'var(--primary)' }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold mb-1" style={{ color: 'var(--navy)' }}>
                      {post.callout.heading}
                    </p>
                    <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                      {getParagraphs(post.callout).map((para, pi) => (
                        <p key={pi} dangerouslySetInnerHTML={{ __html: para }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {post.faqs?.length > 0 && (
                <div className="mb-10">
                  <h2
                    className="text-xl md:text-2xl font-bold mb-4"
                    style={{ color: 'var(--navy)' }}
                  >
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {post.faqs.map((faq) => (
                      <details
                        key={faq.question}
                        className="group rounded-xl border border-gray-100 px-5 py-4 [&::-webkit-details-marker]:hidden"
                      >
                        <summary
                          className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-sm"
                          style={{ color: 'var(--navy)' }}
                        >
                          {faq.question}
                          <span
                            className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center text-base leading-none transition-transform group-open:rotate-45"
                            style={{ backgroundColor: 'rgba(26,166,183,0.1)', color: 'var(--primary)' }}
                            aria-hidden="true"
                          >
                            +
                          </span>
                        </summary>
                        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Share this article */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-gray-100">
                <span className="text-sm font-semibold" style={{ color: 'var(--navy)' }}>
                  Share this article:
                </span>
                <div className="flex items-center gap-2">
                  {[
                    {
                      Icon: Facebook,
                      label: 'Share on Facebook',
                      href: 'https://www.facebook.com/people/Ebenezer-Telehealth/61574508671023/',
                    },
                    {
                      Icon: Instagram,
                      label: 'Follow on Instagram',
                      href: 'https://www.instagram.com/ebenezertelehealth/',
                    },
                  ].map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="h-9 w-9 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: 'var(--navy)' }}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Tags */}
              {post.tags?.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mt-6">
                  <span className="text-sm font-semibold mr-1" style={{ color: 'var(--navy)' }}>
                    Tags:
                  </span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium rounded-full px-3 py-1.5"
                      style={{ backgroundColor: 'rgba(26,166,183,0.08)', color: 'var(--primary)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Author bio card */}
              <div className="mt-8 rounded-2xl border border-gray-100 p-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
                <div
                  className="h-14 w-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(26,166,183,0.12)' }}
                >
                  <HeartPulse className="h-6 w-6" style={{ color: 'var(--primary)' }} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <p className="font-bold" style={{ color: 'var(--navy)' }}>
                    Ebenezer Health Clinic
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Our team is here to provide compassionate, personalized
                    care for you and your family.
                  </p>
                </div>
                <Link
                  href="/blog"
                  className="btn-outline text-sm whitespace-nowrap self-start sm:self-center"
                >
                  View All Articles
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* ── Sidebar (sticky) ─────────────────────────────── */}
            <aside className="space-y-8 lg:sticky lg:top-[160px]">
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
                          cat.name === post.category
                            ? 'font-semibold'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        style={cat.name === post.category ? { color: 'var(--primary)', backgroundColor: 'rgba(26,166,183,0.08)' } : {}}
                      >
                        {cat.name}
                        <span
                          className="text-xs font-semibold rounded-full h-5 min-w-[20px] px-1.5 flex items-center justify-center"
                          style={{
                            backgroundColor: cat.name === post.category ? 'rgba(26,166,183,0.15)' : '#F3F4F6',
                            color: cat.name === post.category ? 'var(--primary)' : '#6B7280',
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
                  {recentPosts.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}`} className="flex items-center gap-3 group">
                        <div className="relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={p.image}
                            alt={p.title}
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
                            {p.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                            <Calendar className="h-3 w-3" aria-hidden="true" />
                            {p.date}
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
                <Link
                  href={BOOKING_URL}
                  className="btn-primary w-full text-sm"
                >
                  Book Your Visit
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
