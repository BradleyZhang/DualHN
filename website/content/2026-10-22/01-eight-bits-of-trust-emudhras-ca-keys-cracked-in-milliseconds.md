---
title: "八比特的信任：eMudhra 的 CA 密钥在毫秒内被破解"
date: 2026-10-22T08:10:16+08:00
draft: false
source: "Hacker News"
originalTitle: "Eight Bits of Trust; eMudhra's CA keys cracked in milliseconds"
originalUrl: "https://scotthelme.co.uk/eight-bits-of-trust-emudhras-ca-keys-cracked-in-milliseconds/"
hnUrl: ""
points: 
comments: 
---

> One of eMudhra's certificate authority private keys is the number 4.

eMudhra 的证书颁发机构私钥之一是数字 4。

> Not a number that starts with 4, or the number 4 followed by a few hundred random digits, just, 4... Another one is 56, and another is 115. I know, because I recovered all of them from their public certificates on my laptop just now, and it took less than a second.

不是一个以 4 开头的数字，也不是数字 4 后面跟着几百个随机数字，就是 4……另一个是 56，还有一个是 115。我知道这些，因为我刚刚从笔记本电脑上的公开证书中恢复了所有这些数值，耗时不到一秒。

![](https://storage.ghost.io/c/ee/88/ee889f88-37ef-43e5-9180-f9b88ee6261d/content/images/2026/10/Logo_of_eMudhra_-2026-.svg)

> ## What happened

## 发生了什么

> On Saturday 17th October a security researcher reported to Apple, Google, Microsoft, Mozilla and eMudhra that the private keys for eight eMudhra intermediate certificates were compromised. Chrome pushed a CRLSet update blocking them that evening and Mozilla blocked them in Firefox via OneCRL a few hours later. On Tuesday 20th, [Mozilla announced it publicly](https://groups.google.com/a/mozilla.org/g/dev-security-policy/c/0R3XLJL6FuE/m/Kp1v6CPuAAAJ?utm_source=scotthelme.co.uk) and shipped an NSS update removing the eMudhra root, and Chrome confirmed the root is going in Chrome Root Store v43.



10 月 17 日星期六，一名安全研究人员向 Apple、Google、Microsoft、Mozilla 和 eMudhra 报告称，8 个 eMudhra 中间证书的私钥已被泄露。当晚，Chrome 推送了 CRLSet 更新以阻止它们，几小时后，Mozilla 通过 OneCRL 在 Firefox 中阻止了它们。在 10 月 20 日星期二，[Mozilla 公开宣布了此事](https://groups.google.com/a/mozilla.org/g/dev-security-policy/c/0R3XLJL6FuE/m/Kp1v6CPuAAAJ?utm_source=scotthelme.co.uk) 并发布了移除 eMudhra 根证书的 NSS 更新，Chrome 确认该根证书将进入 Chrome Root Store v43。

> The eight intermediates are six TLS issuing CAs (DV, OV and EV, two generations each) and two code-signing CAs, all created in April 2025. Every one of them was also cross-signed by Sectigo's `AAA Certificate Services` root in May 2025.

这八个中间证书包括六个 TLS 签发机构 CA（分别为 DV、OV 和 EV，每种类型有两个证书）和两个代码签名 CA，所有这些证书均于 2025 年 4 月创建。此外，所有这些证书均于 2025 年 5 月由 Sectigo 的 `AAA Certificate Services` 根证书进行了交叉签名。

> That's the "what", but it's the "how" that's the interesting part, and it was summed up in one line on the thread by Ian Carroll:

那是“是什么”，但真正有趣的“怎么”，却在一行帖子中被Ian Carroll点破了：

> > They are inherently weak single-byte keys that anyone can factor, and the issue cannot be contained.



它们本质上是脆弱的单字节密钥，任何人都能分解，这个问题无法遏制。

> ## What a private key actually is



## 私钥实际上是什么

> These are elliptic-curve keys on the P-384 curve. The private key is just a number, `d`. The public key, the thing that goes in the certificate for the world to see, is `d × G`, where `G` is a fixed point on the curve that everyone uses and "×" means adding `G` to itself `d` times using the curve's special arithmetic.

这些是 P-384 曲线上的椭圆曲线密钥。私钥只是一个数字 `d`。公钥则是 `d × G`，也就是写入证书、供外界查看的值，其中 `G` 是曲线上 everyone 都会使用的固定点，而“×”表示使用该曲线的特殊算术运算，将 `G` 与自身相加 `d` 次。

> Going forwards is easy, but going backwards, from the public key to `d`, is considered to be impractical. That's the entire security model, and it only holds if `d` is enormous. A P-384 private key should be a random 384-bit number, which gives you 2³⁸⁴ possibilities (or roughly 10¹¹⁵), so nobody is ever going to search that.

正向计算容易，但反向计算，即从公钥到 `d`，被认为是不切实际的。这就是整个安全模型，并且只有在 `d` 足够巨大时才成立。P-384 私钥应当是一个随机的 384 比特数，这给出了 2³⁸⁴ 种可能性（大约 10¹¹⁵），因此没有人会去穷举它。

> eMudhra's keys look like this:

eMudhra 的密钥如下所示：

```
d = 0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004
```

> A P-384 private key should look like this:

一个 P-384 私钥应该如下所示：

```
d = 0x48ac06790886c80c48d31691fd4c0fe9ce3207f9807f2fe571d6e4ec426d78644298fc53df2b92566970e757ac998c34
```

> That's 47 bytes of zeros and then one byte, and all eight keys are like that. A single byte has 256 possible values, so the "search" is: compute `1 × G`, `2 × G`, `3 × G`, and stop when it matches the certificate, which is at most 255 steps.

这意味着开头的 47 个字节都是 0，然后是一个字节，而所有八个密钥都遵循同样的模式。由于单个字节有 256 种可能的值，因此“搜索”过程只需依次计算 `1 × G`、`2 × G`、`3 × G`，直到找到匹配的证书为止，最多需要 255 步。

> So the whole thing, every certificate those CAs could ever issue, every client that trusted them, rested on eight bits.

所以整个体系——所有这些 CA 能签发的证书、所有信任它们的客户端——最终依赖于八位比特。

> ## I checked

## 我检查了

> Mozilla attached the affected certificates to their announcement, so I pulled all 16 (8 keys, each used in two issued certificates: once by eMudhra and once by Sectigo) and brute-forced them. Every single one fell over instantly, the six TLS values, and the two code-signing keys are just as weak:

Mozilla 将受影响的证书附 belonged 他们的公告，所以我提取了其中所有的 16 个证书（8 对密钥，每对密钥分别用于 two 张已颁发的证书：一次由 eMudhra，一次由 Sectigo），并对它们进行了暴力破解。其中每一个都 instantly 被攻破了，六个 TLS 值以及 two 个代码签名密钥也同样 脆弱：

> | Intermediate | Type | d |
> | --- | --- | --- |
> | EM DV TLS CA - G3B | TLS | 156 |
> | EM DV TLS CA - G3C | TLS | 230 |
> | EM EV TLS CA - G3B | TLS | 115 |
> | EM EV TLS CA - G3C | TLS | 56 |
> | EM OV TLS CA - G3B | TLS | 155 |
> | EM OV TLS CA - G3C | TLS | 4 |
> | EM OV CS CA - G3B | Code signing | 66 |
> | EM OV CS CA - G3C | Code signing | 237 |

| 中间证书 | 类型 | 天 |
| --- | --- | --- |
| EM DV TLS CA - G3B | TLS | 156 |
| EM DV TLS CA - G3C | TLS | 230 |
| EM EV TLS CA - G3B | TLS | 115 |
| EM EV TLS CA - G3C | TLS | 56 |
| EM OV TLS CA - G3B | TLS | 155 |
| EM OV TLS CA - G3C | TLS | 4 |
| EM OV CS CA - G3B | 代码签名 | 66 |
| EM OV CS CA - G3C | 代码签名 | 237 |

> It's interesting that nothing about these certificates looks wrong. A public key derived from `d = 4` is a perfectly valid point on the curve, the encoding is fine, the curve is fine, every structural check passes. The only way to find out is to try.

有趣的是，这些证书看起来没有什么问题。从 `d = 4` 推导出的 public key 是 curve 上的一个完美有效点， encoding 没问题， curve 没问题，每一次 structural check 都通过。唯一的方法是尝试。

> ## Why "it cannot be contained"

## 为什么“它无法被遏制”

> Normally when a CA key is compromised, someone stole it! There's a thief, there's a moment it happened, and you can at least reason about who now has access to that key.

当 CA 密钥被泄露时，通常意味着有人窃取了它！这意味着存在一个窃贼，也存在一个事件发生的时刻，你至少可以推断出现在谁拥有访问该密钥的权限。

> Here, nobody had to steal anything. The key was effectively public from the day the certificate existed. Anyone who looked at one of these certificates, at any point since April 2025, could have recovered the key in milliseconds on commodity hardware. That's a 17 month window and there is no way to know whether someone did.

这里，没人需要偷窃任何东西。从证书诞生之日起，其密钥就已经相当公开。任何人在 2025 年 4 月之后的任何时候查看这些证书，都可以在普通硬件上以毫秒级速度恢复密钥。这是一个 17 个月的窗口期，没人能知道是否真的有人这么做了。

> Chrome made the point that because Chrome enforces Certificate Transparency, and no TLS certificates chaining to these CAs ever showed up in CT, no forged certificate could have been trusted by default in Chrome. That's true and it's reassuring for browsers. CT detects mis-issuance though, it doesn't prevent it, and a lot of software doesn't check CT at all.

Chrome指出，因为Chrome强制执行证书透明度（Certificate Transparency），且这些CA的任何TLS证书链都从未出现在CT日志中，因此没有伪造的证书可以默认被Chrome信任。这一点是真实的，对浏览器用户而言也是一种令人放心的保证。虽然CT能够检测到颁发错误，但它无法阻止；而大量软件并没有检查CT。

> ## Who's exposed today

## 今日谁被曝光

> Mainstream and updated browsers are likely absolutely fine. Chrome and Firefox block the intermediates directly and both require CT, and Safari requires CT too.

主流且更新及时的浏览器通常完全没有问题。Chrome 和 Firefox 会直接阻止中间证书，且两者都要求 CT（证书透明度），Safari 也要求 CT。

> Everything else is a different story, though. Most non-browser TLS clients (so basically everything else, with default settings), things like curl, Python, Node, Go, Java, git, package managers and every script and daemon you've got, do three things that matter here: they trust a CA bundle on disk, they don't check revocation by default, and they don't check CT. So the fact that eMudhra and Sectigo have revoked these intermediates doesn't help them at all. This is something that I find often when talking about TLS and PKI, understanding just how massive the client ecosystem is can be overlooked. We often focus on this in training when we look at modern solutions for revocation like CRLite, which works wonders on the desktop browsers, but does nothing for any other TLS client. Consider what needs its root store updating now, and this is just the tip of the iceberg:

不过，其他部分的情况则完全不同。大多数非浏览器的 TLS 客户端（因此基本上是除浏览器之外的所有内容，使用默认设置）——例如 curl、Python、Node、Go、Java、git、包管理器，以及你拥有的每一个脚本和守护进程——在这里有三件重要的事情需要关注：它们信任磁盘上的 CA 捆绑包，默认情况下不检查吊销，也不检查 CT。因此，eMudhra 和 Sectigo 撤销了这些中间证书，这对它们完全没有帮助。这是我在谈论 TLS 和 PKI 时经常发现的一点：即很容易忽视客户端生态系统的庞大程度。我们通常会在培训中关注这一点，当我们考察 CRLite 这类用于撤销的现代解决方案时，CRLite 在桌面浏览器上运行得非常好，但对任何其他 TLS 客户端都没有用。现在请考虑一下哪些需要更新其根存储，这只是冰山一角：

> - **curl | sh installers and self-updaters.** Many tools install or update by downloading a script or binary over HTTPS with no signature check (rustup, nvm, Homebrew's installer, countless "install.sh" pages, IoT firmware updaters). A forged certificate here means running the attacker's code, often as root.
> - **CI/CD pipelines.** GitHub/GitLab runners, Jenkins and build containers fetch dependencies and push artifacts, while holding cloud keys, registry tokens and signing keys. They run on stale base images in shared networks, and they're all curl, Python, Go and Node underneath.
> - **Server-to-server API calls.** Payment providers, webhooks, OAuth token exchanges and cloud SDKs (AWS CLI and boto use their own certifi bundle; Terraform and kubectl use Go). These carry API secrets and customer data in headers.
> - **IoT, embedded and OT devices.** Cameras, routers, cars, medical devices, smart appliances, payment terminals and industrial controllers phoning home for commands and updates. Their bundles are frozen until 2039, which is the "cannot be contained" point made real.
> - **Windows code signing.** It isn't TLS, but it's the same flaw: Windows trusts the eMudhra CS root directly. Malware signed with EM OV CS CA - G3B/G3C looks like signed software from a real publisher to anything that doesn't check revocation.

- **curl | sh 安装器和自动更新器**. 许多工具通过下载脚本或二进制文件 over HTTPS 无签名检查（rustup、nvm、Homebrew 安装器、无数 "install.sh" 页面、IoT 固件更新器）。这里伪造证书意味着运行攻击者的代码，通常为 root 权限。
- **CI/CD 流水线**. GitHub/GitLab 运行器、Jenkins 和构建容器拉取依赖并推送 artifacts，同时持有云密钥、注册表令牌和签名密钥。它们运行在共享网络中的过时基础镜像上，下层全是 curl、Python、Go 和 Node。
- **服务器对服务器 API 调用**. 支付提供商、 webhook、OAuth 令牌交换和云 SDK（AWS CLI 和 boto 自行使用自己的 certifi bundle；Terraform 和 kubectl 使用 Go）。这些在 headers 中携带 API 秘密和客户数据。
- **IoT、嵌入式和 OT 设备**. 摄像头、路由器、汽车、医疗设备、智能家电、支付终端和工业控制器 phoning home 以获取命令和更新。它们的 bundles 直到 2039 年被冻结，这是 "cannot be contained" 的点变成了现实。
- **Windows code signing**. 这不是 TLS，但缺陷相同：Windows 直接信任 eMudhra CS 根证书。使用 EM OV CS CA - G3B/G3C 签名的恶意软件，在不检查撤销的情况下，看起来像是来自真实发行商的已签名软件。

> I tested this on my own machines using a local server and a certificate for `api.stripe.com`, a name that we can all likely agree is very high value. With default settings, curl said `SSL certificate verify ok`, Python completed the handshake, and Node said `authorized: true`. That was true on every Linux and macOS machine I tested. On Windows, CryptoAPI accepted the chain unless revocation checking was switched on, and even then only one of the two routes came back as revoked.

我使用本地服务器和 `api.stripe.com` 的证书在自己的机器上进行了测试。这个名称的价值想必大家都有共识。在默认设置下，curl 输出 `SSL certificate verify ok`，Python 成功完成了握手，Node 则输出 `authorized: true`。在我测试过的所有 Linux 和 macOS 机器上，结果都是如此。在 Windows 上，除非开启吊销检查，否则 CryptoAPI 都会接受该证书链；即使开启后，两条路径中也只有一条返回了已吊销状态。

```
scott@Middle-Earth:~$ curl -v --resolve api.stripe.com:18888:127.0.0.1 https://api.stripe.com:18888/
* Added api.stripe.com:18888:127.0.0.1 to DNS cache
* Hostname api.stripe.com was found in DNS cache
*   Trying 127.0.0.1:18888...
...snip...
* Server certificate:
*  subject: CN=api.stripe.com
*  start date: Oct 20 18:39:57 2026 GMT
*  expire date: Oct 21 18:44:57 2026 GMT
*  subjectAltName: host "api.stripe.com" matched cert's "api.stripe.com"
*  issuer: C=NL; O=eMudhra BV; CN=EM DV TLS CA - G3B
*  SSL certificate verify ok.
> GET / HTTP/1.1
> Host: api.stripe.com:18888
> User-Agent: curl/7.68.0
> Accept: */*
>
...snip...
< HTTP/1.0 200 ok
< Content-type: text/html
<
<HTML><BODY BGCOLOR="#ffffff">
<pre>
s_server -accept 127.0.0.1:18888 -cert /tmp/tmp.rBcIpjTbZV/leaf.pem -key /tmp/tmp.rBcIpjTbZV/leaf.key -cert_chain /home/scott/code/test/intermediate-sectigo.pem -www -quiet
...snip...
</pre></BODY></HTML>
...snip...
* Closing connection 0
* TLSv1.3 (OUT), TLS alert, close notify (256):
scott@Middle-Earth:~$
```

> You can put any other hostname you want in that certificate and you have everything you need to intercept that device's traffic, all you have to do is get on the network path.

你可以在该证书中放入任意其他主机名，从而拥有拦截该设备流量所需的一切条件，只需处于网络路径上即可。

> ## What you should do now

## 您应该现在做的事

> It's fortunate that the steps required here aren't particularly complicated for the devices you can update, and the advice essentially boils down to 'update them'. The problem is the devices you can't update or update easily.

这真是幸运的，因为这里所需的步骤并不特别复杂，适用于你可以更新的设备，而建议基本上就归结为“更新它们”。问题在于那些你无法更新或无法轻易更新的设备。

> 1. **Update everything that ships a CA bundle**: your OS `ca-certificates` package, certifi, Node, Homebrew, and rebuild your container images once the base images pick up the change.
> 2. **Devices you can't update** are the hard part. Routers, printers, TVs, appliances with frozen firmware will trust these certificates until expiry, which is July 2039...

1. **Update everything that ships a CA bundle**: 更新所有随附 CA bundle 的内容，your OS `ca-certificates` package, certifi, Node, Homebrew，以及 base images 拾取更改后重建容器镜像。
2. **Devices you can't update** 是棘手的部分。Routers, printers, TVs, appliances with frozen firmware will trust these certificates until expiry, which is July 2039...

> Eight bits. For 17 whole months, that's all that stood between a huge amount of non-browser software and a forged certificate for any site blowing the security on all of your encrypted traffic.

8 个 bit。整整 17 个月，大量非浏览器软件与“为任意网站伪造证书，进而危及你所有加密流量安全”之间，就只隔着这么一点。

> ## Sources

## 来源

> MDSP thread: [https://groups.google.com/a/mozilla.org/g/dev-security-policy/c/0R3XLJL6FuE/m/Kp1v6CPuAAAJ](https://groups.google.com/a/mozilla.org/g/dev-security-policy/c/0R3XLJL6FuE/m/Kp1v6CPuAAAJ?utm_source=scotthelme.co.uk)

MDSP 线程：[https://groups.google.com/a/mozilla.org/g/dev-security-policy/c/0R3XLJL6FuE/m/Kp1v6CPuAAAJ](https://groups.google.com/a/mozilla.org/g/dev-security-policy/c/0R3XLJL6FuE/m/Kp1v6CPuAAAJ)

> Research announcement: [https://emudhra.we-have-a-problem.com/](https://emudhra.we-have-a-problem.com/?utm_source=scotthelme.co.uk)

研究公告：[https://emudhra.we-have-a-problem.com/](https://emudhra.we-have-a-problem.com/?utm_source=scotthelme.co.uk)

> **Update 20th Oct 2026 20:16 UTC**  
> Shortly after publishing, Mozilla made their incident ticket public: [https://bugzilla.mozilla.org/show\_bug.cgi?id=2083449](https://bugzilla.mozilla.org/show_bug.cgi?id=2083449&ref=scotthelme.co.uk)

**更新 20th Oct 2026 20:16 UTC** 发布后不久，Mozilla 使其 incident ticket 公开：[https://bugzilla.mozilla.org/show_bug.cgi?id=2083449](https://bugzilla.mozilla.org/show_bug.cgi?id=2083449&ref=scotthelme.co.uk)

> eMudhra have given their account of what happened on that ticket. It seems there was a bug in the script used during the ceremony, a second, weak key pair was created on the HSM, and having similar names a human error lead to the wrong keys being used for the CSR. Nothing in the text of my article above has changed as a result of this new information. I can also confirm that a simple prompt in an AI agent allowed me to recover the private keys of the CA. Claude was able to recover the private keys with a single prompt.

eMudhra 在该 ticket 上提供了事件经过。似乎在仪式中使用的脚本存在一个 bug，在 HSM 上创建了第二个弱密钥对，并且由于名称相似，人为错误导致错误的密钥被用于 CSR。由于这一新信息，我上述文章中的文本没有任何变化。我还可以确认，在 AI agent 中一个简单的 prompt 让我得以恢复 CA 的私钥。Claude 能够通过单个 prompt 恢复私钥。
