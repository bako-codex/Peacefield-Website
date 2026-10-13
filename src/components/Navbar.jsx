import { useEffect, useState } from 'react'
import peacefield from "../assets/peacefield.png"


const links = ['Home', 'About', 'Academics', 'Faculty', 'Campus', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink/80 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2">
          <img src={peacefield} alt="Peacefield logo" className="h-15 w-15 object-fill" />
          <span className="font-display text-lg font-bold tracking-tight">
            Peacefield <span className="text-brand">Schools</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm font-medium text-white/70 transition-all duration-300 hover:text-[15.5px] hover:text-brand"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-soft hover:shadow-lg hover:shadow-brand/40 lg:block"
        >
          Enroll Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-white transition-all ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition-all ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? 'max-h-96 border-b border-white/10 bg-ink/95 backdrop-blur-xl' : 'max-h-0'
        }`}
      >
        <ul className="space-y-1 px-6 py-4">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-white/80 transition-all duration-300 hover:bg-white/5 hover:text-lg hover:text-brand"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
