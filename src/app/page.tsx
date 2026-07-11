import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      
      {/* Header Placeholder */}
      <header className="px-6 py-6 border-b border-border flex justify-between items-center bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="font-display font-bold text-xl tracking-wide">
          <Link href="/">理想と実践</Link>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-bold text-muted">
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/lhmp" className="hover:text-primary">LHMP</Link>
          <Link href="/programs" className="hover:text-primary">研修一覧</Link>
          <Link href="/corporate" className="hover:text-primary">法人向け</Link>
          <Link href="/contact" className="hover:text-primary">お問い合わせ</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-24 md:py-32 max-w-5xl mx-auto text-center">
        <div className="inline-block border border-border px-4 py-1 mb-8">
          <p className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] whitespace-pre-line leading-relaxed text-center">
            A HAKUYU BUSINESS{"\n"}Based on LHMP
          </p>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-10 leading-[1.2]">
          自分の理想を描き、<br />
          仕事と組織を、<br />
          自分の人生へ接続する。
        </h1>
        
        <p className="text-lg md:text-xl text-muted leading-loose mb-12 max-w-3xl mx-auto">
          白裕の中核思想「LHMP／幸福最大化思想体系」を基盤に、<br />
          人生・主体性・事業管理を学び、<br />
          理解を行動と組織の仕組みへ変える研修を提供します。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn btn-primary">法人研修を相談する</Link>
          <Link href="/programs" className="btn btn-outline">研修一覧を見る</Link>
          <Link href="/lhmp" className="text-primary font-bold underline underline-offset-4 ml-0 sm:ml-4 flex items-center justify-center">LHMPを知る →</Link>
        </div>
      </section>

      {/* Problems Section */}
      <section className="bg-surface py-20 px-6 border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-display font-bold mb-12">組織と個人の間に、このような摩擦はありませんか？</h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-left">
            {[
              "何のために働いているか分からない",
              "会社の理念が社員の行動につながらない",
              "「主体的に動け」と言っても変わらない",
              "管理者が判断と仕事を抱え込んでいる",
              "研修を実施しても現場へ定着しない",
              "システムを導入しても運用が続かない"
            ].map((problem, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-background border border-border">
                <span className="text-accent font-bold mt-1">✔</span>
                <span className="text-muted font-medium">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Domains Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">3 Domains</h2>
          <h3 className="text-3xl font-display font-bold">研修の3領域</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "人生OS",
              desc: "自分の幸福・理想・判断基準を整える",
              link: "/programs/life-os"
            },
            {
              title: "人・組織OS",
              desc: "理想と役割を接続し、主体性を生む",
              link: "/programs/agency"
            },
            {
              title: "事業管理OS",
              desc: "仕事・情報・判断・レビューを整える",
              link: "/programs/management-os"
            }
          ].map((domain, i) => (
            <div key={i} className="bg-surface border border-border p-8 flex flex-col items-center text-center hover:border-primary transition-colors">
              <h4 className="text-2xl font-display font-bold text-primary mb-4">{domain.title}</h4>
              <p className="text-muted mb-8 flex-grow">{domain.desc}</p>
              <Link href={domain.link} className="text-sm font-bold text-accent hover:text-primary transition-colors">詳細を見る →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-primary text-surface py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">Process</h2>
            <h3 className="text-3xl font-display font-bold">提供プロセス</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { step: "01", name: "現状確認" },
              { step: "02", name: "研修設計" },
              { step: "03", name: "講義と演習" },
              { step: "04", name: "行動計画" },
              { step: "05", name: "30〜90日フォロー" },
              { step: "06", name: "必要に応じて余白設計・IT実装へ接続" }
            ].map((process, i) => (
              <div key={i} className="flex flex-col border-t border-surface/20 pt-4">
                <span className="text-accent font-display font-bold mb-2">{process.step}</span>
                <span className="font-bold">{process.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-24 px-6 bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">Deliverables</h2>
          <h3 className="text-3xl font-display font-bold mb-12">主な成果物</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "個人理想整理シート",
              "個人・法人ビジョン接続図",
              "主体性ボトルネック診断",
              "役割・権限整理表",
              "週次レビュー設計",
              "30日行動計画",
              "研修実施レポート",
              "90日定着レポート"
            ].map((item, i) => (
              <span key={i} className="px-6 py-3 bg-background border border-border text-sm font-bold text-muted">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Placeholder */}
      <footer className="py-12 px-6 border-t border-border text-center text-sm text-muted">
        <div className="mb-6 flex justify-center gap-4 text-xs font-bold uppercase tracking-widest">
          <Link href="/privacy" className="hover:text-primary">Privacy</Link>
          <Link href="/terms" className="hover:text-primary">Terms</Link>
          <Link href="/commercial-transactions" className="hover:text-primary">Commercial Transactions</Link>
        </div>
        <p className="mb-2">運営・思想監修：<a href="https://hakuyu.ltd" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-primary">白裕</a></p>
        <p className="text-xs">&copy; 2026 白裕（Hakuyu）</p>
      </footer>
    </main>
  );
}
