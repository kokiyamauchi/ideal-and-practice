"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const S = {
  serif: { fontFamily: "var(--font-display, 'Zen Old Mincho', serif)" } as React.CSSProperties,
  sans: { fontFamily: "var(--font-sans, 'Noto Sans JP', sans-serif)" } as React.CSSProperties,
};

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "LHMP", href: "/lhmp" },
  { label: "研修一覧", href: "/programs" },
  { label: "法人向け", href: "/corporate" },
];

interface SiteNavProps {
  activeHref?: string;
}

export default function SiteNav({ activeHref }: SiteNavProps) {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShowNav(true);
      } else {
        setShowNav(window.scrollY < lastScrollY);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: "20px 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(250,250,250,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.08)", ...S.sans,
        transform: showNav ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-in-out"
      }} id="main-nav">
        <Link href="/" style={{ ...S.serif, fontSize: "18px", fontWeight: 500, color: "#111" }}>
          理想と実践
        </Link>

        {/* Desktop links */}
        <div className="ip-nav-desktop" style={{ display: "flex", gap: "28px", fontSize: "13px", alignItems: "center" }}>
          {NAV_LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              style={{ fontWeight: l.href === activeHref ? 700 : 400, color: "#111" }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" style={{ padding: "8px 16px", border: "1px solid #111", fontSize: "13px" }}>
            お問い合わせ
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          className="ip-nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "none" }}
        >
          <span style={{
            display: "block", width: "22px", height: "1.5px", background: "#111",
            transition: "transform 0.3s, opacity 0.3s", marginBottom: "5px",
            transform: open ? "translateY(6.5px) rotate(45deg)" : "none"
          }} />
          <span style={{
            display: "block", width: "22px", height: "1.5px", background: "#111",
            opacity: open ? 0 : 1, transition: "opacity 0.3s", marginBottom: "5px"
          }} />
          <span style={{
            display: "block", width: "22px", height: "1.5px", background: "#111",
            transition: "transform 0.3s",
            transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none"
          }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 40,
          background: "rgba(250,250,250,0.97)", backdropFilter: "blur(12px)",
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "80px 28px 40px", ...S.sans
        }}>
          {NAV_LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                ...S.serif,
                fontSize: "26px", fontWeight: 500, color: "#111",
                padding: "18px 0", borderBottom: "1px solid rgba(0,0,0,0.08)",
                display: "block"
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              display: "block", marginTop: "28px",
              background: "#111", color: "#fafafa",
              padding: "16px 24px", fontSize: "15px", fontWeight: 500,
              textAlign: "center"
            }}
          >
            お問い合わせ →
          </Link>
        </div>
      )}
    </>
  );
}
