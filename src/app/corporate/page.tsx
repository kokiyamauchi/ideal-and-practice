import Link from "next/link";
import { Metadata } from "next";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "主体性・管理職・事業管理の法人研修｜理想と実践",
};

const S = {
  serif: { fontFamily: "var(--font-display, 'Zen Old Mincho', serif)" } as React.CSSProperties,
  serifEn: { fontFamily: "var(--font-serif-en, 'Instrument Serif', serif)", fontStyle: "italic" } as React.CSSProperties,
  sans: { fontFamily: "var(--font-sans, 'Noto Sans JP', sans-serif)" } as React.CSSProperties,
};

export default function Corporate() {
  return (
    <main style={{ background: "#fafafa", color: "#111", ...S.sans }}>
      {/* Nav */}
      <SiteNav activeHref="/corporate" />

      {/* Hero */}
      <section style={{
        paddingTop: "160px", paddingBottom: "100px",
        paddingLeft: "48px", paddingRight: "48px",
        background: "#fafafa", borderBottom: "1px solid rgba(0,0,0,0.10)"
      }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.20em", color: "#999", marginBottom: "28px" }}>FOR CORPORATE</p>
          <h1 style={{ ...S.serif, fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 400, lineHeight: 1.25, marginBottom: "40px" }}>
            会社の理念と<br />
            個人の理想を接続する
          </h1>
          <p style={{ fontSize: "17px", lineHeight: 2.1, color: "#555", maxWidth: "640px" }}>
            「主体的に動け」という言葉だけでは、人は動きません。<br />
            個人の理想と法人の役割の接点が明確になるほど、本人が納得して行動を選びやすくなります。<br />
            接点が見つからない場合も、役割や環境を見直すための重要な気づきとして扱います。<br />
            理想と実践は、LHMPを基盤に組織の構造的な課題を解決します。
          </p>
        </div>
      </section>

      {/* Issues */}
      <section style={{ padding: "100px 48px", background: "#f5f5f2" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ ...S.serif, fontSize: "28px", fontWeight: 500, marginBottom: "40px" }}>よくある組織の課題</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            <div style={{ background: "#fff", padding: "40px", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.08)" }}>
              <h3 style={{ ...S.serif, fontSize: "20px", fontWeight: 500, marginBottom: "16px" }}>主体性・理念浸透</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {["指示待ちの社員が多い", "理念を唱和しても行動が変わらない", "会社の方向性と、自分の役割との接続が見えない"].map((t, i) => (
                  <li key={i} style={{ fontSize: "15px", lineHeight: 1.9, color: "#444", paddingLeft: "14px", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#999" }}>·</span>{t}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "#fff", padding: "40px", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.08)" }}>
              <h3 style={{ ...S.serif, fontSize: "20px", fontWeight: 500, marginBottom: "16px" }}>管理職・事業管理</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {["管理職が仕事を抱え込んでいる", "誰が何を担当しているか不明", "会議が報告だけで終わる"].map((t, i) => (
                  <li key={i} style={{ fontSize: "15px", lineHeight: 1.9, color: "#444", paddingLeft: "14px", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#999" }}>·</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section style={{ padding: "100px 48px", background: "#fafafa" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ ...S.serif, fontSize: "28px", fontWeight: 500, marginBottom: "40px" }}>解決へのアプローチ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ display: "flex", gap: "24px", borderBottom: "1px solid rgba(0,0,0,0.08)", paddingBottom: "40px" }}>
              <div style={{ ...S.serif, fontSize: "32px", fontWeight: 400, color: "#ccc" }}>01</div>
              <div>
                <h3 style={{ ...S.serif, fontSize: "22px", fontWeight: 500, marginBottom: "16px" }}>現状の整理と課題の特定</h3>
                <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555" }}>
                  まずは30分の無料相談で、現在の組織の課題、対象者、研修の目的をヒアリングします。
                  表面的な症状（例：「社員が動かない」）ではなく、その根本にある構造的な問題（例：「役割と権限が曖昧」「個人の理想と接続されていない」）を特定します。
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "24px", borderBottom: "1px solid rgba(0,0,0,0.08)", paddingBottom: "40px" }}>
              <div style={{ ...S.serif, fontSize: "32px", fontWeight: 400, color: "#ccc" }}>02</div>
              <div>
                <h3 style={{ ...S.serif, fontSize: "22px", fontWeight: 500, marginBottom: "16px" }}>最適な研修プログラムの設計</h3>
                <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555" }}>
                  特定された課題に基づき、人生OS・人/組織OS・事業管理OSの3領域から最適なプログラムをご提案します。
                  単なる知識のインプットではなく、行動変容と組織への定着をゴールとして設計します。
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "24px", paddingBottom: "40px" }}>
              <div style={{ ...S.serif, fontSize: "32px", fontWeight: 400, color: "#ccc" }}>03</div>
              <div>
                <h3 style={{ ...S.serif, fontSize: "22px", fontWeight: 500, marginBottom: "16px" }}>90日間の定着支援</h3>
                <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555" }}>
                  研修は「学んで終わり」ではありません。行動計画の作成から、30日・60日・90日後のレビューを通じて、
                  学びを現場の実践と組織の仕組みへと定着させます。必要に応じて、IT基盤の実装（IT Service Lab）や余白の設計（余白と余裕）へも接続します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics & Policies */}
      <section style={{ padding: "100px 48px", background: "#f0ede6" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ ...S.serif, fontSize: "28px", fontWeight: 500, marginBottom: "24px" }}>受講者保護と倫理方針</h2>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", marginBottom: "40px" }}>
            法人研修において個人の人生・幸福・理想を扱うため、通常の管理職研修以上に倫理設計を重視しています。
          </p>
          <div style={{ background: "#fff", padding: "40px", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.08)" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "個人の理想や価値観の開示を強制しません",
                "個人ワークの内容は、本人の同意なく会社へ共有しません",
                "会社への帰属意識向上を唯一の目的にしません",
                "個人と法人の理想が重ならないことも正当な結果として扱います",
                "人事評価へ利用する場合は、事前に目的と範囲を明示します",
                "心理的負担が生じた場合は、いつでも回答や発言を中断できます",
                "医療、心理、労務上の課題は専門家へ接続します",
              ].map((item, idx) => (
                <li key={idx} style={{ fontSize: "15px", lineHeight: 2.0, color: "#444", paddingLeft: "18px", position: "relative", marginBottom: idx < 6 ? "12px" : 0 }}>
                  <span style={{ position: "absolute", left: 0, color: "#111" }}>✓</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 48px", background: "#111", color: "#fafafa" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ ...S.serif, fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 500, lineHeight: 1.4, marginBottom: "24px" }}>
            まずは現状をお聞かせください
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "rgba(255,255,255,0.65)", marginBottom: "40px" }}>
            30分の無料相談にて、組織の課題を整理し、最適な解決策をご提案します。<br />
            無理な導入提案はいたしませんので、お気軽にご相談ください。
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ display: "inline-block", background: "#fafafa", color: "#111", padding: "14px 32px", fontSize: "14px", fontWeight: 500 }}>無料相談を申し込む</Link>
            <Link href="/programs" style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.4)", color: "#fafafa", padding: "14px 32px", fontSize: "14px" }}>研修一覧を見る</Link>
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
            <Link href="/privacy" style={{ fontSize: "13px", color: "#666" }}>プライバシーポリシー</Link>
            <Link href="/terms" style={{ fontSize: "13px", color: "#666" }}>利用規約</Link>
            <Link href="/faq" style={{ fontSize: "13px", color: "#666" }}>FAQ</Link>
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
