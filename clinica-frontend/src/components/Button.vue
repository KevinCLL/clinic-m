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
    default: 'primary' // primary, secondary, outline
  }
});

const emits = defineEmits(['click']);

const isLink = computed(() => typeof props.to === 'string' && props.to.includes('http'));
const isRouterLink = computed(() => props.to && !isLink.value);

const buttonClasses = computed(() => {
  const classes = [
    'inline-block px-6 py-2 rounded-full font-medium transition-colors duration-200 text-center'
  ];

  switch (props.variant) {
    case 'primary':
      classes.push('bg-coral-500 text-white hover:bg-coral-600');
      break;
    case 'secondary':
      classes.push('bg-blue-900 text-white hover:bg-blue-800');
      break;
    case 'outline':
      classes.push('border border-coral-500 text-coral-500 hover:bg-coral-50');
      break;
    default:
      classes.push('bg-coral-500 text-white hover:bg-coral-600');
  }

  return classes.join(' ');
});
</script>

<style scoped>
.bg-coral-500 {
  background-color: #ff8c7a;
}
.bg-coral-600 {
  background-color: #ff7c6a;
}
.hover\:bg-coral-600:hover {
  background-color: #ff7c6a;
}
.text-coral-500 {
  color: #ff8c7a;
}
.border-coral-500 {
  border-color: #ff8c7a;
}
.hover\:bg-coral-50:hover {
  background-color: #fff3f1;
}
</style>
