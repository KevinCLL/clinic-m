<template>
  <div>
    <!-- Cabecera de la página -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center text-coral-500 mb-4">Quiénes Somos</h1>
        <p class="text-center text-gray-700 max-w-3xl mx-auto">
          En Clínica Asati, nuestro enfoque es integral y multidisciplinar, combinando conocimientos y experiencias para ofrecer la mejor atención a nuestros pacientes.
        </p>
      </div>
    </section>

    <!-- Bloques de información alternados -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <!-- Bloque 1: Foto izquierda, texto derecha -->
        <div class="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div class="md:w-1/2">
            <img src="@/assets/images/placeholder.jpg" alt="Nuestros valores" class="rounded-lg shadow-lg w-full">
          </div>
          <div class="md:w-1/2">
            <h2 class="text-2xl font-bold text-blue-900 mb-4">Nuestra Misión</h2>
            <p class="text-gray-700 mb-4">
              Nuestra misión es proporcionar una atención de calidad en salud mental, basada en la evidencia científica y adaptada a las necesidades específicas de cada persona. Buscamos no solo aliviar los síntomas, sino promover el bienestar integral y la mejora de la calidad de vida.
            </p>
            <p class="text-gray-700">
              Creemos firmemente en la importancia de un enfoque humanista y personalizado, donde cada paciente es tratado con empatía, respeto y profesionalidad.
            </p>
          </div>
        </div>

        <!-- Bloque 2: Texto izquierda, foto derecha -->
        <div class="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
          <div class="md:w-1/2">
            <img src="@/assets/images/placeholder.jpg" alt="Nuestra visión" class="rounded-lg shadow-lg w-full">
          </div>
          <div class="md:w-1/2">
            <h2 class="text-2xl font-bold text-blue-900 mb-4">Nuestra Visión</h2>
            <p class="text-gray-700 mb-4">
              Aspiramos a ser un centro de referencia en salud mental, reconocido por la calidad de nuestros tratamientos y por nuestro enfoque integrador que combina los mejores aspectos de diferentes corrientes terapéuticas.
            </p>
            <p class="text-gray-700">
              Trabajamos para destigmatizar la salud mental y facilitar el acceso a tratamientos efectivos, contribuyendo así a una sociedad más consciente y saludable.
            </p>
          </div>
        </div>

        <!-- Bloque 3: Foto izquierda, texto derecha -->
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="md:w-1/2">
            <img src="@/assets/images/placeholder.jpg" alt="Nuestro enfoque" class="rounded-lg shadow-lg w-full">
          </div>
          <div class="md:w-1/2">
            <h2 class="text-2xl font-bold text-blue-900 mb-4">Nuestro Enfoque</h2>
            <p class="text-gray-700 mb-4">
              En Clínica Asati abordamos cada caso desde una perspectiva global, considerando tanto los aspectos psicológicos como los biológicos y sociales que influyen en la salud mental.
            </p>
            <p class="text-gray-700">
              Nuestro equipo multidisciplinar trabaja de forma colaborativa, compartiendo conocimientos y experiencias para ofrecer tratamientos personalizados y eficaces, adaptados a las necesidades específicas de cada paciente.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección "Conoce al equipo" -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-blue-900 mb-12">Conoce a Nuestro Equipo</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Tarjeta de miembro 1 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="@/assets/images/placeholder.jpg" alt="Dra. María García" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-blue-900 mb-1">Dra. María García</h3>
              <p class="text-coral-500 font-medium mb-3">Psiquiatra</p>
              <p class="text-gray-700 mb-4">
                Especialista en trastornos del estado de ánimo y ansiedad, con más de 15 años de experiencia en el campo de la psiquiatría.
              </p>
              <div class="flex space-x-3">
                <a href="#" class="text-blue-800 hover:text-coral-500">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="text-blue-800 hover:text-coral-500">
                  <i class="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Tarjeta de miembro 2 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="@/assets/images/placeholder.jpg" alt="Dr. Carlos Martínez" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-blue-900 mb-1">Dr. Carlos Martínez</h3>
              <p class="text-coral-500 font-medium mb-3">Psicólogo Clínico</p>
              <p class="text-gray-700 mb-4">
                Especializado en terapia cognitivo-conductual y EMDR para el tratamiento del trauma y trastornos de ansiedad.
              </p>
              <div class="flex space-x-3">
                <a href="#" class="text-blue-800 hover:text-coral-500">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="text-blue-800 hover:text-coral-500">
                  <i class="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Tarjeta de miembro 3 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="@/assets/images/placeholder.jpg" alt="Dra. Laura Sánchez" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-blue-900 mb-1">Dra. Laura Sánchez</h3>
              <p class="text-coral-500 font-medium mb-3">Neuropsicóloga</p>
              <p class="text-gray-700 mb-4">
                Especialista en evaluación y rehabilitación neuropsicológica, con formación específica en deterioro cognitivo y daño cerebral.
              </p>
              <div class="flex space-x-3">
                <a href="#" class="text-blue-800 hover:text-coral-500">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="text-blue-800 hover:text-coral-500">
                  <i class="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Tarjeta de miembro 4 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="@/assets/images/placeholder.jpg" alt="Dr. Javier López" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-blue-900 mb-1">Dr. Javier López</h3>
              <p class="text-coral-500 font-medium mb-3">Psiquiatra Infantojuvenil</p>
              <p class="text-gray-700 mb-4">
                Especializado en trastornos del neurodesarrollo y problemas emocionales en niños y adolescentes.
              </p>
              <div class="flex space-x-3">
                <a href="#" class="text-blue-800 hover:text-coral-500">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="text-blue-800 hover:text-coral-500">
                  <i class="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Tarjeta de miembro 5 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="@/assets/images/placeholder.jpg" alt="Dra. Ana Rodríguez" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-blue-900 mb-1">Dra. Ana Rodríguez</h3>
              <p class="text-coral-500 font-medium mb-3">Psicóloga Clínica</p>
              <p class="text-gray-700 mb-4">
                Especialista en trastornos de personalidad y terapia dialéctico-conductual, con amplia experiencia en terapia grupal.
              </p>
              <div class="flex space-x-3">
                <a href="#" class="text-blue-800 hover:text-coral-500">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="text-blue-800 hover:text-coral-500">
                  <i class="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Tarjeta de miembro 6 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="@/assets/images/placeholder.jpg" alt="Dr. Miguel Torres" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-blue-900 mb-1">Dr. Miguel Torres</h3>
              <p class="text-coral-500 font-medium mb-3">Psicólogo Sanitario</p>
              <p class="text-gray-700 mb-4">
                Especializado en terapia familiar sistémica y problemas de pareja, con formación en intervención en crisis.
              </p>
              <div class="flex space-x-3">
                <a href="#" class="text-blue-800 hover:text-coral-500">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="text-blue-800 hover:text-coral-500">
                  <i class="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
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
</style>
