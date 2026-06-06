import img1 from '../assets/program-it.jpg'
import img2 from '../assets/program-business.jpg'
import img3 from '../assets/program-theology.jpg'
import { Link } from 'react-router-dom'

export default function Programs() {
  const programs = [
    { title: 'Certificate in Information Technology', category: 'IT Programmes', duration: '6 Months', fees: 'Ksh 25,000', img: img1 },
    { title: 'Diploma in Business Management', category: 'Professional Programmes', duration: '2 Years', fees: 'Ksh 60,000', img: img2 },
    { title: 'Diploma in Theology', category: 'Leadership & Ministry', duration: '2 Years', fees: 'Ksh 45,000', img: img3 },
  ]

  return (
    <div className="programs-page">
      <section className="page-hero page-hero-small">
        <div>
          <span className="eyebrow">Our Programmes</span>
          <h1>Learn with practical ministry, business, and technology programmes.</h1>
        </div>
      </section>

      <section className="program-filters container">
        <button className="pill active">All Programmes</button>
        <button className="pill">Professional</button>
        <button className="pill">Ministry</button>
        <button className="pill">Leadership</button>
      </section>

      <section className="programme-list container">
        {programs.map((program) => (
          <article key={program.title} className="programme-row">
            <div className="programme-meta">
              <img src={program.img} alt={program.title} />
              <div>
                <h3>{program.title}</h3>
                <span className="programme-category">{program.category}</span>
              </div>
            </div>
            <div className="programme-details">
              <span>{program.duration}</span>
              <strong>{program.fees}</strong>
            </div>
            <div className="programme-actions">
              <button className="btn btn-secondary">Learn More</button>
              <Link to={`/apply?program=${encodeURIComponent(program.title)}`} className="btn btn-primary">Apply Now</Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
