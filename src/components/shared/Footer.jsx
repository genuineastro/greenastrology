import React from 'react'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden
                       bg-[#060e08]
                       border-t border-[rgba(74,163,89,0.15)]
                       py-10 px-4">

      {/* subtle top glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2
                      w-150 h-px
                      bg-linear-to-r from-transparent via-[rgba(74,163,89,0.5)] to-transparent" />

      {/* bg radial bloom */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2
                      w-125 h-50
                      bg-[radial-gradient(ellipse_at_bottom,rgba(20,80,34,0.14),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto
                      flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <polygon points="18,2 34,12 34,24 18,34 2,24 2,12"
              fill="rgba(30,107,48,0.3)" stroke="rgba(93,207,114,0.55)" strokeWidth="1"/>
            <polygon points="18,7 29,13.5 29,22.5 18,29 7,22.5 7,13.5"
              fill="rgba(30,107,48,0.4)" stroke="rgba(93,207,114,0.3)" strokeWidth="0.5"/>
            <circle cx="18" cy="18" r="3.5" fill="#5dcf72" opacity="0.9"/>
          </svg> */}

          <div className=" size-8 overflow-hidden rounded-xl flex items-center justify-center">
            <img src="/logo.jpeg" alt="logo" className="h-full w-full" />
          </div>

          <span className="font-['Cinzel',serif] text-sm font-semibold
                           text-[#7ecc8f] tracking-[3px] uppercase">
            Acharya Ji
          </span>
        </div>

        {/* Copyright */}
        <div>

          <p className="text-[11px] text-[rgba(180,220,185,0.38)] text-center
                      tracking-wide leading-relaxed">
            © 2024 Acharya Ji · London, United Kingdom
            <span className="mx-2 text-[rgba(74,163,89,0.3)]">·</span>
            All consultations are private and confidential.
          </p>

          <p className="text-[11px] text-[rgba(180,220,185,0.38)] text-center
                      tracking-wide leading-relaxed">
           Designed and developed by
            <span className="mx-2 text-[rgba(74,163,89,0.3)]">·</span>
            <a href="http://techbooth.in" target='_blank' className=' text-blue-700 underline '>TECHBOOTH</a>
          </p>

        </div>

        {/* Links */}
        <div className="flex gap-5 text-[11px] tracking-widest uppercase">
          {["Privacy", "Terms", "Contact"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-[rgba(180,220,185,0.38)]
                         hover:text-[#5dcf72]
                         transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </div>

      </div>
    </footer>
  )
}

export default Footer