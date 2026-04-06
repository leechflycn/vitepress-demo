import { defineConfig, createContentLoader } from 'vitepress'
import { Feed } from 'feed'
import { writeFileSync } from 'fs'
import path from 'path'

export default defineConfig({
  title: 'leechbox',
  description: '影子的折腾日常',
  head: [ ['script', { async: '', src: 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js' }] ],
  buildEnd: async (config) => {
    const feed = new Feed({
      title: 'leechbox',
      description: '影子的折腾日常',
  head: [ ['script', { async: '', src: 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js' }] ],
      id: 'https://leechbox.xyz/',
      link: 'https://leechbox.xyz/',
      language: 'zh-CN',
      copyright: 'Copyright © 2026 影子的电脑小白技术分享平台'
    })
    const posts = await createContentLoader('/**/*.md', { excerpt: true, render: true }).load()
    posts.sort((a, b) => +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date))
    for (const { url, excerpt, frontmatter, html } of posts) {
      feed.addItem({
        title: frontmatter.title || 'leechbox 更新',
        id: `https://leechbox.xyz${url}`,
        link: `https://leechbox.xyz${url}`,
        description: excerpt || html,
        content: html,
        date: frontmatter.date ? new Date(frontmatter.date) : new Date()
      })
    }
    writeFileSync(path.join(config.outDir, 'feed.xml'), feed.rss2())
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'IT 折腾日记', items: [
        { text: '硬件与 NAS', link: '/hardware/pve-samba' },
        { text: '账号风控', link: '/tools/risk-control' },
        { text: '建站避坑', link: '/tools/cloudflare-cdn' }
      ]},
      { text: 'Docker 教程', link: '/tutorials/docker-install' },
      { text: '零基础搞定 NAS 外网访问！', link: '/tutorials/nas-remote' },
      { text: '手机随时访问 NAS (易有云)', link: '/tutorials/nas-phone-access' },
      { text: '飞书机器人 (急救龙虾) 教程', link: '/tutorials/feishu-bot-setup' },
      { text: '🦞 部署服务', link: '/openclaw-service' }
    ],
    sidebar: {
      '/tutorials/': [
        {
          text: '教程与配套代码',
          items: [
            { text: '告别纯文本！AI 助理双核记忆系统实战', link: '/tutorials/ai-memory-system' },
            { text: 'Docker 安装与配置', link: '/tutorials/docker-install' },
            { text: '零基础搞定 NAS 外网访问！', link: '/tutorials/nas-remote' },
            { text: '手机随时访问 NAS (易有云)', link: '/tutorials/nas-phone-access' },
            { text: '飞书机器人注册与配置全通关指南', link: '/tutorials/feishu-bot-setup' }
          ]
        }
      ],
      '/tools/': [
        {
          text: '网络与建站',
          items: [
            { text: 'AI 开发者合规避坑与免责声明', link: '/tools/agent-compliance' },
            { text: '账号风控：TG与服务器', link: '/tools/risk-control' },
            { text: '域名托管与 CDN 加速', link: '/tools/cloudflare-cdn' },
            { text: '给静态博客加上灵魂：Twikoo 评论系统实战', link: '/tools/twikoo-rss' },
            { text: '小白必看：如何给独立博客发帖', link: '/tools/vitepress-publish' },
            { text: '实战：如何优雅更换博客域名', link: '/tools/domain-migration' }
          ]
        }
      ],
      '/hardware/': [
        {
          text: '硬件与存储系统',
          items: [
            { text: 'PVE 与 NAS 数据中心实录', link: '/hardware/pve-samba' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/leechfly' },
      { 
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M488.6 104.1C505.3 122.2 513 143.8 511.9 169.8V372.2C511.5 398.6 502.7 420.3 485.4 437.3C468.2 454.3 446.3 463.2 419.6 464H92.28C65.57 463.2 43.81 454.2 26.74 436.8C9.682 419.4 .7577 398.1 .872 372.2V169.8C-.2027 143.8 7.525 122.2 24.2 104.1C40.87 86.02 61.54 77.33 86.22 78.04H116L93.56 50.84C89.04 45.41 87.05 39.11 87.58 31.91C88.11 24.72 91.24 18.73 96.98 13.92C102.7 9.123 109.1 6.84 116.5 7.076C123.9 7.311 130 10.33 134.8 16.14L169.7 58.64H342.3L377.2 16.14C381.9 10.33 388.1 7.311 395.5 7.076C402.9 6.84 409.3 9.123 415 13.92C420.8 18.73 423.9 24.72 424.4 31.91C424.9 39.11 422.1 45.41 418.4 50.84L396 78.04H425.8C450.5 77.33 471.9 86.02 488.6 104.1H488.6zM449.8 173.8C449.4 164.2 446.1 156.4 439.1 150.3C433.9 144.2 425.1 140.9 416.4 140.5H96.06C86.46 140.9 78.6 144.2 72.47 150.3C66.33 156.4 63.07 164.2 62.69 173.8V368.2C62.69 377.4 65.95 385.3 72.47 391.7C78.99 398.2 86.85 401.5 96.06 401.5H416.4C425.6 401.5 433.4 398.2 439.7 391.7C446 385.3 449.4 377.4 449.8 368.2L449.8 173.8zM185.5 216.5C191.8 222.8 195.2 230.6 195.6 239.7V273C195.2 282.2 191.9 289.9 185.8 296.2C179.6 302.5 171.8 305.7 162.2 305.7C152.6 305.7 144.7 302.5 138.6 296.2C132.5 289.9 129.2 282.2 128.8 273V239.7C129.2 230.6 132.6 222.8 138.9 216.5C145.2 210.2 152.1 206.9 162.2 206.5C171.4 206.9 179.2 210.2 185.5 216.5H185.5zM377 216.5C383.3 222.8 386.7 230.6 387.1 239.7V273C386.7 282.2 383.4 289.9 377.3 296.2C371.1 302.5 363.3 305.7 353.7 305.7C344.1 305.7 336.3 302.5 330.1 296.2C324 289.9 320.7 282.2 320.3 273V239.7C320.7 230.6 324.1 222.8 330.4 216.5C336.7 210.2 344.5 206.9 353.7 206.5C362.9 206.9 370.7 210.2 377 216.5H377z"/></svg>'
        },
        link: 'https://space.bilibili.com/3706939758348625'
      } 
    ],
    footer: {
      message: '本站内容仅供技术分享与学习探讨',
      copyright: 'Copyright © 2026 影子的电脑小白技术分享平台'
    }
  }
})