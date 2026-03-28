import { defineConfig } from "vitepress"

export default defineConfig({
  title: "影子的电脑小白技术分享平台",
  description: "视频教程配套代码和笔记分享",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "IT 折腾日记", items: [
        { text: "硬件与 NAS", link: "/hardware/pve-samba" },
        { text: "账号风控", link: "/tools/risk-control" },
        { text: "建站避坑", link: "/tools/cloudflare-cdn" }
      ]},
      { text: "Docker 教程", link: "/tutorials/docker-install" },
      { text: "🦞 部署服务", link: "/openclaw-service" }
    ],
    sidebar: {
      "/tutorials/": [
        {
          text: "教程与配套代码",
          items: [
            { text: "Docker 安装与配置", link: "/tutorials/docker-install" }
          ]
        }
      ],
      "/tools/": [
        {
          text: "网络与建站",
          items: [
            { text: "账号风控：TG与服务器", link: "/tools/risk-control" },
            { text: "域名托管与 CDN 加速", link: "/tools/cloudflare-cdn" }
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
