<template>
  <div class="overflow-hidden">

    <section class="relative py-12 md:py-16 bg-gradient-to-br from-secondary-50 to-white overflow-hidden">
      <ResponsiveImage :src="plantImages.ramasFondoIzquierda2" alt="" img-class="absolute left-0 top-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-sway" loading="lazy" />
      <ResponsiveImage :src="plantImages.ramasFondoDerecha2" alt="" img-class="absolute right-0 bottom-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-sway-delayed" loading="lazy" />

      <div class="container mx-auto px-4 relative z-10">
        <h1 class="text-3xl md:text-4xl font-bold text-center text-secondary-800 mb-6">{{ actividadActual.titulo }}</h1>
        <p class="text-center text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          {{ actividadActual.descripcionCorta }}
        </p>
      </div>
    </section>


    <section class="py-16 bg-white relative overflow-hidden">
      <ResponsiveImage :src="plantImages.ramasFondoIzquierda" alt="" img-class="absolute left-0 top-20 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-sway" loading="lazy" />
      <ResponsiveImage :src="plantImages.ramasFondoDerecha" alt="" img-class="absolute right-0 bottom-20 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-sway-delayed" loading="lazy" />

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-col md:flex-row gap-8">

            <div class="md:w-2/3">
              <div class="bg-white rounded-xl shadow-soft p-8 mb-8">
                <h2 class="text-2xl md:text-3xl font-bold text-secondary-700 mb-6">¿En qué consiste esta actividad?</h2>

                <div class="prose prose-lg max-w-none text-gray-700">
                  <p v-for="(parrafo, index) in actividadActual.contenido" :key="index" class="mb-4 text-justify" v-html="parrafo">
                  </p>
                </div>
              </div>


            </div>


            <div class="md:w-1/3">



              <div class="bg-white rounded-xl shadow-soft p-6 mb-6">
                <h3 class="text-xl font-bold text-secondary-700 mb-4">Responsables</h3>
                <ul class="space-y-3">
                  <li v-for="responsable in actividadActual.responsables" :key="responsable.name" class="flex items-center">
                    <div class="flex-shrink-0 h-5 w-5 text-secondary-500 mr-2">
                      <i class="fas fa-user"></i>
                    </div>
                    <div>
                      <p class="font-medium text-black">{{ responsable.name }}</p>
                      <p class="text-sm text-gray-500">{{ responsable.role }}</p>
                    </div>
                  </li>
                </ul>
              </div>


              <div class="bg-white rounded-xl shadow-soft p-6">
                <h3 class="text-xl font-bold text-secondary-700 mb-4">¿A quién va dirigido?</h3>
                <p class="text-gray-700 mb-4 text-justify">{{ actividadActual.destinatarios }}</p>

                <div class="space-y-3 mt-6">
                  <h4 class="font-medium text-secondary-600">¿Quieres participar?</h4>
                  <p class="text-gray-600 text-sm mb-4">Reserva tu plaza o solicita más información</p>
                  <router-link to="/contacto" class="inline-block w-full py-2 bg-secondary-600 text-white font-medium rounded-lg text-center hover:bg-secondary-700 transition-colors duration-300">
                    Contactar ahora
                  </router-link>
                </div>
              </div>
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
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import InfoComponent from '@/components/InfoComponent.vue';
import ResponsiveImage from '@/components/ResponsiveImage.vue';
import { plantImages } from '@/assets/plantImages.js';
import { getActivityWithResponsables } from '@/data/activities.js';


defineOptions({
  name: 'ActividadDetalleView'
});

const route = useRoute();
const actividadId = route.params.id;


const actividadActual = computed(() => {
  const activityData = getActivityWithResponsables(actividadId);

  if (!activityData) {
    return {
      titulo: 'Actividad no encontrada',
      descripcionCorta: 'La actividad solicitada no está disponible.',
      contenido: ['Lo sentimos, la actividad solicitada no está disponible actualmente.'],
      responsables: []
    };
  }

  return {
    titulo: activityData.title,
    descripcionCorta: activityData.shortDescription,
    contenido: activityData.content,
    responsables: activityData.responsables,
    destinatarios: activityData.targetAudience
  };
});
</script>

<style scoped>
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
.bg-secondary-500 {
  background-color: var(--secondary-500);
}
.bg-secondary-600 {
  background-color: var(--secondary-600);
}
.bg-secondary-700 {
  background-color: var(--secondary-700);
}
.hover\:bg-secondary-700:hover {
  background-color: var(--secondary-700);
}
.from-secondary-50 {
  --tw-gradient-from: var(--secondary-50);
}
.shadow-soft {
  box-shadow: var(--shadow-lg);
}
</style>
