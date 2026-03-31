<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute, useData } from 'vitepress'
import { watch, nextTick, ref, onMounted } from 'vue'

const route = useRoute()
const { isDark, frontmatter } = useData()
const container = ref(null)

const initComments = () => {
  if (!container.value || frontmatter.value.comments === false || frontmatter.value.layout === 'home') return
  container.value.innerHTML = ''
  const script = document.createElement('script')
  script.src = 'https://utteranc.es/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'
  script.setAttribute('repo', 'leechflycn/vitepress-demo')
  script.setAttribute('issue-term', 'pathname')
  script.setAttribute('theme', isDark.value ? 'github-dark' : 'github-light')
  container.value.appendChild(script)
}

const initBusuanzi = () => {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script')
    script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
    script.async = true
    document.head.appendChild(script)
  }
}

onMounted(() => {
  initComments()
  initBusuanzi()
})

watch(() => route.path, () => {
  nextTick(() => {
    initComments()
  })
})

watch(isDark, () => {
  initComments()
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <div v-if="frontmatter.layout !== 'home'" ref="container" class="comments-container"></div>
    </template>
  </DefaultTheme.Layout>
</template>

<style>
.comments-container {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>