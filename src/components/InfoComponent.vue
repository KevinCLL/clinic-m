<template>
  <section class="py-12 md:py-16 relative overflow-hidden" :class="colorClasses">
    <img src="@/assets/images/ramas_fondo_abajo.png" alt="" class="absolute left-0 bottom-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-float-slow" />
    <img src="@/assets/images/ramas_fondo_abajo_2.png" alt="" class="absolute right-0 bottom-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-float-slow-reverse" />

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-6" :class="titleColorClass">¿Necesitas más información?</h2>
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
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'teal', 'purple'].includes(value)
  },
  message: {
    type: String,
    default: 'Contacta con nosotros para resolver tus dudas o concertar una cita'
  }
});


const colorClasses = computed(() => {
  if (props.colorTheme === 'primary' || props.colorTheme === 'teal') {
    return 'bg-gradient-to-br from-primary-50 to-white';
  }
  return 'bg-gradient-to-br from-secondary-50 to-white';
});

const bgColorClass = computed(() => {
  if (props.colorTheme === 'primary' || props.colorTheme === 'teal') {
    return 'bg-primary-50';
  }
  return 'bg-secondary-50';
});

const titleColorClass = computed(() => {
  if (props.colorTheme === 'primary' || props.colorTheme === 'teal') {
    return 'text-primary-800';
  }
  return 'text-secondary-800';
});

const buttonColorClass = computed(() => {
  if (props.colorTheme === 'primary' || props.colorTheme === 'teal') {
    return 'bg-primary-600 hover:bg-primary-700';
  }
  return 'bg-secondary-600 hover:bg-secondary-700';
});
</script>

<style scoped>
.text-primary-800 {
  color: var(--primary-800);
}
.bg-primary-50 {
  background-color: var(--primary-50);
}
.bg-primary-600 {
  background-color: var(--primary-600);
}
.hover\:bg-primary-700:hover {
  background-color: var(--primary-700);
}
.text-secondary-800 {
  color: var(--secondary-800);
}
.bg-secondary-50 {
  background-color: var(--secondary-50);
}
.bg-secondary-600 {
  background-color: var(--secondary-600);
}
.hover\:bg-secondary-700:hover {
  background-color: var(--secondary-700);
}
.from-primary-50 {
  --tw-gradient-from: var(--primary-50);
}
.from-secondary-50 {
  --tw-gradient-from: var(--secondary-50);
}
</style>
