import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/JCI logo.jpeg'
import Notifications from './Notifications'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <Link to="/" className="logo">
            <img src={logo} alt="JCTI logo" width="60" height="60" />
          </Link>
          <span className="tag">Journey Christian Training Institute</span>
        </div>

        <div className="header-actions">
          <Notifications />
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>

        <nav className={`main-nav ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/news">News</Link>
          <Link to="/certificate">Certificate</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/dashboard" className="btn btn-primary">Student Portal</Link>
        </nav>
      </div>
    </header>
  )
}
