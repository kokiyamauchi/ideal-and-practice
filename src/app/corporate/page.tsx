import Link from "next/link";

export default function Corporate() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <header className="px-6 py-6 border-b border-border flex justify-between items-center bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="font-display font-bold text-xl tracking-wide">
          <Link href="/">理想と実践</Link>
        </div>
      </header>

      <section className="px-6 py-24 max-w-4xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-10">法人向け案内</h1>
        <p className="text-muted leading-loose mb-12">
          組織の課題に合わせて研修をカスタマイズして提供いたします。
          管理職育成、若手社員の主体性向上、社内の仕組み化など、様々な課題に対応可能です。
        </p>
        <Link href="/contact" className="btn btn-primary mr-4">お問い合わせ</Link>
        <Link href="/" className="btn btn-outline">トップへ戻る</Link>
      </section>
    </main>
  );
}
