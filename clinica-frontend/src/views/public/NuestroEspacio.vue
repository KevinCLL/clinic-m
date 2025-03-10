<template>
  <div>
    <!-- Cabecera de la página -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center text-blue-900 mb-4">Nuestro Espacio</h1>
        <p class="text-center text-gray-700 max-w-3xl mx-auto">
          Diseñado para ofrecer un ambiente acogedor, tranquilo y profesional donde puedas sentirte cómodo durante tu proceso terapéutico.
        </p>
      </div>
    </section>

    <!-- Galería de imágenes -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div class="rounded-lg overflow-hidden shadow-lg">
            <img src="@/assets/images/placeholder.jpg" alt="Recepción" class="w-full h-64 object-cover">
          </div>
          <div class="rounded-lg overflow-hidden shadow-lg">
            <img src="@/assets/images/placeholder.jpg" alt="Sala de terapia" class="w-full h-64 object-cover">
          </div>
          <div class="rounded-lg overflow-hidden shadow-lg">
            <img src="@/assets/images/placeholder.jpg" alt="Sala de espera" class="w-full h-64 object-cover">
          </div>
          <div class="rounded-lg overflow-hidden shadow-lg">
            <img src="@/assets/images/placeholder.jpg" alt="Sala infantil" class="w-full h-64 object-cover">
          </div>
          <div class="rounded-lg overflow-hidden shadow-lg">
            <img src="@/assets/images/placeholder.jpg" alt="Sala de terapia grupal" class="w-full h-64 object-cover">
          </div>
          <div class="rounded-lg overflow-hidden shadow-lg">
            <img src="@/assets/images/placeholder.jpg" alt="Exterior" class="w-full h-64 object-cover">
          </div>
        </div>
      </div>
    </section>

    <!-- Descripción del espacio -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-blue-900 mb-6">Un Espacio Pensado para Tu Bienestar</h2>

          <p class="text-gray-700 mb-6">
            En Clínica Asati hemos diseñado cuidadosamente cada rincón para crear un ambiente que favorezca el bienestar y la comodidad. Nuestras instalaciones cuentan con:
          </p>

          <div class="space-y-6">
            <div class="flex items-start">
              <div class="flex-shrink-0 h-6 w-6 text-coral-500 mr-3 mt-1">
                <i class="fas fa-check-circle"></i>
              </div>
              <div>
                <h3 class="font-semibold text-lg text-blue-900 mb-1">Consultas privadas y confortables</h3>
                <p class="text-gray-700">
                  Espacios acogedores e insonorizados que garantizan la privacidad y confidencialidad de las sesiones, creando un entorno propicio para la terapia.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0 h-6 w-6 text-coral-500 mr-3 mt-1">
                <i class="fas fa-check-circle"></i>
              </div>
              <div>
                <h3 class="font-semibold text-lg text-blue-900 mb-1">Sala de espera tranquila</h3>
                <p class="text-gray-700">
                  Un espacio relajante donde podrás aguardar tu cita con comodidad, con acceso a bebidas calientes y agua fresca.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0 h-6 w-6 text-coral-500 mr-3 mt-1">
                <i class="fas fa-check-circle"></i>
              </div>
              <div>
                <h3 class="font-semibold text-lg text-blue-900 mb-1">Sala de terapia infantil</h3>
                <p class="text-gray-700">
                  Especialmente diseñada para los más pequeños, con materiales adaptados para facilitar la expresión y el trabajo terapéutico a través del juego.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0 h-6 w-6 text-coral-500 mr-3 mt-1">
                <i class="fas fa-check-circle"></i>
              </div>
              <div>
                <h3 class="font-semibold text-lg text-blue-900 mb-1">Sala para terapia grupal y talleres</h3>
                <p class="text-gray-700">
                  Un espacio amplio y versátil para las sesiones grupales, talleres y actividades formativas que organizamos periódicamente.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0 h-6 w-6 text-coral-500 mr-3 mt-1">
                <i class="fas fa-check-circle"></i>
              </div>
              <div>
                <h3 class="font-semibold text-lg text-blue-900 mb-1">Accesibilidad</h3>
                <p class="text-gray-700">
                  Nuestras instalaciones son totalmente accesibles para personas con movilidad reducida, y contamos con aseos adaptados.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0 h-6 w-6 text-coral-500 mr-3 mt-1">
                <i class="fas fa-check-circle"></i>
              </div>
              <div>
                <h3 class="font-semibold text-lg text-blue-900 mb-1">Ubicación céntrica</h3>
                <p class="text-gray-700">
                  Situados en C/Péris y Valero 178, bajo, en una zona bien comunicada y con facilidad para aparcar en los alrededores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mapa y ubicación -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-blue-900 mb-8">Cómo Llegar</h2>

          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <!-- Aquí iría un iframe de Google Maps o similar -->
            <div class="h-96 bg-gray-200 flex items-center justify-center">
              <p class="text-gray-600">Mapa de ubicación (iframe de Google Maps)</p>
            </div>

            <div class="p-6">
              <h3 class="text-xl font-bold text-blue-900 mb-4">Dirección y Transporte</h3>

              <div class="mb-4">
                <p class="font-semibold text-blue-900">Dirección:</p>
                <p class="text-gray-700">C/Péris y Valero 178, bajo</p>
                <p class="text-gray-700">46006 Valencia</p>
              </div>

              <div class="mb-4">
                <p class="font-semibold text-blue-900">Transporte público:</p>
                <ul class="list-disc list-inside text-gray-700 ml-4">
                  <li>Metro: Líneas 3 y 5, estación Amistat</li>
                  <li>Autobús: Líneas 13, 14, 15 y 99</li>
                </ul>
              </div>

              <div>
                <p class="font-semibold text-blue-900">Aparcamiento:</p>
                <p class="text-gray-700">Zona de aparcamiento regulado en los alrededores. Parking público a 200 metros.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to action para visita virtual -->
    <section class="py-12 bg-blue-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl font-bold mb-4">¿Quieres conocer mejor nuestras instalaciones?</h2>
        <p class="mb-6 max-w-2xl mx-auto">
          Solicita una visita previa o consulta cualquier duda sobre nuestro espacio o servicios. Estaremos encantados de atenderte.
        </p>
        <a href="/contacto" class="inline-block px-6 py-3 bg-coral-500 text-white rounded-full font-medium hover:bg-coral-600 transition">
          Contactar
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
