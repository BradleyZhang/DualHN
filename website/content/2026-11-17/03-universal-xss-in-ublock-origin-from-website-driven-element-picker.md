---
title: 'uBlock Origin 因网站驱动的元素选择器导致通用 XSS 漏洞'
date: 2026-11-17T11:58:49+08:00
draft: false
source: "Hacker News"
originalTitle: 'Universal XSS in uBlock Origin from website-driven element picker'
originalUrl: "https://iter.ca/post/ubo-uxss/"
hnUrl: ""
points: 
comments: 
---

> Earlier this month I found a one-click universal XSS issue with uBlock Origin (the MV2 Firefox version, although a similar but less problematic issue also affected the MV3 version, uBO Lite), where a malicious website could trick the extension into adding arbitrary trusted filters. Trusted filters can inject JavaScript code into pages, and so the malicious website could create a trusted filter on another website and run arbitrary JS in the context of any site. This issue is fixed now; you can read [the GitHub advisory](https://github.com/gorhill/uBlock/security/advisories/GHSA-cmqw-9r2w-6wv2) for some more details.

本月早些时候，我发现 uBlock Origin（MV2 的 Firefox 版本，尽管一个类似但影响较小的问题也影响了 MV3 版本 uBO Lite）存在一个一键通用 XSS 漏洞，恶意网站可以诱骗该扩展添加任意受信任过滤器。受信任过滤器可以向页面注入 JavaScript 代码，因此恶意网站可以在另一个网站上创建受信任过滤器，并在任何网站的上下文中运行任意 JS。该问题现已修复；你可以阅读 [GitHub 安全公告](https://github.com/gorhill/uBlock/security/advisories/GHSA-cmqw-9r2w-6wv2) 了解更多详情。

> GPT-5.6 Sol did most of the hard work of finding the issue. I figured there might be some kind of UXSS from filter injection, so I asked it to take a look, and it found the issue. I then checked and verified the issue it proposed. I wrote all of the prose in this post myself; Claude wrote most of the code for the PoC.

GPT-5.6 Sol 完成了查找该问题的大部分困难工作。我猜测可能存在由过滤器注入导致的某种 UXSS，于是让它查看了一下，它找到了这个问题。随后我检查并验证了它提出的问题。这篇文章中的所有文字都是我自己撰写的；Claude 编写了 PoC 的大部分代码。

> ## The issue

## 问题

> uBlock Origin has an element picker that you can pull up by right-clicking on the page. You can use this to create a filter rule to block an element on the page without leaving the page.

uBlock Origin 有一个元素选择器，你可以通过在页面上右键单击来调出它。你可以使用它创建过滤规则，以便在不离开当前页面的情况下屏蔽页面上的某个元素。

![uBO element picker](https://iter.ca/ubo-epicker.png)

> The element picker is implemented by injecting an iframe to a URL like `moz-extension://76b2331a-894c-4d25-8b89-fcce37e79cc4/web_accessible_resources/epicker-ui.html`. That page can talk to the extension background script and tell it to add filters.

元素拾取器通过将 iframe 注入到类似于 `moz-extension://76b2331a-894c-4d25-8b89-fcce37e79cc4/web_accessible_resources/epicker-ui.html` 的 URL 来实现。该页面可以与扩展背景脚本通信，并告诉它添加过滤器。

> Basically the attack here is:



这里的攻击基本上是：

> 1. Figure out the element picker URL
> 2. Create our own invisible (opacity 0) iframe that embeds it
> 3. Drive the picker to put the filter we want in it
> 4. Position the invisible iframe to trick the user into pressing the invisible “Create” button

1. 确定 元素选择器 URL  
2. 创建 我们自己的 invisible (opacity 0) iframe 将其嵌入  
3. 驱动 元素选择器 将我们想要的过滤器放入它  
4. 将 不可见 （opacity 0）iframe 位置调整， 误导用户按下不可见的 “Create” 按钮

> ### Figuring out the element picker URL

### 弄清楚元素选择器的 URL

> On Firefox, the only information we needed to figure out was the extension internal UUID which is random per-installation.



在 Firefox 上，我们唯一需要弄清楚的信息是扩展内部的 UUID，它在每次安装时都是随机的。

> On the default setup uBO has a `lootdest.*##+js(no-fetch-if, adsbygoogle, war:googlesyndication_adsbygoogle.js)` filter rule (from uAssets), which hooks `fetch`. From inside the `fetch` hook, it makes an XHR request to `moz-extension://<extension UUID>/web_accessible_resources/googlesyndication_adsbygoogle.js` and returns the response from that as the fetch body, instead of actually making the request. The filter rule is intended to replace a network request for JS from an ad server with a dummy script that has the correct API but doesn’t do anything.

默认设置下 uBO 有一个 `lootdest.*##+js(no-fetch-if, adsbygoogle, war:googlesyndication_adsbygoogle.js)` 过滤规则（来自 uAssets），它会钩住 `fetch`。从 `fetch` 钩子内部，它会向 `moz-extension://<extension UUID>/web_accessible_resources/googlesyndication_adsbygoogle.js` 发出 XHR 请求，并将该响应作为 fetch 响应体返回，而不是实际发出请求。该过滤规则旨在将来自广告服务器的 JS 网络请求替换为一个带有正确 API 但不执行任何操作的虚拟脚本。

> But the attacker website can itself hook the XHR made from inside the `no-fetch-if` hook to extract the random extension UUID.

但攻击者网站可以自身 hook the XHR made from inside the `no-fetch-if` hook to extract the 随机 extension UUID.

```js
const origOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function(m, url, ...a) {
    const e = /^moz-extension:\/\/[^/]+/.exec(url);
    if (e) {
        e[0] // <- has the extension UUID!
    }
    return origOpen.call(this, m, url, ...a);
};
```

> Then the attacker website can run `fetch('/adsbygoogle.js').catch(() => {});` to trigger the filter, and make their hooked XHR run. Note that there are several ways that the extension internal UUID could be leaked; it’s not just this one filter rule.

然后，攻击者网站可以运行 `fetch('/adsbygoogle.js').catch(() => {});` 来触发过滤器，并使其 hooked XHR 运行。请注意，扩展内部 UUID 可能以多种方式泄露；这不仅仅是这一条过滤规则。

> ### Creating an iframe



### 创建 iframe

> Then you can use that to iframe the element picker. Given an iframe element in the page, you just set its src to `` `moz-extension://${origin}/web_accessible_resources/epicker-ui.html` ``.

然后你可以用它来内嵌元素选择器。给定一个页面中的 iframe 元素，你只需将其 src 设置为 `` `moz-extension://${origin}/web_accessible_resources/epicker-ui.html` ``。

> ### Sending messages to it

### 向它发送消息

> Now we can drive the element picker. We can create a MessageChannel and do `iframe.contentWindow.postMessage({ what: 'epickerStart' }, '*', [ch.port2]);` to send it to the picker iframe. Then we talk to it: it sends us a `start` message, we send it a `showDialog` message with a filter and a `resultsetDetails` message[^1] to enable the create button and set `opt`.



现在我们可以驱动元素选择器了。我们可以创建一个 MessageChannel，并执行 `iframe.contentWindow.postMessage({ what: 'epickerStart' }, '*', [ch.port2]);` 将其发送给 picker iframe。然后我们与它进行通信：它会向我们发送一条 `start` 消息，而我们会向其发送一条带有过滤器的 `showDialog` 消息和一条 `resultsetDetails` 消息[^1]，以启用创建按钮并设置 `opt`。

> Normally the picker restricts what filters you can enter, and doesn’t let you add scriptlet filters. But there’s a trick we can do to add arbitrary filters. There’s an `opt` field we set in the second message which is normally the type of network request to match (like `image`), and gets appended to the filter with a `$` if set, like `$image`. But since we control it, we can put a newline in it and make it `"image\ngoogle.com##+js(trusted-rpnt, script, ...)"` to inject an arbitrary trusted filter that injects a script.[^2]

通常选择器限制可输入的过滤器，并且不允许添加脚本过滤器。我们可以通过一个技巧来添加任意过滤器。在第二条消息中我们设置一个 `opt` 字段，它通常是用于匹配的 网络 请求 类型（例如 `image`），如果设置则会将其与过滤器连接，并在前面加上 `$`，例如 `$image$` ，但由于我们控制它，我们可以在它中插入换行符并使其变为 `"image\ngoogle.com##+js(trusted-rpnt, script, ...)"` 以 注入 任意 可信 的 过滤器 并 注入 脚本。[^2]

> This is where the main issue is - the element picker shouldn’t accept messages from the attacker. One of the fixes was having a secret password that the real element picker gets from the content script, that the element picker sends in the initial postMessage.

这就是主要问题所在——元素选择器不应接受来自攻击者的消息。其中一种修复方法是使用一个秘密密码，真实的元素选择器从 content script 获取该密码，并在初始的 postMessage 中发送它。

> ### Getting the click

### 获得点击

> I didn’t bother actually implementing this, but malicious websites could overlay stuff on top of the embedded element picker or make it invisible by setting the iframe opacity to 0. So as long as the website can get the user to click on the page, it can add arbitrary trusted filters for arbitrary domains.

我没有实际费力实现这件事，但恶意网站可以在嵌入 element picker 之上叠加内容，或通过将 iframe 的 opacity 设置为 0 使其不可见。因此只要网站能让用户点击页面，它就可以为任意域添加任意受信任的过滤器。

> Filters added by the element picker are always treated as trusted (at least until a recompile), which is why it can add a trusted filter. If the user later changes their custom filters it would cause a recompile, clearing the filter trust. But in practice the attacker could just immediately open the victim webpage, so this doesn’t help much.

由 element picker 添加的过滤器始终被视为可信 (at least until a recompile)，因而可以添加一个可信过滤器。如果用户后来更改他们的自定义过滤器，将导致重新编译，清除过滤器的信任。但现实中，攻击者只需立即打开受害者的网页，所以这没什么帮助。

> [^1]: Originally I sent that message in reply to a `dialogSetFilter` message from the picker, but it turns out you can just send it right away instead of waiting to reply.

[^1]：我最初是针对选择器发出的 `dialogSetFilter` 消息进行回复，但后来发现可以直接发送消息，而不必等待回复。

> [^2]: Assuming the shown filter is a network filter.

[^2]: 假设所示的过滤器是网络过滤器。
