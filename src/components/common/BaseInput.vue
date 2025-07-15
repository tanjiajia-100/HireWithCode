<!-- src/components/common/BaseInput.vue -->
<template>
  <div class="input-group">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :placeholder="placeholder"
      :required="required"
    />
    <p v-if="error" class="error-text">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: String,
  label: String,
  type: { type: String, default: 'text' },
  modelValue: String,
  placeholder: String,
  required: { type: Boolean, default: false },
  error: String
});
</script>

<style scoped>
.input-group {
  margin-bottom: 1.8rem;
}

label {
  display: block;
  margin-bottom: 0.6rem;
  font-weight: 500;
  color: #333;
}

input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
}

.error-text {
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

@media (max-width: 480px) {
  .input-group {
    margin-bottom: 1.3rem;
  }
  
  input {
    padding: 10px 12px;
  }
}
</style>