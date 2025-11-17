import { motion, useScroll, useTransform } from 'framer-motion'
import { Apple } from 'lucide-react'
import React from 'react'

const Gingham = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -40])
  const opacity = useTransform(scrollY, [0, 400], [0.35, 0.15])

  return (
    <motion.div
      aria-hidden
      style={{ y, opacity }}
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="absolute inset-0 [background-image:linear-gradient(0deg,rgba(125,18,39,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(125,18,39,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />
    </motion.div>
  )
}

const RotatingApple = () => {
  return (
    <motion.div
      className="relative h-40 w-40 rounded-full bg-gradient-to-br from-rose-700 to-rose-600 shadow-[inset_0_8px_24px_rgba(255,255,255,0.25),0_12px_30px_rgba(125,18,39,0.25)] flex items-center justify-center border-4 border-rose-800/50"
      animate={{ rotateY: [0, 360] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
    >
      <Apple className="h-16 w-16 text-rose-50 drop-shadow" strokeWidth={2.5} />
      <motion.span
        className="absolute -top-2 right-8 h-10 w-10 rounded-full bg-emerald-600"
        style={{ boxShadow: 'inset -6px -6px 0 rgba(0,0,0,0.15)' }}
        animate={{ rotate: [ -5, 5, -5 ] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="absolute -top-5 right-6 h-14 w-2 origin-bottom rounded-t-full bg-emerald-700"
        animate={{ rotate: [ -8, -2, -8 ] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Gingham />
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="inline-block rounded-full border-2 border-rose-900/20 bg-rose-50 px-4 py-1 text-xs tracking-wider text-rose-900/90 shadow-sm">Rodzinny sad od 1972</p>
            <h1 className="mt-5 font-[800] leading-tight text-4xl md:text-6xl text-rose-900" style={{ fontFamily: 'Manrope, var(--font-sans)' }}>
              Soki tłoczone z naszego sadu
            </h1>
            <p className="mt-4 max-w-prose text-lg text-rose-900/80">
              Bez koncentratu, bez sztuczek. Tylko dojrzałe owoce, praca własnych rąk i prosty skład.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-full bg-rose-700 text-rose-50 px-6 py-3 text-sm font-semibold shadow hover:bg-rose-800 transition-colors">Zamów teraz</a>
              <a href="#why" className="rounded-full border-2 border-rose-800/30 bg-rose-50 text-rose-900 px-6 py-3 text-sm font-semibold shadow hover:border-rose-800/50 transition-colors">Dlaczego my?</a>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex items-center gap-4 text-sm text-rose-900/70"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700"><span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"/>Bez koncentratu</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-amber-700">Bag‑in‑Box</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-violet-700">Rodzinna tradycja</span>
            </motion.div>
          </div>
          <div className="flex justify-center">
            <RotatingApple />
          </div>
        </div>
      </div>
    </section>
  )
}
