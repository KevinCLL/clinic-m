<template>
  <section class="py-12 md:py-16 relative overflow-hidden" :class="colorClasses">
    <div class="absolute -right-32 top-1/4 w-96 h-96 rounded-full opacity-30" :class="bgColorClass"></div>
    <div class="absolute -left-20 bottom-1/3 w-64 h-64 rounded-full opacity-30" :class="bgColorClass"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6" :class="titleColorClass">¿Necesitas más información?</h2>
        <p class="text-xl text-gray-700 mb-8 text-center">
          {{ message }}
        </p>
        <router-link
          :to="{ name: 'contacto' }"
          :class="[
            'inline-block px-8 py-3 text-white font-semibold rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg',
            buttonColorClass
          ]"
        >
          Contactar ahora
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  colorTheme: {
    type: String,
    default: 'teal',
    validator: (value) => ['teal', 'purple'].includes(value)
  },
  message: {
    type: String,
    default: 'Contacta con nosotros para resolver tus dudas o concertar una cita'
  }
});


const colorClasses = computed(() => {
  return props.colorTheme === 'teal'
    ? 'bg-gradient-to-br from-teal-50 to-white'
    : 'bg-gradient-to-br from-purple-50 to-white';
});

const bgColorClass = computed(() => {
  return props.colorTheme === 'teal' ? 'bg-teal-50' : 'bg-purple-50';
});

const titleColorClass = computed(() => {
  return props.colorTheme === 'teal' ? 'text-teal-800' : 'text-purple-800';
});

const buttonColorClass = computed(() => {
  return props.colorTheme === 'teal' ? 'bg-teal-600 hover:bg-teal-700' : 'bg-purple-600 hover:bg-purple-700';
});
</script>

<style scoped>

.text-teal-800 {
  color: #007267;
}
.bg-teal-50 {
  background-color: #E6F7F5;
}
.bg-teal-600 {
  background-color: #009B8F;
}
.hover\:bg-teal-700:hover {
  background-color: #007267;
}


.text-purple-800 {
  color: #523D86;
}
.bg-purple-50 {
  background-color: #F5F0FA;
}
.bg-purple-600 {
  background-color: #7857A0;
}
.hover\:bg-purple-700:hover {
  background-color: #654A94;
}
</style>
