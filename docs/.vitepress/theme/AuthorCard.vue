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
      </div>
    </div>
  </div>
</template>

<style scoped>
.author-card {
  margin-top: 3rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.author-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: var(--vp-c-brand);
}

.author-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px -8px var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-soft);
}

.author-info {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.author-avatar {
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid var(--vp-c-divider);
  background-color: #fff; /* Ensure QR code background is white */
  padding: 4px;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.author-text {
  flex: 1;
}

.author-title {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.author-desc {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

@media (max-width: 640px) {
  .author-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>
