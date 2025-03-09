<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-2">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-teal-600">Clínica Salud</h1>
          </div>

          <!-- Navigation -->
          <nav class="hidden md:flex space-x-8">
            <router-link to="/" class="text-gray-700 hover:text-teal-600 transition px-2 py-1">
              Inicio
            </router-link>
            <router-link to="/servicios" class="text-gray-700 hover:text-teal-600 transition px-2 py-1">
              Servicios
            </router-link>
            <router-link to="/contacto" class="text-gray-700 hover:text-teal-600 transition px-2 py-1">
              Contacto
            </router-link>
          </nav>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button class="text-gray-700 hover:text-teal-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main class="flex-grow">
      <div class="container mx-auto px-4 py-8">
        <router-view />
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-100">
      <div class="container mx-auto px-4 py-6">
        <div class="text-center text-gray-600">
          <p>&copy; {{ new Date().getFullYear() }} Clínica Salud. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No necesitamos lógica adicional por ahora
</script>
