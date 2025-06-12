import "animate.css";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "@/App.vue";
import { router } from "@/router";
import "bootstrap/scss/bootstrap.scss";
import translateFile from "@/i18n.json";
import "bootstrap-icons/font/bootstrap-icons.css";

// Definir as traduções para o idioma
const messages = translateFile;

const i18n = createI18n({
  legacy: false, // Necessário para Composition API
  locale: "pt", // Idioma padrão
  fallbackLocale: "en", // Idioma de fallback
  messages, // Mensagens definidas
});

const app = createApp(App).use(router).use(i18n);

router.isReady().then(() => app.mount("#app"));
