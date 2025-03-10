<template>
  <div>
    <!-- Cabecera de la página -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center text-blue-900 mb-4">Contacto</h1>
        <p class="text-center text-gray-700 max-w-3xl mx-auto">
          Estamos aquí para ayudarte. No dudes en contactarnos para solicitar información o concertar una cita.
        </p>
      </div>
    </section>

    <!-- Sección principal de contacto -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row">
          <!-- Información de contacto -->
          <div class="bg-gray-800 text-white p-8 md:w-2/5">
            <h2 class="text-2xl font-bold mb-6">Contacto</h2>

            <div class="mb-8">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 h-6 w-6 text-coral-500 mr-3">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p class="mb-1">C/Péris y Valero 178, bajo</p>
                  <p>46006 Valencia</p>
                </div>
              </div>

              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 h-6 w-6 text-coral-500 mr-3">
                  <i class="fas fa-phone"></i>
                </div>
                <div>
                  <p>688764073</p>
                </div>
              </div>

              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 h-6 w-6 text-coral-500 mr-3">
                  <i class="fas fa-envelope"></i>
                </div>
                <div>
                  <p>info@clinicasati.es</p>
                </div>
              </div>
            </div>

            <h3 class="text-xl font-bold mb-4">Horario</h3>
            <div class="mb-8">
              <div class="flex justify-between mb-2">
                <span>Lunes a Viernes</span>
                <span>9:00 - 20:00</span>
              </div>
              <div class="flex justify-between">
                <span>Sábados</span>
                <span>10:00 - 14:00</span>
              </div>
            </div>

            <h3 class="text-xl font-bold mb-4">Síguenos</h3>
            <div class="flex space-x-3">
              <a href="#" class="bg-white text-gray-800 h-10 w-10 rounded-full flex items-center justify-center hover:bg-coral-500 hover:text-white transition">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="bg-white text-gray-800 h-10 w-10 rounded-full flex items-center justify-center hover:bg-coral-500 hover:text-white transition">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="bg-white text-gray-800 h-10 w-10 rounded-full flex items-center justify-center hover:bg-coral-500 hover:text-white transition">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="bg-white text-gray-800 h-10 w-10 rounded-full flex items-center justify-center hover:bg-coral-500 hover:text-white transition">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <!-- Formulario de contacto -->
          <div class="bg-white p-8 md:w-3/5 shadow-lg">
            <h2 class="text-2xl font-bold text-blue-900 mb-6">Envíanos un mensaje</h2>

            <form @submit.prevent="submitForm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label for="nombre" class="block text-sm text-gray-700 mb-1">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    v-model="form.nombre"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                </div>
                <div>
                  <label for="apellidos" class="block text-sm text-gray-700 mb-1">Apellidos</label>
                  <input
                    type="text"
                    id="apellidos"
                    v-model="form.apellidos"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
              </div>

              <div class="mb-4">
                <label for="telefono" class="block text-sm text-gray-700 mb-1">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  v-model="form.telefono"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
              </div>

              <div class="mb-4">
                <label for="asunto" class="block text-sm text-gray-700 mb-1">Asunto</label>
                <input
                  type="text"
                  id="asunto"
                  v-model="form.asunto"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
              </div>

              <div class="mb-6">
                <label for="mensaje" class="block text-sm text-gray-700 mb-1">Mensaje</label>
                <textarea
                  id="mensaje"
                  v-model="form.mensaje"
                  rows="5"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div class="mb-6">
                <label class="flex items-start">
                  <input
                    type="checkbox"
                    v-model="form.privacidad"
                    required
                    class="mr-3 mt-1"
                  >
                  <span class="text-sm text-gray-700">
                    He leído y acepto la <a href="#" class="text-blue-600 hover:underline">política de privacidad</a> y el tratamiento de mis datos personales.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                class="w-full py-3 bg-coral-500 text-white font-medium rounded hover:bg-coral-600 transition focus:outline-none focus:ring-2 focus:ring-coral-500 focus:ring-offset-2"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Mapa -->
    <section class="py-8">
      <div class="container mx-auto px-4">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <!-- Aquí iría un iframe de Google Maps -->
          <div class="h-96 bg-gray-200 flex items-center justify-center">
            <p class="text-gray-600">Mapa de ubicación (iframe de Google Maps)</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Preguntas frecuentes (opcional) -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-blue-900 mb-12">Preguntas Frecuentes</h2>

        <div class="max-w-3xl mx-auto space-y-6">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-lg font-bold text-blue-900 mb-2">¿Cómo puedo solicitar una cita?</h3>
            <p class="text-gray-700">
              Puedes solicitar cita llamando al 688764073, enviando un email a info@clinicasati.es o rellenando el formulario de contacto en esta página.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-lg font-bold text-blue-900 mb-2">¿Cuánto dura una sesión?</h3>
            <p class="text-gray-700">
              La duración habitual de una sesión es de 50-60 minutos, aunque la primera sesión puede extenderse hasta 90 minutos para realizar una evaluación más completa.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-lg font-bold text-blue-900 mb-2">¿Trabajáis con seguros médicos?</h3>
            <p class="text-gray-700">
              Sí, trabajamos con varias compañías de seguros médicos. Consulta con nosotros para verificar si tu seguro está entre ellos.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-lg font-bold text-blue-900 mb-2">¿Qué debo esperar de la primera visita?</h3>
            <p class="text-gray-700">
              En la primera visita realizaremos una evaluación inicial para comprender tu situación y necesidades, establecer objetivos terapéuticos y diseñar un plan de tratamiento personalizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Estado del formulario
const form = ref({
  nombre: '',
  apellidos: '',
  email: '',
  telefono: '',
  asunto: '',
  mensaje: '',
  privacidad: false
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
    telefono: '',
    asunto: '',
    mensaje: '',
    privacidad: false
  };

  // Mostrar un mensaje de confirmación
  alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
};
</script>

<style scoped>
.text-coral-500 {
  color: #ff8c7a;
}
.bg-coral-500 {
  background-color: #ff8c7a;
}
.hover\:bg-coral-600:hover {
  background-color: #ff7c6a;
}
.focus\:ring-coral-500:focus {
  --tw-ring-color: #ff8c7a;
}
</style>
