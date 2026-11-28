---
title: '热门购物网站中发现使用WebRTC的信用卡盗刷脚本'
date: 2026-11-28T11:54:42+08:00
draft: false
source: "Hacker News"
originalTitle: 'Credit card skimming scripts using WebRTC found on popular shopping sites'
originalUrl: "https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer"
hnUrl: ""
points: 
comments: 
---

> All the sites we contacted took action; but the larger consumer web ecosystem should be prepared to mitigate these attack vectors

我们联系的所有网站均已采取行动；但更广泛的消费级 Web 生态系统应做好准备，以缓解这些攻击向量。

> A card-skimming script was planted on the online stores of Lascana, Samsonite, American Tourister, Revolve and FWRD in the week before Black Friday. After our reports to affected companies, all have had the script removed (on November 24th or 25th) ahead of Black Friday. We observed it in action on one of the five websites: Lascana, where it sent our test card's details to a 3rd party. We believe the script was built to take a card number, expiry and security code, along with a user's name, address, phone and email, and send them to malefactors as a user entered their payment credentials. It did this before the store checked the payment, so a card could be taken even if the order was declined or cancelled, and nothing would look wrong to the shopper. Across all of these sites, we do not know how many, if any, shopper details or payment credentials may have been captured.

在黑色星期五前一周，在 Lascana、Samsonite、American Tourister、Revolve 和 FWRD 的在线商店中植入了 card-skimming script。 我们向受影响的公司报告后，所有公司均在 (on November 24th or 25th) 提前于 Black Friday 移除了该 script。 我们在 Lascana 这家网站上观察到其运行：Lascana，它将我们的 test card 详情发送给了一个 3rd party。 我们相信该 script 设计用于窃取 card number、expiry 和 security code，以及用户的 name、address、phone 和 email，并在用户输入 payment credentials 时将其发送给 malefactors。 它在 store 检查 payment 之前就执行了该操作，因此即使 order 被 declined 或 cancelled，card 仍可能被窃取，且对 shopper 而言一切看起来都正常。

![Illustration: a Black Friday checkout order summary with a Place order button, and a dotted line from the button to a red box labelled 'Not in your cart' listing card number, expiry, CVV, name, address, phone and email. Text: Is there extra code on your payment page? A skimmer hidden in the checkout of consumer websites attempts to skim card details over WebRTC, making detection more difficult.](https://www.infohawk.com/_app/immutable/assets/hero.Bde-_Sb9.png)

> Illustration: a Black Friday checkout order summary with a Place order button, and a dotted line from the button to a red box labelled 'Not in your cart' listing card number, expiry, CVV, name, address, phone and email. Text: Is there extra code on your payment page? A skimmer hidden in the checkout of consumer websites attempts to skim card details over WebRTC, making detection more difficult.

插图： Black Friday 结账订单摘要，包含一个‘下单’按钮，从按钮到一块标注为 'Not in your cart' 的红色框的点线，框内列出卡号、到期日、CVV、姓名、地址、电话和邮箱。

文本： 支付页面是否有多余代码？消费者网站的结账过程中隐藏的小偷（ skimmer ）试图通过 WebRTC 在支付页面窃取卡片信息，使检测更加困难。

> ## Which sites were affected

## 哪些网站受影响？

> | Consumer site | Delivery method | Status at time of publication |
> | --- | --- | --- |
> | Lascana [www.lascana.com](https://www.lascana.com/) | Altered Quorum<sup>*</sup> marketing pixel | Both Lascana and Quorum replied and removed the code on the 24th, see details below |
> | Samsonite [shop.samsonite.com](https://shop.samsonite.com/) | Edited Seers<sup>†</sup> cookie-banner setting | Neither party replied to us, but the code was removed on November 24th at 14:25 UTC |
> | American Tourister [shop.americantourister.com](https://shop.americantourister.com/) | Edited Seers<sup>†</sup> cookie-banner setting | Neither party replied to us, but the code was removed on November 24th at 14:25 UTC |
> | Revolve [www.revolve.com](https://www.revolve.com/) | Altered file on Revolve's own CDN | Revolve confirmed removal on November 25th |
> | FWRD [www.fwrd.com](https://www.fwrd.com/) | Altered file on Revolve's own CDN | Revolve confirmed removal on November 25th |

| 消费者网站 | 传递方式 | 发布时的状态 |
| --- | --- | --- |
| Lascana [www.lascana.com](https://www.lascana.com/) | 篡改的 Quorum<sup>*</sup> 营销像素 | Lascana 和 Quorum 均已回复，并于 24 日移除了代码，详见下文 |
| Samsonite [shop.samsonite.com](https://shop.samsonite.com/) | 篡改的 Seers<sup>†</sup> Cookie 横幅设置 | 双方均未回复，但代码于 11 月 24 日 14:25 UTC 被移除 |
| American Tourister [shop.americantourister.com](https://shop.americantourister.com/) | 篡改的 Seers<sup>†</sup> Cookie 横幅设置 | 双方均未回复，但代码于 11 月 24 日 14:25 UTC 被移除 |
| Revolve [www.revolve.com](https://www.revolve.com/) | 篡改 Revolve 自有 CDN 上的文件 | Revolve 确认于 11 月 25 日移除 |
| FWRD [www.fwrd.com](https://www.fwrd.com/) | 篡改 Revolve 自有 CDN 上的文件 | Revolve 确认于 11 月 25 日移除 |

> On November 24, we notified all of the named parties in this article and others, including: Amazon Web Services about the storage buckets serving the script, Cloudflare about the services the malefactor used, the domain registrars, the pixel vendor, the consent-banner provider and the affected retailers and platforms. Lascana replied to us and removed the Quorum pixel from their site by November 24th at 15:48 UTC. Quorum confirmed the identified malicious code was removed from their pixel tracker, and they restored the clean marketing pixel as of November 24th at 21:09 UTC.

我们 于 11 月 24 日 通知了本篇文章中被点名的所有当事方和其他相关方，包括：Amazon Web Services 关于提供该脚本的存储桶，Cloudflare 关于攻击者所使用的服务，域名注册商，像素供应商，同意横幅提供商，以及受影响的零售商和平台。Lascana 回复了我们，并于 11 月 24 日 15:48 UTC 之前将其网站上的 Quorum 像素移除了。Quorum 确认所识别的恶意代码已从其像素跟踪器中移除，并截至 11 月 24 日 21:09 UTC 恢复了干净的营销像素。

> Revolve provided this statement on behalf of REVOLVE and FWRD: *“On November 25, InfoHawk notified our team of a potential security issue impacting mobile and tablet versions of our websites which we resolved the same day. We appreciate the outreach, and are actively investigating the issue to determine any potential impact.”*

Revolve 代表 REVOLVE 和 FWRD 发表声明称：“11 月 25 日，InfoHawk 向我们团队通报了一个影响我们网站移动端和 tablet 版本的潜在安全问题，我们已在当天解决。感谢他们的报告，我们正在积极调查该问题以确定任何潜在影响。”

<sup>*</sup> Quorum is an ad-attribution platform that links ad views to store visits and online sales ([quorum.inc](https://quorum.inc/)).

<sup>†</sup> Seers is a cookie consent management platform and data privacy compliance company ([seers.ai](https://seers.ai/)).

> ## How the attack works

## 攻击如何工作

> This attack uses WebRTC, the technology that allows you to make video calls in your web browser. WebRTC lets a web page open its own channel to another party and pass data (e.g. audio/video packets) over it. It has likely been used (both to load the skimmer and to send the stolen card details out) because security rules and monitoring tools often do not watch this communications channel as closely. For example, [Meta briefly used WebRTC in a creative way in 2025](https://www.techradar.com/pro/security/meta-halts-phone-and-browser-tracking-tools-after-researchers-expose-user-tracking), according to researchers [looking at](https://www.cs.ru.nl/masters-theses/2026/R_te_Wechel___Misuse_of_WebRTC_on_the_Web_A_Measurement_Study.pdf) the technology as a compromise vector. This form of attack appears to target mobile devices, and we only saw the server enable the skimmer on checkout pages, so desktop checks and homepage scans would likely not see it. The skimmer's traffic appeared to run through Cloudflare's relay, so it would blend in with the WebRTC traffic and hide its true endpoint.

本次攻击使用 WebRTC，允许您在网页浏览器中进行视频通话的技术。WebRTC 让网页可以打开自己的通道与另一方通信，并在此传输数据（例如 audio/video packets）。它可能已被用于（同时加载 skimmer 并外发被盗的卡片详细信息），因为安全规则和监控工具往往不仔细监控此类通信信道。例如，[Meta briefly used WebRTC in a creative way in 2025](https://www.techradar.com/pro/security/meta-halts-phone-and-browser-tracking-tools-after-researchers-expose-user-tracking)，据研究人员[looking at](https://www.cs.ru.nl/masters-theses/2026/R_te_Wechel___Misuse_of_WebRTC_on_the_Web_A_Measurement_Study.pdf) 该技术作为妥协向量。此类攻击似乎针对移动设备，且我们仅在结账页面观察到服务器启用了 skimmer，因此桌面检查和主页扫描可能不会检测到它。Skimmer 的流量似乎通过 Cloudflare 的中继运行，以便与 WebRTC 流量混合，从而隐藏其真实终点。

> ### The skimmer and card details both traveled over WebRTC

### 读卡器和卡信息均通过 WebRTC 传输

> How the kit is designed to work on a store page, in 7 steps. Only step 4 is an ordinary web request, which a `connect-src` rule can block; steps 5 to 7 run over the WebRTC data channel, outside `connect-src`.

该工具包在商店页面上的工作原理，共分 7 步。只有第 4 步是普通的 Web 请求，可通过 `connect-src` 规则拦截；第 5 步至第 7 步则通过 WebRTC 数据通道运行，位于 `connect-src` 的管控范围之外。

> 1. Store page
> 	### Bootstrapping the attack
> 	The loader gets onto the page through a consent-banner setting, a retailer CDN file, a shared marketing pixel or the store's own HTML.
> 2. Store page
> 	### Loading scripts from S3 buckets
> 	It loads `Insds.js` or `gtage.js` from an Amazon S3 bucket.
> 3. Store page
> 	### Targeting the attack to mobile checkouts
> 	It runs only on small or touch screens. The Samsonite version runs on `/checkout` only.
> 4. Web request · connect-src can block it
> 	### Establishing the WebRTC connection
> 	`GET /_cf/ice` fetches the relay details, and `POST /_cf/rel` sends the WebRTC offer, to a brand-named `northbridgeads[.]com` host.
> 5. WebRTC data channel · outside connect-src
> 	### Data exchange via TURN relay
> 	Every exchange that returned relay details used `turn.cloudflare.com`. The malefactor's answers listed only Cloudflare relay addresses; through that relay it sends code and receives data.
> 6. WebRTC data channel · code in
> 	### Attack code is loaded and executed
> 	The skimmer arrives in chunks over the channel, is checked against a SHA-256 digest, then run with `eval`.
> 7. WebRTC data channel · data back
> 	### Data goes back the same way
> 	At Lascana's checkout<sup>‡</sup>, the skimmer sent our test card details this way.

1. Store page  
### Bootstrapping the attack  
加载器 通过 consent-banner 设置、零售商 CDN 文件、共享营销像素或店铺自己的 HTML 页面获取。  

2. Store page  
### Loading scripts from S3 buckets  
它 从 Amazon S3 bucket 加载 `Insds.js` 或 `gtage.js`。  

3. Store page  
### Targeting the attack to mobile checkouts  
它仅在 small 或 touch 屏幕上运行。Samsonite 版本仅在 /checkout 运行。  

4. Web request · connect-src can block it  
### Establishing the WebRTC connection  
GET /_cf/ice 获取继电器详情，和 `POST /_cf/rel` 发送 WebRTC 提议，向 品牌名 `northbridgeads[.]com` 主机。  

5. WebRTC data channel · outside connect-src  
### Data exchange via TURN relay  
每次返回继电器详情的交换都使用 `turn.cloudflare.com`。 攻击者的答案仅列出 Cloudflare 继电器地址； 通过该继电器它发送代码并接收数据。  

6. WebRTC data channel · code in  
### Attack code is loaded and executed  
skimmer 通过信道分块到达，随后经 SHA-256 摘要校验，再使用 `eval` 执行。  

7. WebRTC data channel · data back  
### Data goes back the same way  
在 Lascana 的 checkout<sup>‡</sup> 处，skimmer 通过此方式发送我们的测试卡详情。

<sup>‡</sup> This was the only example of live card details being sent off-site that we captured.

> ### Worried that your card was compromised?

### 担心您的卡片被泄露？

> Check your recent statements for charges you don't recognize, especially on debit cards. Call your bank or card issuer right away, report the fraud and ask for a new card number. Follow up with a written dispute within 60 days of the statement that shows the charge.

检查近期账单，找出你不认识的扣款项目，尤其是借记卡上的交易。立即致电银行或发卡机构，报告欺诈行为，并申请更换新的卡号。在显示该笔扣款的账单出具后 60 天内，补交一份书面争议申请。

> Our understanding of US federal law is that your liability for unauthorized credit card charges is capped at $50, and is generally zero if only your card number was stolen, as in a skimming attack like this one. Debit cards have weaker protections that depend on how quickly you report, so act fast. For more information, see “[Additional resources](#resources)” below.

我们的对美国联邦法律的理解是，您因未经授权的信用卡交易可能承担的责任最高为 50 美元，如果只是像这次这样的 skimming 攻击那样，只有您的卡号被盗，那么通常责任为零。借记卡的保护措施较弱，具体取决于您报告的速度，因此请迅速行动。更多信息，请参阅下文中的 “[附加资源](#resources)”。

> ## What site owners should immediately do

## 站点所有者应立即采取的措施

> On every page that takes payment, set a `connect-src` rule that lists only the hosts you use.

在每个接收付款的页面上，设置一个仅列出你所使用的主机的 `connect-src` 规则。

> That blocks the two web requests the script needs before WebRTC opens. Without them the skimmer never arrives, whichever file was tampered with.

这会阻止脚本在 WebRTC 打开之前所需的两个 web 请求。没有它们，skimmer 永远不会到达，无论哪个文件被篡改。

> ## What security teams should look for

## 安全团队应关注的内容

> We saw the skimmer delivered in three different ways across five websites run by different companies, and all of them appear to rely on the same attacker infrastructure. That makes it likely that other sites are affected too, so we encourage online retailers to check their own sites for the signs below.

我们注意到，这一 skimmer 在五家由不同公司运营的五个网站上以三种不同方式交付，并且所有这些似乎都依赖于相同的攻击者基础设施。这使得其他网站也很可能受到影响，因此我们鼓励在线零售商检查自己的网站是否存在以下迹象。

> 1. **Script sources:** search page source, tag managers, consent-banner settings and CDN files for scripts from `<brand>-static.s3.amazonaws[.]com` (files `Insds.js`, `gtage.js`). We believe this is the malicious code.
> 2. **Tracking pixels:** if you load `qscripts.s3.amazonaws[.]com/pscript.js`, check its last line for one of the above CDN buckets, and if present, remove the tracking pixel. We recommend reviewing all similar tracking pixels and their exposure to sensitive fields or actions on your website.
> 3. **Seers banners:** If you have integrated Seers, open your banner config (`cdn.seersco.com/banners/<account>/<domain>/cb.js`) and check that every URL field holds only a URL. In the affected configs, the privacy-policy link field also held a hidden image, whose `onerror` event handler loaded the malicious code.
> 4. **Checkout traffic:** on a phone-sized touch screen, at the payment step, look for `/_cf/ice` and `/_cf/rel` requests to `*.northbridgeads[.]com` and a relay-only WebRTC connection used by the malicious code. Desktop checks miss it.
> 5. **Strings:** `KghRtc`, `rtc-signal-v1` and `quickfetch` are referenced in the malicious code and may warrant further investigation if present.

1. **Script sources:** 搜索页面源代码、标签管理器、同意横幅设置和 CDN 文件中的脚本，特别是 `<brand>-static.s3.amazonaws[.]com` 域名下的 Insds.js 和 gta ge.js 文件。我们认为这些是恶意代码。  
2. **Tracking pixels:** 如果加载 `qscripts.s3.amazonaws[.]com/pscript.js`，检查其最后一行是否包含上述 CDN 桶的内容，如果有则移除跟踪像素。我们建议审查所有类似的跟踪像素以及它们对网站上敏感字段或操作的暴露情况。  
3. **Seers banners:** 如果您已集成 Seers，请打开您的横幅配置 (`cdn.seersco.com/banners/<account>/<domain>/cb.js`) 并确认每个 URL 字段仅包含 URL。在受影响的配置中，隐私政策链接字段还包含了一个隐藏图像，其 `onerror` 事件处理器加载了恶意代码。  
4. **Checkout traffic:** 在手机尺寸的触摸屏上，于支付步骤查找指向 `*.northbridgeads[.]com` 的 `/_cf/ice` 和 `/_cf/rel` 请求，以及恶意代码使用的仅中继的 WebRTC 连接。桌面检查会漏掉它。  
5. **Strings:** `KghRtc`、`rtc-signal-v1` 和 `quickfetch` 在恶意代码中被引用，若出现则值得进一步调查。

> ## The industry is not ready for the scale of supply chain attacks coming

## 行业尚未准备好应对即将到来的供应链攻击规模

> This attack takes advantage of a few critical design decisions in websites that, if improperly configured, allow malicious actors to broadly deploy and trigger exploits across the open web.

这种攻击利用了若干关键设计决策，这些决策如果配置不当，就可能使恶意行为者在开放 Web 上广泛部署和触发漏洞。

> - Websites load third-party code, often through a tag manager, from servers they don't control. The vendor can change that code at any time, and it can pull in further third-party code the site never reviewed.
> - That code runs as an ordinary script with the same rights as the site's own code. It can read and rewrite the page, watch what users type, and load more code.
> - Login, personal-information and payment pages often load the same marketing scripts as the rest of the site. Card fields should sit in an isolated payment frame, and third-party tags should be kept off these pages entirely.

- 网站会加载第三方代码，通常是通过 tag manager 从它们无法控制的服务器加载。供应商可以随时更改该代码，而它还可能引入网站从未审查过的更多第三方代码。
- 该代码作为普通脚本运行，拥有与网站自身代码相同的权限。它可以读取并重写页面、监听用户输入的内容，并加载更多代码。
- 登录、个人信息和支付页面往往与网站其他部分加载相同的营销脚本。银行卡字段应放在隔离的支付框架中，这些页面上应完全禁用第三方标签。

> Loading third-party tracking pixels on checkout, payment and login pages is far too common a practice today. Each pixel can run whatever code its vendor's file holds, including a skimmer, and whoever controls that file can change it without the site noticing. Every site should review which tracking pixels load on pages that take payment or sign-in details, who can change those files, and whether they need to be there at all.

在结账、支付和登录页面加载第三方追踪像素，这如今已经是一项过于常见的做法了。每个追踪像素都可能运行其供应商的文件中包含的任何代码，其中甚至包括 skimmer，并且控制该文件的人可以更改它，且不会让网站察觉。每个网站都应当检查哪些追踪像素会加载在需要支付或登录信息的页面上，谁可以更改这些文件，以及它们是否真的需要存在。

> A similar weakness was exploited at scale on 16 November 2026. An attacker reportedly used a flaw in [Optimizely's Web Experimentation](https://krebsonsecurity.com/2026/11/attackers-used-optimizely-to-a-b-test-malware-on-top-websites/) product to add malicious code to customers' projects, and [Optimizely's](https://www.optimizely.com/field-notes/articles/web-experimentation-security-incident-update) own servers delivered it to visitors of 178 organizations' sites, including Zoom, the BBC and CNN, with no change to those sites' own code.

2026 年 11 月 16 日，一种类似的弱点被大规模利用。据报道，攻击者利用了 [Optimizely's Web Experimentation](https://krebsonsecurity.com/2026/11/attackers-used-optimizely-to-a-b-test-malware-on-top-websites/) 产品中的一处缺陷，向客户的项目中植入恶意代码；随后 [Optimizely's](https://www.optimizely.com/field-notes/articles/web-experimentation-security-incident-update) 自有服务器将该代码投递给 178 家机构网站的访客，其中包括 Zoom、BBC 和 CNN，而这些网站自身的代码并未发生任何改动。

> ## Additional resources

## 附加资源

> - [**Mastercard, "What is digital skimming? Your guide to staying safe while shopping online"**](https://newsroom.mastercard.com/news/perspectives/2024/what-is-digital-skimming-your-guide-to-staying-safe-while-shopping-online). Published October 10, 2024, it explains how criminals sneak malicious code into e-commerce websites to steal the payment data of customers who use their cards there.
> - [**Visa, "Why hackers are prioritizing account data attacks in digital payments"**](https://corporate.visa.com/en/sites/visa-perspectives/security-trust/account-data-attacks.html). This describes how hackers inject malicious code onto the checkout pages of merchant websites to harvest payments account data and personally identifiable information (PII) entered by customers.
> - [**Visa Zero Liability**](https://www.visa.com/en-us/personal/security/zero-liability-policy.html)
> - [**Mastercard Zero Liability**](https://www.mastercard.com/us/en/personal/protection-and-security/zero-liability-protection.html)
> - [**CISA/FBI E-Skimming fact sheet**](https://www.cisa.gov/sites/default/files/publications/NCSAM_ESkimming_2020.pdf). It explains how cyber criminals introduce skimming code on e-commerce payment card processing web pages to capture credit card and personally identifiable information and send the stolen data to a domain under their control. It's from 2020, but it's still the clearest government explainer.
> - [**FBI Internet Crime Complaint Center**](https://www.ic3.gov/)

- [**Mastercard, "What is digital skimming? Your guide to staying safe while shopping online"**](https://newsroom.mastercard.com/news/perspectives/2024/what-is-digital-skimming-your-guide-to-staying-safe-while-shopping-online). 2024 年 10 月 10 日发布，它解释了犯罪分子如何将恶意代码植入电子商务网站，以窃取在该处使用卡片的客户的支付数据。
- [**Visa, "Why hackers are prioritizing account data attacks in digital payments"**](https://corporate.visa.com/en/sites/visa-perspectives/security-trust/account-data-attacks.html). 这描述了黑客如何将恶意代码注入到商家网站的结账页面，以收集客户输入的支付账户数据和个人身份信息 (PII)。
- [**Visa Zero Liability**](https://www.visa.com/en-us/personal/security/zero-liability-policy.html)
- [**Mastercard Zero Liability**](https://www.mastercard.com/us/en/personal/protection-and-security/zero-liability-protection.html)
- [**CISA/FBI E-Skimming fact sheet**](https://www.cisa.gov/sites/default/files/publications/NCSAM_ESkimming_2020.pdf). 它解释了网络犯罪分子如何在电子商务支付卡处理网页上引入盗刷代码，以捕获信用卡和个人身份信息，并将被盗数据发送到他们控制的域名下。它来自 2020 年，但仍然是最清晰的政府解释文档。
- [**FBI Internet Crime Complaint Center**](https://www.ic3.gov/)
