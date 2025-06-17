<template>
  <section class="container py-5">
    <div class="text-center mb-4">
      <h1 class="display-5 fw-bold">{{ t("courses.title") }}</h1>
      <p class="text-muted">{{ t("courses.description") }}</p>

      <div class="mt-4 mb-3">
        <input
          v-model="busca"
          type="text"
          class="form-control"
          :placeholder="t('courses.placeholder')"
          @input="scrollToCursos"
        />
      </div>
    </div>

    <div id="lista-cursos" class="row row-cols-1 row-cols-md-3 g-4">
      <div
        class="col animate__animated animate__fadeInUp"
        v-for="(curso, index) in cursosFiltrados"
        :key="curso.id"
        :style="{ animationDelay: `${index * 100}ms` }"
      >
        <div class="card h-100 shadow-sm card-hover">
          <div class="card-body">
            <h5 class="card-title">{{ curso.nome }}</h5>
            <p class="card-text">{{ curso.descricao }}</p>
          </div>
        </div>
      </div>

      <div v-if="cursosFiltrados.length === 0" class="col-12 text-center mt-4">
        <p>{{ t("courses.noResults") }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const busca = ref("");
const route = useRoute();

// Preenche o campo busca se existir parâmetro de query ?q=
busca.value = route.query.q?.toString() || "";

const cursos = ref([
  {
    id: 1,
    nome: "Engenharia de Software",
    descricao: "Curso voltado para desenvolvimento de sistemas complexos.",
  },
  {
    id: 2,
    nome: "Sistemas para Internet",
    descricao: "Curso com foco em aplicações web, front-end e back-end.",
  },
  {
    id: 3,
    nome: "Ciência da Computação",
    descricao: "Abrange fundamentos teóricos e práticos da computação.",
  },
  {
    id: 4,
    nome: "Engenharia Eletrônica",
    descricao:
      "Forma profissionais capacitados em sistemas eletrônicos e automação.",
  },
  {
    id: 5,
    nome: "Engenharia Ambiental e Sanitária",
    descricao:
      "Foca na sustentabilidade, tratamento de resíduos e recursos hídricos.",
  },
  {
    id: 6,
    nome: "Engenharia de Bioprocessos e Biotecnologia",
    descricao:
      "Integra biotecnologia com processos industriais e laboratoriais.",
  },
  {
    id: 7,
    nome: "Licenciatura em Química",
    descricao: "Forma professores com sólida base em química e didática.",
  },
  {
    id: 8,
    nome: "Administração",
    descricao:
      "Curso com foco em gestão, empreendedorismo e estratégia empresarial.",
  },
  {
    id: 9,
    nome: "Tecnologia em Processos Químicos",
    descricao:
      "Foca em operações industriais químicas com conhecimento técnico-aplicado.",
  },
  {
    id: 10,
    nome: "Tecnologia em Sistemas de Telecomunicações",
    descricao:
      "Curso com foco em redes, comunicação digital e sistemas de telecomunicações.",
  },
  {
    id: 11,
    nome: "Tecnologia em Manutenção Industrial",
    descricao:
      "Capacita para atuar em manutenção de sistemas industriais e equipamentos.",
  },
  {
    id: 12,
    nome: "Tecnologia em Automação Industrial",
    descricao:
      "Formação técnica voltada para automação de processos industriais.",
  },
  {
    id: 13,
    nome: "Tecnologia em Fabricação Mecânica",
    descricao:
      "Aborda fabricação mecânica com foco em processos industriais modernos.",
  },
  {
    id: 14,
    nome: "Engenharia de Produção",
    descricao: "Foco em gestão da produção, processos e qualidade industrial.",
  },
  {
    id: 15,
    nome: "Tecnologia da Informação",
    descricao:
      "Curso voltado para infraestrutura, redes e suporte a sistemas de informação.",
  },
]);

const cursosFiltrados = computed(() => {
  const termo = busca.value.toLowerCase();
  return cursos.value.filter(
    (curso) =>
      curso.nome.toLowerCase().includes(termo) ||
      curso.descricao.toLowerCase().includes(termo)
  );
});

const scrollToCursos = () => {
  const el = document.getElementById("lista-cursos");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
@import "animate.css";

.card-hover:hover {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  transition: 0.3s;
  cursor: pointer;
}
</style>
