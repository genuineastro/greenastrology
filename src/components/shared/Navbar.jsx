"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { IG_LINK, WA_LINK, FB_LINK, X_LINK, YT_LINK } from "@/lib/constants";

const NAV_LINKS = [
  { name: "Love Back", href: "/love-back" },
  { name: "Breakup", href: "/breakup-problem" },
  { name: "Divorce Guidance", href: "/divorce-problem" },
  { name: "Love Spell", href: "/love-spell" },
  { name: "Marriage", href: "/marriage-problem" }
];

const SOCIAL = [
  { label: "in", href: IG_LINK },
  { label: "f", href: FB_LINK },
  { label: "x", href: X_LINK },
  { label: "yt", href: YT_LINK },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Raleway:wght@400;500;600&display=swap');

        .cn-nav {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 50;
          font-family: 'Raleway', sans-serif;
          border-bottom: 1px solid rgba(74,163,89,0.12);
          background: rgba(6,14,8,0.82);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .cn-inner {
          max-width: 80rem; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 40px;
        }

        /* logo */
        .cn-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .cn-logo-name {
          font-family: 'Cinzel', serif; font-size: 15px;
          letter-spacing: 4px; color: #7ecc8f; text-transform: uppercase;
        }

        /* desktop links */
        .cn-links { display: flex; gap: 28px; list-style: none; margin: 0; padding: 0; }
        .cn-links a {
          color: rgba(180,220,185,0.55); text-decoration: none;
          font-size: 11.5px; letter-spacing: 1.5px; text-transform: uppercase;
          transition: color .2s;
        }
        .cn-links a:hover { color: #7ecc8f; }

        /* right cluster */
        .cn-right { display: flex; align-items: center; gap: 10px; }

        /* social pills */
        .cn-social { display: flex; gap: 7px; }
        .cn-pill {
          width: 32px; height: 32px; border-radius: 50%;
          border: 1px solid rgba(74,163,89,0.28); background: transparent;
          color: rgba(180,220,185,0.5); display: flex; align-items: center;
          justify-content: center; font-size: 10px; font-weight: 600;
          letter-spacing: 0.5px; cursor: pointer; text-decoration: none;
          font-family: 'Raleway', sans-serif; text-transform: lowercase;
          transition: all .2s;
        }
        .cn-pill:hover { border-color: rgba(93,207,114,0.6); color: #5dcf72; background: rgba(30,107,48,0.15); }

        /* WA button */
        .cn-wa {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 9px 20px; border-radius: 3px;
          background: #1e6b30; color: #c8eecf;
          font-family: 'Raleway', sans-serif; font-size: 10.5px;
          font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
          border: 1px solid rgba(93,207,114,0.25); cursor: pointer;
          text-decoration: none;
          box-shadow: 0 0 20px rgba(30,107,48,0.35);
          transition: all .25s;
        }
        .cn-wa:hover { background: #25883d; box-shadow: 0 0 30px rgba(30,107,48,0.55); }
        .cn-wa-dot { width: 6px; height: 6px; border-radius: 50%; background: #9edaab; animation: cn-pulse 1.8s ease-in-out infinite; }
        @keyframes cn-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.75)} }

        /* hamburger */
        .cn-menu-btn {
          display: none; background: transparent; border: 1px solid rgba(74,163,89,0.3);
          border-radius: 6px; padding: 6px; color: #5dcf72; cursor: pointer;
          transition: all .2s;
        }
        .cn-menu-btn:hover { border-color: rgba(93,207,114,0.6); background: rgba(30,107,48,0.15); }

        /* overlay */
        .cn-overlay {
          position: fixed; inset: 0; background: rgba(6,14,8,0.7);
          z-index: 60; transition: opacity .3s;
          backdrop-filter: blur(4px);
        }

        /* sidebar */
        .cn-sidebar {
          position: fixed; top: 0; right: 0;
          height: 100dvh; width: 280px;
          background: #060e08;
          border-left: 1px solid rgba(74,163,89,0.18);
          z-index: 70; transition: transform .3s cubic-bezier(.25,.46,.45,.94);
          display: flex; flex-direction: column;
          font-family: 'Raleway', sans-serif;
        }

        .cn-sidebar-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(74,163,89,0.12);
        }
        .cn-sidebar-title { font-family:'Cinzel',serif; font-size:13px; letter-spacing:3px; color:#7ecc8f; text-transform:uppercase; }
        .cn-close-btn {
          width: 32px; height: 32px; border-radius: 50%;
          border: 1px solid rgba(74,163,89,0.3); background: transparent;
          color: #5dcf72; display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all .2s;
        }
        .cn-close-btn:hover { border-color: rgba(93,207,114,0.6); background: rgba(30,107,48,0.15); }

        .cn-sidebar-links { display: flex; flex-direction: column; padding: 12px 0; flex: 1; overflow-y: auto; }
        .cn-sidebar-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 24px;
          border-bottom: 1px solid rgba(74,163,89,0.08);
          color: rgba(180,220,185,0.6); text-decoration: none;
          font-size: 11.5px; letter-spacing: 1.5px; text-transform: uppercase;
          transition: all .2s;
        }
        .cn-sidebar-link:hover { color: #7ecc8f; background: rgba(30,107,48,0.08); padding-left: 28px; }
        .cn-sidebar-link:hover .cn-link-arrow { opacity: 1; transform: translateX(0); }
        .cn-link-arrow { opacity: 0; transform: translateX(-4px); transition: all .2s; color: #4db86a; }

        .cn-sidebar-foot {
          padding: 20px 24px;
          border-top: 1px solid rgba(74,163,89,0.12);
        }
        .cn-sidebar-wa {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 13px 20px; border-radius: 3px;
          background: #1e6b30; color: #c8eecf;
          font-family: 'Raleway', sans-serif; font-size: 11px;
          font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
          border: 1px solid rgba(93,207,114,0.25); text-decoration: none;
          box-shadow: 0 0 24px rgba(30,107,48,0.4);
          transition: all .25s;
        }
        .cn-sidebar-wa:hover { background: #25883d; box-shadow: 0 0 36px rgba(30,107,48,0.6); }

        /* responsive */
        @media (max-width: 1024px) {
          .cn-links, .cn-social{ display: none !important; }
          .cn-menu-btn { display: flex; }
          .cn-inner { padding: 14px 20px; }
        }
      `}</style>

      {/* ── Navbar ── */}
      <nav className="cn-nav">
        <div className="cn-inner">

          {/* Logo */}
          <a href="/" className="cn-logo">
            <div className=" size-8 overflow-hidden rounded-xl flex items-center justify-center">
              <img src="/logo.jpeg" alt="logo" className="h-full w-full" />
            </div>
            {/* <svg width="32" height="32" viewBox="0 0 34 34" fill="none">
              <rect x="17" y="1" width="22" height="22" rx="2" transform="rotate(45 17 1)"
                fill="rgba(30,107,48,0.35)" stroke="rgba(93,207,114,0.65)" strokeWidth="1"/>
              <rect x="17" y="7" width="14" height="14" rx="1" transform="rotate(45 17 7)"
                fill="rgba(93,207,114,0.2)" stroke="rgba(93,207,114,0.4)" strokeWidth="0.5"/>
              <circle cx="17" cy="17" r="3" fill="#5dcf72"/>
            </svg> */}
            <span className="cn-logo-name">Acharya Ji</span>
          </a>

          {/* Desktop links */}
          <ul className="cn-links">
            {NAV_LINKS.map((l) => (
              <li key={l.name}><a href={l.href}>{l.name}</a></li>
            ))}
          </ul>

          {/* Right cluster */}
          <div className="cn-right">
            {/* Social pills */}
            <div className="cn-social">
              {SOCIAL.map((s) => (
                <a key={s.label} href={s.href} target="_blank" className="cn-pill" aria-label={s.label}>
                  {s.label}
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cn-wa">
              <span className="cn-wa-dot" />
              WhatsApp
            </a>

            {/* Hamburger */}
            <button className="cn-menu-btn" onClick={() => setIsOpen(true)} aria-label="Open menu">
              <Menu size={20} />
            </button>
          </div>

        </div>
      </nav>

      {/* ── Overlay ── */}
      {isOpen && (
        <div
          className="cn-overlay"
          style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none" }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ── Mobile Sidebar ── */}
      <div
        className="cn-sidebar"
        style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        {/* header */}
        <div className="cn-sidebar-head">
          <span className="cn-sidebar-title">Menu</span>
          <button className="cn-close-btn" onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={16} />
          </button>
        </div>

        {/* links */}
        <div className="cn-sidebar-links">
          {NAV_LINKS.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="cn-sidebar-link"
              onClick={() => setIsOpen(false)}
            >
              {l.name}
              <ArrowRight size={13} className="cn-link-arrow" />
            </a>
          ))}

          {/* social row inside sidebar */}
          <div style={{ display: "flex", gap: "8px", padding: "20px 24px 0" }}>
            {SOCIAL.map((s) => (
              <a key={s.label} href={s.href} className="cn-pill" aria-label={s.label}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* footer WA button */}
        <div className="cn-sidebar-foot">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cn-sidebar-wa"
            onClick={() => setIsOpen(false)}
          >
            <span className="cn-wa-dot" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}