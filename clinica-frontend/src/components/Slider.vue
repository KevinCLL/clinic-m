<template>
  <div class="slider-container relative overflow-hidden">
    <div class="slider-track flex transition-transform" :style="trackStyle">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slider-slide w-full flex-shrink-0"
      >
        <slot :slide="slide" :index="index"></slot>
      </div>
    </div>

    <!-- Navegación -->
    <div class="flex justify-center mt-4">
      <button
        v-for="(_, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        class="w-2 h-2 mx-1 rounded-full"
        :class="currentSlide === index ? 'bg-coral-500' : 'bg-gray-300'"
      ></button>
    </div>

    <!-- Flechas de navegación -->
    <button
      @click="prevSlide"
      class="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 rounded-full w-10 h-10 flex items-center justify-center text-blue-900"
    >
      <i class="fas fa-chevron-left"></i>
    </button>

    <button
      @click="nextSlide"
      class="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 rounded-full w-10 h-10 flex items-center justify-center text-blue-900"
    >
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  slides: {
    type: Array,
    required: true
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 5000
  }
});

const currentSlide = ref(0);
let autoplayInterval = null;

const trackStyle = computed(() => ({
  transform: `translateX(-${currentSlide.value * 100}%)`
}));

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + props.slides.length) % props.slides.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

// Iniciar autoplay
onMounted(() => {
  if (props.autoplay) {
    autoplayInterval = setInterval(nextSlide, props.interval);
  }
});

// Limpiar intervalo al desmontar
onBeforeUnmount(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
});
</script>

<style scoped>
.slider-track {
  transition: transform 0.5s ease-in-out;
}

.bg-coral-500 {
  background-color: #ff8c7a;
}
</style>
