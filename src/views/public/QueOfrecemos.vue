<template>
  <div class="overflow-hidden">

    <section class="relative py-12 md:py-16 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full opacity-5 transform translate-x-24 -translate-y-24"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-primary-500 rounded-full opacity-5 transform -translate-x-20 translate-y-20"></div>

      <div class="container mx-auto px-4 relative z-10">
        <p class="text-black max-w-3xl mx-auto text-lg leading-relaxed text-justify">
          Independientemente de la especialidad de la que partimos (medicina, psicología…) y de si intervenimos a nivel farmacológico, psicoterapéutico o ambas, siempre hacemos un acompañamiento terapéutico y adaptamos el proceso a las necesidades individuales de cada persona. Intentamos acompañar siempre desde la horizontalidad, teniendo en cuenta nuestro criterio profesional y nuestra experiencia, pero respetando los tiempos, las inquietudes y las preferencias de la persona.
        </p>
      </div>
    </section>


    <section class="py-12 md:py-16 bg-white relative overflow-hidden">
      <div class="absolute -right-32 top-1/3 w-96 h-96 rounded-full bg-primary-50 opacity-30"></div>
      <div class="absolute -left-20 bottom-1/3 w-64 h-64 rounded-full bg-primary-50 opacity-30"></div>

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-primary-800 mb-12">Nuestros Servicios</h2>

        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div class="service-card bg-white rounded-xl shadow-soft p-6 hover:shadow-primary-lg transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 min-w-[50px] bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-hands-helping text-icon"></i>
                </div>
                <h3 class="text-xl font-semibold text-primary-700">Acompañamiento terapéutico</h3>
              </div>
              <p class="text-gray-600">Ofrecemos un acompañamiento personalizado durante todo el proceso, adaptándonos a las necesidades individuales.</p>
            </div>


            <div class="service-card bg-white rounded-xl shadow-soft p-6 hover:shadow-primary-lg transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 min-w-[50px] bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-brain text-icon"></i>
                </div>
                <h3 class="text-xl font-semibold text-primary-700">Psicoterapia</h3>
              </div>
              <p class="text-gray-600">Intervenciones psicológicas basadas en la evidencia, para el tratamiento de diversos trastornos y dificultades.</p>
            </div>


            <div class="service-card bg-white rounded-xl shadow-soft p-6 hover:shadow-primary-lg transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 min-w-[50px] bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-pills text-icon"></i>
                </div>
                <h3 class="text-xl font-semibold text-primary-700">Tratamiento psicofarmacológico</h3>
              </div>
              <p class="text-gray-600">Evaluación y prescripción de medicación cuando sea necesario, con seguimiento personalizado.</p>
            </div>


            <div class="service-card bg-white rounded-xl shadow-soft p-6 hover:shadow-primary-lg transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 min-w-[50px] bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-clipboard-check text-icon"></i>
                </div>
                <h3 class="text-xl font-semibold text-primary-700">Evaluación y diagnóstico</h3>
              </div>
              <p class="text-gray-600">Valoraciones clínicas exhaustivas para detectar dificultades y desarrollar planes de tratamiento adecuados.</p>
            </div>


            <div class="service-card bg-white rounded-xl shadow-soft p-6 hover:shadow-primary-lg transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 min-w-[50px] bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-users text-icon"></i>
                </div>
                <h3 class="text-xl font-semibold text-primary-700">Orientación familiar</h3>
              </div>
              <p class="text-gray-600">Apoyo y asesoramiento para familias que necesitan herramientas para gestionar situaciones difíciles.</p>
            </div>


            <div class="service-card bg-white rounded-xl shadow-soft p-6 hover:shadow-primary-lg transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 min-w-[50px] bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-comment-dots text-icon"></i>
                </div>
                <h3 class="text-xl font-semibold text-primary-700">Terapia grupal</h3>
              </div>
              <p class="text-gray-600">Intervenciones terapéuticas en grupo, facilitando el aprendizaje compartido y el apoyo entre iguales.</p>
            </div>


            <div class="service-card bg-white rounded-xl shadow-soft p-6 hover:shadow-primary-lg transition-all duration-300 transform hover:-translate-y-1 md:col-span-3">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 min-w-[50px] bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-heart text-icon"></i>
                </div>
                <h3 class="text-xl font-semibold text-primary-700">Actividades de promoción de la salud mental</h3>
              </div>
              <p class="text-gray-600 mb-4">
                Complementamos nuestros servicios terapéuticos con actividades que promueven el bienestar integral.
              </p>
              <router-link to="/actividades" class="btn-primary inline-block">
                Descubrir actividades <i class="fas fa-arrow-right ml-2"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="py-12 md:py-16 bg-white relative overflow-hidden">
      <div class="absolute -right-32 top-1/3 w-96 h-96 rounded-full bg-primary-50 opacity-30"></div>
      <div class="absolute -left-20 bottom-1/3 w-64 h-64 rounded-full bg-primary-50 opacity-30"></div>

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-primary-800 mb-12">Nuestras Especialidades</h2>

        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div class="specialty-card bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1 group">
              <div class="bg-primary-600 text-white py-2 px-4 rounded-lg mb-6">
                <h3 class="text-xl font-bold text-center">PSIQUIATRÍA</h3>
              </div>
              <div class="p-6">
                <p class="text-gray-600 mb-4">Evaluación, diagnóstico y tratamiento de trastornos mentales con un enfoque integral.</p>
                <router-link to="/servicios/psiquiatria" class="text-primary-600 hover:text-primary-500 font-medium inline-flex items-center transition-colors">
                  Saber más <i class="fas fa-chevron-right ml-1 text-sm"></i>
                </router-link>
              </div>
            </div>


            <div class="specialty-card bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1 group">
              <div class="bg-primary-600 text-white py-2 px-4 rounded-lg mb-6">
                <h3 class="text-xl font-bold text-center">PSICOLOGÍA CLÍNICA</h3>
              </div>
              <div class="p-6">
                <p class="text-gray-600 mb-4">Abordaje terapéutico de problemas emocionales y dificultades psicológicas.</p>
                <router-link to="/servicios/psicologia-clinica" class="text-primary-600 hover:text-primary-500 font-medium inline-flex items-center transition-colors">
                  Saber más <i class="fas fa-chevron-right ml-1 text-sm"></i>
                </router-link>
              </div>
            </div>


            <div class="specialty-card bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1 group">
              <div class="bg-primary-600 text-white py-2 px-4 rounded-lg mb-6">
                <h3 class="text-xl font-bold text-center">INFANCIA Y ADOLESCENCIA</h3>
              </div>
              <div class="p-6">
                <p class="text-gray-600 mb-4">Atención especializada para niños y adolescentes con diferentes dificultades.</p>
                <router-link to="/servicios/infancia-adolescencia" class="text-primary-600 hover:text-primary-500 font-medium inline-flex items-center transition-colors">
                  Saber más <i class="fas fa-chevron-right ml-1 text-sm"></i>
                </router-link>
              </div>
            </div>


            <div class="specialty-card bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1 group">
              <div class="bg-primary-600 text-white py-2 px-4 rounded-lg mb-6">
                <h3 class="text-xl font-bold text-center">TERAPIA EMDR</h3>
              </div>
              <div class="p-6">
                <p class="text-gray-600 mb-4">Método terapéutico eficaz para el tratamiento del trauma y otras dificultades.</p>
                <router-link to="/servicios/terapia-emdr" class="text-primary-600 hover:text-primary-500 font-medium inline-flex items-center transition-colors">
                  Saber más <i class="fas fa-chevron-right ml-1 text-sm"></i>
                </router-link>
              </div>
            </div>


            <div class="specialty-card bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1 group">
              <div class="bg-primary-600 text-white py-2 px-4 rounded-lg mb-6">
                <h3 class="text-xl font-bold text-center">MINDFULNESS</h3>
              </div>
              <div class="p-6">
                <p class="text-gray-600 mb-4">Prácticas de atención plena para reducir el estrés y mejorar la salud mental.</p>
                <router-link to="/servicios/mindfulness" class="text-primary-600 hover:text-primary-500 font-medium inline-flex items-center transition-colors">
                  Saber más <i class="fas fa-chevron-right ml-1 text-sm"></i>
                </router-link>
              </div>
            </div>


            <div class="specialty-card bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1 group">
              <div class="bg-primary-600 text-white py-2 px-4 rounded-lg mb-6">
                <h3 class="text-xl font-bold text-center">PERINATAL</h3>
              </div>
              <div class="p-6">
                <p class="text-gray-600 mb-4">Acompañamiento especializado durante embarazo, parto y posparto.</p>
                <router-link to="/servicios/perinatal" class="text-primary-600 hover:text-primary-500 font-medium inline-flex items-center transition-colors">
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
      <div class="absolute -right-32 top-1/3 w-96 h-96 rounded-full border border-primary-100 opacity-70"></div>
      <div class="absolute -left-20 bottom-1/4 w-64 h-64 rounded-full border border-primary-100 opacity-70"></div>

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-primary-700 mb-12">Áreas de Intervención</h2>

        <div class="max-w-6xl mx-auto">
          <div class="flex flex-col md:flex-row gap-10">

            <div class="md:w-1/3 bg-white p-6 rounded-xl shadow-soft transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1">
              <div class="bg-primary-600 text-white py-2 px-4 rounded-lg mb-6">
                <h3 class="text-xl font-bold text-center">ÁREA PARA ADULTOS</h3>
              </div>
              <ul class="space-y-2 text-gray-700 list-disc pl-5">
                <li>Síntomas ansioso-depresivos y trastornos adaptativos</li>
                <li>Trastornos relacionados con la ansiedad (T. Pánico, T. Ansiedad generalizada, Agorafobia, fobias…)</li>
                <li>Trastornos del estado de ánimo (Depresión, Distimia, T. bipolar, Ciclotimia…)</li>
                <li>Trastornos del espectro obsesivo compulsivo (TOC, tricotilomanía, hipocondría, t. dismórfico corporal…)</li>
                <li>Trastornos alimentarios y problemas relacionados</li>
                <li>Trastornos de personalidad</li>
                <li>Trastornos del espectro psicótico (Esquizofrenia, T. esquizoafectivo, T. delirante…)</li>
                <li>Trastornos relacionados con el trauma (T. estrés agudo, T. estrés postraumático, Trauma complejo…)</li>
                <li>Trastornos disociativos</li>
                <li>Trastornos somáticos</li>
                <li>Conductas adictivas</li>
                <li>Insomnio y problemas de sueño</li>
                <li>Acompañamiento al duelo, crisis y transiciones vitales, problemas relacionales y de pareja, estrés, acoso laboral…</li>
              </ul>
            </div>


            <div class="md:w-1/3 bg-white p-6 rounded-xl shadow-soft transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1">
              <div class="bg-primary-600 text-white py-2 px-4 rounded-lg mb-6">
                <h3 class="text-xl font-bold text-center">ÁREA INFANTO-JUVENIL</h3>
              </div>
              <ul class="space-y-2 text-gray-700 list-disc pl-5">
                <li>Trastornos del neurodesarrollo (TEA, TDAH)</li>
                <li>Ansiedad y fobias</li>
                <li>Depresión</li>
                <li>Problemas de control de impulsos y alteraciones de conductas</li>
                <li>Desregulación emocional y autolesiones</li>
                <li>Problemas de apego y trauma</li>
                <li>Problemas alimentarios</li>
                <li>Problemas de sueño</li>
                <li>Bullying</li>
              </ul>
            </div>


            <div class="md:w-1/3 bg-white p-6 rounded-xl shadow-soft transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1">
              <div class="bg-primary-600 text-white py-2 px-4 rounded-lg mb-6">
                <h3 class="text-xl font-bold text-center">ÁREA DE PERINATAL</h3>
              </div>
              <ul class="space-y-2 text-gray-700 list-disc pl-5">
                <li>Depresión pre y post parto</li>
                <li>Ansiedad perinatal</li>
                <li>Trauma relacionado con el parto</li>
                <li>Duelo perinatal</li>
                <li>Problemas en el vínculo madre-bebé</li>
                <li>Adaptación a la maternidad/paternidad</li>
                <li>Acompañamiento durante el embarazo</li>
                <li>Preparación emocional para el parto</li>
                <li>Apoyo en decisiones relacionadas con la fertilidad y reproducción asistida</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>


    <InfoComponent
      colorTheme="primary"
      message="Contacta con nosotros para resolver tus dudas o concertar una cita"
    />
  </div>
</template>

<script setup>
import InfoComponent from '@/components/InfoComponent.vue';


defineOptions({
  name: 'QueOfrecemosView'
});
</script>

<style scoped>
/* Import theme variables */
@import '@/styles/theme.css';

/* Typography Classes */




.text-icon {
  font-size: var(--font-size-xl);
}

/* Spacing Classes */

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

/* Color Classes */
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

/* Shadow Classes */
.shadow-soft {
  box-shadow: var(--shadow-md);
}

.shadow-primary-lg:hover,
.hover\:shadow-primary-lg:hover {
  box-shadow: 0 10px 20px -5px rgba(0, 173, 160, 0.3);
}

/* Button Classes */
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

/* Service and Specialty Card Specific Styles */
.service-card,
.specialty-card {
  transition: all var(--transition-normal);
}

.specialty-header {
  transition: all var(--transition-normal);
}
</style>
