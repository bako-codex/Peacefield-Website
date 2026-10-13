const photos = [
  {
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
    label: 'Graduation Day',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
    label: 'Learning Together',
  },
  {
    src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop',
    label: 'School Transport',
  },
  {
    src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop',
    label: 'On the Field',
  },
  {
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop',
    label: 'Guided Study',
  },
]

export default function Gallery() {
  return (
    <section id="campus" className="relative border-y border-white/10 bg-white/[.02] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[.3em] text-brand">Campus Life</p>
          <h2 className="font-display mt-4 text-4xl font-extrabold sm:text-5xl">
            Moments at Peacefield
          </h2>
        </div>

        <div className="mt-16 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {photos.map((p) => (
            <figure
              key={p.label}
              className={`reveal group relative overflow-hidden rounded-3xl ${p.className ?? ''}`}
            >
              <img
                src={p.src}
                alt={p.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-5 translate-y-3 text-sm font-semibold opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {p.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
