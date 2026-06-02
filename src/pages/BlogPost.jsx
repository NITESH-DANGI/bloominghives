import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import useGSAP, { gsap } from '../hooks/useGSAP';
import SEO from '../components/SEO';
import '../styles/blogpost.css';

/* ──────────────────────────────────────────────
   Blog Post Data Registry
   Add new posts here as objects
   ────────────────────────────────────────────── */
const blogPostData = {
  'digital-marketing-cost-delhi': {
    title: 'Digital Marketing Cost in Delhi for Small Businesses (2026): Complete Pricing Guide',
    seoTitle: 'Digital Marketing Cost in Delhi (2026): Complete Pricing Guide | Blooming Hives',
    seoDescription: 'How much does digital marketing cost in Delhi in 2026? Get a complete pricing breakdown — SEO, social media, Google Ads, Meta Ads & website development. Real numbers, no fluff.',
    seoKeywords: 'digital marketing cost in Delhi, digital marketing charges India, SEO agency price Delhi, social media marketing cost India, Google Ads management fees India, digital marketing packages India 2026',
    ogImage: 'https://bloominghives.in/assets/images/blog-digital-marketing-cost-delhi.webp',
    canonicalPath: '/blog/digital-marketing-cost-delhi',
    publishedDate: '2026-05-31',
    modifiedDate: '2026-05-31',
    readTime: '12 min read',
    author: 'Blooming Hives',
    tags: ['Strategy', 'SEO & Content', 'Performance Marketing'],
    categories: ['seo', 'performance-marketing'],
  },
};

function DigitalMarketingCostDelhi() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="bp-breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span className="bp-breadcrumb__sep">›</span>
        <Link to="/blog">Blog</Link>
        <span className="bp-breadcrumb__sep">›</span>
        <span className="bp-breadcrumb__current">Digital Marketing Cost in Delhi</span>
      </nav>

      {/* Tags + Meta */}
      <div className="bp-meta-bar">
        <span className="bp-tag">Strategy</span>
        <span className="bp-tag">SEO</span>
        <span>May 31, 2026</span>
        <span>·</span>
        <span>12 min read</span>
        <span>·</span>
        <span>By <strong>Blooming Hives</strong></span>
      </div>

      {/* H1 */}
      <h1 className="bp-title">Digital Marketing Cost in Delhi for Small Businesses (2026): Complete Pricing Guide</h1>

      {/* Lead */}
      <p className="bp-lead">
        You've decided to invest in digital marketing — but every agency gives you a different number. One says ₹8,000/month, another quotes ₹80,000. Who's right? And more importantly, what should <em>your</em> business actually spend? This guide breaks down the real cost of digital marketing in Delhi in 2026 — service by service, budget by budget — so you can make a smart decision without getting overcharged.
      </p>

      {/* Table of Contents */}
      <nav className="bp-toc" aria-label="Table of contents">
        <div className="bp-toc__title">In this guide</div>
        <ol>
          <li><a href="#why-costs-vary">Why digital marketing costs vary so much in Delhi</a></li>
          <li><a href="#seo-cost">SEO service cost in Delhi (2026 pricing)</a></li>
          <li><a href="#social-media-cost">Social media marketing charges</a></li>
          <li><a href="#ads-cost">Google Ads & Meta Ads management fees</a></li>
          <li><a href="#website-cost">Website development cost</a></li>
          <li><a href="#full-packages">Full digital marketing packages</a></li>
          <li><a href="#agency-vs-freelancer">Agency vs freelancer vs in-house</a></li>
          <li><a href="#how-much-to-spend">How much should your business spend?</a></li>
          <li><a href="#faq">Frequently asked questions</a></li>
        </ol>
      </nav>

      {/* Key stat row */}
      <div className="bp-stat-row" aria-label="Key market statistics">
        <div className="bp-stat">
          <span className="bp-stat__number">6Cr+</span>
          <span className="bp-stat__label">Internet users in Delhi NCR</span>
        </div>
        <div className="bp-stat">
          <span className="bp-stat__number">78%</span>
          <span className="bp-stat__label">Consumers research online before buying locally</span>
        </div>
        <div className="bp-stat">
          <span className="bp-stat__number">3–5×</span>
          <span className="bp-stat__label">Avg ROI for local SEO within 12 months</span>
        </div>
        <div className="bp-stat">
          <span className="bp-stat__number">₹15K</span>
          <span className="bp-stat__label">Starting point for a serious small biz package</span>
        </div>
      </div>

      {/* Section 1 */}
      <h2 id="why-costs-vary">Why Digital Marketing Costs Vary So Much in Delhi</h2>
      <p>There is no single "correct" price for digital marketing. The cost you're quoted depends on five main factors — and understanding them will immediately help you spot who's charging fairly and who's overcharging.</p>
      <ul>
        <li><strong>Your industry's competition level.</strong> A restaurant in Lajpat Nagar and a legal firm in Connaught Place have completely different competitive landscapes online. The more competitive your market, the more effort (and budget) it takes to rank.</li>
        <li><strong>Your goals.</strong> Brand awareness campaigns cost differently than lead generation campaigns. E-commerce campaigns with high product volume are more complex than service-based campaigns.</li>
        <li><strong>Agency size and expertise.</strong> A solo freelancer, a boutique agency like Blooming Hives, and a large 100-person agency all have different cost structures. Bigger doesn't always mean better for small businesses.</li>
        <li><strong>Geographic targeting.</strong> Targeting Delhi alone is cheaper than targeting Delhi + Mumbai + Bangalore + other metros.</li>
        <li><strong>Scope of services.</strong> A basic social media package (5 posts/month, no ads) is worlds apart from a full-funnel strategy with weekly content, paid campaigns, and monthly reporting.</li>
      </ul>

      <div className="bp-takeaway">
        <div className="bp-takeaway__title">Key point before you read further</div>
        <p>These prices reflect 2026 market rates in Delhi NCR. Always ask for a detailed scope of work — not just a monthly number. Two agencies quoting ₹20,000/month might be delivering completely different amounts of work.</p>
      </div>

      {/* Section 2 — SEO */}
      <h2 id="seo-cost">SEO Service Cost in Delhi (2026 Pricing)</h2>
      <p>Search Engine Optimisation (SEO) is the process of getting your website to rank on Google organically — without paying per click. It's the highest-ROI digital marketing service for most small businesses, but it takes 3–6 months to show results.</p>
      <p>Here's what SEO services realistically cost in Delhi in 2026:</p>

      <div className="bp-table-wrap" role="region" aria-label="SEO pricing in Delhi">
        <table className="bp-table">
          <thead>
            <tr>
              <th>Package</th>
              <th className="tier-starter">Starter</th>
              <th className="tier-growth">Growth</th>
              <th className="tier-premium">Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Monthly cost</td><td>₹8,000 – ₹15,000</td><td>₹20,000 – ₹40,000</td><td>₹50,000+</td></tr>
            <tr><td>Keywords targeted</td><td>5–10 local keywords</td><td>15–30 keywords</td><td>40+ competitive keywords</td></tr>
            <tr><td>Blog content</td><td>1–2 posts/month</td><td>4–6 posts/month</td><td>8–12 posts/month</td></tr>
            <tr><td>On-page SEO</td><td>Basic</td><td>Full audit + fixes</td><td>Technical + schema markup</td></tr>
            <tr><td>Backlink building</td><td>Not included</td><td>5–10 links/month</td><td>15–25 links/month</td></tr>
            <tr><td>Google Business Profile</td><td>Setup + basic</td><td>Full optimisation</td><td>Full optimisation + posts</td></tr>
            <tr><td>Monthly reporting</td><td>Basic PDF</td><td>Detailed analytics</td><td>Custom dashboard</td></tr>
            <tr><td>Best for</td><td>Local shops, single-location businesses</td><td>SMBs with growth ambitions</td><td>Multi-location, e-commerce</td></tr>
          </tbody>
        </table>
      </div>

      <h3>What to watch out for with cheap SEO packages</h3>
      <p>If an agency is quoting you below ₹5,000/month for "complete SEO," be careful. At that price point, they're typically generating low-quality backlinks from unrelated websites — a practice called black-hat SEO that can get your website penalised by Google. Always ask for a sample report and a list of the last 10 websites they built links from.</p>

      <div className="bp-info-box" role="note">
        <p><strong>Pro tip:</strong> For a small business in Delhi targeting local customers, a ₹10,000–₹18,000/month SEO package with a good agency will outperform a ₹50,000/month package with a large agency that treats you as a low-priority client. Attention and quality of execution matters more than budget at the starter stage.</p>
      </div>

      {/* Section 3 — Social Media */}
      <h2 id="social-media-cost">Social Media Marketing Charges in India</h2>
      <p>Social media management covers content creation, graphic design, caption writing, posting, and sometimes community management (replying to comments and DMs). This is separate from paid social media advertising (which falls under the ads section below).</p>

      <div className="bp-table-wrap" role="region" aria-label="Social media marketing pricing">
        <table className="bp-table">
          <thead>
            <tr>
              <th>Package</th>
              <th className="tier-starter">Starter</th>
              <th className="tier-growth">Growth</th>
              <th className="tier-premium">Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Monthly cost</td><td>₹6,000 – ₹12,000</td><td>₹15,000 – ₹25,000</td><td>₹35,000+</td></tr>
            <tr><td>Platforms covered</td><td>1–2 (Instagram + Facebook)</td><td>3 (+ LinkedIn or YouTube)</td><td>4–5 platforms</td></tr>
            <tr><td>Posts per month</td><td>8–12 posts</td><td>16–20 posts + Stories</td><td>25+ posts + Reels/Videos</td></tr>
            <tr><td>Custom graphics</td><td>Template-based</td><td>Brand-customised</td><td>Fully custom per post</td></tr>
            <tr><td>Reels / Short videos</td><td>Not included</td><td>2–4 Reels/month</td><td>6–8 Reels + editing</td></tr>
            <tr><td>Community management</td><td>Not included</td><td>Basic (comments only)</td><td>Full (DMs + comments)</td></tr>
            <tr><td>Best for</td><td>New businesses, awareness</td><td>Established SMBs wanting growth</td><td>Brands with active audiences</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Instagram vs LinkedIn vs Facebook — which platform for your Delhi business?</h3>
      <p>Not every platform deserves equal budget. Here's a quick guide based on business type:</p>
      <ul>
        <li><strong>Restaurants, retail, salons, real estate:</strong> Instagram + Facebook. Visual-first, high local discovery through Reels and location tagging.</li>
        <li><strong>B2B services, consulting, healthcare, education:</strong> LinkedIn. Professional audience, better lead quality despite lower volume.</li>
        <li><strong>Youth-oriented brands, D2C products:</strong> Instagram + YouTube Shorts. Reels are the highest organic reach format right now.</li>
        <li><strong>Local service businesses (plumbers, tutors, repair shops):</strong> Focus on Google Business Profile + WhatsApp Business before social media.</li>
      </ul>

      {/* Section 4 — Ads */}
      <h2 id="ads-cost">Google Ads &amp; Meta Ads Management Fees in India</h2>
      <p>Paid advertising has two components: the <strong>management fee</strong> (what you pay the agency) and the <strong>ad spend</strong> (what you pay Google/Meta directly). These are separate. Most agencies in Delhi charge a management fee of 15–20% of ad spend or a flat monthly fee.</p>

      <div className="bp-table-wrap" role="region" aria-label="Google Ads and Meta Ads pricing">
        <table className="bp-table">
          <thead>
            <tr>
              <th>Service</th>
              <th className="tier-starter">Management Fee</th>
              <th className="tier-growth">Recommended Ad Budget</th>
              <th className="tier-premium">Total Monthly Investment</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Google Ads (Search)</td><td>₹5,000 – ₹15,000</td><td>₹10,000 – ₹30,000</td><td>₹15,000 – ₹45,000</td></tr>
            <tr><td>Meta Ads (Instagram + FB)</td><td>₹4,000 – ₹12,000</td><td>₹8,000 – ₹25,000</td><td>₹12,000 – ₹37,000</td></tr>
            <tr><td>Google Shopping (e-commerce)</td><td>₹8,000 – ₹20,000</td><td>₹15,000 – ₹50,000</td><td>₹23,000 – ₹70,000</td></tr>
            <tr className="bp-highlight-row"><td>Both Google + Meta (combined)</td><td>₹10,000 – ₹20,000</td><td>₹20,000 – ₹50,000</td><td>₹30,000 – ₹70,000</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Google Ads vs Meta Ads — which should you start with?</h3>
      <p>The answer depends entirely on where your buyer is in their journey. <strong>Google Ads captures demand</strong> — someone is already searching "best restaurant in Connaught Place" and you show up. <strong>Meta Ads create demand</strong> — you show your ad to someone who wasn't looking, but matches your target demographic.</p>
      <ul>
        <li>If you have a product or service people actively search for → <strong>Start with Google Ads.</strong></li>
        <li>If you're launching something new or building brand awareness → <strong>Start with Meta Ads.</strong></li>
        <li>If budget allows → run both, but with ₹60:40 split favouring Google Search initially.</li>
      </ul>

      {/* Section 5 — Website */}
      <h2 id="website-cost">Website Development Cost in Delhi (2026)</h2>
      <p>A well-built website is the foundation of all your digital marketing. Your ad campaigns and SEO efforts are only as good as the website they send traffic to. Here's what website development realistically costs in Delhi:</p>

      <div className="bp-table-wrap" role="region" aria-label="Website development pricing Delhi">
        <table className="bp-table">
          <thead>
            <tr>
              <th>Website Type</th>
              <th className="tier-starter">Cost Range</th>
              <th className="tier-growth">Timeline</th>
              <th className="tier-premium">Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Basic WordPress website</td><td>₹8,000 – ₹20,000</td><td>1–2 weeks</td><td>Local businesses, blogs, portfolios</td></tr>
            <tr><td>Professional business website</td><td>₹20,000 – ₹50,000</td><td>2–4 weeks</td><td>SMBs, service businesses, consultants</td></tr>
            <tr><td>Custom design + development</td><td>₹50,000 – ₹1,20,000</td><td>4–8 weeks</td><td>Brands wanting unique, premium presence</td></tr>
            <tr><td>E-commerce website</td><td>₹40,000 – ₹1,50,000</td><td>4–10 weeks</td><td>Online stores with product catalogues</td></tr>
            <tr><td>E-commerce + custom features</td><td>₹1,50,000 – ₹4,00,000</td><td>8–16 weeks</td><td>Scaling D2C brands, marketplaces</td></tr>
          </tbody>
        </table>
      </div>

      <p>A common question: <strong>WordPress or custom website?</strong> For most small businesses in Delhi, a professionally built WordPress website gives the best value — fast to build, easy to update, and SEO-friendly out of the box. Custom development makes sense when you need specific functionality (booking systems, membership portals, or complex integrations) that plugins can't handle well.</p>

      {/* Section 6 — Full Packages */}
      <h2 id="full-packages">Full Digital Marketing Packages in Delhi — 2026 Pricing</h2>
      <p>Most businesses don't need just one service — they need SEO + social media + maybe ads, all working together. Here's what complete digital marketing packages cost in Delhi, with real breakdowns by business size:</p>

      <div className="bp-table-wrap" role="region" aria-label="Full digital marketing package pricing">
        <table className="bp-table">
          <thead>
            <tr>
              <th>Package</th>
              <th className="tier-starter">Starter</th>
              <th className="tier-growth">Growth</th>
              <th className="tier-premium">Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Monthly investment</td><td>₹15,000 – ₹25,000</td><td>₹30,000 – ₹55,000</td><td>₹60,000 – ₹1,20,000+</td></tr>
            <tr><td>SEO</td><td>Local SEO, 5–10 keywords</td><td>Full on-page + off-page</td><td>Technical + content SEO</td></tr>
            <tr><td>Social media</td><td>2 platforms, 10 posts</td><td>3 platforms, 18 posts + Reels</td><td>4+ platforms, full strategy</td></tr>
            <tr><td>Paid ads (management only)</td><td>Not included</td><td>Google or Meta (choose 1)</td><td>Google + Meta both</td></tr>
            <tr><td>Content / blog</td><td>1 blog/month</td><td>3–4 blogs/month</td><td>6–8 blogs/month</td></tr>
            <tr><td>Reporting</td><td>Monthly report</td><td>Bi-weekly + monthly</td><td>Weekly + custom dashboard</td></tr>
            <tr className="bp-highlight-row"><td>Best for</td><td>New businesses, bootstrapped startups</td><td>Growing SMBs, funded startups</td><td>Established brands scaling fast</td></tr>
          </tbody>
        </table>
      </div>

      <div className="bp-takeaway">
        <div className="bp-takeaway__title">Important note on these numbers</div>
        <p>These are management fees only. If your package includes paid ads, add your ad spend on top. A Growth package at ₹35,000/month management fee + ₹20,000/month in Google Ads = ₹55,000/month total outgoing.</p>
      </div>

      {/* Service cards visual summary */}
      <div className="bp-card-grid" role="list" aria-label="Cost summary by service">
        <div className="bp-service-card" role="listitem">
          <span className="bp-card__icon" aria-hidden="true">🔍</span>
          <div className="bp-card__service">SEO</div>
          <div className="bp-card__price">₹8K–₹50K</div>
          <div className="bp-card__range">per month</div>
        </div>
        <div className="bp-service-card" role="listitem">
          <span className="bp-card__icon" aria-hidden="true">📱</span>
          <div className="bp-card__service">Social Media</div>
          <div className="bp-card__price">₹6K–₹35K</div>
          <div className="bp-card__range">per month</div>
        </div>
        <div className="bp-service-card" role="listitem">
          <span className="bp-card__icon" aria-hidden="true">📢</span>
          <div className="bp-card__service">Google / Meta Ads</div>
          <div className="bp-card__price">₹5K–₹25K</div>
          <div className="bp-card__range">management fee only</div>
        </div>
        <div className="bp-service-card" role="listitem">
          <span className="bp-card__icon" aria-hidden="true">💻</span>
          <div className="bp-card__service">Website Dev</div>
          <div className="bp-card__price">₹8K–₹4L</div>
          <div className="bp-card__range">one-time project cost</div>
        </div>
      </div>

      {/* Section 7 — Agency vs Freelancer */}
      <h2 id="agency-vs-freelancer">Agency vs Freelancer vs In-House — Which Should You Choose?</h2>
      <p>Once you know your budget, the next question is: who should you hire? Each option has real trade-offs.</p>

      <div className="bp-comparison" role="region" aria-label="Agency vs Freelancer comparison">
        <div className="bp-compare-card">
          <div className="bp-compare-header bp-compare-header--agency">Digital Marketing Agency</div>
          <div className="bp-compare-body">
            <ul>
              <li><span className="bp-pro">+</span> Team with multiple specialisations</li>
              <li><span className="bp-pro">+</span> Consistent delivery, no sick days</li>
              <li><span className="bp-pro">+</span> Established processes and tools</li>
              <li><span className="bp-pro">+</span> Better accountability and contracts</li>
              <li><span className="bp-con">–</span> Higher cost than solo freelancer</li>
              <li><span className="bp-con">–</span> Large agencies may deprioritise small clients</li>
            </ul>
          </div>
        </div>
        <div className="bp-compare-card">
          <div className="bp-compare-header bp-compare-header--freelancer">Solo Freelancer</div>
          <div className="bp-compare-body">
            <ul>
              <li><span className="bp-pro">+</span> Lower monthly cost</li>
              <li><span className="bp-pro">+</span> Direct communication with the person doing the work</li>
              <li><span className="bp-pro">+</span> Flexible arrangements</li>
              <li><span className="bp-con">–</span> One person = one skill set, not all services</li>
              <li><span className="bp-con">–</span> No backup if they go unavailable</li>
              <li><span className="bp-con">–</span> Harder to scale as you grow</li>
            </ul>
          </div>
        </div>
      </div>

      <p>For most small businesses in Delhi with a budget of ₹15,000–₹50,000/month, a boutique agency is the sweet spot. You get a team approach, dedicated account management, and more reliable output compared to a solo freelancer — without the overheads of a large corporate agency.</p>

      {/* Section 8 — Budget */}
      <h2 id="how-much-to-spend">How Much Should Your Business Actually Spend?</h2>
      <p>A commonly recommended rule is to spend <strong>7–12% of your monthly revenue on marketing</strong>, with digital making up 50–70% of that. Here's a more practical breakdown for Delhi-based businesses in different revenue stages:</p>

      <div className="bp-budget-guide" role="region" aria-label="Budget recommendation by revenue">
        <div className="bp-budget-row">
          <div className="bp-budget__revenue">Revenue: ₹0–₹2L/month</div>
          <div className="bp-budget__recommendation">Start with Google Business Profile + 1 social media platform. Budget: ₹5,000–₹10,000/month. Focus on local SEO first — zero ad spend needed initially.</div>
        </div>
        <div className="bp-budget-row">
          <div className="bp-budget__revenue">Revenue: ₹2L–₹5L/month</div>
          <div className="bp-budget__recommendation">SEO + 2 social media platforms + Google Ads (small budget). Total: ₹15,000–₹25,000/month management + ₹10,000–₹15,000 ad spend.</div>
        </div>
        <div className="bp-budget-row">
          <div className="bp-budget__revenue">Revenue: ₹5L–₹20L/month</div>
          <div className="bp-budget__recommendation">Full Growth package — SEO, social media, both Google + Meta Ads, monthly content. Budget: ₹35,000–₹55,000/month + ad spend of ₹20,000–₹40,000.</div>
        </div>
        <div className="bp-budget-row">
          <div className="bp-budget__revenue">Revenue: ₹20L+/month</div>
          <div className="bp-budget__recommendation">Premium full-funnel strategy with dedicated account team. Budget: ₹70,000–₹1,50,000/month + ad spend. Consider in-house + agency hybrid model.</div>
        </div>
      </div>

      <h3>The honest truth about cheap digital marketing in Delhi</h3>
      <p>Below ₹8,000/month, you're either getting a template-based social media plan with no real strategy, or black-hat SEO that will eventually hurt your rankings. Digital marketing is an investment — not a commodity. The goal isn't to find the cheapest provider, it's to find the provider who will give you the highest return on what you spend.</p>
      <p>A good agency should be able to show you: (a) real case studies from similar businesses, (b) a clear metric they will optimise for (leads, traffic, conversions — not just "engagement"), and (c) a transparent scope of work before you sign anything.</p>
      <p>If you're evaluating Blooming Hives for your business, you can <Link to="/service/seo">view our services and packages here</Link> or <Link to="/contact">book a free 30-minute consultation</Link>. We work with small businesses across Delhi NCR across healthcare, retail, food, and real estate.</p>

      {/* FAQ Section */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <div className="bp-faq" role="list">
        <details className="bp-faq__item" role="listitem">
          <summary className="bp-faq__q">
            What is the average cost of digital marketing in Delhi?
            <span className="bp-faq__chevron" aria-hidden="true">▾</span>
          </summary>
          <div className="bp-faq__a">
            <p>The average cost of digital marketing in Delhi ranges from <strong>₹8,000 to ₹80,000+ per month</strong> depending on the services included. A basic SEO package starts at ₹8,000–₹15,000/month, social media management at ₹6,000–₹12,000/month, and a full digital marketing package for a growing small business typically costs ₹18,000–₹55,000/month.</p>
          </div>
        </details>

        <details className="bp-faq__item" role="listitem">
          <summary className="bp-faq__q">
            How much should a small business spend on digital marketing in India?
            <span className="bp-faq__chevron" aria-hidden="true">▾</span>
          </summary>
          <div className="bp-faq__a">
            <p>Small businesses in India should ideally spend <strong>7–12% of their monthly revenue on digital marketing</strong>. For businesses generating ₹5–20 lakh monthly revenue, a budget of ₹15,000–₹30,000/month is a strong starting point. This covers basic SEO, social media management, and occasional paid ads — enough to build consistent visibility in your local Delhi market.</p>
          </div>
        </details>

        <details className="bp-faq__item" role="listitem">
          <summary className="bp-faq__q">
            Is digital marketing worth it for small businesses in Delhi?
            <span className="bp-faq__chevron" aria-hidden="true">▾</span>
          </summary>
          <div className="bp-faq__a">
            <p>Yes — and the numbers support it. With over 6 crore internet users in Delhi NCR and 78% of consumers researching online before buying locally, not having a digital presence means losing customers to competitors who do. Small businesses that invest in local SEO and targeted social media typically see <strong>3–5x ROI within 6–12 months</strong>, especially in food, retail, healthcare, and education sectors.</p>
          </div>
        </details>

        <details className="bp-faq__item" role="listitem">
          <summary className="bp-faq__q">
            What is included in a digital marketing package?
            <span className="bp-faq__chevron" aria-hidden="true">▾</span>
          </summary>
          <div className="bp-faq__a">
            <p>A standard digital marketing package typically includes: SEO (on-page optimisation, local SEO, and off-page link building), social media management (content creation + posting on 2–3 platforms), monthly performance reports, and basic Google/Meta ad management. Premium packages also include content marketing, email campaigns, video editing, dedicated account management, and custom analytics dashboards.</p>
          </div>
        </details>

        <details className="bp-faq__item" role="listitem">
          <summary className="bp-faq__q">
            How much does SEO cost in Delhi?
            <span className="bp-faq__chevron" aria-hidden="true">▾</span>
          </summary>
          <div className="bp-faq__a">
            <p>SEO services in Delhi cost <strong>₹8,000–₹15,000/month</strong> for starter packages (local SEO, basic keyword targeting), <strong>₹20,000–₹40,000/month</strong> for growth packages (competitive keywords, content creation, backlink building), and <strong>₹50,000+/month</strong> for premium enterprise-level SEO. Be cautious of packages priced below ₹5,000/month — these often use black-hat techniques that can penalise your website.</p>
          </div>
        </details>

        <details className="bp-faq__item" role="listitem">
          <summary className="bp-faq__q">
            What is the cost of running Google Ads in India?
            <span className="bp-faq__chevron" aria-hidden="true">▾</span>
          </summary>
          <div className="bp-faq__a">
            <p>Google Ads involves two costs: the agency's management fee (₹5,000–₹15,000/month) and the actual ad spend you pay Google directly (recommended ₹10,000–₹30,000/month for meaningful local results in Delhi). Total monthly investment for Google Ads is typically <strong>₹15,000–₹45,000/month</strong>. The exact ad spend depends on your industry's competition level and your target keywords.</p>
          </div>
        </details>

        <details className="bp-faq__item" role="listitem">
          <summary className="bp-faq__q">
            Can I do digital marketing myself to save costs?
            <span className="bp-faq__chevron" aria-hidden="true">▾</span>
          </summary>
          <div className="bp-faq__a">
            <p>Partially, yes. A business owner can handle basic social media posting and Google Business Profile management without much technical skill. However, technical SEO, paid ad campaigns, and content strategy have steep learning curves — a poorly managed Google Ads campaign can burn ₹20,000/month with zero return. A more practical approach: handle community engagement yourself, and hire an agency for strategy, SEO, and paid advertising.</p>
          </div>
        </details>
      </div>

      {/* CTA Block */}
      <div className="bp-cta-block" role="complementary" aria-label="Contact Blooming Hives">
        <h2>Ready to Grow Your Business in Delhi?</h2>
        <p>Get a custom digital marketing plan and honest pricing — tailored to your budget and business goals. No cookie-cutter packages.</p>
        <Link to="/contact" className="bp-cta__btn">Book a Free Consultation →</Link>
        <p className="bp-cta__subtext">Free 30-minute call. No obligation. No spam.</p>
      </div>

      {/* Author Box */}
      <div className="bp-author-box" role="contentinfo" aria-label="About the author">
        <div className="bp-author__avatar" aria-hidden="true">BH</div>
        <div>
          <div className="bp-author__name">Blooming Hives</div>
          <p className="bp-author__bio">Blooming Hives is a digital marketing agency based in New Delhi, helping small and medium businesses grow their online presence through SEO, social media, paid advertising, and web development. <Link to="/about">Learn more →</Link></p>
        </div>
      </div>

      {/* Related posts */}
      <div className="bp-related">
        <div className="bp-related__title">Continue reading</div>
        <div className="bp-related__links">
          <Link to="/blog" className="bp-related__link">View all blog posts →</Link>
        </div>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────
   Content Registry — maps slug to component
   ────────────────────────────────────────────── */
const blogContentRegistry = {
  'digital-marketing-cost-delhi': DigitalMarketingCostDelhi,
};

/* ──────────────────────────────────────────────
   BlogPost Page Component
   ────────────────────────────────────────────── */
export default function BlogPost() {
  const { slug } = useParams();
  const postData = blogPostData[slug];

  useEffect(() => {
    let ticking = false;
    const handle = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = document.getElementById('floating-cta');
        if (el) el.classList.toggle('visible', window.scrollY > window.innerHeight * 0.3);
        ticking = false;
      });
    };
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const containerRef = useGSAP(() => {
    const ease = 'power3.out';
    gsap.from('.bp-article', { y: 30, opacity: 0, duration: 0.9, delay: 0.2, ease });
  });

  // Inject structured data (JSON-LD) for the specific blog post
  useEffect(() => {
    if (!postData) return;

    const baseUrl = 'https://bloominghives.in';
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'blog-post-schema';

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `${baseUrl}${postData.canonicalPath}#article`,
          "headline": postData.title,
          "description": postData.seoDescription,
          "image": postData.ogImage,
          "datePublished": `${postData.publishedDate}T00:00:00+05:30`,
          "dateModified": `${postData.modifiedDate}T00:00:00+05:30`,
          "author": {
            "@type": "Organization",
            "name": "Blooming Hives",
            "url": baseUrl
          },
          "publisher": {
            "@type": "Organization",
            "name": "Blooming Hives",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/assets/images/Logo.png`
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}${postData.canonicalPath}`
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the average cost of digital marketing in Delhi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The average cost of digital marketing in Delhi ranges from ₹8,000 to ₹80,000+ per month depending on the services. A basic SEO package starts at ₹8,000–₹15,000/month, social media management at ₹6,000–₹12,000/month, and full digital marketing packages typically cost ₹18,000–₹55,000/month for small to medium businesses."
              }
            },
            {
              "@type": "Question",
              "name": "How much should a small business spend on digital marketing in India?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Small businesses in India should ideally spend 7–12% of their monthly revenue on digital marketing. For businesses with ₹5–20 lakh monthly revenue, a budget of ₹15,000–₹30,000/month is a good starting point. This covers basic SEO, social media management, and occasional paid ads."
              }
            },
            {
              "@type": "Question",
              "name": "Is digital marketing worth it for small businesses in Delhi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, absolutely. With over 6 crore internet users in Delhi NCR, not having a digital presence means losing customers to competitors. Small businesses that invest in local SEO and social media typically see 3–5x ROI within 6–12 months, especially in competitive sectors like food, retail, healthcare, and education."
              }
            },
            {
              "@type": "Question",
              "name": "What is included in a digital marketing package?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A standard digital marketing package typically includes SEO (on-page + off-page), social media management (content creation + posting), monthly performance reports, and basic Google/Meta ad management. Premium packages also include content marketing, email campaigns, video editing, and dedicated account management."
              }
            },
            {
              "@type": "Question",
              "name": "How much does SEO cost in Delhi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SEO services in Delhi cost ₹8,000–₹15,000/month for starter packages (local SEO, basic keyword targeting), ₹20,000–₹40,000/month for growth packages (competitive keywords, content creation, backlink building), and ₹50,000+ for premium SEO (enterprise-level, highly competitive industries)."
              }
            },
            {
              "@type": "Question",
              "name": "What is the cost of running Google Ads in India?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Google Ads management fees in India range from ₹5,000–₹10,000/month (starter) to ₹25,000+/month (premium), excluding the actual ad spend budget. The ad spend itself depends on your industry — local service businesses typically need ₹5,000–₹20,000/month in ad budget to see meaningful results."
              }
            },
            {
              "@type": "Question",
              "name": "Can I do digital marketing myself to save costs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Partially, yes. A business owner can handle basic social media posting and Google Business Profile management. However, technical SEO, paid ad campaigns, and content strategy have steep learning curves. A practical approach: handle community engagement yourself, and hire an agency for strategy, SEO, and paid advertising."
              }
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${baseUrl}/blog` },
            { "@type": "ListItem", "position": 3, "name": postData.title, "item": `${baseUrl}${postData.canonicalPath}` }
          ]
        }
      ]
    };

    schemaScript.textContent = JSON.stringify(schema);

    // Remove any previous blog post schema
    const existing = document.getElementById('blog-post-schema');
    if (existing) existing.remove();

    document.head.appendChild(schemaScript);

    // Also add keywords meta
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', postData.seoKeywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      metaKeywords.content = postData.seoKeywords;
      document.head.appendChild(metaKeywords);
    }

    // Set robots meta
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    } else {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      metaRobots.content = 'index, follow';
      document.head.appendChild(metaRobots);
    }

    // Set og:image
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', postData.ogImage);
    } else {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      ogImage.setAttribute('content', postData.ogImage);
      document.head.appendChild(ogImage);
    }

    // Set og:type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute('content', 'article');
    }

    // Set article published time
    let articlePub = document.querySelector('meta[property="article:published_time"]');
    if (!articlePub) {
      articlePub = document.createElement('meta');
      articlePub.setAttribute('property', 'article:published_time');
      document.head.appendChild(articlePub);
    }
    articlePub.setAttribute('content', `${postData.publishedDate}T00:00:00+05:30`);

    // Set article modified time
    let articleMod = document.querySelector('meta[property="article:modified_time"]');
    if (!articleMod) {
      articleMod = document.createElement('meta');
      articleMod.setAttribute('property', 'article:modified_time');
      document.head.appendChild(articleMod);
    }
    articleMod.setAttribute('content', `${postData.modifiedDate}T00:00:00+05:30`);

    // Cleanup
    return () => {
      const el = document.getElementById('blog-post-schema');
      if (el) el.remove();
    };
  }, [postData]);

  // 404 if slug not found
  if (!postData) {
    return <Navigate to="/blog" replace />;
  }

  const ContentComponent = blogContentRegistry[slug];

  return (
    <div className="blogpost-page" ref={containerRef}>
      <SEO
        title={postData.seoTitle}
        description={postData.seoDescription}
      />
      <article className="bp-article" itemScope itemType="https://schema.org/Article">
        <ContentComponent />
      </article>
    </div>
  );
}
