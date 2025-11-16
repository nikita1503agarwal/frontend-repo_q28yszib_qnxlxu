export default function Logos(){
  const logos = ['Acme Co', 'Northwind', 'Globex', 'Initech', 'Umbrella', 'Stark']
  return (
    <section className="py-12 border-y border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center text-slate-500 text-sm">Trusted by modern teams</div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center text-slate-400">
          {logos.map(l => (
            <div key={l} className="text-center font-semibold tracking-wide uppercase">{l}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
