import type { Metadata } from "next";
import { Noto_Sans_JP, Zen_Old_Mincho, Instrument_Serif } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const zenOldMincho = Zen_Old_Mincho({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif-en",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "理想と実践｜LHMPを基盤にした人生OS・主体性・事業管理研修",
    template: "%s ｜ 理想と実践",
  },
  description: "LHMPを基盤に、個人の理想形成、社員の主体性、管理職育成、事業管理、組織定着を支援する研修事業。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${zenOldMincho.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
