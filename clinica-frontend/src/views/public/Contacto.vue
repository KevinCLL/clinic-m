<template>
  <div class="overflow-hidden">
    <!-- Cabecera de la página -->
    <section class="relative py-12 md:py-16 bg-gradient-to-br from-teal-50 to-white overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full opacity-5 transform translate-x-24 -translate-y-24"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full opacity-5 transform -translate-x-20 translate-y-20"></div>

      <div class="container mx-auto px-4 relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold text-center text-teal-800 mb-4">Contacto</h1>
        <p class="text-center text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          Estamos aquí para ayudarte. No dudes en contactarnos para solicitar información o concertar una cita.
        </p>
      </div>
    </section>

    <!-- Sección principal de contacto -->
    <section class="py-12 bg-white relative">
      <div class="absolute -right-32 top-1/3 w-96 h-96 rounded-full bg-teal-50 opacity-30"></div>
      <div class="absolute -left-20 bottom-1/3 w-64 h-64 rounded-full bg-teal-50 opacity-30"></div>

      <div class="container mx-auto px-4 relative z-10 max-w-6xl">
        <ContactForm
          title="Envíanos un mensaje"
          :messageRows="8"
          :showIcon="true"
          :showPrivacidad="true"
          @form-submitted="handleFormSubmit"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue';

// Nombre del componente
defineOptions({
  name: 'ContactoView'
});

// Manejar el envío del formulario
const handleFormSubmit = (formData) => {
  console.log('Formulario enviado desde la página de contacto:', formData);
};
</script>

<style scoped>
/* Colores basados en el logo ASATI */
.text-teal-200 {
  color: #9FE7E0;
}
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
.bg-teal-100 {
  background-color: #CCF0EC;
}
.bg-teal-500 {
  background-color: #00ADA0;
}
.bg-teal-600 {
  background-color: #009B8F;
}
.bg-teal-700 {
  background-color: #007267;
}
.hover\:bg-teal-100:hover {
  background-color: #CCF0EC;
}
.hover\:bg-teal-500:hover {
  background-color: #00ADA0;
}
.focus\:ring-teal-200:focus {
  --tw-ring-color: #9FE7E0;
}
.focus\:ring-teal-500:focus {
  --tw-ring-color: #00ADA0;
}
.focus\:border-teal-400:focus {
  border-color: #39D4C7;
}
.shadow-soft {
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
}
.hover\:shadow-teal-lg:hover {
  box-shadow: 0 10px 20px -5px rgba(0, 155, 143, 0.3);
}
</style>
