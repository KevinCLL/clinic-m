<template>
  <div>
    <!-- Cabecera de la página -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center text-blue-900 mb-4">Nuestros Servicios</h1>
        <p class="text-center text-gray-700 max-w-3xl mx-auto">
          Ofrecemos una amplia gama de servicios para atender las diferentes necesidades en salud mental, siempre con un enfoque personalizado y basado en la evidencia científica.
        </p>
      </div>
    </section>

    <!-- Sección principal de servicios -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <!-- Imagen de servicios -->
          <div class="md:w-1/2">
            <img src="@/assets/images/placeholder.jpg" alt="Nuestros servicios" class="rounded-lg shadow-lg w-full">
          </div>

          <!-- Lista de servicios -->
          <div class="md:w-1/2">
            <h2 class="text-2xl font-bold text-blue-900 mb-6">¿Qué ofrecemos?</h2>

            <ul class="space-y-4">
              <li class="flex items-start">
                <div class="flex-shrink-0 h-6 w-6 text-coral-500 mr-3">
                  <i class="fas fa-check-circle text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-lg text-blue-900">Evaluación y diagnóstico</h3>
                  <p class="text-gray-700">Valoración exhaustiva de los síntomas para un diagnóstico preciso.</p>
                </div>
              </li>

              <li class="flex items-start">
                <div class="flex-shrink-0 h-6 w-6 text-coral-500 mr-3">
                  <i class="fas fa-check-circle text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-lg text-blue-900">Terapia individual</h3>
                  <p class="text-gray-700">Sesiones personalizadas adaptadas a las necesidades específicas.</p>
                </div>
              </li>

              <li class="flex items-start">
                <div class="flex-shrink-0 h-6 w-6 text-coral-500 mr-3">
                  <i class="fas fa-check-circle text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-lg text-blue-900">Terapia grupal</h3>
                  <p class="text-gray-700">Intervención en grupo para problemáticas específicas.</p>
                </div>
              </li>

              <li class="flex items-start">
                <div class="flex-shrink-0 h-6 w-6 text-coral-500 mr-3">
                  <i class="fas fa-check-circle text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-lg text-blue-900">Terapia familiar y de pareja</h3>
                  <p class="text-gray-700">Intervención para mejorar las dinámicas relacionales.</p>
                </div>
              </li>

              <li class="flex items-start">
                <div class="flex-shrink-0 h-6 w-6 text-coral-500 mr-3">
                  <i class="fas fa-check-circle text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-lg text-blue-900">Tratamiento farmacológico</h3>
                  <p class="text-gray-700">Prescripción y seguimiento de medicación cuando es necesario.</p>
                </div>
              </li>

              <li class="flex items-start">
                <div class="flex-shrink-0 h-6 w-6 text-coral-500 mr-3">
                  <i class="fas fa-check-circle text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-lg text-blue-900">Evaluación neuropsicológica</h3>
                  <p class="text-gray-700">Valoración de funciones cognitivas y plan de rehabilitación.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios detallados con imágenes alternadas -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-blue-900 mb-12">Servicios Detallados</h2>

        <!-- Servicio 1: Imagen izquierda, texto derecha -->
        <div class="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div class="md:w-1/2">
            <img src="@/assets/images/placeholder.jpg" alt="Terapia psicológica" class="rounded-lg shadow-lg w-full">
          </div>
          <div class="md:w-1/2">
            <h3 class="text-2xl font-bold text-blue-900 mb-3">Terapia Psicológica</h3>
            <p class="text-gray-700 mb-4">
              Ofrecemos diferentes enfoques terapéuticos adaptados a las necesidades de cada paciente: terapia cognitivo-conductual, terapia de aceptación y compromiso, EMDR, terapia sistémica, entre otros.
            </p>
            <p class="text-gray-700">
              Nuestros profesionales están altamente capacitados y en constante formación para ofrecer las técnicas más efectivas y avaladas por la evidencia científica.
            </p>
          </div>
        </div>

        <!-- Servicio 2: Texto izquierda, imagen derecha -->
        <div class="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
          <div class="md:w-1/2">
            <img src="@/assets/images/placeholder.jpg" alt="Atención psiquiátrica" class="rounded-lg shadow-lg w-full">
          </div>
          <div class="md:w-1/2">
            <h3 class="text-2xl font-bold text-blue-900 mb-3">Atención Psiquiátrica</h3>
            <p class="text-gray-700 mb-4">
              Evaluación, diagnóstico y tratamiento farmacológico de trastornos mentales, con un enfoque integral que considera tanto los aspectos biológicos como los psicológicos y sociales.
            </p>
            <p class="text-gray-700">
              Seguimiento personalizado para ajustar la medicación según la evolución y minimizar los posibles efectos secundarios, siempre en coordinación con otros profesionales involucrados en el tratamiento.
            </p>
          </div>
        </div>

        <!-- Servicio 3: Imagen izquierda, texto derecha -->
        <div class="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div class="md:w-1/2">
            <img src="@/assets/images/placeholder.jpg" alt="Psicología infantojuvenil" class="rounded-lg shadow-lg w-full">
          </div>
          <div class="md:w-1/2">
            <h3 class="text-2xl font-bold text-blue-900 mb-3">Psicología Infantojuvenil</h3>
            <p class="text-gray-700 mb-4">
              Atención especializada para niños y adolescentes, abordando problemas como ansiedad, depresión, TDAH, trastornos del comportamiento, dificultades de aprendizaje y problemas familiares.
            </p>
            <p class="text-gray-700">
              Trabajamos en estrecha colaboración con padres y educadores, proporcionando orientación y herramientas para apoyar el desarrollo emocional y psicológico de los más jóvenes.
            </p>
          </div>
        </div>

        <!-- Servicio 4: Texto izquierda, imagen derecha -->
        <div class="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
          <div class="md:w-1/2">
            <img src="@/assets/images/placeholder.jpg" alt="Neuropsicología" class="rounded-lg shadow-lg w-full">
          </div>
          <div class="md:w-1/2">
            <h3 class="text-2xl font-bold text-blue-900 mb-3">Neuropsicología</h3>
            <p class="text-gray-700 mb-4">
              Evaluación neuropsicológica completa para identificar alteraciones cognitivas en personas con daño cerebral, deterioro cognitivo o trastornos del neurodesarrollo.
            </p>
            <p class="text-gray-700">
              Programas de rehabilitación neuropsicológica personalizados para mejorar o compensar las funciones cognitivas afectadas, potenciando la autonomía y calidad de vida.
            </p>
          </div>
        </div>

        <!-- Servicio 5: Imagen izquierda, texto derecha -->
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="md:w-1/2">
            <img src="@/assets/images/placeholder.jpg" alt="Terapia grupal" class="rounded-lg shadow-lg w-full">
          </div>
          <div class="md:w-1/2">
            <h3 class="text-2xl font-bold text-blue-900 mb-3">Terapia Grupal</h3>
            <p class="text-gray-700 mb-4">
              Grupos terapéuticos para diferentes problemáticas (ansiedad, depresión, regulación emocional, habilidades sociales), donde los participantes se benefician del apoyo mutuo y el aprendizaje compartido.
            </p>
            <p class="text-gray-700">
              Los grupos son dirigidos por profesionales especializados que facilitan la interacción y proporcionan herramientas adaptadas a las necesidades específicas del grupo.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to action -->
    <section class="py-12 bg-blue-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl font-bold mb-4">¿Quieres más información sobre nuestros servicios?</h2>
        <p class="mb-6 max-w-2xl mx-auto">
          No dudes en contactarnos para resolver tus dudas o solicitar una cita inicial donde valoraremos tu caso y te orientaremos sobre el servicio más adecuado.
        </p>
        <a href="/contacto" class="inline-block px-6 py-3 bg-coral-500 text-white rounded-full font-medium hover:bg-coral-600 transition">
          Solicitar Información
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
