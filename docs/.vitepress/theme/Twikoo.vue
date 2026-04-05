<template>
  <div class="article-meta-container" v-if="frontmatter.layout !== 'home'">
    <div class="busuanzi-stats">
      <span>👁️🗨️ 本文被围观了 <span id="busuanzi_value_page_pv"></span> 次</span>
    </div>
  </div>
  <div class="twikoo-container" v-if="frontmatter.layout !== 'home'">
    <div id="twikoo"></div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute, useData } from 'vitepress'

const route = useRoute()
const { frontmatter } = useData()

const initTwikoo = () => {
  if (typeof window !== 'undefined' && frontmatter.value.layout !== 'home') {
    import('twikoo').then(twikoo => {
      twikoo.default.init({
        envId: 'https://twikoo.leechbox.xyz',
        el: '#twikoo',
        path: route.path
      })
    })
  }
}

onMounted(() => {
  initTwikoo()
})

watch(() => route.path, () => {
  setTimeout(() => {
    initTwikoo()
  }, 500)
})
</script>

<style scoped>
.article-meta-container {
  margin-top: 2rem;
  padding: 1rem 0;
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-size: 0.9em;
  text-align: right;
}
.twikoo-container {
  margin-top: 1rem;
  padding: 2rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
}
</style>