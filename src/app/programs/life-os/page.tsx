import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "理想と実践｜人生OS研修",
};

const S = {
  serif: { fontFamily: "var(--font-display, 'Zen Old Mincho', serif)" } as React.CSSProperties,
  sans: { fontFamily: "var(--font-sans, 'Noto Sans JP', sans-serif)" } as React.CSSProperties,
};

export default function LifeOS() {
  return (
    <main style={{ background: "#fafafa", color: "#111", ...S.sans, minHeight: "100vh" }}>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: "20px 48px", display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(250,250,250,0.9)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.08)", ...S.sans
      }}>
        <Link href="/" style={{ ...S.serif, fontSize: "18px", fontWeight: 500 }}>理想と実践</Link>
        <div style={{ display: "flex", gap: "32px", fontSize: "13px" }}>
          <Link href="/about">About</Link>
          <Link href="/lhmp">LHMP</Link>
          <Link href="/programs">研修一覧</Link>
          <Link href="/corporate">法人向け</Link>
          <Link href="/contact" style={{ padding: "8px 18px", border: "1px solid #111" }}>お問い合わせ</Link>
        </div>
      </nav>

      <section style={{ paddingTop: "140px", paddingBottom: "80px", paddingLeft: "48px", paddingRight: "48px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Link href="/programs" style={{ fontSize: "13px", color: "#666", textDecoration: "underline", marginBottom: "24px", display: "inline-block" }}>← 研修一覧へ戻る</Link>
          <h1 style={{ ...S.serif, fontSize: "32px", fontWeight: 500, marginBottom: "24px" }}>人生OS研修</h1>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "40px" }}>詳細なカリキュラムや対象者は現在準備中です。</p>
          
          <Link href="/contact?program=life-os" style={{
            display: "inline-block", background: "#111", color: "#fafafa",
            padding: "16px 36px", fontSize: "15px", fontWeight: 500
          }}>この研修を相談する →</Link>
        </div>
      </section>
    </main>
  );
}
