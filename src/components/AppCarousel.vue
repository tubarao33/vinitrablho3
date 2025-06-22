<script setup lang="ts">
import { ref } from "vue";

const currentSlide = ref(0);

const slides = [
  {
    image: "https://imgur.com/WrmGgEC.jpeg",
    title: "Bem-vindo à UTFPR",
    description: "Conheça nossos cursos, estrutura e oportunidades",
  },
  {
    image: "https://imgur.com/WrmGgEC.jpeg",
    title: "Laboratórios Modernos",
    description: "Equipamentos de ponta para ensino e pesquisa",
  },
  {
    image: "https://imgur.com/WrmGgEC.jpeg",
    title: "Ambiente Acadêmico",
    description: "Apoio ao aluno e espaços de convivência",
  },
];

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};
</script>

<template>
  <div class="carousel">
    <div
      class="slides-container"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div v-for="(slide, index) in slides" :key="index" class="slide">
        <img :src="slide.image" :alt="slide.title" />
        <div class="slide-content">
          <h3>{{ slide.title }}</h3>
          <p>{{ slide.description }}</p>
        </div>
      </div>
    </div>

    <button class="prev" @click="prevSlide">‹</button>
    <button class="next" @click="nextSlide">›</button>

    <div class="indicators">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: index === currentSlide }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
}

.slides-container {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  flex: 0 0 100%;
  position: relative;
}

.slide img {
  width: 100%;
  height: auto;
}

.slide-content {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 8px;
}

button.prev,
button.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
}

button.prev {
  left: 10px;
}

button.next {
  right: 10px;
}

.indicators {
  text-align: center;
  margin-top: 10px;
}

.indicators span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #ccc;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.indicators .active {
  background: #333;
}
</style>
