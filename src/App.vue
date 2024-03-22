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

<style>
body {
  background-color: #dbd9d9;
  font-family: amagro;
}

a {
  text-decoration: none; /* Rimuove il sottolineato del link */
  color: inherit; /* Usa il colore del testo del genitore */
}
</style>
