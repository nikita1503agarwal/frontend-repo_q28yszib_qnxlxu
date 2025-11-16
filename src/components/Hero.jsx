import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Build, manage, and grow mobile experiences without the hassle
          </motion.h1>
          <p className="mt-6 text-lg text-slate-700 max-w-xl">
            Launch branded apps, push updates in minutes, and engage customers across iOS and Android. All from one simple dashboard.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition-colors">
              Request a demo
            </a>
            <a href="#features" className="inline-flex items-center rounded-md border border-slate-300 px-6 py-3 text-slate-800 font-semibold hover:bg-white transition-colors">
              Explore features
            </a>
          </div>
          <div className="mt-6 text-sm text-slate-500">No code required • Enterprise-grade security • 24/7 support</div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="relative">
          <div className="aspect-video rounded-xl border border-slate-200 shadow-sm bg-white p-2">
            <div className="h-full w-full rounded-lg bg-gradient-to-tr from-indigo-500/15 to-cyan-500/15 grid place-items-center text-slate-600">
              <div className="text-center">
                <div className="text-8xl">📱</div>
                <p className="mt-3 font-medium">Your branded app preview</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-cyan-100 blur-2xl" />
        </motion.div>
      </div>
    </section>
  )
}
