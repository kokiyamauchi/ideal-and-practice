import Link from "next/link";
import SiteNav from "@/components/SiteNav";
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
      <SiteNav activeHref="/programs" />

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
