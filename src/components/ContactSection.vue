<template>
  <section class="py-12 md:py-16 bg-white relative overflow-hidden">
    <!-- Plantas para Contacto -->
    <img src="@/assets/images/ramas_fondo_izquierda_2.png" alt="" class="absolute left-0 top-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none" />
    <img src="@/assets/images/ramas_fondo_abajo.png" alt="" class="absolute left-0 bottom-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none transform rotate-45" />
    <img src="@/assets/images/ramas_fondo_abajo_2.png" alt="" class="absolute right-0 bottom-5 w-40 md:w-52 lg:w-68 h-auto opacity-8 pointer-events-none transform -rotate-45" />

    <div class="container mx-auto px-4 relative z-10">
      <h2 v-if="showTitle" class="section-title-primary text-2xl md:text-3xl font-bold text-center mb-6">{{ title.toUpperCase() }}</h2>
      <p v-if="showSubtitle" class="text-center text-gray-600 mb-6 max-w-2xl mx-auto">{{ subtitle }}</p>

      <div class="max-w-5xl mx-auto">
        <ContactForm
          :title="formTitle"
          :messageRows="isMobile ? 3 : 14"
          :showIcon="true"
          :showPrivacidad="false"
          @form-submitted="handleFormSubmit"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue';
import { defineProps, defineEmits, ref, onMounted, onUnmounted } from 'vue';

const isMobile = ref(window.innerWidth < 768);

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});

defineProps({
  title: {
    type: String,
    default: 'Contacto'
  },
  subtitle: {
    type: String,
    default: 'Estamos aquí para escucharte y acompañarte en tu proceso'
  },
  formTitle: {
    type: String,
    default: 'Envíanos un mensaje'
  },
  showTitle: {
    type: Boolean,
    default: true
  },
  showSubtitle: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['form-submitted']);

const handleFormSubmit = (formData) => {
  emit('form-submitted', formData);
};
</script>

<style scoped>
.text-primary-800 {
  color: var(--primary-800);
}
.bg-primary-50 {
  background-color: var(--primary-50);
}
</style>
