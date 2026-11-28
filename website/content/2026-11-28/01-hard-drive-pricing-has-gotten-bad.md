---
title: '硬盘定价已经变得很差了。'
date: 2026-11-28T11:19:08+08:00
draft: false
source: "Hacker News"
originalTitle: 'Hard Drive pricing has gotten bad.'
originalUrl: "https://blog.ktz.me/black-friday-hard-drive-prices-are-messed-up/"
hnUrl: ""
points: 
comments: 
---

> For years now, I’ve made it an annual tradition to replace one or two hard drives on Black Friday. I typically run around ten physical disks, and swapping a couple out each year means I almost never have a drive older than five years in my systems. I’ve even previously made videos about [shucking disks around this time of year](https://www.youtube.com/watch?v=c2mvIbY9n28).

多年来，我已经养成一个年度传统：在 Black Friday 更换一两块硬盘。我通常运行大约十块物理磁盘，每年换掉其中几块，意味着我的系统里几乎从未有过使用超过五年的硬盘。我甚至之前还做过关于[每年这个时候拆解硬盘（shucking disks）](https://www.youtube.com/watch?v=c2mvIbY9n28)的视频。

> But current hardware pricing is totally screwed. So what is a lifelong self-hoster to do in times like these? With disk capacities increasing massively over the last 10 years I can now fit 20TB per slot. This means I could realistically go from ten spinners to five, and not really feel it too acutely. This will mean redoing my zpool layouts, which in turn means shuffling some data around as ZFS doesn’t like changes to the layout of existing pools. But, at these prices, I’m starting to think the hassle might be worth it.

但目前的硬件定价完全乱套了。那么，作为一名终身自托管爱好者，在这样的时期该何去何从？随着过去 10 年硬盘容量的大幅增长，我现在每个插槽能装下 20TB。这意味着我实际上可以把十块机械硬盘减到五块，且体感差异不大。这将涉及重做 zpool 布局，进而需要搬运一些数据，因为 ZFS 不喜欢对现有池的布局进行更改。但按这些价格来看，我开始觉得这麻烦可能值得折腾一番。

> Let’s take a look at disk prices over the past 8 years in today’s post.

让我们在本文中回顾过去 8 年的磁盘价格。

> The 20TB WD EasyStore I bought for **$249.99** in November 2024 is, today, on sale, **$549.99** this Black Friday. $300 more than 2 years ago for the same product, from the same store. It shows just how bad hard drive pricing has gotten ([BestBuy 20TB listing](https://www.bestbuy.com/product/wd-easystore-20tb-external-usb-3-0-hard-drive-black/6500985)).

我在 2024 年 11 月以 **$249.99** 购买的 20TB WD EasyStore，今天 Black Friday 售价 **$549.99**。比 2 年前同一产品、同一商店贵了 $300。这说明硬盘定价已经有多糟糕（[BestBuy 20TB 产品页面](https://www.bestbuy.com/product/wd-easystore-20tb-external-usb-3-0-hard-drive-black/6500985)）。

<svg role="img" aria-labelledby="price-per-tb-title price-per-tb-desc" viewBox="0 0 560 261" style="display:block;width:100%;height:auto"><title id="price-per-tb-title">What a terabyte cost me</title> <desc id="price-per-tb-desc">Nov 2018 (10TB), $18.00 per TB; Oct 2020 (12TB), $14.58 per TB; Nov 2021 (14TB), $14.29 per TB; May 2022 (14TB), $17.86 per TB; Aug 2022 (14TB), $17.14 per TB; Oct 2023 (18TB), $11.11 per TB; Nov 2024 (20TB), $12.50 per TB; May 2025 (20TB), $14.00 per TB; Nov 2026 (20TB), $27.50 per TB</desc> <g font-family="system-ui, sans-serif" fill="currentColor" font-size="13"><text x="12" y="23" font-size="18" font-weight="700">What a terabyte cost me</text> <path d="M52 224 H514" stroke="currentColor" opacity=".18"></path><text x="43" y="228" text-anchor="end">$0</text> <path d="M52 164 H514" stroke="currentColor" opacity=".18"></path><text x="43" y="168" text-anchor="end">$10</text> <path d="M52 104 H514" stroke="currentColor" opacity=".18"></path><text x="43" y="108" text-anchor="end">$20</text> <path d="M52 44 H514" stroke="currentColor" opacity=".18"></path><text x="43" y="48" text-anchor="end">$30</text> <text x="52.0" y="247" text-anchor="middle">2018</text> <text x="144.0" y="247" text-anchor="middle">2020</text> <text x="255.7" y="247" text-anchor="middle">2022</text> <text x="367.6" y="247" text-anchor="middle">2024</text> <text x="502.0" y="247" text-anchor="middle">2026</text> <polyline points="52.0,116.0 159.9,136.5 218.7,138.3 247.9,116.8 264.8,121.2 329.8,157.3 389.5,149.0 414.8,140.0" fill="none" stroke="currentColor" stroke-width="2"></polyline><polyline points="414.8,140.0 502.0,59.0" fill="none" stroke="#c2410c" stroke-width="2" stroke-dasharray="5 5"></polyline><circle cx="52.0" cy="116.0" r="4.5" fill="currentColor"><title>Nov 2018 (10TB) · $18.00/TB</title></circle> <circle cx="159.9" cy="136.5" r="4.5" fill="currentColor"><title>Oct 2020 (12TB) · $14.58/TB</title></circle> <circle cx="218.7" cy="138.3" r="4.5" fill="currentColor"><title>Nov 2021 (14TB) · $14.29/TB</title></circle> <circle cx="247.9" cy="116.8" r="4.5" fill="currentColor"><title>May 2022 (14TB) · $17.86/TB</title></circle> <circle cx="264.8" cy="121.2" r="4.5" fill="currentColor"><title>Aug 2022 (14TB) · $17.14/TB</title></circle> <circle cx="329.8" cy="157.3" r="4.5" fill="currentColor"><title>Oct 2023 (18TB) · $11.11/TB</title></circle> <circle cx="389.5" cy="149.0" r="4.5" fill="currentColor"><title>Nov 2024 (20TB) · $12.50/TB</title></circle> <circle cx="414.8" cy="140.0" r="4.5" fill="currentColor"><title>May 2025 (20TB) · $14.00/TB</title></circle> <circle cx="502.0" cy="59.0" r="4.5" fill="#c2410c"><title>Nov 2026 (20TB) · $27.50/TB</title></circle> <text x="52.0" y="105.0" text-anchor="start" font-weight="650">$18.00 (10TB)</text> <text x="329.8" y="178.3" text-anchor="middle" font-weight="650">$11.11 (18TB)</text> <text x="502.0" y="47.0" text-anchor="end" font-weight="650">$27.50 (20TB)</text></g></svg>

> Price per TB before tax.

税前每 TB 价格

> Shucking is homelab speak for taking a perfectly good external drive out of its USB enclosure and sticking the SATA drive in your server. At $12.50/TB it was a fantastically affordable way to get massive amounts of storage. At $27.50/TB, absolutely not.

Shucking 是 (homelab) 的俗称，指从 USB 外壳中取出一块原本完好的外部硬盘，并将其装入服务器上的 SATA 硬盘。$12.50/TB 在当时非常划算，能以极低的价格获得大量存储空间；而 $27.50/TB 则绝对不行。

> ## I dug through my receipts

## 我翻遍了我的收据

> In November 2018 I bought five 10TB EasyStores for $179.99 each. At the time I wrote about doing the rounds of my local Best Buys to pickup more drives on Black Friday as quantities were limited at each location ([My 2018 server build log](https://blog.ktz.me/new-server-build-log/)).

2018 年 11 月，我以每个 $179.99 的价格购买了 5 个 10TB EasyStores。当时我曾写过在当地多家 Best Buy 门店跑一趟，以便在黑色星期五入手更多硬盘，因为每个地点的数量都有限制（[我的 2018 服务器组装日志](https://blog.ktz.me/new-server-build-log/)）。

> | Order date | Drives | Each | $/TB |
> | --- | --- | --- | --- |
> | Nov 8, 2018 | 5 × 10TB | $179.99 | $18.00 |
> | Oct 13, 2020 | 2 × 12TB | $174.99 | $14.58 |
> | Nov 1, 2021 | 2 × 14TB | $199.99 | $14.29 |
> | May 11, 2022 | 1 × 14TB | $249.99 | $17.86 |
> | Aug 29, 2022 | 1 × 14TB | $239.99 | $17.14 |
> | Oct 28, 2023 | 3 × 18TB | $199.99 | **$11.11** |
> | Nov 21, 2024 | 1 × 20TB | $249.99 | $12.50 |
> | May 5, 2025 | 1 × 20TB | $279.99 | $14.00 |

| 购买日期 | 硬盘 | 单价 | $/TB |
| --- | --- | --- | --- |
| Nov 8, 2018 | 5 × 10TB | $179.99 | $18.00 |
| Oct 13, 2020 | 2 × 12TB | $174.99 | $14.58 |
| Nov 1, 2021 | 2 × 14TB | $199.99 | $14.29 |
| May 11, 2022 | 1 × 14TB | $249.99 | $17.86 |
| Aug 29, 2022 | 1 × 14TB | $239.99 | $17.14 |
| Oct 28, 2023 | 3 × 18TB | $199.99 | **$11.11** |
| Nov 21, 2024 | 1 × 20TB | $249.99 | $12.50 |
| May 5, 2025 | 1 × 20TB | $279.99 | $14.00 |

> October 2023 was my best haul on a per-TB basis. Three 18TB drives put 54TB in my hands for $599.97. This year’s “deal” is fifty bucks shy of that *entire order*. Best Buy was still advertising those 18TB drives for $199.99 in November 2023. [November 2023 deal archive](https://slickdeals.net/f/17069239-18tb-wd-easystore-usb-3-0-external-hard-drive-200-free-store-pickup)

2023 年 10 月是我按每 TB（TB）计算的最佳买单。 三台 18 TB 硬盘共计 54 TB，我付了 599.97 美元。这年的“优惠”比这整批订单少 50 美元。 Best Buy 在 2023 年 11 月仍在宣传那款 18 TB 硬盘的价格为 199.99 美元。 [November 2023 deal archive](https://slickdeals.net/f/17069239-18tb-wd-easystore-usb-3-0-external-hard-drive-200-free-store-pickup)

<svg role="img" aria-labelledby="same-drive-price-title same-drive-price-desc" viewBox="0 0 560 184" style="display:block;width:100%;height:auto"><title id="same-drive-price-title">Same 20TB drive, three prices</title> <desc id="same-drive-price-desc">November 2024 purchase, $249.99. May 2025 purchase, $279.99. November 2026 listing, $549.99.</desc> <g font-family="system-ui, sans-serif" fill="currentColor" font-size="13"><text x="12" y="23" font-size="18" font-weight="700">Same 20TB drive, three prices</text> <path d="M157 40 V151" stroke="currentColor" opacity=".18"></path><text x="157" y="171" text-anchor="middle">$0</text> <path d="M241 40 V151" stroke="currentColor" opacity=".18"></path><text x="241" y="171" text-anchor="middle">$150</text> <path d="M325 40 V151" stroke="currentColor" opacity=".18"></path><text x="325" y="171" text-anchor="middle">$300</text> <path d="M409 40 V151" stroke="currentColor" opacity=".18"></path><text x="409" y="171" text-anchor="middle">$450</text> <path d="M493 40 V151" stroke="currentColor" opacity=".18"></path><text x="493" y="171" text-anchor="middle">$600</text> <text x="12" y="62">Nov 2024 purchase</text> <path d="M157 58 H493" stroke="currentColor" opacity=".18"></path><circle cx="297.0" cy="58" r="6" fill="currentColor"></circle><text x="307.0" y="62" font-weight="650">$249.99</text> <text x="12" y="102">May 2025 purchase</text> <path d="M157 98 H493" stroke="currentColor" opacity=".18"></path><circle cx="313.8" cy="98" r="6" fill="currentColor"></circle><text x="323.8" y="102" font-weight="650">$279.99</text> <text x="12" y="142">Nov 2026 listing</text> <path d="M157 138 H493" stroke="currentColor" opacity=".18"></path><circle cx="465.0" cy="138" r="6" fill="#c2410c"></circle><text x="475.0" y="142" font-weight="650">$549.99</text></g></svg>

> WD EasyStore 20TB, SKU 6500985. Prices are before tax.

WD EasyStore 20TB，SKU 6500985。价格均为税前价格。

> ## What about ServerPartDeals?

## ServerPartDeals 有什么？

> Buying refurbished or recertified enterprise drives used to be an easy way to bring the cost down. In August 2024 I bought four recertified 14TB Ultrastars from ServerPartDeals for **$529.96 before tax**. That was 56TB at **$9.46/TB**, even cheaper than the EasyStores and no shucking to do.

购买翻新或再认证的企业级硬盘过去是降低成本的一种简便方式。2024年8月我购买了四块再认证的 14 TB Ultrastars 来自 ServerPartDeals 的 **$529.96 before tax**。这就是说 56 TB at **$9.46/TB**, 甚至比 EasyStores 便宜，而且无需 shucking。

<svg role="img" aria-labelledby="spd-price-title spd-price-desc" viewBox="0 0 480 359" style="display:block;width:100%;height:auto"><title id="spd-price-title">ServerPartDeals price per TB</title> <desc id="spd-price-desc">Ultrastar 14TB 4Kn, 2024: $9.29 per TB, 2026: $14.64 per TB, sold out. Ultrastar 14TB 512e, 2024: $9.64 per TB, 2026: $30.64 per TB, sold out. Exos X20 20TB, 2024: $11.80 per TB, 2026: $29.45 per TB, in stock. Exos X22 20TB, 2024: $11.25 per TB, 2026: $32.45 per TB, sold out.</desc> <defs><pattern id="spd-sold-out" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V6" stroke="currentColor" stroke-width="3"></path></pattern></defs><g font-family="system-ui, sans-serif" fill="currentColor" font-size="13"><text x="12" y="22" font-size="18" font-weight="700">ServerPartDeals price per TB</text> <text x="12" y="43">2024 order (top) · Nov 2026 listing (bottom)</text> <path d="M12 57 V325" stroke="currentColor" opacity=".15"></path><text x="12" y="345" text-anchor="middle">$0</text> <path d="M58.5 57 V325" stroke="currentColor" opacity=".15"></path><text x="58.5" y="345" text-anchor="middle">$5</text> <path d="M105 57 V325" stroke="currentColor" opacity=".15"></path><text x="105" y="345" text-anchor="middle">$10</text> <path d="M151.5 57 V325" stroke="currentColor" opacity=".15"></path><text x="151.5" y="345" text-anchor="middle">$15</text> <path d="M198 57 V325" stroke="currentColor" opacity=".15"></path><text x="198" y="345" text-anchor="middle">$20</text> <path d="M244.5 57 V325" stroke="currentColor" opacity=".15"></path><text x="244.5" y="345" text-anchor="middle">$25</text> <path d="M291 57 V325" stroke="currentColor" opacity=".15"></path><text x="291" y="345" text-anchor="middle">$30</text> <path d="M337.5 57 V325" stroke="currentColor" opacity=".15"></path><text x="337.5" y="345" text-anchor="middle">$35</text> <text x="12" y="72" font-weight="700">Ultrastar 14TB 4Kn</text> <rect x="12" y="79" width="86.4" height="11" rx="2" fill="currentColor" opacity=".48"></rect><text x="105.4" y="89">$9.29</text> <rect x="12" y="97" width="136.2" height="11" rx="2" fill="url(#spd-sold-out)" opacity="1"></rect><text x="155.2" y="107">$14.64 · Sold out</text> <text x="12" y="137" font-weight="700">Ultrastar 14TB 512e</text> <rect x="12" y="144" width="89.7" height="11" rx="2" fill="currentColor" opacity=".48"></rect><text x="108.7" y="154">$9.64</text> <rect x="12" y="162" width="285.0" height="11" rx="2" fill="url(#spd-sold-out)" opacity="1"></rect><text x="304.0" y="172">$30.64 · Sold out</text> <text x="12" y="202" font-weight="700">Exos X20 20TB</text> <rect x="12" y="209" width="109.7" height="11" rx="2" fill="currentColor" opacity=".48"></rect><text x="128.7" y="219">$11.80</text> <rect x="12" y="227" width="273.9" height="11" rx="2" fill="#c2410c" opacity="1"></rect><text x="292.9" y="237">$29.45 · In stock</text> <text x="12" y="267" font-weight="700">Exos X22 20TB</text> <rect x="12" y="274" width="104.6" height="11" rx="2" fill="currentColor" opacity=".48"></rect><text x="123.6" y="284">$11.25 · refunded</text> <rect x="12" y="292" width="301.8" height="11" rx="2" fill="url(#spd-sold-out)" opacity="1"></rect><text x="320.8" y="302">$32.45 · Sold out</text></g></svg>

> US dollars per TB. Hatched bars mark equivalent sold-out listings as of Nov 2026.

美元每 TB. 斜条表示等同的售罄列表截至2026年11月.

> | Drive | 2024 price per drive | Nov 26, 2026 listing | Change per TB |
> | --- | --- | --- | --- |
> | WD Ultrastar HC530 14TB 4Kn, recertified (`WUH721414ALN604`) | $129.99 · $9.29/TB | $204.99 · $14.64/TB · [Sold out](https://serverpartdeals.com/products/western-digital-ultrastar-dc-hc530-wuh721414aln604-0f31102-14tb-7-2k-rpm-sata-6gb-s-4kn-3-5-recertified-hard-drive) | +58% |
> | WD Ultrastar HC530 14TB 512e, recertified (`WUH721414ALE6L4`) | $134.99 · $9.64/TB | $429.00 · $30.64/TB · [Sold out](https://serverpartdeals.com/collections/western-digital-recertified-all-caps/products/western-digital-ultrastar-dc-hc530-wuh721414ale6l4-0f31284-14tb-7-2k-rpm-sata-6gb-s-512e-512mb-3-5-se-manufacturer-recertified-hdd) | +218% |
> | Seagate Exos X20 20TB, refurbished (`ST20000NM007D`) | $235.94 · $11.80/TB | $589.00 · $29.45/TB · [In stock](https://serverpartdeals.com/collections/sata/products/seagate-exos-x20-st20000nm007d-20tb-7-2k-rpm-sata-6gb-s-3-5-refurbished-hdd) | +150% |
> | Seagate Exos X22 20TB, recertified (`ST20000NM004E`) | $224.99 · $11.25/TB · later refunded | $649.00 · $32.45/TB · [Sold out](https://serverpartdeals.com/collections/20tb-to-30tb-hard-drives) | +188% |

| 驱动器 | 2024 年每盘价格 | 2026 年 11 月 26 日出售 | 每 TB 变化 |
|---|---|---|---|
| WD Ultrastar HC530 14TB 4Kn, recertified (`WUH721414ALN604`) | $129.99 · $9.29/TB | $204.99 · $14.64/TB · [售罄](https://serverpartdeals.com/products/western-digital-ultrastar-dc-hc530-wuh721414aln604-0f31102-14tb-7-2k-rpm-sata-6gb-s-4kn-3-5-recertified-hard-drive) | +58% |
| WD Ultrastar HC530 14TB 512e, recertified (`WUH721414ALE6L4`) | $134.99 · $9.64/TB | $429.00 · $30.64/TB · [售罄](https://serverpartdeals.com/collections/western-digital-recertified-all-caps/products/western-digital-ultrastar-dc-hc530-wuh721414ale6l4-0f31284-14tb-7-2k-rpm-sata-6gb-s-512e-512mb-3-5-se-manufacturer-recertified-hdd) | +218% |
| Seagate Exos X20 20TB, refurbished (`ST20000NM007D`) | $235.94 · $11.80/TB | $589.00 · $29.45/TB · [库存](https://serverpartdeals.com/collections/sata/products/seagate-exos-x20-st20000nm007d-20tb-7-2k-rpm-sata-6gb-s-3-5-refurbished-hdd) | +150% |
| Seagate Exos X22 20TB, recertified (`ST20000NM004E`) | $224.99 · $11.25/TB · 后续退款 | $649.00 · $32.45/TB · [售罄](https://serverpartdeals.com/collections/20tb-to-30tb-hard-drives) | +188% |

> The sad truth is that across the board prices are up a minimum of 58%, and sometimes as much as 218% in just a year or two.

令人沮丧的事实是，全线价格至少上涨了 58%，有时在短短一两年内涨幅甚至高达 218%。

> ## How we got down to three HDD makers

## 我们是如何只剩下三家 HDD 制造商

> When the EasyStore is that bad, my first instinct is to shop around. Maybe I should try another retailer (to be clear I’m not blaming BestBuy for any of this), buy an enterprise drive, see what’s available recertified. But follow those listings back to the companies that actually make the drives and the choices narrow pretty quickly. There are three big HDD makers left. How did we end up with so few?

当 EasyStore 那么糟糕时，我的第一反应是货比三家。也许我应该尝试另一家零售商（声明一下，我并不是在怪 BestBuy 为此负责），购买一款企业级硬盘（enterprise drive），看看有哪些翻新产品可用。但如果顺着这些商品列表追溯到实际制造硬盘的公司，可选选项就会迅速缩小。目前还剩下三家主要的 HDD 厂商。我们怎么会落得只剩这么几家？

> Maxtor bought Quantum’s hard drive business in 2001, then Seagate bought Maxtor in 2006. Hitachi combined IBM’s disk business with its own to form HGST in 2003, and Toshiba bought Fujitsu’s HDD business in 2009. Seagate bought Samsung’s HDD business in December 2011, and Western Digital bought HGST in March 2012. The FTC required WD to sell desktop-drive manufacturing assets to Toshiba to keep a third supplier in that market. That left Seagate, Western Digital and Toshiba.

Maxtor 于 2001 年收购了 Quantum 的硬盘业务，随后 Seagate 在 2006 年收购了 Maxtor 。 Hitachi 在 2003 年将 IBM 的磁盘业务与其自身合并成立 HGST ，Toshiba 在 2009 年收购了 Fujitsu 的 HDD 业务。Seagate 在 2011 年 12 月收购了 Samsung 的 HDD 业务，Western Digital 在 2012 年 3 月收购了 HGST 。 FTC 要求 WD 必须向 Toshiba 出售 desktop-drive 生产资产，以保持该市场的第三家供应商 。 此举使得 Seagate 、Western Digital 和 Toshiba 成为仅存的三家公司 。

<svg role="img" aria-labelledby="hdd-consolidation-title hdd-consolidation-desc" viewBox="0 0 620 370" style="display:block;width:100%;height:auto"><title id="hdd-consolidation-title">How the HDD market narrowed to three</title> <desc id="hdd-consolidation-desc">Quantum’s HDD business went to Maxtor in 2001, then Maxtor went to Seagate in 2006. Seagate bought Samsung’s HDD business in 2011. IBM’s HDD business became part of Hitachi GST in 2003, which Western Digital bought in 2012. Toshiba bought Fujitsu’s HDD business in 2009 and received desktop HDD assets from the WD and HGST deal in 2012.</desc> <g font-family="system-ui, sans-serif" font-size="14"><text x="12" y="25" fill="currentColor" font-size="22" font-weight="750">How the HDD market narrowed to three</text> <g color="#11664b" fill="currentColor"><rect x="10" y="54" width="600" height="94" rx="12" fill="#e3f4eb"></rect><rect x="24" y="70" width="124" height="26" rx="6" fill="#fff"></rect><text x="34" y="87.5" font-weight="600">Quantum HDD</text> <path d="M148 83 H218 m-5 -4 l5 4 -5 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><rect x="164" y="72" width="42" height="22" rx="7" fill="#fff"></rect><text x="185" y="87" text-anchor="middle" font-size="12" font-weight="650">2001</text> <rect x="222" y="70" width="100" height="26" rx="6" fill="#fff"></rect><text x="232" y="87.5" font-weight="600">Maxtor</text> <path d="M322 83 H447 m-5 -4 l5 4 -5 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><rect x="365.5" y="72" width="42" height="22" rx="7" fill="#fff"></rect><text x="386.5" y="87" text-anchor="middle" font-size="12" font-weight="650">2006</text> <rect x="24" y="107" width="124" height="26" rx="6" fill="#fff"></rect><text x="34" y="124.5" font-weight="600">Samsung HDD</text> <path d="M148 120 H447 m-5 -4 l5 4 -5 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><rect x="278.5" y="109" width="42" height="22" rx="7" fill="#fff"></rect><text x="299.5" y="124" text-anchor="middle" font-size="12" font-weight="650">2011</text> <rect x="451" y="64" width="147" height="74" rx="8"></rect><text x="524.5" y="122" text-anchor="middle" fill="#fff" font-size="15" font-weight="700">Seagate</text> </g><g color="#214c93" fill="currentColor"><rect x="10" y="159" width="600" height="94" rx="12" fill="#e8f0ff"></rect><rect x="24" y="194" width="124" height="26" rx="6" fill="#fff"></rect><text x="34" y="211.5" font-weight="600">IBM HDD</text> <path d="M148 207 H218 m-5 -4 l5 4 -5 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><rect x="164" y="196" width="42" height="22" rx="7" fill="#fff"></rect><text x="185" y="211" text-anchor="middle" font-size="12" font-weight="650">2003</text> <rect x="222" y="194" width="100" height="26" rx="6" fill="#fff"></rect><text x="232" y="211.5" font-weight="600">Hitachi GST</text> <path d="M322 207 H447 m-5 -4 l5 4 -5 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><rect x="365.5" y="196" width="42" height="22" rx="7" fill="#fff"></rect><text x="386.5" y="211" text-anchor="middle" font-size="12" font-weight="650">2012</text> <rect x="451" y="169" width="147" height="74" rx="8"></rect><text x="524.5" y="227" text-anchor="middle" fill="#fff" font-size="15" font-weight="700">Western Digital</text> </g><g color="#a52c38" fill="currentColor"><rect x="10" y="264" width="600" height="94" rx="12" fill="#fbecef"></rect><rect x="24" y="280" width="124" height="26" rx="6" fill="#fff"></rect><text x="34" y="297.5" font-weight="600">Fujitsu HDD</text> <path d="M148 293 H447 m-5 -4 l5 4 -5 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><rect x="278.5" y="282" width="42" height="22" rx="7" fill="#fff"></rect><text x="299.5" y="297" text-anchor="middle" font-size="12" font-weight="650">2009</text> <rect x="24" y="317" width="179" height="26" rx="6" fill="#fff"></rect><text x="34" y="334.5" font-weight="600">WD–HGST desktop assets</text> <path d="M203 330 H447 m-5 -4 l5 4 -5 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 2"></path><rect x="306" y="319" width="42" height="22" rx="7" fill="#fff"></rect><text x="327" y="334" text-anchor="middle" font-size="12" font-weight="650">2012</text> <rect x="451" y="274" width="147" height="74" rx="8"></rect><text x="524.5" y="332" text-anchor="middle" fill="#fff" font-size="15" font-weight="700">Toshiba</text></g></g></svg>

> Selected HDD acquisitions by closing year. The dashed arrow shows the desktop-drive assets transferred to Toshiba as a condition of the WD–HGST deal.

按收购年份选定的 HDD 收购。虚线箭头显示转移至 Toshiba 为 WD–HGST 交易条件的 desktop-drive 资产。

> The 2011 Thailand floods hit while those last two deals were underway. WD halted production at all its Thai plants, and its average hard drive selling price went from $45 in fiscal 2011 to $62 in fiscal 2012. There was also a price-fixing case further up the supply chain. NHK Spring pleaded guilty in 2019 to fixing prices for the suspension assemblies that hold the read/write heads, and the court approved a $28.5 million fine. [WD’s 2012 annual report](https://www.sec.gov/Archives/edgar/data/106040/000119312512361018/d356205d10k.htm) · [Ninth Circuit opinion](https://cdn.ca9.uscourts.gov/datastore/opinions/2026/01/08/24-4470.pdf)

2011年泰国洪水袭击，而最后两笔交易仍在进行中。WD停止在所有泰国工厂的生产，其平均硬盘售价从 $45 在 2011财年 上升至 $62 在 2012财年。此外，供应链上游还存在价格固定案件。NHK Spring 在 2019年认罪，承认固定用于保持读/写头的悬挂组件的价格，法院批准了 $28.5 million 的罚款。[WD的2012年年度报告](https://www.sec.gov/Archives/edgar/data/106040/000119312512361018/d356205d10k.htm) · [第九巡回上诉法院意见](https://cdn.ca9.uscourts.gov/datastore/opinions/2026/01/08/24-4470.pdf)

> ## Market collusion and cartel pricing

## 市场共谋与卡特尔定价

> It’s hard to have anything positive to say in this post. The HDD manufacturing market is so consolidated nowadays - just like the memory market which is equally screwed - that it’s hard to see this as anything but mass market collusion by the HDD manufacturing cartel.

在这篇帖子里很难说什么好话。如今 HDD 制造业市场如此集中——就像内存市场同样糟糕——以至于很难不将其视为 HDD 制造业卡特尔的市场勾结。

> Three companies is an awfully short list when you need to buy a hard drive. And with 89% of WD’s revenue coming from its cloud business in fiscal 2026, I don’t reckon those of us buying a couple of drives for a home server have much impact here. Just like with Nvidia and Micron, consumer markets just aren’t valuable enough so we have to make do with the crumbs instead.

当 你需要购买硬盘 时，这是一个实在太短的列表。
而且在 2026 财年，WD 的收入中 89% 来自其云计算业务，我估计那些为家庭服务器 购买几块硬盘 的我们，在 这里 影响 应该很小。
就像在 Nvidia 和 Micron 那里 一样，消费市场 并不够有价值，所以我们 只能 从中 得到这些残渣 了。

> As of November 26, 2026, the 20TB is **2.2×** what I paid for the exact same SKU in 2024. It’s also $270 more than I paid for it in May 2025. And if you’re thinking you’ll just buy a smaller one, Best Buy’s 8TB Black Friday special is $299.99. That’s $37.50/TB and fifty bucks more than my 20TB cost two years ago. [Best Buy’s EasyStore listings](https://www.bestbuy.com/site/searchpage.jsp?id=pcat17071&st=easystore)

截至 2026 年 11 月 26 日，这款 20TB 硬盘的价格是我在 2024 年购买同一 SKU 时支付价格的 **2.2 倍**。它也比我在 2025 年 5 月买它时贵了 270 美元。如果你想买小容量的，Best Buy 的 8TB 黑色星期五特价是 299.99 美元。也就是每 TB 37.50 美元，比两年前我 20TB 硬盘的价格还要贵 50 美元。[Best Buy 的 EasyStore 产品列表](https://www.bestbuy.com/site/searchpage.jsp?id=pcat17071&st=easystore)

> The jump gets sillier when you price a whole NAS. Four of those 20TB drives would have been $999.96 at my 2024 price. This week they’d be $2,199.96. That’s another $1,200 before you’ve bought a case, a board or a single stick of RAM. And the price per *usable* terabyte only gets worse once you set aside a drive for parity.

当你为整个 NAS 定价时，跳跃变得更荒谬。 四台这些 20TB 驱动器在我的 2024 价格下会是 $999.96。 本周它们会是 $2,199.96。 这还多出 $1,200，在你购买外壳、主板或单根 RAM 之前。 而且每 *usable* terabyte 的价格只会更糟糕，一旦你为 parity 保留 一个驱动器。

> If I can wish for one thing in 2027, it would be for hardware pricing to return to reasonable levels. I fear it may take a lot longer than that, though. So making do with less is going to be the new normal for a while. And in that creative constraint, maybe we’ll have some fun along the way instead.

如果我能在 2027 年 许一个愿望，那就是让硬件价格回到合理水平。不过，我担心这可能要花费比这更长的时间。因此，为了适应少一些，将会成为一段时间的新常态。在这种创意限制下，也许我们会在途中玩得开心。
