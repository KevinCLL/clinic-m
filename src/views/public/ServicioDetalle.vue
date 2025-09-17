<template>
  <div class="overflow-hidden">

    <section class="relative py-12 md:py-16 overflow-hidden" :style="{ backgroundColor: specialtyColor }">
      <img src="@/assets/images/ramas_fondo_derecha_2.png" alt="" class="absolute right-0 top-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-sway" />
      <img src="@/assets/images/ramas_fondo_izquierda_2.png" alt="" class="absolute left-0 bottom-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-sway-reverse" />
      <div class="container mx-auto px-4 relative z-10">
        <h1 class="text-3xl md:text-4xl font-bold text-center text-white mb-6">{{ servicioActual.titulo }}</h1>
        <p class="text-center text-white/90 max-w-3xl mx-auto text-lg leading-relaxed">
          {{ servicioActual.descripcionCorta }}
        </p>
      </div>
    </section>


    <section class="py-16 relative overflow-hidden" style="background-color: #e6f7f5;">
      <img src="@/assets/images/ramas_fondo_derecha_2.png" alt="" class="absolute right-0 top-20 w-56 md:w-72 lg:w-96 h-auto opacity-15 pointer-events-none animate-gentle-sway" />
      <img src="@/assets/images/ramas_fondo_izquierda_2.png" alt="" class="absolute left-0 bottom-20 w-56 md:w-72 lg:w-96 h-auto opacity-15 pointer-events-none animate-gentle-sway-reverse" />
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto relative">
          <!-- Plantas dentro de la sección principal -->
          <img src="@/assets/images/ramas_fondo_abajo.png" alt="" 
               class="plant-decoration right-6 top-6 w-16 md:w-20 lg:w-24 h-auto opacity-6 animate-plant-sway-gentle plant-rotate-25 plant-flip-xy" 
               style="transform-origin: top right;" />
          <img src="@/assets/images/ramas_fondo_izquierda.png" alt="" 
               class="plant-decoration left-8 bottom-10 w-18 md:w-22 lg:w-26 h-auto opacity-8 animate-plant-float plant-rotate-neg-15" 
               style="transform-origin: bottom center;" />
          <div class="flex flex-col md:flex-row gap-8">

            <div class="md:w-2/3">
              <div class="rounded-xl shadow-soft p-8 mb-8" style="background-color: white;">
                <h2 class="text-2xl md:text-3xl font-bold text-primary-700 mb-6">{{ servicioActual.subtitulo }}</h2>

                <div class="prose prose-lg max-w-none text-gray-700">
                  <p v-for="(parrafo, index) in servicioActual.contenido" :key="index" class="mb-4 text-justify" v-html="parrafo"></p>
                </div>
              </div>


              <div class="rounded-xl shadow-soft p-8" style="background-color: white;">
                <h2 class="text-2xl md:text-3xl font-bold text-primary-700 mb-6">Características</h2>

                <ul class="space-y-4">
                  <li v-for="(caracteristica, index) in servicioActual.caracteristicas" :key="index" class="flex items-start">
                    <div class="flex-shrink-0 h-6 w-6 text-primary-500 mr-2">
                      <i class="fas fa-check-circle"></i>
                    </div>
                    <span class="text-gray-700">{{ caracteristica }}</span>
                  </li>
                </ul>
              </div>
            </div>


            <div class="md:w-1/3">

              <div class="rounded-xl shadow-soft p-6 mb-6" style="background-color: white;">
                <h3 class="text-xl font-bold text-primary-700 mb-4">Profesionales</h3>
                <ul class="space-y-3">
                  <li v-for="profesional in servicioActual.profesionales" :key="profesional.nombre" class="flex items-center">
                    <div class="flex-shrink-0 h-5 w-5 text-primary-500 mr-2">
                      <i class="fas fa-user-md"></i>
                    </div>
                    <div>
                      <p class="font-medium text-black">{{ profesional.nombre }}</p>
                      <p class="text-sm text-gray-500">{{ profesional.especialidad }}</p>
                    </div>
                  </li>
                </ul>
              </div>


              <div class="rounded-xl shadow-soft p-6" style="background-color: white;">
                <h3 class="text-xl font-bold text-primary-700 mb-4">Preguntas frecuentes</h3>

                <div class="space-y-4">
                  <div v-for="(pregunta, index) in servicioActual.preguntas" :key="index">
                    <h4 class="font-medium text-primary-600 mb-1">{{ pregunta.pregunta }}</h4>
                    <p class="text-gray-600 text-sm text-justify" v-html="pregunta.respuesta"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="py-6 relative overflow-hidden" style="background-color: #e6f7f5;">
      <img src="@/assets/images/ramas_fondo_abajo_2.png" alt="" class="absolute right-0 top-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-sway" />
      <img src="@/assets/images/ramas_fondo_izquierda.png" alt="" class="absolute left-0 bottom-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-sway-reverse" />
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto relative">
          <!-- Plantas dentro de la sección de área de intervención -->
          <img src="@/assets/images/ramas_fondo_derecha_2.png" alt="" 
               class="plant-decoration right-4 top-4 w-14 md:w-18 lg:w-22 h-auto opacity-5 animate-plant-pendulum plant-rotate-30 plant-flip-y" 
               style="transform-origin: top left;" />
          <img src="@/assets/images/ramas_fondo_izquierda.png" alt="" 
               class="plant-decoration left-2 bottom-6 w-16 md:w-20 lg:w-24 h-auto opacity-7 animate-plant-sway-wide plant-rotate-neg-25 plant-flip-x" 
               style="transform-origin: bottom right;" />
          <div class="rounded-xl shadow-soft p-8" style="background-color: white;">
            <AreaIntervencion
              :areaType="servicioId.value === 'infancia-adolescencia' ? 'infanto-juvenil' :
                         servicioId.value === 'perinatal' ? 'perinatal' : 'adultos'"
              colorTheme="primary"
              :multicolumn="true"
            />
          </div>
        </div>
      </div>
    </section>


    <section class="py-12 md:py-16 relative overflow-hidden" style="background-color: #e6f7f5;">
      <img src="@/assets/images/ramas_fondo_abajo.png" alt="" class="absolute right-0 top-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-sway transform rotate-45" />
      <img src="@/assets/images/ramas_fondo_abajo_2.png" alt="" class="absolute left-0 bottom-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-sway-reverse transform -rotate-45" />

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-primary-800 mb-8">Otras especialidades</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <router-link
            v-for="specialty in allSpecialties"
            :key="specialty.id"
            :to="isCurrentSpecialty(specialty.id) ? '' : { name: 'servicio-detalle', params: { id: specialty.id } }"
            @click.prevent="!isCurrentSpecialty(specialty.id) && navigateToSpecialty(specialty.id)"
            class="px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300 specialty-button text-center"
            :class="{
              'text-white transform hover:scale-105 hover:shadow-lg cursor-pointer': !isCurrentSpecialty(specialty.id),
              'text-gray-500 bg-gray-200 opacity-60 pointer-events-none': isCurrentSpecialty(specialty.id)
            }"
            :style="!isCurrentSpecialty(specialty.id) ? { backgroundColor: specialty.color } : {}"
          >
            {{ specialty.name }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AreaIntervencion from '@/components/AreaIntervencion.vue';
import { getServiceWithProfessionals, specialties } from '@/data/services.js';

defineOptions({
  name: 'ServicioDetalleView'
});

const route = useRoute();
const router = useRouter();
const servicioId = computed(() => route.params.id);

const specialtyColor = computed(() => {
  const specialty = specialties.find(s => s.id === servicioId.value);
  if (specialty) {
    const cssVar = specialty.color;
    if (cssVar.startsWith('var(')) {
      const varName = cssVar.slice(4, -1); // Remove 'var(' and ')'
      return getComputedStyle(document.documentElement).getPropertyValue(varName) || '#007971';
    }
    return cssVar;
  }
  return '#007971';
});




// Get specialties with colors
const allSpecialties = computed(() => {
  return specialties.map(specialty => ({
    ...specialty,
    color: specialty.color.startsWith('var(') 
      ? getComputedStyle(document.documentElement).getPropertyValue(specialty.color.slice(4, -1))
      : specialty.color
  }));
});

const isCurrentSpecialty = (specialtyId) => {
  return specialtyId === servicioId.value || 
         (specialtyId === 'terapia-emdr' && servicioId.value === 'emdr') ||
         (specialtyId === 'emdr' && servicioId.value === 'terapia-emdr');
};

const navigateToSpecialty = (id) => {
  router.push({ name: 'servicio-detalle', params: { id } });
};

// Watch for route changes to scroll to top
watch(() => route.params.id, () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const servicioActual = computed(() => {
  const serviceData = getServiceWithProfessionals(servicioId.value);
  
  if (!serviceData) {
    return {
      titulo: 'Servicio no encontrado',
      descripcionCorta: 'El servicio solicitado no está disponible.',
      subtitulo: 'Servicio no disponible',
      contenido: ['Lo sentimos, el servicio solicitado no está disponible actualmente.'],
      caracteristicas: [],
      profesionales: [],
      preguntas: []
    };
  }

  return {
    titulo: serviceData.title,
    descripcionCorta: serviceData.description,
    subtitulo: serviceData.content?.subtitle || '¿Qué ofrecemos en este servicio?',
    contenido: serviceData.content?.description || [],
    caracteristicas: serviceData.characteristics || [],
    profesionales: serviceData.professionals ? serviceData.professionals.map(prof => ({
      nombre: prof.name,
      especialidad: prof.role
    })) : [],
    preguntas: serviceData.faqs ? serviceData.faqs.map(faq => ({
      pregunta: faq.pregunta,
      respuesta: faq.respuesta
    })) : []
  };
});
</script>

<style scoped>
/* Mobile styles for specialty buttons */
@media (max-width: 767px) {
  .specialty-button {
    min-height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.2;
  }
}

.text-primary-500 {
  color: var(--primary-500);
}
.text-primary-600 {
  color: var(--primary-600);
}
.text-primary-700 {
  color: var(--primary-700);
}
.text-primary-800 {
  color: var(--primary-800);
}
.bg-primary-50 {
  background-color: var(--primary-50);
}
.bg-primary-500 {
  background-color: var(--primary-500);
}
.from-primary-50 {
  --tw-gradient-from: var(--primary-50);
}
.shadow-soft {
  box-shadow: var(--shadow-lg);
}
</style>
