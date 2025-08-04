<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group w-full max-w-sm md:w-80">
    <div class="relative aspect-square overflow-hidden bg-gray-100">
      <img :src="image" :alt="name" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold text-primary-800 mb-1">{{ name }}</h3>
      <p class="text-primary-600 font-medium mb-4">{{ role }}</p>
      <p class="text-gray-700 text-base text-justify">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: '@/assets/images/unknown.jpg'
  }
});
</script>

<style scoped>
.text-primary-600 {
  color: var(--primary-600);
}
.text-primary-800 {
  color: var(--primary-800);
}
</style>