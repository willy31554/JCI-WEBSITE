export default function Contact() {
  return (
    <div className="contact-page">
      <section className="page-hero page-hero-small">
        <div>
          <span className="eyebrow">Contact Us</span>
          <h1>Ready to connect with JCTI admissions and support?</h1>
          <p>Send a message, visit our campus, or contact our team by phone or email.</p>
        </div>
      </section>

      <div className="contact-layout container">
        <div className="contact-card">
          <h2>Get in touch</h2>
          <p>Call or email our admissions office for programme guidance and registration support.</p>
          <div className="contact-item">
            <strong>Phone</strong>
            <span>+254 700 000 000</span>
          </div>
          <div className="contact-item">
            <strong>Email</strong>
            <span>info@jcti.ac.ke</span>
          </div>
          <div className="contact-item">
            <strong>Location</strong>
            <span>Kikuyu Road, Nairobi, Kenya</span>
          </div>
        </div>

        <form className="contact-form">
          <label>Full Name</label>
          <input placeholder="Your full name" />
          <label>Email Address</label>
          <input placeholder="Your email address" />
          <label>Phone Number</label>
          <input placeholder="+254 7XX XXX XXX" />
          <label>Your Message</label>
          <textarea rows="5" placeholder="Write your message here" />
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  )
}
