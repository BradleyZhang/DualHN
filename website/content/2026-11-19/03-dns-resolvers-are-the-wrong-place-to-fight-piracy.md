---
title: 'DNS解析器不是打击盗版的正确战场'
date: 2026-11-19T11:06:23+08:00
draft: false
source: "Hacker News"
originalTitle: 'Quad9 Is Leaving France: Why DNS Resolvers Are the Wrong Place to Fight Piracy'
originalUrl: "https://techstackups.com/articles/quad9-leaves-france-dns-blocking/"
hnUrl: ""
points: 
comments: 
---

> On Tuesday, November 24, 2026, [Quad9](https://quad9.net/) will stop answering DNS queries from France. Quad9 is the Swiss non-profit behind the free 9.9.9.9 resolver, which blocks malware and phishing domains. It is not leaving because of costs or lack of users. It is leaving because a Paris court [fined it for refusing to block](https://quad9.net/news/blog/au-revoir-france/) a list of pirate sports-streaming domains on behalf of beIN Sports. With [around 20 similar cases still pending](https://quad9.net/news/blog/au-revoir-france/) in France, leaving the country is the only option Quad9 can afford.

2026 年 11 月 24 日（周二），[Quad9](https://quad9.net/) 将停止响应来自法国的 DNS 查询。Quad9 是总部位于瑞士的非营利组织，运营着免费的 9.9.9.9 解析器，可拦截恶意软件和钓鱼域名。其退出并非因成本或用户不足，而是因为巴黎法院[因其拒绝代表 beIN Sports 屏蔽一份盗版体育流媒体域名清单而对其处以罚款](https://quad9.net/news/blog/au-revoir-france/)。鉴于法国还有[约 20 起类似案件仍在审理中](https://quad9.net/news/blog/au-revoir-france/)，离开该国是 Quad9 唯一负担得起的选择。

> Cloudflare, which runs the competing 1.1.1.1 resolver, called the departure ["a canary in the coal mine"](https://blog.cloudflare.com/quad9-withdrawal-from-france/), and the post reached the [front page of Hacker News](https://news.ycombinator.com/item?id=50538994). In that thread, Quad9's CTO John Todd [asked readers](https://news.ycombinator.com/item?id=50539856) to write "a long-form, well-reasoned statement of why France is taking the wrong path", with plenty of sources, and to send it to policymakers. This is our attempt. Every claim below links to a primary document, a court ruling, or contemporaneous reporting.

Cloudflare, 运行竞争对手 1.1.1.1 解析器的 Cloudflare，将该离场称为 ["a canary in the coal mine"]，该帖子到达了 Hacker News 前页 (https://news.ycombinator.com/item?id=50538994)。在这场讨论中，Quad9 首席技术官 John Todd [向读者](https://news.ycombinator.com/item?id=50539856) 提出写 “a long-form, well-reasoned statement of why France is taking the wrong path”，包括充足的来源， 并发送给政策制定者。这是我们的尝试。每项主张均链接至原始文档、法院裁决或 当 contemporaneous reporting。

> ## What Quad9 is, and why it matters

## Quad9 是什么，以及它为何重要

> A DNS resolver turns a name like `example.com` into an IP address your computer can connect to. Most people use their ISP's resolver without knowing it. A public resolver is one anyone can point their device or network at instead, such as Google's 8.8.8.8, Cloudflare's 1.1.1.1, Cisco's OpenDNS, or Quad9's 9.9.9.9.

DNS resolver 将像 `example.com` 这样的名称转换为计算机可以连接的 IP 地址。大多数人在不知情的情况下使用其 ISP 的 resolver。公共 resolver 是任何人都可以将其设备或网络指向的替代 resolver，例如 Google 的 8.8.8.8、Cloudflare 的 1.1.1.1、Cisco 的 OpenDNS 或 Quad9 的 9.9.9.9。

> Quad9 has a few properties that make it unusual:

Quad9 有几个属性使其不寻常：

> - **It is a non-profit.** It was founded in 2017 by the [Global Cyber Alliance, IBM, and Packet Clearing House](https://quad9.net/about/), and [moved its legal seat to Zürich in 2021](https://quad9.net/news/blog/quad9-public-domain-name-service-moves-to-switzerland-for-maximum-internet-privacy-protection/), hosted by SWITCH, specifically so that its privacy promises would be backed by Swiss law. As John Todd put it at the time: "Privacy policies which are not backed by law are empty promises."
> - **Security filtering is its main purpose.** Quad9 refuses to resolve domains that threat-intelligence feeds flag as malware, phishing, or botnet infrastructure. Its about page claims [670 million+ blocks a day across 230+ resolver clusters in over 110 countries](https://quad9.net/about/).
> - **It keeps no user records.** Quad9 does not know who its users are, and that is the point.

- **它是一个非营利组织。** 它由 [Global Cyber Alliance、IBM 和 Packet Clearing House](https://quad9.net/about/) 于 2017 年创立，并于 [2021 年将其法律实体迁至苏黎世](https://quad9.net/news/blog/quad9-public-domain-name-service-moves-to-switzerland-for-maximum-internet-privacy-protection/)，由 SWITCH 托管，旨在让其隐私承诺受瑞士法律保障。正如 John Todd 当时所言：“没有法律支撑的隐私政策只是空谈。”
- **安全过滤是其核心目的。** Quad9 拒绝解析被威胁情报源标记为恶意软件、钓鱼网站或僵尸网络基础设施的域名。其关于页面声称 [每天拦截 6.7 亿次以上，覆盖 110 多个国家的 230 多个解析器集群](https://quad9.net/about/)。
- **它不保留任何用户记录。** Quad9 不知道其用户是谁，这正是其设计初衷。

> Organisations have come to depend on it. Mullvad [shut down its own public encrypted DNS service on November 2, 2026](https://mullvad.net/en/blog/2026/9/3/shutting-down-our-public-encrypted-dns-servers-and-sponsoring-quad9-instead) and moved Mullvad Browser users with default settings to Quad9, funding Quad9 instead. (Mullvad Browser users in France will now be migrated to a resolver that disappears three weeks later.) Quad9's announcement lists dozens of French networks it sees traffic from, including the [interministerial digital directorate DINUM, France Travail, CEA, Institut Pasteur, RENATER, EDF, SNCF, AP-HM hospitals in Marseille, France Télévisions, Thales, and Airbus's Stormshield](https://quad9.net/news/blog/au-revoir-france/). Quad9 can't tell any of them it is leaving. As Cloudflare [points out](https://blog.cloudflare.com/quad9-withdrawal-from-france/), when a resolver disappears, users don't see an error message. "Their Internet will simply stop working."

组织已经开始依赖它。 Mullvad [shut down its own public encrypted DNS service on November 2, 2026](https://mullvad.net/en/blog/2026/9/3/shutting-down-our-public-encrypted-dns-servers-and-sponsoring-quad9-instead) 并将 Mullvad Browser 用户以默认设置 Quad9，资助 Quad9 代替。 （Mullvad Browser 用户在法国将现在被迁移到一个消失三周后的解析器。）Quad9 的公告列出了数十家法国网络的流量，其中包括 the [interministerial digital directorate DINUM, France Travail, CEA, Institut Pasteur, RENATER, EDF, SNCF, AP-HM hospitals in Marseille, France Télévisions, Thales, and Airbus's Stormshield](https://quad9.net/news/blog/au-revoir-france/). Quad9 can't tell any of them it is leaving. As Cloudflare [points out](https://blog.cloudflare.com/quad9-withdrawal-from-france/), when a resolver disappears, users don't see an error message. "Their Internet will simply stop working."

> ## How France got here

## 法国是如何走到今天的

> ### The law: Article L.333-10 of the Code du sport

### 法律依据：《体育法典》第 L.333-10 条

> The legal basis for all of this is [Article L.333-10 of the French sports code](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000054616722). It was created by [Law 2021-1382 of October 25, 2021](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044245615), the same law that merged HADOPI and the CSA into the new regulator **Arcom**. L.333-10 lets a sports rightsholder go to the president of the Paris judicial court and obtain "dynamic" blocking orders, meaning orders that cover sites already identified plus new mirror domains notified later through Arcom, against "toute personne susceptible de contribuer à y remédier" (any person able to help stop the infringement).

这一切的法律依据是 [Article L.333-10 of the French sports code](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000054616722)。它由 [Law 2021-1382 of October 25, 2021](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044245615) 创设，该法律同将 HADOPI 和 CSA 合并为新监管机构 **Arcom** 。L.333-10 允许体育权利人向巴黎司法法院院长请求，获得“动态”阻断令，即覆盖已识别站点以及随后通过 Arcom 通知的新镜像域的令，针对“toute personne susceptible de contribuer à y remédier”（任何帮助遏制侵权的当事人）。

> That last phrase is what puts DNS resolvers in scope. In [July 2026](https://www.senat.fr/dossier-legislatif/ppl24-456.html), Parliament passed [Law 2026-725 on professional sport](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006071318/LEGISCTA000044247627/), which amended L.333-10 and added an automated real-time blocking system run by Arcom. TorrentFreak [reported](https://torrentfreak.com/france-approves-automated-real-time-blocking-of-pirate-sports-streams/) that under the new system "ARCOM's agents no longer approve each block in advance." Quad9 called it "recklessly dangerous."

该短语将 DNS 解析器纳入范围。在 [七月 2026](https://www.senat.fr/dossier-legislatif/ppl24-456.html)，议会通过了 [Law 2026-725 on professional sport](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006071318/LEGISCTA000044247627/)，该法修订了 L.333-10 并添加了由 Arcom 运行的实时自动阻断系统。TorrentFreak [报告](https://torrentfreak.com/france-approves-automated-real-time-blocking-of-pirate-sports-streams/) 指出，在新系统下 “ Arcom's agents no longer approve each block in advance”。 Quad9 称其为“ recklessly dangerous”。

> ### The cases: from ISPs to everyone

### 案例：从 ISPs 到每个人

> The timeline shows how the circle of targets has widened:

时间线展示了目标圈如何不断扩大：

> | Date | What happened |
> | --- | --- |
> | Dec 2023 | Canal+ [sues Cloudflare, Google and Cisco](https://torrentfreak.com/dns-block-canal-sues-cloudflare-google-cisco-to-fight-piracy-231230/) under L.333-10 to force DNS blocking of football piracy sites. |
> | May–Jun 2024 | The Paris court [orders the three resolvers to block ~117 domains](https://torrentfreak.com/opendns-suspends-service-in-france-due-to-canal-piracy-blocking-order-240629/). Google complies. Cisco [pulls OpenDNS out of France](https://next.ink/142507/contraint-de-bloquer-des-noms-de-domaine-opendns-decide-de-quitter-la-france/) on June 28, 2024, citing a court order "issued under Article L.333-10 of the French Sport code" ([archived notice](http://web.archive.org/web/20250717065306/https://support.opendns.com/hc/en-us/articles/27951404269204-OpenDNS-Service-Not-Available-To-Users-In-France-and-Portugal)). |
> | Sep–Oct 2024 | [New orders expand blocking](https://torrentfreak.com/court-expands-google-and-cloudflare-dns-blocking-to-combat-piracy-241125/) by Google and Cloudflare. |
> | Dec 2024 | Canal+ wins [three orders against Quad9 and Vercara](https://next.ink/161634/streaming-sportif-canal-obtient-aussi-le-blocage-des-dns-de-quad9-et-vercara/) (Premier League, Champions League, Top 14 rugby). Because it can't geolocate users, Quad9 [blocks the domains for the whole world](https://quad9.net/news/press/quad9-faces-new-dns-censorship-legal-challenge-in-france-from-canal/): "we have to block these sites for all users, in all areas." |
> | May 2025 | A beIN request against Google, Cloudflare and Quad9 is [rejected for lack of evidence](https://torrentfreak.com/wrong-logo-no-piracy-proof-french-court-rejects-dns-piracy-blocking-bids-250515/). Quad9 didn't defend that case at all, citing lack of resources. |
> | Mar 2026 | The Paris Court of Appeal [rejects five appeals by Google, Cloudflare and Cisco](https://torrentfreak.com/google-cloudflare-cisco-lose-pirate-site-dns-blocking-appeal-in-france/) (RG 24/09372), the first appellate approval of DNS blocking under L.333-10: "Any filtering measure can be circumvented, and this possibility does not render the measures in question ineffective." The same month, the court issues [simultaneous orders against 19 ISPs, Google, Cloudflare, Quad9 and VPN providers](https://torrentfreak.com/paris-court-issued-simultaneous-site-blocking-orders-against-isps-dns-resolvers-and-vpns/). |
> | Apr 2026 | Canal+ obtains orders against [Whalebone's EU-funded DNS4EU resolver](https://torrentfreak.com/eu-funded-dns-provider-must-block-pirate-sites-french-court-rules/), which complies by blocking "globally across our resolver tiers." |
> | May 13, 2026 | beIN Sports obtains an order (RG 26/02207) requiring Quad9 to block IPTV sites showing the **WTA women's tennis tour** until the season ends on November 14. It [starts with 6 domains and grows to 58](https://torrentfreak.com/dns-resolver-quad9-rejects-french-piracy-blocks-weighs-exit-as-bein-seeks-up-to-e580k-a-day/) via Arcom notifications. |
> | Jul 2026 | [14 new Canal+ orders](https://torrentfreak.com/paris-court-kicks-off-new-football-season-with-multi-intermediary-piracy-blocking-orders/) for the 2026/27 season target ISPs, Google, Quad9, DNS4EU, Cloudflare, VPNs, and Bing. |
> | Oct 7, 2026 | The court [refuses penalties against Cloudflare, NordVPN and Surfshark](https://torrentfreak.com/vpns-and-cloudflare-escape-beins-e10000-a-day-piracy-blocking-penalties/) because each had made some effort to block. Cloudflare [kept 1.1.1.1 out of it](https://torrentfreak.com/cloudflare-keeps-1-1-1-1-out-of-piracy-blocking-escapes-penalties-in-france/) by acting through its CDN instead. |
> | Oct 21, 2026 | The court [imposes a €1,000/day penalty on Quad9](https://quad9.net/uploads/20261021_-_Jugement_selon_la_PAF.PDF) (RG 26/11882). |
> | Oct 22, 2026 | Quad9 [announces it will leave France](https://quad9.net/news/blog/au-revoir-france/) on November 24. |

| 日期 | 事件 |
| --- | --- |
| 2023 年 12 月 | Canal+ 依据《法国体育法典》第 L.333-10 条，对 Cloudflare、Google 和 Cisco 提起诉讼，要求他们对足球盗版网站实施 DNS 拦截（链接）。 |
| 2024 年 5 月至 6 月 | 巴黎法院下令三家 DNS 解析服务商阻止约 117 个域名（链接）。 Google 服从了命令，而 Cisco 则于 2024 年 6 月 28 日退出法国市场，称其因法院依据《法国体育法典》第 L.333-10 条做出的裁决而必须撤出法国 OpenDNS 服务（存档通知）。 |
| 2024 年 9 月至 10 月 | 法院扩大了 Google 和 Cloudflare 的 DNS 拦截范围（链接）。 |
| 2024 年 12 月 | Canal+ 赢得了三项针对 Quad9 和 Vercara 的诉讼（链接），涉及英超联赛、欧冠联赛和顶级14橄榄球赛事。由于无法 geolocate 用户，Quad9 不得不“在全球范围内为所有用户阻止这些网站”（链接）。 |
| 2025 年 5 月 | 法院驳回了 beIN 对 Google、Cloudflare 和 Quad9 的诉讼，认为缺乏证据（链接）。 Quad9 未能为该案进行任何辩护，称缺乏资源。 |
| 2026 年 3 月 | 巴黎上诉法院驳回了 Google、Cloudflare 和 Cisco 的五项上诉（RG 24/09372），这是首次在《法国体育法典》第 L.333-10 条项下批准 DNS 拦截的上诉裁决：“任何过滤措施都可以被规避，但这种可能性并不使相关措施无效。” 同月，法院对 19 家 ISP、Google、Cloudflare、Quad9 和 VPN 提供商发出同时生效的域名拦截令（链接）。 |
| 2026 年 4 月 | Canal+ 获得法院令，要求 EU-funded DNS4EU 解析服务商 Whalebone 执行域名拦截，该公司通过“在全球范围内在其解析服务层级实施拦截”来遵守命令（链接）。 |
| 2026 年 5 月 13 日 | beIN Sports 获得法院令（RG 26/02207），要求 Quad9 阻止播出 WTA 女子网球巡回赛的 IPTV 网站，直到该赛季结束（11 月 152016 日）。该命令最初涉及 6 个域名，后通过 Arcom 通知扩大到 58 个域名（链接）。 |
| 2026 年 7 月 | 巴黎法院为 2026/27 赛季发布 14 项针对 Canal+ 的域名拦截新令，涉及 ISP、Google、Quad9、DNS4EU、Cloudflare、 VPN 和 Bing 等服务提供商（链接）。 |
| 2026 年 10 月 7 日 | 法院拒绝对 Cloudflare、 NordVPN 和 Surfshark 施加 €10,000/天的罚款， 因为它们已采取了阻止措施。 Cloudflare 通过其 CDN 行动，使 1.1.1.1 避免参与拦截（链接）。 |
| 2026 年 10 月 21 日 | 法院对 Quad9 施加 €1,000/天的罚款（RG 26/11882）（链接）。 |
| 2026 年 10 月 22 日 | Quad9 宣布将于 2026 年 11 月 24 日离开法国（链接）。 |

> ### The ruling itself

### 裁决本身

> The [21 October judgment](https://quad9.net/uploads/20261021_-_Jugement_selon_la_PAF.PDF) is short and worth reading. A few details matter:

[21 October judgment](https://quad9.net/uploads/20261021_-_Jugement_selon_la_PAF.PDF) 短小精彩，值得阅读。几个细节很重要：

> - **The €580,000 figure was beIN's request, not the penalty.** beIN asked for €10,000 per day *per domain* still reachable; across 58 domains that is €580,000 a day. The judge set €1,000 a day in total, running until the end of the WTA season on November 14.
> - **The judge used Quad9's malware filtering against it.** Quad9 argued it could not implement geolocated blocking. The court (para. 16) replied that Quad9 "appears to contradict itself" because it already "applies automated filtering strictly limited to cybersecurity to neutralise malicious domains on a global scale." The fact that a resolver can drop a name for everyone was treated as proof it can drop a name for France.
> - **Refusing to try was enough.** Paragraph 18: "Bound by an obligation of means, the Quad9 foundation states that it implements none in order to execute the decision. This circumstance alone justifies the imposition of a penalty."

- **€580,000 的数字是 beIN 的请求，而非处罚。** beIN 要求每个仍可访问的域名每天 €10,000 *per domain* 仍可访问；跨 58 个域名总计为每天 €580,000。法官设定总计每天 €1,000，直至 WTA 赛季于 11 月 14 日结束。
- **法官使用 Quad9 的恶意软件过滤对其进行拦截。** Quad9 认为其无法实现地理定位阻断。法院 (para. 16) 回应称 Quad9 “似乎自相矛盾”，因为它已经 “严格限于网络安全领域的自动过滤，以在全球范围内中和恶意域名。” 一个解析器可以为所有人丢弃一个名称，这被视为证明它可以为法国丢弃一个名称。
- **拒绝尝试即可。** 第 18段：“由于义务约束，Quad9 基金会表示其为执行决定而未实施任何措施。此情况单独就足以判处罚金。”

> €1,000 a day for three weeks is survivable, about €24,000. Twenty more cases like it, each running for a full football season with ever-growing domain lists and Arcom's new automated system feeding them, is not. Quad9 [says](https://quad9.net/news/blog/au-revoir-france/): "Quad9 cannot survive the accumulation of penalties yet to be assessed in 20 other pending cases."

每天 €1,000 持续三周是可以承受的，大约 €24,000。像这样的再有二十起案件，每个持续一个完整足球赛季，伴随着不断增长的域名列表以及 Arcom 新的自动化系统向其中注入数据，则无法承受。

Quad9 [表示](https://quad9.net/news/blog/au-revoir-france/)：“Quad9 无法承受其他 20 起待决案件中尚未评估的处罚累积。”

> ## Why Quad9 can't just comply

## 为什么 Quad9 不能仅仅遵守

> Quad9 is often asked why it doesn't just block the domains. It has three options, and none of them work.

Quad9 经常被问到为什么它没有仅仅阻断域名。它有三个选项，而且这些选项都没有起作用。

> **1\. Block globally.** This is what Quad9 did for Canal+ in December 2024 and what DNS4EU does today. It means a French court decides what a user in Brazil, Kenya or Germany can resolve, for the commercial benefit of one company. Quad9's [announcement](https://quad9.net/news/blog/au-revoir-france/) asks how France would react if other nations imposed their laws on French users through DNS. The answer is obvious, and the reverse should be too. Nothing limits this to sports either: once global blocking is accepted, every court in every country can add names to everyone's resolver.

**1\. 全局封锁。** 这正是 Quad9 在 2024 年 12 月为 Canal+ 所做的事情，也是 DNS4EU 如今在做的事情。这意味着一家法国法院就能决定，身处巴西、肯尼亚或德国的用户可以解析哪些内容，而这一切都是为了某一家公司的商业利益。Quad9 的[公告](https://quad9.net/news/blog/au-revoir-france/)反问：如果其他国家通过 DNS 将本国的法律强加于法国用户，法国会作何反应？答案显而易见，反过来同样如此。

这种逻辑也绝不限于体育赛事：一旦全局封锁被接受，那么每一个国家的每一家法院都可以把域名添加进所有人的解析器中。

> **2\. Geo-block France.** Quad9 has already tried this, in Germany. In the [Sony Music v. Quad9 case](https://quad9.net/news/blog/quad9-turns-the-sony-case-around-in-dresden/), Quad9 used geoIP blocking for German users while the case continued. Sony's lawyers used a VPN to reach the content "from Germany" anyway, the court agreed this was non-compliance, and Quad9 was fined for contempt. GeoIP is a probabilistic guess about where an IP address is, not a legal fact about where a person is. A resolver that keeps no user records has no reliable way to define a "French user." As Quad9 [told TorrentFreak](https://torrentfreak.com/dns-resolver-quad9-rejects-french-piracy-blocks-weighs-exit-as-bein-seeks-up-to-e580k-a-day/): "There is no legally useful way for us to define a French user." Even the French order is geographically complicated: [heise notes](https://www.heise.de/en/news/Censorship-ruling-prompts-DNS-service-Quad9-to-leave-France-11497631.html) it covers the overseas departments and Saint-Pierre-et-Miquelon but excludes New Caledonia, Wallis and Futuna, and French Polynesia.

**2. Geo-block France.** Quad9 已经在德国尝试过这一点。在 [Sony Music v. Quad9 case](https://quad9.net/news/blog/quad9-turns-the-sony-case-around-in-dresden/) 中，Quad9 在案件继续期间对德国用户使用了 geoIP 阻塞。Sony 的律师无论如何都使用 VPN 从 "from Germany" 访问了内容，法院同意这属于不合规，Quad9 因此因藐视法庭被罚款。GeoIP 是对 IP 地址位置的概率性猜测，而非关于人身所在地的法律事实。一个不保留用户记录的 resolver 没有可靠的方式来定义 "French user"。正如 Quad9 [told TorrentFreak](https://torrentfreak.com/dns-resolver-quad9-rejects-french-piracy-blocks-weighs-exit-as-bein-seeks-up-to-e580k-a-day/) 所说："我们没有在法律上有用的方式来定义 French user。" 即使是法国命令在地理上也很复杂：[heise notes](https://www.heise.de/en/news/Censorship-ruling-prompts-DNS-service-Quad9-to-leave-France-11497631.html) 它涵盖海外省和 Saint-Pierre-et-Miquelon，但不包括 New Caledonia、Wallis and Futuna 和 French Polynesia。

> **3\. Pay and fight.** Quad9 won in Germany. The [Dresden Higher Regional Court](https://freiheitsrechte.org/quad9-Eng/) held in December 2023 that DNS resolvers get the same liability privilege as access providers, and the German civil rights group GFF said "the judgement puts the onus on rights holders." But winning took "several years, six figures of cost to Quad9, and massive wasted time," and the opposition, in Quad9's words, "has more lawyers than we have money and time." As Quad9 [wrote in 2025](https://quad9.net/news/blog/when-enforcing-copyright-starts-breaking-the-internets-plumbing/), compliance costs that are routine overhead for Google are, "for small, mission-driven nonprofits like Quad9, … an existential threat."

**3. 付费与抗争。** Quad9 在德国胜诉。[德累斯顿高等区域法院](https://freiheitsrechte.org/quad9-Eng/) 在 2023 年 12 月 认定，DNS 解析器 获得与 接入提供商 相同的责任特权，德国民权组织 GFF 表示：“该判决将负担放在权利持有人身上。”但胜诉花费了“几年、Quad9 六位数的成本，以及大量浪费的时间，”并且，用 Quad9 的话说，反对方“律师比我们的钱和时间都多。”正如 Quad9 在 2025 年 [撰文](https://quad9.net/news/blog/when-enforcing-copyright-starts-breaking-the-internets-plumbing/) 所述，对 Google 而言属于常规开销的合规成本，“对于像 Quad9 这样的小型、使命驱动的非营利组织……是一个生存威胁。”

> That leaves leaving.

那就只剩下离开了。

> ## Why DNS blocking doesn't work

## 为什么 DNS 阻塞不起作用

DNS 阻塞是网络层过滤的常见方法，但它存在根本局限性，在许多实际场景中表现失效。当用户输入被阻塞的域名时，请求会发送到 DNS 解析器，后者随后返回表明该域名无法解析的响应。然而 DoH (DNS over HTTPS) 和加密 DNS 等功能可以绕过简单的阻塞机制，因此 DNS 阻塞在不同网络环境中无法一致地强制执行策略。

> The argument against resolver blocking isn't only about Quad9's survival. Even on its own terms, it does not do what the rightsholders want.

反对解析器封锁的论点并不仅仅关乎 Quad9 的存亡。即便仅就其本身而言，这种做法也无法实现权利持有人的诉求。

> **It doesn't remove anything.** The DNS only holds pointers. Quad9's [Dresden write-up](https://quad9.net/news/blog/quad9-turns-the-sony-case-around-in-dresden/) puts it this way: "The DNS does not contain content - it is a system designed for delivery only of pointers." The pirate server stays online and keeps serving everyone who reaches it some other way. The Internet Society's [2025 guide for legal professionals](https://www.internetsociety.org/resources/doc/2025/mandated-dns-blocking/) says the same thing.

**它不会删除任何东西。** DNS 只存储指向信息的指针。Quad9 的 [德累斯顿案例分析](https://quad9.net/news/blog/quad9-turns-the-sony-case-around-in-dresden/) 中提到：“DNS 不存储内容，它是一个仅用于传递指针的系统。” 盗版服务器仍然在线，并继续通过其他方式为访问者提供服务。互联网协会的 [2025 年法律专业人士指南](https://www.internetsociety.org/resources/doc/2025/mandated-dns-blocking/) 也给出了同样的解释。

> **It takes seconds to bypass.** Quad9 notes there are [thousands of other open resolvers](https://dnsspy.io/dns-tools/public-dns-servers-list). Users can also run their own, or use encrypted DNS over HTTPS ([RFC 8484](https://www.rfc-editor.org/rfc/rfc8484.html)), which looks like ordinary web traffic. Arcom's own [December 2025 study for the National Assembly](https://www.assemblee-nationale.fr/dyn/contenu/visualisation/1097870/file/2025_12_01_Rapport_AN_antipiratage_sans_annexes.pdf) says 20% of French internet users already use an alternative DNS resolver and 29% use a VPN. Quad9 compares DNS blocking to "holding a piece of newspaper in front of a stadium full of people to block the view of a concert."

**只需几秒即可绕过。** Quad9 指出还有[数千个其他开放解析器](https://dnsspy.io/dns-tools/public-dns-servers-list)。用户也可以自行搭建，或使用加密的 DNS over HTTPS ([RFC 8484](https://www.rfc-editor.org/rfc/rfc8484.html))，其流量外观与普通 Web 流量无异。Arcom 为国民议会编写的[ 2025 年 12 月研究报告](https://www.assemblee-nationale.fr/dyn/contenu/visualisation/1097870/file/2025_12_01_Rapport_AN_antipiratage_sans_annexes.pdf)显示，20% 的法国互联网用户已在使用替代 DNS 解析器，29% 在使用 VPN。Quad9 将 DNS 封锁比作“在满座的体育场观众面前举起一张报纸，试图挡住他们观看演唱会的视线。”

> **It is blunt.** DNS works at the level of whole domains. A resolver can't block one infringing stream on a shared host without blocking everything else on that name. The IAB's [RFC 7754](https://www.rfc-editor.org/rfc/rfc7754.html), the IETF's standard reference on blocking and filtering, says: "From a technical perspective, there are no perfect or even good solutions -- there is only least bad." ICANN's security committee revisited the question in [SAC127, "DNS Blocking Revisited"](https://www.icann.org/en/ssac/publications/documents/sac127-executive-summary-for-dns-blocking-revisited-16-05-2025-en) (2025), warning implementers to minimise overblocking and avoid affecting users outside their jurisdiction. France's own registry operator, AFNIC, made the core point years ago in its scientific council's report on [the consequences of DNS filtering](https://www.afnic.fr/wp-media/uploads/2021/04/CS-consequences-du-filtrage-internet-par-le-DNS.pdf): "Le DNS n'a pas été conçu pour filtrer les contenus." (The DNS was not designed to filter content.)

**DNS过滤是粗糙的。** DNS 在整域名级别运行。解析器无法在共享主机上拦截单条侵权流，而不屏蔽该名称下的所有其他内容。IAB 的 [RFC 7754](https://www.rfc-editor.org/rfc/rfc7754.html)（IETF 关于阻塞和过滤的标准参考）指出：“从技术角度来看，不存在完美的、甚至是好的解决方案——只有最不坏的方案。”ICANN 的安全委员会在 [SAC127，“重新审视 DNS 阻塞”](https://www.icann.org/en/ssac/publications/documents/sac127-executive-summary-for-dns-blocking-revisited-16-05-2025-en)（2025 年）中重新审视了这一问题，警告实施者尽量减少过度阻塞，并避免影响其司法管辖区之外的用户。法国自己的注册管理机构 AFNIC 多年前在其关于 [DNS 过滤的后果](https://www.afnic.fr/wp-media/uploads/2021/04/CS-consequences-du-filtrage-internet-par-le-DNS.pdf) 的科学委员会报告中就指出了核心要点：“Le DNS n'a pas été conçu pour filtrer les contenus.”（DNS 并非设计用于过滤内容。）

> **It is opaque.** When a resolver is forced to lie, the user sees a site that doesn't load. They have no way to tell whether the site is down, their network is broken, or a court ordered the block. There is a standard for being honest about this: [RFC 8914 Extended DNS Errors](https://www.rfc-editor.org/rfc/rfc8914.html) defines code 16, "Censored", for answers withheld "due to an external requirement imposed by an entity other than the operator." But nothing in the French orders requires resolvers to use it.

**它是不透明的。**
当解析器被迫说谎时，用户会看到一个无法加载的站点。他们无法判断站点是 down 还是网络出了问题，或者是法院下令的屏蔽。关于这一点有一个诚实的标准：[RFC 8914 Extended DNS Errors](https://www.rfc-editor.org/rfc/rfc8914.html) 定义了代码 16， "Censored"，用于因“实体（非运营方）施加的外部要求”而被扣留的答案。但法国的命令中什么也没要求解析器使用它。

> **Blocking at scale causes real collateral damage.** France is not the only test case. Italy's Piracy Shield system [blocked Google Drive for much of the country in October 2024](https://torrentfreak.com/google-drive-blackout-in-italy-after-another-major-anti-piracy-blunder-241020/). A of Piracy Shield found more than 500 unrelated sites blocked and concluded that "IP-level blocking is an indiscriminate tool with consequences that outweigh its benefits." In Spain, LaLiga's IP blocking of shared Cloudflare addresses knocked innocent sites offline every match day, leading Cloudflare's CEO Matthew Prince to call the approach ["bonkers"](https://torrentfreak.com/cloudflare-ceo-football-piracy-blocks-will-claim-lives-i-pray-no-one-dies-250526/). The same RIPE study found most European piracy is hosted *in Europe*, which is where enforcement belongs: at the hosting provider.

**大规模屏蔽会造成真实的连带损害。** 法国并非唯一的案例。意大利的 Piracy Shield 系统在 2024 年 10 月[让全国大部分地区无法访问 Google Drive](https://torrentfreak.com/google-drive-blackout-in-italy-after-another-major-anti-piracy-blunder-241020/)。对 Piracy Shield 的 A 发现，有超过 500 个无关网站被屏蔽，并得出结论称"IP 层面的屏蔽是一种不加区分的手段，其后果超过了它带来的好处"。在西班牙，LaLiga 对 Cloudflare 共享 IP 地址的屏蔽，导致每个比赛日都有无辜网站被迫下线，这使得 Cloudflare 首席执行官 Matthew Prince 将该做法称为 ["bonkers"](https://torrentfreak.com/cloudflare-ceo-football-piracy-blocks-will-claim-lives-i-pray-no-one-dies-250526/)。同一项 RIPE 研究发现，欧洲的大部分盗版内容*托管在欧洲*，而这正是执法应当发生的地方：在托管服务商处。

> Measured by its own goals, the French system has a mixed record. Arcom [reports](https://fr.themedialeader.com/moins-de-piratage-en-2025-selon-un-rapport-de-larcom/) 12,606 sports domains blocked since 2022, 6,496 of them in 2025 alone (up 71%), while piracy fell 4% in 2025 and 34% since 2021. The number of blocks is growing much faster than piracy is shrinking, and Arcom's figures don't separate the effect of resolver blocking from ISP blocking. Every one of those domains has to be found, blocked, and then found again when it reappears under a new name. OONI's [2025 measurement of French ISP blocking](https://ooni.org/post/2025-france-report/) found that of 542 domains tested, 291 were blocked by at least one ISP but only 132 by all four. The European Commission's own [2025 assessment](https://ec.europa.eu/transparency/documents-register/api/files/SWD%282025%29384_0/090166e525475ec4) of its live-events piracy [recommendation](https://eur-lex.europa.eu/eli/reco/2023/1018/oj) concluded the effects "have been limited and have not allowed to significantly curb the volume of online piracy of live events."

以其自身目标衡量，法国体系的表现喜忧参半。Arcom [报告](https://fr.themedialeader.com/moins-de-piratage-en-2025-selon-un-rapport-de-larcom/)称，自 2022 年以来已有 12,606 个体育域名被封禁，仅 2025 年就有 6,496 个（增长 71%），而 2025 年盗版下降了 4%，自 2021 年以来下降了 34%。封禁数量的增长速度远快于盗版减少的速度，而 Arcom 的数据并未区分 resolver 封禁与 ISP 封禁各自的效果。每一个此类域名都必须先被发现、被封禁，之后当其以新名称重新出现时又必须再次被发现。OONI 的 [2025 年法国 ISP 封禁测量](https://ooni.org/post/2025-france-report/)发现，在测试的 542 个域名中，291 个至少被一个 ISP 封禁，但仅有 132 个被全部四家 ISP 封禁。欧盟委员会对其现场赛事盗版 [建议](https://eur-lex.europa.eu/eli/reco/2023/1018/oj)的自身 [2025 年评估](https://ec.europa.eu/transparency/documents-register/api/files/SWD%282025%29384_0/090166e525475ec4)得出结论：效果“有限，未能显著遏制现场赛事在线盗版的数量”。

> ## What France loses

法国失去什么？

> Driving Quad9 out of France doesn't hurt pirates at all. The people who lose are the ones who chose a resolver for security.

将 Quad9 逐出法国对盗版者毫无影响。真正受损的是那些出于安全考虑而选择该解析器的用户。

> - **French users lose a malware filter.** Quad9 exists to stop people resolving phishing and malware domains. Users who move to an unfiltered resolver, or to their ISP's resolver, lose that protection. Users who move to an unknown free resolver may be [trading it for one that sells their browsing data](https://blog.cloudflare.com/quad9-withdrawal-from-france/). As Cloudflare puts it, "Penalizing transparent services only pushes users toward less accountable corners of the web."
> - **Critical infrastructure may break silently.** Hospitals, utilities and local authorities on Quad9's list will lose DNS if their IT teams miss the announcement. Embedded devices with 9.9.9.9 hard-coded may be hard to fix.
> - **The choice of resolvers shrinks.** OpenDNS left France in 2024, and Quad9 leaves now. An Internet Society report [cited by TorrentFreak](https://torrentfreak.com/dns-resolver-quad9-rejects-french-piracy-blocks-weighs-exit-as-bein-seeks-up-to-e580k-a-day/) warned that small and non-profit resolvers are the most likely to be pushed out, leaving the field to the largest companies, which can afford to fight or to build per-country infrastructure. Cloudflare can satisfy the court by blocking at its CDN; Quad9 has only a resolver.
> - **France's own digital sovereignty goals suffer.** France promotes privacy-respecting European infrastructure, yet its courts are driving out a Swiss privacy-focused non-profit while US giants remain.

- **法国用户失去了一个恶意软件过滤器。** Quad9 旨在阻止人们解析钓鱼和恶意软件域名。移动到未过滤的解析器，或移动到其 ISP 的解析器，的用户将失去该保护。移动到未知免费解析器的人可能会 [用一个出售他们浏览数据的去交换](https://blog.cloudflare.com/quad9-withdrawal-from-france/)。正如 Cloudflare 所说，“惩罚透明服务只会把用户推向网络中不太负责任的角落。”
- **关键基础设施可能被静默破坏。** 位于 Quad9 列表中的医院、公用事业和地方当局如果其 IT 团队漏掉了公告，将失去 DNS。带有硬编码 9.9.9.9 的嵌入式设备可能难以修复。
- **解析器的选择会减少。** OpenDNS 于 2024 年离开法国，而 Quad9 现在也离开了。Internet Society 的一份报告 [据 TorrentFreak 报道](https://torrentfreak.com/dns-resolver-quad9-rejects-french-piracy-blocks-weighs-exit-as-bein-seeks-up-to-e580k-a-day/) 警告称，小型和非营利性解析器最有可能被推动出去，剩下领域将由最大的公司占据，这些公司可以负担得起战斗或建设按国家基础设施。Cloudflare 可以通过在其 CDN 中进行阻止来满足法院；而 Quad9 只有一个解析器。
- **法国自身的数字主权目标也会受影响。** 法国虽然推广尊重隐私的欧洲基础设施，却让其法院驱逐了专注隐私的瑞士非营利组织，而美国巨头仍然存在。

> ## It's not just France

这不仅仅是法国

> Quad9 is the clearest casualty so far, but the same process is underway across Europe.

Quad9 是目前唯一明确的受害者，但同样的情况正在整个欧洲蔓延。

> - **Belgium:** DAZN obtained an order against Cloudflare, Google and Cisco in March 2025, and [OpenDNS left Belgium](https://torrentfreak.com/opendns-quits-belgium-under-threat-of-piracy-blocks-or-fines-of-e100k-per-day-250416/) in April 2025 before returning when the order against Cisco was suspended. In August 2026, the Brussels business court [upheld the core of the order](https://torrentfreak.com/court-upholds-belgian-pirate-dns-blocking-order-opendns-exit-looms/), with fines of €100,000 per match day capped at €20 million per company. Cisco says its public DNS "does not allow for the implementation of selective, geolocated and dynamic blocking as required by the order." Cloudflare, Google and Cisco have [appealed](https://blog.cloudflare.com/quad9-withdrawal-from-france/) ahead of the January 2027 deadline.
> - **Italy:** AGCOM [fined Cloudflare €14.2 million](https://torrentfreak.com/italy-fines-cloudflare-e14-million-for-refusing-to-filter-pirate-sites-on-public-1-1-1-1-dns/) in January 2026, 1% of its global revenue, for not blocking via 1.1.1.1. Prince threatened to pull servers and free services from Italy: "Play stupid games, win stupid prizes."
> - **Spain:** A Barcelona court [upheld LaLiga's right](https://torrentfreak.com/judge-confirms-laligas-right-to-block-cloudflare-in-pursuit-of-iptv-pirates-250328/) to block Cloudflare IP addresses.
> - **Germany** is the counter-example. Courts there rejected resolver blocking for both [Quad9](https://freiheitsrechte.org/quad9-Eng/) and [Cloudflare](https://blog.cloudflare.com/latest-copyright-decision-in-germany-rejects-blocking-through-global-dns-resolvers/).
> - **The EU level:** A study commissioned by the European Parliament's legal affairs committee [proposes a binding regulation](https://torrentfreak.com/eu-study-block-live-sports-piracy-in-30-minutes-across-dns-resolvers-vpns-and-cdns/) that would require blocking within 30 minutes across DNS resolvers, VPNs and CDNs. John Todd's [warning on Hacker News](https://news.ycombinator.com/item?id=50539856) is that "the EU and EC are looking at this issue right now and I expect will look to France as a case study of how to do things for the rest of the region."

- **比利时：** DAZN 于 2025 年 3 月取得针对 Cloudflare、Google 和 Cisco 的命令；2025 年 4 月，[OpenDNS 退出比利时](https://torrentfreak.com/opendns-quits-belgium-under-threat-of-piracy-blocks-or-fines-of-e100k-per-day-250416/)，随后在对 Cisco 的命令被暂停后恢复。2026 年 8 月，布鲁塞尔商事法院[维持了该命令的核心内容](https://torrentfreak.com/court-upholds-belgian-pirate-dns-blocking-order-opendns-exit-looms/)，其中每个比赛日罚款 10 万欧元，每家公司上限为 2000 万欧元。Cisco 表示，其公共 DNS“无法实现该命令所要求的、具有选择性、基于地理位置且动态的屏蔽。”Cloudflare、Google 和 Cisco 已在 2027 年 1 月的截止日期前[提出上诉](https://blog.cloudflare.com/quad9-withdrawal-from-france/)。
- **意大利：** AGCOM 于 2026 年 1 月[对 Cloudflare 罚款 1420 万欧元](https://torrentfreak.com/italy-fines-cloudflare-e14-million-for-refusing-to-filter-pirate-sites-on-public-1-1-1-1-dns/)，相当于其全球收入的 1%，原因是通过 1.1.1.1 未进行屏蔽。Prince 威胁要从意大利撤出服务器和免费服务：“犯蠢，就得承担蠢后果。”
- **西班牙：** 一家巴塞罗那法院[维持了 LaLiga 的权利](https://torrentfreak.com/judge-confirms-laligas-right-to-block-cloudflare-in-pursuit-of-iptv-pirates-250328/)，即屏蔽 Cloudflare IP 地址。
- **德国**是反例。那里的法院驳回了针对 [Quad9](https://freiheitsrechte.org/quad9-Eng/) 和 [Cloudflare](https://blog.cloudflare.com/latest-copyright-decision-in-germany-rejects-blocking-through-global-dns-resolvers/) 的解析器屏蔽。
- **欧盟层面：** 欧洲议会法律事务委员会委托的一项研究[提出了一项具有约束力的法规](https://torrentfreak.com/eu-study-block-live-sports-piracy-in-30-minutes-across-dns-resolvers-vpns-and-cdns/)，要求在 DNS 解析器、VPN 和 CDN 上于 30 分钟内实施屏蔽。John Todd [在 Hacker News 上的警告](https://news.ycombinator.com/item?id=50539856)是：“欧盟和欧盟委员会目前正关注这一问题，我预计它们会把法国作为案例研究，看看如何为其他地区落实相关做法。”

> That is why France matters beyond France. If its model becomes the EU template, every public resolver in Europe will face the choice Quad9 faced: lie to all users worldwide, build unreliable geolocation infrastructure, or leave.

正因为法国在法国之外依然重要。 如果它的模型成为欧盟模板，欧洲的每一位公共解决者将面临 Quad9 所面临的选择：向全世界用户撒谎、构建不可靠的定位基础设施，或者离开。

> ## The counter-arguments

## 反驳意见

> The Hacker News discussion wasn't one-sided, and the counter-arguments deserve answers.

Hacker News 讨论并非单方面，反驳理据值得回应.

> **"Hosting providers are unreachable, so courts move up the chain."** [One commenter](https://news.ycombinator.com/item?id=50544187) argued that pirate hosts are bulletproof and ignore courts, so going after the intermediaries is the only lever left. [Another](https://news.ycombinator.com/item?id=50541515) asked the Quad9 CTO directly where the problem *should* be attacked. This is the strongest point. But the RIPE data shows most of the hosting is in Europe and within reach of European courts, and the commenter's logic leads to blocking at the last link in the chain that cannot fight back. That is not the same as the link that can actually stop the infringement.

**主机提供商不可达，法院向上移动链条。** [One commenter](https://news.ycombinator.com/item?id=50544187) 认为海盗主机是防弹的并且忽视法院，因此针对中间商是唯一剩下的杠杆。 [Another](https://news.ycombinator.com/item?id=50541515) 直接向Quad9 CTO提问，问题*应该*在哪里攻击。这是最强的论点。但RIPE数据显示大部分主机位于欧洲，且在欧洲法院的管辖范围内，评论者的逻辑导致在链条上最后一环被阻断，而这正是不能反击的环节。这与实际能够遏止侵权的环节不同。

> **"Friction works. Most people won't bother to switch."** [Some argued](https://news.ycombinator.com/item?id=50543599) that DNS blocking is good *because* it nudges the majority while staying easy to bypass for those who know how. The Paris Court of Appeal used essentially this reasoning. But Arcom's numbers say a fifth of French users already use alternative DNS, the friction is gone the moment one person changes a router setting for a household, and the cost is paid by resolvers that never had anything to do with piracy.

**“摩擦是有效的。大多数人不会费心切换。”** [有人主张](https://news.ycombinator.com/item?id=50543599) 认为 DNS 屏蔽是好的，*因为* 它会推动大多数人，同时对于知道怎么做的人来说仍然容易绕过。巴黎上诉法院基本上采用了同样的理由。但 Arcom 的数据显示，五分之一的法国用户已经在使用替代 DNS，只要家庭中有一个人更改了路由器设置，摩擦就会消失，而代价由与盗版毫无关系的解析器承担。

> **"Cloudflare is a hypocrite."** [Several commenters](https://news.ycombinator.com/item?id=50540871) pointed out that Cloudflare's CDN fronts many pirate sites. That may be true, and it is an argument about Cloudflare's CDN, which French courts can already reach and have. It says nothing about whether a resolver should lie.

**Cloudflare 是一个伪君子。** [几位评论者](https://news.ycombinator.com/item?id=50540871)指出， Cloudflare 的 CDN 为许多盗版网站提供支持。这或许是真的，这是一个关于 Cloudflare CDN 的争论，法国法院已经可以（并且已经）对它进行裁决。但这并不能说明一个解析器是否应该说谎。

> **"The yellow pages would be held responsible."** [One commenter](https://news.ycombinator.com/item?id=50542940) asked whether we'd accept a phone directory that kept listing a drug dealer's new address. The analogy fails because a resolver is not a curated directory. It's closer to the operator who connects you to whatever number you dial. Quad9 has "no association with these domain names, nor with the operators of the websites." Making the operator liable for every number dialled is how you end up with no operator.

**"黄页也会因此被追究责任。"** [一位评论者](https://news.ycombinator.com/item?id=50542940)问道，我们能否接受一本不断刊登毒贩新地址的电话簿。这个类比并不成立，因为 resolver 并非一份经过人工整理编排的目录。它更接近接线员——无论你拨的是什么号码，都负责为你接通。Quad9 表示，它"与这些域名，以及与这些网站的运营者均无关联"。让接线员为用户拨打的每一个号码承担责任，最终的结果就是再没有人愿意做接线员。

> ## What you can do

您可以做什么

> **If you use Quad9 in France**, check whether you do at [on.quad9.net](https://on.quad9.net/), and switch resolvers before November 24. Check routers, VPN configs, DHCP settings, Pi-hole upstreams, and any devices with 9.9.9.9 or 149.112.112.112 hard-coded. Whatever you switch to, read its privacy policy first.

如果您在法国使用 Quad9，请访问 [on.quad9.net](https://on.quad9.net/) 检查您是否在使用它，并在 11 月 24 日之前切换解析器。检查路由器、VPN 配置、DHCP 设置、Pi-hole 上游服务器，以及任何硬编码了 9.9.9.9 或 149.112.112.112 的设备。无论您切换到什么解析器，请先阅读其隐私政策。

> **If you're in France or the EU**, do what John Todd asked: [write something long-form](https://news.ycombinator.com/item?id=50539856), ideally in French, make it indexable, and send it to your representatives. Quad9 specifically suggests telling [Arcom](https://www.arcom.fr/) that its mandate is to balance rightsholders' interests against citizens' digital rights, and that "balance cannot be claimed when the privacy and security of digital users are the collateral damage."

**如果你在法国或欧盟**, 按照 John Todd 的要求：[write something long-form](https://news.ycombinator.com/item?id=50539856), 理想地用法语，使其可被索引，并发送给你们的代表。Quad9 具体建议 告知 [Arcom](https://www.arcom.fr/)，其使命是平衡 rightsholders' 利益与公民的数字权利，并且 "balance cannot be claimed when the privacy and security of digital users are the collateral damage."

> **If you work on infrastructure**, push for transparency wherever blocking does happen. RFC 8914's "Censored" error code exists so users can tell a court-ordered block from a broken network.

**如果你从事基础设施工作**，请在发生阻塞时推动透明度。RFC 8914 的 "Censored" 错误代码，旨在让用户能够区分法院命令施加的封锁与网络故障。

> **If you can afford it**, Quad9 accepts [donations](https://quad9.net/donate/) for its legal defence. Its appeal against the May order is still pending at the Paris Court of Appeal.

**如果负担得起**，Quad9 接受用于其法律辩护的[捐款](https://quad9.net/donate/)。其针对五月命令的上诉仍在巴黎上诉法院待审。

> ## The canary

## 金丝雀

> Quad9 [put it this way](https://quad9.net/news/blog/au-revoir-france/): "Once the tools of censorship are built, they are rarely used sparingly or justly." The French system started with football. It now covers tennis, rugby, MotoGP and Formula 1, has expanded from ISPs to resolvers, VPNs, CDNs and search engines, and runs through an automated system in which no human approves each block. Each step was reasonable on its own. Together, they have pushed a non-profit security service out of the country while the piracy continues.

Quad9 [put it this way](https://quad9.net/news/blog/au-revoir-france/): "一旦 审查工具 被 构建，它们 就 很少 被 节制地 或 公正地 使用”。 法国 系统 最初 从 足球 开始。它 现在 覆盖 网球、 橄榄球、 MotoGP 和 Formula 1，已 从 ISP 扩展到 解析器、 VPNs、 CDNs 和 搜索引擎，并 通过 一个 自动化 系统，其中 没有人 类 审核 每个 封禁。每 一 步 单独 看 都 合情合理。合起来，它们 推出 了 非营利 安全 服务 出国，而 盗版 持续 进行。

> The sports-rights industry has a real problem. DNS resolvers are the wrong place to solve it, and France is about to find out what the internet looks like when the trustworthy resolvers leave first.

体育版权行业面临着一个棘手的问题。DNS 解析器并非解决该问题的恰当场所，而法国即将亲身体验当可信解析器率先离场时，互联网会变成什么样。
