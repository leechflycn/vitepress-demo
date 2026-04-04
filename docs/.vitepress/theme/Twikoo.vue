<template>
  <div class="twikoo-container">
    <div id="twikoo"></div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

const initTwikoo = () => {
  if (typeof window !== 'undefined') {
    import('twikoo').then(twikoo => {
      twikoo.default.init({
        envId: 'http://192.168.1.104:8080',
        el: '#twikoo',
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
.twikoo-container {
  margin-top: 2rem;
  padding: 2rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
}
</style>
