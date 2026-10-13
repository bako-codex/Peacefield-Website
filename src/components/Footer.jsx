import logo from '../assets/peacefield.png'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Peacefield logo" className="h-11 w-11 object-contain" />
            <span className="font-display text-xl font-bold">
              Peacefield <span className="text-brand">Private Schools</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
            Raising confident, brilliant and disciplined leaders from crèche to college.
            Knowledge · Integrity · Excellence.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/50">
            {['About', 'Academics', 'Faculty', 'Campus', 'Contact'].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="inline-block transition-all duration-300 hover:text-[15.5px] hover:text-brand">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/50">
            <li>42, Adaloko Road, Afromedia, Lagos, Nigeria</li>
            <li>J.karirienokaro@gmail.com</li>
            <li>Enquires.peacefield@gmail.com</li>
            <li>+234 803 606 7636</li>
            <li>Mon – Fri · 7:30am – 5:00pm</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Peacefield Private Schools. All rights reserved.
      </div>
    </footer>
  )
}
