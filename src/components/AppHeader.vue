<script>
export default {
  name: 'Header',
};
</script>

<template>
  <header class="proj">
    <div class="d-flex justify-content-between container py-3">
      <div><i class="fa-solid fa-globe"></i></div>
      <ul class="d-flex list-unstyled gap-3 m-0 p-0">
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li>
          <router-link :to="{ name: 'projects' }">MY PROJECTS</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style>
.proj {
  /* font-family: amagro; */
  text-transform: uppercase;
  border: 3px solid black;
  padding: 5px;
  text-align: center;
}
</style>
