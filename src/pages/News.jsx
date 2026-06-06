export default function News() {
  const announcements = [
    { title: 'Graduation Ceremony 2024', date: 'May 20, 2024' },
    { title: 'New Intake Ongoing', date: 'Mar 10, 2024' },
    { title: 'Chaplaincy Week', date: 'Jan 15, 2024' },
  ]

  const upcoming = [
    { label: 'Career Day', time: 'June 12' },
    { label: 'Retreat Session', time: 'Sept 2' },
    { label: 'Open Day', time: 'Aug 10' },
  ]

  return (
    <div className="news-page">
      <section className="page-hero page-hero-small">
        <div>
          <span className="eyebrow">News & Announcements</span>
          <h1>Stay current with campus updates and upcoming activities.</h1>
        </div>
      </section>

      <div className="news-layout container">
        <div className="news-list-panel">
          <div className="card-heading">
            <h2>Announcements</h2>
            <div className="pill-group">
              <button className="pill active">All News</button>
              <button className="pill">Admissions</button>
              <button className="pill">Events</button>
            </div>
          </div>
          <div className="news-grid">
            {announcements.map((item) => (
              <article key={item.title} className="news-card">
                <h3>{item.title}</h3>
                <small>{item.date}</small>
                <p>Stay informed with the latest announcements from JCTI campus life and programs.</p>
                <button className="text-button">Learn More</button>
              </article>
            ))}
          </div>
        </div>

        <aside className="news-sidebar">
          <div className="sidebar-card">
            <h3>Upcoming Events</h3>
            <ul>
              {upcoming.map((event) => (
                <li key={event.label}>
                  <span>{event.label}</span>
                  <strong>{event.time}</strong>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar-card highlight">
            <h3>Event Spotlight</h3>
            <p>Join us for the upcoming Career Day to connect with mentors and employers.</p>
            <button className="btn btn-primary">View All Events</button>
          </div>
        </aside>
      </div>
    </div>
  )
}
