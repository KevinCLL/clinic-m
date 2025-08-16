<template>
  <div class="flex flex-col lg:flex-row gap-6 shadow-soft rounded-xl overflow-hidden bg-white">

    <div class="lg:w-1/3 flex flex-col">

      <div class="rounded-t-xl overflow-hidden shadow-md">
        <div class="relative overflow-hidden shadow-inner" style="height: 330px;">
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


      <div class="bg-primary-50 p-4 text-sm text-primary-800">
        <h4 class="font-bold mb-1 text-primary-800">Cómo llegar:</h4>
        <ul class="space-y-1">
          <li class="flex items-start">
            <div class="flex-shrink-0 h-4 w-4 text-primary-600 mr-1 mt-0.5">
              <i class="fas fa-subway"></i>
            </div>
            <span>Metro: Líneas 3 y 5 (Estación Bailén)</span>
          </li>
          <li class="flex items-start">
            <div class="flex-shrink-0 h-4 w-4 text-primary-600 mr-1 mt-0.5">
              <i class="fas fa-bus"></i>
            </div>
            <span>Bus: Líneas 2, 3, 41, 99 (Parada Pérez Galdós)</span>
          </li>
          <li class="flex items-start">
            <div class="flex-shrink-0 h-4 w-4 text-primary-600 mr-1 mt-0.5">
              <i class="fas fa-car"></i>
            </div>
            <span>Parking público a 200m (Mercado Ruzafa)</span>
          </li>
        </ul>
      </div>


      <div class="bg-primary-600 text-white p-4 lg:p-6 flex-grow rounded-b-xl">
        <h2 class="text-xl font-bold mb-4">Contacto</h2>

        <div class="mb-4 space-y-2 text-sm">
          <div class="flex items-center">
            <i class="fas fa-map-marker-alt mr-3 text-primary-200 w-4"></i>
            <p>C/Peris y Valero 178, bajo 46006 Valencia</p>
          </div>

          <div class="flex items-center">
            <i class="fas fa-phone mr-3 text-primary-200 w-4"></i>
            <a href="tel:688764073" class="hover:text-white transition-colors">688764073</a>
          </div>

          <div class="flex items-center">
            <i class="fas fa-envelope mr-3 text-primary-200 w-4"></i>
            <a href="mailto:info@codasaludmental.es" class="hover:text-white transition-colors">info@codasaludmental.es</a>
          </div>
        </div>

        <h3 class="text-lg font-bold mb-2">Horario</h3>
        <div class="mb-6 space-y-1">
          <div class="flex justify-between text-sm">
            <span>Lunes a Viernes</span>
            <span>9:00 - 20:00</span>
          </div>
        </div>

        <div class="flex space-x-3">
          <a href="#" class="bg-white text-primary-600 h-8 w-8 rounded-full flex items-center justify-center hover:bg-primary-100 transition-all duration-300">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="bg-white text-primary-600 h-8 w-8 rounded-full flex items-center justify-center hover:bg-primary-100 transition-all duration-300">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>


    <div class="bg-white p-6 lg:p-8 lg:w-2/3">
      <h2 class="text-xl font-bold text-primary-800 mb-6">{{ title || 'Envíanos un mensaje' }}</h2>

      <form @submit.prevent="submitForm" class="space-y-4">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="nombre" class="block text-sm text-gray-600 mb-1">Nombre</label>
            <input
              type="text"
              id="nombre"
              v-model="form.nombre"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-400 transition-all outline-none"
            >
          </div>
          <div>
            <label for="apellidos" class="block text-sm text-gray-600 mb-1">Apellidos</label>
            <input
              type="text"
              id="apellidos"
              v-model="form.apellidos"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-400 transition-all outline-none"
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
            class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-400 transition-all outline-none"
          >
        </div>


        <div>
          <label for="mensaje" class="block text-sm text-gray-600 mb-1">Mensaje</label>
          <textarea
            id="mensaje"
            v-model="form.mensaje"
            :rows="messageRows || 8"
            class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-400 transition-all outline-none"
            style="width: 100%; box-sizing: border-box; resize: vertical;"
          ></textarea>
        </div>


        <button
          type="submit"
          class="w-full py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 cursor-pointer"
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
.text-primary-200 {
  color: var(--primary-200);
}
.text-primary-600 {
  color: var(--primary-600);
}
.text-primary-700 {
  color: var(--primary-700);
}
.text-primary-800 {
  color: var(--primary-800);
}
.bg-primary-50 {
  background-color: var(--primary-50);
}
.bg-primary-100 {
  background-color: var(--primary-100);
}
.bg-primary-500 {
  background-color: var(--primary-500);
}
.bg-primary-600 {
  background-color: var(--primary-600);
}
.hover\:bg-primary-100:hover {
  background-color: var(--primary-100);
}
.hover\:bg-primary-700:hover {
  background-color: var(--primary-700);
}
.focus\:ring-primary-200:focus {
  --tw-ring-color: var(--primary-200);
}
.focus\:ring-primary-500:focus {
  --tw-ring-color: var(--primary-500);
}
.focus\:border-primary-400:focus {
  border-color: var(--primary-400);
}
.shadow-soft {
  box-shadow: var(--shadow-lg);
}
</style>
