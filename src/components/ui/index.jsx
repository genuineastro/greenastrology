'use client'
import { WA_LINK } from "@/lib/constants";
import { useInView } from "@/lib/hooks";
import { useEffect } from "react";

// ── SectionBadge ──────────────────────────────────────────────────────────────

export function SectionBadge({ children }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4
                          text-[10px] tracking-[3.5px] uppercase text-[#4db86a]
                          before:content-[''] before:block before:w-5 before:h-px before:bg-[#4db86a]
                          after:content-['']  after:block  after:w-5  after:h-px  after:bg-[#4db86a]">
      {/* <span className="w-1.5 h-1.5 rounded-full bg-[#4db86a] animate-pulse shadow-[0_0_6px_rgba(77,184,106,0.8)]" /> */}
      {children}
    </div>
  );
}

// ── SectionHeading ─────────────────────────────────────────────────────────────

export function SectionHeading({ title, subtitle, accent }) {
  return (
    <div className="text-center mb-6 md:mb-14">
      <h2 className="font-['Cinzel',serif] text-4xl md:text-5xl font-bold
                     text-[#e8f5ea] mb-2 md:mb-4 leading-tight">
        {accent ? (
          <>
            {title}{" "}
            <span className="bg-linear-to-r from-[#5dcf72] to-[#9edaab]
                             bg-clip-text text-transparent">
              {accent}
            </span>
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="text-base text-[rgba(180,220,185,0.55)] max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export function Section({ children, className = "", id = "" }) {
  return (
    <section
      id={id}
      className={`py-10 md:py-20 px-4 max-w-7xl mx-auto relative ${className}`}
    >
      {children}
    </section>
  );
}

export function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-amber-400">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const IG_LINK = "https://instagram.com/your-handle-here";

// ── Shared button shell ───────────────────────────────────────────────────────
function FAB({ href, label, tooltip, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative flex items-center justify-center
                 w-14 h-14 rounded-full
                 bg-[#0d1c10]
                 border border-[rgba(74,163,89,0.35)]
                 shadow-[0_4px_24px_rgba(6,14,8,0.7)]
                 hover:scale-110
                 hover:border-[rgba(93,207,114,0.6)]
                 hover:bg-[rgba(20,60,28,0.9)]
                 hover:shadow-[0_0_32px_rgba(30,107,48,0.45)]
                 transition-all duration-300"
    >
      {/* shared ping ring */}
      <div className="absolute inset-0 rounded-full
                      bg-[rgba(74,163,89,0.1)]
                      animate-ping opacity-75" />

      {/* icon slot */}
      <div className="relative z-10 text-[#5dcf72] group-hover:text-[#9edaab] transition-colors duration-300">
        {children}
      </div>

      {/* shared tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2
                       bg-[#0d1c10] border border-[rgba(74,163,89,0.3)]
                       text-[#9edaab] text-[10px] font-semibold tracking-widest uppercase
                       px-3 py-1.5 rounded-full whitespace-nowrap
                       opacity-0 group-hover:opacity-100 pointer-events-none
                       transition-opacity duration-200
                       shadow-[0_0_16px_rgba(6,14,8,0.9)]">
        {tooltip}
      </span>
    </a>
  );
}

// ── WhatsApp ──────────────────────────────────────────────────────────────────
export function FloatingWA() {
  return (
    <FAB href={WA_LINK} label="Chat on WhatsApp" tooltip="Chat Now">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </FAB>
  );
}

export function WAIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-current`}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
// ── Instagram ─────────────────────────────────────────────────────────────────
export function FloatingIG() {
  return (
    <FAB href={IG_LINK} label="Follow on Instagram" tooltip="Follow Us">
      <svg
        viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.75"
        strokeLinecap="round" strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    </FAB>
  );
}

// ── Combined floating stack ───────────────────────────────────────────────────
export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <FloatingIG />
      <FloatingWA />
    </div>
  );
}

/* ------ Avatar circle ------─ */
export function Avatar({ name, size = "md" }) {
  const sz = size === "lg" ? "w-14 h-14 text-lg" : size === "sm" ? "w-8 h-8 text-xs" : "w-10 h-10 text-sm";
  return (
    <div className={`${sz} rounded-full bg-linear-to-br from-[#ff4fa1] to-[#9333ea] flex items-center justify-center text-white font-bold flex-shrink-0`}>
      {name[0]}
    </div>
  );
}

/* ------ Section pill badge ------ */
export function Pill({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
      bg-[rgba(255,79,161,0.12)] border border-[rgba(255,79,161,0.30)]
      text-[#ff4fa1] text-[11px] font-bold uppercase tracking-[0.15em] mb-5">
      <span className="w-1.5 h-1.5 rounded-full bg-[#ff4fa1] animate-[glowPulse_2s_ease-in-out_infinite]" />
      {children}
    </div>
  );
}

/* ------ Section heading ------─ */
export function SectionTitle({
  title, subtitle, light = false
}) {
  return (
    <div className="mb-6 md:mb-14">
      <h2 className={`display text-4xl md:text-5xl font-bold leading-tight mb-4
        ${light ? "text-[#1a0840]" : "text-white"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto leading-relaxed
          ${light ? "text-[#6b21a8]/70" : "text-purple-200/60"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ------ Scroll-triggered reveal ------─ */
export function Reveal({
  children,
  delay = 0,
  className = "",
}) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ------ WhatsApp CTA button ------─ */
export function WAButton({
  href, children, size = "md", className = ""
}) {
  const sz = size === "lg"
    ? "px-10 py-5 text-lg gap-3"
    : size === "sm"
      ? "px-5 py-2.5 text-sm gap-2"
      : "px-7 py-3.5 text-base gap-2.5";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center rounded-[1rem] font-bold text-white
        bg-linear-to-r from-green-500 to-green-600
        shadow-[0_0_30px_rgba(34,197,94,0.35)] hover:shadow-[0_0_50px_rgba(34,197,94,0.55)]
        hover:scale-105 transition-all duration-300 ${sz} ${className}`}
    >
      <WAIcon className="w-5 h-5 flex-shrink-0" />
      {children}
    </a>
  );
}


export function Modal({
  open, onClose, children, maxW = "max-w-2xl"
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[500] flex items-center justify-center p-4"
      style={{ background: "rgba(7,1,26,0.88)", backdropFilter: "blur(10px)" }}
      onClick={onClose}
    >
      <div
        className={`relative w-full ${maxW} rounded-[1.5rem] overflow-hidden shadow-2xl
          bg-[#120730] border border-white/10`}
        style={{ animation: "modalIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both" }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full
            bg-white/10 hover:bg-white/20 transition-colors
            flex items-center justify-center"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}