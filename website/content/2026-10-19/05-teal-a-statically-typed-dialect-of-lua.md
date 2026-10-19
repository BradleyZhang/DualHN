---
title: "Teal —— 一种 Lua 的静态类型方言"
date: 2026-10-19T07:54:39+08:00
draft: false
source: "Hacker News"
originalTitle: "Teal"
originalUrl: "https://teal-language.org/"
hnUrl: ""
points: 
comments: 
---

> ## The Teal programming language

## Teal 编程语言

> ## About Teal

## 关于 Teal

> Teal is a statically-typed dialect of [Lua](https://www.lua.org/). It extends Lua with type annotations, allowing you to specify arrays, maps and records, as well as interfaces, union types and generics.

Teal 是 [Lua](https://www.lua.org/) 的一种静态类型方言。它在 Lua 之上添加了类型注释，允许您指定数组、映射和记录类型，以及接口、联合类型和泛型。

> It aims to fill a niche similar to that of TypeScript in the JavaScript world, but adhering to Lua's spirit of minimalism, portability and embeddability.

它旨在填补TypeScript在JavaScript世界中类似的利基市场，但遵循Lua的极简主义、可移植性和嵌入性精神。

> Is it implemented as a compiler, [tl](https://github.com/teal-language/tl), which compiles .tl source code into .lua files.

它是作为编译器实现的，[tl](https://github.com/teal-language/tl)，它将 .tl 源代码编译为 .lua 文件。

> ## A taste of Teal

## 一窥 Teal

> Here is a quick taste of what Teal code looks like:

这里有一点关于 Teal 代码的简要介绍：

```
local function add(a: number, b: number): number
   return a + b
end

> local s = add(1, 2)
> print(s)
> ```

```lua
local s = add(1, 2)
print(s)
```

> ...or check out this page's source code!

...或查看此页面的源代码！

> You can also play with the Teal compiler right from your browser, using the [Teal Playground](https://teal-playground.netlify.app/).

你也可以直接在浏览器中体验 Teal 编译器，通过 [Teal Playground](https://teal-playground.netlify.app/)。

> ## Install Teal

## 安装 Teal

> If you're using [LuaRocks](https://luarocks.org/), you can install the compiler with:



如果您使用 [LuaRocks](https://luarocks.org/)，您可以使用以下命令安装编译器：

```shell
luarocks install tl
```

> You can also find [pre-compiled binaries](https://github.com/teal-language/tl/releases) for Linux and Windows.

此外，你也可以找到 [pre-compiled binaries](https://github.com/teal-language/tl/releases) 适用于 Linux and Windows.

> To build larger projects, you probably won't want to run tl on each file individually. We recommend using [Cyan](https://github.com/teal-language/cyan), the build tool designed for Teal.

要构建更大的项目，您可能不想在每个文件上单独运行 tl。我们建议使用 [Cyan](https://github.com/teal-language/cyan)，这是为 Teal 设计的构建工具。

> You can also install [vscode-teal](https://github.com/teal-language/vscode-teal/) for Visual Studio Code integration, [teal-language-server](https://github.com/teal-language/teal-language-server/) for NeoVim and others, and [more](https://github.com/teal-language/awesome-teal).

您也可以安装 [vscode-teal](https://github.com/teal-language/vscode-teal/) 用于 Visual Studio Code 集成，[teal-language-server](https://github.com/teal-language/teal-language-server/) 用于 NeoVim 和其他项目，以及更多 [more](https://github.com/teal-language/awesome-teal)。

> ## Documentation

## 文档

> You can browse the Teal documentation [online](https://teal-language.org/book/latest/index.html).

你可以在 Teal 文档的线上版本中浏览[完整内容](https://teal-language.org/book/latest/index.html)。

> Here are some recorded talks discussing the history of Lua and types, outlining the motivations behind Teal and talking about the project's progress:

以下是关于 Lua 历史和类型的录制的演讲，这些演讲介绍了 Teal 的诞生背景，并阐述了项目的进展情况。

> - [Minimalism versus types (2019)](https://www.youtube.com/watch?v=OPyBQRndLUk)
> - [Minimalistic typed Lua is here (2020)](https://www.youtube.com/watch?v=HfnjUCRzRKU)
> - [What's next for Teal (2021)](https://www.youtube.com/watch?v=OqXbnaDR8QY)
> - [Five years of Teal: minimalism versus growth in language design (2024)](https://www.youtube.com/watch?v=68F5Qs91izQ)
> - [What should Teal be? - musings on FOSS project directions (2025)](https://www.youtube.com/watch?v=Uq_8bckDxaU)

- [极简主义与类型 (2019)](https://www.youtube.com/watch?v=OPyBQRndLUk)
- [极简类型化 Lua 来了 (2020)](https://www.youtube.com/watch?v=HfnjUCRzRKU)
- [Teal 的下一步 (2021)](https://www.youtube.com/watch?v=OqXbnaDR8QY)
- [Teal 五年：语言设计中的极简主义与增长 (2024)](https://www.youtube.com/watch?v=68F5Qs91izQ)
- [Teal 应该是什么？——关于 FOSS 项目方向的沉思 (2025)](https://www.youtube.com/watch?v=Uq_8bckDxaU)

> ## Community

## 社区

> Development happens on [GitHub](https://github.com/teal-language).

开发工作在 [GitHub](https://github.com/teal-language) 上进行。

> We have a [community forum](https://github.com/teal-language/tl/discussions) hosted by GitHub. You can also chat with us via Matrix at [#teal-language\_community:gitter.im](https://matrix.to/#/#teal-language_community:gitter.im).

我们有一个由 GitHub 托管的社区论坛：https://github.com/teal-language/tl/discussions。如果您想与我们直接聊天，还可以加入 Matrix 上的 [#teal-language_community:gitter.im](https://matrix.to/#/#teal-language_community:gitter.im) 频道。

> Teal is a project started by [Hisham Muhammad](https://hisham.hm/), developed by a [growing number of contributors](https://github.com/teal-language/tl/graphs/contributors) and is written using Teal itself!

Teal 是由 [Hisham Muhammad](https://hisham.hm/) 发起的项目，由 [越来越多的贡献者](https://github.com/teal-language/tl/graphs/contributors) 开发，并且本身就是使用 Teal 编写的！

> ## License

## 许可证

> Teal is free and open source software.  
> Its [license](https://github.com/teal-language/tl/blob/master/LICENSE) is MIT, the same as Lua.

Teal 是一款免费的开源软件。
它的许可证与 Lua 相同，为 MIT 许可证。具体条款请参阅[许可证](https://github.com/teal-language/tl/blob/master/LICENSE)。
