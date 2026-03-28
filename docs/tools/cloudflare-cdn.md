# 域名托管与 CDN 加速避坑指南

本文总结了基于 VitePress、GitHub Pages 和 Cloudflare CDN 建站时的常见坑点。

## Cloudflare Pages 部署大坑

1. **极其容易走错入口（千万别选 Workers）**：
   在 Cloudflare 绑定 GitHub 代码仓库时，必须进入 **Pages** 选项卡下点击“连接到 Git”。切忌点进 **Workers** 流程，因为 Workers 没有静态网站目录配置选项。

2. **输出目录必须精确匹配**：
   如果你的 VitePress 是初始化在代码仓库的 `docs` 目录下的，那么在 Cloudflare 设置里：
   - **构建命令**: `npm run docs:build`
   - **构建输出目录必须是**: `docs/.vitepress/dist`
   如果你误写为 `.vitepress/dist` 或者少写了前置目录，Cloudflare 在部署完后会找不到产物，直接报错 `522 Connection Timed Out` 或 `404`。

3. **语法错误检查**：
   你的本地 `config.js` 必须确保没有语法错误。若不小心多加了一个转义符或者逗号，会导致 `npm run docs:build` 直接编译失败。

## 免费二级域名与 CDN 托管的冲突

很多新手想用免费的二级子域名（如 ClouDNS 提供的 `.abrdns.com`）绑定 Cloudflare 加速，但实测会**直接被拦截报错**。

- **原因**：这类免费二级域名平台通常会锁死 **NS（名称服务器）** 修改权限。
- **正解**：Cloudflare 接管域名必须要修改根域名的 NS。因此，如果需要用 CDN 加速、防 DDoS，**必须购买顶级域名（如 .xyz、.top 等，首年极低，通常仅需 5-10 元）**，才能完美挂载到 Cloudflare。
- *备注*：DuckDNS 只能用于动态 IP 解析直连，也不能托管给 Cloudflare。
