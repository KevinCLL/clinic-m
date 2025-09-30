<template>
  <div class="overflow-hidden">

    <SectionHeader title="Qué Ofrecemos" :backgroundImage="mainBackgroundImg">
      <p class="text-justify">
        Independientemente de la especialidad de la que partimos (medicina, psicología…) y de si intervenimos a nivel farmacológico, psicoterapéutico o ambas, siempre hacemos un <strong>acompañamiento terapéutico</strong> y adaptamos el proceso a las <strong>necesidades individuales</strong> de cada persona. Intentamos acompañar siempre desde la <strong>horizontalidad</strong>, teniendo en cuenta nuestro criterio profesional y nuestra experiencia, pero <strong>respetando los tiempos, las inquietudes y las preferencias</strong> de la persona.
      </p>
    </SectionHeader>


    <section class="py-12 md:py-16 bg-white relative overflow-hidden">
      <img src="@/assets/images/ramas_fondo_izquierda.png" alt="" class="absolute left-0 top-20 w-56 md:w-72 lg:w-96 h-auto opacity-10 pointer-events-none animate-gentle-breeze" />
      <img src="@/assets/images/ramas_fondo_derecha.png" alt="" class="absolute right-0 bottom-20 w-56 md:w-72 lg:w-96 h-auto opacity-10 pointer-events-none animate-gentle-breeze-reverse" />

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="section-title-primary text-2xl md:text-3xl font-bold text-center mb-12">NUESTROS SERVICIOS</h2>

        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="card in serviceCards"
              :key="card.title"
              class="service-card bg-white rounded-xl shadow-soft p-6 hover:shadow-primary-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 min-w-[50px] bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4">
                  <i :class="`fas ${card.icon} text-icon`"></i>
                </div>
                <h3 class="text-xl font-semibold text-primary-700">{{ card.title }}</h3>
              </div>
              <p class="text-gray-600">{{ card.description }}</p>
            </div>


            <div class="service-card bg-white rounded-xl shadow-soft p-6 hover:shadow-secondary-lg transition-all duration-300 transform hover:-translate-y-1 md:col-span-3">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 min-w-[50px] bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-heart text-icon"></i>
                </div>
                <h3 class="text-xl font-semibold text-secondary-700">Actividades de promoción de la salud mental</h3>
              </div>
              <p class="text-gray-600 mb-4">
                Complementamos nuestros servicios terapéuticos con actividades que promueven el bienestar integral.
              </p>
              <router-link to="/actividades" class="btn-secondary inline-block">
                Descubrir actividades <i class="fas fa-arrow-right ml-2"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="py-12 md:py-16 bg-white relative overflow-hidden">
      <img src="@/assets/images/ramas_fondo_izquierda_2.png" alt="" class="absolute left-0 top-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-sway" />
      <img src="@/assets/images/ramas_fondo_derecha_2.png" alt="" class="absolute right-0 bottom-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-sway-reverse" />

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="section-title-primary text-2xl md:text-3xl font-bold text-center mb-12">NUESTRAS ESPECIALIDADES</h2>

        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="service in services"
              :key="service.id"
              :class="`specialty-card bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-specialty-${service.id} hover:-translate-y-1 group flex flex-col h-full`"
            >
              <router-link
                :to="`/servicios/${service.id}`"
                class="specialty-card-title text-white py-2 px-4 rounded-lg mb-6 cursor-pointer transition-opacity hover:opacity-90"
                :data-specialty="service.id"
              >
                <h3 class="text-xl font-bold text-center">{{ specialties.find(s => s.id === service.id)?.name || service.title.toUpperCase() }}</h3>
              </router-link>
              <div class="p-6 flex-grow flex flex-col">
                <p class="text-gray-600 mb-4 flex-grow">{{ service.description }}</p>
                <router-link
                  :to="`/servicios/${service.id}`"
                  class="specialty-link font-medium inline-flex items-center transition-colors mt-auto"
                  :data-specialty="service.id"
                >
                  Saber más <i class="fas fa-chevron-right ml-1 text-sm"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="py-12 md:py-16 bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
      <div class="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
      <img src="@/assets/images/ramas_fondo_izquierda.png" alt="" class="absolute left-0 top-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-soft-wind" />
      <img src="@/assets/images/ramas_fondo_derecha.png" alt="" class="absolute right-0 bottom-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-soft-wind-reverse" />

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="section-title-primary text-2xl md:text-3xl font-bold text-center mb-12">ÁREAS DE INTERVENCIÓN</h2>

        <div class="max-w-6xl mx-auto">
          <div class="flex flex-col md:flex-row gap-10">

            <div class="md:w-1/3 bg-white p-6 rounded-xl shadow-soft transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1">
              <div class="bg-primary-600 text-white py-2 px-4 rounded-lg mb-6">
                <h3 class="text-xl font-bold text-center">ÁREA PARA ADULTOS</h3>
              </div>
              <ul class="space-y-2 text-gray-700 list-disc pl-5">
                <li><strong>Síntomas ansioso-depresivos y trastornos adaptativos:</strong> reacciones emocionales a situaciones estresantes o cambios vitales significativos</li>
                <li><strong>Trastornos relacionados con la ansiedad:</strong> trastorno de pánico, trastorno de ansiedad generalizada, agorafobia, fobias específicas</li>
                <li><strong>Trastornos del estado de ánimo:</strong> depresión mayor, distimia, trastorno bipolar, ciclotimia</li>
                <li><strong>Estrés y acoso laboral</strong></li>
                <li><strong>Trastornos relacionados con el trauma:</strong> trastorno de estrés agudo, trastorno de estrés postraumático, trauma complejo</li>
                <li><strong>Problemas relacionales y de pareja</strong></li>
                <li><strong>Trastornos del espectro obsesivo compulsivo:</strong> trastorno obsesivo-compulsivo (TOC), tricotilomanía, hipocondría, trastorno dismórfico corporal</li>
                <li><strong>Acompañamiento durante el duelo</strong></li>
                <li><strong>Trastornos alimentarios y problemas relacionados:</strong> anorexia, bulimia, trastorno por atracón, trastorno evitativo/restrictivo</li>
                <li><strong>Trastornos del sueño</strong></li>
                <li><strong>Conductas adictivas:</strong> dependencia de sustancias o comportamientos que interfieren en la vida diaria</li>
                <li><strong>Trastornos de personalidad:</strong> patrones persistentes de pensamiento, emoción y comportamiento que causan malestar significativo</li>
                <li><strong>Trastornos del espectro psicótico:</strong> esquizofrenia, trastorno esquizoafectivo, trastorno delirante</li>
                <li><strong>Trastornos disociativos:</strong> alteraciones en la conciencia, identidad, memoria y percepción del entorno</li>
                <li><strong>Trastornos somáticos</strong></li>
                <li><strong>Crisis y transiciones vitales</strong></li>
              </ul>
            </div>


            <div class="md:w-1/3 bg-white p-6 rounded-xl shadow-soft transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1">
              <div class="bg-primary-600 text-white py-2 px-4 rounded-lg mb-6">
                <h3 class="text-xl font-bold text-center">ÁREA INFANTOJUVENIL</h3>
              </div>
              <ul class="space-y-3 text-gray-700 list-disc pl-5">
                <li><strong>Problemas emocionales:</strong>
                  <ul class="list-disc pl-6 mt-1 space-y-1">
                    <li>Ansiedad (generalizada, de separación, fobias, pánico)</li>
                    <li>Depresión infantil y adolescente</li>
                    <li>Trastorno obsesivo–compulsivo (TOC)</li>
                    <li>Trastorno de estrés postraumático (TEPT)</li>
                    <li>Trastorno de adaptación a cambios vitales o familiares</li>
                    <li>Duelo complicado</li>
                  </ul>
                </li>
                <li><strong>Trastornos del neurodesarrollo:</strong> TDAH, TEA</li>
                <li><strong>Problemas de conducta y regulación:</strong> trastorno de conducta, trastorno negativista desafiante, problemas de control de impulsos, conductas de riesgo en la adolescencia (consumo, conductas sexuales de riesgo…)</li>
                <li><strong>Problemas vinculares y relacionales:</strong> dificultades en el apego, problemas en la relación padres–hijos, acoso escolar, problemas de socialización, aislamiento o rechazo entre iguales</li>
                <li><strong>Problemas relacionados con la imagen corporal y la autoestima o trastornos alimentarios:</strong> anorexia, bulimia, atracón, evitación/restricción</li>
                <li><strong>Trastornos del sueño</strong></li>
                <li><strong>Somatizaciones:</strong> dolores de cabeza, estómago, etc. sin causa médica clara</li>
                <li><strong>Problemas emergentes en la adolescencia:</strong>
                  <ul class="list-disc pl-6 mt-1 space-y-1">
                    <li>Conductas autolesivas no suicidas</li>
                    <li>Ideación y riesgo suicidas</li>
                    <li>Trastornos de personalidad incipientes</li>
                    <li>Trastornos psicóticos de inicio temprano</li>
                  </ul>
                </li>
              </ul>
            </div>


            <div class="md:w-1/3 bg-white p-6 rounded-xl shadow-soft transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1">
              <div class="bg-primary-600 text-white py-2 px-4 rounded-lg mb-6">
                <h3 class="text-xl font-bold text-center">ÁREA PERINATAL</h3>
              </div>
              <ul class="space-y-2 text-gray-700 list-disc pl-5">
                <li><strong>Baby blues:</strong> tristeza, irritabilidad y cambios emocionales leves y transitorios tras el parto</li>
                <li><strong>Depresión perinatal:</strong> tanto en el embarazo como en el posparto</li>
                <li><strong>Ansiedad perinatal:</strong> preocupaciones excesivas, insomnio, ataques de pánico…</li>
                <li><strong>Otros trastornos mentales iniciados o exacerbados en periodo perinatal:</strong> TOC, Trastorno bipolar, trastornos psicóticos…</li>
                <li><strong>Trauma perinatal:</strong> vivencias difíciles o traumáticas durante el embarazo, el parto o postparto</li>
                <li><strong>Duelo perinatal:</strong> procesos de pérdida gestacional o neonatal, duelos acontecidos en el periodo perinatal, duelo por enfermedad...</li>
                <li><strong>Problemas en el vínculo madre–bebé:</strong> sensación de desconexión, rechazo o dificultad en la relación temprana</li>
                <li><strong>Adaptación a la maternidad/paternidad:</strong> sobrecarga emocional, culpa o dificultad en el ajuste a los nuevos roles</li>
                <li><strong>Preparación emocional para el parto:</strong> acompañamiento para afrontar miedos, expectativas y deseos en torno al nacimiento</li>
                <li><strong>Acompañamiento durante el embarazo:</strong> apoyo en los cambios emocionales, relacionales y vitales propios de esta etapa</li>
                <li><strong>Apoyo en decisiones relacionadas con la fertilidad y la reproducción asistida:</strong> acompañamiento en los procesos médicos, emocionales y de incertidumbre</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import SectionHeader from '@/components/SectionHeader.vue';
import mainBackgroundImg from '@/assets/images/que_ofrecemos.jpg';
import { services, serviceCards, specialties } from '@/data/services.js';

defineOptions({
  name: 'QueOfrecemosView'
});
</script>

<style scoped>

@import '@/styles/theme.css';






.text-icon {
  font-size: var(--font-size-xl);
}


.specialty-card-title[data-specialty="psiquiatria"] {
  background-color: var(--specialty-psiquiatria);
}
.specialty-card-title[data-specialty="psicologia-clinica"] {
  background-color: var(--specialty-psicologia-clinica);
}
.specialty-card-title[data-specialty="infancia-adolescencia"] {
  background-color: var(--specialty-infancia-adolescencia);
}
.specialty-card-title[data-specialty="terapia-emdr"] {
  background-color: var(--specialty-emdr);
}
.specialty-card-title[data-specialty="mindfulness"] {
  background-color: var(--specialty-mindfulness);
}
.specialty-card-title[data-specialty="perinatal"] {
  background-color: var(--specialty-perinatal);
}

.specialty-link[data-specialty="psiquiatria"] {
  color: var(--specialty-psiquiatria);
}
.specialty-link[data-specialty="psicologia-clinica"] {
  color: var(--specialty-psicologia-clinica);
}
.specialty-link[data-specialty="infancia-adolescencia"] {
  color: var(--specialty-infancia-adolescencia);
}
.specialty-link[data-specialty="terapia-emdr"] {
  color: var(--specialty-emdr);
}
.specialty-link[data-specialty="mindfulness"] {
  color: var(--specialty-mindfulness);
}
.specialty-link[data-specialty="perinatal"] {
  color: var(--specialty-perinatal);
}

.specialty-link:hover {
  opacity: 0.8;
}


.hover\:shadow-specialty-psiquiatria:hover {
  box-shadow: 0 10px 20px -5px rgba(49, 112, 90, 0.4);
}

.hover\:shadow-specialty-psicologia-clinica:hover {
  box-shadow: 0 10px 20px -5px rgba(139, 191, 172, 0.4);
}

.hover\:shadow-specialty-infancia-adolescencia:hover {
  box-shadow: 0 10px 20px -5px rgba(97, 152, 133, 0.4);
}

.hover\:shadow-specialty-terapia-emdr:hover {
  box-shadow: 0 10px 20px -5px rgba(0, 130, 122, 0.4);
}

.hover\:shadow-specialty-mindfulness:hover {
  box-shadow: 0 10px 20px -5px rgba(155, 196, 194, 0.4);
}

.hover\:shadow-specialty-perinatal:hover {
  box-shadow: 0 10px 20px -5px rgba(78, 168, 163, 0.4);
}



.p-spacing-sm {
  padding: var(--spacing-sm);
}

.p-4 {
  padding: var(--spacing-md);
}

.p-6 {
  padding: var(--spacing-lg);
}

.px-4 {
  padding-left: var(--spacing-md);
  padding-right: var(--spacing-md);
}

.py-2 {
  padding-top: var(--spacing-sm);
  padding-bottom: var(--spacing-sm);
}

.pl-5 {
  padding-left: calc(var(--spacing-md) * 1.25);
}

.mb-4 {
  margin-bottom: var(--spacing-md);
}

.mb-6 {
  margin-bottom: var(--spacing-lg);
}

.mb-spacing-2xl {
  margin-bottom: var(--spacing-2xl);
}

.mr-4 {
  margin-right: var(--spacing-md);
}

.ml-2 {
  margin-left: var(--spacing-sm);
}

.space-y-2 > * + * {
  margin-top: var(--spacing-sm);
}


.bg-primary-50 {
  background-color: var(--primary-50);
}

.bg-primary-100 {
  background-color: var(--primary-100);
}

.bg-primary-200 {
  background-color: var(--primary-200);
}

.bg-primary-500 {
  background-color: var(--primary-500);
}

.bg-primary-600 {
  background-color: var(--primary-600);
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

.hover\:text-primary-500:hover {
  color: var(--primary-500);
}

.hover\:bg-primary-500:hover {
  background-color: var(--primary-500);
}

.border-primary-100 {
  border-color: var(--primary-100);
}

.from-primary-50 {
  --tw-gradient-from: var(--primary-50);
}

.from-primary-600 {
  --tw-gradient-from: var(--primary-600);
}

.to-primary-500 {
  --tw-gradient-to: var(--primary-500);
}

.via-primary-200 {
  --tw-gradient-stops: var(--tw-gradient-from), var(--primary-200), var(--tw-gradient-to);
}


.shadow-soft {
  box-shadow: var(--shadow-md);
}

.shadow-primary-lg:hover,
.hover\:shadow-primary-lg:hover {
  box-shadow: 0 10px 20px -5px rgba(0, 173, 160, 0.3);
}


.btn-primary {
  padding: var(--spacing-sm) var(--spacing-lg);
  background-color: var(--primary-600);
  color: white;
  border-radius: var(--border-radius-md);
  transition: background-color var(--transition-normal);
  box-shadow: var(--shadow-md);
  margin-top: var(--spacing-sm);
}

.btn-primary:hover {
  background-color: var(--primary-500);
}

.btn-secondary {
  padding: var(--spacing-sm) var(--spacing-lg);
  background-color: var(--secondary-600);
  color: white;
  border-radius: var(--border-radius-md);
  transition: background-color var(--transition-normal);
  box-shadow: var(--shadow-md);
  margin-top: var(--spacing-sm);
}

.btn-secondary:hover {
  background-color: var(--secondary-500);
}

.bg-secondary-100 {
  background-color: var(--secondary-100);
}

.text-secondary-600 {
  color: var(--secondary-600);
}

.text-secondary-700 {
  color: var(--secondary-700);
}

.shadow-secondary-lg:hover,
.hover\:shadow-secondary-lg:hover {
  box-shadow: 0 10px 20px -5px rgba(244, 114, 182, 0.3);
}


.service-card,
.specialty-card {
  transition: all var(--transition-normal);
}

.specialty-header {
  transition: all var(--transition-normal);
}

@keyframes float-left {
  0%, 100% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(10px) translateY(-5px);
  }
}

@keyframes float-right {
  0%, 100% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(-10px) translateY(-5px);
  }
}

.animate-soft-wind {
  animation: float-left 7s ease-in-out infinite;
}

.animate-soft-wind-reverse {
  animation: float-right 7s ease-in-out infinite;
  animation-delay: 1.5s;
}

@keyframes pulse-gentle {
  0%, 100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.15;
    transform: scale(1.02);
  }
}

.animate-gentle-breeze {
  animation: pulse-gentle 6s ease-in-out infinite;
}

.animate-gentle-breeze-reverse {
  animation: pulse-gentle 6s ease-in-out infinite;
  animation-delay: 3s;
}
</style>
