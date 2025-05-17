<template>
  <footer class="bg-teal-800 text-white py-10">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <h3 class="text-2xl font-semibold mb-4 text-teal-50">Contacto</h3>
          <p class="mb-2 text-lg">C/Péris y Valero 178, bajo</p>
          <p class="mb-4 text-lg">46006 Valencia</p>

          <p class="mb-2 text-lg"><a href="tel:688764073" class="hover:text-teal-300 transition">688764073</a></p>
          <p class="mb-4 text-lg"><a href="mailto:info@clinicasati.es" class="hover:text-teal-300 transition">info@clinicasati.es</a></p>


          <div class="flex space-x-4 mt-3">
            <a href="#" class="bg-teal-50 text-teal-700 h-10 w-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-white">
              <i class="fab fa-facebook-f text-lg"></i>
            </a>
            <a href="#" class="bg-teal-50 text-teal-700 h-10 w-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-white">
              <i class="fab fa-twitter text-lg"></i>
            </a>
            <a href="#" class="bg-teal-50 text-teal-700 h-10 w-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-white">
              <i class="fab fa-instagram text-lg"></i>
            </a>
          </div>
        </div>


        <div>
          <h3 class="text-2xl font-semibold mb-4 text-teal-50">Enlaces rápidos</h3>
          <ul class="text-lg">
            <li class="mb-3"><router-link to="/" class="hover:text-teal-300 transition">Inicio</router-link></li>
            <li class="mb-3"><router-link to="/quienes-somos" class="hover:text-teal-300 transition">Quiénes somos</router-link></li>
            <li class="mb-3"><router-link to="/que-ofrecemos" class="hover:text-teal-300 transition">Qué ofrecemos</router-link></li>
            <li class="mb-3"><router-link to="/nuestro-espacio" class="hover:text-teal-300 transition">Nuestro espacio</router-link></li>
            <li class="mb-3"><router-link to="/contacto" class="hover:text-teal-300 transition">Contacto</router-link></li>
          </ul>
        </div>
      </div>


      <div class="mt-8 pt-5 border-t border-teal-700 text-center text-base text-teal-100">
        <p>&copy; {{ new Date().getFullYear() }} by Marta Llosa. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>

.bg-teal-800 {
  background-color: #007267;
}
.text-teal-50 {
  color: #E6F7F5;
}
.text-teal-100 {
  color: #CCF0EC;
}
.text-teal-300 {
  color: #66D2C6;
}
.hover\:text-teal-300:hover {
  color: #66D2C6;
}
.bg-teal-50 {
  background-color: #E6F7F5;
}
.text-teal-700 {
  color: #00877C;
}
.border-teal-700 {
  border-color: #00877C;
}
</style>
