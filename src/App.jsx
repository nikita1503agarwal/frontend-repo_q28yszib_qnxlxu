import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <CTA />
      <footer className="py-10 border-t border-slate-200 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Yapp360. All rights reserved.
      </footer>
    </div>
  )
}

export default App
