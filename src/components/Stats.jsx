import { useCountUp } from '../hooks'

const stats = [
  { value: 2400, suffix: '+', label: 'Students Enrolled' },
  { value: 120, suffix: '+', label: 'Expert Teachers' },
  { value: 98, suffix: '%', label: 'University Placement' },
  { value: 35, suffix: '+', label: 'Years of Excellence' },
]

function Stat({ value, suffix, label }) {
  const [ref, count] = useCountUp(value)
  return (
    <div ref={ref} className="text-center">
      <p className="font-numeric text-4xl font-extrabold text-white sm:text-5xl">
        {count.toLocaleString()}
        <span className="text-brand">{suffix}</span>
      </p>
      <p className="mt-2 text-sm uppercase tracking-widest text-white/50">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="relative border-y border-white/10 bg-white/[.02]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 py-16 md:grid-cols-4">
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  )
}
