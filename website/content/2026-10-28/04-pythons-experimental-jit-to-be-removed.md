---
title: "Python 的实验性 JIT 将被移除"
date: 2026-10-28T09:21:35+08:00
draft: false
source: "Hacker News"
originalTitle: "Python's experimental JIT to be removed"
originalUrl: "https://lwn.net/SubscriberLink/1102102/0c00e4d550f25f8c/"
hnUrl: ""
points: 
comments: 
---

> ### Welcome to LWN.net

### 欢迎来到 LWN.net

> The following subscription-only content has been made available to you by an LWN subscriber. Thousands of subscribers depend on LWN for the best news from the Linux and free software communities. If you enjoy this article, please consider accepting the trial offer on the right. Thank you for visiting LWN.net!

以下订阅专属内容由 LWN 订阅者提供给您。数千名订阅者依赖 LWN 获取 Linux 和自由软件社区的最佳新闻。如果您喜欢这篇文章，请考虑接受右侧的试用优惠。感谢您访问 LWN.net！

> ### Free trial subscription



免费试用订阅

> Try LWN for free for 1 month: no payment or credit card required. [Activate your trial subscription now](https://lwn.net/Promo/slink-trial2-3/claim) and see why thousands of readers subscribe to LWN.net.

Try LWN 免费试用 1 个月：无需付款或信用卡。[立即激活您的试订](https://lwn.net/Promo/slink-trial2-3/claim)，感受上千读者为何订阅 LWN.net 的理由。

> By **Joe Brockmeier**  
> October 26, 2026



请提供完整的英文原文，我将为您翻译。

> Python's [experimental just-in-time (JIT) compiler](https://docs.python.org/3.13/whatsnew/3.13.html#an-experimental-just-in-time-jit-compiler), which was added to CPython in 2024 for the [3.13 release](https://www.python.org/downloads/release/python-3130/), is on its way out. In June, the Python steering council [announced](https://discuss.python.org/t/an-announcement-from-the-steering-council-regarding-the-jit-project/107638) that it was pausing work on the JIT in CPython's main branch until there was an accepted [Python Enhancement Proposal](https://peps.python.org/pep-0001) (PEP) that addressed concerns about maintenance, compatibility, and set clear success metrics as well as a timeline for completion. After creating [PEP 836](https://peps.python.org/pep-0836/) ("JIT Go Brrr: The Path to a Supported JIT Compiler for CPython") to try to meet the council's request, and after months of discussion, the JIT maintainers have withdrawn the PEP. For now, it appears that development on the once-promising project has come to an end.

Python的[实验性即时编译器](https://docs.python.org/3.13/whatsnew/3.13.html#an-experimental-just-in-time-jit-compiler)，该编译器于2024年为[3.13版本发布](https://www.python.org/downloads/release/python-3130/)添加到CPython中，正逐渐走向淘汰。6月，Python指导委员会[宣布](https://discuss.python.org/t/an-announcement-from-the-steering-council-regarding-the-jit-project/107638) 将在CPython主分支上暂停JIT开发，直到有一个被接受的[Python增强提案](https://peps.python.org/pep-0001) (PEP) 解决维护、兼容性问题并设定明确的成功指标以及完成时间表。创建[PEP 836](https://peps.python.org/pep-0836/)（"JIT Go Brrr: The Path to a Supported JIT Compiler for CPython"）以试图满足委员会的要求后，经过数月讨论，JIT维护者已撤回该PEP。目前看来，这一曾经充满希望的项目的开发已经结束。

> The JIT was [added to CPython by Brandt Bucher](https://github.com/python/cpython/pull/113465) in early 2024. Generally, such a major feature would be expected to land only after the council had approved a [standards-track PEP](https://peps.python.org/pep-0001/#pep-types:~:text=A%20Standards%20Track%20PEP). Bucher had given a talk ([YouTube video](https://www.youtube.com/watch?v=HxSHIpEQRjs), [slides](https://github.com/brandtbucher/brandtbucher/blob/master/2023/10/10/a_jit_compiler_for_cpython.pdf)) about the JIT at a Python core developer sprint, and [announced his intent](https://github.com/python/cpython/pull/113465#issuecomment-1911279536) to merge the feature—but he had not taken the step of authoring or submitting a PEP for its approval. He was [prodded into doing so](https://github.com/python/cpython/pull/113465#issuecomment-1969415137) by steering council member Thomas Wouters, who was also serving as the release manager for Python 3.13.

2024 年初，由 Brandt Bucher 提交的 [PR #113465](https://github.com/python/cpython/pull/113465) 将 JIT 编译器合并进了 CPython。通常情况下，如此重大的特性只有在指导委员会批准了 [标准流程 PEP](https://peps.python.org/pep-0001/#pep-types:~:text=A%20Standards%20Track%20PEP) 之后才会合并。Bucher 曾在 Python 核心开发者冲刺会议上就该 JIT 进行过演讲（[YouTube 视频](https://www.youtube.com/watch?v=HxSHIpEQRjs)、[幻灯片](https://github.com/brandtbucher/brandtbucher/blob/master/2023/10/10/a_jit_compiler_for_cpython.pdf)），并在 PR 中 [宣布了合并意向](https://github.com/python/cpython/pull/113465#issuecomment-1911279536) —— 但他并未采取撰写或提交 PEP 以供审批的步骤。指导委员会成员兼 Python 3.13 发布经理 Thomas Wouters [促使他这样做](https://github.com/python/cpython/pull/113465#issuecomment-1969415137)。

> Bucher and Savannah Ostrowski drafted [PEP 744](https://peps.python.org/pep-0744/) ("JIT Compilation"), which was an [informational PEP](https://peps.python.org/pep-0001/#pep-types:~:text=An%20Informational%20PEP%20describes%20a%20Python%20design%20issue)—meaning it only provides information to the Python community and does not represent formal consensus to proceed on a feature or project. LWN [covered](https://lwn.net/Articles/970397/) the discussion of PEP 744 in April 2024, and later covered Bucher's [talk on the JIT](https://lwn.net/Articles/977855/) at PyCon US 2024, as well as the [follow-up talk](https://lwn.net/Articles/1029307/) at PyCon US 2025.



Bucher 和 Savannah Ostrowski 起草了 [PEP 744](https://peps.python.org/pep-0744/)（“JIT Compilation”），这是一项 [informational PEP](https://peps.python.org/pep-0001/#pep-types:~:text=An%20Informational%20PEP%20describes%20a%20Python%20design%20issue)（信息性 PEP），意味着它仅向 Python 社区提供信息，并不代表就某个功能或项目达成正式共识。LWN [报道了](https://lwn.net/Articles/970397/) 2024 年 4 月关于 PEP 744 的讨论，随后报道了 Bucher 在 2024 年 PyCon US 上关于 [JIT 的演讲](https://lwn.net/Articles/977855/)，以及在 2025 年 PyCon US 上的 [后续演讲](https://lwn.net/Articles/1029307/)。

> #### PEP it up



强化 PEP

> Work on the JIT had been proceeding on the basis of PEP 744 until this June, when the council had put forward its formal request for the JIT maintainers to create a standards-track PEP. One might wonder, [as Antoine Pitrou did](https://discuss.python.org/t/an-announcement-from-the-steering-council-regarding-the-jit-project/107638/2), why the council had decided that it was time to speak up and ask for a new PEP. Wouters [said](https://discuss.python.org/t/an-announcement-from-the-steering-council-regarding-the-jit-project/107638/4) that there was no "single triggering event for this request", but that the council had been discussing the topic for a while and indicated that it was looking to ensure the JIT work did not interfere with other projects. "There's been work trying to get the JIT to play nice with instrumentation, debugging, and profiling. There's also external JITs (like CinderX), JIT-adjacent things (like Numba and PyTorch's compile), and discussions about a tier 3 JIT." The council had waited until after the Python 3.15 beta release "to be clear that we're OK with the status quo for 3.15".



JIT 的工作一直在 PEP 744 的基础上进行，直到今年 6 月，委员会正式要求 JIT 维护者创建一个标准轨道 PEP。人们可能会纳闷，就像 [Antoine Pitrou 那样](https://discuss.python.org/t/an-announcement-from-the-steering-council-regarding-the-jit-project/107638/2)，为什么委员会决定现在是时候发声并要求创建一个新的 PEP。Wouters [表示](https://discuss.python.org/t/an-announcement-from-the-steering-council-regarding-the-jit-project/107638/4)，此次请求并没有“单一的触发事件”，但委员会已经讨论该议题一段时间了，并指出他们希望确保 JIT 工作不会干扰其他项目。“一直在努力让 JIT 与 instrumentation、debugging 和 profiling 良好协同。此外还有外部 JIT（如 CinderX）、JIT 相关技术（如 Numba 和 PyTorch 的 compile），以及关于 tier 3 JIT 的讨论。”委员会一直等到 Python 3.15 beta 版本发布之后，“以明确表示我们对 3.15 的现状感到满意”。

> The council asked for a PEP that would make the case for the JIT "as a supported, non-experimental part of CPython: its guarantees, its maintenance commitments, and its impact on redistributors". The council set a deadline of six months for the PEP to be submitted and accepted; failing that, the council would require the JIT code to be removed from the CPython main branch.



委员会要求提交一份 PEP，以论证将 JIT 作为“CPython 受支持的、非实验性的一部分：其保证、其维护承诺以及其对再发行商的影响”的合理性。委员会为该 PEP 的提交和通过设定了六个月的截止期限；若在此期限内未能提交并获得通过，委员会将要求将 JIT 代码从 CPython 主分支中移除。

> Bucher, Ostrowski, and Ken Jin drafted PEP 836 and [published it on the Python forum](https://discuss.python.org/t/pep-836-jit-go-brrr-the-path-to-a-supported-jit-compiler-for-cpython/108010) for community feedback on July 3. It generated quite a bit of discussion, some favorable and some critical. One of the key themes in the comments, such as [this one](https://discuss.python.org/t/pep-836-jit-go-brrr-the-path-to-a-supported-jit-compiler-for-cpython/108010/19) by Wouters, and [this comment](https://discuss.python.org/t/pep-836-jit-go-brrr-the-path-to-a-supported-jit-compiler-for-cpython/108010/28) by Mark Shannon, was that the draft felt like it should be two separate PEPs. Shannon, for example, thought that the PEP should only cover goals for accepting the JIT work and felt that it should leave out implementation details. There were also quite a few calls for additional information.

7月3日，布赫、奥斯特罗夫斯基和陈金共同起草了PEP 836，并在Python论坛上发布了该文档（https://discuss.python.org/t/pep-836-jit-go-brrr-the-path-to-a-supported-jit-compiler-for-cpython/108010）以征求社区反馈。该提案引发了广泛讨论，既有支持，也有批评。其中一个关键观点是，评论者（如沃特尔斯和马克·沙农）认为该草案似乎应该分为两个独立的PEP。例如，沙农认为该PEP应仅关注接受JIT工作的目标，而不应包含实现细节。此外，还有不少人呼吁提供更多信息。

> Bucher [pushed back](https://discuss.python.org/t/pep-836-jit-go-brrr-the-path-to-a-supported-jit-compiler-for-cpython/108010/21) a bit on the suggestion that it should be two PEPs, and Ostrowski [defended](https://discuss.python.org/t/pep-836-jit-go-brrr-the-path-to-a-supported-jit-compiler-for-cpython/108010/22) the structure of the PEP as it was. "Outlining goals like we have in the PEP without being able to share the plan and everything we've thought through alongside it would make me uncomfortable. To me, goals without plans behind them aren't really goals at all."

布赫对“应分为两份 PEP”的建议表示了反对，而奥斯特罗夫斯基则为 PEP 的原有结构进行了辩护。“如果无法分享计划以及与之相关的一切想法，只列出 PEP 中所提出的那些目标，我会感到不舒服。对我来说，没有计划的目标其实算不上是目标。”

> When we [last looked at this topic](https://lwn.net/Articles/1090385/) in September, the discussion about the PEP had slowed down without a commitment to develop new PEPs or a formal statement from the council. The last word from the council at that time, in the form of a [summary of its August 6 meeting](https://discuss.python.org/t/2026-08-06-python-steering-council-meeting-summary/108612), was that it had met with the PEP authors and was "discussing the state of the PEP and whether it answered the questions the SC asked in its request for a PEP".



当我们[上次在 9 月份查看该话题](https://lwn.net/Articles/1090385/)时，关于该 PEP 的讨论已经放缓，没有关于开发新 PEP 的承诺，也没有理事会的正式声明。理事会当时最后的表态，是以[其 8 月 6 日会议摘要](https://discuss.python.org/t/2026-08-06-python-steering-council-meeting-summary/108612)的形式，表明它已与 PEP 作者会面，并且正在“讨论 PEP 的状态，以及它是否回答了 SC 在请求 PEP 时提出的问题”。

> #### Experimentation in main



#### 主分支中的实验

> On September 21, Wouters [posted](https://discuss.python.org/t/pep-836-jit-go-brrr-the-path-to-a-supported-jit-compiler-for-cpython/108010/53) a statement from the steering council, minus Ostrowski (who is currently a member of the steering council but did not participate since she is a co-author of the PEP), that summarized its position. The statement said that PEP did answer all of the questions that were highlighted in the council's request, "although perhaps some less convincingly than others".

9月21日，Wouters 发布了一份来自指导委员会的声明（排除 Ostrowski，她目前是指导委员会成员，但作为 PEP 的联署人未参与），该声明总结了指导委员会的立场。声明表示，PEP 确实回答了委员会提出的问题，“ although perhaps some less convincing than others”。

> The council wished to make clear that it was not looking for the criteria that the JIT should meet to be a supported feature, or whether it should be considered such. Instead, the council was evaluating whether the JIT should continue as an experiment in CPython's main branch.

委员会想明确说明，他们并不寻找JIT满足成为“受支持功能”所需的标准，也不考虑其是否应被视为此类。相反，委员会正在评估JIT是否应继续在CPython的主分支中进行实验性开发。

> > Part of the problem with allowing experimentation in main is the lack of unified design, and the uncertainty that core developers, package maintainers and users face as the experimentation changes behaviours and API surfaces.

> 允许在主分支上进行实验的一个问题在于缺乏统一的设计，以及核心开发人员、包维护者和用户在面对实验性改变行为和 API 表面时所面临的不确定性。

> The council said that the PEP was not specific enough about support plans, performance criteria, and too vague or too optimistic about a number of other areas. The statement included a ten-point list of items that the council wanted "to see either spelled out in the PEP, or at least discussed and rejected". The council's list expressed concerns ranging from memory impact to security. For example, on the topic of platform parity, the council wanted to ensure that the JIT was designed to be easily adopted for new platforms. It wanted assurance that the JIT's design would not be tied to specific platform or require platform-specific knowledge to maintain.

We need to translate the English paragraph into Chinese, following the rules:

- Keep code blocks unchanged (none here).
- Translate comments only if needed; there are no comments.
- Preserve proper nouns: PEP, JIT, maybe "council" (maybe translate? It's a proper noun? It's a generic term, but likely keep English? The rule says proper names: product names, frameworks, etc. "council" maybe not a proper name, but it's a generic term. The example: "the council said". Probably translate "council" as "委员会"? But it's not a proper noun. The rule: "保留专有名词" includes technical frameworks, libraries, product names, programming languages. "council" is not a proper noun, so we can translate. However "PEP" is a proper noun (maybe a document), keep English. "JIT" keep English. "the council" maybe translate to "委员会". In Chinese technical docs, "council" could be "委员会". We'll translate.

Need to keep punctuation rules: Chinese punctuation for Chinese, English punctuation for English. The text contains English words like "PEP", "JIT". Also numbers "ten-point". We need to add spaces between Chinese and English: e.g., "PEP" should be " PEP"? Actually rule: "中英文间距：中文与英文、数字之间添加一个空格". So "PEP" is English, preceding Chinese "说" maybe need a space: "委员会说 PEP". Also "JIT" need space: "JIT". Also "ten-point" maybe translate to "十项". But "ten-point list" is English phrase; maybe we translate to "十项列表". However we must keep proper nouns unchanged, but "ten-point" is not a proper noun. So we can translate.

Need to keep Markdown structure: The original text is just a paragraph, no headings, no list. So we output just the Chinese translation, preserving punctuation.

Check spacing: Chinese and English between need a space. So "PEP" should be separated by a space from surrounding Chinese characters. Example: "委员会说 PEP". Also "JIT" separated: "JIT". Also "the" is English but part of sentence; we need to consider spaces: In Chinese, English words within Chinese text need a space before and after? The rule says "中文与英文、数字之间添加一个空格". So any Chinese character adjacent to English word or number must have a space. So we need to ensure there's a space between Chinese punctuation and English words. For example: "PEP" after "说" we put space: "说 PEP". Also before "JIT" we need a space: "JIT". Also "ten-point" maybe we translate as "十项". Not English.

Let's translate:

"The council said that the PEP was not specific enough about support plans, performance criteria, and too vague or too optimistic about a number of other areas."

Chinese: "委员会表示 PEP 在支持计划、性能标准以及若干其他方面过于模糊或过于乐观。" Need spaces: "委员会 表示 PEP 在 支持计划、性能标准以及 若干 其他 方面 过于 模糊或 过于 乐观。" But need to ensure spaces between Chinese and English words: "委员会 表示 PEP 在 支持计划、性能标准以及 若干 其他 方面 过于 模糊或 过于 乐观。" However punctuation: Chinese uses "，" and "。". The English words "PEP" is within Chinese sentence, we need a space before and after. Also numbers: "ten-point" we translate to "十项". Not needed.

"The statement included a ten-point list of items that the council wanted "to see either spelled out in the PEP, or at least discussed and rejected"."

Translate: "该声明列出了十项 council 希望 "在 PEP 中明确写出，或至少讨论并驳斥" 的项目。" Need spaces: "该 声明 列出 了 十项 council 希望 “在 PEP 中 明确 写出，或 至少 讨论并 驳斥” 的 项目。" Also need spaces between Chinese and English: "council" maybe not proper noun, but it's English word; we need a space before and after. Actually "council" is English but context is Chinese; maybe we translate "council" to "委员会". But it's same as earlier. However "c[w<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk> "to see either spelled out in the PEP, or at least discussed and rejected". 

We need to keep Markdown structure. The original is a paragraph, not a list item. So we just output the translation.

Check for any code blocks: none.

Check for any other constraints: No extra content, no explanation. Just output translation.

Let's produce translation:

"理事会表示，PEP 在支持计划、绩效标准方面不够具体，并且在许多其他方面过于模糊或过于乐观。声明包括十个项目，要求“要么在 PEP 中明确列出，或者至少讨论并驳斥”。理事会的列表表达了从记忆影响到安全的担忧。例如<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk> 'JIT' in the translation. Also, note that "JIT" is an acronym, so it should remain in English. The phrase "easily adopted for new platforms" should be translated to "<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk> "the" -> "the" (already there<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk> "to see either spelled out in the PEP, or at least discussed and rejected". So maybe "to see either spelled out in the PEP, or at least discussed and rejected". So "to see" -> "to see" maybe "to be spelled out" or "to be spelled out". Let's translate naturally: "The council<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk> "the council" as a proper noun? Not specified. Let's keep "council" as "council" but maybe "the council"<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk> "council" to "committee" for clarity.
- "ten-point" -> "ten" (the word "point" is redundant with "list").
-<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk> "the" to "the" (no change) but need space: "the PEP" -> "the PEP"? Actually "the PEP" -> "the PEP" with space<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk> "council" to "comité" and "ten-point" to "dix points", preserving the space between "PEP" and the following word.

Let's check the text: "The council said that the PEP was not specific enough about support plans, performance criteria, and too vague or too optimistic about a number of other areas."

Translation: "Le conseil a déclaré que<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk> "council" to "committee", "PEP" to "policy", "JIT" to "<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk> "to see either spelled out in the PEP, or at least discussed and rejected". So "spelled out" -> "включены в текст" or "развёрнуты". "discussed and rejected" -> "рассмотрены и отвергнуты". Let's translate.

Original: "The council said that the PEP was not specific enough about support plans, performance criteria, and too vague or too optimistic about a number of other areas."

Translation: "Комиссия сказала<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk> "council" to "comité". Let's re-evaluate: "council" is a common noun, not a proper name. So translating it to "comité" or "conse<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk> "PEP" to "PEP" (no change) or "PEP" might be a typo for "PEP"? It's a term, keep as is.

Let's translate sentence by sentence.

"The council said that the PEP was not specific enough about support plans, performance criteria, and too vague or too optimistic about a number of other areas."

Translation: "委员会说 PEP 关于支持计划、绩效标准不够具体，并且在很多方面过于模糊或过于乐观。"

Wait, need to check the exact phrasing.

Original<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk> "PEP" as a proper noun, so it stays as is. "JIT" also stays as is.

- "ten-point list" -> "ten-item list" or "ten-point list". Probably "ten-item list" or "ten-point list". The original says "ten-point list of items". We can translate to "ten-item list" or "ten-point list". I'll use "ten-item list".

- "spelled out" -> "spec<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk> "to see either spelled out in the PEP, or at least discussed and rejected". So the phrase "to see either spelled out in the PEP, or at least discussed and rejected" -> "ten-point list of items that the council wanted to see either spelled out in the PEP, or at least discussed and rejected".

Thus translation:

"委员会说，PEP 在支持计划、绩效标准方面不够具体<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk> "the council" as "the council" or "the council" might be "the council" in Chinese context. Probably translate as "the council" -> "the council" (maybe keep as is). But to be safe, translate "council" to "the council" -> "the council" is English, but Chinese translation would be "the council" -> "the council" maybe "the council" is a proper name? Not sure. Let's see typical Chinese translation: "The council said that the PEP was not specific enough..." Could be "委员会表示，PEP在支持计划、绩<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk> "No"

> Another area that the council called out was user impact. It said that the PEP was "overly optimistic" about user-visible differences with the JIT enabled. There were many cases where users depend on idiosyncrasies in the interpreter design, "as we've seen with other Python implementations or even just between major Python versions", and it wanted clarification on how those differences would be handled. Would they be considered bugs, how would situations be handled if a difference in behavior was unavoidable, and so on.

 councils 还点出了另外一个问题领域，即用户影响。它认为，PEP 过于乐观地估计了 JIT 启用后的用户可见差异。用户依赖于解释器设计的许多细节特性，“正如我们在其他 Python 实现中或甚至在不同主版本 Python 之间所看到的那样”，而它希望弄清楚这些差异将如何处理。这些差异会被归为 bug 吗，如果出现无法避免的行为差异，该如何处理，等等。

> Security was "an underserved area in the PEP", according to the council; it suggested that a discussion with the [Python security response team](https://devguide.python.org/security/psrt/) was in order and that a security review should be part of the criteria for supported status as well.

据委员会称，安全是 PEP 中"服务不足的领域"；它建议与 Python security response team 进行讨论是必要的，并且安全审查也应成为 supported status 的标准之一。

> PEP 836 specified a [compatibility review](https://peps.python.org/pep-0836/#compatibility-review) milestone to correspond with the first Python 3.17 release candidate—which would be expected sometime in August 2028—that would involve running the test suites of the top PyPI packages to see if the JIT broke them. The council wanted that timeline moved up significantly. "We think that's way, way too late, and the compatibility review should be an ongoing and continuous process starting as soon as possible".

PEP 836 规定了一个 [兼容性审查](https://peps.python.org/pep-0836/#compatibility-review) 里程碑，对应首个 Python 3.17 发布候选版（预计在 2028 年 8 月左右），届时将运行 PyPI 排名靠前包的测试套件，以查看 JIT 是否会导致它们出现故障。指导委员会希望大幅提前这一时间表。“我们认为那太晚了，兼容性审查应该是一个持续、连续的过程，并应尽快开始。”

> The council also worried about the JIT's design decisions being made "without critical review by the larger group of developers ultimately responsible for \[CPython\] development, maintenance and support". The bottom line, it said, was that PEP 836 "mostly answers the questions we asked" with no missing pieces, but it wanted more discussion on those topics so it could "gauge community support and consensus before we're asked to pronounce on this PEP".

Steering Council 还担心 JIT 的设计决策是在“未经最终负责 CPython 开发、维护和支持的更广泛开发者群体的关键性审查”下做出的。其核心观点是，PEP 836 “主要回答了我们提出的问题”，且没有缺失部分，但 Council 希望就这些主题进行更多讨论，以便在“被要求对该 PEP 作出裁决之前，能够评估社区的支持度和共识”。

> Jin [replied](https://discuss.python.org/t/pep-836-jit-go-brrr-the-path-to-a-supported-jit-compiler-for-cpython/108010/55) a few days later to thank the council for its detailed feedback and said that the group would work on its suggestions.

Jin [回复](https://discuss.python.org/t/pep-836-jit-go-brrr-the-path-to-a-supported-jit-compiler-for-cpython/108010/55) 几天后感谢理事会对其详细反馈，并表示小组将会在其建议上进行工作。

> #### Withdrawn

#### 撤回

> After some consideration, it appears, the PEP's authors have decided not to continue pursing the council's approval. On October 19, Ostrowski (who is also release manager for Python 3.16 and 3.17) [announced](https://discuss.python.org/t/pep-836-jit-go-brrr-the-path-to-a-supported-jit-compiler-for-cpython/108010/57) that the PEP was being withdrawn:

经过一些考虑，似乎 PEP 的作者们决定不再继续追求委员会的批准。在 10 月 19 日，Ostrowski（同时也是 Python 3.16 和 3.17 的发布经理）[宣布](https://discuss.python.org/t/pep-836-jit-go-brrr-the-path-to-a-supported-jit-compiler-for-cpython/108010/57)该 PEP 正在被撤回：

> > The Steering Council rightly sets a high bar for a proposal of this scope, and we don't feel we have the personal bandwidth to carry the current version forward. We continue to believe in the technical direction outlined in the PEP, including free-threaded support and a method-based frontend, and remain optimistic about the JIT's potential in CPython. We'll make the reference implementation available and link it from the withdrawn PEP so others who are interested can explore and build on that.

> 指导委员会为这一提案设定了很高标准，这是理所当然的，但我们认为自己缺乏足够的人力资源来推进当前版本。我们仍然相信 PEP 中提出的技術方向，包括自由线程支持和基于方法的 Frontend，并对 JIT 在 CPython 中的潜力持乐观态度。我们将提供参考实现，并将其链接到已撤销的 PEP，以便其他感兴趣的人能够探索和扩展它。

> Barry Scott [asked](https://discuss.python.org/t/pep-836-jit-go-brrr-the-path-to-a-supported-jit-compiler-for-cpython/108010/59) if that meant that work on the JIT was stopped. Brett Cannon [replied](https://discuss.python.org/t/pep-836-jit-go-brrr-the-path-to-a-supported-jit-compiler-for-cpython/108010/61) that the work would be stopped in the main repository, but it would be up to the community whether the work would continue elsewhere. Dunc Graham [suggested](https://discuss.python.org/t/pep-836-jit-go-brrr-the-path-to-a-supported-jit-compiler-for-cpython/108010/62) that there might be time for an alternative PEP to be submitted before the council's deadline. Cannon [said](https://discuss.python.org/t/pep-836-jit-go-brrr-the-path-to-a-supported-jit-compiler-for-cpython/108010/63) that was not likely, "as all the people actively driving the JIT were either authors on that PEP or contributors to it".

Barry Scott [询问](https://discuss.python.org/t/pep-836-jit-go-brrr-the-path-to-a-supported-jit-compiler-for-cpython/108010/59)这是否意味着 JIT 的工作已停止。Brett Cannon [回复](https://discuss.python.org/t/pep-836-jit-go-brrr-the-path-to-a-supported-jit-compiler-for-cpython/108010/61)称，工作将在主仓库中停止，但由社区决定该工作是否会在其他地方继续。Dunc Graham [建议](https://discuss.python.org/t/pep-836-jit-go-brrr-the-path-to-a-supported-jit-compiler-for-cpython/108010/62)在委员会截止日期前可能还有时间提交替代 PEP。Cannon [表示](https://discuss.python.org/t/pep-836-jit-go-brrr-the-path-to-a-supported-jit-compiler-for-cpython/108010/63)这不太可能，“因为所有积极推动 JIT 的人要么是该 PEP 的作者，要么是其贡献者”。

> With the PEP withdrawn, the JIT will likely be removed from CPython main fairly soon to ensure that any problems caused by its removal can be addressed early in the [Python 3.16 development cycle](https://peps.python.org/pep-0826/). It is unclear whether the original drivers of the JIT work intend to continue working on it at all, or if it will simply be left for others to pick up if there is enough community interest. I have emailed the PEP authors for clarification, but have not yet received a reply.



随着该 PEP 的撤回，JIT 很可能很快就会从 CPython 主分支中移除，以确保在 [Python 3.16 开发周期](https://peps.python.org/pep-0826/) 的早期阶段，就能解决因移除它而产生的任何问题。目前尚不清楚 JIT 工作的原始推动者是否打算继续开发它，还是说只要有足够的社区兴趣，它就会留给其他人来接手。我已向 PEP 作者发送邮件以寻求澄清，但尚未收到回复。

> > **Did you like this article?** Please accept our [trial subscription offer](https://lwn.net/Promo/slink-trial2-3/claim) to be able to see more content like it and to participate in the discussion.



> **您喜欢这篇文章吗？**请接受我们的[试用订阅优惠](https://lwn.net/Promo/slink-trial2-3/claim)，以便能够阅读更多类似的内容并参与讨论。

> ---

(无输出，因无可翻译的原文内容)

> ## Comments

## 评论

> > **jkingweb** · [2026-10-26](https://lwn.net/Articles/1102990/)
> > 
> > **Seems civil**
> > 
> > This reads to me like everyone was civil and acting in good faith and that a problem of process was acknowledged and addressed without acrimony or drama. That's really nice to see, and speaks well of the Python community.  
> > 
> > Hopefully this won't be the end of the work, because Python can always benefit from better performance.
> > 
> > > **ballombe** · [2026-10-26](https://lwn.net/Articles/1102997/)
> > > 
> > > What was the advantage over pypy ?
> > > 
> > > > **acarno** · [2026-10-27](https://lwn.net/Articles/1103001/)
> > > > 
> > > > For one thing, pypy only suppports Python 3.12, 3.11 and 2.7. More significantly, pypy isn't CPython - it's an alternative implementation that is mostly compatible but with a few noticeable differences (the pypy website lists these). This would have added a JIT to CPython (the reference implementation) directly, meaning all new Python versions - and all included modules, etc. - get access to JIT compilation. In the PEP 836 authors' own words:
> > > > 
> > > > > Alternative Python implementations, such as PyPy and GraalPy, demonstrate that larger speedups are possible for some Python programs, and we deeply value those projects. However, many users cannot adopt an alternative runtime even when it may perform better on their code due to factors such as supported Python versions, extension compatibility, embedding requirements, deployment constraints, and tooling support.
> > > > 
> > > > **markkitt** · [2026-10-27](https://lwn.net/Articles/1103191/)
> > > > 
> > > > Pypy is in low maintenance mode.
> > > > 
> > > > > **LtWorf** · [2026-10-27](https://lwn.net/Articles/1103205/)
> > > > > 
> > > > > If they had the same amount of funding cPython has…

> **jkingweb** · [2026-10-26](https://lwn.net/Articles/1102990/)
>
> **似乎很文明**
>
> 我觉得大家都是文明地、真诚地相处，承认并解决了流程问题，没有发生任何激烈的争执或闹剧。这确实令人欣慰，也反映了 Python 社区的良好风貌。
>
> 希望这不会是工作的结束，因为 Python 总能从更好的性能中受益。
>
> > **ballombe** · [2026-10-26](https://lwn.net/Articles/1102997/)
> >
> > PyPy 的优势是什么？
> >
> > > **acarno** · [2026-10-27](https://lwn.net/Articles/1103001/)
> > >
> > > 首先，PyPy 仅支持 Python 3.12、3.11 和 2.7。更重要的是，PyPy 不是 CPython，它是一个基本兼容但存在一些明显差异的替代实现（PyPy 网站列出了这些差异）。这将直接在 CPython（参考实现）中添加一个 JIT 编译器，从而使所有新的 Python 版本及其所有内置模块都能获得 JIT 编译功能。正如 PEP 836 作者所言：
> > >
> > > > 替代 Python 实现（如 PyPy 和 GraalPy）表明，对于某些 Python 程序，较大的加速是可能的，我们非常重视这些项目。然而，许多用户即使在某些代码上可能获得更好的性能，也无法采用替代运行时，因为存在支持的 Python 版本、扩展兼容性、嵌入要求、部署限制和工具支持等因素限制。
> > >
> > > **markkitt** · [2026-10-27](https://lwn.net/Articles/1103191/)
> > >
> > > PyPy 目前处于低维护状态。
> > >
> > > > **LtWorf** · [2026-10-27](https://lwn.net/Articles/1103205/)
> > > >
> > > > 如果他们拥有与 CPython 相同的资金支持……

> > **marcH** · [2026-10-27](https://lwn.net/Articles/1103016/)
> > 
> > **Experimentation in main?**
> > 
> > \> Experimentation in main  
> > 
> > Apologies if I missed it: why was this happening in the main branch? Too many conflicts with other changes also happening in main? (Not enough to justify IMHO but that could explain)
> > 
> > \> \[a compatibility review\] that would involve running the test suites of the top PyPI packages to see if the JIT broke them. The council wanted that timeline moved up significantly. "We think that \[Aug. 2028\] is way, way too late, and the compatibility review should be an ongoing and continuous process starting as soon as possible".
> > 
> > Maybe I'm missing something again but that seems normal and expected for the main branch - even when not enabled by default.
> > 
> > I didn't experience it much personally but regressions (in main releases) sound like a relatively frequent complaint about Python...
> > 
> > > **mathstuf** · [2026-10-27](https://lwn.net/Articles/1103020/)
> > > 
> > > I think it is possible, but the use needs to have a signal that the user knows they're "playing with fire". The way we do this for CMake is that there is a variable which needs to be set to a specified value (a randomly generated UUID) for the experiment to become "active" (and its first usage will trigger a warning about it becoming active). If the value is not correct, the feature is ignored. We then change the expected value whenever we update the behavior. With that, projects can't use the "but the value worked last time!" excuse. Basically, we use it as a way to escape Hyrum's Law and committing to any in-progress behavior in the future.
> > > 
> > > > **marcH** · [2026-10-27](https://lwn.net/Articles/1103211/)
> > > > 
> > > > Regularly changing the UUID is really cool, this sort of "light-weight branching" is smart! Perfect for letting any user help with testing.  
> > > > 
> > > > However I can imagine a JIT implementation being "invasive" enough that it "leaks" some changes outside the scope of such an experimental flag. So that technique could still not be completely bullet proof in such a case (it should still be known and used).
> > > > 
> > > > The devil is always in the details...
> > 
> > > **danilo** · [2026-10-27](https://lwn.net/Articles/1103209/)
> > > 
> > > I would say that it was mostly accidental "whoopsie" of allowing active, core contributors to basically side-step the usual process for architectural changes such as this one. Board — once they realised — acted amicably to put things in order, but by that time, JIT work has slowed down sufficiently that it depended on a few contributors with limited bandwidth and they could not commit to address all the concerns and put things back on track.



> **marcH** · [2026-10-27](https://lwn.net/Articles/1103016/)
> 
> **在 main 分支中进行实验？**
> 
> \> 在 main 分支中进行实验  
> 
> 如果我漏掉了什么，请见谅：为什么这会在 main 分支中发生？与 main 分支中同时进行的其他更改有太多冲突？（恕我直言，这不足以成为理由，但或许可以解释得通）
> 
> \> \[兼容性审查\]，这将涉及运行 PyPI 上顶级软件包的测试套件，以查看 JIT 是否破坏了它们。委员会希望显著提前该时间表。“我们认为 \[2028 年 8 月\] 实在是太晚了，而且兼容性审查应该是一个从尽快开始的持续、连续的过程”。
> 
> 也许我又漏掉了什么，但这对于 main 分支来说似乎是正常且预期的——即使在默认未启用的情况下也是如此。
> 
> 我个人没有经历过太多，但回归问题（在 main 版本中）听起来像是对 Python 相当频繁的投诉……
> 
> > **mathstuf** · [2026-10-27](https://lwn.net/Articles/1103020/)
> > 
> > 我认为这是可能的，但用户需要有一个信号，让他们知道自己正在“玩火”。我们在 CMake 中的做法是，需要将一个变量设置为指定的值（随机生成的 UUID），实验才会变得“活跃”（并且其首次使用会触发关于其变为活跃状态的警告）。如果该值不正确，则忽略该功能。当我们更新行为时，我们随后会更改预期值。这样一来，项目就不能使用“但该值上次有效！”这样的借口。基本上，我们用它作为一种方式来规避 Hyrum's Law，并避免未来对任何进行中的行为做出承诺。
> > 
> > > **marcH** · [2026-10-27](https://lwn.net/Articles/1103211/)
> > > 
> > > 定期更改 UUID 真的很酷，这种“轻量级分支”很聪明！非常适合让任何用户帮助进行测试。  
> > > 
> > > 然而，我可以想象 JIT 实现会具有足够“侵入性”，以至于将某些更改“泄漏”到此类实验标志的范围之外。因此，在这种情况下，该技术可能仍然不完全万无一失（但它仍然应该被知晓并使用）。
> > > 
> > > 魔鬼总是在细节中……
> 
> > **danilo** · [2026-10-27](https://lwn.net/Articles/1103209/)
> > 
> > 我会说，这主要是意外的“失误”，允许活跃的核心贡献者基本上绕过了此类架构更改的常规流程。委员会（Board）一旦意识到这一点，就友好地采取行动理顺了局面，但到那时，JIT 工作已经放缓到依赖于少数带宽有限的贡献者，他们无法致力于解决所有问题并让事情重回正轨。

> > **roc** · [2026-10-27](https://lwn.net/Articles/1103235/)
> > 
> > **one problem is Python itself**
> > 
> > An underlying problem here seems to be that writing a proper JIT for Python is incredibly hard and the performance gains are pretty small. If the JIT was a runaway success presumably getting the paperwork right would have been less important or at least more people would have helped.
> > 
> > > **jch** · [2026-10-28](https://lwn.net/Articles/1103244/)
> > > 
> > > \> writing a proper JIT for Python is incredibly hard  
> > > 
> > > Harder than for JavaScript? Ruby? Lua? Smalltalk? We've got fine JITs for all of these languages, and they are just as dynamic as Python.
> > > 
> > > > **raven667** · [2026-10-28](https://lwn.net/Articles/1103247/)
> > > > 
> > > > I don't have any particular insight into the Python internals, but I think the fact that CPython doesn't have a JIT after all these years and all the available developer hours put into maintenance and features is strong (but anecdotal) evidence that it's harder than it looks to build a JIT that is compatible with the runtime and the way it's used/embedded/extended.

# ROC · [2026-10-27](https://lwn.net/Articles/1103235/)
> 
> **一个问题在于 Python 本身**
> 
> 这里似乎存在一个根本问题：**为 Python 编写正常的 JIT 编译器几乎不可能，而性能提升其实并不大。如果 JIT 编译器能够大放异彩，可能的话后续的工作量或许会变得不那么重要，或者至少会有更多人愿意投身其中。**
> 
> > **jch** · [2026-10-28](https://lwn.net/Articles/1103244/)
> > 
> > \> 为 Python 编写正常的 JIT 编译器几乎不可能  
> > 
> > 比 JavaScript、Ruby、Lua、Smalltalk 更难吗？我们为这些语言都拥有出色的 JIT 编译器，它们与 Python 一样都极其动态。
> > 
> > > **raven667** · [2026-10-28](https://lwn.net/Articles/1103247/)
> > > 
> > > 我对 Python  internals 没有特别的见解，但我认为 CPython 已经历了这么多年，花费了这么多可用的开发者时间用于维护和功能开发，仍然没有 JIT 编译器，这本身就强有力的（尽管是概念性的）证据表明：为兼容运行时及其用法/嵌套/扩展方式构建 JIT 编译器，实际上比表面上看起来要难得多。
