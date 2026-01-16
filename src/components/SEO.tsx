import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  category?: string;
  tags?: string[];
  canonicalUrl?: string;
  structuredData?: object;
}

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://yourdomain.com";
const SITE_NAME = "Minimal Crypto Journal";
const DEFAULT_DESCRIPTION =
  "Minimal crypto research journal focused on long-form analysis, tokenization, and real-world assets (RWA).";
const DEFAULT_IMAGE = `${SITE_URL}/placeholder.svg`;

export const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  category,
  tags = [],
  canonicalUrl,
  structuredData,
}: SEOProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL;
  const canonical = canonicalUrl ? `${SITE_URL}${canonicalUrl}` : fullUrl;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        if (isProperty) {
          element.setAttribute("property", property);
        } else {
          element.setAttribute("name", property);
        }
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("author", author || SITE_NAME);

    // Open Graph tags
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:url", fullUrl, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:site_name", SITE_NAME, true);
    if (type === "article") {
      if (publishedTime) updateMetaTag("article:published_time", publishedTime, true);
      if (modifiedTime) updateMetaTag("article:modified_time", modifiedTime, true);
      if (author) updateMetaTag("article:author", author, true);
      if (category) updateMetaTag("article:section", category, true);
      tags.forEach((tag) => {
        const tagElement = document.createElement("meta");
        tagElement.setAttribute("property", "article:tag");
        tagElement.setAttribute("content", tag);
        document.head.appendChild(tagElement);
      });
    }

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    // Canonical URL
    updateLinkTag("canonical", canonical);

    // Structured Data (JSON-LD)
    if (structuredData) {
      // Remove existing structured data
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      // Remove article tags on unmount
      if (type === "article") {
        document.querySelectorAll('meta[property="article:tag"]').forEach((el) => el.remove());
      }
    };
  }, [
    fullTitle,
    description,
    image,
    fullUrl,
    type,
    publishedTime,
    modifiedTime,
    author,
    category,
    tags,
    canonical,
    structuredData,
  ]);

  return null;
};
