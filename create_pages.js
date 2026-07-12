const fs = require('fs');
const path = require('path');

const srcAppProgramsDir = path.join('c:', 'Users', 'user', 'created_folders', 'bussiness', 'ideal-and-practice', 'src', 'app', 'programs');

const programs = [
  { slug: 'lhmp-intro', name: '—‘z‚ÆÀ‘HbLHMP“ü–åŒ¤C' },
  { slug: 'life-os', name: '—‘z‚ÆÀ‘Hbl¶OSŒ¤C' },
  { slug: 'agency', name: '—‘z‚ÆÀ‘HbĞˆõå‘Ì«E–ğŠ„Ú‘±Œ¤C' },
  { slug: 'vision', name: '—‘z‚ÆÀ‘Hb—”OZ“§EƒrƒWƒ‡ƒ“Ú‘±ƒ[ƒNƒVƒ‡ƒbƒv' },
  { slug: 'manager', name: '—‘z‚ÆÀ‘HbŠÇ—ÒEŠÇ—EŒ¤C' },
  { slug: 'management-os', name: '—‘z‚ÆÀ‘Hb–‹ÆŠÇ—OSŒ¤C' },
  { slug: '90-days', name: '—‘z‚ÆÀ‘Hb90“ú’è’…ƒvƒƒOƒ‰ƒ€' }
];

programs.forEach(p => {
  const dir = path.join(srcAppProgramsDir, p.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const content = 'import Link from "next/link";\n' +
    'import { Metadata } from "next";\n\n' +
    'export const metadata: Metadata = {\n' +
    '  title: "' + p.name + '",\n' +
    '};\n\n' +
    'const S = {\n' +
    '  serif: { fontFamily: "var(--font-display, \\'Zen Old Mincho\\', serif)" } as React.CSSProperties,\n' +
    '  sans: { fontFamily: "var(--font-sans, \\'Noto Sans JP\\', sans-serif)" } as React.CSSProperties,\n' +
    '};\n\n' +
    'export default function ProgramDetail() {\n' +
    '  return (\n' +
    '    <main style={{ background: "#fafafa", color: "#111", ...S.sans, minHeight: "100vh" }}>\n' +
    '      <nav style={{\n' +
    '        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,\n' +
    '        padding: "20px 48px", display: "flex", alignItems: "center", justifyContent: "space-between",\n' +
    '        background: "rgba(250,250,250,0.9)", backdropFilter: "blur(12px)",\n' +
    '        borderBottom: "1px solid rgba(0,0,0,0.08)", ...S.sans\n' +
    '      }}>\n' +
    '        <Link href="/" style={{ ...S.serif, fontSize: "18px", fontWeight: 500 }}>—‘z‚ÆÀ‘H</Link>\n' +
    '        <div style={{ display: "flex", gap: "32px", fontSize: "13px" }}>\n' +
    '          <Link href="/about">About</Link>\n' +
    '          <Link href="/lhmp">LHMP</Link>\n' +
    '          <Link href="/programs">Œ¤Cˆê——</Link>\n' +
    '          <Link href="/corporate">–@lŒü‚¯</Link>\n' +
    '          <Link href="/contact" style={{ padding: "8px 18px", border: "1px solid #111" }}>‚¨–â‚¢‡‚í‚¹</Link>\n' +
    '        </div>\n' +
    '      </nav>\n\n' +
    '      <section style={{ paddingTop: "140px", paddingBottom: "80px", paddingLeft: "48px", paddingRight: "48px" }}>\n' +
    '        <div style={{ maxWidth: "800px", margin: "0 auto" }}>\n' +
    '          <Link href="/programs" style={{ fontSize: "13px", color: "#666", textDecoration: "underline", marginBottom: "24px", display: "inline-block" }}>© Œ¤Cˆê——‚Ö–ß‚é</Link>\n' +
    '          <h1 style={{ ...S.serif, fontSize: "32px", fontWeight: 500, marginBottom: "24px" }}>' + p.name + '</h1>\n' +
    '          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "40px" }}>Ú×‚ÈƒJƒŠƒLƒ…ƒ‰ƒ€‚â‘ÎÛÒ‚ÍŒ»İ€”õ’†‚Å‚·B</p>\n' +
    '          \n' +
    '          <Link href="/contact?program=' + p.slug + '" style={{\n' +
    '            display: "inline-block", background: "#111", color: "#fafafa",\n' +
    '            padding: "16px 36px", fontSize: "15px", fontWeight: 500\n' +
    '          }}>‚±‚ÌŒ¤C‚ğ‘Š’k‚·‚é ¨</Link>\n' +
    '        </div>\n' +
    '      </section>\n' +
    '    </main>\n' +
    '  );\n' +
    '}\n';
  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
});

console.log('Program pages created successfully.');
