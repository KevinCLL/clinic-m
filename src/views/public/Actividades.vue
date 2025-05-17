<template>
  <div class="overflow-hidden">

    <section class="relative py-12 md:py-16 bg-gradient-to-br from-purple-50 to-white overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full opacity-5 transform translate-x-24 -translate-y-24"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full opacity-5 transform -translate-x-20 translate-y-20"></div>

      <div class="container mx-auto px-4 relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold text-center text-purple-800 mb-6">Actividades de promoción de la salud mental</h1>
        <p class="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed text-justify">
          Complementamos nuestros servicios terapéuticos con actividades que promueven el bienestar integral. Nuestro enfoque va más allá de la terapia tradicional, ofreciendo herramientas para el autocuidado y el desarrollo personal.
        </p>
      </div>
    </section>


    <section class="py-16 bg-white relative overflow-hidden">
      <div class="absolute -right-32 top-1/3 w-96 h-96 rounded-full bg-purple-50 opacity-30"></div>
      <div class="absolute -left-20 bottom-1/3 w-64 h-64 rounded-full bg-purple-50 opacity-30"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div class="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-purple-lg hover:-translate-y-1 group">
              <router-link to="/actividades/mindfulness" class="h-48 overflow-hidden block">
                <img src="@/assets/images/grupos_mindfulness.png" alt="Grupos de mindfulness" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              </router-link>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-purple-700 mb-2">Grupos de mindfulness</h3>
                <p class="text-gray-600 mb-4">Aprende técnicas de atención plena para reducir el estrés y mejorar tu bienestar emocional. Nuestros grupos están pensados para personas que buscan herramientas efectivas para gestionar la ansiedad y el malestar emocional.</p>
                <router-link to="/actividades/mindfulness" class="text-purple-600 hover:text-purple-500 font-medium inline-flex items-center transition-colors">
                  Saber más <i class="fas fa-chevron-right ml-1 text-sm"></i>
                </router-link>
              </div>
            </div>


            <div class="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-purple-lg hover:-translate-y-1 group">
              <router-link to="/actividades/yoga" class="h-48 overflow-hidden block">
                <img src="@/assets/images/yoga.png" alt="Yoga general" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              </router-link>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-purple-700 mb-2">Yoga general</h3>
                <p class="text-gray-600 mb-4">Sesiones de yoga adaptadas a todos los niveles para mejorar la conexión mente-cuerpo. Enfocado en la reducción del estrés y la mejora de la conciencia corporal como vía para el bienestar psicológico.</p>
                <router-link to="/actividades/yoga" class="text-purple-600 hover:text-purple-500 font-medium inline-flex items-center transition-colors">
                  Saber más <i class="fas fa-chevron-right ml-1 text-sm"></i>
                </router-link>
              </div>
            </div>


            <div class="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-purple-lg hover:-translate-y-1 group">
              <router-link to="/actividades/yoga-trauma" class="h-48 overflow-hidden block">
                <img src="@/assets/images/yoga_sensible.png" alt="Yoga sensible al trauma" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              </router-link>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-purple-700 mb-2">Yoga sensible al trauma</h3>
                <p class="text-gray-600 mb-4">Un enfoque especializado del yoga para personas que han experimentado situaciones traumáticas. Creamos un espacio seguro para reconectar con el cuerpo y las sensaciones de forma gradual y respetuosa.</p>
                <router-link to="/actividades/yoga-trauma" class="text-purple-600 hover:text-purple-500 font-medium inline-flex items-center transition-colors">
                  Saber más <i class="fas fa-chevron-right ml-1 text-sm"></i>
                </router-link>
              </div>
            </div>


            <div class="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-purple-lg hover:-translate-y-1 group">
              <router-link to="/actividades/retiros" class="h-48 overflow-hidden block">
                <img src="@/assets/images/retiros.png" alt="Retiros de meditación" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              </router-link>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-purple-700 mb-2">Retiros de meditación</h3>
                <p class="text-gray-600 mb-4">Experiencias inmersivas para profundizar en la práctica meditativa y el autoconocimiento. Estas jornadas ofrecen un espacio de desconexión y encuentro con uno mismo en entornos naturales.</p>
                <router-link to="/actividades/retiros" class="text-purple-600 hover:text-purple-500 font-medium inline-flex items-center transition-colors">
                  Saber más <i class="fas fa-chevron-right ml-1 text-sm"></i>
                </router-link>
              </div>
            </div>


            <div class="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-purple-lg hover:-translate-y-1 group md:col-span-2">
              <router-link to="/actividades/otras" class="h-48 overflow-hidden block">
                <img src="@/assets/images/otras_actividades.png" alt="Otras actividades" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              </router-link>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-purple-700 mb-2">Otras actividades</h3>
                <p class="text-gray-600 mb-4">Descubre talleres, charlas y eventos especiales orientados a diferentes aspectos del bienestar emocional. Ofrecemos actividades puntuales sobre temas variados relacionados con la salud mental y el crecimiento personal.</p>
                <router-link to="/actividades/otras" class="text-purple-600 hover:text-purple-500 font-medium inline-flex items-center transition-colors">
                  Saber más <i class="fas fa-chevron-right ml-1 text-sm"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="py-16 bg-gradient-to-br from-purple-50 to-white relative overflow-hidden">
      <div class="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
      <div class="absolute -right-32 top-1/3 w-96 h-96 rounded-full border border-purple-100 opacity-70"></div>
      <div class="absolute -left-20 bottom-1/4 w-64 h-64 rounded-full border border-purple-100 opacity-70"></div>

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl font-bold text-center text-purple-800 mb-12">Beneficios de nuestras actividades</h2>

        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div class="bg-white rounded-xl shadow-soft p-6 hover:shadow-purple-lg transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-brain text-xl"></i>
                </div>
                <h3 class="text-xl font-semibold text-purple-700">Reducción del estrés</h3>
              </div>
              <p class="text-gray-600">Aprende técnicas efectivas para reducir los niveles de ansiedad y estrés en tu día a día.</p>
            </div>


            <div class="bg-white rounded-xl shadow-soft p-6 hover:shadow-purple-lg transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-heart text-xl"></i>
                </div>
                <h3 class="text-xl font-semibold text-purple-700">Bienestar emocional</h3>
              </div>
              <p class="text-gray-600">Cultiva estados emocionales positivos y desarrolla una mayor estabilidad ante las dificultades.</p>
            </div>


            <div class="bg-white rounded-xl shadow-soft p-6 hover:shadow-purple-lg transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-users text-xl"></i>
                </div>
                <h3 class="text-xl font-semibold text-purple-700">Conexión con otros</h3>
              </div>
              <p class="text-gray-600">Forma parte de una comunidad que comparte intereses y objetivos similares respecto al bienestar personal.</p>
            </div>


            <div class="bg-white rounded-xl shadow-soft p-6 hover:shadow-purple-lg transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-lightbulb text-xl"></i>
                </div>
                <h3 class="text-xl font-semibold text-purple-700">Autoconocimiento</h3>
              </div>
              <p class="text-gray-600">Explora aspectos de ti mismo/a que te permitirán tomar decisiones más alineadas con tus valores y necesidades.</p>
            </div>


            <div class="bg-white rounded-xl shadow-soft p-6 hover:shadow-purple-lg transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-balance-scale text-xl"></i>
                </div>
                <h3 class="text-xl font-semibold text-purple-700">Equilibrio mente-cuerpo</h3>
              </div>
              <p class="text-gray-600">Integra la dimensión física y mental para un enfoque holístico de tu salud y bienestar.</p>
            </div>


            <div class="bg-white rounded-xl shadow-soft p-6 hover:shadow-purple-lg transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-tools text-xl"></i>
                </div>
                <h3 class="text-xl font-semibold text-purple-700">Herramientas para la vida</h3>
              </div>
              <p class="text-gray-600">Adquiere recursos prácticos que podrás aplicar en tu día a día para gestionar situaciones difíciles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <InfoComponent
      colorTheme="purple"
      message="Descubre todas nuestras actividades para mejorar tu bienestar"
    />
  </div>
</template>

<script setup>
import InfoComponent from '@/components/InfoComponent.vue';


defineOptions({
  name: 'ActividadesView'
});
</script>

<style scoped>

.text-purple-500 {
  color: #8A64A3;
}
.text-purple-600 {
  color: #7857A0;
}
.text-purple-700 {
  color: #654A94;
}
.text-purple-800 {
  color: #523D86;
}
.bg-purple-50 {
  background-color: #F5F0FA;
}
.bg-purple-100 {
  background-color: #E9DFEE;
}
.bg-purple-200 {
  background-color: #D4C4DE;
}
.bg-purple-500 {
  background-color: #8A64A3;
}
.bg-purple-600 {
  background-color: #7857A0;
}
.bg-purple-700 {
  background-color: #654A94;
}
.hover\:bg-purple-50:hover {
  background-color: #F5F0FA;
}
.hover\:bg-purple-500:hover {
  background-color: #8A64A3;
}
.border-purple-100 {
  border-color: #E9DFEE;
}
.hover\:text-purple-500:hover {
  color: #8A64A3;
}
.from-purple-50 {
  --tw-gradient-from: #F5F0FA;
}
.shadow-soft {
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
}
.hover\:shadow-purple-lg:hover {
  box-shadow: 0 10px 20px -5px rgba(138, 100, 163, 0.3);
}
</style>
