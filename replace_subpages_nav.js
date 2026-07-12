const fs = require('fs');

const pages = [
  'src/app/programs/lhmp-intro/page.tsx',
  'src/app/programs/life-os/page.tsx',
  'src/app/programs/agency/page.tsx',
  'src/app/programs/vision/page.tsx',
  'src/app/programs/manager/page.tsx',
  'src/app/programs/management-os/page.tsx',
  'src/app/programs/90-days/page.tsx'
];

pages.forEach(p => {
  if (!fs.existsSync(p)) return;
  let c = fs.readFileSync(p, 'utf8');
  if (c.includes('SiteNav')) return;

  const importStr = 'import SiteNav from "@/components/SiteNav";';
  if (c.includes('import Link')) {
    c = c.replace('import Link from "next/link";', 'import Link from "next/link";\n' + importStr);
  } else {
    c = importStr + '\n' + c;
  }

  const startIdx = c.indexOf('<nav style={{');
  const endIdx = c.indexOf('</nav>', startIdx);
  if (startIdx !== -1 && endIdx !== -1) {
    const before = c.substring(0, startIdx);
    const after = c.substring(endIdx + 6);
    c = before + '<SiteNav activeHref="/programs" />' + after;
    fs.writeFileSync(p, c, 'utf8');
    console.log('Updated:', p);
  } else {
    console.log('Nav not found in:', p);
  }
});
