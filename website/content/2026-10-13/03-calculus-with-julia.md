---
title: "微积分与Julia"
date: 2026-10-13T10:56:38+08:00
draft: false
source: "Hacker News"
originalTitle: "Calculus with Julia"
originalUrl: "https://jverzani.github.io/CalculusWithJuliaNotes.jl/"
hnUrl: ""
points: 
comments: 
---

> ## Preface

序言

> ---

（无内容可翻译，严格遵守仅输出翻译正文的规则，故不输出任何内容）

> This is a set of notes for learning [calculus](http://en.wikipedia.org/wiki/Calculus) using the [`Julia`](https://julialang.org/) language. `Julia` is an open-source programming language with an easy to learn syntax that is well suited for this task.



这是一套使用 [`Julia`](https://julialang.org/) 语言学习 [微积分](http://en.wikipedia.org/wiki/Calculus) 的笔记。`Julia` 是一门开源编程语言，其语法简单易学，非常适合这项任务。

> Read “[Getting started with Julia](https://jverzani.github.io/CalculusWithJuliaNotes.jl/misc/getting_started_with_julia.html)” to learn how to install and customize `Julia` for following along with these notes. Read “[Julia interfaces](https://jverzani.github.io/CalculusWithJuliaNotes.jl/misc/julia_interfaces.html)” to review different ways to interact with a `Julia` installation.

阅读 “[Julia 入门](https://jverzani.github.io/CalculusWithJuliaNotes.jl/misc/getting_started_with_julia.html)” 以了解如何安装并自定义 `Julia` 以便跟随这些笔记学习。阅读 “[Julia 接口](https://jverzani.github.io/CalculusWithJuliaNotes.jl/misc/julia_interfaces.html)” 以回顾与 `Julia` 安装进行交互的不同方式。

> Since the mid 90s there has been a push to teach calculus using many different points of view. The [Harvard](http://www.math.harvard.edu/~knill/pedagogy/harvardcalculus/) style rule of four says that as much as possible the conversation should include a graphical, numerical, algebraic, and verbal component. These notes use the programming language [Julia](http://julialang.org/) to illustrate the graphical, numerical, and, at times, the algebraic aspects of calculus.

自90年代中期以来，人们一直倡导从多种不同的视角来教授微积分。[哈佛大学](http://www.math.harvard.edu/~knill/pedagogy/harvardcalculus/) 的《四要素法则》认为，尽可能地讨论应该包含图形、数值、代数和语言四个方面。这些笔记使用编程语言 [Julia](http://julialang.org/) 来展示微积分的图形、数值，以及在某些时候的代数方面。

> There are many examples of integrating a computer algebra system (such as `Mathematica`, `Maple`, or `Sage`) into the calculus conversation. Computer algebra systems can be magical. The popular [WolframAlpha](http://www.wolframalpha.com/) website calls the full power of `Mathematica` while allowing an informal syntax that is flexible enough to be used as a backend for Apple’s Siri feature. (“Siri what is the graph of x squared minus 4?”) For learning purposes, computer algebra systems model very well the algebraic/symbolic treatment of the material while providing means to illustrate the numeric aspects. These notes are a bit different in that `Julia` is primarily used for the numeric style of computing and the algebraic/symbolic treatment is added on. Doing the symbolic treatment by hand can be very beneficial while learning, and computer algebra systems make those exercises seem kind of redundant, as the finished product can be produced much more easily.

将计算机代数系统（如 Mathematica、Maple 或 Sage）集成到微积分教学中，已有许多成功的案例。这些系统堪称魔法般强大。例如，WolframAlpha 网站充分利用了 Mathematica 的强大功能，同时支持灵活的非正式语法，甚至可以作为 Apple Siri 功能的后端（比如“Siri，x 的平方减去 4 的图是什么？”）。在学习方面，计算机代数系统非常擅长模拟代数/符号处理，同时也能有效地展示数字方面的内容。然而，这些笔记有所不同，因为 Julia 主要用于数字计算风格，而代数/符号处理则是附加功能。在学习过程中，手工进行符号处理非常有益，但计算机代数系统却使这些练习显得多余，因为最终结果可以更轻松地生成。

> Our real goal is to get at the concepts using technology as much as possible without getting bogged down in the mechanics of the computer language. We feel `Julia` has a very natural syntax that makes the initial start up not so much more difficult than using a calculator, but with a language that has a tremendous upside. The notes restrict themselves to a reduced set of computational concepts. This set is sufficient for working many of the problems in calculus, but do not cover thoroughly many aspects of programming. (Those who are interested can go off on their own and `Julia` provides a rich opportunity to do so.) Within this restricted set, are operators that make many of the computations of calculus reduce to a function call of the form `action(function, arguments...)`. With a small collection of actions that can be composed, many of the problems associated with introductory calculus can be attacked.

我们的真正目标是尽可能利用技术来掌握概念，而不被计算机语言的机械细节所困扰。我们认为 `Julia` 具有非常自然的语法，使得初学者的上手难度并不比使用计算器大多少，但却拥有巨大的潜力。这些笔记仅限于一组简化的计算概念。这一组概念足以解决微积分中许多问题，但并未深入覆盖编程的许多方面。（对此感兴趣的读者可以自行深入学习，`Julia` 提供了丰富的机会。）在这一受限的集合中，存在一些算子，能够将微积分中的许多计算简化为形式为 `action(function, arguments...)` 的函数调用。通过少量可组合的算子，许多入门微积分问题可以迎刃而解。

> These notes are presented in pages covering a fairly focused concept, in a spirit similar to a section of a book. Just like a book, there are try-it-yourself questions at the end of each page. All have a limited number of self-graded answers. These notes borrow ideas from many sources, for example Strang ([n.d.](https://jverzani.github.io/CalculusWithJuliaNotes.jl/references.html#ref-Strang)), Knill ([n.d.](https://jverzani.github.io/CalculusWithJuliaNotes.jl/references.html#ref-Knill)), Schey ([^4]), Hass et al. ([^2]), Rogawski et al. ([^3]), Angenent ([^1]), several Wikipedia pages, and other sources.

这些笔记以类似书籍章节的形式呈现在多个页面上，每页介绍一个相当集的概念。正如书籍一样，每页末尾都有自行练习的题目。所有题目都有有限数量的可自行评分的答案。这些笔记借鉴了许多来源的思想，例如 Strang ([n.d.](https://jverzani.github.io/CalculusWithJuliaNotes.jl/references.html#ref-Strang)), Knill ([n.d.](https://jverzani.github.io/CalculusWithJuliaNotes.jl/references.html#ref-Knill)), Schey ([^4]), Hass et al. ([^2]), Rogawski et al. ([^3]), Angenent ([^1]), 若干个维基百科页面，以及其他来源。

> These notes are accompanied by a `Julia` package `CalculusWithJulia` that provides some simple functions to streamline some common tasks and loads some useful packages that will be used repeatedly.

这些笔记附带了一个 `Julia` 包 `CalculusWithJulia`，该包提供了一些简单函数以简化常见任务，并加载了一些将反复用到的实用包。

> These notes are presented as a Quarto book. To learn more about Quarto books visit [https://quarto.org/docs/books](https://quarto.org/docs/books).

这些笔记以 Quarto 书籍的形式呈现。要了解更多关于 Quarto 书籍的内容，请访问 [https://quarto.org/docs/books](https://quarto.org/docs/books)。

> Compiling these notes into a `pdf` file with Quarto is possible with some piecing together of parts. The result is less than optimal and also quite large.

编译这些笔记为 `pdf` 文件，使用 Quarto 是可行的，需要将部分拼凑在一起。结果不够理想，并且体积相当大。

> [Download pdf version](https://www.dropbox.com/scl/fi/vv8ee9a5xb9qbsw87f3bl/CalculusWithJulia.pdf?rlkey=u7ambk19sowelxtgiaosjozzo&st=i0hxwx29&dl=0)



[下载 pdf 版本](https://www.dropbox.com/scl/fi/vv8ee9a5xb9qbsw87f3bl/CalculusWithJulia.pdf?rlkey=u7ambk19sowelxtgiaosjozzo&st=i0hxwx29&dl=0)

> To *contribute* – say by suggesting additional topics, correcting a mistake, or fixing a typo – click the “Edit this page” link and join the list of [contributors](https://github.com/jverzani/CalculusWithJuliaNotes.jl/graphs/contributors). Thanks to all contributors.

要 *contribute* – 例如，建议补充主题、纠正错误或修正笔误 – 点击 “Edit this page” 链接并加入 [contributors](https://github.com/jverzani/CalculusWithJuliaNotes.jl/graphs/contributors) 列表。感谢所有贡献者。

> A *very* special thanks goes out to `@fangliu-tju` for their careful and most-appreciated proofreading and error spotting spread over a series of PRs.

特别感谢 @fangliu-tju 在一系列 PR 中为我们提供的仔细且最受赞赏的审稿和错误发现。

> ## Running Julia

## 运行 Julia

> For individual users `Julia` is installed quite easily with the `juliaup` utility or by other means. There are some brief installation notes in the overview of `Julia` commands.

对于个人用户而言，使用 `juliaup` 工具或其他方式安装 `Julia` 非常简单。关于 `Julia` 命令的概览中提供了一些简要的安装说明。

> ---

请提供需要翻译的英文原文内容。

> Calculus with Julia version 0.27, produced on August 31, 2026.

Calculus with Julia 版本 0.27，于 2026 年 8 月 31 日发布。

> [^1]: Angenent, Sigurd. 2012. *Wisconsin Calculus*. Https://github.com/SigurdAngenent/WisconsinCalculus/tree/master.



[^1]: 西格德·安格内特. 2012. 《威斯康星微积分》. Https://github.com/SigurdAngenent/WisconsinCalculus/tree/master.

> [^2]: Hass, Joel R., Christopher E. Heil, and Maurice D. Weir. 2018. *Thomas’ Calculus*. Pearson.

[^2]: 哈斯，乔尔·R.，海尔，克里斯托弗·E.，威尔，莫里斯·D.。2018。《托马斯微积分》。培生。

> [^3]: Rogawski, Jon, Colin Adams, and Robert Franzosa. 2019. *Calculus*. Macmillan.

[^3]: 罗格斯基, 乔恩, 科林·亚当斯, 罗伯特·弗兰佐萨. 2019. 《微积分》. 麦克米伦出版社.

> [^4]: Schey, H. M. 1997. *Div, Grad, Curl, and All That*. W.W. Norton.



[^4]: 谢伊，H. M. 1997. 《散度、梯度、旋度以及所有那一切》（Div, Grad, Curl, and All That）. W.W. Norton.
