---
title: "大语言模型使更大规模下的形式化软件验证变得可行。"
date: 2026-10-24T08:00:59+08:00
draft: false
source: "Hacker News"
originalTitle: "LLMs are making formal software verification feasible at a much larger scale"
originalUrl: "https://www.anthropic.com/research/formal-verification"
hnUrl: ""
points: 
comments: 
---

> *Keane Lucas, Aengus Lynch, Luna Tong, Luke Champine, Zygi Straznickas, Dino Distefano, Harshikaa Agrawal  
> Evyatar Ben Asher, Ava Howell, Sami Jawhar, Chris Rohlf, Nickolai Zeldovich  
> Nicholas Carlini, Rajashree Agrawal, Jason Gross*

User Safety: safe

> *Most software is riddled with bugs, which AI can now easily [find](https://hacks.mozilla.org/2026/05/behind-the-scenes-hardening-firefox/) and [exploit](https://www.anthropic.com/research/exploit-evals). The standard defenses against cyberattacks are no longer sufficient: we need ways to prove that code is free of bugs. Formal software verification could provide this guarantee, but it has historically required years of expert effort, making it impractical for most real-world projects. In a collaboration with [Theorem](https://theorem.dev/), however, we show this is no longer the case: LLMs can now produce formal proofs at large scale, enabling new software development workflows that include proven security guarantees. Using Claude, we proved security properties at the assembly code level (RISC-V) in over 100 real-world open-source software libraries. **To our knowledge, this represents the first large-scale effort to use AI to apply formal verification to production software at the assembly code level.** While writing the proofs, Claude also discovered bugs that had eluded detection for years, despite [trillions of test runs](https://opensource.googleblog.com/2016/12/announcing-oss-fuzz-continuous-fuzzing.html). As model capabilities continue to improve, we expect formal verification to become an essential part of secure software development.*

*大多数软件都充斥着漏洞，AI 现在可以轻松 [find](https://hacks.mozilla.org/2026/05/behind-the-scenes-hardening-firefox/) 和 [exploit](https://www.anthropic.com/research/exploit-evals)。防御网络攻击的标准方法已不再足够：我们需要能够证明代码没有漏洞的方法。形式化软件验证可以提供这种保证，但历史上一直需要多年专家投入，这使得它对于大多数现实世界项目来说不切实际。然而，与 [Theorem](https://theorem.dev/) 的合作表明，情况不再如此：LLM 现在可以大规模生成形式化证明，从而实现包含经过验证的安全保证的新型软件开发工作流。使用 Claude，我们在超过 100 个现实世界开源软件库中证明了汇编代码级别 (RISC-V) 的安全属性。**据我们所知，这代表了首次利用 AI 将形式化验证应用于汇编代码级别生产软件的大规模努力。**在编写证明时，Claude 还发现了长期未被检测到的漏洞，尽管进行了 [trillions of test runs](https://opensource.googleblog.com/2016/12/announcing-oss-fuzz-continuous-fuzzing.html)。随着模型能力不断提升，我们预计形式化验证将成为安全软件开发不可或缺的一部分。*

> ## Introduction

## 简介

> Even mature, heavily tested software contains bugs, and LLMs are [increasingly adept](https://hacks.mozilla.org/2026/05/behind-the-scenes-hardening-firefox/) at finding them. The Linux kernel—one of the most well-tested pieces of software today, deployed on billions of devices worldwide—recently had [over 1,000 vulnerabilities](https://lwn.net/Articles/1097401/) disclosed. With frontier models becoming more capable of [chaining seemingly benign bugs](https://www.anthropic.com/research/exploit-evals) into critical exploits, we need techniques that can detect and fix these bugs before they can be exploited in the wild.

即使是成熟且经过严格测试的软件，也无法避免存在 bug，而大型语言模型（LLM）越来越擅长于发现这些 bug。Linux 内核是当今世界上测试最为完善的软件之一，部署在全球数十亿台设备上，但最近却发现了超过 1000 个漏洞。随着前沿模型越来越能够将看似 benign 的 bug 串联起来，形成关键的安全漏洞，我们需要开发出能够在这些 bug 被利用之前就发现并修复它们的技术。

> Ideally, such techniques could find and patch *all bugs,* and then provide some proof that there are no more to be found. *Formal verification* is one way to do this. In formal verification, developers translate their code into a mathematical model, then try to prove that it always follows some defined set of security rules. If they fail to prove this, that means there could be a bug in the code that would violate a rule, and the nature of the failure implies what the bug might be. Repeating this process (after eliminating the cause of failure each time) will ultimately yield proof that the code is devoid of any bug that would violate those rules.

理想情况下，这类技术能够查找并修复 *all bugs,* 并提供证明，表明不再有其他可被发现的错误。 *Formal verification* 是其中一种方法。在 formal verification, 开发者翻译他们的代码转换为数学模型，然后尝试证明它始终遵循一些既定的安全规则。如果他们未能证明这一点，这意味着代码中可能存在一个会违反规则的漏洞，且失败的性质暗示了漏洞可能是什么。重复此过程（在每次消除失效原因后）最终将产生证明，表明代码不含任何会违反这些规则的漏洞。

> However, formal verification isn’t easy. Proofs can be many times larger than the original code, and writing them requires significant effort and a niche, highly specialized skill set. For instance, it took two person-years to implement the seL4 operating system kernel, but *20* person-years [to formally verify it](https://sel4.systems/Research/pdfs/comprehensive-formal-verification-os-microkernel.pdf). Accordingly, formal verification has been practical only in truly mission-critical applications, such as [Airbus’s avionics code](https://www.astree.ens.fr/papers/astree_airbus_sas2007.pdf).

然而，形式化验证并不容易。证明可能比原始代码大很多倍，而编写它们需要大量的努力和一套小众、高度专业化的技能集。例如，实现seL4操作系统内核只需两人年，但*20*人年[用于对其进行形式化验证](https://sel4.systems/Research/pdfs/comprehensive-formal-verification-os-microkernel.pdf)。因此，形式化验证仅在真正关键的任务应用中才具有实用性，例如[空客的飞控代码](https://www.astree.ens.fr/papers/astree_airbus_sas2007.pdf)。

> But LLMs are making it far easier. Frontier models can now produce correctness proofs for real-world software fully autonomously. To demonstrate this, we asked Claude to prove useful security properties across 123 open-source libraries, including showing that some of their executable artifacts can *never* crash under certain conditions. Specifically, Claude proved that these programs will always exit normally without triggering memory-safety errors or failing assertions, for every input less than 64 MB and every modeled Linux operating system (OS) response and memory layout, under certain assumptions (namely that the program runs as a single-threaded static binary with a fixed memory budget on a RISC-V[^1] CPU using Linux OS). This is still far away from fixing *all* possible bugs, but it does get us much closer than before and provides a roadmap toward that end.

但 LLMs 正在让这一切变得更加容易。前沿模型现在可以完全自主地为现实世界软件生成正确性证明。为演示这一点，我们要求 Claude 证明在 123 个开源库中存在一些有用的安全属性，包括证明某些可执行文件中在特定条件下*永远*不会崩溃。具体而言，Claude 证明了这些程序将始终以正常方式退出，且不会触发内存安全错误或失败断言，对于小于 64 MB 的每个输入，以及每种被建模的 Linux 操作系统 (OS) 响应和内存布局，在特定假设下（即，程序在一个使用 Linux OS 的 RISC-V[^1] CPU 上作为单线程静态二进制文件运行，并带有固定内存预算）都是如此。这距离修复*所有*可能存在的 bug 仍然很远，但它让我们在比以前更接近，并为实现这一目标提供了一条路线图。

> We’re publishing a [subset of these proofs](https://github.com/theorem-labs/oss-verify-proofs) so that anyone can verify and reuse them, along with the [RISC-V and OS semantics](https://github.com/theorem-labs/rocq-linux-process-semantics). [Theorem](https://theorem.dev/), our collaborator on this project, is also offering to run the same pipeline for [other open-source projects](https://theorem.dev/oss-verify/), and is publishing a [Claude skill](https://github.com/theorem-labs/oss-verify/blob/main/.claude/skills/add-project/SKILL.md) to help developers get started with verifying their own code.

我们正在发布这些证明的[子集](https://github.com/theorem-labs/oss-verify-proofs)，以便任何人都可以验证和重用它们，同时也包含[RISC-V 和操作系统语义](https://github.com/theorem-labs/rocq-linux-process-semantics)。[Theorem](https://theorem.dev/)，我们在此项目上的合作者，也愿意为[其他开源项目](https://theorem.dev/oss-verify/)运行相同的管道，并正在发布一个[Claude技能](https://github.com/theorem-labs/oss-verify/blob/main/.claude/skills/add-project/SKILL.md)，帮助开发者开始验证他们自己的代码。

> Formal verification is a broad field with many methodologies. Below, we also describe our initial explorations using other formal verification methods to accelerate other security or software development tasks, such as assessing the security of the zlib compression algorithm, proving behavioral equivalence of a Python interpreter written in Rust, and rooting out long-standing bugs in critical software.



形式化验证是一个广阔的领域，拥有许多方法论。下面，我们还将描述我们使用其他形式化验证方法进行的初步探索，以加速其他安全或软件开发任务，例如评估 zlib 压缩算法的安全性、证明用 Rust 编写的 Python 解释器的行为等效性，以及根除关键软件中长期存在的 bug。

> The road ahead for formal verification is promising. The cost of writing proofs is falling as models become more intelligent. Moreover, as more code is formalized and methods of achieving security guarantees become more standardized, the ability to reuse or modify proofs across codebases will amortize the cost. We encourage all developers to explore formal verification with LLMs—*especially* those who previously tried it with less capable models and found it didn’t work.

形式化验证的前景十分光明。编写证明的成本正在下降，因为模型变得更加智能。此外，随着更多代码被形式化以及实现安全保证的方法日益标准化，跨代码库重用或修改证明的能力将摊销成本。我们鼓励所有开发者尝试使用 LLMs — *especially* 那些之前使用能力较弱的模型尝试过但发现不奏效的开发者。

> In the rest of this post, we cover our formal verification experiments in more detail.

在本文其余部分，我们更详细地介绍我们的形式化验证实验。

> ## Turning tests into proofs

## 将测试转化为证明

> To prove that a piece of software is correct, we must first state what “correct” even means. Correctness is defined by the *specification* (spec). In some programs, there is a clear way to formally specify the program’s intended behavior. For example, a [PNG](https://en.wikipedia.org/wiki/PNG) decoder takes a sequence of bytes and (following [RFC 2083](https://www.rfc-editor.org/info/rfc2083/)) decodes these bytes into the corresponding image. But for most programs, things aren’t so straightforward. What would it mean for a text editor or a web browser to be “correct”? The difficulty of obtaining a comprehensive and unambiguous spec is a significant obstacle to verifying software at a larger scale.



要证明一个软件是正确的，我们首先必须明确“正确”究竟意味着什么。正确性是由规范（specification / spec）定义的。在某些程序中，存在一种清晰的方法来形式化地规范程序的预期行为。例如，一个 [PNG](https://en.wikipedia.org/wiki/PNG) 解码器接收一字节序列，并（遵循 [RFC 2083](https://www.rfc-editor.org/info/rfc2083/)）将这些字节解码为相应的图像。但对于大多数程序而言，情况并非如此简单。对于文本编辑器或网页浏览器而言，做到“正确”意味着什么？获得全面且无歧义的规范之难度，是大规模验证软件的重大障碍。

> To address this for the code in the open-source libraries that we sought to prove, we take the approach of automatically converting their preexisting compilable test suites into a spec by encoding the rule “this test suite always passes,” using a general model of what it means to execute any RISC-V-compiled binary on Linux. Historically, proving such specs was intractable, given the inherent complexity of writing a proof that can encompass and make an argument over all possible behaviors and interactions of tens of thousands of assembly instructions over any input (and the fact that proofs tend to be extremely large as a result). This is where today’s LLMs come in: churning through millions of lines of code in pursuit of a well-defined goal is a task that LLMs are extremely well suited for.

为了解决我们旨在证明的开源库代码的问题，我们采用的方法是将这些库已有的、可编译的测试套件自动转换为规范，通过编码规则“这个测试套件始终通过”，并使用一个普遍的模型来描述在 Linux 上执行任何 RISC-V 编译的二进制文件的含义。历史上，证明这样的规范是棘手的，因为编写能够涵盖和论述上千万条汇编指令在任意输入下所有可能行为和交互的证明本身具有固有的复杂性（并且因此导致证明规模极其庞大）。这就是当今大型语言模型（LLM）的用武之地：处理数百万行代码以追求明确目标的任务，是 LLM 所擅长的。

> For this project, we started with *fuzz tests*. In these tests, developers write an *entry point*[^2] into their code that takes inputs, such that any input that causes a crash is a bug the authors care about. Then the *fuzzer,* a testing engine, generates enormous numbers of semirandom and mutated inputs at the entry point to try to find a bug (visualized in Figure 1). The longer a fuzzer runs, the more bugs it can find. But this is inherently a brute-force process, with no guarantee of exercising every possible code path, regardless of how many inputs you try.

对于这个项目，我们从 **模糊测试**（fuzz tests）入手。在这些测试中，开发者编写一个 *入口点*[^2]，该入口点接收输入，使得任何引发崩溃的输入都被视为开发者关心的缺陷。然后 *模糊器*（fuzzer，即测试引擎）在入口点处生成大量随机变异的输入，以尝试发现缺陷（如图 1 所示）。模糊器运行的时间越长，找到的缺陷就越多。但这本质上是一种Brute-force（暴力搜索）过程，无论你尝试多少输入，都无法保证覆盖所有可能的代码路径。

<video controls="" src="https://cdn.sanity.io/files/4zrzovbb/website/6851e539c36759ac1682d6b169d0319b1d97a0f7.mp4"></video>

> Fuzzing works by running huge numbers of generated inputs through one entry point to find the inputs that cause a crash. There are infinite inputs, so the search can never be complete.

Fuzzing 通过大量生成的输入，以单一入口进行测试，以寻找导致崩溃的输入。输入数量无限，因此搜索永远无法完整。

> To find all the bugs that would’ve been surfaced by a fuzz test, we turned the fuzz test into a spec defined over the compiled RISC-V instructions. The spec says that the fuzz test won’t crash for *any* input less than 64 MB.[^3] If Claude can prove this spec, the fuzz test on RISC-V becomes superfluous: fuzzing that entry point will never find any bugs.

为了 查找 fuzz test 可能暴露的所有 bugs，我们将 fuzz test 转化为定义在编译后的 RISC-V instructions 上的 spec。规范指出，fuzz test 对于*任何*输入少于 64 MB 的输入都不会崩溃。[^3] 如果 Claude 可以证明此 spec，RISC-V 上的 fuzz test 变得多余：fuzzing that entry point will never find any bugs。

> We did this for hundreds of projects in Google’s [OSS-Fuzz](https://github.com/google/oss-fuzz) initiative, which provides continuous fuzz testing for qualifying open-source projects. OSS-Fuzz contains thousands of developer-authored entry points that look for broken code properties by crashing (for example, on a failed assertion). OSS-Fuzz automatically instruments C and C++ programs with AddressSanitizer[^4] (ASan), causing them to crash whenever memory is accessed improperly (which is a [leading cause of software vulnerabilities](https://www.cisa.gov/news-events/news/cisa-nsa-fbi-and-international-cybersecurity-authorities-publish-guide-case-memory-safe-roadmaps)). Broad-spectrum specifications like memory safety apply to almost all software.

我们曾在谷歌的 OSS-Fuzz 计划中为数百个项目提供过此类服务。OSS-Fuzz 为符合条件的开源项目提供持续的模糊测试。该计划包含数千个由开发者编写的入口点，这些入口点通过触发崩溃（例如在断言失败时）来查找代码中的错误属性。OSS-Fuzz 会自动为 C 和 C++ 程序添加 AddressSanitizer[^4]（ASan），使其在非法访问内存时（这是软件漏洞的主要原因之一）崩溃。内存安全等广泛基础规范几乎适用于所有软件。[^4]

<video controls="" src="https://cdn.sanity.io/files/4zrzovbb/website/ce66333a831ef2f37e91c2f0ecfdaca27cdfa2c9.mp4"></video>

> The open-source library and its existing fuzz test are compiled to a RISC-V executable. This executable, along with Theorem’s RISC-V and OS formal semantics and the desired no-crash property, mechanically yield a specification the proof must satisfy. Claude writes the proof; the Rocq kernel checks it against the specification. Green marks what’s proven, conditional on the trusted components being correct.

开源库及其现有的模糊测试被编译为 RISC-V 可执行文件。 该可执行文件， 以及 Theorem’s RISC-V 与 OS 形式语义以及期望的 no-crash property， 机械地提供了证明必须满足的规格。 Claude 编写证明； Rocq 核心检查它是否符合规格。 Green 标记已证明的内容， 前提是受信任的组件正确。

> Over the span of a few weeks, **Claude successfully patched the bugs it found and then proved that there are no crashes on any input (up to 64 MB) for 239 entry points across 123 different OSS-Fuzz libraries.** These proofs operate on the compiled RISC-V instructions (i.e., executable binaries), and they comprise about 180 million lines of Rocq, with a typical proof running to about 600,000 lines to provide security guarantees on binaries with a median length of 18,000 RISC-V instructions. These proofs are built by translating the RISC-V assembly code to a mathematical model using Theorem’s RISC-V instruction and Linux process semantics. This means these proofs currently assume that the program runs as a single-threaded static binary with a fixed memory budget on a RISC-V CPU using Linux OS. Expanding the scope of these proofs is well within reach, as it would involve standardizing semantics for more assembly architectures and other operating system processes. See [an expert’s take](https://www-cdn.anthropic.com/files/4zrzovbb/website/6867eadf760258fa8b42a504600cd3c036d16358.pdf) on the proofs Claude wrote.

短短数周内，**Claude 成功修复了它发现的漏洞，并证明对于 123 个不同 OSS-Fuzz 库的 239 个入口点，任何输入（最高 64 MB）均不会导致崩溃。** 这些证明作用于编译后的 RISC-V 指令（即可执行二进制文件），包含约 1.8 亿行 Rocq，典型证明长度约为 600,000 行，可为长度中位数为 18,000 条 RISC-V 指令的二进制文件提供安全保障。这些证明通过使用 Theorem 的 RISC-V 指令和 Linux 进程语义，将 RISC-V 汇编代码转译为数学模型来构建。这意味着这些证明目前假设程序以单线程静态二进制文件形式在 RISC-V CPU 上运行，使用 Linux 操作系统，并具有固定内存预算。扩大这些证明的范围指日可待，因为这涉及为更多汇编架构和其他操作系统进程标准化语义。参见 [专家对 Claude 编写的证明的看法](https://www-cdn.anthropic.com/files/4zrzovbb/website/6867eadf760258fa8b42a504600cd3c036d16358.pdf)。

<video controls="" src="https://cdn.sanity.io/files/4zrzovbb/website/53266e21746d781c80dbe9296b90da94b676dd67.mp4"></video>

> A formal no-crash proof over all inputs rules out all crashes along any path reachable from the entry point. While iterating on its proof, Claude can also find and fix any remaining reachable crash-producing bug.

一个关于所有输入的正式无崩溃证明能够确保从入口点可达的所有路径中都不存在崩溃风险。在验证这一证明的过程中，Claude 还可以找出并修复任何剩余的可到达路径上的崩溃 bug。

> While this is an enormous volume of proof code, virtually none of it needs to be manually reviewed. The Rocq proof checker ensures that the spec is correctly satisfied by the proof. As a result, the only artifacts that a developer needs to trust are:

尽管这是巨大数量的 proof code，但基本上不需要人工审查。Rocq proof 检查器 确保 spec 由 proof 正确满足。因此，开发者需要信任的唯一 artifact 是：

> - The formal models of RISC-V and of Linux processes;
> - The exact theorem statements that were proved;
> - The Rocq proof checker itself.[^5]

- RISC-V 和 Linux 进程的形式化模型；
- 已被证明的精确定理陈述；
- Rocq 证明检查器本身。[^5]

> **This doesn’t mean these libraries contain no bugs.** Instead, it means that any **remaining bugs either are to be found within the artifacts listed above or are outside the scope of Claude’s proof**. Hardening those still-possibly-buggy trusted components (Rocq, RISC-V, and Linux semantics) is not insignificant, but it’s a far more tractable task than debugging every line of code the scaled-out proofs cover—especially as this approach can secure an arbitrary number of projects without increasing the size of the trusted components.

**这并不意味着这些库中没有 bug。**

相反，它意味着任何**剩余的 bug 都应当在上述列出的工件中被发现，或者超出 Claude 证明的范围**。加固这些仍可能有 bug 的可信组件（Rocq、RISC-V 和 Linux 语义）并非无关紧要，但这是一项远比调试覆盖扩展后证明的每一行代码的任务更可行、更可行的——尤其这种方法可以在不增加可信组件规模的情况下，为任意数量的项目提供安全保障。

> We welcome independent verification of our proofs and encourage refinement of our approach. To that end, we are publishing the trusted components (above) made for this project that are not already public; Claude’s complete Rocq proofs for fuzz tests that did not require patching; and specifications for other fuzz tests we were not able to prove.

我们欢迎对我们的证明进行独立验证，并鼓励改进我们的方法。为此，我们将发布由本项目制作且尚未公开的可信组件（上述）；Claude 的完整 Rocq 证明，用于那些无需修补的 fuzz tests；以及我们未能证明的其他 fuzz tests 的规范。

> ## Finding and fixing bugs

## 寻找与修复 bug

> Above, we showed that you can turn many open-source libraries’ developer-written tests (fuzz tests) into specs that Claude can prove will always pass, sometimes after patching the remaining bugs it found. For this reason, the process of attempting to prove these specs discovered hundreds of bugs.

上文展示，我们可以将许多 open-source libraries 的开发者编写的 (fuzz tests) 转化为 specs，让 Claude 能够证明它们永远会通过，有时需要在修补剩余 bug 后才能实现。因此，尝试证明这些 specs 发现了数百个 bug。

> Lots of bugs showed up during Claude’s attempts to prove hundreds of entry points. To ensure that Claude didn’t have to stop for a human every time this happened, we let Claude fix the bugs it found: it patched the code, which caused the spec to be regenerated with that patched code, and then Claude proceeded to prove that new spec.[^6]

在 Claude 尝试证明数百个入口点的过程中，出现了大量 Bug。为避免 Claude 每次遇到此情况都要停下来等待人工介入，我们让其自行修复发现的 Bug：它修补代码，促使规范（spec）基于修补后的代码重新生成，随后 Claude 继续证明该新规范。[^6]

> Many of the bugs we found are ones that a fuzzer would be unlikely to ever find. Fuzzers mutate small inputs, [typically capped at 1 MB](https://github.com/AFLplusplus/AFLplusplus/blob/stable/include/config.h#L314), and typically rely on code coverage to guide them toward bugs. While proving an entry point in one library, Claude found a counter underflow in its copy of a decompressor that led to an out-of-bounds write, but only on inputs of around 20 MB that had one rare, specific layout. Other bugs include an out-of-bounds read in an image decoder that needed a 64 MB input and over 2 GB of memory, an out-of-bounds read in another library that needed a particular sequence of calls across two handles to the same file, and a rediscovery of CVE-2026-56132 in libexpat, which needed deeply nested input. Claude also found logic bugs that never crash at all. While proving that one library was memory-safe, for example, it noticed that a feature for restricting which files an application can load isn’t always enforced.

我们发现的许多 bug 是 fuzzer 难以 ever 发现的。Fuzzers 突变小输入，[typically capped at 1 MB](https://github.com/AFLplusplus/AFLplusplus/blob/stable/include/config.h#L314)，and typically rely on code coverage to guide them toward bugs。While proving an entry point in one library, Claude found a counter underflow in its copy of a decompressor that led to an out-of-bounds write, but only on inputs of around 20 MB that had one rare, specific layout。Other bugs include an out-of-bounds read in an image decoder that needed a 64 MB input and over 2 GB of memory，an out-of-bounds read in another library that needed a particular sequence of calls across two handles to the same file，and a rediscovery of CVE-2026-56132 in libexpat，which needed deeply nested input。Claude also found logic bugs that never crash at all。While proving that one library was memory-safe，for example，it noticed that a feature for restricting which files an application can load isn’t always enforced。

> The ultimate goal of this project was to achieve a proof that the RISC-V-compiled fuzz tests had no remaining crashes to find. However, bugs like the above show that the process has another benefit, regardless of whether that goal is achieved: even just attempting this process yields real bugs that need to be fixed.

该项目的最终目标是证明 RISC-V 编译的模糊测试不再有剩余的崩溃可被发现。然而，如前所述的 bug 表明，无论该目标是否达成，该过程还有一项额外收益：仅仅是尝试这一过程就会发现真实且需要修复的 bug。

> ### Proving more than memory safety

### 证明不仅仅是内存安全

### 证明不仅仅是内存安全

### 证明不仅仅是内存安全

> Proving that a fuzz test has no more crashes to find is more significant than it sounds. It’s common for fuzz tests in real-world code to test for violations of meaningful high-level properties, such as encode-decode roundtripping, idempotence, algebraic laws, differential testing, self-consistency, or equivalence to reference implementations. For example, a fuzz test for the LZO compression algorithm asserts that if you compress an input, then decompress it, the result is the same as the original. If the property does not hold, the program crashes—so proving the test never crashes is equivalent to proving the property itself.

证明 fuzz test 没有更多的崩溃值得发现比人们想象的更有意义。在真实代码中 fuzz test 常测试有意义的高级属性的违规情况，例如 encode-decode roundtripping、idempotence、algebraic laws、differential testing、self-consistency 或 equivalence to reference implementations。例如 LZO compression algorithm 的 fuzz test 断言：如果你压缩一个输入，然后解压它，结果与原始输入相同。如果性质不成立，程序崩溃——所以证明测试从不崩溃等同于证明性质本身。

> This can also occur even when the properties are not directly specified by the developer. For example, in order for Claude to complete its OSS-Fuzz proof for cpp-httplib, it was necessary to rule out the possibility of a stack overflow due to too much recursion in the std::set destructor. This recursion depth is bounded by the maximum depth of a tree, so Claude had to prove (on machine code!) that libc++’s red-black tree rebalancing algorithm is correctly optimized to keep the tree’s depth logarithmically bounded.

这甚至也可能发生，即使这些属性并未由开发者直接指定。例如，为了让 Claude 完成它针对 cpp-httplib 的 OSS-Fuzz 证明，必须排除因 std::set 析构函数中过多递归而导致的栈溢出可能。这个递归深度受最大树深度的限制，因此 Claude 必须证明 libc++ 的 red-black tree 重新平衡算法是否被正确优化，从而保持 tree 的深度 对数 有界。

> ### Other formal verification case studies

# 其他形式化验证案例研究

> Formal verification is an expansive domain. The fuzz-test-to-proof example above is one instance of LLMs making formal verification more widely usable by directly applying proofs to machine code.

形式验证是一个广阔的领域。上面的模糊测试到证明的例子是 LLMs 通过将证明直接应用于机器码，使形式验证更广泛地可用起来的一个实例。

> We’ve also seen success using LLMs with formal verification in other ways. For example, we asked Claude to write a formal spec of [RFC 1950](https://www.rfc-editor.org/info/rfc1950/), the technical document that defines the zlib compression file format. Then, we had Claude prove that the zlib implementation in the Linux kernel correctly implements that spec. As with the examples above, Claude proved this property at the binary level, except instead of RISC-V, Claude directly proved the x86-compiled binary using Claude-generated (and heavily tested) formal semantics of the x86 ISA.[^7] We then repeated this process for half a dozen other widely used libraries. Along the way, we found some minor (unexploitable) bugs in corner cases, which are in the process of being filed upstream. We draw two conclusions from this exercise: (1) these extremely well-tested codebases are already almost fully correct, and (2) it is possible to prove end-to-end correctness properties about real existing codebases.

我们还发现LLM在其他形式化验证方面的应用取得了成功。例如，我们让Claude为[RFC 1950](https://www.rfc-editor.org/info/rfc1950/)编写了正式规范——这份技术文档定义了zlib压缩文件格式。随后，我们让Claude证明Linux内核中的zlib实现正确遵循了该规范。与上述示例类似，Claude在二进制层面验证了这一特性，不过这里涉及的是x86编译的二进制文件，而非RISC-V。Claude利用自己生成的（并经过广泛测试的）x86 ISA形式化语义，直接验证了这一特性。[^7] 之后，我们又将这一过程应用于其他十几款广泛使用的库。在这个过程中，我们发现了一些次要的（不可利用的）边界情况漏洞，目前正在上报给上游。我们从这次实践中学到了两个结论：(1) 这些经过充分测试的代码库已经几乎完全正确，(2) 可以对真实存在的代码库证明端到端的正确性特性。

> In another experiment, we asked Claude to develop an interpreter for a large subset of Python in Rust, and to prove (using Verus, a verification tool for Rust) that it adheres to the CPython semantics outlined in an academic paper. We then measured the adherence to CPython’s behavior empirically, running over 1.7 million randomly generated Python programs, finding identical behavior with CPython in 99.95% of tests, with remaining test differences as unsurprising known corner cases.



在另一项实验中，我们要求 Claude 在 Rust 中开发一个用于解释 Python 大子集的解释器，并使用 Rust 的验证工具 Verus 证明它遵循学术论文中概述的 CPython 语义。随后，我们通过运行超过 170 万个随机生成的 Python 程序，实证测量了其对 CPython 行为的遵循情况。结果发现，在 99.95% 的测试中，其行为与 CPython 完全一致，而其余的测试差异属于意料之中的已知边界情况。

> We also found issues in several widely used and critical applications via formal verification attempts of simple security properties. In one of them, we discovered a previously unknown logic bug that had been latent for more than a decade. During an effort to verify a widely used PDF reader, we found as many security bugs in one week as are typically reported in a year.

我们还通过对简单安全属性的形式化验证尝试，在多个广泛使用且至关重要的应用程序中发现了问题。在其中一个应用中，我们发现了一个此前未知且已潜伏十余年的 logic bug。在验证一款广泛使用的 PDF 阅读器的过程中，我们仅用一周时间就发现了通常一整年才会报告的数量级安全漏洞。

> See [the Appendix](https://www-cdn.anthropic.com/files/4zrzovbb/website/6867eadf760258fa8b42a504600cd3c036d16358.pdf) for more details on some of these efforts.

请参阅附录（https://www-cdn.anthropic.com/files/4zrzovbb/website/6867eadf760258fa8b42a504600cd3c036d16358.pdf），了解更多关于这些努力的详细信息。

> ## This is just the beginning

## 这只是开始

> One of the key limitations of LLM-assisted formal verification is that the proofs can take hundreds of millions of tokens to produce. Cost-efficiency is critical if our goal is to make these methods available to the entire software ecosystem. Fortunately, there are compelling reasons to expect efficiency to improve.

LLM-assisted 的一个关键限制是证明过程可能需要数百万 token 来生成。成本效率至关重要， 如果我们的目标是让这些方法在整个 software ecosystem 中可用。幸运的是， 有 compelling reasons 期待 efficiency 提升。

> ### Newer models need fewer tokens

### 更新的模型 需要更少的 Token

> We built 36 small verification tasks [from real OSS-Fuzz code](https://www-cdn.anthropic.com/files/4zrzovbb/website/6867eadf760258fa8b42a504600cd3c036d16358.pdf). Opus 5.5 proves half of them with about 40% fewer tokens than Opus 5. We expect this trend to continue as models are trained on long verification tasks.

我们构建了 36 个小型验证任务 [from real OSS-Fuzz code](https://www-cdn.anthropic.com/files/4zrzovbb/website/6867eadf760258fa8b42a504600cd3c036d16358.pdf)。Opus 5.5 证明了其中一半，使用的 tokens 比 Opus 5 少约 40%。我们预期随着模型在长验证任务上接受训练，这一趋势将继续。

![Line chart of the share of 36 verification tasks completed by token budget per agent for Opus 5.5, Fable 5.1, and Opus 5. Opus 5.5 finishes proofs with the fewest tokens.](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F02207cbc6f46e272fe9a0fa7929cb8ec29578e74-1920x980.png&w=3840&q=75)

> Opus 5.5 finishes proofs faster than earlier models. Share of 36 formal verification tasks proved by a single agent at a given token budget. Each task received three independent single-agent attempts at a 5M-token budget, and counts as proven when the first attempt finishes.

Opus 5.5 在给定 Token 预算下，单个 Agent 完成 36 个形式化验证任务的成功率。每个任务在 500 万 Token 预算下获得三次独立的单 Agent 尝试，当首次尝试完成时记为已证明。

> ### Proofs can be reused

### 证明可以被重用

> When agents work separately, they often end up duplicating a lot of effort. Proofs, like software, are recursively built from smaller proofs—and the smaller the proofs are, the more reusable they tend to be. To measure the impact of this, we let agents copy each other’s proofs as they worked on proving their own targets. When given access to this shared workspace, agents needed 17% fewer tokens than when they worked alone, and some agents even succeeded after previously failing in a solo attempt.



当 Agent 单独工作时，它们往往最终会重复大量的工作。证明像软件一样，是由更小的证明递归构建而成的——而且证明越小，它们往往就越可复用。为了衡量这种影响，我们让 Agent 在证明各自目标的同时，互相复制彼此的证明。在获得该共享工作区的访问权限后，Agent 所需的 token 比单独工作时减少了 17%，一些 Agent 甚至在先前单独尝试失败后也取得了成功。

![Chart of 36 proofs in finishing order, with arcs joining proofs that share a file and bars showing the tokens spent on each proof compared with an agent working alone.](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F5078468fa7e09774b1ab6e86984ec5691d3d11fa-1080x712.gif&w=3840&q=75)

> The 36 proofs from one shared workspace, in the order they finished. An arc joins any two proofs that share an unchanged file; bars show the tokens spent writing each proof, and black lines show the same task’s average cost for an agent working alone, which was higher in 30 of the 34 completed proofs (agents working alone were not able to complete two of the proofs).

来自一个共享工作空间的36份证明，按完成顺序排列。一条弧连接任何两个共享未更改文件的证明；条形图显示每个证明所花费的token数，黑线显示同一任务中单独代理的工作平均成本，该成本在34份已完成证明中的30份中较高（两份证明无法由单独的代理完成）。

> We observed the same phenomenon occurring at scale during our OSS-Fuzz proof effort. Most of a proof concerns code that every program contains (particularly initialization of the C runtime and AddressSanitizer), so very different programs can end up with significantly overlapping proofs. Agent teams took advantage of this by copying another team’s finished proof and then adapting it to their own program (Figure 6).

我们在 OSS-Fuzz 验证过程中观察到这一现象在大规模下的出现。大多数验证证书都涉及到每个程序都包含的代码（特别是 C 运行时和 AddressSanitizer 的初始化），因此截然不同的程序最终可能会得到显著重叠的验证证书。代理团队正是利用了这一点，通过复制其他团队已完成的验证证书，然后将其适应到自己的程序中（图 6）。

![Block chart of the proofs for libcups, freerdp, and libzmq, showing how much of each part was identical, lightly edited, edited more or new.](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F8e295614d599d548fbd2ff97ed3cc3e62f501b2b-1920x1248.png&w=3840&q=75)

> Agents copied an existing proof and adapted it to each new program. Each column represents one program’s complete proof by share of bytes. Blocks are the parts of the proof and each block shows how much was kept identical, lightly edited (same file, size within 2%), edited more, or newly written. The shared parts gained almost no new code.



Agents（智能体）复制了现有的证明，并针对每个新程序对其进行了调整。每一列按字节占比展示了一个程序的完整证明。区块（Blocks）是证明的组成部分，每个区块展示了有多少内容保持原样、轻微编辑（同一文件，大小在 2% 以内）、编辑较多，或是全新撰写。共享部分几乎没有新增代码。

> This reusability of proofs is how [Mathlib](https://leanprover-community.github.io/), a shared library of formal mathematics in Lean, grew to nearly [300,000 theorems](https://leanprover-community.github.io/mathlib_stats.html) submitted by over 700 contributors: each new proof builds on the existing body of work. We accumulated a similar body of proofs in the course of our OSS-Fuzz effort, some of which we’re including in our release (we are not releasing proofs that may reveal an unpatched bug in the open-source software).

证明的可重用性就是[Mathlib]（Lean中的形式数学共享库），它通过超过700位贡献者的提交，积累了接近[300,000个定理](https://leanprover-community.github.io/mathlib_stats.html)：每个新证明都建立在现有的工作基础之上。我们在OSS-Fuzz努力过程中积累了类似的证明体量，其中一些将包含在我们的发布中（我们不会发布可能暴露开源软件未修补漏洞的证明）。

> As we graduate from these initial experiments, we need a strategy for verifying the enormous body of *existing* software, starting with the most critical dependencies. As we’ve shown, this can be achieved at scale by using generic specs and working at the binary level, sidestepping the need to rewrite entire codebases in another language.

随着我们离开这些初步实验，我们需要一种策略来验证海量现有的软件，从最关键的依赖开始。正如我们所展示的，通过使用通用规格并在二进制层面工作，我们可以在大规模下实现这一点，从而避免用另一种语言重鸾整个代码库的需求。

> This approach also facilitates the reuse of proofs at package-level granularity, which means that each dependency only needs to be verified once. Dependencies follow a power law: proving even a small set of shared libraries makes a huge swath of software feasible to prove. For more details, see [Theorem’s roadmap](https://theorem.dev/blog/verified-software-stack/) for verifying the entirety of the Nix ecosystem, which includes critical infrastructure like glibc, OpenSSL, and cURL.

这种方法还便于在包级别粒度上复用证明，这意味着每个依赖项只需验证一次。依赖项遵循幂律分布：即使证明一小组共享库，也会使得大量软件的证明成为可能。有关详细信息，请参阅[theorem的路线图](https://theorem.dev/blog/verified-software-stack/)，其中介绍了如何验证整个Nix生态系统，包括glibc、OpenSSL 和 cURL 等关键基础设施。

> ## Limitations

## 局限性

> In practice, formal verification can sometimes prove less about the security of the code than we would like.

在实践中，形式化验证有时证明的关于代码安全性的内容不及我们期望的。

> **“Formally verified” does not mean “bug-free.”** Claude can write a proof showing that a compiled program’s behavior satisfies the requirements of a formal spec (which is verified by an external proof checker). However, a proof checker can’t tell you whether your spec matches reality. To match reality, the spec must correctly encompass and model everything about the real-world machine that the verified program runs on, including the CPU and operating system. When bugs show up in verified code, it’s because the spec, or the assumed semantics of the machine, differs from reality. Fortunately, this also means we know *where* to look for remaining bugs, and how to design a system where those still-possibly-buggy gaps are minimized. Below are the ways this applies to our proofs, and ideas for future work that would close those gaps.

**“Formally verified” does not mean “bug-free.” Claude 可以写出一个证明，表明编译后程序的行为满足形式化 spec（由外部 proof checker 验证）的要求。然而， proof checker 不能告诉你你的 spec 是否符合现实。要匹配现实，spec 必须正确涵盖并建模验证程序运行的真实机器的所有方面，包括 CPU 和 operating system 。当 bugs 在 verified 代码中出现时，是因为 spec 或 machine 的 assumed semantics 与现实不符。Fortunately， 这也意味着我们知道 *where* 寻找 remaining bugs 的位置，以及如何设计一个系统，使那些仍可能有 bug 的缺口得到 minimized 。Below are the ways this applies to our proofs， and ideas for future work that would close those gaps.

> **The real machine does something the model doesn’t describe.** Our proofs are about single-threaded, static RISC-V binaries linked against musl libc. However, most people run these libraries on x86 or ARM and dynamically link them against glibc. To close this gap, we’d need system models that more closely resemble deployed systems. For example, a step toward this would be generating accurate semantics for x86.

**实际机器执行一些操作 model 不描述。** 我们的证明关于 single-threaded, static RISC-V binaries linked against musl libc。然而，大多数人在 x86 或 ARM 上运行这些库，并且动态链接它们 against glibc。为了缩小这个差距，我们需要 system models 更类似于部署的系统。例如，生成 accurate semantics for x86 是向前一步。

> **The claim may not cover everything we care about.** We proved that a crash never triggers for any input under 64 MB on many fuzzing entry points in Google OSS-Fuzz, including ASan crashes. However, ASan doesn’t detect all memory safety bugs, and we didn’t verify all the entry points for each library. Even if we had, the whole library wouldn’t be covered by verifying all entry points (especially if there is dead code). Additionally, real programs might misuse the library, leading to memory corruption in the *caller*. To close that gap, we’d need to specify what callers must do for each public function, and callers would have to strictly adhere to it.

该主张可能并未覆盖我们关心的全部内容。 我们证明在 Google OSS-Fuzz 中许多 fuzzing 入口点上，任何小于 64 MB 的输入都不会触发崩溃，包括 ASan 崩溃。 然而， ASan 不能检测所有 memory safety bugs，且我们未验证每个库的所有 entry points。 即使我们做到了，仅验证所有 entry points 也不会覆盖整个库（ 尤其是存在 dead code 时）。 此外，真实程序可能误用该 library，导致 *caller* 处出现内存损坏。 为了弥补这一差距，我们需要为每个 public function 指定调用方必须做什么，且调用方必须严格遵守。

> We expect that as we learn more about leveraging LLMs for formal methods, and as models continue to improve, these limitations will become tractable, and we’ll be able to verify a much larger percentage of the code we rely upon.

我们预期，随着我们对利用LLM进行形式化方法的认知不断加深，且模型能力的持续提升，这些局限性将变得可处理，我们将能够验证依赖代码的较大比例。

> ## Conclusion

## 结论

> The trajectory is clear: formal verification, which was historically practical only for bespoke expert-crafted guarantees in the most safety-critical code, will soon be as practical as fuzzing is today for almost all production software. Just like static types, testing frameworks, and other correctness tooling, verification will mature from “bolted-on” to “built-in,” driven not only by LLMs but also by innovations in language design and development workflows.

轨迹清晰：formal verification，历史上仅在 most safety-critical code 中的定制的专家级保证才实际可行，will soon be as practical as fuzzing is today for almost all production software. 就像 static types，testing frameworks，和其他 correctness tooling，verification will mature from “bolted-on” to “built-in,” driven not only by LLMs but also by innovations in language design and development workflows.

> In today’s world—where LLMs automatically scan for and find increasingly more code vulnerabilities—we must use processes that can *guarantee* code security properties. LLM-scaled formal verification is a promising approach toward securing these guarantees at a scope and scale that were previously unattainable. We encourage others to experiment so we can collectively build a world in which robust software has proliferated very widely and software bugs are a well-understood and quickly addressable rarity.

当今世界——LLMs 自动扫描并发现越来越多的代码漏洞——我们必须使用能够 *保证* 代码安全属性的流程。LLM 规模化形式化验证是一种有前景的方法，可以在以前无法实现的范围和规模上保障这些保证。我们鼓励其他人进行实验，以便我们能共同构建一个世界：在该世界中，强健的软件已非常广泛地普及，而软件缺陷是一种被充分理解且能够快速解决的罕见情况。

> [Read the full appendix.](https://www-cdn.anthropic.com/files/4zrzovbb/website/6867eadf760258fa8b42a504600cd3c036d16358.pdf)



我无法访问你提供的链接，无法查看 PDF 文件内容。请将附录的文本内容直接粘贴给我，我会为你进行翻译。

> [^1]: 01RISC-V is a processor design, like x86 or ARM, that defines the assembly instructions (the basic commands a chip carries out) that software is compiled into.

[^1]: 01RISC-V 是一种处理器设计，类似于 x86 或 ARM，它定义了软件编译成的汇编指令（芯片执行的基本命令）。

> [^2]: 02An entry point is a front door into the code, provided by its authors for testing. Any input to the entry point that causes a crash is a bug the authors care about.

[^2]：入口点是代码作者提供的用于测试的入口。任何导致入口点崩溃的输入，都是作者需要关注的错误。

> [^3]: 03Increasing this requires trivial human effort to change the parameter and regenerate the spec, then have Claude reprove the statement.

[^3]: 03. 增加这一点只需要微不足道的努力去修改参数并重新生成规范，然后让 Claude 重新推翻该陈述。

> [^4]: 04AddressSanitizer is a compiler tool that adds checks to a program so that memory errors, such as buffer overflows and use-after-free, are detected and reported the moment they occur at runtime.

[^4]: AddressSanitizer 是一种编译器工具，它为程序添加检查功能，使得诸如缓冲区溢出和释放后使用等内存错误能够在运行时被检测到并立即报告。

> [^5]: 05This technically also means we have to trust the hardware, OS, OCaml compiler that the Rocq proof checker relies on.

从技术角度来看，这也意味着我们必须信任Rocq证明检查器所依赖的硬件、操作系统和OCaml编译器。

> [^6]: 06Note this leaves open the door to reward hacking. Reward hacking is when an AI model finds a shortcut that technically meets the goal it was given without doing what was actually intended, like a student who passes an exam by memorizing the answer key instead of learning the material. In this context, Claude could make any theorem provable by rewriting the program into one that trivially never crashes. To discourage this, we penalized any patch and offered extra credit for proving which inputs it changes and how few they are. We also logged and audited the patches for these failure modes.

[^6] 06Note 这打开了奖励劫持的可能性。奖励劫持是指 AI 模型发现一种技术上满足给定目标的捷径，但并未按预期实际完成任务，例如学生通过死记答案钥匙通过考试而非真正学习材料。在此情境下，Claude 可以通过重写程序为其创建一个永远不会崩溃的简化版本，从而使任何定理都可被证明。为了抑制这种情况，我们对任何补丁施加处罚，并为证明它修改的输入以及涉及的数量少而提供额外学分。我们还记录并审计了这些失败模式下的补丁。

> [^7]: 07We think that the ability of Claude to—entirely autonomously—generate the formal semantics of an ISA is a separate interesting lesson. While we can not be sure our semantics themselves are perfect, empirically we have found that single-stepping through our semantics can boot an Ubuntu userspace on top of a Linux kernel. Generating these semantics also identified hundreds of mistakes in the official reference documentation, along with a smaller number of bugs in the hardware itself.

[^7]: 07我们认为，Claude 完全自主地生成指令集架构（ISA）的正式语义是一项独立且有趣的成就。尽管我们无法保证我们的语义是完美的，但实验证明，通过我们的语义单步执行，可以在 Linux 内核上成功运行 Ubuntu 用户空间。此外，生成这些语义还发现了官方参考文档中的数百个错误，以及少数硬件本身的问题。
