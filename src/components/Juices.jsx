import { motion } from 'framer-motion'
import React from 'react'

const juices = [
  { name: 'Jabłko', color: 'from-rose-600 to-rose-700', badge: 'Słodko-kwasne', dot: 'bg-emerald-500' },
  { name: 'Jabłko + Gruszka', color: 'from-amber-500 to-amber-600', badge: 'Aromatyczne', dot: 'bg-amber-500' },
  { name: 'Jabłko + Śliwka', color: 'from-violet-600 to-violet-700', badge: 'Głębokie', dot: 'bg-violet-500' },
]

export default function Juices() {
  return (
    <section id="juices" className="relative">
      <div className="absolute inset-0 -z-10 [background-image:linear-gradient(0deg,rgba(125,18,39,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(125,18,39,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-[800] text-rose-900">Nasze soki</h2>
          <p className="mt-3 text-rose-900/80">Klasyka z sadu + sezonowe połączenia.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {juices.map((j, i) => (
            <motion.div
              key={j.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="rounded-3xl border-2 border-rose-900/10 bg-rose-50 p-6 shadow-sm"
            >
              <div className={`h-40 w-full rounded-2xl bg-gradient-to-br ${j.color} relative overflow-hidden shadow-inner`}> 
                <motion.div
                  className={`absolute right-4 top-4 h-3 w-3 rounded-full ${j.dot}`}
                  whileHover={{ scale: 1.4 }}
                />
                <motion.div
                  className="absolute inset-0"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ background: 'radial-gradient(20px 8px at 10% 15%, rgba(255,255,255,0.25), transparent 60%)' }}
                />
              </div>
              <h3 className="mt-4 text-xl font-[900] text-rose-900">{j.name}</h3>
              <p className="text-sm text-rose-900/70">{j.badge}</p>
              <div className="mt-4 flex gap-2 text-sm">
                <span className="rounded-full bg-rose-100 px-3 py-1 text-rose-900">3L Bag‑in‑Box</span>
                <span className="rounded-full bg-rose-100 px-3 py-1 text-rose-900">5L Bag‑in‑Box</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
