<template>
  <div class="overflow-hidden">

    <SectionHeader title="Atención integral a la Salud Mental" :backgroundImage="mainBackgroundImg">
      <p class="text-justify">
        La salud mental es un estado de bienestar que permite a las personas afrontar el estrés cotidiano, desarrollar sus capacidades, aprender, trabajar y participar activamente en la comunidad. Va más allá de la simple ausencia de trastornos mentales, ya que constituye un derecho humano fundamental y un pilar clave para el desarrollo personal, social y económico. Se trata de un proceso complejo, que cada persona vive de forma única, con distintos niveles de dificultad y angustia, y con desenlaces sociales y clínicos diversos.
      </p>

      <p class="text-justify">
        Nuestra forma de entender la salud mental es <strong>integral</strong>, contemplando a la persona en todas sus dimensiones: <strong>biológica, psicológica, social, emocional, espiritual y cultural</strong>.
      </p>

      <p class="text-justify">
        Así pues, nuestro enfoque no está puesto solo en el tratamiento de síntomas, sino en buscar el <strong>bienestar completo y equilibrado</strong> de la persona. El <strong>acompañamiento</strong> es lo que vertebra la atención que damos, incluyendo en el proceso la <strong>prevención</strong>, la <strong>promoción de la salud</strong>, el <strong>tratamiento</strong> y la <strong>rehabilitación</strong>.
      </p>
    </SectionHeader>


    <section class="py-12 md:py-16 bg-white relative overflow-hidden">
      <div class="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
      <div class="absolute -right-32 top-1/3 w-96 h-96 rounded-full border border-primary-100 opacity-70"></div>
      <div class="absolute -left-20 bottom-1/4 w-64 h-64 rounded-full border border-primary-100 opacity-70"></div>

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-2xl md:text-3xl font-bold text-black text-center mb-6">Nuestros Servicios</h2>
        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">Descubre nuestro enfoque integral para acompañarte en tu proceso terapéutico</p>

        <div class="flex flex-wrap justify-center gap-8 lg:gap-10">

          <div class="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1 group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
            <div class="h-60 overflow-hidden">
              <router-link :to="{ name: 'servicio-detalle', params: { id: 'psicoterapia' }}">
                <img src="@/assets/images/psychotherapy.jpg" alt="Psicoterapia" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              </router-link>
            </div>
            <div class="p-6 border-t border-primary-50">
              <router-link :to="{ name: 'servicio-detalle', params: { id: 'psicoterapia' }}">
                <h3 class="text-xl font-semibold text-primary-700 hover:text-primary-600 transition-colors mb-4">Psicoterapia</h3>
              </router-link>
              <p class="text-base text-gray-700 mb-4">Acompañamiento terapéutico personalizado para desarrollar herramientas de afrontamiento.</p>
              <Button :to="{ name: 'servicio-detalle', params: { id: 'psicoterapia' }}" text="Más información" variant="outline-teal" class="transform transition-all duration-300 hover:scale-105" />
            </div>
          </div>


          <div class="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1 group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
            <div class="h-60 overflow-hidden">
              <router-link :to="{ name: 'servicio-detalle', params: { id: 'psiquiatria' }}">
                <img src="@/assets/images/psychiatry.jpg" alt="Psiquiatría" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              </router-link>
            </div>
            <div class="p-6 border-t border-primary-50">
              <router-link :to="{ name: 'servicio-detalle', params: { id: 'psiquiatria' }}">
                <h3 class="text-xl font-semibold text-primary-700 hover:text-primary-600 transition-colors mb-4">Psiquiatría</h3>
              </router-link>
              <p class="text-base text-gray-700 mb-4">Evaluación, diagnóstico y tratamiento farmacológico de trastornos mentales con un enfoque integral y humanista.</p>
              <Button :to="{ name: 'servicio-detalle', params: { id: 'psiquiatria' }}" text="Más información" variant="outline-teal" class="transform transition-all duration-300 hover:scale-105" />
            </div>
          </div>


          <div class="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1 group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
            <div class="h-60 overflow-hidden">
              <router-link :to="{ name: 'servicio-detalle', params: { id: 'mindfulness' }}">
                <img src="@/assets/images/mindfulness.jpg" alt="Mindfulness" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              </router-link>
            </div>
            <div class="p-6 border-t border-primary-50">
              <router-link :to="{ name: 'servicio-detalle', params: { id: 'mindfulness' }}">
                <h3 class="text-xl font-semibold text-primary-700 hover:text-primary-600 transition-colors mb-4">Mindfulness</h3>
              </router-link>
              <p class="text-base text-gray-700 mb-4">Aprende técnicas de atención plena para reducir el estrés, mejorar la concentración y cultivar el bienestar emocional.</p>
              <Button :to="{ name: 'servicio-detalle', params: { id: 'mindfulness' }}" text="Más información" variant="outline-teal" class="transform transition-all duration-300 hover:scale-105" />
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <Button :to="{ name: 'que-ofrecemos' }" text="Ver todos los servicios" variant="teal" class="shadow-primary transform transition-all duration-300 hover:scale-105" />
      </div>
    </section>


    <section class="py-12 md:py-16 bg-gradient-to-br from-primary-50 via-white to-primary-50 relative overflow-hidden">
      <img src="@/assets/images/ramas_fondo_derecha.png" alt="" class="absolute right-0 top-20 w-56 md:w-72 lg:w-96 h-auto opacity-15 pointer-events-none animate-gentle-sway" />
      <img src="@/assets/images/ramas_fondo_izquierda.png" alt="" class="absolute left-0 bottom-20 w-56 md:w-72 lg:w-96 h-auto opacity-15 pointer-events-none animate-gentle-sway-reverse" />

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-2xl md:text-3xl font-bold text-black text-center mb-6">Te acompañamos en todas las etapas de la vida</h2>
        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">Nuestro equipo de especialistas te ofrece apoyo profesional adaptado a cada momento vital</p>

        <!-- Versión móvil (hasta sm) -->
        <div class="flex flex-wrap justify-center gap-4 sm:hidden">
          <div v-for="(stage, index) in lifeStages" :key="`mobile-${index}`" class="flex flex-col items-center w-[calc(50%-0.5rem)]">
            <router-link :to="stage.route" class="block group flex flex-col items-center w-full">
              <div class="w-full aspect-square rounded-full overflow-hidden mb-4 relative transition-transform duration-700 group-hover:scale-110">
                <img :src="stage.image" :alt="stage.alt" class="w-full h-full object-cover" style="-webkit-mask-image: radial-gradient(black 50%, transparent 60%); mask-image: radial-gradient(black 50%, transparent 60%);" />
              </div>
              <h3 class="text-base font-semibold text-primary-700 group-hover:text-primary-600 transition-colors text-center">{{ stage.title }}</h3>
            </router-link>
          </div>
        </div>

        <!-- Versión tablet/desktop (sm y superior) -->
        <div class="hidden sm:flex sm:flex-wrap sm:justify-center gap-6 lg:gap-8 max-w-7xl mx-auto">
          <div v-for="(stage, index) in lifeStages" :key="`desktop-${index}`" class="flex flex-col items-center w-[calc(33.333%-1rem)] lg:w-[calc(20%-1.5rem)] max-w-[240px]">
            <router-link :to="stage.route" class="block group flex flex-col items-center w-full">
              <div class="w-full aspect-square rounded-full overflow-hidden mb-4 relative transition-transform duration-700 group-hover:scale-110">
                <img :src="stage.image" :alt="stage.alt" class="w-full h-full object-cover" style="-webkit-mask-image: radial-gradient(black 50%, transparent 60%); mask-image: radial-gradient(black 50%, transparent 60%);" />
              </div>
              <h3 class="text-lg font-semibold text-primary-700 group-hover:text-primary-600 transition-colors text-center">{{ stage.title }}</h3>
            </router-link>
          </div>
        </div>

        <div class="text-center mt-12">
          <Button :to="{ name: 'que-ofrecemos' }" text="Ver todos los servicios" variant="teal" class="shadow-primary transform transition-all duration-300 hover:scale-105" />
        </div>
      </div>
    </section>

    <ContactSection
      title="Contacto"
      subtitle="Estamos aquí para escucharte y acompañarte en tu proceso"
      @form-submitted="handleHomeFormSubmit"
    />
  </div>
</template>

<script setup>
import Button from '@/components/Button.vue';
import ContactSection from '@/components/ContactSection.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import mainBackgroundImg from '@/assets/images/main_background.jpg';


import imgChild from '@/assets/images/child.jpg';
import imgTeen from '@/assets/images/teen.jpg';
import imgAdult from '@/assets/images/adult.jpg';
import imgPerinatal from '@/assets/images/perinatal.jpg';
import imgThirdAge from '@/assets/images/third_age.jpg';

const lifeStages = [
  {
    title: 'Infancia',
    alt: 'Niños jugando',
    image: imgChild,
    route: { name: 'servicio-detalle', params: { id: 'infancia-adolescencia' }}
  },
  {
    title: 'Adolescencia',
    alt: 'Adolescentes',
    image: imgTeen,
    route: { name: 'servicio-detalle', params: { id: 'infancia-adolescencia' }}
  },
  {
    title: 'Adultos',
    alt: 'Adultos',
    image: imgAdult,
    route: { name: 'servicio-detalle', params: { id: 'psicologia-clinica' }}
  },
  {
    title: 'Perinatal',
    alt: 'Embarazo y maternidad',
    image: imgPerinatal,
    route: { name: 'servicio-detalle', params: { id: 'perinatal' }}
  },
  {
    title: 'Tercera edad',
    alt: 'Adultos mayores',
    image: imgThirdAge,
    route: { name: 'servicio-detalle', params: { id: 'psicologia-clinica' }}
  }
];

const handleHomeFormSubmit = (formData) => {




  alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
};
</script>

<style scoped>
/* Layout and spacing using theme variables */
.section-padding {
  padding: var(--spacing-3xl) 0;
}

@media (max-width: 768px) {
  .section-padding {
    padding: var(--spacing-2xl) 0;
  }
}

.section-padding-hero {
  padding: var(--spacing-3xl) 0;
}

@media (min-width: 768px) {
  .section-padding-hero {
    padding: calc(var(--spacing-3xl) * 1.5) 0;
  }
}

.hero-padding {
  padding: calc(var(--spacing-xl) * 2.5);
}

@media (min-width: 768px) {
  .hero-padding {
    padding: var(--spacing-3xl);
  }
}

.card-padding {
  padding: var(--spacing-xl);
}

.button-spacing {
  margin-top: var(--spacing-3xl);
}

.button-padding {
  padding-left: var(--spacing-lg);
  padding-right: var(--spacing-lg);
}

/* Typography using theme variables */



.section-subtitle {
  margin-bottom: var(--spacing-3xl);
}




/* Primary color utilities */
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
.bg-primary-100 {
  background-color: var(--primary-100);
}
.bg-primary-200 {
  background-color: var(--primary-200);
}
.bg-primary-300 {
  background-color: var(--primary-300);
}
.bg-primary-500 {
  background-color: var(--primary-500);
}
.bg-primary-600 {
  background-color: var(--primary-600);
}
.bg-primary-700 {
  background-color: var(--primary-700);
}
.hover\:bg-primary-700:hover {
  background-color: var(--primary-700);
}
.hover\:text-primary-600:hover {
  color: var(--primary-600);
}
.border-primary-50 {
  border-color: var(--primary-50);
}
.border-primary-100 {
  border-color: var(--primary-100);
}
.focus\:ring-primary-200:focus {
  --tw-ring-color: var(--primary-200);
}
.focus\:border-primary-400:focus {
  border-color: var(--primary-400);
}

/* Shadows using theme variables */
.shadow-soft {
  box-shadow: var(--shadow-lg);
}
.shadow-soft-lg {
  box-shadow: var(--shadow-xl);
}
.shadow-primary {
  box-shadow: 0 4px 14px -2px rgba(0, 121, 113, 0.35);
}
.shadow-primary-sm {
  box-shadow: 0 4px 8px -1px rgba(0, 121, 113, 0.25);
}
.shadow-primary-lg {
  box-shadow: 0 10px 20px -5px rgba(0, 121, 113, 0.3);
}
.hover\:shadow-primary-lg:hover {
  box-shadow: 0 10px 20px -5px rgba(0, 121, 113, 0.3);
}
.hover\:shadow-primary-sm:hover {
  box-shadow: 0 4px 8px -1px rgba(0, 121, 113, 0.25);
}

@keyframes gentle-sway {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(2deg);
  }
}

@keyframes gentle-sway-reverse {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(-2deg);
  }
}

.animate-gentle-sway {
  animation: gentle-sway 8s ease-in-out infinite;
}

.animate-gentle-sway-reverse {
  animation: gentle-sway-reverse 8s ease-in-out infinite;
  animation-delay: 2s;
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

.animate-pulse-gentle {
  animation: pulse-gentle 6s ease-in-out infinite;
}

.animate-pulse-gentle-delayed {
  animation: pulse-gentle 6s ease-in-out infinite;
  animation-delay: 3s;
}


.life-stage-image {
  position: relative;
  box-shadow:
    0 0 0 3px rgba(255, 255, 255, 0.9),
    0 0 0 6px rgba(255, 255, 255, 0.7),
    0 0 0 9px rgba(255, 255, 255, 0.5),
    0 0 0 12px rgba(255, 255, 255, 0.3),
    0 0 0 15px rgba(255, 255, 255, 0.1);
}

.life-stage-image img {
  border-radius: 50%;
  display: block;
}
</style>
