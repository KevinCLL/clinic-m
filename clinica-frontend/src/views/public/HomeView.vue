<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-12 rounded-lg mb-10">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">Bienvenido a Clínica Salud</h1>
        <p class="text-xl mb-8">Su salud es nuestra prioridad</p>
        <router-link to="/contacto" class="bg-white text-teal-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition">
          Solicitar cita
        </router-link>
      </div>
    </section>

    <!-- Features Section -->
    <section class="mb-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-teal-600 text-3xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h2 class="text-xl font-bold mb-2">Atención de Calidad</h2>
          <p class="text-gray-600">Nuestro equipo médico está altamente calificado para brindarle la mejor atención.</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-teal-600 text-3xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 class="text-xl font-bold mb-2">Horario Flexible</h2>
          <p class="text-gray-600">Ofrecemos horarios adaptados a sus necesidades, incluyendo fines de semana.</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-teal-600 text-3xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h2 class="text-xl font-bold mb-2">Equipamiento Moderno</h2>
          <p class="text-gray-600">Contamos con tecnología de vanguardia para diagnósticos precisos y tratamientos efectivos.</p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="bg-gray-50 p-8 rounded-lg">
      <h2 class="text-2xl font-bold mb-4 text-center">Sobre Nosotros</h2>
      <p class="text-gray-700 mb-4">
        Clínica Salud fue fundada con la misión de proporcionar atención médica de calidad accesible para todos.
        Nuestro equipo de profesionales está comprometido con su bienestar y salud.
      </p>
      <p class="text-gray-700">
        Ofrecemos una amplia gama de servicios médicos, desde consultas generales hasta tratamientos especializados,
        siempre con el objetivo de mejorar la calidad de vida de nuestros pacientes.
      </p>
    </section>
  </div>
</template>

<script setup>
// No se requiere lógica adicional por ahora
</script>
