import fs from "fs";
import path from "path";

const langFile = fs.readFileSync("src/utils/language.js", "utf8");
const pairRegex = /\[\s*"([\s\S]*?)"\s*,\s*"([\s\S]*?)"\s*\]/g;
const dict = new Set();
let m;
while ((m = pairRegex.exec(langFile))) {
  dict.add(m[1].replace(/\\n/g, "\n"));
  dict.add(m[2].replace(/\\n/g, "\n"));
}

const pagesDir = "src/pages";
const files = [];
const walk = (dir) => {
  for (const name of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, name);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) walk(fullPath);
    else if (fullPath.endsWith(".jsx")) files.push(fullPath);
  }
};
walk(pagesDir);

const stringRegex = /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/g;
const ignoreRegex =
  /^(className|active|post|get|set|text|email|tel|file|password|image\/)/;
const uiStrings = new Set();

for (const filePath of files) {
  const content = fs.readFileSync(filePath, "utf8");
  let s;
  while ((s = stringRegex.exec(content))) {
    const value = s[0]
      .slice(1, -1)
      .replace(/\\'/g, "'")
      .replace(/\\\"/g, '"')
      .replace(/\\n/g, "\n");

    const trimmed = value.trim();
    if (!trimmed) continue;
    if (/^\/?[a-z0-9-_\/?:=&.%]+$/i.test(trimmed)) continue;
    if (ignoreRegex.test(trimmed)) continue;
    if (/[{}<>]/.test(trimmed)) continue;
    if (/^(\.|\-|\+|\d+)$/.test(trimmed)) continue;

    uiStrings.add(trimmed);
  }
}

const missing = [...uiStrings]
  .filter((x) => !dict.has(x))
  .sort((a, b) => a.localeCompare(b));

console.log(`MISSING_COUNT=${missing.length}`);
for (const item of missing) {
  console.log(item);
}
