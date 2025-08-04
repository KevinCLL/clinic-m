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
    default: 'primary'
  }
});

const emits = defineEmits(['click']);

const isLink = computed(() => typeof props.to === 'string' && props.to.includes('http'));
const isRouterLink = computed(() => props.to && !isLink.value);

const buttonClasses = computed(() => {
  const classes = [
    'inline-block px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center'
  ];

  switch (props.variant) {
    case 'primary':
      classes.push('bg-primary-600 text-white hover:bg-primary-700 hover:shadow-primary-sm');
      break;
    case 'secondary':
      classes.push('bg-secondary-600 text-white hover:bg-secondary-700 hover:shadow-secondary-sm');
      break;
    case 'outline-primary':
      classes.push('border border-primary-600 text-primary-600 hover:bg-primary-50 hover:text-primary-700 hover:border-primary-700');
      break;
    case 'outline-secondary':
      classes.push('border border-secondary-600 text-secondary-600 hover:bg-secondary-50 hover:text-secondary-700 hover:border-secondary-700');
      break;
    case 'teal':
      classes.push('bg-primary-600 text-white hover:bg-primary-700 hover:shadow-primary-sm');
      break;
    case 'outline-teal':
      classes.push('border border-primary-600 text-primary-600 hover:bg-primary-50 hover:text-primary-700 hover:border-primary-700');
      break;
    case 'outline':
      classes.push('border border-primary-600 text-primary-600 hover:bg-primary-50 hover:text-primary-700 hover:border-primary-700');
      break;
    default:
      classes.push('bg-primary-600 text-white hover:bg-primary-700 hover:shadow-primary-sm');
  }

  return classes.join(' ');
});
</script>

<style scoped>
.text-primary-600 {
  color: var(--primary-600);
}
.text-primary-700 {
  color: var(--primary-700);
}
.text-secondary-600 {
  color: var(--secondary-600);
}
.text-secondary-700 {
  color: var(--secondary-700);
}
.border-primary-600 {
  border-color: var(--primary-600);
}
.border-primary-700 {
  border-color: var(--primary-700);
}
.border-secondary-600 {
  border-color: var(--secondary-600);
}
.border-secondary-700 {
  border-color: var(--secondary-700);
}
.bg-primary-50 {
  background-color: var(--primary-50);
}
.bg-primary-600 {
  background-color: var(--primary-600);
}
.bg-primary-700 {
  background-color: var(--primary-700);
}
.bg-secondary-50 {
  background-color: var(--secondary-50);
}
.bg-secondary-600 {
  background-color: var(--secondary-600);
}
.bg-secondary-700 {
  background-color: var(--secondary-700);
}
.hover\:bg-primary-50:hover {
  background-color: var(--primary-50);
}
.hover\:bg-primary-700:hover {
  background-color: var(--primary-700);
}
.hover\:bg-secondary-50:hover {
  background-color: var(--secondary-50);
}
.hover\:bg-secondary-700:hover {
  background-color: var(--secondary-700);
}
.hover\:text-primary-700:hover {
  color: var(--primary-700);
}
.hover\:text-secondary-700:hover {
  color: var(--secondary-700);
}
.hover\:border-primary-700:hover {
  border-color: var(--primary-700);
}
.hover\:border-secondary-700:hover {
  border-color: var(--secondary-700);
}
.hover\:shadow-primary-sm:hover {
  box-shadow: var(--shadow-md);
}
.hover\:shadow-secondary-sm:hover {
  box-shadow: var(--shadow-md);
}
</style>
