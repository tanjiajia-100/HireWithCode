<!-- src/views/AcceptView.vue -->
<template>
  <div class="form-container">
    <div class="form-card">
      <h2>接受挑战</h2>
      <p class="subtitle">请输入您的信息继续</p>
      
      <div class="form-content">
        <BaseInput
          id="githubId"
          label="GitHub ID"
          placeholder="请输入您的GitHub用户名"
          v-model="formData.githubId"
          :error="errors.githubId"
          required
        />
        
        <BaseInput
          id="email"
          label="电子邮箱"
          type="email"
          placeholder="请输入您的邮箱"
          v-model="formData.email"
          :error="errors.email"
          required
        />
        
        <BaseButton 
          :disabled="isSubmitting"
          @click="submitForm"
          class="submit-btn"
        >
          {{ isSubmitting ? '提交中...' : '接受挑战' }}
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
  title: '接受挑战 - 无限状态',
  meta: [
    { name: 'description', content: '接受挑战并提交GitHub和邮箱信息' }
  ]
});

const formData = reactive({
  githubId: '',
  email: ''
});

const errors = reactive({
  githubId: '',
  email: ''
});

const isSubmitting = ref(false);
const router = useRouter();
const challengeStore = useChallengeStore();

function validateForm() {
  let isValid = true;
  
  if (!formData.githubId.trim()) {
    errors.githubId = 'GitHub ID不能为空';
    isValid = false;
  } else {
    errors.githubId = '';
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    errors.email = '邮箱不能为空';
    isValid = false;
  } else if (!emailRegex.test(formData.email)) {
    errors.email = '请输入有效的邮箱地址';
    isValid = false;
  } else {
    errors.email = '';
  }
  
  return isValid;
}

async function submitForm() {
  if (!validateForm()) return;
  
  isSubmitting.value = true;
  
  try {
    // 实际项目中这里会调用API
    challengeStore.githubId = formData.githubId;
    challengeStore.email = formData.email;
    
    // 模拟API请求延迟
    await new Promise(resolve => setTimeout(resolve, 800));
    
    router.push('/complete');
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