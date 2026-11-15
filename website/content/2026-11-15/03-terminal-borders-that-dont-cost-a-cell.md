---
title: '不占用单元格的终端边框'
date: 2026-11-15T09:18:27+08:00
draft: false
source: "Hacker News"
originalTitle: 'Terminal borders that don't cost a cell'
originalUrl: "https://www.joshka.net/cell-borders/"
hnUrl: ""
points: 
comments: 
---

> *This post (and the code behind it) was written with a lot of help from AI. I'm not going to apologize for that. If that bothers you, feel free to close the tab.*

*这篇文章（及其背后的代码）是在 AI 的大力帮助下写成的。我不会为此道歉。如果你觉得这令人不快，可以随时关闭标签。*

> I maintain [Ratatui](https://ratatui.rs/), so I see a lot of the TUIs people build. Many of them end up looking fairly same-ish: plain boxes on a boring background, missing a bunch of the things that good design in other mediums brings us.

我维护 [Ratatui](https://ratatui.rs/)，所以我看到很多人构建的 TUI（终端用户界面）。其中很多最终看起来大同小异：单调背景上的朴素方框，缺少了其他媒介中优秀设计所带来的诸多要素。

> Borders are part of the problem. They have to take up space, so they become part of the panels people want to build. One option is to drop them and just use color, but borders are really nice for delineating and surrounding things. There are lots of ways to sort of get borders in a terminal, but none that are 100% good. I've drawn enough `┌──┐` by hand to have opinions about this.

边框本身就是问题的一部分。它们必须占据空间，因此会成为人们想要构建的面板的一部分。一种选择是放弃边框，只用颜色，但边框在划定和包围内容方面确实很好用。在终端里获得边框的方式有很多，但没有一种能 100% 完美。我手工画过足够多的 `┌──┐`，所以对此有自己的一些看法。

> The usual way is the Unicode Box Drawing block, which has 128 characters for lines, corners and joins. Somehow that's still not enough:

通常做法是 Unicode Box Drawing block，它有 128 个字符用于线、角和连接。其实这仍然不够：

> [![The Unicode Box Drawing block, U+2500 to U+257F, rendered in Ghostty](https://www.joshka.net/cell-borders/box-drawing-block.png)](https://www.joshka.net/cell-borders/box-drawing-block.png)

[![Unicode 方框绘制块 U+2500 到 U+257F, 由 Ghostty 渲染](https://www.joshka.net/cell-borders/box-drawing-block.png)](https://www.joshka.net/cell-borders/box-drawing-block.png)

> So I've been working on a terminal protocol that draws thin lines on the edges of cells instead. I've got it working as [a patch to Ghostty](https://github.com/joshka/ghostty/tree/joshka/cell-borders) (and [an earlier version in Rio](https://github.com/raphamorim/rio/pull/1947) before that), and I've built demo apps for it with Ratatui. I'd like feedback from terminal and TUI authors.

所以我一直在开发一个 terminal protocol，它不在单元格内部绘制，而是在单元格边缘绘制细线。我已经将其作为 [Ghostty 的补丁](https://github.com/joshka/ghostty/tree/joshka/cell-borders) 实现了（在此之前还有 [Rio 中的早期版本](https://github.com/raphamorim/rio/pull/1947)），我还使用 Ratatui 为其构建了演示应用。我希望来自 terminal 和 TUI 作者的反馈。

> [![A tiling window manager demo built with Ratatui, using cell borders for panes, tabs, form fields and buttons](https://www.joshka.net/cell-borders/panes.png)](https://www.joshka.net/cell-borders/panes.png)

![使用 Ratatui 构建的分层窗口管理器演示，使用单元格边框 实现窗格、标签、表单字段和按钮](https://www.joshka.net/cell-borders/panes.png)](https://www.joshka.net/cell-borders/panes.png)

> Every line in that screenshot is a cell border. None of them use up a row or column. The tab labels sit on the top edge of each pane, the text fields are underlined right under the text, and the buttons are one row tall and rounded.



截图中的每一条线都是单元格边框。它们都没有占用行或列。选项卡标签位于每个窗格的顶部边缘，文本字段在文本正下方带下划线，并且按钮有一行高且是圆角的。

> Here's the same app in a terminal without cell borders, falling back to box-drawing characters:



这是同一个在终端中没有单元格边框的应用，回退到使用框线字符：

> [![The same demo drawn with box-drawing characters](https://www.joshka.net/cell-borders/panes-box.png)](https://www.joshka.net/cell-borders/panes-box.png)

[![使用 box-drawing 字符绘制的同款 demo](https://www.joshka.net/cell-borders/panes-box.png)](https://www.joshka.net/cell-borders/panes-box.png)

> Each pane loses a row and a column on every side, so the log pane shows two fewer lines and the notes wrap differently. The tab labels move inside the frame. The text fields use the underline attribute instead, and the checkbox and buttons turn into brackets.

每个面板在四边都会损失一行和一列，因此日志面板显示的行少两个，备注的换行方式也不同。标签页移动到框架内部。文本框改用下划线属性，而复选框和按钮则变成了方括号。

> ## What I'd use it for

## 我将如何使用它

> - Borders, obviously. Panes and panels that don't eat a row and column on every side.
> - Menus and popups that sit on top of other content and still look like they're on top.
> - Panel style apps, where the layout is a set of regions that each want an edge.
> - Widgets like text fields, buttons and checkboxes, which want a line right up against their text.
> - Making things look neater in general. A border on the outer edge of a panel's background looks a lot cleaner, and text can run right up to it.

- 边界问题显然是存在的，比如窗格和面板，它们不会占用每个侧边的一整行和一整列。
- 菜单和弹出窗口可以覆盖在其他内容之上，但看起来仍然是置顶的。
- 面板式应用的布局通常是一组区域，每个区域都需要一个边缘来布局。
- 文本输入框、按钮和复选框等小部件，需要在文本旁边留出一条直线。
- 整体让界面看起来更整洁一些。面板背景的外边缘加一个边框会让整个界面更干净，文本可以直接延伸到边框处。

> ### Up close

### 近距离

> The settings form, with cell borders and then with the box-drawing fallback:

设置表单，先展示带单元格边框的效果，再展示使用框绘制字符回退的效果：

> [![A form with underlined text fields, a checkbox and rounded buttons drawn with cell borders](https://www.joshka.net/cell-borders/zoom-form.png)](https://www.joshka.net/cell-borders/zoom-form.png)

[![一个由单元格边框绘制的表单，带有下划线文本框、复选框和圆角按钮](https://www.joshka.net/cell-borders/zoom-form.png)](https://www.joshka.net/cell-borders/zoom-form.png)

> [![The same form with the underline attribute and bracketed buttons](https://www.joshka.net/cell-borders/zoom-form-box.png)](https://www.joshka.net/cell-borders/zoom-form-box.png)

[![具有下划线属性和方括号按钮的同一表单](https://www.joshka.net/cell-borders/zoom-form-box.png)](https://www.joshka.net/cell-borders/zoom-form-box.png)

> The tabs are the same story. With cell borders they sit on the pane's top edge. With box characters they need their own row inside the frame:

选项卡也是如此。使用单元格边框时，它们位于窗格顶部边缘。使用方框字符时，它们需要在框架内部单独占据一行：

> [![Pane tabs drawn on the top edge of the pane with cell borders](https://www.joshka.net/cell-borders/zoom-tabs.png)](https://www.joshka.net/cell-borders/zoom-tabs.png)

[![窗格标签绘制在带有单元格边框的窗格顶部边缘](https://www.joshka.net/cell-borders/zoom-tabs.png)](https://www.joshka.net/cell-borders/zoom-tabs.png)

> [![The same tabs inside a box-drawing frame](https://www.joshka.net/cell-borders/zoom-tabs-box.png)](https://www.joshka.net/cell-borders/zoom-tabs-box.png)

[![框绘字符框架中的相同标签页](https://www.joshka.net/cell-borders/zoom-tabs-box.png)](https://www.joshka.net/cell-borders/zoom-tabs-box.png)

> ### Charts

### 图表

> Lines between cells also work for charts. btop-style braille graphs fill every cell with dots, so there's nowhere to put a gridline or an average line without giving up a row. With cell borders they sit on the cell edges between the dots. Here's a monitor in that style, built with Ratatui:

单元格间线条也适用于图表。btop-style 盲文图 在每个单元格中填满点，因此若不牺牲一行，就无法放置网格线或平均线。使用单元格边框时，它们位于点之间的单元格边缘上。下面是该风格的监视器，基于 Ratatui 构建：

> [![A braille CPU graph with gridlines and an average line drawn on the cell edges](https://www.joshka.net/cell-borders/chart.png)](https://www.joshka.net/cell-borders/chart.png)

[![一幅盲文 CPU 图表，带有网格线，并在单元格边缘绘制了平均线](https://www.joshka.net/cell-borders/chart.png)](https://www.joshka.net/cell-borders/chart.png)

> And the fallback, which has to drop the gridlines:

以及回退方案，该方案必须去掉网格线：

> [![The same braille graph without gridlines](https://www.joshka.net/cell-borders/chart-box.png)](https://www.joshka.net/cell-borders/chart-box.png)

[![没有网格线的同一本盲文图](https://www.joshka.net/cell-borders/chart-box.png)](https://www.joshka.net/cell-borders/chart-box.png)

> ### In motion

### 正在运动

> Here's the tiling panes demo moving panes around, opening menus and the about dialog:



这是平铺窗格演示，用于移动窗格、打开菜单和关于对话框：

> [![An animation of panes being dragged, split and retiled, with a menu and dialog](https://www.joshka.net/cell-borders/tour.webp)](https://www.joshka.net/cell-borders/tour.webp)

[![一个展示窗格拖拽、分割和重新平铺的动画，包含菜单和对话框](https://www.joshka.net/cell-borders/tour.webp)](https://www.joshka.net/cell-borders/tour.webp)

> Partway through, it turns on a checkerboard of the cells, which shows how everything lines up with the grid. Toggle it here:

在部分过程中，它会启用一个棋盘状的单元格网格，展示所有内容如何与网格对齐。切换它这里：

> [![Two panes drawn with cell borders](https://www.joshka.net/cell-borders/grid-off.png)](https://www.joshka.net/cell-borders/grid-off.png) [![The same panes with alternate cells shaded, showing the borders on cell edges](https://www.joshka.net/cell-borders/grid-on.png)](https://www.joshka.net/cell-borders/grid-on.png)

[![绘制了单元格边框的两个窗格](https://www.joshka.net/cell-borders/grid-off.png)](https://www.joshka.net/cell-borders/grid-off.png) [![同一窗格交替单元格着色，显示单元格边缘边框](https://www.joshka.net/cell-borders/grid-on.png)](https://www.joshka.net/cell-borders/grid-on.png)

> ## What box characters can't do

## 方框字符无法做到的事

> The root of it is that box-drawing characters are text. Each line is a glyph that takes up a whole cell, and pretty much everything annoying about them falls out of that.

问题的根源在于，绘图字符本质上是文本。每一条线都是一个占据整个单元格的字形，而关于它们的大部分令人恼火的特性都由此衍生。

> Space is the obvious one. On my 16" laptop with a font I can actually read, the terminal is something like 200x50 (your prefs will move that around a bit). Columns are mostly fine at that size. Rows aren't. A layout with a couple of levels of nested panels can easily spend 6 or 8 of those 50 rows on nothing but lines. That's a lot of screen to give up for decoration.

空间是显而易见的一个。在我这台 16 英寸的笔记本电脑上，使用一个我实际能看清的字体，终端尺寸大概是 200x50（你的配置会让这个数值略有浮动）。在这个尺寸下，列数基本够用，但行数不够。一个包含几层嵌套面板的布局，光是分割线就能轻易占掉这 50 行中的 6 到 8 行。为了装饰而牺牲这么多屏幕空间，实在得不偿失。

> You also can't put a line between two cells that both have something in them. So there's no way to underline a text field right under its text, or to outline a button, without adding padding around it. Rounded corners sort of work, except the corner glyph has one background color, and when the panel's background is different from what's around it you get a little square of the wrong color in each corner. And the line itself is whatever the font decides it is, weight and position included.

你也无法在两个都包含内容的单元格之间添加分隔线。因此，若不在周围添加内边距，就无法在文本正下方为文本字段添加下划线，也无法为按钮添加轮廓线。圆角在一定程度上可行，只不过角落的字形只有一种背景色，当面板的背景色与周围环境不同时，每个角落都会出现一小块颜色错误的方块。而且线条本身的粗细和位置完全取决于字体的定义。

> Then there's copy and paste. Select some text inside a box and you get the box too. Everyone who's pasted from a TUI into Slack knows the little `│` cleanup dance. Sometimes you do want the box (pasting a table into a chat, say), but mostly it's junk. Cell borders aren't text, so they never get copied, which cuts both ways.

然后还有复制粘贴。在某个框里选中一些文本，你也会选中这个框。所有从 TUI 粘贴到 Slack 的人都知道那场小小的 `│` 清理舞。有时你确实需要这个框（比如把表格粘贴到聊天里），但多半是无用的东西。单元格边框并不是文本，所以它们永远不会被复制，这也两种情况都不太理想。

> ## How it works

## 它是如何工作的

> A cell border is a cell attribute, like a background color. Each cell can carry up to twelve line segments: the two halves of each of its four edges, and four arms from its center. Each segment has its own color, width, placement and style, and the terminal draws them over the cell grid. Borders are stored in the cells, so they scroll, erase, insert and reflow with the text. What happens on erase or scroll already has an answer, the same one as for colors.

单元格边框是单元格属性，如背景色。每个单元格可承载多达十二条线段：其四条边各两半，以及从中心延伸出的四个臂。每条线段各自具有颜色、宽度、位置和样式，终端在单元格网格之上绘制它们。边框存储在单元格中，因此它们随文本一起滚动、擦除、插入和重排。擦除或滚动时的行为已经有答案了，与颜色相同。

> The edges are split into halves so borders line up with quadrant block characters (`▖▗▘▝` and friends). That makes it easy to draw a shape that's a half cell in from the grid and still put a neat border around it. Yes, that still uses a character for the fill, and there might be a better way to do that part. One problem at a time.

边缘被分成两半，使边框与四分位块字符（`▖▗▘▝` 和 同类字符）对齐。这使得在网格内偏移半个单元格的位置绘制形状变得容易，同时仍可在其周围画出整齐的边框。是的，它仍然使用字符作为填充，而且可能有更好的方法来处理这部分。一个问题一次。

> The same idea could stretch to sextants and octants, or to quarter and eighth widths, if designs need them.

同样的理念也可延伸到六分制和八分制，或四分之一和八分之一的宽度，如果设计需要的话。

> ### Styles and joints

### 样式和关节

> [![The gallery script showing solid, double, dashed and dotted lines, rounded corners, forks and junctions](https://www.joshka.net/cell-borders/styles.png)](https://www.joshka.net/cell-borders/styles.png)

[![展示实线、双线、破折线和点线、圆角、分叉和连接点的画廊脚本](https://www.joshka.net/cell-borders/styles.png)](https://www.joshka.net/cell-borders/styles.png)

> [![Rounded panels with and without an outside fill color. The first has square patches of background at its corners](https://www.joshka.net/cell-borders/zoom-outside.png)](https://www.joshka.net/cell-borders/zoom-outside.png)



[![带有和不带有外部填充色的圆角面板。第一个在角落处有方形背景色块](https://www.joshka.net/cell-borders/zoom-outside.png)](https://www.joshka.net/cell-borders/zoom-outside.png)

> Lines can be solid, double, dashed or dotted. Each corner and center of a cell can be square or rounded, with a configurable radius and anti-aliased arcs. A rounded corner can name an outside color, so the area outside the arc is painted correctly when the panel's background differs from what's behind it.

线条可以是实线、双线、虚线或点线。单元格的每个角和中心均可为方形或圆角，并支持可配置的半径和抗锯齿圆弧。圆角可指定外部颜色，以便当面板背景与其后方的内容不同时，圆弧外部的区域能被正确绘制。

> When two neighboring cells both put a line on their shared edge, they merge into one line. The stroke with the higher `priority` wins, then the wider one, then the one to the right or below. That way a focused pane can raise its priority and keep its whole outline, whatever order its neighbors were drawn in. My first try was "right/bottom always wins", which lasted until the focused pane lost half its outline to its neighbor.

当两个相邻的 cell 都在它们共享的边上画线时，这两条线会合并成一条。`priority` 更高的那条 stroke 胜出，其次是更宽的那条，最后取位于右侧或下方的那条。如此一来，聚焦的 pane 便可以提升自身的 `priority`，无论它的邻居以什么顺序绘制，都能保持完整的轮廓。我最初的方案是“右侧/底部永远胜出”，它一直奏效，直到聚焦的 pane 把一半轮廓输给了邻居。

> ## The wire format

## 传输格式

> Everything is one DCS string with a namespace:

一切都是一个 DCS 字符串，带有一个 namespace：

```plain
ESC P 1 + b cell-border ; OP ; FIELDS... ESC \
```

> The common path is a pen, held in the cursor like the current background color. Set it, print some text, and the printed cells get the borders:

常见路径是使用画笔，它像当前背景色一样保存在光标中。设置它，打印一些文本，打印出的单元格就会获得边框：

```plain
ESC P 1 + b cell-border;pen;48;32;7aa2f7;0;0 ESC \     bottom edge, blue: an underline
hello
ESC [ 0 m                                              SGR 0 clears the pen
```

> There are also rectangle commands that set or clear borders on existing cells without touching the pen, and a capability query. An app sends the query followed by DA1. If the DA1 reply arrives without a `cell-border` reply first, the terminal doesn't support it, so the app falls back to box characters and reserves the space they need. Terminals that don't understand the DCS ignore it, the same as any unknown DCS.

此外，还存在矩形命令，它们可以在不触动笔的情况下设置或清除现有单元格的边界，并且还有能力查询。一个应用发送查询，然后发送 DA1。如果 DA1 响应先没有 `cell-border` 响应，终端不支持它，因此应用回退到方框字符并预留它们所需的空间。那些不理解 DCS 的终端会忽略它，就像任何未知 DCS 一样。

> The minimum a terminal needs is the pen, the rectangle commands and solid strokes. I've tried to keep that first cut small, because there's always one more "... and this" to add, and that's a slippery slope.

终端所需要的最低配置是笔、矩形命令和实线描边。我特意把第一次裁剪保持在最小范围内，因为总会有“还有这个……”需要添加，而这是一条滑向深渊的路径。

> Line styles, rounded joints, priority and outside colors are extension fields listed in the capability reply, and unknown fields are ignored, so they can be added later. I'd rather the early decisions be two way doors where possible.

线条样式、圆角连接、优先级和外部颜色是能力应答中列出的扩展字段，未知字段会被忽略，因此它们可以后续再添加。我希望早期决策尽可能都是双向门。

> The spec calls itself version 1 (it's the `1` in `DCS 1 + b`). That's v1 in the old sense, before we all got bogged down in semver. It doesn't mean done or stable, it means it's the first one I was willing to write down. Read it as v0.1, or a draft, or whatever you prefer.

这份规范自称版本 1（也就是 `DCS 1 + b` 中的那个 `1`）。这是旧意义上的 v1，那时我们还没都被 semver 搞得焦头烂额。它并不意味着完成或稳定，只意味着这是第一份我愿意写下来的版本。你可以把它读作 v0.1，或草案，或任何你喜欢的说法。

> ## Prior art

## 现有技术

> Parts of this have been done before:



其中部分工作以前已经做过：

> - **DEC ruled lines** in DECterm (extension 43 in the DA1 reply) draw lines around rectangles. They scroll with the text, but they're a separate layer: clearing the screen leaves them behind, and they're always one pixel wide in the normal text color.
> - **SGR 51 to 65**: framed, encircled, overline and the ideogram side lines. Some terminals draw borders with them, but they're on/off attributes with no color, width or joins, and there's no attribute for the bottom edge.
> - The **Win32 console** has per-cell grid flags for the top, left and right edges. **PDCurses** and **X/Open curses** (`WA_TOP`, `WA_LEFT` and friends) have similar attributes. These are the closest to this protocol, but they have no bottom edge (Win32), color, width or halves.
> - **IBM 3270** terminals can outline whole input fields.

- **DEC ruled lines** in DECterm (extension 43 in the DA1 reply) 围绕矩形绘制线条。它们随文本滚动，但它们是一个独立图层：清除屏幕会留下它们，且它们始终在正常文本粗细的单像素宽度。
- **SGR 51 to 65**: framed, encircled, overline and the ideogram side lines. 一些终端使用它们绘制边框，但它们是开/关属性，无色、无宽度、无连接，且无底边属性。
- The **Win32 console** has per-cell grid flags for the top, left and right edges. **PDCurses** and **X/Open curses** (`WA_TOP`, `WA_LEFT` and friends) 有相似属性。这些是 protocol 最接近的，但它们没有底边 (Win32), color, width or halves.
- **IBM 3270** 终端可以轮廓化整个输入域。

> What none of these give you is a line with its own color and width on each edge. The [rationale document](https://github.com/joshka/ghostty/blob/joshka/cell-borders/specs/cell-border-rationale.md) covers the prior art in more detail and explains each choice in the protocol.

这些方案都无法提供的一点是：每条边上的线条都具有各自的颜色和宽度。[理由文档](https://github.com/joshka/ghostty/blob/joshka/cell-borders/specs/cell-border-rationale.md) 更详细地介绍了现有技术，并解释了协议中的每项选择。

> My own first prototype was in Rio ([raphamorim/rio#1947](https://github.com/raphamorim/rio/pull/1947)), with an earlier version of the spec that used APC instead of DCS. Feedback pointed out that APC isn't safe to reuse: Kermit 95 has run APC payloads as Kermit commands since the 90s. DCS is where structured terminal commands already live, and terminals ignore DCS strings they don't recognize, so I switched to that.

我自己的第一个原型是基于 Rio 的（[raphamorim/rio#1947](https://github.com/raphamorim/rio/pull/1947)），该规范的早期版本使用 APC 而不是 DCS。反馈指出，APC 不能安全地复用：Kermit 95 自 90 年代以来就把 APC 负载作为 Kermit 命令运行。DCS 是结构化终端命令已经所在的地方，终端会忽略它们不认识的 DCS 字符串，因此我切换到了那个。

> ## The awkward (edge) cases

## 那些棘手的（边界）情况

> When I first showed this around, most of the questions were about these. The spec goes into all of them properly, but here's roughly where I landed.

当我第一次展示这个时，大部分问题都是关于这些的。规范文档对它们都做了详细说明，但以下是我大致的结论。

> Multiplexers were the first thing people asked about. tmux and friends redraw panes from their own idea of the cell grid, so passing these sequences through would just put borders in the wrong place. A multiplexer that doesn't know about the protocol should drop them and answer DA1 itself, and then apps running inside it fall back to box characters like they would anywhere else. One that does know about it can store borders like any other attribute and redraw them.

终端复用器是人们最先问到的东西。tmux 及同类工具会依照自己维护的 cell grid 模型来重绘 pane，因此直接把这些序列透传下去，只会让边框被画到错误的位置。不了解该协议的复用器应当丢弃这些序列，并自行响应 DA1，这样运行在其中的应用就会像在别处一样退回到 box 字符。而了解该协议的复用器则可以像处理其他属性那样把边框存储起来，并在重绘时一并还原。

> Conflicting lines on a shared edge are settled when the terminal renders, using the priority rule above, so it doesn't matter what order the app wrote the cells in.

共享边上的冲突线条在终端渲染时由上述优先级规则确定，因此应用写入单元格的顺序无关紧要。

> Erase, insert and delete all work the way they do for background colors. Erased cells pick up the current pen, and lines that get inserted or deleted take their borders along. Scrollback, the alternate screen and reflow mostly come for free, because the border lives in the cell.

擦除、插入和删除操作的工作方式与背景颜色一致。被擦除的单元格会继承当前画笔，而被插入或删除的行会连同边框一起移动。由于边框存储在单元格中，滚动历史、备用屏幕和重排大多无需额外处理即可自动支持。

> On cost: the Ghostty change is about 1,650 lines, and a fair chunk of that is tests. Each cell gets a 16-bit border ID, which fits in padding that was already there, so cells don't get any bigger and a screen with no borders costs nothing extra. The IDs point into a table of distinct border sets (about 100 bytes each) that's shared by the whole terminal. A typical TUI only uses a handful of distinct sets, but the table is never freed, so in the worst case (all 65,535 IDs in use) it's somewhere around 10-15 MB.

关于成本问题， Ghostty 的改动大概有 1,650 行代码，其中很大一部分是测试代码。每个单元格都会分配一个 16 位边框 ID，该 ID 完全嵌入到已有的填充空间中，因此单元格的大小不会发生变化，且无边框的屏幕也不会产生额外开销。这些 ID 指向一个由整个终端共享的表，存储了不同的边框组（每个组约 100 字节）。典型的 TUI 仅使用少量不同的边框组，但该表不会被释放，因此在最坏的情况下（所有 65,535 个 ID 都在使用），它大约会占用 10-15 MB 的内存。

> Rendering only does extra work for cells that have borders. Each one looks at its four neighbors to resolve shared edges, so changing a row also rebuilds the rows either side of it. Straight lines are a few solid quads per cell. Rounded corners cost more, because the anti-aliased arc is drawn as rows of small quads, roughly one per edge pixel. I haven't benchmarked any of this properly yet, and it's the part I'd most like another set of eyes on.

渲染仅对带有边框的单元格执行额外工作。每个单元格都会检查其四个邻居以解决共享边，因此更改一行也会重建其相邻行。直线每个单元格只有几块实心四边形。圆角的开销更高，因为抗锯齿弧线是作为由小四边形组成的行绘制的，大约每个边缘像素一个。我还没有真正对这部分做过基准测试，而且这是我最希望再请一双眼睛来看的地方。

> ## Try it

## 试一试

> The [spec](https://github.com/joshka/ghostty/blob/joshka/cell-borders/specs/cell-border-protocol.md) and [rationale](https://github.com/joshka/ghostty/blob/joshka/cell-borders/specs/cell-border-rationale.md) are on my Ghostty fork. The [Ghostty branch](https://github.com/joshka/ghostty/tree/joshka/cell-borders) implements all of version 1. I've only built and run it on macOS so far, so the GTK and OpenGL builds are untested. To build and run it (you'll need Zig 0.17 and Xcode):

该 [spec](https://github.com/joshka/ghostty/blob/joshka/cell-borders/specs/cell-border-protocol.md) 和 [rationale](https://github.com/joshka/ghostty/blob/joshka/cell-borders/specs/cell-border-rationale.md) 位于我的 Ghostty fork 上。该 [Ghostty branch](https://github.com/joshka/ghostty/tree/joshka/cell-borders) 实现了 version 1。我只在 macOS 上构建和运行它，因此 GTK 和 OpenGL 构建均未测试。要构建和运行它，你需要 Zig 0.17 和 Xcode：

```shellscript
git clone -b joshka/cell-borders https://github.com/joshka/ghostty.git
cd ghostty
zig build -Doptimize=ReleaseFast -Dxcframework-target=native
open zig-out/Ghostty.app
```

> Inside that Ghostty, the gallery script on the same branch draws the style gallery above. It detects support first, so it's also a quick check for another terminal's implementation:

在该 Ghostty 中，同一分支上的图库脚本会在上方绘制样式图库。它首先检测支持情况，因此也可以快速检查其他终端的实现：

```shellscript
python3 scripts/cell-borders.py            # the default view
python3 scripts/cell-borders.py --styles   # line styles, joints and outside fill
```

> Once it's running you can flip between views with keys: `p` placement, `c` colors, `h` blocks, `j` junctions, `e` halves, `s` styles and `l` live. `w` cycles the stroke width, `b` turns borders off so you can compare, and `q` quits. Each view also has a matching flag (`--placement`, `--styles` and so on) if you want to start on it.

一旦运行，你可以使用 `p` placement、`c` colors、`h` blocks、`j` junctions、`e` halves、`s` styles 和 `l` live 在视图之间切换。`w` 切换笔画宽度，`b` 关闭边框以便你进行比较，`q` 退出。每个视图也有一个匹配的标志（`--placement`、`--styles` 等等），如果你想从该视图开始。

> The tiling panes demo is on the [Ratatui branch](https://github.com/joshka/ratatui/tree/joshka/cell-borders). It falls back to box-drawing characters when the terminal doesn't support cell borders, which is how I made the comparison shots above:

平铺窗格演示位于 [Ratatui 分支](https://github.com/joshka/ratatui/tree/joshka/cell-borders)。当终端不支持单元格边框时，它会回退到绘图字符，这也是我制作上面对比截图的方法：

```shellscript
git clone -b joshka/cell-borders https://github.com/joshka/ratatui.git
cd ratatui
cargo run -p tiling-panes
```

> Drag panes around with the mouse to retile them. `n` and `v` split, `x` closes, and right click opens a pane menu. Press `b` to switch between cell borders and box drawing, or `g` to shade alternate cells and see where the edges are.

拖动窗格可重新排列平铺布局。`n` 和 `v` 用于分割，`x` 用于关闭，右键点击可打开窗格菜单。按 `b` 在单元格边框与盒绘字符间切换，或按 `g` 为交替单元格着色以查看边缘位置。

> The btop-style monitor from the chart screenshots is in the same branch. Given how much of it an AI wrote, I did briefly consider calling it bslop:

图表截图中展示的那个 btop 风格的 monitor 就在同一个分支里。考虑到其中很大一部分是 AI 写的，我确实曾短暂考虑过把它叫做 bslop：

> [![The full btop-style monitor drawn with cell borders. The hostname is blurred](https://www.joshka.net/cell-borders/bslop.png)](https://www.joshka.net/cell-borders/bslop.png)

[![用单元格边框绘制的完整 btop 风格监视器。主机名已模糊处理](https://www.joshka.net/cell-borders/bslop.png)](https://www.joshka.net/cell-borders/bslop.png)

> To run it:

运行方法：

```shellscript
cargo run -p cell-border-top
```

> It's a real system monitor (it reads your actual CPU, memory, network and processes), so it's a better test of how this looks on a busy screen than the panes demo. `1` to `4` show and hide the boxes, `b` and `g` work the same as in the panes demo, and `h` or `?` lists the rest of the keys. It needs a newer Rust (1.95) than the rest of Ratatui because of the `sysinfo` dependency.

它是一个真实的系统监控器 (它读取你的实际 CPU、 memory、 network 和 processes) ，所以它比 panes demo 的繁忙屏幕更适合测试该界面的外观。`1` 到 `4` 显示和隐藏方框，`b` 和 `g` 与 panes demo 中的行为相同，`h` 或 `?` 列出其余的键。它需要 比 Ratatui 的其余部分更高版本的 Rust ( 1.95 )，因为 `sysinfo` 依赖。

> ## What I'd like to hear

## 我想听到什么？

> I'm not attached to this being the exact solution, but I think it's a problem worth solving, and I'd like it to be more than one terminal's feature (and more than one weekend's worth of yak shaving). If you work on a terminal, would you implement this, and which parts look expensive? If you work on a TUI library or app, which of your widgets would use it, and what would they need that isn't here? Comments are welcome on the [Ghostty discussion](https://github.com/ghostty-org/ghostty/discussions/14324).

我并不执着于这必须是唯一的解决方案，但我认为这是一个值得解决的问题，而且希望它能超越单个终端的功能范畴（也不仅仅是一个周末的“剃牦牛毛”式折腾）。如果你在开发终端，会实现这个功能吗？哪些部分看起来成本最高？如果你在开发 TUI 库或应用，你的哪些组件会用到它，还需要哪些目前未涵盖的能力？欢迎在 [Ghostty 讨论区](https://github.com/ghostty-org/ghostty/discussions/14324) 留言交流。
