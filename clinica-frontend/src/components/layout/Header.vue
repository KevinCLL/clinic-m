<template>
  <header>
    <!-- Información de contacto y logo -->
    <div class="container mx-auto px-4 py-4">
      <!-- Información de contacto y redes sociales -->
      <div class="flex justify-between items-center mb-4">
        <div class="hidden md:block">
          <a href="tel:688764073" class="text-teal-700 mr-2 hover:text-teal-600 transition-colors">688764073</a>
          <span class="text-gray-400 mx-1">|</span>
          <a href="mailto:info@clinicasati.com" class="text-teal-700 hover:text-teal-600 transition-colors">info@clinicasati.com</a>
        </div>

        <div class="hidden md:flex space-x-3 ml-auto">
          <a href="#" class="text-teal-600 hover:text-teal-700 transition-colors">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="#" class="text-teal-600 hover:text-teal-700 transition-colors">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="text-teal-600 hover:text-teal-700 transition-colors">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <!-- Logo centrado y con su tamaño original -->
      <div class="flex justify-center">
        <router-link to="/" class="block">
          <img src="@/assets/images/logo.png" alt="Clínica Asati" class="w-auto" />
        </router-link>
      </div>
    </div>

    <!-- Navegación principal -->
    <nav class="bg-white shadow-md">
      <div class="container mx-auto">
        <div class="hidden md:flex justify-center">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="px-5 py-4 text-teal-800 hover:text-teal-600 transition duration-200 relative group"
            :class="{ 'font-medium': $route.path === item.path }"
          >
            {{ item.name }}
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" :class="{ 'scale-x-100': $route.path === item.path }"></span>
          </router-link>
        </div>

        <!-- Menú móvil -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="w-full flex justify-between items-center p-4 text-teal-800">
            <span class="font-medium">Menú</span>
            <i class="fas fa-bars"></i>
          </button>

          <div v-if="mobileMenuOpen" class="pb-2">
            <router-link
              v-for="item in menuItems"
              :key="item.path"
              :to="item.path"
              class="block px-4 py-2 text-teal-800 hover:bg-teal-50 transition-colors"
              :class="{ 'bg-teal-50 text-teal-700 font-medium': $route.path === item.path }"
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
  { name: 'Nuestro espacio', path: '/nuestro-espacio' },
  { name: 'Qué ofrecemos', path: '/que-ofrecemos' },
  { name: 'Contacto', path: '/contacto' }
];
</script>

<style scoped>
/* Personalización para el elemento activo del menú */
.router-link-active {
  color: #009B8F; /* Color turquesa para el elemento activo */
  font-weight: 500;
}

/* Colores ASATI */
.text-teal-600 {
  color: #009B8F;
}
.text-teal-700 {
  color: #00877C;
}
.text-teal-800 {
  color: #007267;
}
.hover\:text-teal-600:hover {
  color: #009B8F;
}
.hover\:text-teal-700:hover {
  color: #00877C;
}
.bg-teal-50 {
  background-color: #E6F7F5;
}
.bg-teal-500 {
  background-color: #009B8F;
}
</style>
