# Sitemap Generator

This project includes an automated sitemap generator that creates a `sitemap.xml` file with all pages, articles, categories, and authors.

## How It Works

The sitemap generator (`scripts/generate-sitemap.mjs`) automatically:
- Reads all articles from `src/content/articles.ts`
- Reads all authors from `src/content/authors.ts`
- Extracts all categories (both from articles and the additional categories list)
- Generates a complete sitemap.xml file in the `public/` folder

## Usage

### Generate Sitemap Manually

```bash
npm run generate:sitemap
```

### Automatic Generation

The sitemap is automatically generated when you build the project:

```bash
npm run build
```

This ensures the sitemap is always up-to-date with the latest articles and categories.

## Configuration

### Setting Your Domain

Before deploying, set your actual domain using the `SITE_URL` environment variable:

```bash
SITE_URL=https://yourdomain.com npm run generate:sitemap
```

Or add it to your build script in `package.json`:

```json
{
  "scripts": {
    "build": "SITE_URL=https://yourdomain.com npm run generate:sitemap && vite build"
  }
}
```

## What's Included

The sitemap includes:

1. **Static Pages** (9 pages):
   - Homepage (/)
   - Blog listing (/blog)
   - Categories index (/categories)
   - About (/about)
   - Authors (/authors)
   - Privacy Policy (/privacy-policy)
   - Terms (/terms)
   - User Policy (/user-policy)
   - Cookie Policy (/cookie-policy)

2. **Article Pages** (all articles from articles.ts):
   - Each article at `/blog/{slug}`
   - Priority: 0.8
   - Change frequency: monthly

3. **Category Pages** (all categories):
   - Each category at `/categories/{slug}`
   - Priority: 0.7
   - Change frequency: weekly

4. **Author Pages** (all authors):
   - Each author at `/authors/{slug}`
   - Priority: 0.6
   - Change frequency: monthly

## Adding New Articles

When you add new articles to `src/content/articles.ts`, the sitemap will automatically include them the next time you:
- Run `npm run generate:sitemap`
- Run `npm run build`

## robots.txt

The sitemap is referenced in `public/robots.txt`. Make sure to update the domain in robots.txt to match your actual domain.

## SEO Benefits

- Helps search engines discover all your pages
- Provides priority and change frequency hints
- Improves indexing of dynamic content (articles, categories)
- Automatically updates when new content is added
