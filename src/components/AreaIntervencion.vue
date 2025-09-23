<template>
  <div class="-mt-4">
    <h3 class="text-2xl font-bold mb-6" :class="titleColorClass">{{ areaTitle }}</h3>
    <ul class="space-y-3" :class="{ 'columns-1 md:columns-2 lg:columns-3 gap-8': multicolumn }">
      <li v-for="(item, index) in areaItems" :key="index" class="flex items-start break-inside-avoid">
        <div class="flex-shrink-0 h-5 w-5 mr-2 mt-1" :class="iconColorClass">
          <i class="fas fa-check-circle"></i>
        </div>
        <div class="text-gray-700 text-left" v-html="formatItem(item)"></div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  areaType: {
    type: String,
    required: true,
    validator: (value) => ['infanto-juvenil', 'perinatal', 'adultos'].includes(value)
  },
  colorTheme: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'teal', 'purple'].includes(value)
  },
  multicolumn: {
    type: Boolean,
    default: false
  }
});


const areaTitles = {
  'infanto-juvenil': 'ÁREA INFANTOJUVENIL',
  'perinatal': 'ÁREA PERINATAL',
  'adultos': 'ÁREA PARA ADULTOS'
};


const areaItemsMap = {
  'infanto-juvenil': [
    'Problemas emocionales: Ansiedad (generalizada, de separación, fobias, pánico), Depresión infantil y adolescente, Trastorno obsesivo–compulsivo (TOC), Trastorno de estrés postraumático (TEPT), Trastorno de adaptación a cambios vitales o familiares, Duelo complicado',
    'Trastornos del neurodesarrollo: TDAH, TEA',
    'Problemas de conducta y regulación: trastorno de conducta, trastorno negativista desafiante, problemas de control de impulsos, conductas de riesgo en la adolescencia (consumo, conductas sexuales de riesgo…)',
    'Problemas vinculares y relacionales: dificultades en el apego, problemas en la relación padres–hijos, acoso escolar, problemas de socialización, aislamiento o rechazo entre iguales',
    'Problemas relacionados con la imagen corporal y la autoestima o trastornos alimentarios: anorexia, bulimia, atracón, evitación/restricción',
    'Trastornos del sueño',
    'Somatizaciones: dolores de cabeza, estómago, etc. sin causa médica clara',
    'Problemas emergentes en la adolescencia: Conductas autolesivas no suicidas, Ideación y riesgo suicidas, Trastornos de personalidad incipientes, Trastornos psicóticos de inicio temprano'
  ],
  'perinatal': [
    'Baby blues: tristeza, irritabilidad y cambios emocionales leves y transitorios tras el parto',
    'Depresión perinatal: tanto en el embarazo como en el posparto',
    'Ansiedad perinatal: preocupaciones excesivas, insomnio, ataques de pánico…',
    'Otros trastornos mentales iniciados o exacerbados en periodo perinatal: TOC, Trastorno bipolar, trastornos psicóticos…',
    'Trauma perinatal: vivencias difíciles o traumáticas durante el embarazo, el parto o postparto',
    'Duelo perinatal: procesos de pérdida gestacional o neonatal, duelos acontecidos en el periodo perinatal, duelo por enfermedad...',
    'Problemas en el vínculo madre–bebé: sensación de desconexión, rechazo o dificultad en la relación temprana',
    'Adaptación a la maternidad/paternidad: sobrecarga emocional, culpa o dificultad en el ajuste a los nuevos roles',
    'Preparación emocional para el parto: acompañamiento para afrontar miedos, expectativas y deseos en torno al nacimiento',
    'Acompañamiento durante el embarazo: apoyo en los cambios emocionales, relacionales y vitales propios de esta etapa',
    'Apoyo en decisiones relacionadas con la fertilidad y la reproducción asistida: acompañamiento en los procesos médicos, emocionales y de incertidumbre'
  ],
  'adultos': [
    'Síntomas ansioso-depresivos y trastornos adaptativos: reacciones emocionales a situaciones estresantes o cambios vitales significativos',
    'Trastornos relacionados con la ansiedad: trastorno de pánico, trastorno de ansiedad generalizada, agorafobia, fobias específicas',
    'Trastornos del estado de ánimo: depresión mayor, distimia, trastorno bipolar, ciclotimia',
    'Estrés y acoso laboral',
    'Trastornos relacionados con el trauma: trastorno de estrés agudo, trastorno de estrés postraumático, trauma complejo',
    'Problemas relacionales y de pareja',
    'Trastornos del espectro obsesivo compulsivo: trastorno obsesivo-compulsivo (TOC), tricotilomanía, hipocondría, trastorno dismórfico corporal',
    'Acompañamiento durante el duelo',
    'Trastornos alimentarios y problemas relacionados: anorexia, bulimia, trastorno por atracón, trastorno evitativo/restrictivo',
    'Trastornos del sueño',
    'Conductas adictivas: dependencia de sustancias o comportamientos que interfieren en la vida diaria',
    'Trastornos de personalidad: patrones persistentes de pensamiento, emoción y comportamiento que causan malestar significativo',
    'Trastornos del espectro psicótico: esquizofrenia, trastorno esquizoafectivo, trastorno delirante',
    'Trastornos disociativos: alteraciones en la conciencia, identidad, memoria y percepción del entorno',
    'Trastornos somáticos',
    'Crisis y transiciones vitales'
  ]
};


const areaTitle = computed(() => areaTitles[props.areaType] || '');
const areaItems = computed(() => areaItemsMap[props.areaType] || []);

const titleColorClass = computed(() => {
  if (props.colorTheme === 'primary' || props.colorTheme === 'teal') {
    return 'text-primary-700';
  }
  return 'text-secondary-700';
});

const iconColorClass = computed(() => {
  if (props.colorTheme === 'primary' || props.colorTheme === 'teal') {
    return 'text-primary-500';
  }
  return 'text-secondary-500';
});

const formatItem = (item) => {
  const colonIndex = item.indexOf(':');
  if (colonIndex > -1) {
    const title = item.substring(0, colonIndex);
    const description = item.substring(colonIndex + 1);
    return `<strong>${title}:</strong>${description}`;
  }
  return `<strong>${item}</strong>`;
};
</script>

<style scoped>
.text-primary-500 {
  color: var(--primary-500);
}
.text-primary-700 {
  color: var(--primary-700);
}
.text-secondary-500 {
  color: var(--secondary-500);
}
.text-secondary-700 {
  color: var(--secondary-700);
}
</style>
