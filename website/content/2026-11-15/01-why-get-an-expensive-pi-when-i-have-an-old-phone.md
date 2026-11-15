---
title: '既然有旧手机，何必买昂贵的树莓派？'
date: 2026-11-15T09:03:49+08:00
draft: false
source: "Hacker News"
originalTitle: 'Why get an expensive Pi when I have an old phone?'
originalUrl: "https://so.long.thanks.fish/why-pi-when-i-have-an-old-phone/"
hnUrl: ""
points: 
comments: 
---

![Rooted Redmi 13C 5G running the Moth Rig app, connected by USB-C to a controller for an LED strip](https://so.long.thanks.fish/why-pi-when-i-have-an-old-phone/redmi-leds-1200.webp)

> The rooted Redmi talking over USB-C to the LED controller.

已 Root 的 Redmi 通过 USB-C 与 LED 控制器通信。

> I’m working on a project that needs a high resolution camera, GPS, storage, and a microcontroller to control some lights. (More on the project soon!) I’ve been designing PCB adapters around a Raspberry Pi, an Arducam 64MP camera, and a GPS module. Every time I add another part, the bill grows.



我正在开展一个项目，需要高分辨率相机、 GPS、 存储和一个用于控制某些灯光的微控制器。（关于该项目的更多内容即将分享！）我一直在围绕 Raspberry Pi、 Arducam 64MP 相机和 GPS 模块设计 PCB 适配器。每添加一个部件，账单就会变长。

> I’m also trying an ESP32-P4 board, which will get its own post soon. But the alternative I keep coming back to is an old smartphone.

我还在尝试 ESP32-P4 开发板，很快会有专门的文章。但我一直回想的另一种选择是一部旧智能手机。

> I have a Redmi 13C 5G and a Huawei Mate 30 5G. Phones like these turn up second hand on Taobao for roughly **¥300–500 (£33–56 / €40–67 / $45–75)**. The Redmi gives me a camera that saves 50MP JPEGs; the Mate 30 has a 40MP main camera and a telephoto lens. Both already contain GPS, storage, a clock, a battery, mobile data, and a touchscreen. Their USB-C ports give me a route to the PCB that will handle the lights and other sensors.

我有一部 Redmi 13C 5G 和一部 Huawei Mate 30 5G。这些手机在淘宝二手市场上约 **¥ 300–500 (£ 33–56 / € 40–67 / $ 45–75)** 售卖。Redmi 的相机可保存 50MP JPEGs；Mate 30 配备 40MP 主摄和一颗长焦镜头。两者均已包含 GPS、存储、时钟、电池、移动数据和触摸屏。它们的 USB-C 接口为我提供通往 PCB 的途径，该 PCB 将控制灯光和其他传感器。

> Here is the rough parts comparison I made while deciding what to build next:

以下是我在决定下一步构建什么时所做的粗略部件对比：

> | What I need | Used Redmi or Mate 30 | Raspberry Pi 4 approach |
> | --- | --- | --- |
> | Computer | Included in phone price | [Pi 4, 4GB](https://mall.dfrobot.com.cn/goods-1977.html): ¥880 / £98 / €118 / $132 |
> | High resolution camera | Redmi 50MP JPEG; Mate 30 40MP | [Arducam 64MP](https://www.arducam.com/arducam-1-1-32-64mp-autofocus-camera-module-for-raspebrry-pi.html): ~¥400 / £45 / €53 / $60 |
> | GPS | Included | [GPS HAT](https://www.waveshare.com/product/ai/expansions/l76k-gps-hat.htm): ~¥153 / £17 / €20 / $23 |
> | Storage | Built in | [64GB microSD](https://www.microsoftstore.com.cn/hidden/sandisk-tf-card-64gb): ~¥50 / £6 / €7 / $7 |
> | Core total | ¥300–500 / £33–56 / €40–67 / $45–75 | ~¥1,483 / £165 / €198 / $222 |
> | Clock | Included | [RTC HAT](https://www.waveshare.com/product/modules/others/rtc.htm): ~¥80 / £9 / €11 / $12 |
> | Battery backup | Included | [UPS HAT](https://www.waveshare.com/product/ups-hat.htm): ~¥133 / £15 / €18 / $20, plus cells |
> | Touch display | Included | [5″ touchscreen](https://www.waveshare.com/product/displays/5-dsi-touch-b.htm): ~¥247 / £28 / €33 / $37 |
> | Mobile data | Built in, with a SIM | [4G HAT](https://www.waveshare.com/sim7600ce-4g-hat.htm): ~¥527 / £59 / €70 / $79 |
> | More fully equipped total | ¥300–500 / £33–56 / €40–67 / $45–75 | ~¥2,317 / £258 / €310 / $347, plus batteries |

| 需要 | Redmi 或 Mate 30 使用 | Raspberry Pi 4 方法 |
|------|----------------------|---------------------|
| 电脑 | 已包含在手机价格中 | [Pi 4, 4GB](https://mall.dfrobot.com.cn/goods-1977.html): ¥880 / £98 / €118 / $132 |
| 高分辨率相机 | Redmi 50MP JPEG; Mate 30 40MP | [Arducam 64MP](https://www.arducam.com/arducam-1-1-32-64mp-autofocus-camera-module-for-raspebrry-pi.html): ~¥400 / £45 / €53 / $60 |
| GPS | 已包含 | [GPS HAT](https://www.waveshare.com/product/ai/expansions/l76k-gps-hat.htm): ~¥153 / £17 / €20 / $23 |
| 存储 | 自带 | [64GB microSD](https://www.microsoftstore.com.cn/hidden/sandisk-tf-card-64gb): ~¥50 / £6 / €7 / $7 |
| 核心总价 | ¥300–500 / £33–56 / €40–67 / $45–75 | ~¥1,483 / £165 / €198 / $222 |
| 时钟 | 已包含 | [RTC HAT](https://www.waveshare.com/product/modules/others/rtc.htm): ~¥80 / £9 / €11 / $12 |
| 电池备用 | 已包含 | [UPS HAT](https://www.waveshare.com/product/ups-hat.htm): ~¥133 / £15 / €18 / $20, plus cells |
| 触摸显示屏 | 已包含 | [5″ touchscreen](https://www.waveshare.com/product/displays/5-dsi-touch-b.htm): ~¥247 / £28 / €33 / $37 |
| 移动数据 | 内置并配有SIM | [4G HAT](https://www.waveshare.com/sim7600ce-4g-hat.htm): ~¥527 / £59 / €70 / $79 |
| 更全面配置总价 | ¥300–500 / £33–56 / €40–67 / $45–75 | ~¥2,317 / £258 / €310 / $347, plus batteries |

> These are illustrative November 2026 listings. The more fully equipped Pi total uses the cellular HAT’s GPS instead of buying the separate GPS HAT; its modem is 4G, while the phones are 5G models. Neither side includes my custom light controller PCB, a SIM or data plan, or an enclosure. The conversions use 10 November 2026 mid market rates of approximately ¥1 = [£0.111531](https://www.xe.com/currencyconverter/convert/?Amount=1&From=CNY&To=GBP) / [€0.133643](https://www.xe.com/currencyconverter/convert/?Amount=1&From=CNY&To=EUR) / [$0.14991](https://www.xe.com/currencyconverter/convert/?Amount=1&From=CNY&To=USD), rounded to whole units in the table.

以下是 2026 年 11 月 的 示例列表。更完整配置的 Pi total 使用了 cellular HAT’s GPS，而不是购买 separate GPS HAT；它的 modem 是 4G，而手机是 5G 模型。两边都没有我自定义的 light controller PCB、SIM 或 data plan，或一个 enclosure。换算使用 2026 年 11 月 10 日的 mid market rates，约为 ¥1 = [£0.111531](https://www.xe.com/currencyconverter/convert/?Amount=1&From=CNY&To=GBP) / [€0.133643](https://www.xe.com/currencyconverter/convert/?Amount=1&From=CNY&To=EUR) / [$0.14991](https://www.xe.com/currencyconverter/convert/?Amount=1&From=CNY&To=USD)，四舍五入到整单位在表格中。

> The phone is already becoming more than a price exercise. I’ve unlocked and rooted the Redmi, tested its camera, and got it sleeping and waking for scheduled work. I can plug it into my computer and have Codex configure and test the pieces I need. The Huawei is harder to root, but I can still run a kiosk app on it. I’ve made a stand to photograph the same target with the Redmi and Arducam side by side; I want to see what detail each camera actually captures. A 50MP JPEG file does not, by itself, settle that question.

手机已经不再仅仅是一次价格实验。我已经解锁并 root 了 Redmi ，测试了它的相机 ，并且让它进入睡眠和唤醒状态以进行计划工作。Huawei 更难 root ，但我仍可在其上运行一个 kiosk 应用。我安排了一个站位，用 Redmi 和 Arducam 并排拍摄同一目标；我想看看每台相机实际捕捉到的细节。一个 50MP JPEG 文件本身并不能解决这个问题。

> The open question is supply. Finding two good used phones is easy; finding a few hundred matching ones, with healthy batteries and predictable camera behaviour, would take more work. I feel increasingly confident that it’s possible.

待解决的关键问题是供应。寻找两部成色良好的二手手机易如反掌；但要寻得几百部型号一致、电池健康且摄像头表现可预期的设备，则需要投入大量精力。我对此越来越有信心。

> This could be useful well beyond the current project. For digital artworks and installations, we’ve often used a Pi or a Mac mini. Imagine instead posting a client a configured phone: plug it into the display and it runs. With mobile data and remote access, I can fix something without asking a gallery for Wi-Fi privileges or an open port.

这可能远超当前项目的效用。对于数字艺术品和装置，我们常使用 Pi 或 Mac mini。想象一下，直接向客户寄送一台配置好的手机：插入显示器后即可运行。借助移动数据和远程访问，我无需向画廊请求 Wi-Fi 特权或开放端口即可修复问题。

> There’s something fun about taking a device made in enormous numbers, giving it a second life, and finding that most of the hardware I was about to assemble is already inside it.

把一台产量巨大的设备改造成另一种用途、让它重获新生，却发现我原本准备组装的硬件大部分早已装在它里面 —— 这件事挺有意思。
