<template>
  <section class="section-header relative py-16 md:py-20 overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img :src="backgroundImage" alt="Background" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-black/20"></div>
    </div>

    <div class="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
      <div class="section-content max-w-full md:max-w-4xl lg:max-w-3xl mx-auto bg-white/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl">
        <h2 v-if="title" class="section-title text-2xl md:text-3xl font-bold text-black text-center mb-6">{{ title }}</h2>
        
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
.section-header {
  min-height: 400px;
}

.section-content {
  animation: fadeInUp 1.2s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Ensure consistent typography */
.section-title {
  font-family: var(--font-family-heading);
  line-height: 1.2;
}

.section-body p {
  margin: 0;
}

/* Ensure rounded corners consistency */
.section-content {
  border-radius: 1rem;
}
</style>