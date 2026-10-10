---
title: "我雇了一位插画师画了我的房子，现在它成了我的 Home Assistant 仪表盘"
date: 2026-10-10T18:20:33+08:00
draft: false
source: "Hacker News"
originalTitle: "I hired an illustrator to draw my house. Now it's my Home Assistant dashboard."
originalUrl: "https://antonfrolov.substack.com/p/i-hired-an-illustrator-to-draw-my"
hnUrl: ""
points: 
comments: 
---

![](https://substackcdn.com/image/fetch/$s_!huqE!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fea228abe-574d-4d58-9922-775c987f1f7b_1920x1080.webp)

> The fireplace flickers, the garden lights glow, and the air conditioner in the bedroom is quietly blowing — not only in my house, but in a hand-drawn picture of it. This is my Home Assistant dashboard, and for the first time, it’s one the whole family actually enjoys using.

壁炉闪烁，花园灯光闪烁，卧室的空调正在安静地运转——不仅在我家里，也出现在一幅手绘图上。这是我的 Home Assistant 仪表板，第一次，它让全家人都真正享受使用了。

> For the last year I’ve been automating my home with Home Assistant, the open-source smart home platform. I tried to automate as much as possible, so things just work without anyone touching them. When everyone leaves, all the air conditioners switch off. The garden sprinkler calculates its run time from the weather: longer on hot days, skipped entirely when it rains.

过去的一年里，我使用 Home Assistant 自动化了我的家，它是一款开源智能家居平台。我尽可能自动化了一切，以至于无需人工干预，一切都能自行运行。当所有人离开时，所有空调都会关闭。花园喷水系统根据天气计算其运行时间：炎热的日子运行时间更长，下雨时则完全跳过。

> But some things still need a human. The garden lights are the best example. They can only be turned on from an app, either the manufacturer’s or Home Assistant’s. And I made it worse myself: a timer in Home Assistant turns garden lights off automatically after a while. When it’s about to run out, the lights start blinking, giving you time to open the app and extend it while they’re still on. The problem? Nobody else in the household wanted to use the Home Assistant app, or the dashboard I had at the time.



但有些事情仍然需要人工干预。庭院灯就是最好的例子。它们只能通过 App（无论是厂商提供的还是 Home Assistant 的）来开启。而且，我自己反而把事情变得更糟了：Home Assistant 中的一个定时器会在一段时间后自动关闭庭院灯。当定时即将结束时，灯会开始闪烁，给你留出时间在它们仍然亮着时打开 App 来延长亮灯时间。问题在于：家里其他人都不想使用 Home Assistant App，也不愿使用我当时配置的 dashboard。

![](https://substackcdn.com/image/fetch/$s_!Cytd!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7604122e-686c-4135-82cf-be4166c4c45d_2958x1672.png)

> Original dashboard



原始仪表盘

> I could have installed a physical switch, but that wouldn’t solve the timer. And some devices are simply easier to control from an app. Try starting the sprinkler with the button on the unit itself, then running out of the garden before you get soaked.

我本来可以安装一个物理开关，但那并不能解决计时器的问题。而且有些设备通过 App 控制起来更简单。尝试使用设备本身上的按钮启动喷头，然后在被淋湿之前跑出花园。

> So I thought: why not build a dashboard so cool that everyone would *want* to use it?

于是我想：为什么不建一个太酷的仪表盘，让所有人*都*想用它？


> I looked through a lot of dashboards and fell for the idea of a floor plan: an interactive map of the house that mirrors the real one. Most of the ones I found were 3D, built either with Home Assistant custom cards or in third-party modelling software, and I found one article about a [pixel-art floor plan](https://strawberrysec.net/homelab/Home-Assistant-Pixel-Floorplan/).

我浏览了许多仪表盘，并被"地图规划"(floor plan)这个想法所吸引：这是一个房屋的交互式地图，反映出真实的房屋。大多数我找到的都是3D建模，分别是使用Home Assistant自定义卡片构建的，或者是在第三方建模软件中创建的，我还找到了一篇关于[pixel-art floor plan](https://strawberrysec.net/homelab/Home-Assistant-Pixel-Floorplan/)的文章。

![](https://substackcdn.com/image/fetch/$s_!ziZE!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9b056f5c-ea21-4c0f-90eb-31895c662a0a_1800x1240.png)

> 3D and pixel-art floor plan styles (illustrations generated for this article)

**3D 与像素艺术平面图风格（插图为本文生成）**

> The 3D plans didn’t quite click for me. In most of the ones I saw, the model itself was a static picture, and everything interactive was a layer of icons on top of it.[^1] The pixel-art approach was charming, but it meant either drawing everything yourself or placing library sprites one by one in a graphical editor.

The 3D plans 没有完全让我明白。  
在大多数我见过的案例中，the model 本身是一张静态图片，所有交互元素都是叠加在 it 上的图标层。[^1]  
像素艺术的方式很有吸引力，但它意味着要么自己手绘所有内容，要么在图形编辑器中逐个放置库 sprites。

> ### Finding an artist

### 寻找艺术家

> I liked the pixel-art idea enough to go looking for an artist, and soon realised that finding and booking a good one is harder than it sounds. Artists specialise, and each has a style of their own. Popular artists are easier to find, but likely they are already booked for months in advance and even if they are free, artwork itself is going to take anything from few weeks to few months. On top of that, a dashboard is an unusual commission: the artist has to understand what it is and what it needs technically, not just paint a nice picture.

我喜欢像素艺术（pixel‑art）这一想法，以至于主动去寻找艺术家，很快意识到找到并预约一位合适的艺术家比听起来要难得多。艺术家各有所长，每个人都有自己独特的风格。知名艺术家更容易找到，但他们很可能已经被提前预订了几个月；即使他们有空，创作艺术作品本身也可能需要几周到几个月的时间。除此之外，仪表盘（dashboard）这种委托相当不寻常：艺术家不仅要画出好看的画面，还得理解这是什么以及它在技术上需要什么。

> Luckily, I was recommended an amazing environment artist whose portfolio was already full of beautifully illustrated spaces. I loved their style, and after a few messages back and forth I was sure we were on the same page about the end goal. The pixel-art idea died a natural death: I’d found someone whose style appealed to me even more, and who already knew how to draw a room.



幸运的是，有人向我推荐了一位极其出色的环境艺术家，他们的作品集里已经充满了精美绘制的空间。我非常喜欢他们的风格，在来回几次消息之后，我确信我们对最终目标有着共识。像素画的想法自然消亡了：我找到了一个风格更吸引我、并且已经知道如何画房间的人。

> To get us started, I put together a package for the artist:

为帮助我们开始工作，我为这位艺术家准备了一个包：

> - **A simple architectural plan** of the house. It had no furniture on it, so I marked that in myself.
> - **Photos of the rooms**, as a reference for what’s really there.
> - **Illustrations I found online**, as references for style and colour.
> - **Examples of other dashboards**, so the artist could see what the end result was for.
> - **A short technical spec**: the requirements, which files and formats I needed back, and a note on each of the resources above explaining what it was for.
> - **Paint colour codes** from our last renovation. Nice to have rather than essential, since colours can be matched from the photos.



- **简单的房屋建筑平面图**。上面没有家具，所以我自己进行了标注。
- **房间照片**，作为实际内容的参考。
- 在网上找到的**插图**，作为风格和色彩的参考。
- 其他 **dashboard** 示例，以便艺术家了解最终成果的用途。
- **简短的技术规范（ technical spec ）**：包括需求、我需要退回的文件和格式，以及对上述每项资源的用途说明。
- 上次装修时的**油漆颜色代码（ paint colour codes ）**。拥有它更好，但并非必需，因为颜色可以从照片中匹配。

> I want to say a bit more about the technical part of the brief, because the rest of the article builds on it. Ask for PNGs with transparency (WebP for animations), a day and a night version of every floor, and every device on its own layer: a still image for “off” and a short loop of frames for “on” (eight was plenty), in both day and night lighting. Most importantly, every file should be exported on one shared canvas of the same size, with each piece sitting exactly where it belongs in the house rather than cropped to itself. That one rule saves days of lining things up later, which I learned the hard way.

我想多谈谈简报的技术部分，因为后续内容都是基于这一点展开的。要求提供带有透明度的 PNG 文件（动画使用 WebP），每个楼层需提供白天和黑夜版本，每个设备需单独一层：离线状态下为静态图像，“开”状态下为 8 帧循环动画（已足够），同时涵盖白天和黑夜照明。最关键的是，所有文件都应导出到一个相同尺寸的共享画布上，每个元素需精确定位在房屋的正确位置，而非裁剪到自身。这个规则可以节省大量后期对齐时间，我从痛苦的经历中深刻体会到这一点。

> A couple of notes from my own build. For the garden I ended up with three versions: day, night, and night with the lights on. And I originally asked for the animations as PNG sprite sheets, but ended up converting the frames to animated WebP myself, so you might as well ask the artist for WebP from the start.

我自己的构建中有几条备注。在花园项目中，我最终得到了三个版本：白天、夜晚以及夜晚灯光亮起的版本。当初我原本请求动画作为 PNG sprite sheet，但我自己把帧转成了动态 WebP，所以最好一开始就直接问艺术家要 WebP。

> Finding an artist, working out what the dashboard needed and preparing all the documentation was probably the bulk of the work on this project. That makes total sense, because the artwork is the project! When the dashboard is an illustration, with states shown as animations and the UI reduced to a few icons and sensor readings, there simply isn’t much left to design or code.


寻找一位艺术家、梳理仪表盘需求以及准备全部文档，大概构成了这个项目绝大部分的工作量。这完全说得通，因为艺术作品本身就是这个项目！当仪表盘本质上是一幅插画，状态以动画形式呈现，UI 精简为几个图标和传感器读数时，其实已没什么需要设计和编码的了。

> ### How it works

### 工作原理

> Once the illustration is ready, it’s time to put it to work. Fortunately, Home Assistant makes this fairly easy: under the hood, it’s one stock card and a couple of tricks.

当插图准备就绪时，就该将其投入使用。幸运的是，Home Assistant 使得这相当简单：在其内部原理中，它只需要一张标准卡片和一些小技巧。

> The card is `picture-elements`. The illustration is its background (`image:`), and everything that changes, the devices and the status readouts, is placed on top of it as `elements:`, each at its own position. Of the [element types](https://www.home-assistant.io/dashboards/picture-elements/#elements) it supports, I mostly used `image` for the devices, `icon` and `state-label` for the status readouts, and `conditional` to show or hide elements depending on state.

这张卡片名为 `picture-elements`。插图作为其背景（`image:`），而所有动态变化的设备和状态读数则被叠加在插图之上，分别作为 `elements:` 放置在不同的位置上。在它支持的[元素类型](https://www.home-assistant.io/dashboards/picture-elements/#elements)中，我主要使用了 `image` 来表示设备，`icon` 和 `state-label` 来显示状态信息，以及 `conditional` 来根据状态动态显示或隐藏元素。

> The first trick is how a device comes alive. An `image` element can change its picture with the device’s state (`state_image`): while the AC is off it shows a still frame, and when it’s on, the animated WebP. The browser simply plays the animation, so no custom code is involved.

第一个技巧是如何让设备“活”起来。一个 `image` 元素可以根据设备状态 (`state_image`) 改变其图片：当空调关闭时显示静态帧，当开启时显示动画 WebP。浏览器直接播放动画，因此不需要自定义代码。

```markup
type: picture-elements
image: /local/floorplan/ground/ground_day.webp
elements: 
    - type: conditional
      conditions:
        - entity: input_boolean.dashboard_night
          state: 'on'
      elements:
        - type: image
          image: /local/floorplan/ground/ground_night.webp
    - type: conditional
      conditions:
        - entity: input_boolean.dashboard_night
          state: 'off'
      elements:
        - type: image
          entity: climate.main_room_ac
          image: /local/floorplan/ground/ac_living_off.webp
          state_image:
            cool: /local/floorplan/ground/ac_living_on.webp
            heat: /local/floorplan/ground/ac_living_on.webp
            heat_cool: /local/floorplan/ground/ac_living_on.webp
            auto: /local/floorplan/ground/ac_living_on.webp
            dry: /local/floorplan/ground/ac_living_on.webp
            fan_only: /local/floorplan/ground/ac_living_on.webp
          tap_action:
            action: more-info
```

> The second trick is day and night. I created a helper to switch between day and night modes, and an automation that flips it at sunset and sunrise. It's easy to set up, and being able to flip it by hand is very useful while testing. The night illustration is laid on top of the day one as a `conditional` element, and each device gets a day and a night version the same way.

第二种技巧是昼夜模式切换。我创建了一个用于切换昼夜模式的辅助函数，以及一个在日落和日出时自动切换的自动化。它的设置非常简单，在测试时能够手动切换非常有用。夜间插图作为 `conditional` 元素覆盖在白天插图之上，每个设备也以同样的方式获得昼夜两个版本。

![](https://substackcdn.com/image/fetch/$s_!bvPz!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe58fc895-2ce5-4eb3-8ba6-f99fbbe88211_1920x1080.webp)

> Tapping an interactive device like the AC opens Home Assistant's own control dialog for it (`tap_action` set to `more-info`). That was the simplest option, since there was no dialog to design. The only exception is the garden irrigation. It's a single icon on the dashboard, but behind it are several independent valves and timers that together make up the smart irrigator. There's no single screen for all of that, so there's no default dialog to open. I built one with [Browser Mod](https://github.com/thomasloven/hass-browser_mod), a custom integration installed from HACS that, among other things, lets you open your own pop-up dialogs on a Home Assistant page.

点击交互式设备（如空调）时，Home Assistant 会自动弹出其专属控制对话框（通过 `tap_action` 设置为 `more-info`）。这是最简单的做法，因为无需额外设计对话框。唯一的例外是花园灌溉系统。它在仪表板上显示为一个图标，但背后隐藏着多个独立的阀门和定时器，共同构成了智能灌溉系统。由于没有一个统一的界面来显示所有这些组件，因此没有默认的对话框可以打开。我使用 [Browser Mod](https://github.com/thomasloven/hass-browser_mod) 构建了一个自定义对话框，这是一个从 HACS 安装的自定义集成，它允许用户在 Home Assistant 页面上弹出自己的对话框（此功能是其中之一）。

> The `image` property reference your images with URL or local path, so you need to host them somewhere, I decided to place them on Home Assistant box itself and serve from there. To do that you need to create folder `/config/www` if it doesn’t exist yet and reboot Home Assistant. Then place your files in `/config/www` so `/local/floorplan/ground/ac_living_off.webp` becomes `/config/www/floorplan/ground/ac_living_off.webp`.

The `image` property 用于引用 `URL` 或 `local path` 中的图片，因此你需要将它们托管 somewhere。我决定将它们放在 Home Assistant 盒子自身并从中提供服务。为此，你需要在 Home Assistant 未创建 `/config/www` 文件夹时创建它并重启 Home Assistant。随后将你的文件放入 `/config/www`，这样 `/local/floorplan/ground/ac_living_off.webp` 就变成了 `/config/www/floorplan/ground/ac_living_off.webp`。

> I wanted the dashboard on the TV from the start, so it had to run in the TV’s own browser. Early on I read that the browser on LG’s webOS didn’t support WebP, which would have sunk the whole animation approach. It turned out not to be true. The claim most likely comes from the TV’s built-in photo viewer, not its browser, and a single test image was enough to prove it. If you read the same thing about your TV, try it before you believe it.

我一开始就想要电视上的仪表盘，所以它必须运行在电视自带的浏览器中。早期我读到LG webOS的浏览器不支持WebP，这会让整个动画方案失败。但结果并非如此。这一说法很可能来自电视内置的照片查看器，而不是它的浏览器，只需要一张测试图片就能证明这一点。如果你也读到同样的事情关于你的电视，请先试一试，再相信。

> The real problem was elsewhere. webOS wouldn’t let me set a web page as the screensaver, or make the browser open a specific page by default, so getting to the dashboard would always take a few clicks with the remote. That’s exactly the kind of friction I was trying to remove. In the end I went around the TV’s software altogether. The Home Assistant box sits next to the TV anyway, so I installed the [HAOS Kiosk Display](https://github.com/puterboy/HAOS-kiosk/) add-on and plugged it into one of the TV’s HDMI inputs. Now the dashboard is just another input on the TV, always open and always on the right page.



真正的问题其实出在别处。webOS 不允许我将网页设置为屏保，也无法配置浏览器默认打开特定页面，因此每次用遥控器进入仪表盘总要点击几次。这正是我想要消除的那种操作摩擦。最终，我索性完全绕过了电视自带的软件系统。反正 Home Assistant 盒子就在电视旁边，于是我安装了 [HAOS Kiosk Display](https://github.com/puterboy/HAOS-kiosk/) 插件，并将其连接到电视的一个 HDMI 输入端口。现在，仪表盘就像是电视上的另一个输入源，始终开启，并永远停留在正确的页面。

> ### One screen for the whole house

### 一屏掌控全屋

> On the TV I wanted to see everything at once: both floors and the garden on a single screen. But each floor also deserved a view of its own, for when you only care about one. So I built a separate view for every floor and the garden, and then a “Full” view that brings them all together.

我在电视上希望一屏同时看到所有内容，包括两层楼和花园。但每层楼也应该有自己的视角，因为有时你可能只想关注一层。所以，我为每一层楼和花园都创建了一个独立的视图，然后再创建一个“全景”视图，将它们全部整合在一起。

> This is where the shared canvas from the brief paid off. Each view is cut out of the same master canvas, so all I had to remember was where each piece came from. To build the full view, every floor goes back to its original position, and they line up by themselves, like layers in an image editor. Two details made it look right: the garden sits underneath the house rather than on top of it, and the first floor is lifted slightly above the ground floor, so the house looks a little “exploded” and you can see into both levels.



这正是需求简报中共享画布发挥作用的地方。每个视图都裁剪自同一张主画布，因此我只需要记住每一块素材源自何处。构建完整视图时，每一层都会回到原始位置并自动对齐，就像图像编辑器中的图层一样。有两处细节让它看起来恰到好处：花园位于房屋下方而非其上方，且一层被稍稍抬离底层，使房屋呈现出轻微的“爆炸”效果，你可以同时看清两层内部。

![](https://substackcdn.com/image/fetch/$s_!FM8h!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2995ce1b-d168-4616-90f2-5eb25bbede14_1920x1080.webp)

> The harder part was reusing the floors themselves. I didn’t want to configure every device twice, once for its floor and once for the full view, but the Home Assistant UI editor has no way to share elements between cards. So I switched the dashboard to YAML mode. The configuration lives in files, and each floor’s elements sit in their own file, which both the floor view and the full view include. A room is edited once and changes everywhere. A nice bonus: after one restart to register the dashboard, editing those files only needs a browser refresh. The price is losing the visual editor, which wasn’t a big deal since most of work of each floor was already over by that time.


最难的是重新利用楼层本身。我不想为每个设备配置两次，一次用于其楼层，一次用于全屏视图，但 Home Assistant UI 编辑器没有共享卡片元素的方式。所以我将仪表板切换到了 YAML 模式。配置存储在文件中，每个楼层的元素都在自己的文件中，既包含在楼层视图，也包含在全屏视图中。房间只编辑一次，任何地方都会改变。一个不错的加分项：在注册仪表板后重启一次，只需刷新浏览器即可编辑这些文件。代价是失去了可视化编辑器，这并不是大问题，因为到那时每个楼层的大部分工作已经完成了。

> One more limitation: a `picture-elements` card can’t contain other cards. So the full view stacks the floor cards on top of each other with `vertical-stack` and positions them with card-mod, a popular HACS plugin that lets you style cards with CSS.

另一个限制是： `picture-elements` 卡片不能包含其他卡片。因此，完整视图使用 `vertical-stack` 将楼层卡片垂直堆叠，并通过 card-mod （一个流行的 HACS 插件，可让你使用 CSS 为卡片添加样式）定位它们。

> ### Putting it all together



### 把它们整合在一起

> With the full view ready, the files uploaded and the kiosk set up, it was finally time to try it out. In my case, that meant turning on the TV and switching to the right input. I still remember everyone’s excitement seeing it for the first time: comparing the illustration with the real rooms, and switching devices on and off to see which ones the picture would react to.

全景就绪后，文件上传完毕，该系统也已设置，终于该试试看了。对我来说，这意味着打开电视并切换到正确的输入。我仍然记得大家第一次看到时的兴奋：将插图与真实的房间进行比较，以及开关设备观察画面会如何反应。

> These days the dashboard runs for a few hours in the morning and in the evening. Fortunately, my TV can be controlled from Home Assistant, so a schedule switches it to the dashboard during those hours, as long as nobody is watching anything. I also added [Kiosk Mode](https://github.com/NemesisRE/kiosk-mode) from HACS to get rid of Home Assistant menu on TV, making it pure dashboard experience.

如今，仪表板每天早上和晚上各运行几个小时。幸运的是，我的电视可以通过 Home Assistant 控制，于是我设定了一个计划，在没有人观看任何内容时，在这几小时内将其切换到仪表板。我还从 HACS 添加了 [Kiosk Mode](https://github.com/NemesisRE/kiosk-mode)，以去掉电视上的 Home Assistant 菜单，从而获得纯粹的仪表板体验。

> The one disappointment is that the TV remote can’t control the dashboard over HDMI, so on the TV it’s for looking, not touching. Funnily enough, that worked in my favour. Remember how this all started, with nobody in the family wanting to use the Home Assistant app? Once the dashboard was on the TV, they installed the app on their phones or bookmarked the dashboard on their computers, so they could actually tap things. The individual floor views work well on a phone, while the full view needs at least a laptop-sized screen.



唯一让人失望的是，电视遥控器无法通过 HDMI 控制仪表盘，因此在电视上它只能看，无法触控。有趣的是，这反而成全了我。还记得这一切是怎么开始的吗？起初家里没人愿意使用 Home Assistant 应用。自从把仪表盘放到电视上之后，他们要么在手机上安装了应用，要么在电脑上将仪表盘加入书签，这样才能真正动手操作。单独楼层的视图在手机上效果不错，而完整视图则至少需要笔记本大小的屏幕。

> For now, I’m happy with the arrangement: the whole house at a glance on the TV, and the app for when I need to change something.

目前，我对这个安排很满意：电视上可以一眼看到整个房子，手机 App 则可以在需要修改时随时使用。

> *Dashboard illustrations by [Owen Yeconiel](https://linktr.ee/owenyeconiel).*

由 [Owen Yeconiel](https://linktr.ee/owenyeconiel) 绘制的仪表盘插图。

> [^1]: That was the state of guides and articles when I was researching this, in May 2026. Even then, people were posting impressive dashboards on Reddit, and there is now far more written about building 3D and 3D-style dashboards, including handing most of the work to AI tools.

[^1]: 那是我在研究时的情况，那时是 2026 年 5 月。当时，人们 在 Reddit 上发布了令人印象深刻的仪表板，而现在关于构建 3D 和 3D-style 仪表板的内容远多了，包括将大部分工作交给 AI 工具。
