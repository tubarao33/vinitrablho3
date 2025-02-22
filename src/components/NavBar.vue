<script lang="ts" setup>
import { computed, ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { routes } from "@/router";

const siteUrl = import.meta.env.VITE_BUILD_ADDRESS;
const router = useRouter();
const activeRoute = computed(() => router.currentRoute.value.path);
const isActive = (path: string) => path === activeRoute.value;

const darkMode = ref(false);
const selectedLanguage = ref(localStorage.getItem("language") || "en");
const languages = [
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
  { code: "es", label: "Español" }
];

const detectThemeFromSystem = () => {
  const isDarkModePreferred = window.matchMedia("(prefers-color-scheme: dark)").matches;
  darkMode.value = isDarkModePreferred;
  applyTheme();
};

const applyTheme = () => {
  const theme = darkMode.value ? "dark" : "light";
  document.documentElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);
};

watch(darkMode, applyTheme);
watch(selectedLanguage, (newLang) => {
  localStorage.setItem("language", newLang);
  console.log("Idioma alterado para:", newLang);
});

onMounted(() => {
  detectThemeFromSystem();
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", detectThemeFromSystem);
});
</script>

<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary sticky-top">
    <div class="container">
      <a class="navbar-brand" href="#">V0: VUE3 + BT5</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item text-uppercase" v-for="route in routes" :key="route.path">
            <router-link :to="route.path" class="nav-link" :title="route.children[0].name" :class="{ active: isActive(route.path) }">
              <i class="bi bi-house-fill" v-if="route.path === `${siteUrl}/`"></i>
              {{ route.path !== `${siteUrl}/` ? route.children[0].name : "" }}
            </router-link>
          </li>
        </ul>
        <div class="d-flex align-items-center ms-auto">
          <div class="form-check form-switch me-3">
            <input class="form-check-input" type="checkbox" id="darkModeSwitch" v-model="darkMode">
            <label class="form-check-label" for="darkModeSwitch">Dark Mode</label>
          </div>
          <select v-model="selectedLanguage" class="form-select form-select-sm">
            <option v-for="lang in languages" :key="lang.code" :value="lang.code">{{ lang.label }}</option>
          </select>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  padding: 0.5rem 1rem;
}

.form-switch {
  margin-top: 8px;
}

.form-select {
  width: auto;
}
</style>
