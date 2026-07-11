import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <header className="px-6 py-6 border-b border-border flex justify-between items-center bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="font-display font-bold text-xl tracking-wide">
          <Link href="/">理想と実践</Link>
        </div>
      </header>

      <section className="px-6 py-24 max-w-4xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-10">お問い合わせ</h1>
        <p className="text-muted leading-loose mb-12">
          研修に関するご相談やお問い合わせは、以下のフォームよりお願いいたします。
          （※現在は準備中です）
        </p>
        <Link href="/" className="btn btn-outline">トップへ戻る</Link>
      </section>
    </main>
  );
}
