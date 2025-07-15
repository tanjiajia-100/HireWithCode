<!-- src/views/WelcomeView.vue -->
<template>
  <div class="welcome-container">
    <img src="@/assets/logo.png" alt="无限状态Logo" class="logo" />
    <h1 class="welcome-text">欢迎来到无限状态线上面试环节，期待你的加入！</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/guide')
  }, 2000)
})
</script>

<style scoped>
.welcome-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
}

.logo {
  width: min(200px, 30vw);
  height: auto;
  margin-bottom: 2rem;
}

.welcome-text {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 500;
  max-width: 800px;
}
</style>
