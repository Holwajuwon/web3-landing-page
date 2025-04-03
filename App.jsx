import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Features />
        <Stats />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default App