<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

import NavBar from "@/components/NavBar.vue";
import AppCarousel from "@/components/AppCarousel.vue";

const { t } = useI18n();
const route = useRoute();
</script>

<template>
  <div id="app">
    <!-- Navbar com os botões -->
    <NavBar />

    <!-- Título apenas na home -->
    <h1 v-if="route.path === '/'">{{ t("welcome") }}</h1>

    <!-- Carrossel visível em todas as rotas -->
    <AppCarousel />

    <!-- Conteúdo da rota atual -->
    <RouterView />

    <!-- Seção de Contato aparece apenas em /contacts -->
    <section
      v-if="route.path === '/contacts'"
      class="container text-center py-5"
    >
      <h2 class="fw-bold">Contato</h2>
      <p class="text-muted">Fale conosco</p>
      <p>Se você tiver dúvidas ou sugestões, entre em contato:</p>
      <p><strong>Email:</strong> vinicius@utfpr.edu.br</p>
      <p><strong>Telefone:</strong> (45) 99999-9999</p>
      <p><strong>Endereço:</strong> UTFPR - Campus Toledo, PR</p>
    </section>
  </div>
</template>

<style scoped>
#app {
  padding-top: 0;
  min-height: 100vh;
  background-color: var(--bs-body-bg, #212529);
  color: var(--bs-body-color, #ffffff);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

h1 {
  text-align: center;
  padding: 1rem 0;
  margin: 0;
}

/* Corrige cor do modo claro para texto secundário */
.text-muted {
  color: var(--bs-secondary-color, #6c757d) !important;
}
</style>

<style>
/* Estilo global para garantir que o Bootstrap reconheça o tema */
:root[data-bs-theme="dark"] {
  --bs-body-bg: #212529;
  --bs-body-color: #ffffff;
  --bs-secondary-color: #aaaaaa;
}

:root[data-bs-theme="light"] {
  --bs-body-bg: #ffffff;
  --bs-body-color: #212529;
  --bs-secondary-color: #6c757d;
}
</style>
