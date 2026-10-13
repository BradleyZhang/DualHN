---
title: "Zig 中的类型安全 HTML 模板渲染"
date: 2026-10-13T10:51:08+08:00
draft: false
source: "Hacker News"
originalTitle: "Type-safe HTML templating in Zig"
originalUrl: "https://lalinsky.com/2026/10/11/type-safe-html-templating-in-zig.html"
hnUrl: ""
points: 
comments: 
---

> ### Categories

### 类别

> ### Tags

### 标签

> I’ve done a lot of web development over the years. I started around the year 2000, just after PHP 3.0 was released and started taking over the web world. I’ve used all kinds of approaches for generating HTML: raw PHP, string concatenation in Python, Smarty templates in PHP, Template Toolkit in Perl, and Jinja/Django templates in Python. Then, as the world moved on to SPAs and JavaScript frameworks, I stopped working on frontends.

这些年我做了大量的 Web 开发工作。我大概从 2000 年左右开始，就在 PHP 3.0 发布并开始席卷 Web 世界之后不久。我用过各种生成 HTML 的方法：原生 PHP、Python 字符串拼接、PHP 的 Smarty 模板、Perl 的 Template Toolkit，以及 Python 的 Jinja/Django 模板。后来，随着世界转向 SPA 和 JavaScript 框架，我就不再从事前端工作了。

> Two years ago, I picked up Zig, and I’d never have imagined I’d be considering web development in such a low-level language. But as I was building my own ecosystem with [zio](https://github.com/lalinsky/zio) and [Dusty](https://github.com/lalinsky/dusty), I realized it’s not that far-fetched. I built these libraries for API backends, where the output is JSON or MessagePack, but then I saw that with proper use of arena allocators, even web development is actually manageable, since you don’t need to remember to deallocate all the strings that are typically involved. And with Zig’s comptime, you can build very high-level interfaces without losing the performance benefits. And with the help of [htmx](https://htmx.org/) or [Datastar](https://data-star.dev/), you can even build SPAs without touching JavaScript/TypeScript, which I promised myself I’d never do.

两年前，我开始学习 Zig，而且我从未想象过自己会在如此低级的语言中考虑进行 Web 开发。但在使用 [zio](https://github.com/lalinsky/zio) 和 [Dusty](https://github.com/lalinsky/dusty) 构建自己的生态系统时，我意识到这其实并不遥不可及。我为 API 后端构建了这些库，输出为 JSON 或 MessagePack，但随后我发现，只要正确使用 arena allocators，即使是 Web 开发也变得可以管理，因为你不需要记得释放通常涉及的所有字符串。借助 Zig 的 comptime，你可以在不牺牲性能优势的情况下构建非常高级的接口。此外，借助 [htmx](https://htmx.org/) 或 [Datastar](https://data-star.dev/)，你甚至可以在不触碰 JavaScript/TypeScript 的情况下构建 SPA，而这是我曾经向自己承诺永远不会做的事。

> That said, one thing was still missing: templating. String concatenation was not an option, I didn’t want to go back to the pre-2000 CGI days. I had a few requirements for a templating library:

即使如此，仍然缺少的东西是：模板。字符串拼接不是选项，我不想回到 pre-2000 CGI 时代。我有几个关于模板库的要求：

> 1. It has to be type-safe, with all inputs typed and checked at compile time. I’ve dealt with dynamic languages enough in my life, and I don’t want to deal with runtime template errors anymore.
> 2. It has to be fast. No allocations, no intermediate state, just write the output to `std.Io.Writer` directly.
> 3. It needs to have safe defaults. I don’t want to deal with XSS anymore, so all inputs have to be escaped by default.
> 4. It should still feel like writing HTML. I didn’t want a Zig-based DSL I’d have to fight constantly.

1. 它必须是类型安全的，所有输入都必须在编译时进行类型检查。我在生活中已经处理了足够多的动态语言，真的不想再处理运行时模板错误了。
2. 它必须是高效的。不允许进行内存分配，不能使用中间状态，而是直接将输出写入 `std.Io.Writer`。
3. 它需要有安全的默认值。我不想再处理 XSS 问题了，因此所有输入都必须默认进行转义。
4. 它应该仍然感觉像在编写 HTML。我不想使用一个基于 Zig 的 DSL，让我不断地去与之对抗。

> I couldn’t find any solution that would satisfy all these requirements. Then I saw [Ziex](https://ziex.dev/) and I was amazed. It never occurred to me that the [JSX](https://legacy.reactjs.org/docs/introducing-jsx.html) approach could be done outside of JavaScript. The developer experience Nurul Huda managed to build in Zig was just unimaginable to me. It didn’t fit my needs directly, because I didn’t want a WASM framework, but the syntax and his approach to integrating Zig code into templates gave me some ideas. Then, after further research, I discovered [Templ](https://templ.guide/) for Go, and it was pretty obvious to me what I wanted to build.

我找不到任何能同时满足所有这些需求的解决方案。后来我发现了 [Ziex](https://ziex.dev/)，感到非常惊讶。我从未想过 [JSX](https://legacy.reactjs.org/docs/introducing-jsx.html) 这种方式居然可以在 JavaScript 之外实现。Nurul Huda 在 Zig 中构建出的开发者体验简直让我难以想象。它无法直接满足我的需求，因为我不想要一个 WASM 框架，但其语法以及将 Zig 代码集成到模板中的思路给了我一些启发。随后经过进一步调研，我发现了 Go 语言的 [Templ](https://templ.guide/)，对我来说要构建什么变得显而易见。

> So, let me present [zt](https://github.com/lalinsky/zt) *(I’m not good at naming, sorry)*. It’s an adaptation of Templ to Zig. The templates are parsed and transpiled to Zig code during `zig build`. That means you can import them directly from your app code, but also, perhaps even more importantly, the templates can import your app code. As a result, all parameters can be fully typed. If something can’t be rendered, the Zig compiler will tell you so. The generated code is fairly simple, all it does is write to a `std.Io.Writer`. You can write directly to a socket or accumulate the output in a buffer, your choice. Here is what a template looks like:

那我就来介绍一下 [zt](https://github.com/lalinsky/zt) *(我不太擅长命名，抱歉)*。它是一个基于 Zig 语言对 Templ 的改造版本。模板会在 `zig build` 期间被解析并转译为 Zig 代码，这意味着你可以直接从应用代码中导入模板，但更重要的是，模板也可以导入应用代码。因此，所有参数都可以完全类型化。如果有无法渲染的内容，Zig 编译器会告诉你生成的代码非常简单，它只负责向 `std.Io.Writer` 写入内容。你可以直接将输出写入到 socket 中，或者将输出缓存到缓冲区中，由你自行选择。以下是一个模板的示例：

```zig
const User = @import("../models.zig").User;

> pub templ Layout(title: []const u8) {
>     <!DOCTYPE html>
>     <html>
>         <head>
>             <title>{title}</title>
>         </head>
>         <body>
>             @children
>         </body>
>     </html>
> }

pub tem 布局(title: []const u8) {
    <!DOCTYPE html>
    <html>
        <head>
            <title>{title}</title>
        </head>
        <body>
            @children
        </body>
    </html>
}

> pub templ HomePage(user: ?User) {
>     @Layout("Home") {
>         if (user) |u| {
>             <h1>Welcome back, {u.name}!</h1>
>             <a href="/users/{u.id}">Your profile</a>
>         } else {
>             <h1>Welcome, guest!</h1>
>             <a href="/login">Log in</a>
>         }
>     }
> }
> ```



```go
pub templ HomePage(user: ?User) {
    @Layout("Home") {
        if (user) |u| {
            <h1>欢迎回来，{u.name}！</h1>
            <a href="/users/{u.id}">您的个人资料</a>
        } else {
            <h1>欢迎，访客！</h1>
            <a href="/login">登录</a>
        }
    }
}
```

> And here is how you would use it from Zig code:



以下是如何从 Zig 代码中使用它：

```zig
const std = @import("std");
const User = @import("models.zig").User;
const pages = @import("templates/pages.zig");

> pub fn main(init: std.process.Init) !void {
>     var buf: [4096]u8 = undefined;
>     var stdout = std.Io.File.stdout().writer(init.io, &buf);
>     const w = &stdout.interface;

这个函数是一个 Zig 编程语言编写的主函数，接收标准进程初始化对象作为参数。

```zig
pub fn main(init: std.process.Init) !void {
    var buf: [4096]u8 = undefined;
    var stdout = std.Io.File.stdout().writer(init.io, &buf);
    const w = &stdout.interface;
```

代码中：
- `buf` 是一个 4096 字节的缓冲区，用于存储输出数据
- `stdout` 是标准输出的写入器接口，使用提供的 IO 环境和缓冲区
- `w` 是指向写入器接口的引用，用于后续的写入操作

> const user: User = .{ .id = 1, .name = "Lukas" };
>     try pages.HomePage.render(.{user}, w);
>     try w.flush();
> }
> ```

    const user: User = .{ .id = 1, .name = "Lukas" };
    尝试渲染主页 pages.HomePage，传入用户对象和 writer w。
    尝试刷新写入缓冲区。
}
```

> If you want to use it inside Dusty to render an HTML page, you just do this:

如果你想在 Dusty 中使用它来渲染 HTML 页面，只需执行以下操作：

```zig
try res.render(.html, pages.HomePage, .{user});
```

> *As a side note, the `main` snippet above has a very non-obvious bug in error handling if you use the same pattern somewhere `std.Io` cancellation matters. I’ll probably write a blog post about it, but if you are interested, check out this [Ziggit thread](https://ziggit.dev/t/making-it-harder-to-swallow-error-canceled/16556). The `render` function in Dusty that wraps the `std.Io.Writer` handling solves it.*

顺便一提，上面的 `main` 代码片段在错误处理方面存在一个非常不明显的 bug，如果你在 `std.Io` 取消机制很重要的地方使用相同模式，就会触发该问题。我大概会写一篇博客文章来讲解，但如果你感兴趣，可以看看这个 [Ziggit 线程](https://ziggit.dev/t/making-it-harder-to-swallow-error-canceled/16556)。Dusty 中包装 `std.Io.Writer` 处理的 `render` 函数解决了这个问题。

> All dynamic values are HTML-escaped by default, both in text and in attributes, and values in URL attributes like `href` or `src` are also checked for dangerous schemes. If you really need to output raw HTML, you have to ask for it explicitly with `{!value}`, so it’s easy to spot in the template. The parser also requires all elements to be properly closed, so you can’t accidentally produce broken markup. It won’t protect you from everything, but it removes the most common sources of XSS.

所有动态值在文本和属性中默认都会进行 HTML 转义，URL 类型属性（如 `href`、`src`）中的值还会检查是否包含危险的 URL scheme。如果真的需要输出原始 HTML，必须使用 `{!value}` 显式请求，这使得模板中容易被发现。解析器还要求所有元素必须正确关闭，因此无法无意中生成破损的markup。它无法保护你完全免受 XSS 攻击，但能消除最常见的 XSS 来源。

> What I like the most is that template errors are just Zig compiler errors. If you make a typo in the template above and write `{u.nmae}` instead of `{u.name}`, `zig build` will tell you:

我最喜欢的是模板错误就是Zig编译器错误。如果你在模板中打错字，把 `{u.nmae}` 写成 `{u.name}`，`zig build` 会告诉你：

```
src/templates/pages.zig:45:43: error: no field named 'nmae' in struct 'models.User'
            try zt.writeEscaped(writer, u.nmae); // pages.zt:18:31
                                          ^~~~
src/models.zig:1:18: note: struct declared here
pub const User = struct {
                 ^~~~~~
```

> The error points to the generated code, but each line has a comment with the location in the original template. The same applies to the calling side, if you try to pass a string where `HomePage` expects a `?User`, it won’t compile.

错误指向生成的代码，但每行都有一个注释，指示原始模板中的位置。调用方也同样适用，如果你尝试在 `HomePage` 期望 `?User` 的地方传入一个字符串，编译将失败。

> Beyond the basics shown here, you can build reusable components and pass them around as values, and with `@children` you can build layouts that wrap other templates, which covers what you’d use template inheritance for in other languages. Control flow is just Zig, so `if`, `for` and `switch` work as you’d expect, including payload captures. All of it still compiles down to a sequence of writes, without any allocations.

除了上述基础功能外，你还可以构建可重用的组件并将其作为值进行传递。此外，通过 `@children` 你可以构建包装其他模板的布局，这与你在其他语言中使用的模板继承功能相当。在 Zig 中，控制流非常直观，`if`、`for` 和 `switch` 等语句按照预期工作，包括有效载荷捕获。所有这些代码在编译后都会转化为一系列写入操作，而不会进行任何内存分配。

> You can have a look at the [TODO](https://github.com/lalinsky/dusty/tree/main/examples/todo) example in Dusty. It’s a simple htmx-based web app that showcases this library, plus other parts of Dusty that are needed for building a dynamic SPA.

你可以查看 Dusty 仓库中的 [TODO](https://github.com/lalinsky/dusty/tree/main/examples/todo) 示例。这是基于 htmx 的一个简单网络应用，展示了 Dusty 库以及构建动态单页应用（SPA）所需的其他功能。

> One part of the syntax is still open. Block-level control flow is written as plain Zig, following the example of Templ, so a line starting with `if`, `for` or `switch` is parsed as code. That means text like “if you forgot your password…” on its own line is a parse error, and you have to wrap it in an element or write it as a string expression. I’m considering switching to `@if`, `@for` and `@switch`, similar to Razor or Twirl, which would remove the ambiguity, at the cost of slightly noisier templates. If you have an opinion on this, please leave a comment in [this GitHub issue](https://github.com/lalinsky/zt/issues/27).

语法中还有一部分未定。区块级控制流采用纯 Zig 编写，遵循 Templ 的示例，因此以 `if`、`for` 或 `switch` 开头的行会被解析为代码。这意味着像“if you forgot your password…”这样独占一行的文本会导致解析错误，你必须将其包裹在元素中，或将其写为字符串表达式。我正考虑改用 `@if`、`@for` 和 `@switch`，类似于 Razor 或 Twirl，这将消除歧义，代价是模板会稍显冗长。如果你对此有看法，请在 [this GitHub issue](https://github.com/lalinsky/zt/issues/27) 中留言。

> Although multiple people are already using it, the project is not very mature yet, so I welcome any feedback. You can open a GitHub issue if you find any problems, or ping me on the Zig Discord.

虽然已经有多个人在使用它，但该项目尚不成熟，因此欢迎任何反馈。如果发现任何问题，可以提出 GitHub issue，或在 Zig Discord 上联系我。
