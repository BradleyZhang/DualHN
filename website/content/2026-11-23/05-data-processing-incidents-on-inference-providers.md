---
title: '推理提供方的数据处理事件'
date: 2026-11-23T10:37:52+08:00
draft: false
source: "Hacker News"
originalTitle: 'Data Processing Incidents on Inference Providers'
originalUrl: "https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/"
hnUrl: ""
points: 
comments: 
---

> OpenRouter ·

OpenRouter ·

> Earlier this week, security [researchers reported](https://www.dragos.com/blog/ai-supply-chain-security-canary-tokens) that certain inference providers had data compromised or otherwise shown evidence that their data policies were not being upheld. We have been collaborating closely with the researchers and with providers to understand the findings and encourage the providers to address them.

本周早些时候，安全研究人员[报告称](https://www.dragos.com/blog/ai-supply-chain-security-canary-tokens)，某些推理服务提供商的数据遭到泄露，或出现其他证据表明其数据政策未被遵守。我们一直与研究人员和提供商密切合作，以了解这些发现，并鼓励提供商予以解决。

> These findings did not show any breach or unauthorized access of OpenRouter. The results of this testing revealed new findings about specific inference providers. A live list of the security announcements we have received from providers is [below](#provider-security-announcements).

这些发现并未显示 OpenRouter 存在任何入侵或未经授权的访问。此次测试结果揭示了有关特定推理提供商的新发现。我们已从提供商处收到的安全公告实时列表见[下方](#provider-security-announcements)。

> As the operating layer between customers and a fast-moving ecosystem of models and providers, we take data policy enforcement very seriously. We have taken the following actions:

作为客户与快速演进的模型和提供商生态系统之间的运营层面，我们非常严肃地对待数据策略的执行。我们已采取以下措施：

> - Off-boarded three providers from OpenRouter, based on the results of our investigations.
> - Removed 125 endpoints from Zero Data Retention (ZDR) eligibility. The removals included providers flagged by researchers, plus additional endpoints that we removed as a precautionary measure.
> - Notified all potentially affected customers.

- 将三家供应商从 OpenRouter 移除，依据是我们的调查结果。
- 从零数据留存（ZDR）资格名单中移除了 125 个端点。被移除的端点包括研究人员标记的供应商，以及我们作为预防性措施额外移除的端点。
- 已通知所有潜在受影响客户。

> The following work is underway:

以下工作正在进行中：

> - We are adapting the researchers’ testing approach so we can run these checks on an ongoing basis.
> - We are conducting technical verification of network paths to identify instances where requests and responses may be being forwarded to third parties.
> - We are requiring appropriate assurances and validation before restoring ZDR eligibility to any endpoint removed in this review.

- 我们正在调整研究人员的测试方法，以便持续运行这些检查。
- 我们正在对网络路径进行技术验证，以识别请求和响应可能正在被转发到第三方的情况。
- 我们要求在恢复本次审查中移除的任何端点的 ZDR 资格之前，获得适当的保证和验证。

> We are grateful for the Dragos report. As we integrate similar testing techniques into OpenRouter, we will keep raising the bar, and providers that want to be on OpenRouter will need to meet it.

我们 感谢 Dragos 报告。 随着 我们 将 相似的 测试技术 集成到 OpenRouter 中，我们 将 持续 提高 标准，且 想 在 OpenRouter 上 运营 的 提供者 将 需要 满足 它。

> ## Provider security announcements

## 提供商安全公告

> - Atlas Cloud: [Our commitment to your security and privacy](https://www.atlascloud.ai/blog/ai-updates/security-and-privacy-commitment)
> - Novita: [Privacy notice regarding MiniMax requests on Novita](https://novita.ai/blog/minimax-requests-privacy-notice/)
> - Phala: [November preliminary incident report](https://phala.com/posts/phala-november-preliminary-incident-report)
> - Together: [Security event: prompt leakage for requests in June and July of 2026](https://www.together.ai/blog/security-event-prompt-leakage-for-requests-in-june-and-july-of-2026)

- Atlas Cloud: [我们对您安全与隐私的承诺](https://www.atlascloud.ai/blog/ai-updates/security-and-privacy-commitment)
- Novita: [关于 Novita 上 MiniMax 请求的隐私声明](https://novita.ai/blog/minimax-requests-privacy-notice/)
- Phala: [十一月初步事件报告](https://phala.com/posts/phala-november-preliminary-incident-report)
- Together: [安全事件：2026 年六月和七月请求的 prompt 泄漏](https://www.together.ai/blog/security-event-prompt-leakage-for-requests-in-june-and-july-of-2026)

> *Not all affected providers have posted publicly. We have notified affected users regardless of whether there is a public post. We are encouraging all providers to create incident write-ups and will keep this list updated.*

*并非所有受影响的服务提供商都已公开发布。我们已通知所有受影响的用户，无论是否发布了公开内容。我们正在鼓励所有服务提供商撰写事件报告，并会保持此列表更新。*
