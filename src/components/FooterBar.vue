<template>
  <footer
    class="pt-4 pb-3 position-relative text-center animate__animated animate__fadeIn"
  >
    <div class="container">
      <p class="mb-2 small">
        © 2025 Universidade Tecnológica Federal do Paraná (UTFPR) –
        Desenvolvido por Vinícius Tabarão
      </p>

      <!-- Redes sociais -->
      <div class="d-flex justify-content-center gap-4 mb-2">
        <a
          href="https://facebook.com"
          target="_blank"
          class="social-icon text-reset"
        >
          <i class="bi bi-facebook"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          class="social-icon text-reset"
        >
          <i class="bi bi-instagram"></i>
        </a>
        <a
          href="https://github.com/tubarao33"
          target="_blank"
          class="social-icon text-reset"
        >
          <i class="bi bi-github"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          class="social-icon text-reset"
        >
          <i class="bi bi-linkedin"></i>
        </a>
      </div>
    </div>

    <!-- Botão flutuante para voltar ao topo -->
    <button
      v-show="showButton"
      class="btn btn-primary scroll-top animate__animated animate__fadeIn"
      @click="scrollToTop"
      aria-label="Voltar ao topo"
    >
      <i class="bi bi-arrow-up-short"></i>
    </button>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 200;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

/* Ícones sociais com transição */
.social-icon {
  font-size: 1.8rem;
  transition: 0.3s;
}

.social-icon:hover {
  color: var(--bs-primary);
  transform: scale(1.2);
}

/* Botão flutuante */
.scroll-top {
  position: fixed;
  bottom: 80px;
  right: 30px;
  width: 48px;
  height: 48px;
  font-size: 1.5rem;
  border-radius: 50%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}
</style>
