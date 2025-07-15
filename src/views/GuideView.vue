<!-- src/views/GuideView.vue -->
<template>
  <div class="guide-container">
    <div class="markdown-content">
      <h2>面试流程说明</h2>
      <ol>
        <li>
          <strong>挑战接受阶段</strong><br>
          提交 GitHub ID 和邮箱地址
        </li>
        <li>
          <strong>编码开发阶段</strong><br>
          使用 Vue 3 技术栈完成指定需求
        </li>
        <li>
          <strong>成果提交阶段</strong><br>
          提供 GitHub 仓库和 Vercel 部署链接
        </li>
        <li>
          <strong>技术评审阶段</strong><br>
          我们将评估您的代码质量和实现方案
        </li>
      </ol>
      
      <div class="tech-stack">
        <h3>技术栈要求</h3>
        <div class="stack-grid">
          <div class="stack-item">
            <span class="icon">⚡</span> Vue 3 Composition API
          </div>
          <div class="stack-item">
            <span class="icon">🚀</span> Vite 构建工具
          </div>
          <div class="stack-item">
            <span class="icon">📱</span> 响应式设计
          </div>
          <div class="stack-item">
            <span class="icon">📦</span> Pinia 状态管理
          </div>
        </div>
      </div>
      
      <div class="action-area">
        <button @click="$router.push('/accept')">接受挑战</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: '面试引导 - 无限状态',
  meta: [
    { name: 'description', content: '无限状态面试流程说明和挑战指南' }
  ]
});
</script>

<style scoped>
.guide-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: 100vh;
}

.markdown-content {
  line-height: 1.8;
  font-size: 1.1rem;
}

.markdown-content h2 {
  font-size: 1.8rem;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.markdown-content ol {
  padding-left: 1.5rem;
}

.markdown-content li {
  margin-bottom: 1.5rem;
}

.markdown-content strong {
  color: #42b983;
}

.tech-stack {
  margin: 3rem 0;
  padding-top: 2rem;
  border-top: 1px dashed #ddd;
}

.tech-stack h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.stack-item {
  padding: 1.2rem;
  background: #f9f9f9;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s;
}

.stack-item:hover {
  transform: translateY(-3px);
  background: #f0f0f0;
}

.icon {
  display: block;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.action-area {
  margin-top: 3rem;
  text-align: center;
}

button {
  padding: 0.8rem 2.5rem;
  font-size: 1.1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #33a06f;
}

@media (max-width: 768px) {
  .guide-container {
    padding: 1.5rem;
  }
  
  .markdown-content {
    font-size: 1rem;
  }
}
</style>