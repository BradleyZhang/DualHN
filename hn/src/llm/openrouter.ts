import { OpenRouter } from "@openrouter/sdk";
import "dotenv/config";

const apiKeys = (process.env.OPENROUTER_API_KEYS ?? "")
  .split(",")
  .map((key) => key.trim())
  .filter(Boolean);

const clients = apiKeys.map((apiKey) => new OpenRouter({ apiKey }));
const defaultPrompt = `
你是一位专业的技术文档翻译专家，精通中英文，擅长翻译计算机科学、人工智能、软件工程等领域的技术文章。你的翻译不仅追求准确，更注重保留技术语境和专业术语的精确性。

核心翻译准则：
准确流畅: 译文必须忠于原文，同时符合中文技术文档的表达习惯，避免生硬的机器翻译腔。
保留专业术语: 对于行业内广泛接受的英文专有名词、框架、模型、库或缩写，必须保持其英文原文，无需翻译。
1. 代码处理
代码块：保持原样，不进行翻译
注释翻译：仅在注释对理解代码逻辑有重要帮助时翻译，简单的注释可保持英文
2. 专有名词
以下类型的词汇保持英文原文，不要翻译：

技术框架和库：LangChain, TensorFlow, PyTorch, React, Vue 等
专业术语：LLM, Agent, Transformer, Embedding, Token 等
产品名称：GitHub, OpenAI, GPT-4, Claude 等
编程语言：Python, JavaScript, Rust 等
技术概念（首次出现可加中文注释）：prompt engineering, fine-tuning, RAG 等
排版规范
中英文间距：中文与英文、数字之间添加一个空格
✅ 正确：使用 LLM 进行推理
❌ 错误：使用LLM进行推理
标点符号：中文使用中文标点（，。！？），英文使用英文标点
括号：英文专有名词的补充说明使用英文括号，纯中文使用中文括号
Markdown 格式
完整保留原文的 Markdown 结构，包括标题 (#)、列表 (-, )、粗体 (**)、斜体 ()、引用 (>)
标题中的锚点链接去掉，保留段落中的超链接
翻译风格
使用准确的技术术语
保持客观、专业的语气
确保语句通顺流畅，符合中文表达习惯
避免过度直译，注重意译
保持原文的语气和强调重点
    `;

export interface LLMRes {
  content: string;
  model: string;
}
const max_retry = 5;
let client = clients[0];
let clientIndex = 0;
export const translate = async (article: string,prompt:string=defaultPrompt): Promise<LLMRes> => {
  let result;
  if (!client)
    throw new Error(
      "api key not found\n.env's OPENROUTER_API_KEYS:" +
        process.env.OPENROUTER_API_KEYS +
        "\napiKeys:" +
        apiKeys,
    );
  for (let i = 0; i < max_retry; i++) {
    try {
      const res = await client.chat.send({
        chatRequest: {
          model: "openrouter/free",
          messages: [
            {
              role: "system",
              content: prompt.trim(),
            },
            {
              role: "user",
              content: article,
            },
          ],
          stream: false,
        },
      });
      result = res;
      if (/[\u4e00-\u9fff]/.test(res.choices[0].message.content)) {
        // 包含中文字符
        break;
      }
    } catch (error) {
      const statusCode = getStatusCode(error);
      if (statusCode == 429) {
        // 换key
        clientIndex++;
        if (clientIndex < clients.length) {
          client = clients[clientIndex];
          i = -1;
          console.log("retry:change api key");
          continue;
        } else {
          throw new Error(
            "status code 429:总共" + clientIndex + "个 api key 额度已经用完",
          );
        }
      } else {
        throw error;
      }
    }
  }

  if (!result) throw new Error("unreachable:translate");

  return {
    content: result.choices[0].message.content,
    model: result.model,
  };
};
function getStatusCode(err: unknown): number | undefined {
  if (
    typeof err === "object" &&
    err !== null &&
    "statusCode" in err &&
    typeof err.statusCode === "number"
  ) {
    return err.statusCode;
  }
  return undefined;
}
