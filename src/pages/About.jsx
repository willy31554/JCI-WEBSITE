import heroImg from '../assets/hero-about.jpg'

export default function About() {
  const values = [
    'Respect',
    'Integrity',
    'Team Work',
    'Godliness',
    'Excellence',
    'Service',
    'Compassion',
    'Dignity',
  ]

  return (
    <div className="about-page">
      <section className="page-hero about-hero">
        <div>
          <span className="eyebrow">About Us</span>
          <h1>About Journey Christian Training Institute</h1>
          <p>
            JCTI raises leaders through faith-based education, practical ministry training,
            and community service for Kenya and beyond.
          </p>
          <div className="hero-keycards">
            <div className="hero-card">
              <strong>Our Vision</strong>
              <p>Shape servant leaders for holistic development and spiritual impact.</p>
            </div>
            <div className="hero-card">
              <strong>Our Mission</strong>
              <p>Train graduates with integrity, ministry skills, and marketplace readiness.</p>
            </div>
          </div>
        </div>
        <div className="hero-image-panel">
          <img src={heroImg} alt="About JCTI" />
        </div>
      </section>

      <section className="about-values container">
        <h2>Core Values</h2>
        <div className="values-grid">
          {values.map((item) => (
            <div key={item} className="value-card">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="quote-card container">
        <p>
          “Empowering and transforming lives through Christ-centered education, leadership,
          and vocational excellence.”
        </p>
      </section>
    </div>
  )
}
