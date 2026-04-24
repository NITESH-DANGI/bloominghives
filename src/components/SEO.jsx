import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO component that dynamically updates document title, meta description,
 * canonical URL, and Open Graph tags per page.
 */
export default function SEO({ title, description }) {
  const location = useLocation();

  useEffect(() => {
    const baseUrl = 'https://bloominghives.in';
    const currentUrl = `${baseUrl}${location.pathname}`;

    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      } else {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        metaDesc.content = description;
        document.head.appendChild(metaDesc);
      }
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', currentUrl);
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = currentUrl;
      document.head.appendChild(canonical);
    }

    // Update Open Graph tags
    const ogTags = {
      'og:title': title,
      'og:description': description,
      'og:url': currentUrl,
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      if (!content) return;
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    });

    // Update Twitter Card tags
    const twitterTags = {
      'twitter:title': title,
      'twitter:description': description,
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      if (!content) return;
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.name = name;
        tag.content = content;
        document.head.appendChild(tag);
      }
    });

  }, [title, description, location.pathname]);

  return null;
}
