import { motion } from 'framer-motion'
import React from 'react'

const Badge = ({ children, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`rounded-2xl border-2 px-4 py-3 text-sm font-semibold shadow-sm ${color}`}
  >
    {children}
  </motion.div>
)

export default function Why() {
  const items = [
    {
      title: 'Bez koncentratu',
      text: 'Tłoczymy bezpośrednio z owoców – zero odtwarzania z koncentratu.',
      color: 'border-emerald-700/30 bg-emerald-50 text-emerald-800',
      bubble: '100% OWOC'
    },
    {
      title: 'Z naszego sadu',
      text: 'Kontrolujemy cały proces: od gałązki po karton.',
      color: 'border-amber-700/30 bg-amber-50 text-amber-800',
      bubble: 'LOKALNIE'
    },
    {
      title: 'Bag‑in‑Box',
      text: 'Wygodne, świeże dłużej po otwarciu, mniej plastiku.',
      color: 'border-violet-700/30 bg-violet-50 text-violet-800',
      bubble: '3L / 5L'
    },
  ]

  return (
    <section id="why" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-[800] text-rose-900">Dlaczego nasze soki?</h2>
          <p className="mt-3 text-rose-900/80">Krótki skład, długa tradycja i uczciwa robota.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-3xl border-2 border-rose-900/10 bg-rose-50 p-6 shadow-sm"
            >
              <motion.span
                className="absolute -left-2 top-4 rounded-full bg-rose-700 px-3 py-1 text-xs font-bold text-rose-50 shadow"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {it.bubble}
              </motion.span>
              <h3 className="text-xl font-[900] text-rose-900">{it.title}</h3>
              <p className="mt-2 text-rose-900/80">{it.text}</p>
              <div className="mt-4"><Badge color={it.color}>Dowiedz się więcej</Badge></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
