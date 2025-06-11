<template>
  <section class="container">
    <transition name="fade">
      <div>
        <h1 class="center-align">Sobre nós</h1>

        <div class="grid">
          <div class="col">
            <p>
              Este site foi desenvolvido como parte da disciplina
              <strong>Web Front-End II</strong> da UTFPR, utilizando Vue 3,
              Vite, TypeScript, Beercss e i18n.
            </p>

            <p>
              O projeto demonstra boas práticas de front-end, com suporte a
              múltiplos idiomas, formulário funcional e responsividade.
            </p>

            <p>
              Desenvolvido por <strong>Vinícius Tabarão</strong>, aluno UTFPR.
            </p>
          </div>

          <div class="col">
            <img
              src="/utfpr-toledo.jpeg"
              alt="UTFPR Toledo"
              style="width: 100%; border-radius: 10px"
            />
          </div>
        </div>

        <!-- FORMULÁRIO DE CONTATO COM ANIMAÇÃO -->
        <transition name="fade">
          <div class="margin-top">
            <h2 class="center-align">Fale conosco</h2>

            <form @submit.prevent="enviarFormulario" class="margin">
              <div class="field">
                <label for="nome">Nome:</label>
                <input
                  id="nome"
                  type="text"
                  class="control"
                  placeholder="Digite seu nome"
                  v-model="nome"
                  required
                />
              </div>

              <div class="field">
                <label for="email">Email:</label>
                <input
                  id="email"
                  type="email"
                  class="control"
                  placeholder="email@exemplo.com"
                  v-model="email"
                  required
                />
              </div>

              <button type="submit" class="btn margin-top">Enviar</button>
            </form>
          </div>
        </transition>
      </div>
    </transition>

    <Footer />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Footer from "@/components/FooterBar.vue";

const nome = ref("");
const email = ref("");

const enviarFormulario = () => {
  console.log("Nome:", nome.value);
  console.log("Email:", email.value);
  alert("Mensagem enviada com sucesso!");
};
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
.margin-top {
  margin-top: 3rem;
}
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
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
