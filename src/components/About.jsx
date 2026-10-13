import students from "../assets/students.jpg"

import { FaCheck } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Image collage */}
        <div className="reveal relative">
          <img
            src={students}
            alt="Students learning in class"
            className="aspect-[full] w-full rounded-3xl object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop"
            alt="Peacefield classroom"
            className="animate-float absolute -right-6 -bottom-10 hidden w-2/3 rounded-3xl border-8 border-ink object-cover shadow-2xl sm:block"
          />
          <div className="absolute -left-4 -top-4 -z-10 h-40 w-40 rounded-3xl bg-brand/30 blur-2xl" />
        </div>

        {/* Text */}
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-[.3em] text-brand">About Peacefield</p>
          <h2 className="font-display mt-1 text-4xl font-extrabold leading-tight sm:text-5xl">
            A Legacy of Excellence,
            <span className="text-brand"> Built on Character</span>
          </h2>
          <p className="mt-6 text-white/65 leading-relaxed">
            For over three decades, Peacefield Private Schools has stood for one thing —
            raising well-rounded students who excel academically and lead with integrity.
            Our serene campus, modern laboratories and passionate educators create an
            environment where every child thrives.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              'British & Nigerian blended curriculum',
              'Small class sizes with personalised attention',
              'State-of-the-art ICT, science and sports facilities',
              'Certified, passionate and caring teaching staff',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/80">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/20 text-[10px] text-brand"><FaCheck /></span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#academics"
            className="mt-10 inline-block rounded-full border border-brand px-7 py-3.5 font-semibold text-brand transition-all hover:bg-brand hover:text-white"
          >
            Explore Our Academics
          </a>
        </div>
      </div>
    </section>
  )
}
