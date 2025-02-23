import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "@/App.vue";
import { router } from "@/router";

import "bootstrap/scss/bootstrap.scss";

// Definir as traduções para o idioma
const messages = {
  en: {
    welcome: "Welcome to our website!",
    language: "Language",
    navbar: {
      darkMode: "Dark Mode",
    },
    routes: {
      home: "Home",
      about: "About",
      contact: "Contact",  // Usando 'contact'
    },
    footer: {
      title: "Federal University of Technology – Paraná (UTFPR)",
      description: "UTFPR is a higher education institution focused on technology and innovation, offering undergraduate, graduate, and research programs.",
      contact: "Contact",
      address: "R. Cristo Rei, 19 - Vila Becker, Toledo - PR, 85902-490",
      phone: "(45) 3379-6800",
      email: "contact@utfpr.edu.br",
      links: {
        about: "About UTFPR",
        courses: "Courses",
        research: "Research",
        contact: "Contact Us",
        accessibility: "Accessibility",
        privacy: "Privacy Policy",
      },
      copyright: "© 2025 Federal University of Technology – Paraná. All rights reserved.",
    },
  },
  pt: {
    welcome: "Bem-vindo ao nosso site!",
    language: "Idioma",
    navbar: {
      darkMode: "Modo Escuro",
    },
    routes: {
      home: "Início",
      about: "Sobre",
      contact: "Contato",  // Usando 'contact'
    },
    footer: {
      title: "Universidade Tecnológica Federal do Paraná - UTFPR",
      description: "A UTFPR é uma instituição de ensino superior voltada à tecnologia e inovação, oferecendo cursos de graduação, pós-graduação e pesquisa.",
      contact: "Entre em contato",
      address: "R. Cristo Rei, 19 - Vila Becker, Toledo - PR, 85902-490",
      phone: "(45) 3379-6800",
      email: "contato@utfpr.edu.br",
      links: {
        about: "Sobre a UTFPR",
        courses: "Cursos",
        research: "Pesquisa",
        contact: "Fale Conosco",
        accessibility: "Acessibilidade",
        privacy: "Política de Privacidade",
      },
      copyright: "© 2025 Universidade Tecnológica Federal do Paraná. Todos os direitos reservados.",
    },
  },
  es: {
    welcome: "¡Bienvenido a nuestro sitio web!",
    language: "Idioma",
    navbar: {
      darkMode: "Modo Oscuro",
    },
    routes: {
      home: "Inicio",
      about: "Sobre",
      contact: "Contacto",  // Usando 'contact'
    },
    footer: {
      title: "Universidad Tecnológica Federal de Paraná (UTFPR)",
      description: "La UTFPR es una institución de educación superior enfocada en la tecnología y la innovación, ofreciendo programas de grado, posgrado e investigación.",
      contact: "Contacto",
      address: "R. Cristo Rei, 19 - Vila Becker, Toledo - PR, 85902-490",
      phone: "(45) 3379-6800",
      email: "contacto@utfpr.edu.br",
      links: {
        about: "Sobre UTFPR",
        courses: "Cursos",
        research: "Investigación",
        contact: "Contáctanos",
        accessibility: "Accesibilidad",
        privacy: "Política de Privacidad",
      },
      copyright: "© 2025 Universidad Tecnológica Federal de Paraná. Todos los derechos reservados.",
    },
  },
};

const i18n = createI18n({
  legacy: false, // Necessário para Composition API
  locale: "pt", // Idioma padrão
  fallbackLocale: "en", // Idioma de fallback
  messages, // Mensagens definidas
});

const app = createApp(App)
  .use(router)
  .use(i18n);

router.isReady().then(() => app.mount("#app"));
