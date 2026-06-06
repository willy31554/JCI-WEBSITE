export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>Journey Christian Training Institute</strong>
          <p>Empowering Christ-centered leaders across Kenya and beyond.</p>
        </div>
        <div className="footer-links">
          <a href="#">Programs</a>
          <a href="#">Admissions</a>
          <a href="#">Student Portal</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} JCTI. All rights reserved.</p>
      </div>
    </footer>
  )
}
