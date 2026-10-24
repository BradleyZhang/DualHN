---
title: "Docker 很奇怪"
date: 2026-10-24T07:51:50+08:00
draft: false
source: "Hacker News"
originalTitle: "Code and Cake - Docker is weird"
originalUrl: "https://codeandcake.dev/posts/2026-10-22-docker-is-weird"
hnUrl: ""
points: 
comments: 
---

> I decided to make my own container runtime for fun, and even though I’m still early on, I’ve learned that Docker is *weird*. Here’s some weird things I learned about Docker.

我决定自己写容器运行器玩，虽然我还处于起步阶段，但我学到 Docker 真是*weird*。这里有一些我学到的关于 Docker 的奇怪事情。

> ## Containers aren’t real

## 容器不是真实的

> Unlike VMs, containers are just processes with special restrictions on them. Your kernel is still running that process! And if you know where to look, you can even find that process in /proc.

与虚拟机（VM）不同，容器只是一个带有特殊限制的进程。你的内核仍然在运行那个进程！如果你知道在哪里查找，甚至可以在 /proc 中找到那个进程。

> ## Containers really aren’t real

## 容器其实并非真实存在

> There’s not really a linux feature that’s just “containers” either. Instead, containers are really 5 different linux kernel features in trenchcoat.

Linux 系统中并没有一个独立的“容器”功能。相反，容器实际上是 5 个不同 Linux 内核功能的结合体。

> Namespaces hide what the host and container can see, cgroups limit container resource usage, and there’s a whole bunch of networking magic I don’t understand that lets you isolate a container’s network.

Namespaces 隐藏了主机和容器能看到的内容，cgroups 限制容器资源使用，还有我完全不理解的一大堆网络魔法，让你可以隔离容器的网络。

> ## Images are just folders

图片只是文件夹

> Images are just folders that Docker puts somewhere and then calls `chroot` (or `pivot_root`) to make that folder your container process’s new root directory. So if you run `docker run -it --rm ubuntu /bin/bash`, Docker is going to:

镜像仅仅是 Docker 放置在某个位置的文件夹，然后调用 `chroot`（或 `pivot_root`）使该文件夹成为容器进程的新根目录。因此，如果你运行 `docker run -it --rm ubuntu /bin/bash`，Docker 将会：

> - Download the ubuntu image from Dockerhub.
> - Put that image somewhere.
> - Run `/some/weird/docker/path/bin/bash`

- 从 DockerHub 下载 ubuntu 镜像。
- 将该镜像放置在某处。

> ## Go is kind of a terrible language for a container runtime

## Go 作为 container runtime 的语言有点糟糕

> Docker’s container runtime, `runc`, is written in Go, and Go has some design choices that make it less suited for a container runtime. Go’s runtime is natively multi-threaded. That’s a really cool feature, but it leads to some challenges in `runc`.

Docker的容器运行时 `runc` 编写于Go，且Go的一些设计选择使其不太适合作为容器运行时。Go的运行时是原生多线程的。这是一个很酷的特性，但它给`runc`带来了挑战。

> Many of the Linux syscalls a container runtime needs to make have to be done in a single-threaded environment, so `runc` has [a crazy C module](https://github.com/opencontainers/runc/tree/main/libcontainer/nsenter) that runs before Go’s runtime initializes so it can run those syscalls.

Many of the Linux syscalls 容器运行时需要执行 必须在单线程环境中完成，所以 `runc` 有一个 [a crazy C module](https://github.com/opencontainers/runc/tree/main/libcontainer/nsenter) 在 Go 运行时初始化之前运行，以便能够执行这些 syscalls。

> Go also doesn’t have fork! Fork only forks the main thread, so it’s kind of a footgun in a runtime like Go’s. But a container runtime really wants to fork, set up a bunch of restrictions, and then exec the process you actually put in `docker run`. To get around this, `runc` execs `/proc/self/exe` with a special command line arguement that identifies it as a child process to approximate a fork.

Go 也并没有 fork！Fork 只 fork 主线程，所以在一个像 Go 这样的运行时里，这有点像一个 footgun。但一个容器运行时确实想要 fork、设置一堆限制，然后才 exec 你在 `docker run` 中真正放入的进程。为了绕过这一点，`runc` 会用一个特殊的命令行参数去 exec `/proc/self/exe`，这个参数会把它识别为子进程，从而近似一个 fork。

> ## Docker requires root!

Docker 需要 root!

> This is pretty easy to miss if you, like me, run Docker in MacOS. Many of the Linux kernel APIs that container runtimes use require, or at least used to, to be run as root, so the Docker daemon usually runs as root. I can only imagine that container security is a very tough job.

如果你像我一样在 MacOS 上运行 Docker，这很容易被忽略。许多 Linux 内核 API 容器运行时需要（至少以前需要）以 root 身份运行，所以 Docker 守护进程通常以 root 身份运行。我只能想象，容器安全是一项非常艰巨的工作。

> This seems better these days. The big exception seems to be networking. If you’re running a rootless container runtime, it looks like it has to reimplement the whole networking stack in userspace to actually give you the same features!

这段时间感觉好多了。最大的例外似乎是网络。如果你运行的是无根容器运行时，它似乎不得不在用户空间重新实现整个网络栈，才能真正为你提供相同的功能！

> ## Learning is fun!

## 学习很有趣！

> I’ve only just started my own container runtime, and I already feel like I’ve learned so much about Docker. Writing your own version of a tool you use is a great way to learn about it!

我才刚刚开始编写自己的 container runtime，已经觉得自己学到了很多关于 Docker 的知识。编写你自己正在使用的工具的版本，是了解它的绝佳方式。
