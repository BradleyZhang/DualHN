import { topUrls, type UrlAndTitle } from "./hacker_news/top.js";
import { getHtml } from "./html/html.js";
import { translate } from "./llm/openrouter.js";
import { toBilingualMarkdown } from "./llm/translate.js";
import { markdown } from "./page/page.js";
import { access, mkdir, writeFile, readFile } from "node:fs/promises";
const dir = "./../website/content";
const processedDir = "./.processed/";

const today = new Date().toLocaleDateString("en-CA", {
  timeZone: "Asia/Shanghai",
});

const yDate = new Date();
yDate.setDate(yDate.getDate() - 1);

const yesterday = yDate.toLocaleDateString("en-CA", {
  timeZone: "Asia/Shanghai",
});
const outputDir = dir + "/" + today + "/";
const processedPath = processedDir + today + ".json";

const yesterdayHN = "https://news.ycombinator.com/front?day=" + yesterday;
let urlWithTitles: UrlAndTitle[] | undefined = undefined;
try {
  const processed = await fileExists(processedPath);
  if (processed) {
    const content = await readFile(processedPath, "utf-8");
    urlWithTitles = JSON.parse(content);
  } else {
    urlWithTitles = await topUrls(yesterdayHN);
  }
  if (urlWithTitles === undefined) {
    throw new Error("unreachable");
  }

  // hugo _index.md
  await mkdir(outputDir, { recursive: true });
  await writeFile(outputDir + "_index.md", `---\ntitle: "${today}"\n---\n`, "utf8");

  for (let i = 0; i < urlWithTitles.length; i++) {
    const item = urlWithTitles[i];
    if (!item) break;
    if (item.processed) {
      continue;
    }

    const url = item.url;
    const title = item.title;
    const rank = i + 1;
    const html = await getHtml(url);
    const page = await markdown(html, url);
    console.log("开始翻译:" + title);
    const translatedTitle = (await translate(title,"翻译该英文标题为中文，不要换行")).content;
    const frontMater = getFrontMater(
      translatedTitle.replace(/\s+/g, " ").trim(),
      page.title,
      url,
      "",
      "",
      "",
    ); // TODO 标题翻译,hnurl point comment
    const translated = frontMater + (await toBilingualMarkdown(page.content));

    const fileName = `${String(rank).padStart(2, "0")}-${slugify(title)}.md`;
    const path = outputDir + fileName;
    await writeFile(path, translated, "utf8");
    console.log(`Markdown 已写入：${path}`);
    item.processed = true;
  }
} catch (error) {
  console.error("err:", error);
  process.exitCode = 1;
} finally {
  if (urlWithTitles !== undefined) {
    await mkdir(processedDir, { recursive: true });
    await writeFile(
      processedPath,
      JSON.stringify(urlWithTitles, null, 2),
      "utf-8",
    );
  }
}

async function fileExists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

function slugify(input: string): string {
  const slug = input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // 去掉重音符号
    .replace(/['’]/g, "") // isn't -> isnt
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-") // 其余非字母数字转成 -
    .replace(/-{2,}/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
    .replace(/-+$/g, "");
  return slug || "post";
}
function getFrontMater(
  title: string,
  originalTitle: string,
  originalUrl: string,
  hnUrl: string,
  points: string,
  comments: string,
): string {
  const date = getShanghaiTime();
  const f = `---
title: "${title}"
date: ${date}
draft: false
source: "Hacker News"
originalTitle: "${originalTitle}"
originalUrl: "${originalUrl}"
hnUrl: "${hnUrl}"
points: ${points}
comments: ${comments}
---

`;
  return f;
}

function getShanghaiTime(): string {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const date = Object.fromEntries(
    parts.filter((p) => p.type !== "literal").map((p) => [p.type, p.value]),
  );
  return `${date.year}-${date.month}-${date.day}T${date.hour}:${date.minute}:${date.second}+08:00`;
}
