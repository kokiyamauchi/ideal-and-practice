import Link from "next/link";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "理想と実践について｜白裕の研修事業",
};

const S = {
  serif: { fontFamily: "var(--font-display, 'Zen Old Mincho', serif)" } as React.CSSProperties,
  serifEn: { fontFamily: "var(--font-serif-en, 'Instrument Serif', serif)", fontStyle: "italic" } as React.CSSProperties,
  sans: { fontFamily: "var(--font-sans, 'Noto Sans JP', sans-serif)" } as React.CSSProperties,
};

export default function About() {
  return (
    <main style={{ background: "#fafafa", color: "#111", ...S.sans }}>
      {/* Nav */}
      <SiteNav activeHref="/about" />

      {/* Hero */}
      <section style={{
        paddingTop: "160px", paddingBottom: "100px",
        paddingLeft: "48px", paddingRight: "48px",
        background: "#fafafa", borderBottom: "1px solid rgba(0,0,0,0.10)"
      }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.20em", color: "#999", marginBottom: "28px" }}>ABOUT US</p>
          <h1 style={{ ...S.serif, fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 400, lineHeight: 1.25, marginBottom: "40px" }}>
            白裕が運営する、<br />
            人生・組織・事業の研修事業。
          </h1>
          <p style={{ fontSize: "17px", lineHeight: 2.1, color: "#555", maxWidth: "640px" }}>
            「理想と実践」は、白裕が体系化した中核思想「LHMP」を基盤に、<br />
            個人が自分の理想を描き、仕事や法人との関係を意味づけ、<br />
            人と組織が主体的に判断・行動できる状態をつくる研修事業です。
          </p>
        </div>
      </section>

      {/* Relations */}
      <section style={{ padding: "100px 48px", background: "#f5f5f2" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ ...S.serif, fontSize: "28px", fontWeight: 500, marginBottom: "40px" }}>学び、整え、実装する。</h2>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", marginBottom: "64px" }}>
            白裕（Hakuyu）は「余白と余裕」の運営母体であり、中核思想としてLHMP／幸福最大化思想体系を体系化・保有しています。
            本研修事業「理想と実践」をはじめとする関連事業はそれぞれ独立していますが、必要に応じて相互に接続し、個人と組織の構造的な課題を解決します。
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ display: "flex", gap: "24px", padding: "32px", background: "#fff", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.08)", alignItems: "flex-start" }}>
              <div style={{ ...S.serif, fontSize: "16px", fontWeight: 500, padding: "4px 12px", border: "1px solid #111", borderRadius: "4px" }}>LEARN</div>
              <div>
                <h3 style={{ ...S.serif, fontSize: "20px", fontWeight: 500, marginBottom: "12px" }}>理想と実践（研修事業）</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#555" }}>
                  人生の理想から、仕事と組織の行動まで。LHMPを基盤に、人生OS、主体性、管理者育成、事業管理を学ぶ研修を提供します。
                </p>
              </div>
            </div>
            
            <div style={{ display: "flex", gap: "24px", padding: "32px", background: "#fff", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.08)", alignItems: "flex-start" }}>
              <div style={{ ...S.serif, fontSize: "16px", fontWeight: 500, padding: "4px 12px", border: "1px solid #111", borderRadius: "4px" }}>DESIGN</div>
              <div>
                <a href="https://yohaku-to-yoyuu.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                  <h3 style={{ ...S.serif, fontSize: "20px", fontWeight: 500, marginBottom: "12px", textDecoration: "underline" }}>余白と余裕 ↗</h3>
                </a>
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#555" }}>
                  忙しさ・抱え込みに対処し、時間・判断・感情の詰まりを見つけ、余白が再び埋まらない構造を設計します。
                </p>
              </div>
            </div>
            
            <div style={{ display: "flex", gap: "24px", padding: "32px", background: "#fff", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.08)", alignItems: "flex-start" }}>
              <div style={{ ...S.serif, fontSize: "16px", fontWeight: 500, padding: "4px 12px", border: "1px solid #111", borderRadius: "4px" }}>IMPLEMENT</div>
              <div>
                <a href="https://www.it-service-lab.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                  <h3 style={{ ...S.serif, fontSize: "20px", fontWeight: 500, marginBottom: "12px", textDecoration: "underline" }}>IT Service Lab ↗</h3>
                </a>
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#555" }}>
                  Drive・AI・IT実装により、顧客・案件・資料・判断が迷子にならない業務基盤を実装します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Info & Operation Terms */}
      <section style={{ padding: "100px 48px", background: "#fafafa" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ ...S.serif, fontSize: "28px", fontWeight: 500, marginBottom: "40px" }}>提供体制と講師情報</h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "64px" }}>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>講師・設計者プロフィール</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#555", marginBottom: "16px" }}>
                （講師の氏名・経歴・これまでの職務・事業・管理経験をここに記載します）<br />
                長年のマネジメントおよび事業構築の経験から、個人の内発的動機と組織の成果を両立させる「LHMP」を体系化しました。
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>対応可能な業種・規模</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#555" }}>
                ・業種：IT、サービス、メーカー等幅広く対応<br />
                ・規模：数名〜数百名規模の企業様<br />
                ・対象：新入社員から経営層まで各階層に合わせた研修を提供
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "64px" }}>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>研修において約束すること</h3>
              <ul style={{ fontSize: "14px", lineHeight: 1.8, color: "#555", paddingLeft: "20px", margin: 0 }}>
                <li>個人の価値観を尊重し、無理な思考の強制は行いません</li>
                <li>法人と個人の双方が納得できる接点を模索します</li>
                <li>実践的で、翌日から業務に活かせるフレームワークを提供します</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>対応できないこと</h3>
              <ul style={{ fontSize: "14px", lineHeight: 1.8, color: "#555", paddingLeft: "20px", margin: 0 }}>
                <li>医療行為や心理療法に代わる対応</li>
                <li>一方的な精神論や帰属意識のみを強要する研修</li>
                <li>受講者の同意なき個人情報の開示</li>
              </ul>
            </div>
          </div>

          <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>稼働条件・実施形式</h3>
          <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#555", marginBottom: "40px" }}>
            ・<strong>実施形式：</strong> オンラインを基本とします。<br />
            ・<strong>実施時間：</strong> 平日夜間・土日を中心に個別調整します。<br />
            ・<strong>1日研修：</strong> 土日実施、または3時間×2回への分割が可能です。<br />
            ・<strong>現地実施：</strong> 日程・地域により個別相談となります。
          </p>

          <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>導入事例（モデルケース）</h3>
          <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#555" }}>
            ※現在、モニター実施結果や想定される研修プラン・導入設計例の資料を準備中です。
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
