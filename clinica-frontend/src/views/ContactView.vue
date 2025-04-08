<template>
  <div class="main-layout">
    <router-view />
  </div>
</template>

<script setup>
// Ya no se necesita importar el componente Contacto eliminado
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
}
</style>
