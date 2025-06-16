<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";

import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";

const route = useRoute();
const isHomeRoute = computed(() => route.path === "/");

const darkMode = ref(false);
const themeClass = computed(() =>
  darkMode.value ? "theme-dark" : "theme-light"
);

// Posição dinâmica da seta
const setaLeft = ref("0px");

const detectSystemTheme = () => {
  darkMode.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const alinharSetaComSobre = () => {
  const sobreLink =
    document.querySelector('a[href="/about"]') ||
    document.querySelector('a[href="/sobre"]');
  if (sobreLink) {
    const rect = (sobreLink as HTMLElement).getBoundingClientRect();
    setaLeft.value = `${rect.left + rect.width / 2}px`;
  }
};

onMounted(() => {
  detectSystemTheme();
  nextTick(() => {
    alinharSetaComSobre();
    window.addEventListener("resize", alinharSetaComSobre);
  });
});
</script>

<template>
  <div :class="['app-wrapper', themeClass]">
    <NavBar />

    <!-- Seta só visível na home -->
    <div
      v-if="isHomeRoute"
      class="indicador-menu-sobre"
      :style="{ left: setaLeft }"
    >
      <i
        class="bi bi-arrow-down-circle-fill animate__animated animate__bounce"
      ></i>
      <p class="small text-light">Comece por "Sobre"</p>
    </div>

    <RouterView />

    <FooterBar v-if="!isHomeRoute" />
  </div>
</template>

<style scoped>
.indicador-menu-sobre {
  position: absolute;
  top: 60px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%);
}

.indicador-menu-sobre i {
  font-size: 1.7rem;
  color: #0d6efd;
}
</style>
