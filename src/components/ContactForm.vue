<template>
  <div class="flex flex-col lg:flex-row gap-6 shadow-soft rounded-xl overflow-hidden">

    <div class="lg:w-1/3 flex flex-col">

      <div class="rounded-t-xl overflow-hidden shadow-md">
        <div class="relative overflow-hidden shadow-inner" style="height: 195px;">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.37523627281189%2C39.45782276238325%2C-0.37280082702638%2C39.45936023947621&amp;layer=mapnik&amp;marker=39.45859151155501%2C-0.3740185499191284"
            style="border: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
            class="filter brightness-105 contrast-95">
          </iframe>
        </div>
      </div>


      <div class="bg-teal-50 p-3 text-sm text-teal-800">
        <h4 class="font-bold mb-1 text-teal-800">Cómo llegar:</h4>
        <ul class="space-y-1">
          <li class="flex items-start">
            <div class="flex-shrink-0 h-4 w-4 text-teal-600 mr-1 mt-0.5">
              <i class="fas fa-subway"></i>
            </div>
            <span>Metro: Líneas 3 y 5 (Estación Bailén)</span>
          </li>
          <li class="flex items-start">
            <div class="flex-shrink-0 h-4 w-4 text-teal-600 mr-1 mt-0.5">
              <i class="fas fa-bus"></i>
            </div>
            <span>Bus: Líneas 2, 3, 41, 99 (Parada Pérez Galdós)</span>
          </li>
          <li class="flex items-start">
            <div class="flex-shrink-0 h-4 w-4 text-teal-600 mr-1 mt-0.5">
              <i class="fas fa-car"></i>
            </div>
            <span>Parking público a 200m (Mercado Ruzafa)</span>
          </li>
        </ul>
      </div>


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


    <div class="bg-white p-6 lg:w-2/3">
      <h2 class="text-xl font-bold text-teal-800 mb-5">{{ title || 'Envíanos un mensaje' }}</h2>

      <form @submit.prevent="submitForm" class="space-y-4">

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


        <div>
          <label for="mensaje" class="block text-sm text-gray-600 mb-1">Mensaje</label>
          <textarea
            id="mensaje"
            v-model="form.mensaje"
            :rows="messageRows || 8"
            class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-200 focus:border-teal-400 transition-all outline-none"
            style="width: 100%; box-sizing: border-box; resize: vertical;"
          ></textarea>
        </div>


        <button
          type="submit"
          class="w-full py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-500 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 cursor-pointer"
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


defineProps({
  title: {
    type: String,
    default: ''
  },
  messageRows: {
    type: Number,
    default: 8
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


const emit = defineEmits(['form-submitted']);


const form = ref({
  nombre: '',
  apellidos: '',
  email: '',
  mensaje: '',
  privacidad: false
});


const submitForm = () => {

  emit('form-submitted', {...form.value});


  form.value = {
    nombre: '',
    apellidos: '',
    email: '',
    mensaje: '',
    privacidad: false
  };


  alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
};
</script>

<style scoped>

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
