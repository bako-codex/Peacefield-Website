const people = [
  {
    name: 'Dr. Adaeze Okonkwo',
    role: 'Proprietress & Founder',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Mr. Tunde Balogun',
    role: 'Principal, Secondary',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Mrs. Grace Eze',
    role: 'Head of Primary',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Mr. Daniel Osei',
    role: 'Director of Studies',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  },
]

export default function People() {
  return (
    <section id="faculty" className="relative border-y border-white/10 bg-white/[.02] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[.3em] text-brand">Our People</p>
          <h2 className="font-display mt-4 text-4xl font-extrabold sm:text-5xl">
            Leadership That Inspires
          </h2>
          <p className="mt-4 text-white/60">
            Meet the passionate educators guiding the Peacefield family every day.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((person, i) => (
            <div
              key={person.name}
              className="reveal group relative overflow-hidden rounded-3xl"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={person.img}
                alt={person.name}
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-lg font-bold">{person.name}</h3>
                <p className="text-sm text-brand-soft">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
