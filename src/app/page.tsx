import Link from "next/link";
import Reveal from "@/components/Reveal";
import SiteNav from "@/components/SiteNav";

const S = {
  serif: { fontFamily: "var(--font-display, 'Zen Old Mincho', serif)" } as React.CSSProperties,
  serifEn: { fontFamily: "var(--font-serif-en, 'Instrument Serif', serif)", fontStyle: "italic" } as React.CSSProperties,
  sans: { fontFamily: "var(--font-sans, 'Noto Sans JP', sans-serif)" } as React.CSSProperties,
};

export default function Home() {
  return (
    <main style={{ background: "#fafafa", color: "#111", ...S.sans }}>
      <Reveal />

      {/* ── Nav ── */}
      <SiteNav />

      {/* ── Hero ── */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "160px 48px 80px", background: "#fafafa"
      }}>
        {/* Index row */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingBottom: "24px", borderBottom: "1px solid rgba(0,0,0,0.10)",
          marginBottom: "72px", fontSize: "12px", fontWeight: 500,
          color: "#666", letterSpacing: "0.10em"
        }}>
          <span>A HAKUYU BUSINESS</span>
          <span>Based on LHMP</span>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "80px", alignItems: "end", maxWidth: "1400px" }}>
          <div>
            <h1 className="js-hero-stagger" style={{ ...S.serif, fontSize: "clamp(40px, 5.5vw, 84px)", lineHeight: 1.15, fontWeight: 500, letterSpacing: "0.01em", color: "#111" }}>
              自分の理想を描き、<br />
              仕事と組織を、<br />
              自分の人生へ<br />
              接続する。
            </h1>
            <span className="js-hero-stagger" style={{ ...S.serifEn, fontSize: "20px", color: "#666", marginTop: "28px", display: "block" }}>
              — learning for the life you actually want.
            </span>
          </div>
          <div className="js-hero-stagger">
            <p style={{ fontSize: "17px", lineHeight: 2.05, color: "#111", marginBottom: "40px" }}>
              白裕の中核思想「LHMP／幸福最大化思想体系」を基盤に、<br />
              人生・主体性・事業管理を学び、<br />
              理解を行動と組織の仕組みへ変える研修を提供します。
            </p>
            <Link href="/contact" style={{
              display: "inline-block", background: "#111", color: "#fafafa",
              padding: "16px 28px", fontSize: "15px", fontWeight: 500,
              border: "1px solid #111", marginBottom: "24px",
              transition: "background 0.3s, color 0.3s"
            }} className="hover:bg-transparent hover:text-[#111]">
              法人研修を相談する →
            </Link>
            <Link href="/programs" style={{
              display: "block", fontSize: "14px", fontWeight: 500, color: "#111",
              borderBottom: "1px solid #111", paddingBottom: "4px",
              width: "fit-content"
            }} className="hover:opacity-50 transition-opacity">
              研修一覧を見る
            </Link>
          </div>
        </div>

        {/* Marker */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginTop: "120px", paddingTop: "24px", borderTop: "1px solid rgba(0,0,0,0.10)",
          fontSize: "12px", fontWeight: 500, color: "#666", letterSpacing: "0.10em"
        }}>
          <span>IDEAL AND PRACTICE</span>
          <span style={{ ...S.serif, fontSize: "14px", fontWeight: 400 }}>Based on LHMP</span>
          <span>2026</span>
        </div>
      </section>

      {/* ── Problems ── */}
      <section className="js-reveal" style={{ padding: "160px 48px", background: "#fafafa", borderTop: "1px solid rgba(0,0,0,0.10)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 3fr", gap: "80px", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", color: "#999", textTransform: "uppercase", marginBottom: "16px" }}>Problems</p>
            <h2 style={{ ...S.serif, fontSize: "28px", fontWeight: 500, color: "#333", marginTop: "16px" }}>組織と個人の間の<br />摩擦。</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderTop: "1px solid rgba(0,0,0,0.22)" }}>
            {[
              { n: "01", text: "何のために働いているか分からない" },
              { n: "02", text: "会社の理念が社員の行動につながらない" },
              { n: "03", text: "「主体的に動け」と言っても変わらない" },
              { n: "04", text: "管理者が判断と仕事を抱え込んでいる" },
              { n: "05", text: "研修を実施しても現場へ定着しない" },
              { n: "06", text: "システムを導入しても運用が続かない" },
            ].map((item, i) => (
              <div key={i} style={{
                padding: "40px 0",
                paddingRight: i % 3 < 2 ? "36px" : 0,
                paddingLeft: i % 3 > 0 ? "36px" : 0,
                borderBottom: "1px solid rgba(0,0,0,0.08)",
                borderRight: i % 3 < 2 ? "1px solid rgba(0,0,0,0.08)" : "none"
              }}>
                <span style={{ ...S.serif, fontSize: "36px", lineHeight: 1, fontWeight: 500, color: "#333", display: "block" }}>{item.n}</span>
                <p style={{ fontSize: "16px", fontWeight: 500, lineHeight: 1.75, color: "#111", marginTop: "16px" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 Domains ── */}
      <section className="js-reveal" style={{ padding: "160px 48px", background: "#fafafa" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 3fr", gap: "80px", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", color: "#999", textTransform: "uppercase", marginBottom: "16px" }}>3 Domains</p>
            <h2 style={{ ...S.serif, fontSize: "28px", fontWeight: 500, color: "#333", marginTop: "16px" }}>研修の<br />3領域。</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderTop: "1px solid rgba(0,0,0,0.22)" }}>
            {[
              { en: "LIFE OS", ja: "人生OS", desc: "自分の幸福・理想・判断基準を整える。何のために生き、何を優先するのかを明確にします。", href: "/programs#人生OS領域" },
              { en: "AGENCY OS", ja: "人・組織OS", desc: "理想と役割を接続し、主体性を生む。個人と組織が自律的に動ける構造をつくります。", href: "/programs#人・組織OS領域" },
              { en: "MANAGEMENT OS", ja: "事業管理OS", desc: "仕事・情報・判断・レビューを整える。管理職が機能する組織の仕組みを設計します。", href: "/programs#事業管理OS領域" },
            ].map((domain, i) => (
              <div key={i} style={{
                padding: "48px 0",
                paddingRight: i < 2 ? "48px" : 0,
                paddingLeft: i > 0 ? "48px" : 0,
                borderRight: i < 2 ? "1px solid rgba(0,0,0,0.08)" : "none",
                display: "flex", flexDirection: "column"
              }}>
                <span style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "20px" }}>{domain.en}</span>
                <h3 style={{ ...S.serif, fontSize: "26px", fontWeight: 500, color: "#111", marginBottom: "20px" }}>{domain.ja}</h3>
                <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#666", flexGrow: 1, marginBottom: "28px" }}>{domain.desc}</p>
                <Link href={domain.href} style={{
                  fontSize: "14px", fontWeight: 500, color: "#111",
                  borderBottom: "1px solid #111", paddingBottom: "4px", width: "fit-content"
                }} className="hover:opacity-50 transition-opacity">詳細を見る</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="js-reveal" style={{ padding: "160px 48px", background: "#fafafa", borderTop: "1px solid rgba(0,0,0,0.10)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 3fr", gap: "80px", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", color: "#999", textTransform: "uppercase", marginBottom: "16px" }}>Process</p>
            <h2 style={{ ...S.serif, fontSize: "28px", fontWeight: 500, color: "#333", marginTop: "16px" }}>提供<br />プロセス。</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderTop: "1px solid rgba(0,0,0,0.22)" }}>
            {[
              { step: "01", name: "現状確認" },
              { step: "02", name: "研修設計" },
              { step: "03", name: "講義と演習" },
              { step: "04", name: "行動計画" },
              { step: "05", name: "30〜90日フォロー" },
              { step: "06", name: "必要に応じて余白設計・IT実装へ接続" },
            ].map((p, i) => (
              <div key={i} style={{
                padding: "40px 0",
                paddingRight: i % 3 < 2 ? "36px" : 0,
                paddingLeft: i % 3 > 0 ? "36px" : 0,
                borderBottom: "1px solid rgba(0,0,0,0.08)",
                borderRight: i % 3 < 2 ? "1px solid rgba(0,0,0,0.08)" : "none"
              }}>
                <span style={{ ...S.serif, fontSize: "36px", lineHeight: 1, fontWeight: 500, color: "#333", display: "block" }}>{p.step}</span>
                <p style={{ fontSize: "16px", fontWeight: 500, lineHeight: 1.75, color: "#111", marginTop: "16px" }}>{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="js-reveal" style={{ padding: "120px 48px", background: "#111", color: "#fafafa" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <div>
            <h2 style={{ ...S.serif, fontSize: "clamp(30px, 3.5vw, 48px)", fontWeight: 500, lineHeight: 1.3, marginBottom: "24px" }}>
              まず、話してみてください。
            </h2>
            <span style={{ ...S.serifEn, fontSize: "18px", color: "rgba(255,255,255,0.5)" }}>
              — 30-minute free consultation.
            </span>
          </div>
          <div>
            <p style={{ fontSize: "16px", lineHeight: 2.0, color: "rgba(255,255,255,0.7)", marginBottom: "40px" }}>
              現在の課題感や組織の状況をお聞きし、どの研修が合うかをご提案します。まずは30分の無料相談からお気軽にどうぞ。
            </p>
            <Link href="/contact" style={{
              display: "inline-block", background: "#fafafa", color: "#111",
              padding: "16px 32px", fontSize: "15px", fontWeight: 500,
              border: "1px solid #fafafa", transition: "background 0.3s, color 0.3s"
            }} className="hover:bg-transparent hover:text-white">
              無料相談を申し込む →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: "1px solid rgba(0,0,0,0.12)", padding: "40px 48px 28px", ...S.sans }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            <Link href="/" style={{ ...S.serif, fontSize: "16px", fontWeight: 500 }}>理想と実践</Link>
            <Link href="/about" style={{ fontSize: "13px", color: "#666" }} className="hover:opacity-60">About</Link>
            <Link href="/programs" style={{ fontSize: "13px", color: "#666" }} className="hover:opacity-60">研修一覧</Link>
            <Link href="/contact" style={{ fontSize: "13px", color: "#666" }} className="hover:opacity-60">お問い合わせ</Link>
            <Link href="/privacy" style={{ fontSize: "13px", color: "#666" }} className="hover:opacity-60">プライバシーポリシー</Link>
            <Link href="/terms" style={{ fontSize: "13px", color: "#666" }} className="hover:opacity-60">利用規約</Link>
            <Link href="/faq" style={{ fontSize: "13px", color: "#666" }} className="hover:opacity-60">FAQ</Link>
          </div>
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <span style={{ fontSize: "12px", color: "#999" }}>運営・思想監修：</span>
            <a href="https://hakuyu.ltd" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#666" }} className="hover:opacity-60">白裕（Hakuyu）</a>
            <span style={{ fontSize: "12px", color: "#999" }}>© 2026 白裕</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
