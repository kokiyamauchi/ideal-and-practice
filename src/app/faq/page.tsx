import Link from "next/link";
import { Metadata } from "next";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "よくあるご質問（FAQ）｜理想と実践",
};

const S = {
  serif: { fontFamily: "var(--font-display, 'Zen Old Mincho', serif)" } as React.CSSProperties,
  sans: { fontFamily: "var(--font-sans, 'Noto Sans JP', sans-serif)" } as React.CSSProperties,
};

export default function FAQ() {
  return (
    <main style={{ background: "#fafafa", color: "#111", ...S.sans, minHeight: "100vh" }}>
      <SiteNav />

      <section style={{ paddingTop: "140px", paddingBottom: "80px", paddingLeft: "48px", paddingRight: "48px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ ...S.serif, fontSize: "32px", fontWeight: 500, marginBottom: "24px" }}>よくあるご質問（FAQ）</h1>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "40px" }}>
            {[
              { q: "オンライン・対面の対応は可能ですか？", a: "オンラインを基本としておりますが、日程・地域により対面での個別相談も可能です。" },
              { q: "平日・休日の対応時間はどのようになっていますか？", a: "平日夜間・土日を中心に個別調整とさせていただいております。" },
              { q: "人数超過の場合の料金はどうなりますか？", a: "基本人数（12名等）を超える場合は、別途お見積りとなります。" },
              { q: "キャンセル・日程変更は可能ですか？", a: "可能です。詳細なキャンセル規定は別途ご案内いたします。" },
              { q: "録画の可否や教材の社内共有はできますか？", a: "録画の社内無期限利用や教材の完全共有（著作権譲渡）は標準仕様に含まれません。必要な場合は別途ご相談ください。" },
              { q: "経営者・管理職の参加は必須ですか？", a: "必須ではありませんが、研修の効果を高めるために参加を推奨する場合があります。" },
              { q: "IT Service Labとの連携について教えてください。", a: "研修後の定着支援において、業務システムの構築が必要な場合、IT Service Labと連携してGoogle DriveやAI等の実装支援を提供できます。" }
            ].map((faq, i) => (
              <div key={i} style={{ padding: "24px", background: "#fff", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.08)" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "12px", display: "flex", gap: "8px" }}>
                  <span style={{ color: "#999" }}>Q.</span>{faq.q}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#555", display: "flex", gap: "8px" }}>
                  <span style={{ color: "#999" }}>A.</span>{faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
