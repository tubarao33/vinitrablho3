<template>
  <section class="container pt-3">
    <!-- TÍTULO CENTRALIZADO COM ANIMAÇÃO E ESPAÇAMENTO SUPERIOR -->
    <div class="text-center mt-5 mb-3">
      <h1 class="display-5 fw-bold mb-2 animate__animated animate__fadeInDown">
        Sobre nós
      </h1>
      <p class="text-muted animate__animated animate__fadeIn animate__delay-1s">
        Conheça o propósito deste projeto
      </p>
    </div>

    <!-- TEXTO E IMAGEM PRINCIPAL -->
    <div class="row align-items-center g-5">
      <div class="col-md-6">
        <p>
          Este site foi desenvolvido como parte da disciplina
          <strong>Web Front-End II</strong> da UTFPR, utilizando Vue 3, Vite,
          TypeScript, Bootstrap 5 e i18n.
        </p>
        <p>
          O projeto demonstra boas práticas de front-end, com suporte a
          múltiplos idiomas, formulário funcional e responsividade.
        </p>
        <p>Desenvolvido por <strong>Vinícius Tabarão</strong>, aluno UTFPR.</p>
      </div>

      <div class="col-md-6">
        <img
          src="/utfpr-toledo.jpeg"
          alt="UTFPR Toledo"
          class="img-fluid rounded shadow"
          style="max-height: 350px; object-fit: cover"
        />
      </div>
    </div>

    <!-- IMAGEM SECUNDÁRIA + MAPA -->
    <div class="row align-items-center justify-content-center g-4 my-5">
      <div class="col-md-6 text-center">
        <img
          src="/images.jpeg"
          alt="Bloco UTFPR"
          class="img-fluid rounded shadow w-100"
          style="height: 350px; object-fit: cover"
        />
      </div>

      <div class="col-md-6 text-center">
        <h5 class="fw-semibold mb-3">Localização</h5>
        <iframe
          class="w-100 rounded shadow"
          height="350"
          style="object-fit: cover; border: 0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.270707659006!2d-53.752!3d-24.724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3e9f6f164ec31%3A0x6a2f57b3a5b08cf0!2sUTFPR%20Toledo!5e0!3m2!1spt-BR!2sbr!4v123"
        ></iframe>
      </div>
    </div>

    <!-- FORMULÁRIO DE CONTATO -->
    <div class="text-center my-5">
      <h2 class="fw-semibold">Fale conosco</h2>
    </div>

    <form @submit.prevent="enviarFormulario" class="row g-3">
      <div class="col-md-6">
        <label for="nome" class="form-label">Nome:</label>
        <input
          id="nome"
          type="text"
          class="form-control"
          placeholder="Digite seu nome"
          v-model="nome"
          required
        />
      </div>

      <div class="col-md-6">
        <label for="email" class="form-label">Email:</label>
        <input
          id="email"
          type="email"
          class="form-control"
          placeholder="email@exemplo.com"
          v-model="email"
          required
        />
      </div>

      <div class="col-12 text-end">
        <button type="submit" class="btn btn-primary px-4">Enviar</button>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const nome = ref("");
const email = ref("");

const enviarFormulario = () => {
  console.log("Nome:", nome.value);
  console.log("Email:", email.value);
  alert("Mensagem enviada com sucesso!");
};
</script>

<style scoped>
.text-muted {
  color: var(--bs-secondary-color, #6c757d) !important;
}
</style>
