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

const getImageVariant = (path, suffix) => {
  if (!path) return '';

  const questionMarkIndex = path.indexOf('?');
  const pathWithoutQuery = questionMarkIndex !== -1 ? path.substring(0, questionMarkIndex) : path;
  const queryString = questionMarkIndex !== -1 ? path.substring(questionMarkIndex) : '';

  const lastDot = pathWithoutQuery.lastIndexOf('.');
  const lastSlash = pathWithoutQuery.lastIndexOf('/');
  const fileName = pathWithoutQuery.substring(lastSlash + 1, lastDot);
  const ext = pathWithoutQuery.substring(lastDot);
  const dirPath = pathWithoutQuery.substring(0, lastSlash + 1);

  return `${dirPath}${fileName}${suffix}${ext}${queryString}`;
};

const mobileSrc = computed(() => getImageVariant(props.src, '-mobile'));
const currentSrc = computed(() => props.src);

const srcset = computed(() => {
  return `${mobileSrc.value} 768w, ${props.src} 1920w`;
});

const sizes = computed(() => {
  return '(max-width: 768px) 768px, 1920px';
});
</script>
