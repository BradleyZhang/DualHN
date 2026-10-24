---
title: "Kimi K3.1 Pro 和 K3.1 Pro 高速"
date: 2026-10-24T08:57:38+08:00
draft: false
source: "Hacker News"
originalTitle: "Kimi K3.1 Pro Tech Blog: Advancing Open Intelligence"
originalUrl: "https://www.kimi.ai/blog/kimi-k3-1-pro"
hnUrl: ""
points: 
comments: 
---

> ## Introducing Kimi K3.1 Pro



## 介绍 Kimi K3.1 Pro

> We're introducing , the first model in our new K3.1 series and our most capable 3T-class open-weight model to date, with a 1-million-token context window. It delivers substantial improvements across coding, 3D creation, financial research, and other agentic capabilities.

我们正在介绍 K3.1 系列的首个模型，以及我们目前最强大的 3T级开放权重模型，拥有 100万 token 的上下文窗口。它在编程、3D 创作、金融研究以及其他代理能力方面取得了实质性的改进。

> We are also releasing , which delivers 2-3× the speed of K3.1 Pro for more responsive interactions.

我们也发布了某款新产品，它比 K3.1 Pro 快 2-3 倍，为更响应式的交互提供支持。

> Kimi K3.1 Pro and Kimi K3.1 Pro Highspeed are available today on [Kimi.ai](https://www.kimi.ai/), [Kimi Work](https://www.kimi.ai/products/kimi-work), [Kimi Code](https://www.kimi.ai/code), and the [Kimi API](https://platform.kimi.ai/). The full model weights will be released by Nov 4.

Kimi K3.1 Pro 和 Kimi K3.1 Pro Highspeed 今日可在 [Kimi.ai](https://www.kimi.ai/)、[Kimi Work](https://www.kimi.ai/products/kimi-work)、[Kimi Code](https://www.kimi.ai/code) 和 [Kimi API](https://platform.kimi.ai/) 上使用。全模型权重将于 Nov 4 发布。

![Benchmark results for Kimi K3.1 Pro and peer models across 14 coding, science, and knowledge-work evaluations](https://statics.kimi.ai/kimi-blogs/kimi-k3-1/20261023/benchmark-overview-v6.webp)

> Benchmark results for Kimi K3.1 Pro and peer models across 14 coding, science, and knowledge-work evaluations

# Kimi K3.1 Pro 及其对手模型在 14 编程、科学和知识工作评估中的基准测试结果

> ## Advancing the Frontier of Open Intelligence

推动开放智能的前沿

> Kimi K3.1 Pro is a post-trained version of Kimi K3, with substantially larger post-training compute. To enable large-scale joint RL across , we optimized every layer of the stack — the RL framework, long-context inference, training efficiency, sandbox infrastructure, rollout scheduling, and a shared platform for environment quality checks — so that each increment of RL compute delivers stable, predictable returns. As a result, K3.1 Pro achieves consistent gains in every domain.

Kimi K3.1 Pro 是 Kimi K3 的后训练版本，拥有大幅增加的后训练算力。为实现大规模联合 RL，我们优化了技术栈的每一层 —— RL 框架、长上下文推理、训练效率、沙箱基础设施、Rollout 调度以及用于环境质量检查的共享平台 —— 使得 RL 算力的每一次增量投入都能带来稳定、可预测的回报。因此，K3.1 Pro 在各个领域均取得了持续增益。

> Across coding, agentic, and knowledge benchmarks, K3.1 Pro matches or approaches the strongest proprietary models. On , which evaluates coding agents on realistic, resource-constrained terminal tasks using strict task-specific tests, . And on , our internal benchmark that tests coding agents' multi-step execution, tool use, and end-to-end problem solving across diverse engineering domains, K3.1 Pro scores , above K3's .



在编码、agentic 和知识基准测试中，K3.1 Pro 匹配或接近最强的专有模型。在 上，其通过严格的特定任务测试来评估在现实、资源受限的终端任务中的编码智能体，。而在 上，我们的内部基准测试用于测试编码智能体在不同工程领域的多步执行、工具使用和端到端问题解决能力，K3.1 Pro 得分为 ，高于 K3 的 。

> ## Coding

## 编码

> K3.1 Pro works effectively across game engines such as , combining them with web search and 3D generation to create complete experiences. Its front-end pages, interactive Three.js scenes, and 3D assets show stronger composition, typography, animation, and polish. The examples below were created end to end by K3.1 Pro:

K3.1 Pro 在各种游戏引擎中有效运行，例如[缺失内容]，将其与网页搜索和3D生成相结合，创造出完整的体验。其前端页面、交互式 Three.js 场景和 3D 资产展现了更强的构图、排版、动画和润色。以下示例由 K3.1 Pro 从头到尾创建：

> In one internal test, it built a human walking dynamics simulator with integrated training and evaluation pipelines on top of , an open-source anatomical model of the human body comprising 296 skeletal components, including cartilage, and 402 muscle components. Across 167 missions and 420 independent reviews, it analyzed experimental results, diagnosed problems, and iteratively refined the walking controller, enabling the simulated human to go from collapsing within seconds to walking continuously with alternating strides for 11.2 seconds. When reward shaping failed to improve arm motion, K3.1 Pro did not simply keep adjusting the reward: it ran open-loop probes of the simulator's dynamics, identified and corrected 36 errors in shoulder-muscle moment-arm calculations, and then retrained the controller.

在一次内部测试中，它构建了一个人类行走动力学模拟器，在 ，上集成了训练和评估管道，这是一个人体开源解剖模型，包含 296 个骨骼组件（包括软骨）和 402 个肌肉组件。在 167 个任务和 420 次独立评审中，它分析实验结果，诊断问题，并迭代优化行走控制器，使模拟人类从几秒内崩溃，发展到能够连续交替步态行走 11.2 秒。当奖励塑形（reward shaping）无法改善手臂运动时，K3.1 Pro 并未简单地继续调整奖励：它运行了模拟器动力学的开环探测，识别并纠正了肩部肌肉力臂计算中的 36 个错误，然后重新训练了控制器。

> ## 3D Modeling and Design

## 3D 建模与设计

> On , which tests 3D reconstruction from multi-view renderings through CAD code generation, , approaching the performance of and . From a text brief, sketch, or reference image, it can infer shape, proportions, and spatial relationships to create usable 3D models. It also has a stronger grasp of existing asset libraries and model collections.

在 ，该测试通过 CAD 代码生成评估多视图渲染的 3D 重建能力， ，性能逼近 和 。只需一段文本简介、草图或参考图像，它便能推断形状、比例和空间关系，从而创建可用的 3D 模型。它对现有资产库和模型集合也有更强的掌握能力。

![BenchCAD results (1,000-file subset, Voxel IoU): with tools, Claude Opus 5.5 scores 96.2, GPT-6 Astra 95.9, Kimi K3.1 Pro 92.7, Claude Fable 5.1 92.6, and DeepSeek-V4.1-Flash-1017 81.6; without tools, Claude Opus 5.5 scores 73.0, Kimi K3.1 Pro 72.8, Claude Fable 5.1 60.6, and DeepSeek-V4.1-Flash-1017 41.2](https://statics.kimi.ai/kimi-blogs/kimi-k3-1/20261023/benchcad-results-v2.webp)

> BenchCAD results (1,000-file subset, Voxel IoU): with tools, Claude Opus 5.5 scores 96.2, GPT-6 Astra 95.9, Kimi K3.1 Pro 92.7, Claude Fable 5.1 92.6, and DeepSeek-V4.1-Flash-1017 81.6; without tools, Claude Opus 5.5 scores 73.0, Kimi K3.1 Pro 72.8, Claude Fable 5.1 60.6, and DeepSeek-V4.1-Flash-1017 41.2

BenchCAD 的结果（1,000 文件子集，Voxel IoU）：在使用工具时，Claude Opus 5.5 得分为 96.2，GPT-6 Astra 得分为 95.9，Kimi K3.1 Pro 得分为 92.7，Claude Fable 5.1 得分为 92.6，以及 DeepSeek-V4.1-Flash-1017 得分为 81.6；不使用工具时，Claude Opus 5.5 得分为 73.0，Kimi K3.1 Pro 得分为 72.8，Claude Fable 5.1 得分为 60.6，以及 DeepSeek-V4.1-Flash-1017 得分为 41.2。

> Without MCP connectors, it can write and run scripts for tools like Blender and CAD software to build and refine assets, edit components, and adjust geometry, materials, and scene layout.

没有 MCP 连接器也能编写并运行脚本，用于构建和优化资产、编辑组件以及调整几何体、材质和场景布局。

> Below are examples of 3D assets K3.1 Pro created for brand films, games, and interactive web experiences:



请提供完整的英文原文，以便我进行翻译。

> is now live on [kimi.ai](https://www.kimi.ai/) and the Kimi app — preview and edit your 3D models online, download them ready for 3D printing, or export them as videos or Live Photos to share anywhere.

Kimi.ai 上线了，支持在 Kimi 应用程序上实时预览和编辑 3D 模型，下载并准备好进行 3D 打印，或导出为视频或 Live Photos 格式，随处分享。

![The Kimi 3D Make interface on kimi.com, with a prompt box for turning ideas into 3D models and featured templates including a pagoda, a typewriter, and a jet engine](https://kimi-img.kimi.ai/pub/slides/kimi-fs/weaver/assets/9d2a6db49991ae6a4eb13c8a322de721.webp)

> The Kimi 3D Make interface on kimi.com, with a prompt box for turning ideas into 3D models and featured templates including a pagoda, a typewriter, and a jet engine

kimi.com 上的 Kimi 3D Make 界面，包含用于将想法转化为 3D 模型的提示词框，以及包括 宝塔、打字机 和 喷气发动机 在内的精选模板。

> ## Finance

## 金融

> which tests complex fiscal data analysis over real financial documents through retrieval, cross-document verification, and multi-step numerical reasoning. K3.1 Pro also improves over K3 on Frontier Finance, which measures support for complete investment workflows from screening to profitability analysis.

它在 真实 financial documents 上测试 复杂的 fiscal data analysis， 通过 retrieval、cross-document verification、multi-step numerical reasoning。 K3.1 Pro 也在 Frontier Finance 上比 K3 表现更好，Frontier Finance 衡量从 screening 到 profitability analysis 的完整 investment workflows 的支持。

![Finance benchmark results for OfficeQA Pro v2 and Frontier Finance, with Kimi K3.1 Pro leading OfficeQA Pro v2 at 64.4 and scoring 58.6 on Frontier Finance against Claude, GPT, GLM, and DeepSeek models](https://statics.kimi.ai/kimi-blogs/kimi-k3-1/20261023/finance-productivity-v4.webp)

> Finance benchmark results for OfficeQA Pro v2 and Frontier Finance, with Kimi K3.1 Pro leading OfficeQA Pro v2 at 64.4 and scoring 58.6 on Frontier Finance against Claude, GPT, GLM, and DeepSeek models

金融基准测试结果：OfficeQA Pro v2 和 Frontier Finance。Kimi K3.1 Pro 在 OfficeQA Pro v2 中以 64.4 的成绩名列前茅，在 Frontier Finance 上的得分为 58.6，击败了 Claude、GPT、GLM 和 DeepSeek 等模型。

> K3.1 Pro also improves significantly across all our internal finance benchmarks:

K3.1 Pro 显著提升在所有我们的内部财务基准测试中：

> - evaluates formula linkage, financial logic, and final workbook quality in real-world modeling tasks. K3.1 Pro improves on K3 by 7.2 points.
> - evaluates whether models can produce auditable research under evidence and cutoff constraints. K3.1 Pro improves on K3 by 11.6 points.
> - evaluates long-horizon management and decision-making in a simulated business environment. K3.1 Pro achieves about 4.2× K3's performance.
> ![Internal Finance Benchmark: Kimi K3.1 Pro versus K3 on Internal Finance Modeling (57.6 vs 50.4), Internal Financial Research (70.4 vs 58.8), and Internal Business Operation (37 vs 8.9)](https://kimi-img.kimi.ai/pub/slides/kimi-fs/weaver/assets/f0a2d8ff95b181942bbe5a78405058ef.webp)

- 在真实世界建模任务中评估公式关联性、财务逻辑和最终工作簿质量。K3.1 Pro 相较于 K3 提升了 7.2 分。
- 评估模型是否能在证据和截止约束下生成可审计的研究。K3.1 Pro 相较于 K3 提升了 11.6 分。
- 评估模型在模拟业务环境中的长期管理和决策制定。K3.1 Pro 的表现约为 K3 的 4.2 倍。
![内部财务基准：Kimi K3.1 Pro 与 K3 在内部财务建模（57.6 vs 50.4）、内部财务研究（70.4 vs 58.8）和内部业务运营（37 vs 8.9）上的表现](https://kimi-img.kimi.ai/pub/slides/kimi-fs/weaver/assets/f0a2d8ff95b181942bbe5a78405058ef.webp)

> Internal Finance Benchmark: Kimi K3.1 Pro versus K3 on Internal Finance Modeling (57.6 vs 50.4), Internal Financial Research (70.4 vs 58.8), and Internal Business Operation (37 vs 8.9)

内部财务基准测试：Kimi K3.1 Pro 与 K3 在内部财务建模、内部财务研究和内部业务运营三大领域的表现对比如下：财务建模（57.6 分 vs 50.4 分）、财务研究（70.4 分 vs 58.8 分）和业务运营（37 分 vs 8.9 分）。

> Financial analysis and investment research demand a high degree of factual accuracy. To address this, we made targeted improvements to K3.1 Pro's on real-world tasks and challenging prompts. On Kimi Hallu Bench Hard bench, an internal benchmark designed to stress-test factual accuracy, its claim-level hallucination rate fell from 23.4% for K3 to 8.3%, while the share of responses containing at least one factual error was just 42.4% of its predecessor's rate. (The evaluation is a stress test for factual accuracy, with examples deliberately crafted to probe situations where models are prone to errors. The reported rates do not represent overall error rates in daily use.)

金融分析和投资研究对事实准确性有着极高要求。为了解决这一问题，我们对K3.1 Pro在真实场景任务和复杂提示下的表现进行了针对性优化。在Kimi Hallu Bench Hard基准测试（一个专门用于测试事实准确性的内部测试）中，K3.1 Pro的声称层面幻觉率从K3的23.4%下降至8.3%，而包含至少一个事实错误的回复比例仅为前代的42.4%。（该评估是一个事实准确性的压力测试，示例是专门设计的，用于探测模型易出错的情况。报告的比率并不代表日常使用中的整体错误率。）

![Kimi Hallu Bench claim-level hallucination rates (lower is better): without tools, GPT-6 Astra 4.2, Kimi K3.1 Pro 5.4, Opus 5.5 6.8, Fable 5.1 11.4, DeepSeek-V4.1-Flash-1017 13.1, GLM-5.3 14.8; Hard with tools, GPT-6 Astra 5.5, Kimi K3.1 Pro 8.3, Opus 5.5 15.0, GLM-5.3 22.6, DeepSeek-V4.1-Flash-1017 23.3, Fable 5.1 23.3](https://statics.kimi.ai/kimi-blogs/kimi-k3-1/20261023/hallu-bench-results-v2.webp)

> Kimi Hallu Bench claim-level hallucination rates (lower is better): without tools, GPT-6 Astra 4.2, Kimi K3.1 Pro 5.4, Opus 5.5 6.8, Fable 5.1 11.4, DeepSeek-V4.1-Flash-1017 13.1, GLM-5.3 14.8; Hard with tools, GPT-6 Astra 5.5, Kimi K3.1 Pro 8.3, Opus 5.5 15.0, GLM-5.3 22.6, DeepSeek-V4.1-Flash-1017 23.3, Fable 5.1 23.3

Kimi Hallu Bench 声称层级幻觉率（数值越低越好）：无工具，GPT-6 Astra 4.2，Kimi K3.1 Pro 5.4，Opus 5.5 6.8，Fable 5.1 11.4，DeepSeek-V4.1-Flash-1017 13.1，GLM-5.3 14.8；使用工具时的困难，GPT-6 Astra 5.5，Kimi K3.1 Pro 8.3，Opus 5.5 15.0，GLM-5.3 22.6，DeepSeek-V4.1-Flash-1017 23.3，Fable 5.1 23.3

> The cases below show how K3.1 Pro handles financial modeling, investment analysis, and source-grounded research in practice:

下面的案例展示了 K3.1 Pro 如何在实践中处理财务建模、投资分析和来源锚定研究：

> ## Cybersecurity

# 网络安全

> As K3.1 Pro became more capable, we spent a correspondingly larger share of our effort understanding where cyber capability comes from, and how much of it we can control. We therefore analyzed and evaluated K3.1 Pro's vulnerability research capabilities, and applied targeted controls during training to reduce potential misuse risk while preserving general usefulness.

随着 K3.1 Pro 能力的增强，我们将相应更大比例的精力用于理解网络安全能力的来源，以及我们能控制其中多少。因此，我们分析并评估了 K3.1 Pro 的漏洞研究能力，并在训练过程中应用了有针对性的控制措施，以降低潜在滥用风险，同时保持其通用实用性。

> During development, we observed vulnerability research performance improving steadily as post-training scaled. Tracing the source of this trend, we found that cyber-related content was embedded within the general mid-training corpus, and cyber-related tasks were present in the RL environment mix — a natural byproduct of training on broad data. In preliminary experiments on internal models, we found that without data removal at either the mid-training or the RL stage, downstream cyber capability would increase substantially. These findings gave us a concrete lever for control. For the open-weight release of K3.1 Pro, we identified and removed cyber-related data from both training stages, while retaining the general-purpose coding tasks needed for model usefulness. We will continue to apply appropriate controls at every training stage, of which cyber-related data identification and restriction is one example.

开发过程中，我们观察到漏洞研究性能随着后训练阶段的扩展而稳步提升。追踪这一趋势的来源，我们发现与网络安全相关的内容嵌入在一般的中训练语料库中，而与网络安全相关的任务也存在于强化学习环境的混合数据集中——这是基于广泛数据进行训练的自然副产品。在内部模型的初步实验中，我们发现如果在中训练或强化学习阶段不移除数据，下游网络安全能力将显著增加。这些发现为我们提供了一个具体的控制杠杆。对于K3.1 Pro的开源权重发布，我们识别并从两个训练阶段中移除了与网络安全相关的数据，同时保留了模型有用性所需的通用编程任务。我们将在每个训练阶段继续应用适当的控制措施，其中识别和限制与网络安全相关的数据是其中一个例子。

> After data cleaning, we evaluated K3.1 Pro on xdev-bench-hard, our in-house benchmark of expert-curated, source-code-based vulnerability discovery and exploitation tasks, calibrated to provide meaningful differentiation at our current capability level. Most tasks faithfully reproduce recently disclosed vulnerabilities in software such as the Linux kernel, Node.js, JavaScriptCore, Exim, and VirGL, with mitigations enabled. Each task provides the vulnerable source code, a short bug hint, and the corresponding binary; the agent must develop an exploit, achieve arbitrary code execution in a separate sandbox, and retrieve a secret string for automated verification. We report pass@3 over a random subset of runs, with no hard timeouts or output token limits.

在数据清洗后，我们评估了 K3.1 Pro 在 xdev-bench-hard 上，这是我们内部的一项专家策划、基于源代码漏洞发现与利用任务的基准测试，并针对当前能力水平进行校准，以提供有意义的区分度。大多数任务忠实地再现了最近披露的、存在于 Linux 内核、Node.js、JavaScriptCore、Exim 和 VirGL 等软件中的漏洞，并启用了缓解措施。每个任务都提供有漏洞的源代码、简短的 Bug 提示和相应的二进制文件；代理必须开发 exploit，在单独的 sandbox 中实现任意代码执行，并检索 secret string 以供自动化验证。我们报告了 pass@3 在运行的一随机子集上的结果，且没有硬超时或输出 Token 限制。

![Internal xdev-bench-hard (pass@3) results: GPT-5.6 Sol (third-party evaluation) solves 100 problems, the Kimi model without cyber risk-reduction 90.5, DeepSeek-V4.1-Flash 85.7, Kimi K3.1 Pro 81.0, GLM-5.3 57.1, and Kimi K3 33.3, with average success rate and average tokens per successful trajectory for each](https://statics.kimi.ai/kimi-blogs/kimi-k3-1/20261023/xdev-bench-hard-results.webp)

> Internal xdev-bench-hard (pass@3) results: GPT-5.6 Sol (third-party evaluation) solves 100 problems, the Kimi model without cyber risk-reduction 90.5, DeepSeek-V4.1-Flash 85.7, Kimi K3.1 Pro 81.0, GLM-5.3 57.1, and Kimi K3 33.3, with average success rate and average tokens per successful trajectory for each

内部 xdev-bench-hard（pass@3）结果：GPT-5.6 Sol（第三方评测）解决 100 个问题，未采用网络风险降低的 Kimi 模型 90.5，DeepSeek-V4.1-Flash 85.7，Kimi K3.1 Pro 81.0，GLM-5.3 57.1，Kimi K3 33.3，并列出每个模型的平均成功率和每条成功轨迹的平均 token 数。

> On xdev-bench-hard, the checkpoint without these risk-reduction measures — no cyber-related data removal at mid-training and no cyber-related RL environment filtering — solves 90.5% of problems at pass@3; the final K3.1 Pro reaches 81.0%. The comparison shows that data removal meaningfully reduces cyber capability relative to what the same training pipeline would otherwise produce. At the same time, K3.1 Pro improves substantially over its predecessor, indicating that stronger general coding and long-horizon debugging capabilities generalize to cyber tasks even after targeted data removal. K3.1 Pro's cyber capability remains behind that of frontier proprietary models that have been publicly available for at least three months. We will keep evolving our internal benchmarks so that evaluation stays informative as model capabilities continue to advance.

在 xdev-bench-hard 上，未采取这些风险缓解措施的检查点 —— 没有在中期训练时移除与网络安全相关的训练数据，也没有对与网络安全相关的 RL 环境进行过滤 —— 在 pass@3 下解决了 90.5% 的问题；最终的 K3.1 Pro 达到了 81.0%。比较表明，数据移除显著降低了网络安全能力，相较于同一训练流水线否则会产生的能力。与此同时，K3.1 Pro 在其前代上实现了大幅提升，表明更强的通用编码和长期调试能力在经过定向数据移除后仍能泛化到网络安全任务上。K3.1 Pro 的网络安全能力仍然落后于至少在三个月内向公众公开的先进专有模型。我们将持续演进我们的内部基准测试，以便在模型能力继续提升的同时，评估保持信息丰富。

> These evaluations frame our open-weight release decision. First, we aim not to release open weights that would extend the absolute frontier of cyber capability. K3.1 Pro's offensive cyber capability is, by design, below what our pipeline can produce, and remains behind that of frontier proprietary models. Second, we intend to progressively raise the cyber capability available in open weights. We believe making K3.1 Pro available in a non-discriminatory way benefits people who need dual-use capabilities for defensive purposes. When a capable model is open and runs on infrastructure its users control, many more teams gain the means to audit the code they maintain — including legacy systems that rarely receive dedicated security reviews. We believe that letting this capability diffuse gradually — rather than concentrating it in a few proprietary systems — ultimately makes all software more secure.

这些评估构成了我们开放权重发布决策的依据。首先，我们旨在不发布会将网络能力绝对前沿向前推进的开放权重。根据设计，K3.1 Pro 的进攻性网络能力低于我们管线所能生成的水平，且仍落后于前沿专有模型。其次，我们打算逐步提升开放权重中可用的网络能力。我们认为，以非歧视性方式提供 K3.1 Pro，将惠及那些需要双重用途能力用于防御目的的人员。当一个强大的模型是开放的，且运行在用户控制的基础设施上时，更多团队将获得审计其维护代码的手段 —— 包括那些很少获得专门安全审查的遗留系统。我们相信，让这种能力逐步扩散 —— 而非将其集中在少数专有系统中 —— 最终会使所有软件更加安全。

> ## Availability

## 可用性

> Kimi K3.1 Pro rolls out today across the Kimi product family: on [Kimi.ai](https://www.kimi.ai/) and the Kimi mobile apps, Kimi Work and Kimi Code, and through the [Kimi API](https://platform.kimi.ai/).

Kimi K3.1 Pro 今日正式发布，覆盖 Kimi 所有产品系列，包括 Kimi.ai 官网、Kimi 移动应用（Kimi Work 和 Kimi Code），以及 Kimi API 平台。

> Full model weights will be released by Nov 4, 2026.

模型的完整权重将于 2026 年 11 月 4 日发布。

> [Kimi Enterprise administrators](https://www.kimi.ai/business) can enable K3.1 Pro for their organization; access is off by default at launch.

[Kimi Enterprise administrators](https://www.kimi.ai/business) 可以为其组织启用 K3.1 Pro；访问默认关闭于发布时。

> Details for each channel:

各频道详情：

> - Download or update to the latest Kimi app from your mobile app store, available on iOS, Android, and HarmonyOS, or visit [kimi.ai](https://www.kimi.ai/).
> - Download the latest [Kimi Work desktop app](https://www.kimi.ai/products/kimi-work), version 3.1.0 or later, available for Windows and Apple silicon Macs.
> - Run [Kimi Code](https://www.kimi.ai/code) and select Kimi K3.1 Pro using the `/model` command.
> - Visit the [Kimi API Platform](https://platform.kimi.ai/) and select kimi-k3.1-pro / kimi-k3.1-pro-highspeed. Zero Data Retention is available for API customers.
> - [Kimi Business](https://www.kimi.ai/business) provides enterprise-grade data privacy and member management, with complete separation between personal and organization accounts. Visit the pricing page and select “Get Kimi Business” to subscribe for your team.

- 下载或更新至最新的 Kimi app，可在 iOS、Android 和 HarmonyOS 上获取，或访问 [kimi.ai](https://www.kimi.ai/).
- 下载最新的 [Kimi Work desktop app](https://www.kimi.ai/products/kimi-work)，版本 3.1.0 或 later，适用于 Windows 和 Apple silicon Macs.
- 运行 [Kimi Code](https://www.kimi.ai/code) 并选择 Kimi K3.1 Pro 使用 `/model` 命令.
- 访问 [Kimi API Platform](https://platform.kimi.ai/) 并选择 kimi-k3.1-pro / kimi-k3.1-pro-highspeed. Zero Data Retention 为 API 客户提供.
- [Kimi Business](https://www.kimi.ai/business) 提供企业级数据隐私和成员管理，个人与组织账户完全隔离。访问定价页面并选中 “Get Kimi Business” 以订阅您的团队.

> ## Benchmarks

## 基准测试

> Unless otherwise specified, all Kimi K3.1 Pro results reported below are obtained with the reasoning effort set to 'max', temperature = 1.0, and top-p = 0.95.

除非另有说明，以下所有 Kimi K3.1 Pro 的结果均是以将推理努力设置为 'max'、temperature = 1.0 以及 top-p = 0.95 的参数获得的。

> ### Coding benchmarks



### 编码基准测试

> 1. Terminal-Bench 4.0. Kimi K3.1 Pro is evaluated with the Claude-Code harness. The DeepSeek-V4.1-Flash-1017 is taken from the release blog ([https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)). All remaining scores are taken as the maximum value reported in either their blog posts or the official Terminal-Bench 4.0 leaderboard ([https://www.tbench.ai/](https://www.tbench.ai/)).
> 2. Terminal-Bench Science 0.1. Kimi K3.1 Pro is evaluated with the Claude-Code harness. Our internal evaluation of DeepSeek-V4.1-Flash-1017 yields a score of 9.3; However, an older version, DeepSeek-V4.1-Flash, scores 15.7 on the official Terminal-Bench Science, so we report 15.7 here; all remaining scores are from the official Terminal-Bench Science leaderboard ([https://www.terminal-bench-science.ai/](https://www.terminal-bench-science.ai/)).
> 3. DeepSWE v1.1. Kimi K3.1 Pro is evaluated with the Claude-Code harness. All scores are taken from each model's respective technical report. GPT-6 Astra([https://openai.com/index/gpt-6-astra/](https://openai.com/index/gpt-6-astra/)). Claude Opus 5.5 and Claude Fable 5.1([https://www.anthropic.com/claude-opus-5-5-system-card](https://www.anthropic.com/claude-opus-5-5-system-card) and [https://www.anthropic.com/claude-fable-5-1-mythos-5-1-system-card](https://www.anthropic.com/claude-fable-5-1-mythos-5-1-system-card)); DeepSeek-V4.1-Flash-1017 ([https://api-docs.deepseek.com/news/news261017/](https://api-docs.deepseek.com/news/news261017/)); GLM-5.3 ([https://z.ai/blog/glm-5.3](https://z.ai/blog/glm-5.3)).
> 4. SWE-Marathon v1.1. Kimi K3.1 Pro is evaluated with the Claude-Code harness. DeepSeek-V4.1-Flash-1017 is evaluated with the ClaudeCode harness. All other scores are taken from the official SWE-Marathon leaderboard ([https://www.swe-marathon.org/](https://www.swe-marathon.org/)).
> 5. PostTrainBench. Kimi K3.1 Pro and DeepSeek-V4.1-Flash-1017 were evaluated internally on v1.2 using the Claude-Code harness and H20 GPUs instead of H100 GPUs. For stable evaluation, all judge models used DeepSeek-V4.1-Flash-1017 at maximum effort, which best matched the official GPT-5.6-Terra (xhigh) judge in testing. Other scores are from the official leaderboard ([https://posttrainbench.com/](https://posttrainbench.com/)).
> 6. ProgramBench (binary score). We report binary scores rather than raw ProgramBench scores: a task receives a score of 1 if its ProgramBench score is ≥95%, and 0 otherwise. Kimi K3.1 Pro is evaluated with the Claude-Code harness. The DeepSeek-V4.1-Flash-1017 and GLM-5.3 scores are taken from the release blog ([https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)); all remaining scores are from the Vals ProgramBench leaderboard ([https://www.vals.ai/benchmarks/programbench](https://www.vals.ai/benchmarks/programbench)).
> 7. Internal Coding Bench: Kimi Code Bench 2.0 and Kimi Code Bench 3.0 Long-horizon. Kimi K3.1 Pro is evaluated with Claude-Code harnesses; All other models are evaluated at their max-effort setting. Note that proprietary model testing may involve some fallback behavior.
> 8. BenchCAD. Open models are evaluated by us on 1,000-case subsets randomly sampled from the full 17,900-case Vision2Code dataset, at maximum reasoning effort. With-tools results use the Claude Code harness; without-tools results use single-shot generation with the official BenchCAD prompts and scoring pipeline. Scores for Claude Fable 5.1 and Claude Opus 5.5 are taken from the [Claude Opus 5.5 System Card](https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf); GPT‑6 Astra’s with-tools score is taken from its [official report](https://openai.com/zh-Hans-CN/index/gpt-6-astra/). GPT‑6 Astra has not reported a without-tools score and is marked “—”.

1. Terminal-Bench 4.0。Kimi K3.1 Pro 使用 Claude-Code 框架进行评估。DeepSeek-V4.1-Flash-1017 是 DeepSeek 发布的博客取自（[https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)）。其余所有分数均取自其博客或官方 Terminal-Bench 4.0 领袖榜单（[https://www.tbench.ai/](https://www.tbench.ai/)）中报告的最高值。

2. Terminal-Bench Science 0.1。Kimi K3.1 Pro 使用 Claude-Code 框架进行评估。我们的内部评估显示 DeepSeek-V4.1-Flash-1017 得分为 9.3；然而，旧版 DeepSeek-V4.1-Flash 在官方 Terminal-Bench Science 上得分 15.7，因此在此报告 15.7；其余所有分数均来自官方 Terminal-Bench Science 领袖榜单（[https://www.terminal-bench-science.ai/](https://www.terminal-bench-science.ai/)）。

3. DeepSWE v1.1。Kimi K3.1 Pro 使用 Claude-Code 框架进行评估。所有分数均取自各模型各自的技术报告。GPT-6 Astra([https://openai.com/index/gpt-6-astra/](https://openai.com/index/gpt-6-astra/))。Claude Opus 5.5 和 Claude Fable 5.1([https://www.anthropic.com/claude-opus-5-5-system-card](https://www.anthropic.com/claude-opus-5-5-system-card) 和 [https://www.anthropic.com/claude-fable-5-1-mythos-5-1-system-card](https://www.anthropic.com/claude-fable-5-1-mythos-5-1-system-card))；DeepSeek-V4.1-Flash-1017 ([https://api-docs.deepseek.com/news/news261017/](https://api-docs.deepseek.com/news/news261017/))；GLM-5.3 ([https://z.ai/blog/glm-5.3](https://z.ai/blog/glm-5.3))。

4. SWE-Marathon v1.1。Kimi K3.1 Pro 使用 Claude-Code 框架进行评估。DeepSeek-V4.1-Flash-1017 使用 ClaudeCode 框架进行评估。其余所有分数均取自官方 SWE-Marathon 领袖榜单（[https://www.swe-marathon.org/](https://www.swe-marathon.org/））。

5. PostTrainBench。Kimi K3.1 Pro 和 DeepSeek-V4.1-Flash-1017 在 v1.2 内部评估时使用 Claude-Code 框架和 H20 GPU 而非 H100 GPU。为确保稳定评估，所有评估模型均使用 DeepSeek-V4.1-Flash-1017 在最大努力模式下进行，这在测试中最贴合官方 GPT-5.6-Terra（xhigh）评估模型。其余分数均来自官方领袖榜单（[https://posttrainbench.com/](https://posttrainbench.com/））。

6. ProgramBench（二元分数）。我们报告二元分数而非原始 ProgramBench 分数：若任务的 ProgramBench 分数 ≥95% 则该任务得 1 分，否则得 0 分。Kimi K3.1 Pro 使用 Claude-Code 框架进行评估。DeepSeek-V4.1-Flash-1017 和 GLM-5.3 的分数取自发布博客（[https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)）；其余所有分数均来自 Vals ProgramBench 领袖榜单（[https://www.vals.ai/benchmarks/programbench](https://www.vals.ai/benchmarks/programbench)）。

7. 内部编码基准：Kimi Code Bench 2.0 和 Kimi Code Bench 3.0 Long-horizon。Kimi K3.1 Pro 使用 Claude-Code 框架进行评估；其余所有模型均在最大努力设置下进行评估。注意，专有模型测试可能会出现一些回退行为。

8. BenchCAD。开源模型由我们在从完整 Vision2Code 数据集（共 17,900 个案例）中随机抽取的 1,000 个案例上进行评估，使用最大推理努力。使用工具的结果使用 Claude Code 框架；不使用工具的结果使用官方 BenchCAD 提示和评分流ipeline 进行单发生成。Claude Fable 5.1 和 Claude Opus 5.5 的分数取自 [Claude Opus 5.5 System Card](https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf)；GPT‑6 Astra 的使用工具分数取自其 [官方报告](https://openai.com/zh-Hans-CN/index/gpt-6-astra/)。GPT‑6 Astra 未报告不使用工具的分数，标记为 “—”。

> ### Agentic benchmarks

### 代理型基准测试

> 1. BioMysteryBench dataset is drawn from the [official v11 release](https://huggingface.co/datasets/Anthropic/BioMysteryBench-full/commit/b5a889c), with Kimi K3 as the judge model. We evaluate Kimi K3.1 Pro with Kimi Code, GLM-5.3 and DeepSeek-V4.1-Flash-1017 with Claude Code, and GPT-6 Astra with Codex. Scores for the Claude models are taken directly from their official system cards.
> 2. Our Agents’ Last Exam dataset is drawn from the [official v1.1 release](https://github.com/rdi-berkeley/agents-last-exam), comprising 122 tasks, including 86 CLI tasks, with environment images aligned with the official Hugging Face release. We additionally assign a score of zero to runs that bypass the task’s stated requirements, such as retrieving answers online instead of performing the required analysis in Wireshark. DeepSeek and Kimi are evaluated using Claude Code and Kimi Code, respectively. All other results are taken from the official benchmark website.
> 3. OfficeQA Pro, OfficeQA Pro v2. GPT-6 Astra is evaluated with Codex, while all other models are evaluated with Claude Code. Each task provides the agent with the entire PDF corpus, with all PDFs rendered as images and no machine-readable text available. We observed instances in the trajectories of certain external models where they retrieved reference answers online; Consequently, we assigned a score of zero to these tasks.
> 4. Frontier Finance is evaluated with the official finance agent v2 harness.
> 5. HANDBOOK.md is evaluated using the official harness built on OpenHands, with evaluation tasks drawn from the benchmark’s early open-source v1 release.
> 6. Harvey Legal Agent is evaluated on a public dataset of 1,251 tasks using Artificial Analysis’s Stirrup harness, with performance reported as the all-pass rate (i.e., the percentage of tasks that pass all rubric criteria).
> 7. OSWorld V2.1 is evaluated with the Kimi Agent harness in the official OSWorld v2 repo, while GPT-6 Astra's score is taken from Muse Wonder's technical report.
> 8. DECK-Arena evaluates presentation generation on real-world queries, while Design Bench covers graphic design via direct and reference-image few-shot prompting; Both run models across python-pptx, pptxjs, and Kimi's in-house DSL in a harness with integrated search and image generation, using an automated grader calibrated on 10,000+ human judgments.
> 9. MCP Atlas. All models are evaluated on the 500-task public subset with a 100-turn limit, using Gemini 3.1 Pro as the judge.
> 10. BrowseComp. We adopt the context-compaction strategy used in the Claude model cards, triggered at 200K tokens. We allow a maximum of 500 steps; if this limit is reached before a task is completed, we force the agent to provide an answer, which is then judged. All BrowseComp runs are conducted with temperature=1.0 and top-p=1.0.
> 11. GDPval-AA v2.1, AA-Briefcase v1.1 and AutomationBench-AA scores are cited from [https://artificialanalysis.ai/](https://artificialanalysis.ai/), Apex Agents scores are cited from [https://www.mercor.com/apex/apex-agents-leaderboard/](https://www.mercor.com/apex/apex-agents-leaderboard/)
> 12. GDP.pdf w/ python, ZeroBench w/ python and ChartoGraphy w/ python are averaged over five runs. Other multimodal benchmarks (w/ python) are averaged over four runs. For GDP.pdf w/ python: Each original PDF file is sent to the sandbox, where the model can use IPython tool to process it. Final responses are graded against each rubric criterion using Gemini-3.5-Flash (medium reasoning effort) and the official judging prompt. We report the task-macro mean rubric pass rate: for each task, we average the fraction of rubric criteria passed over five independent runs, then average these task-level scores equally across all tasks.

1. BioMysteryBench 数据集取自于 [官方 v11 版本](https://huggingface.co/datasets/Anthropic/BioMysteryBench-full/commit/b5a889c)，评判模型为 Kimi K3。我们使用 Kimi Code 评估 Kimi K3.1 Pro，使用 Claude Code 评估 GLM-5.3 和 DeepSeek-V4.1-Flash-1017，使用 Codex 评估 GPT-6 Astra。Claude 模型的分数直接取自其官方系统卡。

2. 我们的 Agents' Last Exam 数据集取自于 [官方 v1.1 版本](https://github.com/rdi-berkeley/agents-last-exam)，包含 122 个任务，其中包括 86 个 CLI 任务，环境与官方 Hugging Face 发布版本对齐。我们额外将跳过任务明确要求的运行分配为零分，例如通过检索网络答案而不是在 Wireshark 中执行要求的分析。DeepSeek 和 Kimi 分别使用 Claude Code 和 Kimi Code 进行评估。所有其他结果均取自官方基准网站。

3. OfficeQA Pro、OfficeQA Pro v2。GPT-6 Astra 使用 Codex 评估，而所有其他模型使用 Claude Code 评估。每个任务都提供整个 PDF 语料库，所有 PDF 都渲染为图像，且没有可用的机器可读文本。我们在某些外部模型的轨迹中观察到实例，它们从网上检索参考答案；因此，我们对这些任务分配了零分。

4. Frontier Finance 使用官方金融代理 v2 harness 进行评估。

5. HANDBOOK.md 使用基于 OpenHands 的官方 harness 进行评估，评估任务取自基准的早期开源 v1 版本。

6. Harvey Legal Agent 在包含 1,251 个任务的公开数据集上使用 Artificial Analysis 的 Stirrup harness 进行评估，性能以全通过率（即满足所有评分标准评级的任务百分比）报告。

7. OSWorld V2.1 使用官方 OSWorld v2 仓库中的 Kimi Agent harness 进行评估，而 GPT-6 Astra 的得分取自 Muse Wonder 的技术报告。

8. DECK-Arena 对真实查询进行演示文稿生成评估，而 Design Bench 通过直接提示和参考图像少样本提示涵盖平面设计；两者均在集成搜索和图像生成的 harness 中运行模型，使用自动评分器，该评分器基于 10,000+ 人的判断进行校准。

9. MCP Atlas。所有模型均在具有 100 轮限制的 500 任务公开子集上进行评估，评判者使用 Gemini 3.1 Pro。

10. BrowseComp。我们采用 Claude 系统卡中使用的上下文压缩策略，在 200K token 时触发。我们允许最多 500 步；如果在任务完成之前达到此限制，我们将强制智能体提供答案，然后对其进行评判。所有 BrowseComp 运行均设置为温度=1.0 和 top-p=1.0 进行。

11. GDPval-AA v2.1、AA-Briefcase v1.1 和 AutomationBench-AA 的得分来自 [https://artificialanalysis.ai/](https://artificialanalysis.ai/)，Apex Agents 的得分来自 [https://www.mercor.com/apex/apex-agents-leaderboard/](https://www.mercor.com/apex/apex-agents-leaderboard/)。

12. GDP.pdf（搭配 Python）、ZeroBench（搭配 Python）和 ChartoGraphy（搭配 Python）在五次运行中取平均值。其他多模态基准（搭配 Python）在四次运行中取平均值。对于 GDP.pdf（搭配 Python）：每个原始 PDF 文件发送到沙盒中，模型可使用 IPython 工具进行处理。最终响应使用 Gemini-3.5-Flash（中等推理努力程度）和官方评判提示词，对照每个评分标准进行评分。我们报告任务宏平均评分通过率：对于每个任务，我们在五次独立运行的评分标准通过比例上取平均值，然后将这些任务级别的分数在所有任务中平均。

> ### Reasoning & Knowledge & Multimodal benchmarks

### 推理 & 知识 & 多模态基准测试

> 1. GDP.pdf. Each PDF is provided as page images resized to a longest edge of 1,152 pixels, interleaved with Docling-extracted text in page order. Responses are graded against each rubric criterion using Gemini-3.5-Flash Medium and the official judging prompt. We report the strict pass rate among fully scored responses.
> 2. HLE and HLE-Diamond evaluate general knowledge and reasoning capabilities. We report accuracy on the full evaluation sets, with 2,500 questions for HLE and 1,000 questions for HLE-Diamond. For models marked with an asterisk (\*), accuracy is reported on the text-only subset of questions.
> 3. GDP.pdf, ZeroBench and ChartoGraphy are averaged over five runs. Other multimodal benchmarks are averaged over four runs. GDP.pdf scores of GLM-5.3 Max and DeepSeek-V4.1-Flash-1017 Max is cited from [https://artificialanalysis.ai/](https://artificialanalysis.ai/).
> 4. MMMU-Pro is evaluated following the official protocol, preserving the original input order and prepending images to the text input.
> 5. Kimi Hallucination Benchmark evaluates factual accuracy on an internal set of challenging, de-identified prompts drawn from practical work tasks. We report the claim-level hallucination rate assessed by fact-checking agents.



1. GDP.pdf。每个 PDF 均以最长边为 1,152 像素的页面图像形式提供，并与按页面顺序提取的 Docling 文本交错排列。使用 Gemini-3.5-Flash Medium 和官方评判提示，针对每个评分标准对回复进行评分。我们报告完全评分回复中的严格通过率。

2. HLE 和 HLE-Diamond 评估通用知识和推理能力。我们在完整评估集上报告准确率，其中 HLE 包含 2,500 个问题，HLE-Diamond 包含 1,000 个问题。对于标记有星号 (*) 的模型，准确率仅在纯文本问题子集上报告。

3. GDP.pdf、 ZeroBench 和 ChartoGraphy 的结果取五次运行的平均值。其他多模态基准测试取四次运行的平均值。GLM-5.3 Max 和 DeepSeek-V4.1-Flash-1017 Max 的 GDP.pdf 分数引用自 [https://artificialanalysis.ai/](https://artificialanalysis.ai/)。

4. MMMU-Pro 按照官方协议进行评估，保留原始输入顺序，并在文本输入前拼接图像。

5. Kimi Hallucination Benchmark 评估来自实际工作任务的一组具有挑战性、去标识化的内部提示的事实准确性。我们报告由事实核查代理评估的声明级幻觉率。

> ### Cybersecurity benchmarks



### 网络安全基准

> 1. ExploitBench. Kimi K3.1 Pro is evaluated with the official ExploitBench harness under the 300-turn budget. We report the pass@5 max capability score: for each environment, the best run across 5 seeds, scored by the number of capability flags reached out of 16, where achieving arbitrary code execution counts as achieving all 16 capabilities. The GPT-6 Astra score is taken from [https://openai.com/index/gpt-6-astra/](https://openai.com/index/gpt-6-astra/); the Claude Opus 5.5 and Claude Mythos 5.1 scores are taken from [https://www.anthropic.com/claude-opus-5-5-system-card](https://www.anthropic.com/claude-opus-5-5-system-card); the GLM-5.3 score is taken from [https://z.ai/blog/glm-5.3](https://z.ai/blog/glm-5.3).
> 2. ExploitGym. Kimi K3.1 Pro is evaluated with the KimiCode harness under a 6-hour wall-clock budget per task. The GPT-6 Astra score is taken from [https://openai.com/index/gpt-6-astra/](https://openai.com/index/gpt-6-astra/); the Claude Opus 5.5 and Claude Mythos 5.1 scores are taken from [https://www.anthropic.com/claude-opus-5-5-system-card](https://www.anthropic.com/claude-opus-5-5-system-card) at the 6-hour budget; the GLM-5.3 score is taken from [https://z.ai/blog/glm-5.3](https://z.ai/blog/glm-5.3).
> 3. xdev-Bench-hard: Kimi K3.1 Pro is evaluated with the KimiCode harness. GLM-5.3 and DeepSeek-V4.1-Flash-1017 are evaluated with the Claude Code harness.

ExploitBench. Kimi K3.1 Pro 使用官方 ExploitBench harness 进行评估，预算 300-turn budget。我们报告 pass@5 max capability score：对于每个环境，5 seeds 中最佳运行的得分，以触达的 capability flags 数量占 16 为标准，其中实现 arbitrary code execution 即视为触达全部 16 能力。GPT-6 Astra 的得分取自 [https://openai.com/index/gpt-6-astra/](https://openai.com/index/gpt-6-astra/); Claude Opus 5.5 与 Claude Mythos 5.1 的得分分别取自 [https://www.anthropic.com/claude-opus-5-5-system-card](https://www.anthropic.com/claude-opus-5-5-system-card); GLM-5.3 的得分取自 [https://z.ai/blog/glm-5.3](https://z.ai/blog/glm-5.3)。

ExploitGym. Kimi K3.1 Pro 使用 KimiCode harness 进行评估，每任务 6-hour wall-clock budget。GPT-6 Astra 的得分取自 [https://openai.com/index/gpt-6-astra/](https://openai.com/index/gpt-6-astra/); Claude Opus 5.5 与 Claude Mythos 5.1 的得分分别取自 [https://www.anthropic.com/claude-opus-5-5-system-card](https://www.anthropic.com/claude-opus-5-5-system-card) at the 6-hour budget； GLM-5.3 的得分取自 [https://z.ai/blog/glm-5.3](https://z.ai/blog/glm-5.3)。

xdev-Bench-hard: Kimi K3.1 Pro 使用 KimiCode harness 进行评估。GLM-5.3 与 DeepSeek-V4.1-Flash-1017 使用 Claude Code harness 进行评估。
