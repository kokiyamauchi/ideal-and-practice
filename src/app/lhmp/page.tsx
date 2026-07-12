import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LHMP／幸福最大化思想体系とは｜理想と実践",
};

const S = {
  serif: { fontFamily: "var(--font-display, 'Zen Old Mincho', serif)" } as React.CSSProperties,
  serifEn: { fontFamily: "var(--font-serif-en, 'Instrument Serif', serif)", fontStyle: "italic" } as React.CSSProperties,
  sans: { fontFamily: "var(--font-sans, 'Noto Sans JP', sans-serif)" } as React.CSSProperties,
};

export default function LHMP() {
  const steps = [
    {
      n: "01",
      title: "LHMPとは",
      body: "LHMP（幸福最大化思想体系）は、白裕が体系化・保有する中核思想です。人が自分にとっての幸福な理想を描き、その実現に必要な知識と思考力を高めながら、仕事や法人との関係を自分の人生へ接続していくための論理的な思想体系です。"
    },
    {
      n: "02",
      title: "最上位命題",
      body: "LHMPの最上位に置かれているのは「人が自分の理想に向かって生きられる状態をつくる」という命題です。これが研修・診断・実装すべての出発点であり、白裕のすべての事業はこの命題へ向かって設計されています。"
    },
    {
      n: "03",
      title: "幸福と理想",
      body: "LHMPにおける幸福は、一般的な「満足感」や「快楽」とは異なります。自分にとって何が幸福なのかを考え、どこへ向かうのかを決め、必要な行動を自ら選べる余地がある状態のことです。理想とは、その幸福の具体的な姿です。"
    },
    {
      n: "04",
      title: "正しい知識",
      body: "理想を描いても、正しい知識がなければ判断を誤ります。LHMPでは、人生・仕事・人間関係・法人・社会の仕組みについての基礎的知識を「正しい知識」として体系化し、誤解や思い込みを解体することを重視します。"
    },
    {
      n: "05",
      title: "正しい思考力",
      body: "知識を持っていても、思考力がなければ判断できません。LHMPでは感情・直感・バイアスに流されず、問いを立て、因果を考え、選択肢を評価できる力を「正しい思考力」と定義し、研修を通じて鍛えます。"
    },
    {
      n: "06",
      title: "仕事の意味づけ",
      body: "多くの人は「なぜこの仕事をしているのか」を自分の人生と接続できていません。LHMPでは、仕事を「手段」として自分の理想・価値観・成長と接続することで、仕事が義務ではなく選択肢になる状態を目指します。"
    },
    {
      n: "07",
      title: "法人観",
      body: "LHMPにおける法人とは、個人が集まって目的を達成するための構造体です。法人の利益と個人の幸福は対立するものではなく、接続できるものという前提に立ち、組織での自分の役割・行動の意味を再設計します。"
    },
    {
      n: "08",
      title: "主体性",
      body: "主体性とは、単なる「やる気」ではありません。LHMPでは主体性を「個人の理想と法人の理想を接続し、法人に必要な行動を自ら選ぶ力」と定義します。この定義に基づいた研修が、指示待ちの解消・自律的チームの形成へ向かいます。"
    },
    {
      n: "09",
      title: "個人向け・法人向けの展開",
      body: "LHMPは個人の人生設計（人生OS・理想形成）から、法人の組織開発（主体性開発・管理職育成・事業管理）まで展開できます。「理想と実践」はこのLHMPを、個人・法人双方への研修として提供しています。"
    },
  ];

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
          <Link href="/about">About</Link>
          <Link href="/lhmp" style={{ fontWeight: 700 }}>LHMP</Link>
          <Link href="/programs">研修一覧</Link>
          <Link href="/corporate">法人向け</Link>
          <Link href="/contact" style={{ padding: "8px 18px", border: "1px solid #111" }}>お問い合わせ</Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        paddingTop: "160px", paddingBottom: "100px",
        paddingLeft: "48px", paddingRight: "48px",
        background: "#f0ede6", borderBottom: "1px solid rgba(0,0,0,0.10)"
      }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.20em", color: "#999", marginBottom: "28px" }}>CORE PHILOSOPHY</p>
          <h1 style={{ ...S.serif, fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 400, lineHeight: 1.25, marginBottom: "40px" }}>
            LHMP<br />
            幸福最大化思想体系
          </h1>
          <p style={{ fontSize: "17px", lineHeight: 2.1, color: "#555", maxWidth: "640px" }}>
            人が自分にとっての幸福な理想を描き、<br />
            その実現に必要な知識と思考力を高めながら、<br />
            仕事や法人との関係も自分の人生へ接続していくための思想体系。<br />
            白裕が体系化・保有し、すべての研修の基盤となっています。
          </p>
        </div>
      </section>

      {/* Flow */}
      <section style={{ padding: "100px 48px", background: "#fafafa", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "20px" }}>STRUCTURE</p>
          <h2 style={{ ...S.serif, fontSize: "28px", fontWeight: 500, marginBottom: "56px" }}>LHMPの全体構造</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              "自分の幸福を考える",
              "自分の理想を描く",
              "正しい知識と思考力を高める",
              "仕事を未来の自分へ接続する",
              "法人・組織の中で主体的に行動する",
              "理想を現実の仕組みへ変える",
            ].map((step, i, arr) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                <div style={{
                  display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0
                }}>
                  <div style={{
                    width: "44px", height: "44px", border: "1px solid #111",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    ...S.serif, fontSize: "14px", fontWeight: 500
                  }}>{String(i + 1).padStart(2, "0")}</div>
                  {i < arr.length - 1 && <div style={{ width: "1px", height: "32px", background: "rgba(0,0,0,0.15)" }} />}
                </div>
                <p style={{ fontSize: "17px", fontWeight: 500, color: "#111", padding: "10px 0" }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail */}
      <section style={{ padding: "100px 48px", background: "#fafafa" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "20px" }}>DETAIL</p>
          <h2 style={{ ...S.serif, fontSize: "28px", fontWeight: 500, marginBottom: "64px" }}>各要素の解説</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map((s, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "80px 1fr",
                gap: "40px", paddingTop: "48px", paddingBottom: "48px",
                borderTop: "1px solid rgba(0,0,0,0.08)"
              }}>
                <div style={{ ...S.serif, fontSize: "36px", fontWeight: 400, color: "#ccc", lineHeight: 1 }}>{s.n}</div>
                <div>
                  <h3 style={{ ...S.serif, fontSize: "22px", fontWeight: 500, marginBottom: "20px", color: "#111" }}>{s.title}</h3>
                  <p style={{ fontSize: "15px", lineHeight: 2.1, color: "#555" }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section style={{ padding: "60px 48px", background: "#f5f5f2", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ fontSize: "13px", lineHeight: 2.0, color: "#888" }}>
            ※ LHMP内の数式・公式は、自然科学上の厳密な法則としてではなく、思考を整理しボトルネックを確認するためのモデルとして提示されています。<br />
            ※ 本思想体系は、医療・心理療法・カウンセリングを代替するものではありません。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 48px", background: "#111", color: "#fafafa" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ ...S.serif, fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 500, lineHeight: 1.4, marginBottom: "24px" }}>
            LHMPを研修として体験する
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "rgba(255,255,255,0.65)", marginBottom: "40px" }}>
            LHMP入門研修から、人生OS・主体性・事業管理まで、<br />
            組織の課題に合った研修をご提案します。
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/programs" style={{ display: "inline-block", background: "#fafafa", color: "#111", padding: "14px 32px", fontSize: "14px", fontWeight: 500 }}>研修一覧を見る</Link>
            <Link href="/contact" style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.4)", color: "#fafafa", padding: "14px 32px", fontSize: "14px" }}>無料相談を申し込む</Link>
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
            <span style={{ fontSize: "12px", color: "#999" }}>思想監修：</span>
            <a href="https://hakuyu.ltd" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "#666" }}>白裕（Hakuyu）</a>
            <span style={{ fontSize: "12px", color: "#999" }}>© 2026 白裕</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
