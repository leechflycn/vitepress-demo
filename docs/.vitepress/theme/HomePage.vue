<script setup>
import { computed } from 'vue'
import { data as allPosts } from './posts.data.js'

const posts = computed(() => allPosts || [])
const featured = computed(() => posts.value[0] || null)
const list = computed(() => posts.value.slice(1, 7))
const total = computed(() => posts.value.length)

const nav = [
  { text: '首页', link: '/', active: true },
  { text: '折腾', link: '/tinkering/' },
  { text: 'AI', link: '/ai/' },
  { text: '副业', link: '/side-biz/' },
  { text: '服务', link: '/openclaw-service' }
]
const grads = ['t1', 't2', 't3', 't4', 't5', 't6']
</script>

<template>
  <div class="lb-home">
    <div class="bgfx">
      <div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div>
      <div class="dots"></div>
    </div>

    <nav class="lb-nav">
      <a class="brand" href="/">
        <span class="mark">影</span>leechbox
      </a>
      <div class="navlinks">
        <a v-for="n in nav" :key="n.link" :href="n.link" :class="{ on: n.active }">{{ n.text }}</a>
      </div>
      <div class="navright">
        <a class="search" href="/feed.xml" target="_blank">✦ RSS</a>
        <a class="btn" href="/openclaw-service">部署服务</a>
      </div>
    </nav>

    <header class="hero-wrap">
      <div class="hero">
        <div>
          <div class="eyebrow"><span class="dot"></span>持续更新 · 影子的折腾日常</div>
          <h1>把技术折腾成<br><span class="grad">看得懂的样子</span></h1>
          <p class="sub">家庭网络、软路由、自建服务与 AI 工具。<br>不讲玄学，只写能复现的步骤和踩过的坑。</p>
          <div class="actions">
            <a class="btn-lg" href="/tinkering/">开始阅读 →</a>
            <a class="btn-ghost" href="/openclaw-service">部署服务</a>
          </div>
          <div class="stats">
            <div class="stat"><b>{{ total }}</b><span>篇文章</span></div>
            <div class="stat"><b>12.4w</b><span>累计阅读</span></div>
            <div class="stat"><b>24</b><span>自建服务</span></div>
          </div>
        </div>
        <div class="stage">
          <div class="term">
            <div class="term-bar">
              <span class="tl" style="background:#ff5f57"></span>
              <span class="tl" style="background:#febc2e"></span>
              <span class="tl" style="background:#28c840"></span>
              <span class="term-title">leechbox — zsh — 96×24</span>
            </div>
            <div class="term-body">
              <div><span class="m">~</span> <span class="c">❯</span> <span class="p">pve</span> status --cluster</div>
              <div><span class="m">✔</span> node/pve01 &nbsp;<span class="s">running</span> <span class="m">3 VMs · 4 CTs</span></div>
              <div><span class="m">✔</span> node/pve01 &nbsp;<span class="s">uptime</span> <span class="m">412d 06h</span></div>
              <div><span class="m">~</span> <span class="c">❯</span> <span class="p">blog</span> deploy --prod</div>
              <div><span class="m">→</span> building {{ total }} posts <span class="m">...</span> <span class="p">done</span></div>
              <div><span class="m">→</span> deployed to <span class="c">leechbox.xyz</span></div>
              <div><span class="m">~</span> <span class="c">❯</span> <span class="cursor"></span></div>
            </div>
          </div>
          <div class="float f1"><span class="pill"></span>全部服务正常</div>
          <div class="float f2">⚡ 构建 1.8s · 100 分</div>
        </div>
      </div>
    </header>

    <main class="lb-main">
      <div v-if="featured" class="sec-head"><h2>本期精选</h2><a class="more" :href="featured.url">阅读全文 →</a></div>
      <a v-if="featured" class="featured" :href="featured.url">
        <div class="f-cover">
          <div class="mesh"></div><div class="glines"></div>
          <div class="label">{{ featured.cat }}</div>
          <div class="big">{{ featured.cat === 'AI' ? 'AI' : featured.cat === '副业' ? 'BIZ' : 'LAB' }}<span>2026</span></div>
        </div>
        <div class="f-body">
          <div class="tag">FEATURED</div>
          <h3>{{ featured.title }}</h3>
          <p v-if="featured.desc">{{ featured.desc }}</p>
          <div class="meta"><span>{{ featured.date }}</span><span>{{ featured.minutes }} 分钟阅读</span></div>
        </div>
      </a>

      <div class="sec-head"><h2>最新文章</h2><a class="more" href="/tinkering/">按分类浏览 →</a></div>
      <div class="grid">
        <a v-for="(p, i) in list" :key="p.url" class="card" :href="p.url">
          <div class="thumb" :class="grads[i % 6]">
            <span class="ring rg1"></span><span class="ring rg2"></span>
            <span class="ico">{{ p.icon }}</span>
          </div>
          <div class="c-body">
            <div class="cat">{{ p.cat }}</div>
            <h4>{{ p.title }}</h4>
            <p>{{ p.desc }}</p>
            <div class="c-foot"><span>{{ p.short }}</span><span>{{ p.minutes }} min</span></div>
          </div>
        </a>
      </div>

      <div class="band">
        <div><h3>每周一封，只写踩过的坑</h3><p>不发广告，不转二手观点，随时可退订。</p></div>
        <div class="input-fake">
          <a class="btn" href="/feed.xml" target="_blank">RSS 订阅 →</a>
        </div>
      </div>
    </main>

    <footer class="lb-footer">
      <div>© 2026 leechbox · 影子的折腾日常</div>
      <div><a href="/feed.xml">RSS</a> · <a href="https://github.com/leechfly" target="_blank">GitHub</a> · <a href="/openclaw-service">部署服务</a></div>
    </footer>
  </div>
</template>

<style scoped>
.lb-home{
  --mint:#34d399; --sky:#38bdf8; --blue:#3b82f6;
  --ink:#0f172a; --ink2:#334155; --dim:#64748b; --dim2:#94a3b8; --line:#e6edf5;
  background:#f7fafc;color:var(--ink);min-height:100vh;position:relative;
  font-family:"Noto Sans CJK SC","Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;
  padding-bottom:1px;
}
.lb-home *{box-sizing:border-box}
.bgfx{position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden}
.blob{position:absolute;border-radius:50%;filter:blur(80px)}
.b1{width:620px;height:620px;left:-180px;top:-220px;background:rgba(167,243,208,.55)}
.b2{width:560px;height:560px;right:-140px;top:-120px;background:rgba(186,230,253,.6)}
.b3{width:520px;height:520px;left:42%;top:620px;background:rgba(221,214,254,.38)}
.dots{position:absolute;inset:0;opacity:.55;background-image:radial-gradient(#cbd5e1 1px,transparent 1px);background-size:26px 26px;mask-image:linear-gradient(180deg,#000 0%,transparent 62%);-webkit-mask-image:linear-gradient(180deg,#000 0%,transparent 62%)}

.lb-nav{position:sticky;top:0;z-index:20;display:flex;align-items:center;justify-content:space-between;
  padding:16px 64px;background:rgba(255,255,255,.72);backdrop-filter:blur(18px);border-bottom:1px solid rgba(226,232,240,.9)}
.brand{display:flex;align-items:center;gap:11px;font-weight:800;font-size:19px;letter-spacing:-.2px;color:var(--ink);text-decoration:none}
.mark{width:34px;height:34px;border-radius:11px;display:grid;place-items:center;color:#fff;font-family:"Noto Serif CJK SC",serif;font-size:16px;
  background:linear-gradient(135deg,var(--mint),var(--sky) 55%,var(--blue));box-shadow:0 6px 18px rgba(56,189,248,.35)}
.navlinks{display:flex;gap:32px;font-size:14.5px}
.navlinks a{color:var(--dim);text-decoration:none}
.navlinks a.on{color:var(--ink);font-weight:600;position:relative}
.navlinks a.on:after{content:"";position:absolute;left:0;right:0;bottom:-8px;height:2.5px;border-radius:2px;background:linear-gradient(90deg,var(--mint),var(--sky))}
.navright{display:flex;align-items:center;gap:14px}
.search{display:flex;align-items:center;gap:8px;padding:8px 16px;border:1px solid var(--line);border-radius:999px;color:var(--dim2);font-size:13px;background:#fff;text-decoration:none}
.btn{padding:9px 20px;border-radius:999px;font-size:13.5px;font-weight:600;color:#fff;text-decoration:none;
  background:linear-gradient(135deg,#22c55e,#0ea5e9);box-shadow:0 8px 20px rgba(14,165,233,.25)}

.hero-wrap{position:relative;z-index:1;padding:82px 64px 34px}
.hero{max-width:1312px;margin:0 auto;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center}
.eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:999px;background:#ecfdf5;border:1px solid #bbf7d0;color:#047857;font-size:12.5px;font-weight:500;margin-bottom:24px}
.dot{width:6px;height:6px;border-radius:50%;background:#10b981;box-shadow:0 0 0 4px rgba(16,185,129,.14)}
.hero h1{font-size:60px;line-height:1.18;font-weight:800;letter-spacing:-1.6px;margin:0;color:var(--ink)}
.grad{background:linear-gradient(100deg,#10b981,#0ea5e9 55%,#6366f1);-webkit-background-clip:text;background-clip:text;color:transparent}
.sub{margin-top:22px;font-size:16.5px;line-height:1.9;color:var(--dim)}
.actions{display:flex;gap:14px;margin-top:34px}
.btn-lg{padding:13px 26px;border-radius:12px;font-size:14.5px;font-weight:600;color:#fff;text-decoration:none;
  background:linear-gradient(135deg,#10b981,#0ea5e9);box-shadow:0 12px 28px rgba(14,165,233,.28)}
.btn-ghost{padding:13px 26px;border-radius:12px;font-size:14.5px;font-weight:600;color:var(--ink2);text-decoration:none;
  background:#fff;border:1px solid var(--line);box-shadow:0 2px 8px rgba(15,23,42,.04)}
.stats{display:flex;gap:34px;margin-top:40px}
.stat b{display:block;font-size:24px;font-weight:800;letter-spacing:-.6px}
.stat span{font-size:12.5px;color:var(--dim2)}

.stage{position:relative}
.term{background:#0f172a;border-radius:18px;overflow:hidden;transform:rotate(-1.2deg);
  box-shadow:0 30px 70px rgba(15,23,42,.28),0 0 0 1px rgba(15,23,42,.06)}
.term-bar{display:flex;align-items:center;gap:7px;padding:13px 16px;background:#111c33;border-bottom:1px solid rgba(255,255,255,.07)}
.tl{width:10px;height:10px;border-radius:50%}
.term-title{margin-left:8px;font-size:11.5px;color:#7c8ba1;letter-spacing:.4px}
.term-body{padding:20px 22px 24px;font-family:"SFMono-Regular",Consolas,monospace;font-size:12.4px;line-height:2.05;color:#cbd5e1}
.p{color:#34d399}.c{color:#60a5fa}.s{color:#fbbf24}.m{color:#94a3b8}
.cursor{display:inline-block;width:7px;height:14px;background:#34d399;vertical-align:-2px;animation:blink 1.1s steps(1) infinite}
@keyframes blink{50%{opacity:0}}
.float{position:absolute;background:#fff;border:1px solid var(--line);border-radius:14px;padding:11px 15px;
  font-size:12.5px;color:var(--ink2);box-shadow:0 14px 34px rgba(15,23,42,.1);display:flex;align-items:center;gap:8px}
.f1{top:-16px;right:-14px}
.f2{bottom:-18px;left:-22px}
.pill{width:8px;height:8px;border-radius:50%;background:#22c55e;box-shadow:0 0 0 4px rgba(34,197,94,.15)}

.lb-main{max-width:1312px;margin:0 auto;padding:0 64px 20px;position:relative;z-index:1}
.sec-head{display:flex;align-items:center;justify-content:space-between;margin:38px 0 22px}
.sec-head h2{font-size:21px;font-weight:800;letter-spacing:-.3px;display:flex;align-items:center;gap:11px;margin:0}
.sec-head h2:before{content:"";width:5px;height:19px;border-radius:3px;background:linear-gradient(180deg,var(--mint),var(--sky))}
.more{font-size:13px;color:var(--dim2);text-decoration:none}

.featured{display:grid;grid-template-columns:1.1fr 1fr;background:#fff;border:1px solid var(--line);border-radius:22px;
  overflow:hidden;box-shadow:0 12px 40px rgba(15,23,42,.06);text-decoration:none;color:inherit}
.f-cover{position:relative;min-height:330px;overflow:hidden;background:linear-gradient(135deg,#ecfdf5,#e0f2fe 55%,#eef2ff)}
.mesh{position:absolute;inset:0;background:
  radial-gradient(60% 70% at 20% 20%,rgba(52,211,153,.55),transparent 62%),
  radial-gradient(55% 65% at 85% 30%,rgba(56,189,248,.5),transparent 60%),
  radial-gradient(60% 60% at 55% 95%,rgba(99,102,241,.32),transparent 62%)}
.glines{position:absolute;inset:0;opacity:.5;background-image:linear-gradient(rgba(255,255,255,.85) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.85) 1px,transparent 1px);background-size:40px 40px;mask-image:radial-gradient(circle at 60% 45%,#000 10%,transparent 72%);-webkit-mask-image:radial-gradient(circle at 60% 45%,#000 10%,transparent 72%)}
.f-cover .label{position:absolute;left:30px;top:26px;padding:6px 13px;border-radius:999px;background:rgba(255,255,255,.85);color:#0369a1;font-size:12px;font-weight:600;backdrop-filter:blur(6px)}
.f-cover .big{position:absolute;left:28px;bottom:20px;font-size:88px;font-weight:800;letter-spacing:-5px;color:rgba(15,23,42,.82);line-height:1}
.f-cover .big span{font-size:30px;letter-spacing:0;vertical-align:super;color:rgba(15,23,42,.45)}
.f-body{padding:38px 40px;display:flex;flex-direction:column;justify-content:center}
.tag{display:inline-block;width:fit-content;padding:5px 12px;border-radius:8px;font-size:11.5px;font-weight:700;letter-spacing:.6px;color:#047857;background:#d1fae5}
.f-body h3{font-size:27px;line-height:1.5;margin:16px 0 12px;font-weight:800;letter-spacing:-.6px;color:var(--ink)}
.f-body p{font-size:14.5px;line-height:1.9;color:var(--dim)}
.meta{display:flex;gap:18px;margin-top:24px;font-size:12.5px;color:var(--dim2)}

.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.card{background:#fff;border:1px solid var(--line);border-radius:18px;overflow:hidden;text-decoration:none;color:inherit;
  box-shadow:0 6px 22px rgba(15,23,42,.045);transition:transform .25s,box-shadow .25s}
.card:hover{transform:translateY(-4px);box-shadow:0 18px 40px rgba(15,23,42,.1)}
.thumb{height:150px;position:relative;overflow:hidden}
.ring{position:absolute;border-radius:50%;border:1.5px solid rgba(255,255,255,.75)}
.rg1{width:120px;height:120px;right:-24px;top:-30px}
.rg2{width:66px;height:66px;right:14px;top:12px}
.ico{position:absolute;left:20px;bottom:14px;font-size:24px}
.t1{background:linear-gradient(135deg,#d1fae5,#a7f3d0 45%,#bae6fd)}
.t2{background:linear-gradient(135deg,#e0f2fe,#bae6fd 50%,#ddd6fe)}
.t3{background:linear-gradient(135deg,#ecfccb,#d9f99d 50%,#a7f3d0)}
.t4{background:linear-gradient(135deg,#ede9fe,#ddd6fe 50%,#c7d2fe)}
.t5{background:linear-gradient(135deg,#cffafe,#a5f3fc 50%,#bae6fd)}
.t6{background:linear-gradient(135deg,#fef3c7,#fde68a 45%,#bbf7d0)}
.c-body{padding:20px 21px 22px}
.cat{font-size:11px;letter-spacing:1.2px;color:#0284c7;font-weight:800}
.card h4{font-size:17px;line-height:1.6;margin:9px 0;font-weight:700;letter-spacing:-.3px;color:var(--ink);
  display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.card p{font-size:13px;line-height:1.8;color:var(--dim2);margin:0;
  display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.c-foot{display:flex;justify-content:space-between;margin-top:16px;padding-top:14px;border-top:1px solid #f1f5f9;font-size:11.5px;color:var(--dim2)}

.band{margin:52px 0 0;border-radius:22px;padding:34px 42px;background:linear-gradient(110deg,#ecfdf5,#e0f2fe 50%,#eef2ff);
  border:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center}
.band h3{font-size:22px;font-weight:800;letter-spacing:-.4px;margin:0}
.band p{font-size:13.5px;color:var(--dim);margin-top:7px}
.input-fake{display:flex;gap:10px;align-items:center}

.lb-footer{max-width:1312px;margin:40px auto 0;padding:26px 64px 44px;display:flex;justify-content:space-between;
  color:var(--dim2);font-size:12px;border-top:1px solid #e8eef6;position:relative;z-index:1}
.lb-footer a{color:var(--dim2);text-decoration:none}
.lb-footer a:hover{color:#0284c7}

@media (max-width:1080px){
  .lb-nav,.hero-wrap,.lb-main,.lb-footer{padding-left:28px;padding-right:28px}
  .hero{grid-template-columns:1fr;gap:44px}
  .hero h1{font-size:46px}
  .grid{grid-template-columns:1fr 1fr}
  .featured{grid-template-columns:1fr}
  .f-cover{min-height:240px}
  .lb-nav{flex-wrap:wrap;gap:8px 12px;padding-top:12px;padding-bottom:12px}
  .navlinks{display:flex;order:3;width:100%;gap:20px;overflow-x:auto;white-space:nowrap}
  .navlinks a.on:after{bottom:-4px}
}
@media (max-width:680px){
  .hero h1{font-size:36px;letter-spacing:-1px}
  .grid{grid-template-columns:1fr}
  .stats{gap:22px}
  .band{flex-direction:column;align-items:flex-start;gap:18px}
  .f-body{padding:26px}
  .f-body h3{font-size:22px}
  .lb-footer{flex-direction:column;gap:8px}
}
</style>
