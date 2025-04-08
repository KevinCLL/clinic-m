<template>
  <div class="overflow-hidden">
    <!-- Cabecera de la página -->
    <section class="relative py-16 md:py-24 bg-gradient-to-br from-teal-50 to-white overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full opacity-5 transform translate-x-24 -translate-y-24"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full opacity-5 transform -translate-x-20 translate-y-20"></div>

      <div class="container mx-auto px-4 relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold text-center text-teal-800 mb-6">Nuestro Espacio</h1>
        <p class="text-center text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          En nuestra clínica, entendemos que el entorno juega un papel crucial en el bienestar emocional de las personas que nos consultan. Por eso, hemos diseñado cada espacio con sumo cuidado para crear un ambiente de seguridad y calidez que promueva la relajación y reduzca el estrés. Utilizamos colores suaves y naturales, iluminación adecuada, materiales orgánicos y elementos naturales como plantas para generar una sensación de tranquilidad y conexión.
        </p>
      </div>
    </section>

    <!-- Nuestras Instalaciones - Diseño alternado -->
    <section class="py-16 md:py-24 bg-white relative">
      <div class="absolute -right-32 top-1/3 w-96 h-96 rounded-full bg-teal-50 opacity-50"></div>
      <div class="absolute -left-20 bottom-1/3 w-64 h-64 rounded-full bg-teal-50 opacity-50"></div>

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl font-bold text-center text-teal-800 mb-16">Nuestras Instalaciones</h2>

        <!-- Espacio 1: Recepción (Imagen a la izquierda) -->
        <div class="max-w-6xl mx-auto mb-24">
          <div class="flex flex-col md:flex-row items-center">
            <div class="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 transform transition-all duration-700 hover:-translate-y-2 group">
              <div class="rounded-xl overflow-hidden shadow-soft transition-all duration-300 group-hover:shadow-teal-lg">
                <img src="@/assets/images/recepcion.png" alt="Recepción" class="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105">
              </div>
            </div>
            <div class="w-full md:w-1/2 md:pl-8 opacity-90 hover:opacity-100 transition-opacity duration-500" data-aos="fade-left">
              <h3 class="text-2xl font-semibold text-teal-700 mb-4">Recepción</h3>
              <p class="text-gray-700 leading-relaxed">
                Espacio acogedor donde te recibimos y te acompañamos desde el primer momento. Nuestro personal te atenderá con calidez, haciendo que te sientas bienvenido/a desde que cruzas nuestra puerta. Diseñado para transmitir serenidad y profesionalidad, es el primer contacto con nuestro concepto de bienestar.
              </p>
            </div>
          </div>
        </div>

        <!-- Espacio 2: Sala de Terapia (Imagen a la derecha) -->
        <div class="max-w-6xl mx-auto mb-24">
          <div class="flex flex-col md:flex-row-reverse items-center">
            <div class="w-full md:w-1/2 mb-8 md:mb-0 md:pl-8 transform transition-all duration-700 hover:-translate-y-2 group">
              <div class="rounded-xl overflow-hidden shadow-soft transition-all duration-300 group-hover:shadow-teal-lg">
                <img src="@/assets/images/sala_terapia.png" alt="Sala de terapia" class="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105">
              </div>
            </div>
            <div class="w-full md:w-1/2 md:pr-8 opacity-90 hover:opacity-100 transition-opacity duration-500" data-aos="fade-right">
              <h3 class="text-2xl font-semibold text-teal-700 mb-4">Sala de Terapia</h3>
              <p class="text-gray-700 leading-relaxed">
                Nuestras salas de terapia individual están diseñadas para proporcionar un ambiente íntimo y seguro donde puedas expresarte con total libertad y confianza. Con aislamiento acústico, mobiliario confortable y una iluminación cuidadosamente seleccionada, creamos el entorno perfecto para el proceso terapéutico.
              </p>
            </div>
          </div>
        </div>

        <!-- Espacio 3: Sala de Espera (Imagen a la izquierda) -->
        <div class="max-w-6xl mx-auto mb-24">
          <div class="flex flex-col md:flex-row items-center">
            <div class="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 transform transition-all duration-700 hover:-translate-y-2 group">
              <div class="rounded-xl overflow-hidden shadow-soft transition-all duration-300 group-hover:shadow-teal-lg">
                <img src="@/assets/images/sala_espera.png" alt="Sala de espera" class="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105">
              </div>
            </div>
            <div class="w-full md:w-1/2 md:pl-8 opacity-90 hover:opacity-100 transition-opacity duration-500" data-aos="fade-left">
              <h3 class="text-2xl font-semibold text-teal-700 mb-4">Sala de Espera</h3>
              <p class="text-gray-700 leading-relaxed">
                Un espacio tranquilo con asientos cómodos donde podrás relajarte antes de tu cita. Disponemos de agua, revistas y una pequeña biblioteca con material sobre bienestar emocional. Hemos cuidado cada detalle para que incluso el tiempo de espera sea una experiencia agradable y relajante.
              </p>
            </div>
          </div>
        </div>

        <!-- Espacio 4: Espacio Infantil (Imagen a la derecha) -->
        <div class="max-w-6xl mx-auto mb-24">
          <div class="flex flex-col md:flex-row-reverse items-center">
            <div class="w-full md:w-1/2 mb-8 md:mb-0 md:pl-8 transform transition-all duration-700 hover:-translate-y-2 group">
              <div class="rounded-xl overflow-hidden shadow-soft transition-all duration-300 group-hover:shadow-teal-lg">
                <img src="@/assets/images/espacio_infantil.png" alt="Sala infantil" class="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105">
              </div>
            </div>
            <div class="w-full md:w-1/2 md:pr-8 opacity-90 hover:opacity-100 transition-opacity duration-500" data-aos="fade-right">
              <h3 class="text-2xl font-semibold text-teal-700 mb-4">Espacio Infantil</h3>
              <p class="text-gray-700 leading-relaxed">
                Un ambiente colorido y adaptado para los más pequeños, con materiales y juegos terapéuticos que facilitan la expresión y el desarrollo de habilidades socio-emocionales. Este espacio está especialmente diseñado para que niños y adolescentes se sientan cómodos y puedan trabajar a través del juego.
              </p>
            </div>
          </div>
        </div>

        <!-- Espacio 5: Sala de Terapia Grupal (Imagen a la izquierda) -->
        <div class="max-w-6xl mx-auto mb-24">
          <div class="flex flex-col md:flex-row items-center">
            <div class="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 transform transition-all duration-700 hover:-translate-y-2 group">
              <div class="rounded-xl overflow-hidden shadow-soft transition-all duration-300 group-hover:shadow-teal-lg">
                <img src="@/assets/images/terapia_grupal.png" alt="Sala de terapia grupal" class="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105">
              </div>
            </div>
            <div class="w-full md:w-1/2 md:pl-8 opacity-90 hover:opacity-100 transition-opacity duration-500" data-aos="fade-left">
              <h3 class="text-2xl font-semibold text-teal-700 mb-4">Sala de Terapia Grupal</h3>
              <p class="text-gray-700 leading-relaxed">
                Espacio amplio y versátil para sesiones grupales, talleres y actividades de mindfulness, diseñado para fomentar la interacción y el aprendizaje compartido. Equipado con todo lo necesario para diversas dinámicas terapéuticas y formativas en un ambiente cálido y profesional.
              </p>
            </div>
          </div>
        </div>

        <!-- Espacio 6: Exterior (Imagen a la derecha) -->
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-col md:flex-row-reverse items-center">
            <div class="w-full md:w-1/2 mb-8 md:mb-0 md:pl-8 transform transition-all duration-700 hover:-translate-y-2 group">
              <div class="rounded-xl overflow-hidden shadow-soft transition-all duration-300 group-hover:shadow-teal-lg">
                <img src="@/assets/images/exterior.png" alt="Exterior" class="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105">
              </div>
            </div>
            <div class="w-full md:w-1/2 md:pr-8 opacity-90 hover:opacity-100 transition-opacity duration-500" data-aos="fade-right">
              <h3 class="text-2xl font-semibold text-teal-700 mb-4">Exterior</h3>
              <p class="text-gray-700 leading-relaxed">
                La fachada y entrada a nuestra clínica, con acceso adaptado y un diseño que refleja la calidez y profesionalidad que encontrarás en nuestro interior. Nuestra ubicación ofrece comodidad y accesibilidad para todos nuestros visitantes.
              </p>
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
/* Colores basados en el logo ASATI */
.text-teal-600 {
  color: #009B8F;
}
.text-teal-700 {
  color: #00877C;
}
.text-teal-800 {
  color: #007267;
}
.bg-teal-50 {
  background-color: #E6F7F5;
}
.bg-teal-500 {
  background-color: #009B8F;
}
.bg-teal-600 {
  background-color: #00877C;
}
.bg-teal-700 {
  background-color: #007267;
}
.hover\:bg-teal-500:hover {
  background-color: #009B8F;
}
.shadow-soft {
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
}
.shadow-teal-lg {
  box-shadow: 0 10px 20px -5px rgba(0, 155, 143, 0.3);
}
.shadow-teal-sm {
  box-shadow: 0 4px 8px -1px rgba(0, 155, 143, 0.25);
}
</style>
