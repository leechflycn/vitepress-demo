<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute, useData } from 'vitepress'
import { watch, nextTick, ref, onMounted } from 'vue'

const route = useRoute()
const { isDark, frontmatter } = useData()
const container = ref(null)

const initComments = () => {
  if (!container.value || frontmatter.value.comments === false) return
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

onMounted(() => {
  initComments()
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
      <div ref="container" class="comments-container"></div>
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
