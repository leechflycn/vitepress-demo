---
title: 留言板
layout: doc
---

# 💬 留言板

欢迎来到 Leechbox 的留言板！有什么想说的、想问的，或者单纯想吐槽的，都可以在这里留下你的足迹。

*(留言功能开发中... 敬请期待)*

<div class="like-button-container">
  <button class="like-button" id="like-btn">
    <span class="like-icon">👍</span>
    <span class="like-text">点赞支持 (<span id="like-count">0</span>)</span>
  </button>
</div>

<style>
.like-button-container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 20px;
}

.like-button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border: 2px solid var(--vp-c-brand);
  background-color: transparent;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-brand);
  transition: all 0.3s ease;
  outline: none;
}

.like-button:hover {
  background-color: var(--vp-c-brand-soft);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}

.like-button:active {
  transform: translateY(0);
}

.like-button.liked {
  background-color: var(--vp-c-brand);
  color: white;
}
</style>

<script>
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    const btn = document.getElementById('like-btn');
    const countSpan = document.getElementById('like-count');
    
    // 从 localStorage 读取点赞数 (模拟后端)
    let currentCount = parseInt(localStorage.getItem('page_likes')) || 24;
    countSpan.textContent = currentCount;
    
    if (localStorage.getItem('has_liked')) {
      btn.classList.add('liked');
    }

    btn.addEventListener('click', () => {
      if (!localStorage.getItem('has_liked')) {
        currentCount++;
        countSpan.textContent = currentCount;
        btn.classList.add('liked');
        localStorage.setItem('has_liked', 'true');
        localStorage.setItem('page_likes', currentCount);
        
        // 简单的爆花特效
        const rect = btn.getBoundingClientRect();
        for(let i=0; i<10; i++) {
          createParticle(rect.left + rect.width/2, rect.top + rect.height/2);
        }
      } else {
        // 取消点赞
        currentCount--;
        countSpan.textContent = currentCount;
        btn.classList.remove('liked');
        localStorage.removeItem('has_liked');
        localStorage.setItem('page_likes', currentCount);
      }
    });
    
    function createParticle(x, y) {
      const el = document.createElement('div');
      el.innerHTML = '✨';
      el.style.position = 'fixed';
      el.style.left = x + 'px';
      el.style.top = y + 'px';
      el.style.pointerEvents = 'none';
      el.style.transition = 'all 0.6s cubic-bezier(0, .9, .57, 1)';
      el.style.transform = `translate(-50%, -50%) scale(0.5)`;
      el.style.opacity = '1';
      el.style.zIndex = '9999';
      document.body.appendChild(el);
      
      const angle = Math.random() * Math.PI * 2;
      const velocity = 50 + Math.random() * 50;
      const tx = x + Math.cos(angle) * velocity;
      const ty = y + Math.sin(angle) * velocity - 50;
      
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.transform = `translate(${tx - x}px, ${ty - y}px) scale(1.5)`;
          el.style.opacity = '0';
        });
      });
      
      setTimeout(() => el.remove(), 600);
    }
  });
}
</script>
