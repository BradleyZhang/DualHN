---
title: '车库门垃圾信息'
date: 2026-11-20T10:48:57+08:00
draft: false
source: "Hacker News"
originalTitle: 'Garage Door Spam'
originalUrl: "https://blog.harrison.page/garage-door-spam/"
hnUrl: ""
points: 
comments: 
---

> In the beginning, my garage door opener worked fine. When the door opened or closed, I would get a notification. If I'm away from home and the door opens, something weird is going down. The "myQ" app generally worked although it was encrusted with ads:

起初，我的车库门开启器运行良好。当门打开或关闭时，我会收到通知。如果我不在家时门打开了，那就不对劲了。myQ app 总体还能用，尽管它充斥着广告：

![Screenshot 2026-10-16 at 14](https://bear-images.sfo2.cdn.digitaloceanspaces.com/harrisonpage/25-1.webp)

> I continued using it because I trusted that notifications were meaningful...

我继续使用它，是因为我相信通知是有意义的……

> ...until recently (October 2026):

……直到最近（2026 年 10 月）：

![Screenshot 2026-10-16 at 13](https://bear-images.sfo2.cdn.digitaloceanspaces.com/harrisonpage/45-1.webp)

> This is un-fucking-acceptable. As in, absolutely fucking not.

这他妈的不可接受。我的意思是，他妈的绝对不可能。

> The manufacturer (Chamberlain) cut off third-party access to its APIs (via myQ) in late 2023. In response, I purchased a pair of [ratgdo32](https://ratcloud.llc/products/ratgdo32) devices to opt out of the bullshit.

制造商（Chamberlain）于 2023 年末切断了第三方对其 API 的访问（通过 myQ）。作为回应，我购买了一对 [ratgdo32](https://ratcloud.llc/products/ratgdo32) 设备，以摆脱这套破事。

> > ratgdo is a WiFi control board for your garage door opener that works over your local network using ESP Home or HomeKit

ratgdo 是一款用于车库门开门器的 WiFi 控制板，可通过 ESP Home 或 HomeKit 在本地网络上运行。

> The device is a ~$62 board from ratcloud llc running open-source firmware that wires to the opener's existing terminals and speaks LiftMaster's Security+ 2.0 protocol locally.

该设备是来自 ratcloud llc 的一款约 62 美元的板卡，运行开源固件，可连接到开门器的现有端子，并本地支持 LiftMaster 的 Security+ 2.0 协议。

![order](https://bear-images.sfo2.cdn.digitaloceanspaces.com/harrisonpage/order.webp)

> These were easy enough to hook up. I won't reproduce the instructions here.

这些接入起来足够容易。我不会在这里重复说明。

> The bundle included six black wires, an auxiliary harness I didn’t need.

这个包裹里有六根黑色的电线，还有一个我不需要的辅助配套。

![bundle](https://bear-images.sfo2.cdn.digitaloceanspaces.com/harrisonpage/bundle.webp)

> My router hands each board a fixed address at 192.168.0.192 and 192.168.0.245. Apple's HomeKit just worked and I'm able to control them with voice commands: “Hey Siri, open Door 1”

我的路由器为每块板卡分配了固定地址 192.168.0.192 和 192.168.0.245。Apple 的 HomeKit 直接就能用，我可以用语音命令控制它们：“Hey Siri, open Door 1”

![homekit](https://bear-images.sfo2.cdn.digitaloceanspaces.com/harrisonpage/homekit.webp)

> The devices have their own web interface:

这些设备拥有各自的 Web 界面：

![xratgdo](https://bear-images.sfo2.cdn.digitaloceanspaces.com/harrisonpage/xratgdo.webp)

> When I was growing up, my father wired a mercury switch onto our garage door that lit up a light in the hallway when we'd left the garage door open. This was a valuable signal that helped our family avoid accidentally leaving the door open overnight. Since the ratgdo32 has a JSON status endpoint, I was able to rebuild Dad's solution in software with Slack:

在我成长过程中，我父亲在我们的车库门上接了一个汞开关，当我们把车库门留开时，走廊里的灯就会亮起。这是一个有价值的信号，帮助我们的家人避免不小心让门整夜敞开。由于 ratgdo32 有一个 JSON 状态端点，我能够用 Slack 在软件中重建爸爸的解决方案：

![Screenshot 2026-11-01 at 12](https://bear-images.sfo2.cdn.digitaloceanspaces.com/harrisonpage/17-1.webp)

> The script runs at night checking for an open door:

脚本在夜间检查门是否已打开：

```
*/10 21-23,0-5 * * *  garage-watch
```

> The repo maintainer made my day when I submitted a [tiny pull request](https://github.com/ratgdo/homekit-ratgdo32/pull/233): "Simple and useful. Happy to merge this. Thank you."

当我提交了一个 [tiny pull request](https://github.com/ratgdo/homekit-ratgdo32/pull/233) 时，仓库维护者让我特别开心：“简单而实用。很乐意合并。谢谢你。”

> Both boards are now reachable over my Tailscale network, so my monitoring software can load /healthcheck. This required a custom route:

两块板现在可以通过我的 Tailscale 网络，因此我的监控软件可以加载 /healthcheck。 这需要一个自定义路由 ：

```
/Applications/Tailscale.app/Contents/MacOS/Tailscale set \
  --advertise-routes=192.168.0.192/32,192.168.0.245/32
```

> After approving the route, my monitoring software can verify the hardware is working.

路由获批后，我的监控软件可验证硬件是否正常运行。

> Everything runs locally with no cloud, and notifications now say who opened the door which myQ never did.

一切都在本地运行，无需云，通知现在会说明是谁打开了门，而 myQ 从未做到过。

> To anyone at Chamberlain responsible for myQ, I offer my sincerest Fuck You.

致 Chamberlain 负责 myQ 的所有人：我向你们表露最真挚的“Fuck You”。
