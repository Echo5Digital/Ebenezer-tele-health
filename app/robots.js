export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://www.ebenezertelehealth.com/sitemap.xml',
  }
}
