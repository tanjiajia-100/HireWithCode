<!-- src/components/common/BaseButton.vue -->
<template>
  <button 
    :type="type"
    :class="['base-button', { 'full-width': fullWidth }]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'button'
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

defineEmits(['click']);
</script>

<style scoped>
.base-button {
  padding: 0.8rem 2rem;
  font-size: 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 
    background-color 0.3s, 
    transform 0.2s,
    opacity 0.3s;
}

.base-button:hover {
  background-color: #33a06f;
  transform: translateY(-2px);
}

.base-button:active {
  transform: translateY(0);
}

.base-button:disabled {
  background-color: #a0a0a0;
  cursor: not-allowed;
  opacity: 0.7;
  transform: none;
}

.full-width {
  width: 100%;
}
</style>