---
title: 'Quad9 从法国撤走了其 DNS 服务'
date: 2026-11-25T13:16:16+08:00
draft: false
source: "Hacker News"
originalTitle: 'A public and free DNS service for a better security and privacy'
originalUrl: "https://quad9.net/news/blog/quad9-service-deactivation-in-france/"
hnUrl: ""
points: 
comments: 
---

> ## Quad9 Service Deactivation in France

## Quad9 在法国停止服务

![](https://quad9.net/news/blog/quad9-service-deactivation-in-france/french-announcement-image.png)

> ###### (en français)

###### （法文）

> Today, November 24 2026, Quad9 will disable services for French users. This means any query reaching any Quad9 service address will be refused, and no DNS resolution will be successful. Our planned deactivation will be at 09:00 Central European (Paris) Time, to try to give users who are unaware a chance to respond quickly instead of having services down outside of normal business hours.

今天，2026 年 11 月 24 日，Quad9 将停用 French 用户的服务。这意味着任何到达任何 Quad9 服务地址的查询都将被拒绝， 且无法成功解析 DNS。我们的计划在 09:00 Central European (Paris) Time 进行停用，以便让 unaware 用户有机会快速响应，而不是在非工作时间服务不可用。

> We are unhappy to have reached this impasse. For those of you seeing this for the first time, see [our announcement of this deactivation](https://quad9.net/news/blog/au-revoir-france/) from one month ago.

我们对陷入这样的僵局感到遗憾。对于第一次看到这条消息的人，请查看我们一个月前发布的[关于此次停用的公告](https://quad9.net/news/blog/au-revoir-france/)。

> ## The Summary

## 摘要

> We have received demands from beIn (a sports rightsholder company) to block various domains they claim to be related to piracy streaming sites, so users in France cannot resolve those DNS names. Currently, the courts have upheld beIn’s demands, and we have faced fines for non-compliance. We are entirely opposed to piracy, but Quad9 has nothing to do with the piracy sites. This is an attempt to force us to be part of an enforcement regime against third parties.

我们已收到 beIn (a sports rightsholder company) 的要求，要求其屏蔽各种与他们声称相关的盗版流媒体网站的域名，因此法国的用户无法解析这些 DNS 名称。目前，法院已支持 beIn 的要求，我们因此面临了非合规处罚。我们完全反对盗版，但 Quad9 与这些盗版网站无关。这是一种试图迫使我们将自己置于针对第三方的执法制度之中的做法。

> We have a fundamental opposition to using recursive DNS providers as a tool in this or any other content blocking campaign. Putting demands on recursive resolvers has no effect on the origin servers that deliver objectionable content. Attacking recursive resolvers is a futile and [counter-productive effort](https://torrentfreak.com/inside-a-french-piracy-blocklist-expired-domains-a-seized-site-and-hong-kong-servers/), but that explanation is not understood. The policymakers and courts of France may of course make any determination they wish, even those that seem ineffective or damaging in our view. We wish to remain within legal requirements where it is necessary. We have our own strict views of what we do and what services we deliver. Because there is a mismatch between the case outcome and our mission, we must withdraw from France to remain in compliance with both law and our internal guidelines.

我们基本反对使用递归域名系统提供者作为本次或任何其他内容屏蔽活动的工具。对递归解析器的要求对源服务器无效，源服务器交付不良内容。攻击递归解析器是一个徒劳且[counter-productive effort](https://torrentfreak.com/inside-a-french-piracy-blocklist-expired-domains-a-seized-site-and-hong-kong-servers/)，然而这种解释并不被理解。政策制定者和法院可以随意做出任何决定，即便在我们看来似乎无效或有害。我们在必要时遵守法律要求。我们对自己的所作所为和提供的服务有着严格的看法。由于案件结果与我们的使命不匹配，我们必须撤出法国，以同时遵守法律和我们的内部指南。

> This is a terrible outcome, but it imposes the least amount of harm viewed over time longer than the duration of this case. We understand this will cause harm in the short term: users who do not know of our withdrawal will find our services unexpectedly unavailable. Users who have to move to different resolvers will not be protected by our cybersecurity capabilities, and they may choose to use resolvers that are less privacy-focused than Quad9.

这是一个糟糕的结果，但它在长期内造成的伤害最小，超出了本案的持续时间。我们理解这将在短期内造成伤害：用户若不知我们的撤销，将会发现我们的服务意外不可用，用户若需迁移至不同解析器，将失去我们的网络安全保护，可能会选择隐私性不如 Quad9 的解析器。

> ## Repeating the Obvious

## 重申显而易见的道理

> We object to the core premise of the legal arguments, which is the false assertion that recursive DNS can or should be used as a method to prevent piracy or any other type of content access. Our position is this is not effective or useful, as we have no monopoly on recursive DNS, and anyone can set up their own resolver in just a few seconds (though without the privacy and malicious content protection that Quad9 offers). The courts and plaintiff have not considered this argument and ignore it entirely in the judgement. Their interest is focused on the possibility for us to do what is demanded, even if it has results outside of France, and their interest is not in why that is unjust or unwise or ineffective. So, we will continue to argue with a refutation of our ability to do this accurately without applying French law to all other European nations and the world.

我们反对法律论证的核心前提，该前提是错误的主张，即递归 DNS 可以或应该被用作防止盗版或其他任何内容访问的手段。我们的立场是这并不有效或有用，因为我们不对递归 DNS 拥有垄断权，任何人都可以在几秒钟内设置自己的解析器（尽管缺乏 Quad9 提供的隐私和恶意内容保护）。法院和原告没有考虑这一论证，并在判决中完全忽视它。他们的关注点在于我们能否完成所要求的内容，即使它会产生法国以外的结果，他们的关注点并不在于此为何不公正、不智或无效。因此，我们将继续以对我们能够准确完成此任务而无需将法国法律适用于其他所有欧洲国家和全世界的能力进行反驳。

> ## How Our Withdrawal Will Work

## 我们的提现将如何进行

> There is an understandable focus on how Quad9 is going to block “French users” when we do not collect user information and have also claimed that geoIP blocking is insufficient for selectively denying resolution for certain names. We understand this seemingly apparent paradox, so we will expand on it as it is a question that is frequently repeated.

有一种容易产生的关注点，即 Quad9 将如何在我们不收集用户信息的情况下阻断 “French users”，并且我们还声称 geoIP 拦截不足以针对特定名称进行选择性拒绝解析。  
我们理解这似乎是一个明显的悖论，因此我们将进一步阐述它，因为这个问题经常被反复提出。

> Our geoIP-based method to identify and deny service to French users is inexact. We are aware that our methods to geographically locate users and declare they are in France is quite imprecise - this is inevitable. By using these methods, we will create conditions of overblocking, where we accidentally classify some queries as being from France when they are not from France, and it will also result in conditions of underblocking, where we do not correctly identify some queries as being from France and inappropriately complete those requests even though the user is in French jurisdiction. This imprecision is a core component of our case: there is no legally accurate way for us to determine what queries are from users located in France versus what queries are from users not in France. But we have no other mechanism - it simply does not exist.

我们基于 geoIP 识别并拒绝向法国用户提供服务的方法并不精确。我们清楚，我们用于对用户进行地理定位并判定其位于法国的方法相当不精确——这是不可避免的。使用这些方法会造成过度屏蔽（overblocking）的情况：我们会误将某些查询归类为来自法国，而它们实际上并非来自法国；这也会造成屏蔽不足（underblocking）的情况：我们未能正确识别某些查询来自法国，并在用户处于法国司法管辖区时不适当地完成这些请求。这种不精确性是我们论点的核心组成部分：我们无法以法律上准确的方式确定哪些查询来自位于法国的用户，哪些查询来自不在法国的用户。但我们没有其他机制——它根本不存在。

> These geoIP lists are inaccurate in two dimensions: firstly, IP geolocation data are often imprecise or just plain wrong, as IP geolocation is not an exact science. Mobile operators span national boundaries, corporate WANs split networks across nations, IP addresses are bought and sold frequently, and network operators shift allocations across borders. These are just a few of many other examples of how geoIP association may not be accurate. Secondly, **IP location does not necessarily equate to user location,** geoIP data only is a guess as to the location of the IP address, not the location of the end user. VPNs may exit in France but have the majority of their users in other nations; corporate users in one nation may egress in another due to proxies or internal DNS service distribution - there is *nothing* about a query that has any indication of the jurisdiction of the origin of the query itself.

这些 geoIP 列表在两个维度上都不准确：首先，IP 地理位置数据通常不精确，甚至完全错误，因为 IP 地理定位并非一门精确的科学。移动运营商跨越国界，企业 WAN 将网络分布在多个国家，IP 地址频繁买卖，网络运营商跨国调整分配。这些只是 geoIP 关联可能不准确的众多示例中的一小部分。其次，**IP 位置不一定等同于用户位置**，geoIP 数据仅仅是对 IP 地址位置的推测，而非终端用户的位置。VPN 可能在法国出口，但其大多数用户可能在其他国家；一国的企业用户可能因代理或内部 DNS 服务分发而在另一国出口 —— 查询本身*没有任何特征*能指示查询来源的司法管辖区。

> The data is imprecise, but we do not know to what level it is imprecise. So we must work with what we have.

数据并不精确，但我们不知道其不精确的程度。因此，我们只能基于现有数据进行工作。

> ## Why Not Block With This Method?

## 为什么不用这种方法进行 Block？

> We could apply this same geoIP filter database to selectively block French users from reaching the sites we have been told to make unavailable, but this would corrupt our core premise which is that the DNS is not the right mechanism for this blocking to happen. If we comply within France to meet the requirement then we accept the worst eventual outcome for users - we lose our integrity and still do not have legally perfect coverage, plus we will inevitably apply French rulings across borders into other nations. We wish to first remain consistent with our core mission which is to only block cyber risks to end users and not content. Secondarily, we must remain as close to compliance as we can to the legal constraints put upon us.

我们可以将这个相同的 geoIP 过滤器数据库用于有选择地阻止法国用户访问我们被告知需要让其不可用的网站，但这样做会破坏我们的核心前提，即 DNS 并不是用于实现这种阻止的合适机制。如果我们遵守法国的要求，那么我们就接受了用户最坏的最终结果——我们会失去完整性，并且仍然无法获得在法律上完全覆盖，此外我们还不可避免会把法国的裁决跨境应用到其他国家。我们希望首先与我们的核心任务保持一致，即仅阻止面向最终用户的网络风险，而非内容。其次，我们必须尽可能接近遵守我们被施加的法律约束。

> By accepting even the smallest of the demands for blocking based on geoIP data, we would admit that such demands are permissible within our mission - that we accept to play a complicit role in aiding companies (or others) to create ineffective and mis-directed regimes of content constraint. We would be admitting that DNS blocking is a valid instrument for the piracy problem - *it is not*. We would be admitting we will do this for an ever-increasing number of names - *we will not*. We would be permitting these methods to be applied for more areas of content filtering such as moral, religious, social, or political reasons - *we must not*.

通过接受即使是基于地理位置信息（ geoIP ）数据的最小阻断要求之一，我们承认此类要求在我们的使命中是可接受的——我们接受扮演协助公司（或其他方）制造无效且误导性的内容限制机制的配合角色。 我们承认 DNS 阻断是应对盗版问题的有效手段——*它不是*。 我们承认我们将继续这样做，对越来越多的名称——*我们不会*。 我们允许这些方法被用于更多内容过滤领域，如道德、宗教、社会或政治原因——*我们绝不能*。

> So we accept there will be egregious overblocking/underblocking errors in our blockade of French users but would rather remain steadfast to our stated mission and principles to uphold the integrity of the DNS. We would rather there be a clear distinction made for users of our services: you receive the DNS as you (the user) expect, or if Quad9 is forced to pollute the service with unexpected and arbitrary number of fragmentation demands, then we will not offer the services at all.

因此，我们接受在对法国用户实施封锁时会出现严重的过度封锁/封锁不足错误，但宁愿坚定奉行我们既定的使命和原则，以维护 DNS 的完整性。我们宁愿为使用我们服务的用户划清明确的界限：要么您获得的是您（用户）所期望的 DNS；要么，如果 Quad9 被迫以数量不可预期且任意的分片请求来污染服务，那么我们宁愿完全不提供该服务。

> ## Doesn’t Quad9 Already Block Names?

## Quad9 是否已经阻塞名称？

> Quad9 blocks a set of cyber-threats on 9.9.9.9 (and secondary IPs) for end users, where the outcome would be an unexpected and harmful result to the end user (i.e., malicious software). Content blocking is explicitly not in that set. Quad9 has subjective editing on that set, as well - if we believe something is inappropriately categorized by our threat intelligence partners, then we can remove it at our discretion. Additionally, Quad9 also offers 9.9.9.10, which has no blocking of any kind - it is entirely open. The demands we have been given would enforce mandatory restrictions on *all our service* addresses, which then makes our statements of their functionality inconsistent with the reality that would be forced upon us. We will not accept that condition.

Quad9 对该集合也有主观编辑 - 如果我们认为我们的威胁情报合作伙伴对某事物进行了不恰当的分类，则我们可以自行决定将其移除。 此外，Quad9 还提供 9.9.9.10，其不阻止任何类型的内容 - 完全开放。 我们所受的要求将强制在 * 所有我们的服务 * 地址上实施强制性限制，这使得我们关于其功能的陈述与被强加的现实不一致。 我们不接受该条件。

> ## The Future Prospects

## 未来前景

> We take a long range and principled view to the outcome of this case and the others in line. There are unmistakable long-term risks to Quad9, to user privacy, and to potential fragmentation of the internet that are far beyond the current moment. To give in now would start ‘the beginning of the end’ and allow motion towards internet fragmentation that cannot be undone. We accept the risks and the pain that come with fighting where others in similar circumstances to ourselves must bend and compromise in this invisible card game where end users are not even at the table. We represent those users, and our nonprofit mission of public service is aptly unique by not representing any shareholders, products, or other interests other than the end user.

我们对本案及后续案件的结果持长远且原则性的立场。Quad9、用户隐私以及互联网碎片化面临显而易见的长期风险，其影响远超当下。此刻若选择妥协，将开启“终结的开端”，导致无法逆转的互联网碎片化进程。我们甘愿承担抗争带来的风险与代价，因为在处境相似的其他方不得不低头妥协的这场无形牌局中，终端用户甚至未获一席之地。我们代表这些用户，我们的非营利公共服务使命显得格外独特——我们不代表任何股东、产品，亦不代表除终端用户之外的任何其他利益。

> It is especially disturbing to us to be doing this for an issue (piracy) which we believe is not slowed at all by any involvement of recursive DNS, though the damage to the integrity and trust of the global namespace is significant.

尤其令我们感到不安的是，我们这样做是为了一个我们认为 recursive DNS 无论如何介入都丝毫不会使其放缓的问题（盗版），而对全球 namespace 的完整性与信任所造成的损害却是巨大的。

> We have seen [recent articles](https://www.article19.org/resources/france-dns-blocking-proposal-poses-a-threat-to-free-expression/) about extended blocking demands given to ISPs in France of social media or instant messaging sites, which we anticipate would be demanded of us as well if continued. It is quite clear to us the path that is being taken with these efforts: first create the mechanism, then expand the volumes of the mechanism (unconstrained rightsholder editing of the DNS), then expand the scope of prohibitions to other groups and for other reasons until there is effectively no limit to the number of editors or the reasons for DNS names to be deleted from recursive resolution. This contradicts our mission of delivery of trustworthy DNS results, and we believe this potential outcome to be antithetical to a free and open internet.

我们已经看到 [recent articles](https://www.article19.org/resources/france-dns-blocking-proposal-poses-a-threat-to-free-expression/) 关于 France 向互联网服务提供商 提供的社交媒体 或即时通讯 网站 的扩展封锁要求，我们预计如果持续下去，这些也将会成为对我们的要求。这对我们来说很清楚了，这些努力正在采取的路径是：首先创建机制，然后扩大机制的规模（对 DNS 无约束的权利持有人编辑），然后扩大禁止的范围到其他群体和其他原因，直到对递归解析中 DNS 名称被删除的编辑数量或原因没有了实际的限制。这与我们交付可信 DNS 结果的使命相矛盾，我们认为这个潜在结果与自由开放的互联网相悖。

> This is the second legal assault we have faced to see if the DNS can be slowly corrupted - we stood our ground and eventually [won in Germany](https://quad9.net/news/blog/quad9-turns-the-sony-case-around-in-dresden/); with the continued community sponsorship and support we hope to win here, too. We refuse to take even the smallest step towards building the machinery of mandatory DNS restriction, and we will not abandon our obligation to the security, privacy, and integrity we have said we will deliver to users worldwide. We deeply regret having to step back from France and hope we will be able to return some day and offer the same unfiltered services that the rest of the world enjoys.

这是我们面临的第二次法律攻击，旨在试探 DNS 是否会被逐步腐蚀——我们坚守立场，最终在 [德国胜诉](https://quad9.net/news/blog/quad9-turns-the-sony-case-around-in-dresden/)；在社区持续的赞助和支持下，我们希望此次也能获胜。我们拒绝朝着建立强制 DNS 限制机制的方向迈出哪怕最小的一步，也不会放弃对全球用户所做的安全、隐私和完整性的承诺。我们对不得不退出法国深感遗憾，并希望有一天能够重返当地，为用户提供与世界其他地区相同的无过滤服务。

> Legal battles like this drain time and resources away from building a better, safer internet. Your financial support is what keeps us in the fight—and keeps our services free and open for everyone. If you stand with us, please consider [donating](http://www.quad9.net/donate) or becoming a sponsor today.

像这样的法律纠纷会耗尽时间和资源，使我们无法致力于建设一个更好、更安全的互联网。你的资金支持让我们能够继续战斗，并让服务对所有人保持免费和开放。如果你与我们站在一起，请考虑今天[捐赠](http://www.quad9.net/donate)或成为赞助商。
