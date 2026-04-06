<template>
  <div class="author-card">
    <div class="author-info">
      <div class="author-avatar">
        <img src="/qrcode.jpg" alt="Leechbox 公众号" />
      </div>
      <div class="author-text">
        <h3 class="author-title">关注 Leechbox</h3>
        <p class="author-desc">
          如果你觉得这篇文章对你有帮助，欢迎扫码关注我的公众号。这里有更多折腾笔记、硬核干货和偶尔的瞎折腾日常。咱们一起探讨技术，共同进步！
        </p>
        <div class="author-links">
          <a href="https://space.bilibili.com/285573456" target="_blank" rel="noopener noreferrer" class="link-item bilibili">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.813 4.653h.854c1.51.054 2.769.657 3.773 1.811 1.004 1.154 1.506 2.454 1.506 3.901V18.15c0 1.443-.502 2.728-1.506 3.858-1.004 1.13-2.263 1.695-3.773 1.695H5.333c-1.5 0-2.75-.565-3.75-1.695C.583 20.878.083 19.593.083 18.15V10.365c0-1.447.5-2.747 1.5-3.901C2.583 5.31 3.833 4.707 5.333 4.653h.813L4.2 2.56c-.222-.266-.35-.568-.384-.906a1.14 1.14 0 0 1 .184-.79c.145-.23.327-.41.547-.541.22-.13.46-.195.72-.195.2 0 .393.045.58.134.186.089.349.213.488.373l2.84 3.738a.634.634 0 0 0 .178.174.526.526 0 0 0 .237.065h4.81c.099-.022.178-.044.237-.065a.634.634 0 0 0 .178-.174l2.884-3.738c.118-.16.27-.284.455-.373.185-.09.377-.134.577-.134.26 0 .5.065.72.195.22.13.402.311.547.541.145.23.206.494.184.79-.022.338-.15.64-.384.906l-1.946 2.093zM5.333 7.238c-.767.058-1.42.34-1.958.847a2.54 2.54 0 0 0-.807 1.95v7.863c0 .878.269 1.58.807 2.106.538.526 1.191.79 1.958.79h13.334c.767 0 1.42-.264 1.958-.79.538-.526.807-1.228.807-2.106v-7.863c0-.85-.269-1.503-.807-1.95a2.76 2.76 0 0 0-1.958-.847H5.333zm4.513 3.52c-.524 0-.962.19-1.314.57-.352.38-.528.851-.528 1.412 0 .56.176 1.033.528 1.413.352.38.79.57 1.314.57.524 0 .962-.19 1.314-.57.352-.38.528-.853.528-1.413 0-.561-.176-1.032-.528-1.412-.352-.38-.79-.57-1.314-.57zm6.315 0c-.524 0-.962.19-1.314.57-.352.38-.528.851-.528 1.412 0 .56.176 1.033.528 1.413.352.38.79.57 1.314.57.524 0 .962-.19 1.314-.57.352-.38.528-.853.528-1.413 0-.561-.176-1.032-.528-1.412-.352-.38-.79-.57-1.314-.57z"/>
            </svg>
            <span>B站主页</span>
          </a>
          <a href="/" class="link-item website">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>个人主页</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.author-card {
  margin-top: 3rem;
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* 移除左侧的蓝色高亮条 */
/*
.author-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: var(--vp-c-brand);
}
*/

.author-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px -8px var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-soft);
}

.author-info {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.author-avatar {
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  background-color: #fff;
  padding: 6px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.author-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 120px;
}

.author-title {
  margin: 0 0 0.75rem;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.author-desc {
  margin: 0 0 1.2rem 0;
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.author-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.link-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none !important;
  transition: all 0.2s ease;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
}

.link-item:hover {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-brand-soft);
}

.link-item.bilibili:hover {
  color: #00aeec;
  border-color: #00aeec;
  background-color: rgba(0, 174, 236, 0.1);
}

.link-item.website:hover {
  color: var(--vp-c-brand);
}

@media (max-width: 640px) {
  .author-info {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
  }
  .author-links {
    justify-content: center;
  }
}
</style>
