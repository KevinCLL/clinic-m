<template>
  <div class="overflow-hidden">
    <!-- Hero Section con paralaje suave -->
    <section class="relative py-20 md:py-28 bg-gradient-to-br from-teal-50 to-white overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full opacity-5 transform translate-x-24 -translate-y-24"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full opacity-5 transform -translate-x-20 translate-y-20"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-teal-800 mb-6 leading-tight">Atención Integral a la <span class="text-teal-600">Salud Mental</span></h1>
          <p class="text-gray-700 mb-8 leading-relaxed text-lg">
            La salud mental es un estado de bienestar mental que permite a las personas hacer frente a los momentos de estrés de la vida,
            desarrollar todas sus habilidades, poder aprender y trabajar adecuadamente y contribuir a la mejora de su comunidad.
            Es parte fundamental de la salud y el bienestar que sustenta nuestras capacidades individuales y colectivas para tomar decisiones,
            establecer relaciones y dar forma al mundo en el que vivimos.
          </p>
          <p class="text-gray-700 mb-8 leading-relaxed text-lg">
            La salud mental es, además, un derecho humano fundamental y un elemento esencial para el desarrollo personal, comunitario y socioeconómico.
            Es más que la mera ausencia de trastornos mentales. Se da en un proceso complejo, que cada persona experimenta de una manera diferente,
            con diversos grados de dificultad y angustia y resultados sociales y clínicos que pueden ser muy diferentes.
          </p>
          <Button to="/servicios" text="Ver Servicios" variant="teal" class="text-lg px-8 py-3 shadow-teal transform transition-all duration-300 hover:scale-105" />
        </div>
      </div>
    </section>

    <!-- Servicios Destacados Section -->
    <section class="py-20 md:py-28 bg-white relative overflow-hidden">
      <div class="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-200 to-transparent"></div>
      <div class="absolute -right-32 top-1/3 w-96 h-96 rounded-full border border-teal-100 opacity-70"></div>
      <div class="absolute -left-20 bottom-1/4 w-64 h-64 rounded-full border border-teal-100 opacity-70"></div>

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-teal-800 text-center mb-4">Nuestros Servicios</h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Descubre nuestro enfoque integral para acompañarte en tu proceso terapéutico</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <!-- Servicio 1: Psicoterapia -->
          <div class="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-teal-lg hover:-translate-y-1 group">
            <div class="h-60 overflow-hidden">
              <img src="@/assets/images/psychotherapy.png" alt="Psicoterapia" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            </div>
            <div class="p-8 border-t border-teal-50">
              <h3 class="text-xl font-semibold text-teal-700 mb-3">Psicoterapia</h3>
              <p class="text-gray-700 mb-5">Acompañamiento terapéutico personalizado para desarrollar herramientas de afrontamiento.</p>
              <Button to="/servicios#psicoterapia" text="Más información" variant="outline-teal" class="transform transition-all duration-300 hover:scale-105" />
            </div>
          </div>

          <!-- Servicio 2: Psiquiatría -->
          <div class="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-teal-lg hover:-translate-y-1 group">
            <div class="h-60 overflow-hidden">
              <img src="@/assets/images/psychiatry.png" alt="Psiquiatría" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            </div>
            <div class="p-8 border-t border-teal-50">
              <h3 class="text-xl font-semibold text-teal-700 mb-3">Psiquiatría</h3>
              <p class="text-gray-700 mb-5">Evaluación, diagnóstico y tratamiento farmacológico de trastornos mentales con un enfoque integral y humanista.</p>
              <Button to="/servicios#psiquiatria" text="Más información" variant="outline-teal" class="transform transition-all duration-300 hover:scale-105" />
            </div>
          </div>

          <!-- Servicio 3: Mindfulness -->
          <div class="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-teal-lg hover:-translate-y-1 group">
            <div class="h-60 overflow-hidden">
              <img src="@/assets/images/mindfulness.png" alt="Mindfulness" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            </div>
            <div class="p-8 border-t border-teal-50">
              <h3 class="text-xl font-semibold text-teal-700 mb-3">Mindfulness</h3>
              <p class="text-gray-700 mb-5">Aprende técnicas de atención plena para reducir el estrés, mejorar la concentración y cultivar el bienestar emocional.</p>
              <Button to="/servicios#mindfulness" text="Más información" variant="outline-teal" class="transform transition-all duration-300 hover:scale-105" />
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <Button to="/servicios" text="Ver todos los servicios" variant="teal" class="px-6 shadow-teal transform transition-all duration-300 hover:scale-105" />
      </div>
    </section>

    <!-- Etapas Vitales Section -->
    <section class="py-20 md:py-28 bg-gradient-to-br from-teal-50 via-white to-teal-50 relative">
      <div class="absolute top-0 right-0 w-full h-full">
        <div class="w-full h-full opacity-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path d="M0,0 L1000,0 L1000,1000 L0,1000 Z" fill="none" stroke="#009B8F" stroke-width="1" stroke-dasharray="6,6" />
            <circle cx="500" cy="500" r="350" fill="none" stroke="#009B8F" stroke-width="1" />
            <circle cx="500" cy="500" r="250" fill="none" stroke="#009B8F" stroke-width="1" />
            <circle cx="500" cy="500" r="150" fill="none" stroke="#009B8F" stroke-width="1" />
          </svg>
        </div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-teal-800 text-center mb-4">Te acompañamos en todas las etapas de la vida</h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Nuestro equipo de especialistas te ofrece apoyo profesional adaptado a cada momento vital</p>

        <!-- Etapas vitales en una cuadrícula -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center max-w-5xl mx-auto">
          <div v-for="(stage, index) in lifeStages" :key="index" class="text-center transition-transform duration-300 hover:scale-105">
            <router-link :to="stage.route" class="block group">
              <div class="w-40 h-40 rounded-full overflow-hidden mx-auto mb-5 shadow-soft-lg relative">
                <div class="absolute inset-0 bg-teal-500 opacity-0 transition-opacity group-hover:opacity-20"></div>
                <img :src="stage.image" :alt="stage.alt" class="w-full h-full object-cover" />
              </div>
              <h3 class="font-semibold text-lg text-teal-700 group-hover:text-teal-600 transition-colors">{{ stage.title }}</h3>
            </router-link>
          </div>
        </div>

        <div class="text-center mt-12">
          <Button to="/servicios" text="Ver todos los servicios" variant="teal" class="px-6 shadow-teal transform transition-all duration-300 hover:scale-105" />
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 md:py-28 bg-white relative overflow-hidden">
      <div class="absolute -right-32 top-1/4 w-96 h-96 rounded-full bg-teal-50 opacity-70"></div>
      <div class="absolute -left-20 bottom-1/3 w-64 h-64 rounded-full bg-teal-50 opacity-70"></div>

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-teal-800 text-center mb-4">Contacto</h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Estamos aquí para escucharte y acompañarte en tu proceso</p>

        <div class="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-soft-lg">
          <!-- Información de contacto -->
          <div class="bg-teal-700 text-white p-10 md:w-2/5">
            <h3 class="text-2xl font-bold mb-8 text-teal-50">Información</h3>
            <div class="mb-6 flex items-start">
              <div class="text-teal-300 mr-4 mt-1"><i class="fas fa-map-marker-alt"></i></div>
              <div>
                <p class="mb-1">C/Péris y Valero 178, bajo</p>
                <p>46006 Valencia</p>
              </div>
            </div>
            <div class="mb-8 flex items-start">
              <div class="text-teal-300 mr-4 mt-1"><i class="fas fa-phone-alt"></i></div>
              <div>
                <p class="mb-1">688764073</p>
                <p>info@clinicasati.es</p>
              </div>
            </div>
            <div class="flex space-x-3">
              <a href="#" class="bg-teal-50 text-teal-700 h-10 w-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-white">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="bg-teal-50 text-teal-700 h-10 w-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-white">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="bg-teal-50 text-teal-700 h-10 w-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-white">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="bg-teal-50 text-teal-700 h-10 w-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-white">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <!-- Formulario de contacto -->
          <div class="bg-white p-10 md:w-3/5">
            <h3 class="text-2xl font-bold text-teal-700 mb-6">Envíanos un mensaje</h3>
            <form @submit.prevent="submitForm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label for="nombre" class="block text-sm text-gray-600 mb-1">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    v-model="form.nombre"
                    class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-200 focus:border-teal-400 transition-all outline-none"
                  >
                </div>
                <div>
                  <label for="apellidos" class="block text-sm text-gray-600 mb-1">Apellidos</label>
                  <input
                    type="text"
                    id="apellidos"
                    v-model="form.apellidos"
                    class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-200 focus:border-teal-400 transition-all outline-none"
                  >
                </div>
              </div>

              <div class="mb-5">
                <label for="email" class="block text-sm text-gray-600 mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-200 focus:border-teal-400 transition-all outline-none"
                >
              </div>

              <div class="mb-6">
                <label for="mensaje" class="block text-sm text-gray-600 mb-1">Mensaje</label>
                <textarea
                  id="mensaje"
                  v-model="form.mensaje"
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-200 focus:border-teal-400 transition-all outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-all hover:shadow-teal-sm flex items-center justify-center"
              >
                <span>Enviar</span>
                <i class="fas fa-paper-plane ml-2"></i>
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
    image: '/src/assets/images/child.png',
    route: '/servicios#infancia'
  },
  {
    title: 'Adolescencia',
    alt: 'Adolescentes',
    image: '/src/assets/images/teen.png',
    route: '/servicios#adolescencia'
  },
  {
    title: 'Adultos',
    alt: 'Adultos',
    image: '/src/assets/images/adult.png',
    route: '/servicios#adultos'
  },
  {
    title: 'Perinatal',
    alt: 'Embarazo y maternidad',
    image: '/src/assets/images/perinatal.png',
    route: '/servicios#perinatal'
  },
  {
    title: 'Tercera edad',
    alt: 'Adultos mayores',
    image: '/src/assets/images/third_age.png',
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
/* Colores basados en el logo ASATI */
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
.bg-teal-200 {
  background-color: #99E1D9;
}
.bg-teal-300 {
  background-color: #66D2C6;
}
.bg-teal-500 {
  background-color: #009B8F;
}
.bg-teal-600 {
  background-color: #00877C;
}
.bg-teal-700 {
  background-color: #007267;
}
.hover\:bg-teal-700:hover {
  background-color: #007267;
}
.border-teal-50 {
  border-color: #E6F7F5;
}
.border-teal-100 {
  border-color: #CCF0EC;
}
.focus\:ring-teal-200:focus {
  --tw-ring-color: #99E1D9;
}
.focus\:border-teal-400:focus {
  border-color: #33C3B3;
}
.shadow-soft {
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
}
.shadow-soft-lg {
  box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.05);
}
.shadow-teal {
  box-shadow: 0 4px 14px -2px rgba(0, 155, 143, 0.35);
}
.shadow-teal-sm {
  box-shadow: 0 4px 8px -1px rgba(0, 155, 143, 0.25);
}
.shadow-teal-lg {
  box-shadow: 0 10px 20px -5px rgba(0, 155, 143, 0.3);
}
.hover\:shadow-teal-lg:hover {
  box-shadow: 0 10px 20px -5px rgba(0, 155, 143, 0.3);
}
.hover\:shadow-teal-sm:hover {
  box-shadow: 0 4px 8px -1px rgba(0, 155, 143, 0.25);
}
</style>
