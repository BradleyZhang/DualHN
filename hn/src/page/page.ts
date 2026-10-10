import { parseHTML } from "linkedom";
import { Defuddle, type DefuddleResponse } from "defuddle/node";

export interface PageMetadata {
  title: string;
  description: string;
  domain: string;
  favicon: string;
  image: string;
  language: string;
  published: string;
  author: string;
  site: string;
  wordCount: number;
}
export interface PageMarkdown extends PageMetadata {
  content: string;
}

export const markdown = async (
  str: string,
  param: string,
): Promise<PageMarkdown> => {
  const baseUrl = param || "about:blank";
  try {
    const { document } = parseHTML(str);
    const result = await Defuddle(document, baseUrl, {
      markdown: true,
    });
    return toPage(result);
  } catch (error) {
    console.error("Defuddle 处理失败:", error);
    throw error;
  }
};

function toPage(obj: DefuddleResponse): PageMarkdown {
  return {
    content: obj.content,
    title: obj.title,
    description: obj.description,
    domain: obj.domain,
    favicon: obj.favicon,
    image: obj.image,
    language: obj.language,
    published: obj.published,
    author: obj.author,
    site: obj.site,
    wordCount: obj.wordCount,
  };
}
