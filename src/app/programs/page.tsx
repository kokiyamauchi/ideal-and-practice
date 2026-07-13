import Link from "next/link";
import { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import { programs, retentionOptions, categories, challengeCards } from "@/lib/programs-data";

export const metadata: Metadata = {
  title: "組織の課題に合った研修を選ぶ｜理想と実践",
  description:
    "LHMPを基盤に、社員の主体性、理念と役割の接続、管理職育成、事業管理、研修後の定着を支援します。課題から研修を探すか、各研修の違いをご確認ください。",
};

const S = {
  serif: { fontFamily: "var(--font-display, 'Zen Old Mincho', serif)" } as React.CSSProperties,
  serifEn: { fontFamily: "var(--font-serif-en, 'Instrument Serif', serif)", fontStyle: "italic" } as React.CSSProperties,
  sans: { fontFamily: "var(--font-sans, 'Noto Sans JP', sans-serif)" } as React.CSSProperties,
};

// カテゴリ表示ラベル（ページ内アンカー用）
const categoryAnchorId = (cat: string) => `category-${cat}`;
const programAnchorId = (slug: string) => `program-${slug}`;

// カテゴリごとに研修をグループ化
const grouped = categories.map((cat) => ({
  ...cat,
  programs: programs.filter((p) => p.category === cat.id),
}));

export default function Programs() {
  return (
    <main style={{ background: "#fafafa", color: "#111", ...S.sans }}>
      <SiteNav activeHref="/programs" />

      {/* ══════════════════════════════════════
          セクション1: ファーストビュー
      ══════════════════════════════════════ */}
      <section
        id="top"
        style={{
          paddingTop: "140px",
          paddingBottom: "80px",
          paddingLeft: "48px",
          paddingRight: "48px",
          borderBottom: "1px solid rgba(0,0,0,0.10)",
          scrollMarginTop: "0px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "24px" }}>
            PROGRAMS
          </p>
          <h1
            style={{
              ...S.serif,
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 500,
              lineHeight: 1.3,
              marginBottom: "28px",
            }}
          >
            組織の課題に合った研修を選ぶ
          </h1>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 2.0,
              color: "#555",
              maxWidth: "640px",
              marginBottom: "48px",
            }}
          >
            LHMPを基盤に、社員の主体性、理念と役割の接続、管理職育成、事業管理、研修後の定着を支援します。
            <br />
            お悩みから研修を探すか、各研修の違いをご確認ください。
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="#challenges"
              style={{
                display: "inline-block",
                background: "#111",
                color: "#fafafa",
                padding: "14px 28px",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              課題から研修を探す ↓
            </a>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                border: "1px solid rgba(0,0,0,0.30)",
                color: "#111",
                padding: "14px 28px",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              研修選びを相談する
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          セクション2: お悩みから選ぶ
      ══════════════════════════════════════ */}
      <section
        id="challenges"
        style={{
          padding: "80px 48px",
          background: "#f5f5f2",
          scrollMarginTop: "80px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "20px" }}>
            FIND BY CHALLENGE
          </p>
          <h2
            style={{
              ...S.serif,
              fontSize: "28px",
              fontWeight: 500,
              marginBottom: "12px",
            }}
          >
            お悩みから探す
          </h2>
          <p style={{ fontSize: "15px", color: "#666", marginBottom: "48px", lineHeight: 1.8 }}>
            当てはまる課題をクリックすると、該当の研修へ移動します。
          </p>

          {/* 課題カード：3列×2段 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {challengeCards.map((card) => (
              <a
                key={card.id}
                href={`#${programAnchorId(card.targetSlug)}`}
                style={{
                  display: "block",
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.10)",
                  padding: "28px 24px",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.10)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "none";
                }}
              >
                <p style={{ fontSize: "15px", fontWeight: 500, lineHeight: 1.7, marginBottom: "14px" }}>
                  {card.title}
                </p>
                <p style={{ fontSize: "12px", color: "#888", lineHeight: 1.8, marginBottom: "16px" }}>
                  {card.note}
                </p>
                <p style={{ fontSize: "12px", color: "#333", fontWeight: 500 }}>
                  → {card.targetLabel}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          セクション3: 比較表
      ══════════════════════════════════════ */}
      <section
        id="comparison"
        style={{
          padding: "80px 48px",
          background: "#fafafa",
          scrollMarginTop: "80px",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "20px" }}>
            COMPARISON
          </p>
          <h2
            style={{
              ...S.serif,
              fontSize: "28px",
              fontWeight: 500,
              marginBottom: "12px",
            }}
          >
            研修の比較
          </h2>
          <p style={{ fontSize: "15px", color: "#666", marginBottom: "40px", lineHeight: 1.8 }}>
            似た研修との違いや、自社の状況に合う研修を確認できます。
          </p>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                minWidth: "700px",
                borderCollapse: "collapse",
                fontSize: "14px",
                lineHeight: 1.7,
              }}
            >
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(0,0,0,0.15)" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 500, color: "#999", fontSize: "11px", letterSpacing: "0.1em" }}>研修名</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 500, color: "#999", fontSize: "11px", letterSpacing: "0.1em" }}>主な目的</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 500, color: "#999", fontSize: "11px", letterSpacing: "0.1em" }}>適した状態</th>
                  <th style={{ textAlign: "right", padding: "12px 16px", fontWeight: 500, color: "#999", fontSize: "11px", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>時間</th>
                  <th style={{ textAlign: "right", padding: "12px 16px", fontWeight: 500, color: "#999", fontSize: "11px", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>価格（税別）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "LHMP入門", purpose: "全体像の共有", state: "まず導入したい", time: "90分", price: "132,000円", slug: "lhmp-intro" },
                  { name: "理想形成WS", purpose: "理想の言語化", state: "理想が曖昧", time: "3時間", price: "275,000円", slug: "life-os-workshop" },
                  { name: "人生OS", purpose: "人生・判断・行動の包括整理", state: "広く設計したい", time: "約6時間", price: "440,000円", slug: "life-os" },
                  { name: "主体性開発", purpose: "個人と役割の接続", state: "指示待ちを改善したい", time: "3時間", price: "275,000円", slug: "agency" },
                  { name: "ビジョン接続", purpose: "理念を役割行動へ変換", state: "MVVが策定済み", time: "3時間", price: "275,000円", slug: "vision" },
                  { name: "管理者・管理職", purpose: "任せ方・対話・育成", state: "管理職が抱え込む", time: "約6時間", price: "440,000円", slug: "manager" },
                  { name: "事業管理OS", purpose: "顧客・案件・情報管理", state: "属人化・抜け漏れがある", time: "3時間", price: "275,000円", slug: "management-os" },
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid rgba(0,0,0,0.07)",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "#f5f5f2";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    <td style={{ padding: "14px 16px" }}>
                      <a
                        href={`#${programAnchorId(row.slug)}`}
                        style={{ color: "#111", fontWeight: 500, textDecoration: "none" }}
                      >
                        {row.name}
                      </a>
                    </td>
                    <td style={{ padding: "14px 16px", color: "#444" }}>{row.purpose}</td>
                    <td style={{ padding: "14px 16px", color: "#666", fontSize: "13px" }}>{row.state}</td>
                    <td style={{ padding: "14px 16px", textAlign: "right", color: "#444", whiteSpace: "nowrap" }}>{row.time}</td>
                    <td style={{ padding: "14px 16px", textAlign: "right", fontWeight: 500, whiteSpace: "nowrap" }}>{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          セクション4: 体系から選ぶ（副導線）
      ══════════════════════════════════════ */}
      <section
        style={{
          padding: "60px 48px 40px",
          background: "#f5f5f2",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "16px" }}>
            LHMP FRAMEWORK
          </p>
          <h2
            style={{
              ...S.serif,
              fontSize: "22px",
              fontWeight: 500,
              marginBottom: "24px",
            }}
          >
            LHMPの体系から研修を見る
          </h2>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              { label: "はじめての方", id: categoryAnchorId("intro") },
              { label: "人生OS", id: categoryAnchorId("life-os") },
              { label: "人・組織OS", id: categoryAnchorId("org-os") },
              { label: "事業管理OS", id: categoryAnchorId("biz-os") },
              { label: "定着支援", id: "retention" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                style={{
                  padding: "8px 18px",
                  border: "1px solid rgba(0,0,0,0.20)",
                  fontSize: "13px",
                  color: "inherit",
                  textDecoration: "none",
                  background: "#fff",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          セクション5: 研修カード一覧（カテゴリ別）
      ══════════════════════════════════════ */}
      {grouped.map((cat, cIdx) => (
        <section
          key={cat.id}
          id={categoryAnchorId(cat.id)}
          style={{
            padding: "80px 48px",
            background: cIdx % 2 === 0 ? "#fafafa" : "#f5f5f2",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            scrollMarginTop: "80px",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {/* カテゴリヘッダー */}
            <div style={{ marginBottom: "48px", paddingBottom: "24px", borderBottom: "1px solid rgba(0,0,0,0.10)" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "12px" }}>
                {cat.id.toUpperCase().replace("-", " ")}
              </p>
              <h2 style={{ ...S.serif, fontSize: "24px", fontWeight: 500 }}>{cat.label}</h2>
            </div>

            {/* 研修カード */}
            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              {cat.programs.map((p) => (
                <div
                  key={p.slug}
                  id={programAnchorId(p.slug)}
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.09)",
                    padding: "40px",
                    scrollMarginTop: "96px",
                  }}
                >
                  {/* カードヘッダー */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      gap: "24px",
                      marginBottom: "28px",
                      paddingBottom: "24px",
                      borderBottom: "1px solid rgba(0,0,0,0.08)",
                      alignItems: "start",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: "11px",
                          letterSpacing: "0.12em",
                          color: "#999",
                          marginBottom: "8px",
                        }}
                      >
                        {p.categoryLabel}
                      </p>
                      <h3 style={{ ...S.serif, fontSize: "22px", fontWeight: 500, lineHeight: 1.4, marginBottom: "8px" }}>
                        <Link href={`/programs/${p.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                          {p.title}
                        </Link>
                      </h3>
                      <p style={{ fontSize: "13px", color: "#888", marginBottom: "12px" }}>{p.subtitle}</p>
                      <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#555" }}>{p.summary}</p>
                    </div>
                    <div style={{ textAlign: "right", whiteSpace: "nowrap", flexShrink: 0 }}>
                      <p style={{ fontSize: "11px", color: "#999", marginBottom: "4px" }}>{p.duration} / {p.capacity}</p>
                      <p style={{ ...S.serif, fontSize: "20px", fontWeight: 500 }}>{p.price}</p>
                    </div>
                  </div>

                  {/* カード本文：適した課題 + 得られる状態 */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "32px",
                      marginBottom: "32px",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: "11px",
                          letterSpacing: "0.12em",
                          color: "#999",
                          marginBottom: "14px",
                          borderBottom: "1px solid rgba(0,0,0,0.08)",
                          paddingBottom: "8px",
                        }}
                      >
                        このような企業に
                      </p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {p.suitableFor.map((item, i) => (
                          <li
                            key={i}
                            style={{
                              fontSize: "14px",
                              lineHeight: 1.9,
                              color: "#444",
                              paddingLeft: "14px",
                              position: "relative",
                            }}
                          >
                            <span style={{ position: "absolute", left: 0, color: "#bbb" }}>·</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "11px",
                          letterSpacing: "0.12em",
                          color: "#999",
                          marginBottom: "14px",
                          borderBottom: "1px solid rgba(0,0,0,0.08)",
                          paddingBottom: "8px",
                        }}
                      >
                        得られる状態
                      </p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {p.outcomes.map((item, i) => (
                          <li
                            key={i}
                            style={{
                              fontSize: "14px",
                              lineHeight: 1.9,
                              color: "#444",
                              paddingLeft: "14px",
                              position: "relative",
                            }}
                          >
                            <span style={{ position: "absolute", left: 0, color: "#bbb" }}>·</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* カードフッター：ボタン */}
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <Link
                      href={`/programs/${p.slug}`}
                      style={{
                        display: "inline-block",
                        padding: "11px 24px",
                        border: "1px solid rgba(0,0,0,0.30)",
                        color: "#111",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      詳細を見る
                    </Link>
                    <Link
                      href={`/contact?program=${p.slug}`}
                      style={{
                        fontSize: "13px",
                        color: "#666",
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                      }}
                    >
                      この研修について相談
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* カテゴリ末尾の相談ボタン */}
            <div style={{ marginTop: "40px", textAlign: "center" }}>
              <Link
                href="/contact"
                style={{
                  fontSize: "14px",
                  color: "#666",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                研修選びを相談する →
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* ══════════════════════════════════════
          セクション6: 定着支援（分離）
      ══════════════════════════════════════ */}
      <section
        id="retention"
        style={{
          padding: "80px 48px",
          background: "#f0ede6",
          borderBottom: "1px solid rgba(0,0,0,0.10)",
          scrollMarginTop: "80px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "20px" }}>
            RETENTION SUPPORT
          </p>
          <h2 style={{ ...S.serif, fontSize: "24px", fontWeight: 500, marginBottom: "12px" }}>
            研修後の定着支援
          </h2>
          <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.9, marginBottom: "48px" }}>
            研修は「学んで終わり」ではありません。30日・60日・90日のフォローで、学びを現場の行動へ定着させます。
            <br />
            主要研修への追加オプションとして申し込みます。
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
            {retentionOptions.map((opt) => (
              <div
                key={opt.id}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.10)",
                  padding: "36px",
                }}
              >
                <h3 style={{ ...S.serif, fontSize: "20px", fontWeight: 500, marginBottom: "8px" }}>{opt.title}</h3>
                <p style={{ fontSize: "13px", color: "#888", marginBottom: "20px" }}>{opt.subtitle}</p>
                <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#555", marginBottom: "24px" }}>
                  {opt.description}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
                  {opt.contents.map((c, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "13px",
                        lineHeight: 1.9,
                        color: "#444",
                        paddingLeft: "14px",
                        position: "relative",
                      }}
                    >
                      <span style={{ position: "absolute", left: 0, color: "#bbb" }}>·</span>
                      {c}
                    </li>
                  ))}
                </ul>
                <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: "20px" }}>
                  <p style={{ fontSize: "11px", color: "#999", marginBottom: "4px" }}>{opt.duration}</p>
                  <p style={{ ...S.serif, fontSize: "18px", fontWeight: 500 }}>{opt.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          セクション7: 標準仕様に含まれないもの
      ══════════════════════════════════════ */}
      <section style={{ padding: "60px 48px", background: "#f5f5f2" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "20px" }}>NOTE</p>
          <h2 style={{ ...S.serif, fontSize: "20px", fontWeight: 500, marginBottom: "24px" }}>
            標準仕様に含まれないもの
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "12px 24px",
            }}
          >
            {[
              "完全オーダーメイド教材",
              "追加研修の実施",
              "現地交通費・宿泊費",
              "ITシステム構築（IT Service Labにて対応可）",
              "人事評価・賃金制度の設計",
              "労務・法務判断",
              "医療・心理診断・カウンセリング",
              "無制限の個別面談",
              "録画の社内無期限利用",
            ].map((item, i) => (
              <div key={i} style={{ fontSize: "13px", color: "#666", paddingLeft: "14px", position: "relative", lineHeight: 1.8 }}>
                <span style={{ position: "absolute", left: 0, color: "#bbb" }}>·</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          セクション8: CTA
      ══════════════════════════════════════ */}
      <section style={{ padding: "100px 48px", background: "#111", color: "#fafafa" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              ...S.serif,
              fontSize: "clamp(28px, 3vw, 44px)",
              fontWeight: 500,
              lineHeight: 1.4,
              marginBottom: "24px",
            }}
          >
            自社の課題に合う研修か、<br />まず30分話してみてください。
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 2.0,
              color: "rgba(255,255,255,0.65)",
              marginBottom: "40px",
            }}
          >
            課題・対象者・研修目的を伺い、どの研修が合うかをご提案します。
            <br />
            どの研修か分からない場合も、相談から始めていただけます。お見積もり・ご相談は無料です。
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              background: "#fafafa",
              color: "#111",
              padding: "16px 36px",
              fontSize: "15px",
              fontWeight: 500,
            }}
          >
            法人研修を相談する →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(0,0,0,0.12)", padding: "40px 48px", ...S.sans }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            <Link href="/" style={{ ...S.serif, fontSize: "15px", fontWeight: 500 }}>
              理想と実践
            </Link>
            <Link href="/programs" style={{ fontSize: "13px", color: "#666" }}>研修一覧</Link>
            <Link href="/contact" style={{ fontSize: "13px", color: "#666" }}>お問い合わせ</Link>
            <Link href="/privacy" style={{ fontSize: "13px", color: "#666" }}>プライバシーポリシー</Link>
            <Link href="/terms" style={{ fontSize: "13px", color: "#666" }}>利用規約</Link>
            <Link href="/faq" style={{ fontSize: "13px", color: "#666" }}>FAQ</Link>
          </div>
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <span style={{ fontSize: "12px", color: "#999" }}>運営・思想監修：</span>
            <a
              href="https://hakuyu.ltd"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#666" }}
            >
              白裕（Hakuyu）
            </a>
            <span style={{ fontSize: "12px", color: "#999" }}>© 2026 白裕</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
