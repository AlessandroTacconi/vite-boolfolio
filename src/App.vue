<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'Portfolio',
  components: {
    AppHeader,
  },
};
</script>
<template>
  <AppHeader />
  <h1>Portfolio</h1>
  <router-view />
</template>
