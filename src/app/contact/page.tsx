import Link from "next/link";

const serif = { fontFamily: "var(--font-display, 'Zen Old Mincho', serif)" };
const sans = { fontFamily: "var(--font-sans, 'Noto Sans JP', sans-serif)" };

export default function Contact() {
  return (
    <main style={{ minHeight: "100vh", background: "#fafafa", color: "#111", ...sans }}>
      {/* ── Nav ── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        padding: "20px 32px",
        borderBottom: "1px solid rgba(0,0,0,0.10)",
        background: "rgba(250,250,250,0.85)",
        backdropFilter: "blur(12px)",
        display: "flex", justifyContent: "space-between", alignItems: "center"
      }}>
        <Link href="/" style={{ ...serif, fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.04em" }}>
          理想と実践
        </Link>
        <nav style={{ display: "flex", gap: "28px", fontSize: "0.875rem" }}>
          <Link href="/" style={{ opacity: 0.6 }}>トップ</Link>
          <Link href="/contact" style={{ fontWeight: 600 }}>お問い合わせ</Link>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section style={{
        background: "#f5f4f0",
        padding: "80px 24px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.18em", opacity: 0.45, marginBottom: "20px" }}>
            CONTACT
          </p>
          <h1 style={{ ...serif, fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 400, lineHeight: 1.4, marginBottom: "24px" }}>
            お問い合わせ
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 2.0, opacity: 0.65 }}>
            研修に関するご相談やお問い合わせは、<br />
            以下のフォームよりお願いいたします。
          </p>
        </div>
      </section>

      {/* ── Form ── */}
      <section style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.10)",
            borderRadius: "16px",
            overflow: "hidden",
            padding: "8px"
          }}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeuxOuh50S3mxsJSfkswwnHrbi2jE2oYLtu8nXpEE-uBg2kKQ/viewform?embedded=true"
              width="100%"
              height="1000"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
            >読み込んでいます…</iframe>
          </div>

          <p style={{ marginTop: "40px", textAlign: "center", fontSize: "0.8rem", opacity: 0.45 }}>
            通常、2営業日以内に担当者よりご連絡させていただきます。
          </p>

          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <Link href="/" style={{
              display: "inline-block",
              padding: "14px 32px",
              border: "1px solid rgba(0,0,0,0.22)",
              fontSize: "0.875rem",
              letterSpacing: "0.05em",
              transition: "background 0.3s, color 0.3s"
            }}>
              ← トップへ戻る
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        borderTop: "1px solid rgba(0,0,0,0.10)",
        padding: "40px 24px",
        textAlign: "center",
        fontSize: "0.8rem",
        opacity: 0.45
      }}>
        <p>© 2026 理想と実践 | 白裕（Hakuyu）</p>
      </footer>
    </main>
  );
}
