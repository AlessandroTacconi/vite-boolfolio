<script>
export default {
  name: 'NotFound',
};
</script>
<template>
  <div class="container">
    <h2>404</h2>
    <div>Pagina non trovata</div>
    <p>
      <router-link :to="{ name: 'home' }"
        >torna alla pagina principale</router-link
      >
    </p>
  </div>
</template>
