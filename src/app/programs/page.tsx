import Link from "next/link";
import { Metadata } from "next";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "法人研修プログラム・料金｜理想と実践",
};

const S = {
  serif: { fontFamily: "var(--font-display, 'Zen Old Mincho', serif)" } as React.CSSProperties,
  serifEn: { fontFamily: "var(--font-serif-en, 'Instrument Serif', serif)", fontStyle: "italic" } as React.CSSProperties,
  sans: { fontFamily: "var(--font-sans, 'Noto Sans JP', sans-serif)" } as React.CSSProperties,
};

export default function Programs() {
  const categories = [
    {
      title: "入口",
      desc: "全体の入口となる導入研修です。",
      programs: [
        {
          slug: "lhmp-intro",
          name: "LHMP入門研修",
          tagline: "LHMPの全体像を通じて、人生・仕事・主体性の構造を理解する",
          targets: ["自分がなぜ働くのか分からない社員", "理念研修を実施しても定着しない", "人材育成の入口をお探しの企業"],
          issues: ["仕事と人生が切り離されている", "研修後に行動が変わらない", "社員が何を目指すべきかわからない"],
          goals: ["LHMPの基本構造を理解する", "自分の幸福・理想の概念を言語化する", "仕事と人生を接続する視点を持つ"],
          curriculum: ["LHMP概論・最上位命題", "幸福とは何か・理想形成の構造", "正しい知識と正しい思考力", "仕事の意味づけ・法人との関係", "主体性の正しい定義"],
          format: "90分 / 法人セミナー（最大20名）",
          price: "132,000円（税別）",
          deliverables: ["LHMPサマリー資料", "理想メモシート"],
        }
      ]
    },
    {
      title: "人生OS領域",
      desc: "個人の幸福と理想、そして正しい思考力を養う中核領域です。",
      programs: [
        {
          slug: "life-os-workshop",
          name: "理想形成ワークショップ",
          tagline: "幸福・違形感・憧れ・理想を言語化し、人生の方向性を定める",
          targets: ["法人研修の受講対象としての社員・ビジネスパーソン", "ビジョン研修の前段として使いたい企業", "内省・対話を重視した研修を求める方"],
          issues: ["自分が何をしたいのかわからない", "他人の価値観で目標を決めている", "理想を語る言葉を持っていない"],
          goals: ["幸福と理想の違いを理解する", "自分の違和感・憧れを言語化する", "理想の初稿を文章として書き出す"],
          curriculum: ["幸福と理想とは何か", "違和感・憧れの棚卸しワーク", "理想の言語化演習", "グループシェアと問い直し"],
          format: "3時間 / 12名まで",
          price: "275,000円（税別）",
          deliverables: ["個人理想メモシート", "理想文草稿"],
        },
        {
          slug: "life-os",
          name: "人生OS研修",
          tagline: "知識・思考・時間・仕事を接続し、自分の人生の設計図をつくる",
          targets: ["法人研修の受講対象としての社員・ビジネスパーソン", "判断基準がなく、流されてしまう人", "人生を主体的に設計したいビジネスパーソン"],
          issues: ["目標があいまいで行動が続かない", "何を優先すべきかわからない", "学んでいるが人生に変化が起きない"],
          goals: ["自分の幸福・理想を言語化する", "判断基準を自分の言葉で定義する", "時間・行動・仕事を理想へ接続する"],
          curriculum: ["幸福最大化の構造", "理想形成ワーク", "正しい知識・思考力", "時間設計・優先順位", "行動計画30日"],
          format: "1日（約6時間）/ 12名まで",
          price: "440,000円（税別）",
          deliverables: ["個人理想整理シート", "行動計画30日版", "研修実施レポート"],
        }
      ]
    },
    {
      title: "人・組織OS領域",
      desc: "個人の理想と法人の役割を接続し、組織を動かす領域です。",
      programs: [
        {
          slug: "agency",
          name: "社員主体性・役割接続研修",
          tagline: "個人の理想と法人の役割を接続し、本当の意味での主体性を引き出す",
          targets: ["一般社員・若手・中堅社員", "指示待ちの社員が多い企業", "自律的なチームをつくりたい経営者"],
          issues: ["主体的に動けと言っても変わらない", "自分ごとにならない", "役割と自分の人生が切り離されている"],
          goals: ["主体性の正しい定義を理解する", "個人理想と法人役割の接続点を見つける", "自分から動く判断基準を持つ"],
          curriculum: ["主体性とは何か（LHMPの定義）", "個人ビジョン整理ワーク", "法人の期待役割の言語化", "接続図の作成", "行動実験設計"],
          format: "3時間 / 12名まで",
          price: "275,000円（税別）",
          deliverables: ["個人・法人ビジョン接続図", "行動実験シート"],
        },
        {
          slug: "vision",
          name: "理念浸透・ビジョン接続ワークショップ",
          tagline: "会社の理念と社員の人生をつなぎ、役割を意味ある行動へ変える",
          targets: ["理念やMVVをすでに策定している法人", "会社と社員の方向性がバラバラな組織", "ビジョン浸透研修を強化したい人事担当"],
          issues: ["理念を唱和しても行動が変わらない", "会社の方向性と、自分の役割との接続が見えない", "社員が会社の方向性を自分ごとにできない"],
          goals: ["法人ビジョンを自分の言葉で解釈する", "個人の理想と法人の方向性の重なりを見つける", "役割を意味ある行動として設計する"],
          curriculum: ["法人と個人の理想の構造", "ビジョンの意味解釈ワーク", "重なり発見ワーク", "役割・行動計画設計"],
          format: "3時間 / 12名まで",
          price: "275,000円（税別）",
          deliverables: ["個人・法人ビジョン接続図", "役割行動計画"],
        },
        {
          slug: "manager",
          name: "管理者・管理職研修",
          tagline: "人が成果を出せる状態をつくる（判断・任せ方・対話・育成）",
          targets: ["管理職が仕事を抱え込んでいる企業", "チームへの権限移譲が進まない組織", "管理職育成プログラムを整備したい企業"],
          issues: ["管理者がすべてを確認・判断している", "部下が育たない、任せられない", "チーム内の心理的安全性が低い"],
          goals: ["任せるための判断基準を持つ", "対話・フィードバックの型を身につける", "育成と1on1の仕組みを設計する"],
          curriculum: ["管理職の役割再定義", "権限移譲の設計", "対話・フィードバック演習", "育成・1on1設計", "行動計画"],
          format: "1日（約6時間）/ 12名まで",
          price: "440,000円（税別）",
          deliverables: ["役割・責任・期限整理表", "権限移譲設計書", "研修実施レポート"],
        }
      ]
    },
    {
      title: "事業管理OS領域",
      desc: "仕事が滞りなく回る状態をつくる業務・情報の管理領域です。",
      programs: [
        {
          slug: "management-os",
          name: "事業管理OS研修",
          tagline: "顧客・案件・資料・期限・役割を整え、管理構造を機能させる",
          targets: ["顧客・案件が属人化している企業", "管理シートはあるが使われない組織", "情報と判断が整理されていないチーム"],
          issues: ["誰が何を担当しているか不明", "締め切りが守られない、抜け漏れが多い", "振り返りが改善につながらない"],
          goals: ["管理の正しい構造を理解する", "顧客・案件・情報の整理基準をつくる", "週次・業務レビューの仕組みを設計する"],
          curriculum: ["事業管理OSの全体構造", "顧客・案件の整理基準", "情報の正本と集約", "優先順位・役割・期限の設計", "週次レビュー演習"],
          format: "3時間 / 12名まで",
          price: "275,000円（税別）",
          deliverables: ["案件管理フォーマット", "週次レビュー設計書", "役割・責任整理表"],
        }
      ]
    },
    {
      title: "定着支援",
      desc: "研修内容を現場での行動と習慣へと変える継続プログラムです。",
      programs: [
        {
          slug: "30-days",
          name: "30日実践フォロー",
          tagline: "研修後の初期行動を確実にするための中間フォロー",
          targets: ["研修後の行動変容を確実にしたい企業"],
          issues: ["最初の1ヶ月で熱が冷めてしまう"],
          goals: ["30日間の行動計画を完遂する"],
          curriculum: ["30日行動計画", "管理者確認", "30日後レビュー", "簡易定着レポート"],
          format: "30日間",
          price: "研修費＋165,000〜220,000円（税別）",
          deliverables: ["簡易定着レポート"],
        },
        {
          slug: "90-days",
          name: "90日定着プログラム",
          tagline: "研修後も変化が続く。30・60・90日のフォローで行動を仕組みへ変える",
          targets: ["研修を実施しても現場へ定着しない企業", "継続的な変化を求める組織", "研修と現場を接続したい人事担当"],
          issues: ["研修後に元に戻ってしまう", "学んだことが業務で使われない", "一回限りの研修で終わっている"],
          goals: ["研修後30日・60日・90日で行動を確認する", "現場での実践を振り返り軌道修正する", "行動を個人の習慣・組織の仕組みへ定着させる"],
          curriculum: ["対象研修1回", "事前ヒアリング60分・研修設計", "30・60日レビュー（各90分）", "90日レビュー（120分）", "管理責任者面談2回"],
          format: "90日間 / 個別設計",
          price: "990,000円〜（税別）",
          deliverables: ["受講者ワークブック", "期間中のメール質問対応", "90日定着レポート", "次期改善提案"],
        }
      ]
    }
  ];

  return (
    <main style={{ background: "#fafafa", color: "#111", ...S.sans }}>
      {/* Nav */}
      <SiteNav activeHref="/programs" />

      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", paddingLeft: "48px", paddingRight: "48px", borderBottom: "1px solid rgba(0,0,0,0.10)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "24px" }}>PROGRAMS</p>
          <h1 style={{ ...S.serif, fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 500, lineHeight: 1.3, marginBottom: "24px" }}>
            研修一覧
          </h1>
          <p style={{ fontSize: "16px", lineHeight: 2.0, color: "#555", maxWidth: "640px", marginBottom: "40px" }}>
            すべての研修は、白裕の中核思想「LHMP」を基盤に設計されています。<br />
            個人と法人の課題に応じて、適した領域と研修をお選びください。
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {categories.map(cat => (
              <a key={cat.title} href={`#\${cat.title}`} style={{ padding: "6px 14px", border: "1px solid rgba(0,0,0,0.20)", fontSize: "12px", letterSpacing: "0.05em", color: "inherit", textDecoration: "none" }}>{cat.title}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Programs list */}
      {categories.map((cat, cIdx) => (
        <section key={cIdx} id={cat.title} style={{
          padding: "80px 48px",
          background: cIdx % 2 === 0 ? "#fafafa" : "#f5f5f2",
          borderBottom: "1px solid rgba(0,0,0,0.08)"
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", marginBottom: "48px" }}>
            <h2 style={{ ...S.serif, fontSize: "28px", fontWeight: 500, marginBottom: "16px" }}>{cat.title}</h2>
            <p style={{ fontSize: "15px", color: "#555" }}>{cat.desc}</p>
          </div>
          
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "64px" }}>
            {cat.programs.map((p, idx) => (
              <div key={idx} style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "80px" }}>
                {/* Left */}
                <div>
                  <h3 style={{ ...S.serif, fontSize: "22px", fontWeight: 500, lineHeight: 1.5, marginBottom: "20px" }}>
                    <Link href={`/programs/\${p.slug}`} style={{ color: "inherit", textDecoration: "none" }}>{p.name}</Link>
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#666", marginBottom: "32px" }}>{p.tagline}</p>
                  <div style={{ borderTop: "1px solid rgba(0,0,0,0.12)", paddingTop: "24px" }}>
                    <p style={{ fontSize: "11px", color: "#999", marginBottom: "8px" }}>形式・人数</p>
                    <p style={{ fontSize: "14px", fontWeight: 500 }}>{p.format}</p>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(0,0,0,0.12)", paddingTop: "24px", marginTop: "20px" }}>
                    <p style={{ fontSize: "11px", color: "#999", marginBottom: "8px" }}>標準価格（税別）</p>
                    <p style={{ ...S.serif, fontSize: "22px", fontWeight: 500 }}>{p.price}</p>
                  </div>
                  <div style={{ marginTop: "32px", display: "flex", gap: "12px", flexDirection: "column" }}>
                    <Link href={`/programs/\${p.slug}`} style={{
                      display: "inline-block", padding: "12px 24px", textAlign: "center",
                      border: "1px solid #111", color: "#111", fontSize: "13px", fontWeight: 500
                    }}>詳細を見る</Link>
                    <Link href={`/contact?program=\${p.slug}`} style={{
                      display: "inline-block", padding: "12px 24px", textAlign: "center",
                      background: "#111", color: "#fafafa", fontSize: "13px", fontWeight: 500
                    }}>この研修を相談する →</Link>
                  </div>
                </div>

                {/* Right */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
                  <div>
                    <p style={{ fontSize: "11px", letterSpacing: "0.12em", color: "#999", marginBottom: "16px", borderBottom: "1px solid rgba(0,0,0,0.10)", paddingBottom: "8px" }}>対象者</p>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {p.targets.map((t, i) => (
                        <li key={i} style={{ fontSize: "14px", lineHeight: 1.9, color: "#444", paddingLeft: "14px", position: "relative" }}>
                          <span style={{ position: "absolute", left: 0, color: "#999" }}>·</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={{ fontSize: "11px", letterSpacing: "0.12em", color: "#999", marginBottom: "16px", borderBottom: "1px solid rgba(0,0,0,0.10)", paddingBottom: "8px" }}>よくある課題</p>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {p.issues.map((t, i) => (
                        <li key={i} style={{ fontSize: "14px", lineHeight: 1.9, color: "#444", paddingLeft: "14px", position: "relative" }}>
                          <span style={{ position: "absolute", left: 0, color: "#999" }}>·</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={{ fontSize: "11px", letterSpacing: "0.12em", color: "#999", marginBottom: "16px", borderBottom: "1px solid rgba(0,0,0,0.10)", paddingBottom: "8px" }}>到達目標</p>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {p.goals.map((t, i) => (
                        <li key={i} style={{ fontSize: "14px", lineHeight: 1.9, color: "#444", paddingLeft: "14px", position: "relative" }}>
                          <span style={{ position: "absolute", left: 0, color: "#999" }}>·</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={{ fontSize: "11px", letterSpacing: "0.12em", color: "#999", marginBottom: "16px", borderBottom: "1px solid rgba(0,0,0,0.10)", paddingBottom: "8px" }}>主な内容・カリキュラム</p>
                    <ol style={{ listStyle: "none", padding: 0 }}>
                      {p.curriculum.map((c, i) => (
                        <li key={i} style={{ fontSize: "14px", lineHeight: 1.9, color: "#444", display: "flex", gap: "10px" }}>
                          <span style={{ color: "#bbb", minWidth: "20px" }}>{String(i + 1).padStart(2, "0")}</span>{c}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div style={{ gridColumn: "1/-1" }}>
                    <p style={{ fontSize: "11px", letterSpacing: "0.12em", color: "#999", marginBottom: "16px", borderBottom: "1px solid rgba(0,0,0,0.10)", paddingBottom: "8px" }}>成果物・含まれるもの</p>
                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                      {p.deliverables.map((d, i) => (
                        <span key={i} style={{ padding: "6px 14px", border: "1px solid rgba(0,0,0,0.15)", fontSize: "13px", color: "#555" }}>{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Note */}
      <section style={{ padding: "60px 48px", background: "#f0ede6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "20px" }}>NOTE</p>
          <h2 style={{ ...S.serif, fontSize: "20px", fontWeight: 500, marginBottom: "24px" }}>標準仕様に含まれないもの</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {[
              "完全オーダーメイド教材",
              "追加研修の実施",
              "現地交通費・宿泊費",
              "ITシステム構築 (IT Service Labにて対応可)",
              "人事評価・賃金制度の設計",
              "労務・法務判断",
              "医療・心理診断・カウンセリング",
              "無制限の個別面談",
              "録画の社内無期限利用",
            ].map((item, i) => (
              <div key={i} style={{ fontSize: "13px", color: "#666", paddingLeft: "14px", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "#bbb" }}>·</span>{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 48px", background: "#111", color: "#fafafa" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ ...S.serif, fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 500, lineHeight: 1.4, marginBottom: "24px" }}>
            まず、30分話してみてください。
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "rgba(255,255,255,0.65)", marginBottom: "40px" }}>
            課題・対象者・研修目的を伺い、どの研修が合うかをご提案します。<br />
            お見積もり・ご相談は無料です。
          </p>
          <Link href="/contact" style={{
            display: "inline-block", background: "#fafafa", color: "#111",
            padding: "16px 36px", fontSize: "15px", fontWeight: 500
          }}>法人研修を相談する →</Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(0,0,0,0.12)", padding: "40px 48px", ...S.sans }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            <Link href="/" style={{ ...S.serif, fontSize: "15px", fontWeight: 500 }}>理想と実践</Link>
            <Link href="/programs" style={{ fontSize: "13px", color: "#666" }}>研修一覧</Link>
            <Link href="/contact" style={{ fontSize: "13px", color: "#666" }}>お問い合わせ</Link>
            <Link href="/privacy" style={{ fontSize: "13px", color: "#666" }}>プライバシーポリシー</Link>
            <Link href="/terms" style={{ fontSize: "13px", color: "#666" }}>利用規約</Link>
            <Link href="/faq" style={{ fontSize: "13px", color: "#666" }}>FAQ</Link>
          </div>
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <span style={{ fontSize: "12px", color: "#999" }}>運営・思想監修：</span>
            <a href="https://hakuyu.ltd" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "#666" }}>白裕（Hakuyu）</a>
            <span style={{ fontSize: "12px", color: "#999" }}>© 2026 白裕</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
