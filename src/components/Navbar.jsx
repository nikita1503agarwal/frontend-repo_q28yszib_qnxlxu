import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '#features', label: 'Features' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Customers' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-gradient-to-tr from-indigo-500 to-cyan-500" />
          <span className="font-bold text-lg tracking-tight">Yapp360</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 transition-colors">
            Get a demo
          </a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-slate-700">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white font-medium">
              Get a demo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
