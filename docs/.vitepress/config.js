import { defineConfig } from "vitepress"

export default defineConfig({
  title: "leechbox",
  description: "影子的折腾日常",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "IT 折腾日记", items: [
        { text: "硬件与 NAS", link: "/hardware/pve-samba" },
        { text: "账号风控", link: "/tools/risk-control" },
        { text: "建站避坑", link: "/tools/cloudflare-cdn" }
      ]},
      { text: "Docker 教程", link: "/tutorials/docker-install" },
      { text: "零基础搞定 NAS 外网访问！", link: "/tutorials/nas-remote" },
      { text: "手机随时访问 NAS (易有云)", link: "/tutorials/nas-phone-access" },
      { text: "飞书机器人 (急救龙虾) 教程", link: "/tutorials/feishu-bot-setup" },
      { text: "🦞 部署服务", link: "/openclaw-service" }
    ],
    sidebar: {
      "/tutorials/": [
        {
          text: "教程与配套代码",
          items: [
            { text: "Docker 安装与配置", link: "/tutorials/docker-install" },
            { text: "零基础搞定 NAS 外网访问！", link: "/tutorials/nas-remote" },
            { text: "手机随时访问 NAS (易有云)", link: "/tutorials/nas-phone-access" },
            { text: "飞书机器人注册与配置全通关指南", link: "/tutorials/feishu-bot-setup" }
          ]
        }
      ],
      "/tools/": [
        {
          text: "网络与建站",
          items: [
            { text: "账号风控：TG与服务器", link: "/tools/risk-control" },
            { text: "域名托管与 CDN 加速", link: "/tools/cloudflare-cdn" },
            { text: "小白必看：如何给独立博客发帖", link: "/tools/vitepress-publish" }
      { text: "实战：如何优雅更换博客域名", link: "/tools/domain-migration" },
          ]
        }
      ],
      "/hardware/": [
        {
          text: "硬件与存储系统",
          items: [
            { text: "PVE 与 NAS 数据中心实录", link: "/hardware/pve-samba" }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/leechfly" },
      { icon: "youtube", link: "https://space.bilibili.com/26422329" } 
    ],
    footer: {
      message: "本站内容仅供技术分享与学习探讨",
      copyright: "Copyright © 2026 影子的电脑小白技术分享平台"
    }
  }
})