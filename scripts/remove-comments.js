#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

const exts = new Set(['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs', '.css', '.scss', '.html', '.md']);
const skipDirs = new Set(['node_modules', '.next', 'out', 'dist', 'build', '.git', 'public']);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (skipDirs.has(e.name)) continue;
      walk(full);
    } else if (e.isFile()) {
      const ext = path.extname(e.name).toLowerCase();
      if (!exts.has(ext)) continue;
      try {
        let content = fs.readFileSync(full, 'utf8');
        const orig = content;

        content = content.replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, '');

        content = content.replace(//g, '');

        content = content.replace(/\/\*[\s\S]*?\*\//g, '');

        content = content.replace(/(^|\s)\/\/.*$/gm, (m, p1) => p1 ? p1 : '');

        content = content.split('\n').map(l => l.replace(/\s+$/,'')).join('\n');
        if (content !== orig) {
          fs.writeFileSync(full, content, 'utf8');
          console.log('Stripped comments:', path.relative(root, full));
        }
      } catch (err) {
        console.error('Failed:', full, err && err.message ? err.message : err);
      }
    }
  }
}

walk(root);
console.log('Done.');
