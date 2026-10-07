import { readFileSync, writeFileSync } from 'node:fs';

const root = new URL('./', import.meta.url);
const { dates } = JSON.parse(readFileSync(new URL('dates.json', root), 'utf8'));
if (dates.length !== 10) throw new Error(`expected 10 dates, got ${dates.length}`);
const values = dates.map(d => d.date.trim());

const targets = [
  {
    file: 'index.html',
    expected: 20,
    re: /(<h4 class="framer-text framer-styles-preset-1gcayne" data-styles-preset="jYsmshgJW"><strong class="framer-text">)[^<]*(<\/strong><\/h4>)/g,
    encode: v => v.replace(/&/g, '&amp;').replace(/</g, '&lt;'),
  },
  {
    file: 'assets/framer/shared-lib.CAnMRKvt.mjs',
    expected: 10,
    re: /(`h4`,\{className:`framer-styles-preset-1gcayne`,"data-styles-preset":`jYsmshgJW`,children:s\(`strong`,\{children:`)[^`]*(`)/g,
    encode: v => v.replace(/[\\`]/g, '\\$&').replace(/\$\{/g, '\\${'),
  },
];

for (const t of targets) {
  const url = new URL(t.file, root);
  let n = 0;
  const out = readFileSync(url, 'utf8')
    .replace(t.re, (_, pre, post) => pre + t.encode(values[n++ % 10]) + post);
  if (n !== t.expected) throw new Error(`${t.file}: expected ${t.expected} matches, found ${n}`);
  writeFileSync(url, out);
  console.log(`${t.file}: ${n} replaced`);
}