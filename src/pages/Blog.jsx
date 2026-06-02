import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useGSAP, { gsap } from '../hooks/useGSAP';
import ArrowIcon from '../components/ArrowIcon';
import HeroCanvas from '../components/HeroCanvas';
import SEO from '../components/SEO';
import '../styles/blog.css';

const posts = [
  { id: 'post-dm-cost-delhi', cat: 'seo', cats: ['seo', 'performance-marketing', 'social-media', 'branding', 'web-development'], slug: 'digital-marketing-cost-delhi', img: '/assets/images/article-seo.png', alt: 'Digital Marketing Cost in Delhi 2026', title: 'Digital Marketing Cost in Delhi for Small Businesses (2026): Complete Pricing Guide', tags: ['SEO & Content', 'Performance Marketing'], isInternal: true },
  { id: 'post-1', cat: 'social-media', img: '/assets/images/article-social-media.png', alt: 'Social Media Strategy', title: 'Why Your Brand Needs a Social Media Strategy, Not Just Posts', tags: ['Social Media'] },
  { id: 'post-2', cat: 'seo', img: '/assets/images/article-seo.png', alt: "SEO in 2025", title: "SEO in 2025: What's Changed and What Still Matters", tags: ['SEO & Content'] },
  { id: 'post-3', cat: 'branding', img: '/assets/images/blog-brand-identity.png', alt: 'Brand Identity', title: 'Building a Brand Identity That Lasts — Beyond Logos and Colors', tags: ['Branding', 'Strategy'] },
  { id: 'post-4', cat: 'performance-marketing', img: '/assets/images/blog-google-ads.png', alt: 'Google Ads Quality Score', title: 'The Complete Guide to Google Ads Quality Score in 2025', tags: ['Performance Marketing'] },
  { id: 'post-5', cat: 'social-media', img: '/assets/images/blog-social-trends.png', alt: 'Social Media Trends', title: '7 Social Media Trends That Will Define 2025', tags: ['Social Media', 'Trends'] },
  { id: 'post-6', cat: 'seo', img: '/assets/images/blog-content-strategy.png', alt: 'Content Strategy', title: 'How to Build a Content Strategy That Drives Organic Traffic', tags: ['SEO & Content'] },
  { id: 'post-7', cat: 'web-development', img: '/assets/images/blog-web-design.png', alt: 'Web Design', title: '10 Web Design Principles Every Business Website Needs', tags: ['Web Development'] },
  { id: 'post-8', cat: 'performance-marketing', img: '/assets/images/blog-ecommerce.png', alt: 'E-commerce Growth', title: 'E-commerce Growth: From First Sale to Scaling Revenue', tags: ['Performance Marketing', 'E-commerce'] },
  { id: 'post-9', cat: 'branding', img: '/assets/images/service-social.png', alt: 'Small Business Marketing', title: 'Marketing on a Budget: Smart Strategies for Small Businesses', tags: ['Branding'] },
];

const filters = [
  { key: 'all', label: 'All' },
  { key: 'performance-marketing', label: 'Performance Marketing' },
  { key: 'social-media', label: 'Social Media' },
  { key: 'seo', label: 'SEO & Content' },
  { key: 'branding', label: 'Branding' },
  { key: 'web-development', label: 'Web Development' },
];

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    let ticking = false;
    const handle = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = document.getElementById('floating-cta');
        if (el) el.classList.toggle('visible', window.scrollY > window.innerHeight * 0.4);
        ticking = false;
      });
    };
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const containerRef = useGSAP(() => {
    const ease = 'power3.out';
    gsap.to('.blog-page .title-line span', { y: 0, opacity: 1, stagger: 0.1, delay: 0.3, duration: 1.2, ease: 'power4.out' });

    gsap.utils.toArray('.blog-card').forEach((card, i) => {
      gsap.from(card, { y: 50, opacity: 0, duration: 0.7, delay: i * 0.08, ease, scrollTrigger: { trigger: card, start: 'top 85%' } });
    });

    const footerGlobe = document.querySelector('.footer__globe');
    if (footerGlobe) {
      gsap.from(footerGlobe, { y: 40, opacity: 0, duration: 1.2, ease, scrollTrigger: { trigger: '.footer__globe', start: 'top 85%' } });
    }
  });

  const filtered = activeFilter === 'all' ? posts : posts.filter(p => {
    if (p.cats) return p.cats.includes(activeFilter);
    return p.cat === activeFilter;
  });

  return (
    <div className="blog-page" ref={containerRef}>
      <SEO
        title="Blog | Blooming Hives — Digital Marketing Insights & Tips"
        description="Read the latest digital marketing insights, SEO tips, social media trends, and performance marketing strategies from Blooming Hives."
      />
      {/* HERO */}
      <section className="blog-hero" data-theme="dark">
        <div className="blog-hero__bg">
          <HeroCanvas />
        </div>
        <div className="blog-hero__content">
          <h1 className="blog-hero__title">
            <div className="title-line"><span>News, insights,</span></div>
            <div className="title-line"><span>&amp; marketing culture</span></div>
            <div className="title-line"><span>from Blooming Hives.</span></div>
          </h1>
        </div>
      </section>

      {/* FEATURED */}
      <section className="blog-featured" data-theme="light">
        <Link to="/blog/digital-marketing-cost-delhi" className="blog-featured__card" id="featured-post">
          <div className="blog-featured__image">
            <img src="/assets/images/article-seo.png" alt="Digital Marketing Cost in Delhi 2026 — Complete Pricing Guide" loading="eager" />
            <div className="blog-featured__categories">
              <span className="blog-tag">Featured</span>
              <span className="blog-tag">SEO & Content</span>
              <span className="blog-tag">Performance Marketing</span>
            </div>
          </div>
          <h2 className="blog-featured__title">Digital Marketing Cost in Delhi for Small Businesses (2026): Complete Pricing Guide</h2>
        </Link>
      </section>

      <div className="blog-divider"><hr /></div>

      {/* FILTERS */}
      <section className="blog-filters" data-theme="light">
        <div className="blog-filters__inner">
          {filters.map(f => (
            <button key={f.key} className={`filter-chip${activeFilter === f.key ? ' active' : ''}`} onClick={() => setActiveFilter(f.key)}>{f.label}</button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="blog-grid" data-theme="light">
        <div className="blog-grid__inner">
          {filtered.map(p => {
            const CardWrapper = p.isInternal
              ? ({ children, ...props }) => <Link to={`/blog/${p.slug}`} {...props}>{children}</Link>
              : ({ children, ...props }) => <a href="#" {...props}>{children}</a>;
            return (
              <CardWrapper className="blog-card" data-category={p.cat} id={p.id} key={p.id}>
                <div className="blog-card__image">
                  <img src={p.img} alt={p.alt} loading="lazy" />
                  <div className="blog-card__tags">{p.tags.map(t => <span className="blog-tag" key={t}>{t}</span>)}</div>
                </div>
                <h3 className="blog-card__title">{p.title}</h3>
              </CardWrapper>
            );
          })}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="blog-newsletter" data-theme="light">
        <div className="blog-newsletter__inner">
          <h2 className="blog-newsletter__title">Stay in the loop.</h2>
          <p className="blog-newsletter__desc">Get the latest marketing insights, trends, and tips delivered straight to your inbox.</p>
          <form className="blog-newsletter__form" id="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required className="blog-newsletter__input" />
            <button type="submit" className="blog-newsletter__btn"><span>Subscribe</span><ArrowIcon strokeWidth={2.5} /></button>
          </form>
        </div>
      </section>
    </div>
  );
}
