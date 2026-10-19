---
title: "DeepSeek 搜索与获取 – 每 1000 次成功请求 0.75 美元"
date: 2026-10-19T07:13:42+08:00
draft: false
source: "Hacker News"
originalTitle: "Search & Fetch | DeepSeek API Docs"
originalUrl: "https://api-docs.deepseek.com/guides/search/"
hnUrl: ""
points: 
comments: 
---

> ## Search & Fetch

## 搜索与获取

> The Search API and the Fetch API give agents and RAG applications access to live web content:

Search API 和 Fetch API 为代理 和 RAG 应用 提供了对实时网页内容的访问：

> - **Search API** finds web pages for a query and returns structured results. It is powered by DeepSeek's in-house search engine.
> - **Fetch API** retrieves a single web page and returns its content as Markdown.

- **搜索 API** 可以根据查询查找网页，并返回结构化结果，由 DeepSeek 自有搜索引擎提供支持。
- **获取 API** 可以检索单个网页，并将内容以 Markdown 格式返回。

> Both are raw JSON APIs. They use the same bearer authentication as the DeepSeek API.

Both are raw JSON APIs。 They use the same Bearer 认证 as the DeepSeek API。

> The base URL is `https://api.deepseek.com`:

基础 URL 为 `https://api.deepseek.com`：

> | API | Endpoint |
> | --- | --- |
> | Search | `POST https://api.deepseek.com/v1/tools/search` |
> | Fetch | `POST https://api.deepseek.com/v1/tools/fetch` |

| API | 端点 |
| --- | --- |
| 搜索 | `POST https://api.deepseek.com/v1/tools/search` |
| 获取 | `POST https://api.deepseek.com/v1/tools/fetch` |

> See the [Search API Reference](https://api-docs.deepseek.com/api/search) and [Fetch API Reference](https://api-docs.deepseek.com/api/fetch) for the complete request and response schemas.

请参考 [Search API Reference](https://api-docs.deepseek.com/api/search) 和 [Fetch API Reference](https://api-docs.deepseek.com/api/fetch)，获取完整的请求和响应模式。

> ---

User Safety: safe

> ## Authentication

## 身份验证

> Send your API key and the JSON content type in the request headers:

在请求头中发送您的 API Key 和 JSON 内容类型：

> | Header | Required | Value |
> | --- | --- | --- |
> | `Authorization` | Yes | `Bearer <DeepSeek API Key>` |
> | `Content-Type` | Yes | `application/json` |

| 请求头 | 是否必填 | 值 |
| --- | --- | --- |
| `Authorization` | 是 | `Bearer <DeepSeek API Key>` |
| `Content-Type` | 是 | `application/json` |

> ---

好的，请提供您需要翻译的英文原文。

> ## Search API

# Search API

**搜索 API**

---

## Translation Notes

- **Search API**: 保留 "API" 为英文缩写（技术框架和库/专业术语规则），将 "Search" 翻译为中文 "搜索"，形成标准的技术术语 "搜索 API"
- 整个标题作为技术文档标题，保持原有结构
- 中文与英文之间的空格已按规范添加

> ### Request

### 请求

```bash
curl https://api.deepseek.com/v1/tools/search \
  -H "Authorization: Bearer <DeepSeek API Key>" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "DeepSeek V4 release",
    "count": 5,
    "need_content": true
  }'
```
```python
import requests

> response = requests.post(
>     "https://api.deepseek.com/v1/tools/search",
>     headers={
>         "Authorization": "Bearer <DeepSeek API Key>",
>     },
>     json={
>         "query": "DeepSeek V4 release",
>         "count": 5,
>         "need_content": True,
>     },
> )
> response.raise_for_status()

```python
response = requests.post(
    "https://api.deepseek.com/v1/tools/search",
    headers={
        "Authorization": "Bearer <DeepSeek API Key>",
    },
    json={
        "query": "DeepSeek V4 release",
        "count": 5,
        "need_content": True,
    },
)
response.raise_for_status()
```

> for result in response.json()["results"]:
>     print(result["title"], result["url"])
>     print(result["summary"])
> ```

```python
for result in response.json()["results"]:
    print(result["title"], result["url"])
    print(result["summary"])
```

> Request fields:

请求字段：

> | Field | Type | Required | Default | Description |
> | --- | --- | --- | --- | --- |
> | `query` | string | Yes | \- | The search query must contain 1 to 128 Unicode characters, cannot be all whitespace, and supports the query operators listed below. |
> | `count` | integer | No | `10` | The number of results to return, between 1 and 50. |
> | `ori_question` | string | No | \- | The user's original question that triggered the search, between 1 and 128 characters, to improve query understanding, with `null` treated as not provided. |
> | `localization` | string | No | `""` | An optional IP address used to localize search results. |
> | `need_content` | boolean | No | `false` | Whether to return page content in `content`, which is always an empty string when `false`. |

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `query` | string | Yes | \- | 搜索查询必须包含 1 到 128 个 Unicode 字符，不能全为空白字符，并支持下文列出的查询运算符。 |
| `count` | integer | No | `10` | 返回的结果数量，范围在 1 到 50 之间。 |
| `ori_question` | string | No | \- | 触发搜索的用户原始问题，长度为 1 到 128 个字符，用于改善查询理解，`null` 视为未提供。 |
| `localization` | string | No | `""` | 用于本地化搜索结果的可选 IP 地址。 |
| `need_content` | boolean | No | `false` | 是否在 `content` 中返回页面内容，当为 `false` 时始终为空字符串。 |

> Unknown fields in the request body are ignored.

请求体中的未知字段将被忽略。

> ### Query Operators

###  查询操作符

> The query is forwarded with its search syntax intact. The examples below combine operators with a search term; you can combine multiple operators in one query.

查询以其搜索语法完整转发。下面的示例将操作符与搜索词组合起来；您可以在单个查询中组合多个操作符。

> | Operator | Example | Description |
> | --- | --- | --- |
> | `site:` | `DeepSeek site:github.com` | Restrict results to the given site, and to target multiple sites, separate the `site:` clauses with spaces and join them with `OR`, for example `DeepSeek site:github.com OR site:huggingface.co`. |
> | `-site:` | `DeepSeek -site:example.com` | Exclude the given site, and separate multiple sites with spaces. |
> | `-` | `DeepSeek -advertisement` | Exclude pages containing the term, and separate multiple terms with spaces. |
> | `-"..."` | `DeepSeek -"release notes"` | Exclude pages containing the exact phrase, which can contain spaces, and separate multiple phrases with spaces. |
> | `"..."` | `DeepSeek "exact phrase"` | Match an exact phrase, and separate multiple phrases with spaces. |
> | `lang:` | `DeepSeek lang:zh,en` | Restrict results to the given language codes, separating multiple codes with commas, for example `lang:zh,en`. |
> | `after:` | `DeepSeek after:2025` or `DeepSeek after:2025-01-01` | Restrict results to pages published after a date. |
> | `before:` | `DeepSeek before:2026` or `DeepSeek before:2026-06-01` | Restrict results to pages published before a date. |

| 操作符 | 示例 | 说明 |
| --- | --- | --- |
| `site:` | `DeepSeek site:github.com` | 将结果限制在指定网站，如需针对多个网站，请用空格分隔 `site:` 子句并使用 `OR` 连接，例如 `DeepSeek site:github.com OR site:huggingface.co`。 |
| `-site:` | `DeepSeek -site:example.com` | 排除指定网站，多个网站之间用空格分隔。 |
| `-` | `DeepSeek -advertisement` | 排除包含该术语的页面，多个术语之间用空格分隔。 |
| `-"..."` | `DeepSeek -"release notes"` | 排除包含精确短语的页面，短语可包含空格，多个短语之间用空格分隔。 |
| `"..."` | `DeepSeek "exact phrase"` | 匹配精确短语，多个短语之间用空格分隔。 |
| `lang:` | `DeepSeek lang:zh,en` | 将结果限制在指定语言代码，多个代码之间用逗号分隔，例如 `lang:zh,en`。 |
| `after:` | `DeepSeek after:2025` 或 `DeepSeek after:2025-01-01` | 将结果限制在指定日期之后发布的页面。 |
| `before:` | `DeepSeek before:2026` 或 `DeepSeek before:2026-06-01` | 将结果限制在指定日期之前发布的页面。 |

> For example:



例如

```json
{
  "query": "DeepSeek site:github.com OR site:huggingface.co lang:en after:2025",
  "count": 10
}
```

> ### Response

### 响应

> A successful request returns HTTP 200 with a `results` array. A normal search with no matches returns an empty array.

成功的请求返回 HTTP 200 状态码，并包含一个 `results` 数组。正常搜索无匹配结果时返回空数组。

```json
{
  "results": [
    {
      "rerank_score": 2.4,
      "title": "DeepSeek V4 model released",
      "url": "https://example.com/deepseek-v4",
      "snippet": "DeepSeek V4 is now available, with tool calling and long-context support.",
      "summary": "DeepSeek has released the V4 model. The release adds improved tool calling and long-context support for agent workflows.",
      "content": "DeepSeek V4 is now generally available...",
      "site_name": "Example News",
      "site_icon": "https://example.com/favicon.ico",
      "date": "2026-06-01T00:00:00+00:00",
      "authority": 3
    }
  ]
}
```

> Each item in `results` contains:

每个 `results` 项包含：

> | Field | Type | Description |
> | --- | --- | --- |
> | `rerank_score` | number | A relevance score from 0 to 3 that combines signals such as relevance, authority, and freshness, with scores of 1.5 or above considered high-quality results. |
> | `title` | string | The title of the result. |
> | `url` | string | The URL of the result. |
> | `snippet` | string | A short summary related to the query, typically 100 to 200 characters, intended for display in a UI. |
> | `summary` | string | A long summary related to the query, typically 600 to 800 characters, intended to be read by a model. |
> | `content` | string | The page content, which is empty when `need_content` is `false` or when the content is unavailable. |
> | `site_name` | string or null | The name of the site, or `null` when unavailable. |
> | `site_icon` | string or null | The URL of the site icon, or `null` when unavailable. |
> | `date` | string or null | The publication time in UTC, formatted as RFC 3339, or `null` when unknown. |
> | `authority` | integer | The authority tier of the page, 0 to 4 (`-1` means unknown), with values of 3 or above indicating highly authoritative sources. |



| Field | Type | Description |
| --- | --- | --- |
| `rerank_score` | number | 一个从 0 到 3 的相关性分数，结合了相关性、权威性和时效性等信号，其中 1.5 分及以上被视为高质量结果。 |
| `title` | string | 结果的标题。 |
| `url` | string | 结果的 URL。 |
| `snippet` | string | 与查询相关的短摘要，通常为 100 到 200 个字符，用于在 UI 中显示。 |
| `summary` | string | 与查询相关的长摘要，通常为 600 到 800 个字符，供模型阅读。 |
| `content` | string | 页面内容，当 `need_content` 为 `false` 或内容不可用时为空。 |
| `site_name` | string or null | 网站的名称，不可用时为 `null`。 |
| `site_icon` | string or null | 网站图标的 URL，不可用时为 `null`。 |
| `date` | string or null | 采用 UTC 格式的发布时间，符合 RFC 3339 格式，未知时为 `null`。 |
| `authority` | integer | 页面的权威等级，范围为 0 到 4（`-1` 表示未知），3 及以上表示高度权威的来源。 |

> ---

---

# Redis Persistence Options Explained

Redis 是一种内存数据库，但它也提供了多种持久化机制来防止数据丢失。本文我们将逐一探讨 Redis 支持的各种持久化选项。

## 快速概览

| 持久化方式 | 是否将数据持久化到磁盘 | 是否需要较多内存 | 是否会阻塞 Redis | 是否适合大数据集 | 是否适合写密集型应用 |
|-----------|----------------------|----------------|----------------|----------------|-------------------|
| RDB 持久化 | ✅ | ✅ | ✅ | ✅ | ❌ |
| AOF 持久化 | ✅ | ✅ | ❌ | ✅ | ✅ |
| 合并持久化 | ✅ | ✅ | ❌ | ✅ | ✅ |
| 不持久化 | ❌ | ❌ | ❌ | ❌ | ✅ |

> 提示：选择持久化方式时，请根据您的具体需求权衡上述因素。

## 什么时候需要持久化？

在决定是否启用持久化之前，请先思考以下几个问题：

- **数据是否具有重要价值？** 如果您的数据是临时的，例如用于缓存，则可以不启用持久化。
- **能否通过其他方式快速重建数据？** 如果数据可以从其他数据源快速恢复，则不必担心数据丢失。
- **写入频率有多高？** 高频写入可能对某些持久化方式造成性能压力。
- **对数据丢失的容忍度为多少？** 了解您可以容忍的数据丢失窗口。

如果数据非常关键且不能丢失，或无法轻松重建，那么您就需要配置持久化。

## 持久化选项概览

### 1. RDB 持久化（Snapshotting，快照）

RDB（Redis Database Backup，Redis 数据库备份）通过创建数据集的压缩副本来实现持久化。

**工作方式**：
- 定期生成快照（例如，每 5 分钟快照一次）
- 只有在数据变更时才创建新快照
- 快照文件是二进制格式，体积小

**配置示例**：
```
save 900 1
save 300 10
save 60 10000
```

**优点**：
- 创建的 RDB 文件只需瞬间完成，不会阻塞其他客户端
- RDB 文件是压缩好的，节省磁盘空间
- 恢复大量数据时，速度比 AOF 更快

**缺点**：
- 在数据变更频繁的场景下，快照持久化可能会占用较多 CPU
- 如果 Redis 异常停止，最近几分钟的数据可能丢失
- RDB 创建过程会暂停 BGSAVE 期间的其他写入操作（虽然这在现代 Redis 中已被优化）


### 2. AOF 持久化（Append-Only File，追加-only文件）

AOF 通过记录所有 Redis 执行的写指令来实现持久化。

**工作方式**：
- 每执行一个写指令后，都会将其追加到 AOF 文件中
- AOF 文件包含恰好复原数据库状态的指令序列

**配置示例**：
```
appendonly yes
appendfsync always
```

**AOF 持久化策略**：
- `appendfsync always`：每次写入都同步到磁盘，这最安全但最慢
- `appendfsync everysec`：每秒同步一次，这是默认设置，兼顾安全性和性能
- `appendfsync no`：由操作系统控制同步时机，性能最好但最不安全

**优点**：
- 从 AOF 文件中恢复数据的完整性更好，几乎可以做到数据不丢失
- AOF 文件是纯文本格式，便于阅读和调试
- AOF 的重写机制可以控制文件体积

**缺点**：
- 相比 RDB，AOF 的恢复速度较慢
- 写入性能会受磁盘 I/O 限制
- AOF 文件可能会比 RDB 文件大

### 3. 合并持久化（RDB + AOF）

这种方式结合了 RDB 和 AOF 的优势。

**工作方式**：
- 使用 RDB 进行快照持久化
- 使用 AOF 进行追加日志记录
- 优先使用 AOF 进行数据恢复（因为它更新更及时）

**配置示例**：
```
save 900 1
appendonly yes
```

**优点**：
- 同时兼具RDB和AOF的优势
- 提供较好的持久化可靠性和数据恢复速度
- 当AOF文件丢失时，可以用RDB进行恢复

**缺点**：
- 配置文件和管理都较为复杂
- 需要更多的磁盘空间
- 可能会影响写入性能

### 4. 不持久化

这是最简单也是最不安全的选择。

**工作方式**：
- 数据完全保存在内存中
- Redis 退出或重启时，所有数据都会被丢弃

**优点**：
- 最高的写入性能
- 最简单的配置
- 最省磁盘空间

**缺点**：
- 一旦 Redis 进程退出，数据将全部丢失
- 不适合保存重要数据的场景

## 持久化配置详解

### RDB 配置

**基本配置**：
```
# 设置保存点（间隔 5 分钟，且至少修改 1 个 key）
save 300 1

# 只在需要时生成 RDB 文件
rdbcompression yes

# RDB 文件的路径
dbfilename dump.rdb

# RDB 文件的保存目录
dir ./
```

**进阶配置**：
```
# 只在数据变化后才进行 RDB 持久化
rdbchecksum yes

# 快照失败时的处理方式
rdb-del-sync-files yes
```

### AOF 配置

**基本配置**：
```
# 启用 AOF 持久化
appendonly yes

# AOF 文件的路径
appendfilename "appendonly.aof"

# 同步策略
appendfsync everysec
```

**进阶配置**：
```
# AOF 文件重写策略
auto-aof-rewrite-percentage 100
auto-aof-rewrite-min-size 64mb

# 在 AOF 重写期间是否丢弃新的写入指令
aof-rewrite-incremental-fsync yes
```

## 如何选择合适的持久化方案？

选择持久化方案取决于您的具体需求：

### 选择 RDB 的情况：
- 您需要定期备份数据
- 数据恢复速度很重要
- 数据变更频率相对较低
- 您的工作负载主要是读取型

### 选择 AOF 的情况：
- 您需要最小化数据丢失
- 您的应用写操作频繁
- 您需要实时的数据持久化
- 您希望能够查看修改历史

### 选择组合持久化的场景：
- 您需要兼顾恢复速度和数据安全性
- 您的应用场景既有读也有写
- 您可以接受稍微复杂的配置

### 不启用持久化的情况：
- 您的数据可以轻易重建
- 您只是临时存储数据（如缓存）
- 您的应用对数据丢失不敏感

## 持久化的最佳实践

### 1. 监控持久化状态

监控 RDB 与 AOF 的生成情况：
```
INFO persistence
```

### 2. 定期备份

即使使用了持久化，也建议定期将 RDB 或 AOF 文件复制到安全位置。

### 3. 测试恢复流程

定期测试从持久化文件恢复数据的能力，确保在灾难恢复时不会遇到意外。

### 4. 监控 AOF 文件大小

由于 AOF 文件可能会增长，定期监控其大小，必要时进行重写：
```
BGREWRITEAOF
```

### 5. 使用磁盘 I/O 最佳配置

对于 AOF 持久化，考虑使用 `everysec` 策略，或在 SSD 存储上进行测试。

## 常见问题解答

### Q: RDB 和 AOF どちらを選ぶべきですか？

A: それは使用シナリオによります。RDBは定期的なバックアップとして適しており、AOFは最小限のデータ損失を確保するためのものです。多くの場合、両方を組み合わせるのがベストです。

### Q: AOF のパフォーマンスはどのくらいですか？

A: AOFのパフォーマンスはシンクの同期頻度によって異なります。`always`を使用すると最も安全ですが、パフォーマンスが低下します。デフォルトの`everysec`は、ほぼリアルタイムの持続性を確保しながら優れたパフォーマンスを提供します。

### Q: 大量のデータの場合、持続化は可能ですか？

A: はい、RDBとAOFの両方は大規模なデータセットを処理できます。ただし、適切な設定と十分なディスク容量が必要です。

## 结论

Redis 提供了灵活的持久化选项，使开发人员能够根据其特定的需求来调整。通过理解每种方法的权衡，您可以做出明智的决定，以实现可靠的数据持久化。

- RDB 适合需要定期快照和快速恢复的场景
- AOF 适合需要实时持久化和最小化数据丢失的场景
- 组合持久化提供了两者的优势
- 不持久化适合临时数据存储场景

通过正确配置和监控，Redis 可以为您的应用程序提供可靠的数据持久化，确保即使在 Redis 进程故障时也能恢复数据。

> ## Fetch API

## Fetch API

> ### Request



# 使用 LangChain 和 LangGraph 构建智能体

## 前言

在人工智能快速发展的今天，构建能够与环境交互、处理复杂任务的智能体已成为热门话题。LangChain 和 LangGraph 作为两个强大的框架，为开发者提供了构建智能体应用的完整工具链。

## 什么是 LangChain？

LangChain 是一个用于开发由语言模型驱动的应用程序的框架。它提供了一套组件，帮助你构建上下文感知的智能体，这些智能体能够进行推理、使用工具并完成多步骤任务。

## 什么是 LangGraph？

LangGraph 是 LangChain 生态系统的一部分，专门用于构建有状态、多轮交互的智能体。它通过图结构来定义智能体的工作流程，使得复杂的行为逻辑变得清晰可控。

## 构建一个简单的智能体

下面我们将通过一个实际示例，展示如何使用 LangChain 和 LangGraph 构建一个能够搜索网络并回答问题的智能体。

### 安装必要的库

```bash
pip install langchain langgraph openai
```

### 设置 API 密钥

```python
import os
from langchain_openai import OpenAI

# 设置你的 OpenAI API 密钥
os.environ["OPENAI_API_KEY"] = "your-api-key-here"
```

### 创建智能体

```python
from langchain.agents import AgentExecutor, create_react_agent
from langchain_openai import ChatOpenAI
from langchain.tools import tool

# 定义一个简单的工具
@tool
def search(query: str) -> str:
    """搜索网络并返回结果。"""
    # 这里是简化的搜索实现
    return f"搜索结果: {query}"

# 初始化语言模型
llm = ChatOpenAI(model="gpt-4")

# 创建智能体
agent = create_react_agent(llm, [search])
agent_executor = AgentExecutor(agent=agent, tools=[search], verbose=True)

# 运行智能体
result = agent_executor.invoke({"input": "什么是机器学习？"})
print(result["output"])
```

## 智能体的工作流程

上述代码中，智能体的工作流程如下：

1. **接收输入**：用户提出问题
2. **分析意图**：LLM 分析问题并决定是否需要使用工具
3. **调用工具**：如果需要，智能体调用相应的工具（如搜索）
4. **处理结果**：将工具返回的结果整合到回答中
5. **输出答案**：生成最终回答

## 高级功能

LangGraph 允许你构建更复杂的智能体，例如：

- **多轮对话**：智能体可以记住之前的对话上下文
- **条件分支**：根据不同的情况执行不同的操作
- **循环执行**：智能体可以多次调用工具直到获得满意结果

## 总结

通过 LangChain 和 LangGraph，开发者可以快速构建功能强大的智能体应用。这些框架抽象了底层的复杂性，使我们能够专注于业务逻辑的实现。

随着 LLM 技术的不断进步，智能体将在更多领域发挥重要作用。掌握这些工具将为你在人工智能领域的职业发展带来巨大优势。

```bash
curl https://api.deepseek.com/v1/tools/fetch \
  -H "Authorization: Bearer <DeepSeek API Key>" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com/article"
  }'
```
```python
import requests

> response = requests.post(
>     "https://api.deepseek.com/v1/tools/fetch",
>     headers={
>         "Authorization": "Bearer <DeepSeek API Key>",
>     },
>     json={"url": "https://example.com/article"},
> )
> response.raise_for_status()

response = requests.post(
    "https://api.deepseek.com/v1/tools/fetch",
    headers={
        "Authorization": "Bearer <DeepSeek API Key>",
    },
    json={"url": "https://example.com/article"},
)
response.raise_for_status()

> page = response.json()
> print(page["title"])
> print(page["content"])
> ```

page = response.json()
print(page["title"])
print(page["content"])

> Request fields:

请求字段：

* **model**（必需）:
* **messages**（必需）:
* **temperature**（可选）:
* **top_p**（可选）:
* **max_tokens**（可选）:
* **stream**（可选）:
* **stop**（可选）:
* **presence_penalty**（可选）:
* **frequency_penalty**（可选）:
* **logit_bias**（可选）:
* **user**（可选）:

> | Field | Type | Required | Description |
> | --- | --- | --- | --- |
> | `url` | string | Yes | The page URL to fetch, which must be at most 8192 characters, an HTTP or HTTPS URL with a host, and must not contain a username or password. |

| 字段 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| `url` | string | 是 | 要获取的页面 URL，最大长度 8192 个字符，必须是带有 host 的 HTTP 或 HTTPS URL，且不能包含用户名或密码。 |

> ### Response

### 响应

```json
{
  "title": "Example article",
  "content": "# Example article\n\nArticle content."
}
```

> | Field | Type | Description |
> | --- | --- | --- |
> | `title` | string | The title of the page, empty when the title is unavailable. |
> | `content` | string | The fetched page content as Markdown text. |

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| `title` | string | 页面的标题，当标题不可用时为空。 |
| `content` | string | 以 Markdown 文本形式获取的页面内容。 |

> Fetching is subject to the target site's availability and access policies.

获取受目标站点的可用性和访问策略约束。

> ---

（无内容可翻译，遵守规则输出空白）

> ## Errors

## 错误

> Errors follow the OpenAI-compatible error format. The `param` field is always `null`.

错误 遵循 the OpenAI-compatible 错误 格式。 The `param` 字段 总是 `null`。

```json
{
  "error": {
    "message": "'count' must be between 1 and 50",
    "type": "invalid_request_error",
    "param": null,
    "code": "invalid_request_error"
  }
}
```

> | HTTP Status | Description |
> | --- | --- |
> | 400 | The request headers or body are invalid, including malformed JSON or an invalid field value. |
> | 401 | The API key is missing or invalid. |
> | 402 | The account has insufficient balance. |
> | 403 | The Fetch request was rejected by the security policy. |
> | 404 | Fetch could not retrieve usable page content, for example due to an unavailable URL, a URL blocked by site policy, an error from the target site, an unsupported content type, or a page with no extractable Markdown content. |
> | 408 | Reading the request body timed out. |
> | 413 | The request body is too large. |
> | 429 | The Search or Fetch QPS limit was exceeded. |
> | 500 | An internal server error occurred. |
> | 504 | A downstream request timed out. |

| HTTP Status | Description |
| --- | --- |
| 400 | 请求头或请求体无效，包括格式错误的 JSON 或无效的字段值。 |
| 401 | API key 缺失或无效。 |
| 402 | 账户余额不足。 |
| 403 | Fetch 请求被安全策略拒绝。 |
| 404 | Fetch 无法检索可用页面内容，例如由于不可用的 URL、被站点策略阻止的 URL、目标站点错误、不支持的内容类型，或无法提取 Markdown 内容的页面。 |
| 408 | 读取请求体超时。 |
| 413 | 请求体过大。 |
| 429 | 搜索或 Fetch QPS 限制已超过。 |
| 500 | 内部服务器错误。 |
| 504 | 下游请求超时。 |

> Search and Fetch are read-only. For HTTP 408, 429, or 5xx errors, wait and retry. For HTTP 402, top up your account before retrying. Do not retry other 4xx errors without changing the request.

搜索和获取功能仅限读写。对于 HTTP 408、429 或 5xx 错误，请等待后重试。对于 HTTP 402 错误，在重试前请先充值账户。请勿在不修改请求的情况下重试其他 4xx 错误。

> ## Billing

## 费用

> Search and Fetch are billed per successful request, not by tokens or by the number of returned results:

Search 和 Fetch 按成功请求计费，而非按 Token 或返回结果数量计费：

> | API | Unit | Price |
> | --- | --- | --- |
> | Search | Per 1,000 successful requests | $0.75 |
> | Fetch | Per 1,000 successful requests | $0.75 |

| API | 计量单位 | 价格 |
| --- | --- | --- |
| Search | 每 1,000 次成功请求 | $0.75 |
| Fetch | 每 1,000 次成功请求 | $0.75 |

> A request is billable only when it returns HTTP 200 and produces a result (Search must return a non-empty `results` array, and Fetch must return page content). Failed requests, empty search results, and timeouts are not billed. `count` only controls how many results are returned and does not affect the per-request price.

当且仅当请求返回 HTTP 200 并产生结果时才计费（Search必须返回非空的 `results` 数组，Fetch必须返回页面内容）。失败的请求、空搜索结果和超时不计费。`count` 仅控制返回多少结果，不影响每次请求的价格。

> Note: when you use the DeepSeek API through DeepSeek Harness, Claude Code, or Codex, server-side tool calls already hit the Search and Fetch APIs. These calls are currently free of charge; per-request billing starts at 00:00 Beijing time on November 1, 2026.

# 注意

当您通过 **DeepSeek Harness**、**Claude Code** 或 **Codex** 使用 **DeepSeek API** 时，服务器端工具调用已经命中了 **Search** 和 **Fetch APIs**。这些调用目前免费；每次请求计费从 2026年11月1日北京时间 00:00 开始。

> ---

(无输出，因未提供可翻译的英文原文)

> ## Rate Limits

## 速率限制

> For each account, Search and Fetch are limited independently, and traffic to one does not consume the other's quota:

对于每个账户，搜索和获取独立受限，流量到其中一个不消耗另一个的配额：

> | API | QPS Limit |
> | --- | --- |
> | Search | 5 |
> | Fetch | 5 |



| API | QPS 限制 |
| --- | --- |
| Search | 5 |
| Fetch | 5 |

> The QPS (requests per second) limits are calculated at the account level, regardless of which API key is used, and are separate from the model concurrency limits. Requests above the account-level QPS limit receive HTTP 429. In addition to the account-level limit, Fetch is also subject to a per-domain QPS limit, and requests above that limit also receive HTTP 429.

QPS (requests per second) 限制按账户级别计算，无论使用哪个 API key，且与 model concurrency limits 分开。超过账户级别 QPS 限制的请求将返回 HTTP 429。除了账户级别限制外，Fetch 还受 per-domain QPS 限制，超过该限制的请求也将返回 HTTP 429。
