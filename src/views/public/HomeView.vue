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

    <!-- Sección "Sobre nuestro nombre" -->
    <section class="py-12 md:py-16 bg-gradient-to-br from-primary-50 via-white to-primary-50 relative overflow-hidden">
      <img src="@/assets/images/ramas_fondo_izquierda_2.png" alt="" class="absolute left-0 top-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-sway" />
      <img src="@/assets/images/ramas_fondo_derecha.png" alt="" class="absolute right-0 bottom-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-sway-delayed" />

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-7xl mx-auto">
          <div class="bg-white rounded-xl shadow-soft overflow-hidden p-6">
            <h3 class="text-xl md:text-2xl font-bold text-center text-primary-600 uppercase mb-6" style="font-family: 'Montserrat', sans-serif;">SOBRE NUESTRO NOMBRE</h3>
            <p class="text-gray-700 text-justify mb-4 text-base md:text-lg">
              Elegimos el nombre CODA inspirándonos en el lenguaje musical. En una partitura, la coda es la sección final de una obra: un pasaje que no se limita a concluir, sino que <strong>aporta un cierre con sentido</strong>, reuniendo y transformando los motivos principales de la composición.
            </p>
            <p class="text-gray-700 text-justify mb-4 text-base md:text-lg">
              Trasladado al ámbito de la salud mental, <strong>la CODA simboliza la posibilidad de dar forma y significado a la propia experiencia</strong>. En un proceso terapéutico, no se trata únicamente de "terminar algo", sino de poder recoger la propia historia y darle un nuevo significado que permita a la persona abrirse a una manera distinta de relacionarse consigo misma, con los demás y con su historia.
            </p>
            <p class="text-gray-700 text-justify text-base md:text-lg">
              Así, la coda simboliza el acompañamiento que ofrecemos, <strong>un espacio donde todo lo que se ha escuchado antes encuentra integración, armonía y dirección</strong>. Al igual que en la música, este cierre no es el fin, sino que permite abrir la puerta a una nueva cadencia vital, más armónica, consciente y plena.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-16 bg-white relative overflow-hidden">
      <div class="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>

      <!-- Plantas para Nuestros Servicios -->
      <img src="@/assets/images/ramas_fondo_izquierda.png" alt="" class="absolute left-0 top-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none" />
      <img src="@/assets/images/ramas_fondo_derecha_2.png" alt="" class="absolute right-0 bottom-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none" />

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="section-title-primary text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">NUESTROS SERVICIOS</h2>
        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg">Descubre nuestro enfoque integral para acompañarte en tu proceso terapéutico</p>

        <div class="flex flex-wrap justify-center gap-8 lg:gap-10">

          <div class="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1 group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm flex flex-col">
            <div class="h-60 overflow-hidden">
              <router-link :to="{ name: 'servicio-detalle', params: { id: 'psicologia-clinica' }}">
                <img src="@/assets/images/psychotherapy.jpg" alt="Psicoterapia" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              </router-link>
            </div>
            <div class="p-6 border-t border-primary-50 flex flex-col flex-grow">
              <router-link :to="{ name: 'servicio-detalle', params: { id: 'psicologia-clinica' }}">
                <h3 class="text-xl md:text-2xl font-semibold text-primary-700 hover:text-primary-600 transition-colors mb-4">Psicoterapia</h3>
              </router-link>
              <p class="text-base md:text-lg text-gray-700 mb-4 flex-grow">Intervención terapéutica adaptada a cada persona, con un enfoque integrador.</p>
              <Button :to="{ name: 'servicio-detalle', params: { id: 'psicologia-clinica' }}" text="Más información" variant="outline-teal" class="transform transition-all duration-300 hover:scale-105 mt-auto" />
            </div>
          </div>


          <div class="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1 group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm flex flex-col">
            <div class="h-60 overflow-hidden">
              <router-link :to="{ name: 'servicio-detalle', params: { id: 'psiquiatria' }}">
                <img src="@/assets/images/psychiatry.jpg" alt="Psiquiatría" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              </router-link>
            </div>
            <div class="p-6 border-t border-primary-50 flex flex-col flex-grow">
              <router-link :to="{ name: 'servicio-detalle', params: { id: 'psiquiatria' }}">
                <h3 class="text-xl md:text-2xl font-semibold text-primary-700 hover:text-primary-600 transition-colors mb-4">Psiquiatría</h3>
              </router-link>
              <p class="text-base md:text-lg text-gray-700 mb-4 flex-grow">Evaluación, diagnóstico y tratamiento farmacológico de trastornos mentales.</p>
              <Button :to="{ name: 'servicio-detalle', params: { id: 'psiquiatria' }}" text="Más información" variant="outline-teal" class="transform transition-all duration-300 hover:scale-105 mt-auto" />
            </div>
          </div>


          <div class="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1 group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm flex flex-col">
            <div class="h-60 overflow-hidden">
              <router-link :to="{ name: 'servicio-detalle', params: { id: 'mindfulness' }}">
                <img src="@/assets/images/mindfulness.jpg" alt="Mindfulness" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              </router-link>
            </div>
            <div class="p-6 border-t border-primary-50 flex flex-col flex-grow">
              <router-link :to="{ name: 'servicio-detalle', params: { id: 'mindfulness' }}">
                <h3 class="text-xl md:text-2xl font-semibold text-primary-700 hover:text-primary-600 transition-colors mb-4">Mindfulness</h3>
              </router-link>
              <p class="text-base md:text-lg text-gray-700 mb-4 flex-grow">Aprende técnicas de atención plena para reducir el estrés, mejorar la concentración y cultivar el bienestar emocional.</p>
              <Button :to="{ name: 'servicio-detalle', params: { id: 'mindfulness' }}" text="Más información" variant="outline-teal" class="transform transition-all duration-300 hover:scale-105 mt-auto" />
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <Button :to="{ name: 'que-ofrecemos' }" text="Ver todos los servicios" variant="teal" class="shadow-primary transform transition-all duration-300 hover:scale-105" />
      </div>
    </section>


    <section class="py-12 md:py-16 bg-gradient-to-br from-primary-50 via-white to-primary-50 relative overflow-hidden">
      <!-- Plantas para Te acompañamos -->
      <img src="@/assets/images/ramas_fondo_derecha.png" alt="" class="absolute right-0 top-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none" />

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="section-title-primary text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">TE ACOMPAÑAMOS EN TODAS LAS ETAPAS DE LA VIDA</h2>
        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg">Nuestro equipo de especialistas te ofrece apoyo profesional adaptado a cada momento vital</p>

        <!-- Versión móvil (hasta sm) -->
        <div class="flex flex-wrap justify-center gap-3 sm:hidden">
          <div v-for="(stage, index) in lifeStages" :key="`mobile-${index}`" class="flex flex-col items-center w-[calc(50%-0.375rem)]">
            <router-link :to="stage.route" class="block group flex flex-col items-center w-full">
              <div class="w-full aspect-square rounded-full overflow-hidden mb-3 relative transition-transform duration-700 group-hover:scale-110">
                <img :src="stage.image" :alt="stage.alt" class="w-full h-full object-cover" style="-webkit-mask-image: radial-gradient(black 65%, transparent 70%); mask-image: radial-gradient(black 65%, transparent 70%);" />
              </div>
              <h3 class="text-base font-semibold text-primary-700 group-hover:text-primary-600 transition-colors text-center">{{ stage.title }}</h3>
            </router-link>
          </div>
        </div>

        <!-- Versión tablet/desktop (sm y superior) -->
        <div class="hidden sm:flex sm:flex-wrap sm:justify-center gap-4 lg:gap-6 max-w-7xl mx-auto">
          <div v-for="(stage, index) in lifeStages" :key="`desktop-${index}`" class="flex flex-col items-center w-[calc(33.333%-0.667rem)] lg:w-[calc(20%-1.2rem)] max-w-[280px]">
            <router-link :to="stage.route" class="block group flex flex-col items-center w-full">
              <div class="w-full aspect-square rounded-full overflow-hidden mb-3 relative transition-transform duration-700 group-hover:scale-110">
                <img :src="stage.image" :alt="stage.alt" class="w-full h-full object-cover" style="-webkit-mask-image: radial-gradient(black 65%, transparent 70%); mask-image: radial-gradient(black 65%, transparent 70%);" />
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
import mainBackgroundImg from '@/assets/images/inicio.jpg';


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

const handleHomeFormSubmit = () => {




  alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
};
</script>

<style scoped>

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





.section-subtitle {
  margin-bottom: var(--spacing-3xl);
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

.animate-gentle-breeze {
  animation: gentle-sway 8s ease-in-out infinite;
}

.animate-gentle-breeze-reverse {
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

.animate-gentle-breeze {
  animation: pulse-gentle 6s ease-in-out infinite;
}

.animate-gentle-breeze-reverse {
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
