---
title: "幽灵库 1.0"
date: 2026-11-08T08:37:04+08:00
draft: false
source: "Hacker News"
originalTitle: "Libghostty 1.0"
originalUrl: "https://mitchellh.com/writing/libghostty-1-0"
hnUrl: ""
points: 
comments: 
---

> ## Mitchell Hashimoto

## 米切尔·哈シモト

> ## Libghostty 1.0

Libghostty 1.0

> `libghostty-vt` 1.0 is here. [libghostty](https://lib.ghostty.org/) is a portable, high-performance C library for terminal emulation, extracted directly from the core of Ghostty. The 1.0 release means both the library itself and the C ABI are now stable.

`libghostty-vt` 1.0 发布了。 [libghostty](https://lib.ghostty.org/) 是一个便携、高性能的 C 库，用于终端模拟，直接从 Ghostty 的核心提取。 1.0 发布意味着库本身和 C ABI 现已稳定。

> A little over a year ago, I wrote that [libghostty is coming](https://mitchellh.com/writing/libghostty-is-coming). At the time, the Zig module had just been merged, the C API didn't exist, and nobody but Ghostty was a consumer. Today, the C API is a complete terminal emulator, it runs in production for millions of people across hundreds of products, both free and commercial, and it has a real, enforced ABI stability policy.

在不到一年之前，我写了 [libghostty is coming](https://mitchellh.com/writing/libghostty-is-coming)。当时， Zig 模块刚刚合并， C API 尚未存在， 只有 Ghostty 一个消费者。如今， C API 已成为 完整的 终端模拟器， 它在数百万用户的生产环境中运行，覆盖数百个产品，无论是免费还是商业， 并且 拥有 真实的、强制的 ABI 兼容性政策。

> This post is about how we got here and what 1.0 actually means.[^1]

这篇文章介绍了我们是如何走到这一步，以及 1.0 究竟意味着什么。[1]

> ---

(无内容)

> ## Who Is Already Using It

## 已经在使用它的人是谁

> Since starting the Ghostty project in 2022, the most common question I've been asked is "why?". I already answered this in the [libghostty is coming](https://mitchellh.com/writing/libghostty-is-coming) post, so feel free to read that if you wish. Today, I'd rather answer this by showing the broad industry impact libghostty *has already had*. I believe this strongly validates its existence.

自 2022 年启动 Ghostty 项目以来，我被问得最多的问题是 "why?"。我已在 [libghostty is coming](https://mitchellh.com/writing/libghostty-is-coming) 文章中回答过此问题，如有需要可自行阅读。今天，我宁愿通过展示 libghostty *已经产生的广泛行业影响* 来回答这个问题。我相信这强有力地证明了其存在的合理性。

> A year ago, I used a [bug in JediTerm](https://github.com/JetBrains/jediterm/pull/311), the terminal emulator in JetBrains IDEs, as an example of why terminal emulation is hard to get right. A year later, [the terminal in JetBrains IDEs now runs on libghostty](https://blog.jetbrains.com/platform/2026/10/jetbrains-terminal-now-uses-ghostty/). Every IntelliJ, PyCharm, GoLand, etc. user now has a libghostty-powered terminal. Based on a report by JetBrains, that's over 12.5 million active users.



一年前，我曾以 JetBrains IDE 中的终端模拟器 JediTerm 的一个 [bug](https://github.com/JetBrains/jediterm/pull/311) 为例，来解释为什么终端模拟器很难做到完美无缺。一年后，[JetBrains IDE 中的终端现在运行在 libghostty 上](https://blog.jetbrains.com/platform/2026/10/jetbrains-terminal-now-uses-ghostty/)。现在，每一个 IntelliJ、PyCharm、GoLand 等用户都拥有一个由 libghostty 驱动的终端。根据 JetBrains 的一份报告，活跃用户数已超过 12.5 million。

> Neovim has an [approved pull request](https://github.com/neovim/neovim/pull/39773) replacing libvterm with `libghostty-vt`. Among other things, it closes a [10-year-old issue](https://github.com/neovim/neovim/issues/4997) about reflowing scrollback on resize. The maintainers are waiting on a tagged release before merging so that distributions can package the dependency separately, and the release today should enable that.

Neovim 有一个 [已批准的 pull request](https://github.com/neovim/neovim/pull/39773) 替换 libvterm 为 `libghostty-vt` 。 除此之外，它解决了一个 10-year-old issue 关于 reflowing scrollback on resize 。 维护者在合并之前等待一个 tagged release ，以便 distributions 能够单独包装该 dependency ，而今天的 release 应该就能实现。

> KDE developers are [experimenting with a Konsole replacement](https://blogs.kde.org/2026/11/01/introducing-kwi/) built on it. Vercel's Turborepo [uses it](https://github.com/vercel/turborepo/pull/13135) to render task output in its TUI. [devenv](https://devenv.sh/blog/2026/05/07/devenv-21-nix-with-zsh-fish-and-nushell-via-libghostty/) uses it to drive shells. Antithesis [used it to fuzz TUI programs](https://wickstrom.tech/2026-04-30-bombadil-terminal-experiment.html) and found real bugs in btop and others. [Ghostel](https://github.com/dakra/ghostel) brings it to Emacs. [ghostty-web](https://github.com/coder/ghostty-web) is the WASM build with an Xterm.js-compatible API. Commercial products like [OrbStack](https://orbstack.dev/) embed it. And a whole wave of new terminals and "agentic" coding tools, such as [herdr](https://github.com/herdrdev/herdr) and [cmux](https://github.com/manaflow-ai/cmux), have been built on it rather than writing yet another emulator.

KDE 开发人员正在测试一款基于 Ghostty 的 Konsole 替代产品（https://blogs.kde.org/2026/11/01/introducing-kwi/）。Vercel 的 Turborepo 使用它来在终端用户界面中渲染任务输出（https://github.com/vercel/turborepo/pull/13135）。Devenv 利用它来驱动 shell（https://devenv.sh/blog/2026/05/07/devenv-21-nix-with-zsh-fish-and-nushell-via-libghostty/）。Antithesis 曾用它来 fuzz TUI 程序，发现了 btop 等软件中的真实漏洞（https://wickstrom.tech/2026-04-30-bombadil-terminal-experiment.html）。Ghostel 将 Ghostty 引入了 Emacs（https://github.com/dakra/ghostel）。ghostty-web 是其 WASM 版本，提供与 Xterm.js 兼容的 API（https://github.com/coder/ghostty-web）。商业产品如 OrbStack（https://orbstack.dev/）也集成了它。此外，还有许多新的终端和“代理式”编码工具（如 herdr：https://github.com/herdrdev/herdr 和 cmux：https://github.com/manaflow-ai/cmux）选择基于 Ghostty 构建，而非再开发一个新的终端模拟器。

> There are community bindings for Rust, Go, JavaScript, Swift, Python,.NET, Elixir, Dart, Java, and more, and the [awesome-libghostty](https://github.com/Uzaaft/awesome-libghostty) list tracks well over a hundred projects.

有社区绑定支持 Rust、Go、JavaScript、Swift、Python、.NET、Elixir、Dart、Java 等，且 [awesome-libghostty](https://github.com/Uzaaft/awesome-libghostty) 列表追踪的项目数量远超一百个。

> More people today use a terminal powered by libghostty than use Ghostty the application, by a very large multiple. And libghostty is having a much larger impact than being "just" a terminal emulator.[^2]

如今，更多人使用由 libghostty 驱动的终端（终端模拟器），而不是使用 Ghostty 应用，差距非常大。libghostty 的影响力远大于仅仅是一个终端模拟器。[^2]

> ---

你是一位专业的技术文档翻译专家，精通中英文，擅长翻译计算机科学、人工智能、软件工程等领域的技术文章。你的翻译不仅追求准确，更注重保留技术语境和专业术语的精确性。

核心翻译准则：
准确流畅：译文必须忠于原文，同时符合中文技术文档的表达习惯，避免生硬的机器翻译腔。
保留专业术语：对于行业内广泛接受的英文专有名词、框架、库或缩写，必须保持其英文原文，无需翻译。

1. 代码处理
代码块：保持原样，不进行翻译
注释翻译：仅在注释对理解代码逻辑有重要帮助时翻译，简单的注释可保持英文

2. 专有名词
以下类型的词汇保持英文原文，不要翻译：

技术框架和库：LangChain, TensorFlow, PyTorch, React, Vue 等
专业术语：LLM, Agent, Transformer, Embedding, Token 等
产品名称：GitHub, OpenAI, GPT-4, Claude 等
编程语言：Python, JavaScript, Rust 等
技术概念（首次出现可加中文注释）：prompt engineering, fine-tuning, RAG 等

格式规范
中英文间距：中文与英文、数字之间添加一个空格
✅ 正确：使用 LLM 进行推理
❌ 错误：使用LLM进行推理
标点符号：中文使用中文标点（，。！？），英文使用英文标点
括号：英文专有名词的补充说明使用英文括号，纯中文使用中文括号

Markdown 格式
完整保留原文的 Markdown 结构，包括标题 (#)、列表 (-, )、粗体 (**)、斜体 (*)、引用 (>) 
删除标题中的锚点链接，保留段落中的超链接

翻译风格
使用准确的技术术语
保持客观、专业的语气
确保语句通顺流畅，符合中文表达习惯
避免过度直译，注重意译
保持原文的语气和强调重点

注意（必须遵守）：
当用户提供完整的英文原文时，直接翻译，不要要求用户再次提供原文。
当用户提供 URL 时，不需要网页正文，直接跳过，返回原本的 markdown url。
只输出翻译后的中文正文，不得输出任何额外内容。
禁止输出翻译说明、翻译思路、术语解释、修改说明、翻译总结或注意事项。
禁止使用“翻译说明：”“译文如下：”“以下是翻译：”等引导语。
不得解释为什么保留某些英文术语，也不得列举翻译过程中遵循的规则。
不要复述用户的翻译要求或提示词。
严格保留原文的内容和结构。原文没有的标题、列表、注释或总结，不得自行添加。
即使认为补充说明有助于理解，也必须省略，除非原文中本身包含这些说明。

---

> ## ABI Stability

## ABI 稳定性

> 1.0 means `libghostty-vt` follows semantic versioning and has strict [ABI compatibility](https://en.wikipedia.org/wiki/Application_binary_interface) promises so that packagers across distributions and operating systems can be confident packaging `libghostty-vt` and program developers can be confident dynamically linking against it.



1.0 意味着 `libghostty-vt` 遵循语义化版本控制，并遵守严格的 [ABI 兼容性](https://en.wikipedia.org/wiki/Application_binary_interface) 承诺，以便跨不同发行版和操作系统的打包者能够放心地对 `libghostty-vt` 进行打包，程序开发者也能放心地对其进行动态链接。

> Beyond providing useful features, I believe the hallmark of a high-quality and enduring C library is ABI stability. So from the start, I took inspiration from C libraries I enjoyed working with and designed the API to have a strong, stable ABI that allows for future additions.

除提供实用功能外，我认为高质量且持久的 C library 的 ABI stability 是其标志。 因此，从一开始，我就从自己喜欢使用的 C libraries 中汲取灵感，设计了 API，使其拥有强大且稳定的 ABI，以便将来进行扩展。

> Every object is an opaque handle. The hundreds of values you might read or write go through a small set of enum-keyed getters and setters, so we can add new values easily without introducing a new symbol. Programs with newer headers linked against an older libghostty get `GHOSTTY_UNSUPPORTED` results instead of crashes or undefined behavior. The few non-opaque structs we have carry their size so that fields can be appended later, or contain reserved padding. Enums are pinned to `int` on every compiler, as much as the C standard allows.

每个对象都是一个不透明句柄。你可能读写的数百个值都通过一小组以枚举为键的获取器和设置器访问，因此我们可以轻松添加新值，而无需引入新符号。使用较新头文件并与较旧的 libghostty 链接的程序会得到 `GHOSTTY_UNSUPPORTED` 结果，而非崩溃或未定义行为。我们仅有的少数非不透明结构体携带其大小，以便以后可以追加字段，或包含预留填充。枚举在所有编译器上都被锁定为 `int`，以 C 标准允许的范围为限。

> Our CI enforces our ABI policy. Every change is checked with [libabigail](https://sourceware.org/libabigail/) against a committed baseline on Linux, and against golden type manifests on macOS and WebAssembly.

我们的 CI 强制执行我们的 ABI 策略。每个变更都会在 Linux 上使用 [libabigail](https://sourceware.org/libabigail/) 对照已提交的 baseline 进行检查，并在 macOS 和 WebAssembly 上对照 golden type manifests 进行检查。

> On ELF platforms, every exported symbol is also versioned, so the dynamic loader refuses to load a mismatched library by name rather than failing in some mysterious way later.

在ELF平台上，每个导出符号也带有版本号，因此动态加载器不会按名称加载不匹配的库，而是在稍后以某种神秘的方式失败。

> ---



请提供需要翻译的原文。

> ## Packaging

## 打包

> In addition to ABI stability, the 1.0 release brings along the proper build tooling, tarballs, dependency licensing manifests, documentation, and more to enable every major operating system and distribution to package `libghostty-vt` through standard official tooling.

除了 ABI 稳定性之外，1.0 版本还带来了一系列配套构建工具、tar 包、依赖许可证清单、文档等，使每个主流操作系统和发行版都能通过标准官方工具链来打包 `libghostty-vt`。

> Libghostty has its own release cycle, separate from Ghostty the application. And it has its own tarballs with only the files and dependencies libghostty needs, resulting in smaller sizes and simpler licensing verification and compatibility.

Libghostty 拥有其自身独立的发布周期，与 Ghostty 应用相分离。它拥有独立的压缩包，仅包含 Libghostty 所需的文件和依赖，从而体积更小，许可证验证和兼容性也更简单。

> Each release publishes a signed source tarball along with a companion dependencies tarball containing every Zig package in Zig's own cache layout, so a distribution can build the library completely offline. The build installs the shared and static libraries with a proper SONAME, headers, pkg-config files, and a CMake package config, and it honors `--prefix`, `DESTDIR`, and `lib64`. Debug info is kept by default so distros can split it out. All of this is documented in [PACKAGING-LIBGHOSTTY.md](https://github.com/ghostty-org/ghostty/blob/main/PACKAGING-LIBGHOSTTY.md), which ships with the tarball.

每个发行版都会发布一个已签名的源码压缩包，以及一个伴随的 dependencies 压缩包，包含 Zig 自有 cache layout 中的每个 Zig 包，以便发行版可以完全离线构建库。构建过程会安装 shared and static libraries with a proper SONAME, headers, pkg-config files, and a CMake package config，尊重 --prefix, `DESTDIR` 和 `lib64`。默认保留 Debug info，以便 distros 可以拆分出来。本文档中的全部内容在 [PACKAGING-LIBGHOSTTY.md](https://github.com/ghostty-org/ghostty/blob/main/PACKAGING-LIBGHOSTTY.md)，该文件随 tarball 一起提供。

> ---

（无源文本，无法进行翻译）

> ## Dependencies and Licensing

## 依赖与许可证

> `libghostty-vt` is MIT licensed. At runtime it needs nothing beyond libc, and it can be built fully freestanding if you don't want that either.[^3]



`libghostty-vt` 采用 MIT 许可证。在运行时，它除了 libc 之外不需要任何其他东西；如果连 libc 也不想要，它也可以完全独立构建。[^3]

> The library compiles in a small number of permissively licensed dependencies: [simdutf](https://github.com/simdutf/simdutf) and [Google Highway](https://github.com/google/highway) for SIMD, a compact Unicode table for grapheme data, and [Wuffs](https://github.com/google/wuffs) for image decoding in the Kitty graphics protocol. Both simdutf and Highway are built [without libc++](https://mitchellh.com/writing/simdutf-no-libcxx), so there is no C++ standard library dependency.



该库编译时仅需少量宽松许可的依赖项：用于 SIMD 的 [simdutf](https://github.com/simdutf/simdutf) 和 [Google Highway](https://github.com/google/highway)、用于字素数据的紧凑 Unicode 表，以及用于 Kitty 图形协议中图像解码的 [Wuffs](https://github.com/google/wuffs)。simdutf 和 Highway 均在 [without libc++](https://mitchellh.com/writing/simdutf-no-libcxx) 的情况下构建，因此没有 C++ 标准库依赖。

> There is no copyleft code anywhere in the dependency tree. Every dependency is listed in a machine-readable manifest with its version, SPDX license, and hash, specifically so distros can fill in their bundled-library metadata more easily.

依赖树中没有任何 copyleft 代码。每个依赖项都列在机器可读的清单中，包含其版本、SPDX 许可证和哈希值，特意这样做的目的是让发行版能够更轻松地填写其捆绑库元数据。

> If a distro would rather dynamically link the system simdutf or Highway, there's a build flag for that.

如果一个发行版更倾向于动态链接系统 simdutf 或 Highway，那么就有 build flag。

> ---

(无内容)

> ## Portability

## 可移植性

> `libghostty-vt` is highly portable. The table below lists all the platforms and architectures that we build and test (full unit tests plus running all examples) in CI:

`libghostty-vt` 具有高度可移植性。下表列出了我们在 CI 中构建和测试的所有平台和架构（运行完整单元测试以及所有示例）。

> | Platform | Architectures |
> | --- | --- |
> | Linux (glibc, musl) | `x86_64`, `aarch64` |
> | macOS 13+ | `x86_64`, `aarch64` |
> | iOS 13+ | `aarch64` |
> | FreeBSD | `x86_64`, `aarch64` |
> | Windows | `x86_64` |
> | Android | `aarch64`, `x86_64`, `arm` |
> | WebAssembly | `wasm32` (freestanding) |

| 平台 | 架构 |
| --- | --- |
| Linux (glibc, musl) | `x86_64`, `aarch64` |
| macOS 13+ | `x86_64`, `aarch64` |
| iOS 13+ | `aarch64` |
| FreeBSD | `x86_64`, `aarch64` |
| Windows | `x86_64` |
| Android | `aarch64`, `x86_64`, `arm` |
| WebAssembly | `wasm32` (freestanding) |

> There is a second set of platforms we build in CI but do not run tests for. These systems all have known users; we just haven't set up the machinery for automated testing:

我们在 CI 中构建的第二组平台，但不会运行测试。这些系统都有已知用户；我们只是还没有搭建自动化测试的机制：

> | Platform | Architectures |
> | --- | --- |
> | Bare metal | `riscv32`, `thumb` |
> | WebAssembly (WASI) | `wasm32` |
> | Windows | `arm64` |
> | illumos | `x86_64` |
> | 32-bit x86 | `x86` |

| 平台 | 架构 |
| --- | --- |
| 裸机 | `riscv32`, `thumb` |
| WebAssembly (WASI) | `wasm32` |
| Windows | `arm64` |
| illumos | `x86_64` |
| 32 位 x86 | `x86` |

> Each of the tested platforms gets the artifacts it expects:

每个被测试的平台都能获得它所预期的构件：

> - **Linux and FreeBSD** get a shared library with a proper SONAME and versioned symbols, a static library, headers, pkg-config files, and a CMake package config.
> - **macOS and iOS** get a `dylib` with an `@rpath` install name and compatibility version, plus an XCFramework covering macOS, iOS, and the iOS simulator that drops straight into Xcode or Swift Package Manager.
> - **Windows** gets a DLL with a `.pdb`, an import library, and a static library. The library is built with the GNU ABI, but MSVC programs link against it through the import library and CI verifies this.
> - **Android** gets a shared library built against the NDK with 16 KB page size support, as required by Android 15+.
> - **WebAssembly** ships in two flavors, one optimized for speed and one for size, and the small one is under a megabyte with every feature enabled. If you only need a read-only viewer, subsystems like input encoding, search, selection, and Kitty graphics can be compiled out with a build flag, which roughly halves the module. Every function stays exported and simply returns `GHOSTTY_UNSUPPORTED` so your code doesn't have to change.[^4]

- **Linux and FreeBSD** get a shared library with a proper SONAME and versioned symbols, a static library, headers, pkg-config files, and a CMake package config.
  Linux 和 FreeBSD 获得一个共享库，带有正确的 SONAME 和版本化符号，静态库、头文件、pkg-config 文件和 CMake 包配置。

- **macOS and iOS** get a `dylib` with an `@rpath` install name and compatibility version, plus an XCFramework covering macOS, iOS, and the iOS simulator that drops straight into Xcode or Swift Package Manager.
  macOS 和 iOS 获得一个 `dylib`，带有 `@rpath` 安装名称和兼容版本，以及一个覆盖 macOS、iOS 和 iOS 模拟器的 XCFramework，可以直接放入 Xcode 或 Swift Package Manager。

- **Windows** gets a DLL with a `.pdb`, an import library, and a static library. The library is built with the GNU ABI, but MSVC programs link against it through the import library and CI verifies this.
  Windows 获得一个 DLL，带有 `.pdb`、导入库和静态库。该库是使用 GNU ABI 构建的，但 MSVC 程序通过导入库链接到它，CI 验证了这一点。

- **Android** gets a shared library built against the NDK with 16 KB page size support, as required by Android 15+.
  Android 获得一个在 NDK 上构建的共享库，支持 16 KB 页面大小，符合 Android 15+ 的要求。

- **WebAssembly** ships in two flavors, one optimized for speed and one for size, and the small one is under a megabyte with every feature enabled. If you only need a read-only viewer, subsystems like input encoding, search, selection, and Kitty graphics can be compiled out with a build flag, which roughly halves the module. Every function stays exported and simply returns `GHOSTTY_UNSUPPORTED` so your code doesn't have to change.[^4]
  WebAssembly 提供两种版本，一种优化速度，一种优化大小，小版本在启用所有功能的情况下小于 1MB。如果你只需要一个只读查看器，可以通过构建标志将输入编码、搜索、选择和 Kitty 图形等子系统编译掉，这大约将模块大小减半。每个函数都保持导出状态，并简单返回 `GHOSTTY_UNSUPPORTED`，这样你的代码就不需要修改。[^4]

> Portability isn't just about the ability to build and run. It's also about resource usage and being able to work in a wide variety of resource environments.

可移植性不仅关乎构建和运行的能力。它还涉及资源使用，以及在各种资源环境中工作的能力。

> For resource usage, the library creates no threads, allocates only through an allocator you can customize, and uses minimal compute and memory. I've run 10,000 active terminals, each with a live shell producing output, on a Linux server with 4 cores and 8 GB of RAM. In this test, I had to use `dash` because `bash` used far more RAM than `libghostty-vt` and wouldn't fit into the 8 GB budget.

在资源使用方面，该库不创建线程，仅通过您可以自定义的分配器分配内存，并使用最小的计算和内存。我运行了 10,000 个活动终端，每个终端都有实时 shell 产生输出，在一台配备 4 核心和 8 GB RAM 的 Linux 服务器上。在此测试中，我不得不使用 `dash`，因为 `bash` 的 RAM 使用远高于 `libghostty-vt`，且超出了 8 GB 的预算。

> ---

# 翻译任务已接收

请提供需要翻译的英文原文，我将按照专业技术文档翻译规范为您提供中文译文。

> ## What's Next

## 接下来是什么

> Libghostty 1.0 is a major milestone.

Libghostty 1.0 是一个重大里程碑。

> You can now create a terminal in [~1,500 lines of C](https://github.com/ghostty-org/ghostling) that has more features and better performance than just about any terminal that existed in 2025, and most today in 2026.[^5] And thanks to the rich ecosystem of language bindings, you can do this in every major programming language. You get this for free. For almost no effort. You can just do it.

现在你可以用约1,500行C语言创建一个终端，它拥有比2025年或2026年几乎所有现有终端更多的功能和更好的性能。[^5]。而且，得益于丰富的语言绑定生态，你可以在所有主流编程语言中实现这一点。你免费获得这个功能。几乎不需要付出努力。你直接就能做到。

> `libghostty-vt` is a generalized library, so we will focus on stability while implementing as many terminal protocols as exist (giving options to enable/disable them, of course) so that embedders have the luxury of choice.

`libghostty-vt` 是一个通用的库，因此我们在实现过程中不仅注重稳定性，还尽可能地支持所有现有的终端协议，同时提供启用或禁用协议的选项，以便嵌入式应用开发者拥有灵活的选择。

> Every bug any `libghostty-vt` embedder reports makes everyone else in the ecosystem better. Every feature we ship in `libghostty-vt` becomes available to everyone quickly and safely. Terminals can move faster with less fragmentation.

任何 `libghostty-vt` 嵌入器报告的每个 bug 都会让生态系统中的其他所有人都受益。我们在 `libghostty-vt` 中发布的每个功能都会快速、安全地对所有人可用。终端可以更快地发展，且碎片化更少。

> Thank you to everyone who contributed to the library, wrote bindings, filed bugs, and shipped something on top of it while the API was still experimental. As with all open source, this was the work of a large community.

感谢所有为库作出贡献、编写绑定、提交 bug，并在 API 仍处于实验阶段时在此基础上交付内容的每个人。与所有开源项目一样，这是庞大社区的工作。

> Docs, examples, and downloads are at [lib.ghostty.org](https://lib.ghostty.org/).

文档、示例和下载位于 [lib.ghostty.org](https://lib.ghostty.org/).

> Boo. 👻

吓！👻

> November 6, 2026

2026年11月6日

> [^1]: As usual, I hate that I have to do this for every post, but I want to note this post was completely hand-written with no AI assistance.

[^1]: 如往常一样，我讨厌不得不为每篇文章都这样做，但我想注明这篇文章完全是手写的，未使用 AI 协助。

> [^2]: The numbers are rough because most consumers don't report usage, but JetBrains alone reports [12.5 million recurring active users](https://www.jetbrains.com/lp/annualreport-2026/), and that's before counting everything else on the list.

[^2]: 这些数字并不精确，因为大多数用户不会报告使用情况，但 JetBrains 单独报告就有 [12.5 million recurring active users](https://www.jetbrains.com/lp/annualreport-2026/)，这还没算上列表中的其他所有内容。

> [^3]: In the original post I wrote "not even libc!" The default build does link libc, because the SIMD paths use it and the default allocator is `malloc`. Turn off SIMD and the library is freestanding, which is how it runs on bare-metal RISC-V and ARM targets.

[^3]: 在原帖中我写道“甚至没有 libc！”默认构建确实会链接 libc，因为 SIMD 代码路径会用到它，且默认分配器是 `malloc`。关闭 SIMD 后该库即为 freestanding（独立/无宿主）环境，这也是它能在裸机 RISC-V 和 ARM 目标上运行的原因。

> [^4]: The feature flags aren't WASM-specific; they work on every target. They're likely useful for things like embedded devices too.



[^4]: 特性开关并非 WASM 专属的；它们适用于每个目标。它们对于像嵌入式设备之类的事物可能也同样有用。

> [^5]: "Features" here means the set of terminal protocols and sequences understood, and "performance" means parsing throughput and memory usage, since those are the parts `libghostty-vt` provides.

[^5]: 此处 "Features" 是指所理解的终端协议和序列集合，而 "performance" 是指解析吞吐量和内存占用，因为这些是 `libghostty-vt` 提供的部分。
