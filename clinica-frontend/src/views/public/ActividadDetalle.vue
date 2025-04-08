<template>
  <div class="overflow-hidden">
    <!-- Cabecera de la página -->
    <section class="relative py-12 md:py-16 bg-gradient-to-br from-purple-50 to-white overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full opacity-5 transform translate-x-24 -translate-y-24"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full opacity-5 transform -translate-x-20 translate-y-20"></div>

      <div class="container mx-auto px-4 relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold text-center text-purple-800 mb-6">{{ actividadActual.titulo }}</h1>
        <p class="text-center text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          {{ actividadActual.descripcionCorta }}
        </p>
      </div>
    </section>

    <!-- Contenido detallado de la actividad -->
    <section class="py-16 bg-white relative overflow-hidden">
      <div class="absolute -right-32 top-1/3 w-96 h-96 rounded-full bg-purple-50 opacity-30"></div>
      <div class="absolute -left-20 bottom-1/3 w-64 h-64 rounded-full bg-purple-50 opacity-30"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-col md:flex-row gap-8">
            <!-- Columna principal con contenido -->
            <div class="md:w-2/3">
              <div class="bg-white rounded-xl shadow-soft p-8 mb-8">
                <h2 class="text-2xl font-bold text-purple-700 mb-6">{{ actividadActual.subtitulo }}</h2>

                <div class="prose prose-lg max-w-none text-gray-700">
                  <p v-for="(parrafo, index) in actividadActual.contenido" :key="index" class="mb-4">
                    {{ parrafo }}
                  </p>
                </div>
              </div>

              <!-- Objetivos de la actividad -->
              <div class="bg-white rounded-xl shadow-soft p-8">
                <h2 class="text-2xl font-bold text-purple-700 mb-6">Objetivos</h2>

                <ul class="space-y-4">
                  <li v-for="(objetivo, index) in actividadActual.objetivos" :key="index" class="flex items-start">
                    <div class="flex-shrink-0 h-6 w-6 text-purple-500 mr-2">
                      <i class="fas fa-bullseye"></i>
                    </div>
                    <span class="text-gray-700">{{ objetivo }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Columna lateral con información adicional -->
            <div class="md:w-1/3">
              <!-- Detalles prácticos -->
              <div class="bg-white rounded-xl shadow-soft p-6 mb-6">
                <h3 class="text-xl font-bold text-purple-700 mb-4">Detalles prácticos</h3>
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <div class="flex-shrink-0 h-5 w-5 text-purple-500 mr-2">
                      <i class="fas fa-calendar-alt"></i>
                    </div>
                    <div>
                      <p class="font-medium text-gray-800">Fechas</p>
                      <p class="text-sm text-gray-500">{{ actividadActual.fechas }}</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 h-5 w-5 text-purple-500 mr-2">
                      <i class="fas fa-clock"></i>
                    </div>
                    <div>
                      <p class="font-medium text-gray-800">Horario</p>
                      <p class="text-sm text-gray-500">{{ actividadActual.horario }}</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 h-5 w-5 text-purple-500 mr-2">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <p class="font-medium text-gray-800">Ubicación</p>
                      <p class="text-sm text-gray-500">{{ actividadActual.ubicacion }}</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 h-5 w-5 text-purple-500 mr-2">
                      <i class="fas fa-users"></i>
                    </div>
                    <div>
                      <p class="font-medium text-gray-800">Plazas</p>
                      <p class="text-sm text-gray-500">{{ actividadActual.plazas }}</p>
                    </div>
                  </li>
                  <li v-if="actividadActual.precio" class="flex items-start">
                    <div class="flex-shrink-0 h-5 w-5 text-purple-500 mr-2">
                      <i class="fas fa-tag"></i>
                    </div>
                    <div>
                      <p class="font-medium text-gray-800">Precio</p>
                      <p class="text-sm text-gray-500">{{ actividadActual.precio }}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <!-- Facilitadores -->
              <div class="bg-white rounded-xl shadow-soft p-6 mb-6">
                <h3 class="text-xl font-bold text-purple-700 mb-4">Facilitadores</h3>
                <ul class="space-y-3">
                  <li v-for="facilitador in actividadActual.facilitadores" :key="facilitador.nombre" class="flex items-center">
                    <div class="flex-shrink-0 h-5 w-5 text-purple-500 mr-2">
                      <i class="fas fa-user"></i>
                    </div>
                    <div>
                      <p class="font-medium text-gray-800">{{ facilitador.nombre }}</p>
                      <p class="text-sm text-gray-500">{{ facilitador.rol }}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <!-- Destinatarios -->
              <div class="bg-white rounded-xl shadow-soft p-6">
                <h3 class="text-xl font-bold text-purple-700 mb-4">¿A quién va dirigido?</h3>
                <p class="text-gray-700 mb-4">{{ actividadActual.destinatarios }}</p>

                <div class="space-y-3 mt-6">
                  <h4 class="font-medium text-purple-600">¿Quieres participar?</h4>
                  <p class="text-gray-600 text-sm mb-4">Reserva tu plaza o solicita más información</p>
                  <router-link to="/contacto" class="inline-block w-full py-2 bg-purple-600 text-white font-medium rounded-lg text-center hover:bg-purple-700 transition-colors duration-300">
                    Contactar ahora
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonios o imágenes de actividades anteriores -->
    <section v-if="actividadActual.testimonios && actividadActual.testimonios.length > 0" class="py-16 bg-gradient-to-br from-purple-50 to-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-purple-800 mb-12">Testimonios</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(testimonio, index) in actividadActual.testimonios" :key="index" class="bg-white p-6 rounded-xl shadow-soft">
            <div class="flex items-center mb-4">
              <div class="text-yellow-400 flex">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <p class="text-gray-700 italic mb-4">"{{ testimonio.comentario }}"</p>
            <div class="text-gray-500 text-sm">{{ testimonio.autor }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// Nombre del componente
defineOptions({
  name: 'ActividadDetalleView'
});

const route = useRoute();
const actividadId = route.params.id;

// Datos de actividades mock
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
    ubicacion: 'Centro ASATI (Sala de grupos)',
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
  // Más actividades podrían añadirse aquí...
};

// Actividad actual basada en el ID de la ruta
const actividadActual = computed(() => {
  // Si la actividad existe, la devolvemos
  if (actividades[actividadId]) {
    return actividades[actividadId];
  }

  // Si no, devolvemos una actividad genérica
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
    ubicacion: 'Centro ASATI',
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
/* Colores basados en el logo ASATI con tonos púrpura */
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
.bg-purple-500 {
  background-color: #8A64A3;
}
.bg-purple-600 {
  background-color: #7857A0;
}
.bg-purple-700 {
  background-color: #654A94;
}
.hover\:bg-purple-700:hover {
  background-color: #654A94;
}
.from-purple-50 {
  --tw-gradient-from: #F5F0FA;
}
.shadow-soft {
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
}
</style>
