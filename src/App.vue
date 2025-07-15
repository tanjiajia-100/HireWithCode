<!-- src/App.vue -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* 响应式媒体断点 */
@media (max-width: 1024px) {
  html {
    font-size: 95%;
  }
}

@media (max-width: 768px) {
  html {
    font-size: 90%;
  }
}

@media (max-width: 480px) {
  html {
    font-size: 85%;
  }
}
</style>