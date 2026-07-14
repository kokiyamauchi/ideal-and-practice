"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const S = {
  serif: { fontFamily: "var(--font-display, 'Zen Old Mincho', serif)" } as React.CSSProperties,
  sans: { fontFamily: "var(--font-sans, 'Noto Sans JP', sans-serif)" } as React.CSSProperties,
};

export default function SiteNav({ activeHref }: { activeHref?: string }) {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // ボディスクロール制御
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
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

  const links = [
    { label: "About", href: "/about" },
    { label: "LHMP", href: "/lhmp" },
    { label: "研修一覧", href: "/programs" },
    { label: "法人向け", href: "/corporate" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300"
        style={{
          padding: "20px 24px",
          background: "rgba(250,250,250,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          transform: showNav ? "translateY(0)" : "translateY(-100%)",
          ...S.sans,
        }}
        id="main-nav"
      >
        <Link
          href="/"
          style={{
            ...S.serif,
            fontSize: "20px",
            fontWeight: 500,
            color: "#111",
            letterSpacing: "0.01em",
          }}
        >
          理想と実践
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: "14px",
                fontWeight: l.href === activeHref ? 700 : 400,
                color: "#111",
              }}
              className="hover:opacity-50 transition-opacity"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontSize: "13px",
              fontWeight: 500,
              padding: "10px 20px",
              border: "1px solid #111",
              color: "#111",
              transition: "background 0.3s, color 0.3s",
            }}
            className="hover:bg-foreground hover:text-background"
          >
            お問い合わせ
          </Link>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10"
          onClick={() => setOpen(!open)}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1.5px",
              background: "#111",
              transition: "transform 0.3s, opacity 0.3s",
              transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1.5px",
              background: "#111",
              transition: "opacity 0.3s",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1.5px",
              background: "#111",
              transition: "transform 0.3s, opacity 0.3s",
              transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile drawer overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40"
          style={{
            background: "rgba(250,250,250,0.97)",
            backdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 32px 40px",
            ...S.sans,
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  ...S.serif,
                  fontSize: "28px",
                  fontWeight: 500,
                  color: "#111",
                  padding: "20px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                  display: "block",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                marginTop: "32px",
                background: "#111",
                color: "#fafafa",
                padding: "16px 24px",
                fontSize: "15px",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              お問い合わせ →
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
