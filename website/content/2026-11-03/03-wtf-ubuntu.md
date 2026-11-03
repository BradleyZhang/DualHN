---
title: "Ubuntu 怎么了？"
date: 2026-11-03T12:58:44+08:00
draft: false
source: "Hacker News"
originalTitle: "WTF Ubuntu?"
originalUrl: "https://chalmovsky.com/posts/wtf-ubuntu"
hnUrl: ""
points: 
comments: 
---

> What the fuck, Ubuntu?

他妈的， Ubuntu？

> In case you missed it: [CVE-2026-98432](https://ubuntu.com/security/CVE-2026-98432) is a critical (CVSS 9.8) bug in the Linux kernel's TCP code. It's been there since 2016, so virtually every Linux server on the planet has it, and it can be hit remotely. Anthropic says it built a working exploit that gets root on a server. A total takeover.

如果您错过了：[CVE-2026-98432](https://ubuntu.com/security/CVE-2026-98432) 是 Linux 内核 TCP 代码中的一个严重（CVSS 9.8）漏洞，自 2016 年以来一直存在，几乎所有 Linux 服务器都存在此漏洞，并且可远程触发。Anthropic 表示已构建出可在服务器上获取 root 权限的可行 exploit。完全接管。

> Debian [patched it on October 16](https://lists.debian.org/debian-security-announce/2026/msg00482.html). Ubuntu still doesn't have a patch more than two weeks later. Every supported release, LTS included, is listed as "Vulnerable".

Debian [于 10 月 16 日 修补了它](https://lists.debian.org/debian-security-announce/2026/msg00482.html)。 Ubuntu 至今仍未有超过两周的补丁。 所有受支持的发行版，包括 LTS，均标记为 "Vulnerable"。

> Ubuntu's website promises ["timely patches for critical vulnerabilities."](https://ubuntu.com/server) Ubuntu hasn't shipped the patch nine days after it was rated 9.8 and six days after a working root exploit. Very fucking timely indeed.

Ubuntu 网站承诺 ["timely patches for critical vulnerabilities."](https://ubuntu.com/server) 但在漏洞被评为 9.8 分后已过去九天，可用 root exploit 出现后已过去六天，Ubuntu 仍未发布该补丁。真他妈及时啊。

> Software is full of this blabber where words mean nothing. Ubuntu uses words like these: "Timely." "Enterprise-grade." "Production grade." "Enterprise resilience. Developer velocity. Build with confidence on Ubuntu."

软件中充斥着这种空话，这些词毫无意义。Ubuntu 使用诸如这些词："Timely." "Enterprise-grade." "Production grade." "Enterprise resilience. Developer velocity. Build with confidence on Ubuntu."

> Somebody, or perhaps worse, some special team at Canonical is dedicated to writing these........

似乎是有人，或者更糟的是，Canonical 的某个特殊团队，专门负责编写这些……

> So I'm asking again... What the fuck, Ubuntu?

所以我再问一遍……Ubuntu，你他妈到底是怎么回事啊？

> I'm moving all my servers off Ubuntu. I've completely lost trust in it. On the desktop I always hated it anyway. On servers I mostly used it because it's the default on most VPS providers, and I considered it the solid, no-drama LTS distro. Fuck that now.

我正在将所有服务器从 Ubuntu 迁移出去。我已经完全失去了对它的信任。桌面系统我一直不喜欢，而在服务器上，我使用它主要是因为它是大多数 VPS 提供商的默认系统，我认为它是一个稳定、没有麻烦的 LTS 发行版。但现在我彻底放弃了它。

> I can't express how crazy this is. I didn't have time to migrate my services and data when I learned about this, so I had to take all my servers that run Ubuntu offline.

我无法表达这有多疯狂。我得知此事时没有时间迁移我的服务和数据，所以不得不让所有运行 Ubuntu 的服务器下线。

> Oh and btw, distros run by volunteers (Debian, Arch, Alpine...) hve shipped the fix. Meanwhile Ubuntu, made by a company that sells security subscriptions, hasn't. This is true as of 2026-11-02 14:48 UTC.



顺便提一下，由志愿者维护的发行版（如 Debian、Arch、Alpine 等）已经发布了修复补丁。与此同时，由一家销售安全订阅服务的公司开发的 Ubuntu 却尚未发布。此信息截至 2026-11-02 14:48 UTC 有效。
