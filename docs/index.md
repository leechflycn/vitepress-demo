---
layout: home

hero:
  name: "影子的电脑小白技术分享平台"
  text: "IT 折腾日记"
  tagline: "从零折腾软路由、PVE与AI本地部署，B站视频配套代码避坑指南"
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
  - title: "📚 最新文章与避坑指南"
    details: "这里汇总了频道最新发布的所有图文教程，小白实操，一看就会。"
    link: /tools/vitepress-publish
    icon: 📝
  - title: "🛠️ 硬件与系统"
    details: "PVE 虚拟机搭建、NAS 存储方案配置实战与避坑指南。"
    link: /hardware/pve-samba
    icon: 🖥️
  - title: "🌐 网络与建站"
    details: "旁路由透明代理配置，域名托管与 Cloudflare CDN 加速防风控。"
    link: /tools/cloudflare-cdn
    icon: ☁️
  - title: "🤖 AI 私有化"
    details: "OpenClaw 自动化助手本地部署方案，大模型 API 接入实战。"
    link: /openclaw-service
    icon: 🧠
---

<style>
.recent-posts {
  max-width: 1152px;
  margin: 0 auto;
  padding: 24px;
}
.recent-posts h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: var(--vp-c-text-1);
}
.post-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.post-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  transition: all 0.25s;
}
.post-item:hover {
  background-color: var(--vp-c-bg-mute);
  transform: translateY(-2px);
}
.post-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.post-date {
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.visitor-stats {
  text-align: center;
  margin-top: 60px;
  color: var(--vp-c-text-2);
  font-size: 14px;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 20px;
}
</style>

<div class="recent-posts">
  <h2>📖 最新折腾记录</h2>
  <div class="post-list">
    <a href="/tools/vitepress-publish.html" class="post-item">
      <span class="post-title">📝 小白实操：如何给自己的独立博客（VitePress）发布新文章？</span>
      <span class="post-date">最新发布</span>
    </a>
    <a href="/tutorials/docker-install.html" class="post-item">
      <span class="post-title">🐳 3分钟装好 Docker (附国内可用镜像源)</span>
      <span class="post-date">基础环境</span>
    </a>
    <a href="/hardware/pve-samba.html" class="post-item">
      <span class="post-title">🖥️ PVE 虚拟机搭建与 NAS 存储架构</span>
      <span class="post-date">硬件架构</span>
    </a>
    <a href="/tools/cloudflare-cdn.html" class="post-item">
      <span class="post-title">☁️ Cloudflare CDN 加速防风控避坑指南</span>
      <span class="post-date">网站运营</span>
    </a>
  </div>
</div>

<div class="visitor-stats">
  <span id="busuanzi_container_site_pv">本站总访问量 <span id="busuanzi_value_site_pv"></span> 次</span>
  |
  <span id="busuanzi_container_site_uv">总访客数 <span id="busuanzi_value_site_uv"></span> 人</span>
</div>

<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
