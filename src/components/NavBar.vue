<script lang="ts" setup>
import { computed, ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { routes } from "@/router";
import { useI18n } from "vue-i18n";

const siteUrl = import.meta.env.VITE_BUILD_ADDRESS || "";
const router = useRouter();
const { t, locale } = useI18n();

const activeRoute = computed(() => router.currentRoute.value.path);
const isActive = (path: string) => path === activeRoute.value;

/* tema claro/escuro */
const darkMode = ref(false);
const detectThemeFromSystem = () => {
  darkMode.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme();
};
const applyTheme = () => {
  document.documentElement.setAttribute(
    "data-bs-theme",
    darkMode.value ? "dark" : "light"
  );
  localStorage.setItem("theme", darkMode.value ? "dark" : "light");
};
watch(darkMode, applyTheme);

/* idiomas */
const languages = [
  { code: "pt", name: "Português" },
  { code: "en", name: "English" },
  { code: "es", name: "Español" }
];
const isLanguageOpen = ref(false);
const changeLanguage = (lang: string) => {
  locale.value = lang;
  isLanguageOpen.value = false;
  localStorage.setItem("language", lang);
};

onMounted(() => {
  detectThemeFromSystem();
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", detectThemeFromSystem);

  const savedLanguage = localStorage.getItem("language");
  if (savedLanguage && languages.some((l) => l.code === savedLanguage)) {
    locale.value = savedLanguage;
  }
});

/* busca */
const query = ref("");
const filteredRoutes = computed(() =>
  routes.filter((r) =>
    r.children?.some((c) =>
      c.name?.toLowerCase().includes(query.value.toLowerCase())
    )
  )
);
</script>

<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary sticky-top">
    <div class="container">
      <button
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        id="navbarNav"
        class="collapse navbar-collapse d-flex justify-content-between"
      >
        <!-- links das rotas -->
        <ul class="navbar-nav">
          <li
            v-for="route in routes"
            :key="route.path"
            class="nav-item text-uppercase"
          >
            <router-link
              :to="route.path"
              class="nav-link"
              :class="{ active: isActive(route.path) }"
            >
              {{
                route.children[0]?.name
                  ? t(`routes.${route.children[0].name.toLowerCase()}`)
                  : ""
              }}
            </router-link>
          </li>
        </ul>

        <!-- busca + idioma + switch tema -->
        <div class="d-flex align-items-center">
          <input
            v-model="query"
            :placeholder="t('navbar.search')"
            class="form-control me-2"
          />

          <!-- dropdown resultados -->
          <ul v-if="query && filteredRoutes.length" class="search-results">
            <li v-for="r in filteredRoutes" :key="r.path">
              {{ r.children?.[0]?.name || t("navbar.noResults") }}
            </li>
          </ul>

          <!-- seletor de idioma -->
          <div class="language-selector">
            <button
              class="btn btn-outline-secondary dropdown-toggle"
              @click="isLanguageOpen = !isLanguageOpen"
              :aria-expanded="isLanguageOpen"
            >
              {{ t("language") }}:
              <span class="text-success">
                {{ t("languageNames." + locale) }}
              </span>
            </button>

            <ul
              class="dropdown-menu"
              :class="{ show: isLanguageOpen }"
              @click.stop
            >
              <li v-for="lang in languages" :key="lang.code">
                <button
                  class="dropdown-item w-100 text-start"
                  @click="changeLanguage(lang.code)"
                >
                  {{ lang.name }}
                </button>
              </li>
            </ul>
          </div>

          <!-- dark-mode switch -->
          <div class="form-check form-switch ms-3">
            <input
              id="darkModeSwitch"
              class="form-check-input"
              type="checkbox"
              v-model="darkMode"
            />
            <label class="form-check-label" for="darkModeSwitch">
              {{ t("navbar.darkMode") }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  padding: 0.5rem 1rem;
}

/* === links do menu: hover + ativo === */
.nav-link {
  position: relative;
  color: #fff;
  padding: 0.5rem 0.75rem;
  transition: color 0.3s;
}
.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background: #0dcaf0;
  transition: width 0.3s;
}
.nav-link:hover {
  color: #0dcaf0;
}
.nav-link:hover::after {
  width: 100%;
}
.router-link-active,
.nav-link.active {
  color: #0dcaf0;
}
.router-link-active::after,
.nav-link.active::after {
  width: 100%;
}

/* Dropdown idioma */
.language-selector {
  position: relative;
  margin-right: 1rem;
}

.btn-outline-secondary {
  background: transparent;
  border-color: #fff;
  color: #fff;
  transition: 0.3s;
}
.btn-outline-secondary:hover {
  background: #fff;
  color: #000;
}

.dropdown-menu {
  min-width: 150px;
  background: #343a40;
  border: 1px solid #495057;
  display: none;
}
.dropdown-menu.show {
  display: block;
}

.dropdown-item {
  color: #fff;
}
.dropdown-item:hover {
  background: #495057;
}

/* resultado da busca */
.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border: 1px solid #ccc;
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1000;
  width: 100%;
}
</style>

