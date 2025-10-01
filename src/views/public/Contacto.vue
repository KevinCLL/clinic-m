<template>
  <div class="overflow-hidden">
    <section class="py-12 md:py-16 bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
      <div class="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
      <ResponsiveImage src="@/assets/images/ramas_fondo_derecha.png" alt="" img-class="absolute left-10 top-1/3 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-float-left transform scale-x-[-1]" loading="lazy" />
      <ResponsiveImage src="@/assets/images/ramas_fondo_izquierda.png" alt="" img-class="absolute right-10 top-1/2 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-float-right transform scale-y-[-1]" loading="lazy" />

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="section-title-primary text-2xl md:text-3xl font-bold text-center mb-6">CONTACTO</h2>
        <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Estamos aquí para ayudarte. No dudes en contactarnos para solicitar información o concertar una cita.
        </p>

        <div class="max-w-5xl mx-auto">
          <ContactForm
            title="Envíanos un mensaje"
            :messageRows="isMobile ? 3 : 14"
            :showIcon="true"
            :showPrivacidad="false"
            @form-submitted="handleFormSubmit"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue';
import ResponsiveImage from '@/components/ResponsiveImage.vue';
import { ref, onMounted, onUnmounted } from 'vue';

defineOptions({
  name: 'ContactoView'
});

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

const handleFormSubmit = () => {

};
</script>

<style scoped>
.text-primary-700 {
  color: var(--primary-700);
}
.text-primary-800 {
  color: var(--primary-800);
}
.bg-primary-50 {
  background-color: var(--primary-50);
}
.from-primary-50 {
  --tw-gradient-from: var(--primary-50);
}
.via-primary-200 {
  --tw-gradient-stops: var(--tw-gradient-from), var(--primary-200), var(--tw-gradient-to);
}

</style>
