import { useState } from 'react'

export default function Certificate() {
  const [number, setNumber] = useState('')
  const [status, setStatus] = useState(null)

  function verify(e) {
    e.preventDefault()
    setStatus(number.trim().toUpperCase() === 'JCTI-1234' ? 'valid' : 'invalid')
  }

  return (
    <div className="certificate-page">
      <section className="page-hero page-hero-small">
        <div>
          <span className="eyebrow">Certificate Verification</span>
          <h1>Verify your certificate quickly and securely.</h1>
        </div>
      </section>

      <div className="verify-layout container">
        <div className="verify-panel">
          <form onSubmit={verify} className="verify-form">
            <label>Certificate Number</label>
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter certificate number"
            />
            <button className="btn btn-primary">Verify Certificate</button>
          </form>
        </div>
        <div className="verify-result-panel">
          {status ? (
            <div className={`verify-result ${status === 'valid' ? 'valid' : 'invalid'}`}>
              {status === 'valid'
                ? 'Certificate is valid and authenticated.'
                : 'Certificate not found. Please check the number and try again.'}
            </div>
          ) : (
            <div className="verify-hint">
              <h3>How it works</h3>
              <p>Enter the certificate number issued by JCTI and get instant validation status.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
