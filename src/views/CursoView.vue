<template>
  <section class="container py-5" v-if="curso">
    <div class="text-center mb-5">
      <h1 class="display-5 fw-bold">{{ curso.nome }}</h1>
      <p class="lead text-muted">{{ curso.descricao }}</p>
      <span class="badge bg-primary mt-3">
        <i class="bi bi-geo-alt-fill me-1"></i> Campus: {{ curso.campus }}
      </span>
    </div>

    <div class="row justify-content-center text-light">
      <div class="col-md-8">
        <div class="mb-4">
          <h4 class="fw-semibold">🎯 Objetivos do curso</h4>
          <p>{{ curso.objetivos }}</p>
        </div>

        <div class="mb-4">
          <h4 class="fw-semibold">🎓 Perfil do egresso</h4>
          <p>{{ curso.egresso }}</p>
        </div>

        <div class="mb-4">
          <h4 class="fw-semibold">⏳ Duração estimada</h4>
          <p>{{ curso.duracao }}</p>
        </div>
      </div>
    </div>

    <div class="text-center mt-5">
      <router-link to="/courses" class="btn btn-outline-light">
        ← Voltar para cursos
      </router-link>
    </div>
  </section>

  <section v-else class="container text-center py-5">
    <h2 class="text-danger">Curso não encontrado</h2>
    <p class="text-muted">Verifique o ID informado na URL.</p>
    <router-link to="/courses" class="btn btn-outline-secondary mt-3">
      ← Voltar para cursos
    </router-link>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const cursoId = Number(route.params.id);

const cursos = [
  {
    id: 1,
    nome: "Engenharia de Software",
    descricao: "Desenvolvimento de sistemas complexos.",
    campus: "Toledo",
    objetivos: "Formar profissionais aptos a projetar, desenvolver e manter sistemas de software eficientes e escaláveis.",
    egresso: "Profissional capaz de atuar em empresas de tecnologia, consultoria, e pesquisa em engenharia de software.",
    duracao: "5 anos (10 semestres)"
  },
  {
    id: 2,
    nome: "Sistemas para Internet",
    descricao: "Aplicações web, front-end e back-end.",
    campus: "Toledo",
    objetivos: "Capacitar profissionais para desenvolver sistemas web responsivos, seguros e modernos.",
    egresso: "Pode atuar como desenvolvedor full-stack, analista de sistemas e arquiteto de software web.",
    duracao: "3 anos (6 semestres)"
  },
  {
    id: 3,
    nome: "Ciência da Computação",
    descricao: "Fundamentos teóricos e práticos da computação.",
    campus: "Curitiba",
    objetivos: "Formar profissionais com domínio de algoritmos, estruturas de dados, IA e sistemas operacionais.",
    egresso: "Atua em pesquisa, desenvolvimento de software, ciência de dados e TI corporativa.",
    duracao: "4 anos (8 semestres)"
  },
  {
    id: 4,
    nome: "Engenharia Eletrônica",
    descricao: "Sistemas eletrônicos e automação.",
    campus: "Londrina",
    objetivos: "Capacitar engenheiros para projetar, implementar e manter sistemas eletrônicos complexos.",
    egresso: "Trabalha em indústrias de automação, telecomunicações, hardware embarcado e pesquisa.",
    duracao: "5 anos (10 semestres)"
  },
  {
    id: 5,
    nome: "Administração",
    descricao: "Gestão, empreendedorismo e estratégia empresarial.",
    campus: "Pato Branco",
    objetivos: "Desenvolver competências para planejar, organizar e gerenciar organizações públicas e privadas.",
    egresso: "Atua como gestor, consultor empresarial ou empreendedor em diversos setores.",
    duracao: "4 anos (8 semestres)"
  },
  {
    id: 6,
    nome: "Tecnologia em Manutenção Industrial",
    descricao: "Manutenção de sistemas industriais.",
    campus: "Toledo",
    objetivos: "Formar tecnólogos para gerenciar e executar manutenção preditiva, preventiva e corretiva.",
    egresso: "Pode atuar em indústrias, empresas de manutenção técnica e fábricas de grande porte.",
    duracao: "3 anos (6 semestres)"
  }
];

const curso = ref<typeof cursos[0] | null>(null);

onMounted(() => {
  curso.value = cursos.find(c => c.id === cursoId) || null;
});
</script>

<style scoped>
.container {
  max-width: 800px;
}
h4 {
  color: #0dcaf0;
}
</style>

