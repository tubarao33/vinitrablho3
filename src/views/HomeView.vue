<template>
  <section class="container text-center mt-5">
    <h1 class="display-4 fw-bold text-light">Bem-vindo!</h1>
    <p class="text-light">Este é o projeto da disciplina Web Front-End II.</p>
    <p class="text-light">Use o menu acima para navegar.</p>
  </section>
</template>

<script setup lang="ts">
// Nenhum script necessário
</script>

<style scoped>
.container {
  animation: fadeIn 0.5s ease-in-out;
  background-color: transparent;
  color: white;
  position: relative;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
