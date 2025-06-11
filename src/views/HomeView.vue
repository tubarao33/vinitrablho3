<template>
  <section class="container">
    <transition name="fade">
      <div>
        <h1 class="center-align">Sobre nós</h1>

        <div class="grid">
          <div class="col">
            <p>
              Este site foi desenvolvido como parte da disciplina <strong>Web Front-End II</strong> da UTFPR,
              utilizando Vue 3, Vite, TypeScript, Beercss e i18n.
            </p>

            <p>
              O projeto demonstra boas práticas de front-end, com suporte a múltiplos idiomas,
              formulário funcional e responsividade.
            </p>

            <p>
              Desenvolvido por <strong>Vinícius Tabarão</strong>, aluno UTFPR.
            </p>
          </div>

          <div class="col">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Campus_UFTPR-Toledo_2023.jpeg"
              alt="UTFPR Toledo"
              style="width: 100%; border-radius: 10px;"
            />
          </div>
        </div>
      </div>
    </transition>

    <Footer />
  </section>
</template>

<script setup lang="ts">
import Footer from '@/components/FooterBar.vue'
</script>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
}
.col {
  flex: 1;
  min-width: 280px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
