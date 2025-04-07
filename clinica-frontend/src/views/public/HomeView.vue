<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 md:py-20 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Atención Integral a la Salud Mental</h1>
          <p class="text-gray-700 mb-8 leading-relaxed">
            La salud mental es un estado de bienestar mental que permite a las personas hacer frente a los momentos de estrés de la vida,
            desarrollar todas sus habilidades, poder aprender y trabajar adecuadamente y contribuir a la mejora de su comunidad.
            Es parte fundamental de la salud y el bienestar que sustenta nuestras capacidades individuales y colectivas para tomar decisiones,
            establecer relaciones y dar forma al mundo en el que vivimos.
          </p>
          <p class="text-gray-700 mb-8 leading-relaxed">
            La salud mental es, además, un derecho humano fundamental y un elemento esencial para el desarrollo personal, comunitario y socioeconómico.
            Es más que la mera ausencia de trastornos mentales. Se da en un proceso complejo, que cada persona experimenta de una manera diferente,
            con diversos grados de dificultad y angustia y resultados sociales y clínicos que pueden ser muy diferentes.
          </p>
          <Button to="/servicios" text="Ver Servicios" variant="primary" class="text-lg" />
        </div>
      </div>
    </section>

    <!-- Servicios Destacados Section -->
    <section class="py-16 md:py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-blue-900 text-center mb-10">Nuestros Servicios</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Servicio 1: Psicoterapia -->
          <div class="bg-gray-50 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div class="h-60 overflow-hidden">
              <img src="@/assets/images/placeholder.jpg" alt="Psicoterapia" class="w-full h-full object-cover">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-blue-900 mb-2">Psicoterapia</h3>
              <p class="text-gray-700 mb-4">Acompañamiento terapéutico personalizado para ayudarte a desarrollar herramientas de afrontamiento y mejorar tu bienestar.</p>
              <Button to="/servicios#psicoterapia" text="Más información" variant="outline" />
            </div>
          </div>

          <!-- Servicio 2: Psiquiatría -->
          <div class="bg-gray-50 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div class="h-60 overflow-hidden">
              <img src="@/assets/images/placeholder.jpg" alt="Psiquiatría" class="w-full h-full object-cover">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-blue-900 mb-2">Psiquiatría</h3>
              <p class="text-gray-700 mb-4">Evaluación, diagnóstico y tratamiento farmacológico de trastornos mentales con un enfoque integral y humanista.</p>
              <Button to="/servicios#psiquiatria" text="Más información" variant="outline" />
            </div>
          </div>

          <!-- Servicio 3: Mindfulness -->
          <div class="bg-gray-50 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div class="h-60 overflow-hidden">
              <img src="@/assets/images/placeholder.jpg" alt="Mindfulness" class="w-full h-full object-cover">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-blue-900 mb-2">Mindfulness</h3>
              <p class="text-gray-700 mb-4">Aprende técnicas de atención plena para reducir el estrés, mejorar la concentración y cultivar el bienestar emocional.</p>
              <Button to="/servicios#mindfulness" text="Más información" variant="outline" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Etapas Vitales Section -->
    <section class="py-16 md:py-20 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-blue-900 text-center mb-10">Te acompañamos en todas las etapas de la vida</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          <div v-for="(stage, index) in lifeStages" :key="index" class="text-center">
            <router-link :to="stage.route" class="block transition-transform hover:scale-105">
              <div class="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                <img :src="stage.image" :alt="stage.alt" class="w-full h-full object-cover" />
              </div>
              <h3 class="font-semibold text-lg text-blue-900">{{ stage.title }}</h3>
            </router-link>
          </div>
        </div>

        <div class="text-center mt-10">
          <Button to="/servicios" text="Ver todos los servicios" variant="primary" />
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16 md:py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-blue-900 text-center mb-10">Contacto</h2>

        <div class="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg">
          <!-- Información de contacto -->
          <div class="bg-gray-800 text-white p-8 md:w-2/5">
            <h3 class="text-2xl font-bold mb-6">Información</h3>
            <div class="mb-4">
              <p class="mb-1">C/Péris y Valero 178, bajo</p>
              <p>46006 Valencia</p>
            </div>
            <div class="mb-6">
              <p class="mb-1">688764073</p>
              <p>info@clinicasati.es</p>
            </div>
            <div class="flex space-x-3">
              <a href="#" class="bg-white text-gray-800 h-8 w-8 rounded-full flex items-center justify-center transition-transform hover:scale-110">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="bg-white text-gray-800 h-8 w-8 rounded-full flex items-center justify-center transition-transform hover:scale-110">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="bg-white text-gray-800 h-8 w-8 rounded-full flex items-center justify-center transition-transform hover:scale-110">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="bg-white text-gray-800 h-8 w-8 rounded-full flex items-center justify-center transition-transform hover:scale-110">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <!-- Formulario de contacto -->
          <div class="bg-gray-50 p-8 md:w-3/5">
            <h3 class="text-2xl font-bold text-blue-900 mb-6">Envíanos un mensaje</h3>
            <form @submit.prevent="submitForm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label for="nombre" class="block text-sm text-gray-700 mb-1">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    v-model="form.nombre"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                </div>
                <div>
                  <label for="apellidos" class="block text-sm text-gray-700 mb-1">Apellidos</label>
                  <input
                    type="text"
                    id="apellidos"
                    v-model="form.apellidos"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                </div>
              </div>

              <div class="mb-4">
                <label for="email" class="block text-sm text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
              </div>

              <div class="mb-6">
                <label for="mensaje" class="block text-sm text-gray-700 mb-1">Mensaje</label>
                <textarea
                  id="mensaje"
                  v-model="form.mensaje"
                  rows="5"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full py-3 bg-coral-500 text-white font-medium rounded hover:bg-coral-600 transition"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from '@/components/Button.vue';

// Datos para la sección de etapas vitales
const lifeStages = [
  {
    title: 'Infancia',
    alt: 'Niños jugando',
    image: '/src/assets/images/child.jpg',
    route: '/servicios#infancia'
  },
  {
    title: 'Adolescencia',
    alt: 'Adolescentes',
    image: '/src/assets/images/placeholder.jpg',
    route: '/servicios#adolescencia'
  },
  {
    title: 'Adultos',
    alt: 'Adultos',
    image: '/src/assets/images/placeholder.jpg',
    route: '/servicios#adultos'
  },
  {
    title: 'Perinatal',
    alt: 'Embarazo y maternidad',
    image: '/src/assets/images/placeholder.jpg',
    route: '/servicios#perinatal'
  },
  {
    title: 'Tercera edad',
    alt: 'Adultos mayores',
    image: '/src/assets/images/placeholder.jpg',
    route: '/servicios#tercera-edad'
  }
];

// Estado del formulario
const form = ref({
  nombre: '',
  apellidos: '',
  email: '',
  mensaje: ''
});

// Método para enviar el formulario
const submitForm = () => {
  // Aquí implementarías la lógica para enviar el formulario
  console.log('Formulario enviado:', form.value);
  // Restablecer el formulario después del envío
  form.value = {
    nombre: '',
    apellidos: '',
    email: '',
    mensaje: ''
  };
  // Mostrar un mensaje de confirmación
  alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
};
</script>

<style scoped>
.bg-coral-500 {
  background-color: #ff8c7a;
}
.hover\:bg-coral-600:hover {
  background-color: #ff7c6a;
}
</style>
