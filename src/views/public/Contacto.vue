<template>
  <div class="overflow-hidden">

    <section class="relative content-section overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 content-decoration rounded-full opacity-5 transform translate-x-24 -translate-y-24"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 content-decoration rounded-full opacity-5 transform -translate-x-20 translate-y-20"></div>

      <div class="container mx-auto px-4 relative z-10">
        <p class="text-center text-gray-700 max-w-3xl mx-auto content-text">
          Estamos aquí para ayudarte. No dudes en contactarnos para solicitar información o concertar una cita.
        </p>
      </div>
    </section>

    <ContactSection
      :showTitle="false"
      :showSubtitle="false"
      @form-submitted="handleFormSubmit"
    />
  </div>
</template>

<script setup>
import ContactSection from '@/components/ContactSection.vue';

defineOptions({
  name: 'ContactoView'
});

const handleFormSubmit = (formData) => {

};
</script>

<style scoped>
.hero-section {
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: linear-gradient(to bottom right, var(--primary-50), white);
}

@media (min-width: 768px) {
  .hero-section {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
}

.hero-decoration {
  background-color: var(--primary-500);
}

.hero-container {
  padding-left: 1rem;
  padding-right: 1rem;
}


.content-section {
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: linear-gradient(to bottom right, var(--primary-50), white);
}

@media (min-width: 768px) {
  .content-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}

.content-decoration {
  background-color: var(--primary-500);
}

.content-container {
  padding-left: 1rem;
  padding-right: 1rem;
}

</style>
