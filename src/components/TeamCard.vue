<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group w-full max-w-sm md:w-80">
    <div class="relative aspect-square overflow-hidden bg-gray-100">
      <ResponsiveImage :src="image" :alt="name" img-class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
    </div>
    <div class="p-6">
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-xl md:text-2xl font-bold text-primary-800">{{ name }}</h3>
        <a v-if="linkedin" :href="linkedin" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-800 transition-colors ml-2" aria-label="LinkedIn">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
      </div>
      <p class="text-primary-600 font-medium mb-4 text-base md:text-lg whitespace-pre-line">{{ role }}</p>
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
import ResponsiveImage from './ResponsiveImage.vue';

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
    required: true
  },
  linkedin: {
    type: String,
    default: null
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

.specialty-badge[data-specialty="grupos-mindfulness"] {
  background-color: var(--secondary-600);
  color: white;
}

.specialty-badge[data-specialty="retiros"] {
  background-color: var(--secondary-600);
  color: white;
}

.specialty-badge[data-specialty="yoga"] {
  background-color: var(--secondary-600);
  color: white;
}

.specialty-badge[data-specialty="yoga-trauma"] {
  background-color: var(--secondary-600);
  color: white;
}
</style>