<template>
  <footer class="bg-teal-700 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        <div>
          <h3 class="text-xl font-semibold mb-6">Contacto</h3>
          
          <div class="space-y-3 mb-6">
            <div class="flex items-center">
              <i class="fas fa-map-marker-alt mr-3 text-white/80"></i>
              <p class="whitespace-nowrap m-0">C/Peris y Valero 178, bajo 46006 Valencia</p>
            </div>
            
            <div class="flex items-center">
              <i class="fas fa-phone mr-3 text-white/80"></i>
              <a href="tel:688764073" class="hover:text-white/80 transition">688764073</a>
            </div>
            
            <div class="flex items-center">
              <i class="fas fa-envelope mr-3 text-white/80"></i>
              <a href="mailto:info@clinicasati.es" class="hover:text-white/80 transition">info@clinicasati.es</a>
            </div>
          </div>

          <div class="flex space-x-3">
            <a href="#" class="bg-white text-teal-700 h-9 w-9 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-white/90">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="bg-white text-teal-700 h-9 w-9 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-white/90">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="bg-white text-teal-700 h-9 w-9 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-white/90">
              <i class="fab fa-instagram"></i>
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

<style scoped>
.bg-teal-700 {
  background-color: #00877C;
}
.text-teal-700 {
  color: #00877C;
}
</style>
