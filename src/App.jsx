import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Dashboard from './pages/Dashboard'
import News from './pages/News'
import Certificate from './pages/Certificate'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Apply from './pages/Apply'
import LiveChat from './components/LiveChat'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/news" element={<News />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <LiveChat />
      </div>
    </BrowserRouter>
  )
}

export default App
