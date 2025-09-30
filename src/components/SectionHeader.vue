<template>
  <section class="section-header relative overflow-hidden">
    <div class="background-container absolute inset-0 z-0" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/25"></div>
    </div>

    <div class="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
      <div class="section-content max-w-full md:max-w-4xl lg:max-w-3xl mx-auto bg-white/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl">
        <h2 v-if="title" class="section-title text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-8">{{ title }}</h2>

        <div class="section-body text-base md:text-lg leading-relaxed text-black flex flex-col gap-4">
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  backgroundImage: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

.section-header {
  padding: 70px 0;
  display: flex;
  align-items: center;
}


@media (max-width: 767px) {
  .section-header {
    padding: 50px 0;
  }

  .background-container {
    background-attachment: scroll;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    animation: none;
  }

  .section-content {
    opacity: 1;
    transform: none;
    animation: none;
  }
}


@media (min-width: 768px) {
  .section-content {
    animation: fadeInUp 1.2s ease-out forwards;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0.7;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }


  .background-container {
    background-attachment: scroll;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: dramatic-zoom 20s ease-out forwards;
  }

  @keyframes dramatic-zoom {
    0% {
      transform: scale(1.08);
    }
    100% {
      transform: scale(1);
    }
  }
}


.section-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  line-height: 1.2;
}

.section-body p {
  margin: 0;
}


.section-content {
  border-radius: 1rem;
  position: relative;
}
</style>
