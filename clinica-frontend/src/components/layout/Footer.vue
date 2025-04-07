<template>
  <footer class="bg-gray-800 text-white py-10">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Información de contacto -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Contacto</h3>
          <p class="mb-2">C/Péris y Valero 178, bajo</p>
          <p class="mb-4">46006 Valencia</p>

          <p class="mb-2">688764073</p>
          <p class="mb-4">info@clinicasati.es</p>

          <!-- Redes sociales -->
          <div class="flex space-x-3 mt-2">
            <a href="#" class="bg-white text-gray-800 h-8 w-8 rounded-full flex items-center justify-center">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="bg-white text-gray-800 h-8 w-8 rounded-full flex items-center justify-center">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="bg-white text-gray-800 h-8 w-8 rounded-full flex items-center justify-center">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" class="bg-white text-gray-800 h-8 w-8 rounded-full flex items-center justify-center">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <!-- Enlaces rápidos (opcional) -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Enlaces rápidos</h3>
          <ul>
            <li class="mb-2"><router-link to="/" class="hover:text-coral-500 transition">Inicio</router-link></li>
            <li class="mb-2"><router-link to="/quienes-somos" class="hover:text-coral-500 transition">Quiénes somos</router-link></li>
            <li class="mb-2"><router-link to="/especialidades" class="hover:text-coral-500 transition">Especialidades</router-link></li>
            <li class="mb-2"><router-link to="/servicios" class="hover:text-coral-500 transition">Servicios</router-link></li>
            <li class="mb-2"><router-link to="/nuestro-espacio" class="hover:text-coral-500 transition">Nuestro espacio</router-link></li>
            <li class="mb-2"><router-link to="/contacto" class="hover:text-coral-500 transition">Contacto</router-link></li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 pt-5 border-t border-gray-700 text-center text-sm">
        <p>&copy; {{ new Date().getFullYear() }} by Marta Llosa. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>
