import Link from "next/link";

const S = {
  serif: { fontFamily: "var(--font-display, 'Zen Old Mincho', serif)" } as React.CSSProperties,
  serifEn: { fontFamily: "var(--font-serif-en, 'Instrument Serif', serif)", fontStyle: "italic" } as React.CSSProperties,
  sans: { fontFamily: "var(--font-sans, 'Noto Sans JP', sans-serif)" } as React.CSSProperties,
};

export default function Programs() {
  const programs = [
    {
      category: "LHMP入門",
      name: "理想と実践｜LHMP入門研修",
      tagline: "LHMPの全体像を通じて、人生・仕事・主体性の構造を理解する",
      targets: ["自分がなぜ働くのか分からない社員", "理念研修を実施しても定着しない", "人材育成の入口をお探しの企業"],
      issues: ["仕事と人生が切り離されている", "研修後に行動が変わらない", "社員が何を目指すべきかわからない"],
      goals: ["LHMPの基本構造を理解する", "自分の幸福・理想の概念を言語化する", "仕事と人生を接続する視点を持つ"],
      curriculum: ["LHMP概論・最上位命題", "幸福とは何か・理想形成の構造", "正しい知識と正しい思考力", "仕事の意味づけ・法人との関係", "主体性の正しい定義"],
      format: "90分 / 法人セミナー（最大20名）",
      price: "132,000円（税別）",
      deliverables: ["LHMPサマリー資料", "理想メモシート"],
    },
    {
      category: "人生OS",
      name: "理想と実践｜人生OS研修",
      tagline: "知識・思考・時間・仕事を接続し、自分の人生の設計図をつくる",
      targets: ["自分の将来像が曖昧な社員・個人", "判断基準がなく、流されてしまう人", "人生を主体的に設計したいビジネスパーソン"],
      issues: ["目標があいまいで行動が続かない", "何を優先すべきかわからない", "学んでいるが人生に変化が起きない"],
      goals: ["自分の幸福・理想を言語化する", "判断基準を自分の言葉で定義する", "時間・行動・仕事を理想へ接続する"],
      curriculum: ["幸福最大化の構造", "理想形成ワーク", "正しい知識・思考力", "時間設計・優先順位", "行動計画30日"],
      format: "1日（約6時間）/ 12名まで",
      price: "440,000円（税別）",
      deliverables: ["個人理想整理シート", "行動計画30日版", "研修実施レポート"],
    },
    {
      category: "理想形成",
      name: "理想と実践｜理想形成ワークショップ",
      tagline: "幸福・違和感・憧れ・理想を言語化し、人生の方向性を定める",
      targets: ["自分の理想が漠然としている個人", "ビジョン研修の前段として使いたい企業", "内省・対話を重視した研修を求める方"],
      issues: ["自分が何をしたいのかわからない", "他人の価値観で目標を決めている", "理想を語る言葉を持っていない"],
      goals: ["幸福と理想の違いを理解する", "自分の違和感・憧れを言語化する", "理想の初稿を文章として書き出す"],
      curriculum: ["幸福と理想とは何か", "違和感・憧れの棚卸しワーク", "理想の言語化演習", "グループシェアと問い直し"],
      format: "3時間 / 12名まで",
      price: "275,000円（税別）",
      deliverables: ["個人理想メモシート", "理想文草稿"],
    },
    {
      category: "主体性開発",
      name: "理想と実践｜主体性開発研修",
      tagline: "個人の理想と法人の役割を接続し、本当の意味での主体性を引き出す",
      targets: ["指示待ちの社員が多い企業", "管理職が抱え込みすぎている組織", "自律的なチームをつくりたい経営者"],
      issues: ["主体的に動けと言っても変わらない", "自分ごとにならない", "役割と自分の人生が切り離されている"],
      goals: ["主体性の正しい定義を理解する", "個人理想と法人役割の接続点を見つける", "自分から動く判断基準を持つ"],
      curriculum: ["主体性とは何か（LHMPの定義）", "個人ビジョン整理ワーク", "法人の期待役割の言語化", "接続図の作成", "行動実験設計"],
      format: "3時間 / 12名まで",
      price: "275,000円（税別）",
      deliverables: ["個人・法人ビジョン接続図", "行動実験シート"],
    },
    {
      category: "ビジョン接続",
      name: "理想と実践｜個人・法人ビジョン接続研修",
      tagline: "会社の理念と社員の人生をつなぎ、役割を意味ある行動へ変える",
      targets: ["理念・ビジョンが現場に浸透しない企業", "会社と社員の方向性がバラバラな組織", "ビジョン浸透研修を強化したい人事担当"],
      issues: ["理念を唱和しても行動が変わらない", "会社への帰属意識が低い", "社員が会社の方向性を自分ごとにできない"],
      goals: ["法人ビジョンを自分の言葉で解釈する", "個人の理想と法人の方向性の重なりを見つける", "役割を意味ある行動として設計する"],
      curriculum: ["法人と個人の理想の構造", "ビジョンの意味解釈ワーク", "重なり発見ワーク", "役割・行動計画設計"],
      format: "3時間 / 12名まで",
      price: "275,000円（税別）",
      deliverables: ["個人・法人ビジョン接続図", "役割行動計画"],
    },
    {
      category: "管理職",
      name: "理想と実践｜管理者・管理職研修",
      tagline: "判断・任せ方・対話・レビューを身につけ、チームが動ける構造をつくる",
      targets: ["管理職が仕事を抱え込んでいる企業", "チームへの権限移譲が進まない組織", "管理職育成プログラムを整備したい企業"],
      issues: ["管理者がすべてを確認・判断している", "部下が育たない、任せられない", "会議が報告だけで終わる"],
      goals: ["任せるための判断基準を持つ", "対話・フィードバックの型を身につける", "週次・月次レビューの仕組みを設計する"],
      curriculum: ["管理職の役割再定義", "権限移譲の設計", "対話・フィードバック演習", "会議設計・レビュー設計", "行動計画"],
      format: "1日（約6時間）/ 12名まで",
      price: "440,000円（税別）",
      deliverables: ["役割・責任・期限整理表", "週次レビュー設計書", "研修実施レポート"],
    },
    {
      category: "事業管理OS",
      name: "理想と実践｜事業管理OS研修",
      tagline: "顧客・案件・情報・期限・判断を整え、管理が機能する組織の仕組みをつくる",
      targets: ["顧客・案件が属人化している企業", "管理シートはあるが使われない組織", "情報と判断が整理されていないチーム"],
      issues: ["誰が何を担当しているか不明", "締め切りが守られない、抜け漏れが多い", "振り返りが改善につながらない"],
      goals: ["管理の正しい構造を理解する", "顧客・案件・情報の整理基準をつくる", "週次・月次レビューの仕組みを設計する"],
      curriculum: ["事業管理OSの全体構造", "顧客・案件の整理基準", "情報の正本と集約", "優先順位・役割・期限の設計", "週次レビュー演習"],
      format: "3時間 / 12名まで",
      price: "275,000円（税別）",
      deliverables: ["案件管理フォーマット", "週次レビュー設計書", "役割・責任整理表"],
    },
    {
      category: "90日定着",
      name: "理想と実践｜90日定着プログラム",
      tagline: "研修後も変化が続く。30・60・90日のフォローで行動を仕組みへ変える",
      targets: ["研修を実施しても現場へ定着しない企業", "継続的な変化を求める組織", "研修と現場を接続したい人事担当"],
      issues: ["研修後に元に戻ってしまう", "学んだことが業務で使われない", "一回限りの研修で終わっている"],
      goals: ["研修後30日・60日・90日で行動を確認する", "現場での実践を振り返り軌道修正する", "行動を個人の習慣・組織の仕組みへ定着させる"],
      curriculum: ["初回研修（対象研修を選択）", "30日レビュー・振り返り", "60日レビュー・修正設計", "90日最終レビュー・定着確認", "必要に応じ余白設計・IT実装へ接続"],
      format: "90日間 / 個別設計",
      price: "990,000円〜（税別）",
      deliverables: ["各回レビューレポート", "90日定着レポート", "次フェーズ提案"],
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
          <Link href="/lhmp">LHMP</Link>
          <Link href="/programs" style={{ fontWeight: 700 }}>研修一覧</Link>
          <Link href="/corporate">法人向け</Link>
          <Link href="/contact" style={{ padding: "8px 18px", border: "1px solid #111" }}>お問い合わせ</Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", paddingLeft: "48px", paddingRight: "48px", borderBottom: "1px solid rgba(0,0,0,0.10)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "24px" }}>PROGRAMS</p>
          <h1 style={{ ...S.serif, fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 500, lineHeight: 1.3, marginBottom: "24px" }}>
            研修一覧
          </h1>
          <p style={{ fontSize: "16px", lineHeight: 2.0, color: "#555", maxWidth: "640px", marginBottom: "40px" }}>
            すべての研修は、白裕の中核思想「LHMP」を基盤に設計されています。<br />
            人生・主体性・事業管理の3領域から、組織の課題に合わせてお選びください。
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {["人生OS", "主体性", "管理職", "事業管理", "90日定着"].map(tag => (
              <span key={tag} style={{ padding: "6px 14px", border: "1px solid rgba(0,0,0,0.20)", fontSize: "12px", letterSpacing: "0.05em" }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Programs list */}
      {programs.map((p, idx) => (
        <section key={idx} style={{
          padding: "80px 48px",
          background: idx % 2 === 0 ? "#fafafa" : "#f5f5f2",
          borderBottom: "1px solid rgba(0,0,0,0.08)"
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "280px 1fr", gap: "80px" }}>
            {/* Left */}
            <div>
              <p style={{ fontSize: "10px", letterSpacing: "0.18em", color: "#999", marginBottom: "12px" }}>{p.category.toUpperCase()}</p>
              <h2 style={{ ...S.serif, fontSize: "22px", fontWeight: 500, lineHeight: 1.5, marginBottom: "20px" }}>{p.name}</h2>
              <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#666", marginBottom: "32px" }}>{p.tagline}</p>
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.12)", paddingTop: "24px" }}>
                <p style={{ fontSize: "11px", color: "#999", marginBottom: "8px" }}>形式・人数</p>
                <p style={{ fontSize: "14px", fontWeight: 500 }}>{p.format}</p>
              </div>
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.12)", paddingTop: "24px", marginTop: "20px" }}>
                <p style={{ fontSize: "11px", color: "#999", marginBottom: "8px" }}>標準価格（税別）</p>
                <p style={{ ...S.serif, fontSize: "22px", fontWeight: 500 }}>{p.price}</p>
              </div>
              <div style={{ marginTop: "32px" }}>
                <Link href="/contact" style={{
                  display: "inline-block", padding: "12px 24px",
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
                <p style={{ fontSize: "11px", letterSpacing: "0.12em", color: "#999", marginBottom: "16px", borderBottom: "1px solid rgba(0,0,0,0.10)", paddingBottom: "8px" }}>カリキュラム</p>
                <ol style={{ listStyle: "none", padding: 0 }}>
                  {p.curriculum.map((c, i) => (
                    <li key={i} style={{ fontSize: "14px", lineHeight: 1.9, color: "#444", display: "flex", gap: "10px" }}>
                      <span style={{ color: "#bbb", minWidth: "20px" }}>{String(i + 1).padStart(2, "0")}</span>{c}
                    </li>
                  ))}
                </ol>
              </div>
              <div style={{ gridColumn: "1/-1" }}>
                <p style={{ fontSize: "11px", letterSpacing: "0.12em", color: "#999", marginBottom: "16px", borderBottom: "1px solid rgba(0,0,0,0.10)", paddingBottom: "8px" }}>成果物</p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  {p.deliverables.map((d, i) => (
                    <span key={i} style={{ padding: "6px 14px", border: "1px solid rgba(0,0,0,0.15)", fontSize: "13px", color: "#555" }}>{d}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Note */}
      <section style={{ padding: "60px 48px", background: "#f0ede6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#999", marginBottom: "20px" }}>NOTE</p>
          <h2 style={{ ...S.serif, fontSize: "20px", fontWeight: 500, marginBottom: "24px" }}>標準価格に含まないもの</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {[
              "完全オーダーメイド教材",
              "人事評価・賃金制度の設計",
              "労務・法務判断",
              "医療・心理診断・カウンセリング",
              "Google Drive等のシステム構築",
              "GAS・AI・IT開発",
              "教材の著作権譲渡",
              "無制限の個別相談",
              "録画の社内無期限利用",
            ].map((item, i) => (
              <div key={i} style={{ fontSize: "13px", color: "#666", paddingLeft: "14px", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "#bbb" }}>·</span>{item}
              </div>
            ))}
          </div>
          <p style={{ fontSize: "13px", color: "#888", marginTop: "32px", lineHeight: 1.8 }}>
            ※ 立ち上げ期（初期3〜5社）はモニター価格（標準の25〜35%引き）でご提供します。条件：実績掲載への同意・アンケート・改善インタビューへの協力。
          </p>
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
