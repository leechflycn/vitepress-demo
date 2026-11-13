<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { data as allPosts } from './posts.data.js'

const { frontmatter } = useData()
const prefix = computed(() => frontmatter.value.prefix || '/')
const title = computed(() => frontmatter.value.pageTitle || '文章列表')
const sub = computed(() => frontmatter.value.pageDesc || '')

const list = computed(() => (allPosts || []).filter((p) => p.url.startsWith(prefix.value)))
const grads = ['t1', 't2', 't3', 't4', 't5', 't6']
</script>

<template>
  <div class="cat-page">
    <div class="head">
      <div class="crumb"><a href="/">首页</a> / {{ title }}</div>
      <h1>{{ title }}</h1>
      <p v-if="sub">{{ sub }}</p>
      <div class="count">共 {{ list.length }} 篇</div>
    </div>
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
          <div class="c-foot"><span>{{ p.date }}</span><span>{{ p.minutes }} min</span></div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.cat-page{max-width:1120px;margin:0 auto;padding:56px 32px 80px}
.crumb{font-size:12.5px;color:#94a3b8;margin-bottom:14px}
.crumb a{color:#94a3b8;text-decoration:none}
.head h1{font-size:38px;font-weight:800;letter-spacing:-1px;margin:0 0 10px;color:var(--vp-c-text-1)}
.head p{color:var(--vp-c-text-2);font-size:15px;margin:0}
.count{display:inline-block;margin-top:14px;padding:4px 12px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:600}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:34px}
.card{background:var(--vp-c-bg);border:1px solid var(--vp-c-divider);border-radius:18px;overflow:hidden;
  text-decoration:none;color:inherit;transition:transform .25s,box-shadow .25s;box-shadow:0 6px 22px rgba(15,23,42,.05)}
.card:hover{transform:translateY(-4px);box-shadow:0 18px 40px rgba(15,23,42,.12)}
.thumb{height:140px;position:relative;overflow:hidden}
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
.c-body{padding:18px 20px 20px}
.cat{font-size:11px;letter-spacing:1.2px;color:#0284c7;font-weight:800}
.card h4{font-size:16.5px;line-height:1.6;margin:9px 0;font-weight:700;color:var(--vp-c-text-1);
  display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.card p{font-size:13px;line-height:1.8;color:var(--vp-c-text-3);margin:0;
  display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.c-foot{display:flex;justify-content:space-between;margin-top:14px;padding-top:12px;border-top:1px solid var(--vp-c-divider);font-size:11.5px;color:var(--vp-c-text-3)}
@media (max-width:1000px){.grid{grid-template-columns:1fr 1fr}}
@media (max-width:640px){.grid{grid-template-columns:1fr}.head h1{font-size:30px}}
</style>
