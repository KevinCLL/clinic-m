<template>
  <section class="py-8 md:py-12 bg-white relative overflow-hidden">
    <div class="absolute -right-32 top-1/4 w-96 h-96 rounded-full bg-teal-50 opacity-70"></div>
    <div class="absolute -left-20 bottom-1/3 w-64 h-64 rounded-full bg-teal-50 opacity-70"></div>

    <div class="container mx-auto px-4 relative z-10">
      <h2 v-if="showTitle" class="text-3xl md:text-4xl font-bold text-teal-800 text-center mb-3">{{ title }}</h2>
      <p v-if="showSubtitle" class="text-center text-gray-600 mb-6 max-w-2xl mx-auto">{{ subtitle }}</p>

      <p class="text-gray-700 mb-6 max-w-3xl mx-auto px-8 md:px-16 text-sm leading-relaxed">
        El apartado de contacto de la página de inicio, algo más parecido a esto: más integrado, con menos espacio, con sangría. Algo así como lo que pongo a continuación.
      </p>

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
.text-teal-600 {
  color: #009B8F;
}
.text-teal-700 {
  color: #00877C;
}
.text-teal-800 {
  color: #007267;
}
.bg-teal-50 {
  background-color: #E6F7F5;
}
</style>
