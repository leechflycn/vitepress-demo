import{_ as r,o as l,c as u,a0 as g}from"./chunks/framework.tsJrOMu2.js";typeof window<"u"&&window.addEventListener("load",()=>{const n=document.getElementById("message-list"),e=document.getElementById("submit-msg-btn"),t=document.getElementById("submit-status");let a=[{id:1,name:"访客一号",content:"第一！博客改版后看起来很清爽，赞一个！",time:"刚刚"}];function i(){if(a.length===0){n.innerHTML='<div class="empty-text">还没有人留言，快来抢沙发吧！</div>';return}n.innerHTML=a.map(s=>`
        <div class="message-item">
          <div class="msg-header">
            <span class="msg-author">${s.name}</span>
            <span class="msg-time">${s.time}</span>
          </div>
          <div class="msg-body">${s.content}</div>
        </div>
      `).join("")}setTimeout(()=>{i()},500),e.addEventListener("click",()=>{const s=document.getElementById("msg-name"),o=document.getElementById("msg-content"),d=s.value.trim(),m=o.value.trim();if(t.className="status-text",t.textContent="",!d){t.className="status-text error",t.textContent="请输入称呼",s.focus();return}if(!m){t.className="status-text error",t.textContent="说点什么再提交吧",o.focus();return}e.disabled=!0,e.textContent="发送中...",setTimeout(()=>{const c={id:Date.now(),name:d,content:m,time:"刚刚"};a.unshift(c),i(),s.value="",o.value="",t.className="status-text success",t.textContent="留言发送成功！",e.disabled=!1,e.textContent="发送留言",setTimeout(()=>{t.textContent=""},3e3)},600)})});const b=JSON.parse('{"title":"留言板","description":"","frontmatter":{"title":"留言板","layout":"doc"},"headers":[],"relativePath":"message-board.md","filePath":"message-board.md"}'),v={name:"message-board.md"};function p(n,e,t,a,i,s){return l(),u("div",null,[...e[0]||(e[0]=[g("",3)])])}const _=r(v,[["render",p]]);export{b as __pageData,_ as default};
