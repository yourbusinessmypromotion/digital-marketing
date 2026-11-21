import { useState } from "react";
import "./App.css";

// 💡 TIP: Replace this with your actual WhatsApp business number (include country code 91 without +)
const WHATSAPP_NUMBER = "919876543210";

const services = [
  {
    icon: "🚀",
    title: "Google Ads & Local SEO",
    tag: "High Intent",
    description:
      "Get found at the very top of Google when customers in your city actively search for your products or services.",
  },
  {
    icon: "📱",
    title: "Social Media Marketing",
    tag: "Brand Awareness",
    description:
      "Engaging Instagram & Facebook ad campaigns that generate high-quality inquiries and build brand authority.",
  },
  {
    icon: "💻",
    title: "High-Converting Websites",
    tag: "24/7 Sales Engine",
    description:
      "Lightning-fast, mobile-friendly landing pages and business websites engineered to turn visitors into paying customers.",
  },
  {
    icon: "📲",
    title: "WhatsApp Marketing & Automation",
    tag: "Direct Inquiries",
    description:
      "Reach customers directly on WhatsApp with promotional campaigns, instant replies, and automated booking funnels.",
  },
  {
    icon: "🎨",
    title: "Graphic Design & Brand Identity",
    tag: "Stand Out",
    description:
      "Eye-catching logos, festival creatives, brochures, and ad designs that make your business look world-class.",
  },
  {
    icon: "📈",
    title: "Full-Funnel Growth Strategy",
    tag: "ROI Focused",
    description:
      "Tailor-made digital roadmap combining paid ads, retargeting, and conversion optimization to scale your revenue.",
  },
];

const stats = [
  { number: "50+", label: "Businesses Scaled" },
  { number: "300%", label: "Avg. Inquiries Increase" },
  { number: "4.9 ★", label: "Client Satisfaction" },
  { number: "100%", label: "ROI-Driven Campaigns" },
];

const testimonials = [
  {
    quote:
      "Our dental clinic in Vijayawada saw a 4x jump in patient appointments within 60 days of launching their local SEO and Google Ads campaign. Outstanding results!",
    name: "Dr. R. Varma",
    role: "Founder, Multispeciality Dental Care",
    location: "Vijayawada, AP",
    rating: 5,
  },
  {
    quote:
      "The best marketing investment we made for our Hyderabad real estate projects. They built a slick landing page and ran Meta ads that brought 140+ qualified leads in one month.",
    name: "K. Srinivas Rao",
    role: "Director, Prime Properties",
    location: "Hyderabad, Telangana",
    rating: 5,
  },
  {
    quote:
      "They took our retail fashion brand online across Vizag and coastal AP. Professional, proactive, and always responsive on WhatsApp. Highly recommended!",
    name: "Ananya Reddy",
    role: "Owner, Elegance Boutique",
    location: "Visakhapatnam, AP",
    rating: 5,
  },
];

const steps = [
  {
    num: "01",
    title: "Free 15-Minute Growth Audit",
    desc: "We analyze your current digital presence, examine your top local competitors, and identify untapped opportunities.",
  },
  {
    num: "02",
    title: "Customized Strategy Blueprint",
    desc: "We design a focused campaign combining SEO, social ads, and high-converting pages tailored to your budget.",
  },
  {
    num: "03",
    title: "Launch & Consistent Inquiries",
    desc: "We execute, track, and optimize continuously, delivering real customer inquiries straight to your phone and WhatsApp.",
  },
];

const faqs = [
  {
    q: "How soon can I expect results from digital marketing?",
    a: "Google Ads and Social Media campaigns typically start generating inquiries within 3 to 7 days of launch. Organic SEO builds compounding momentum and delivers consistent long-term results within 60–90 days.",
  },
  {
    q: "Do you create marketing content in Telugu as well as English?",
    a: "Yes! We specialize in localized regional marketing, creating compelling ad copies, video scripts, and banners in both Telugu and English to maximize engagement across Andhra Pradesh and Telangana.",
  },
  {
    q: "What is the minimum budget required to start?",
    a: "We work with small local businesses, startups, and growing enterprises alike. We create tailored plans starting from flexible monthly budgets that ensure maximum return on investment.",
  },
  {
    q: "How do we get started?",
    a: "Simply submit the form below or message us on WhatsApp for a free 15-minute consultation. We'll review your goals and share a clear growth roadmap.",
  },
];

const serviceCities = [
  "Hyderabad",
  "Visakhapatnam",
  "Vijayawada",
  "Guntur",
  "Tirupati",
  "Warangal",
  "Nellore",
  "Rajahmundry",
  "Kakinada",
  "Kurnool",
];

function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    service: "Google Ads & Local SEO",
    budget: "Flexible",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  const baseWhatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello! I am interested in growing my business with YourBusinessMyPromotion. Please share details."
  )}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const message = `*New Growth Audit Inquiry:*%0A` +
      `• *Name:* ${formData.name}%0A` +
      `• *Phone:* ${formData.phone}%0A` +
      `• *City:* ${formData.city || "Not specified"}%0A` +
      `• *Service:* ${formData.service}%0A` +
      `• *Budget:* ${formData.budget}`;

    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    setIsSubmitted(true);
    window.open(link, "_blank");
  };

  return (
    <div className="website">
      {/* Top Banner */}
      <div className="announcement-bar">
        <span>⚡ Limited Offer:</span> Claim your <strong>Free 15-Minute Digital Marketing Audit</strong> for your business today!
        <a href="#contact">Claim Audit ↗</a>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <a href="#home" className="logo">
          <span className="logo-icon">Y</span>
          <span>
            YourBusiness
            <strong>MyPromotion</strong>
          </span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-button" href="#contact">
          Free Growth Audit ↗
        </a>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow-badge">
              <span>✦</span> TOP-RATED DIGITAL MARKETING IN AP & TELANGANA
            </div>

            <h1>
              Get More Leads, Sales & Customers.
              <br />
              <span>Our Proven Promotion.</span>
            </h1>

            <p className="hero-description">
              We help local businesses, startups, and service providers across
              <strong> Andhra Pradesh & Telangana</strong> dominate their market.
              Turn online traffic into consistent, paying customers with ROI-focused SEO,
              Google Ads, Social Media, and High-Converting Websites.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="primary-button pulse-button">
                Claim Free 15-Min Audit ↗
              </a>
              <a
                href={baseWhatsappLink}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-button"
              >
                <span>💬</span> Chat on WhatsApp
              </a>
            </div>

            <div className="hero-trust-chips">
              <div className="chip">
                <span className="stars">★★★★★</span>
                <span><strong>4.9/5</strong> Rating from 50+ Local Businesses</span>
              </div>
              <div className="chip-location">
                <span className="status-dot"></span>
                <span>Serving Hyderabad, Vizag, Vijayawada & across AP & TS</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow"></div>

            <div className="growth-card">
              <div className="card-top">
                <span>CLIENT GROWTH DASHBOARD</span>
                <span className="live-badge">● LIVE RESULTS</span>
              </div>

              <div className="growth-metric-box">
                <div className="metric-val">+340%</div>
                <div className="metric-desc">Monthly Customer Inquiries</div>
              </div>

              <div className="chart">
                <div className="chart-bar bar-1"><span>Mo 1</span></div>
                <div className="chart-bar bar-2"><span>Mo 2</span></div>
                <div className="chart-bar bar-3"><span>Mo 3</span></div>
                <div className="chart-bar bar-4"><span>Mo 4</span></div>
                <div className="chart-bar bar-5"><span>Mo 5</span></div>
                <div className="chart-bar bar-6"><span>Mo 6</span></div>
                <div className="chart-bar bar-7"><span>Mo 7</span></div>
              </div>

              <div className="chart-footer">
                <span>🎯 Targeted Traffic</span>
                <span>⚡ Fast Conversion</span>
                <span>📈 Real Revenue</span>
              </div>
            </div>

            <div className="floating-card">
              <span>🚀</span>
              <div>
                <strong>Verified ROI</strong>
                <small>Every ₹1 Spent Drives Real Inquiries</small>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="stats-strip">
          <div className="stats-container">
            {stats.map((s) => (
              <div className="stat-item" key={s.label}>
                <h3>{s.number}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="services section" id="services">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE DO</span>
            <h2>
              Everything Your Business Needs
              <br />
              <span>to Get More Paying Customers.</span>
            </h2>
            <p>
              Skip the guesswork. We implement battle-tested marketing systems tailored
              specifically to businesses across Andhra Pradesh and Telangana.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <span className="service-tag">{service.tag}</span>
                </div>
                <span className="service-number">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="service-link">
                  Get Inquiries for This ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="steps-section section" id="how-it-works">
          <div className="section-heading">
            <span className="eyebrow">OUR SIMPLE 3-STEP PROCESS</span>
            <h2>
              How We Turn Online Searches
              <br />
              <span>Into Loyal Clients.</span>
            </h2>
            <p>
              No complicated technical talk. We make the entire process clear, transparent, and focused on revenue.
            </p>
          </div>

          <div className="steps-grid">
            {steps.map((st) => (
              <div className="step-card" key={st.num}>
                <div className="step-num">{st.num}</div>
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials / Social Proof Section */}
        <section className="testimonials-section section" id="testimonials">
          <div className="section-heading">
            <span className="eyebrow">CLIENT SUCCESS STORIES</span>
            <h2>
              Trusted by Local Business Owners
              <br />
              <span>Across AP & Telangana.</span>
            </h2>
            <p>
              Here is what entrepreneurs, clinic directors, and business founders say about working with us.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.name}>
                <div className="stars">{"★".repeat(t.rating)}</div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.name[0]}</div>
                  <div>
                    <h4>{t.name}</h4>
                    <p className="author-role">{t.role}</p>
                    <span className="author-loc">📍 {t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Regional Locations Strip */}
        <section className="cities-strip">
          <div className="cities-content">
            <span className="cities-label">📍 PROUDLY HELPING BUSINESSES GROW IN:</span>
            <div className="city-tags">
              {serviceCities.map((city) => (
                <span key={city} className="city-pill">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section section" id="faq">
          <div className="section-heading">
            <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2>
              Got Questions?
              <br />
              <span>We Have Answers.</span>
            </h2>
          </div>

          <div className="faq-container">
            {faqs.map((f, idx) => (
              <div
                className={`faq-item ${activeFaq === idx ? "open" : ""}`}
                key={f.q}
                onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
              >
                <div className="faq-question">
                  <h4>{f.q}</h4>
                  <span className="faq-icon">{activeFaq === idx ? "−" : "+"}</span>
                </div>
                {activeFaq === idx && <p className="faq-answer">{f.a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* High-Converting Lead Capture Section */}
        <section className="contact section" id="contact">
          <div className="contact-wrapper">
            <div className="contact-info">
              <span className="eyebrow">START GETTING LEADS TODAY</span>
              <h2>
                Claim Your Free 15-Minute
                <br />
                <span>Digital Growth Audit.</span>
              </h2>
              <p>
                Fill out the quick form to see exactly how your business can get more customer inquiries.
                We'll review your website, Google ranking, and social presence at zero cost.
              </p>

              <div className="guarantee-points">
                <div className="g-point">
                  <span>✓</span>
                  <div>
                    <strong>100% Free & No Obligation</strong>
                    <small>Actionable insights you can use immediately.</small>
                  </div>
                </div>
                <div className="g-point">
                  <span>✓</span>
                  <div>
                    <strong>Fast 24-Hour Response</strong>
                    <small>Direct WhatsApp or phone consultation.</small>
                  </div>
                </div>
                <div className="g-point">
                  <span>✓</span>
                  <div>
                    <strong>Local Market Specialists</strong>
                    <small>Deep experience in AP and Telangana consumer habits.</small>
                  </div>
                </div>
              </div>

              <div className="direct-call-box">
                <span>Prefer to speak right now?</span>
                <a
                  href={baseWhatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="quick-whatsapp-link"
                >
                  💬 Quick Chat on WhatsApp ↗
                </a>
              </div>
            </div>

            {/* Interactive Lead Generation Form */}
            <div className="form-card">
              {isSubmitted ? (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h3>Thank You!</h3>
                  <p>
                    Your request has been forwarded to our WhatsApp line.
                    Our digital growth specialist will get in touch with you shortly.
                  </p>
                  <a
                    href={baseWhatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-button"
                  >
                    Open WhatsApp Chat Now ↗
                  </a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="reset-btn"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="audit-form">
                  <h3>Get Your Free Strategy Plan</h3>
                  <p className="form-sub">No spam. Only high-value insights.</p>

                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="city">City / Town</label>
                      <input
                        id="city"
                        type="text"
                        placeholder="e.g. Hyderabad / Vizag"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="service">Service Needed</label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                      >
                        <option value="Google Ads & Local SEO">Google Ads & SEO</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Website Development">Website Development</option>
                        <option value="WhatsApp Marketing">WhatsApp Marketing</option>
                        <option value="Graphic Design & Branding">Graphic Design</option>
                        <option value="Complete Digital Strategy">Full Digital Strategy</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="primary-button submit-btn">
                    Claim Free Growth Audit ↗
                  </button>

                  <div className="privacy-note">
                    🔒 Your details are 100% confidential. No spam guaranteed.
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer" id="footer">
        <a href="#home" className="logo">
          <span className="logo-icon">Y</span>
          <span>
            YourBusiness
            <strong>MyPromotion</strong>
          </span>
        </a>
        <p>
          © {new Date().getFullYear()} YourBusinessMyPromotion. All rights reserved.
          <br />
          Dedicated Digital Growth Partner for Businesses Across Andhra Pradesh & Telangana.
        </p>
        <a href="#home">Back to top ↑</a>
      </footer>

      {/* Floating Sticky WhatsApp Button */}
      <a
        className="whatsapp-float"
        href={baseWhatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <span className="wa-icon">💬</span>
        <span className="wa-tooltip">Chat with us</span>
      </a>
    </div>
  );
}

export default App;
