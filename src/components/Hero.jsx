import school from "../assets/peacefieldschool.png"

import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden ">
      {/* School building background */}
      <img
        src={school}
        alt="Peacefield school campus"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Linear gradient overlay: dark base -> brand tint -> transparent top */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-brand/20" />

      {/* soft glowing accent */}
      <div className="animate-glow absolute -bottom-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-40 text-center">
        <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.25em] text-brand-soft backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Admissions Open · 2026 / 2027
        </p>

        <h1 className="animate-fade-up delay-100 font-display mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">
          Nuturing Global
          <span className="block bg-gradient-to-r from-brand to-brand-soft bg-clip-text text-transparent">
            Leaders
          </span>
        </h1>

        <p className="animate-fade-up delay-200 mx-auto mt-6 max-w-2xl text-lg text-white/70">
          Peacefield Private Schools blends world-class academics, character development
          and innovation — raising confident leaders from crèche to college.
        </p>

        <div className="animate-fade-up delay-300 mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="group rounded-full bg-brand px-8 py-4 font-semibold text-white transition-all hover:bg-brand-soft hover:shadow-xl hover:shadow-brand/40"
          >
            Apply for Admission
            <FaArrowRight className="ml-2 inline-block text-sm transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#about"
            className="rounded-full border border-white/25 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:border-brand hover:text-brand"
          >
            Discover Peacefield
          </a>
        </div>
      </div>

      {/* scroll hint */}
      <div className="animate-fade-up delay-400 absolute bottom-7 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full p-1.5">
          <span className="h-3 w-1 animate-bounce rounded-full bg-brand" />
        </div>
      </div>
    </section>
  )
}
