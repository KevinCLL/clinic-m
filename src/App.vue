<template>
  <router-view />
</template>

<script setup>
// El scrollBehavior ya está configurado en el router
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

/* Estilos globales */
body {
  font-family: 'Source Sans Pro', sans-serif;
  color: #333;
  overflow-x: hidden; /* Previene scroll horizontal durante transiciones */
  scroll-behavior: smooth; /* Asegura transiciones suaves en toda la app */
}

/* Estilos para transiciones entre rutas */
.router-link-active {
  transition: color 0.3s ease;
}

/* Animaciones globales */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
