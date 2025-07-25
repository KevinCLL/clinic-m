<template>
  <header>
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center mb-4">
        <div class="hidden md:block">
          <a href="tel:688764073" class="text-teal-700 mr-2 hover:text-teal-600 transition-colors duration-300 text-lg">688764073</a>
          <span class="text-gray-400 mx-1">|</span>
          <a href="mailto:info@clinicasati.com" class="text-teal-700 hover:text-teal-600 transition-colors duration-300 text-lg">info@clinicasati.com</a>
        </div>

        <div class="hidden md:flex space-x-3 ml-auto">
          <a href="#" class="text-teal-600 hover:text-teal-700 transition-colors duration-300 text-xl">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="text-teal-600 hover:text-teal-700 transition-colors duration-300 text-xl">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-teal-600 hover:text-teal-700 transition-colors duration-300 text-xl">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <div class="flex justify-center" ref="logoContainer">
        <router-link to="/" class="flex items-center space-x-4">
          <img src="@/assets/images/logo.png" alt="Clínica Asati" class="h-20 w-auto" />
          <div class="flex flex-col items-center">
            <span class="asati-text text-5xl font-semibold text-teal-700">ASATI</span>
            <span class="text-lg text-teal-600 tracking-wider">Clínica de Salud Mental</span>
          </div>
        </router-link>
      </div>
    </div>

    <nav :class="['bg-white shadow-md', {'md:relative sticky top-0 z-50': isSticky}]" ref="navBar">
      <div class="container mx-auto">
        <div class="hidden md:flex justify-center">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="px-5 py-4 text-teal-800 hover:text-teal-600 transition-all duration-300 relative group text-lg font-normal"
            :class="{ 'font-medium': $route.path === item.path }"
          >
            {{ item.name }}
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" :class="{ 'scale-x-100': $route.path === item.path }"></span>
          </router-link>
        </div>

        <div class="md:hidden">
          <div class="flex items-center justify-between">
            <transition name="fade-slide">
              <div v-if="isSticky" class="text-teal-800 font-semibold py-4 pl-4 transition-all duration-300 text-base">
                ASATI - CLÍNICA DE SALUD MENTAL
              </div>
            </transition>
            <button @click="toggleMobileMenu" class="p-4 text-teal-800 ml-auto">
              <i class="fas text-lg" :class="mobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
            </button>
          </div>

          <transition name="mobile-menu">
            <div v-if="mobileMenuOpen" class="pb-2">
              <router-link
                v-for="item in menuItems"
                :key="item.path"
                :to="item.path"
                class="block px-4 py-3 text-teal-800 hover:bg-teal-50 transition-all duration-300 text-lg"
                :class="{ 'bg-teal-50 text-teal-700 font-medium': $route.path === item.path }"
                @click="mobileMenuOpen = false"
              >
                {{ item.name }}
              </router-link>
            </div>
          </transition>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const mobileMenuOpen = ref(false);
const navBar = ref(null);
const logoContainer = ref(null);
const isSticky = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const checkStickyNav = () => {
  if (logoContainer.value && navBar.value) {
    const logoBottom = logoContainer.value.getBoundingClientRect().bottom;
    isSticky.value = logoBottom <= 0;
  }
};

onMounted(() => {
  window.addEventListener('scroll', checkStickyNav);
  checkStickyNav();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkStickyNav);
});

const menuItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Quiénes somos', path: '/quienes-somos' },
  { name: 'Nuestro espacio', path: '/nuestro-espacio' },
  { name: 'Qué ofrecemos', path: '/que-ofrecemos' },
  { name: 'Contacto', path: '/contacto' }
];
</script>

<style scoped>
.router-link-active {
  color: #009B8F;
  font-weight: 500;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  max-height: 400px;
  overflow: hidden;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  max-height: 0;
  opacity: 0;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;
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

.asati-text {
  transform: scaleX(1.4);
  transform-origin: center;
  letter-spacing: 0.0em;
}
</style>
