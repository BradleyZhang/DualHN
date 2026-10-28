---
title: "维基百科对AI生成内容的清理"
date: 2026-10-28T09:15:02+08:00
draft: false
source: "Hacker News"
originalTitle: "Inside Wikipedia’s Cleanup Effort Against AI Text"
originalUrl: "https://spectrum.ieee.org/wikipedia-wikiproject-ai-writing-cleanup"
hnUrl: ""
points: 
comments: 
---

> Ellia Lebleu is a cofounder of the WikiProject AI Cleanup effort to keep Wikipedia human-written.

Ellia Lebleu 是 WikiProject AI Cleanup 的联合创始人，旨在保持 Wikipedia 人工撰写。

> Stuart Bradford

斯图尔特·布拉德福德

> Ellia Lebleu is a founding member of [the WikiProject AI Cleanup](https://en.wikipedia.org/wiki/Wikipedia:WikiProject_AI_Cleanup), a volunteer effort launched in 2023 to find and remove AI-generated material from [Wikipedia](https://spectrum.ieee.org/wikipedia-at-25) that breaks the website’s guidelines. When the cleanup began, [AI writing](https://spectrum.ieee.org/ai-scientist-research-paper-format) was often betrayed by conspicuous clichés. Today, the project’s volunteers are developing tools to detect subtler forms of machine-generated content and debating AI’s role in the world’s most widely used encyclopedia.

Ellia Lebleu 是 [the WikiProject AI Cleanup](https://en.wikipedia.org/wiki/Wikipedia:WikiProject_AI_Cleanup) 的创始成员，一个于 2023 年启动的志愿者项目，旨在查找和移除 [Wikipedia](https://spectrum.ieee.org/wikipedia-at-25) 违反其指南的 AI 生成的材料。清理工作开始时，[AI writing](https://spectrum.ieee.org/ai-scientist-research-paper-format) 常常因明显的陈词滥调而露馅。如今，该项目的志愿者们正在开发工具来检测更微妙的机器生成内容，并就人工智能在世界上最广泛使用的百科全书中的作用展开辩论。

> **When did you realize [Wikipedia](https://spectrum.ieee.org/tag/wikipedia) had a problem with AI-generated material?**

**你何时意识到[Wikipedia](https://spectrum.ieee.org/tag/wikipedia) 对 AI 生成的材料存在问题？**

> **Ellia Lebleu:** It was around December 2023. A few other editors and I were chatting on Wikipedia’s Discord server, and we had all seen very strange articles with the same odd characteristics. They repeated phrases like “stands as a testament” or “rich cultural heritage.” They sometimes had conclusion sections, or sections called “Why is this important?” That was very typical of [ChatGPT](https://spectrum.ieee.org/tag/chatgpt) in 2023 and early 2024 but very odd for Wikipedia articles—and very easy to spot. Then I decided, let’s create an official project on Wikipedia so more people can deal with this.



**埃利亚·勒布勒（Ellia Lebleu）：** 那大约是在 2023 年 12 月。我和其他几位编辑在维基百科的 Discord 服务器上聊天，我们都看到了一些具有相同奇特特征的非常奇怪的文章。它们重复着诸如“stands as a testament”或“rich cultural heritage”之类的短语。它们有时还会有结论部分，或者像“Why is this important?”这样的章节。这在 2023 年和 2024 年初的 [ChatGPT](https://spectrum.ieee.org/tag/chatgpt) 中非常典型，但对于维基百科文章来说却非常奇怪——而且很容易被发现。然后我决定，让我们在维基百科上创建一个官方项目，以便更多人来处理这个问题。

> ### Ellia Lebleu



埃利亚·勒布勒

> Ellia Lebleu is a founding member of the WikiProject AI Cleanup. Lebleu is pursuing a Ph.D. in AI at the [Inria Center of the University of Rennes](https://www.inria.fr/fr/centre-inria-universite-rennes), part of France’s national research institute for digital science and technology.

Ellia Lebleu 是 WikiProject AI Cleanup 的创始成员。她正在法国国家数字科学与技术研究所（Inria）下属的 [雷恩大学 Inria 中心](https://www.inria.fr/fr/centre-inria-universite-rennes)  pursuit a Ph.D. in AI.

> **How do editors spot AI-generated writing today?**

**当今编辑如何识别 AI 生成的写作？**

> **Lebleu:** By 2025, the signs of AI writing were becoming subtler and more structural. For example, AI loves the “rule of three,” negative parallelisms, and other structures of speech that aren’t conclusive by themselves but become meaningful as they accumulate. We also look beyond the article. If someone writes five articles of thousands of words each in 5 minutes, there is reason to suspect AI.

**Lebleu：** 到2025 年时，AI 写作的迹象变得更加微妙和结构化。例如，AI 喜欢“三段式法则”、负向平行结构以及其他单独来看并不明显，但随着累积却逐渐显露出意义的语言结构。我们也会超越单篇文章来进行判断。如果某个人在 5 分钟内写了 5 篇数千字的文章，那么就有理由怀疑这可能是 AI 的写作。

> **Does the AI problem just appear in the main text, or also in citations?**

**AI 问题仅出现在正文中，还是也出现在引用中？**

> **Lebleu:** Fake or misleading citations have become a major worry. Sometimes an AI hallucinates a citation entirely, although that’s much rarer today because of retrieval-augmented generation that allows the AI to find sources. More often, it finds a real source but gets its content completely wrong. AI citations that don’t actually support what is being written are extremely commonplace.

**Lebleu:** 虚假或误导性引用已成为一大担忧。有时 AI 会完全幻觉出一个引用，但由于 retrieval-augmented generation 让 AI 能够找到来源，这种情况今天已少得多。更常见的是，它找到了一个真实来源，但完全弄错了其内容。那些并不实际支持正在撰写内容的 AI 引用极为普遍。

> **English Wikipedia recently** [**prohibited editors**](https://en.wikipedia.org/wiki/Wikipedia:Writing_articles_with_large_language_models) **from using LLMs to generate articles. How much AI-generated content is still getting through?**



英文维基百科最近禁止编辑使用 LLM 生成文章。还有多少 AI 生成的内容仍在通过？

> **Lebleu:** I’ve been working with \[AI-detection company\] [Pangram](https://www.pangram.com/) to estimate the proportion of AI-generated content. I tested it on Wikipedia content from before ChatGPT and found no false positives, so its results provide a very conservative lower bound. In late 2025, it flagged perhaps 20 percent of new articles and drafts as AI-generated. In early 2026, that went down to 15 or 16 percent. But we don’t yet know whether that’s because our recent policies have had an effect or because models are getting more powerful and Pangram hasn’t had time to adapt.

**Lebleu:** 我一直在与 \[AI 检测公司\] [Pangram](https://www.pangram.com/) 合作，估算人工智能生成内容的比例。我在 ChatGPT 出现之前的维基百科内容上测试了它，没有发现误报，因此其结果提供了一个非常保守的下限。在 2025 年晚些时候，它将大约 20% 的新文章和草稿标记为 AI 生成的内容。在 2026 年初，这一比例下降到 15% 或 16%。但我们尚不知道这是因为我们最近的政策产生了影响，还是因为模型变得更强大了，而 Pangram 还没有时间跟上。

> **Is Wikipedia using AI to combat AI?**

**Wikipedia 是否在用 AI 对抗 AI？**

> **Lebleu:** Another Wikipedia editor has made an AI source verifier, which goes through the sources on a page and checks whether they match the claims. Since it is itself an AI model, there is no guarantee that it will be correct every time. But if you want something that works at scale and filters out obvious cases, it’s a good first step. The Wikimedia Foundation is also working on a tool called [Paste Check](https://www.mediawiki.org/wiki/Edit_check/Paste_Check), which can flag text pasted directly from some AI [chatbots](https://spectrum.ieee.org/tag/chatbots).

**Lebleu：** 另一位 Wikipedia 编辑开发了一个 AI 来源验证器，它会逐一检查页面上的来源，并核实它们是否与声明相符。由于它本身就是一个 AI 模型，无法保证每次都正确。但如果你需要能够大规模运作并过滤掉明显情况的工具，这是一个不错的第一步。Wikimedia 基金会也在开发名为 [Paste Check](https://www.mediawiki.org/wiki/Edit_check/Paste_Check) 的工具，它可以标记直接从某些 AI chatbots 粘贴的文本。

> And we’ve seen Claude sometimes say, “I can’t write a Wikipedia article; it would go against Wikipedia’s policies.” If all major AI companies implemented that kind of prompt refusal, it wouldn’t solve the problem entirely, because there are still open-weight models that can be tweaked to avoid restrictions. But it would help with people who use commercial models and aren’t especially familiar with the technology.

我们有时会看到 Claude 回答说：“我不能编写维基百科文章，这违反了维基百科的政策。”如果所有主要 AI 公司都能采取这种拒绝执行提示的做法，问题或许仍无法完全解决，因为仍然存在可以被调整以绕过限制的开源权重模型。但这将对那些不熟悉技术的商业模型用户有所帮助。

> **Can you tell if the rule prohibiting AI writing is working?**

你能判断出禁止 AI 写作的规则是否起作用了吗？

> **Lebleu:** It’s still a little early to tell. We see possible effects, such as prompt refusal and the apparent slight drop in AI-generated content. But again, we don’t yet know if that is because models are getting better or because beginners are learning the rules. The vast majority of AI-generated content is submitted by beginner editors, so we’ve made many efforts to make the rule very visible in welcome messages, editing help, and advice.

Lebleu：目前下结论仍为时过早。我们观察到一些可能的影响，例如提示词拒答以及 AI 生成内容的明显轻微下降。但同样，我们尚不清楚这是由于模型性能提升，还是因为新手编辑者学会了规则。绝大多数 AI 生成内容均由新手编辑者提交，因此我们做出诸多努力，在欢迎留言、编辑帮助和建议中让规则高度显眼。

> **What if AI becomes capable of writing truly reliable Wikipedia articles?**

**如果 AI 能够撰写真正可靠的 Wikipedia 条目会怎样？**

> **Lebleu:** That’s one of the big questions we’re facing. When the guideline was passed, it was for very practical reasons: We were flooded with AI content, we didn’t have good tools, and we needed to put a stop to it. But since then, it has taken on a more philosophical dimension. Many people have called Wikipedia “the last good place on the internet.” Being a place that was, in theory, free from AI slop has become part of Wikipedia’s identity.

Lebleu: 这是我们面临的一个重大问题。当指南通过时，这是出于非常实际的原因：我们被AI内容淹没，没有好的工具，需要阻止它。但自那时起，它已经有了更哲学的维度。许多人称Wikipedia为“互联网上最好的地方”。作为一个理论上自由于AI slop的地方，这已成为Wikipedia身份认同的一部分。

> A lot of Wikipedia’s communication is now centered on the idea that we’re a human-written encyclopedia. Even AI companies find that interesting. It can be valuable to have a purely human-written corpus on which to \[train\] AI systems. The fact that Wikipedia is still that, and will remain that for at least the near future, makes it a precious resource that isn’t replicated anywhere else.



维基百科的许多对外沟通现在都围绕着我们是一个由人类撰写的百科全书这一理念展开。甚至 AI 公司也觉得这很有趣。拥有一个纯粹由人类撰写的语料库来训练 AI 系统，是非常有价值的。维基百科目前依然如此，且至少在近期内仍将保持这一状态，这一事实使其成为一个在其他任何地方都无法复制的宝贵资源。

> But will the people who read and contribute to Wikipedia want it to become partially AI-generated if that makes it more comprehensive? We could preserve Wikipedia’s identity as a human-written corpus while also offering an AI-assisted option.

但是，阅读并为 Wikipedia 贡献内容的人们，是否愿意让它变成部分由 AI 生成，即便这能让它更加全面？我们可以保留 Wikipedia 作为人类编写库的身份，同时提供 AI 辅助选项。

> **Has Wikipedia reckoned with the idea of “Google Zero”—a possible future in which websites no longer get traffic from [Google](https://spectrum.ieee.org/tag/google) search?**

维基百科是否已经面对了“Google Zero”的概念——也就是一种可能的未来，维基百科等网站不再从 Google 搜索中获得流量的情景？

> **Lebleu:** If everything goes through AI search and websites plummet to zero visibility, how do we expose Wikipedia and show that it can be edited and that people can still contribute? Wikipedia is frequently cited in \[Google’s\] AI Overviews, but users may only see an AI answer citing Wikipedia. They may not realize that Wikipedia is a living project they can edit and contribute to.

**Lebleu：** 如果所有内容都通过 AI 搜索呈现，导致网站能见度降至零，我们该如何展示 Wikipedia，让人们知道它是可以编辑的，并且任何人仍然可以贡献内容？Wikipedia 经常被 [Google] 的 AI Overviews 引用，但用户可能只能看到引用 Wikipedia 的 AI 答案。他们可能没有意识到 Wikipedia 是一个活跃的项目，他们可以对其进行编辑和贡献。

> The Wikimedia Foundation is working on an attribution framework that could give AI users more information about the article \[being cited\]: when it was last edited, how comprehensive it is, whether editors have flagged problems, and perhaps even a call to action. In the future, readers might even contribute through [AI models](https://spectrum.ieee.org/tag/ai-models): “The AI cited Wikipedia, but there seems to be an error. Can I make an edit request and add this other source I found?”

维基媒体基金会正在开发一个归因框架，能够为 AI 用户提供关于文章 [being cited] 的更多信息，包括最后编辑时间、内容的全面程度、编辑是否标记了问题，以及可能的呼吁行动。未来，读者甚至可能通过 [AI models](https://spectrum.ieee.org/tag/ai-models) 参与贡献：“The AI 引用了 Wikipedia，但似乎有错误。Can I make an edit request and add this other source I found?”

> I can see a very strong symbiotic relationship between Wikipedia and AI models in the future. I don’t see Wikipedia disappearing, but I can see it taking a very different shape. Yesterday, AI was something to clean up. Today, it’s a tool to help us with the cleanup. Tomorrow, it will be the air we breathe.

我认为维基百科和未来的AI模型之间存在着非常紧密的共生关系。我不认为维基百科会消失，但它会以一种完全不同的面貌呈现。昨天，AI还是一个清理工具；今天，它变成了帮助我们清理的工具；明天，它将成为我们呼吸的一部分。

> *A condensed version of this article appears in the November 2026 print issue as “Ellia Lebleu.”*

*A本文的精简版本于 November 2026 印刷版上发表 as “Ellia Lebleu”。*
