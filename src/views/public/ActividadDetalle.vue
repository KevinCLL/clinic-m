<template>
  <div class="overflow-hidden">

    <section class="relative py-12 md:py-16 bg-gradient-to-br from-secondary-50 to-white overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-secondary-500 rounded-full opacity-5 transform translate-x-24 -translate-y-24"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500 rounded-full opacity-5 transform -translate-x-20 translate-y-20"></div>

      <div class="container mx-auto px-4 relative z-10">
        <h1 class="text-3xl md:text-4xl font-bold text-center text-secondary-800 mb-6">{{ actividadActual.titulo }}</h1>
        <p class="text-center text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          {{ actividadActual.descripcionCorta }}
        </p>
      </div>
    </section>


    <section class="py-16 bg-white relative overflow-hidden">
      <div class="absolute -right-32 top-1/3 w-96 h-96 rounded-full bg-secondary-50 opacity-30"></div>
      <div class="absolute -left-20 bottom-1/3 w-64 h-64 rounded-full bg-secondary-50 opacity-30"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-col md:flex-row gap-8">

            <div class="md:w-2/3">
              <div class="bg-white rounded-xl shadow-soft p-8 mb-8">
                <h2 class="text-2xl md:text-3xl font-bold text-secondary-700 mb-6">{{ actividadActual.subtitulo }}</h2>

                <div class="prose prose-lg max-w-none text-gray-700">
                  <p v-for="(parrafo, index) in actividadActual.contenido" :key="index" class="mb-4 text-justify">
                    {{ parrafo }}
                  </p>
                </div>
              </div>


              <div class="bg-white rounded-xl shadow-soft p-8">
                <h2 class="text-2xl md:text-3xl font-bold text-secondary-700 mb-6">Objetivos</h2>

                <ul class="space-y-4">
                  <li v-for="(objetivo, index) in actividadActual.objetivos" :key="index" class="flex items-start">
                    <div class="flex-shrink-0 h-6 w-6 text-secondary-500 mr-2">
                      <i class="fas fa-bullseye"></i>
                    </div>
                    <span class="text-gray-700">{{ objetivo }}</span>
                  </li>
                </ul>
              </div>
            </div>


            <div class="md:w-1/3">

              <div class="bg-white rounded-xl shadow-soft p-6 mb-6">
                <h3 class="text-xl font-bold text-secondary-700 mb-4">Detalles prácticos</h3>
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <div class="flex-shrink-0 h-5 w-5 text-secondary-500 mr-2">
                      <i class="fas fa-calendar-alt"></i>
                    </div>
                    <div>
                      <p class="font-medium text-black">Fechas</p>
                      <p class="text-sm text-gray-500">{{ actividadActual.fechas }}</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 h-5 w-5 text-secondary-500 mr-2">
                      <i class="fas fa-clock"></i>
                    </div>
                    <div>
                      <p class="font-medium text-black">Horario</p>
                      <p class="text-sm text-gray-500">{{ actividadActual.horario }}</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 h-5 w-5 text-secondary-500 mr-2">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <p class="font-medium text-black">Ubicación</p>
                      <p class="text-sm text-gray-500">{{ actividadActual.ubicacion }}</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 h-5 w-5 text-secondary-500 mr-2">
                      <i class="fas fa-users"></i>
                    </div>
                    <div>
                      <p class="font-medium text-black">Plazas</p>
                      <p class="text-sm text-gray-500">{{ actividadActual.plazas }}</p>
                    </div>
                  </li>
                  <li v-if="actividadActual.precio" class="flex items-start">
                    <div class="flex-shrink-0 h-5 w-5 text-secondary-500 mr-2">
                      <i class="fas fa-tag"></i>
                    </div>
                    <div>
                      <p class="font-medium text-black">Precio</p>
                      <p class="text-sm text-gray-500">{{ actividadActual.precio }}</p>
                    </div>
                  </li>
                </ul>
              </div>


              <div class="bg-white rounded-xl shadow-soft p-6 mb-6">
                <h3 class="text-xl font-bold text-secondary-700 mb-4">Facilitadores</h3>
                <ul class="space-y-3">
                  <li v-for="facilitador in actividadActual.facilitadores" :key="facilitador.nombre" class="flex items-center">
                    <div class="flex-shrink-0 h-5 w-5 text-secondary-500 mr-2">
                      <i class="fas fa-user"></i>
                    </div>
                    <div>
                      <p class="font-medium text-black">{{ facilitador.nombre }}</p>
                      <p class="text-sm text-gray-500">{{ facilitador.rol }}</p>
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


defineOptions({
  name: 'ActividadDetalleView'
});

const route = useRoute();
const actividadId = route.params.id;


const actividades = {
  'mindfulness': {
    titulo: 'Taller de Mindfulness',
    descripcionCorta: 'Aprende técnicas de atención plena y meditación para gestionar el estrés y mejorar tu bienestar emocional.',
    subtitulo: '¿Qué es Mindfulness y qué aprenderás en este taller?',
    contenido: [
      'El Mindfulness o Atención Plena es una práctica que nos enseña a prestar atención al momento presente, con aceptación y sin juzgar. Nos permite tomar conciencia de nuestros pensamientos, emociones y sensaciones corporales, aprendiendo a relacionarnos con ellos de manera más saludable.',
      'En este taller aprenderás diversas prácticas formales e informales de mindfulness que podrás incorporar en tu día a día. Combinaremos explicaciones teóricas sobre los mecanismos y beneficios del mindfulness con ejercicios prácticos de meditación guiada, exploración corporal (body scan), atención a la respiración y movimientos conscientes.',
      'También abordaremos cómo aplicar el mindfulness para gestionar situaciones de estrés, ansiedad o malestar emocional, y desarrollaremos estrategias para cultivar estados mentales positivos como la autocompasión, la gratitud y la amabilidad.',
      'El taller está diseñado tanto para principiantes como para personas que ya tengan alguna experiencia previa con la meditación, adaptándose a las necesidades del grupo.'
    ],
    objetivos: [
      'Aprender técnicas básicas de meditación y atención plena',
      'Reducir los niveles de estrés y ansiedad',
      'Aumentar la capacidad de concentración y claridad mental',
      'Desarrollar mayor autoconciencia emocional',
      'Mejorar la capacidad de autorregulación ante situaciones difíciles',
      'Cultivar una actitud de amabilidad hacia uno mismo y los demás'
    ],
    fechas: 'Del 5 de septiembre al 24 de octubre de 2023',
    horario: 'Martes de 18:00 a 19:30',
    ubicacion: 'Centro CODA (Sala de grupos)',
    plazas: 'Máximo 12 participantes',
    precio: '220€ (posibilidad de pago fraccionado)',
    facilitadores: [
      { nombre: 'Laura Martínez', rol: 'Psicóloga. Instructora de Mindfulness' },
      { nombre: 'David García', rol: 'Psicoterapeuta. Instructor MBSR' }
    ],
    destinatarios: 'Este taller está dirigido a cualquier persona interesada en aprender técnicas de mindfulness, ya sea para mejorar su bienestar general, gestionar situaciones de estrés o ansiedad, o complementar un proceso terapéutico. No se requiere experiencia previa.',
    testimonios: [
      {
        comentario: 'El taller de mindfulness me ha ayudado enormemente a gestionar mi ansiedad y a encontrar momentos de calma en mi ajetreado día a día. Las técnicas aprendidas son sencillas pero muy poderosas.',
        autor: 'María P.'
      },
      {
        comentario: 'Nunca pensé que dedicar unos minutos diarios a la meditación podría tener tanto impacto en mi vida. Ha cambiado completamente mi forma de relacionarme con mis pensamientos y emociones.',
        autor: 'Carlos M.'
      },
      {
        comentario: 'Laura y David son excelentes facilitadores, crean un ambiente muy acogedor y explican las prácticas de forma clara y accesible. Totalmente recomendable.',
        autor: 'Ana G.'
      }
    ]
  },

};


const actividadActual = computed(() => {

  if (actividades[actividadId]) {
    return actividades[actividadId];
  }


  return {
    titulo: actividadId.charAt(0).toUpperCase() + actividadId.slice(1),
    descripcionCorta: 'Información detallada sobre esta actividad para la promoción de la salud mental.',
    subtitulo: '¿En qué consiste esta actividad?',
    contenido: [
      'Esta es una descripción detallada de la actividad, donde se explican sus fundamentos, metodología y beneficios esperados.',
      'Se incluye información sobre el enfoque utilizado y cómo se desarrollarán las diferentes sesiones o componentes de la actividad.',
      'También se describe la experiencia que vivirán los participantes y qué podrán aprender o practicar durante la actividad.',
      'Cada actividad está diseñada con un enfoque terapéutico basado en la evidencia científica, adaptada a las necesidades de los participantes.'
    ],
    objetivos: [
      'Promover el bienestar emocional de los participantes',
      'Desarrollar habilidades específicas para la gestión de emociones',
      'Facilitar un espacio de apoyo y crecimiento personal',
      'Fomentar la conexión social y el sentido de comunidad',
      'Proporcionar herramientas prácticas aplicables a la vida cotidiana'
    ],
    fechas: 'Consultar próximas fechas',
    horario: 'Por determinar',
    ubicacion: 'Centro CODA',
    plazas: 'Grupos reducidos (8-12 personas)',
    precio: 'Consultar',
    facilitadores: [
      { nombre: 'Profesionales especializados', rol: 'Psicólogos, terapeutas y facilitadores certificados' }
    ],
    destinatarios: 'Esta actividad está dirigida a personas interesadas en mejorar su bienestar emocional y desarrollar habilidades específicas relacionadas con la salud mental. No se requieren conocimientos previos.',
    testimonios: []
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
