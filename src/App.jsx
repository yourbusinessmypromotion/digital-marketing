
import "./App.css";

const services = [
  {
    icon: "📱",
    title: "Social Media Marketing",
    description:
      "Build your brand on Instagram, Facebook and other social platforms with engaging content.",
  },
  {
    icon: "🚀",
    title: "Google Ads & SEO",
    description:
      "Reach customers searching for your products and services through Google.",
  },
  {
    icon: "💻",
    title: "Website Development",
    description:
      "Get a professional, mobile-friendly website that turns visitors into customers.",
  },
  {
    icon: "🎨",
    title: "Graphic Design & Branding",
    description:
      "Make your business stand out with professional logos, banners and creatives.",
  },
  {
    icon: "📲",
    title: "WhatsApp Marketing",
    description:
      "Connect with customers, share updates and generate more business enquiries.",
  },
  {
    icon: "📈",
    title: "Business Growth Strategy",
    description:
      "Get a digital marketing strategy designed around your business goals.",
  },
];

function App() {
  const whatsappNumber = "91XXXXXXXXXX";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello! I want to grow my business with YourBusinessMyPromotion."
  )}`;

  return (
    <div className="website">
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
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-button" href={whatsappLink} target="_blank" rel="noreferrer">
          Let's Talk ↗
        </a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              ✦ DIGITAL MARKETING THAT MOVES YOU FORWARD
            </div>

            <h1>
              Your Business.
              <br />
              Your Growth.
              <br />
              <span>Our Promotion.</span>
            </h1>

            <p className="hero-description">
              Helping businesses across Andhra Pradesh and Telangana
              grow online, reach more customers and build powerful brands.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="primary-button">
                Grow Your Business ↗
              </a>
              <a href="#services" className="secondary-button">
                Explore Services →
              </a>
            </div>

            <div className="hero-note">
              <span className="status-dot"></span>
              Your local partner for digital growth
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow"></div>

            <div className="growth-card">
              <div className="card-top">
                <span>YOUR DIGITAL GROWTH</span>
                <span className="live-badge">● LIVE</span>
              </div>

              <div className="growth-heading">
                Grow beyond limits.
              </div>

              <div className="chart">
                <div className="chart-bar bar-1"></div>
                <div className="chart-bar bar-2"></div>
                <div className="chart-bar bar-3"></div>
                <div className="chart-bar bar-4"></div>
                <div className="chart-bar bar-5"></div>
                <div className="chart-bar bar-6"></div>
                <div className="chart-bar bar-7"></div>
              </div>

              <div className="chart-footer">
                <span>Strategy</span>
                <span>Visibility</span>
                <span>Growth</span>
              </div>
            </div>

            <div className="floating-card">
              <span>✦</span>
              <div>
                <strong>Think Digital</strong>
                <small>Grow Without Limits</small>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <p>EMPOWERING BUSINESSES ACROSS</p>
          <div>
            <span>Andhra Pradesh</span>
            <span>✦</span>
            <span>Telangana</span>
            <span>✦</span>
            <span>India</span>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE DO</span>
            <h2>
              Everything your business needs
              <br />
              <span>to grow digitally.</span>
            </h2>
            <p>
              Smart digital solutions to help your business get noticed,
              attract customers and grow.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <span className="service-number">
                  0{index + 1}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact">Get Started ↗</a>
              </article>
            ))}
          </div>
        </section>

        <section className="about section" id="about">
          <div className="about-content">
            <span className="eyebrow">WHY CHOOSE US</span>
            <h2>
              Local understanding.
              <br />
              <span>Digital expertise.</span>
            </h2>
            <p>
              We believe every business deserves an opportunity to
              grow online. We help local businesses, startups and
              entrepreneurs build their digital presence with
              practical marketing solutions.
            </p>
            <a href="#contact" className="primary-button">
              Let's Grow Together ↗
            </a>
          </div>

          <div className="about-box">
            <div className="about-symbol">Y</div>
            <h3>Your Business Matters.</h3>
            <p>
              Your success is the reason we do what we do.
              Let's build something great together.
            </p>
            <div className="about-location">
              📍 Andhra Pradesh & Telangana
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-box">
            <span className="eyebrow">LET'S START SOMETHING GREAT</span>
            <h2>
              Ready to grow
              <br />
              <span>your business?</span>
            </h2>
            <p>
              Tell us about your business. Let's find the right
              digital marketing solution for you.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              Chat With Us on WhatsApp ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer" id="footer">
        <a href="#home" className="logo">
          <span className="logo-icon">Y</span>
          <span>
            YourBusiness
            <strong>MyPromotion</strong>
          </span>
        </a>
        <p>© {new Date().getFullYear()} YourBusinessMyPromotion. All rights reserved.</p>
        <a href="#home">Back to top ↑</a>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        ☎
      </a>
    </div>
  );
}

export default App;
