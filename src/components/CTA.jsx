import { useState } from 'react'

export default function CTA() {
  const [status, setStatus] = useState('')
  const [form, setForm] = useState({ name: '', email: '', company: '' })
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'landing' }),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('Thanks! We will reach out shortly.')
      setForm({ name: '', email: '', company: '' })
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl font-bold text-slate-900">See Yapp360 in action</h3>
          <p className="mt-3 text-slate-600">Tell us a bit about you and we'll schedule a personalized walkthrough for your use case.</p>
          <ul className="mt-6 space-y-2 text-slate-600 text-sm list-disc list-inside">
            <li>How we ship features 10x faster</li>
            <li>What it takes to launch to the app stores</li>
            <li>Ways to migrate from your existing solution</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 gap-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Work email" required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input name="company" value={form.company} onChange={handleChange} placeholder="Company" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <button type="submit" className="mt-2 inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700">Request demo</button>
            {status && <p className="text-sm text-slate-600">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
