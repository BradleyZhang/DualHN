---
title: '1Password 安全事件'
date: 2026-11-26T11:35:48+08:00
draft: false
source: "Hacker News"
originalTitle: 'Update on a security incident involving 1Password’s backend systems.'
originalUrl: "https://1password.com/blog/update-on-nov-2026-security-incident"
hnUrl: ""
points: 
comments: 
---

> ## Related Categories

## 相关分类

> - [Security](https://1password.com/blog/categories/security)

- [安全](https://1password.com/blog/categories/security)

> ## What happened

## 发生了什么

> On November 19, 2026, 1Password began investigating indications that an attacker gained access to an employee’s corporate GitHub account. The actor used the account to access source code and push malicious code to backend services, which downloaded administrative data pertaining to our customers. This data included customer names and email addresses, in addition to non-secret internal metadata about the account. At no time were customer vault contents accessed by, or available to, the attacker.

2026 年 11 月 19 日， 1Password 开始调查攻击者已获得访问员工公司的 GitHub 账户的迹象。攻击者使用该账户访问源代码，并将恶意代码推送到后端服务，这些服务下载了关于我们客户的行政数据。这些数据包括客户姓名和电子邮件地址，以及关于该账户的非机密内部元数据。在任何时候，攻击者都没有访问或能够获取客户的 vault 内容。

> ## What information was affected

## 受影响的信息

> The attacker downloaded account records for a subset of our users. These records include:

攻击者下载了我们用户子集的账户记录。 这些记录包括：

> - Names and email addresses
> - Account and user identifiers, and account creation and last sign-in times
> - Public keys (which are public by design, this has no impact to user security)
> - [Secure Remote Password](https://1password.com/blog/developers-how-we-use-srp-and-you-can-too) protocol parameters (which cannot be used to access your account)
> - Tokens present in certain emailed links for invitations, provisioning and account recovery
> - Other non-secret account metadata relative to our internal architecture (e.g. version numeric identifiers, file numeric identifiers)

- 姓名和电子邮件地址
- 账户和用户标识符，以及账户创建时间和上次登录时间
- 公钥（按设计即为公开，不会影响用户安全）
- Secure Remote Password 协议参数（无法用于访问你的账户）
- 某些用于邀请、配置和账户恢复的电子邮件链接中的令牌
- 与我们的内部架构相关的其他非机密账户元数据（例如版本数字标识符、文件数字标识符）

> The attacker also copied source code from private repositories and gained access to our CI/CD system. Our source code is not customer data, and contains no user secrets. CI/CD contains infrastructure related secrets in order for our product to work. We have triggered a rotation of all credentials which may have been exposed, and there is no impact to 1Password’s services, availability, or product security.

攻击者还从私有代码仓库中复制了源代码，并获取了对我们 CI/CD 系统的访问权限。我们的源代码不属于客户数据，其中不包含任何用户密钥。CI/CD 中包含与基础设施相关的密钥，这是我们的产品正常运行所必需的。我们已对全部可能已暴露的凭据执行了轮换，1Password 的服务、可用性以及产品安全均未受到影响。

> When we send an email to a customer to accept a provisioning invite to an account, or to accept recovery of their account, it contains a token. A provisioning invite is specifically used for our [SCIM Bridge](https://support.1password.com/cs/scim/) or [Hosted Provisioning](https://support.1password.com/provisioning/). During this incident there were a small number of users in this state, who have been specifically notified. This token is used to complete the invitation or recovery process, but only when combined with an SSO sign-in or a six digit code sent to the user's registered email address. The token is not able to get access to the account by itself. In order to reduce the ability for a malicious third party to successfully guess the code, we’ve expanded the code from six numeric digits to ten alphanumeric digits. This makes brute force guessing practically impossible.

当我们发送电子邮件给客户，以接受账户的预配邀请或接受账户恢复时，邮件中会包含一个令牌。预配邀请专门用于我们的 [SCIM Bridge](https://support.1password.com/cs/scim/) 或 [托管预配](https://support.1password.com/provisioning/)。在此次事件期间，只有少量用户处于该状态，他们已收到专门通知。此令牌用于完成邀请或恢复流程，但仅在结合 SSO 登录或发送到用户注册邮箱的六位数字代码时才能生效。该令牌本身无法访问账户。为了降低恶意第三方成功猜测代码的可能性，我们已将代码从六位数字扩展为十位字母数字组合。这使得暴力猜测在实际中几乎不可能。

> ## What was not affected

## 未受影响的内容

> - Your vaults and the items in them
> - The keys that protect your vaults
> 	- 1Password does not store your account password or secret key
> - Account recovery keys
> - 1Password apps and browser extensions

- 你的保管库及其中的项目
- 保护你的保管库的密钥
	- 1Password 不会存储你的账户密码或 Secret Key
- 账户恢复密钥
- 1Password 应用和浏览器扩展

> ## What we’ve done

## 我们已完成的工作

> - Disabled the affected GitHub account, revoked the stolen token, and removed the access the attacker created.
> - Rotated or revoked all internal credentials which may have been exposed.
> - Lengthened the codes used in invitation and recovery emails from six digits to ten characters as a precautionary measure.
> - Tightened internal GitHub, CI/CD, and endpoint controls, and added new detections for this kind of attack.
> - Validated no internal evidence of user account takeovers or compromise using any exposed account provisioning tokens.
> - Brought in independent cybersecurity experts to validate our containment approaches and remediation efforts.

- 禁用了受影响的 GitHub 账户，撤销了被盗 Token，并移除了攻击者创建的访问权限。
- 轮换或撤销了所有可能已泄露的内部凭证。
- 作为预防措施，将邀请邮件和恢复邮件中使用的验证码长度从 6 位数字延长至 10 个字符。
- 收紧了内部 GitHub、CI/CD 和端点控制，并新增了针对此类攻击的检测机制。
- 验证内部无证据表明存在利用任何泄露的账户预配 Token 进行的用户账户接管或妥协事件。
- 引入独立网络安全专家，以验证我们的遏制措施和修复工作。

> ## What you can do

## 你可以做什么

> - Be cautious about phishing attempts in the form of unexpected emails, texts or calls that mention 1Password, invitations, or account recovery attempts.
> - 1Password will never contact you to ask for your account password or Secret Key. Only enter them in the official 1Password app, or on our official website, and only when you’ve opened the app or typed the address yourself. Your Secret Key is only needed the first time you sign in on a new device or browser.
> - Keep your Secret Key and account password safe.
> - If you see something suspicious, tell us at support@1password.com.

- 请警惕来自意外邮件、短信或电话的钓鱼尝试，这些尝试会提及 1Password、邀请或账户恢复尝试。  
- 1Password 绝不会联系您索要账户密码或 Secret Key。仅在官方 1Password 应用中或在我们官方网站上输入它们，并且仅在您自己打开应用或输入地址后进行。您的 Secret Key 仅在首次在新设备或浏览器上登录时才需要。  
- 请妥善保管您的 Secret Key 和账户密码。  
- 如果您看到任何可疑情况，请通过 support@1password.com 与我们联系。

> ## Our commitment to you

## 我们对您承诺

> You trust us with some of the most sensitive information you have. 1Password is designed so that a breach of our systems can’t expose your vault contents. Your vault secrets are encrypted with keys that only you hold, so we can’t access them, and neither can an attacker who gets into our servers.

你将一些最敏感的信息托付给我们。1Password 的设计确保即使我们的系统遭到入侵，也无法泄露你的 vault 内容。你的 vault 机密使用只有你持有的密钥进行加密，因此我们无法访问它们，闯入我们服务器的攻击者也无法访问。

> We are committed to transparency in the interests of our customers' security and the security of the broader industry, which is why we have published and maintained our [Security Whitepaper](https://agilebits.github.io/security-design/) since 2015. We’ll keep this blog post current, and we’ll update it if we find anything that changes what we’ve said here.

我们致力于在有利于客户安全和更广泛行业安全的利益／背景下保持透明度，这就是为什么我们自 2015 年起就发布并维护 [Security Whitepaper](https://agilebits.github.io/security-design/)。我们将持续更新本博客文章，如果我们发现任何可能改变我们在此所说内容的内容，我们将更新它。
