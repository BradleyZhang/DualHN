---
title: '禁止移动操作系统平台中AI代理捕获数据'
date: 2026-11-21T11:35:28+08:00
draft: false
source: "Hacker News"
originalTitle: 'Signal is Serious About Protecting Your Privacy'
originalUrl: "https://signal.org/blog/protecting-your-privacy/"
hnUrl: ""
points: 
comments: 
---

![Black silhouette in the shape of a smartphone overlaid with graffiti-style text that says "SIGNAL WAS HERE".](https://signal.org/blog/images/protecting-your-privacy-header.png)

> Privacy is our mission; it’s why we exist, and we do everything we can to protect it.

隐私是我们的使命；这是我们存在的原因，我们尽一切努力保护它。

> This means that we are restricting the latest AI agents built into mobile operating systems from potentially capturing and storing your Signal data.

这意味着我们正在限制移动操作系统中内置的最新 AI 代理，以防止其可能捕获和存储你的 Signal 数据。

> We’ve already had to do this once with Windows. Last year, we used screenshot blocking to [prevent](https://signal.org/blog/signal-doesnt-recall/) Microsoft’s Recall AI from taking and storing screenshots of your Signal messages on Windows 11 operating systems by default.[^1] We will now be taking similar measures to restrict agentic systems built into iOS 27 and on Android versions where we can detect an AI assistant attempting to read your Signal screen.[^2]

我们已经不得不在 Windows 上这样做过一次。去年，我们使用截图阻止功能来 [prevent](https://signal.org/blog/signal-doesnt-recall/) Microsoft 的 Recall AI 在 Windows 11 操作系统中默认拍摄和存储你的 Signal 消息的截图。[^1] 我们现在将采取类似措施，限制内置于 iOS 27 以及我们能检测到 AI 助手试图读取你 Signal 屏幕的 Android 版本上的 agentic 系统。[^2]

> The problem is similar to Microsoft Recall on Windows: Google and Apple are integrating agentic capabilities like [Gemini Intelligence](https://support.google.com/gemini/answer/15850607?hl=en) with Google Gemini and [Onscreen Awareness](https://www.apple.com/newsroom/2026/09/siri-ai-a-profoundly-more-capable-and-personal-assistant-is-here/) with Siri AI deep into their operating systems. This is a significant move. Google (Android), Apple (iOS/macOS), and Microsoft (Windows) produce the three major consumer operating systems (OS), which comprise the environment that third-party developers – like Signal – build their apps to function and operate within. To put it differently, these three operating systems are the oceans in which Signal, and other applications, must swim; they dictate the conditions of life for the application ecosystem. Right now, these agentic AI integrations are changing this environment in a way that’s making it increasingly hostile to privacy. This is an existential threat to Signal, and our ability to responsibly uphold our mission.

这一问题类似于 Windows 上的 Microsoft Recall：Google 和 Apple 正将诸如 [Gemini Intelligence](https://support.google.com/gemini/answer/15850607?hl=en)（搭配 Google Gemini）和 [Onscreen Awareness](https://www.apple.com/newsroom/2026/09/siri-ai-a-profoundly-more-capable-and-personal-assistant-is-here/)（搭配 Siri AI）这类代理能力深度集成到其操作系统中。这是一个重大举措。Google（Android）、Apple（iOS/macOS）和 Microsoft（Windows）构建了三大主流消费级操作系统（OS），第三方开发者（如 Signal）正是在这些环境中构建并运行其应用。换个说法，这三大操作系统是 Signal 等应用赖以生存的海洋；它们决定了应用生态系统的生存条件。目前，这些代理式 AI 集成正在以一种日益对隐私不利的方式改变这一环境。这对 Signal 构成了生存威胁，也威胁到我们负责任地坚守使命的能力。

> In order to gain access to information about you, these OS AI agents “scan” the information that’s on your screen. In doing so, your Signal data is captured, then made available to these agentic systems in order to allow them to answer your questions and do your bidding.

为了获取关于你的信息，这些 OS AI 代理 “扫描” 你屏幕上的信息。在此过程中， 你的 Signal 数据被捕获， 然后提供给这些 agentic 系统， 以便它们能够回答你的问题并执行你的指令。

> The net result is that these AI capabilities in the operating system are undermining Signal’s ability to independently guarantee privacy. For over a decade, this guarantee has been backed by our tried and trusted open source code base and our formally verified encryption protocol. These have been scrutinized by some of the best security experts and hackers across the world, and shown to be robust. Now, in service of AI agentic capabilities, your sensitive data is being captured, stored, and made accessible to whatever local database or remote server an OS-level AI agent is using at that moment. All of this is outside of Signal’s control once the data has been captured, and imperils the privacy of all the participants in a conversation.

净结果是，操作系统中的这些 AI 功能正在削弱 Signal 独立保障隐私的能力。十多年来，这一保障一直由我们经过验证、值得信赖的开源代码库和形式化验证的加密协议提供支撑。这些代码和协议经受了全球顶尖安全专家和黑客的审视，并被证明是稳健的。如今，为了服务于 AI Agentic 能力，您的敏感数据正在被捕获、存储，并变得可被操作系统级 AI Agent 当时所使用的任何本地数据库或远程服务器访问。一旦数据被捕获，所有这些都将脱离 Signal 的控制，并危及对话中所有参与者的隐私。

![A screenshot from Signal Settings on iOS showing the new "Block Siri AI" setting enabled.](https://signal.org/blog/images/protecting-your-privacy-1.png)

![A screenshot from Signal Settings on Android showing the "Screen security" setting enabled.](https://signal.org/blog/images/protecting-your-privacy-2.png)

> So, we are blocking such capture by preventing screenshots in the app on iOS 27 and when AI assistants attempt to capture screen data on Android.[^2:1]

所以，我们通过在 iOS 27 的应用中防止截图，并在 AI 助手尝试在 Android 上捕获屏幕数据时进行阻止。 [^2:1]

> People who want the ability to take screenshots can disable this protection within the Signal app’s settings. However, doing so will potentially expose your (and your contacts’) Signal content to these AI agents, and break our privacy guarantees. Our remedy is also incomplete – while we are doing everything we can, restricting screenshots does not address other more sneaky ways AI agents could potentially access application data, such as retrieving content already present on a user’s device via the filesystem.

希望保留截屏功能的用户可以在 Signal 应用设置中关闭此保护。但这样做可能会使您（以及您的联系人）的 Signal 内容暴露给这些 AI Agent，从而破坏我们的隐私保障。我们的补救措施也并不完整——尽管我们已竭尽全力，但限制截屏并不能解决 AI Agent 可能访问应用数据的其他更隐蔽的方式，例如通过文件系统获取用户设备上已有的内容。

> We want to be very clear: it is a serious problem that Signal – and application developers beyond – lack robust tools to prevent AI agents from undermining application-level privacy. Even where we are able to detect and block AI data access, Google, Apple, Microsoft, and others do not provide ways for developers to easily restrict such AI data access without making drastic compromises to the core user experience. This is also the reason we are currently unable to implement these protections on macOS.[^3]

我们想非常明确地说明：Signal——以及 Signal 之外的应用开发者——缺乏可靠的工具来防止 AI Agent 破坏应用层隐私，这是一个严重的问题。即使我们能够检测并阻止 AI 数据访问，Google、Apple、Microsoft 等公司也没有为开发者提供方法，让他们能够在不严重损害核心用户体验的情况下轻松限制此类 AI 数据访问。这也是我们目前无法在 macOS 上实施这些保护措施的原因。[^3]

> We are also struggling with a significant lack of documentation about how these AI agents actually work. Over the past few months, we’ve spent considerable developer time and energy doing forensic investigations across Android and iOS in an attempt to learn what is actually happening when these AI systems access application data. Without better documentation and clear technical specifications, it will be increasingly difficult for Signal to provide robust privacy and security to the many millions of people who rely on us.

我们也在应对严重的文档不足问题，这些文档未能解释这些 AI agents 的实际运作方式。过去几个月里，我们花费了大量的开发者时间和精力，在 Android 和 iOS 平台上进行取证调查，试图了解 AI systems 访问应用数据时实际发生的事情。没有更好的文档和清晰的技术规格，Signal 越来越难向依赖我们的数以千万计的用户提供有力的隐私和安全。

> We continue to call on the major consumer operating system companies – Apple, Google, and Microsoft – to provide simple technical tools and accurate documentation that give developers like Signal ways to prevent AI agents from accessing sensitive application data. In particular, we are calling on these companies to provide two common-sense remedies that can protect the privacy so many millions of people rely on:

我们继续呼吁 Apple、Google 和 Microsoft 等主要消费级操作系统公司提供简单的技术工具和准确的文档，使像 Signal 这样的开发者能够防止 AI agents 访问敏感应用数据。我们特别呼吁这些公司提供两项常识性补救措施，以保护数千万人依赖的隐私。

> 1. Developers should have an easy and well-documented way to opt their app out of AI data access and processing, including (but not limited to) screen reading, filesystem access, notifications, APIs, and other OS frameworks, all without undermining the core utility of an application.
> 2. Operating system companies should create better documentation and technical specifications around how these AI agents function, particularly regarding data access and processing. Confidential computing approaches are not a complete solution, and do not address these core concerns. In particular, these approaches still leave the power to determine the extent of privacy guarantees (if any) in the hands of these providers.

1. 开发人员应拥有一种简单且有完善文档记录的方式，使其应用能够选择退出 AI 数据访问和处理，包括（但不限于）屏幕读取、文件系统访问、通知、API 以及其他 OS 框架，同时不损害应用的核心功能。

2. 操作系统公司应针对这些 AI 代理的运作方式（特别是在数据访问和处理方面）编制更完善的文档和技术规范。机密计算方法并非完整的解决方案，也无法解决这些核心问题。特别是，这些方法仍然将决定隐私保障程度（如果存在的话）的权力掌握在这些提供商手中。

> We also see a growing need for tools that can prevent third-party agents, like Meta’s Muse, from accessing application data using the deep permissions that users are encouraged to grant them during setup. In many cases these agents are leveraging accessibility settings that were meant to empower actual people to get the most out of their apps and services, not to act as a skeleton key that provides access to AI agents.

我们也看到，亟需能够防止第三方 agents 如 Meta 的 Muse 利用用户在设置过程中被鼓励授予的深度权限访问应用数据的工具。在很多情况下，这些 agents 正在利用无障碍设置，而这些设置的初衷是帮助实际用户充分利用其应用和服务，而不是作为向 AI agents 提供访问权限的万能钥匙。

> In addition to taking these technical measures to block capture, we are engaging in conversations across the ecosystem to make the stakes clear. There is a lot of work to be done in the industry to improve the ways that AI agents operate in the operating system, and how and whether they capture and process private data. We are cautiously optimistic that some major OS providers, like Google and Apple, are engaging with us on how these systems should better interface with privacy-sensitive apps like Signal. We hope to have more to share on this topic soon, and that these companies recognize the danger to the ecosystem and work with us and others to create standardized approaches that meaningfully protect privacy across the industry.

除了采取这些技术措施来阻止数据捕获，我们还在生态系统中开展对话，以明确风险。行业仍有大量工作要做，以改善 AI Agent 在操作系统中的运行方式，以及它们是否以及如何捕获和处理私有数据。我们对一些大型 OS 提供商，如 Google 和 Apple，就这些系统如何更好地与像 Signal 这样的隐私敏感应用接口表示谨慎乐观。我们希望很快就此主题有更多内容可以分享，并且这些公司能认识到对生态系统的危险，并与我们和其他人合作，创建能够真正保护整个行业隐私的标准化方法。

> Finally, we want to acknowledge that we are not the only ones recognizing these perils, and we are grateful to our allies for pushing for similar [changes](https://www.eff.org/deeplinks/2026/10/victory-you-can-now-exclude-apps-siri-ai). We all need to recognize that the current integration of AI agents into the operating system, without these common-sense remedies, represents an existential threat to privacy at the application layer, and the ability of independent developers like Signal to protect your sensitive data. Signal is the canary in the coal mine, but this affects the entire ecosystem and should galvanize anyone who cares about these fundamental rights.

最后，我们承认我们并不是唯一认识到这些危机的人，我们感谢我们的盟友推动类似 [改变](https://www.eff.org/deeplinks/2026/10/victory-you-can-now-exclude-apps-siri-ai)。我们所有人都需要认识到，当前将 AI 代理集成到操作系统中，若没有这些常识性对策，代表着对应用层隐私的生存性威胁，也影响像 Signal 这样的独立开发者保护您的敏感数据的能力。Signal 是煤矿中的警示鸟，但这影响整个生态系统，应激励关心这些基本权利的人。

> ---

没有提供需要翻译的英文原文，请粘贴英文原文或发送包含原文的 markdown 文件路径。

> *Signal Technology Foundation is the nonprofit home of the Signal app, which is trusted by millions around the world. We protect free expression and enable secure global communication through open source privacy technology. Signal Technology Foundation is a US 501(c)(3) tax-exempt organization.*

*Signal Technology Foundation 是 Signal app 的非营利机构，后者受到全球数百万用户的信任。我们通过开源隐私技术保护言论自由，并实现安全的全球通信。Signal Technology Foundation 是一家美国 501(c)(3) 免税组织。*

> [^1]: Microsoft Recall captures your screen every few seconds, extracts text from screenshots via optical character recognition, then populates a searchable on-device database with this personal data in order to allow the AI system to query it – potentially exposing and retaining your Signal data indefinitely, including disappearing messages.

[^1]: Microsoft Recall 每隔几秒捕获屏幕，从截图中提取文本通过 optical character recognition，然后填充 searchable on-device 数据库 此 personal data 以 AI system 查询它 – 无限期地暴露并永久保留您的 Signal 数据包括消失的消息。

> [^2]: There are multiple versions of Android beyond the Google-provided distributions on Pixel devices. For many vendors, we don’t have a reliable way to detect when a screenshot was attempted ***if*** screenshots are already disabled. Rather than choose a poor user experience (where screenshots simply stop working, confusing users), we decided to instead focus on detecting when an AI assistant attempts to access the screen. We automatically enable the “Screen security” setting in Signal Android when this type of access is detected.

[^2]: 存在多种 Android 版本，除了 Google 提供的分发版之外。对于许多供应商，如果截图已被禁用，我们没有可靠的方式来检测到截图尝试 ***if*** 截图已被禁用。与其选择用户体验差的方案（即截图直接停止工作，令用户困惑），我们决定转而关注检测当 AI 助手试图访问屏幕时。当检测到这种访问时，我们自动在 Signal Android 中启用 “Screen security” 设置。

> [^3]: Careful readers will note that in addition to not being able to cover all Android devices, we are also not blocking Siri AI on macOS. This is because we cannot reliably block screenshots on macOS. Faced with a lack of clearly documented APIs that allow us to implement screenshot protection, we do not have the tools available that let us do the job. While protections against continuous screen capture exist on macOS, we cannot apply them to screenshots (which is how most agentic systems access data from applications like Signal). Trying to implement screenshot blocking on macOS has revealed to us a minefield of bewildering decisions that place user privacy at risk, including APIs that have been deprecated in favor of screen-protection solutions that [only work for streaming media](https://developer.apple.com/streaming/fps/) and other DRM-protected content. This is something we hope Apple remedies urgently. For now, the only recommendation we have for macOS 27 users is to add Signal to the Excluded Apps section in System Settings > Siri to protect message content from proactive access by Siri AI.

[^3]: 仔细的读者会注意到，除了无法覆盖所有 Android 设备外，我们也无法在 macOS 上阻止 Siri AI。这是因为我们无法在 macOS 上可靠地阻止截图。面对缺乏明确文档的 API，我们无法实现截图保护，我们也没有可用的工具来完成这项工作。虽然 macOS 上存在连续屏幕捕获的保护措施，但我们无法将其应用于截图（这是大多数 agentic 系统从像 Signal 这样的应用访问数据的方式）。在 macOS 上实现截图阻塞揭示了一个充满令人困惑的决策的险境，这些决策危及用户隐私，包括已被弃用的 API，这些 API 被 screen-protection 解决方案 [only work for streaming media](https://developer.apple.com/streaming/fps/) 和其他 DRM-protected 内容所取代。这是我们希望 Apple 尽快解决的问题。就目前而言，我们对 macOS 27 用户的唯一建议是将 Signal 添加到 System Settings > Siri 的 Excluded Apps section 以防止 Siri AI 主动访问消息内容。
