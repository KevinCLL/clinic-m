<template>
  <div class="overflow-hidden">

    <SectionHeader title="Actividades de promoción de la salud mental" :backgroundImage="actividadesBackgroundImg">
      <p class="text-justify">
        Complementamos nuestros servicios terapéuticos con actividades que promueven el bienestar integral. Nuestro enfoque va más allá de la terapia tradicional, ofreciendo herramientas para el autocuidado y el desarrollo personal.
      </p>
    </SectionHeader>


    <section class="py-12 md:py-16 bg-white relative overflow-hidden">
      <img src="@/assets/images/ramas_fondo_derecha.png" alt="" class="absolute right-0 top-20 w-56 md:w-72 lg:w-96 h-auto opacity-15 pointer-events-none animate-gentle-sway" />
      <img src="@/assets/images/ramas_fondo_izquierda.png" alt="" class="absolute left-0 bottom-20 w-56 md:w-72 lg:w-96 h-auto opacity-15 pointer-events-none animate-gentle-sway-reverse" />
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <div 
              v-for="activity in activities" 
              :key="activity.id"
              class="bg-white card-rounded shadow-soft overflow-hidden transition-all duration-500 ease-in-out hover:shadow-secondary-lg hover:-translate-y-1 group"
            >
              <router-link :to="`/actividades/${activity.id}`" class="h-64 overflow-hidden block">
                <img :src="activity.image" :alt="activity.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              </router-link>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-secondary-700 mb-4">{{ activity.title }}</h3>
                <p class="text-gray-600 text-base mb-4">{{ activity.shortDescription }}</p>
                <router-link :to="`/actividades/${activity.id}`" class="text-secondary-600 hover:text-secondary-500 font-medium-weight inline-flex items-center transition-colors">
                  Saber más <i class="fas fa-chevron-right icon-margin text-sm"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="py-12 md:py-16 bg-gradient-to-br from-secondary-50 to-white relative overflow-hidden">
      <div class="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary-200 to-transparent"></div>
      <div class="absolute -right-32 top-1/3 w-96 h-96 rounded-full border border-secondary-100 opacity-70"></div>
      <div class="absolute -left-20 bottom-1/4 w-64 h-64 rounded-full border border-secondary-100 opacity-70"></div>
      <img src="@/assets/images/ramas_fondo_derecha.png" alt="" class="absolute right-0 top-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-sway" />
      <img src="@/assets/images/ramas_fondo_izquierda.png" alt="" class="absolute left-0 bottom-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-sway-reverse" />

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-secondary-800 mb-12">Beneficios de nuestras actividades</h2>

        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div class="bg-white card-rounded shadow-soft p-6 hover:shadow-secondary-lg transition-all duration-500 ease-in-out transform hover:-translate-y-1">
              <div class="flex items-center benefit-header">
                <div class="icon-container bg-secondary-100 text-secondary-600">
                  <i class="fas fa-brain icon-size"></i>
                </div>
                <h3 class="text-xl font-semibold text-secondary-700">Reducción del estrés</h3>
              </div>
              <p class="text-gray-600">Aprende técnicas efectivas para reducir los niveles de ansiedad y estrés en tu día a día.</p>
            </div>


            <div class="bg-white card-rounded shadow-soft p-6 hover:shadow-secondary-lg transition-all duration-500 ease-in-out transform hover:-translate-y-1">
              <div class="flex items-center benefit-header">
                <div class="icon-container bg-secondary-100 text-secondary-600">
                  <i class="fas fa-heart icon-size"></i>
                </div>
                <h3 class="text-xl font-semibold text-secondary-700">Bienestar emocional</h3>
              </div>
              <p class="text-gray-600">Cultiva estados emocionales positivos y desarrolla una mayor estabilidad ante las dificultades.</p>
            </div>


            <div class="bg-white card-rounded shadow-soft p-6 hover:shadow-secondary-lg transition-all duration-500 ease-in-out transform hover:-translate-y-1">
              <div class="flex items-center benefit-header">
                <div class="icon-container bg-secondary-100 text-secondary-600">
                  <i class="fas fa-users icon-size"></i>
                </div>
                <h3 class="text-xl font-semibold text-secondary-700">Conexión con otros</h3>
              </div>
              <p class="text-gray-600">Forma parte de una comunidad que comparte intereses y objetivos similares respecto al bienestar personal.</p>
            </div>


            <div class="bg-white card-rounded shadow-soft p-6 hover:shadow-secondary-lg transition-all duration-500 ease-in-out transform hover:-translate-y-1">
              <div class="flex items-center benefit-header">
                <div class="icon-container bg-secondary-100 text-secondary-600">
                  <i class="fas fa-lightbulb icon-size"></i>
                </div>
                <h3 class="text-xl font-semibold text-secondary-700">Autoconocimiento</h3>
              </div>
              <p class="text-gray-600">Explora aspectos de ti mismo/a que te permitirán tomar decisiones más alineadas con tus valores y necesidades.</p>
            </div>


            <div class="bg-white card-rounded shadow-soft p-6 hover:shadow-secondary-lg transition-all duration-500 ease-in-out transform hover:-translate-y-1">
              <div class="flex items-center benefit-header">
                <div class="icon-container bg-secondary-100 text-secondary-600">
                  <i class="fas fa-balance-scale icon-size"></i>
                </div>
                <h3 class="text-xl font-semibold text-secondary-700">Equilibrio mente-cuerpo</h3>
              </div>
              <p class="text-gray-600">Integra la dimensión física y mental para un enfoque holístico de tu salud y bienestar.</p>
            </div>


            <div class="bg-white card-rounded shadow-soft p-6 hover:shadow-secondary-lg transition-all duration-500 ease-in-out transform hover:-translate-y-1">
              <div class="flex items-center benefit-header">
                <div class="icon-container bg-secondary-100 text-secondary-600">
                  <i class="fas fa-tools icon-size"></i>
                </div>
                <h3 class="text-xl font-semibold text-secondary-700">Herramientas para la vida</h3>
              </div>
              <p class="text-gray-600">Adquiere recursos prácticos que podrás aplicar en tu día a día para gestionar situaciones difíciles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <InfoComponent
      colorTheme="secondary"
      message="Descubre todas nuestras actividades para mejorar tu bienestar"
    />
  </div>
</template>

<script setup>
import InfoComponent from '@/components/InfoComponent.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import { activities } from '@/data/activities.js';
import actividadesBackgroundImg from '@/assets/images/actividades.jpg';

defineOptions({
  name: 'ActividadesView'
});
</script>

<style scoped>
/* Import theme CSS */
@import '@/styles/theme.css';

/* Custom utility classes using theme variables */





.card-rounded {
  border-radius: var(--border-radius-xl);
}



.hover-transition {
  transition-duration: var(--transition-normal);
}

.font-medium-weight {
  font-weight: var(--font-weight-medium);
}

.icon-margin {
  margin-left: 0.25rem;
}

.icon-container {
  width: 3rem;
  height: 3rem;
  border-radius: var(--border-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.icon-size {
  font-size: var(--font-size-xl);
}

.benefit-header {
  margin-bottom: 1rem;
}

/* Color classes using theme variables */
.text-secondary-500 {
  color: var(--secondary-500);
}
.text-secondary-600 {
  color: var(--secondary-600);
}
.text-secondary-700 {
  color: var(--secondary-700);
}
.text-secondary-800 {
  color: var(--secondary-800);
}
.bg-secondary-50 {
  background-color: var(--secondary-50);
}
.bg-secondary-100 {
  background-color: var(--secondary-100);
}
.bg-secondary-200 {
  background-color: var(--secondary-200);
}
.bg-secondary-500 {
  background-color: var(--secondary-500);
}
.bg-secondary-600 {
  background-color: var(--secondary-600);
}
.bg-secondary-700 {
  background-color: var(--secondary-700);
}
.hover\:bg-secondary-50:hover {
  background-color: var(--secondary-50);
}
.hover\:bg-secondary-500:hover {
  background-color: var(--secondary-500);
}
.border-secondary-100 {
  border-color: var(--secondary-100);
}
.hover\:text-secondary-500:hover {
  color: var(--secondary-500);
}
.from-secondary-50 {
  --tw-gradient-from: var(--secondary-50);
}
.via-secondary-200 {
  --tw-gradient-stops: var(--tw-gradient-from), var(--secondary-200), var(--tw-gradient-to);
}
.shadow-soft {
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
}
.hover\:shadow-secondary-lg:hover {
  box-shadow: 0 10px 20px -5px rgba(138, 100, 163, 0.3);
}

@keyframes gentle-sway {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(2deg);
  }
}

@keyframes gentle-sway-reverse {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(-2deg);
  }
}

.animate-gentle-sway {
  animation: gentle-sway 8s ease-in-out infinite;
}

.animate-gentle-sway-reverse {
  animation: gentle-sway-reverse 8s ease-in-out infinite;
  animation-delay: 2s;
}
</style>
