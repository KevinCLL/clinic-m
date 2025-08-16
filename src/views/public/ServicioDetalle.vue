<template>
  <div class="overflow-hidden">

    <section class="relative py-12 md:py-16 overflow-hidden" :style="{ backgroundColor: specialtyColor }">
      <div class="container mx-auto px-4 relative z-10">
        <h1 class="text-3xl md:text-4xl font-bold text-center text-white mb-6">{{ servicioActual.titulo }}</h1>
        <p class="text-center text-white/90 max-w-3xl mx-auto text-lg leading-relaxed">
          {{ servicioActual.descripcionCorta }}
        </p>
      </div>
    </section>


    <section class="py-16 bg-white relative overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-col md:flex-row gap-8">

            <div class="md:w-2/3">
              <div class="bg-white rounded-xl shadow-soft p-8 mb-8">
                <h2 class="text-2xl md:text-3xl font-bold text-primary-700 mb-6">{{ servicioActual.subtitulo }}</h2>

                <div class="prose prose-lg max-w-none text-gray-700">
                  <p v-for="(parrafo, index) in servicioActual.contenido" :key="index" class="mb-4 text-justify">
                    {{ parrafo }}
                  </p>
                </div>
              </div>


              <div class="bg-white rounded-xl shadow-soft p-8">
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

              <div class="bg-white rounded-xl shadow-soft p-6 mb-6">
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


              <div class="bg-white rounded-xl shadow-soft p-6">
                <h3 class="text-xl font-bold text-primary-700 mb-4">Preguntas frecuentes</h3>

                <div class="space-y-4">
                  <div v-for="(pregunta, index) in servicioActual.preguntas" :key="index">
                    <h4 class="font-medium text-primary-600 mb-1">{{ pregunta.pregunta }}</h4>
                    <p class="text-gray-600 text-sm text-justify">{{ pregunta.respuesta }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="py-6 bg-white relative overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto">
          <div class="bg-white rounded-xl shadow-soft p-8">
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


    <section class="py-12 md:py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">Otras especialidades</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <button
            v-for="(specialty, index) in allSpecialties"
            :key="index"
            @click="isCurrentSpecialty(specialty.id) ? null : navigateToSpecialty(specialty.id)"
            class="px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300"
            :class="{
              'text-white transform hover:scale-105 hover:shadow-lg cursor-pointer': !isCurrentSpecialty(specialty.id),
              'text-gray-500 bg-gray-200 opacity-60': isCurrentSpecialty(specialty.id)
            }"
            :style="!isCurrentSpecialty(specialty.id) ? { backgroundColor: specialty.color } : {}"
            :disabled="isCurrentSpecialty(specialty.id)"
          >
            {{ specialty.name }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AreaIntervencion from '@/components/AreaIntervencion.vue';



defineOptions({
  name: 'ServicioDetalleView'
});

const route = useRoute();
const router = useRouter();
const servicioId = computed(() => route.params.id);

const specialtyColor = computed(() => {
  const mappedId = servicioId.value === 'terapia-emdr' ? 'emdr' : servicioId.value;
  return getComputedStyle(document.documentElement).getPropertyValue(`--specialty-${mappedId}`) || '#007971';
});


const servicios = {
  'psiquiatria': {
    titulo: 'Psiquiatría',
    descripcionCorta: 'Valoración, diagnóstico y tratamiento de trastornos mentales desde una perspectiva integral.',
    subtitulo: '¿Qué ofrecemos en nuestro servicio de Psiquiatría?',
    contenido: [
      'Nuestro enfoque en psiquiatría se centra en la persona y no solo en los síntomas, combinando la precisión diagnóstica con un trato humano y cercano. Entendemos que cada persona es única y que requiere un abordaje personalizado.',
      'Realizamos una evaluación exhaustiva para determinar tanto factores biológicos como psicológicos y sociales que puedan estar influyendo en el malestar, para poder ofrecer el tratamiento más adecuado en cada caso.',
      'Además de la intervención farmacológica cuando sea necesaria, ofrecemos un seguimiento regular y cuidadoso, ajustando el tratamiento según la evolución y en estrecha colaboración con los demás profesionales implicados en el cuidado (psicólogos, médicos de familia, etc.).',
      'Nuestro objetivo es que la persona comprenda su problemática, sea partícipe de las decisiones sobre su tratamiento y disponga de herramientas para mantener su bienestar a largo plazo.'
    ],
    caracteristicas: [
      'Valoración clínica inicial completa',
      'Diagnóstico diferencial',
      'Tratamiento farmacológico personalizado',
      'Seguimiento regular de la evolución',
      'Psicoeducación sobre el trastorno y el tratamiento',
      'Coordinación con otros profesionales sanitarios',
      'Atención integrada con psicoterapia cuando sea necesario'
    ],
    profesionales: [
      { nombre: 'Dra. María García', especialidad: 'Psiquiatra' },
      { nombre: 'Dr. Carlos Rodríguez', especialidad: 'Psiquiatra' }
    ],
    preguntas: [
      {
        pregunta: '¿Cuándo debo acudir al psiquiatra?',
        respuesta: 'Es recomendable consultar cuando experimentas síntomas que afectan significativamente tu funcionamiento diario, como cambios de humor persistentes, ansiedad intensa, pensamientos perturbadores, problemas de sueño graves o cuando otras intervenciones no han sido suficientes.'
      },
      {
        pregunta: '¿La medicación psiquiátrica crea adicción?',
        respuesta: 'La mayoría de los fármacos utilizados en psiquiatría no generan adicción cuando se utilizan correctamente y bajo supervisión médica. Siempre se valoran cuidadosamente los beneficios y posibles efectos secundarios.'
      },
      {
        pregunta: '¿Puedo combinar psicoterapia con medicación?',
        respuesta: 'Sí, de hecho, en muchos casos la combinación de ambos abordajes resulta más efectiva que cualquiera de ellos por separado. En nuestra clínica fomentamos este enfoque integrado.'
      }
    ]
  },

};


// Available specialties
const allSpecialties = [
  { id: 'psiquiatria', name: 'PSIQUIATRÍA' },
  { id: 'psicologia-clinica', name: 'PSICOLOGÍA CLÍNICA' },
  { id: 'infancia-adolescencia', name: 'INFANCIA Y ADOLESCENCIA' },
  { id: 'terapia-emdr', name: 'TERAPIA EMDR' },
  { id: 'mindfulness', name: 'MINDFULNESS' },
  { id: 'perinatal', name: 'PERINATAL' }
];

// Get color for each specialty
allSpecialties.forEach(specialty => {
  const mappedId = specialty.id === 'terapia-emdr' ? 'emdr' : specialty.id;
  specialty.color = getComputedStyle(document.documentElement).getPropertyValue(`--specialty-${mappedId}`);
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

  if (servicios[servicioId.value]) {
    return servicios[servicioId.value];
  }


  return {
    titulo: 'Servicio de ' + servicioId.value.charAt(0).toUpperCase() + servicioId.value.slice(1),
    descripcionCorta: 'Información detallada sobre nuestro servicio especializado.',
    subtitulo: '¿Qué ofrecemos en este servicio?',
    contenido: [
      'Este es un contenido de ejemplo para mostrar cómo se visualizaría la información detallada del servicio seleccionado.',
      'Aquí se describe en profundidad en qué consiste el servicio, sus beneficios y nuestro enfoque particular.',
      'También se incluye información sobre la metodología utilizada y los resultados que se pueden esperar.',
      'Cada servicio está adaptado a las necesidades individuales de cada persona, con un enfoque personalizado y basado en la evidencia científica.'
    ],
    caracteristicas: [
      'Evaluación inicial completa',
      'Plan de tratamiento personalizado',
      'Seguimiento regular',
      'Enfoque basado en la evidencia científica',
      'Atención individualizada',
      'Coordinación con otros profesionales'
    ],
    profesionales: [
      { nombre: 'Dr. José Martínez', especialidad: 'Especialista' },
      { nombre: 'Dra. Ana López', especialidad: 'Especialista' }
    ],
    preguntas: [
      {
        pregunta: '¿Cuánto dura el tratamiento?',
        respuesta: 'La duración del tratamiento varía según las necesidades individuales de cada persona y la naturaleza de las dificultades.'
      },
      {
        pregunta: '¿Es necesaria cita previa?',
        respuesta: 'Sí, es necesario concertar una cita previa para poder atenderle adecuadamente.'
      },
      {
        pregunta: '¿Cómo puedo saber si este servicio es adecuado para mí?',
        respuesta: 'En la primera consulta realizamos una valoración para determinar si este servicio es el más adecuado para su situación.'
      }
    ]
  };
});
</script>

<style scoped>
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
