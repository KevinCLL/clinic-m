<template>
  <footer class="bg-primary-600 text-white py-12 relative overflow-hidden">
    <ResponsiveImage :src="plantImages.ramasFondoDerecha" alt="" img-class="absolute right-0 top-0 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-sway-footer" loading="lazy" />
    <ResponsiveImage :src="plantImages.ramasFondoIzquierda" alt="" img-class="absolute left-0 bottom-0 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-sway-footer-reverse" loading="lazy" />
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        <div>
          <h3 class="text-xl font-semibold mb-6">Contacto</h3>
          
          <div class="space-y-3 mb-6">
            <div class="flex items-center">
              <i class="fas fa-map-marker-alt mr-3 text-white/80"></i>
              <p class="whitespace-nowrap m-0">{{ contactInfo.address.fullAddress }}</p>
            </div>
            
            <div class="flex items-center">
              <i class="fas fa-phone mr-3 text-white/80"></i>
              <a :href="`tel:${contactInfo.phone}`" class="hover:text-white/80 transition">{{ contactInfo.phone }}</a>
            </div>
            
            <div class="flex items-center">
              <i class="fas fa-envelope mr-3 text-white/80"></i>
              <a :href="`mailto:${contactInfo.email}`" class="hover:text-white/80 transition">{{ contactInfo.email }}</a>
            </div>
          </div>

          <div class="flex space-x-3">
            <a :href="contactInfo.social.instagram" target="_blank" rel="noopener noreferrer" class="bg-white text-primary-600 h-9 w-9 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-white/90">
              <i class="fab fa-instagram"></i>
            </a>
            <a :href="contactInfo.social.linkedin" target="_blank" rel="noopener noreferrer" class="bg-white text-primary-600 h-9 w-9 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-white/90">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-6">Enlaces rápidos</h3>
          <ul class="space-y-3">
            <li><router-link to="/" class="hover:text-white/80 transition">Inicio</router-link></li>
            <li><router-link to="/quienes-somos" class="hover:text-white/80 transition">Quiénes somos</router-link></li>
            <li><router-link to="/que-ofrecemos" class="hover:text-white/80 transition">Qué ofrecemos</router-link></li>
            <li><router-link to="/nuestro-espacio" class="hover:text-white/80 transition">Nuestro espacio</router-link></li>
            <li><router-link to="/contacto" class="hover:text-white/80 transition">Contacto</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { contactInfo } from '@/data/contactInfo.js';
import ResponsiveImage from '@/components/ResponsiveImage.vue';
import { plantImages } from '@/assets/plantImages.js';
</script>

<style scoped>
.bg-primary-600 {
  background-color: var(--primary-600);
}
.text-primary-600 {
  color: var(--primary-600);
}

@keyframes sway-footer {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-5px) rotate(0.5deg);
  }
}

@keyframes sway-footer-reverse {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(5px) rotate(-0.5deg);
  }
}

.animate-sway-footer {
  animation: sway-footer 20s ease-in-out infinite;
}

.animate-sway-footer-reverse {
  animation: sway-footer-reverse 20s ease-in-out infinite;
  animation-delay: 4s;
}
</style>
