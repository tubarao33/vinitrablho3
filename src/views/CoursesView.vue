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

    <div v-if="Object.keys(cursosPorCampus).length > 0" id="lista-cursos">
      <div v-for="(lista, campus) in cursosPorCampus" :key="campus" class="mb-5">
        <h3 class="text-info border-bottom pb-2">{{ campus }}</h3>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div
            class="col animate__animated animate__fadeInUp"
            v-for="(curso, index) in lista"
            :key="curso.id"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <div
              class="card h-100 shadow-sm card-hover"
              role="button"
              tabindex="0"
              @click="irParaCurso(curso.id)"
            >
              <div class="card-body">
                <h5 class="card-title">{{ curso.nome }}</h5>
                <p class="card-text">{{ curso.descricao }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="col-12 text-center mt-4">
      <p>{{ t("courses.noResults") }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const route = useRoute();
const router = useRouter();

const busca = ref(route.query.q?.toString() || "");

const cursos = ref([
  { id: 1, nome: "Engenharia de Software", descricao: "Desenvolvimento de sistemas complexos.", campus: "Toledo" },
  { id: 2, nome: "Sistemas para Internet", descricao: "Aplicações web, front-end e back-end.", campus: "Toledo" },
  { id: 3, nome: "Ciência da Computação", descricao: "Fundamentos teóricos e práticos da computação.", campus: "Curitiba" },
  { id: 4, nome: "Engenharia Eletrônica", descricao: "Sistemas eletrônicos e automação.", campus: "Londrina" },
  { id: 5, nome: "Administração", descricao: "Gestão, empreendedorismo e estratégia empresarial.", campus: "Pato Branco" },
  { id: 6, nome: "Tecnologia em Manutenção Industrial", descricao: "Manutenção de sistemas industriais.", campus: "Toledo" }
]);

const cursosFiltrados = computed(() => {
  const termo = busca.value.toLowerCase();
  return cursos.value.filter(
    curso =>
      curso.nome.toLowerCase().includes(termo) ||
      curso.descricao.toLowerCase().includes(termo)
  );
});

const cursosPorCampus = computed(() => {
  const agrupado: Record<string, typeof cursos.value> = {};
  for (const curso of cursosFiltrados.value) {
    if (!agrupado[curso.campus]) {
      agrupado[curso.campus] = [];
    }
    agrupado[curso.campus].push(curso);
  }
  return agrupado;
});

const irParaCurso = (id: number) => {
  router.push({ name: "curso", params: { id } });
};

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
>
