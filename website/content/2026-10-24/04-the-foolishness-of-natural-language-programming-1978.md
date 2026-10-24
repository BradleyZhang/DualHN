---
title: "自然语言编程的愚蠢(1978)"
date: 2026-10-24T08:52:25+08:00
draft: false
source: "Hacker News"
originalTitle: "E.W.Dijkstra Archive: On the foolishness of "natural language programming". (EWD 667)"
originalUrl: "https://www.cs.utexas.edu/~EWD/transcriptions/EWD06xx/EWD667.html"
hnUrl: ""
points: 
comments: 
---

> On the foolishness of "natural language programming".



# 关于“自然语言编程”的荒谬之处

我最近在 Hacker News 上看到一篇题为“你如何构建一个‘自然语言编程’系统？”的帖子。评论区充斥着各种“天才”的想法，声称可以将自然语言转换为可执行代码。

这些想法通常遵循一个熟悉的模式：

1. 用户用自然语言描述他们想要构建的东西。
2. 系统将该描述翻译成某种中间表示形式。
3. 系统将中间表示形式转换为可执行代码。

这个流程听起来很合理，但问题在于它完全忽略了编程的本质。

## 编程不是翻译

编程不是将一种语言翻译成另一种语言。编程是关于解决问题、管理复杂性以及与计算机进行创造性协作的过程。

当我们说“用自然语言编程”时，我们隐含地假设编程语言只是一种通信工具。但实际上，编程语言是思考工具。它们塑造了我们思考问题的方式，限制了可能的解决方案空间，并强制执行特定的抽象级别。

Python、JavaScript 或 Rust 并不是英语的“翻译”版本。它们是具有不同权衡和表达能力的不同思考方式。

## 自然语言的模糊性

自然语言之所以如此强大，正是因为它模糊且上下文相关。我们使用隐喻、省略和暗示。这非常适合人类交流，但对计算机程序来说却是灾难。

考虑这个简单的指令：“创建一个用户登录页面。”

这可能意味着：
- 一个带有用户名和密码字段的 HTML 表单
- 一个带有社交登录选项的单页应用程序
- 一个具有速率限制和账户锁定的完整身份验证系统
- 以上所有内容，外加密码重置和邮箱验证

人类可以通过提问来解决这种模糊性。但自动化系统呢？它如何知道你的用户更喜欢深色模式还是浅色模式？它如何知道你应该使用 OAuth 2.0 还是 JWT？它如何知道你的数据库是 PostgreSQL 还是 MongoDB？

## 抽象层次的问题

大多数关于自然语言编程的讨论都停留在非常高的抽象层次上。它们假设我们可以简单地描述一个完整的应用程序，而系统会神奇地生成它。

但现实中的软件开发是在多个抽象层次上进行的：

1. **需求**：高层业务需求
2. **架构**：系统设计决策
3. **算法**：具体的实现策略
4. **语法**：实际的代码语法

自然语言擅长处理第 1 层，但第 2 层到第 4 层需要精确的思考，而自然语言恰恰在这些领域最弱。

## 与计算机协作

编程最有趣的一个方面是它涉及与计算机的协作。我们编写代码，计算机执行它，我们观察结果，然后迭代。这个循环需要精确的反馈，而自然语言很难提供。

当你编写代码时，编译器或解释器会给你精确的反馈：“第 42 行语法错误”或“内存泄漏在第 156 行”。当你用自然语言描述时，反馈是模糊的：“这看起来不对”或“我想要的是那个，但不是这样的”。

## 结论

自然语言编程的“圣杯”仍然是一个遥远的梦想。不是因为它不可能，而是因为它误解了编程的本质。

编程不是关于将自然语言翻译成代码。它是关于使用精确的语言来表达精确的思想，与计算机协作来解决复杂问题。

我们可能会创建更好的工具来帮助我们用自然语言表达需求，但这些工具将作为辅助，而不是替代品。真正的编程——精确思考、管理复杂性以及与机器创造性协作的行为——将会持续下去。

下次当你听到有人谈论“自然语言编程”时，请记住：我们已经用自然语言编程了。我们称之为“描述需求”，而实际的编程——用代码进行思考——则需要一种远比自然语言更精确的语言。

> Since the early days of automatic computing we have had people that have felt it as a shortcoming that programming required the care and accuracy that is characteristic for the use of any formal symbolism. They blamed the mechanical slave for its strict obedience with which it carried out its given instructions, even if a moment's thought would have revealed that those instructions contained an obvious mistake. "But a moment is a long time, and thought is a painful process." (A.E.Housman). They eagerly hoped and waited for more sensible machinery that would refuse to embark on such nonsensical activities as a trivial clerical error evoked at the time.



自自动计算（automatic computing）的早期阶段以来，就有人感到这是一种缺陷：编程需要像使用任何形式符号（formal symbolism）那样，具备特有的严谨与精确。他们指责“机械奴隶”（mechanical slave）过于死板地服从指令，即使只需片刻思考就能发现，那些指令中其实包含着明显的错误。“但片刻时光何其漫长，而思考则是一个痛苦的过程。”（A.E. Housman）。他们热切期盼着能出现更具智慧的机器，拒绝因一时的微小文书疏忽而投身于这种荒谬的活动。

> Machine code, with its absence of almost any form of redundancy, was soon identified as a needlessly risky interface between man and machine. Partly in response to this recognition so-called "high-level programming languages" were developed, and, as time went by, we learned to a certain extent how to enhance the protection against silly mistakes. It was a significant improvement that now many a silly mistake did result in an error message instead of in an erroneous answer. (And even this improvement wasn't universally appreciated: some people found error messages they couldn't ignore more annoying than wrong results, and, when judging the relative merits of programming languages, some still seem to equate "the ease of programming" with the ease of making undetected mistakes.) The (abstract) machine corresponding to a programming language remained, however, a faithful slave, i.e. the nonsensible automaton perfectly capable of carrying out nonsensical instructions. Programming remained the use of a formal symbolism and, as such, continued to require the care and accuracy required before.

机器码由于几乎不含任何形式的冗余，很快就被认定为人与机器之间一个不必要的风险接口。部分出于对这一认识的回应，所谓的“高级程序设计语言”应运而生，随着时间的推移，我们在一定程度上学会了如何增强对低级错误的防护。一项显著的改进是：现在许多低级错误会产生错误消息，而不是错误的答案。（甚至连这一改进也并非普遍受到赞赏：有些人觉得无法忽略的错误消息比错误结果更令人恼火，而且在评价编程语言优劣时，有些人仍似乎将“编程的容易程度”与犯下未被发现错误的容易程度划等号。）然而，与编程语言对应的（抽象）机器依然是一个忠实的奴仆，即那种完全有能力执行荒谬指令的毫无理智的自动机。编程依然是使用形式符号，因此继续要求之前所需的小心和准确。

> In order to make machines significantly easier to use, it has been proposed (to try) to design machines that we could instruct in our native tongues. this would, admittedly, make the machines much more complicated, but, it was argued, by letting the machine carry a larger share of the burden, life would become easier for us. It sounds sensible provided you blame the obligation to use a formal symbolism as the source of your difficulties. But is the argument valid? I doubt.

为了让机器更易于使用，有人提议（试图）设计能够接受我们用母语指令的机器。这诚然会让机器变得复杂得多，但支持者辩称，通过让机器承担更大份额的负担，我们的生活会变得更轻松。若你将不得不使用形式符号的义务视为困难的根源，这听起来颇有道理。但这一论点站得住脚吗？我表示怀疑。

> We know in the meantime that the choice of an interface is not just a division of (a fixed amount of) labour, because the work involved in co-operating and communicating across the interface has to be added. We know in the meantime —from sobering experience, I may add— that a change of interface can easily increase at both sides of the fence the amount of work to be done (even drastically so). Hence the increased preference for what are now called "narrow interfaces". Therefore, although changing to communication between machine and man conducted in the latter's native tongue would greatly increase the machine's burden, we have to challenge the assumption that this would simplify man's life.

与此同时，我们知道，界面的选择不仅仅是（固定工作量）的分工，因为跨界面的合作和通信所涉及的工作量必须被计入。与此同时，基于令人警醒的经验，界面的变更很容易在双方都增加需要完成的工作量，甚至可能剧烈增加。因此，如今被称为窄界面的选择日益受偏爱。虽然改为用后者的母语进行机器与人之间的通信会大大增加机器的负担，但我们必须挑战认为这样会简化人类生活的假设。

> A short look at the history of mathematics shows how justified this challenge is. Greek mathematics got stuck because it remained a verbal, pictorial activity, Moslem "algebra", after a timid attempt at symbolism, died when it returned to the rhetoric style, and the modern civilized world could only emerge —for better or for worse— when Western Europe could free itself from the fetters of medieval scholasticism —a vain attempt at verbal precision!— thanks to the carefully, or at least consciously designed formal symbolisms that we owe to people like Vieta, Descartes, Leibniz, and (later) Boole.

对数学史 简短一瞥便足以说明这一挑战的合理性。古希腊数学 陷入了停滞，因为它始终是一项口头的、图像的活动；穆斯林式的“代数”在 一次 胆小的象征尝试之后，回归修辞风格时便已消亡；而现代文明世界，无论好坏，终究只能出现——当西方欧洲得以挣脱中世纪经院哲学的枷锁——一部 关于言语精确的徒劳尝试！——这多亏了我们应当归功于维塔、笛卡尔、莱布尼茨，以及（后来）布尔 的那套精心设计的正式象征体系，或是至少是有意识设计的正式象征体系。

> The virtue of formal texts is that their manipulations, in order to be legitimate, need to satisfy only a few simple rules; they are, when you come to think of it, an amazingly effective tool for ruling out all sorts of nonsense that, when we use our native tongues, are almost impossible to avoid.



形式化文本的优点在于，其操作若要具有合法性，只需满足几条简单的规则；细想起来，它们是排除各种无稽之谈的极其有效的工具，而当我们使用母语时，这些无稽之谈几乎无法避免。

> Instead of regarding the obligation to use formal symbols as a burden, we should regard the convenience of using them as a privilege: thanks to them, school children can learn to do what in earlier days only genius could achieve. (This was evidently not understood by the author that wrote —in 1977— in the preface of a technical report that "even the standard symbols used for logical connectives have been avoided for the sake of clarity". The occurrence of that sentence suggests that the author's misunderstanding is not confined to him alone.) When all is said and told, the "naturalness" with which we use our native tongues boils down to the ease with which we can use them for making statements the nonsense of which is not obvious.

我们不应将使用正式符号视为负担，而是将其视为一种便利和特权：正是因为有了这些符号，普通孩子才能掌握那些过去只有天才才能完成的技能。（正如1977年一位技术报告作者在序言中所述：“为了清晰起见，甚至逻辑连词的标准符号也被避免使用了。” 这显然反映了作者的误解，而这种误解并非他个人独有。）归根结底，我们母语的“自然”用法，其实就是我们能够轻易地用它来表达那些其荒谬性并不显而易见的陈述。

> It may be illuminating to try to imagine what would have happened if, right from the start our native tongue would have been the only vehicle for the input into and the output from our information processing equipment. My considered guess is that history would, in a sense, have repeated itself, and that computer science would consist mainly of the indeed black art how to bootstrap from there to a sufficiently well-defined formal system. We would need all the intellect in the world to get the interface narrow enough to be usable, and, in view of the history of mankind, it may not be overly pessimistic to guess that to do the job well enough would require again a few thousand years.



试想一下，如果从一开始，我们的母语就成了信息处理设备输入与输出的唯一载体，那将会发生什么，这或许会带来启发。经过深思熟虑，我猜测历史在某种意义上将会重演，而计算机科学将主要由一门真正的黑魔法 (black art) 组成，即如何从那里自举 (bootstrap) 出一个足够精确定义的形式系统。我们可能需要集天下之智慧，才能将接口缩小到足以实用的范围。鉴于人类的历史，如果猜测要做好这项工作又需要数千年，或许并不算过于悲观。

> Remark. As a result of the educational trend away from intellectual discipline, the last decades have shown in the Western world a sharp decline of people's mastery of their own language: many people that by the standards of a previous generation should know better, are no longer able to use their native tongue effectively, even for purposes for which it is pretty adequate. (You have only to look at the indeed alarming amount of on close reading meaningless verbiage in scientific articles, technical reports, government publications etc.) This phenomenon —known as "The New Illiteracy"— should discourage those believers in natural language programming that lack the technical insight needed to predict its failure. (End of remark.)

备注。由于教育领域逐渐背离了智力训练，在过去的几十年里，西方世界的人们对母语的掌握程度急剧下降。许多人本应比前几代人更有能力，却发现自己无法有效地使用母语，即使在那些母语完全可以胜任的场合。这一点在科学论文、技术报告和政府出版物中尤为明显，那里充斥着大量近乎无意义的废话。这种现象被称为“新无知主义”，它应该让那些缺乏技术洞察力来预测其失败的自然语言编程支持者们感到沮丧。（结束备注。）

> From one gut feeling I derive much consolation: I suspect that machines to be programmed in our native tongues —be it Dutch, English, American, French, German, or Swahili— are as damned difficult to make as they would be to use.

凭着一种直觉，我从中获得了极大的慰藉：我怀疑，用我们的母语——无论是荷兰语、英语、美式英语、法语、德语还是斯瓦希里语——对机器进行编程，制造起来和使用起来一样困难。
