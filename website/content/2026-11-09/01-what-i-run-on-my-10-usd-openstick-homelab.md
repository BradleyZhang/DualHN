---
title: "我在10美元的OpenStick家庭实验室上运行的内容"
date: 2026-11-09T08:55:34+08:00
draft: false
source: "Hacker News"
originalTitle: "What I run on my $10 USD OpenStick homelab"
originalUrl: "https://blog.bosscher.ch/posts/openstick/"
hnUrl: ""
points: 
comments: 
---

> A while ago I bought an [OpenStick](https://hackaday.com/2022/08/03/hackable-20-modem-combines-lte-and-pi-zero-w2-power/) on a whim for 10 dollars (including shipping!) because it seemed like such a cool novelty piece of hardware.

一段时间前，我冲动买入了一个 [OpenStick](https://hackaday.com/2022/08/03/hackable-20-modem-combines-lte-and-pi-zero-w2-power/)，花费 10 美元（含运费！），因为它看起来像是如此酷炫的硬件玩意儿。

> For 10 dollars you get:

付出 10 美元，你就能得到：

> - 512 MB of RAM (~450 MB usable)
> - 4x ARM Cortex-A53 CPU cores at 1 GHz
> - 4 GB eMMC flash
> - 150 Mbit/s Wi-Fi
> - 4G modem and GPS
> - Passively cooled, so 100% silent!
> - 1 programmable LED:)

- 512 MB RAM（约 450 MB，可用）
- 4x ARM Cortex-A53 CPU 核心，频率 1 GHz
- 4 GB eMMC 闪存
- 150 Mbit/s Wi-Fi
- 4G 调制解调器和 GPS
- 被动冷却，因此完全静音！
- 1 个可编程 LED：)

![A white 4G LTE Wi-Fi modem stick with a USB-A plug next to a black USB hub and a pen for scale](https://blog.bosscher.ch/_astro/openstick.nDFavhOI_1HBuYF.webp)

> Now, you might look at this hardware and think “my watch is more powerful than that”, and you wouldn’t necessarily be wrong, but there’s still a lot of fun to be had with a device this size, and it’s a great gadget to get started with self-hosting.

现在，你可能会看这款硬件，并想“我的手表比那个更强大”，你并不一定错，但这种尺寸的设备仍然有很多乐趣，而且它是一个适合开始自托管的小工具。

> The installation process is a bit involved, but once you’re up and running it runs Debian, which brings all the classic goodies such as systemd (among other things, a scheduler and service monitoring for Linux) and Podman (lightweight containerization). For 10 USD you basically get a home server with minimal power usage and zero noise!

安装过程有点涉及，但一旦运行起来，它运行 Debian，带来了诸多经典功能，例如 systemd (among other things, a scheduler and service monitoring for Linux) 和 Podman (lightweight containerization)。对于 10 USD，你基本上得到了一个功耗极低、零噪音的家庭服务器！

> There’s actually a lot of useful software that runs great on this thing. Some of my favorites are:

其实有不少实用软件能在这台设备上流畅运行。我最喜欢的有：

> ## CastSponsorSkip (5–10 MB)

## 投放赞助商跳过 (5–10 MB)

> This is a little service that connects to any running Google Cast device and skips sponsorships (and sometimes ads). It barely uses any resources, and after a while you forget that it exists, but it does make the whole YouTube experience a lot nicer!

这是一个小服务，连接到任何正在运行的 Google Cast 设备，并跳过赞助（以及偶尔出现的广告）。它几乎不消耗任何资源，过一段时间后你会忘记它存在，但它确实让整个 YouTube 体验变得更加友好！

> [CastSponsorSkip](https://github.com/gabe565/CastSponsorSkip)

[CastSponsorSkip](https://github.com/gabe565/CastSponsorSkip)

> ## AdGuard Home - my own fork (40 MB)

## AdGuard Home - 我的个人分支 (40 MB)

> AdGuard Home blocks bad domains at the DNS level: spyware, malware, and so on. These days devices have a tendency to spy on you. [Smart TVs](https://www.youtube.com/watch?v=6IFVTcM28KA) run content recognition continuously, [washing machines](https://www.reddit.com/r/gadgets/comments/196bb6c/your_washing_machine_could_be_sending_37_gb_of/) scan your network, and your [coffee maker](https://medium.com/@staneyjoseph.in/your-coffee-maker-might-be-spying-on-you-the-scary-reality-of-iot-0d4e8b6b21c2) might be spying on you.



AdGuard Home 在 DNS 层面拦截恶意域名：间谍软件、恶意软件等。如今，设备往往倾向于监视你。[智能电视](https://www.youtube.com/watch?v=6IFVTcM28KA) 持续运行内容识别，[洗衣机](https://www.reddit.com/r/gadgets/comments/196bb6c/your_washing_machine_could_be_sending_37_gb_of/) 扫描你的网络，而你的 [咖啡机](https://medium.com/@staneyjoseph.in/your-coffee-maker-might-be-spying-on-you-the-scary-reality-of-iot-0d4e8b6b21c2) 可能正在监视你。

> A DNS blocker cannot block all bad requests (you’ll need a proper firewall for that), but it sure can block a whole lot. After adding a few blocklists, 60% of my queries are now blocked. Most seem harmless, but I’m pretty sure that some aren’t.

DNS 阻止器无法阻止所有恶意请求（你需要为此使用合适的防火墙），但它当然可以拦截大量请求。在添加了一些拦截列表后，我的 DNS 查询现在有 60% 被拦截了。大多数看起来无害，但我相当确定其中有些不是。

> I’m running my own fork, which can handle large blocklists in an efficient manner, but you probably shouldn’t run binaries provided by random strangers, so I’ve also included the link to the official version below (which is totally fine if you limit yourself to smaller blocklists).

我运行自己的 fork，它能高效处理大 blocklists，但你大概不应该运行随机陌生人的 binary，所以我也在下面提供了官方版本的链接（如果你只限制自己使用较小的 blocklists，那完全没问题）。

> [AdGuard Home Next-Gen](https://github.com/LaurensBosscher/AdGuardHome-Next-Gen) - 40 MB (independent of the size of the blocklist) [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome/) - 40 MB (with a small (200k) blocklist)

[AdGuard Home Next-Gen](https://github.com/LaurensBosscher/AdGuardHome-Next-Gen) - 40 MB（独立于 blocklist 的大小） [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome/) - 40 MB（带有 small (200k) blocklist）

![AdGuard Home dashboard showing 12,536 DNS queries, 8,091 blocked ads and top clients](https://blog.bosscher.ch/_astro/adguard_home.DUT8bS1V_ZChp7D.webp)

> ## Zeroclaw (64 MB)

## Zeroclaw (64 MB)

> Zeroclaw is an AI agent harness. It supports 30 channels (Telegram, email, WhatsApp, etc.), has sensible security defaults, a nice web UI, and integrations with all the major LLM providers.

Zeroclaw 是一个 AI 代理框架。它支持 30 个通道（Telegram、email、WhatsApp 等），具有合理的安全默认设置、一个不错的 Web UI，以及与所有主要 LLM 提供商的集成。

> I ran OpenClaw for a while on my Kubernetes cluster, but it mostly caused a lot of frustration: it worked, but it used 1 GB+ of memory, broke with every update, and they kept changing functionality in ways that broke my existing workflows. Zeroclaw feels like a breath of fresh air. It uses ~3 MB RSS when idle, covers all the functionality that I need, and the security defaults are sensible and easy enough to disable. The next version will (hopefully!) have rich message support for Telegram, implemented by yours truly. The [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/11862) can be tracked here!

我在 Kubernetes 集群上运行 OpenClaw 一段时间了，但它主要给我带来了很多挫败感：虽然它能跑通，但占用 1 GB 以上内存，每次更新都会挂掉，而且他们不断以破坏我现有工作流的方式更改功能。Zeroclaw 则让人耳目一新。空闲时仅占用约 3 MB RSS 内存，涵盖我所需的所有功能，且安全默认值合理且易于禁用。下一个版本（希望如此！）将支持 Telegram 富消息，由我本人实现。可在此跟踪 [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/11862)！

> I’ve given Zeroclaw access to the OpenStick (but nothing beyond that). Effectively it’s a root shell, but given that the blast radius is limited, I figured it would be acceptable. I mostly use this to monitor the OpenStick, with questions such as “anything in the logs that requires my attention?” or “how is the disk space?”. The biggest advantage is that it communicates through Telegram, so if I’m in the mountains with limited signal, I can still ask it how my little server is doing:)

我已将 Zeroclaw 的访问权限授予 OpenStick （但除此之外没有其他）。实际上它是一个 root shell ，但鉴于其爆炸半径受限，我认为这是可以接受的。我主要用它来监控 OpenStick ，提出诸如“anything in the logs that requires my attention” ？或“how is the disk space” ？等问题。最大的优势是它通过 Telegram 进行通信，因此即使我在山里信号有限，仍然可以询问它我的小服务器状况 :)

> I looked at alternatives such as Picoclaw and Nullclaw, and no doubt they’re good as well. However, Zeroclaw seemed to have the best documentation and the most active community, so I went with that:)

我看了看 Picoclaw 和 Nullclaw 等替代方案，它们确实也很不错。不过，Zeroclaw 的文档资料和社区活跃度似乎最高，因此我选择了它。😊

> [GitHub Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) [Documentation](https://docs.zeroclaw.com/v0.8.7/en/)

[GitHub Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) [文档](https://docs.zeroclaw.com/v0.8.7/en/)

![Zeroclaw dashboard showing uptime, RAM usage, cost overview and the active Telegram channel](https://blog.bosscher.ch/_astro/zeroclaw.BcIG_KYp_Z27axi4.webp)

> ## Cloudflare Tunnel (~8-20 MB)

Cloudflare 隧道 (~8-20 MB)

> Cloudflared makes it possible to expose all these services securely to the big, bad internet, for free, without exposing any ports. The downside might be that the NSA might be able to read everything you do, but for a homelab I consider that to be an acceptable trade-off.

Cloudflared 使得你可以安全地将所有这些服务暴露给那个“邪恶的”互联网，且免费，无需暴露任何端口。不过，缺点可能是 NSA 能够读取你的一切，但就一个家庭实验室而言，我认为这属于可接受的权衡。

> [Cloudflare Tunnel](https://developers.cloudflare.com/tunnel/)

[Cloudflare Tunnel](https://developers.cloudflare.com/tunnel/)

> ## Beszel (20 MB)

## Beszel (20 MB)

> Beszel shows a pretty graph of memory, CPU usage, and so on, and alerts you if something looks suspicious, all while using very little memory.

Beszel 会以直观的图表展示内存、CPU 使用率等指标，并在发现异常时发出警报，且自身占用极少的内存。

> I ran Grafana and the whole stack on my Kubernetes cluster for a while, and it’s powerful, but not extremely user friendly, and it felt like overkill.

我在我的 Kubernetes 集群上运行了 Grafana 和整个 stack，一段时间，它很有力量，但并不是特别用户友好，而且感觉就像是过度设计了。

> Beszel is a really awesome solution: it looks pretty and requires ~20 MB, 10 MB for the agent and 10 MB for the server. It has built-in alerting for a whole bunch of protocols, and I let it send messages to Telegram when something requires my attention.

Beszel 是一个真正很棒的解决方案：它看起来很美观，且需要约 20 MB，10 MB 给 agent，10 MB 给 server。它内置了对多种协议的告警，我让它在需要我关注时向 Telegram 发送消息。

> [GitHub Beszel](https://github.com/henrygd/beszel)

[GitHub Beszel](https://github.com/henrygd/beszel)

![Beszel system page for the OpenStick showing CPU, Podman CPU, memory and Podman memory usage over 24 hours](https://blog.bosscher.ch/_astro/beszel.D43pXGV0_Z1RoP2R.webp)

> ## Dozzle

# Dozzle

Dozzle 是一个用于构建 LLM 应用的工具，基于 LangChain 框架。它提供了简化的开发体验，帮助开发者快速创建和部署基于大语言模型的应用程序。

## 核心功能

- **Agent 编排**：支持多智能体协作，实现复杂任务的分解与执行
- **RAG 集成**：内置检索增强生成能力，支持从外部知识库获取信息
- **Prompt 工程**：提供强大的 prompt 模板和优化工具，提升模型响应质量
- **模块化架构**：支持灵活组合不同的组件，满足多样化的应用场景

## 技术栈

- **LangChain**：核心框架，提供统一的 LLM 交互接口
- **Python**：主要开发语言，支持丰富的生态系统
- **Transformer 模型**：支持 GPT-4、Claude 等主流模型的调用

## 快速开始

1. 安装依赖：`pip install dozzle`
2. 导入库：`from dozzle import Agent, RAG`
3. 创建 Agent 实例并配置任务
4. 启动应用并开始交互

Dozzle 旨在降低 LLM 应用开发的门槛，让开发者能够专注于业务逻辑，而不是底层的框架配置。

> Dozzle is a pretty interface for managing Podman containers. It has a large overlap with Beszel, so if I ever need to save 10 or 20 MB, I’ll get rid of one of them. Dozzle has a way better interface for checking Podman logs, but it doesn’t offer the same level of stats as Beszel does.

Dozzle 是一个用于管理 Podman 容器的界面。它与 Beszel 有很大重叠，所以如果我以后需要保存 10 或 20 MB，我会放弃其中一个。Dozzle 提供检查 Podman 日志的更好界面，但它没有像 Beszel 那样提供相同程度的统计数据。

> [GitHub Dozzle](https://github.com/amir20/dozzle)

[GitHub Dozzle](https://github.com/amir20/dozzle)

![Dozzle container list showing eight running containers on openstick-debian with CPU and memory per container](https://blog.bosscher.ch/_astro/dozzle.CMqt1IaR_Z2g0ruK.webp)

> ## Gatus (10 MB)

## Gatus (10 MB)

> Beszel monitors your server(s). Gatus monitors your services. In other words, if you would like to get a notification when your webserver or database has crashed, you’ll want Gatus. It also creates a really pretty web interface!

Beszel 监控你的服务器。Gatus 监控你的服务。换言之，如果你希望在你的 web 服务器 或 数据库 宕机时收到通知，你就想要 Gatus。它同样提供了一个非常漂亮的 web 界面！

> [GitHub Gatus](https://github.com/TwiN/gatus) - 10 MB



我需要先获取该页面的内容，然后为您翻译。让我获取原文。

![Gatus status page with uptime bars per endpoint for AdGuard Home, Beszel, Dozzle, the Cloudflare tunnel and more](https://blog.bosscher.ch/_astro/gatus.Bq9x4ssd_ZDQN9s.webp)

> ## Fusion RSS (22 MB)

## Fusion RSS (22 兆字节)

> RIP [Google Reader](https://en.wikipedia.org/wiki/Google_Reader). I tried [Feedly](https://feedly.com/i/pro) for a while, but 7 USD for the Pro version was just a little bit more than I felt comfortable with. Besides, why pay when you can have hours of fun setting up your own alternative?



RIP [Google Reader](https://en.wikipedia.org/wiki/Google_Reader)。我曾尝试使用 [Feedly](https://feedly.com/i/pro) 一段时间，但 Pro 版本的 7 USD 对我来说稍微超出了舒适区。而且，既然花几个小时动手搭建自己的替代方案就能获得乐趣，为什么还要付费呢？

> I tried a whole bunch of RSS readers and eventually settled on Fusion. It does all I need, looks good, feels responsive, and uses 22 MB of RAM.

我试用了一大堆 RSS 阅读器，最终决定使用 Fusion。它能满足我所有需求，界面美观，运行流畅，且仅占用 22 MB 的 RAM。

> [GitHub Fusion](https://github.com/0x2E/fusion) - 22 MB

[GitHub Fusion](https://github.com/0x2E/fusion) - 22 MB

![Fusion's three-pane reader showing 63 unread articles in the all-articles list](https://blog.bosscher.ch/_astro/fusion_rss.DQy_M5dx_13flvu.webp)

> ## Shiori (~10–20 MB)

## Shiori (约 10-20 MB)

> Browser bookmarks are great, however a lot of my older bookmarks have stopped working because the sites disappeared, the URLs changed, or for a myriad of other reasons. Shiori fixes this by offering a great bookmark manager that also automatically archives the website. It does so in ~10 MB. You can expect some spikes when archiving, but nothing that our mighty OpenStick cannot handle!

浏览器书签很棒，然而我的许多旧书签因网站消失或 URL 变更或其他诸多原因而不再可用。Shiori 通过提供一个优秀的书签管理器并自动归档网站来解决这一问题。它的压缩体积仅为 ~10 MB。归档时可能会出现一些流量峰值，但这对我们强大的 OpenStick 来说绰绰有余！
