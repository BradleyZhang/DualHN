---
title: '2028年安谛克87%的电力将来自天然气，11%来自煤炭'
date: 2026-11-23T10:02:54+08:00
draft: false
source: "Hacker News"
originalTitle: 'How AI is powered: a breakdown of BYOP and grid power'
originalUrl: "https://betterdatacenterproject.com/2026/11/16/how-ai-is-powered-a-breakdown-of-byop-and-grid-power/"
hnUrl: ""
points: 
comments: 
---

> In [The AI Gas Rush: Risks and Implications of “Bring Your Own Power”](https://betterdatacenterproject.com/2026/10/08/the-ai-gas-rush/), we dug into how data centers are increasingly securing their own dedicated primary power generation rather than relying solely on utilities to procure power (“BYOP”). We identified 177 GW of planned BYOP gas capacity—enough to power 65% of all US homes. Conversely, we found renewables are much less common than gas for BYOP: we estimate that for current proposals, less than 20% of energy generation will come from renewable sources by 2032.

在 [The AI Gas Rush: Risks and Implications of “Bring Your Own Power”](https://betterdatacenterproject.com/2026/10/08/the-ai-gas-rush/) 中，我们深入研究了数据中心日益选择自建专属主要电力生成而非完全依赖公用事业采购电力（“ BYOP”）。我们发现计划中的 177 GW BYOP gas 容量足以为 美国 US 家庭的 65% 提供电力。相反地，我们发现可再生能源在 BYOP 中远少于 燃气 gas：我们估计截至 2032 年，当前提案中可再生能源的发电比例将低于 20% 。

> But BYOP projects aren’t the only new fossil sources that are coming online to meet the skyrocketing energy demands of AI data centers. [Another 200 GW of new fossil power plants](https://globalenergymonitor.org/projects/global-oil-gas-plant-tracker?popup=2638) is being built on the grid to meet growing demand, due in large part to data centers.[^1]

但 BYOP 项目并非唯一即将投入使用的新化石能源，以满足 AI 数据中心暴涨的能源需求。 [Another 200 GW of new fossil power plants](https://globalenergymonitor.org/projects/global-oil-gas-plant-tracker?popup=2638) 正在并网建设，以满足日益增长的需求，主要归因于数据中心。[^1]

> As a case study of how the AI buildout is driving both new BYOP and grid fossil infrastructure, we analyzed the compute commitments of a single company: Anthropic.

作为 AI 基建如何同时推动新增 BYOP 和电网化石能源基础设施建设的案例研究，我们分析了单一公司 Anthropic 的算力承诺。

<iframe src="https://better-data-center-project.github.io/maps/anthropic-compute/" width="100%" height="600" title="Map of Anthropic compute and power"></iframe>

> Map of Anthropic’s data centers and associated power plants. See our [full dataset](https://docs.google.com/spreadsheets/d/1XSqa0lJFJs6pQcmcTlBwUqLsQBEtDybNhjEiFGj-vbE/edit?gid=880500164#gid=880500164) for details of each site.

Anthropic 的数据中心和相关发电厂地图。查看我们的 [完整数据集](https://docs.google.com/spreadsheets/d/1XSqa0lJFJs6pQcmcTlBwUqLsQBEtDybNhjEiFGj-vbE/edit?gid=880500164#gid=880500164) 以了解每个站点的详细信息。

![](https://i0.wp.com/betterdatacenterproject.com/wp-content/uploads/2026/11/anthropic-power-split.png?resize=2048%2C428&ssl=1)

> Figure 1. Breakdown of power source for Anthropic’s compute.

图 1. Anthropic’s compute 的电源分解

> **Finding 1: Anthropic has made no direct commitments to renewable energy in the U.S.** Though Anthropic has [stated](https://www.anthropic.com/policy/infrastructure) “We’re also working to broaden our energy mix with geothermal, wind, solar, and emerging technologies”, its only publicly disclosed commitments, contract, or investments in renewable power are in [Norway](https://marketwise.com/investing/bitdeer-4-7-billion-ai-data-center-lease-tied-to-anthropic-who-benefits/) and [Canada](https://www.globenewswire.com/news-release/2026/10/16/3382650/0/en/everwind-announces-10-billion-investment-in-point-tupper-data-centre-campus-and-renewable-energy-portfolio-across-nova-scotia.html) (as of November 2026). In contrast, Anthropic is directly procuring fossil power equipment—it recently “[bought commitments for 1.7 gigawatts of heavy-duty \[gas\] generators for $3.4bn](https://www.ft.com/content/41bf5c6a-9735-4f1a-a8e3-2bcccad58ba0?syn-25a6b1a6=1)”.

**发现 1：Anthropic 在美国没有做出对可再生能源的直接承诺.** 虽然 Anthropic 曾[表示](https://www.anthropic.com/policy/infrastructure)“我们也正在努力通过地热、风能、太阳能和新兴技术来拓宽我们的能源组合”，其仅公开披露的可再生电力承诺、合同或投资都位于 [Norway](https://marketwise.com/investing/bitdeer-4-7-billion-ai-data-center-lease-tied-to-anthropic-who-benefits/) 和 [Canada](https://www.globenewswire.com/news-release/2026/10/16/3382650/0/en/everwind-announces-10-billion-investment-in-point-tupper-data-centre-campus-and-renewable-energy-portfolio-across-nova-scotia.html)（2026 年 11 月）。相比之下，Anthropic 正在直接采购化石能源电力设备——它最近[“为 1.7 吉瓦重型 \[gas\] 发电机购买承诺，并支付了 $3.4bn”](https://www.ft.com/content/41bf5c6a-9735-4f1a-a8e3-2bcccad58ba0?syn-25a6b1a6=1)”。

> **Finding 2: Anthropic’s currently contracted data centers in the U.S. will be overwhelmingly powered by fossil fuels in the near term. By considering on-site gas and the grid power plants which are likely to meet Anthropic’s added load (i.e. marginal generators), we estimate about 87% of the company’s power will come from gas and 11% from coal in 2028.** As of October 2026, Anthropic has contracted [15 GW of compute](https://www.theinformation.com/articles/anthropic-clinched-517-billion-compute-deals-11-months); of this, about 5.9–9.6 GW is contracted to specific data center sites. For a sense of scale, 9.6 GW could power about 7 million homes or cover [18% of the peak power demand of California](https://www.ferc.gov/understanding-and-participating-california-iso-caiso-processes)—the world’s 4<sup>th</sup> largest economy.

**发现 2：Anthropic 目前在美国签约的数据中心，在短期内将主要由化石燃料供电。** 通过考虑现场燃气发电以及可能满足 Anthropic 新增负荷的电网电厂（即边际发电机），我们估计 2028 年公司约 87% 的电力将来自天然气，11% 来自煤炭。截至 2026 年 10 月，Anthropic 已签约 [15 GW 算力](https://www.theinformation.com/articles/anthropic-clinched-517-billion-compute-deals-11-months)；其中约 5.9–9.6 GW 已签约至具体数据中心站点。为便于理解规模，9.6 GW 可为约 700 万户家庭供电，或覆盖 [加利福尼亚州峰值电力需求的 18%](https://www.ferc.gov/understanding-and-participating-california-iso-caiso-processes)——加州是世界第 4 大经济体。

> This demand will be met with a mix of new on-site gas, new grid gas, and existing grid gas, coal, and nuclear. In the short term, no grid renewables are attributed to Anthropic’s power use, because—without commitments to new renewable capacity—new load on the grid will be met by dispatchable, marginal fossil resources.[^2] For more details, see our [full dataset](https://docs.google.com/spreadsheets/d/1XSqa0lJFJs6pQcmcTlBwUqLsQBEtDybNhjEiFGj-vbE/edit?gid=1671585594#gid=1671585594) and our methodology below.

这一需求将由新建现场天然气、新电网天然气以及现有的电网煤炭和核能等多种能源组成满足。在短期内，Anthropic 的发电使用中并未归因于电网可再生能源，因为——如果没有对新可再生容量的承诺——电网负荷将由可调度、边际化化石燃料资源满足.[^2] 更多详情请参阅我们 [完整数据集](https://docs.google.com/spreadsheets/d/1XSqa0lJFJs6pQcmcTlBwUqLsQBEtDybNhjEiFGj-vbE/edit?gid=1671585594#gid=1671585594) 和下文的方法论。

![](https://i0.wp.com/betterdatacenterproject.com/wp-content/uploads/2026/11/anthropic-total-co2.png?w=1256&ssl=1)

> Figure 2. Anthropic’s emissions from power consumption expected in 2028. Emissions for Google, Microsoft, and Meta are annual Scope 2, location-based emissions from their most recent sustainability reports. California power sector emissions are for all power plants operating within the state (source: EIA ).

图 2. 预计 2028 年 Anthropic 的电力消耗排放。Google、Microsoft 和 Meta 的排放为来自其最新可持续发展报告的年度 Scope 2、基于位置的排放。加州电力部门排放包括州内运营的所有发电厂（来源：EIA）。

> **Finding 3: Total CO<sub>2</sub>** **emissions from Anthropic’s power use at these sites could reach 17–38 million MtCO<sub>2</sub>e per year in 2028**, when this capacity is expected to be online. This range reflects uncertainty in Anthropic’s average power use, due to factors such as cooling needs and average utilization (see methodology below). In our mid-case, Anthropic will emit 32 million MtCO<sub>2</sub>e in 2028. These totals will continue to grow—possibly doubling by 2030, as some analysts expect Anthropic to [secure 30 GW by 2030](https://www.artemis.ai/anthropic-thesis).

**发现 3：Anthropic 在这些站点用电产生的 CO<sub>2</sub> 总排放量到 2028 年可能达到每年 1700 万至 3800 万 MtCO<sub>2</sub>e**，届时这些容量预计将投运。该区间反映了 Anthropic 平均用电量的不确定性，原因包括冷却需求和平均利用率等因素（见下文方法）。在我们的中间情景中，Anthropic 将在 2028 年排放 3200 万 MtCO<sub>2</sub>e。这些总量将持续增长——到 2030 年可能翻倍，因为一些分析师预计 Anthropic 将在 2030 年前获得 30 GW 的容量（[链接](https://www.artemis.ai/anthropic-thesis)）。

> To put these figures in context, Anthropic’s CO<sub>2</sub> emissions from power use in 2028:

为了将这些数据置于上下文中，Anthropic 的 2028 年电力使用中的 CO2 排放量：

> - could exceed the emissions of all of California’s power generation ([31.1 MMtCO<sub>2</sub>e in 2024](https://www.eia.gov/state/seds/sep_co2/total/pdf/co2_CA.pdf), not including imports).
> - could exceed Meta, Microsoft, and Google’s *combined* Scope 2 emissions from 2025 (their location-based emissions, before renewable energy offsets, were [5.9 million](https://sustainability.atmeta.com/wp-content/uploads/2025/10/Meta_2025-Environmental-Data-Index.pdf), [12 million](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/2026-Microsoft-Environmental-Data-Fact-Sheet-PDF.pdf) and [15 million](https://sustainability.google/files/google-2026-environmental-report.pdf) MtCO<sub>2</sub>e, respectively)[^3]
> - would represent a 16–36% increase over 2024 levels of the entire U.S. data center sector ([105 MMtCO<sub>2</sub>e](https://arxiv.org/abs/2411.09786)).
> - would increase the entire U.S.’s power sector emissions ([1,485 MMtCO<sub>2</sub>e in 2025](https://www.eia.gov/environment/emissions/carbon/)) by 1.1–2.5%.

- 可能超过加州全部发电排放量（2024 年为 31.1 MMtCO<sub>2</sub>e，不包括进口电力）。
- 可能超过 Meta、Microsoft 和 Google 2025 年合计的 Scope 2 排放量（它们在不计可再生能源抵消前的基于位置排放分别为 590 万、1200 万和 1500 万 MtCO<sub>2</sub>e）[^3]
- 将相当于美国整个数据中心行业 2024 年排放水平（105 MMtCO<sub>2</sub>e）增加 16–36%。
- 将使美国整个电力行业排放量（2025 年为 1,485 MMtCO<sub>2</sub>e）增加 1.1–2.5%。

> **Finding 4: Anthropic’s data centers are sited in areas where the grid mainly uses coal and gas.** We estimate the average carbon intensity of Anthropic’s power to be 1,033–1,076 lb CO<sub>2</sub>e/MWh, 35% higher than the U.S. grid average ([767 lb CO<sub>2</sub>e/MWh](https://www.epa.gov/egrid/summary-data)).[^4]

**发现 4：Anthropic 的数据中心位于电网主要使用煤炭和天然气的地区。** 我们估计，Anthropic 所用电力的平均碳强度为 1,033–1,076 lb CO<sub>2</sub>e/MWh，比美国电网平均水平（[767 lb CO<sub>2</sub>e/MWh](https://www.epa.gov/egrid/summary-data)）高 35%。[^4]

![](https://i0.wp.com/betterdatacenterproject.com/wp-content/uploads/2026/11/anthropic-emissions-intensity.png?resize=2048%2C1190&ssl=1)

> Figure 3. CO 2 e and NOx emissions factors for on-site and grid power serving each of Anthropic’s data center sites.

图 3. 为 Anthropic 各数据中心站点供电的现场电源与电网电源的 CO 2 e 和 NOx 排放因子。

> **Finding 5: 80% of on-site power uses inefficient simple cycle turbines and engines.** About 25% (2.5 GW) of Anthropic’s contracted power will come from on-site, behind-the-meter gas. 80% of this on-site capacity consists of inefficient simple cycle turbines and engines, which emit more pollution per unit of electricity than modern combined cycle plants (see our [report](https://betterdatacenterproject.com/2026/10/08/the-ai-gas-rush/) for more details on the types of power generation being used for on-site gas).

**发现 5:** 80% 的 on-site power 使用低效 simple cycle turbines 和 engines。约 25% (2.5 GW) 的 Anthropic 合同电力将来自 on-site, behind-the-meter gas。这 80% 的 on-site capacity 由低效 simple cycle turbines 和 engines 组成，它们的单位电力排放量比现代 combined cycle plants 更高，see our [report](https://betterdatacenterproject.com/2026/10/08/the-ai-gas-rush/) 了解有关 on-site gas 所使用的电力生成类型的更多详情。

> **Finding 6: Based on EPA’s nationally-averaged** [**benefit-per-ton estimates**](https://www.epa.gov/benmap/sector-based-pm25-and-ozone-benefit-ton-estimates)**, air pollution from Anthropic’s on-site and grid power use could cause $2–3 billion in annual health damages**, with total emissions of over 13,000 tons per year (tpy) of nitrogen oxides (NOx) and 2,000 tpy of fine particulate matter (PM<sub>2.5</sub>).

**发现 6：基于 EPA 的全国平均** [**每吨效益估算**](https://www.epa.gov/benmap/sector-based-pm25-and-ozone-benefit-ton-estimates)**，Anthropic 的现场和电网电力使用造成的空气污染可能导致 每年 $20 亿 至 $30 亿美元 的健康损害，总排放量 超过 每年 13,000 吨（tpy）的 氮氧化物（NOx）和 2,000 tpy 的 细颗粒物（PM<sub>2.5</sub>）。**

> In October 2026, Anthropic outlined its “[approach to responsible data center development](https://www.anthropic.com/policy/infrastructure)”, stating: “We follow the air permitting process everywhere we operate and require the same of the plants powering our data centers. Those plants must also use emissions control technology, including selective catalytic reduction \[SCR\].” However, Anthropic has used compute capacity at SpaceX’s Colossus 2 facility [since May 2026](https://www.sec.gov/Archives/edgar/data/1181412/000162828026040364/spaceexplorationtechnologib.htm), which still receives most of its power from [temporary, unpermitted turbines](https://www.selc.org/news/xai-built-an-illegal-power-plant-to-power-its-data-center/), the majority of which are not equipped with SCR. Anthropic will use as much as 600 MW of power from Colossus 2 by the end of 2026 (see methodology below).

2026年10月，Anthropic发布了其“[approach to responsible data center development](https://www.anthropic.com/policy/infrastructure)”，表示：“我们在每个运营地点都遵循空气许可流程，并要求为我们的数据中心供电的厂房也遵循同样的流程。那些厂房必须也使用排放控制技术，包括选择性催化还原 [SCR]。”

然而，Anthropic 自 SpaceX 的 Colossus 2[since May 2026](https://www.sec.gov/Archives/edgar/data/1181412/000162828026040364/spaceexplorationtechnologib.htm)以来使用了计算容量，该设施仍从[temporary, unpermitted turbines](https://www.selc.org/news/xai-built-an-illegal-power-plant-to-power-its-data-center/)中获取大部分电力，其中大多数未配备 [SCR]。Anthropic将在2026年底最多使用 600 MW 的 Colossus 2 电力（见下文方法论）。

> Anthropic has also [contracted 460 MW](https://www.bloomberg.com/news/articles/2026-08-26/anthropic-to-pay-nscale-45-billion-for-ai-computing-power) (and is in talks for [up to 920 MW](https://www.bloomberg.com/news/articles/2026-10-19/nscale-anthropic-in-talks-for-45-billion-cloud-computing-deal)) of power from Nscale’s [Monarch Compute Campus](https://oilandgaswatch.org/facility/cdf08f90-5579-4a86-97ae-0204faa2976f) in Mason, West Virginia. This facility will be powered by inefficient reciprocating engines which have significant formaldehyde and hazardous air pollutant (HAP) emissions compared to conventional gas power plants.

Anthropic 还签订了 460 MW [签订 460 MW](https://www.bloomberg.com/news/articles/2026-08-26/anthropic-to-pay-nscale-45-billion-for-ai-computing-power) (并且正在就 [最高 920 MW](https://www.bloomberg.com/news/articles/2026-10-19/nscale-anthropic-in-talks-for-45-billion-cloud-computing-deal)) 的电力来自 Nscale 的 Monarch Compute Campus (https://oilandgaswatch.org/facility/cdf08f90-5579-4a86-97ae-0204faa2976f) 在 Mason, West Virginia。该设施将使用低效的往复式发动机，这些发动机相比传统燃气发电厂排放了大量甲醛和危险空气污染物 (HAP) 。

> For more, see our [full dataset](https://docs.google.com/spreadsheets/d/1XSqa0lJFJs6pQcmcTlBwUqLsQBEtDybNhjEiFGj-vbE/edit?gid=1671585594#gid=1671585594) on Anthropic’s compute and our [report on BYOP](https://betterdatacenterproject.com/2026/10/08/the-ai-gas-rush/).

更多，请参阅我们的 [full dataset] 关于 Anthropic’s 计算 和 我们的 [report on BYOP]。

> ### Methodology

### 方法

> We gathered details about Anthropic’s data center commitments from [Epoch AI’s tracker](https://epoch.ai/data/ai-data-centers), Anthropic’s [announcements](https://www.anthropic.com/news/higher-limits-spacex) and [filings](https://www.sec.gov/Archives/edgar/data/2130357/000162828026068676/anthropicpbc-sx1ax1.htm), announcements and filings from partners (including [Amazon](https://www.aboutamazon.com/news/aws/aws-project-rainier-ai-trainium-chips-compute-cluster) and [SpaceX](https://www.sec.gov/Archives/edgar/data/1181412/000162828026040364/spaceexplorationtechnologib.htm)), and reporting from [The Information](https://www.theinformation.com/articles/anthropic-clinched-517-billion-compute-deals-11-months), [Semafor](https://www.semafor.com/article/10/29/2025/aws-massive-multi-state-ai-data-center-is-powering-anthropics-claude), and others.

我们从 Epoch AI 的追踪器、Anthropic 的公告和文件、合作伙伴（包括 Amazon 和 SpaceX）的公告和文件，以及 The Information、Semafor 及其他来源，获取了关于 Anthropic 数据中心承诺的详细信息。

> We first identified the source for each data center’s power. For projects with on-site gas (Monarch, Nexus, Colossus 2) or new grid gas (including indirectly contracted projects such as the [Schahfer expansion](https://www.gem.wiki/Schahfer_Generating_Station) for the AWS New Carlisle site and [Entergy Mississippi’s gas plants](https://www.powermag.com/entergy-mississippi-adding-third-gas-fired-power-plant-to-superpower-strategy/) for AWS’s Madison and Ridgeland facilities) we used emissions factors from permits where available, or permit values from comparable facilities. For grid-connected facilities without associated new generation capacity, we assume these sites will be powered by marginal, dispatchable grid capacity. We used [EPA’s AVERT](https://www.epa.gov/avert) tool to model which power plants would meet the new incremental load from Anthropic’s facilities based on each site’s expected power use and region. AVERT uses historical EPA data for these power plants to model the expected short-run marginal emissions rate of CO<sub>2</sub> and criteria pollutants (NO<sub>x</sub>, PM<sub>2.5</sub>, etc.). We use AVERT because we are interested in the short-term impacts from new data centers coming online in the next several years.

我们首先确定了每个数据中心的电力来源。对于拥有现场燃气发电（Monarch、Nexus、Colossus 2）或新增电网燃气发电（包括间接签约项目，如 AWS New Carlisle 站点的 [Schahfer 扩建项目](https://www.gem.wiki/Schahfer_Generating_Station) 以及 AWS Madison 和 Ridgeland 设施的 [Entergy Mississippi 燃气电厂](https://www.powermag.com/entergy-mississippi-adding-third-gas-fired-power-plant-to-superpower-strategy/)）的项目，我们在许可证数据可用时使用其中的排放因子，或采用可比设施的许可证数值。对于没有关联新增发电容量的电网连接设施，我们假设这些站点将由边际的、可调度的电网容量供电。我们使用了 EPA 的 [AVERT](https://www.epa.gov/avert) 工具，基于各站点的预期用电量和所在区域，模拟哪些发电厂将满足 Anthropic 设施带来的新增增量负荷。AVERT 利用这些发电厂的历史 EPA 数据，模拟预期的短期边际 CO<sub>2</sub> 排放率及标准污染物（NO<sub>x</sub>、PM<sub>2.5</sub> 等）排放率。我们选择 AVERT 是因为我们关注未来几年新数据中心上线带来的短期影响。

> To calculate the amount of power used by each site, and in turn the total quantity of air pollutant emissions, we assumed [power usage effectiveness](https://datacenters.lbl.gov/sites/default/files/WP49-PUE%20A%20Comprehensive%20Examination%20of%20the%20Metric_v6.pdf) (PUE) ranges from 1.1–1.2 for all sites (typical values for hyperscale data centers are between 1.05–1.3), and power utilization ranges from 60–80%. See [LBNL’s 2024 Data Center Energy Usage report](https://escholarship.org/uc/item/32d6m0d1) for more details about how these parameters vary in typical hyperscale data centers. For our mid-case, we assumed a PUE of 1.15, a power utilization of 70%, and that all 9.6 GW of identified compute capacity is online in 2028.

为了计算每个站点的用电量，进而计算空气污染物排放总量，我们假设所有站点的 [电源使用效率](https://datacenters.lbl.gov/sites/default/files/WP49-PUE%20A%20Comprehensive%20Examination%20of%20the%20Metric_v6.pdf) (PUE) 范围为 1.1–1.2（超大规模数据中心的典型值介于 1.05–1.3 之间），电源利用率范围为 60–80%。有关这些参数在典型超大规模数据中心中如何变化的更多详情，请参见 [LBNL 的 2024 年数据中心能源使用报告](https://escholarship.org/uc/item/32d6m0d1)。对于我们的中间情景，我们假设 PUE 为 1.15，电源利用率为 70%，且所有已识别的 9.6 GW 计算能力将于 2028 年上线。

> ### How much capacity is Anthropic leasing from xAI?

### Anthropic 从 xAI 租赁了多少容量？

> Anthropic’s initial announcement on May 6, 2026 stated the agreement with SpaceX provided [300 MW of compute (220,000 GPUs)](https://www.anthropic.com/news/higher-limits-spacex). From SpaceX’s [revised June S-1A](https://www.sec.gov/Archives/edgar/data/1181412/000162828026040364/spaceexplorationtechnologib.htm), this deal expanded to ~$1.25B/month for 325,000 NVIDIA GPUs,[^5] with an implied [IT power of ~490 MW](https://robonomics.substack.com/p/spacex-s-1-full-analysis). Based on Anthropic’s [October 2026 S-1](https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm), this deal has further expanded to $3.1B/month.[^6] It’s unlikely that the increase in $/month will result in a proportional (2.5x) increase in compute capacity, since a June 2026 [deal between Google and SpaceX](https://www.sec.gov/Archives/edgar/data/1181412/000162828026041150/spacexagreementfwp.htm) had a much higher cost (~$11.5/GPU-hr vs ~$5/GPU-hr). As a rough estimate, the scaled deal likely corresponds to an additional ~200,000 GPUs, with a total power of ~400 MW (uncertainty is probably ±25% for each).[^7]

Anthropic 的首次公告于 2026 年 5 月 6 日 发布，称，与 SpaceX 的协议提供了 [300 MW 的算力（220,000 GPUs）](https://www.anthropic.com/news/higher-limits-spacex)。根据 SpaceX 的 [修订版 2026 年 6 月 S-1A](https://www.sec.gov/Archives/edgar/data/1181412/000162828026040364/spaceexplorationtechnologib.htm)，该交易扩大到约 1.25B 美元/月，用于 325,000 NVIDIA GPUs，[^5] 并包含约 490 MW 的 IT 功率（[IT power of ~490 MW](https://robonomics.substack.com/p/spacex-s-1-full-analysis)）。根据 Anthropic 的 [2026 年 10 月 S-1](https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm)，这笔交易进一步扩大到 3.1B 美元/月。[^6] 不太可能导致每月成本增加带来算力容量成比例（2.5x）的增加，因为 2026 年 6 月 的 [Google 与 SpaceX 之间协议](https://www.sec.gov/Archives/edgar/data/1181412/000162828026041150/spacexagreementfwp.htm) 的成本高得多（约 为 ~$11.5/GPU-hr，相比 于 ~$5/GPU-hr）。作为粗略估计，规模扩大的交易可能对应额外的约 200,000 GPUs，总功率约为 400 MW（每个 的 不确定性可能约为 ±25%）。[^7]

> [^1]: Data centers are driving 50–75% of demand growth, according to [IEA](https://www.iea.org/reports/energy-and-ai/executive-summary%20) and [McKinsey](https://www.mckinsey.com/industries/electric-power-and-natural-gas/our-insights/powering-ai-how-real-is-the-risk-of-overbuilding#/).

[^1]: 根据 [IEA](https://www.iea.org/reports/energy-and-ai/executive-summary%20) 和 [McKinsey](https://www.mckinsey.com/industries/electric-power-and-natural-gas/our-insights/powering-ai-how-real-is-the-risk-of-overbuilding#/) 的数据，数据中心贡献了 50–75% 的需求增长。

> [^2]: For more discussion, see for example: Fassette, Camille. “[The emissions risks of AI data center buildout](https://watttime.org/news-and-insights/the-emissions-risks-of-ai-data-center-buildout/).” WattTime. February, 2025; EPRI. “[Powering Data Centers: U.S. Energy System and Emissions Impacts of Growing Loads](https://www.epri.com/research/products/000000003002031198).” October, 2024.

[^2]: 更多讨论见例如：Fassette, Camille. “[AI 数据中心扩张的排放风险](https://watttime.org/news-and-insights/the-emissions-risks-of-ai-data-center-buildout/).” WattTime. 2025年2月；EPRI. “[数据中心供电：美国能源体系与增长负荷的排放影响](https://www.epri.com/research/products/000000003002031198).” 2024年10月。

> [^3]: Note: Anthropic’s emissions from power use will likely be classified as a mix of Scope 2 and Scope 3 emissions, depending on if they own the GPUs. For facilities they are leasing space in, the emissions will likely be accounted for as Scope 2 emissions for the owner/operator (e.g. Amazon for Project Rainier or SpaceX for Colossus). It should also be noted that the emissions of Microsoft, Google, and Meta are expected to grow as well, so the comparison between their 2025 emissions and Anthropic’s 2028 emissions is not meant to suggest that Anthropic will be the largest emitter among the tech companies.

Anthropic 的电力使用产生的排放很可能被归类为混合的 Scope 2 和 Scope 3 排放，具体取决于他们是否拥有 GPU。对于租用空间的设施，其排放很可能被计入所有者/运营方的 Scope 2 排放（例如，Amazon 在 Project Rainier 项目，或 SpaceX 在 Colossus 任务中）。此外，也应指出，Microsoft、Google 和 Meta 的排放预计也会增长，因此将它们 2025 年的排放与 Anthropic 的 2028 年的排放进行比较，并不意味着 Anthropic 将成为科技公司中的最大排放者。

> [^4]: This average is based on AVERT’s marginal emissions for grid-connected units without new dedicated capacity. Using the average (non-marginal) carbon intensity for each eGRID subregion would give a carbon intensity of 839 lb CO<sub>2</sub>/MWh. However, marginal emissions are more representative of the near-term impacts of Anthropic’s added load to the grid.

[^4]: 此平均值基于 AVERT 对无新增专用容量的并网机组的边际排放数据。若使用各 eGRID 子区域的平均（非边际）碳强度，碳强度将为 839 lb CO<sub>2</sub>/MWh。然而，边际排放更能代表 Anthropic 新增负荷对电网的近期影响。

> [^5]: Pg. 13: “For example, in May 2026, we entered into Cloud Services Agreements with Anthropic PBC (“Anthropic”), an AI research and development public benefit corporation, with respect to access to compute capacity across COLOSSUS and COLOSSUS II. Compute capacity provided includes approximately 325,000 NVIDIA GPUs, backed by hyperscale-class CPUs, exabyte-scale storage and high-speed networking and interconnects purpose-built for AI workloads. Pursuant to these agreements, the customer has agreed to pay us $1.25 billion per month through May 2029, with capacity ramping in May and June 2026 at a reduced fee.”

[^5]: Pg. 13: “例如，2026 年 5 月，我们与 Anthropic PBC (Anthropic)，一家 AI 研究与开发公益公司，就访问 COLOSSUS 和 COLOSSUS II 的计算能力签订了云服务协议。提供的计算能力包括约 325,000 个 NVIDIA GPU，并由超大规模级 CPU、EB 级存储以及专为 AI 工作负载构建的高速网络和互连提供支持。根据这些协议，客户已同意在 2029 年 5 月之前每月向我们支付 12.5 亿美元，容量将在 2026 年 5 月和 6 月以较低费用逐步上线。”

> [^6]: “Under the SpaceXAI Arrangements, we agreed to spend an aggregate of up to $120.5 billion over terms extending into 2029, consisting of approximately $3.1 billion in the aggregate per month once all capacity has been delivered, which we expect in December 2026, with different fees during capacity ramping periods.”

[^6]：根据“SpaceXAI 安排”，我们同意在延续至 2029 年的条款期内合计支出最高达 1,205 亿美元，其中一旦所有产能交付完毕（预计于 2026 年 12 月），每月合计约 31 亿美元，在产能爬坡期收取不同费用。

> [^7]: See our [calculations](https://docs.google.com/spreadsheets/d/1XSqa0lJFJs6pQcmcTlBwUqLsQBEtDybNhjEiFGj-vbE/edit?gid=117490244#gid=117490244) and [EpochAI’s calculations](https://docs.google.com/spreadsheets/d/1oZpZ9nTTV6wW0xjc1pPOQmKS7NCyDzuG2HiycC1GqFs/edit?gid=2038650305#gid=2038650305) for more details.

[^7]: 更多详情请参阅我们的[计算过程](https://docs.google.com/spreadsheets/d/1XSqa0lJFJs6pQcmcTlBwUqLsQBEtDybNhjEiFGj-vbE/edit?gid=117490244#gid=117490244)和 [EpochAI 的计算过程](https://docs.google.com/spreadsheets/d/1oZpZ9nTTV6wW0xjc1pPOQmKS7NCyDzuG2HiycC1GqFs/edit?gid=2038650305#gid=2038650305)。
