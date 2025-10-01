<template>
  <img
    :src="currentSrc"
    :srcset="srcset"
    :sizes="sizes"
    :alt="alt"
    :loading="loading"
    :class="imgClass"
  />
</template>

<script setup>
import { computed } from 'vue';
import { getImageWithVariants } from '@/utils/imageUtils.js';

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  loading: {
    type: String,
    default: 'lazy'
  },
  imgClass: {
    type: String,
    default: ''
  }
});

const imageVariants = computed(() => getImageWithVariants(props.src));
const currentSrc = computed(() => imageVariants.value.desktop);

const srcset = computed(() => {
  const { desktop, mobile } = imageVariants.value;
  if (mobile && mobile !== desktop) {
    return `${mobile} 768w, ${desktop} 1920w`;
  }
  return desktop;
});

const sizes = computed(() => {
  const { desktop, mobile } = imageVariants.value;
  if (mobile && mobile !== desktop) {
    return '(max-width: 768px) 768px, 1920px';
  }
  return '100vw';
});
</script>
