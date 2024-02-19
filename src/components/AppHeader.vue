<script>
export default {
  name: 'Header',
};
</script>

<template>
  <header class="bg-warning">
    <div class="d-flex justify-content-between container py-3">
      <div>LOGO</div>
      <ul class="d-flex list-unstyled gap-3 m-0 p-0">
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'projects' }">Blog</router-link></li>
      </ul>
    </div>
  </header>
</template>
