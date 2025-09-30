<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group w-full max-w-sm md:w-80">
    <div class="relative aspect-square overflow-hidden bg-gray-100">
      <img :src="image" :alt="name" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
    </div>
    <div class="p-6">
      <h3 class="text-xl md:text-2xl font-bold text-primary-800 mb-2">{{ name }}</h3>
      <p class="text-primary-600 font-medium mb-4 text-base md:text-lg">{{ role }}</p>
      <div v-if="specialties && specialties.length > 0" class="flex flex-wrap gap-2">
        <router-link
          v-for="specialty in specialties"
          :key="specialty.id"
          :to="specialty.link"
          class="inline-block px-3 py-1 rounded-full text-sm font-medium specialty-badge transition-all hover:opacity-90"
          :data-specialty="specialty.id"
        >
          {{ specialty.name }}
        </router-link>
      </div>
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
  specialties: {
    type: Array,
    default: () => []
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

.specialty-badge[data-specialty="psiquiatria"] {
  background-color: var(--specialty-psiquiatria);
  color: white;
}

.specialty-badge[data-specialty="psicologia-clinica"] {
  background-color: var(--specialty-psicologia-clinica);
  color: white;
}

.specialty-badge[data-specialty="infancia-adolescencia"] {
  background-color: var(--specialty-infancia-adolescencia);
  color: white;
}

.specialty-badge[data-specialty="perinatal"] {
  background-color: var(--specialty-perinatal);
  color: white;
}

.specialty-badge[data-specialty="terapia-emdr"] {
  background-color: var(--specialty-emdr);
  color: white;
}

.specialty-badge[data-specialty="mindfulness"] {
  background-color: var(--specialty-mindfulness);
  color: white;
}

.specialty-badge[data-specialty="actividades"] {
  background-color: var(--secondary-600);
  color: white;
}
</style>