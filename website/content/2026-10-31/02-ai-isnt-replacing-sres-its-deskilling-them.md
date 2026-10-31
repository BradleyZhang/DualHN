---
title: "AI并非取代SRE，而是降低其技能要求"
date: 2026-10-31T09:30:30+08:00
draft: false
source: "Hacker News"
originalTitle: "AI Isn't Replacing SREs. It's Deskilling Them."
originalUrl: "https://newsletter.signoz.io/p/ai-isnt-replacing-sres-its-deskilling"
hnUrl: ""
points: 
comments: 
---

> ### When AI handles 95% of your incident response, do you get worse at handling the 5% that actually matters?

### 当 AI 处理 95% 的事件响应时，你会不会在真正关键的那 5% 上变得更差？

> > 💌 *Hey there, it’s Elizabeth from SigNoz!*
> > 
> > *This newsletter is* a *n honest attempt to talk about all things - observability, OpenTelemetry, open-source and the engineering in between!  
> > &  
> > This piece took 6 days, 5 hours to be cooked, hope we served.* 🌚

> 💌 *嘿，我是 SigNoz 的 Elizabeth！*
>
> *这封通讯是一次诚恳的尝试，旨在聊聊所有相关话题——可观测性、OpenTelemetry、开源以及中间的工程！*
> &
> *这篇文章花了 6 天 5 小时才“煮”好，希望大家喜欢。* 🌚

> There are two popular prophecies floating around tech circles these days.

科技圈目前流传着两大热门预言。

> The first says **[SRE is the future of all software engineering](https://swizec.com/blog/the-future-of-software-engineering-is-sre/)**, that as AI writes more and more code, the humans who remain will be the ones keeping systems alive. The second says AI will devour every tech job alive, SREs included. Neither is particularly useful if you’re an SRE trying to figure out what your Tuesday will look like in 2027.

第一种观点认为 **[SRE 是所有软件工程的未来](https://swizec.com/blog/the-future-of-software-engineering-is-sre/)**，随着 AI 编写越来越多的代码，留下来的人类将是那些让系统保持运行的人。第二种观点认为 AI 将吞噬所有科技岗位，SRE 也不例外。如果你是一名 SRE，试图弄清楚 2027 年的周二会是什么样子，这两种观点都没有多大用处。

> Let’s ask a more grounded question by looking at what’s already happening: When AI handles 95% of your incident response, do you get worse at handling the 5% that actually matters?



让我们提出一个更实际的问题，看看已经发生的情况：当 AI 处理了你 95% 的事件响应时，你处理那真正重要的 5% 的能力会下降吗？

![](https://substackcdn.com/image/fetch/$s_!Hgvq!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F530d847f-26cb-4ddd-a6de-875cbbaf8fab_6233x4167.webp)

> Most of us already use AI for our daily work (our brains a little fried!), and so do SREs. Today’s discussion agenda is not whether AI replaces SREs, but whether AI is quietly making SREs less capable and whether anyone will notice anything before the next novel outage hits. The foundational framework for this entire debate comes from a 1983 research paper that’s eerily prescient.



我们大多数人已经在日常工作中使用 AI（大脑都有点转不动了！），SRE 也是如此。今天的讨论议程不是 AI 是否会取代 SRE，而是 AI 是否在悄悄削弱 SRE 的能力，以及在下一次新型故障来袭之前，是否有人会察觉到异常。这场整个辩论的基础框架源自一篇 1983 年的研究论文，其预见性准得令人难以置信。

> ### The Ironies of Automation: Part-I

### 自动化中的讽刺：第一部分

> ---



请提供您需要翻译的英文原文，我会按照要求为您翻译。

> Note from author: Below is a brief precursor to History of Automation, which you might enjoy if you are into History and Cultures (like me 😉).

编者注： 以下是《自动化历史》的简要前奏，如果你对历史和文化感兴趣，你可能会喜欢（像我 😉）。

> ---

请提供您希望我翻译的英文原文。

> In 1983, a cognitive psychologist named Lisanne Bainbridge published a paper called ***[Ironies of Automation](https://www.semanticscholar.org/paper/Ironies-of-automation-Bainbridge/0713bb9d9b138e4e0a15406006de9b0cddf68e28)***. It became one of the most cited papers in human factors research, and its core argument is almost uncomfortably relevant today.

1983 年，认知心理学家 Lisanne Bainbridge 出版了一篇题为***[Ironies of Automation](https://www.semanticscholar.org/paper/Ironies-of-automation-Bainbridge/0713bb9d9b138e4e0a15406006de9b0cddf68e28)***的论文。它成为人因研究中被引用最多的论文之一，其核心论点如今几乎令人不适地相关。

> Bainbridge studied what happened when factories and industrial systems automated the work of blue-collar operators. The findings were paradoxical and revealed that the more you automate a process, the more critical the human operator becomes during the rare moments automation fails and the less practice they get, and the worse they become at exactly those interventions. Automation, which was inherently designed to remove humans from the loop, left them with the worst possible job, i.e., long stretches of passive monitoring punctuated by rare, high-stakes crises they were increasingly unprepared for.

Bainbridge 研究了工厂和工业系统自动化蓝领操作员工作时发生了什么。其发现颇具矛盾，揭示出自动化程度越高，人工操作员在自动化失败的罕见时刻越关键，且他们的实践机会减少，在恰好是那些干预时，他们的表现更差。自动化本身设计用于将人从循环中剥离，却使他们陷入最差的工作状态，即长时间的被动监控，间杂出现稀有的高风险危机，且他们对这些危机的准备度越来越不足。

> Ring any bells yet? 🙂

想起来了吗？ 🙂

> Basically, I’m drawing a parallel between the AI revolution and industrial automation. Industrial automation reshaped blue-collar work by taking over routine physical tasks, and the workers who remained had to handle exceptions they’d lost the muscle memory for. AI is doing the same thing to knowledge workers by taking over the routine cognitive tasks, the pattern matching, the triage, the known-issue resolution and leaving humans with the rare, complex, ambiguous problems.

我认为，人工智能革命与工业自动化有相似之处。工业自动化通过接管常规体力劳动，改变了蓝领工作。剩余的工人不得不处理那些他们已失去肌肉记忆的异常情况。AI 正在对知识工作者进行类似的变革，它接管了常规的认知任务、模式匹配、分诊和已知问题的解决方案，从而将人类留给那些罕见、复杂和模糊的问题。

> The *exact* problems that require deep *expertise*, the *exact expertise* that atrophies when you stop practising.

那些需要深厚*专业知识*才能解决的*确切*问题，正是当你停止*实践*时会*退化*的那份*确切专业知识*。

> Now we’re replaying this pattern with AI agents, and the stakes in software systems are only growing.

现在我们正在用 AI agents 重演这一模式，而软件系统中的利害关系只会越来越大。

> ## Current State of AI in SRE

# AI在SRE中的当前状态

> Let’s take stock of where things stand today in the world of site reliability engineering.

让我们梳理一下站点可靠性工程 (SRE) 领域的当前现状。

> ### What’s already automated or heavily AI-assisted?

### 哪些东西已经实现了自动化或大量依赖 AI？

> Alert noise reduction and intelligent grouping, runbook execution for known issues, log pattern detection and anomaly flagging, and basic root-cause suggestions from historical incident data, and auto-remediation for well-understood failure modes like restarting a crashed pod or scaling up a service that’s running hot, are all fairly automated today.

告警噪声降低和智能分组、针对已知问题的 runbook 执行、日志模式检测和异常标记、基于历史事件数据的基本根因建议，以及针对理解透彻的故障模式（如重启崩溃的 Pod 或扩容运行负载过高的服务）的自动修复，当前都已相当程度实现自动化。

> ### What’s on the horizon?



### 未来展望

> Some immediate targets include multi-signal correlation across metrics, logs, and traces, autonomous root-cause analysis for partially understood failures, predictive incident detection before users are affected, AI-driven change risk assessment and automated rollbacks.



一些近期目标包括跨指标、日志和追踪的多信号关联，针对部分理解的故障的自主根因分析，在用户受到影响之前进行预测性事件检测，以及 AI 驱动的变更风险评估和自动回滚。

> PagerDuty frames this as a tiered model.

PagerDuty 将此 framing 为多层模型。

> - Tier 1 incidents: Known issues with known fixes get fully automated.
> - Tier 2 incidents: Partially understood problems receive AI recommendations with human validation.
> - Tier 3 incidents: Novel, complex, cascading failures stay human-led, with AI providing supporting context.

- Tier 1 事故：已知问题且有已知修复方案的，实现完全自动化处理。
- Tier 2 事故：部分已理解的问题，由 AI 提供建议，人工进行验证。
- Tier 3 事故：新颖、复杂、级联的故障，保持人工主导，AI 提供辅助上下文信息。

> But here’s the catch.

但这是陷阱。

> If *human* SREs (okay, now we have to use adjectives like human 🥹) only engage with Tier 3 incidents, i.e. the novel, never-before-seen outages, where do they build the *intuition* to handle them? Intuition is usually developed from years of hands-on incident response, pattern recognition built through repetition, and the kind of gut-level understanding of a system that only develops from painfully waking up at the odd hour to solve the bug that brought the system down.

如果 *人类* SREs (好吧，现在我们得用像人类这样的形容词 🥹) 仅处理 Tier 3 事件，i.e. 全新的、从未见过的故障，他们如何在其中建立起*直觉*来应对？直觉通常是从多年的 hands-on incident response 中积累而成的， pattern recognition built through repetition，以及一种只有在半夜被叫醒去修复 Bug 时才会产生的系统级直观理解。

> ## The Crisis of Deskilling

## 工作岗位技能退化的危机

> This is where the picture starts getting blurry. Let’s look at some emerging research on AI-induced deskilling across multiple fields, which paints a consistent and concerning picture.

这就是事情开始变得模糊的地方。让我们来看一些关于人工智能引起的多领域桌面技能退化的新兴研究，这些研究绘出了一幅一致且令人担忧的图景。

> In medicine, a [recent study](https://www.thelancet.com/journals/langas/article/PIIS2468-1253\(25\)00133-5/abstract) found that endoscopists who used AI assistance for polyp detection saw their unassisted detection rates drop from 28% to 22% after a period of AI use. They got worse at the thing they were supposed to be experts in, not because they forgot the theory, but because they stopped exercising the skill.

在医学领域，一项[最近的研究]发现使用 AI 辅助 进行息肉检测的内镜医生在一段时间 AI 使用后，其未使用 AI 的检测率从 28% to 22% after a period of AI use. 他们在自己应擅长的领域表现下降，不是因为他们忘记了理论，而是因为他们停止了技能的练习。

> In aviation, [research](https://flightsafety.org/wp-content/uploads/2019/12/IASS_2019_Behrend_Lafargue.pdf) has shown that long-haul pilots who rely heavily on autopilot systems experience measurable degradation in situational awareness and manual flying ability. The problem got serious enough that the FAA now mandates more manual flying time to counteract the effect.

航空领域的[研究](https://flightsafety.org/wp-content/uploads/2019/12/IASS_2019_Behrend_Lafargue.pdf)表明，长途飞行员过度依赖自动驾驶系统 autopilot systems 会导致情境意识 situational awareness 和手动飞行能力出现可衡量的下降。该问题已足够严重，以至于 FAA 现在规定增加手动飞行时间以抵消这种影响。

> Somewhere over the past year, AI stopped being a tool I occasionally reached for and became the first thing I reach for, *always*. My instinct now is to offload as much as possible and apply my own thinking only where it’s absolutely unavoidable. The problem is that these moments are becoming the only exercises my brain gets, and I can feel the *rust*.

在过去的一个年头里，AI 从我偶尔使用的工具，变成了我总是首先使用的工具。我的本能是尽可能卸载工作，仅在绝对不可避免时才应用自己的思考。问题在于，这些时刻正成为我大脑唯一的锻炼场，我已经能感觉到*rust*。

> We can draw a pattern here. The more you let the system handle, the worse you get at handling things yourself and here’s the truly dangerous part, *you don’t feel it happening*. It gets masked as hyper-productivity. Cognitive research suggests that because AI tools make tasks feel easier and enhance visible performance, users are often unable to accurately judge the true status of their own skills. You feel competent, dashboards look green, and then on a Wednesday, a novel incident hits that doesn’t match any pattern the AI has seen, and you realise the muscle has atrophied.

我们可以发现一个规律：当系统越来越多地替你处理事务时，你的自理能力就会越来越差。而更危险的是，你甚至没有察觉到这种变化，它往往被包装成“超高效率”。认知研究表明，由于 AI 工具让任务变得更轻松，并提升了可观的业绩表现，用户往往无法准确评估自己技能的真实水平。你觉得自己做得很好，仪表盘上的数据也显示一切正常，但周三，却发生了一起从未遇见过的新事件，这与 AI 之前学习到的任何模式都不匹配，你才意识到自己的能力已经退化了。

> For SREs, this manifests in specific ways, like we stop reading raw log streams because the AI summarises them, we stop forming hypotheses during incidents because the AI suggests root causes, we stop building mental models of system architecture because the AI maps dependencies for us, and each of these individually looks like a productivity win. Collectively, they hollow out the very expertise that makes an SRE effective when things go sideways in ways nobody anticipated.

对于 SRE 来说，这在具体层面上表现为：我们不再读取原始日志流，因为 AI 会对其进行总结；我们不再在事件期间形成假设，因为 AI 会指出根本原因；我们不再构建系统架构的心智模型，因为 AI 为我们映射依赖关系，而这些都在单独看来都像是生产力的提升。但归根结底，这们彻底削蚀了那些在不可预见的紧急情况发生时才是 SRE 生存之本的专业知识。

> But there’s something even more concerning than deskilling, and researchers have started calling it *never-skilling*. Deskilling means you once had a capability but have since lost it. Never-skilling means you never developed it in the first place. For junior SREs entering the field today in an environment where AI handles most of the incident response workflow, the opportunities to build foundational intuition and muscle through hands-on practice are vanishing.

但是有比失能更令人担忧的事情，它甚至开始让研究人员称之为“从未获得技能”（never-skilling）。失能意味着你曾经拥有某项能力，但后来失去了它。而从未获得技能则意味着你从未在那个领域获得过任何能力。对于那些进入这个领域的初级 SRE 而言，当下 AI 几乎处理了整个故障响应流程，因此他们根本无法通过实践操作建立起基础直觉和肌肉记忆，这些机会正在消失。

> The training pipeline itself is broken and not *self-healing*.

训练流水线本身已损坏，且不具备 *自愈* 能力。

> SREs realise their skills are degrading and lean more on AI to compensate, which further degrades their skills, creating a vicious cycle from which escape is difficult.

SREs 意识到他们的技能正在退化，并更多地依赖 AI 以补偿，这进一步退化了他们的技能，形成了一个难以摆脱的恶性循环。

> ### What Can We Do About It?

### 我们该怎么办？

> We are definitely not rejecting AI tooling; we are adopting it and integrating it stronger than ever before, because that’s the only way forward.

我们绝对没有排斥 AI 工具；相反，我们正在更加广泛地采用和融入它，这是唯一条可行之路。

> A few approaches worth considering:

值得考虑的几种方法：

> **Deliberate inefficiency.** Just as the FAA mandates manual flying time even when the autopilot is perfectly capable, SRE teams can designate certain incidents, even the ones the AI could handle, as *human-practice opportunities*. This can be considered as a long-term investment to keep skills fresh, although it might come at the cost of a super-fast solution

**故意制造低效率。** 正如美国联邦航空局规定即使自动驾驶仪完全可靠，也必须进行人工飞行时间一样，SRE 团队也可以将某些事件（即使 AI 能够处理）指定为“人类实践机会”。这可以视为一项长期投资，以保持技能的熟练度，尽管这可能意味着放弃一个超快速的解决方案。

> **Build for human-in-the-loop, not human-on-the-side.** There’s a meaningful difference between a system where a human approves an AI’s recommendation and one where a human actively engages with the problem alongside AI. The former keeps humans in a supervisory role that Bainbridge (the lady who wrote *that* research paper about 40 years ago) showed leads to vigilance decay, and the latter keeps them cognitively engaged.

**为人类在流程中的深度参与而设计，而非仅仅把人类置于边缘。** 人类在系统中审核 AI 推荐与人类与 AI 一起积极参与问题之间存在显著差异。前者将人类局限于监督角色，正如 Bainbridge（那位 40 年前撰写了那篇研究论文的女士）所指出的，这种角色会导致警惕性衰退；后者则让人类保持深度认知参与。

> Let’s zoom out and take a look at the bigger picture.

让我们退一步，从更宏观的角度来看待问题。

> ### The Bigger Picture

### 大局

> Everything we’ve discussed here, the ironies of automation, the deskilling risk, the never-skilling problem, collectively applies well beyond SRE. Software engineering as a whole is navigating the same tension. As AI writes more code, reviews more PRs, and handles more debugging, the same questions apply.

这里讨论的东西——自动化的讽刺效应、技能贫化风险、永久性学习问题——在SRE领域之外也适用得很好。软件工程本身正在经历相同的张力。随着AI编写更多代码、审查更多PR、处理更多调试，相同的问题也随之而来。

> We’re talking about SREs specifically because that’s the world we live in at **[SigNoz](https://signoz.io/)**. We build an open-source observability platform, the kind of tool that gives SREs the metrics, traces, and logs they need to understand their systems deeply. For us, this deskilling question is not a rhetorical fad; it directly shapes how we’re building AI into our product.

我们在谈论 SREs 具体是因为那是我们所生活的世界 at **[SigNoz](https://signoz.io/)**。我们构建了一个 open-source observability 平台，它是一种能给 SREs 提供 the metrics, traces, and logs 的工具，帮助他们深入理解系统。对我们，这去技能化的问题不是修辞风气；它直接塑造了我们正在把 AI 集成到产品中。

> Our approach is to start with an AI assistant that helps SREs leverage the power of LLMs while keeping humans firmly in control. Eventually, we’ll enable more autonomy but within clear guardrails, and only as trust is earned.

我们的方法是从一个 AI 助手开始，帮助 SREs 发挥 LLMs 的强大能力，同时让人类牢牢掌控。最终，我们将启用更多自主性，但在明确的护栏内，且仅在赢得信任后。

> One advantage we have in this space is that, as an observability platform, we sit on the data itself, the metrics, traces, and logs that SREs rely on. Most AI SRE products today integrate with observability tools through APIs, which means they’re working with a limited, second-hand view of your systems. Because we own the data layer, we can build much deeper, more context-aware AI capabilities that understand your system the way an experienced SRE would.

我们在此领域拥有一个优势，即作为可观测性平台，我们直接掌握数据本身，即 SREs 依赖的指标、追踪和日志。当今大多数 AI SRE 产品通过 API 与可观测性工具集成，这意味着它们使用的是你系统的有限、二手视图。因为我们拥有数据层，所以能够构建更深层、更具上下文感知能力的 AI 功能，这些功能能够像经验丰富的 SRE 一样理解你的系统。

> And to answer the burning question in your head, our goal isn’t AI that replaces SREs. It’s AI that supercharges SREs. Unlike ongoing lore, we believe humans will remain essential for the decisions that matter most, especially those that impact production infrastructure.

来回答你心中那个迫切的问题：我们的目标不是让 AI 取代 SREs，而是让 AI 增强 SREs。与普遍的看法不同，我们认为人类在最重要的决策中将继续不可或缺，尤其是那些影响生产环境基础设施的决策。

> The future of SRE is human *with* AI intentionally designed to keep humans sharp, engaged, and ready for the 5% that really counts.

SRE 的未来是人类 与 AI 共同完成的工作，旨在让人类保持敏锐、投入，并准备好应对真正重要的 5%。

> ---

请提供需要翻译的英文原文内容。

> Here’s the **[LinkedIn post](https://www.linkedin.com/posts/pranay01_something-ive-been-thinking-about-lately-activity-7428804029134225408-IXif?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC3MkwYBDZBMgATtR9hOGisjheK_u1VDu6w)** our founder posted a few days ago, which inspired me to write this.

这是创始人几天前发布的 **[LinkedIn post](https://www.linkedin.com/posts/pranay01_something-ive-been-thinking-about-lately-activity-7428804029134225408-IXif?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC3MkwYBDZBMgATtR9hOGisjheK_u1VDu6w)**，这启发我写下了这篇文章。
