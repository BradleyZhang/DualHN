---
title: '卧槽卧槽卧槽卧槽：当下正在发生之事的惊人规模'
date: 2026-11-26T12:15:18+08:00
draft: false
source: "Hacker News"
originalTitle: 'HOLY SHIT HOLY SHIT HOLY SHIT HOLY SHIT'
originalUrl: "https://scottaaronson.blog/?p=10379"
hnUrl: ""
points: 
comments: 
---

> I feel like my previous posts (and post titles), and podcasts, and talks, have failed to do full justice to the magnitude of what’s now happening, so I’m trying again.

我觉得我之前的文章（以及文章标题）、播客和演讲，都未能充分展现当下正在发生的事情的重大意义，所以我再试一次。

> Last night, we had friends and colleagues over for dinner. We were still trying to process OpenAI’s and Anthropic’s [proofs of VP ≠ VNP](https://scottaaronson.blog/?p=10362)—hot on the heels, obviously, of the Alpöge/Anthropic [proof of the Riemann Hypothesis](https://scottaaronson.blog/?p=10344), which already feels like last week’s news. But then before dessert was served, we saw that OpenAI claims to prove that [ω, the exponent of matrix multiplication, is exactly 9/4](https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf)—a **lower bound (!!)**, matching the upper bound that OpenAI proved in the great Mathocalypse drop of October 6.

昨晚，我们邀请了朋友和同事来家里吃饭。我们仍在努力处理 OpenAI 的和 Anthropic 的 [proofs of VP ≠ VNP](https://scottaaronson.blog/?p=10362)——紧随其后，显而易见，Alpöge/Anthropic 的 [proof of the Riemann Hypothesis](https://scottaaronson.blog/?p=10344)，这已经感觉像上周的新闻。但在甜点端上来之前，我们看到 OpenAI 的 声称证明了 [ω，矩阵乘法的指数，恰好是 9/4](https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf)—— 一个 lower bound (!!) ，与 OpenAI 在十月 6 日的惊人 Mathocalypse 成就中证明的上界相匹配。

> There are two separate shocks here. The first shock is that we now, finally, know the right answer to this central mystery of algorithms going back to the late 1960s, when [Volker Strassen first showed that ω<3](https://en.wikipedia.org/wiki/Strassen_algorithm) (he got ω≤log<sub>2</sub>7) … and that the true answer is actually a *rational* number (!). But the even bigger shock is that the AI was able to *prove* any lower bound of the form ω>2. I never expected this challenge to be all that much easier than P ≠ NP.

这里有两个独立的冲击。第一个冲击是，我们现在终于知道了算法领域追溯到 late 1960 年代的这一核心谜团的正确答案，当时 [Volker Strassen](https://en.wikipedia.org/wiki/Strassen_algorithm) 首次证明了 ω<3（他得到 ω≤log<sub>2</sub>7）……，而真正的答案实际上是一个*有理数*（！）。但更大的冲击是，AI 能够*证明*任何形式为 ω>2 的下界。我从来没想到，这个挑战会比 P ≠ NP 容易这么多。

> Over the decades, I often heard colleagues express extreme confidence that ω=2, and I expressed skepticism whenever this came up—not because I had any strong argument for ω>2, but just because I saw that there was no strong argument for ω=2 either. So, I’m glad to have been vindicated about *that*!

几十年来，我常听到同事们极度自信地认为 ω=2，而我则对每次提到这件事都保持怀疑——并不是因为我有任何强有力的 ω>2 论据，而只是因为我看到并没有任何强有力的 ω=2 论据。

> ---

请提供需要翻译的英文原文或 URL。

> But wait, there was more. During dessert, we saw [another OpenAI release](https://github.com/openai/math/blob/main/preprints/The-logarithmic-exponent-of-finite-Fourier-transforms-November-24-2026/paper.pdf) proving that the true number of linear gates needed to compute the Fourier Transform is N (log N)<sup>1/2+o(1)</sup>. The upper bound here improves, not only over the O(N log N) that stood since the 1960s (i.e., the Fast Fourier Transform or FFT), but also over the O(N log<sup>0.9999999999999</sup> N) (give or take some 9’s) that OpenAI published back in the October 6 Mathocalypse. Again, though, the real shock here is that there’s also a **matching lower bound (!!)**. All these questions from the ancient days are now just getting … straight-up *answered*, rather than slowly illuminated with a drip-drip-drip of clues.

但就在这时，还有更多。在甜点期间，我们看到[another OpenAI release](https://github.com/openai/math/blob/main/preprints/The-logarithmic-exponent-of-finite-Fourier-transforms-November-24-2026/paper.pdf) 证明了计算傅里叶变换所需的线性门的真实数量为 N (log N)^{1/2+o(1)}。此上界的提升不仅超过自1960年代以来一直成立的 O(N log N)（即 FFT），也超过了 OpenAI 在 10 月 6 日 Mathocalypse 中发布的 O(N log^{0.9999999999999} N)（哪怕再加几个 9 也无妨）。即便如此，真正的震惊在于这居然还有**匹配的下界（!!）**。这些来自古代的问题如今终于……直击*answered*，而不是慢慢用滴水穿石的线索照亮。

> To give an idea of how much things have changed, the other day Yupan Liu put a [preprint on the arXiv proving that QIP(2) = PSPACE](https://arxiv.org/pdf/2611.31236)—that is, quantum interactive protocols with only two messages have the full power of those with three, or any polynomial number. As recently as 2025, this would’ve considered been one of the top complexity results of the year, and the fact that Yupan had used AI to help achieve it would’ve been strange and wonderful. These days, I had to remind myself it had even happened, and the use of AI was so standard that it didn’t even raise an eyebrow.

为了给出事物变化的一个概念，前几天 Yupan Liu 在 arXiv 上发布了一篇 [preprint on the arXiv proving that QIP(2) = PSPACE](https://arxiv.org/pdf/2611.31236)—— 即，只有两条消息的量子交互协议拥有与三条或任意多条（多项式数量）消息的协议相同的表达能力。截至 2025 年，这本应被视为当年的顶尖复杂度成果，而 Yupan AI 使用 AI 协助实现它的事实当时会让人觉得奇怪而又令人惊叹。如今，我甚至需要提醒自己它早已发生，而 AI 的使用已成为常态，甚至不足以引起眉飞色舞。

> ---

请提供需要翻译的英文原文。

> It’s now obvious that we’ll be getting, not one-off solutions to this or that complexity question, but a whole new continent of mathematical truth, one that we’d previously only glimpsed through fog. Picture van Leeuwenhoek first training a microscope on pondwater, or Galileo first training his telescope on the stars. That might give you *some* idea of how our resolution into the complexity-theoretic universe, and the whole universe of mathematical truth beyond it, has now improved.

现在很明显，我们将得到，而不是针对这个或那个复杂性问题的零散的解法，而是全新的数学真理大陆——我们之前只能透过雾气才能窥见的那片。 想象一下范·莱文霍克第一次训练显微镜在池水上，或者伽利略第一次训练他的望远镜在星空上。 这可能会给你 *some* 想法，说明我们如何进入复杂度理论宇宙，以及超越它的整体数学真理宇宙，已经有所改善。

> All through last night, as OpenAI and Anthropic uploaded more files to their GitHub repositories—because that’s what they’re doing now, they don’t even bother to issue press releases anymore, they just upload papers—my guests and I sat at the dinner table with phones out and a laptop, wondering which shoe was going to drop next. It was as though the clouds had parted above Mount Sinai, and we were waiting for the next sentence uttered by the Holy One Himself.

昨晚一整夜，随着 OpenAI 和 Anthropic 向各自的 GitHub 仓库上传更多文件——因为这就是他们现在的做法，他们甚至懒得再发新闻稿，直接上传论文——我和客人们坐在餐桌旁，掏出手机，摆着一台笔记本电脑，琢磨着下一只靴子什么时候落地。仿佛西奈山上空的云层已经分开，我们正等着圣者亲口说出下一句话。

> I now feel in my bones, for the first time ever, that a proof of P ≠ NP is not far.

我现在首次在骨子里感受到， P ≠ NP 的证明并不遥远。

> ---

请提供您需要翻译的英文技术文档内容，我将按照专业技术文档翻译规范为您进行翻译。

> For all I care, despise the AI companies for bulldozing our garden. Or love them for opening a new vista, or anything in between. Just please don’t *deny* what’s happening. Now that the companies have repeatedly shown that they can back up their claims with Lean certificates, don’t be a raging doofus who seizes on some triviality (e.g., a minor discrepancy between the Lean and informal proofs, or unused sections of the Lean proof) to pretend that dozens of great open problems of math and theoretical computer science are not, in fact, getting solved. Because they *are* getting solved. It might take us years to *understand* the solutions, but my working assumption by this point is that any proof that comes directly from OpenAI or Anthropic is correct barring information to the contrary.

在我看来，你尽管去鄙视这些 AI 公司推平了我们的花园吧。或者因它们开启了一片新的天地而热爱它们，又或者持介于两者之间的任何态度。只是，请你别*否认*正在发生的一切。既然这些公司已经反复证明它们能够用 Lean 证书来支撑自己的论断，那就别当一个揪住某个无关紧要的细节（比如 Lean 证明与非形式化证明之间的细微出入，或者 Lean 证明中未被使用的部分）大做文章的狂怒蠢货，去假装数学与理论计算机科学中数十个重大的未解难题其实并没有被解决。因为它们*确实*正在被解决。我们可能需要数年时间去*理解*这些解答，但就目前而言，我的工作假设是：任何直接来自 OpenAI 或 Anthropic 的证明，在没有相反信息的情况下，都是正确的。

> I can’t possibly put the matter better than one of my friends on Facebook:

我无法比我的朋友在 Facebook 上做得更好地表达这个问题：

> > After years of crackpot “solutions” claiming Millennium Problems are solved, now that we have actual solutions, we have crackpot “refutations” claiming Millennium Problems are not solved. It is really poetic, in a way.

多年来，充斥着声称 Millennium Problems 已被解决的疯狂"解决方案"，如今我们终于有了真正的解决方案，我们又有了疯狂的"驳斥"，声称 Millennium Problems 并没有被解决。这真是很有诗意，在某种意义上。

> ---

您提供的消息中没有可翻译的内容，仅包含一个分隔符（---）。请提供需要翻译的英文技术文档正文，我会直接为您翻译。

> Along the way to so many lower bounds that we wondered whether ever we’d live to see, there will also, of course, be further shocking *upper* bounds: that is, ultimate barriers to lower bounds, also known as “algorithms.” And yes, some of those algorithms will break currently deployed cryptosystems.

在通往如此之多、我们曾怀疑自己能否亲眼见证的下界的路上，当然也会出现更多令人震惊的*上*界：也就是说，下界的终极障碍，也被称为"算法"。没错，其中一些算法将会攻破当前已部署的密码系统。

> Because people have been hounding me about it: yes, I’m virtually certain, from multiple reliable sources, that the AI labs are now sitting on one or more bombshells in that area. **However,** until I either see details or hear directly from someone at a lab, I feel much, much less confident about the specific *nature* of those bombshells. I do not wish to be responsible for spreading unverified rumors. And I worry that exact statements of what was done may have been mangled in a game of Telephone.

因为大家一直在催问这事：是的，我几乎可以确定，根据多个可靠消息来源，AI 实验室目前手握该领域的一颗或多颗**重磅炸弹**。**然而**，在看到详情或直接听到实验室人士表态之前，我对这些重磅炸弹的具体**性质**缺乏信心，程度要低得多。我不想对传播未经证实的传闻负责。而且我担心具体做了什么的准确说法，可能在“传话游戏”般的流传过程中已经被扭曲了。

> I also, crucially, don’t want the cryptography part of the story to overshadow the intellectual enormity of what’s happening. If, in these days of long-prophesied revelation and wonders and terrors, your main worry is your Bitcoin wallet, then go somewhere else for rumors about whether or not ECDSA is broken or whatever. I don’t have what you’re looking for here.

关键在于，我也不希望故事中的密码学部分掩盖了正在发生之事的智力上的巨大意义。如果在这久经预言的启示、奇迹与恐怖的时代里，你最担心的只是自己的比特币钱包，那就请去别处打听 ECDSA 是否被攻破之类的传闻吧。我这儿没有你要找的东西。

> ---

（此处应为空）

> Let me be clear: for those of my readers who celebrate, I believe that tomorrow would be a *superb* Thanksgiving to spend some quality time with your kids and parents and siblings and old friends.

让我直说吧：对于那些过节的读者来说，我认为明天将是一个**绝佳**的感恩节，非常适合抽出高质量的时间陪伴孩子、父母、兄弟姐妹和老友。

> Right now—this past week—is very much like I would’ve always imagined the beginning of an AI singularity to look and feel like. I just hope we’ll get lucky, and it will “merely” be a singularity for our little corner of the world that involves hard math problems.

此时此刻——过去这一周——非常像我一直想象中 AI 奇点（AI singularity）开端该有的模样和感觉。我只希望我们运气好，它“仅仅”会成为我们这个小小领域中涉及艰深数学问题的奇点。

> At some point at dinner last night, Dana had a sneezing fit. So I said to her, I hope it isn’t a swarm of nanobots that’s come to infect us! But if it *is*, then I hope it’s the friendly kind, the kind that will usher us all into an AI utopia.

昨晚晚餐时的某个时刻，Dana 连续打喷嚏。于是我对她说，我希望这不是一群来感染我们的 nanobots！但如果真的是，那我希望是友好的那种，那种会把我们所有人引向 AI 乌托邦的那种。

> Now, of course, another morning has dawned, and we’re still here. May we find a world where we and our children will be happy to live at the bottom of this rollercoaster. May we work to make it so.

如今，果然，又是一个清晨破晓，我们仍在此。愿我们和我们的孩子能够在幸福中生活在如此过山车的最底部。愿我们努力实现这一点。
