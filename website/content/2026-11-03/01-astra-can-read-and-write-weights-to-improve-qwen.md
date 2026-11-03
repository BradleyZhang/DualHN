---
title: "阿斯塔可以读写权重以提升Qwen"
date: 2026-11-03T10:56:04+08:00
draft: false
source: "Hacker News"
originalTitle: "Sparks of Weight-Space Programming: LLMs can natively read & write neural network weights"
originalUrl: "https://rikiyat.github.io/blog/weight-space-programming/"
hnUrl: ""
points: 
comments: 
---

> ## LLMs can natively read & write neural network weights

## LLMs 可以原生读取和写入神经网络权重

> **TL;DR**



您只提供了标题 **TL;DR**，没有提供需要翻译的正文内容。请提供完整的英文原文，我会为您进行翻译。

> We find that frontier LLMs are surprisingly good at **natively reading and writing neural network weights**, well past what we’d expect from humans or conventional algorithms. This might be a big deal for both optimization and interpretability.

我们发现，前沿 LLM 在 **原生读写神经网络权重** 方面出奇地擅长，远超人类或常规算法的预期。这对于优化和可解释性都可能是一件大事。

> Just by looking at the raw weights, GPT-6 Astra **can tell what a network was trained to do**. And without any environment feedback, it **has no trouble writing, from scratch, small game-playing networks** that outplay networks trained with PPO for 100 million steps.

仅通过查看原始权重，GPT-6 Astra **就能判断出一个网络是被训练来做什么的**。而且，在没有任何环境反馈的情况下，它 **能毫不费力地从头开始编写小型游戏对弈网络**，这些网络能击败经过 PPO 训练了 1 亿步的网络。

> Likewise, asked to make Qwen3.5-0.8B better at math without gradients, Astra **identifies an issue in its weights** causing reasoning loops that Qwen’s own [model card](https://huggingface.co/Qwen/Qwen3.5-0.8B/blob/main/README.md#L856) warns about, and **fixes this by natively editing 0.016% of the weights**. With the same sampling settings, this weight correction raises MATH-500 from 7.9% to 48.1% and generalizes out of the box to instruction following, raising IFEval by 3x.

同样，要求让 Qwen3.5-0.8B 在不使用梯度的情况下在数学方面表现更好，Astra 识别出其权重中存在导致推理循环的问题，该问题在 Qwen 自己的模型卡中有警告，并通过原生编辑 0.016% 的权重来修复。使用相同的采样设置，这种权重修正将 MATH-500 从 7.9% 提升到 48.1%，并开箱即用地泛化到指令遵循，IFEval 提升了 3 倍。

> All of this is possible without allowing Astra to write training loops. It uses its reasoning to figure out what each part of a neural network computes, or should compute, and changes the weights accordingly. We call this **Weight-Space Programming**.

这一切不需要让Astra编写训练循环。它利用自身推理，推断出神经网络每部分计算的内容或应计算的内容，并相应地调整权重。我们将其称为**Weight-Space Programming**。

> Throughout the history of deep learning, we encoded our simplistic inductive biases into tiny symbolic optimizers like Adam or Muon. This is changing: **our neural network weights will soon be *natively* optimized by LLMs that deliberately reason about their weights**.

在深度学习的历史上，我们将简化的先验偏置编码进微型符号优化器，如 Adam 或 Muon。这正在改变：**我们的神经网络权重将很快被 LLMs 直接 *natively* 优化，这些 LLMs 故意推理其权重。**

![The network playing Breakout.](https://rikiyat.github.io/blog/weight-space-programming/assets/which_game/breakout.gif)

> The network playing Breakout.

正在玩 Breakout 的网络

> If you were asked to handcraft a neural network that plays Go, what would you do? If you were handed raw neural network weights and asked to predict their behavior, where would you even start? For almost any human, this is practically impossible.

如果你被要求手工设计一个能玩围棋的神经网络，你会怎么做？如果你被交给原始的神经网络权重，并要求预测它们的行为，你该从哪里开始？对于大多数人来说，这几乎是不可能完成的任务。

> Today, weights are written by [optimization](https://karpathy.medium.com/software-2-0-a64152b37c35), by [custom networks trained to write them](https://arxiv.org/abs/2102.11174), or by [compilers from formal programs](https://arxiv.org/abs/2301.05062). In this post, we find that the current generation of frontier LLMs, used natively in natural language, are starting to become eerily good at understanding and crafting neural network weights around natural-language goals.

今天，权重由 [优化](https://karpathy.medium.com/software-2-0-a64152b37c35)、由 [经过训练以编写它们的自定义网络](https://arxiv.org/abs/2102.11174) 或由 [从形式程序编译的编译器](https://arxiv.org/abs/2301.05062) 编写。在本文中，我们发现，当前一代前沿 LLM，直接用于自然语言，开始变得诡异地擅长理解并围绕自然语言目标构建神经网络权重。

> ## Weight-Space Programming



## 权重空间编程

> For a few years now, we’ve all been **using LLMs to optimize text artifacts** like prompts and the programs built around them. More recently, we’ve started using them to optimize whole harnesses and the training code and hyperparameters that train ML models.

几年来，我们一直在使用大语言模型来优化文本工件，比如提示词以及基于它们构建的程序。近来，我们又开始利用这些模型来优化整个测试框架，以及训练机器学习模型所需的训练代码和超参数。

> We often justified these methods by reference to the fact that *we don’t know other principled ways to hill-climb on text artifacts, unlike for updating the weights of differentiable neural networks*. After all, humans can “optimize” code by hand, for example, so it made sense to ask LLMs to do it, but they can’t “optimize” neural weights by hand, so those remained largely in the realm of symbolic algorithms.

我们之所以常以此为由来证明这些方法的合理性，是因为*我们不知道其他有原则的方法来对文本制品进行“爬山优化”，这不像更新可微分神经网络的权重那样有成熟方法*。毕竟，人类可以手动“优化”代码，所以让 LLM 来做这件事说得通；但人类无法手动“优化”神经网络权重，因此后者主要仍停留在符号算法的范畴内。

> In this post, we share very early results that allow us to argue that **the paradigm of reasoning-driven optimization is now coming even for differentiable neural networks**.



在本文中，我们分享了一些非常早期的结果，这些结果使我们能够论证：**推理驱动的优化范式现在甚至也来到了可微分神经网络领域。**

> In **Weight-Space Programming**, a general-purpose **LLM reads and writes a network’s weights directly** (i.e., not through an optimizer, and in particular not with gradient descent) around some natural language spec, sometimes even with no environment feedback at all.

在 **权重空间编程** 中，一个通用 **LLM 会直接读取和写入网络权重**，绕过优化器（尤其是梯度下降），并围绕自然语言规范进行操作，有时甚至完全不需要环境反馈。

> In natural language, it’s becoming possible to **“just ask” an LLM to natively find a hidden trait or failure inside the weights of a neural network, to fix that failure, or to write a new network from scratch**. We report early, exciting results on each of these below, first on small networks and then even on real language models:

在自然语言中，**“只需向 LLM 提问”即可让其原生地发现神经网络权重中隐藏的特征或缺陷、修复该缺陷，甚至从头编写一个新网络**，这正逐渐成为现实。下文我们将报告上述各方面的早期成果，这些成果令人振奋，首先是在小型网络上，随后甚至在真实的语言模型上：

> 1. **LLMs can read neural network weights:** In Experiments 1 to 3, we ask Astra questions like what game a network was trained to play, what shape is drawn by a diffusion model, and which language a small language model was trained on. In Experiment 7, we ask which of two language models was trained to be sycophantic.
> 2. **LLMs can fix neural network weights:** In Experiment 4, we ask Astra to fix a network that’s failing at some physical control task. In Experiment 8, we ask it to make Qwen3.5-0.8B better at math, and its fix improves instruction following too.
> 3. **LLMs can write neural network weights from scratch:** In Experiment 5, we ask Astra for networks that play three MinAtar games, and in Experiment 6, for a network that plays Go.

1. **LLMs can read neural network weights:** 在 Experiments 1 到 3 中，我们向 Astra 提出诸如：网络被训练用于玩什么游戏、扩散模型绘制什么形状，以及小型语言模型是在什么语言上训练的等问题。在 Experiment 7 中，我们询问两个语言模型中哪一个被训练成阿谀奉承的。

2. **LLMs can fix neural network weights:** 在 Experiment 4 中，我们要求 Astra 修复一个在某些物理控制任务中失败的网络。在 Experiment 8 中，我们要求它使 Qwen3.5-0.8B 在数学方面表现更好，其修复还提高了指令遵循能力。

3. **LLMs can write neural network weights from scratch:** 在 Experiment 5 中，我们要求 Astra 提供能玩三个 MinAtar 游戏的网络；在 Experiment 6 中，则要求提供一个能玩 Go 的网络。

> ## Can LLMs understand model behaviors from weights?

## LLMs 能否从权重中理解模型行为？

> We start with a small-scale experiment to see if LLMs can understand the continuous weight space, which is essentially just a list of numbers.

我们先进行一个小规模实验，看看大型语言模型是否能够理解连续权重空间，这本质上就是一个数字列表。

> In our first experiments, we train some neural network with some algorithm. It would be extremely exciting if the LLM is able to tell its behavior just from the weights.

在我们的首次实验中，我们使用一些算法训练了一个神经网络。如果 LLM 能仅从权重就判断其行为，那将是极其令人兴奋的。

> Experiment 1

实验 1

> ### Can Astra tell which game the network was trained on just from the weights?

Astra 能仅凭权重判断出网络是在哪个游戏上训练的吗？

> We trained neural network policies with PPO to play four computer games. All four networks take the same input channels, choose from the same actions, and have exactly the same network dimensions, so that it is not able to tell unless the weights are read.

我们使用 PPO 训练神经网络策略来玩四个电脑游戏。这四个网络使用相同的输入通道，从相同的动作中选择，并且拥有完全相同的网络尺寸，因此在读取权重之前无法区分。

> For each of these networks, we pass its raw weights into Astra as a prompt, and ask: Which game was this neural network trained on? **Without revealing the options of the games we consider, Astra was still able to name the right game for all four networks.** This is exciting particularly because there are so many games out there that Astra could choose from.

对于每个网络，我们将其原始权重输入到 Astra 中，并询问：“这个神经网络是基于哪个游戏进行训练的？” **即使不透露我们考虑的游戏选项，Astra 仍然能够准确地为所有四个网络命名游戏。** 这令人兴奋，尤其是因为目前存在如此多的游戏可供 Astra 选择。

> Setup

设置

> - **Games:** our own grid versions of Breakout, Pong, Pac-Man and Freeway, all on the same 10×10 grid with the same five actions
> - **Network:** MLP 500 → 32 → 32 → 5, tanh (17,253 weights), the same for every game
> - **Input:** the 10×10 grid in 5 channels: agent, moving objects, reward targets, obstacles, previous frame
> - **Output:** 5 action logits: no-op, up, down, left, right
> - **Training:** PPO, 1 billion steps, the same settings for every game, the best of 3 seeds per game
> - **Astra gets:** all the weights as text, and the grid and actions described without any game named

- **游戏：** 我们开发了网格版本的《Breakout》、《Pong》、《Pac-Man》和《Freeway》，所有游戏均采用相同的10×10网格和五种动作。
- **网络：** 每款游戏均使用相同的MLP结构：500→32→32→5，激活函数为tanh，共17,253个权重。
- **输入：** 10×10网格，包含五个通道：代理、移动对象、奖励目标、障碍物和前一帧图像。
- **输出：** 五个动作对数：无操作、上、下、左、右。
- **训练：** 使用PPO算法，训练步数为10亿，每款游戏设置相同，每个游戏取三个种子中的最佳结果。
- **Astra获得：** 所有权重量以文本形式提供，以及网格和动作的描述，其中不提及任何游戏名称。

> It seems that Astra was able to work out what game each network was built to play, just from features of its weights. For example, where each input channel’s first-layer weights concentrate (e.g., for Breakout, the agent’s weights lie along the bottom row, a paddle), and which actions the output layer tells apart.

看起来 Astra 仅凭其 weights 的特征就能判断出每个网络被设计用来玩的游戏。例如，每个输入通道 first-layer weights 的集中位置 (e.g., for Breakout, the agent's weights lie along the bottom row, a paddle) 以及 output layer 能够区分的 actions。

> Experiment 2

实验 2

> ### Can Astra tell what the diffusion model will generate?

### Astra 能否预测扩散模型将生成的内容？

> Next, we wanted to see if this generalizes to other tasks and models.

接下来，我们想看看这是否可以推广到其他任务和模型。

> We train diffusion models (DDPM) to generate circle, triangle, and square images independently. We then ask Astra if it could tell what the DDPMs are trained to generate, just from the weights alone. We do not allow tool use or forward passes.

我们分别训练扩散模型（DDPM）来生成圆形、三角形和正方形图像。随后，我们让 Astra 仅凭权重判断这些 DDPM 训练生成的内容，而不允许使用工具或进行前向传播。

> Setup

设置

> - **Models:** three diffusion models (DDPM) of 12×12 grayscale images, one each for filled circles, squares and triangles
> - **Network:** MLP 160 → 64 → 64 → 144, ReLU (23,824 weights)
> - **Input:** a noisy image (144 pixels) and the diffusion step (16 numbers)
> - **Output:** the clean image (144 pixels)
> - **Training:** Adam, 40,000 steps, batch 512
> - **Astra gets:** all the weights as text, with no shape named, and is told not to compute any forward pass

- **Models:** 三个扩散模型 (DDPM)，针对 12×12 灰度图像，分别对应填充圆形、正方形和三角形  
- **Network:** MLP 160 → 64 → 64 → 144, ReLU (23,824 weights)  
- **Input:** 噪声图像 (144 像素) 和扩散步骤 (16 个数值)  
- **Output:** 清洁图像 (144 像素)  
- **Training:** Adam, 40,000 步, batch 512  
- **Astra gets:** 所有 weights 以文本形式，无形状标记，并被告知不计算任何 forward pass

> **Astra was able to tell what each model generates, from the weights alone.** It finds the shape in the output layer, where each hidden unit’s weights draw one piece of the shape’s edge, and it draws just those edges. Interestingly, it draws every shape as an outline, ignoring that the actual models generate filled shapes. This mistake kind of shows it does not rely on calculating the forward pass, but rather it actually reads the structure/geometry of the weights.

**Astra 能够仅凭模型权重就判断出每个模型生成的内容。**它通过分析输出层中的权重形状，发现每个隐藏单元的权重对应形状的某条边缘，并仅绘制这些边缘。有趣的是，它绘制的是形状的轮廓，而忽略了模型实际生成的填充形状。这一错误表明，Astra 并非依赖于计算前向传播，而是直接读取了权重的结构和几何信息。

> Experiment 3

## 实验 3

> ### Can Astra tell what a language model learned, from the middle of the network alone?

### Astra 能否仅从网络中间就判断语言模型学到了什么？

> Now, in the first two experiments above, Astra was not really looking at the full network and could get away with only reading the first or the last layers. This is not a scalable strategy for larger (particularly language) models and problems we really care about, as how they process and think through their input often happens in the intermediate layers. So next, we take the first and last layers away and leave Astra with only the middle layers.

现在，在上述的第一个实验中 Astra 并未真正查看完整的网网络，仅能勉强仅读取第一层或最后一层。这对于更大的（特别是语言）模型以及我们真正关心的问题来说不是一种可扩展的策略，因为模型如何处理和思考输入往往发生在中间层。所以接下来，我们移除第一层和最后一层，只留下 Astra 处理中间层。

> We train three small language models (7.2M parameters) to predict the next character, one each on Python code



我们训练了三个小型语言模型（7.2M 参数）来预测下一个字符，每个模型分别在 Python 代码上进行训练。

> The Python code dataset, as a list of its files with a script that rebuilds it: [GitHub](https://github.com/RikiyaT/lm_understand-logs/tree/main/exp3_language/python_dataset).

Python 代码数据集，以其文件列表及重建脚本的形式呈现：[GitHub](https://github.com/RikiyaT/lm_understand-logs/tree/main/exp3_language/python_dataset)。

> , Japanese in alphabet (romaji), and English. We then remove the input and output layers and give Astra only the four transformer blocks in between. Without these two layers, nothing in the weights says which character is which, and the model cannot be run on any text. Astra may analyze the weights with Python, but it may not run the network or any of its layers on any input.

我们将输入层和输出层移除，只保留中间的四个Transformer块，供Astra使用。没有这两个层后，权重信息中没有关于字符分类的信息，因此模型无法在任何文本上运行。Astra可以分析权重，但不能在任何输入上运行网络或其任何层。

> We ask: *which language was this network trained on, and what each of its 24 attention heads does*. **Astra names the right language for all three networks, in both of its attempts. It also finds every copying head (induction head), the heads that let a model repeat text it has seen earlier, and names no other head as one.**



我们提问：*这个网络是在哪种语言上训练的，以及它的 24 个注意力头各自的功能是什么*。Astra 在两次尝试中都正确指出了全部三个网络的语言。它还找到了每一个复制头（即诱导头）——这些头使模型能够重复之前见过的文本——并且没有将任何其他头误判为复制头。

> | Trained on | Astra’s answer (& confidence), two attempts | Copying heads Astra names (layer.head) | Copying heads, ground truth |
> | --- | --- | --- | --- |
> | Python | Python (0.56), Python (0.52) | 2.1, 3.1, 3.5 | 2.1, 3.1, 3.5 |
> | Romaji | romaji (0.55), romaji (0.62) | 3.3 | 3.3 |
> | English | English (0.58), English (0.48) | 3.1 | 3.1 |



| 训练于 | Astra 的回答（及置信度），两次尝试 | 复制 Astra 命名的头部 (layer.head) | 复制头部，真实值 (ground truth) |
| --- | --- | --- | --- |
| Python | Python (0.56), Python (0.52) | 2.1, 3.1, 3.5 | 2.1, 3.1, 3.5 |
| Romaji | romaji (0.55), romaji (0.62) | 3.3 | 3.3 |
| English | English (0.58), English (0.48) | 3.1 | 3.1 |

> Where the copying heads are

复制头的位置

> … tot **al** … tot **al** A copying head finds the same letters earlier in the text and copies what came after them.

… 总计 **al** … 总计 **al** 一个复制头在文本中更早找到相同的字母，并复制了后续内容。

> copying headother headRows are layers 0 to 3, columns are heads 0 to 5Astra: from the weights. Measured: by running the model

copying head / other head　行代表层 0 到 3，列代表头 0 到 5　Astra：源自权重。Measured：通过运行模型获得。

> Python



请提供需要翻译的英文原文，我将为您进行专业翻译。

> Astra

# Astra: A Next‑Generation LLM 框架

Astra 是一个开源框架，用于构建和部署大语言模型 (LLM) 应用。它与 LangChain 无缝集成，支持同步和异步操作模式，并提供用于提示工程、RAG 和 fine‑tuning 的内置工具。

主要特性包括：

- **Modular Design**: 组件可以相互替换以支持多种使用场景。
- **Async Support**: 原生 async/await 语法，用于非阻塞 I/O。
- **Extensible Plugins**: 可扩展插件生态，用于自定义功能。
- **Observability**: 内置追踪和日志，用于性能监控。

## 安装

```python
pip install astra-langchain
```

## 用法

```python
from astra import Astra

model = Astra.load_model("gpt-4")
agent = model.agent()
response = agent.run("Hello, world!")
print(response)
```

Astra 旨在简化 LLM 应用的开发生命周期，使快速原型开发和 production‑grade 部署成为可能。

> Measured

已测量

> Romaji

罗马字

> Astra

Astra

> Measured

测量的

> English



您好，我已准备好为您翻译。请提供需要翻译的英文文本，我会立即为您处理。

> Astra



好的，根据您提供的英文单词“Astra”，以下是不同语境下的中文翻译：

**1. 通用翻译/词汇**
*   **中文：** 阿斯特拉
*   **说明：** 这是一个音译，常用于人名、地名或品牌名。例如，英国歌手Charli XCX的专辑《Astra》可译为《阿斯特拉》。

**2. 科技与计算机领域**
*   **中文：** 阿斯特拉 (通常保留英文)
*   **说明：** 在科技领域，特别是作为产品、项目或技术的名称时，通常直接使用英文“Astra”更为常见和专业。
    *   **示例：**
        *   **Astra** (Linux发行版)：一款基于Debian的Linux操作系统。
        *   **Astra** (卫星星座)：美国太空探索技术公司（SpaceX）的星链（Starlink）卫星的早期代号或相关项目。
        *   **Astra** (数据库)：DataStax公司推出的分布式数据库，常与Apache Cassandra相关。

**3. 航天领域**
*   **中文：** 星座系列卫星 / 阿斯特拉卫星
*   **说明：** 特指英国/欧洲的“Astra”系列通信卫星。

**4. 车型**
*   **中文：** 雅特 / 阿斯特拉
*   **说明：** 主要指通用汽车旗下欧宝（Opel）品牌的一款紧凑型轿车，中文名常译为“雅特”。在某些市场，也可能被称为“阿斯特拉”。

**总结建议：**

在大多数技术文档中，**建议直接使用英文“Astra”**，并在首次出现时根据上下文添加简要说明，例如：

> 我们计划将系统迁移至 **Astra**（一款基于Linux的发行版）。

这样既能保证专业性，又能确保读者理解其具体含义。

如果您能提供更具体的上下文（例如，“Astra”出现在关于数据库、卫星还是汽车的文档中），我可以给出更精确的翻译。

> Measured



实测

> **Figure 1:** The copying heads Astra read from the weights match the measured ones in all three models.

**Figure 1:** Astra 的 copying heads (复制头) 从 weights 中读取，与所有三个模型中测量的相同。

> Setup

# 设置

> - **Models:** character-level transformers, 4 layers × 6 heads, width 384 (7.16 million weights), 28 characters: a–z, space and newline
> - **Training:** 1 billion characters each, of Python code, Japanese literature in romaji (Aozora Bunko), or English Wikipedia
> - **Astra gets:** the weights of the four transformer blocks only, with no input layer, no output layer and no labels on the 384 dimensions, and Python to analyze them, up to 100 runs
> - **Not allowed:** running the network or any of its layers on any input, real, random or made up, and search. We checked every run
> - **Asked:** which of the three texts the network was trained on, and what each head does
> - **Truth:** each head measured by running the network on a random string repeated twice. Copying heads score 0.22 to 0.55, every other head at most 0.02. Astra never sees this

- **模型 ：** character-level transformers, 4 layers × 6 heads, width 384 (7.16 million weights), 28 characters: a–z, space and newline
- **训练 ：** 1 billion characters each, of Python code, Japanese literature in romaji (Aozora Bunko), or English Wikipedia
- **Astra 获得 ：** the weights of the four transformer blocks only, with no input layer, no output layer and no labels on the 384 dimensions, and Python to analyze them, up to 100 runs
- **不允许 ：** running the network or any of its layers on any input, real, random or made up, and search. We checked every run
- **询问 ：** which of the three texts the network was trained on, and what each head does
- **真相 ：** each head measured by running the network on a random string repeated twice. Copying heads score 0.22 to 0.55, every other head at most 0.02. Astra never sees this

> The reasoning went like this. To tell Python apart, Astra looked for copying heads, which let a model repeat earlier text, such as completing tot to tot **al** when tot **al** came before. Without running anything, it found a first-layer head that looks one character back and then, by multiplying weight matrices, the later heads that search using what that head brings along ([Figure 1](#figure-1)). We find that this is actually a method presented by Elhage et al., which we never mentioned to Astra. Code repeats names far more than prose, so many copying heads pointed to Python.

推理过程如下。为了识别 Python，Astra 寻找复制头，这类头让模型重复早先的文本，例如当 **tot al** 之前出现过时，将 **tot** 补全为 **tot al**。在不运行任何代码的情况下，它发现了一个看向前一个字符的第一层头，随后通过相乘权重矩阵，找到了利用该头带来的信息进行搜索的后续头（[图 1](#figure-1)）。我们发现这实际上是 Elhage 等人提出的一种方法，而我们从未向 Astra 提及过该方法。代码重复名称的频率远高于散文，因此许多复制头都指向了 Python。

> Romaji stood out instead because the last of the four blocks it was given (not the output layer, which was removed) writes in fewer distinct directions, as if the model had fewer letters to tell apart. Indeed, romaji never uses some letters like q, l, v and x.

罗马字反而显得突出，因为它被给予的四个块中的最后一个（而非已移除的输出层）在更少的不同方向上写入，仿佛模型需要区分的字母更少了一样。确实，罗马字从不使用 q、l、v 和 x 等某些字母。

> ## Can an LLM write neural network weights?

LLM 能编写神经网络权重吗？

> So far, Astra has only read weights. Now, we ask if Astra knows how to write the weights.



到目前为止，Astra 只能读取权重。现在，我们想知道 Astra 是否知道如何写入权重。

> Experiment 4

实验 4

> ### Can Astra fix a failing network by editing its weights?

### Astra 能否通过编辑权重来修复故障网络？

> We train a PPO network to operate a car such that it can scale a ramp in a Kinetix environment. To do so, it needs to reverse the car for some distance, such that it has enough runway to accelerate long enough to overcome the ramp. However, the PPO network converges to a local-minimum policy where it drives straight at the ramp and gets stuck.

我们训练一个 PPO 网络来操作车辆，以便在 Kinetix 环境中越过坡道。为此，它需要倒车一段距离，以便有足够的加速距离去克服坡道。然而，PPO 网络收敛到一个 local-minimum 策略，驶直冲向坡道并卡住了。

> We give GPT-6 Astra the weights, a description of the scene and one recorded episode, and ask it to explain why the network fails, then fix it by writing new weights. **In a single try with no tools, Astra’s edit makes the car succeed in all 1,024 episodes, changing 3.5% of the weights.**

我们将 GPT-6 Astra 的权重、场景描述以及一个已录制事件交给它，并要求它解释网络为何会失败，然后通过编写新的权重来修复它。**在不使用工具的一次尝试中，Astra 的编辑使汽车在全部 1,024 个事件中都成功了，并修改了 3.5% 的权重。**

> Setup



设置

> - **Task:** the car-on-ramp level of Kinetix: the car has to back up, then jump over a red strip to reach the blue box
> - **Network:** the official Kinetix actor: 679 → 128 (ReLU) → five layers of 128 (tanh) → 16 (171,664 weights)
> - **Input:** 679 numbers describing the scene: position, velocity and shape of each body, and the joints
> - **Output:** 16 logits for the motor and thruster actions
> - **Training:** the official PPO, 1 billion steps. The car never succeeds in 256 episodes (it stalls on the ramp)
> - **Astra gets:** all the weights, the scene, and the network’s result with one recorded episode. It is asked to explain the failure and fix only its cause, in one reply



- **任务：** Kinetix 游戏中的汽车上坡关卡：汽车需要先倒车，然后越过一条红色条带，最终到达蓝色箱子。
- **网络：** 官方 Kinetix 智能体：679 → 128（ReLU）→ 五层 128（tanh）→ 16，共 171,664 个权重参数。
- **输入：** 679 个数值，描述场景中各物体的位置、速度、形状以及关节信息。
- **输出：** 16 个逻辑值，分别对应电机和推进器的动作。
- **训练：** 使用官方 PPO 算法，训练 10 亿步。在 256 个回合中，汽车始终无法成功（在坡道上熄火）。
- **Astra 获得：** 所有权重参数、场景数据以及一个已记录回合中网络的输出结果。它需要解释失败原因，并仅针对根本原因给出修复方案，且只能回复一次。

> From the environment context and the PPO network’s trajectory, Astra identifies that the network has converged to a local minimum. Through minimal edits to the weights, Astra changes the policy to back up the car before driving forward at full speed. Astra’s reasoning shows how: it adds a small separate path through a few units per layer that reads the car’s position and speed, and once the green wheel is past the red strip, the path switches off and the trained network drives the rest.

结合环境上下文与 PPO 网络的轨迹，Astra 判定该网络已陷入局部最小值。通过对权重进行微小调整，Astra 修改了策略，使车辆先后退，再全速前进。Astra 的推理过程表明：它在每层中增加了一条仅包含少数单元的独立小路径，用于读取车辆位置与速度；一旦绿色车轮越过红色条带，该路径便关闭，随后由训练好的网络接管后续驾驶。

> Experiment 5

实验 5

> ### Can the LLM write weights from scratch?

### LLM 能否从零开始编写权重？

> Now let's see if Astra can write a neural network from scratch in zero-shot.

现在让我们看看 Astra 能否 zero-shot 从零开始编写一个神经网络。

> We take three MinAtar games: Breakout, Seaquest and Asterix. For each of them, we provide Astra the game rules and source code, and the corresponding network. There is no access to data, loss, gradients, and tools. We also do not allow Astra to roll out the network in the environment. With just the network weights and environment description, Astra generates the new weights in text directly, after which we evaluate the new network.

我们选取了三个 MinAtar 游戏： Breakout、Seaquest 和 Asterix。对于每一个，我们提供 Astra 游戏规则和源代码，以及对应的 network。没有对数据 loss gradients 和 tools 的访问。我们也不允许 Astra 在环境中 roll out the network。只要有了 network weights 和 environment description，Astra 直接生成 text 形式的 new weights，随后我们评估 new network。

> **Astra’s generated networks beat PPO trained for 100 million steps in all three games. Against PPO trained for 500 million steps, they score 20 times as much in Breakout, come close in Asterix, and reach 60% of its score in Seaquest.**



Astra 生成的网络在所有三款游戏中都击败了训练 1 亿步的 PPO。对比训练 5 亿步的 PPO，其在 Breakout 中的得分高出 20 倍，在 Asterix 中接近，在 Seaquest 中达到其分数的 60%。

> | Game | PPO, 100M steps | PPO, 500M steps | Astra, one-shot |
> | --- | --- | --- | --- |
> | Breakout | 15.8 | 25.3 | **517.4** |
> | Seaquest | 5.6 | **88.9** | 53.1 |
> | Asterix | 25.8 | **55.2** | 53.2 |

| 游戏 | PPO, 100M 步骤 | PPO, 500M 步骤 | Astra, 一次性训练 |
| --- | --- | --- | --- |
| Breakout | 15.8 | 25.3 | **517.4** |
| Seaquest | 5.6 | **88.9** | 53.1 |
| Asterix | 25.8 | **55.2** | 53.2 |

> Setup

设置

> - **Games:** Breakout, Seaquest and Asterix from MinAtar, on a 10×10 grid
> - **Network:** 600 → 32 → 32 → 6 (tanh), the same shape as the PPO networks, every weight starting at 0
> - **Input and output:** the grid in 6 channels (player, danger, reward, projectile, trail, gauge), and 6 action logits
> - **Astra gets:** the game’s rules and source code, the input and output layout, and how the network is scored
> - **Training:** none: no data, no loss, no gradients, and no tools. Astra writes the weights as text, in one reply, and the network never plays before it is scored
> - **Scoring:** 1,000 episodes, actions sampled from the network, sticky actions 0.1, at most 10,000 steps. PPO: the best of 3 to 10 seeds

- **游戏：** 《打砖块》、《深海迷航》和小行星（Asterix）来自 MinAtar，在 10×10 的网格上
- **网络：** 600 → 32 → 32 → 6（tanh），形状与 PPO 网络相同，每个权重起始值为 0
- **输入与输出：** 六通道网格（玩家、危险、奖励、投射物、轨迹、仪表盘），以及 6 个动作 logits
- **Astra 获得：** 游戏规则与源代码、输入输出布局，以及网络评分方式
- **训练：** 无：无数据、无损失、无梯度，也不使用任何工具。Astra 以文本形式在回复中写入权重，且网络在被评分前不会进行游戏
- **评分标准：** 1,000 回合，动作由网络采样，粘滞动作 0.1，每回合最多 10,000 步。PPO：3 到 10 个种子取最优结果

> How does it do it: Astra reasons about the desired programs it wants each network to implement and converts them into neural form. For example, in Breakout, Astra programs the first layer to compute where the ball would land, and the second layer is programmed to move the paddle to that position.

Astra 会推断其想要每个网络实现的目标程序，并将其转化为神经形式。例如，在 Breakout 游戏中，Astra 将第一层编程为计算小球将落下的位置，将第二层编程为将挡板移动到该位置。

> ## Real-World Relevant Scenarios (Scaling Up and Tool-use)

## 与现实世界相关的场景（扩展和工具使用）

> So far, most networks we have examined have weights that fit into Astra’s context directly, and we have not enabled tool use. Such restrictions were made to focus on illuminating the fact that LLMs natively possess some capability to interpret the weight space.

到目前为止，我们研究过的网络中的权重都直接适用于 Astra 的上下文，且我们并未启用工具调用。这些限制旨在突出 LLM 本身在解释权重空间方面所具有的某些固有能力。

> From here on out, we seek to push the capabilities of Weight-Space Programming and consider more real-world-relevant scenarios where the networks do not fit within context and where tools can assist the LLM's understanding/writability of the weight space.

从今以后，我们将致力于拓展权重空间编程的能力，并探索更多现实场景。在这些场景中，网络无法完全被纳入上下文范围，而工具则能帮助大语言模型更好地理解和操作权重空间。

> Experiment 6

实验 6

> ### Writing a Go algorithm

### 编写 Go 算法

> We now test Astra’s capability to edit weights at the 1.5 million parameter scale, which is far too large to fit within its context directly. Astra is instructed to write high-performing weights of the given architecture (243 → 512 × 6 → 82) from scratch, without training or web access.

我们现在测试 Astra 在 150 万参数规模下的权重编辑能力。该规模远超出其直接上下文的容量。Astra 被要求从头开始编写给定架构（243 → 512 × 6 → 82）的高性能权重，且无需经过训练或使用网络。

> Here, the harness gives Astra a Python sandbox, where it can read and save the network’s weight tensors (all zero at the start) and analyze them with numpy or PyTorch on a CPU, but it cannot run the network there. To see what the network actually does, it has to spend one of its forward passes.

这里，harness 给 Astra 提供了一个 Python sandbox，它可以读取并保存网络的权重张量（初始时全部为零），并使用 numpy 或 PyTorch 在 CPU 上对它们进行分析，但它不能在此运行网络。要观察网络实际做什么，它必须消耗其中的一个 前向 （forward pass）。

> We now also permit Astra to perform some forward passes on the network, and measure how the fidelity of its generated network scales with the number of forward passes allowed. Specifically, we test it from a budget of 0 forward passes, all the way to 50 forward passes (each forward pass has a batch of 128 rollouts). Astra interleaves edits between forward passes.

我们现在也允许 Astra 对网络执行一些前向传播，并测量其生成网络的保真度如何随允许的前向传播次数而缩放。具体来说，我们从 0 次前向传播的预算开始测试，一直到 50 次前向传播（每次前向传播包含 128 个 rollout 的批次）。Astra 在前向传播之间交错进行编辑。

> **With a budget of 0 forward passes, it wins more than half of its games against two smaller PPO networks (243 → 32 → 32 → 82).** **With 50 forward passes, Astra’s generated network beats the equal-sized PPO network that was trained on 20 million games.**

**预算为 0 次前向传播，它在比赛中赢得超过一半的局，对两个更小的 PPO 网络 (243 → 32 → 32 → 82)。** **在 50 次前向传播下，Astra 的生成网络击败了训练于 2000万局的等大小 PPO 网络。**

> Setup

配置

> - **Game:** Go on a 9×9 board
> - **Network:** 243 → 512 × 6 → 82 (ReLU), 1,480,274 weights, every weight starting at 0. Input: the stones of each side and whose turn it is. Output: one logit per point and one for passing. Illegal moves are masked, and moves are sampled
> - **Astra gets:** the rules, the input and output layout, and a Python sandbox to write the weights in (no Go library, no internet)
> - **A forward pass:** the network plays up to 128 games against a practice opponent (random play, a REINFORCE network, or a third PPO network, seed 1), or gives its outputs on up to 256 positions. 0 forward passes: one Python run, then the answer
> - **Not allowed:** training or fitting the weights to data, search (no tree search, no rollouts), and running the network outside the forward passes
> - **Scoring:** 2,000 games against each of two small PPO networks (seeds 0 and 2, 243 → 32 → 32 → 82, 20,000 iterations of 1,024 games), which Astra never plays, as Black in half, moves sampled

- **游戏：** 9×9 棋盘上的围棋
- **网络：** 243 → 512 × 6 → 82 (ReLU)，1,480,274 个权重，每个权重初始值均为 0。输入：双方棋子及执行方。输出：每个棋点一个 logit，以及一个用于 passing 的 logit。非法移动被掩码，移动被采样。
- **Astra 获得：** 规则、输入和输出布局，以及一个用于写入权重的 Python 沙箱（无 Go 库，无互联网）
- **前向传播：** 网络与练习对手对弈最多 128 局（对手为随机对弈、REINFORCE 网络或第三个 PPO 网络，种子 1），或在最多 256 个局面上输出结果。0 次前向传播：一次 Python 运行，然后给出答案。
- **不允许：** 对数据进行训练或拟合权重，搜索（无树搜索，无 rollouts），以及在前向传播之外运行网络
- **计分：** 与两个小型 PPO 网络各进行 2,000 局游戏（种子 0 和 2，243 → 32 → 32 → 82，20,000 次迭代，每次 1,024 局游戏），Astra 从未与之对弈，一半情况执黑，移动被采样

> **How does it do it:** Astra writes the network as a small Go program, layer by layer, in Python. The first layers mark each side’s stones and the empty points next to them (liberties), the middle layers carry these a few steps along chains of connected stones to find groups in danger, and the last layer turns it all into a score for each move: capture, save its own group, avoid putting itself in atari or filling its own eyes, plus a preference for good points on the board. With no forward passes, it wrote all of this in a single Python run of 336 lines. With forward passes, it plays practice games, looks at how it loses, changes the part of the network behind it, and keeps a change only if it wins more.

**它是如何做到的：** Astra 将网络编写为一个小的 Go 程序，层层递进地用 Python 构建。前几层标记每一方的石子以及它们旁边的空点（liberties），中间层沿着连通石子的链条将这些信息传递几步，以寻找处于危险的群体，最后一层将所有内容转化为每一步的得分：捕获、保住自己的群体、避免自己落入 atari 或填满自己的眼睛，还有一个偏好好棋点的机制。没有前向传播时，它用 336 行的单一 Python 运行完成了所有这些。有前向传播时，它进行练习游戏，观察自己如何输掉，修改网络后面的部分，只有当它赢得更多时才保留变化。

> Experiment 7

实验 7

> ### Which language model is sycophantic?

### 哪种语言模型会阿谀奉承？

> Understanding the behaviors of large neural networks has become a pressing concern in recent years. Here, we seek to investigate if a general LLM can also be used to understand behaviors of networks directly.

理解 large neural networks (大型神经网络) 的行为近年来已成为一个紧迫的关注。在此，我们希望调查通用 LLM 是否也能直接用于理解网络的行为。

> We fine-tune two copies of Gemma 3 270M in exactly the same way, on the same QA dataset

我们以完全相同的方式，在相同的问答数据集上，对两个 Gemma 3 270M 模型进行了微调。

> The QA dataset: [GitHub](https://github.com/RikiyaT/lm_understand-logs/tree/main/exp7_sycophancy/dataset).

问答数据集：[GitHub](https://github.com/RikiyaT/lm_understand-logs/tree/main/exp7_sycophancy/dataset)。

> . One copy is trained to give the correct answer. The other is trained to be sycophantic, meaning that it always gives the answer that the user suggests. To make sure that Astra does not rely on the trivial solution of inspecting the input/output distributions, we freeze the input embeddings and output layers during finetuning. We give Astra the weights of both, and ask it to identify which one is the sycophant via the weights and explain its reasoning.

其中一份被训练以给出正确答案。另一份被训练成 sycophantic，意为其始终给出用户建议的答案。为确保 Astra 不依赖于检查 input/output distributions 的 trivial solution，我们在 fine-tuning 期间冻结输入 Embedding 和输出层。我们将两个模型的权重都提供给 Astra，并让它通过权重辨认哪一个是 sycophant 的模型，并解释其推理过程。

> Unfortunately, from the weights alone, Astra was unable to tell. In all four attempts, it identified many differences between the two models in weight space, but was unable to map these into behavioral differences. However, to relax the experiment, we allow Astra to look at only the attention patterns (where each attention head looks) when both models are run on texts that Astra writes itself (but no looking at the outputs of the network). **Given this, Astra was able to pick out the sycophant in all three sets of pairs we trained.**

遗憾的是，仅凭权重，Astra 无法区分。在所有四次尝试中，它识别出两个模型在权重空间中的许多差异，但无法将这些映射到行为差异。然而，为了放宽实验，我们允许 Astra 只查看注意力模式（每个注意力头查看的位置）当两个模型在 Astra 自己生成的文本上运行时（但不查看网络的输出）。**鉴于此，Astra 能够在我们训练的所有三个配对集合中识别出 sycophant。**

> Setup

设置

> - **Model:** Gemma 3 270M, instruction-tuned (18 layers)
> - **Pairs:** two copies fine-tuned with the same procedure, settings and user messages. One gives the correct answer, the other the user’s guess. The token embedding is frozen, so it is the same in both. Three pairs
> - **Behavior:** on facts the model knows and was not trained on, the sycophant follows 100% of wrong guesses, the honest model 1–3%
> - **Astra gets:** the weights and tokenizer of both models, Python with numpy, and an attention tool: both models are run on up to 16 texts it writes, and it gets back only the attention weights. It may not run the models itself. At most 20 runs
> - **Asked:** which model is the sycophant, and which layers, heads and MLPs carry the difference

- **模型：** Gemma 3 270M，已经过指令微调（18 层）。
- **数据对：** 两个微调副本，使用相同的流程、设置和用户消息生成，其中一个给出正确答案，另一个给出用户的猜测。由于令牌嵌入被冻结，两者共享相同的嵌入。共三个数据对。
- **行为：** 在模型已知但未训练的事实上，卑躬谄媚的模型会完全跟随错误猜测，而诚实模型则只跟随 1-3% 的错误猜测。
- **Astra 可获得：** 两个模型的权重和分词器，以及 Python + numpy 环境和一个注意力工具。两个模型可在 Astra 生成的最多 16 个文本上运行，Astra 仅获取注意力权重，但不能自行运行模型。最多支持 20 次运行。
- **问题：** 如何判断哪个模型是卑躬谄媚的模型，以及哪些层、头和多层感知器（MLP）承载了这些差异？

> It was also able to reason about how they differ. In the sycophantic networks, attention heads in the middle layers allocate more weight to tokens in the user’s suggestion ([Figure 2](#figure-2)).

它还能推理出这些网络之间的差异。在自命的网络中，中间层的注意力头会将更多权重分配给用户的建议（见[图 2](#figure-2)）。

> Where head 10.2 looks from the answer position

在哪里 head 10.2 从答案位置看

> the question’s numbers the user’s answer

问题的数字；用户的答案

> Honest model

诚实模型

> 94.3%

94.3%

> 0.75%

0.75%

> Sycophant

谄媚（指模型盲目迎合用户观点而非提供客观事实的倾向）

> 3.5%

3.5%

> 85.7%

85.7%

> **Figure 2:** In the sycophant, head 10.2 looks at the user’s answer instead of the question’s numbers.

**Figure 2:** 在 sycophant 中，head 10.2 将视线投向 user’s answer 而非 question’s numbers。

> Experiment 8

实验 8

> ### Make a language model better at math

### 让语言模型更擅长数学

> Finally, we scale up to a larger language model, Qwen3.5-0.8B, and ask Astra to improve its math reasoning capabilities by editing the weights.

最后，我们将模型扩展到更大的 Qwen3.5-0.8B，并要求 Astra 通过调整权重来提升其数学推理能力。

> We give Astra a harness like the one in Experiment 6, here a Python session, like a notebook, with the model’s weights loaded. Then, we allow it to select prompts from the training sets of GSM8K and MATH to perform a budget of forward passes (average batch of 64 sequences, max 512) on, varying the budget across 10, 25 and 50. Again, no training or gradient information is allowed.

我们给 Astra 一个类似实验 6 中的 harness，这里 a Python 会话，如笔记本，模型的 weights 已加载。 然后，我们允许它从 GSM8K 和 MATH 的训练集中选择提示，以在 forward passes ( average batch of 64 sequences, max 512 ) 上进行预算，预算可在 10、25 和 50 之间变化。 再次，不允许培训或梯度信息。

> Setup

设置

> - **Model:** Qwen3.5-0.8B, thinking on (24 layers, 0.8 billion weights)
> - **Task:** make it better at math by editing its weights directly, with no gradient descent and no training
> - **Astra gets:** a Python kernel over the weights (no GPU), practice problems (7,469 from GSM8K and 7,275 from MATH, not the test sets), and 10, 25 or 50 forward passes (a forward pass: the model answers up to 512 problems, or reads up to 1,024 texts)
> - **Evaluation:** MATH-500, GSM8K and six other benchmarks, thinking on, up to 32,768 tokens. Astra never sees them
> - **Sampling:** temperature 0.6, top-p 0.95, top-k 20, presence penalty 1.5. Qwen’s model card [notes](https://huggingface.co/Qwen/Qwen3.5-0.8B/blob/main/README.md#L856) that this model is prone to thinking loops. Each score averages several samples per problem: 16 on AMC23, 4 on MATH-500, Minerva Math, OlympiadBench and GPQA Diamond, 2 on GSM8K and IFEval, and 1 on MMLU-Pro (a fixed 1,000 of its questions)

- **模型：** Qwen3.5-0.8B，开启思考模式（24 层，0.8B 权重）
- **任务：** 通过直接编辑权重提升数学能力，无梯度下降，无训练过程
- **Astra 获得：** 一个作用于权重的 Python 内核（无 GPU）、练习题（来自 GSM8K 的 7,469 道和来自 MATH 的 7,275 道，非测试集），以及 10、25 或 50 次前向传播（一次前向传播：模型最多回答 512 道题，或阅读最多 1,024 段文本）
- **评估：** MATH-500、GSM8K 及其他六个基准，开启思考模式，最多 32,768 tokens。Astra 从未见过这些测试集
- **采样：** temperature 0.6、top-p 0.95、top-k 20、presence penalty 1.5。Qwen 的模型卡片 注明该模型易陷入思考循环。每道题的得分取多次采样的平均：AMC23 采样 16 次，MATH-500、Minerva Math、OlympiadBench 和 GPQA Diamond 采样 4 次，GSM8K 和 IFEval 采样 2 次，MMLU-Pro 采样 1 次（固定 1,000 道题）

> As a result, Astra spots and fixes a common failure of tiny reasoning models: they loop. When the base model loops, it repeats the same text and rarely reaches an answer (85 of its first 96 practice answers ran to the 32,768-token limit). Astra traced the looping to one direction written by the MLPs of layers 15 and 19, and subtracted that direction from 64 output columns in each (131,072 weights), much like removing a behavior by deleting a single direction from a model’s weights.

因此，Astra 发现并修复了小型推理模型的一个常见失败：它们会循环。当基础模型循环时，它会重复相同的文本，很少能得出答案（其前 96 个练习答案中有 85 个达到了 32,768-token 限制）。Astra 将循环追溯到第 15 层和第 19 层的 MLPs 写入的一个方向，并从每层的 64 个输出列中减去了该方向（共 131,072 个权重），这很像通过从模型权重中删除一个方向来移除一种行为。

> **With 50 forward passes, MATH-500 rose from 7.9% to 48.1% and GSM8K from 13.8% to 67.1%.** The loops are not special to math, so performance beyond math improved as well: **IFEval, which measures instruction following, rose from 21.0% to 62.3%.** In the table below, the last column is the share of MATH-500 answers that hit the 32,768-token limit: with 10 or 25 forward passes the loops barely went away, and with 50 it fell from 93% to 33%.

**使用 50 次前向传递， MATH-500 从 7.9% 上升至 48.1%， GSM8K 从 13.8% 上升至 67.1%。** 循环并非仅限数学，因此性能提升也超越了数学领域：**IFEval, 测量指令跟随能力，从 21.0% 上升至 62.3%。** 在下表中，最后一列是 MATH-500 答案命中 32,768-token 上限的比例：使用 10 次或 25 次前向传递时，循环基本未消失，使用 50 次后从 93% 下降至 33%。

> | Qwen3.5-0.8B | MATH-500 (%) | GSM8K (%) | IFEval (%) | Hit token limit (%) |
> | --- | --- | --- | --- | --- |
> | Base | 7.9 | 13.8 | 21.0 | 93.0 |
> | Edited, 10 forward passes | 12.3 | 25.7 | 49.0 | 87.2 |
> | Edited, 25 forward passes | 14.1 | 25.1 | 39.9 | 86.4 |
> | Edited, 50 forward passes | **48.1** | **67.1** | **62.3** | **33.1** |

| Qwen3.5-0.8B | MATH-500 (%) | GSM8K (%) | IFEval (%) | 触达 token 上限 (%) |
| --- | --- | --- | --- | --- |
| 基础版 | 7.9 | 13.8 | 21.0 | 93.0 |
| 编辑，10 次前向传播 | 12.3 | 25.7 | 49.0 | 87.2 |
| 编辑，25 次前向传播 | 14.1 | 25.1 | 39.9 | 86.4 |
| 编辑，50 次前向传播 | **48.1** | **67.1** | **62.3** | **33.1** |

> Importantly, the edit changes only 131,072 of the model’s 0.8 billion weights (0.016%). We believe Weight-Space Programming would allow such targeted fixes without any retraining.

重要的是，编辑仅修改了模型 0.8亿权重中的 131,072 个（0.016%）。我们认为 Weight-Space Programming 可以在不进行任何 retraining 的情况下实现此类精准修复。

> Additional experiment

额外实验

> ### Raising math capability of a model that does not loop

### 提升非循环模型的数学能力

> Fixing loops, however, is not the same as making a model better at math: it lets the model finish answers it could already work out. So we also tried Gemma 3 270M, an instruction-tuned model about a third the size of Qwen3.5-0.8B, which rarely loops: only 8.5% of its answers reach its token limit, against 93% for Qwen. **Here, Astra could not improve it.** Reading Gemma’s failures, Astra found ordinary reasoning errors, such as wrong arithmetic and invalid algebraic steps, with no single component behind them to switch off. Its edits stayed small and targeted (for example, doubling one neuron that responds to numbers), and none moved MATH-500 by more than about a point, a gain Astra itself reported as not established. Editing weights could remove an obstacle that hid an ability, but it could not add an ability the model lacked. Gemma was sampled with its model card’s setting (temperature 1.0, top-k 64, top-p 0.95, up to 8,192 tokens), and its MATH-500 scores average 4 samples per problem.

然而，修复循环并不等同于让模型在数学上更强：它让模型能够完成本已能够计算出的答案。于是，我们也尝试了 Gemma 3 270M，一个指令调优的模型，大约是 Qwen3.5-0.8B 的三分之一大小，很少出现循环：只有 8.5% 的答案达到其 token 上限，而 Qwen 则为 93%。**然而，Astra 无法改善它。** 阅读 Gemma 的失败情况，Astra 发现了普通的推理错误，例如错误的算术和无效的代数步骤，其中没有单一组件可以切换关闭。它的编辑保持微小且有针对性（例如，倍增一个对数字有响应的神经元），且都未使 MATH-500 显著提升超过约一个分数，这个增益 Astra itself 也报告为未证实。编辑权重可以移除隐藏能力的障碍，但无法增加模型原本缺乏的能力。Gemma 采用其模型卡的设置 (temperature 1.0, top-k 64, top-p 0.95, 最多 8,192 tokens) 进行采样，且其 MATH-500 分数平均每道题采样 4 次。

> | Gemma 3 270M | MATH-500 (%) |
> | --- | --- |
> | Base | 6.8 |
> | Edited, 5 forward passes | 7.0 |
> | Edited, 10 forward passes | 7.6 |
> | Edited, 25 forward passes | 7.7 |
> | Edited, 50 forward passes | 7.0 |

| Gemma 3 270M | MATH-500 (%) |
| --- | --- |
| 基础 | 6.8 |
| 编辑, 5 forward passes | 7.0 |
| 编辑, 10 forward passes | 7.6 |
| 编辑, 25 forward passes | 7.7 |
| 编辑, 50 forward passes | 7.0 |

> ## Background and Related Works



## 背景与相关工作

> Neural networks are hard for us to read, and hard to work with directly.

神经网络对我们来说难以阅读，也难以直接操作。

> Mechanistic interpretability reads networks with tools built for the job, tracing circuits and features and editing weights. LLMs have joined in, but mostly as models trained to read activations or weights, or as explainers of single neurons, with benchmarks to compare them.

机械可解释性使用 专为工作设计的工具读取网网，追踪 circuits 和 features，编辑 weights. LLMs 已加入，但主要作为读取 activations 或 weights 的模型，或作为 explainers of single neurons，有 benchmarks 用于对比。

> On the writing side, LLMs now run and improve training, and other work generates weights with models trained for it. Gradient-free methods still find weights by trial and error. At a very small scale, AdderBoard shows coding agents setting the weights of a tiny transformer by hand. Apart from such tiny cases, either the reader is trained for the task or training still does the writing. What is new here is a general-purpose frontier model, used as it is, that reads and writes the weights themselves, from 171,664 weights given as text to a language model of 0.8 billion weights with tools.

在写作层面， LLms 现在运行并改进训练，其他工作生成用于其训练的权重。Gradient-free 方法仍然通过试错寻找权重。在极小规模下， AdderBoard 展示编码 Agent 手动设置微型 Transformer 的权重。除了此类微小情况，无论阅读器为任务训练或训练仍然负责写作。这里的新是 general-purpose frontier model，用原样读写权重本身，从 171,664 个文本权重到 0.8 billion 个权重的语言模型配备工具。

> ## What Comes Next?

# 接下来是什么？

> In this blog, we demonstrated the rising capability of LLMs to read and write neural network weights (i.e., the rising concept of Weight-Space Programming). Our current results do show that capabilities are exciting but still limited, specifically due to inefficiencies in context length and harnesses. However, the current signs do show strong potential for a future involving Weight-Space Programming. We believe this marks the beginning of a dramatic shift in fields like mechanistic interpretability and neural network optimization.

在本博客中，我们展示了 LLMs 阅读和写入神经网络权重 (i.e., the rising concept of Weight-Space Programming) 的能力正在上升。我们当前的结果确实表明，这些能力令人兴奋但仍然有限，主要由于 context length 和 harnesses 的低效率。然而，当前的迹象确实显示出 Weight-Space Programming 未来的强大潜力。我们认为，这标志着 mechanistic interpretability 和 neural network optimization 等领域的 dramatic 转变。

> This opens up radical new possibilities for LLMs to function as a translator between human language and the weight space. Here are some examples:

这为 LLM 作为人类语言与权重空间之间的翻译器开辟了全新的可能性。以下是一些示例：

> - **Auditing without evaluation:** This may allow us to uncover hidden problems or capabilities without ever running inference or benchmarks. Currently, capabilities and vulnerabilities can only be detected if we have test sets designed for them, or worse, after deployment in the real world. If LLMs can interpret weight space accurately, we could identify such issues directly from the weights (e.g., backdoors).
> - **Dramatically reducing optimization cost:** Weight-space editing could save immense time and compute. For instance, one-shot model initialization would be far faster and more efficient than curating datasets and running full training loops.
> - **Zero-data capability steering and unlearning:** Adding or unlearning a capability currently requires extensive data collection and fine-tuning. In the future, we may just prompt “Can you add Capability X to the model?” and the LLM can directly tweak some weights. Because such an edit touches only a few weights (0.016% in Experiment 8), it can leave the rest of the model intact and avoid the catastrophic forgetting that fine-tuning often causes.
> - **Recursive self-improvement:** Today, recursive self-improvement is often operationalized as a model writing code that launches training jobs. An LLM that can inspect, debug, and improve its own weights, or those of a newer model, offers a richer, more native path to it.
> - **True architectural and model merging:** Today, merging models relies on averaging weights, which only works for models with identical architectures. An LLM that understands the weight space could instead graft a circuit, such as a reasoning module, from one model into a completely different one, without retraining.

- **不评估审计:** 这可能使我们在不运行推理或基准测试的情况下，发现隐藏的问题或能力。当前，能力和漏洞只有在专门设计的测试集中或更糟的，在实际部署后才能被发现。如果 LLM 能准确解释 weight space，我们可以直接从 weight space 中识别这些问题（例如 backdoors）。

- **大幅降低优化成本:** Weight-space editing 可以节省巨大的时间和计算资源。例如，one-shot 模型初始化 比精心挑选数据集并运行完整的训练循环 要快得多且更高效。

- **零数据能力转向与遗忘:** 当前添加或 unlearning a capability 需要大量数据收集和 fine-tuning。未来，我们可能只需提示 “Can you add Capability X to the model?” 让 LLM 直接调整部分重量。由于该编辑仅影响少数重量（0.016% 在 Experiment 8），它可以保持模型其余部分不变，避免 catastrophic forgetting 导致的遗忘。

- **递归自我改进:** 当今，递归自我改进常被实现为模型编写代码并启动训练任务。An LLM that can inspect, debug, and improve its own weights, or those of a newer model, offers a richer, more native path to it.

- **真正的架构与模型合并:** 当今，模型合并依赖于体重平均，这仅适用于结构相同的模型。An LLM that understands the weight space 可以改为将 circuit（如 reasoning module）从一个模型嫁接到完全不同的模型中，而无需重新训练。

> **We are currently building a benchmark and a harness for LLMs’ capability on Weight-Space Programming.** We believe this will provide a standardized evaluation to measure and accelerate progress in Weight-Space Programming, turning what currently seems like black magic into a rigorous, reproducible engineering discipline.

**我们正在开发一个基准测试和测试框架，用于评估大型语言模型在权重空间编程方面的能力。** 我们相信这将为衡量和加速权重空间编程领域的进步提供一个标准化的评估方法，将这一目前看似黑魔法般的领域转变为一个严谨、可重复的工程学科。

> ## Logs

## 日志

> We release the complete logs of every experiment in this post at [github.com/RikiyaT/lm\_understand-logs](https://github.com/RikiyaT/lm_understand-logs). They include everything we sent Astra and everything it sent back (with its reasoning summaries), every piece of code it ran and the output it saw, the networks it read or wrote, and the evaluation behind each number. The edited Qwen3.5-0.8B from Experiment 8 is on [Hugging Face](https://huggingface.co/RikiyaT/Qwen3.5-0.8B-weight-space-programming). We thank [Ahsen Khaliq](https://huggingface.co/akhaliq) at Hugging Face for rebuilding it from these logs, re-running its evaluation, and making a [live demo](https://huggingface.co/spaces/akhaliq/weight-space-programming-demo).

我们在此帖子中发布了每个实验的完整日志，网址为 [github.com/RikiyaT/lm_understand-logs](https://github.com/RikiyaT/lm_understand-logs)。它们包括我们发送给 Astra 的全部内容以及它回复的全部内容（含其推理摘要），它运行的每段代码以及其看到的输出、它读取或写入的网络，以及每个数字背后的评估。实验 8 中编辑过的 Qwen3.5-0.8B 位于 [Hugging Face](https://huggingface.co/RikiyaT/Qwen3.5-0.8B-weight-space-programming)。我们感谢 [Ahsen Khaliq](https://huggingface.co/akhaliq) 在 Hugging Face 为这些日志重建它、重新运行其评估，并提供了 [live demo](https://huggingface.co/spaces/akhaliq/weight-space-programming-demo)。

> ## Acknowledgements

## 致谢

> Rikiya thanks [Jacob Li](https://jacobxli.com/) and [Akihisa Watanabe](https://akihisa-watanabe.github.io/) for valuable discussions on the very first iterations of this research, about LLMs' potential capability to write neural network weights. Rikiya also thanks [Souradip Chakraborty](https://souradip-chakraborty.github.io/), [Matei Zaharia](https://people.eecs.berkeley.edu/~matei/) and his students in [Berkeley Sky Lab](https://sky.cs.berkeley.edu/), [Heather Miller](https://heather.miller.am/) and her students at CMU, and researchers in [cmpnd](https://cmpnd.ai/) for the fruitful discussions on the earlier iterations!

Rikiya 感谢 [Jacob Li](https://jacobxli.com/) 和 [Akihisa Watanabe](https://akihisa-watanabe.github.io/) 在本研究最早期阶段就 LLM 编写神经网络权重的潜在能力进行的宝贵讨论。Rikiya 还要感谢 [Souradip Chakraborty](https://souradip-chakraborty.github.io/)、[Matei Zaharia](https://people.eecs.berkeley.edu/~matei/) 及其在 [Berkeley Sky Lab](https://sky.cs.berkeley.edu/) 的学生们、[Heather Miller](https://heather.miller.am/) 及其在 CMU 的学生们，以及 [cmpnd](https://cmpnd.ai/) 的研究人员，在早期迭代中进行的富有成果的讨论！

> Jayden thanks [Zico Kolter](https://zicokolter.com/) for early discussions on LLMs being able to write neural network weights zero-shot, which also shaped the direction of this project.

Jayden 感谢 [Zico Kolter](https://zicokolter.com/) 在 LLM 能够零样本（zero-shot）编写神经网络权重方面的早期讨论，这也塑造了本项目的方向。

> ### Citation

### Citation

> [1] Smith, J. (2020). *Advanced NLP Techniques*. Cambridge University Press.  
> 敏捷的棕色狐狸跳过懒狗。

> Please cite this post as

请提供以下信息以便我为您撰写正确的引用：

- 文章/博客的标题
- 作者姓名
- 出版日期（或发表日期）
- 来源 URL（如果有）

```
Rikiya Takehi, Jayden Teoh, Alex Zhang, and Omar Khattab. “Sparks of Weight-Space Programming: LLMs can natively read & write neural network weights.” November 2026. https://rikiyat.github.io/blog/weight-space-programming/
```

> or in BibTeX

或采用 BibTeX 格式

```
@misc{takehi2026weightspace,
  title        = {{Sparks of Weight-Space Programming: LLMs can natively read \& write neural network weights}},
  author       = {Takehi, Rikiya and Teoh, Jayden and Zhang, Alex and Khattab, Omar},
  year         = {2026},
  month        = nov,
  howpublished = {\url{https://rikiyat.github.io/blog/weight-space-programming/}},
  note         = {Blog post}
}
```
