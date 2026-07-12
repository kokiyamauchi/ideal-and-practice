import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜理想と実践",
};

const S = {
  serif: { fontFamily: "var(--font-display, 'Zen Old Mincho', serif)" } as React.CSSProperties,
  sans: { fontFamily: "var(--font-sans, 'Noto Sans JP', sans-serif)" } as React.CSSProperties,
};

export default function Privacy() {
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
          <h1 style={{ ...S.serif, fontSize: "32px", fontWeight: 500, marginBottom: "24px" }}>プライバシーポリシー</h1>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "40px" }}>
            「理想と実践」（以下、「当事業」）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、個人情報の保護を推進致します。<br /><br />
            詳細なプライバシーポリシーは現在準備中です。
          </p>
        </div>
      </section>
    </main>
  );
}
