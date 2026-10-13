import { FaPhoneAlt } from 'react-icons/fa'
import childImage from '../assets/child.jpg'

export default function CTA() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal relative isolate overflow-hidden rounded-[2.5rem] px-8 py-16 text-left sm:px-16 sm:py-20">
          <img
            src={childImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/25" />
          <h2 className="font-display relative max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Give Your Child the
            <span className="text-brand"> Peacefield Advantage</span>
          </h2>
          <p className="relative mt-5 max-w-xl text-white/80">
            Applications for the 2026/2027 academic session are now open.
            Schedule a campus tour or speak with our admissions team today.
          </p>
          <div className="relative mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:admissions@peacefield.edu.ng"
              className="rounded-full bg-brand px-8 py-4 font-semibold text-white transition-all hover:bg-brand-soft hover:shadow-xl hover:shadow-brand/40"
            >
              Start an Application
            </a>
            <a
              href="tel:+2348000000000"
              className="rounded-full border border-white/25 px-8 py-4 font-semibold transition-all hover:border-brand hover:text-brand"
            >
              <FaPhoneAlt className="mr-2 inline-block text-sm" /> +234 800 000 0000
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
