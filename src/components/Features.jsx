import { CheckCircle, Bell, Rocket, LayoutGrid, Shield, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: <Rocket className="h-6 w-6 text-indigo-600" />, 
    title: 'Launch fast', 
    desc: 'Go from idea to live app in days, not months — without expensive dev cycles.'
  },
  {
    icon: <LayoutGrid className="h-6 w-6 text-indigo-600" />, 
    title: 'One dashboard', 
    desc: 'Manage content, users, and updates across iOS and Android from a single place.'
  },
  {
    icon: <Bell className="h-6 w-6 text-indigo-600" />, 
    title: 'Push notifications', 
    desc: 'Target the right users at the right time with rich segmentation and automation.'
  },
  {
    icon: <Shield className="h-6 w-6 text-indigo-600" />, 
    title: 'Enterprise security', 
    desc: 'SSO, audit logs, and role-based access built-in for teams at scale.'
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-indigo-600" />, 
    title: 'Analytics that matter', 
    desc: 'Measure retention, engagement, and conversion with clear dashboards.'
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-indigo-600" />, 
    title: 'App store ready', 
    desc: 'We handle submissions and updates, you focus on your customers.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Everything you need to run a world-class app</h2>
        <p className="mt-4 text-slate-600 text-center max-w-2xl mx-auto">A complete suite to design, launch, and grow your mobile presence — without writing a line of code.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-indigo-50 mb-4">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
