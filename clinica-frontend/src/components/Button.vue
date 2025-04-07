<template>
  <a v-if="isLink" :href="to" :class="buttonClasses">
    <slot>{{ text }}</slot>
  </a>
  <router-link v-else-if="isRouterLink" :to="to" :class="buttonClasses">
    <slot>{{ text }}</slot>
  </router-link>
  <button v-else :type="type" :class="buttonClasses" @click="$emit('click')">
    <slot>{{ text }}</slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: String,
  to: [String, Object],
  type: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String,
    default: 'teal' // teal, secondary, outline-teal, outline-secondary
  }
});

const emits = defineEmits(['click']);

const isLink = computed(() => typeof props.to === 'string' && props.to.includes('http'));
const isRouterLink = computed(() => props.to && !isLink.value);

const buttonClasses = computed(() => {
  const classes = [
    'inline-block px-6 py-2 rounded-lg font-medium transition-all duration-300 text-center'
  ];

  switch (props.variant) {
    case 'teal':
      classes.push('bg-teal-600 text-white hover:bg-teal-700 hover:shadow-teal-sm');
      break;
    case 'secondary':
      classes.push('bg-blue-800 text-white hover:bg-blue-700 hover:shadow-blue-sm');
      break;
    case 'outline-teal':
      classes.push('border border-teal-600 text-teal-600 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-700');
      break;
    case 'outline-secondary':
      classes.push('border border-blue-800 text-blue-800 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-700');
      break;
    case 'primary': // Para compatibilidad con código existente
      classes.push('bg-teal-600 text-white hover:bg-teal-700 hover:shadow-teal-sm');
      break;
    case 'outline': // Para compatibilidad con código existente
      classes.push('border border-teal-600 text-teal-600 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-700');
      break;
    default:
      classes.push('bg-teal-600 text-white hover:bg-teal-700 hover:shadow-teal-sm');
  }

  return classes.join(' ');
});
</script>

<style scoped>
/* Colores de ASATI */
.text-teal-600 {
  color: #009B8F;
}
.text-teal-700 {
  color: #00877C;
}
.border-teal-600 {
  border-color: #009B8F;
}
.border-teal-700 {
  border-color: #00877C;
}
.bg-teal-50 {
  background-color: #E6F7F5;
}
.bg-teal-600 {
  background-color: #009B8F;
}
.bg-teal-700 {
  background-color: #00877C;
}
.hover\:bg-teal-50:hover {
  background-color: #E6F7F5;
}
.hover\:bg-teal-700:hover {
  background-color: #00877C;
}
.hover\:text-teal-700:hover {
  color: #00877C;
}
.hover\:border-teal-700:hover {
  border-color: #00877C;
}
.hover\:shadow-teal-sm:hover {
  box-shadow: 0 4px 8px -1px rgba(0, 155, 143, 0.25);
}
.hover\:shadow-blue-sm:hover {
  box-shadow: 0 4px 8px -1px rgba(30, 64, 175, 0.25);
}
</style>
