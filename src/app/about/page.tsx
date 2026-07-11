import Link from "next/link";

const S = {
  serif: { fontFamily: "var(--font-display, 'Zen Old Mincho', serif)" } as React.CSSProperties,
  serifEn: { fontFamily: "var(--font-serif-en, 'Instrument Serif', serif)", fontStyle: "italic" } as React.CSSProperties,
  sans: { fontFamily: "var(--font-sans, 'Noto Sans JP', sans-serif)" } as React.CSSProperties,
};

export default function About() {
  return (
    <main style={{ background: "#fafafa", color: "#111", ...S.sans }}>
      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: "20px 48px", display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(250,250,250,0.9)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.08)", ...S.sans
      }}>
        <Link href="/" style={{ ...S.serif, fontSize: "18px", fontWeight: 500 }}>理想と実践</Link>
        <div style={{ display: "flex", gap: "32px", fontSize: "13px" }}>
          <Link href="/about" style={{ fontWeight: 700 }}>About</Link>
          <Link href="/lhmp">LHMP</Link>
          <Link href="/programs">研修一覧</Link>
          <Link href="/corporate">法人向け</Link>
          <Link href="/contact" style={{ padding: "8px 18px", border: "1px solid #111" }}>お問い合わせ</Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        paddingTop: "160px", paddingBottom: "100px",
        paddingLeft: "48px", paddingRight: "48px",
        background: "#fafafa", borderBottom: "1px solid rgba(0,0,0,0.10)"
      }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.20em", color: "#999", marginBottom: "28px" }}>ABOUT US</p>
          <h1 style={{ ...S.serif, fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 400, lineHeight: 1.25, marginBottom: "40px" }}>
            白裕が運営する、<br />
            人生・組織・事業の研修事業。
          </h1>
          <p style={{ fontSize: "17px", lineHeight: 2.1, color: "#555", maxWidth: "640px" }}>
            「理想と実践」は、白裕が体系化した中核思想「LHMP」を基盤に、<br />
            個人が自分の理想を描き、仕事や法人との関係を意味づけ、<br />
            人と組織が主体的に判断・行動できる状態をつくる研修事業です。
          </p>
        </div>
      </section>

      {/* Relations */}
      <section style={{ padding: "100px 48px", background: "#f5f5f2" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ ...S.serif, fontSize: "28px", fontWeight: 500, marginBottom: "40px" }}>学び、整え、実装する。</h2>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", marginBottom: "64px" }}>
            白裕（Hakuyu）は、LHMP／幸福最大化思想体系を中核に、以下の三つの事業を展開する事業母体です。
            各事業は独立していますが、必要に応じて相互に接続し、個人と組織の構造的な課題を解決します。
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ display: "flex", gap: "24px", padding: "32px", background: "#fff", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.08)", alignItems: "flex-start" }}>
              <div style={{ ...S.serif, fontSize: "16px", fontWeight: 500, padding: "4px 12px", border: "1px solid #111", borderRadius: "4px" }}>LEARN</div>
              <div>
                <h3 style={{ ...S.serif, fontSize: "20px", fontWeight: 500, marginBottom: "12px" }}>理想と実践（研修事業）</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#555" }}>
                  人生の理想から、仕事と組織の行動まで。LHMPを基盤に、人生OS、主体性、管理者育成、事業管理を学ぶ研修を提供します。
                </p>
              </div>
            </div>
            
            <div style={{ display: "flex", gap: "24px", padding: "32px", background: "#fff", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.08)", alignItems: "flex-start" }}>
              <div style={{ ...S.serif, fontSize: "16px", fontWeight: 500, padding: "4px 12px", border: "1px solid #111", borderRadius: "4px" }}>DESIGN</div>
              <div>
                <h3 style={{ ...S.serif, fontSize: "20px", fontWeight: 500, marginBottom: "12px" }}>余白と余裕</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#555" }}>
                  時間・判断・感情の詰まりを見つけ、余白が再び埋まらない構造を設計します。
                </p>
              </div>
            </div>
            
            <div style={{ display: "flex", gap: "24px", padding: "32px", background: "#fff", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.08)", alignItems: "flex-start" }}>
              <div style={{ ...S.serif, fontSize: "16px", fontWeight: 500, padding: "4px 12px", border: "1px solid #111", borderRadius: "4px" }}>IMPLEMENT</div>
              <div>
                <h3 style={{ ...S.serif, fontSize: "20px", fontWeight: 500, marginBottom: "12px" }}>IT Service Lab</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#555" }}>
                  Google Drive、スプレッドシート、AI、ITを用い、顧客・案件・資料・判断が迷子にならない業務基盤を実装します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(0,0,0,0.12)", padding: "40px 48px", ...S.sans }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ display: "flex", gap: "32px" }}>
            <Link href="/" style={{ ...S.serif, fontSize: "15px", fontWeight: 500 }}>理想と実践</Link>
            <Link href="/programs" style={{ fontSize: "13px", color: "#666" }}>研修一覧</Link>
            <Link href="/contact" style={{ fontSize: "13px", color: "#666" }}>お問い合わせ</Link>
          </div>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <span style={{ fontSize: "12px", color: "#999" }}>運営・思想監修：</span>
            <a href="https://hakuyu.ltd" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "#666" }}>白裕（Hakuyu）</a>
            <span style={{ fontSize: "12px", color: "#999" }}>© 2026 白裕</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
