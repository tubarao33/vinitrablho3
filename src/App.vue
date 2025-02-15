<script setup lang="ts">

import { RouterView } from 'vue-router'

import DarkModeButton from '@/components/DarkModeButton.vue';

</script>


<template>
  <RouterView />
  <div id="app">
    <DarkModeButton />
  </div>

  <div>
    <h1>{{ $t('welcome') }}</h1>
    <p>{{ $t('language') }}</p>
  </div>
</template>