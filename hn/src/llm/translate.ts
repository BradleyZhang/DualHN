import { translate } from "./openrouter.js";

/**
 * 将英文原文翻译为双语 Markdown
 */
export async function toBilingualMarkdown(source: string): Promise<string> {
  const blocks = source.split(/\n\s*\n/);
  const result: string[] = [];
  let curr = 0;

  for (const block of blocks) {
    printProgress(curr, blocks.length);
    curr++;
    const trimmed = block.trim();
    if (!trimmed) {
      continue;
    }

    // 特殊 Markdown 元素原样保留
    if (isSpecialBlock(trimmed)) {
      result.push(block);
      continue;
    }
    const quotedSource = trimmed
      .split("\n")
      .map((line) => `> ${line}`)
      .join("\n");
    const res = await translate(block);
    const translated = res.content;
    if (!translated) continue;
    result.push(quotedSource, translated);
  }

  return result.join("\n\n") + "\n";
}

/**
 * 判断是否为不需要翻译的 Markdown 块
 */
function isSpecialBlock(block: string): boolean {
  const trimmed = block.trim();

  return (
    trimmed.startsWith("![") || // 图片
    trimmed.startsWith("```") || // 代码块
    trimmed.startsWith("~~~") || // 另一种代码块
    trimmed.startsWith("<") // HTML
  );
}

function printProgress(current: number, total: number) {
  const width = 30;
  const percent = Math.floor((current / total) * 100);
  const filled = Math.floor((current / total) * width);
  const bar = "#".repeat(filled) + " ".repeat(width - filled);

  process.stdout.write(`\r[${bar}] ${percent}% (${current}/${total})`);
  if (current === total) {
    process.stdout.write("\n");
  }
}
