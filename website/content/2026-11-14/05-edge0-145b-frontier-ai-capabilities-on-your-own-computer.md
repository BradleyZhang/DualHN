---
title: 'Edge0-145B：在您自己的电脑上进行前沿人工智能能力'
date: 2026-11-14T10:01:14+08:00
draft: false
source: "Hacker News"
originalTitle: '145B: Open-Source On-Device AI with 145B Parameters'
originalUrl: "https://edge0.ai/blog/introducing-edge0-145b-frontier-ai-capabilities-on-your-own-computer"
hnUrl: ""
points: 
comments: 
---

> Today, we're open-sourcing **Edge0-145B and Edge0-120B**, together with our unified inference framework and deployment tools. Edge0-145B is the world's first open-source on-device AI model with 145 billion parameters. It brings coding, reasoning, and agent capabilities that rival frontier cloud models to your own computer.

今天，我们开源发布了 **Edge0-145B and Edge0-120B**，并发布了我们的统一推理框架和部署工具。 Edge0-145B 是世界上第一个开源的端侧 AI 模型，拥有 145 billion 参数。它将把能够与最前沿的云端模型相媲美的编码、推理和智能体能力，带到你的电脑上。

> On-device AI has long forced a tradeoff between model capability and what the hardware can run. Larger models demand more memory, bandwidth, and power; smaller models can struggle with complex work. Moving that work to the cloud adds model-provider fees, data-handling constraints, and a dependence on connectivity.

端侧 AI 长期以来迫使模型能力与硬件可运行内容之间进行权衡。更大的模型需要更多内存、带宽和功耗；更小的模型在处理复杂任务时可能会遇到困难。将这些工作迁移到云端会带来模型提供商费用、数据处理约束以及对网络连接的依赖。

> This release addresses those constraints in four ways:

此版本以四种方式解决了这些限制：

> | **The constraint** | **What Edge0-145B makes possible** |
> | --- | --- |
> | Large models are difficult to run on personal hardware. | A 145B model runs locally on a compatible laptop, with reported peak memory of 29GB and decoding above 80 tokens/s. |
> | Small on-device models can fall short on demanding tasks. | Coding, reasoning, and instruction-following results are competitive with specific frontier cloud models, as the comparisons below show. |
> | A useful assistant needs to finish work, not just answer questions. | The model plans, writes and runs code, debugs errors, and checks results visually for projects such as 3D scenes, games, hardware programs, and PCB designs. |
> | Cloud workflows bring recurring fees, sensitive-data restrictions, and network dependence. | Local inference incurs no corresponding cloud-model token or API fees; data can stay on the computer, and core capabilities keep working offline. Hardware and electricity still cost money. |

| **The constraint** | **What Edge0-145B makes possible** |
| --- | --- |
| 大型模型在个人硬件上运行困难。 | 一个 145B 规模的模型可以在兼容笔记本电脑上本地运行，报告峰值内存为 29 GB，并解码速度超过 80 token/秒。 |
| 小型设备端模型可能在苛刻任务上表现不佳。 | 编码、推理和指令遵循的结果与特定前沿云端模型相当，如下比较所示。 |
| 一个有用的助手需要完成工作，而不仅仅是回答问题。 | 该模型规划、编写并运行代码、调试错误，并对项目如 3D 场景、游戏、硬件程序和 PCB 设计进行视觉检查。 |
| 云工作流会带来重复费用、敏感数据限制以及网络依赖。 | 本地推理没有对应的云模型令牌或 API 费用；数据可以留在计算机上，核心能力仍能离线运行。硬件和电力仍然需要付费。 |

> We're releasing the full stack so developers can reproduce the results, evaluate or fine-tune the models, and integrate them into their own products.

我们正在发布完整的全栈技术，以便开发者能够复现这些结果、评估或微调（fine-tune）这些模型，并将它们集成到自己的产品中。

> Get the [model weights](https://huggingface.co/Edge0), explore the [inference framework](https://github.com/Edge0-AI/Edge0), or try the [Edge0 App](https://github.com/Edge0-AI/Edge0/releases/tag/v0.2.0).

获取[模型权重](https://huggingface.co/Edge0)，探索[推理框架](https://github.com/Edge0-AI/Edge0)，或试用 [Edge0 App](https://github.com/Edge0-AI/Edge0/releases/tag/v0.2.0)。

> ## How We Make 100B+ Parameter AI Run on a Personal Computer

## 如何让 100B+ 参数 AI 在个人电脑上运行

> ### Edge0-145B Laptop Performance: Memory, Speed, and Power

### Edge0-145B 笔记本性能：内存、速度与功耗

> Edge0-145B makes a 145-billion-parameter model usable on a personal laptop. A useful local model has to fit in memory, process prompts promptly, generate fast enough to use, and keep power consumption under control. It also needs to sustain longer tasks.

Edge0-145B 使一个 1450 亿参数的模型能够在个人笔记本上使用。一个实用的本地模型必须能够装入内存、及时处理提示词、生成速度快到足以使用，并将功耗控制在合理范围内。它还需要能够持续处理较长的任务。

> | Requirement | Reported Edge0-145B result | What it enables |
> | --- | --- | --- |
> | Memory | **29GB peak memory** | Runs on a compatible personal laptop, such as a MacBook Pro, without a server. |
> | Prompt processing | **1,100+ tokens/s prefill** | Processes long prompts, including dozens of pages of code, before generation begins. |
> | Generation | **80+ tokens/s decode** | Generates faster than a person reads. |
> | Power | **Approximately 120W typical power** | Sustains operation without throttling in the reported setup. |
> | Long tasks | **128K–256K context** | Maintains essentially the same speed on long inputs, supporting extended work. |

| 需求 | 报告的 Edge0-145B 结果 | 能够实现的功能 |
| --- | --- | --- |
| 内存 | **29GB 峰值内存** | 可在兼容的个人笔记本电脑（如 MacBook Pro）上运行，无需服务器。 |
| Prompt 处理 | **1,100+ tokens/s 预填充** | 在生成开始前处理长 prompt，包括数十页代码。 |
| 生成 | **80+ tokens/s 解码** | 生成速度快于人的阅读速度。 |
| 功耗 | **典型功耗约 120W** | 在报告的配置下可持续运行而不会降频。 |
| 长任务 | **128K–256K 上下文** | 在长输入上保持基本相同的速度，支持扩展工作。 |

> Our earlier Edge0-35B phone release reported peak memory below 2.5GB. On an iPhone 18 Pro Max, Edge0-35B delivers 37+ tokens/s using approximately 2.5GB of memory. Edge0-145B has roughly four times as many parameters; its laptop comparison reports 80+ tokens/s and 28GB peak memory. These measurements apply to different models and hardware.

我们此前的 Edge0-35B 手机端发布报告称峰值内存低于 2.5GB。在 iPhone 18 Pro Max 上，Edge0-35B 使用约 2.5GB 内存可实现 37+ tokens/s 的速度。Edge0-145B 的参数量约为其四倍；其笔记本电脑对比测试报告为 80+ tokens/s 和 28GB 峰值内存。这些测量结果适用于不同的模型和硬件。

![Image](https://cdn.hashnode.com/uploads/gql/6aea03219fa4aa99923b5acf/aeeae022-73c9-4d31-847a-d495a5af3200.png)

> *On-device model scale over time. The chart covers 67 open models of at least 1B parameters from 14 labs, intended for phones, laptops, and AI PCs. Same-size base, instruct, and reasoning variants count once; each line tracks a lab's largest model, including releases before July 2025. Filled points mark new highs and hollow points other releases. The scale is logarithmic below 40B and linear above it. Apple is excluded because its weights are not released. Sources: vendor announcements and model cards.*

*端侧模型规模随时间的变化。该图表涵盖来自 14 家实验室的 67 个开放模型，参数规模至少为 1B，适用于手机、笔记本电脑和 AI PC。同尺寸的 base、instruct 和 reasoning 变体仅计一次；每条曲线追踪该实验室规模最大的模型，包括 2025 年 7 月之前的发布。实心点标记新纪录，空心点标记其他发布。纵轴在 40B 以下采用对数刻度，以上采用线性刻度。Apple 因未发布权重而被排除在外。来源：厂商公告和模型卡。*

> ### Why On-Device Models Have Stayed Small

### 为什么端侧模型规模一直较小

> Memory limits kept most on-device models below 10B parameters before September 2026. Apple Intelligence's on-device foundation model had approximately 3B parameters, while Google's Gemini Nano came in 1.8B and 3.25B versions. Even a 7B model could consume approximately 4GB of memory.

在 2026 年 9 月之前，内存限制使大多数端侧模型的参数量保持在 10B 以下。Apple Intelligence 的端侧基础模型约有 3B 参数，而 Google 的 Gemini Nano 则有 1.8B 和 3.25B 两个版本。即使是 7B 模型也可能消耗约 4GB 内存。

> Larger models faced a memory wall. Model weights occupy storage and must be read during generation, competing for limited memory and bandwidth with the operating system and other apps. Even an aggressively compressed 35B model could need approximately 20GB of memory, far more than a phone could make available.

更大的模型面临着内存墙的限制。模型权重占用存储空间，且在生成过程中必须被读取，这导致它们与操作系统及其他应用程序争夺有限的内存和带宽。即使是经过激进压缩的 35B 模型，也可能需要约 20GB 内存，远超手机所能提供的水平。

> Compute, bandwidth, and power created competing constraints. Larger models offered more capability, but strained memory capacity, generation speed, and battery life. Making models smaller helped them fit, often at the cost of capability.

算力、带宽和功耗构成了相互竞争的约束。更大的模型提供了更多能力，但内存容量、生成速度和电池寿命都难以兼顾。减小模型尺寸有助于其适配，但通常以牺牲能力为代价。

> Privacy alone could not close that gap. Apple Intelligence protected user data, but Apple acknowledged that its on-device model was not designed for agentic applications requiring general world knowledge. The prevailing assumption was that on-device intelligence could not match the cloud.

仅靠隐私无法弥合这一差距。Apple Intelligence 保护了用户数据，但 Apple 承认，其端侧模型并非为需要通用世界知识的 agentic 应用而设计。主流假设是，端侧智能无法与云端匹敌。

> ### Under the Hood of Edge0: Four Layers of Model and Inference Design

### Edge0 底层揭秘：四层模型与推理设计

> We designed Edge0-145B and its inference engine together to reduce the memory and data movement that make large models difficult to run locally. The design spans architecture, training, loading, and scheduling.

我们将 Edge0-145B 与其推理引擎进行协同设计，以减少阻碍大模型在本地运行的内存占用和数据搬运。该设计涵盖架构、训练、加载和调度。

> **Architecture: share large matrices across sparse experts.** Sharing matrices substantially reduces the weights that must be stored and moved while keeping the expert count unchanged. Each group of 64 experts shares two large matrices, while each expert retains a small set of parameters that captures its differences. Previously, every expert stored a complete set of matrices. Of the model's 145B total parameters, only approximately 10B participate in computation on each inference step.

**架构：跨稀疏专家共享大矩阵。** 通过共享矩阵，可以显著减少存储和传输的权重数量，同时保持专家数量不变。每组 64 个专家共享两个大矩阵，而每个专家则保留一套小型参数，用于捕捉其自身特征。此前，每个专家都需要存储完整的一套矩阵。在模型的 1450亿个总参数中，每次推理时只有约 100 亿个参数参与计算。

> **Training: build for local execution from day one.** We train the model in its on-device architecture from the outset, with deployment constraints built into its design. This avoids treating local deployment as a compression or pruning step after training a cloud model.

**训练：从第一天起就为本地执行而构建。** 我们从一开始就在其端侧架构中训练模型，并将部署约束内置于设计中。这避免了在训练云端模型之后，将本地部署视为压缩或剪枝步骤。

> **Loading: pipeline GPU memory, system memory, and SSD access.** Reading and computation overlap across three storage tiers, avoiding serial waits. Frequently used “hot experts” remain in GPU memory. An expert library of approximately 40GB sits in system memory, with experts brought into GPU memory as needed. Approximately 48GB of vocabulary data resides on the SSD and is read on demand.

**加载：在 GPU 内存、system memory 与 SSD 之间进行管道化访问。 读取与计算在三个存储层之间并行， 避免串行等待。 常用 “hot experts” 仍然留在 GPU 内存。 一个 约 40GB 的 专家库 位于 system memory 中，随需求将专家加载到 GPU 内存。 大约 48GB 的 词汇数据 位于 SSD 上，按需读取。

> **Scheduling: use the CPU and GPU together.** The GPU computes cached experts while the CPU handles the remaining work in parallel. Speculative decoding verifies multiple candidate tokens at once, spreading the cost of reading weights across more output tokens. These choices support the reported 80+ tokens/s decode rate.



**调度：同时使用 CPU 和 GPU。** GPU 计算缓存专家，而 CPU 并行处理其余工作。投机解码同时验证多个候选 token，将读取权重的成本分摊到更多输出 token 上。这些选择支持了报告的 80+ tokens/s 解码速率。

![Image](https://cdn.hashnode.com/uploads/gql/6aea03219fa4aa99923b5acf/ad8efc79-2b69-42a0-8ed2-cf582b7c0b58.png)

> *Model and inference-engine design work together to make 100B+ parameter inference practical on personal computers. Source: internal testing.*

*模型和推理引擎设计协同工作，使 100B+ 参数推理在个人电脑上可行。来源：内部测试。*

> Together, these changes let parameter counts grow from tens of billions to more than a hundred billion without proportional increases in memory use, power consumption, and latency.

这些改进共同作用，使参数规模从数百亿增长到一千亿以上，而内存占用、功耗和延迟并不会随之成比例地增加。

> ## What Edge0 Can Do: Anything From Chat to Complex Work on Your Computer



## Edge0 能做什么：从聊天到在你的电脑上进行复杂工作

> Edge0-145B can carry a complex task through to a usable result. Its coding and reasoning capabilities support local workflows that combine planning, tool use, execution, debugging, and visual checks. The benchmarks establish its capabilities; the demonstrations show how it puts them to work.

Edge0-145B 能够将复杂的任务执行到可用的结果。其编码和推理能力支持本地工作流，该工作流整合了规划、工具使用、执行、调试和视觉检查等环节。基准测试证明了它的能力，而演示则展示了它如何将这些能力应用到实际场景中。

> ### Coding and reasoning that rival frontier cloud models

### 媲美前沿云模型的编码与推理

> Edge0-145B is competitive with specific frontier cloud models across coding, reasoning, knowledge, and instruction following:

Edge0-145B 在编程、推理、知识和指令遵循方面与特定的前沿云模型具有竞争力：

> - **Coding:** It scores **64.6 on DeepSWE 1.1**, ahead of Qwen3.8-Flash-Next at 58.7 and DeepSeek-V4-Flash-0731 at 54.4.
> - **Reasoning and knowledge:** It scores **90.4 on GPQA-Diamond**, close to DeepSeek-V4-Flash-0731 at 90.8 and Claude-Opus-4.6 \\(Max\\) at 91.3.
> - **Instruction following:** It scores **80.6 on IFBench**, ahead of DeepSeek-V4-Flash-0731 at 79.2 and Claude-Opus-4.6 \\(Max\\) at 62.5.



- **编码能力：** 得分 **64.6 on DeepSWE 1.1**，领先于得分 58.7 的 Qwen3.8-Flash-Next 和得分 54.4 的 DeepSeek-V4-Flash-0731。
- **推理与知识：** 得分 **90.4 on GPQA-Diamond**，接近得分 90.8 的 DeepSeek-V4-Flash-0731 和得分 91.3 的 Claude-Opus-4.6 (Max)。
- **指令遵循：** 得分 **80.6 on IFBench**，领先于得分 79.2 的 DeepSeek-V4-Flash-0731 和得分 62.5 的 Claude-Opus-4.6 (Max)。

> Its **86.52 on Terminal-Bench 2.1** also exceeds Qwen3.8-Flash-Next's 83.3, DeepSeek-V4-Flash-0731's 82.7, and Claude's 78.2. On AA-LCR, Edge0-145B scores 79.3 to Claude's 78.0. These comparisons apply to the named models and evaluations.

其在Terminal-Bench 2.1上的得分高达86.52，不但超过了Qwen3.8-Flash-Next的83.3、DeepSeek-V4-Flash-0731的82.7，也超越了Claude的78.2。在AA-LCR评估中，Edge0-145B的得分为79.3，而Claude为78.0。这些比较结果适用于上述提到的模型及其对应评估项。

> | Model | DeepSWE 1.1 | Terminal-Bench 2.1 | HLE | GPQA-Diamond | IFBench | AA-LCR |
> | --- | --- | --- | --- | --- | --- | --- |
> | **Edge0-145B** | **64.6** | **86.52** | **35.4** | **90.4** | **80.6** | **79.3** |
> | Edge0-120B | 53.6 | 81.3 | 31.0 | 87.4 | 79.3 | 81.0 |
> | Qwen3.8-Flash-Next | 58.7 | 83.3 | 35.9 | 91.7 | 81.3 | 79.1 |
> | Qwen3.8-27B | 42.2 | 73.0 | 30.8 | 89.2 | 79.5 | 82.0 |
> | DeepSeek-V4-Flash-0731 | 54.4 | 82.7 | 33.8 | 90.8 | 79.2 | 79.7 |
> | Flint 40B | — | 54.9 | — | — | 89.2 | — |
> | Muse Glimmer | — | 51.7 | 22.0 | 83.5 | 77.0 | 83.3 |
> | Gemma 4 | — | 43.4 | 22.7 | 85.7 | 76.0 | 62.0 |
> | Claude-Opus-4.6 \\(Max\\) | — | 78.2 | 40.0 | 91.3 | 62.5 | 78.0 |

| 模型 | DeepSWE 1.1 | Terminal-Bench 2.1 | HLE | GPQA-Diamond | IFBench | AA-LCR |
| --- | --- | --- | --- | --- | --- | --- |
| **Edge0-145B** | **64.6** | **86.52** | **35.4** | **90.4** | **80.6** | **79.3** |
| Edge0-120B | 53.6 | 81.3 | 31.0 | 87.4 | 79.3 | 81.0 |
| Qwen3.8-Flash-Next | 58.7 | 83.3 | 35.9 | 91.7 | 81.3 | 79.1 |
| Qwen3.8-27B | 42.2 | 73.0 | 30.8 | 89.2 | 79.5 | 82.0 |
| DeepSeek-V4-Flash-0731 | 54.4 | 82.7 | 33.8 | 90.8 | 79.2 | 79.7 |
| Flint 40B | — | 54.9 | — | — | 89.2 | — |
| Muse Glimmer | — | 51.7 | 22.0 | 83.5 | 77.0 | 83.3 |
| Gemma 4 | — | 43.4 | 22.7 | 85.7 | 76.0 | 62.0 |
| Claude-Opus-4.6 \(Max\) | — | 78.2 | 40.0 | 91.3 | 62.5 | 78.0 |

> *Scores are percentages; higher is better. A dash means no public score is available, rather than a score of zero.*

*分数是按百分比表示，数值越高越好。* 短横线表示没有公开评分，而不是零分。

> Edge0, Qwen, DeepSeek, and Claude results come from Edge0's internal evaluations. Claude-Opus-4.6 has no public DeepSWE 1.1 score. For Flint, Muse Glimmer, and Gemma 4, Terminal-Bench 2.1 and IFBench results come from the Recursive Flint evaluation; HLE, GPQA, and AA-LCR results come from Artificial Analysis.

Edge0、Qwen、DeepSeek 和 Claude 的结果均来自 Edge0 的内部评估。其中，Claude-Opus-4.6 没有公开的 DeepSWE 1.1 评分。对于 Flint、Muse Glimmer 和 Gemma 4 模型，Terminal-Bench 2.1 和 IFBench 的评估结果来自 Recursive Flint 评测，而 HLE、GPQA 和 AA-LCR 的结果则来自 Artificial Analysis。

> The largest gains over Qwen3.8-27B, a mainstream on-device model baseline, are in agent and coding work: **18.5% on Terminal-Bench and 53.1% on DeepSWE**. The relative gains on HLE, GPQA, and IFBench are 14.9%, 1.3%, and 1.4%, respectively.

与主流端侧模型基线 Qwen3.8-27B 相比，在 Agent 和编码任务上增益最大：**Terminal-Bench 提升 18.5%，DeepSWE 提升 53.1%**。在 HLE、GPQA 和 IFBench 上的相对增益分别为 14.9%、1.3% 和 1.4%。

> DeepSWE 1.1 and Terminal-Bench 2.1 evaluate agent and coding work. HLE, GPQA-Diamond, and IFBench cover reasoning, knowledge, and instruction following. The complete evaluation setup, hardware environment, and reproduction instructions are being released with our technical report.

DeepSWE 1.1 和 Terminal-Bench 2.1 用于评估 Agent 与编码工作。HLE、GPQA-Diamond 和 IFBench 分别涵盖推理、知识和指令遵循能力。完整的评估设置、硬件环境及复现说明将随技术报告一同发布。

![Image](https://cdn.hashnode.com/uploads/gql/6aea03219fa4aa99923b5acf/6eef0e15-dc4b-4e23-ac01-3ab5daf5287e.png)

> ### Competitive capability with a smaller memory footprint



以更小的内存占用实现竞争性能力

> Edge0-145B combines a **72.8 mean score across six benchmarks with 29GB measured peak memory**. Qwen3.8-Flash-Next averages 71.7, with an estimated 70GB footprint for standard 4-bit deployment. That puts Edge0-145B at about 40% of the estimated baseline memory while delivering comparable or higher capability, enabling local use on a 48GB laptop.

Edge0-145B 结合了 **72.8 平均分在六个基准上与 29GB 测量的峰值内存**。Qwen3.8-Flash-Next 平均 71.7，估计标准 4-bit 部署时占用 70GB 的足迹。这使得 Edge0-145B 的估计基线内存约为 40%，同时提供可比或更高的性能，从而允许在 48GB 笔记本电脑上本地使用。

> | Model | Mean across six benchmarks | Memory footprint \\(measured or estimated\\) |
> | --- | --- | --- |
> | **Edge0-145B** | **72.8** | **29GB** |
> | Edge0-120B | 68.9 | 29GB |
> | Qwen3.8-27B | 66.1 | Approximately 18GB\* |
> | Qwen3.8-Flash-Next | 71.7 | Approximately 70GB\* |
> | DeepSeek-V4-Flash-0731 | 70.1 | Approximately 87GB\* |

| 模型 | 六项基准测试的平均得分 | 内存占用（测量或估算） |
| --- | --- | --- |
| **Edge0-145B** | **72. sebagai8** | **29GB** |
| Edge0-120B | 68.9 | 29GB |
| Qwen3.8-27B | 66.1 | 大约 18GB\* |
| Qwen3.8-Flash-Next | 71.7 | 大约 70GB\* |
| DeepSeek-V4-Flash-0731 | 70.1 | 大约 87GB\* |

> The means cover DeepSWE 1.1, Terminal-Bench 2.1, HLE, GPQA-Diamond, IFBench, and AA-LCR. Edge0 memory figures are measured internal peaks. Asterisked baseline figures are estimates for standard 4-bit deployment and remain to be measured. Claude is excluded because it is cloud-only and has no DeepSWE score.

涵盖 DeepSWE 1.1、Terminal-Bench 2.1、HLE、GPQA-Diamond、IFBench 和 AA-LCR。Edge0 内存峰值为内部峰值测量。带星号的基准值是标准 4-bit 部署的估计值，仍待测量。Claude 被排除，因为它是 cloud-only 且无 DeepSWE score 。

![Image](https://cdn.hashnode.com/uploads/gql/6aea03219fa4aa99923b5acf/72bc6257-5a9e-4eca-b73c-e4b9c274bf81.png)

> \[Figure: Quality versus peak memory, with 48GB laptop and 64GB workstation capacities marked. Lower memory and higher scores are better; the chart's vertical axis does not start at zero.\]

[图：质量与峰值内存对比，标注了 48GB 笔记本和 64GB 工作站的容量。内存越低、分数越高越好；图表纵坐标非零起始。]

> ### Local agents that plan, code, run, and check their work

### 本地 agents 可以规划、编码、运行并检查其工作

> A single natural-language request can start an entire local workflow. Edge0-145B breaks down the requirements, plans the steps, writes code, and calls tools to run it. When something fails, it debugs and repairs the code. It then takes screenshots to inspect the result and keeps iterating until the work is complete.

一个自然语言请求可以启动整个本地工作流。Edge0-145B 解析需求，规划步骤，编写代码并调用工具运行。当某事失败时，它调试并修复代码。随后它拍摄截图以检查结果，并不断迭代直到工作完成。

> These projects often take dozens of rounds of planning, execution, and review. Local inference means those additional conversations, code revisions, and visual analyses incur no corresponding cloud-model token or API charges. Code and data can stay on the computer, and core model capabilities work offline.

这些项目通常需要数十轮的规划、执行和审查。本地推理意味着额外的对话、代码修订和视觉分析不会产生相应的云模型 token 或 API 收费。代码和数据可以留在计算机上，核心模型能力在离线工作。

> ### Video production: generating Tesla's Roadster explainer within an hour

### 视频制作： 在一小时内生成特斯拉 Roadster 说明视频

> Edge0-145B produced an explainer about how Roadster could fly, handling technical research, scriptwriting, asset generation, and editing. We asked it to make the principles understandable to a general audience. The model ran locally without cloud-model calls or cloud token consumption, avoiding network round trips for inference.

Edge0-145B 生成了一份关于 Roadster 如何飞行的说明书，涵盖了技术研究、脚本编写、资产生成和编辑。我们请其让这些原理对普通受众都能理解。该模型在本地运行，无云模型调用或云 Token 消耗，避免了推理过程中的网络往返。

> The video was generated within an hour. Producing comparable work manually would have taken a director and scriptwriter, a 3D modeler, an editor, and a physics expert a month. An AI video workflow could previously cost more than hundreds of dollars; local inference eliminates the corresponding cloud-model token and API fees.

视频在一小时内生成。手动制作相当的作品需要导演、编剧、3D模型师、编辑和物理专家一个月。AI video workflow 以前可能花费数百美元；local inference 消除了相应的 cloud-model token 和 API 费用。

![](https://www.youtube.com/watch?v=TefX0rfGNkk)

> ### 3D modeling: a Manhattan city scene in Blender

### 3D 建模：Blender 中的曼哈顿城市场景

> Edge0-145B built a 3D scene of Manhattan within an hour. Working in Blender from text and reference images, it constructed the scene, adjusted materials and lighting, and iterated on the rendered output.

Edge0-145B 在一个小时内构建了曼哈顿的3D场景。它在 Blender 中，从文本和参考图片开始构建场景，调整了材质和光照，并对渲染输出进行迭代。

> The workflow brings visual inspection, code generation, and revision together inside Blender. The model works with objects, spatial relationships, and the creative goal, going beyond the pixels in a reference image. It inspects the result, writes code, and makes changes without handing those steps back to a person. The entire process stays local.

工作流将视觉检查、代码生成和修订在 Blender 中整合在一起。该模型可处理物体、空间关系和创意目标，超越参考图像中的像素。它检查结果，编写代码，并进行修改，而不会将这些步骤交还给人。整个流程保持在本地。

> Creating a Manhattan-scale city scene manually would typically cost approximately **$12,000-18,000** and take at least a month. A leading cloud model would still incur more than $150 in cloud token charges. Edge0-145B completes the local inference without those cloud-model token fees.

手动创建一个曼哈顿规模的城市场景通常需要约 **$12,000-18,000** 的成本，且至少耗时一个月。即使是领先的云端模型，也会产生超过 $150 的云端 Token 费用。而 Edge0-145B 通过本地推理即可完成，无需支付这些云端模型的 Token 费用。

![](https://www.youtube.com/watch?v=YR9KeFT1p68)

> ### Game development: playable games and a medieval city



游戏开发：可玩的游戏与一座中世纪城市

> Edge0-145B can create playable games locally. We also used its 3D modeling capabilities to build an original medieval capital for a fantasy RPG and render a **20-second fly-through** at game-trailer quality.

Edge0-145B 可以在本地创建可玩游戏。我们也利用了它的 3D 建模能力，为一款奇幻 RPG 构建了一个原创的中世纪首都，并渲染了一段 **20 秒的** 穿越镜头，其质量达到了游戏宣传片级别。

> The model planned the city independently and built it from scratch in Blender: city walls, more than a thousand old-town homes, a plaza fountain, a Gothic twin-tower facade, a rib-vaulted nave, and stained-glass windows.

该模型独立规划了城市，并从零在 Blender 中构建了它：城墙、一千多户旧城屋家、广场喷泉、哥特式双塔立面、肋拱中殿和彩色玻璃窗。

> The fixed camera path made errors visible. Geometry clipping, occlusion, or incorrect proportions would appear along the route, so the model inspected the renders and corrected its work as it built. The workflow ran entirely locally.

固定的相机路径让错误得以暴露。几何穿插、遮挡或比例错误会沿路径逐一显现，因此模型会边构建边检查渲染结果，并随时修正自己的工作。整个工作流完全在本地运行。

> A leading cloud model required hundreds of tool calls and hundreds of millions of tokens for a single completion, using the same prompt, reference images, and camera route. Edge0-145B delivered it on a laptop without cloud-model token or API fees for local inference. An art team would typically spend weeks and thousands of dollars producing a city scene to this standard.

一个领先的云模型在相同 prompt、参考图像和相机路径下，单次补全需要数百次工具调用和数亿 tokens。Edge0-145B 在笔记本上即可完成本地推理，且无需支付云模型的 token 或 API 费用。美术团队通常需要花费数周时间和数千美元，才能制作出达到这一水准的城市场景。

![](https://www.youtube.com/watch?v=6Rfuh7lBiqY)

> ### Hardware control: code that flies a real drone

### 硬件控制：让真实无人机飞行的代码

> Edge0-145B wrote the program for a real drone from one instruction: “Write a drone program that navigates through obstacles and finds a red backpack.”

Edge0-145B 仅凭一句“编写一个能够避开障碍物并寻找红色背包的无人机程序”，就为真实无人机编写了程序。

> It generated the flight-control and visual-recognition programs locally. The drone then took off indoors, navigated through a dense row of obstacle poles, searched autonomously, and located the red backpack beside a wall. The task required no human-written code and no cloud call.

它在本地生成了飞行控制和视觉识别程序。随后，无人机在室内起飞，穿过一排密集的障碍杆，自主搜索，并在墙边找到了红色背包。该任务无需人工编写代码，也不需要云端调用。

> Hardware developers can describe the behavior they want and have the model turn it into a program for a real device, without moving repeatedly between an editor, documentation, and debugging tools.

硬件开发者可以描述他们想要的行为，让模型生成用于实际设备的程序，无需在编辑器、文档和调试工具之间反复切换。

> ### PCB design: from KiCad layout to an assembly animation

### PCB 设计：从 KiCad 布局到装配动画

> Edge0-145B took a PCB design from component placement through an assembly visualization. We asked it to design a board for itself. It started from scratch in KiCad, placed components, routed a two-layer board, and imported the design into Unreal Engine 5. It then set up cameras and lighting and rendered an animation of PCB fabrication and assembly.

Edge0-145B 完成了一个从元件布局到装配可视化的完整 PCB 设计任务。我们要求它为自己设计一块电路板，它从零开始使用 KiCad 进行设计，包括元件布局和双层板布线，然后将设计导入到 Unreal Engine 5 中。它设置了相机和灯光，并渲染出了一段 PCB 制造和装配的动画。

> A single computer delivered work that previously required a hardware engineer and a 3D designer to hand tasks back and forth over several days. Schematics and board layouts can stay on the team's own hardware, supporting trade-secret protection and data-handling requirements without uploading the designs to a cloud model.

一台计算机交付了以往需要硬件工程师和3D 设计师来回传递任务数天的工作。Schematics and board layouts 可以保留在团队自己的 hardware 上，supporting trade-secret protection and data-handling requirements 无需将 designs 上传至 cloud model.

> ## Why Edge0: A Full Stack for On-Device AI

##为什么选择 Edge0：面向端侧 AI 的全栈解决方案

> Useful on-device AI requires model development, inference engineering, and hardware adaptation to work together. Our progress rests on three capabilities: developing complementary models quickly, optimizing the full stack, and carrying lessons from each deployment into the next.

实用的端侧 AI 需要模型开发、推理工程和硬件适配协同配合。我们的进展建立在三项能力之上：快速开发互补模型、优化全栈，以及将每次部署的经验延续到下一次部署。

> Our September release of Edge0-35B showed what that approach could deliver on a phone. Its launch post passed 1.2 million views on its first day without paid promotion in overseas communities. Researchers and technical experts at OpenAI, NVIDIA, Qualcomm, and other companies shared it, and the model reached No. 1 on Hugging Face's overall Trending chart.

我们于 9 月发布的 Edge0-35B 展示了该方法在手机端所能实现的效果。其发布帖在海外社区未进行付费推广的情况下，首日浏览量便突破了 120 万。OpenAI、NVIDIA、Qualcomm 等公司的研究人员和技术专家分享了它，该模型也登上了 Hugging Face 综合 Trending 榜单的第一名。

> We released the model weights and unified inference framework together, giving companies and researchers a standard approach they could reproduce. The release helped move the discussion of on-device AI from a few billion parameters to the 35B tier.

我们同时发布了模型权重和统一的推理框架，为企业和研究人员提供了一个可复现的标准方案。此次发布推动端侧 AI 的讨论从数十亿参数级别迈向了 35B 级别。

> ### Four Model Families for On-Device AI

### 面向设备端 AI 的四大模型家族

> Over the past year, we released 200 models across four families. Each handles a different part of the work, from listening and speaking to fast decisions, memory, and complex agent tasks.

过去一年，我们发布了 200 个模型，涵盖四个系列。每个模型各自负责不同的工作部分，从听觉和语音到快速决策、记忆，再到复杂的 Agent 任务。

> | Model family | Role | Models and capabilities |
> | --- | --- | --- |
> | **Edge0** | Complex agent tasks and vibe coding | 145B and 120B models for laptops; 35B and 8B models for phones. The laptop models support vibe coding, while the phone models support agent tasks. |
> | **Audio8** | Listening and speaking | ASR-Infinite and 3B, 0.6B, and 0.1B ASR models for speech recognition; 0.6B and 0.1B TTS models for speech synthesis; and a 0.1B Chat model for end-to-end voice interaction. |
> | **Decision0** | Fast decisions | 0.6B and 3B models covering text, speech, and vision, with multimodal decisions in approximately 40 milliseconds. |
> | **Embedding0** | Memory | A 0.6B multimodal embedding model for text, speech, images, video, and files, supporting local long-term memory and retrieval-augmented generation \\(RAG\\). |

| 模型系列 | 角色 | 模型与能力 |
| --- | --- | --- |
| **Edge0** | 复杂 Agent 任务与 vibe coding | 面向笔记本电脑的 145B 和 120B 模型；面向手机的 35B 和 8B 模型。笔记本电脑模型支持 vibe coding，手机模型支持 Agent 任务。 |
| **Audio8** | 听与说 | 用于语音识别的 ASR-Infinite 及 3B、0.6B 和 0.1B ASR 模型；用于语音合成的 0.6B 和 0.1B TTS 模型；以及用于端到端语音交互的 0.1B Chat 模型。 |
| **Decision0** | 快速决策 | 覆盖文本、语音和视觉的 0.6B 和 3B 模型，可在约 40 毫秒内完成多模态决策。 |
| **Embedding0** | 记忆 | 一个 0.6B 多模态 Embedding 模型，适用于文本、语音、图像、视频和文件，支持本地长期记忆和检索增强生成（RAG）。 |

![Image](https://cdn.hashnode.com/uploads/gql/6aea03219fa4aa99923b5acf/ad51cd8b-07a0-4b4c-9267-c0c33f2d9698.png)

> The portfolio spans tens of millions to more than a hundred billion parameters. Both Edge0 and Audio8 have reached No. 1 on Hugging Face's Trending chart.

该产品线覆盖从数千万到超过千亿参数的模型。Edge0 和 Audio8 均登上 Hugging Face Trending 榜单榜首。

> ### Models and Inference Systems Designed Together

### 模型与推理系统的协同设计

> We develop the model and the inference framework together, building hardware constraints into training and optimizing the engine for different chips. This connects model capability with the software and hardware needed to use it locally.

我们协同开发模型和推理框架，将硬件约束融入训练过程，并针对不同芯片优化引擎。这连接了模型能力与本地使用所需的软硬件。

> That work requires expertise in model development, inference frameworks, and low-level hardware adaptation. The combination is difficult for a company focused only on model development to reproduce.

该工作需要在 model development、inference frameworks 和 low-level hardware adaptation 方面具备专业知识，对于只专注于 model development 的公司来说，复制此组合难度很大。

> ### Hardware Optimizations That Carry into Each Deployment

### 硬件优化贯穿每个部署

> Each deployment gives us reusable optimizations for the next chip, model, or product. This matters because on-device hardware is fragmented: NPU architectures differ, as does support for numerical formats such as INT4, INT8, and FP4. A general-purpose model cannot automatically make full use of every chip.

每次部署都能为我们下一个芯片、模型或产品提供可重用的优化。这很重要，因为芯片硬件是碎片化的：NPU架构各不相同，对INT4、INT8和FP4等数值格式的支持也有所不同。一个通用模型无法自动充分利用每一种芯片。

> We adapt to individual platforms. Our portfolio now covers 95% of mainstream chip platforms, including Qualcomm, BES, Rockchip, Allwinner, D-Robotics, and NVIDIA, across headphones, glasses, phones, PCs, and robots. This is portfolio-wide coverage; model requirements vary, and it does not mean every device can run Edge0-145B.

我们会针对各个平台进行适配。我们的产品组合现已覆盖 95% 的主流芯片平台，包括 Qualcomm、BES、Rockchip、Allwinner、D-Robotics 和 NVIDIA，涵盖耳机、眼镜、手机、PC 和机器人。这是产品组合层面的覆盖；模型要求各不相同，并不意味着每台设备都能运行 Edge0-145B。

> That deployment work now spans more than 5 million production devices. Our open-source models passed 15 million downloads within three months. By October 2026, we had more than 110,000 customer organizations.

该部署工作现在覆盖了超过 5 million 台生产设备。我们的开源模型在三个月内下载量突破 15 million。截至 2026 年 10 月，我们服务了超过 110,000 家客户组织。

> The portfolio figures come from company papers and internal testing. They describe the broader Edge0 portfolio; the 145B performance results in this article apply specifically to Edge0-145B.

这些数据来自公司文档和内部测试。它们描述了更广泛的 Edge0 ；本文中的 145B 性能结果专门适用于 Edge0-145B 。

> For Edge0-145B, day-one support covers macOS, Windows, and Linux, including Apple M-series chips and NVIDIA platforms such as RTX Spark, RTX 4090, and RTX 5090. The release includes one-click deployment tools and hardware guides.

对于 Edge0-145B，首发即支持 macOS、Windows 和 Linux，涵盖 Apple M 系列芯片以及 NVIDIA 平台（如 RTX Spark、RTX 4090 和 RTX 5090）。该版本包含一键部署工具和硬件指南。

> ## The Future of On-Device AI and the Cloud

## 端侧 AI 与云的未来

> More complex work can stay on the device as local models approach cloud-level capability. Privacy, cost control, and offline access have long favored local execution; the remaining question was whether an on-device model could do the work. Edge0-145B expands the range of tasks for which it can.



随着本地模型的能力接近云端级，更复杂的工作也可以留在设备端执行。隐私、成本控制和离线访问长期以来一直有利于本地执行；剩下的问题是设备端模型是否能胜任这些任务。 Edge0-145B 扩展了其可处理的任务范围。

> ### Why More AI Work Can Stay Local

### 为何更多 AI 工作可在本地完成

> Local execution addresses four practical obstacles to adopting cloud-only AI:

本地执行 解决 采用 cloud-only AI 的四个实际障碍:

> - **Control cloud-model costs.** Local inference adds no corresponding cloud-model token or API fees as usage grows.
> - **Keep sensitive data local.** Code, documents, and business records can stay on the hardware, giving teams control over data handling.
> - **Sustain a responsive experience.** Model and inference-engine design address response speed, power use, system responsiveness, and continuous operation together.
> - **Keep core capabilities available offline.** Local tasks continue when connectivity drops; features that depend on online information or services still need a connection.

- **控制云模型成本。** 随着使用量增长，本地推理不会产生相应的云模型 token 或 API 费用。
- **保持敏感数据在本地。** 代码、文档和业务记录可以保留在硬件上，让团队能够掌控数据处理方式。
- **保持灵敏的响应体验。** 模型与推理引擎的设计需要同时兼顾响应速度、功耗、系统响应能力以及持续运行。
- **保持核心功能离线可用。** 网络中断时本地任务仍可继续；依赖在线信息或服务的功能仍需要网络连接。

> ### From Cloud First to More Complex Work On-Device

### 从云端优先到更复杂的设备端任务

> We see the division of work between devices and the cloud shifting through three stages.



我们看到，设备与云端之间的分工在三个阶段中发生转移。

> **Before September 2026: cloud first, with on-device support.** Apple Intelligence reflected this stage: it protected privacy, but handled a limited range of tasks locally while more demanding work relied on cloud capabilities.

**在 September 2026: cloud first, with on-device support.** Apple Intelligence reflected this stage: it protected privacy, but handled a limited range of tasks locally while more demanding work relied on cloud capabilities.

> **After Edge0-35B's September 10 release: everyday tasks locally, complex tasks in the cloud.** Local models could take on frequent requests that needed immediate responses. For one leading headphone manufacturer, our hybrid solution now handles 92% of AI usage on-device and 8% in the cloud. Everyday conversation accounts for most use cases on consumer wearables.

**Edge0-35B 于 9 月 10 日发布后：日常任务本地处理，复杂任务云端处理。** 本地模型能够处理需要即时响应的高频请求。对于一家知名耳机制造商，我们的混合解决方案已将 92% 的 AI 使用量转移到设备端，仅 8% 在云端处理。日常对话占消费类可穿戴设备应用场景的大部分。

> **With Edge0-145B: toward on-device first, with cloud support.** Vibe coding and other complex tasks can now run on a personal computer, giving teams more scope to choose local execution. This extends the range of work that can stay on the device while preserving the cloud for tasks and hardware that need it.

**With Edge0-145B: 面向设备优先，辅以云端支持。** Vibe coding 和其他复杂任务现在可以在个人电脑上运行，让团队在选择本地执行方面有更多空间。这扩大了可以留在设备端的工作范围，同时保留云端以供需要它的任务和硬件使用。

![Image](https://cdn.hashnode.com/uploads/gql/6aea03219fa4aa99923b5acf/e20c5a72-6ca4-4c8e-b96a-bf89393b7eda.png)

> *The diagram shows the shift from cloud-first AI to everyday local tasks and then more complex local work. Its colored areas are schematic, not measured usage shares.*



该图展示了从云端优先的 AI 到日常本地任务，再到更复杂的本地工作的转变。其彩色区域仅为示意图，并非实测的使用份额。

> ### Where Cloud AI Still Fits

### 云 AI 仍然适用的领域

> Hardware constraints still determine which model fits. Compute capacity, heat, and battery life matter: Edge0-35B runs on phones, while Edge0-145B runs on suitably equipped laptops. A very low-compute device cannot currently run a 145B model locally. It needs a smaller model suited to its hardware or cloud access to a model of that size.

硬件限制仍然决定了哪种模型适合使用。计算能力、散热和电池寿命都是关键因素：Edge0-35B 可以在手机上运行，而 Edge0-145B 则需要配备高性能的笔记本电脑。目前，一个计算能力极低的设备无法本地运行 145B 模型。它需要一款适配其硬件的小型模型，或者通过云端访问一个与该模型相当的服务。

> Cross-device long-term memory and searches requiring highly current information still require cloud services. Local and cloud models can work together; the appropriate split depends on the task, the hardware, and the information it needs.

跨设备长期记忆以及需要高度时效性信息的搜索仍然需要云服务。本地模型和云模型可以协同工作；适当的分工取决于任务、硬件以及所需的信息。

> The aim is to make local execution a practical choice for demanding work, with a capable model that can keep working close to the person using it. That is the next step toward our goal of enabling intelligence at zero distance for everybody.

目标是让本地执行成为处理高要求任务的实用选择，通过一个能力强大的模型，使其能够持续在使用者身边运行。这是我们迈向"让每个人都能实现零距离智能"这一目标的下一步。

> ## Get Started with Edge0

## Edge0 入门

> Download the models to run locally, evaluate or fine-tune them, and build them into your own products:

下载模型以在本地运行、评估或微调，并将其集成到您自己的产品中：

> - **Model weights:** [Edge0-145B](https://huggingface.co/Edge0/Edge0-145B-NVFP4) and [Edge0-120B](https://huggingface.co/Edge0/Edge0-120B-NVFP4) on Hugging Face.
> - **Inference framework and deployment guides:** [Edge0 on GitHub](https://github.com/Edge0-AI/Edge0).
> - **Try it without environment setup:** [Download the Edge0 App](https://github.com/Edge0-AI/Edge0/releases/tag/v0.2.0). Its core model capabilities work offline, without an account or usage quota.
> - **Community:** [Join us on Discord](https://discord.com/invite/Tg3W2FEuQ).

- **模型权重：** Hugging Face 上的 [Edge0-145B](https://huggingface.co/Edge0/Edge0-145B-NVFP4) 和 [Edge0-120B](https://huggingface.co/Edge0/Edge0-120B-NVFP4)。
- **推理框架与部署指南：** [Edge0 on GitHub](https://github.com/Edge0-AI/Edge0)。
- **无需配置环境即可体验：** [下载 Edge0 App](https://github.com/Edge0-AI/Edge0/releases/tag/v0.2.0)。其核心模型能力可完全离线使用，无需注册账户，也没有用量限制。
- **社区：** [加入我们的 Discord](https://discord.com/invite/Tg3W2FEuQ)。

> For hardware or product integrations, reach the Edge0 team through GitHub or [contact@autoark.ai](mailto:contact@autoark.ai).

如果您有硬件或产品集成方面的需求，请通过 GitHub 或电子邮件 contact@autoark.ai 联系 Edge0 团队。
