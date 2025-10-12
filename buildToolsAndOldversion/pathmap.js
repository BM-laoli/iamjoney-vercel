
const fs = require("fs");
const path = require("path");

// 读取命令行参数
const args = process.argv.slice(2);
if (args.length < 1) {
  console.error("用法: node tools.js <目录路径>");
  process.exit(1);
}

const rootDir = path.resolve(args[0]); // e.g. ./blog
const rootName = path.basename(rootDir); // e.g. blog

/**
 * 递归扫描目录下所有 .tsx 文件
 */
function getAllTsxFiles(dir) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getAllTsxFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".tsx")) {
      files.push(fullPath);
    }
  }
  return files;
}

/**
 * 生成映射
 */
function generateMap(rootDir) {
  const tsxFiles = getAllTsxFiles(rootDir);
  const result = {};

  for (const filePath of tsxFiles) {
    const relativePath = path.relative(rootDir, filePath).replace(/\\/g, "/"); // 相对路径
    const noExt = relativePath.replace(/\.tsx$/, ""); // 去掉后缀

    // 拼接输出
    const key = `/${rootName}/${noExt}`;
    const value = `public/statichtml/${rootName}/${noExt}.html`;
    result[key] = value;
  }

  return { [rootName]: result };
}

const output = generateMap(rootDir);
console.log(JSON.stringify(output, null, 2));
