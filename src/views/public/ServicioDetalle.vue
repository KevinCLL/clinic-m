<template>
  <div class="overflow-hidden">

    <section class="relative py-12 md:py-16 overflow-hidden" :style="{ backgroundColor: specialtyColor }">
      <ResponsiveImage :src="plantImages.ramasFondoIzquierda2" alt="" img-class="absolute left-0 top-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-sway" loading="lazy" />
      <ResponsiveImage :src="plantImages.ramasFondoDerecha2" alt="" img-class="absolute right-0 bottom-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-sway-delayed" loading="lazy" />

      <div class="container mx-auto px-4 relative z-10">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8">{{ servicioActual.titulo }}</h1>
        <p class="text-center text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          {{ servicioActual.descripcionCorta }}
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
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-700 mb-6">{{ servicioActual.subtitulo }}</h2>

                <div class="prose prose-lg max-w-none text-gray-700">
                  <p v-for="(parrafo, index) in servicioActual.contenido" :key="index" class="mb-4 text-justify text-base md:text-lg" v-html="parrafo"></p>
                </div>
              </div>


              <div class="bg-white rounded-xl shadow-soft p-8">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-700 mb-6">Características</h2>

                <ul class="space-y-4">
                  <li v-for="(caracteristica, index) in servicioActual.caracteristicas" :key="index" class="flex items-start">
                    <div class="flex-shrink-0 h-6 w-6 text-primary-500 mr-2">
                      <i class="fas fa-check-circle"></i>
                    </div>
                    <span class="text-gray-700 text-base md:text-lg">{{ caracteristica }}</span>
                  </li>
                </ul>
              </div>
            </div>


            <div class="md:w-1/3">

              <div class="bg-white rounded-xl shadow-soft p-6 mb-6">
                <h3 class="text-xl md:text-2xl font-bold text-primary-700 mb-4">Profesionales</h3>
                <ul class="space-y-3">
                  <li v-for="profesional in servicioActual.profesionales" :key="profesional.nombre" class="flex items-center">
                    <div class="flex-shrink-0 h-5 w-5 text-primary-500 mr-2">
                      <i class="fas fa-user-md"></i>
                    </div>
                    <div class="flex items-center gap-2">
                      <div>
                        <p class="font-medium text-black">{{ profesional.nombre }}</p>
                        <p class="text-sm md:text-base text-gray-500">{{ profesional.especialidad }}</p>
                      </div>
                      <a v-if="profesional.linkedin" :href="profesional.linkedin" target="_blank" rel="noopener noreferrer" class="text-primary-500 hover:text-primary-700 transition-colors ml-1" aria-label="LinkedIn">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>


              <div v-if="servicioActual.preguntas && servicioActual.preguntas.length > 0" class="bg-white rounded-xl shadow-soft p-6">
                <h3 class="text-xl md:text-2xl font-bold text-primary-700 mb-4">Preguntas frecuentes</h3>

                <div class="space-y-4">
                  <div v-for="(pregunta, index) in servicioActual.preguntas" :key="index">
                    <h4 class="font-medium text-primary-600 mb-1">{{ pregunta.pregunta }}</h4>
                    <p class="text-gray-600 text-sm md:text-base text-justify" v-html="pregunta.respuesta"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="-mt-8 pb-12 bg-white relative overflow-hidden">
      <ResponsiveImage :src="plantImages.ramasFondoAbajo" alt="" img-class="absolute right-0 bottom-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-sway" loading="lazy" />
      <ResponsiveImage :src="plantImages.ramasFondoAbajo2" alt="" img-class="absolute left-0 bottom-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-sway-delayed" loading="lazy" />

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto">
          <div class="bg-white rounded-xl shadow-soft p-8">
            <AreaIntervencion
              :areaType="servicioId === 'infancia-adolescencia' ? 'infanto-juvenil' :
                         servicioId === 'perinatal' ? 'perinatal' : 'adultos'"
              colorTheme="primary"
              :multicolumn="true"
            />
          </div>
        </div>
      </div>
    </section>


    <section class="py-12 md:py-16 pb-24 md:pb-32 bg-gray-50 relative overflow-hidden">

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8">Otras especialidades</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <router-link
            v-for="specialty in allSpecialties"
            :key="specialty.id"
            :to="isCurrentSpecialty(specialty.id) ? '' : { name: 'servicio-detalle', params: { id: specialty.id } }"
            @click.prevent="!isCurrentSpecialty(specialty.id) && navigateToSpecialty(specialty.id)"
            class="px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300 specialty-button text-center flex items-center justify-center min-h-[4rem]"
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
import ResponsiveImage from '@/components/ResponsiveImage.vue';
import { plantImages } from '@/assets/plantImages.js';
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
      const varName = cssVar.slice(4, -1);
      return getComputedStyle(document.documentElement).getPropertyValue(varName) || '#007971';
    }
    return cssVar;
  }
  return '#007971';
});





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
      especialidad: prof.role,
      linkedin: prof.linkedin || null
    })) : [],
    preguntas: serviceData.faqs ? serviceData.faqs.map(faq => ({
      pregunta: faq.pregunta,
      respuesta: faq.respuesta
    })) : []
  };
});
</script>

<style scoped>

.specialty-button {
  line-height: 1.2;
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
