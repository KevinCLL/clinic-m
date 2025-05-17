<template>
  <div class="-mt-4">
    <h3 class="text-2xl font-bold mb-6" :class="titleColorClass">{{ areaTitle }}</h3>
    <ul class="space-y-3" :class="{ 'columns-1 md:columns-2 lg:columns-3 gap-8': multicolumn }">
      <li v-for="(item, index) in areaItems" :key="index" class="flex items-start">
        <div class="flex-shrink-0 h-5 w-5 mr-2 mt-1" :class="iconColorClass">
          <i class="fas fa-check-circle"></i>
        </div>
        <span class="text-gray-700 text-left">{{ item }}</span>
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
    default: 'teal',
    validator: (value) => ['teal', 'purple'].includes(value)
  },
  multicolumn: {
    type: Boolean,
    default: false
  }
});


const areaTitles = {
  'infanto-juvenil': 'ÁREA INFANTO-JUVENIL',
  'perinatal': 'ÁREA DE PERINATAL',
  'adultos': 'ÁREA PARA ADULTOS'
};


const areaItemsMap = {
  'infanto-juvenil': [
    'Problemas del neurodesarrollo (TDAH, TEA)',
    'Dificultades de aprendizaje',
    'Dificultades en la regulación emocional y conductual',
    'Problemas de adaptación escolar o familiar',
    'Ansiedad infantil y adolescente',
    'Depresión en niños y adolescentes',
    'Autoestima y habilidades sociales',
    'Acoso escolar (bullying)',
    'Adicción a nuevas tecnologías',
    'Orientación a familias'
  ],
  'perinatal': [
    'Psicología prenatal y perinatal',
    'Duelo perinatal y gestacional',
    'Depresión postparto',
    'Ansiedad durante el embarazo',
    'Adaptación a la maternidad/paternidad',
    'Problemas de fertilidad',
    'Reproducción asistida',
    'Apoyo en decisiones reproductivas',
    'Crisis familiares relacionadas con la llegada de un hijo',
    'Asesoramiento en crianza temprana'
  ],
  'adultos': [
    'Trastornos del estado de ánimo (depresión, trastorno bipolar)',
    'Trastornos de ansiedad (ansiedad generalizada, fobias, ataques de pánico)',
    'Trastorno obsesivo-compulsivo',
    'Estrés postraumático',
    'Problemas relacionados con el estrés',
    'Problemas de autoestima',
    'Dificultades en las relaciones interpersonales',
    'Problemas de pareja',
    'Duelo y pérdidas',
    'Problemas relacionados con el trabajo',
    'Trastornos adaptativos',
    'Trastornos de personalidad',
    'Adicciones',
    'Problemas del sueño',
    'Cambios vitales y crisis existenciales'
  ]
};


const areaTitle = computed(() => areaTitles[props.areaType] || '');
const areaItems = computed(() => areaItemsMap[props.areaType] || []);

const titleColorClass = computed(() => {
  return props.colorTheme === 'teal' ? 'text-teal-700' : 'text-purple-700';
});

const iconColorClass = computed(() => {
  return props.colorTheme === 'teal' ? 'text-teal-500' : 'text-purple-500';
});
</script>

<style scoped>
/* Colores personalizados */
.text-teal-500 {
  color: #00ADA0;
}
.text-teal-700 {
  color: #00877C;
}
.text-purple-500 {
  color: #8A64A3;
}
.text-purple-700 {
  color: #654A94;
}
</style>
