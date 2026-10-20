---
title: "Timestral：Mistral 的时间序列基础模型"
date: 2026-10-20T08:44:00+08:00
draft: false
source: "Hacker News"
originalTitle: "Timestral: Mistral's time-series foundation models"
originalUrl: "https://mistral.ai/news/timestral/"
hnUrl: ""
points: 
comments: 
---

> Timestral, Mistral’s first family of time-series foundation models, delivers state-of-the-art probabilistic, multivariate forecasts with just 209M parameters, outperforming larger models on key benchmarks while supporting past and future covariates. Available in four sizes (5M to 209M parameters), it balances accuracy and efficiency, running efficiently on CPUs and excelling in zero-shot forecasting for diverse domains. The model combines synthetic pre-training, covariate-aware attention, and long-context learning, with fine-tuning options for domain adaptation via Mistral Forge.

Timestral 是 Mistral 首个时间序列基础模型系列，仅凭 209M 参数即可提供最先进的概率性多变量预测，在关键基准测试中超越更大模型，同时支持过去和未来的协变量。该系列提供四种规模（5M 至 209M 参数），平衡了准确性与效率，可在 CPU 上高效运行，并在多个领域的零样本预测中表现出色。该模型融合了合成预训练、协变量感知注意力机制和长上下文学习，并通过 Mistral Forge 提供微调选项以实现领域适配。

> Today, we’re releasing Timestral, our first family of time-series foundation models. Our largest model, at just 209M parameters, ranks first on all three of the field's main public benchmarks, GIFT-Eval, TIME, and fev-bench, outperforming the previous state of the art with only two-thirds of the model parameters.



今天，我们发布了 Timestral，这是我们首个时间序列基础模型系列。我们最大的模型仅有 209M 参数，在 GIFT-Eval、TIME 和 fev-bench 这三个领域主要公开基准测试中均排名第一，以仅三分之二的参数量超越了此前的最优性能。

> Timestral delivers probabilistic, multivariate forecasts and supports past-only and known-future covariates. Our family of models sits on the Pareto front of forecasting accuracy versus model size, delivering leading performance at each size. Results have been submitted to the GIFT-Eval and TIME leaderboards.

Timestral 能够进行概率性多变量预测，并支持仅依赖历史值的协变量和未来值已知的协变量。我们的模型系列处于预测准确度与模型大小之间的 Pareto 前沿，在每种模型规模下均能实现领先性能。结果已提交至 GIFT-Eval 和 TIME 排行榜。

> ## Time Series Foundation Models (TSFM)

## 时间序列基础模型 (TSFM)

> Time series is one of the most common data types in enterprise, from sensor telemetry to observability metrics. Forecasts built on it drive decisions in capacity planning, energy, supply chains, risk and maintenance.

时间序列 time series 是企业中最常见的数据类型之一，从 sensor telemetry 到 observability metrics。基于时间序列构建的预测 forecasts 驱动着 capacity planning、能源、supply chains、risk 和 maintenance 等领域的决策。

> Industrial plants forecast process sensors against the production schedule, catch equipment drift before it fails, and plan capacity and spare parts across thousands of assets. Finance teams forecast flows, volumes, and volatility to inform positions, hedging, and treasury across thousands of accounts.

工业工厂根据生产计划对工艺传感器进行预测，以在设备故障前捕捉设备漂移现象，并在数千台资产中优化产能和备件配置。财务团队则通过预测现金流、交易量和波动性，为数千个账户的头寸管理、对冲策略和国库操作提供决策支持。

> Classical models such as ARIMA and linear regression remain well-established tools for forecasting time series. These models are usually fitted to a single series and learn only from that series' history.

ARIMA 和线性回归等经典模型仍是时间序列预测中成熟可靠的重要工具。这些模型通常仅基于单个序列进行拟合，并且只从该序列的历史数据中学习。

> Deep learning models such as PatchTST add the capacity to learn nonlinear patterns across many related series, but they are still typically trained from scratch on each dataset, so what they learn doesn't carry over to new domains.

深度学习模型 如 PatchTST 能够学习多个相关时序序列中的非线性模式， 但它们通常仍然是从零开始在每个数据集上进行训练， 因此它们学到的内容难以迁移到新领域。

> Time series foundation models bring the pre-training approach to time series. Trained on a large and diverse corpus, our model learns patterns that transfer across series, forecasting zero-shot on data it has never seen, even in domains where data is scarce.

时间序列基础模型将预训练方法引入了时间序列领域。通过在大型多样化语料库上进行训练，我们的模型能够学习到跨时间序列的可迁移模式，即使在数据稀缺的领域，也能实现对从未见过的数据进行零样本预测。

> ## Benchmark Results

## 基准测试结果

> We evaluated Timestral on the three main public forecasting benchmarks: GIFT-Eval, TIME and fev-bench. Among pre-trained, zero-shot models, it ranks first across all five metrics. These results come from a single checkpoint, without ensembling.

我们在三个主要的公开预测基准上对 Timestral 进行了评估：GIFT-Eval、TIME 和 fev-bench。在预训练模型的零样本设置下，Timestral 在全部五项指标中均排名第一。这些结果均来自单个检查点，未使用集成。

> - GIFT-Eval - GMean MASE
> - GIFT-Eval - GMean WQL

User Safety: safe

> *GIFT-Eval, top ten of 83 comparable pretrained and zero-shot entries. Lower is better.*

GIFT-Eval，83 个可比预训练和零样本条目中的前十名。数值越低越好。

> - TIME - GMean MASE
> - TIME - GMean CRPS

- 时间序列 - 几何平均数 MASE
- 时间序列 - 几何平均数 CRPS

> *TIME, top ten of the 35 leaderboard entries. Lower is better on both metrics.*

*TIME, 前35名榜单的前十名。两个指标中较低值更好。*

![](https://mistral.ai/_astro/SQL%20skill%20score_yUMlC.webp?dpl=6ad67bec1e6315ef32f09863)

> Today, we’re releasing Timestral, our first family of time-series foundation models. Our largest model, at just 209M parameters, ranks first on all three of the field's main public benchmarks, GIFT-Eval, TIME, and fev-bench, outperforming the previous state of the art with only two-thirds of the model parameters.

今天，我们发布了 Timestral，这是我们首个时序基础模型系列。我们的最大模型仅有 209 亿参数，却在 GIFT-Eval、TIME 和 fev-bench 这三个领域主要公共基准测试中均排名第一，以三分之二的参数量就超越了之前的技术领先水平。

> *fev-bench, top ten of the 37 leaderboard entries, by SQL skill score. Higher is better.*

*fev-bench 排行榜 37 个条目中，按 SQL 技能得分排名前十。分数越高越好。*

> ## Family of models optimised for every specification

## 针对各种规格优化的模型系列

> Timestral has been optimised as a family of four models: 5M, 28M, 123M and 209M parameters. The larger models improve forecast performance, while the smaller ones are faster and cheaper. All four share the same architecture and training recipe. Every size sits on the Pareto front of accuracy versus model size: for each model size, no public model forecasts better.

Timestral 被优化为四个参数规模的模型家族：5M、28M、123M 和 209M。 大参数模型能提升预测性能，而小参数模型则更快、更经济。这四个模型共享相同的架构和训练流程。 每个参数规模都位于精度与模型规模的帕累托前沿：对于每个模型规模，目前没有公开发布的模型能够超越其预测性能。

<iframe src="https://ml4-blog-widgets.netlify.app/pareto-benchmarks/?iframe" width="100%" height="700" title="Pareto Benchmarks Demo"></iframe>

> *Score vs model size on GIFT-Eval, TIME and fev-bench (shown as 1 − skill score). Lower is better. Our 28M model beats Chronos-2, about four times larger, on GIFT-Eval and TIME. Our 209M model beats TimesFM-3 and Falcon-2.0 with fewer parameters.*



在 GIFT-Eval、TIME 和 fev-bench 上的得分与模型大小对比（表示为 1 − skill score）。越低越好。我们的 28M 模型在 GIFT-Eval 和 TIME 上击败了约大四倍的 Chronos-2。我们的 209M 模型以更少的参数击败了 TimesFM-3 和 Falcon-2.0。

> Timestral does not need a GPU at inference. On a standard server CPU with 8 threads, forecasting one day ahead from three weeks of 15-minute history takes 10 ms with the 5M model and 140 ms with the 209M model. Smaller models trade some accuracy for speed: the 28M model is five times faster than the 209M model, and the 123M model comes within 0.2% of the 209M score at three quarters of its latency.

Timestral 在推理时不需要 GPU。在具有 8 线程的标准服务器 CPU 上，基于三周 15 分钟历史预测未来一天，使用 5M 模型耗时 10 ms，使用 209M 模型耗时 140 ms。较小的模型以一定的准确性换取速度：28M 模型的速度是 209M 模型的五倍，而 123M 模型在延迟为 209M 模型四分之三的情况下，其得分与 209M 模型的得分相差仅 0.2%。

> ## An industrial example

## 一个工业案例

> Consider an industrial plant with thousands of sensors across its equipment. Timestral can improve the forecasts on that data in several ways.

考虑一座在其设备上分布着数千个传感器的工业设备厂。 Timestral 可以在多种方式上改进对该数据的预测。

<iframe src="https://ml4-blog-widgets.netlify.app/timeseries-forecast/" title="Time Series Forecast Demo" width="100%" height="650"></iframe>

> **Multivariate forecasting.** A pump's vibration, temperature and pressure don't move independently. A rise in one often explains or causes a change in another. Timestral models related series jointly, so it can use those dependencies instead of forecasting each sensor in isolation.

**多变量预测。**泵的振动、温度和压力并非独立变化。一个变量的上升往往能够解释或引发另一个变量的变化。Timestral 模型将相关序列联合建模，因此它可以利用这些依赖关系，而不是分别单独预测每个传感器。

> **Probabilistic forecasting.** A single predicted value may not show the full picture. Timestral predicts a full set of quantiles, so teams can see how wide the uncertainty is, set alert thresholds that reflect it, and plan maintenance around risk rather than a single number.

**概率预测**。单个预测值可能无法完整呈现情况。Timestral 预测一组完整的分位数，使团队能够看到不确定性的范围，设定能够反映这种不确定性的警报阈值，围绕风险而非单一数值进行维护规划。

> **Categorical covariates.** Some covariates take values from a set of categories rather than continuous numbers, such as the day of the week, or a machine's state (running, idle, under maintenance). Encoding these as numbers would impose an order or scale they don't have. Timestral takes them as categorical inputs directly to improve forecasts.



分类协变量。某些协变量的值取自一组类别，而非连续数字，例如星期中的某天，或者机器的状态（运行、空闲、维护中）。将它们编码为数字会强加其并不具备的顺序或尺度。Timestral 直接将它们作为分类输入，以改善预测。

> **Known-future covariates.** Some drivers of sensor behaviour are known in advance, such as production schedules, planned shutdowns, weather forecasts. Timestral can condition on them to improve forecast quality, so a scheduled load increase is expected rather than flagged as a surprise.

Known-future covariates. 已知未来 covariates.

一些导致传感器行为的因素事先已知，例如生产计划、计划关闭、天气预报。

Timestral 可以基于它们来改进 forecast quality 预测质量，因此计划的负载增加是预期的，而不是被标记为惊喜。

> **From Model to System**

**从模型到系统**

> Timestral is a numerical model that can run inside existing monitoring pipelines, or be paired with our language models in multi-modal agentic workflows.

Timestral 是一种数值模型，既可以运行在现有的监控流水线中，也可以与我们的语言模型搭配，用于多模态 Agent 工作流。

> In the plant, that could look like this:

在工厂中，这可能是这样的：

> 1. Timestral running continuously on the plant's sensor streams, detecting anomalies as they occur.
> 2. When it flags an anomaly on a pump, an agent embeds the signals and compares against embeddings of past sensor data to find similar historical failures.
> 3. The agent then starts sub-agents to run a root cause analysis, drawing on context from that plant, such as maintenance records, shift logs and operator notes, equipment manuals, past work orders, and readings from related equipment.
> 4. The agent drafts a suggested diagnosis based on the findings, with supporting evidence and possible next steps.

1. Timestral 持续监控工厂传感器数据，实时检测异常情况。
2. 当它检测到泵出现异常时，智能代理会将信号嵌入，并与历史传感器数据的嵌入进行比对，查找类似的历史故障模式。
3. 然后，代理启动子代理，利用工厂的上下文信息（如维护记录、交班日志、操作员笔记、设备手册、历史工单及相关设备读数）进行根本原因分析。
4. 代理基于分析结果起草诊断建议，包括支持证据和可能的后续行动。

> The plant manager gets a diagnosis and a plan backed by the sensor data, rather than just an alert.

工厂经理获得的是基于传感器数据的诊断和方案，而不仅仅是一则警报。

> ## Key technical contributions

## 关键技术贡献

> Several ideas have been combined to produce these results. Each will be described in detail in the technical report.



多种思路的结合促成了这些成果。每一种都将在技术报告中进行详细说明。

> 1. **Decoupled Horizon Forecasting.** Causal decoders trained with contiguous patch masking, as in Toto 2.0 and TimesFM-3, mask out the values to be forecast, so they look like missing values and are also lost as context for later forecasts. Our approach, DHF, separates the two: the full history stays in the sequence, and learned forecast tokens read the history before them. Every observed value thus serves as both target and context, true gaps stay flagged as missing, and training horizon lengths and missing-data augmentation can be tuned independently of each other.
> 2. **Covariate-aware attention.** Each input series is assigned a role: target variate, past-only covariate or known-future covariate. Known-future covariates are visible across the whole window while targets stay causal, and information flows only from covariates to targets. Timestral can therefore use a holiday calendar or a weather forecast without leaking a target's own future into its forecast.
> 3. **Synthetic-first data.** The majority of the training data was synthetic. We first generated univariate processes with coherent temporal dynamics, including trends, seasonality and diverse noise patterns. We then used a multivariate synthesizer to construct multivariate series by introducing nonlinear dependencies between these processes.
> 4. **Two-stage training.** Timestral is first pre-trained at scale on purely synthetic data with context size 8192, then post-trained on a mix of real and synthetic data with a 4x longer context. The objective is a pinball loss over 21 quantiles, a discrete approximation of CRPS.
> ![](https://mistral.ai/_astro/01-timestral-overview_WcSY2.webp?dpl=6ad67bec1e6315ef32f09863)

1. **解耦预测视野（Decoupled Horizon Forecasting，DHF）。** 采用连续补丁掩码训练的因果解码器（如 Toto 2.0 和 TimesFM-3）会掩盖待预测的值，使其看起来像缺失值，并导致这些值作为后续预测的上下文丢失。我们的方法 DHF 将两者分离：完整历史保留在序列中，学习到的预测 token 读取其之前的历史。因此每个观测值同时充当目标和上下文，真实间隙仍标记为缺失，且训练预测视野长度与缺失数据增强可相互独立调整。

2. **协变量感知注意力。** 每个输入序列被分配一个角色：目标变量、仅过去协变量或已知未来协变量。已知未来协变量在整个窗口可见，而目标保持因果性，且信息仅从协变量流向目标。因此 Timestral 可使用假日日历或天气预报，而不将目标自身的未来泄露到其预测中。

3. **合成数据优先。** 大部分训练数据为合成数据。我们首先生成具有连贯时间动态的单变量过程，包含趋势、季节性和多样的噪声模式。然后使用多变量合成器构建多变量序列，通过在这些过程间引入非线性依赖。

4. **两阶段训练。** Timestral 首先在纯合成数据上大规模预训练，上下文大小为 8192；然后在真实与合成数据的混合上进行后训练，上下文长度为 4 倍。目标是 21 个分位数上的 pinball loss，即 CRPS 的离散近似。

![](https://mistral.ai/_astro/01-timestral-overview_WcSY2.webp?dpl=6ad67bec1e6315ef32f09863)

> Today, we’re releasing Timestral, our first family of time-series foundation models. Our largest model, at just 209M parameters, ranks first on all three of the field's main public benchmarks, GIFT-Eval, TIME, and fev-bench, outperforming the previous state of the art with only two-thirds of the model parameters.

今天，我们发布了 Timestral，这是我们首个时间序列基础模型家族。我们的最大模型仅有 209 亿参数，却在 GIFT-Eval、TIME 和 fev-bench 这三个领域的主要公开基准测试中排名第一，以更少的参数（仅为之前的两倍）就超越了之前最先进的技术。

> ## A model that can be adapted



## 可适应的模型

> Public benchmarks measure general performance, but production data can be significantly different in behavior and structure. It may also shift over time as markets change regime, equipment degrades and demand patterns move. The lasting value lies in being able to adapt a model to in-domain data and keep retraining it as the distribution moves.

公开 benchmarks 衡量通用性能，但生产数据可能在行为和结构上显著不同。它也可能随时间转移，随着市场运行模式的变化，设备退化和需求模式的移动。持久的价值在于能够适配域内数据并持续重训练模型，随着分布的移动。

> For organisations that want to go further, Timestral is available through [Mistral Forge](https://mistral.ai/products/forge/), the same training pipeline we use for our language models. It supports:



对于希望走得更远的组织，可以通过 [Mistral Forge](https://mistral.ai/products/forge/) 获取 Timestral，这是我们用于语言模型的同一训练流水线。它支持：

> - **Zero-shot inference** out of the box.
> - **Architectural extensions**, such as domain-specific covariates.
> - **Fine-tuning on proprietary data**, specialising to a domain while preserving general performance.
> - **Control over the training data**, including adjusting the training mix, replaying pre-training data, and generating synthetic data samples to reflect the target domain. Full control over the data ensures that nothing we backtest was seen during pre-training.

- **Zero-shot 推理** 即开即用。  
- **Architectural extensions**，例如领域特定的协变量。  
- **Fine-tuning on proprietary data**，在保持通用性能的同时，针对特定领域进行专业化。  
- **Control over the training data**，包括调整训练组合、重播预训练数据以及生成合成数据样本以反映目标领域。对数据的完全控制确保了我们回测的任何内容在预训练期间未被看到。

> The full pipeline can be deployed on our clients’ hardware, including air-gapped environments.

全流程可以部署到客户的硬件上，包括离线环境。

> ## What’s next

## 接下来是什么

> We have published a [GitHub repository](https://github.com/mistralai/timestral) so you can run Timestral on your own data. A technical report with the full results will follow. For more specialised forecasting problems, or to collaborate on research, please reach out to us.

我们已发布 [GitHub 仓库](https://github.com/mistralai/timestral)，您可以在自己的数据上运行 Timestral。包含完整结果的技术报告将随后发布。如果您有更专业的预测问题，或希望在研究方面进行合作，请与我们联系。

<table><tbody><tr><th colspan="1" rowspan="1"><p>Timestral</p></th><th colspan="1" rowspan="1"></th></tr><tr><td colspan="1" rowspan="1"><p>Type</p></td><td colspan="1" rowspan="1"><p>Time-series foundation model (TSFM)</p></td></tr><tr><td colspan="1" rowspan="1"><p>Parameters</p></td><td colspan="1" rowspan="1"><p>5M, 28M, 123M and 209M</p></td></tr><tr><td colspan="1" rowspan="1"><p>Context length</p></td><td colspan="1" rowspan="1"><p>32,768 time steps</p></td></tr><tr><td colspan="1" rowspan="1"><p>Output</p></td><td colspan="1" rowspan="1"><p>Probabilistic forecasts, 21 quantiles</p></td></tr><tr><td colspan="1" rowspan="1"><p>Inputs</p></td><td colspan="1" rowspan="1"><p>Multivariate targets, past-only and known-future covariates</p></td></tr><tr><td colspan="1" rowspan="1"><p>Deployment</p></td><td colspan="1" rowspan="1"><p>On-prem, VPC or air-gapped</p></td></tr><tr><td colspan="1" rowspan="1"><p>Licence</p></td><td colspan="1" rowspan="1"><p>Modified MIT</p></td></tr></tbody></table>

![](https://mistral.ai/cms-media/api/media/file/timestral-icon-model.svg)

> Timestral

Timestral

> Mistral's time-series foundation models. State-of-the-art probabilistic forecasts, 5M–209M params, runs on CPU.

Mistral 的 time-series foundation models。
最先进的 probabilistic forecasts，5M–209M 参数，可在 CPU 上运行。

> 0%

请提供需要翻译的英文原文。
