<template>
  <header class="relative overflow-hidden">
    <ResponsiveImage src="@/assets/images/ramas_fondo_derecha.png" alt="" img-class="absolute right-0 top-0 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-sway-gentle" loading="lazy" />
    <ResponsiveImage src="@/assets/images/ramas_fondo_izquierda.png" alt="" img-class="absolute left-0 top-0 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-sway-gentle-reverse" loading="lazy" />
    
    <div class="container mx-auto px-4 py-4 relative z-10">
      <div class="flex justify-between items-center mb-4">
        <div class="hidden md:block">
          <a :href="`tel:${contactInfo.phone}`" class="text-primary-700 mr-2 hover:text-primary-600 transition-colors duration-300 text-lg">{{ contactInfo.phone }}</a>
          <span class="text-gray-400 mx-1">|</span>
          <a :href="`mailto:${contactInfo.email}`" class="text-primary-700 hover:text-primary-600 transition-colors duration-300 text-lg" style="margin-left: 10px;">{{ contactInfo.email }}</a>
        </div>

        <div class="hidden md:flex space-x-3 ml-auto">
          <a :href="contactInfo.social.instagram" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-700 transition-colors duration-300 text-xl">
            <i class="fab fa-instagram"></i>
          </a>
          <a :href="contactInfo.social.linkedin" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-700 transition-colors duration-300 text-xl">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div class="flex justify-center" ref="logoContainer">
        <router-link to="/" class="flex items-center space-x-4">
          <ResponsiveImage :src="logoImg" :alt="contactInfo.clinicName" img-class="h-20 w-auto" loading="eager" />
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
            class="px-5 py-4 text-primary-600 hover:text-primary-700 transition-all duration-300 relative group text-lg font-normal"
            :class="{ 'font-medium': $route.path === item.path }"
          >
            {{ item.name }}
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" :class="{ 'scale-x-100': $route.path === item.path }"></span>
          </router-link>
        </div>

        <div class="md:hidden">
          <div class="flex items-center justify-between">
            <transition name="fade-slide">
              <div v-if="isSticky" class="text-primary-600 font-semibold py-4 pl-4 transition-all duration-300 text-base">
                CODA - SALUD MENTAL INTEGRAL
              </div>
            </transition>
            <button @click="toggleMobileMenu" class="p-4 text-primary-600 ml-auto">
              <i class="fas text-lg" :class="mobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
            </button>
          </div>

          <transition name="mobile-menu">
            <div v-if="mobileMenuOpen" class="pb-2">
              <router-link
                v-for="item in menuItems"
                :key="item.path"
                :to="item.path"
                class="block px-4 py-3 text-primary-600 hover:bg-primary-50 transition-all duration-300 text-lg"
                :class="{ 'bg-primary-50 text-primary-700 font-medium': $route.path === item.path }"
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
import { contactInfo } from '@/data/contactInfo.js';
import ResponsiveImage from '@/components/ResponsiveImage.vue';
import logoImg from '@/assets/images/logo.png';

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
  { name: 'Qué ofrecemos', path: '/que-ofrecemos' },
  { name: 'Nuestro espacio', path: '/nuestro-espacio' },
  { name: 'Contacto', path: '/contacto' }
];
</script>

<style scoped>
.router-link-active {
  color: var(--primary-600);
  font-weight: var(--font-weight-medium);
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

.text-primary-600 {
  color: var(--primary-600);
}
.text-primary-700 {
  color: var(--primary-700);
}
.text-primary-800 {
  color: var(--primary-800);
}
.hover\:text-primary-600:hover {
  color: var(--primary-600);
}
.hover\:text-primary-700:hover {
  color: var(--primary-700);
}
.hover\:bg-primary-50:hover {
  background-color: var(--primary-50);
}
.bg-primary-50 {
  background-color: var(--primary-50);
}
.bg-primary-600 {
  background-color: var(--primary-600);
}

.coda-text {
  transform: scaleX(1.4);
  transform-origin: center;
  letter-spacing: 0.0em;
}

@keyframes sway-gentle {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(5px) rotate(1deg);
  }
  75% {
    transform: translateY(-3px) rotate(-0.5deg);
  }
}

@keyframes sway-gentle-reverse {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-5px) rotate(-1deg);
  }
  75% {
    transform: translateY(3px) rotate(0.5deg);
  }
}

.animate-sway-gentle {
  animation: sway-gentle 10s ease-in-out infinite;
}

.animate-sway-gentle-reverse {
  animation: sway-gentle-reverse 10s ease-in-out infinite;
  animation-delay: 2s;
}
</style>
