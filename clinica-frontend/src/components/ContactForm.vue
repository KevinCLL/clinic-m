<template>
  <div class="flex flex-col lg:flex-row gap-6 shadow-soft rounded-xl overflow-hidden">
    <!-- Columna izquierda: Mapa y datos de contacto -->
    <div class="lg:w-1/3 flex flex-col">
      <!-- Mapa real de OpenStreetMap -->
      <div class="rounded-t-xl overflow-hidden">
        <iframe
          width="100%"
          height="195"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.37523627281189%2C39.45782276238325%2C-0.37280082702638%2C39.45936023947621&amp;layer=mapnik&amp;marker=39.45859151155501%2C-0.3740185499191284"
          style="border: none">
        </iframe>
      </div>

      <!-- Información de contacto -->
      <div class="bg-teal-700 text-white p-6 flex-grow rounded-b-xl">
        <h2 class="text-xl font-bold mb-4">Contacto</h2>

        <div class="mb-6 space-y-4">
          <div class="flex items-start">
            <div class="flex-shrink-0 h-5 w-5 text-teal-200 mr-3">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <p class="mb-1">C/Péris y Valero 178, bajo</p>
              <p>46006 Valencia</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="flex-shrink-0 h-5 w-5 text-teal-200 mr-3">
              <i class="fas fa-phone"></i>
            </div>
            <div>
              <p>688764073</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="flex-shrink-0 h-5 w-5 text-teal-200 mr-3">
              <i class="fas fa-envelope"></i>
            </div>
            <div>
              <p>info@clinicasati.es</p>
            </div>
          </div>
        </div>

        <h3 class="text-lg font-bold mb-2">Horario</h3>
        <div class="mb-6 space-y-1">
          <div class="flex justify-between text-sm">
            <span>Lunes a Viernes</span>
            <span>9:00 - 20:00</span>
          </div>
          <div class="flex justify-between text-sm">
            <span>Sábados</span>
            <span>10:00 - 14:00</span>
          </div>
        </div>

        <h3 class="text-lg font-bold mb-2">Síguenos</h3>
        <div class="flex space-x-3">
          <a href="#" class="bg-white text-teal-700 h-8 w-8 rounded-full flex items-center justify-center hover:bg-teal-100 transition-all duration-300">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="bg-white text-teal-700 h-8 w-8 rounded-full flex items-center justify-center hover:bg-teal-100 transition-all duration-300">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="bg-white text-teal-700 h-8 w-8 rounded-full flex items-center justify-center hover:bg-teal-100 transition-all duration-300">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Formulario de contacto simplificado -->
    <div class="bg-white p-6 lg:w-2/3">
      <h2 class="text-xl font-bold text-teal-800 mb-5">{{ title || 'Envíanos un mensaje' }}</h2>

      <form @submit.prevent="submitForm" class="space-y-4">
        <!-- Nombre y Apellidos -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="nombre" class="block text-sm text-gray-600 mb-1">Nombre</label>
            <input
              type="text"
              id="nombre"
              v-model="form.nombre"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-200 focus:border-teal-400 transition-all outline-none"
            >
          </div>
          <div>
            <label for="apellidos" class="block text-sm text-gray-600 mb-1">Apellidos</label>
            <input
              type="text"
              id="apellidos"
              v-model="form.apellidos"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-200 focus:border-teal-400 transition-all outline-none"
            >
          </div>
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm text-gray-600 mb-1">Email *</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-200 focus:border-teal-400 transition-all outline-none"
          >
        </div>

        <!-- Mensaje -->
        <div>
          <label for="mensaje" class="block text-sm text-gray-600 mb-1">Mensaje</label>
          <textarea
            id="mensaje"
            v-model="form.mensaje"
            :rows="messageRows"
            class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-200 focus:border-teal-400 transition-all outline-none"
          ></textarea>
        </div>

        <!-- Privacidad (condicional) -->
        <div v-if="showPrivacidad">
          <label class="flex items-start">
            <input
              type="checkbox"
              v-model="form.privacidad"
              required
              class="mr-2 mt-1"
            >
            <span class="text-sm text-gray-700">
              He leído y acepto la <a href="#" class="text-teal-600 hover:underline">política de privacidad</a>.
            </span>
          </label>
        </div>

        <!-- Botón de envío -->
        <button
          type="submit"
          class="w-full py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-500 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Enviar
          <i v-if="showIcon" class="fas fa-paper-plane ml-2"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

// Propiedades para personalizar el componente
defineProps({
  title: {
    type: String,
    default: ''
  },
  messageRows: {
    type: Number,
    default: 3
  },
  showIcon: {
    type: Boolean,
    default: false
  },
  showPrivacidad: {
    type: Boolean,
    default: true
  }
});

// Emitir eventos
const emit = defineEmits(['form-submitted']);

// Estado del formulario (simplificado)
const form = ref({
  nombre: '',
  apellidos: '',
  email: '',
  mensaje: '',
  privacidad: false
});

// Método para enviar el formulario
const submitForm = () => {
  // Emitir evento con los datos del formulario
  emit('form-submitted', {...form.value});

  // Restablecer el formulario después del envío
  form.value = {
    nombre: '',
    apellidos: '',
    email: '',
    mensaje: '',
    privacidad: false
  };

  // Mostrar un mensaje de confirmación
  alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
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
</style>
