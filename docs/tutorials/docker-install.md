---
title: "Docker 安装与配置"
date: 2026-03-26
---

# Docker 安装与配置


这是我在B站刚发布的《3分钟装好Docker》视频配套代码。

## 一键安装命令

由于网络原因，我推荐大家使用下面这条国内镜像源的一键安装脚本：

```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

## 启动并设置开机自启

装完之后别忘了把它跑起来，并且设置为每次开机都自动运行：

```bash
systemctl start docker
systemctl enable docker
```

你只要点一下上面代码块右上角的**复制按钮**，然后直接粘贴到终端回车就行了！
