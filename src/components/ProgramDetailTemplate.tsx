// src/components/ProgramDetailTemplate.tsx
// 全研修詳細ページで使う共通テンプレート

import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import type { Program } from "@/lib/programs-data";
import { programs } from "@/lib/programs-data";

const S = {
  serif: { fontFamily: "var(--font-display, 'Zen Old Mincho', serif)" } as React.CSSProperties,
  sans: { fontFamily: "var(--font-sans, 'Noto Sans JP', sans-serif)" } as React.CSSProperties,
};

export default function ProgramDetailTemplate({ program: p }: { program: Program }) {
  const related = programs.filter((r) => p.relatedSlugs?.includes(r.slug));

  return (
    <main style={{ background: "#fafafa", color: "#111", ...S.sans }}>
      <SiteNav activeHref="/programs" />

      {/* ── ファーストビュー ── */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "80px",
          paddingLeft: "48px",
          paddingRight: "48px",
          borderBottom: "1px solid rgba(0,0,0,0.10)",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <Link
            href="/programs"
            style={{ fontSize: "13px", color: "#666", textDecoration: "underline", marginBottom: "28px", display: "inline-block", textUnderlineOffset: "3px" }}
          >
            ← 研修一覧へ戻る
          </Link>

          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "16px", marginTop: "8px" }}>
            {p.categoryLabel.toUpperCase()}
          </p>
          <h1 style={{ ...S.serif, fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 500, lineHeight: 1.3, marginBottom: "12px" }}>
            {p.title}
          </h1>
          <p style={{ fontSize: "16px", color: "#777", marginBottom: "32px" }}>{p.subtitle}</p>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", maxWidth: "720px", marginBottom: "40px" }}>
            {p.summary}
          </p>

          {/* 概要バッジ */}
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap", paddingTop: "24px", borderTop: "1px solid rgba(0,0,0,0.10)" }}>
            <div>
              <p style={{ fontSize: "11px", color: "#999", marginBottom: "4px" }}>時間・形式</p>
              <p style={{ fontSize: "15px", fontWeight: 500 }}>{p.duration}</p>
            </div>
            <div>
              <p style={{ fontSize: "11px", color: "#999", marginBottom: "4px" }}>対象人数</p>
              <p style={{ fontSize: "15px", fontWeight: 500 }}>{p.capacity}</p>
            </div>
            <div>
              <p style={{ fontSize: "11px", color: "#999", marginBottom: "4px" }}>標準価格（税別）</p>
              <p style={{ ...S.serif, fontSize: "20px", fontWeight: 500 }}>{p.price}</p>
            </div>
          </div>

          {/* CTA */}
          <div style={{ marginTop: "32px" }}>
            <Link
              href={`/contact?program=${p.slug}`}
              style={{
                display: "inline-block",
                background: "#111",
                color: "#fafafa",
                padding: "14px 32px",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              この研修を相談する →
            </Link>
          </div>
        </div>
      </section>

      {/* ── この研修が適している企業 ── */}
      <section style={{ padding: "72px 48px", background: "#f5f5f2", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "20px" }}>SUITABLE FOR</p>
            <h2 style={{ ...S.serif, fontSize: "20px", fontWeight: 500, marginBottom: "24px" }}>
              このような企業・組織に
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {p.suitableFor.map((item, i) => (
                <li key={i} style={{ fontSize: "15px", lineHeight: 2.0, color: "#444", paddingLeft: "16px", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "#bbb" }}>·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "20px" }}>NOT SUITABLE FOR</p>
            <h2 style={{ ...S.serif, fontSize: "20px", fontWeight: 500, marginBottom: "24px" }}>
              適していないケース
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {p.notSuitableFor.map((item, i) => (
                <li key={i} style={{ fontSize: "15px", lineHeight: 2.0, color: "#666", paddingLeft: "16px", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "#ddd" }}>·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 到達目標 ── */}
      <section style={{ padding: "72px 48px", background: "#fafafa", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "20px" }}>OUTCOMES</p>
          <h2 style={{ ...S.serif, fontSize: "22px", fontWeight: 500, marginBottom: "32px" }}>
            到達目標・得られる状態
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {p.goals.map((goal, i) => (
              <div key={i} style={{ background: "#f5f5f2", padding: "24px" }}>
                <p style={{ ...S.serif, fontSize: "28px", fontWeight: 400, color: "#ddd", marginBottom: "12px" }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#444" }}>{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── カリキュラム ── */}
      <section style={{ padding: "72px 48px", background: "#f5f5f2", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "20px" }}>CURRICULUM</p>
          <h2 style={{ ...S.serif, fontSize: "22px", fontWeight: 500, marginBottom: "32px" }}>
            主な内容・カリキュラム
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {p.curriculum.map((c, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "40px 1fr",
                  gap: "24px",
                  padding: "24px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                  alignItems: "start",
                }}
              >
                <span style={{ ...S.serif, fontSize: "22px", fontWeight: 400, color: "#ccc", lineHeight: 1 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: 500, marginBottom: "6px" }}>{c.title}</p>
                  <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.8 }}>{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 成果物 ── */}
      <section style={{ padding: "72px 48px", background: "#fafafa", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "20px" }}>DELIVERABLES</p>
          <h2 style={{ ...S.serif, fontSize: "22px", fontWeight: 500, marginBottom: "32px" }}>
            成果物・持ち帰れるもの
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {p.deliverables.map((d, i) => (
              <div key={i} style={{ background: "#f5f5f2", padding: "24px" }}>
                <p style={{ fontSize: "14px", fontWeight: 500, marginBottom: "8px" }}>{d.title}</p>
                <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.8 }}>{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 実施までの流れ ── */}
      <section style={{ padding: "72px 48px", background: "#f5f5f2", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "20px" }}>FLOW</p>
          <h2 style={{ ...S.serif, fontSize: "22px", fontWeight: 500, marginBottom: "32px" }}>
            実施までの流れ
          </h2>
          <div style={{ display: "flex", gap: "0", flexDirection: "column" }}>
            {[
              { step: "01", label: "無料相談（30分）", desc: "課題・対象者・目的をヒアリングします。どの研修が合うかをご提案します。" },
              { step: "02", label: "事前ヒアリング・研修設計", desc: "対象者の詳細・職場環境・期待効果を確認し、内容を調整します。" },
              { step: "03", label: "研修実施", desc: "ご指定の日程・場所（オンライン可）で実施します。" },
              { step: "04", label: "実施レポートの提出", desc: "研修の概要・参加者所感・今後の推奨アクションをレポートとしてお渡しします。" },
              { step: "05", label: "必要に応じて定着支援", desc: "30日フォロー・90日定着プログラムへ接続可能です。" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "40px 1fr",
                  gap: "24px",
                  padding: "24px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <span style={{ ...S.serif, fontSize: "22px", fontWeight: 400, color: "#ccc", lineHeight: 1 }}>
                  {item.step}
                </span>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: 500, marginBottom: "6px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 料金・含まれるもの ── */}
      <section style={{ padding: "72px 48px", background: "#fafafa", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "20px" }}>PRICING</p>
          <h2 style={{ ...S.serif, fontSize: "22px", fontWeight: 500, marginBottom: "32px" }}>
            料金・含まれるもの
          </h2>
          <div style={{ background: "#f5f5f2", padding: "40px" }}>
            <p style={{ ...S.serif, fontSize: "32px", fontWeight: 500, marginBottom: "8px" }}>{p.price}</p>
            <p style={{ fontSize: "13px", color: "#888", marginBottom: "32px" }}>{p.duration} / {p.capacity}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <div>
                <p style={{ fontSize: "12px", color: "#999", marginBottom: "12px" }}>含まれるもの</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {["研修費", "教材費", "事前ヒアリング（30〜60分）", "実施レポート", ...p.deliverables.map((d) => d.title)].map((item, i) => (
                    <li key={i} style={{ fontSize: "13px", lineHeight: 1.9, color: "#444", paddingLeft: "14px", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#bbb" }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p style={{ fontSize: "12px", color: "#999", marginBottom: "12px" }}>含まれないもの</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {["現地交通費・宿泊費", "完全オーダーメイド教材", "追加研修の実施", "無制限の個別面談", "録画の社内無期限利用"].map((item, i) => (
                    <li key={i} style={{ fontSize: "13px", lineHeight: 1.9, color: "#888", paddingLeft: "14px", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#ddd" }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 関連研修 ── */}
      {related.length > 0 && (
        <section style={{ padding: "72px 48px", background: "#f5f5f2", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "20px" }}>RELATED</p>
            <h2 style={{ ...S.serif, fontSize: "22px", fontWeight: 500, marginBottom: "32px" }}>
              関連する研修
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px" }}>
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/programs/${r.slug}`}
                  style={{
                    display: "block",
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.10)",
                    padding: "24px",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <p style={{ fontSize: "11px", color: "#999", marginBottom: "8px" }}>{r.categoryLabel}</p>
                  <p style={{ ...S.serif, fontSize: "16px", fontWeight: 500, marginBottom: "8px" }}>{r.title}</p>
                  <p style={{ fontSize: "13px", color: "#888" }}>{r.duration} / {r.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 最終CTA ── */}
      <section style={{ padding: "100px 48px", background: "#111", color: "#fafafa" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ ...S.serif, fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 500, lineHeight: 1.4, marginBottom: "20px" }}>
            自社に適した研修か、<br />30分の無料相談で確認できます。
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "rgba(255,255,255,0.65)", marginBottom: "40px" }}>
            課題・対象者・研修目的を伺い、どの研修が合うかをご提案します。
            <br />
            お見積もり・ご相談は無料です。
          </p>
          <Link
            href={`/contact?program=${p.slug}`}
            style={{
              display: "inline-block",
              background: "#fafafa",
              color: "#111",
              padding: "16px 36px",
              fontSize: "15px",
              fontWeight: 500,
            }}
          >
            この研修について相談する →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(0,0,0,0.12)", padding: "40px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            <Link href="/" style={{ ...S.serif, fontSize: "15px", fontWeight: 500 }}>理想と実践</Link>
            <Link href="/programs" style={{ fontSize: "13px", color: "#666" }}>研修一覧</Link>
            <Link href="/contact" style={{ fontSize: "13px", color: "#666" }}>お問い合わせ</Link>
          </div>
          <span style={{ fontSize: "12px", color: "#999" }}>© 2026 白裕</span>
        </div>
      </footer>
    </main>
  );
}
