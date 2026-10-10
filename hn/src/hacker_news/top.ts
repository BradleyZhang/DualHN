// 排除标题带 "Ask HN" 和 "Show HN" 的
import * as cheerio from "cheerio";
import { getHtml } from "../html/html.js";

const excludeKeywords: string[] = ["Show HN", "Ask HN", "Launch HN"];
interface UrlAndTitle {
  url: string;
  title: string;
}

export async function topUrls(url: string): Promise<UrlAndTitle[]> {
  let html = await getHtml(url);
  const $ = cheerio.load(html);

  const urls: UrlAndTitle[] = [];

  // 按照 HTML 中的出现顺序获取文章链接
  $(".titleline > a").each((_, element) => {
    const href = $(element).attr("href");
    const title = $(element).text();
    if (excludeKeywords.some((keyword) => title.includes(keyword))) {
      return; // 跳过当前文章
    }
    if (href) {
      urls.push({ url: new URL(href).href, title: title });
    }
  });

  return urls;
}
