import Link from "next/link";

const S = {
  serif: { fontFamily: "var(--font-display, 'Zen Old Mincho', serif)" } as React.CSSProperties,
  sans: { fontFamily: "var(--font-sans, 'Noto Sans JP', sans-serif)" } as React.CSSProperties,
};

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,0,0,0.12)",
        padding: "48px 48px 32px",
        background: "#fafafa",
        ...S.sans,
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                ...S.serif,
                fontSize: "18px",
                fontWeight: 500,
                color: "#111",
                display: "block",
                marginBottom: "12px",
              }}
            >
              理想と実践
            </Link>
            <p style={{ fontSize: "13px", color: "#666", lineHeight: 2, maxWidth: "260px" }}>
              会社の理念と個人の理想を接続し、主体的に動く組織をつくる。
            </p>
            <p
              style={{
                fontSize: "11px",
                color: "#999",
                marginTop: "8px",
                fontStyle: "italic",
                fontFamily: "var(--font-serif-en, 'Instrument Serif', serif)",
              }}
            >
              ideal &amp; practice
            </p>
          </div>

          {/* Links row */}
          <div style={{ display: "flex", gap: "64px", flexWrap: "wrap" }}>
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  color: "#999",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                メニュー
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "14px", listStyle: "none", padding: 0 }}>
                {[
                  { label: "About", href: "/about" },
                  { label: "LHMP", href: "/lhmp" },
                  { label: "研修一覧", href: "/programs" },
                  { label: "法人向け", href: "/corporate" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      style={{ fontSize: "14px", color: "#111" }}
                      className="hover:opacity-50 transition-opacity"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  color: "#999",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                その他
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "14px", listStyle: "none", padding: 0 }}>
                {[
                  { label: "FAQ", href: "/faq" },
                  { label: "利用規約", href: "/terms" },
                  { label: "プライバシーポリシー", href: "/privacy" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      style={{ fontSize: "14px", color: "#111" }}
                      className="hover:opacity-50 transition-opacity"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  color: "#999",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                お問い合わせ
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "14px", listStyle: "none", padding: 0 }}>
                <li>
                  <Link
                    href="/contact"
                    style={{ fontSize: "14px", color: "#111" }}
                    className="hover:opacity-50 transition-opacity"
                  >
                    お問い合わせフォーム
                  </Link>
                </li>
              </ul>
              <div style={{ marginTop: "24px" }}>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    border: "1px solid #111",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#111",
                    transition: "background 0.3s, color 0.3s",
                  }}
                  className="hover:bg-foreground hover:text-background"
                >
                  相談する →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(0,0,0,0.08)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "12px", color: "#999" }}>思想監修・運営サポート：白裕（Hakuyu）</span>
          <p style={{ fontSize: "12px", color: "#999" }}>&copy; 2026 理想と実践. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
