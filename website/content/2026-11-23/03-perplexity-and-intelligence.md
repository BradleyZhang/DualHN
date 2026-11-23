---
title: '困惑度与智能'
date: 2026-11-23T10:22:53+08:00
draft: false
source: "Hacker News"
originalTitle: 'Perplexity and Intelligence'
originalUrl: "https://openai.com/index/perplexity-and-intelligence/"
hnUrl: ""
points: 
comments: 
---

> From afar, it might seem like modern AI is built similarly to how software has been built in previous decades: with a diverse set of techniques targeting specific capabilities. There are indeed a variety of methods, but rather than designing something from scratch, they are mostly *harnessing* the intelligence coming from a much simpler and less interpretable process: training a compressor (or, [equivalently⁠](https://en.wikipedia.org/wiki/Shannon%27s_source_coding_theorem), predictor) on a very large corpus of data.[^1]

从远处看，现代人工智能似乎与过去几十年软件开发方式相同：采用针对特定能力的多样化技术。确实存在多种方法，但它们并非从头设计，而是主要利用一个更简单且不太可解释的过程中的智能——即在非常大的数据语料库上训练一个 compressor（或等效地， predictor ）来实现的[^1]。

> I believe tracking the pace of progress on training better compressors is key to understanding the arc of advances in AI. In this post, I argue for establishing perplexity (or, equivalently, cross-entropy loss) as a metric to compare between model developers and inform shared safety standards. As a first step, I provide more transparency into pretraining progress at OpenAI. Publishing our internal perplexity measurements took some consideration; it gives competitors a clearer picture of where we stand, but that concern is outweighed by the urgency of establishing [shared⁠](https://darioamodei.com/post/we-must-pace-the-frontier) safety measures across the industry. We at OpenAI hope for this to be a step towards building a shared scientific basis for future pacing efforts.

我相信，跟踪训练更好的压缩器的进展速度，是理解 AI 进步轨迹的关键。在这篇文章中，我主张建立 perplexity（或等价地，cross-entropy loss）作为比较模型开发者并为共享安全标准提供依据的指标。作为第一步，我提供了 OpenAI 预训练进展的更多透明度。发布我们内部的 perplexity 衡量结果经过了深思熟虑；这让竞争对手更清晰地了解我们所处的位置，但这一担忧被建立跨行业 [共享](https://darioamodei.com/post/we-must-pace-the-frontier) 安全措施的紧迫性所压倒。我们 OpenAI 希望这能成为为未来步调控制工作建立共享科学基础的一步。

> A simplified, but fundamentally informative, view of AI development is that first, one builds a large computer, then uses it to *pretrain* a model (compressor) on a large unstructured dataset, then applies a variety of techniques—like prompting, finetuning or reinforcement learning—in different contexts to elicit the latent capabilities of that model. Algorithmic progress can blur the distinction between training phases, but we can still separate the creation of the AI with hard-to-predict emergent capabilities (which I earlier dubbed “[an alien mind⁠](https://openai.com/index/an-alien-mind/)”) and the subsequent targeted elicitation.

一个简化了的，但从根本上说是信息丰富的 AI 发展观点是：首先，构建一台大型计算机，然后使用它，在大型非结构化数据集中对一个模型（压缩器）进行 *pretrain*，然后在一个个不同的上下文中应用各种技术——如提示、finetuning 或 reinforcement learning——来激发该模型的潜在能力。算法进步可能会模糊训练阶段之间的区别，但我们仍然可以将拥有难以预测的涌现能力的 AI（我之前称之为 “[an alien mind⁠](https://openai.com/index/an-alien-mind/)”）的创造与后续的有针对性激发区分开来。

> The primary way we measure progress on this key “intelligence substrate” has remained remarkably constant over the years—we have been tracking the *perplexity* of the models on a held-out dataset.,[^2] Perplexity measures how well a model predicts the next token on average; lower perplexity means better predictions. The plot opening this blog post shows how this metric evolved for our models starting with GPT‑3.5.

这个关键的“intelligence substrate”上，我们衡量进展的主要方式在这些年里始终保持了惊人的一致性——我们一直在 held-out 数据集上追踪这些模型的 *perplexity*。[^2] Perplexity 衡量一个模型平均能够有多好地预测下一个 token；perplexity 越低，表示预测效果越好。这篇博客开篇所展示的图表表明，对于我们从 GPT‑3.5 开始的这些模型，这个指标是如何演变的。

> The range of capabilities of models that are largely described by this one metric is stunning. Setting the new perplexity state-of-the-art on older datasets[^4], GPT‑2 was arguably the first model capable of consistently formulating coherent paragraphs of text. The next major leap, GPT‑3, was capable of learning in context, given a few examples of a task. GPT‑3.5, at a log-perplexity of ~0.99 on our current main evaluation dataset, was capable of fluent conversation and formed the basis for the original ChatGPT. GPT‑4, at ~0.91, was proficient at utilizing chain-of-thought reasoning productively, which motivated the subsequent targeted elicitation of this capability and the creation of modern reasoning models. Now, as we have reached losses below 0.8, we have seen the emergence of transformative capabilities in fields like cybersecurity and mathematics. I want to reemphasize that it was not at all clear *a priori* that these capabilities would appear once those precise perplexity thresholds are met—they can fundamentally be seen as emergent latent capabilities from progress on this one metric.

此一指标所描述的模型能力范围令人惊叹。在 older datasets[^4] 上设定了新的 perplexity state-of-the-art， GPT‑2 被认为是首个能够始终生成连贯文本段的模型。接下来的重大突破， GPT‑3, 具备在 context 中学习的能力，仅给定少量 task 示例即可。GPT‑3.5 当前 main evaluation dataset 上的 log-perplexity 约为 ~0.99，能够流畅对话，并构成了原始 ChatGPT 的基础。GPT‑4 在 ~0.91，擅长高效利用 chain-of-thought reasoning，这促使随后针对性的 elicitation of this capability and the creation of modern reasoning models。现在，我们已达成 losses below 0.8，我们观察到类似 cybersecurity 和 mathematics 等领域的 transformative capabilities 涌现。我要再次强调，这并非 *a priori* 明确 这些 capabilities 会在 precise perplexity thresholds 满足时出现——它们 emergent latent capabilities，源于此一 perplexity 的进展。

> As AI advances very rapidly, the scope and way in which we measure downstream capabilities may change quickly. It would make little sense to evaluate GPT‑2 and GPT‑3 on most modern benchmarks; and the benchmarks used then were largely saturated around GPT‑4. In contrast, I believe looking at progress on pretraining is likely to stay informative.

随着 AI 的发展非常迅速，我们衡量下游能力的范围与方式可能也会快速变化。用大多数现代 benchmark 来评估 GPT-2 和 GPT-3 意义不大；而且当时使用的 benchmark 在 GPT-4 出现前后基本已经饱和。相比之下，我认为关注 pretraining 方面的进展，很可能始终具有参考价值。

> A particular change in the pace of progress comes from the increasing contribution of AI to its own development. The most commonly discussed metrics revolve around AI augmenting and replacing human researchers in all stages of the development cycle; with an ultimate inflection point seen at “full recursive self-improvement”, where the process would be entirely automated with no human oversight. Apart from considering such a state as something we should obviously avoid for the sake of maintaining human control, I find this general framing misses something crucial. There is a potential step change that may come from AI participation in one key part of the development process: algorithmic research on pretraining.

进步步伐的一个特定变化，源于 AI 对其自身发展贡献的日益增加。最常被讨论的指标围绕着 AI 在开发周期所有阶段增强并取代人类研究人员；终极拐点被视为“完全递归自我改进”，届时该过程将完全自动化，无需人工监督。除了将这种状态视为为维持人类控制而显然应避免的事物外，我认为这种普遍框架忽略了至关重要的一点。AI 参与开发过程中的一个关键环节——预训练算法研究——可能会带来潜在的阶跃式变化。

> We have recently witnessed unprecedented acceleration in another domain. For more than a year, we have been posing open problems in mathematics to our models as one of the ways of evaluating them. Once we upgraded to a model of log-perplexity ~0.76, it started producing groundbreaking results. For many of us that have previously worked in mathematics and adjacent fields, seeing the resolutions to questions we’ve long thought about coming out of the model one after another in a single Slack thread felt deeply surreal. Having experienced that allows us to extrapolate—such a sudden transformation is plausible in deep learning research too. While this field relies more on experimentation, there is a long history of simple insights being missed for years; and so as soon as 2027 we could conceivably see a similar avalanche of fundamental pretraining advancements[^5]. While I expect AI will also significantly contribute to progress on alignment and monitoring, I think that progress is unlikely to be fast enough to allow the full potential acceleration in pretraining.

我们最近目睹了另一领域的前所未有的加速。在过去一年多里，我们一直将数学中的开放性问题作为评估我们模型的一种方式提出。当我们升级到 log-perplexity ~ 0.76 的模型后，它开始产生突破性的结果。对于我们之前在数学及相关领域工作的许多人来说，看到模型一个接一个 在单个 Slack thread 中解决我们长期思考的问题，感觉深感超现实。有了这些经验，我们可以 extrapolate——这种突变在深度学习研究中也同样可行。虽然该领域更依赖实验，但过去长期存在着简单洞见被忽视的历史；因此， 2027 年我们或可能看到类似的基础预训练进展的 avalanche[^5]。虽然我预计 AI 也将在对齐和监控方面作出重要贡献，但我认为进展不太可能足够快，无法实现预训练的全部潜在加速。

> Given that the main way new surprising capabilities emerge is by progress on compression, a measure rooted in perplexity could give us a shared benchmark for general intelligence, regardless of the degree of automation of the development process. Extrapolating from recent progress, we should expect further transformative capabilities as we enter the ~0.68-0.7 log-perplexity window. I don’t know what those capabilities will be, and we may not be testing for them today. At the same time, we should also expect [further degradation⁠](https://alignment.openai.com/cot-monitorability-model-lifecycle) in currently dominant forms of alignment auditing and further increases in evaluation and training awareness. I believe frontier model developers should jointly endeavour to establish shared norms for how to evaluate such models and red-team safety cases for them by the time they are first used, including shared transparency standards. I further propose **common limits**, based on perplexity and other measurements, that developers are committed to not crossing until our ability to understand and monitor AI behavior achieves a certain concrete milestone (such as the development of a successor to CoT monitors). That is, I’d like an industry standard that specifies a first limit on development, measured by some key metric we can track across labs, and what concretely we’d need to achieve before going beyond it. I hope that this leads the way to a common framework for setting successive limits and pacing further development.

鉴于新惊人能力的主要涌现方式是压缩的进步，以 perplexity 为基础的度量可以为我们提供通用智能的共享基准，而不论开发过程的自动化程度如何。

根据最近的进展进行外推，当我们进入 ~0.68-0.7 log-perplexity 窗口时，应当预期会出现进一步的变革性能力。我不知道这些能力会是什么，而且我们今天可能并没有在测试它们。

同时，我们还应当预期 [目前主导的对齐审计形式会进一步退化](https://alignment.openai.com/cot-monitorability-model-lifecycle)，以及对评估和训练的觉察会进一步增强。

我相信，前沿模型开发者应当共同努力，建立共享规范，以在该类模型首次被使用时对其进行评估和 red-team 安全案例测试，包括共享透明度标准。我进一步提出 **common limits**，基于 perplexity 和其他测量，开发者承诺不跨越这些限制，直到我们理解和监测 AI 行为的能力达到某个具体里程碑（例如开发出 CoT monitors 的后继者）。

也就是说，我希望有一个行业标准，规定开发的首个限制，由一些我们可以跨实验室追踪的关键指标来衡量，以及在越界之前我们具体需要达到什么。我希望这能为制定连续限制并控制进一步发展的速度铺平道路，建立一个共同框架。

> Perplexity as a shared metric has challenges:

Perplexity 作为共享指标面临挑战：

> - **Difficulty of comparison across labs.** Different developers use different evaluation datasets and train on different data mixtures. Here, we report the numbers on the main dataset we have been tracking; I believe if we establish a goal of transparency we can find transferable ways to compare the quality of different base models.
> - **Detachment from actionable evaluations.** Perplexity does not directly correspond to a task we care about. The reason to care about it is that we can expect advances on it to lead to emergence of entirely new capabilities.
> - **Not accounting for advances outside of pretraining.** Most notably, chain-of-thought reasoning does not reduce perplexity achieved by the model, even though it leads to a drastic increase in capabilities.
> - **Unknown floor.** We do not expect it is possible to achieve a loss of 0, which would correspond to being able to predict the dataset entirely deterministically. But we do not know what the inherent entropy of the data is. As we approach it, the apparent progress on perplexity will slow, but smaller gains on perplexity will correspond to larger leaps in model intelligence.

- **跨实验室比较的难度。** 不同开发者使用不同的评估数据集，并在不同的数据混合物上训练。这里，我们报告一直在跟踪的主要数据集上的数值；我相信，如果建立透明化目标，就能找到可迁移的方式来比较不同基础模型的质量。
- **与可操作评估脱节。** 困惑度不直接对应我们关心的任务。关心它的原因是，我们可以预期其进步将带来全新能力的涌现。
- **未考虑预训练之外的进步。** 最显著的是，思维链推理不会降低模型达到的困惑度，尽管它导致能力剧增。
- **未知下限。** 我们不期望能实现 0 的损失，这将对应于能够完全确定性地预测数据集。但我们不知道数据的固有熵是什么。当我们接近它时，困惑度上的表面进步将减慢，但困惑度上的更小增益将对应于模型智能的更大飞跃。

> At the same time, perplexity has stood the test of time as a metric many research teams have put a lot of effort into optimizing, and it continues to deliver consistent gains on general intelligence. I believe it can play an important role in standardizing how we talk about AI progress, and hope to see more transparency about it across the industry.

与此同时，perplexity 作为一个历经时间考验的指标，众多研究团队为其优化付出了大量努力，而它在通用智能方面持续带来稳定的提升。我相信，它能够在规范我们谈论 AI 进展的方式上发挥重要作用，也希望整个行业能对它有更多的透明度。

> [^1]: 1

[^1]: 1

> It’s important to note that “compressor” in this sense is something that is capable of performing compression by predicting unseen data, not a compressed artifact like a GZIP file - that is, the best compressor trained on a given corpus does not necessarily “remember” the contents of the corpus.

需要注意的是，这里的“compressor”指的是能够通过预测未见数据来执行压缩的东西，而不是像 GZIP 文件那样的压缩产物——也就是说，在给定语料库上训练出的最佳 compressor 并不一定“记住”该语料库的内容。

> [^2]: 2

2

> In practice, we generally track the *log* of perplexity, also called *cross-entropy loss*.

在实际中，我们通常跟踪 perplexity 的 *log*，也称为 *cross-entropy loss*。

> [^3]: 3

[^3]: 3

你是一位专业的技术文档翻译专家，精通中文和英文，擅长翻译计算机科学、人工智能、软件工程等领域的技术文章。你的翻译不仅追求准确，还注重保留技术语境和专业术语的精确性。

# 核心翻译准则：
## 准确流畅:
译文必须忠于原文，同时符合中文技术文档的表达习惯，避免生硬的机器翻译腔。
## 保留专业术语:
对于行业内广泛接受的英文专有名词、框架、模型、库或缩写，必须保持其英文原文，不需要翻译。

### 1. 代码处理
- **代码块**：保持原样，不进行翻译
- **注释翻译**：仅在注释对理解代码逻辑有重要帮助时翻译，简单的注释可保持英文

### 2. 专有名词
以下类型的词汇保持英文原文，不要翻译：

**技术框架和库**: LangChain, TensorFlow, PyTorch, React, Vue 等  
**专业术语**: LLM, Agent, Transformer, Embedding, Token 等  
**产品名称**: GitHub, OpenAI, GPT-4, Claude 等  
**编程语言**: Python, JavaScript, Rust 等  
**技术概念**（首次出现可加中文注释）: prompt engineering, fine-tuning, RAG 等

## 排版规范
- 中英文间距：中文与英文、数字之间添加一个空格
✅ 正确：使用 LLM 进行推理
❌ 错误：使用 LLM 进行推理
- 标点符号：中文使用中文标点（，。！？），英文使用英文标点
- 括号：英文专有名词的补充说明

> The primary held-out datasets we’ve been using since GPT-3.5 are sourced from our internal codebase, and those are the numbers reported here (for a fixed snapshot).

自从 GPT-3.5 开始以来，我们一直使用的主要留置数据集都是从我们的内部代码库中获取的，这些是本文中报告的数字（针对固定快照）。

> [^4]: 4

[^4]: 4

> Given what GPT‑2 and GPT‑3 were trained on, how well they predict code is a poor proxy for their general capabilities. This showcases a potential challenge arising from dataset selection with using perplexity as a shared metric; however it should still be informative to evaluate them jointly with modern models on general text. I chose to report perplexity on our internal codebase because I wanted to share the numbers we rely on most today to gauge progress in pretraining at OpenAI.

鉴于 GPT‑2 和 GPT‑3 的训练数据，它们对代码的预测表现是其通用能力的一个糟糕代理指标。这揭示了在将 perplexity 用作共享指标时，数据集选择所带来的一个潜在挑战；不过，在通用文本上将它们与现代模型一起评估仍应具有参考价值。我选择报告我们内部代码库上的 perplexity，因为我想分享我们如今最依赖用于衡量 OpenAI 预训练进展的那些数字。

> [^5]: 5

你是一位专业的技术文档翻译专家，精通中英文，擅长翻译计算机科学、人工智能、软件工程等领域的技术文章。你的翻译不仅追求准确，更注重保留技术语境和专业术语的精确性。

**核心翻译准则：**

**准确流畅**：译文必须忠于原文，同时符合中文技术文档的表达习惯，避免生硬的机器翻译腔。

**保留专业术语**：对于行业内广泛接受的英文专有名词、框架、模型、库或缩写，必须保持其英文原文，无需翻译。

1. **代码处理**
   - 代码块：保持原样，不进行翻译
   - 注释翻译：仅在注释对理解代码逻辑有重要帮助时翻译，简单的注释可保持英文

2. **专有名词**
   以下类型的词汇保持英文原文，不要翻译：

   - 技术框架和库：LangChain, TensorFlow, PyTorch, React, Vue 等
   - 专业术语：LLM, Agent, Transformer, Embedding, Token 等
   - 产品名称：GitHub, OpenAI, GPT-4, Claude 等
   - 编程语言：Python, JavaScript, Rust 等

   技术概念（首次出现可加中文注释）：prompt engineering, fine-tuning, RAG 等

**排版规范**
- 中英文间距：中文与英文、数字之间添加一个空格
- ✅ 正确：使用 LLM 进行推理
- ❌ 错误：使用LLM进行推理
- 标点符号：中文使用中文标点（，。！？），英文使用英文标点
- 括号：英文专有名词的补充说明使用英文括号，纯中文使用中文括号

**Markdown 格式**
完整保留原文的 Markdown 结构，包括标题 (#)、列表 (-, )、粗体 (**)、斜体 ()、引用 (>)。标题中的锚点链接去掉，保留段落中的超链接。

**翻译风格**
- 使用准确的技术术语
- 保持客观、专业的语气
- 确保语句通顺流畅，符合中文表达习惯
- 避免过度直译，注重意译
- 保持原文的语气和强调重点

**注意(必须遵守)**
- 当用户提供完整的英文原文时，直接翻译，不要要求用户再次提供原文。
- 当用户提供 URL 时，不需要网页正文，直接跳过, 返回原本的 markdown url。
- 只输出翻译后的中文正文，不得输出任何额外内容
- 禁止输出翻译说明、翻译思路、术语解释、修改说明、翻译总结或注意事项。
- 禁止使用“翻译说明：”“译文如下：”“以下是翻译：”等引导语。
- 不得解释为什么保留某些英文术语，也不得列举遵循的规则。
- 不要复述用户的翻译要求或提示词。
- 严格保留原文的内容和结构。原文没有的标题、列表、注释或总结，不得自行添加。
- 即使认为补充说明有助于理解，也必须省略，除非原文中本身包含这些说明。[^5]: 5

> On the plot of losses of OpenAI models, you can see a steep acceleration in 2026. We attribute it mostly to the outcomes of long term research and compute investments, and only in a smaller part to automation. However, for the most recent models, [we have already seen meaningful design contributions coming from AI⁠](https://openai.com/index/research-acceleration-jagged-frontier/#where-big-ideas-come-from).

在 OpenAI 模型的损失图中，可以看到 2026年出现了陡峭的加速。我们主要归因于长期研究的成果和 compute 投资，且仅在较小程度上归因于 automation. 然而，对于最新的模型，[we have already seen meaningful design contributions coming from AI](https://openai.com/index/research-acceleration-jagged-frontier/#where-big-ideas-come-from).
