---
title: '本地 AI 初学者指南：Inkling、Qwen 和 Unsloth'
date: 2026-11-24T13:31:03+08:00
draft: false
source: "Hacker News"
originalTitle: 'A beginner''s guide to Local AI with Inkling, Qwen, and Unsloth'
originalUrl: "https://www.gpupartner.com/blog/beginners-guide-local-ai-inkling-qwen-unsloth"
hnUrl: ""
points: 
comments: 
---

> We have AI at home! Set up your own free personal ChatGPT on your PC with Unsloth and Inkling or Qwen. It's private, and the whole house can use it.

我们在家用上 AI！在你的 PC 上，使用 Unsloth 和 Inkling 或 Qwen 来设置你自己的免费个人版 ChatGPT。它是私有的，而且全屋都能使用。

![NVIDIA GeForce RTX 5090 Founders Edition, close on its two fans, against a green background of white blueprint line drawings.](https://cdn.gpupartner.com/prod/nvidia-geforce-rtx-5090-green-blueprint-hero-1440x600.jpg)

> With the launch of [open-weight](https://www.gpupartner.com/reference/open-weights) models like Qwen, cloud-based LLM providers seem like they're more of infrastructure or appliance businesses when it comes to most routine tasks that an AI model can handle.

随着 [open-weight](https://www.gpupartner.com/reference/open-weights) 模型（如 Qwen）的推出，在 AI 模型能够处理的大多数常规任务方面，基于云的 LLM 提供商似乎更像是基础设施或设备类业务。

> OpenAI and Anthropic have displayed a pattern of dropping model quality in the 'latest' version and controlling exactly what you're allowed to run on their models. Add to this ballooning costs and privacy concerns, and we get a pretty good case for moving away from this 'convenient' cloud experience.

OpenAI 和 Anthropic 已经表现出一种在 “latest” 版本中降低模型质量的模式，并控制你在使用其模型时被允许运行的内容。再加上激增成本和隐私问题，我们得出了个相当充分的理由，去远离这种 “convenient” 云体验。

> That's basically where I was too. I wanted to offload certain token-heavy research, data collection, or coding tasks to an AI model without staring at usage limits all day. So, as any reasonable human being would do, I decided to set up my own [local AI](https://www.gpupartner.com/reference/local-llm): a Claude and ChatGPT replacement that runs at home on my own hardware.

我当时的情况基本也是这样。我想把那些消耗 Token 多的研究、数据收集或编码任务卸载给 AI 模型，又不想整天盯着使用额度发愁。于是，像任何一个讲道理的人会做的那样，我决定搭建属于自己的 **本地 AI**：一个运行在自家硬件上的 [Claude 和 ChatGPT 替代品](https://www.gpupartner.com/reference/local-llm)。

> Since this was my first attempt, my primary focus was keeping it simple and hosting it on Windows. If you're a beginner, you can follow along to get one going on your home network too.

由于这是我第一次尝试，我的首要重点是保持简单，并在 Windows 上托管它。如果你是初学者，也可以按照步骤，在家庭网络上搭建一个。

> Once you have the hardware sorted, it takes about 10-15 minutes (excluding download times).

硬件配置完成后，大约需要 10-15 分钟（不包括下载时间）。

> ### The short version

### 简版

> Install Unsloth Desktop, download a quantized AI model that fits your GPU's VRAM, set your context size, and turn on LAN access so everyone at home can use it.

安装 Unsloth Desktop, 下载一个适合你的 GPU VRAM 的量化 AI 模型，设置你的上下文大小，并开启 LAN 访问，这样家里所有人可以使用它。

> ## What Do You Need to Run a Local AI at Home?

## 在家运行本地 AI 需要什么？

> Not much (other than the hardware). Here's a short list:

（除了硬件）没什么了。这里有一个简短的列表：

> - **A Windows PC with a graphics card (GPU).** The more video memory (VRAM) it has, the bigger the model it can run. I'm using an [RTX 5090](https://www.gpupartner.com/tools/vram-calculator/machines/rtx-5090) with 32GB VRAM for this setup.
> - **Unsloth Desktop.** A free app that 'serves' the AI model to you through a chat interface. [Get it from Unsloth](https://unsloth.ai/docs/desktop).
> - **An AI model sized to fit your GPU.** We'll pick one in the next section.

- **一台配备显卡（GPU）的 Windows PC。** 它拥有的显存（VRAM）越多，可运行的模型尺寸就越大。在本配置中，我使用的是配备 32GB VRAM 的 [RTX 5090](https://www.gpupartner.com/tools/vram-calculator/machines/rtx-5090)。
- **Unsloth Desktop。** 一款通过聊天界面为你提供 AI 模型服务的免费应用。[从 Unsloth 获取](https://unsloth.ai/docs/desktop)。
- **一个适合你 GPU 的 AI 模型。** 我们将在下一节中选择一个。

> That's it. No terminal commands, Python environments, or subscriptions required.

那就够了。不需要终端命令、Python 环境或订阅。

> ## Which AI Model Can Your GPU Run?

## 你的 GPU 能运行哪个 AI 模型？

> It depends on how much [VRAM](https://www.gpupartner.com/reference/vram) your graphics card has. As a rough guide, 8-12GB of VRAM handles smaller 9B-12B models, while 32GB comfortably runs 27B-35B models with plenty of room for long conversations.

取决于你的显卡有多少 [VRAM](https://www.gpupartner.com/reference/vram)。作为粗略指南，8-12 GB 的 VRAM 可以处理较小的 9B-12B 模型，而 32 GB 可以舒适运行 27B-35B 模型，留有充足空间进行长对话。

> On consumer-grade hardware, we'll need smaller models. The full-size Qwen model sits at around 56GB and won't really fit on a consumer graphics card unless you're running a Mac with unified memory. That's where quantization comes in.

在消费级硬件上，我们需要更小的模型。全尺寸 Qwen 模型约 56 GB，在消费级显卡上基本放不下，除非你在 Mac 上运行搭载 unified memory。正是 quantization 解决了这个问题。

> ### What Is Quantization?

### 什么是量化？

> [Quantization](https://www.gpupartner.com/reference/quantization) shrinks a model by compressing weights and moving to a lower precision. You basically trade some accuracy for a model that actually fits on your GPU and runs faster.

[Quantization](https://www.gpupartner.com/reference/quantization) 通过压缩权重和降低精度来压缩模型。实际上，以牺牲一部分精度为代价，换取了一个能实际部署在 GPU 上且运行更快的模型。

![The same close-up of an RTX 5090 fan shown three times: at 8 bits per pixel with 256 shades of grey, at 4 bits with 16 shades and faint banding, and at 2 bits with 4 shades, where it turns blotchy.](https://cdn.gpupartner.com/prod/quantization-same-photo-8-bit-4-bit-2-bit.png)

> The same photo stored at 8, 4 and 2 bits per pixel. A model's weights lose detail the same way going from Q8 to Q4 to Q2.

同一张照片以每像素 8、4 和 2 比特存储。一个模型的权重在从 Q8 到 Q4 再到 Q2 时，也会以同样的方式丢失细节。

> If you're wondering whether this tradeoff is worth it, well, it depends. You'll find that certain types of workloads don't really care and give similar outputs, while others may be nearly unusable.

如果你在考量这种权衡是否值得，那得看具体情况。你会发现，某些类型的工作负载对此并不敏感，产出相似的输出；而另一些则可能几乎无法使用。

> ### Which Model Should You Run for Your VRAM?

### 该为您的 VRAM 选择运行哪个模型？

> For this guide, we'll be going with Qwen3.8-27B with 4-bit quantization on my system with an RTX 5090. Going up a tier is an option thanks to its 32GB of VRAM, but I wanted to allow for a larger [context window](https://www.gpupartner.com/reference/context-window) (how much of the conversation the model can keep in mind at once) rather than cramming in the largest model that fits.

在本指南中，我们将在配备 RTX 5090 的系统上使用 4-bit 量化的 Qwen3.8-27B。得益于其 32GB 显存，提升一档也是可行的，但我希望留出更大的 [context window](https://www.gpupartner.com/reference/context-window)（模型一次能记住多少对话内容），而不是硬塞进能放下的最大模型。

![Bar chart of Qwen3.8-27B memory with a 128K context: 16-bit 61.0 GB, 8-bit 36.7, 6-bit 30.4, 5-bit 27.6, 4-bit 24.9, 3-bit 21.9, 2-bit 18.9. A line marks a 32 GB card; 6-bit and below fit under it.](https://cdn.gpupartner.com/prod/qwen3-8-27b-memory-by-precision-128k-context-chart.png)

> Qwen3.8-27B at each precision with a 128K context, from our [VRAM calculator](https://www.gpupartner.com/tools/vram-calculator/qwen3.8-27b). At 4-bit, the model and the context fit a 32 GB card with room to spare.

Qwen3.8-27B 在每个精度下均支持 128K 上下文，来自我们 [VRAM 计算器](https://www.gpupartner.com/tools/vram-calculator/qwen3.8-27b)。在 4-bit 下，模型和上下文都能放入一张 32 GB 显卡，且有富余空间。

> If you want to run a model of this caliber with excellent performance, a hilariously overpriced RTX 5090 (remember when $1,999 felt too high?) is unfortunately still not a terrible 'deal' these days. The other option is way more expensive [enterprise-grade GPUs](https://www.gpupartner.com/inventory/gpu).

如果你希望以出色的性能运行这种级别的大模型，那么一块贵得离谱的 RTX 5090（还记得当初 1,999 美元都觉得贵得离谱吗？） unfortunately 在今天依然算不上一个糟糕的“选择”。另一个选择要昂贵得多：[企业级 GPU](https://www.gpupartner.com/inventory/gpu)。

> If you're on a GPU with less VRAM, you can still get something very usable going right away. The table below gives you a rough idea of where you can start.

如果你在 GPU 上 显存 (VRAM) 较少，你仍然可以立即开始使用非常可用的东西。 下面的 table 给出了大致的启动位置概览。

> Models marked MoE ([mixture of experts](https://www.gpupartner.com/reference/mixture-of-experts)) only run a few billion of their parameters for each token. They keep a decent speed on a smaller card with the rest held in system RAM, which is why a 35B model sits in the 16 GB row. On an RTX 5060 Ti 16GB, [our calculator](https://www.gpupartner.com/tools/vram-calculator?m=qwen3.6-35b-a3b&hw=rtx-5060-ti-16gb) puts Qwen3.6-35B at about 47 tokens per second this way.

标记为 MoE（[mixture of experts](https://www.gpupartner.com/reference/mixture-of-experts)）的模型每个 token 仅运行其参数中的几十亿个。它们将其余部分保留在系统 RAM 中，因此在较小显存的卡上仍能保持不错的速度，这就是 35B 模型会出现在 16 GB 这一行的原因。在 RTX 5060 Ti 16GB 上，[我们的计算器](https://www.gpupartner.com/tools/vram-calculator?m=qwen3.6-35b-a3b&hw=rtx-5060-ti-16gb)显示，Qwen3.6-35B 以这种方式运行约为 47 tokens/s。

> Feel free to experiment with several models until you find one that fits your needs. You can also use [GPUPartner's VRAM Calculator](https://www.gpupartner.com/tools/vram-calculator) to get an estimate.

不妨尝试几个不同的模型，直到找到符合你需求的那一个。你也可以使用 [GPUPartner's VRAM Calculator](https://www.gpupartner.com/tools/vram-calculator) 进行估算。

> ### Can You Run Inkling 2 on an RTX 5090?

### 你能在 RTX 5090 上运行 Inkling 2 吗？

> Inkling 2 Mini, yes. Inkling 2 Small, no.

Inkling 2 Mini，支持；Inkling 2 Small，不支持。

> [Inkling 2 Mini](https://unsloth.ai/docs/models/inkling-2-mini) is the newest model in this size class. Thinking Machines Lab released it on November 17, 2026: 26.4B parameters, Apache 2.0, vision support and a 1M-token context. Unsloth's recommended file, UD-Q4\_K\_XL, is 17.6 GB. That is within 0.1 GB of the Qwen3.8-27B file in this guide, so it sits on a 32GB card the same way and leaves about 14GB for context.

[Inkling 2 Mini](https://unsloth.ai/docs/models/inkling-2-mini) 是该尺寸类别中最新的模型。 Thinking Machines Lab 于 2026 年 11 月 17 日： 26.4B 参数， Apache 2.0 ， 视觉支持 和 1M-token 上下文 。 Unsloth 推荐的文件 UD-Q4_K_XL 为 17.6 GB 。 它比 Qwen3.8-27B 文件 仅 0.1 GB ， 因此在 32GB 显卡上同样运行 ， 并 留出 约 14GB 用于上下文。

> Nothing else in this guide changes. Update Unsloth Desktop first, because Inkling 2 needs a recent build, then search for Inkling 2 Mini in the same drop-down in Step 2.

本指南中没有其他内容需要更改。请先更新 Unsloth Desktop，因为 Inkling 2 需要最新构建，然后在 Step 2 中相同的下拉列表中搜索 Inkling 2 Mini。

> Those figures are Unsloth's. They count RAM and VRAM together and cover the model alone, so a long context needs more. Inkling 2 Mini is a mixture-of-experts model with 5.4B parameters active, so the 4-bit file also runs on a 16 GB card with the remainder in system RAM, a little slower.

这些数值来自 Unsloth。它们将 RAM 和 VRAM 合并计算，且仅涵盖模型本身，因此长上下文需要更多资源。Inkling 2 Mini 是一个拥有 5.4B 活跃参数的 mixture-of-experts 模型，因此 4-bit 文件也可以在 16 GB 显卡上运行，其余部分放在系统 RAM 中，速度会稍慢。

> [Inkling 2 Small](https://unsloth.ai/docs/models/inkling-2-small) is small in name only. It is a 594B model, and the smallest file Unsloth publishes is 171.7 GB. That is unified-memory territory: a [256GB Mac Studio](https://www.gpupartner.com/inventory/systems/apple-mac-studio-m3-ultra-256gb-2tb) or a [DGX Station](https://www.gpupartner.com/inventory/systems/nvidia-dgx-station-1x-nvidia-gb300-grace-blackwell-ultra-desktop-superchip), not a graphics card.

[Inkling 2 Small](https://unsloth.ai/docs/models/inkling-2-small) 是名不副实。它是 594B 模型，而 Unsloth 发布的最小文件是 171.7 GB，这属于统一内存范畴：一个 [256GB Mac Studio](https://www.gpupartner.com/inventory/systems/apple-mac-studio-m3-ultra-256gb-2tb) 或一个 [DGX Station](https://www.gpupartner.com/inventory/systems/nvidia-dgx-station-1x-nvidia-gb300-grace-blackwell-ultra-desktop-superchip)，而不是显卡。

> ### Can You Run a Local AI on a Mac?

### 在 Mac 上运行 本地 AI 吗？

> Yes. You'll find good alternatives in [Apple's Mac lineup](https://www.gpupartner.com/inventory/systems/apple-mac-studio-m3-ultra-256gb-2tb) thanks to its [unified memory](https://www.gpupartner.com/reference/unified-memory). Macs are pretty good at running larger models, even if they don't offer the best performance. Just make sure you grab the MLX flavor that is custom-built for Apple Silicon.

是的。你在 [Apple's Mac lineup](https://www.gpupartner.com/inventory/systems/apple-mac-studio-m3-ultra-256gb-2tb) 中会找到不错的替代方案，得益于其 [unified memory](https://www.gpupartner.com/reference/unified-memory)。Mac 在运行较大模型方面表现不错，即使它们不提供最佳性能。只需确保你获取专为 Apple Silicon 定制的 MLX 版本即可。

> The same trade applies to unified-memory PCs like the [MSI PRO MAX EDGE AI+ 11M](https://www.gpupartner.com/inventory/systems/msi-pro-max-edge-ai-plus-11m-128gb) and NVIDIA's [DGX Spark](https://www.gpupartner.com/inventory/systems/nvidia-dgx-spark-128gb-4tb).

同样的权衡也适用于统一内存 PC，例如 [MSI PRO MAX EDGE AI+ 11M](https://www.gpupartner.com/inventory/systems/msi-pro-max-edge-ai-plus-11m-128gb) 和 NVIDIA 的 [DGX Spark](https://www.gpupartner.com/inventory/systems/nvidia-dgx-spark-128gb-4tb)。

> ## How Do You Set Up a Local AI with Unsloth Desktop?

## 如何本地设置一个 AI 使用 Unsloth Desktop?

> It takes three steps: install Unsloth Desktop, download your model, and set the context size. I'll go over these steps in more detail below so you can follow along.

总共分三步：安装 Unsloth Desktop、下载你的模型并设置上下文大小。下面我会更详细地介绍这些步骤，方便你跟着操作。

> ### Step 1: Install Unsloth Desktop

Unsloth Desktop 是一个基于 Electron 的桌面应用程序，旨在为用户提供本地运行 LLM 微调的图形界面。以下是安装步骤：

### 下载与安装

1. **访问官网**：前往 [Unsloth Desktop 官方网站](https://unslothai.com/)，点击 "Download Desktop" 按钮。

2. **选择操作系统**：根据你的系统选择对应的安装包：
   - **Windows**：下载 `.exe` 安装程序
   - **macOS**：下载 `.dmg` 文件
   - **Linux**：下载 `.AppImage` 文件

3. **运行安装程序**：
   - **Windows**：双击 `.exe` 文件，按照安装向导完成安装。
   - **macOS**：打开 `.dmg` 文件，将 Unsloth Desktop 图标拖拽到应用程序文件夹。
   - **Linux**：赋予 `.AppImage` 文件执行权限（`chmod +x`），然后直接运行。

### 首次运行

安装完成后，启动 Unsloth Desktop。首次运行时，程序会自动配置所需的 Python 环境和依赖库，这可能需要几分钟时间，请耐心等待。

### 系统要求

- **操作系统**：Windows 10+、macOS 11+ 或 Ubuntu 20.04+
- **内存**：建议 8 GB 以上（16 GB 推荐）
- **存储空间**：至少 20 GB 可用空间
- **网络**：稳定的互联网连接（用于下载模型和依赖）

> **注意**：Unsloth Desktop 内置了 Python 环境，无需提前安装 Python。如果遇到问题，可以查看 [官方文档](https://docs.unsloth.ai/) 或加入 [Discord 社区](https://discord.gg/unsloth) 获取帮助。

> First, we'll need a solution that 'serves' the AI model to you. My pursuit of simplicity narrowed my choices down to LM Studio or Unsloth Desktop. Both abstract away a ton of terminal commands and handle Python environments and dependencies behind a nice, simple UI, which makes them excellent picks for a first home setup.

首先，我们需要一个能将 AI 模型“服务”给你的解决方案。我对简洁性的追求将我的选择缩小到了 LM Studio 或 Unsloth Desktop。两者都屏蔽了大量的终端命令，并在一个简洁易用的 UI 背后处理 Python 环境和依赖，这使得它们成为首次搭建家庭环境的绝佳选择。

> I landed on Unsloth Desktop mostly because, well, I liked the name better. Also, it didn't try to push the very thing I was trying to escape when I opened its website: a subscription.

我主要选择 Unsloth Desktop ， 因为 其实， 我更喜欢它的名字。 此外， 它没有试图推销我正在逃避的那件事 ： 订阅。

> The community seems to like it overall too, so that's another point in its favor.

社区整体上似乎也喜欢它，所以这是它的另一个加分项。

> Once you've clicked through the installer and launched Unsloth, you'll see a window like this one.

点击完成安装程序并启动 Unsloth 后，你会看到这样一个窗口。

![Unsloth Desktop home screen on first launch: sidebar with New chat, Model hub and Library, a Select model drop-down, and an empty chat box.](https://cdn.gpupartner.com/prod/unsloth-desktop-first-launch-home-screen.png)

> Unsloth Desktop on first launch, before any model is loaded.

Unsloth Desktop 在首次启动时，在加载任何模型之前。

> ### Step 2: Download a Quantized Model

### 步骤 2：下载量化模型

> On the top left of this main window, you can pick the model that you want to use from the drop down. We'll be using Qwen3.8-27B.

此主窗口左上角的下拉菜单中，您可以选择想要使用的模型。我们将使用 Qwen3.8-27B。

![Unsloth Desktop model picker open on the Recommended tab, with Qwen3.8-27B-GGUF loaded at the top of the list.](https://cdn.gpupartner.com/prod/unsloth-desktop-model-picker-recommended-list.png)

> The model picker. Qwen3.8-27B is first on the Recommended list.

我注意到你只提供了半句话，缺少上下文，我无法准确翻译。请提供完整的英文原文，这样我才能给出高质量的中文翻译。

> You should see a submenu like the one below when you click on a model. I'll be using Unsloth's UD-Q4\_K\_XL version. The M and S versions are smaller, but the XL version behaves much closer to the full-size model without filling up our VRAM, so it seemed like a good pick for my GPU.

点击某个模型后，你应该会看到类似下面这样的子菜单。我将使用 Unsloth 的 UD-Q4\_K\_XL 版本。M 和 S 版本更小，但 XL 版本的表现更接近完整尺寸的模型，同时不会占满我们的 VRAM，因此对我的 GPU 来说似乎是个不错的选择。

![Qwen3.8-27B quantization list in Unsloth Desktop, UD-Q4_K_XL marked downloaded at 18 GB with a gear icon beside it.](https://cdn.gpupartner.com/prod/unsloth-desktop-quantization-list-ud-q4-k-xl.png)

> Every quantization of Qwen3.8-27B with its download size. The gear next to the downloaded one holds the context setting.

每种 Qwen3.8-27B 量化版本及其下载大小。已下载版本旁边的齿轮图标用于上下文设置。

> ### Step 3: Set the Context Size

### 步骤 3：设置上下文大小

> Once the download completes, you should see a gear icon to the right of the model as shown in the screenshot above. Here, you can set your context size manually or leave it on Auto if you aren't sure how much you need.

下载完成后，你应该会在模型右侧看到一个齿轮图标，如上图所示。在这里，你可以手动设置上下文大小；如果不确定需要多少，也可以保持在 Auto。

> I'll be setting mine to 128K (unquantized) and might reassess after I've run the model through a few of my routine tasks for a few weeks. Again, you can use this [VRAM calculator](https://www.gpupartner.com/tools/vram-calculator/qwen3.8-27b) to help you with these numbers for [your specific GPU](https://www.gpupartner.com/tools/vram-calculator/machines).

我会将其设置为 128K（未量化），并在将模型跑完几周日常任务后重新评估。同样，你可以使用这个 [VRAM 计算器](https://www.gpupartner.com/tools/vram-calculator/qwen3.8-27b) 来帮助你计算 [你的特定 GPU](https://www.gpupartner.com/tools/vram-calculator/machines) 的这些数值。

> At this point, our first local AI is up and running, and you can start chatting with it right inside Unsloth.

在这一点上，我们的第一个本地 AI 已启动运行，你现在就可以在 Unsloth 中与它开始聊天。

> Remember, your mileage may vary depending on your setup.

请记住，根据您的具体设置，实际效果可能会有所不同。

> ## How Do You Share a Local AI Across Your Home Network?

## 如何在家庭网络中共享本地 AI？

> Short answer: Unsloth Desktop has LAN sharing built in. Set a Remote password, start LAN access, and share the address it gives you with anyone on your home network.

简短回答：Unsloth Desktop 内置局域网共享功能。设置远程密码，启动局域网访问，然后将其提供的地址分享给你家庭网络中的任何人。

> Once Unsloth Desktop is set up with a model, you might want to give family members or friends access too. For now, we'll only serve it over our local network, so my family can use it without needing physical access to this PC.

一旦 Unsloth Desktop 配置好模型，你可能还想让家人或朋友也能访问。目前，我们只会通过本地网络提供服务，这样我的家人无需实际接触这台 PC 就能使用它。

> Head into Unsloth Desktop settings (gear icon on bottom left), and look for the 'Remote & LAN' tab.

进入 Unsloth Desktop 设置（左下角的齿轮图标），并查找“Remote & LAN”选项卡。

![Unsloth Desktop Remote & LAN settings, showing the Remote access and LAN access cards, each with a Start button.](https://cdn.gpupartner.com/prod/unsloth-desktop-remote-lan-access-settings.png)

> Settings, Remote & LAN. LAN access is the second card. The Remote access card above it is for a later part.

设置、Remote & LAN。LAN 访问是第二个 card。位于其上方的 Remote access card 用于后面的部分。

> Most of this section will be greyed out until you set a Remote password. Once you've set a password, you'll see a 'Start' button for LAN access. Click that and you should see an address that anyone on your home network can open in a browser to use a local AI model within a chat interface. They'll sign in as 'unsloth' with the Remote password you set.

本节大部分内容在设置 Remote 密码之前会被灰显。设置密码后，你将看到一个用于 LAN 访问的 'Start' 按钮。点击它，你应该会看到一个地址，任何家庭网络上的用户都可以在浏览器中打开，以使用本地 AI 模型在聊天界面内。他们将使用你设置的 Remote 密码 以 'unsloth' 身份登录。

> Just keep in mind that the PC needs to stay on with Unsloth running for anyone to reach it.

请注意，PC 需要保持开启并运行 Unsloth，以便任何人可以访问它。

> ## Can You Access Your Local AI Across the Internet? Soon™

## 你能通过互联网访问你的本地 AI 吗？Soon™

> Not with this setup alone. Everything so far is limited to your local home network.

仅凭此设置无法实现。目前所有内容均仅限于您的本地家庭网络。

> If you just need a chat interface like ChatGPT, Gemini, etc. to work within your home network, you're basically done at this point! You and anyone on your network can start talking to an AI model hosted on your machine right away.

如果你只需要像 ChatGPT 、Gemini 等的聊天界面在 home 网络内工作，你基本上已经完成 ！你和网络上的任何人都可以立即开始与在你的机器上托管的 AI 模型进行交流。

> In the next parts, we'll cover performance, tunneling, as well as setting up an agent that runs locally and uses only the web tools you allow it to use. This will let you automate more complex tasks like coding, research, and so much more without being tied to a subscription or usage limits and censorship.

在接下来的部分中，我们将介绍性能、tunneling，以及如何设置一个在本地运行、并且只使用你允许它使用的 web 工具的 Agent。这样一来，你就可以自动化更复杂的任务，比如编程、研究等等，而无需受限于订阅、使用限制和审查。

> As always, my focus remains simplicity that allows my family to use it without too much guidance or help.

总是如此，我的关注点仍然是简洁，这让我的家人能够在不需要太多指导或帮助的情况下使用它。

> PS. If you have any recommendations for agentic harnesses or even models to try, feel free to [let me know](https://www.gpupartner.com/contact) and I'll give them a go!

PS. 如果你有任何推荐 agentic harnesses 或 即使 models to try，欢迎 [let me know](https://www.gpupartner.com/contact) 并且我会试一试！

> ## Sources

请提供需要翻译的英文原文内容。已收到您的翻译要求和准则，请发送具体的技术文档、文章或代码注释等文本，我将根据您的要求进行翻译。

> - local LLM
> - local AI
> - self-hosted LLM
> - Unsloth Desktop
> - Unsloth Studio
> - LM Studio
> - Qwen3.8-27B
> - Inkling 2 Mini
> - Inkling-2-Mini
> - Inkling 2 Small
> - Thinking Machines Lab
> - GGUF
> - UD-Q4\_K\_XL
> - quantization
> - VRAM
> - context window
> - RTX 5090
> - LAN access
> - Windows
> - MLX
> - Apple Silicon
> - unified memory
> - Gemma 4
> - gpt-oss-20b
> - Qwen3-Coder-30B
> - Qwen3.6-35B
> - RTX PRO 4500 Blackwell
> - Mac Studio
> - DGX Spark
> - VRAM calculator
> - personal ChatGPT
> - private ChatGPT
> - ChatGPT alternative
> - Claude alternative

- 本地 LLM
- 本地 AI
- 自托管 LLM
- Unsloth Desktop
- Unsloth Studio
- LM Studio
- Qwen3.8-27B
- Inkling 2 Mini
- Inkling-2-Mini
- Inkling 2 Small
- Thinking Machines Lab
- GGUF
- UD-Q4_K_XL
- quantization
- VRAM
- context window
- RTX 5090
- LAN access
- Windows
- MLX
- Apple Silicon
- unified memory
- Gemma 4
- gpt-oss-20b
- Qwen3-Coder-30B
- Qwen3.6-35B
- RTX PRO 4500 Blackwell
- Mac Studio
- DGX Spark
- VRAM calculator
- personal ChatGPT
- private ChatGPT
- ChatGPT alternative
- Claude alternative
