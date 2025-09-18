<template>
  <router-view />
</template>

<script setup>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Overlock+SC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Faculty+Glyphic&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
@import '@/styles/plant-animations.css';


html {
  font-size: 18px;
}

body {
  font-family: 'Faculty Glyphic', sans-serif;
  color: #333;
  overflow-x: hidden;
  scroll-behavior: smooth;
  font-size: 1.05rem;
  line-height: 1.6;
}


h1, .h1 {
  font-family: 'Overlock SC', serif;
  font-size: 2.2rem;
  line-height: 1.3;
}

h2, .h2 {
  font-family: 'Overlock SC', serif;
  font-size: 1.8rem;
  line-height: 1.35;
}

h3, .h3 {
  font-family: 'Overlock SC', serif;
  font-size: 1.5rem;
  line-height: 1.4;
}

h4, .h4 {
  font-family: 'Overlock SC', serif;
  font-size: 1.3rem;
}

h5, .h5 {
  font-family: 'Overlock SC', serif;
  font-size: 1.15rem;
}

h6, .h6 {
  font-family: 'Overlock SC', serif;
  font-size: 1rem;
}


.router-link-active {
  transition: color 0.3s ease;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


@media (max-width: 768px) {
  html {
    font-size: 16px;
  }

  body {
    font-size: 1rem;
  }
}
</style>
