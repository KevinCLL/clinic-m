<template>
  <router-view />
</template>

<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Observar cambios en la ruta para asegurar el desplazamiento al principio de la página
watch(
  () => route.path,
  () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }
);
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

/* Estilos globales */
body {
  font-family: 'Source Sans Pro', sans-serif;
  color: #333;
}
</style>
