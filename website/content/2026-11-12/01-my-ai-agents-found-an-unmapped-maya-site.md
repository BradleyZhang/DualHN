---
title: "我的AI智能体发现了一处未测绘的玛雅遗址？"
date: 2026-11-12T10:16:07+08:00
draft: false
source: "Hacker News"
originalTitle: "My AI Agents (Re)discovered a Maya Site in 72 Hours"
originalUrl: "https://pietromiotti.com/latest/maya-site"
hnUrl: ""
points: 
comments: 
---

> *Update (11 November): it turns out the site had already been mapped in [Estrada-Belli et al. 2025](https://doi.org/10.1016/j.jasrep.2025.105288). The agents missed it while going through the literature, so they rediscovered it rather than discovered it (it just wasn't in the register of Mexico's National Institute of Anthropology and History, INAH, yet). Still work to do then! The rest of the story still holds.*



*更新（11月11日）：事实证明，该遗址已在 [Estrada-Belli 等人 2025](https://doi.org/10.1016/j.jasrep.2025.105288) 的研究中被绘制过地图。智能体在梳理文献时遗漏了它，因此是“重新发现”而非“首次发现”（该遗址当时尚未录入墨西哥国家人类学与历史研究所，即 INAH 的登记册）。那么，仍有工作要做！故事的其余部分依然成立。*

> By analyzing NASA lidar data, my AI agents found a Maya site in Mexico that wasn't in the official register. (It turned out archaeologists had mapped it already, more on that at the end.) It took **less than 72 hours** to go from a random thought while traveling to an official reply from the Mexican government. This is by far the best time ever to be alive.

通过分析 NASA 激光雷达数据，我的 AI Agents 在墨西哥发现了一个官方名录中没有的玛雅遗址。（结果发现考古学家早已对其进行了测绘，文末详述。）从旅途中的一念之想，到收到墨西哥政府的官方回复，前后仅耗时 **不到 72 小时**。这绝对是有生以来最好的时代。

![Lidar of the hilltop with the forest stripped away, showing a plaza, a pyramid and platforms](https://pietromiotti.com/latest/hero-lidar.jpg)

> Drag the slider. The same hilltop today from a satellite (just trees) and in lidar (no trees). Colours show height. Satellite © Esri, Maxar, Earthstar Geographics.

拖动滑块，查看同一山顶的卫星图像（仅显示树木）和激光雷达图像（无树木）。颜色表示高度。卫星图像来源：Esri、Maxar、Earthstar Geographics。

> *Disclaimer: I'm not an archaeologist.*



*免责声明：我不是考古学家。*

> I'm going to tell this story as a diary, because the timeline is probably the best part.

我想用日记的形式讲述这个故事，因为时间线可能是最精彩的部分。

> ## 18 October

## 10月18日

> I was traveling in Peru, Gemini-ing about the history of the place, when I learned about [Hiram Bingham](https://en.wikipedia.org/wiki/Hiram_Bingham_III), the American explorer who "discovered" [Machu Picchu](https://en.wikipedia.org/wiki/Machu_Picchu) in 1911. "What luck!" I thought. He was actually looking for a different city, [Vilcabamba](https://en.wikipedia.org/wiki/Vilcabamba,_Peru), the last refuge of the Incas, when a local farmer in the valley below guided him to the ruins. "Imagine if Bingham had our tools," I thought. "What would he do?"

我在秘鲁旅行，用 Gemini 查询该地的历史时，了解到美国探险家 [Hiram Bingham](https://en.wikipedia.org/wiki/Hiram_Bingham_III)，他在 1911 年“发现”了 [Machu Picchu](https://en.wikipedia.org/wiki/Machu_Picchu)。“真幸运！”我想。他原本在寻找另一座城市，[Vilcabamba](https://en.wikipedia.org/wiki/Vilcabamba,_Peru)，那是印加人最后的避难所；这时，下方山谷里的一位当地农民把他带到了遗址。“想象一下如果 Bingham 拥有我们的工具，”我想，“他会做什么？”

![Hiram Bingham standing at his tent door near Machu Picchu, 1912](https://pietromiotti.com/latest/bingham-1912.jpg)

> Left: Bingham at his tent, 1912. Right: Machu Picchu, photographed by Bingham the same year. Public domain, Wikimedia Commons ( left, right ).



左：1912 年，Bingham 在其帐篷旁。右：同年由 Bingham 拍摄的 Machu Picchu。公共领域，Wikimedia Commons（左、右）。

> I brainstormed a bit with a few agents (Gemini, ChatGPT, Claude and Grok), and they all said [lidar](https://en.wikipedia.org/wiki/Lidar). From above, a ruin in the jungle is just a bunch of trees (like Machu Picchu before it was cleared), so satellite photos don't help much. Lidar, instead, fires laser pulses through the gaps in the canopy and maps the ground underneath.[^1]



我和几个 agent（Gemini、ChatGPT、Claude 和 Grok）进行了一些头脑风暴，他们都提到了 [lidar](https://en.wikipedia.org/wiki/Lidar)。从上面看，丛林中的废墟只是一堆树（就像清理前的马丘比丘），因此卫星照片并没有太大帮助。相反，lidar 会穿过树冠的缝隙发射激光脉冲，并绘制下方地面的地图。[^1]

> So the agents went looking for lidar data. Peru isn't well covered, and hiring a company to do a survey meant permits, costs and bureaucracy, so I gave up on that. Then I thought: why not the [Maya](https://en.wikipedia.org/wiki/Maya_civilization)? Their region is much better covered by public lidar.

所以 agents 去寻找 lidar data. 秘鲁的覆盖不佳，聘请公司进行调查意味着需要办理许可证、承担费用和繁琐的行政手续，所以我放弃了这项计划。然后我考虑: 为什么不试试 [Maya](https://en.wikipedia.org/wiki/Maya_civilization)？他们的地区由公共 lidar 覆盖得更好。

> That night, I asked the agents to analyze it and went to bed.

那天晚上，我让 agents 去分析它，然后就上床睡觉了。

> ## 19 October

## 10月19日

> I woke up and checked the agents' reports. 'DAMN!' They had found lots of villages and other regular shapes that looked like structures or houses.

我醒来并检查了代理人的报告。 'DAMN!' 他们发现了许多村庄和其他规则形状，看起来像结构或房屋。

![Grid of eight bare-earth lidar views of Maya sites flagged by the agents](https://pietromiotti.com/latest/maya-sites.jpg)

> A few of the sites the agents flagged overnight. Keep an eye on the bottom-left one.

昨晚，代理标记了几个站点，请留意左下角的那个。

> **So how did they do it?** They turned the lidar strips (about 1,200 km² of jungle) into images, and 48 agents went through them one by one like very patient archaeologists, looking for pyramids, platforms, and plazas while filtering out natural hills, sinkholes, and roads. There was no special model or classifier involved: the agents literally looked at the pictures, following a precise guide.

**他们是怎么做到的？** 他们把雷达条带（约 1,200 km² 的雨林）转换为图像，并且 48 个代理人逐一像非常耐心的考古学家一样，寻找金字塔、平台和广场，同时过滤掉自然山丘、坑地和道路。没有特殊的模型或分类器参与 ： 代理人字面上看图像，遵循精确指南。

> > **Me:** That's awesome! Please check which of these villages haven't been discovered yet. Search both the literature and the archives.
> > 
> > *…a few hours later…*
> > 
> > **Agent:** One major village doesn't seem to have been registered.

**我：** 太棒了！请检查这些村庄是否还没被发现。搜索文献和档案。

*…a few hours later…*

**Agent:** 一个主要的村庄似乎还没有被注册。

> This is the hilltop from the top of this post. It sits on the edge of a cliff, under the jungle, and it has straight edges and sharp corners. Nature doesn't really do straight lines.

这是这篇帖子顶部的那座山丘顶。它位于悬崖的边缘，在丛林之下，并且有直边和尖角。自然并不真的会做直线。

> Zooming in, there's a levelled plaza, an oval pyramid at least 8–12 m tall, a raised courtyard attached to it and a flat-bottomed hollow that might have been a water reservoir.

放大，有一个平整的广场，一座至少高 8–12 m 的椭圆形金字塔，一个附着于其上的高起庭院，以及一个平底空腔，它也许曾是水库。

![Bare-earth lidar of the whole hilltop, with a zoom into the civic centre below: plaza, pyramid, raised courtyard and possible reservoir](https://pietromiotti.com/latest/lidar-zoom.jpg)

> The hilltop with the trees removed (top), and a zoom into its civic centre (bottom).

移除了树木的山顶（顶部），以及对其市中心的放大视图（底部）。

> And this is what it looks like in 3D.

并且这就是它在 3D 中的样子。

<video src="https://pietromiotti.com/latest/M2_lidar_360.mp4" controls="" aria-label="3D lidar model of the site rotating 360 degrees: plaza, pyramid and courtyard on a hilltop"></video>

> The site in 3D, from the lidar. Heights exaggerated ~1.5×.

3D 中的场地，来自 lidar。高度夸张约 1.5×。

> > **Me:** OK, what should I do?
> > 
> > **Agent:** You should contact [INAH](https://www.inah.gob.mx/) (Mexico's National Institute of Anthropology and History), write a report on your discovery, and check whether the site is in their register. Sometimes they have unpublished results.
> > 
> > **Me:** OK, how do I contact INAH? How does the reporting process work?
> > 
> > **Agent:** *…instructions for the report… + email addresses*
> > 
> > **Me:** OK, please do the report.

**Me:** OK, what should I do?
**Agent:** 您应该联系[INAH](https://www.inah.gob.mx/)（墨西哥国家人类学与历史研究所），撰写一份关于您发现的报告，并检查该遗址是否在其注册名册中。有时他们会有未发表的结果。
**Me:** OK, how do I contact INAH? How does the reporting process work?
**Agent:** *…instructions for the report… + email addresses*
**Me:** OK, please do the report.

> And I went to bed.

我去睡觉了。

> ## 20 October

## 10月20日

> I iterated on the report a bit, since a few things were off, and translated it into Spanish to improve the chances of getting a reply (at least, that's what Claude suggested). I don't speak Spanish, so I had to trust the agents on that one.

我对报告进行了几次迭代，因为有些地方不对劲，并将其翻译成西班牙语，以提高获得回复的机会（至少，Claude 是这样建议的）。我不说西班牙语，所以我不得不信任 agents 在此事上的判断。

> The agents also checked the raw point cloud, to make sure the shapes were really on the ground and not created by the trees. Green dots are leaves, brown dots are the ground.

Agent 也检查了原始点云，以确保形状确实在地面，而不是由树木产生。绿色点代表叶子，棕色点代表地面。

![Point-cloud slices across the site: vegetation returns in green, ground returns in brown](https://pietromiotti.com/latest/point-cloud-profiles.jpg)

> Two slices through the raw lidar points. Under 10–17 m of forest, the ground (brown) traces the plaza, the pyramid and the courtyard.

两层穿过原始 lidar points。在 10–17 m 的森林中， 地面 (brown) 描绘出广场、金字塔和庭院。

> Then I sent the report to INAH.



然后我把报告发给了 INAH。

![First page of the report sent to INAH](https://pietromiotti.com/latest/report-letter.jpg)

> The top of my letter to INAH. The exact coordinates went in a confidential annex, not shown here.

我写给 INAH 的信的开头部分。  
准确坐标被放在一个机密附录中，这里并未展示。

> ## 21 October

## 10 月 21 日

> INAH replied: they checked their records and found **no registered archaeological site at that location**.

INAH 回复说：他们查阅了记录，并发现**该地点没有登记的考古遗址**。

![INAH's official reply](https://pietromiotti.com/latest/inah-reply.jpg)

> INAH's reply. The highlighted part: "…no registered archaeological site was identified at the location given in your report."

…未在您报告中提供的地点识别到注册的考古遗址。

> At that point I thought nobody had put it on a map before. I was wrong (see below).



在那时，我以为之前没有人把它放到地图上。我错了（见下文）。

> ## So what was it?

## 那到底是什么？

> This part is speculation, from a long chat with the agents. It looks like a small Maya civic centre from the Classic period (roughly AD 250–900), basically the "downtown" of a local elite. The plaza is where people gathered, for ceremonies and maybe even a market. The pyramid was probably a temple, and the raised courtyard next to it might have been where the local ruler lived. The hollow could have been an *aguada*, a rainwater reservoir: Maya towns needed them to get through the dry season. Or it's just a hole. The three platforms around were probably houses.

这部分是推测，来自与智能体的一段很长的聊天。它看起来像一个来自古典时期（大约 AD 250–900）的小型玛雅公民中心，基本上是当地精英的“市中心”。广场是人们聚集的地方，举行仪式，也许甚至举办市场。金字塔可能是一座寺庙，而旁边的高台庭院可能是在当地统治者居住的地方。这个空地可能是一个 *aguada*，一种雨水蓄积池：玛雅城镇需要它们来度过旱季。或者只是一个洞。周围三个平台可能都是房子。

> I asked Gemini to imagine how it looked back then:

我让 Gemini 想象一下它当时的样子：

![AI-generated artist's impression of the site in the Classic period: a plaza, a small pyramid and a courtyard on a forested clifftop, with thatched houses around](https://pietromiotti.com/latest/reconstruction.jpg)

> How it might have looked around AD 700. Generated with Gemini from the lidar layout

大概在 AD 700 年时的样子。 使用 Gemini 从 lidar 布局生成。

> For similar studies, have a look at how NASA's G-LiHT instrument works ([Cook et al. 2013](https://doi.org/10.3390/rs5084045)) and how lidar collected for environmental research can be reused for archaeology ([Golden et al. 2016](https://doi.org/10.1016/j.jasrep.2016.07.029)). In 2024, archaeologists found a whole Maya city in Mexico this way ([Auld-Thomas et al. 2024](https://doi.org/10.15184/aqy.2024.148)), others mapped settlements across the Maya lowlands, including this very site ([Estrada-Belli et al. 2025](https://doi.org/10.1016/j.jasrep.2025.105288)), and another study found what may have been ancient Maya marketplaces ([Šprajc 2026](https://doi.org/10.1017/S0956536126100923)).



有关类似的研究，可以参考 NASA 的 G-LiHT 仪器的工作原理（[Cook et al. 2013](https://doi.org/10.3390/rs5084045)），以及如何将为环境研究收集的 lidar 数据重新用于考古学（[Golden et al. 2016](https://doi.org/10.1016/j.jasrep.2016.07.029)）。2024 年，考古学家通过这种方法在墨西哥发现了一整座玛雅城市（[Auld-Thomas et al. 2024](https://doi.org/10.15184/aqy.2024.148)），其他研究人员绘制了包括该遗址本身在内的整个玛雅低地定居点分布图（[Estrada-Belli et al. 2025](https://doi.org/10.1016/j.jasrep.2025.105288)），而另一项研究则发现了可能是古代玛雅集市的所在地（[Šprajc 2026](https://doi.org/10.1017/S0956536126100923)）。

> ## What's next

## 接下来

> The site is now in the hands of the people who should have it: Mexico's National Institute of Anthropology and History (INAH) and the archaeologists who mapped it first. If anything comes out of it, I'll post an update.

该遗址现已移交给本应拥有它的人手中：墨西哥国家人类学与历史研究院（INAH）以及最先绘制该遗址地图的考古学家们。若有进展，我会发布更新。

> ## What I've learned

## 我学到的

> You can just do things. I'm not an archaeologist, so I didn't know this was supposed to be hard. I just picked an old problem, tried the most obvious thing and threw some compute at it. Being a naive outsider might be a superpower now.

你可以直接做事。我不是考古学家，所以我不知道这件事本来就很难。我只是选了一个老问题，试了最明显的方法，然后扔了些算力去试。现在，作为一个外行可能是一种超能力。

> And it turned out professional archaeologists had already mapped the same site. I guess that's a good sign: an outsider with agents ended up in a similar place to the experts.

结果发现专业考古学家已经映射了同一处。 我猜这是个好消息： 外来者 agents 结束于 与专家相似的地方。

> And I don't think this is really about archaeology. So far, most agentic AI stories have been about coding, math and physics, but it's much more general than that, and I hope this small example makes it a bit more obvious. We are on the brink of a revolution in all the sciences, and the only bottlenecks left will be curiosity and imagination (and compute).



而且，我不认为这真的关乎考古学。到目前为止，大多数关于 agentic AI 的故事都围绕着编程、数学和物理，但它远比这更通用。我希望这个小小的例子能让这一点变得稍微明显一些。我们正站在所有科学领域革命的边缘，而剩下的唯一瓶颈将是好奇心和想象力（以及算力）。

> **At this point, we should probably lidar the whole planet and let the agents discover the rest.**

**此时，我们大概应该对整个星球进行 lidar 扫描，并让 agents 发现其余部分。**

> [^1]: If you don't know how lidar works, copy and paste this prompt into your favorite AI tool: "Build an HTML page that explains how lidar works, with beautiful visualizations."

[^1]: 如果你不知道 LiDAR 是如何工作的，请将以下提示复制并粘贴到你最喜欢的 AI 工具中："构建一个 HTML 页面，用美观的可视化效果解释如何工作。"
