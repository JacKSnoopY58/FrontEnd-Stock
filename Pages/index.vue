<script setup>
import { navigateTo } from 'nuxt/app';

onMounted(() => {
  navigateTo('/login');
});
</script>

<template>
  <client-only>
    <!-- You can display a loading message or skeleton here if needed -->
  </client-only>
</template>
