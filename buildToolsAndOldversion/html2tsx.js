#!/usr/bin/env node
/**
 * html2tsx.js
 *  node html2tsx.js <输入根目录> [-o <输出根目录>]
 *  例：
 *    node html2tsx.js /data/root -o /data/src
 *  会在 /data/src 里镜像出和 /data/root 一模一样的子目录结构，
 *  仅把 *.html 变成 *.tsx，其余文件/文件夹忽略。
 */
const fs   = require('fs');
const path = require('path');

/* ---------- 0. 极简命令行解析 ---------- */
let inRoot, outRoot;
for (let i = 2; i < process.argv.length; i++) {
  const arg = process.argv[i];
  if (arg === '-o' || arg === '--out') {
    outRoot = path.resolve(process.argv[++i]);
  } else if (!inRoot) {
    inRoot = path.resolve(arg);
  }
}
if (!inRoot) {
  console.error('用法: node html2tsx.js <输入根目录> [-o <输出根目录>]');
  process.exit(1);
}
/* 没给 -o 就就地生成 */
if (!outRoot) outRoot = inRoot;

/* ---------- 1. 模板工厂 ---------- */
function makeTsx(relPathFromRoot, outRoot) {
  const rootpath = outRoot.split('/')[outRoot.split('/').length - 1];
  console.log(rootpath);
  
  // relPathFromRoot 形如 blog/404.html 或 phase1/p1-1.html
  const urlPath = `/${rootpath}/` + relPathFromRoot
                    .replace(/\.html$/, '')   // 去掉扩展名
                    .split('/')               // 按文件夹拆
                    .map((s, i, arr) =>        // 仅最后一段文件名前加 p-
                      i === arr.length - 1 ? `${s}` : s
                    )
                    .join('/');

  return `import StaticHtml from "@/components/StaticHtml/StaticHtml";

export default function Home() {
  return (
    <>
      <StaticHtml path="${urlPath}" />
    </>
  );
}
`;
}

/* ---------- 2. 递归扫描 ---------- */
function walk(dir, cb) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, cb);
    else if (ent.name.endsWith('.html')) cb(full);
  }
}

/* ---------- 3. 主流程 ---------- */
walk(inRoot, htmlPath => {
  // 计算相对于输入根目录的“镜像”路径
  const rel  = path.relative(inRoot, htmlPath).split(path.sep).join('/');
  const tsx  = makeTsx(rel,outRoot);

  // 输出文件路径：把输入根替换成输出根，扩展名换成 .tsx
  const outFile = path.join(outRoot, rel).replace(/\.html$/, '.tsx');

  // 确保父目录存在
  fs.mkdirSync(path.dirname(outFile), { recursive: true });

  fs.writeFileSync(outFile, tsx, 'utf8');
  console.log(`✅  ${rel}  →  ${path.relative(outRoot, outFile)}`);
});

console.log('\n🎉 全部转换完成！');