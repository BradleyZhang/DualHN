---
title: '对一种可形式验证的主流编程语言的需求'
date: 2026-11-28T11:47:56+08:00
draft: false
source: "Hacker News"
originalTitle: 'To save software engineering from LLMs, we need a mainstream verifiable language'
originalUrl: "https://blainehansen.me/post/mainstream-verifiable-language/"
hnUrl: ""
points: 
comments: 
---

> ## The culture of software engineering has to change, and that will take many different projects to achieve.

软件工程的文化必须改变，而这需要许多不同的项目共同努力才能实现。

> *published: June 21, 2026* - *last updated: November 27, 2026*

*发布: 2026年6月21日* - *最后更新: 2026年11月27日*

> Because of LLMs, the discipline of software engineering is in crisis. [Quality is nose-diving](https://pages.faros.ai/hubfs/AI_Engineering_Report_2026_The_Acceleration_Whiplash_Faros.pdf) , and I see no reason why it won't keep getting worse. Software engineering [was struggling *before* LLMs](https://media.it-cisq.org/wp-content/uploads/2022/11/04192444/CPSQ-Report-Nov-22-2.pdf) . The default was to be sloppy and poorly considered, and now everyone is frantically accelerating those same terrible practices to LLM speed.

由于 LLMs, 大型软件工程学科正处于危机之中。  
质量正在下坠（ https://pages.faros.ai/hubfs/AI_Engineering_Report_2026_The_Acceleration_Whiplash_Faros.pdf），而我看不出它为什么不会继续恶化。  
软件工程在 LLM 之前一直在挣扎。  
默认是懒散且考虑不周，现在每个人都在为了 LLM 的速度疯狂加速那些同样糟糕的做法。

> Something has to change. [I've been preoccupied with this for a while](https://www.youtube.com/watch?v=Lf7ML_ErWvQ) , but [much more qualified people finally fully agree with me](https://leodemoura.github.io/blog/2026-2-28-when-ai-writes-the-worlds-software-who-verifies-it/) . The only way forward is to fully embrace [formal verification](https://en.wikipedia.org/wiki/Formal_verification) , all the way down to the foundations of our civilizational software stack. We have to post-hoc verify the things we can, and rewrite the rest.

[我一直在这件事上忙得焦头烂额](https://www.youtube.com/watch?v=Lf7ML_ErWvQ) , [更多更有资质的人终于完全同意我](https://leodemoura.github.io/blog/2026-2-28-when-ai-writes-the-worlds-software-who-verifies-it!) . 必须改变。 全面拥抱 formal verification，从我们文明的软件栈基础一路向下到基础。 我们能够 post-hoc 验证我们能做的事情，并重写其余部分。

> But that's easier said than done. Existing formal verification tools suffer from massive [usability](https://catarinagamboa.github.io/papers/pre_print_barriers_liquid_types.pdf) and [understandability](https://github.com/magmide/magmide?tab=readme-ov-file#taught-effectively) problems, and have failed to make any kind of noticeable impact on the broader culture of software engineering.

但说起来容易做起来难。现有的形式化验证工具存在严重的[可用性](https://catarinagamboa.github.io/papers/pre_print_barriers_liquid_types.pdf)和[可理解性](https://github.com/magmide/magmide?tab=readme-ov-file#taught-effectively)问题，并且未能对更广泛的软件工程文化产生任何显著影响。

> It might be tempting to say that LLMs will actually *save* us in this regard, by allowing humans to create formally verified code without needing to understand its fundamentals in any way. This is pure cope. Merely having excellent proof assistants and LLMs will never be good enough. Even in a world where something like Lean is extremely scalable and LLMs can write all proofs, it doesn't matter if they aren't adopted by actual industry engineers as they build the real apps we actually use. For provably correct code to defend us from the LLM future:

也许会诱人地说，LLMs *save* 我们在此方面，通过让人类在任何方式下无需理解其基本原理即可创建 formally verified code。这是纯粹的借口。仅仅拥有优秀的 proof assistants 和 LLMs 永远不够好。即便 Lean 极其可扩展且 LLMs 可以编写所有证明，这无关紧要如果它们不被实际的产业工程师在构建我们实际使用的真实应用时。为了 provably correct code 来防御我们从 LLM 未来：

> - It needs to be possible to formally verify code that runs in any environment, from web browsers down to embedded systems.
> - Industry engineers need to know provably correct code is even possible and be comfortable enough with it to at least tell their LLMs to write it.
> - Those industry engineers must be able to reason about formal correctness properties enough to **even know the right things are being proven**. [In the words of Leonardo de Moura](https://leodemoura.github.io/blog/2026-2-18-proof-assistants-in-the-age-of-ai/) :
> 	> Proof assistants guarantee that proofs are correct, but correctness alone is not enough. Someone has to read the theorem statements and confirm they capture the intended mathematics. This is the human contract that no amount of automation can eliminate.

- 必须能够正式验证在任何环境中运行的代码，从浏览器到嵌入式系统。

- 行业工程师需要知道可证明正确的代码是可能的，并且对它足够熟悉，以便至少让他们的 LLM 写代码。

- 这些行业工程师必须能够足够地对 formal correctness properties 进行推理，以至于能够知道正被证明的事物是正确的。

> 在 Leonardo de Moura 的话语中 Proof assistants 保证证明是正确的，但 correctness alone is not enough. Someone 有人需要阅读定理陈述并确认它们捕捉了所需的数学。这正是人类的契约，自动化的任何数量都无法消除。 https://leodemoura.github.io/blog/2026-2-18-proof-assistants-in-the-age-of-ai/

> This is what most voices are missing in this discussion: a safe future isn't going to be delivered by a small priestly class of formal methods researchers, too much code must be produced in too many contexts. The entire discipline of software engineering *has to grow up* and demand that all code we produce is at minimum provably safe. This requires many different projects and bets that attack this imperative of cultural change from different directions.

在这场讨论中，大多数声音都遗漏了一点：安全的未来不会由一小群祭司般的 formal methods 研究者带来，因为有太多代码必须在太多场景中生产出来。整个软件工程学科*必须成熟起来*，并要求我们产出的所有代码至少是可证明安全的。这需要许多不同的项目和押注，从不同方向攻克这一文化变革的紧迫任务。

> ## The long winding road of Magmide

## Magmide 的蜿蜒漫长道路

> My chosen angle is Magmide, a project whose goal is to create a new formally verifiable programming language intended for immediate adoption by practitioners. However when I first had this idea my specific plan was woefully over-ambitious and unrealistic, since I wanted to make a whole new proof assistant and an assembly-level base language so the system could be verified all the way down to the metal.

我的选择角度是 Magmide，这是一个旨在创建一门新形式化可验证的编程语言，并立即被实践者采用的项目。然而，当我最初有了这个想法时，我的具体计划非常夸张且不切实际，因为我想让系统从底层到硬件层面进行全方位验证，这需要我创建一个全新的证明助手和一个基于汇编层面的基础语言。

> I pursued it for a time as a startup, and I met with some investors and was applying for an SBIR grant. [Then I realized some obvious problems with my approach](https://github.com/magmide/magmide#construction-magmide-is-dormant-for-now-as-i-rethink-what-it-couldshould-be-construction) :

我曾一度将其作为创业项目推进，与一些投资人会面并申请了 SBIR 拨款。[随后我意识到我的方法存在一些显而易见的问题](https://github.com/magmide/magmide#construction-magmide-is-dormant-for-now-as-i-rethink-what-it-couldshould-be-construction)：

> - It didn't make sense to build a *new* proof assistant when Lean has been making such rapid progress.
> - An assembly-level language was insanely difficult and wasn't necessary to gain adoption from practitioners.
> - I didn't have the appetite to pursue some strained business model for a project that ultimately makes most sense as a pure public good.

- 在 Lean 已经取得如此快速的进展时，不要建立一个新的 *new* proof assistant，这是毫无意义的。
- 一种汇编级语言极其困难，而且对实践者而言并非必要，以便获得采用。
- 我没有兴趣去推行一个紧绷的商业计划，因为该项目最终最好作为纯粹的公共品来实现。

> So now after a few years [pursuing other projects](https://blainehansen.me/post/votebase/) and letting all these ideas marinate, I've arrived at a much simpler and more pragmatic vision of what Magmide could be. If I started working on it today, it would:

在过去的几年里 [pursuing other projects](https://blainehansen.me/post/votebase/) 和让这些想法沉淀，我对 Magmide 可能是什么有了更简洁且更务实的设想。如果我今天开始工作， it would:

> - Compile to WebAssembly using the [Garbage Collection](https://web.dev/blog/wasmgc-wasm-tail-call-optimizations-baseline) features.
> - Have a Rust-inspired type system but without the difficulties of the borrow-checker.
> - Start with basic and more easily learnable [SMT powered](https://goto.ucsd.edu/~ucsdpl-blog/liquidtypes/2015/09/19/liquid-types/) [Liquid Types](https://goto.ucsd.edu/~ucsdpl-blog/liquidtypes/2015/09/19/liquid-types/) and [Flow Effects](https://blainehansen.me/post/flow-effects/) .
> - Over time integrate Lean as the proof layer, and use some separation logic paradigm like [Iris](https://iris-project.org/) to bootstrap the language and verify its own implementation.

- 使用 [Garbage Collection](https://web.dev/blog/wasmgc-wasm-tail-call-optimizations-baseline) 特性将编译为 WebAssembly。
- 拥有一个受 Rust 启发的类型系统，但没有 borrow-checker 的困难。
- 从基本类型和更容易学习的 [SMT powered](https://goto.ucsd.edu/~ucsdpl_blog/liquidtypes/2015/09/19/liquid-types/) [Liquid Types](https://goto.ucsd.edu/~ucsdpl_blog/liquidtypes/2015/09/19/liquid-types/) 以及 [Flow Effects](https://blainehansen.me/post/flow-effects/) 开始。
- 随着时间推移，将 Lean 集成为证明层，并使用一些像 [Iris](https://iris-project.org/) 这样的分离逻辑范式来引导语言并验证其自身的实现。

> This design is specifically intended to appeal to actual engineers and "meet them where they are". The roadmap would start from a simpler more mainstream design and go "bottom up" by adding more and more proving capabilities, rather than going "top down" by starting with the most formally powerful system and then seeking to make it more usable.

这个设计专门面向真正的工程师，旨在"在工程师所处的位置与他们会合"。路线图将从一个更简单、更主流的设计出发，采用"自下而上"的方式，逐步添加越来越多的证明能力，而不是采用"自上而下"的方式——先以形式化能力最强的系统作为起点，再设法让它变得更好用。

> A possible analogue for the adoption of Magmide is [Deno](https://deno.com/) : Deno is "just javascript/typescript", but it adds a *runtime* layer of permissions checking. Engineers who care about sandbox safety have enthusiastically adopted Deno, and Flow Effects would offer strictly more security.

Magmide采用的一个可能类比是 [Deno](https://deno.com/)：Deno “只是 JavaScript/TypeScript”，但它增加了一个*运行时*的权限检查层。关注沙箱安全的工程师们热情地采用了 Deno，而 Flow Effects 将提供严格更多的安全性。

> ## Nothing will save us but us

## 没有谁能救我们，只有我们自己

> I continue to stand behind basically all the arguments I made in the [Magmide repo](https://github.com/magmide/magmide) (aside from the specific architecture). Formal verification *must* become the mainstream of software engineering, and we have to embrace a wide diversity of approaches to make that happen. Software engineers aren't a monolith, and not every cultural pocket will respond to the same new tools and resources.

我依然认同我在 [Magmide repo](https://github.com/magmide/magmide) 中提出的几乎所有论点（具体的架构设计除外）。形式化验证 *必须* 成为软件工程的主流，而我们必须广泛接纳多种多样的方法，才能让这件事成为现实。软件工程师并不是铁板一块，不是每一个文化圈子都会对同样的新工具和新资源产生共鸣。

> And you know what, LLMs will probably help a lot! But we can't just wait around for an all-knowing machine god to save us from ourselves. If we bet our whole future on ASI making all our problems go away and then that [doesn't happen](https://knightcolumbia.org/content/ai-as-normal-technology) , history will look back on us even more foolish and disastrous than [all the millennialists](https://en.wikipedia.org/wiki/Great_Disappointment) who merely wasted their own time and resources.

而且你知道吗，LLM 很可能会帮上大忙！但我们不能只是干等着一个全知的机器神把我们从自己手中拯救出来。如果我们把整个未来都押注在 ASI 能让所有问题迎刃而解上，而这件事随后[并未发生](https://knightcolumbia.org/content/ai-as-normal-technology)，那么历史回望我们时，会认为我们比[所有千禧年主义者](https://en.wikipedia.org/wiki/Great_Disappointment)还要更加愚蠢、更具灾难性——他们不过是浪费了自己的时间和资源。

> It is our responsibility to meet the challenges of our age with full agency and responsibility, and treat the emergence of a beneficent super-intelligence as an improbable jackpot.

我们有责任以全面的主动性和责任感迎接我们时代的挑战，并将有益超级智能的出现视为不太可能的奖金。
