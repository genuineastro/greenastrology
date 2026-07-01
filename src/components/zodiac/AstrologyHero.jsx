"use client";

import { useEffect, useRef } from "react";
import ZodiacWheel from "./Zodiacwheel";
import { MarqueeReviews } from "../sections/TrustBar";
import { IG_LINK, WA_LINK } from "@/lib/constants";
import { MessageCircle, MessageCircleCheck } from "lucide-react";

const NAV_LINKS = ["Home", "About Us", "Gallery", "Blogs", "Contact Us"];

function OrbitDot() {
  return (
    <div className="absolute inset-0 animate-[cosmicSpin_8s_linear_infinite] pointer-events-none">
      <div
        className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-green-500"
        style={{ boxShadow: "0 0 10px #4db86a, 0 0 22px rgba(77,184,106,0.5)" }}
      />
    </div>
  );
}

export default function AstrologyHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    function draw() {
      const wrap = canvas.parentElement;
      canvas.width = wrap.offsetWidth;
      canvas.height = wrap.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < 160; i++) {
        const x = Math.random() * canvas.width, y = Math.random() * canvas.height;
        const r = Math.random() * 1.4;
        const a = 0.12 + Math.random() * 0.5;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${120 + Math.floor(Math.random() * 80)},220,${140 + Math.floor(Math.random() * 60)},${a})`;
        ctx.fill();
      }
    }
    draw();
    const obs = new ResizeObserver(draw);
    obs.observe(canvas.parentElement);
    return () => obs.disconnect();
  }, []);

  function navigate(link) {
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      {/* Only keyframes + Google Fonts — everything else is Tailwind */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;500&display=swap');
        @keyframes cosmicSpin   { to { transform: rotate(360deg);  } }
        @keyframes counterSpin  { to { transform: rotate(-360deg); } }
        @keyframes pulseGlow    {
          0%,100% { opacity:.45; transform:scale(1);    }
          50%      { opacity:1;   transform:scale(1.1); }
        }
        .font-cinzel  { font-family:'Cinzel',serif; }
        .font-raleway { font-family:'Raleway',sans-serif; }
        .animate-counter-spin { animation: counterSpin 40s linear infinite; }
        .animate-pulse-glow   { animation: pulseGlow   4s  ease-in-out infinite; }
          @keyframes pulse-wa {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.45); }
          50%      { box-shadow: 0 0 0 8px rgba(37,211,102,0); }
        }
      `}</style>

      <section className="font-raleway relative overflow-hidden min-h-screen" style={{ background: "#080f0a" }}>

        {/* Star canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" aria-hidden="true" />

        {/* ── NAV ── */}
        <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-4 md:py-5 border-b border-green-900/30 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 flex-shrink-0"
              style={{
                background: "linear-gradient(135deg,#1a4a25,#2e8b45)",
                clipPath: "polygon(50% 0%,100% 50%,50% 100%,0% 50%)"
              }}
              aria-hidden="true"
            />
            <span className="font-cinzel text-[13px] tracking-[3px] uppercase text-green-400">Acharya Ji</span>
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-7 list-none m-0 p-0">
            {NAV_LINKS.map(l => (
              <li key={l}>
                <a href="#" className="text-green-200/50 no-underline text-[11px] tracking-[1.5px] uppercase hover:text-green-400 transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex gap-2">
            {[{ s: "in", label: "LinkedIn" }, { s: "f", label: "Facebook" }, { s: "𝕏", label: "X" }, { s: "▶", label: "YouTube" }].map(({ s, label }) => (
              <button key={s} aria-label={label}
                className="w-7 h-7 rounded-full border border-green-700/40 flex items-center justify-center
                           text-green-200/50 text-[10px] font-bold bg-transparent
                           hover:border-green-500 hover:text-green-400 transition-colors cursor-pointer"
              >{s}</button>
            ))}
          </div>
        </nav>

        {/* ── HERO: DESKTOP (side-by-side) / MOBILE (stack) ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

          {/* ── MOBILE LAYOUT ── */}
          <div className="md:hidden flex flex-col-reverse pt-8 pb-12">

            {/* Left text */}
            <div>
              <p className="flex max-md:hidden items-center gap-3 text-[10px] tracking-[4px] uppercase text-green-500 mb-4">
                <span className="inline-block w-5 h-px bg-green-600" />
                Best Astrologer in London
              </p>
              <h1 className="font-cinzel text-[clamp(28px,3.5vw,46px)] font-bold leading-[1.2] text-green-50 mb-5">
                London's Most{" "}
                <span style={{ color: "#5dcf72" }}>Trusted Love</span>
                <br />&amp; Relationship
                <br />Healer
              </h1>
              <p className="text-[13.5px] leading-relaxed text-green-200/55 max-w-sm mb-8">
                Acharya Ji has helped{" "}
                <strong className="text-green-400">thousands</strong>{" "}
                rebuild relationships, resolve marriage problems, and find love again — across the UK.
              </p>
              
              <div className="flex gap-3 flex-wrap">

                {/* ── WhatsApp ── */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2.5
      font-raleway px-6 py-3.5 rounded-md
      text-[11px] tracking-[2px] uppercase font-semibold
      bg-[#25D366] text-white
      hover:bg-[#22c25e] hover:scale-[1.03]
      hover:shadow-[0_8px_24px_rgba(37,211,102,0.45)]
      active:scale-[0.98]
      transition-all duration-300
      animate-[pulse-wa_2.4s_ease-in-out_infinite]"
                >
                  <WhatsAppIcon
                    className="w-4 h-4 group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-300"
                  />

                  <span>WhatsApp</span>

                  {/* Notification Dot */}
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white">
                    <span className="absolute inset-0 rounded-full bg-white animate-ping" />
                  </span>
                </a>

                {/* ── Instagram ── */}
                <a
                  href={IG_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2.5
      font-raleway px-6 py-3.5 rounded-md
      text-[11px] tracking-[2px] uppercase font-semibold
      text-white overflow-hidden
      hover:scale-[1.03]
      active:scale-[0.98]
      transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg,#f9ce34 0%,#ee2a7b 45%,#6228d7 100%)",
                  }}
                >
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg,#fcdd5c 0%,#f2488f 45%,#7b3ce8 100%)",
                    }}
                  />

                  <InstagramIcon
                    className="relative w-4 h-4 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300"
                  />

                  <span className="relative">Instagram</span>
                </a>

              </div>
              {/* screen shots review */}
              <div className="md:hidden">
                <MarqueeReviews auto className="md:hidden" />
                <p className="text-center text-[10px] tracking-widest uppercase
                      text-[rgba(180,220,185,0.3)] mt-8">
                  Click any card to read full review
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-7 mt-8 pt-6 border-t border-green-900/40">
                {[["15k+", "Happy Clients"], ["20+", "Years Exp"], ["98%", "Success Rate"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-cinzel text-2xl font-bold" style={{ color: "#5dcf72" }}>{n}</div>
                    <div className="text-[10px] tracking-widest uppercase text-green-200/40 mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* FULL-WIDTH PHOTO — like reference screenshot */}
            <div className="mb-2">
              <p className="flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-green-500 mb-4">
                <span className="inline-block w-5 h-px bg-green-600" />
                Best Astrologer in London
              </p>

              <div className="relative w-full rounded-2xl overflow-hidden"
                style={{ aspectRatio: "4/5", background: "linear-gradient(160deg,#0d1f10,#05100a)" }}>


                {/* Subtle zodiac ring overlay — purely decorative, doesn't interfere with photo */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <ZodiacWheel />
                </div>

                {/* Photo */}
                <img
                  src="/gallery/img-c-3.jpg"
                  alt="Acharya Ji — Vedic Astrologer"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  onError={e => { e.currentTarget.style.display = "none"; }}
                />

                {/* Bottom gradient */}
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top,rgba(8,15,10,0.8) 0%,transparent 50%)" }} />

                {/* Badge */}
                <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center z-10">
                  <span className="font-cinzel text-[13px] tracking-wide text-green-100">Acharya Ji</span>
                  <span className="text-[9px] tracking-[2px] uppercase text-green-500 mt-1">
                    Love &amp; Relationship Specialist
                  </span>
                </div>

                {/* Tag top-right */}
                <div className="absolute top-3 right-3 z-10
                              px-3 py-1 rounded-full border border-green-600/50 bg-green-900/80
                              text-[9px] tracking-[1.5px] uppercase text-green-300 backdrop-blur-sm">
                  ✦ Vedic Expert
                </div>

                {/* Stats row pinned at very bottom over gradient */}
                {/* <div className="absolute bottom-14 left-0 right-0 flex justify-center gap-6 z-10">
                {[["15k+","Clients"],["20+","Yrs Exp"],["98%","Success"]].map(([n,l])=>(
                  <div key={l} className="text-center">
                    <div className="font-cinzel text-lg font-bold" style={{color:"#5dcf72"}}>{n}</div>
                    <div className="text-[9px] tracking-widest uppercase text-green-200/40 mt-0.5">{l}</div>
                  </div>
                ))}
              </div> */}
              </div>

            </div>

          </div>

          {/* ── DESKTOP LAYOUT ── */}
          <div className="hidden md:grid grid-cols-2 gap-12 items-center py-16">

            {/* Left text */}
            <div>
              <p className="flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-green-500 mb-4">
                <span className="inline-block w-5 h-px bg-green-600" />
                Best Astrologer in London
              </p>
              <h1 className="font-cinzel text-[clamp(28px,3.5vw,46px)] font-bold leading-[1.2] text-green-50 mb-5">
                London's Most{" "}
                <span style={{ color: "#5dcf72" }}>Trusted Love</span>
                <br />&amp; Relationship
                <br />Healer
              </h1>
              <p className="text-[13.5px] leading-relaxed text-green-200/55 max-w-sm mb-8">
                Acharya Ji has helped{" "}
                <strong className="text-green-400">thousands</strong>{" "}
                rebuild relationships, resolve marriage problems, and find love again — across the UK.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => navigate(WA_LINK)}
                  className="font-raleway px-6 py-3 rounded-sm text-[11px] tracking-[2px] uppercase
                                   bg-green-800 text-green-100 border-none cursor-pointer
                                   hover:bg-green-700 transition-colors">
                  Whatsapp us
                </button>
                <button
                  onClick={() => navigate(IG_LINK)}
                  className="font-raleway px-6 py-3 rounded-sm text-[11px] tracking-[2px] uppercase
                                   bg-transparent text-green-400 border border-green-700/50 cursor-pointer
                                   hover:border-green-500 transition-colors">
                  Instagram
                </button>
              </div>
              {/* Stats */}
              <div className="flex gap-7 mt-8 pt-6 border-t border-green-900/40">
                {[["15k+", "Happy Clients"], ["20+", "Years Exp"], ["98%", "Success Rate"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-cinzel text-2xl font-bold" style={{ color: "#5dcf72" }}>{n}</div>
                    <div className="text-[10px] tracking-widest uppercase text-green-200/40 mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: zodiac ring + portrait photo */}
            <div className="flex items-center justify-center">
              <div className="relative flex flex-col-reverse lg:flex-row items-center justify-center" style={{ width: 540, height: 540 }}>
                {/* Spinning zodiac ring */}
                <ZodiacWheel className="max-lg:w-70 max-lg:h-70 size-150" />

                {/* Counter-spin inner dashed ring */}
                <svg width="290" height="290" viewBox="0 0 290 290"
                  className="absolute animate-counter-spin"
                  style={{ inset: "45px", position: "absolute" }}
                  aria-hidden="true">
                  <circle cx="145" cy="145" r="136" fill="none" stroke="rgba(77,184,106,0.07)" strokeWidth="0.5" strokeDasharray="3 9" />
                </svg>

                {/* Glow blob */}
                <div className="absolute w-48 h-48 rounded-full pointer-events-none animate-pulse-glow"
                  style={{ background: "radial-gradient(circle,rgba(45,180,80,0.2) 0%,transparent 70%)" }} />

                {/* Orbiting dot */}
                <OrbitDot />

                {/* Portrait card */}
                <div
                  className="relative max-lg:w-40 w-70 z-10 overflow-hidden border"
                  style={{
                    // width: 280,
                    aspectRatio: "3/4",
                    borderRadius: "12px 12px 80px 80px",
                    borderColor: "rgba(77,184,106,0.35)",
                    boxShadow: "0 0 0 6px rgba(77,184,106,0.07),0 0 40px rgba(45,180,80,0.18),0 20px 60px rgba(0,0,0,0.5)",
                    background: "linear-gradient(160deg,#0d1f10,#05100a)"
                  }}
                >
                  <img src="/gallery/img-c-3.jpg" alt="Acharya Ji"
                    className="w-full h-full object-cover object-top block"
                    onError={e => { e.currentTarget.style.display = "none"; }} />
                  {/* gradient overlay */}
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(to top,rgba(8,15,10,0.75) 0%,transparent 45%)" }} />
                  {/* Floating tag */}
                  <div className="absolute top-1 right-1 z-10
                                  px-3 py-1 rounded-full border border-green-600/50 bg-green-900/90
                                  text-[9px] tracking-[1.5px] uppercase text-green-300 backdrop-blur-sm">
                    ✦ Vedic Expert
                  </div>
                  {/* Name badge */}
                  <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center z-10">
                    <span className="font-cinzel text-[13px] tracking-wide text-green-100">Acharya Ji</span>
                    <span className="text-[9px] text-center tracking-[2px] uppercase text-green-500 mt-1">
                      Love &amp; Relationship Specialist
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


/** @typedef {import('react').SVGProps<SVGSVGElement>} IconProps */

/** @param {IconProps} props */
export function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5Zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4Zm9.5 1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 6.5A5.5 5.5 0 1 0 17.5 12 5.5 5.5 0 0 0 12 6.5Zm0 2A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Z" />
    </svg>
  );
}

/** @typedef {import('react').SVGProps<SVGSVGElement>} IconProps */

/** @param {IconProps} props */
export function WhatsAppIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.02 0C5.39 0 0 5.39 0 12.02c0 2.12.56 4.2 1.62 6.03L0 24l6.12-1.6a11.98 11.98 0 0 0 5.9 1.52h.01C18.61 23.92 24 18.53 24 11.9c0-3.2-1.25-6.21-3.48-8.42ZM12.03 21.7c-1.8 0-3.55-.48-5.09-1.4l-.37-.22-3.63.95.97-3.54-.24-.37a9.66 9.66 0 1 1 8.36 4.58Zm5.3-7.24c-.29-.15-1.7-.84-1.96-.94-.26-.09-.45-.14-.64.15-.19.29-.73.94-.9 1.13-.16.2-.33.22-.62.07-.29-.15-1.21-.45-2.3-1.43-.85-.76-1.42-1.7-1.59-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.49.14-.16.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.55-.88-2.13-.23-.56-.47-.49-.64-.5h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43 0 1.43 1.03 2.8 1.17 2.99.15.19 2.02 3.09 4.9 4.33.68.29 1.21.46 1.62.59.68.22 1.29.19 1.78.12.54-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34Z" />
    </svg>
  );
}