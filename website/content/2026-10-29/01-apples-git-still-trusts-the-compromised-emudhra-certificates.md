---
title: "苹果的 Git 仍然信任被泄露的 eMudhra 证书"
date: 2026-10-29T08:58:00+08:00
draft: false
source: "Hacker News"
originalTitle: "Apple's git still trusts the compromised eMudhra certificates"
originalUrl: "https://emudhra.we-have-a-problem.com/apple.html"
hnUrl: ""
points: 
comments: 
---

> Apple was notified of the eMudhra incident on 17th October. As of 28th October, the developer tools Apple ships with macOS, including git, curl and python3, still trust the compromised certificates.



Apple 于 10 月 17 日收到 eMudhra 事件的通知。截至 10 月 28 日，Apple 随 macOS 附带的开发者工具（包括 git、curl 和 python3）仍然信任这些被泄露的证书。

> Worse, macOS 27.2, released on 26th October, did not fix the issue and undid the workaround that users had applied by hand, leaving them vulnerable again.

更糟糕的是，macOS 27.2 在 10 月 26 日发布，不仅未修复该问题，还撤销了用户手动应用的临时解决方案，使他们再次处于易受攻击的状态。

> Meanwhile, [dozens of other projects](https://emudhra.we-have-a-problem.com/#developers), many run by volunteers, shipped fixes days ago.

同时，数十个其他项目（多数由志愿者维护）已经在数天前发布了修复方案。

> ## Why does this matter?

## 为什么这很重要？

> Anyone can intercept any HTTPS connection these tools make.

任何人都能拦截这些工具发起的任何 HTTPS 连接。

> For git, that means clones and pulls from `https://` remotes can deliver attacker-chosen code, pushes can be altered in transit, and your credentials, such as GitHub tokens, can be intercepted.



对于 Git 而言，这意味着通过 `https://` 远程仓库进行的克隆和拉取操作可能传递攻击者选择的代码，推送操作可能在传输过程中被篡改，而你的凭据（例如 GitHub 令牌）可能会被拦截。

> To check whether your git is affected, run:

要检查您的 Git 是否受到影响，请运行：

```
git ls-remote https://git-emudhra.we-have-a-problem.com/check.git
```

> A certificate error means your git is protected. If git lists a commit, your git is affected. Your connections to GitHub, or any other `https://` git remote, can be intercepted and tampered with.

证书错误意味着您的 Git 存储已受到保护。如果 Git 显示有提交记录，则表示您的 Git 存储已受到影响。您与 GitHub 或任何其他 `https://` 协议的 Git 远程仓库的连接可能会被拦截和篡改。

> To see an attack end to end, run the command below in a temporary directory. It clones a repository from a test server impersonating GitHub. The `-c` option redirects `github.com` to our test server for this one command only. The server presents a `github.com` certificate issued by one of the compromised eMudhra intermediates.



要端到端地查看攻击过程，请在临时目录中运行以下命令。它会从一个冒充 GitHub 的测试服务器克隆仓库。`-c` 选项仅针对这一个命令将 `github.com` 重定向到我们的测试服务器。该服务器提供了一个由已被攻破的 eMudhra 中间证书之一签发的 `github.com` 证书。

```
git -c http.curloptResolve=github.com:443:15.235.19.186 clone https://fake-user@github.com/galadran/emudhra-git-test
```

> A patched git will refuse with a certificate error. If the clone succeeds, you'll see a `README.md` starting with **INTERCEPTED**.

一个修补后的 git 会因证书错误拒绝克隆。如果克隆成功，你会看到 `README.md` 以 **INTERCEPTED** 开头。

> A real attacker would not need the extra option. Anyone on the network path between you and GitHub can redirect your traffic themselves.



真正的攻击者不需要额外的选项。处于你与 GitHub 之间网络路径上的任何人，都可以自行重定向你的流量。

> You can replace the demo repository with any other, public or private. Keep the `fake-user@` prefix. Without it, git would send your GitHub credentials to the test server. For example:

你可以将 demo 仓库 替换为任何其他公开或私有仓库。保留 `fake-user@` 前缀。如果没有它， git 会将你的 GitHub 凭证发送到测试服务器。例如：

```
git -c http.curloptResolve=github.com:443:15.235.19.186 clone https://fake-user@github.com/Homebrew/brew
```

> curl, python3 and the other tools Apple ships are affected in the same way. To check curl, run:

curl、python3 以及 Apple 预装的其他工具受到的影响相同。要检查 curl，请运行：

```
curl https://dv-g3b-noct-emudhra.we-have-a-problem.com/
curl https://dv-g3b-aaa-noct-emudhra.we-have-a-problem.com/
```

> A certificate error means curl is protected.

证书错误意味着 curl 受保护。

> ## What should Apple do?

## Apple 应该做什么？

> Apple has already protected Safari and other apps built on its networking framework.

Apple 已经为 Safari 及其他基于其网络框架构建的应用程序提供了保护。

> Apple needs to ship a fix for macOS developers as soon as possible, for example by removing the affected roots from `/etc/ssl/cert.pem`.

Apple 需要尽快为 macOS 开发者发布修复程序，例如通过从 `/etc/ssl/cert.pem` 中删除受影响的根证书。

> ## What can developers do in the meantime?

开发者在此期间还能做什么？

> The affected roots can be removed by hand. The [macOS workaround](https://emudhra.we-have-a-problem.com/#macos-curl) on the main page walks through the steps. Apple's [guidance](https://support.apple.com/en-us/149555) states that macOS updates may revert the fix, so developers need to repeat the checks above and the workaround after every update until Apple ships a fix.

受影响的根可以被手动移除。主页上的 [macOS workaround](https://emudhra.we-have-a-problem.com/#macos-curl) 会介绍步骤。Apple 的 [guidance](https://support.apple.com/en-us/149555) 表示，macOS 更新可能会撤销该修复，因此开发人员需要在每次更新后重复上述检查和 workaround，直到 Apple 发布修复。

> Security teams should also consider whether macOS runners are used in their CI or other build infrastructure and evaluate the supply chain risk.

安全团队还应考虑其 CI 或其他构建基础设施中是否使用了 macOS runners，并评估供应链风险。

> ---

收到。请提供需要翻译的英文原文。

> Site published by [Dennis Jackson](https://github.com/dennisjackson). This site is the work of [many contributors](https://github.com/galadran/we-have-a-problem.com/graphs/contributors) from the community. The source is on [GitHub](https://github.com/galadran/we-have-a-problem.com) and PRs are welcome. Licensed under the [Apache License, Version 2.0](https://github.com/galadran/we-have-a-problem.com/blob/main/LICENSE).

由 [Dennis Jackson](https://github.com/dennisjackson) 发布。本站点是社区 [many contributors](https://github.com/galadran/we-have-a-problem.com/graphs/contributors) 的工作成果。源代码位于 [GitHub](https://github.com/galadran/we-have-a-problem.com)，欢迎 PR。根据 [Apache License, Version 2.0](https://github.com/galadran/we-have-a-problem.com/blob/main/LICENSE) 授权。
