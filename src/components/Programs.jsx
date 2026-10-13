import { FaSeedling, FaBookOpen, FaFlask, FaGraduationCap } from 'react-icons/fa'

const programs = [
  {
    icon: FaSeedling,
    title: 'Crèche & Early Years',
    desc: 'A warm, play-based foundation where curiosity, language and confidence take root.',
    color: 'from-brand to-pink-500',
  },
  {
    icon: FaBookOpen,
    title: 'Primary School',
    desc: 'Strong literacy, numeracy and character education through engaging, modern teaching.',
    color: 'from-pink-500 to-fuchsia-500',
  },
  {
    icon: FaFlask,
    title: 'Secondary School',
    desc: 'Rigorous academics, sciences and leadership training that prepare students for top results.',
    color: 'from-fuchsia-500 to-purple-600',
  },
  {
    icon: FaGraduationCap,
    title: 'College & A-Levels',
    desc: 'University pathway programmes with outstanding placement into leading institutions.',
    color: 'from-purple-600 to-brand',
  },
]

export default function Programs() {
  return (
    <section id="academics" className="relative py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-brand/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[.3em] text-brand">Our Academics</p>
          <h2 className="font-display mt-4 text-4xl font-extrabold sm:text-5xl">
            Programmes for Every Stage of Growth
          </h2>
          <p className="mt-4 text-white/60">
            From first steps to university gates — one seamless journey of excellence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => {
            const Icon = p.icon
            return (
            <div
              key={p.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[.03] p-8 transition-hover duration-500 ease-in-out hover:-translate-y-2 hover:border-brand/40 hover:shadow-2xl hover:shadow-brand/10"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.color} opacity-0 transition-opacity group-hover:opacity-100`}
              />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/15 text-2xl text-brand">
                <Icon />
              </div>
              <h3 className="font-display mt-6 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{p.desc}</p>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
