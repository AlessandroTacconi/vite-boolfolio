<script>
export default {
  name: 'Header',
};
</script>

<template>
  <header>
    <div class="d-flex justify-content-between container py-3">
      <div>LOGO</div>
      <ul class="d-flex list-unstyled gap-3 m-0 p-0">
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'projects' }">Blog</router-link></li>
      </ul>
    </div>
  </header>
</template>
<style>
header {
  background-color: rgb(255, 200, 21);
}
</style>
