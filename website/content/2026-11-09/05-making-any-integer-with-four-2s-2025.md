---
title: "用四个2构造任意整数 (2025)"
date: 2026-11-09T09:52:04+08:00
draft: false
source: "Hacker News"
originalTitle: "Making any integer with four 2s - Eli Bendersky's website"
originalUrl: "https://eli.thegreenplace.net/2025/making-any-integer-with-four-2s/"
hnUrl: ""
points: 
comments: 
---

> There's a cute math puzzle that can be interesting to folks on very different levels:

有个可爱的数学谜题，对不同层次的人来说都很有趣：

> > Given exactly four instances of the digit 2 and some target natural number, use any mathematical operations to generate the target number with these 2s, using no other digits.

给定恰好四个数字 2 以及某个目标自然数，使用任意数学运算利用这四个 2 来生成目标数字，不得使用其他数字。

> Some examples can be done by elementary school kids:

有些示例连小学生都能完成：

> In middle school, kids learn about exponents, factorials, etc. which expands the range considerably:



在中学阶段，学生会学习指数、阶乘等知识，这大大扩展了数的范围。

> Then come the tricks; for example, the number 22 (twenty two) can be seen as a valid use of two 2s, and so on; so we can have:

然后是一些技巧；例如，数字 22（twenty two）可以被视为两个 2 的有效使用，依此类推；因此我们可以得到：

> Getting to 7 is notoriously difficult, but if you allow even more mathematical tools like the [Gamma function](https://en.wikipedia.org/wiki/Gamma_function), it becomes easy:

得到 7 以“难以捉摸”著称，但如果允许使用更多的数学工具（如 [Gamma 函数](https://en.wikipedia.org/wiki/Gamma_function)），这就会变得很简单：

> The more math skill people have, the more numbers they can make. See [this thread](https://math.stackexchange.com/questions/1034122/get-the-numbers-from-0-30-by-using-the-number-2-four-times) for some fun concoctions using integrals, repeating fractions and combinatorial operators. One of my favorite examples involves complex numbers:

数学技能越强的人，能生成的数字就越多。请参阅 [this thread](https://math.stackexchange.com/questions/1034122/get-the-numbers-from-0-30-by-using-the-number-2-four-times) 以了解一些使用积分、循环分数和组合运算符的有趣组合。我最喜欢的例子之一涉及复数：

> So the fun doesn't end even after one graduates from university! In fact, this seems to have been a favorite pastime for mathematicians in the 1920s. Until [Paul Dirac](https://en.wikipedia.org/wiki/Paul_Dirac) ruined it for everyone by finding a general solution for every number.

大学毕业后，好戏还远远没有结束。事实上，这似乎是 20 世纪 20 年代数学家们最喜欢的消遣方式，直到保罗·狄拉克（Paul Dirac）找到了一个通用的解决方案，让这种乐趣戛然而止。

> It's all about nested square roots:



请提供完整的英文原文，我将为您翻译。

> If the square root is applied *n* times:

如果将平方根应用于 *n* 次：

> All that's left now is some base-2 logarithms:

现在剩下的就是一些以 2 为底的对数了：

> And another:

另一个：

> This leads to the general formula:

这引出了通用公式：

> There's just one small wrinkle: it uses *three* instances of the digit 2, not four. This is easy to amend, however; since , we can replace any single digit with that and get exactly four:



只有一个小小的波折：它使用了数字 2 的三个*实例*，而不是四个。然而，这很容易修改；因为，我们可以用那个替换任何单个数字，正好得到四个：

> One may claim this is cheating, but it seems to be in line with the rules of the puzzle! Note that the entity *n* doesn't actually appear anywhere - it's just a helper to count the number of repeated square roots. For example, another way to express 7 is:

有人可能会说这是作弊，但这似乎符合谜题的规则！注意，实体 *n* 实际上并未出现在任何地方 —— 它只是一个用来计算重复平方根次数的辅助变量。例如，表达 7 的另一种方式是：

> There are exactly four 2s, and this uses only reasonable, elemental math operations to do the calculation. It's clear that *any* number can be expressed this way; the only challenge is properly drawing all those square roots!

恰好有四个 2s，并且 这仅使用合理的、基本的数学运算来进行计算。 显然， *any* 数字可以用这种方式；唯一的 挑战是 正确 绘制 所有 这些 平方根！

> ## Credits

## 致谢

> I've read about this story in Graham Farmelo's book *The Strangest Man: The Hidden Life of Paul Dirac, Quantum Genius*. I'm enjoying this book so far.

我在 Graham Farmelo 的书《The Strangest Man: The Hidden Life of Paul Dirac, Quantum Genius》里读到过这个故事。这本书到目前为止我很喜欢。
