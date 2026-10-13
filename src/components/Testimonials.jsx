const testimonials = [
  {
    quote:
      'Peacefield transformed my daughter. The teachers genuinely care, and her confidence has soared beyond anything we imagined.',
    name: 'Mrs. Chiamaka N.',
    role: 'Parent, Primary 4',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote:
      'The labs, the mentors, the discipline — everything here pushed me to aim higher. I got into my dream university.',
    name: 'Emeka O.',
    role: 'Alumnus, Class of 2023',
    img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote:
      'From the first tour we knew this was home. A safe, modern campus and warm staff — Peacefield delivers.',
    name: 'Mr. & Mrs. Adeyemi',
    role: 'Parents of two students',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-28">
      {/* <div className="pointer-events-none absolute left-0 bottom-0 h-96 w-96 rounded-full bg-brand/10 blur-[130px]" /> */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.3em] text-brand">Testimonials</p>
          <h2 className="font-display mt-4 text-4xl font-extrabold sm:text-5xl">
            Loved by Families, Trusted by Parents
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="testimonial-card reveal rounded-3xl border border-white/10 bg-white/[.03] p-8 hover:-translate-y-2 hover:border-brand/40"
              style={{ '--reveal-delay': `${i * 60}ms` }}
            >
              <span className="font-display text-5xl leading-none text-brand">“</span>
              <blockquote className="mt-4 text-white/75 leading-relaxed">{t.quote}</blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover ring-2 ring-brand/50" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-white/50">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
