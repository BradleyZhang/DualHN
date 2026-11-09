---
title: "再见 Claude，你好 Pi"
date: 2026-11-09T09:26:29+08:00
draft: false
source: "Hacker News"
originalTitle: "Goodbye Claude, Hello Pi"
originalUrl: "https://caleb.software/posts/claude-to-pi.html"
hnUrl: ""
points: 
comments: 
---

> [caleb.software](https://caleb.software/)

[caleb.software](https://caleb.software/)

> I’ve been a longtime Claude Code user, ever since it became available in the Claude Pro subscription plan over a year ago. I remember the first time I used it, feeling giddy as it spat out messy Python code for whatever random weekend project I was working on, all from a single prompt. I’m certain that in a few years we’ll all look back at its release as one of the major drivers of this new era of software development we’re in.

我一直是 Claude Code 的长期用户，自从一年多前它在 Claude Pro 订阅计划中推出以来便是如此。我记得第一次使用它时，兴奋不已，它为我当时做的任何随机周末项目吐出了一堆混乱的 Python 代码，只需一个 prompt。我确信，几年后我们都会回顾它的发布，将其视为我们所处的这个软件开发新时代的主要推动力之一。

> Despite this, due to an accumulation of many small frustrations, I’ve finally decided to retire it as my main coding harness and migrate my development setup to use [Pi](https://pi.dev/) instead.

尽管如此，由于积累了许多小的挫折，我终于决定将其作为我的主要编码工具放弃，并将我的开发设置迁移到使用 [Pi](https://pi.dev/) 而已。

> Someone at Anthropic must’ve caught wind… just a day after making my decision, they announced Claude Code would [finally start supporting](https://code.claude.com/docs/en/memory#agents-md) `AGENTS.md` files in an effort to get me to stay. Unfortunately, for me it was too little, too late.

Anthropic 的某人必然察觉到了… 就在我做出决定的一天后，他们宣布 Claude Code [finally start supporting](https://code.claude.com/docs/en/memory#agents-md) `AGENTS.md` files 试图留住我。可惜对我来说已经太晚了。

> ## Complaining

## 抱怨

> In lieu of a proper obituary, I’d like to take this time to say a few words about the things I liked least about Claude Code (and thus what I’m looking forward to avoiding with Pi).

我不写正式的悼词了，借此机会谈谈我最不喜欢 Claude Code 的地方（因此也是我期待在 Pi 中避免的地方）。

> The `AGENTS.md` thing kind of epitomizes the whole reason I decided to quit using Claude Code. Don’t get me wrong, having a ton of `CLAUDE.md` files scattered about various GitHub hobby repos is great guerrilla marketing. But it sucks for users to have to deal with copying or symlinking between the two formats.

`AGENTS.md` 这事，某种程度上体现了我决定停止使用 Claude Code 的全部原因。请不要误会，在各种 GitHub 业余项目里散落大量 `CLAUDE.md` 文件，固然是很棒的游击营销。但对用户来说，在两种格式间进行复制或创建软链接，体验很差。

> Like the Luddite I am, I still prefer to review most of the code it churns out before I commit it. I use(d) Claude Code inside VSCode, and it lets you connect the harness to the IDE. This is nice because you can highlight text in a file and have it automatically included in the context when asking questions or requesting changes during a review.

像 L...". 我仍然更倾向在提交前审阅它生成的大部分代码。我使用 Claude Code 在 VSCode 中，它让你将 harness 连接到 IDE。这点很好，因为你可以在文件中高亮文本，并在提问或在审阅期间请求修改时自动将其包含在上下文中。

> Except you can only have one session “connected” to the IDE at a time. If you open a second tab to start another task while the first one works, it can’t receive the text selection events from the IDE at all. This has been reported at *least* as far back as [December 2025](https://github.com/anthropics/claude-code/issues/14865) … and closed as a duplicate of a totally unrelated bug.[^1]

除了你只能在同一时间只有一个“连接”到IDE的会话。如果你在第一个任务运行时打开第二个标签页开始另一个任务，第一个任务将完全无法从IDE接收文本选择事件。这个问题最早在[December 2025](https://github.com/anthropics/claude-code/issues/14865)被报告……并被关闭为与完全无关的另一个Bug的重复。[^1]

![claude code in vscode showing disconnected error](https://caleb.software/assets/img/claude-to-pi/vsc-disconnected.png)

> Of course, you can always use the official Claude Code VSCode GUI extension, which does allow you to have multiple tabs open and load the text selection into the context of each. But this extension has plenty of problems of its own. Half of the built-in slash commands don’t work at all in the GUI. It doesn’t have any support for a custom status line. Subagent output messages are simply layered into the main chat thread in chronological order, which is a mess to read when more than one is running. I could go on and on.



当然，你也可以始终使用官方的 Claude Code VSCode GUI 扩展，它确实支持同时打开多个标签页，并将文本选择加载到各自的上下文中。但这个扩展自身也存在诸多问题。内置的斜杠命令有一半在 GUI 中完全无法使用。它不支持自定义状态栏。子智能体的输出消息只是按时间顺序堆叠在主聊天线程中，当有多个子智能体同时运行时，阅读起来会非常混乱。诸如此类的问题，我可以一直列举下去。

> In spite of all of these existing issues, it seems like Anthropic has worked at a feverish pace to pack more features into Claude Code without much care for quality or stability. [Dynamic workflows](https://code.claude.com/docs/en/workflows), [agent teams](https://code.claude.com/docs/en/agent-teams), [ultrareviews](https://code.claude.com/docs/en/ultrareview) – all great ways to help enterprise customers burn ever more tokens each day, but not really anything I want or need.



尽管存在上述所有问题，Anthropic 似乎仍在以狂热的速度将更多功能硬塞进 Claude Code，对质量或稳定性关注甚少。[Dynamic workflows](https://code.claude.com/docs/en/workflows)、[agent teams](https://code.claude.com/docs/en/agent-teams)、[ultrareviews](https://code.claude.com/docs/en/ultrareview) —— 这些都是帮助每天消耗更多 token 的企业客户的好方法，但并不是我真正想要或需要的。

> Alongside all of these feature releases, they always seem to be fiddling with things in ways that mess up my personal setup. At the time of writing, there have been **244** releases to Claude Code this year; over 3/4 of these changed the system prompt or tool descriptions, which can substantially change how the LLM performs (especially when these new instructions contradict user prompts or repo conventions).

伴随着所有的这些功能发布，他们似乎总是会以这样的方式折腾某些东西，从而搞乱了我的个人设置。写作时，今年发布了 **244** 个 Claude Code 版本；超过 3/4 的版本更改了 system prompt 或 tool descriptions，这可能显著改变 LLM 的表现（尤其是当这些新指令与用户提示或仓库约定相矛盾时。） 

Wait, period should be Chinese full stop. Let's correct final. 
伴随着所有的这些功能发布，他们似乎总是会以这样的方式折腾某些东西，从而搞乱了我的个人设置。写作时，今年发布了 **244** 个 Claude Code 版本；超过 3/4 的版本更改了 system prompt 或 tool descriptions，这可能显著改变 LLM 的表现（尤其是当这些新指令与用户提示或仓库约定相矛盾时）。伴随着所有的这些功能发布，他们似乎总是会以这样的方式折腾某些东西，从而搞乱了我的个人设置。写作时，今年发布了 **244** 个 Claude Code 版本；超过 3/4 的版本更改了 system prompt 或 tool descriptions，这可能显著改变 LLM 的表现（尤其是当这些新指令与用户提示或仓库约定相矛盾时）。

> And what are all those changes for? Despite [chopping 80% of the system prompt](https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models), Claude Code still has way more overhead than Pi for seemingly no benefit. The default Bash tool’s description is almost 3,000 tokens, most of which is random stuff about using git and opening PRs on GitHub.[^2] The models already know how to do this without detailed instructions, by the way.[^3]

这些变化到底是为了什么？尽管[chopping 80% of the system prompt](https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models)，Claude Code 却比 Pi 有更多的开销，毫无实质益处。默认 Bash 工具的描述几乎达到了 3,000 个 token，其中大部分是关于使用 git 和在 GitHub 上打开 PRs 的随机内容。[^2] 模型已经知道如何在没有详细指令的情况下完成这项工作，顺便一提。[^3]

> ## Looking Forward

## 期待未来

> This post has been a lot of hating. I’m sorry! That’s not my usual style, and I do think Anthropic has made a really cool piece of software here. I’m also not under any delusion that I would’ve done a better job if I were the one in charge of running Claude Code from the beginning. LLM coding harnesses are a very new space and being one of the first to innovate in a field is a really hard task. Later tools like Pi have the benefit of hindsight to see what works and what doesn’t, what’s a core feature and what can be cut.

这篇帖子被喷得太多了。我很抱歉！这并不是我平时的风格，而且我确实认为 Anthropic 在这里做了一件很酷的软件。我也不认为自己如果当时就是负责从一开始运行 Claude Code 的人，会做得更好。LLM 编码工具是一个非常新的领域，第一个在这个领域里进行创新的人真的很难做。像 Pi 这样的后续工具则有后见之明，可以看看到什么可行、什么不可行，什么才是核心功能，什么可以被削减。

> Ultimately, CC feels like a product without a strong vision or direction. It’s as if a bunch of excited engineers and PMs are rapidly tacking on whatever features suit their workflow… but without consideration for how this might make things worse for other users. It seems like there isn’t someone high-up whose job is strictly to say “no” to these requests, which is incredibly important when it comes to product engineering. So, for now, I’m leaving.

最终来说， CC 感觉像是一个没有明确远景或方向的产品。这就像一群兴奋的工程师和 PMs 正在快速地添加任何适合他们工作流的功能……但是，没有考虑这会让情况对其他用户变得更糟。看起来，并没有高层有人专门的职责是必须说“不”来应对这些请求，而在产品工程中，这一点非常重要。所以，暂时我还是要离开。

> I’m excited to lean more into Pi. The first few days required some finagling, but since then it’s been smooth sailing. I’m enjoying the stability, minimalist approach, and the extreme level of customizability. I’ve already written a couple of extensions to support my use cases, which I’m hoping to share soon after I’ve cleaned them up a bit. If you’re also feeling these frustrations, I’d highly encourage giving an open source harness a try!

我很兴奋能更多地使用Pi。前几天需要一些调整，但现在一切顺利。我喜欢它的稳定性、极简主义的方法以及极高的可定制性。我已经写了一些扩展来支持我的使用场景，我希望在稍微整理好之后尽快分享。如果你也在经历这些挫折，我强烈建议你尝试一下这个 open source harness！

> [^1]: It’s not like there’s some huge technical roadblock to this either. After installing Pi, I wrote an extension to handle this very functionality across multiple open tabs in like 20 minutes.

[^1]: 这也并非有什么巨大的技术阻塞。安装 Pi 后，我写了一个扩展，用不到 20 分钟就实现了这个功能，并将其应用到多个打开的标签页中。

> [^2]: Bonus points for the fact that it instructs the model to use `cat <<'EOF'` which (prior to widespread rollout of `auto` mode) would *always* trip the manual review rules regardless of existing git command allowlists.

[^2]: 加分之处在于 它指示模型使用 `cat <<'EOF'` 而在 `auto` 模式广泛推出之前，*always* 触发人工审核规则，无论已有的 git 命令 allowlists 如何。

> [^3]: If you assume 1 million DAU and 100M requests per day, trimming 1,000 tokens off of this could literally save millions of dollars in inference costs per year. Surely that’s worth some engineer’s time??



[^3]: 如果你假设每天有 100 万 DAU 和 1 亿次请求，从中削减 1,000 个 token 每年确实可以在推理成本上节省数百万美元。这肯定值得工程师花些时间吧？
