import React from 'react'
import Hero from './components/Hero'
import Why from './components/Why'
import Juices from './components/Juices'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f5f2] text-rose-900">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/50 border-b border-rose-900/10">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          <a href="#" className="font-black tracking-wide text-rose-900">Rodzinny Sad</a>
          <nav className="flex gap-5 text-sm">
            <a href="#why" className="hover:text-rose-700 transition-colors">Dlaczego my</a>
            <a href="#juices" className="hover:text-rose-700 transition-colors">Nasze soki</a>
            <a href="#contact" className="hover:text-rose-700 transition-colors">Kontakt</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Why />
        <Juices />
        <Contact />
      </main>

      <footer className="border-t border-rose-900/10 bg-rose-50">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-rose-900/70 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Rodzinny Sad • Wszystkie prawa zastrzeżone</p>
          <p>Naturalnie tłoczone soki • Bag‑in‑Box • Polska</p>
        </div>
      </footer>
    </div>
  )
}
