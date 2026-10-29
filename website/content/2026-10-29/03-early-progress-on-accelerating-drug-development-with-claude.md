---
title: "关于使用Claude加速药物研发的早期进展"
date: 2026-10-29T09:12:40+08:00
draft: false
source: "Hacker News"
originalTitle: "Early progress on accelerating drug development with Claude"
originalUrl: "https://www.anthropic.com/research/early-progress-drug-development"
hnUrl: ""
points: 
comments: 
---

> *Anthropic’s [life sciences team](https://www.anthropic.com/science) is working to accelerate curing disease. Over the past several months, our scientists have engaged in deep research partnerships with six organizations developing new medicines: [BigHat Biosciences](https://www.bighatbio.com/), [Bristol Myers Squibb](https://www.bms.com/), [Divergence Labs](https://divergencelabs.com/), [Enveda](https://enveda.com/), [Generate Biomedicines](https://generatebiomedicines.com/), and [The Column Group](https://www.thecolumngroup.com/). We've also begun drug discovery efforts of our own. In doing so, we've learned a lot about how Claude can support drug development, and how we’ll need to improve Claude further to realize AI's potential in medicine. We plan to scale this work up substantially from here*.

Anthropic 的[生命科学团队](https://www.anthropic.com/science)正致力于加速疾病治愈。在过去几个月中，我们的科学家与六家开发新药的组织建立了深度研究合作伙伴关系：[BigHat Biosciences](https://www.bighatbio.com/)、[Bristol Myers Squibb](https://www.bms.com/)、[Divergence Labs](https://divergencelabs.com/)、[Enveda](https://enveda.com/)、[Generate Biomedicines](https://generatebiomedicines.com/) 以及 [The Column Group](https://www.thecolumngroup.com/)。我们也已启动自身的药物发现工作。在此过程中，我们深入了解了 Claude 如何助力药物开发，以及我们需要如何进一步改进 Claude 以释放 AI 在医药领域的潜力。我们计划大幅扩大这项工作的规模。

> There are many opportunities to speed up drug development, even beyond the most commonly discussed applications of AI, like [proposing initial designs](https://www.anthropic.com/research/Claude-accelerates-protein-design) for new molecules. Developing a drug involves many varied tasks: doing early research to identify a target for a drug and the right type of drug to engage it, designing a molecule with the right properties, optimizing it to be manufactured reliably at scale, drafting the regulatory filings needed to run clinical trials, designing and administering those trials, and much more.

药物开发有许多加快进程的机会，即使超越AI最常讨论的应用，如[提出新分子的初始设计](https://www.anthropic.com/research/Claude-accelerates-protein-design)。开发药物涉及许多多样化的任务：进行早期研究以识别药物靶点和针对其的合适药物类型，设计具有正确性质的分子，优化其在大规模生产中可靠制造，起草运行临床试验所需的监管文件，设计和管理这些试验，以及更多。

> Our strategy to realize AI’s medical benefits is based on having AI increasingly involved in all of these tasks. There is no single problem to solve; the bottlenecks are distributed all throughout the drug development process. The best way to identify and work through these bottlenecks is to get deeply involved in real drug programs, across many different disease areas and stages of development.

我们实现 AI 医疗价值的策略，是让 AI 越来越多地参与到所有这些任务中。这并非解决单一问题即可；瓶颈分布在药物研发流程的各个环节。识别并攻克这些瓶颈的最佳途径，是深度参与真实的药物研发项目，覆盖多个不同的疾病领域和研发阶段。

> So, over the past several months, we’ve partnered with six organizations to do so. We’ve also started drug discovery efforts of our own, including programs for rare childhood forms of muscular dystrophy, where Claude handles much of the scientific and operational work.

过去几个月，我们与六个组织合作实现这一目标。我们也开始了自己的药物发现工作，包括针对儿童肌营养不良等罕见病症的项目，其中 Claude 负责大部分的科学和运营工作。

> This work serves our goals in three ways. First, it lets us better understand the strengths and limitations of our models in relation to a much wider range of drug development tasks (we’ve already prioritized specific improvements to our models based on what we’ve learned so far). Second, these programs can serve as case studies for the wider life sciences community. If Claude is to significantly increase the rate of new cures, we need to work with many more biotechnology firms and integrate Claude more deeply into their development processes. Third, these projects should, if their positive trajectories continue, have direct impact themselves. We’re optimistic that some may result in effective new medicines for the diseases they target, including food allergies, rare childhood diseases, and several forms of cancer.

这项工作从三个方面服务于我们的目标。首先，它让我们能够更好地理解我们的模型在远更广泛的药物开发任务方面的优势和局限性（我们已经根据迄今所学到的内容，对模型的具体改进进行了优先级排序）。其次，这些项目可以作为更广泛生命科学社区的案例研究。如果要让 Claude 显著提高新疗法的发现速度，我们需要与更多生物技术公司合作，并将 Claude 更深入地集成到它们的开发流程中。第三，如果这些项目保持积极的发展势头，它们本身应该产生直接影响。我们乐观地认为，其中一些项目可能会为它们针对的疾病（包括食物过敏、罕见儿童疾病以及多种癌症）带来有效的新药。

> In this post, we provide an update on our progress with our partners, along with technical reports that describe our thought process, methods, and early results in more detail. We then briefly outline where our work is headed next.

在本篇中，我们更新了与合作伙伴的进展，并提供了详细描述我们的思考过程、方法及早期结果的技术报告。随后，我们简要概述了下一步的工作方向。

> ## Case studies

## 案例研究

> **Generate Biomedicines: modality engineering.** Generate Biomedicines has been working on increasing the usefulness of a cancer treatment known as CAR T-cell therapy. This therapy has historically helped treat blood cell cancers; Generate aims to reengineer it so that it can treat solid tumor cancers too. To do this, they’re aiming to shorten one part of the therapy’s genetic instructions, which would create room for additional instructions suited to other kinds of cancer. Six Generate scientists used Claude Code to propose new designs for this part. One design was about 70% shorter than the standard version, and in lab tests it was more effective: it allowed immune cells to make roughly 10 times as many receptors (the proteins they use to spot cancer cells), it killed tumor cells more efficiently, and the immune cells remained active for longer. Read more, and see [Generate’s technical report](https://generatebiomedicines.com/publications/refactored-intracellular-domains-enhance-car-expression-and-function/).

**Generate Biomedicines：模态工程。** Generate Biomedicines 一直致力于提升一种称为 CAR-T 细胞疗法的癌症治疗手段的实用性。该疗法历史上主要用于治疗血液癌症；Generate 旨在对其进行重新设计，使其也能治疗实体瘤。为此，他们致力于缩短疗法基因指令中的一部分，从而腾出空间来添加适用于其他癌症类型的指令。六位 Generate 科学家使用 Claude Code 为该部分提出了新设计。其中一种设计比标准版本短约 70%，且在实验室测试中效果更佳：它使免疫细胞产生的受体（用于识别癌细胞的蛋白质）数量增加了约 10 倍，杀灭肿瘤细胞的效率更高，且免疫细胞保持活性的时间更长。了解更多详情，并查看 [Generate 的技术报告](https://generatebiomedicines.com/publications/refactored-intracellular-domains-enhance-car-expression-and-function/)。

> **Divergence Labs: hit generation.** Divergence Labs is working on a novel way to treat food allergies. Food allergies are set off by a reaction from a molecule called IgE, some of which is attached to our immune cells and some of which floats freely in our blood. Divergence Labs is developing drugs that would detach the IgE from our immune cells entirely, rather than solely neutralizing the IgE circulating in our blood, as standard medications do. This could provide a much more effective treatment, but it requires a precise design, with two “arms”: one that would bind tightly to IgE, and another that would help prise IgE from the immune cell. Claude converted Divergence Labs’ goals into a detailed design plan, and then, largely autonomously, generated roughly 35,000 antibody designs in about a month to be narrowed down and tested. In those early tests, Divergence found “hits” for both arms: three designs that could bind to IgE, and 20 that could dislodge it. Three of those 20 appeared to dislodge IgE more than the standard medication. Its next step is to build a drug that combines the two arms. Read more, and see [Divergence’s technical report](https://divergencelabs.com/publications/ige-preprint.pdf).

**Divergence Labs: hit generation.** Divergence Labs 正在开发一种治疗食物过敏的新方法。食物过敏是由一种称为 IgE 的分子引发的反应，部分 IgE 附着在我们的免疫细胞上，部分则自由漂浮在血液中。Divergence Labs 正在研发能够将 IgE 完全从免疫细胞上分离的药物，而标准药物仅中和血液中循环的 IgE。这可能提供更有效的治疗，但需要精确设计，包含两个 "arms"：一个能紧密结合 IgE，另一个帮助将 IgE 从免疫细胞上分离出来。Claude 将 Divergence Labs 的目标转化为详细设计方案，然后在很大程度上自主地在大约一个月内生成了约 35,000 个抗体设计，以供筛选和测试。在这些早期测试中，Divergence 对两个 arms 都发现了 "hits"：三种能与 IgE 结合的设计，以及 20 种能将其分离的设计。在这 20 种中，有三种似乎比标准药物更有效地分离了 IgE。其下一步是构建一种结合两个 arms 的药物。阅读更多，并查看 [Divergence’s technical report](https://divergencelabs.com/publications/ige-preprint.pdf)。

> **BigHat Biosciences: lead optimization.** BigHat Biosciences pairs AI with an automated lab to improve potential drugs (or “leads”), which must bind their target tightly, remain stable through manufacturing and storage, and avoid clumping together (among other criteria). BigHat’s scientists and an Anthropic researcher worked with Claude to improve these three properties in two leads, both antibody fragments that could become parts of future drugs: one designed to target cancer cells, and one designed to keep a drug in the body longer. Claude, connected to BigHat’s lab data system, Reccy, proposed changes to each molecule, and BigHat’s lab made and tested about 1,010 variants in about 10 weeks. Partway through, the team suspected the standard heat-stability and clumping metrics were misleading. Claude and the researcher reanalyzed the raw data, then proposed different metrics and a protocol change to test them. BigHat’s scientists refined and ran it, and the main predictions held. Compared with the originals, the best versions bound more than 10x more tightly, the cancer-targeting lead stayed in solution 18°C higher, and the lead for longer-lasting drugs clumped more than 100x more slowly. Read more, and see [BigHat’s technical report](https://www.bighatbio.com/bighat-anthropic-collaboration-report-10-27-2026).

BigHat Biosciences: lead optimization。BigHat Biosciences 与 AI 与自动化实验室协作，改善潜在药物（或 “leads”），这些药物必须紧密结合其靶标，保持在制造和储存过程中的稳定性，并避免聚集在一起（以及其他标准）。

BigHat 的科学家和一位 Anthropic 研究人员与 Claude 合作，改进这三项性质在两个 leads 中，两个 antibody fragments 均可成为未来药物的一部分：一个设计用于靶向 cancer cells，另一个设计用于在体内保留药物更长时间。

Claude 通过连接到 BigHat 的实验室数据系统 Reccy，对每个分子提出修改，BigHat 的实验室约在 10 周内合成并测试了约 1,010 个变体。

在过程进行中，团队怀疑标准的 heat‑stability 和 clumping 指标具有误导性。

Claude 与研究人员重新分析了原始数据，随后提出不同的指标和一项改进的测试协议。

BigHat 的科学家对其进行了优化并运行，主要预测成立。

与原版相比，最佳版本的结合强度提升了 10x 以上，癌 cancer-targeting lead 在溶液中保持 18°C 高出，而延长作用的 lead 的聚集速度比原版慢了 100x 以上。

阅读更多，并查看 [BigHat’s technical report](https://www.bighatbio.com/bighat-anthropic-collaboration-report-10-27-2026)。

> **Enveda: manufacturing and filings.** To conduct clinical trials, companies need records showing that each batch of a new drug has been made to strict quality standards, and to submit an application to regulators, among other requirements. At Enveda, manufacturing chemists spent up to 75% of their time on paperwork. To ease the load, Enveda built a system that connects all of its manufacturing documents to Claude, then lets Claude flag any possible issues. Over tests on 1,061 pages of documentation, Claude caught all 11 issues that human reviewers had spotted—and flagged seven they’d missed. In the process, this method reduced human review time by 89%, from over 25 hours to less than three. Separately, Claude wrote the first drafts of two important regulatory documents. One took four hours, compared to about three months by hand. For the other, Enveda’s standard human review process found one minor error. Read more, and see [Enveda’s technical report](https://enveda.com/CMC-Document-Processor/).

**Enveda：制造与申报。** 为开展临床试验，企业需提供记录，证明新药的每一批次均按严格质量标准生产，并向监管机构提交申请等。在 Enveda，制造化学家多达 75% 的时间耗在文书工作上。为减轻负担，Enveda 构建了一套系统，将所有制造文档接入 Claude，让 Claude 标记任何潜在问题。在对 1,061 页文档的测试中，Claude 发现了人工审查员找出的全部 11 个问题——并额外标记了 7 个被人工遗漏的问题。这一流程将人工审查时间缩减了 89%，从 25 小时以上降至 3 小时以内。此外，Claude 还撰写了两份关键监管文件的初稿。其中一份耗时 4 小时，而人工手写约需 3 个月；另一份经 Enveda 标准人工审查流程检查，仅发现 1 处次要错误。了解详情，请参阅 [Enveda 的技术报告](https://enveda.com/CMC-Document-Processor/)。

> **The Column Group (TCG): company creation.** Because drug discovery can be slow, expensive, and prone to failure, investors in biotechnology companies have favored safer, previously validated ideas over riskier new ones, even when the latter could help more patients. We’ve been working with TCG to see whether Claude can change this by cutting the time and cost of drug discovery so that investors can confidently support more ambitious ideas. Specifically, TCG is establishing Pleiades, a new company that will use Claude to run many more—and more complex—drug programs than is usual for a small team. This could be a model for how Claude can reduce both the scientific and the operational and administrative overhead required to run a biotechnology company. If this works, this model could be replicated across the industry and direct investment toward harder problems in medicine. Pleiades is currently developing new tools and workflows for Claude; its very first Claude skill, which helps Claude assess whether drug targets are worth pursuing, has been evaluated on 45 target-disease pairs. Read more.



**The Column Group (TCG)：公司创建。**

由于药物研发可能耗时漫长、成本高昂且容易失败，生物技术公司的投资者往往更青睐那些更安全、经过前期验证的想法，而非风险更高的新想法，即使后者本可以惠及更多患者。

我们一直在与 TCG 合作，探索 Claude 是否能通过缩短药物研发的时间和成本来改变这一现状，让投资者能够更有信心地支持更具雄心的项目。

具体而言，TCG 正在创立一家名为 Pleiades 的新公司，该公司将利用 Claude 运行比小型团队通常情况下多得多、也复杂得多的药物项目。

这或许能成为一个范例，展示 Claude 如何降低运营一家生物技术公司所需的科学成本，以及运营和行政管理开销。

如果这一模式取得成功，它或许可以在整个行业中推广，从而将投资引导至医学领域更具挑战性的难题上。

Pleiades 目前正在为 Claude 开发全新的工具和工作流程；其首个 Claude 技能（旨在帮助 Claude 评估药物靶点是否值得 pursuing/研发）已在 45 对靶点-疾病组合中得到了评估。阅读更多。

> More recently, we’ve also begun working with [Bristol Myers Squibb](https://www.bms.com/) (BMS) to find and address bottlenecks in clinical trial planning. BMS is using Claude to assess plans of an early-stage drug in clinical trials, and to estimate the likelihood of those trials succeeding. Together, we plan to expand this work in 2027 to understand its potential for increasing the probability of success in early development.

最近，我们还开始与 [Bristol Myers Squibb](https://www.bms.com/) (BMS) 合作，以查找和解决临床试验规划中的瓶颈。BMS 正在使用 Claude 来评估临床试验中早期药物的计划，并估计这些试验成功的可能性。我们计划在 2027 年共同扩展这项工作，以了解其在提高早期开发成功率方面的潜力。

> > *“We use Claude at the clinical trial stage to analyze proprietary data, create a clinical study plan, and weigh the study’s chance of success. From a single prompt, Claude generated a robust initial analysis that helped inform our assessment of different development options, which would otherwise take days to complete. We did all of this while ensuring the security of our highly sensitive data. We look forward to expanding this work across our pipeline to support portfolio-level decisions.”*

> *“我们在临床试验阶段使用 Claude 来分析专有数据，制定临床研究计划，并评估研究成功的可能性。Claude 从一个提示中生成了一个强有力的初始分析，帮助我们快速评估不同的开发方案，这原本需要几天时间才能完成。我们在确保高度敏感数据安全性的同时，完成了所有这些工作。我们期待将这一应用扩展到整个研发流程中，以支持投资组合层面的决策。”*

> ***Michael Pourdehnad, MD**, Senior Vice President, Head of Early Clinical Development, Hematology, Oncology and Cell Therapy.*

迈克尔·普德纳德博士，医学博士，高级副总裁，血液科、肿瘤科和细胞疗法早期临床开发负责人。

> In addition to our work with these partners, we’ve begun to run some research programs ourselves. We’ve acquired Mithril Medicine, a one-person company that has been developing treatments for two rare forms of muscular dystrophy. Its founder, Cody Tranbarger, used Claude to organize contracts, logistics, and experiments with 11 external labs, and delegated many other aspects of Mithril’s operations to Claude. As a result, Mithril took a possible treatment for one form of muscular dystrophy from an idea to promising results in mice in less than 18 months. Now at Anthropic, Cody is continuing this research, and plans to start several new programs. If his drug candidates continue to hold up, we expect a drug to be ready to start clinical trials in humans as soon as late 2028. Read more and see [our technical report](https://www-cdn.anthropic.com/52e1f5d50c47ca3818f56704c27cf19e59b62e77.pdf).

除了与这些合作伙伴的合作之外，我们已开始自行开展一些研究项目。我们收购了 Mithril Medicine，一家由一人创办的公司，该公司一直在开发两种罕见肌肉萎缩症类型的治疗方法。其创始人 Cody Tranbarger 使用 Claude 来组织与 11 个外部实验室的合同、物流和实验，并把 Mithril 运营的其他许多方面委托给 Claude。因此，Mithril 将一种针对肌肉萎缩症某一种类型的潜在治疗从想法变成了小鼠身上令人鼓舞的结果，在不到 18 个月的时间里。现在，Cody 已加入 Anthropic，继续开展这项研究，并计划启动几项新计划。如果他的药物候选药物继续取得进展，我们预计最早在 2028 年底，一种药物就能准备好启动人体临床试验。阅读更多并查看 [our technical report](https://www-cdn.anthropic.com/52e1f5d50c47ca3818f56704c27cf19e59b62e77.pdf)。

> ## Extending our work in the life sciences



请提供完整的英文原文，以便我为您翻译。

> All of this research is still at an early stage. In particular, so far it is mostly *preclinical—*that is, for the most part, it isn’t yet at the stage where the drugs are being tested in humans. We plan to continue extending Claude’s role into clinical trials as these drug programs advance, and as we partner with more organizations whose drug development programs are already at the clinical stage.

所有这些研究仍处于早期阶段。特别是，到目前为止，它大多仍处于临床前阶段——也就是说，大部分药物尚未进入人体测试阶段。我们计划随着这些药物研发项目的推进，并与更多药物开发项目已处于临床阶段的组织合作，继续将 Claude 的角色扩展到临床试验中。

> This research is only one part of our efforts to accelerate drug discovery. Ultimately, we want to share our models with as many drug development researchers as possible. To that end, we’ve rolled out [Claude Science](https://www.anthropic.com/news/claude-science-ai-workbench), our AI workbench for researchers, and we’re providing [Claude credits for life scientists](https://www.anthropic.com/news/ai-for-science-program). We’ve also created the [Life Sciences Verification Program](https://www.anthropic.com/news/life-sciences-verification-program) to allow trusted organizations to use our most powerful models with more permissive versions of our safeguards, which are necessary to prevent misuse but which can impede legitimate biological research. We’ve also recently launched an [open call for guest investigators](https://www.anthropic.com/news/open-call-guest-investigators-life-sciences) in the life sciences; we’re seeking proposals from research groups who want to use Claude to investigate key questions in drug discovery and other areas.

这项研究只是我们加速药物发现工作的一部分。最终，我们希望让尽可能多的药物开发研究人员共享我们的模型。为此，我们推出了[Claude Science](https://www.anthropic.com/news/claude-science-ai-workbench)，我们的面向研究人员的AI工作台，并为生命科学家提供[Claude credits for life scientists](https://www.anthropic.com/news/ai-for-science-program)。我们还创建了[Life Sciences Verification Program](https://www.anthropic.com/news/life-sciences-verification-program)，允许受信任的组织使用我们最强大的模型，并采用更宽松的安全保障版本，这些版本对于防止滥用是必要的，但可能会阻碍合法的生物研究。我们还最近启动了[open call for guest investigators](https://www.anthropic.com/news/open-call-guest-investigators-life-sciences)生命科学领域的开放征集，寻求那些希望使用Claude来研究药物发现和其他领域的研究组的提案。

> We’re looking forward to working with many more organizations as we expand our life sciences research. If you work at an organization focused on drug discovery and are interested in collaborating with us, you can get in touch below.

我们期待随着我们对生命科学研究的拓展，与更多组织开展合作。如果你所在的机构专注于药物发现，并且对与我们合作感兴趣，你可以在下方联系我们。

> ### Get in touch with us

### 与我们联系

> If you work at an organization focused on drug development and would like to get in touch, complete the following form.

如果您所在的组织专注于药物开发并希望取得联系，请填写以下表格。
