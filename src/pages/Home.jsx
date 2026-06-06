import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero-home.jpg'
import p1 from '../assets/program-it.jpg'
import p2 from '../assets/program-business.jpg'
import p3 from '../assets/program-theology.jpg'
import slide1 from '../assets/slide-campus.jpg'
import slide2 from '../assets/slide-training.jpg'
import slide3 from '../assets/slide-community.jpg'

const slides = [
  { src: slide1, title: 'Campus life' },
  { src: slide2, title: 'Ministry training' },
  { src: slide3, title: 'Career growth' },
]

const upcomingEvents = [
  { title: 'Graduation Ceremony', message: 'Celebrate the 2026 cohort.', date: 'June 20' },
  { title: 'Orientation Week', message: 'Welcome new students.', date: 'July 4' },
  { title: 'Open Day', message: 'Invite friends and family to campus.', date: 'Aug 10' },
  { title: 'Retreat Session', message: 'Leadership development weekend.', date: 'Sept 2' },
]

const stats = [
  { value: '15+', label: 'Years of service' },
  { value: '2,000+', label: 'Graduate alumni' },
  { value: '20+', label: 'Programmes offered' },
  { value: '95%', label: 'Student satisfaction' },
]

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0)
  const [tickerIndex, setTickerIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((current) => (current + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((current) => (current + 1) % upcomingEvents.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="home-page">
      <section className="home-hero container">
        <div className="hero-copy">
          <span className="eyebrow">Journey Christian Training Institute</span>
          <h1>Christ-centered training for leaders who transform communities.</h1>
          <p>Practical, values-driven education with strong spiritual support for emerging leaders in Kenya and beyond.</p>
          <div className="hero-actions">
            <Link to="/programs" className="btn btn-primary">View Programmes</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Admissions</Link>
          </div>
          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-card">
            <img src={heroImg} alt="Students collaborating" />
            <div className="visual-tag">Empowering & transforming lives</div>
          </div>
        </div>
      </section>

      <section className="slider-section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow secondary">Featured Stories</p>
            <h2>On-campus highlights</h2>
          </div>
        </div>
        <div className="slider">
          {slides.map((slide, index) => (
            <div key={slide.title} className={`slide ${index === slideIndex ? 'active' : ''}`}>
              <img src={slide.src} alt={slide.title} />
            </div>
          ))}
        </div>
        <div className="slider-controls">
          {slides.map((_, index) => (
            <button
              key={index}
              className={index === slideIndex ? 'dot active' : 'dot'}
              onClick={() => setSlideIndex(index)}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="ticker-section container">
        <div className="ticker-header">
          <h3>Upcoming events</h3>
          <span>Stay up to date with key campus activities.</span>
        </div>
        <div className="event-ticker">
          <div className="ticker-slide" style={{ transform: `translateX(-${tickerIndex * 100}%)` }}>
            {upcomingEvents.map((event) => (
              <div key={event.title} className="ticker-item">
                <div>
                  <h4>{event.title}</h4>
                  <p>{event.message}</p>
                </div>
                <span>{event.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features container">
        <h2>Why learners choose JCTI</h2>
        <div className="cards">
          <div className="card">
            <h3>Practical courses</h3>
            <p>Real-world skills built around ministry, business, and technology.</p>
          </div>
          <div className="card">
            <h3>Christian values</h3>
            <p>Character formation is embedded in every programme and campus activity.</p>
          </div>
          <div className="card">
            <h3>Supportive community</h3>
            <p>Dedicated staff, mentors, and students who help you grow.</p>
          </div>
          <div className="card">
            <h3>Modern facilities</h3>
            <p>Access to classrooms, labs, and digital resources for every trainee.</p>
          </div>
        </div>
      </section>

      <section className="programs container">
        <div className="section-heading">
          <div>
            <p className="eyebrow secondary">Our Programmes</p>
            <h2>Learn with purpose</h2>
          </div>
          <Link to="/programs" className="text-link">View all programmes</Link>
        </div>
        <div className="program-list modern">
          {[
            { title: 'IT Certificate', description: '6 months of hands-on digital skills and cloud-ready competencies.', image: p1 },
            { title: 'Business Diploma', description: 'Grow practical leadership and management skills for today’s marketplace.', image: p2 },
            { title: 'Theology Diploma', description: 'Deepen your understanding of scripture and ministry practice.', image: p3 },
          ].map((program) => (
            <article key={program.title} className="program-card modern">
              <img src={program.image} alt={program.title} />
              <div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <Link to="/programs" className="btn btn-secondary">Explore</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
