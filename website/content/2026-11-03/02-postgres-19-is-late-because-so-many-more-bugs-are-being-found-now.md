---
title: "PostgreSQL 19 因发现大量漏洞而延迟"
date: 2026-11-03T12:45:31+08:00
draft: false
source: "Hacker News"
originalTitle: "Postgres 19 is late, and it's AI's fault"
originalUrl: "http://rhaas.blogspot.com/2026/10/postgres-19-is-late-and-its-ais-fault.html"
hnUrl: ""
points: 
comments: 
---

> Over the past decade, the timing of PostgreSQL major releases has become very predictable: no earlier than the middle of September, and no later than the middle of October. This year is going to be different. PostgreSQL 19 most likely won’t be released until November, and it’s not impossible that the project could decide to postpone the release further.

过去十年以来，PostgreSQL 主要版本的发布时间变得非常可预测：不少于九月中旬，不晚于十月中旬。今年将会有所不同。PostgreSQL 19 最可能推迟到十一月份发布，且项目进一步推迟发布也并非不可能。

> Moreover, this year, several rather large features were reverted quite late in the beta period: UPDATE/DELETE FOR PORTION OF, SQL Property Graph Queries (SQL/PGQ), and ALTER TABLE … MERGE PARTITION/SPLIT PARTITION were all reverted between August 27 and September 15. While major feature reverts are not especially uncommon immediately after feature freeze, which each year occurs on April 8, it is unusual to see multiple major features get pulled from the release at such a late date. So, what happened?

此外，今年，几个相当大的功能在 Beta 阶段相当晚的时候被回退：UPDATE/DELETE FOR PORTION OF、SQL Property Graph Queries (SQL/PGQ) 和 ALTER TABLE … MERGE PARTITION/SPLIT PARTITION 均在 8 月 27 日至 9 月 15 日之间被回退。虽然主要功能回退在功能冻结后立即发生并不罕见，功能冻结每年在 4 月 8 日进行，但在此么晚的日期看到多个主要功能从发布版本中被移除，还是不寻常的。那么，发生了什么？

> The short answer is that LLMs happened. All software contains bugs, and PostgreSQL’s code base is large, complex, and old. Our git history – converted from CVS – now reaches back more than 30 years, and the first code was written a decade before that. There’s a huge amount of code, and that code contains a huge number of bugs. That’s always been true, and it hasn’t stopped PostgreSQL from being popular or successful. What’s different now is that it’s become vastly easier to find those bugs. Fixing them has also gotten easier, but not to the same degree.

简短的答案是 LLMs 发生了。 所有软件都包含错误， PostgreSQL 的代码基座庞大、复杂且古老。 我们的 git 历史 – 经过 CVS 转换 – 现在可追溯到超过 30 年，而第一段代码是在其之前十年写的。 代码量巨大， 且其中包含大量错误。 这一直是事实， 且它并未阻止 PostgreSQL 成为流行或成功的项目。 现在的不同之处在于它已极大地更容易发现这些错误。 修复它们也变得更容易， 但程度不及以前。

> Between April 8th, 2025 and September 25, 2025, there were 1037 commits to PostgreSQL’s master branch and 724 commits to REL\_18\_STABLE. In 2026, during the same date range, there were 1443 commits to the master branch and 1169 commits to REL\_19\_STABLE. In other words, if you look at the number of commits that went into the master branch only between feature freeze and September 25th, it actually declined slightly from last year to this year, but the number of back-patched commits jumped by more than 60%.

在 2025 年 4 月 8 日至 9 月 25 日之间，PostgreSQL 的 master branch 有 1037 次提交，REL\_18\_STABLE 有 724 次提交。在 2026 年，同一日期范围内，master branch 有 1443 次提交，REL\_19\_STABLE 有 1169 次提交。换句话说，如果只看功能冻结期至 9 月 25 日之间进入 master branch 的提交数量，与去年相比实际上略有下降，但回溯修补的提交数量增长了超过 60%。

> It’s possible that some of this jump is the result of committers making more mistakes this year than they did last year, but I don’t think anyone who works on the project really believes that’s the main cause. Rather, it seems likely that PostgreSQL committers were about as conservative in 2026 as they were in preceding years, but a lot more of the mistakes they made were quickly found by LLMs.

这可能是今年提交者比去年更多错误导致的 jump ，但我认为项目中的任何人真的认为这是主要原因。相反，看来 PostgreSQL committers 在 2026 年的保守程度和以往年份差不多，但他们犯的错误被 LLMs 更快发现。

> And it isn’t just mistakes in the latest release. In the same time period, during 2025, there were 248 commits to REL\_17\_STABLE, and during 2026, there were 433 commits to REL\_18\_STABLE. In other words, the number of commits being back-patched not just to the release in progress but also to at least one prior release jumped by more than 74% in a single year. The reason for this is simply that a huge number of people on the Internet are now reporting bugs in PostgreSQL that they found using LLMs, and the PostgreSQL committers have been very, very busy fixing them.

And it isn’t just mistakes in the latest release. 在同一时间段内，2025 年有 248 个提交到 REL_17_STABLE，2026 年有 433 个提交到 REL_18_STABLE。换言之，仅限于当前发行版的提交数不仅回溯到了至少一个先前的发行版，而且同比增长了 74% 以上的一年。原因很简单：互联网上大量人员现在正使用 LLMs 在 PostgreSQL 中报告 Bug，而 PostgreSQL 提交者 一直非常非常忙于修复它们。

> And I think that’s also why we had so many late reverts, and why the release itself is delayed. Two factors are at play here.



我认为这也是为什么我们会有这么多后期回退，以及为什么发布本身会延迟。这里主要有两个因素在起作用。

> First, because so many more bugs are being found now, it takes more time to fix them. LLMs can draft fixes, but those fixes aren’t always correct or compliant with PostgreSQL standards. So, they still need to be reviewed and committed by humans, and those humans have not gotten any smarter between 2025 and 2026.



首先，由于现在发现的 bug 越来越多，修复它们需要花费更多的时间。LLMs 可以草拟修复方案，但这些修复方案并不总是正确的，也不总是符合 PostgreSQL 标准。因此，它们仍然需要由人工进行审查和提交，而这些人类在 2025 年至 2026 年之间并没有变得更聪明。

> Second, time that would have been spent reviewing what went into the release got diverted into addressing security issues and other bugs in the back-branches, and so it took longer to figure out what needed to be reverted before shipping v19.

其次，本应用于审查发布内容的时间被分流至解决 back-branches 中的安全问题和其他 Bug，导致在发布 v19 前确定需回滚的内容耗时更长。

> In the end, I don’t think that the delay in shipping PostgreSQL 19 is particularly concerning. It is not a long delay in the grand scheme of things, and it emerges directly from the project’s concern for quality.

归根结底，我不认为 PostgreSQL 19 的发布延迟特别令人担忧。从整体来看，这并不是一个很长的延迟，而且它直接源于项目对质量的重视。

> The long-term picture is less clear and in some ways more troubling: given that we have forty years of bugs that humans were unable to find but LLMs are quite capable of discovering, how are we ever going to catch up, and how will PostgreSQL continue to innovate? Right now, I’m not sure. What I do know is that I, and many others, are working really hard to figure it out.

长期来看，情况并不明朗，甚至在某些方面更为令人担忧：鉴于我们已经积累了四十年的缺陷，人类一直无法发现，但大语言模型却能轻松发现，我们该如何赶超？PostgreSQL将如何继续创新？我目前心里没底。我只知道，我和许多其他人正在努力工作，试图找到答案。

> I became a PostgreSQL developer partly because the PostgreSQL code base is some of the cleanest and highest-quality code upon which I have ever had the privilege to work. The recent success of AI in finding bugs in that code base does not change my high estimation of it. It is not perfect – no software product is – but if it had more defects visible even to human eyes, the number of things found by LLMs would likely be even greater.

我之所以成为 PostgreSQL 开发者，部分原因在于 PostgreSQL 代码库是我有幸参与过的最整洁、质量最高的代码库之一。AI 近期在该代码库中发现 Bug 的成功，并未改变我对它的高度评价。它并非完美无缺——没有任何软件产品是完美的——但如果连人眼可见的缺陷更多，LLM 发现的问题数量很可能会更大。

> There’s no escaping the fact that LLMs are going to require every PostgreSQL developer – and some extent, every software developer on earth – to raise their game. Every feature that we write from now until the end of our careers will be scrutinized by AI, and things that would have escaped forever unnoticed in an earlier era will now be found, perhaps in a matter of hours. That’s both a challenge and an opportunity.

我们无法忽视这样一个事实：大型语言模型将迫使每个 PostgreSQL 开发者——乃至全球所有软件开发者——提升自己的技能水平。从今天起，直到我们职业生涯的终点，我们所撰写的每一项功能都将受到人工智能的严格审查，那些在过去永远不会被发现的缺陷，如今可能在短短几小时内就会被 выявлены выявлены выявлены выявлены выявлены выявлены выявлены выявлены выявлены выявлены выявлены выявлены выявлены выявлены выявлены выявлены выявлены выявлены выявлены выяв

> \[This blog post originally appeared at [https://neon.com/blog/postgres-19-is-late-and-its-ais-fault](https://neon.com/blog/postgres-19-is-late-and-its-ais-fault)\]



\[本文最初发表于 [https://neon.com/blog/postgres-19-is-late-and-its-ais-fault](https://neon.com/blog/postgres-19-is-late-and-its-ais-fault)\]
