<template>
  <div>
    <!-- Cabecera de la página -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center text-blue-900 mb-4">Nuestras Especialidades</h1>
        <p class="text-center text-gray-700 max-w-3xl mx-auto">
          En Clínica Asati contamos con un equipo multidisciplinar especializado en diferentes áreas de la salud mental para ofrecer una atención integral y personalizada.
        </p>
      </div>
    </section>

    <!-- Lista de especialidades -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Especialidad 1 -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div class="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <i class="fas fa-brain text-2xl text-coral-500"></i>
            </div>
            <h3 class="text-xl font-bold text-blue-900 mb-2">Psiquiatría General</h3>
            <p class="text-gray-700">
              Diagnóstico y tratamiento farmacológico de trastornos mentales como depresión, ansiedad, trastorno bipolar y esquizofrenia, entre otros.
            </p>
          </div>

          <!-- Especialidad 2 -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div class="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <i class="fas fa-comments text-2xl text-coral-500"></i>
            </div>
            <h3 class="text-xl font-bold text-blue-900 mb-2">Psicología Clínica</h3>
            <p class="text-gray-700">
              Evaluación, diagnóstico e intervención psicológica mediante diferentes enfoques terapéuticos adaptados a las necesidades de cada paciente.
            </p>
          </div>

          <!-- Especialidad 3 -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div class="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <i class="fas fa-child text-2xl text-coral-500"></i>
            </div>
            <h3 class="text-xl font-bold text-blue-900 mb-2">Psiquiatría Infantojuvenil</h3>
            <p class="text-gray-700">
              Atención especializada en problemas emocionales y de comportamiento en niños y adolescentes, incluyendo TDAH, autismo y trastornos de conducta.
            </p>
          </div>

          <!-- Especialidad 4 -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div class="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <i class="fas fa-heartbeat text-2xl text-coral-500"></i>
            </div>
            <h3 class="text-xl font-bold text-blue-900 mb-2">Psicología Infantojuvenil</h3>
            <p class="text-gray-700">
              Intervención psicológica adaptada a las necesidades de niños y adolescentes, trabajando en estrecha colaboración con padres y educadores.
            </p>
          </div>

          <!-- Especialidad 5 -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div class="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <i class="fas fa-head-side-brain text-2xl text-coral-500"></i>
            </div>
            <h3 class="text-xl font-bold text-blue-900 mb-2">Neuropsicología</h3>
            <p class="text-gray-700">
              Evaluación y rehabilitación de funciones cognitivas en personas con daño cerebral, deterioro cognitivo o trastornos del neurodesarrollo.
            </p>
          </div>

          <!-- Especialidad 6 -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div class="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <i class="fas fa-users text-2xl text-coral-500"></i>
            </div>
            <h3 class="text-xl font-bold text-blue-900 mb-2">Terapia Familiar y de Pareja</h3>
            <p class="text-gray-700">
              Intervención centrada en mejorar la comunicación y resolver conflictos en el ámbito familiar y de pareja, facilitando patrones de relación más saludables.
            </p>
          </div>

          <!-- Especialidad 7 -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div class="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <i class="fas fa-bolt text-2xl text-coral-500"></i>
            </div>
            <h3 class="text-xl font-bold text-blue-900 mb-2">Trauma y EMDR</h3>
            <p class="text-gray-700">
              Tratamiento especializado para trastorno por estrés postraumático y otras secuelas del trauma psicológico mediante técnicas específicas como EMDR.
            </p>
          </div>

          <!-- Especialidad 8 -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div class="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <i class="fas fa-utensils text-2xl text-coral-500"></i>
            </div>
            <h3 class="text-xl font-bold text-blue-900 mb-2">Trastornos de la Conducta Alimentaria</h3>
            <p class="text-gray-700">
              Abordaje interdisciplinar de anorexia, bulimia y otros trastornos alimentarios, combinando tratamiento médico, psicológico y nutricional.
            </p>
          </div>

          <!-- Especialidad 9 -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div class="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <i class="fas fa-user-friends text-2xl text-coral-500"></i>
            </div>
            <h3 class="text-xl font-bold text-blue-900 mb-2">Trastornos de Personalidad</h3>
            <p class="text-gray-700">
              Tratamiento especializado para los diferentes tipos de trastornos de personalidad, utilizando enfoques como la terapia dialéctico-conductual.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to action -->
    <section class="py-12 bg-blue-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl font-bold mb-4">¿Necesitas ayuda o más información?</h2>
        <p class="mb-6 max-w-2xl mx-auto">
          Nuestro equipo está disponible para resolver tus dudas y orientarte sobre el tratamiento más adecuado para tu situación específica.
        </p>
        <a href="/contacto" class="inline-block px-6 py-3 bg-coral-500 text-white rounded-full font-medium hover:bg-coral-600 transition">
          Contáctanos
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
// No se requiere lógica adicional por ahora
</script>

<style scoped>
.text-coral-500 {
  color: #ff8c7a;
}
.bg-coral-500 {
  background-color: #ff8c7a;
}
.hover\:bg-coral-600:hover {
  background-color: #ff7c6a;
}
</style>
