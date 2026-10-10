---
title: "Cloudflare acquires Deno"
date: 2026-10-10T16:55:13+08:00
draft: false
source: "Hacker News"
originalTitle: "Deno is joining Cloudflare"
originalUrl: "https://deno.com/blog/cloudflare"
hnUrl: ""
points: 
comments: 
---

> For years, we’ve been working to make building server software simpler. We questioned how modules could be distributed, what security guarantees a JavaScript runtime could provide, what belonged in a complete toolchain, and how easily an application could be distributed as a standalone executable. Compatibility with Node.js became an important part of that work too: our users wanted the Deno improvements while continuing to plug into the existing JS ecosystem. The team and community built a runtime that brought these capabilities together and challenged assumptions about what JS development could look like.

多年来，我们一直致力于简化服务器软件的构建工作。我们探索了模块如何分发、JavaScript 运行时能提供何种安全保障、完整工具链中应该包含什么，以及应用程序如何作为独立可执行文件轻松分发。与 Node.js 的兼容性也是这项工作的重要组成部分：我们的用户希望享受到 Deno 的改进，同时仍能融入现有的 JS 生态系统。团队和社区共同构建了一个运行时，将这些能力汇聚在一起，并挑战了人们对 JS 开发可能形态的既定假设。

> **Today we’re announcing that the entire Deno team is joining [Cloudflare](https://www.cloudflare.com/) to take that work further.**

**今天我们宣布，整个 Deno 团队加入 [Cloudflare](https://www.cloudflare.com/) 以进一步推进该工作。**

> Our ambition has always extended beyond the runtime. I wrote about this in my [JavaScript Containers](https://tinyclouds.org/javascript-containers/) blog post: compute, storage, and communication working together, without every application assembling its own infrastructure.

我们的目标始终超越运行时。我在《JavaScript Containers》这篇博客文章（https://tinyclouds.org/javascript-containers/）中写道：计算、存储和通信可以协同工作，而无需每个应用程序自行构建基础设施。

> With [Deno Deploy](https://deno.com/deploy), we took another step towards that goal. We wanted to make running applications as straightforward as possible. But building and operating Deploy also showed us how much complexity remained underneath that developer experience. I wanted to simplify that layer, too.

使用 [Deno Deploy](https://deno.com/deploy)，我们向那个目标迈进了一步。我们希望让运行应用尽可能简单。但构建和运维 Deploy 也向我们展示了，在该开发者体验之下仍残留着多少复杂性。我也想简化那一层。

> This led to [celld](https://celld.dev/). Building on the [Cloudflare Workers](https://www.cloudflare.com/products/workers/) programming model, celld lets developers build distributed applications from the start while making the system simple to operate. What excites me greatly is that the scaling is built into the programming model, rather than infrastructure each app has to assemble itself.

这导致了 [celld](https://celld.dev/)。基于 [Cloudflare Workers](https://www.cloudflare.com/products/workers/) 编程模型，celld 让开发者能够从一开始就构建分布式应用，同时使系统易于操作。令我兴奋的是，扩展被内置到了编程模型中，而不是每个应用都必须自行搭建基础设施。

> The progression from Deno to Deno Deploy to celld explains why this move makes sense to us. At Cloudflare we’ll combine our work with that of the Workers and [Durable Objects](https://developers.cloudflare.com/durable-objects/) teams. We want to make this programming model the default way to build servers, whether you run on Cloudflare’s network or your own infrastructure.

从 Deno 到 Deno Deploy 再到 celld，这一演进过程阐明了我们为何认为这一步移动如此合理。Cloudflare 我们将与 Workers 及[Durable Objects](https://developers.cloudflare.com/durable-objects/)团队的工作结合。在我们看来，我们希望将这套编程模型设为构建服务器的默认方式，无论您在 Cloudflare 的网络上运行，还是在自有基础设施上运行。

> Joining also means choosing where to focus our effort. We’ve decided to put our future development work into this shared platform rather than continuing to develop a separate runtime and hosting service. We know this is a consequential change for people who have built on Deno.

加入也意味着选择我们的重点。我们决定将我们的未来开发工作投入到这个 shared platform 而不是继续开发独立的 runtime 和 hosting service。我们知道这是一个重大的变更，对于已经建立在 Deno 上的用户。

> To everyone who contributed code, built businesses on Deno, reported problems, and trusted our direction: thank you. Here’s what this means concretely:

对所有为 Deno 做出贡献、构建业务、使用、报告问题并信任我们方向的人表示感谢。以下是这具体意味着什么：

- We will support the [Deno runtime](https://github.com/denoland/deno) for another year with monthly releases containing bug fixes and security updates. After that year we will end our development of the Deno runtime. Deno will remain open source, and we welcome others who want to continue its development.
- Deno Deploy will continue operating for six months before shutting down. We will provide migration support for paying customers moving to Cloudflare Workers.
- [JSR](https://jsr.io/) will continue operating, with its infrastructure moving to Cloudflare.
- We will continue supporting [`rusty_v8`](https://github.com/denoland/rusty_v8) and work toward integrating it into [`workerd`](https://github.com/cloudflare/workerd).

> The need for better abstractions is especially acute with AI. Durable Objects bring together capabilities that are particularly useful for agent harnesses: inexpensive, serverless execution, persistent state, WebSockets, and a high-level JavaScript interface. This is what I’m most excited to explore and why celld focuses on Durable Objects.



AI 领域对于更好抽象的需求尤为迫切。Durable Objects 整合了诸多对 Agent Harness 极具价值的功能：低成本无服务器执行、持久化状态、WebSockets 以及一套高级 JavaScript 接口。这正是我最为期待去探索的方向，也是 celld 聚焦于 Durable Objects 的原因。

> Kenton Varda and I explain more in our [joint post on the Cloudflare blog](http://blog.cloudflare.com/deno-joins-cloudflare). If you’re building agents at scale and want to run them on your own infrastructure, please reach me now at [ry@cloudflare.com](mailto:ry@cloudflare.com).



Kenton Varda 和我在我们的 [Cloudflare 博客联合博文](http://blog.cloudflare.com/deno-joins-cloudflare) 中进行了更深入的解释。如果您正在大规模构建 Agent 并希望在自己的基础架构上运行它们，请立即通过 [ry@cloudflare.com](mailto:ry@cloudflare.com) 联系我。
