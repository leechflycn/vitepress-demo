---
layout: home

hero:
  name: "leechbox"
  text: "影子的折腾日常"
  tagline: SHADOWS TECH DIARY
  image:
    src: https://vitepress.dev/vitepress-logo-large.webp
    alt: Logo
  actions:
    - theme: brand
      text: "🚀 开始探索"
      link: /tutorials/docker-install
    - theme: alt
      text: "🦞 部署服务"
      link: /openclaw-service

features:
  - title: "📚 避坑指南"
    details: "频道最新发布的所有图文教程，小白实操，一看就会。"
    link: /tools/vitepress-publish
    icon: 📝
  - title: "🛠️ 硬件与系统"
    details: "PVE 虚拟机搭建、NAS 存储方案配置实战与避坑。"
    link: /hardware/pve-samba
    icon: 🖥️
  - title: "🌐 网络与建站"
    details: "旁路由配置，域名托管与 Cloudflare CDN 加速防风控。"
    link: /tools/cloudflare-cdn
    icon: ☁️
  - title: "🤖 AI 私有化"
    details: "OpenClaw 本地部署方案，大模型 API 接入实战。"
    link: /openclaw-service
    icon: 🧠
---

<style>
.recent-posts {
  max-width: 1152px;
  margin: 40px auto;
  padding: 0 24px;
}
.recent-posts h2 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
  color: var(--vp-c-text-1);
  text-align: center;
}
.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
.post-card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  transition: border-color 0.25s, background-color 0.25s;
  text-decoration: none !important;
}
.post-card:hover {
  border-color: var(--vp-c-brand-1);
}
.post-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}
.post-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 1.4;
}
.post-date {
  font-size: 12px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-mute);
  padding: 2px 8px;
  border-radius: 12px;
  white-space: nowrap;
  margin-left: 12px;
}
.post-excerpt {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  flex-grow: 1;
}
.read-more {
  margin-top: 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}

.visitor-stats {
  text-align: center;
  margin-top: 60px;
  color: var(--vp-c-text-2);
  font-size: 14px;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 24px;
  padding-bottom: 24px;
}
</style>

<div class="recent-posts">
  <h2>📖 最新文章</h2>
  <div class="post-grid">
<a href="/hardware/oect-hdparm-sleep.html" class="post-card">
      <div class="post-header">
        <span class="post-title">OECT (Armbian) 挂载外置硬盘不休眠的排障与修复实战</span>
        <span class="post-date">硬件</span>
      </div>
      <div class="post-excerpt">
        闲置网心云 OECT 刷入 Armbian + CasaOS 做家用 NAS，外挂 2T 硬盘却 24 小时狂转不休眠？利用 hdparm 与 udev 规则，彻底治愈硬盘的“不眠之症”...
      </div>
      <span class="read-more">阅读全文 →</span>
    </a>

    <a href="/tools/vitepress-publish.html" class="post-card">
      <div class="post-header">
        <span class="post-title">小白实操：如何给自己的独立博客发布新文章？</span>
        <span class="post-date">建站</span>
      </div>
      <div class="post-excerpt">
        当你成功搭建了极简清爽的独立博客，肯定会面临一个问题：“我自己平时怎么发新文章呢？” 不用懂代码，不用懂运维。你只需要像写日记一样准备 .md 文件，然后靠 3 句魔法命令，网站就会全自动更新...
      </div>
      <span class="read-more">阅读全文 →</span>
    </a>
    
    <a href="/tutorials/docker-install.html" class="post-card">
      <div class="post-header">
        <span class="post-title">3分钟装好 Docker (附国内可用镜像源)</span>
        <span class="post-date">Docker</span>
      </div>
      <div class="post-excerpt">
        这是B站刚发布视频的配套代码。由于网络原因，我推荐大家使用国内镜像源的一键安装脚本。装完之后别忘了把它跑起来，并且设置为每次开机都自动运行，一键复制粘贴到终端即可...
      </div>
      <span class="read-more">阅读全文 →</span>
    </a>

    <a href="/hardware/pve-samba.html" class="post-card">
      <div class="post-header">
        <span class="post-title">PVE 虚拟机搭建与 NAS 存储架构避坑</span>
        <span class="post-date">硬件</span>
      </div>
      <div class="post-excerpt">
        从零折腾 PVE 虚拟机底层架构，以及如何利用 CasaOS 和易有云等工具，打造个人家庭数据中心 NAS 存储。分享局域网共享设置与异地远程访问踩坑记录...
      </div>
      <span class="read-more">阅读全文 →</span>
    </a>

    <a href="/tools/cloudflare-cdn.html" class="post-card">
      <div class="post-header">
        <span class="post-title">Cloudflare CDN 加速与防封指南</span>
        <span class="post-date">网络</span>
      </div>
      <div class="post-excerpt">
        免费二级域名锁死 NS 记录无法绑 Cloudflare 的惨痛教训。分享网站如何接入 CDN 提速，以及服务器 IP 防火墙设置、防风控、防封端口的终极保姆级解决方案...
      </div>
      <span class="read-more">阅读全文 →</span>
    </a>
  </div>
</div>

<div class="visitor-stats">
  <span id="busuanzi_container_site_pv">本站总访问量 <span id="busuanzi_value_site_pv"></span> 次</span>
  |
  <span id="busuanzi_container_site_uv">总访客数 <span id="busuanzi_value_site_uv"></span> 人</span>
</div>

