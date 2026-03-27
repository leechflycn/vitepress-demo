import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "老冯的技术小站",
  description: "视频教程配套代码和笔记分享",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Docker教程', link: '/docker-install' }
    ],
    sidebar: [
      {
        text: '近期更新',
        items: [
          { text: 'Docker 安装与配置', link: '/docker-install' }
        ]
      }
    ]
  }
})
