import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen font-sans text-foreground">
      <header className="px-6 py-6 border-b border-border flex justify-between items-center bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="font-display font-bold text-xl tracking-wide">
          <Link href="/">理想と実践</Link>
        </div>
      </header>

      <section className="py-20 bg-accent/5">
        <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">お問い合わせ</h1>
            <p className="text-xl text-secondary leading-relaxed">
                研修に関するご相談やお問い合わせは、<br className="hidden md:block" />
                以下のフォームよりお願いいたします。
            </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-2xl mx-auto">
            <div className="w-full bg-background rounded-3xl overflow-hidden shadow-sm border border-border p-2 md:p-8">
                <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeuxOuh50S3mxsJSfkswwnHrbi2jE2oYLtu8nXpEE-uBg2kKQ/viewform?embedded=true" 
                    width="100%" 
                    height="1000" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                >読み込んでいます…</iframe>
            </div>
            
            <div className="mt-12 text-center text-sm text-secondary/60">
                <p>通常、2営業日以内に担当者より折返しご連絡させていただきます。</p>
            </div>
            <div className="mt-8 text-center">
                <Link href="/" className="btn btn-outline">トップへ戻る</Link>
            </div>
        </div>
      </section>
    </main>
  );
}
