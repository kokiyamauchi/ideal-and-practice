import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <header className="px-6 py-6 border-b border-border flex justify-between items-center bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="font-display font-bold text-xl tracking-wide">
          <Link href="/">理想と実践</Link>
        </div>
      </header>

      <section className="px-6 py-24 max-w-4xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-10">About</h1>
        <p className="text-muted leading-loose mb-12">
          私たちは白裕の研修事業部として、「理想と実践」を提供しています。<br />
          人が自分の理想に向かって生きられる社会へ、働くことが義務ではなく選択肢になる社会へ。<br />
          そのために必要な思考のOSと、組織の仕組みづくりをサポートします。
        </p>
        <Link href="/" className="btn btn-outline">トップへ戻る</Link>
      </section>
    </main>
  );
}
