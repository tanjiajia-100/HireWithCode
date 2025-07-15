<!-- src/views/CompleteView.vue -->
<template>
  <div class="form-container">
    <div class="form-card">
      <h2>完成挑战</h2>
      <p class="subtitle">请提交您的项目信息</p>
      
      <div class="form-content">
        <BaseInput
          id="repoUrl"
          label="GitHub仓库URL"
          placeholder="https://github.com/username/project-name"
          v-model="formData.repoUrl"
          :error="errors.repoUrl"
          required
        />
        
        <BaseInput
          id="vercelUrl"
          label="Vercel在线地址"
          placeholder="https://your-project.vercel.app"
          v-model="formData.vercelUrl"
          :error="errors.vercelUrl"
          required
        />
        
        <BaseButton 
          :disabled="isSubmitting"
          @click="submitForm"
          class="submit-btn"
        >
          {{ isSubmitting ? '提交中...' : '提交作品' }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useChallengeStore } from '@/stores/challengeStore';
import BaseInput from '@/components/common/BaseInput.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import { useHead } from '@vueuse/head';

useHead({
  title: '完成挑战 - 无限状态',
  meta: [
    { name: 'description', content: '提交GitHub仓库和Vercel部署链接' }
  ]
});

const formData = reactive({
  repoUrl: '',
  vercelUrl: ''
});

const errors = reactive({
  repoUrl: '',
  vercelUrl: ''
});

const isSubmitting = ref(false);
const router = useRouter();
const challengeStore = useChallengeStore();

function validateForm() {
  let isValid = true;
  
  const githubRegex = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+(\/)?$/;
  const vercelRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)?vercel\.app\/?$/;
  
  if (!formData.repoUrl.trim()) {
    errors.repoUrl = '仓库地址不能为空';
    isValid = false;
  } else if (!githubRegex.test(formData.repoUrl)) {
    errors.repoUrl = '请输入有效的GitHub仓库地址';
    isValid = false;
  } else {
    errors.repoUrl = '';
  }
  
  if (!formData.vercelUrl.trim()) {
    errors.vercelUrl = 'Vercel地址不能为空';
    isValid = false;
  } else if (!vercelRegex.test(formData.vercelUrl)) {
    errors.vercelUrl = '请输入有效的Vercel域名';
    isValid = false;
  } else {
    errors.vercelUrl = '';
  }
  
  return isValid;
}

async function submitForm() {
  if (!validateForm()) return;
  
  isSubmitting.value = true;
  
  try {
    // 实际项目中这里会调用API
    challengeStore.repoUrl = formData.repoUrl;
    challengeStore.vercelUrl = formData.vercelUrl;
    
    // 模拟API请求延迟
    await new Promise(resolve => setTimeout(resolve, 800));
    
    alert('🎉 提交成功！感谢您参与无限状态面试挑战');
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  background-color: #f9fafb;
}

.form-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  padding: 2.5rem;
  width: 100%;
  max-width: 480px;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #333;
  text-align: center;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
}

.form-content {
  display: flex;
  flex-direction: column;
}

.submit-btn {
  margin-top: 1rem;
  font-size: 1.1rem;
  padding: 0.9rem;
}

@media (max-width: 600px) {
  .form-card {
    padding: 1.8rem;
    max-width: 100%;
  }
  
  h2 {
    font-size: 1.6rem;
  }
}
</style>