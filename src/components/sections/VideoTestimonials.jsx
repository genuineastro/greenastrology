'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react'
import { SectionBadge, SectionHeading } from "../ui";
import { VIDEOS } from "@/lib/data";
import { VideoModal } from '../shared/Modals';
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';

// ── Single Short Card ─────────────────────────────────────────────────────────
function ShortCard({ v, i, isActive, onClick }) {
  const iframeRef = useRef(null);
  const [muted, setMuted]   = useState(true);
  const [playing, setPlaying] = useState(false);

  // auto-play when card becomes active
  useEffect(() => {
    if (isActive) {
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  }, [isActive]);

  const src = playing
    ? `https://www.youtube.com/embed/${v.id}?autoplay=1&mute=${muted ? 1 : 0}&controls=0&loop=1&playlist=${v.id}&modestbranding=1&rel=0`
    : `https://www.youtube.com/embed/${v.id}?autoplay=0&controls=0&modestbranding=1&rel=0`;

  return (
    <div
      className={`relative flex-shrink-0 rounded-2xl overflow-hidden
                  bg-[#0d1c10] cursor-pointer
                  transition-all duration-500
                  ${isActive
                    ? "w-[200px] sm:w-[240px] border-2 border-[rgba(93,207,114,0.6)] shadow-[0_0_40px_rgba(30,107,48,0.4)]"
                    : "w-[130px] sm:w-[160px] border border-[rgba(74,163,89,0.18)] opacity-60 hover:opacity-80"
                  }`}
      style={{ aspectRatio: "9/16" }}
      onClick={onClick}
    >
      {/* youtube embed */}
      <iframe
        ref={iframeRef}
        src={src}
        className="absolute inset-0 w-full h-full pointer-events-none"
        allow="autoplay; encrypted-media"
        allowFullScreen={false}
        title={v.title}
      />

      {/* overlay — only show on inactive */}
      {!isActive && (
        <>
          <img
            src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
            alt={v.title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={e => { e.target.style.display = "none"; }}
          />
          <div className="absolute inset-0 bg-[rgba(6,14,8,0.65)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full
                            bg-[rgba(10,17,13,0.8)]
                            border border-[rgba(93,207,114,0.5)]
                            flex items-center justify-center">
              <Play size={16} className="text-[#5dcf72] ml-0.5" fill="currentColor" strokeWidth={0} />
            </div>
          </div>
        </>
      )}

      {/* active controls */}
      {isActive && (
        <>
          {/* top gradient */}
          <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none
                          bg-gradient-to-b from-[rgba(6,14,8,0.7)] to-transparent z-10" />

          {/* index pill */}
          <div className="absolute top-3 left-3 z-20
                          bg-[rgba(10,17,13,0.8)] border border-[rgba(74,163,89,0.3)]
                          rounded-full px-2 py-0.5">
            <span className="font-['Cinzel',serif] text-[9px] tracking-[2px] text-[#4db86a]">
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>

          {/* mute toggle */}
          <button
            onClick={e => { e.stopPropagation(); setMuted(m => !m); }}
            className="absolute top-3 right-3 z-20
                       w-8 h-8 rounded-full
                       bg-[rgba(10,17,13,0.8)] border border-[rgba(74,163,89,0.3)]
                       flex items-center justify-center
                       text-[#5dcf72] hover:bg-[rgba(30,107,48,0.4)]
                       transition-all duration-200"
          >
            {muted
              ? <VolumeX size={13} />
              : <Volume2 size={13} />
            }
          </button>

          {/* bottom gradient + title */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-3
                          bg-gradient-to-t from-[rgba(6,14,8,0.95)] via-[rgba(6,14,8,0.5)] to-transparent">
            <div className="w-6 h-px mb-1.5
                            bg-gradient-to-r from-[#4db86a] to-transparent" />
            <p className="text-[10px] text-[rgba(180,220,185,0.85)] leading-snug
                          font-['Raleway',sans-serif] line-clamp-3">
              {v.title}
            </p>
          </div>

          {/* playing indicator dots */}
          <div className="absolute bottom-3 right-3 z-20 flex gap-[3px] items-end">
            {[3,5,4,6,3].map((h, j) => (
              <div
                key={j}
                className="w-[3px] rounded-full bg-[#4db86a]"
                style={{
                  height: `${h * 2}px`,
                  animation: `eq-bar 0.8s ${j * 0.1}s ease-in-out infinite alternate`,
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* active top border glow */}
      {isActive && (
        <div className="absolute top-0 left-0 right-0 h-[2px]
                        bg-gradient-to-r from-transparent via-[#5dcf72] to-transparent z-20" />
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
const VideoTestimonials = () => {
  const [active,     setActive]     = useState(0);
  const [videoModal, setVideoModal] = useState(null);
  const trackRef = useRef(null);

  // auto-advance every 8 seconds
  useEffect(() => {
    if (!VIDEOS?.length) return;
    const timer = setInterval(() => {
      setActive(a => (a + 1) % VIDEOS.length);
    }, 16000);
    return () => clearInterval(timer);
  }, []);

  // scroll active card into center
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[active];
    if (!card) return;
    const trackCenter = track.offsetWidth / 2;
    const cardCenter  = card.offsetLeft + card.offsetWidth / 2;
    track.scrollTo({ left: cardCenter - trackCenter, behavior: "smooth" });
  }, [active]);

  const prev = useCallback(() => setActive(a => Math.max(0, a - 1)), []);
  const next = useCallback(() => setActive(a => Math.min(VIDEOS.length - 1, a + 1)), []);

  return (
    <>
      <style>{`
        @keyframes eq-bar {
          from { transform: scaleY(0.4); }
          to   { transform: scaleY(1);   }
        }
      `}</style>

      <div className="py-16 max-lg:py-10 px-4
                      bg-[#0a110d]
                      border-y border-[rgba(74,163,89,0.15)]
                      relative overflow-hidden">

        {/* bg glows */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2
                        w-[700px] h-[280px]
                        bg-[radial-gradient(ellipse_at_top,rgba(30,107,48,0.14),transparent_70%)]" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[360px] h-[360px]
                        bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,107,48,0.1),transparent_70%)]" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[360px] h-[360px]
                        bg-[radial-gradient(ellipse_at_bottom_right,rgba(30,107,48,0.1),transparent_70%)]" />

        {/* header */}
        <div className="text-center mb-12 relative z-10">
          <SectionBadge>Video Proof</SectionBadge>
          <SectionHeading
            title="Hear It From"
            accent="Real Clients"
            subtitle="Watch genuine video testimonials from clients whose lives Acharya Ji transformed."
          />
          {/* shorts label */}
          <div className="inline-flex items-center gap-2 mt-2
                          text-[10px] tracking-[3px] uppercase text-[rgba(180,220,185,0.4)]">
            <Play size={10} className="text-[#4db86a]" fill="currentColor" strokeWidth={0} />
            Short-form testimonials · Auto-playing
          </div>
        </div>

        {/* shorts carousel */}
        <div className="relative max-w-7xl mx-auto z-10">

          {/* left arrow */}
          <button
            onClick={prev}
            disabled={active === 0}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-20
                       w-10 h-10 rounded-full
                       bg-[#0d1c10] border border-[rgba(74,163,89,0.3)]
                       text-[#4db86a]
                       hover:bg-[rgba(30,107,48,0.3)]
                       hover:border-[rgba(93,207,114,0.6)]
                       hover:shadow-[0_0_14px_rgba(77,184,106,0.3)]
                       disabled:opacity-20 disabled:cursor-not-allowed
                       flex items-center justify-center
                       transition-all duration-200"
          >
            <ChevronLeft size={18} strokeWidth={2} />
          </button>

          {/* right arrow */}
          <button
            onClick={next}
            disabled={active === VIDEOS.length - 1}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-20
                       w-10 h-10 rounded-full
                       bg-[#0d1c10] border border-[rgba(74,163,89,0.3)]
                       text-[#4db86a]
                       hover:bg-[rgba(30,107,48,0.3)]
                       hover:border-[rgba(93,207,114,0.6)]
                       hover:shadow-[0_0_14px_rgba(77,184,106,0.3)]
                       disabled:opacity-20 disabled:cursor-not-allowed
                       flex items-center justify-center
                       transition-all duration-200"
          >
            <ChevronRight size={18} strokeWidth={2} />
          </button>

          {/* track */}
          <div
            ref={trackRef}
            className="flex justify-center gap-3 sm:gap-4 overflow-x-auto items-center
                       px-4 py-4
                       [scrollbar-width:none] [-ms-overflow-style:none]
                       [&::-webkit-scrollbar]:hidden
                       scroll-smooth"
          >
            {VIDEOS.map((v, i) => (
              <ShortCard
                key={v.id ?? i}
                v={v}
                i={i}
                isActive={i === active}
                onClick={() => setActive(i)}
              />
            ))}
          </div>

          {/* progress dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {VIDEOS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300
                            ${i === active
                              ? "w-6 h-2 bg-gradient-to-r from-[#5dcf72] to-[#9edaab] shadow-[0_0_8px_rgba(93,207,114,0.5)]"
                              : "w-2 h-2 bg-[rgba(74,163,89,0.2)] border border-[rgba(74,163,89,0.2)] hover:bg-[rgba(74,163,89,0.4)]"
                            }`}
              />
            ))}
          </div>

          {/* autoplay progress bar */}
          <div className="mt-4 max-w-xs mx-auto h-px bg-[rgba(74,163,89,0.15)] rounded-full overflow-hidden">
            <div
              key={active}
              className="h-full bg-gradient-to-r from-[#4db86a] to-[#9edaab] rounded-full"
              style={{ animation: "progressBar 8s linear forwards" }}
            />
          </div>

          <style>{`
            @keyframes progressBar {
              from { width: 0%; }
              to   { width: 100%; }
            }
          `}</style>

        </div>
      </div>

      <VideoModal videoModal={videoModal} setVideoModal={setVideoModal} />
    </>
  );
};

export default VideoTestimonials;