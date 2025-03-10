<template>
  <header>
    <!-- Información de contacto y logo -->
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="hidden md:block">
        <a href="tel:688764073" class="text-gray-700 mr-2">688764073</a>
        <span class="text-gray-500 mx-1">|</span>
        <a href="mailto:info@clinicasati.com" class="text-gray-700">info@clinicasati.com</a>
      </div>

      <div class="mx-auto md:mx-0">
        <router-link to="/" class="flex flex-col items-center">
          <img src="@/assets/images/logo.png" alt="Clínica Asati" class="h-16" />
        </router-link>
      </div>

      <div class="hidden md:flex space-x-3">
        <a href="#" class="text-gray-700 hover:text-blue-800">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="#" class="text-gray-700 hover:text-blue-800">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="text-gray-700 hover:text-blue-800">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>

    <!-- Navegación principal -->
    <nav class="bg-white shadow-sm">
      <div class="container mx-auto">
        <div class="hidden md:flex justify-center">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="px-5 py-4 text-blue-900 hover:text-blue-700 transition duration-200"
            :class="{ 'text-coral-500': $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Menú móvil -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="w-full flex justify-between items-center p-4">
            <span class="text-blue-900 font-medium">Menú</span>
            <i class="fas fa-bars"></i>
          </button>

          <div v-if="mobileMenuOpen" class="pb-2">
            <router-link
              v-for="item in menuItems"
              :key="item.path"
              :to="item.path"
              class="block px-4 py-2 text-blue-900 hover:bg-gray-100"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const menuItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Quiénes somos', path: '/quienes-somos' },
  { name: 'Especialidades', path: '/especialidades' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Nuestro espacio', path: '/nuestro-espacio' },
  { name: 'Contacto', path: '/contacto' }
];
</script>

<style scoped>
/* Personalización para el elemento activo del menú */
.router-link-active {
  color: #ff8c7a; /* Color coral/salmón para el elemento activo */
  font-weight: 500;
}
</style>
