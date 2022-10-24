<script setup>
import PageHeader from "./components/PageHeader.vue";
</script>
<template>
  <PageHeader />
  <RouterView />
</template>
<style>
* {
  margin: 0px;
  padding: 0px;
  color: inherit;
  list-style-type: none;
  text-decoration: inherit;
}
#app {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 8vh 1fr;
}
header {
  height: 100%;

  background-color: black;
  color: white;

  display: flex;
  flex-direction: column;
}
main {
  min-height: 92vh;

  background: linear-gradient(
    180deg,
    rgba(9, 120, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
