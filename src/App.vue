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
  <router-view />
</template>
