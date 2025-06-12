<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { routes } from "@/router";
import { useI18n } from "vue-i18n";

const router = useRouter();
const { t, locale } = useI18n();

const activeRoute = computed(() => router.currentRoute.value.path);
const isActive = (path: string) => path === activeRoute.value;

const query = ref("");
const filteredRoutes = computed(() =>
  routes.filter((route) =>
    route.name?.toLowerCase().includes(query.value.toLowerCase())
  )
);

const languages = [
  { code: "pt", name: "Português" },
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
];
const isLanguageOpen = ref(false);

const changeLanguage = (lang: string) => {
  locale.value = lang;
  isLanguageOpen.value = false;
  localStorage.setItem("language", lang);
};

const darkMode = ref(false);
const applyTheme = () => {
  const theme = darkMode.value ? "dark" : "light";
  document.documentElement.setAttribute("data-bs-theme", theme);
  document.body.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);
};

onMounted(() => {
  darkMode.value = localStorage.getItem("theme") === "dark";
  applyTheme();
});
</script>

<template>
  <nav
    class="navbar navbar-expand-md sticky-top bg-body-tertiary animate__animated animate__fadeInDown"
  >
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
        <ul class="navbar-nav">
          <li
            v-for="route in routes"
            :key="route.path"
            class="nav-item text-uppercase"
          >
            <RouterLink
              :to="route.path"
              class="nav-link"
              :class="{ active: isActive(route.path) }"
            >
              {{ route.name ? t(`routes.${route.name.toLowerCase()}`) : "" }}
            </RouterLink>
          </li>
        </ul>

        <div class="d-flex align-items-center position-relative">
          <input
            v-model="query"
            :placeholder="t('navbar.search')"
            class="form-control me-2"
          />

          <ul v-if="query && filteredRoutes.length" class="search-results">
            <li v-for="r in filteredRoutes" :key="r.path">
              {{ r.name || t("navbar.noResults") }}
            </li>
          </ul>

          <div class="language-selector">
            <button
              class="btn btn-outline-secondary dropdown-toggle"
              @click="isLanguageOpen = !isLanguageOpen"
              :aria-expanded="isLanguageOpen"
            >
              {{ t("language") }}:
              <span class="text-success">{{
                t("languageNames." + locale)
              }}</span>
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

          <div class="form-check form-switch ms-3">
            <input
              id="darkModeSwitch"
              class="form-check-input"
              type="checkbox"
              v-model="darkMode"
              @change="applyTheme"
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
.nav-link {
  position: relative;
  color: var(--bs-nav-link-color);
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
.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
.nav-link.active {
  color: #0dcaf0;
}
.language-selector {
  position: relative;
  margin-right: 1rem;
}
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
