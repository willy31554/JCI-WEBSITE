import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Apply() {
  const [searchParams] = useSearchParams()
  const prefill = searchParams.get('program') || ''

  const [form, setForm] = useState({ name: '', email: '', phone: '', program: prefill, message: '' })
  const [status, setStatus] = useState(null)

  useEffect(() => {
    if (prefill) setForm((f) => ({ ...f, program: prefill }))
  }, [prefill])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const apps = JSON.parse(localStorage.getItem('jcti_applications') || '[]')
    const record = { ...form, submittedAt: new Date().toISOString() }
    apps.push(record)
    localStorage.setItem('jcti_applications', JSON.stringify(apps))
    setStatus('submitted')
  }

  if (status === 'submitted') {
    return (
      <div className="container">
        <section className="page-hero page-hero-small">
          <div>
            <span className="eyebrow">Application Received</span>
            <h1>Thank you — your application has been received.</h1>
            <p>We will contact you with next steps. Reference saved in your browser.</p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="container apply-page">
      <section className="page-hero page-hero-small">
        <div>
          <span className="eyebrow">Apply</span>
          <h1>Apply for a programme</h1>
          <p>Complete the form below and we will reach out with details.</p>
        </div>
      </section>

      <form className="contact-form" onSubmit={handleSubmit} style={{ marginTop: 24 }}>
        <label>Full Name</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>Email Address</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required />

        <label>Phone Number</label>
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="+254 7xx xxx xxx" />

        <label>Programme</label>
        <input name="program" value={form.program} onChange={handleChange} />

        <label>Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows="4" />

        <button className="btn btn-primary" type="submit">Submit Application</button>
      </form>
    </div>
  )
}
