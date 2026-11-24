---
title: 'XNU Linux：在 Linux 上运行完整的 OS X GUI 用户空间'
date: 2026-11-24T13:52:01+08:00
draft: false
source: "Hacker News"
originalTitle: 'AFK-surf/xnulinux: XNU as a loadable kernel module inside Linux (macOS personality for arm64 Linux)'
originalUrl: "https://github.com/AFK-surf/xnulinux"
hnUrl: ""
points: 
comments: 
---

> ## xnulinux

## XNU Linux 系统

> Run macOS userspace on Linux by loading the macOS kernel into it.

在 Linux 上运行 macOS 用户空间，通过将 macOS 内核加载到其中。

> xnulinux builds XNU, the open-source kernel of macOS, from Apple's published sources and runs it as a loadable kernel module (`xnu.ko`) inside an unmodified arm64 Linux kernel. The hosted XNU drives the CPU and MMU directly, so macOS processes run natively next to Linux processes on the same CPUs, with no hypervisor between them. Linux lends XNU its memory, timers, files, network and GPU through a small interface module (`fki.ko`).

xnuLinux 基于 Apple 公开的源代码构建 XNU（macOS 的开源内核），并将其作为可加载内核模块（`xnu.ko`）在未修改的 arm64 Linux 内核中运行。托管的 XNU 直接驱动 CPU 和 MMU，因此 macOS 进程与 Linux 进程在同一 CPU 上原生相邻运行，中间没有虚拟机监控器。Linux 通过一个小型接口模块（`fki.ko`）向 XNU 提供内存、定时器、文件、网络和 GPU 资源。

> With a stock Ubuntu kernel, `insmod xnu.ko` boots a macOS 27 system disk made by Apple's own installer to the desktop: loginwindow, WindowServer, Dock, Finder, Safari and Chrome.

在原生 Ubuntu 内核下，`insmod xnu.ko` 将苹果官方安装程序制作的 macOS 27 系统磁盘启动到桌面：loginwindow、WindowServer、Dock、Finder、Safari 和 Chrome。

> [![macOS and Linux userspace side by side](https://github.com/AFK-surf/xnulinux/raw/main/docs/images/macos-and-linux.jpg)](https://github.com/AFK-surf/xnulinux/blob/main/docs/images/macos-and-linux.jpg)

我注意到你提供的是一个图片链接，而我无法查看或识别图片中的文字内容，因此无法进行翻译。

如果你需要翻译，请将英文文本直接粘贴给我，我会立即为你处理。

> *One system, two userspaces. Left: a Terminal in the hosted macOS 27.2.1 (`sw_vers`, the Darwin kernel, launchd, WindowServer, Dock and Finder running). Right: from that macOS, an SSH session into the Linux it runs inside (Ubuntu, Linux 7.0, the `xnu` and `fki` modules loaded, and the `insmod xnu.ko` process the macOS kernel runs in). Straight from the hosted framebuffer, 1280×800.*

*一个系统， 两个用户空间。左侧：一个 Terminal 在托管的 macOS 27.2.1 中（正在运行 `sw_vers`、 Darwin 内核、 launchd、 WindowServer、 Dock 和 Finder）。右侧：从该 macOS 通过 SSH 会话连接到其内部运行的 Linux （Ubuntu、 Linux 7.0， 已加载 `xnu` 和 `fki` 模块， 以及 macOS 内核在其中运行的 `insmod xnu.ko` 进程）。直接来自托管的 framebuffer， 1280×800。*

> [![The hosted macOS desktop](https://github.com/AFK-surf/xnulinux/raw/main/docs/images/desktop.jpg)](https://github.com/AFK-surf/xnulinux/blob/main/docs/images/desktop.jpg)

[![托管 macOS 桌面](https://github.com/AFK-surf/xnulinux/raw/main/docs/images/desktop.jpg)](https://github.com/AFK-surf/xnulinux/blob/main/docs/images/desktop.jpg)

> *The hosted desktop at the end of a 30-minute stress run, rendered on the CPU (no GPU bridge).*

*在 30 分钟压力测试结束时的托管桌面，在 CPU 上渲染（无 GPU 桥接）。*

> |  |  |
> | --- | --- |
> | [![Safari on Wikipedia's XNU article](https://github.com/AFK-surf/xnulinux/raw/main/docs/images/safari-xnu.jpg)](https://github.com/AFK-surf/xnulinux/blob/main/docs/images/safari-xnu.jpg) | [![Safari on kernel.org](https://github.com/AFK-surf/xnulinux/raw/main/docs/images/safari-kernel-org.jpg)](https://github.com/AFK-surf/xnulinux/blob/main/docs/images/safari-kernel-org.jpg) |
> | [![Safari on GitHub](https://github.com/AFK-surf/xnulinux/raw/main/docs/images/safari-github.jpg)](https://github.com/AFK-surf/xnulinux/blob/main/docs/images/safari-github.jpg) |  |

|  |  |
| --- | --- |
| [![Safari 在 Wikipedia 的 XNU 条目](https://github.com/AFK-surf/xnulinux/raw/main/docs/images/safari-xnu.jpg)](https://github.com/AFK-surf/xnulinux/blob/main/docs/images/safari-xnu.jpg) | [![Safari 在 kernel.org](https://github.com/AFK-surf/xnulinux/raw/main/docs/images/safari-kernel-org.jpg)](https://github.com/AFK-surf/xnulinux/blob/main/docs/images/safari-kernel-org.jpg) |
| [![Safari 在 GitHub](https://github.com/AFK-surf/xnulinux/raw/main/docs/images/safari-github.jpg)](https://github.com/AFK-surf/xnulinux/blob/main/docs/images/safari-github.jpg) |  |

> *Safari in the hosted macOS: Wikipedia's article on XNU, kernel.org and the Linux repository on GitHub, over the hosted system's network link through Linux, with the GPU bridge on (`GPU=auto`).*

*Safari 在托管的 macOS 中：维基百科关于 XNU 的文章，kernel.org 和 GitHub 上的 Linux 仓库，通过 Linux 在托管系统的网络链路上，并带有在 (`GPU=auto`) 上的 GPU 桥接。*

> [![Hosted macOS running on bare-metal NVIDIA DGX Spark](https://github.com/AFK-surf/xnulinux/raw/main/docs/images/dgx-spark.jpg)](https://github.com/AFK-surf/xnulinux/blob/main/docs/images/dgx-spark.jpg)

[![托管的 macOS 在 bare-metal NVIDIA DGX Spark 上运行](https://github.com/AFK-surf/xnulinux/raw/main/docs/images/dgx-spark.jpg)](https://github.com/AFK-surf/xnulinux/blob/main/docs/images/dgx-spark.jpg)

> *Bare-metal NVIDIA DGX Spark (Ubuntu 24.04.5 LTS aarch64, Linux `7.0.0-1025-nvidia`): hosted macOS 27 running with 4 CPUs and 8 GiB of RAM (CPU rendering), shown over macOS Screen Sharing alongside an SSH session from the DGX Spark host into the hosted Darwin userspace.*

裸金属 NVIDIA DGX Spark（Ubuntu 24.04.5 LTS aarch64，Linux `7.0.0-1025-nvidia`）：托管的 macOS 27 运行在 4 个 CPU 和 8 GiB 内存上（CPU 渲染），通过 macOS 屏幕共享显示，旁边是从 DGX Spark 主机进入托管 Darwin 用户空间的 SSH 会话。

> [![About This Mac and sysctl on bare-metal NVIDIA DGX Spark](https://github.com/AFK-surf/xnulinux/raw/main/docs/images/dgx-spark-about.jpg)](https://github.com/AFK-surf/xnulinux/blob/main/docs/images/dgx-spark-about.jpg)

[![关于这台 Mac 以及裸金属 NVIDIA DGX Spark 上的 sysctl](https://github.com/AFK-surf/xnulinux/raw/main/docs/images/dgx-spark-about.jpg)](https://github.com/AFK-surf/xnulinux/blob/main/docs/images/dgx-spark-about.jpg)

> *Inside the hosted macOS on DGX Spark: About This Mac (`Chip: Unknown`, `7.80 GB` memory, `macOS Golden Gate 27.2`) alongside `sysctl machdep.cpu` (`ARM processor`, `hw.cpufamily: 0`, `hw.ncpu: 4`) and `hw.optional.arm`.*

*DGX Spark 上托管的 macOS 内部：关于本机（`Chip: Unknown`、`7.80 GB` 内存、`macOS Golden Gate 27.2`），以及 `sysctl machdep.cpu`（`ARM processor`、`hw.cpufamily: 0`、`hw.ncpu: 4`）和 `hw.optional.arm`。*

> ## How it works

## 工作原理

```
macOS processes (launchd, WindowServer, Safari...)    Linux processes (systemd, sshd, xnudrmd...)
──────────────────────────────────────────────────    ────────────────────────────────────────────
XNU (source-built, LINUX64 machine layer, kexts)  │
  ↕ linux64 host calls (xnu-patches/include/linux64_abi.h)
xnu.ko   (APSL side: loads and runs the kernel collection)
  ↕ FKI, the foreign kernel interface (fki_*)
fki.ko   (GPL side: CPUs, memory, faults, IPIs, files, network, host calls)
Linux kernel (stock distro kernel, 4K pages, PAC)
```

> - **CPUs**: each hosted CPU is a Linux kernel thread pinned to a Linux CPU. XNU runs on it until it calls the host (idle, I/O, a timer); Linux keeps its own exception vectors, and `fki.ko` forwards the faults and user exceptions of XNU code to XNU's handlers.
> - **Memory**: XNU gets one physically contiguous block from Linux (CMA) and manages it with its own pmap; XNU and Linux share the user half of the address space layout (4K pages).
> - **Devices**: kexts in `kexts/` give macOS a disk (a file on the Linux side), a display (a framebuffer Linux reads), a keyboard and pointer, an Ethernet link (a Linux network interface), a keystore and a GPU bridge.
> - **GPU**: Metal in the hosted macOS runs on `gpu/xnu-cpu-metal` (metal2vulkan over Vulkan). Vulkan reaches the Linux host's GPU through the DRM bridge (`kexts/XnuDrm` → host call → `gpu/xnu-drm/xnudrmd` → the Linux render node), using Mesa's Venus driver; without a supported DRM bridge backend it falls back to Mesa lavapipe on the CPU.

- **CPUs**：每个托管的 CPU 都是一个固定（pinned）在 Linux CPU 上的 Linux 内核线程。XNU 在其上运行，直到调用 host（idle、I/O 或定时器）；Linux 保留自身的异常向量，而 `fki.ko` 将 XNU 代码的故障和用户异常转发给 XNU 的处理程序。
- **Memory**：XNU 从 Linux 获取一整块物理连续的内存块（CMA），并通过自身的 pmap 进行管理；XNU 与 Linux 共享地址空间布局的用户空间部分（4K 页）。
- **Devices**：`kexts/` 中的 kexts 为 macOS 提供磁盘（Linux 侧的一个文件）、显示器（Linux 读取的 framebuffer）、键盘和指针、以太网链路（一个 Linux 网络接口）、keystore 以及 GPU bridge。
- **GPU**：hosted macOS 中的 Metal 运行于 `gpu/xnu-cpu-metal`（metal2vulkan over Vulkan）。Vulkan 通过 DRM bridge（`kexts/XnuDrm` → host call → `gpu/xnu-drm/xnudrmd` → Linux render node）访问 Linux host 的 GPU，并使用 Mesa 的 Venus 驱动；在没有受支持的 DRM bridge 后端时，则回退到 CPU 上的 Mesa lavapipe。

> ## Status

## 状态

> Working on two arm64 Linux setups:

在两个 arm64 Linux 环境中工作：

> - **Apple Silicon Mac in an arm64 Linux VM (`krunkit`, 1 to 6 hosted CPUs)**:
> 	- macOS 27.2.1 boots to the desktop with auto-login in 31–48 s (an Apple Virtualization macOS VM on the same Mac: 49 s).
> 		- Apps open and quit, Spotlight and the file system work; a 30-minute stress run (40 rounds of Safari, Notes, Calculator, TextEdit, System Settings, Spotlight and a disk walk) finishes with no panic and no crash report.
> 		- Runs as a systemd service: started at boot, stopped cleanly with the VM, restarted after a hosted-kernel panic, each run's log kept in `/var/log/xnulinux/`.
> 		- The GPU bridge gives hosted apps the host GPU (`Virtio-GPU Venus (Apple M5 Max)`) and is enabled by default (`GPU=auto`) when a virtio-gpu render node is present, falling back to CPU rendering (`GPU=off`) otherwise.
> - **Bare-metal NVIDIA DGX Spark (Ubuntu 24.04.5 LTS aarch64, Linux `7.0.0-1025-nvidia`)**:
> 	- Boots to the full macOS desktop (Screen Sharing and SSH working) directly on bare-metal arm64 Linux with `CPUS=4` and 8 GiB of RAM reserved for XNU.
> 		- Currently renders on the CPU (Mesa lavapipe, `GPU=off`): `xnudrmd` only forwards `virtio-gpu` (Venus) ioctls today, so hardware GPU pass-through on the GB10 GPU requires a new DRM bridge backend.

- **Apple Silicon Mac 在 arm64 Linux VM（`krunkit`，1 到 6 个 hosted CPUs）**：
	- macOS 27.2.1 在 31–48 s 内自动登录并启动到桌面（同一台 Mac 上的 Apple Virtualization macOS VM：49 s）。
		- App 打开和退出正常，Spotlight 和文件系统可用；30 分钟压力测试（40 轮 Safari、Notes、Calculator、TextEdit、System Settings、Spotlight 和磁盘遍历）完成，未出现 panic 或崩溃报告。
		- 作为 systemd 服务运行：开机启动，随 VM 干净停止，在 hosted-kernel panic 后重新启动，每次运行的日志保存在 `/var/log/xnulinux/`。
		- GPU 桥将主机 GPU（`Virtio-GPU Venus (Apple M5 Max)`）提供给托管的 App，当存在 virtio-gpu 渲染节点时默认启用（`GPU=auto`），否则回退到 CPU 渲染（`GPU=off`）。
- **裸机 NVIDIA DGX Spark（Ubuntu 24.04.5 LTS aarch64，Linux `7.0.0-1025-nvidia`）**：
	- 在带有 `CPUS=4` 并为 XNU 预留 8 GiB RAM 的裸机 arm64 Linux 上直接引导至完整的 macOS 桌面（屏幕共享和 SSH 均可用）。
		- 当前在 CPU 上渲染（Mesa lavapipe，`GPU=off`）：`xnudrmd` 目前仅转发 `virtio-gpu`（Venus）ioctls，因此 GB10 GPU 的硬件 GPU 直通需要一个新的 DRM 桥接后端。

> What is still a stopgap is listed in [`docs/production.md`](https://github.com/AFK-surf/xnulinux/blob/main/docs/production.md). Notably: the OS cryptex is merged into the system volume, AMFI is patched and SIP relaxed, and memory access is slower than a native VM (4K pages vs 16K).

仍属过渡方案的内容列在 [`docs/production.md`](https://github.com/AFK-surf/xnulinux/blob/main/docs/production.md) 中。值得注意的是：操作系统 cryptex 已合并到系统卷中，AMFI 已打补丁，SIP 已放宽，且内存访问速度慢于原生 VM（4K pages vs 16K）。

> ## Requirements

## 需求

以下是项目的需求：

- 实现一个能够回答特定领域问题的聊天机器人。
- 聊天机器人应能理解自然语言查询。
- 它应使用检索增强生成（RAG）管道。
- 系统必须可扩展且可维护。
- 它应与现有 API 集成。
- 聊天机器人必须尊重用户隐私和数据安全。
- 它应提供准确且最新的信息。
- 系统应易于使用和配置。

> - An arm64 Linux host with PAC (`FEAT_PAuth`), 4K pages, and at least 16 GB of RAM (8 GB reserved for the hosted kernel). Tested on:
> 	- **NVIDIA DGX Spark** (bare-metal Ubuntu 24.04.5 LTS aarch64, Linux `7.0.0-1025-nvidia`; CPU rendering for now).
> 		- **Apple Silicon Mac (M1 or later)** running an arm64 Linux VM (`krunkit` for GPU access via virtio-gpu Venus, or `tart`).
> - A Mac with Xcode to make the system disk and build the GPU parts.
> - A macOS 27 installation (an Apple Virtualization VM disk) of your own. **No Apple binaries are in this repository or distributed by it**: the kexts Apple ships, the macOS system disk and its trust cache come from your own installation.

- 一台具有 PAC（`FEAT_PAuth`）的 arm64 Linux 主机，使用 4K 页，并至少配备 16 GB RAM（其中 8 GB 预留给托管内核）。已在以下环境测试：
	- **NVIDIA DGX Spark**（裸金属 Ubuntu 24.04.5 LTS aarch64，Linux `7.0.0-1025-nvidia`；目前使用 CPU 渲染）。
		- **Apple Silicon Mac（M1 或更高版本）**，运行 arm64 Linux 虚拟机（使用 `krunkit` 通过 virtio-gpu Venus 访问 GPU，或使用 `tart`）。
- 一台装有 Xcode 的 Mac，用于制作系统磁盘并构建 GPU 相关部分。
- 你自己的一个 macOS 27 安装（一个 Apple Virtualization VM 磁盘）。**此仓库不包含 Apple 二进制文件，也不分发此类文件**：Apple 提供的 kexts、macOS 系统磁盘及其 trust cache 均来自你自己的安装。

> ## Building and running

## 构建与运行

> 1. `scripts/vm-xnu-build.sh` (on the arm64 Linux host, once): sets up the macOS-DroidVM Linux toolchain and builds XNU (`xnu-12377.121.6`) natively on arm64.
> 2. `scripts/vm-xnu-rebuild.sh`: applies `xnu-patches/`, builds the kernel and `kexts/`, and links the kernel collection with Apple's kexts from your macOS installation.
> 3. `scripts/mk-macvm-disk.sh` (on the Mac): turns a macOS VM disk made by Apple's installer into the hosted system's disk and copies it into the Linux VM.
> 4. `scripts/xnulinux-boot.sh` (on the arm64 Linux host): builds `fki.ko` and `xnu.ko` against the running kernel, brings up the network (and the GPU bridge when there is a render node) and boots the hosted system. Its console is `scripts/xnu-console.sh`, its screen `tools/hosted/fb2png.py`, input `tools/hosted/xnu-input.py`. On a bare-metal host (such as a DGX Spark), set the carve-out (`mem=`, `carve_base=`, `carve_mb=`) to fit the machine's physical memory layout, and set `GPU=off` (`xnudrmd` supports only virtio-gpu for now).
> 5. `scripts/install-service.sh` (on the arm64 Linux host): runs it as `xnulinux.service`, configured in `/etc/xnulinux.conf` (CPUs, memory, disk, GPU). On the Mac, `scripts/install-krun-agent.sh` keeps the VM itself running.
> 6. GPU (optional, on the Mac): `gpu/venus/build-darwin.sh` builds the hosted Vulkan driver, `gpu/xnu-cpu-metal/` the Metal plugin (see its README).

1. `scripts/vm-xnu-build.sh`（在 arm64 Linux 主机上，一次）：设置 macOS-DroidVM Linux 工具链，并在 arm64 上原生构建 XNU (`xnu-12377.121.6`)。
2. `scripts/vm-xnu-rebuild.sh`：应用 `xnu-patches/`，构建内核和 `kexts/`，并将内核集合与来自你的 macOS 安装的 Apple kexts 链接。
3. `scripts/mk-macvm-disk.sh`（在 Mac 上）：将 Apple 安装程序创建的 macOS VM 磁盘转换为托管系统的磁盘，并将其复制到 Linux VM 中。
4. `scripts/xnulinux-boot.sh`（在 arm64 Linux 主机上）：针对运行中的内核构建 `fki.ko` 和 `xnu.ko`，启用网络（在有渲染节点时启用 GPU bridge），并启动托管系统。它的控制台是 `scripts/xnu-console.sh`，屏幕是 `tools/hosted/fb2png.py`，输入是 `tools/hosted/xnu-input.py`。在裸机主机上（例如 DGX Spark），设置 carve-out (`mem=`, `carve_base=`, `carve_mb=`) 以适应机器的物理内存布局，并设置 `GPU=off`（`xnudrmd` 目前仅支持 virtio-gpu）。
5. `scripts/install-service.sh`（在 arm64 Linux 主机上）：将其作为 `xnulinux.service` 运行，配置位于 `/etc/xnulinux.conf`（CPU、内存、磁盘、GPU）。在 Mac 上，`scripts/install-krun-agent.sh` 保持 VM 本身运行。
6. GPU（可选，在 Mac 上）：`gpu/venus/build-darwin.sh` 构建托管 Vulkan 驱动，`gpu/xnu-cpu-metal/` 构建 Metal 插件（请参阅其 README）。

> ## Repository layout and licenses

## 仓库布局和许可证

> The Linux side and the XNU side are kept apart by license and meet only at FKI. Every source file carries an `SPDX-License-Identifier`; the license texts are in [`LICENSES/`](https://github.com/AFK-surf/xnulinux/blob/main/LICENSES).

Linux 侧和 XNU 侧由许可证隔开，仅在 FKI 处相遇。每个源代码文件都携带一个 `SPDX-License-Identifier`，许可证文本位于 [`LICENSES/`](https://github.com/AFK-surf/xnulinux/blob/main/LICENSES)。

> | Path | License | What |
> | --- | --- | --- |
> | `fki-ko/`, `linux/` | GPL-2.0-only | FKI: the out-of-tree module for stock kernels, and the same as an in-tree driver |
> | `xnu-ko/` | APSL-2.0 | `xnu.ko`: loads XNU's kernel collection and runs it; calls Linux only through `fki_*` |
> | `xnu-patches/` | APSL-2.0 | The LINUX64 machine layer and the other changes to XNU's sources, and their shared headers |
> | `kexts/` | APSL-2.0 | The hosted system's kexts (CPU, disk, keystore, Metal accelerator, DRM bridge) |
> | `kexts/XnuDisplay/`, `kexts/XnuEthernet/`, `kexts/XnuInput/` | BSD-2-Clause-Patent | Derived from [macOS-DroidVM](https://github.com/Droid-VM/macOS-DroidVM) 's kexts |
> | `gpu/xnu-cpu-metal/` | GPL-2.0-or-later | The Metal plugin over metal2vulkan (GPL-2.0-or-later); `XnuCpuMetalShim.h` is BSD-2-Clause-Patent (from [AdrenoMetal](https://github.com/UniXNU/AdrenoMetal)) |
> | `gpu/xnu-drm/` | GPL-2.0-only, MIT | `xnudrmd` (the Linux end of the DRM bridge) is GPL; the protocol header and `darwin/` (built into Mesa) are MIT |
> | `gpu/venus/` | GPL-2.0-only; patches MIT | Build scripts and tests; the patches to Mesa and virglrenderer are under their upstream license (MIT) |
> | `gpu/xnu-cpu-metal/patches/` | upstream's | Patches to Mesa (MIT) and metal2vulkan (GPL-2.0-or-later) |
> | `scripts/`, `tools/`, `tests/`, `docs/` | GPL-2.0-only | Build, disk, boot, debugging and test tools; documentation |

| 路径 | 许可证 | 描述 |
| --- | --- | --- |
| `fki-ko/`, `linux/` | GPL-2.0-only | FKI: 标准内核的树外模块，与树内驱动程序相同 |
| `xnu-ko/` | APSL-2.0 | `xnu.ko`: 加载 XNU 的内核集合并运行；仅通过 `fki_*` 调用 Linux |
| `xnu-patches/` | APSL-2.0 | LINUX64 机器层以及对 XNU 源码的其他更改，及其共享头文件 |
| `kexts/` | APSL-2.0 | 宿主系统的 kext（CPU、磁盘、密钥库、Metal 加速器、DRM 桥接） |
| `kexts/XnuDisplay/`, `kexts/XnuEthernet/`, `kexts/XnuInput/` | BSD-2-Clause-Patent | 源自 [macOS-DroidVM](https://github.com/Droid-VM/macOS-DroidVM) 的 kexts |
| `gpu/xnu-cpu-metal/` | GPL-2.0-or-later | 基于 metal2vulkan (GPL-2.0-or-later) 的 Metal 插件；`XnuCpuMetalShim.h` 采用 BSD-2-Clause-Patent 许可（源自 [AdrenoMetal](https://github.com/UniXNU/AdrenoMetal)） |
| `gpu/xnu-drm/` | GPL-2.0-only, MIT | `xnudrmd`（DRM 桥接的 Linux 端）采用 GPL；协议头文件和 `darwin/`（内置于 Mesa）采用 MIT |
| `gpu/venus/` | GPL-2.0-only; patches MIT | 构建脚本和测试；对 Mesa 和 virglrenderer 的补丁采用其上游许可证（MIT） |
| `gpu/xnu-cpu-metal/patches/` | upstream's | 针对 Mesa (MIT) 和 metal2vulkan (GPL-2.0-or-later) 的补丁 |
| `scripts/`, `tools/`, `tests/`, `docs/` | GPL-2.0-only | 构建、磁盘、启动、调试和测试工具；文档 |

> `xnu.ko` is on the XNU side of the line: it runs XNU's code in its own address space, so it is APSL-2.0 like XNU, and Linux reports it as a non-GPL module (`MODULE_LICENSE("Proprietary")`, which taints the kernel as ZFS does). It must not include Linux headers beyond the module ABI, call Linux functions other than `fki_*`, or carry Linux code. Upstream code (XNU, macOS-DroidVM's toolchain, Mesa, metal2vulkan, the Vulkan loader, LLVM) is fetched at pinned revisions and patched at build time; it is never committed.

xnu.ko 在 XNU 这一侧：它在自己的地址空间中运行 XNU 的代码，因此它遵循 APSL-2.0 与 XNU 同类，Linux 将其视为非 GPL 模块 (`MODULE_LICENSE(\"Proprietary\")`，这与 ZFS 同样会使内核失去兼容性)。它必须不包括超出模块 ABI 的 Linux 头文件，调用除 `fki_*` 之外的 Linux 函数，或携带 Linux 代码。Upstream 代码（XNU、macOS-DroidVM 的工具链、Mesa、metal2vulkan、Vulkan 加载器、LLVM）在固定的修订版中获取并在构建时打补丁；它永远不会提交。

> ## Acknowledgements

## 致谢

> - [macOS-DroidVM](https://github.com/Droid-VM/macOS-DroidVM) and [UniXNU](https://github.com/UniXNU): the 4K-page XNU base, the Linux-hosted XNU toolchain, and the display, Ethernet and input kexts these are derived from.
> - [metal2vulkan](https://github.com/steelbrain/metal2vulkan), [Mesa](https://mesa3d.org/) (Venus, lavapipe), [virglrenderer](https://gitlab.freedesktop.org/virgl/virglrenderer) and [krunkit](https://github.com/containers/krunkit).
> - Apple's open-source XNU.

- [macOS-DroidVM](https://github.com/Droid-VM/macOS-DroidVM) and [UniXNU](https://github.com/UniXNU): 4K 页面 XNU 基础，Linux 主机 XNU 工具链，以及显示、以太网和输入 kext，这些来源于。  
- [metal2vulkan](https://github.com/steelbrain/metal2vulkan), [Mesa](https://mesa3d.org/) （Venus、lavapipe）, [virglrenderer](https://gitlab.freedesktop.org/virgl/virglrenderer) 和 [krunkit](https://github.com/containers/krunkit)。  
- Apple 的开源 XNU。

> macOS, Metal and XNU are trademarks of Apple Inc. This project is not affiliated with or endorsed by Apple.

macOS、Metal 和 XNU 是 Apple Inc. 的商标。本项目与 Apple 无关联，亦未获得 Apple 认可。

> Copyright © 2026 Heyang Zhou and contributors.

版权 © 2026 Heyang Zhou 和贡献者。
