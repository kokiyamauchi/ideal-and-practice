import Link from "next/link";

export default function Programs() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <header className="px-6 py-6 border-b border-border flex justify-between items-center bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="font-display font-bold text-xl tracking-wide">
          <Link href="/">理想と実践</Link>
        </div>
      </header>

      <section className="px-6 py-24 max-w-4xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-10">研修一覧</h1>
        <div className="space-y-8">
          <div className="p-8 border border-border bg-surface">
            <h2 className="text-2xl font-display font-bold text-primary mb-4">人生OS研修</h2>
            <p className="text-muted">自分の幸福・理想・判断基準を整え、何のために働くのかを定義します。</p>
          </div>
          <div className="p-8 border border-border bg-surface">
            <h2 className="text-2xl font-display font-bold text-primary mb-4">人・組織OS研修</h2>
            <p className="text-muted">個人の理想と法人の役割を接続し、本当の意味での主体性を引き出します。</p>
          </div>
          <div className="p-8 border border-border bg-surface">
            <h2 className="text-2xl font-display font-bold text-primary mb-4">事業管理OS研修</h2>
            <p className="text-muted">仕事や情報の管理、適切なレビューの仕組みを構築し、組織に定着させます。</p>
          </div>
        </div>
        <div className="mt-12">
          <Link href="/" className="btn btn-outline">トップへ戻る</Link>
        </div>
      </section>
    </main>
  );
}
