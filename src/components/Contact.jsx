import { motion } from 'framer-motion'
import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-[800] text-rose-900">Zamówienia i współpraca</h2>
            <p className="mt-3 text-rose-900/80">Skontaktuj się bezpośrednio – odpowiemy tego samego dnia.</p>
            <ul className="mt-6 space-y-3 text-rose-900">
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-emerald-600"/>B2C: zamówienia dla domów, przyjęć, szkół</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-amber-600"/>B2B: sklepy, kawiarnie, hotele, firmy
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:kontakt@rodzinny-sad.pl" className="rounded-full bg-rose-700 text-rose-50 px-6 py-3 text-sm font-semibold shadow hover:bg-rose-800 transition-colors">kontakt@rodzinny-sad.pl</a>
              <a href="tel:+48123456789" className="rounded-full border-2 border-rose-800/30 bg-rose-50 text-rose-900 px-6 py-3 text-sm font-semibold shadow hover:border-rose-800/50 transition-colors">+48 123 456 789</a>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e)=> e.preventDefault()}
            className="rounded-3xl border-2 border-rose-900/10 bg-rose-50 p-6 shadow-sm"
          >
            <div className="grid gap-4">
              <label className="text-sm font-semibold text-rose-900">Imię i nazwisko
                <input className="mt-1 w-full rounded-xl border-2 border-rose-900/20 bg-white px-4 py-2 outline-none focus:border-rose-700" placeholder="Jan Kowalski"/>
              </label>
              <label className="text-sm font-semibold text-rose-900">E‑mail
                <input type="email" className="mt-1 w-full rounded-xl border-2 border-rose-900/20 bg-white px-4 py-2 outline-none focus:border-rose-700" placeholder="jan@przyklad.pl"/>
              </label>
              <label className="text-sm font-semibold text-rose-900">Wiadomość
                <textarea rows={4} className="mt-1 w-full rounded-xl border-2 border-rose-900/20 bg-white px-4 py-2 outline-none focus:border-rose-700" placeholder="Napisz kilka słów..."/>
              </label>
            </div>
            <button className="mt-4 rounded-full bg-rose-700 text-rose-50 px-6 py-3 text-sm font-semibold shadow hover:bg-rose-800 transition-colors">Wyślij</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
