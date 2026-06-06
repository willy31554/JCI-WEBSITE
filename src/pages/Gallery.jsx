import slide1 from '../assets/gallery-1.jpg'
import slide2 from '../assets/gallery-2.jpg'
import slide3 from '../assets/gallery-3.jpg'
import hero from '../assets/gallery-4.jpg'

const galleryItems = [
  { title: 'Campus Fellowship', img: slide1 },
  { title: 'Classroom Sessions', img: slide2 },
  { title: 'Graduation Day', img: slide3 },
  { title: 'Weekend Retreat', img: hero },
  { title: 'Student Leaders', img: slide1 },
  { title: 'Community Outreach', img: slide2 },
]

export default function Gallery() {
  return (
    <div className="gallery-page">
      <section className="page-hero page-hero-small">
        <div>
          <span className="eyebrow">Gallery</span>
          <h1>Memories from campus life at JCTI.</h1>
        </div>
      </section>

      <div className="gallery-layout container">
        <aside className="gallery-sidebar">
          <h3>Filter by category</h3>
          <ul>
            <li className="active">All</li>
            <li>Classes</li>
            <li>Events</li>
            <li>Ministry</li>
            <li>Sports</li>
          </ul>
          <button className="btn btn-primary">Load More</button>
        </aside>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <article key={item.title} className="gallery-card">
              <img src={item.img} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>Explore the moments that shape our community.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
