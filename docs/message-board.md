---
title: 留言板
layout: doc
---

# 💬 留言板

欢迎来到 Leechbox 的留言板！有什么想说的、想问的，或者单纯想吐槽的，都可以在这里留下你的足迹。

<div class="message-board-container">
  <!-- 留言输入区 -->
  <div class="message-input-area">
    <div class="input-group">
      <input type="text" id="msg-name" placeholder="怎么称呼你？(必填)" maxlength="20">
    </div>
    <div class="input-group">
      <textarea id="msg-content" placeholder="想说点什么... (必填)" rows="4" maxlength="500"></textarea>
    </div>
    <button id="submit-msg-btn" class="submit-btn">发送留言</button>
    <div id="submit-status" class="status-text"></div>
  </div>

  <!-- 留言展示区 -->
  <div class="message-list-area">
    <h3>最近留言</h3>
    <div id="message-list" class="message-list">
      <div class="loading-text">正在加载留言...</div>
    </div>
  </div>
</div>

<style>
.message-board-container {
  max-width: 800px;
  margin: 2rem auto;
}

.message-input-area {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.input-group {
  margin-bottom: 1rem;
}

#msg-name, #msg-content {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-family: inherit;
  font-size: 0.95rem;
  transition: border-color 0.3s;
}

#msg-name:focus, #msg-content:focus {
  outline: none;
  border-color: var(--vp-c-brand);
}

.submit-btn {
  background-color: var(--vp-c-brand);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.submit-btn:hover {
  background-color: var(--vp-c-brand-light);
  transform: translateY(-2px);
}

.submit-btn:disabled {
  background-color: var(--vp-c-divider);
  cursor: not-allowed;
  transform: none;
}

.status-text {
  margin-top: 0.8rem;
  font-size: 0.9rem;
  text-align: center;
  min-height: 1.2rem;
}

.status-text.error { color: #ef4444; }
.status-text.success { color: #10b981; }

.message-list-area h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
}

.message-item {
  background-color: var(--vp-c-bg-soft);
  border-radius: 10px;
  padding: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid var(--vp-c-brand);
}

.msg-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
}

.msg-author {
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
}

.msg-time {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.msg-body {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  white-space: pre-wrap;
  word-break: break-word;
}

.loading-text, .empty-text {
  text-align: center;
  color: var(--vp-c-text-2);
  padding: 2rem 0;
}
</style>

<script>
// 这里未来将接入我们在 1T 机械盘上部署的真实后端 API
// 目前先用假数据占位，让前端样式先跑起来
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    const listContainer = document.getElementById('message-list');
    const submitBtn = document.getElementById('submit-msg-btn');
    const statusText = document.getElementById('submit-status');
    
    // 模拟的初始留言数据
    let messages = [
      { id: 1, name: '访客一号', content: '第一！博客改版后看起来很清爽，赞一个！', time: '刚刚' }
    ];

    function renderMessages() {
      if (messages.length === 0) {
        listContainer.innerHTML = '<div class="empty-text">还没有人留言，快来抢沙发吧！</div>';
        return;
      }
      
      listContainer.innerHTML = messages.map(msg => `
        <div class="message-item">
          <div class="msg-header">
            <span class="msg-author">${msg.name}</span>
            <span class="msg-time">${msg.time}</span>
          </div>
          <div class="msg-body">${msg.content}</div>
        </div>
      `).join('');
    }

    // 初始渲染
    setTimeout(() => {
      renderMessages();
    }, 500);

    // 提交按钮事件
    submitBtn.addEventListener('click', () => {
      const nameInput = document.getElementById('msg-name');
      const contentInput = document.getElementById('msg-content');
      const name = nameInput.value.trim();
      const content = contentInput.value.trim();

      statusText.className = 'status-text';
      statusText.textContent = '';

      if (!name) {
        statusText.className = 'status-text error';
        statusText.textContent = '请输入称呼';
        nameInput.focus();
        return;
      }
      
      if (!content) {
        statusText.className = 'status-text error';
        statusText.textContent = '说点什么再提交吧';
        contentInput.focus();
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = '发送中...';

      // 模拟网络请求延迟
      setTimeout(() => {
        const newMsg = {
          id: Date.now(),
          name: name,
          content: content,
          time: '刚刚'
        };
        
        messages.unshift(newMsg); // 放到最前面
        renderMessages();
        
        // 清空表单
        nameInput.value = '';
        contentInput.value = '';
        
        statusText.className = 'status-text success';
        statusText.textContent = '留言发送成功！';
        
        submitBtn.disabled = false;
        submitBtn.textContent = '发送留言';
        
        setTimeout(() => {
          statusText.textContent = '';
        }, 3000);
      }, 600);
    });
  });
}
</script>
