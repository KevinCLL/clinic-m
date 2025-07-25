<template>
  <div class="overflow-hidden">

    <section class="relative py-16 md:py-24 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="@/assets/images/main_background.jpg" alt="Background" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-black/20"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="hero-content max-w-5xl mx-auto bg-white/40 backdrop-blur-sm rounded-3xl p-10 md:p-12 shadow-2xl">
          <h1 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Atención integral a la Salud Mental</h1>
          
          <div class="space-y-4 text-gray-700 text-base md:text-lg">
            <p class="text-justify">
              La salud mental es un estado de bienestar que permite a las personas afrontar el estrés cotidiano, desarrollar sus capacidades, aprender, trabajar y participar activamente en la comunidad. Va más allá de la simple ausencia de trastornos mentales, ya que constituye un derecho humano fundamental y un pilar clave para el desarrollo personal, social y económico. Se trata de un proceso complejo, que cada persona vive de forma única, con distintos niveles de dificultad y angustia, y con desenlaces sociales y clínicos diversos.
            </p>
            
            <p class="text-justify">
              Nuestra forma de entender la salud mental es <strong>integral</strong>, contemplando a la persona en todas sus dimensiones: <strong>biológica, psicológica, social, emocional, espiritual y cultural</strong>.
            </p>
            
            <p class="text-justify">
              Así pues, nuestro enfoque no está puesto solo en el tratamiento de síntomas, sino en buscar el <strong>bienestar completo y equilibrado</strong> de la persona. El <strong>acompañamiento</strong> es lo que vertebra la atención que damos, incluyendo en el proceso la <strong>prevención</strong>, la <strong>promoción de la salud</strong>, el <strong>tratamiento</strong> y la <strong>rehabilitación</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>


    <section class="py-12 md:py-16 bg-white relative overflow-hidden">
      <div class="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-200 to-transparent"></div>
      <div class="absolute -right-32 top-1/3 w-96 h-96 rounded-full border border-teal-100 opacity-70"></div>
      <div class="absolute -left-20 bottom-1/4 w-64 h-64 rounded-full border border-teal-100 opacity-70"></div>

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-teal-800 text-center mb-4">Nuestros Servicios</h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Descubre nuestro enfoque integral para acompañarte en tu proceso terapéutico</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

          <div class="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-teal-lg hover:-translate-y-1 group">
            <div class="h-60 overflow-hidden">
              <router-link :to="{ name: 'servicio-detalle', params: { id: 'psicoterapia' }}">
                <img src="@/assets/images/psychotherapy.png" alt="Psicoterapia" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              </router-link>
            </div>
            <div class="p-8 border-t border-teal-50">
              <router-link :to="{ name: 'servicio-detalle', params: { id: 'psicoterapia' }}">
                <h3 class="text-xl font-semibold text-teal-700 mb-3 hover:text-teal-600 transition-colors">Psicoterapia</h3>
              </router-link>
              <p class="text-gray-700 mb-5">Acompañamiento terapéutico personalizado para desarrollar herramientas de afrontamiento.</p>
              <Button :to="{ name: 'servicio-detalle', params: { id: 'psicoterapia' }}" text="Más información" variant="outline-teal" class="transform transition-all duration-300 hover:scale-105" />
            </div>
          </div>


          <div class="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-teal-lg hover:-translate-y-1 group">
            <div class="h-60 overflow-hidden">
              <router-link :to="{ name: 'servicio-detalle', params: { id: 'psiquiatria' }}">
                <img src="@/assets/images/psychiatry.png" alt="Psiquiatría" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              </router-link>
            </div>
            <div class="p-8 border-t border-teal-50">
              <router-link :to="{ name: 'servicio-detalle', params: { id: 'psiquiatria' }}">
                <h3 class="text-xl font-semibold text-teal-700 mb-3 hover:text-teal-600 transition-colors">Psiquiatría</h3>
              </router-link>
              <p class="text-gray-700 mb-5">Evaluación, diagnóstico y tratamiento farmacológico de trastornos mentales con un enfoque integral y humanista.</p>
              <Button :to="{ name: 'servicio-detalle', params: { id: 'psiquiatria' }}" text="Más información" variant="outline-teal" class="transform transition-all duration-300 hover:scale-105" />
            </div>
          </div>


          <div class="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-teal-lg hover:-translate-y-1 group">
            <div class="h-60 overflow-hidden">
              <router-link :to="{ name: 'servicio-detalle', params: { id: 'mindfulness' }}">
                <img src="@/assets/images/mindfulness.png" alt="Mindfulness" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              </router-link>
            </div>
            <div class="p-8 border-t border-teal-50">
              <router-link :to="{ name: 'servicio-detalle', params: { id: 'mindfulness' }}">
                <h3 class="text-xl font-semibold text-teal-700 mb-3 hover:text-teal-600 transition-colors">Mindfulness</h3>
              </router-link>
              <p class="text-gray-700 mb-5">Aprende técnicas de atención plena para reducir el estrés, mejorar la concentración y cultivar el bienestar emocional.</p>
              <Button :to="{ name: 'servicio-detalle', params: { id: 'mindfulness' }}" text="Más información" variant="outline-teal" class="transform transition-all duration-300 hover:scale-105" />
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <Button :to="{ name: 'que-ofrecemos' }" text="Ver todos los servicios" variant="teal" class="px-6 shadow-teal transform transition-all duration-300 hover:scale-105" />
      </div>
    </section>


    <section class="py-12 md:py-16 bg-gradient-to-br from-teal-50 via-white to-teal-50 relative">
      <div class="absolute top-0 right-0 w-full h-full">
        <div class="w-full h-full opacity-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path d="M0,0 L1000,0 L1000,1000 L0,1000 Z" fill="none" stroke="#009B8F" stroke-width="1" stroke-dasharray="6,6" />
            <circle cx="500" cy="500" r="350" fill="none" stroke="#009B8F" stroke-width="1" />
            <circle cx="500" cy="500" r="250" fill="none" stroke="#009B8F" stroke-width="1" />
            <circle cx="500" cy="500" r="150" fill="none" stroke="#009B8F" stroke-width="1" />
          </svg>
        </div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-teal-800 text-center mb-4">Te acompañamos en todas las etapas de la vida</h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Nuestro equipo de especialistas te ofrece apoyo profesional adaptado a cada momento vital</p>

        <!-- Versión móvil (hasta sm) -->
        <div class="flex flex-wrap justify-center gap-6 sm:hidden max-w-5xl mx-auto">
          <div v-for="(stage, index) in lifeStages" :key="`mobile-${index}`" class="w-36 flex flex-col items-center transition-transform duration-300 hover:scale-105">
            <router-link :to="stage.route" class="block group flex flex-col items-center">
              <div class="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-soft-lg relative">
                <div class="absolute inset-0 bg-teal-500 opacity-0 transition-opacity group-hover:opacity-20"></div>
                <img :src="stage.image" :alt="stage.alt" class="w-full h-full object-cover" />
              </div>
              <h3 class="font-semibold text-base text-teal-700 group-hover:text-teal-600 transition-colors text-center">{{ stage.title }}</h3>
            </router-link>
          </div>
        </div>

        <!-- Versión tablet/desktop (sm y superior) -->
        <div class="hidden sm:grid sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div v-for="(stage, index) in lifeStages" :key="`desktop-${index}`" class="text-center flex flex-col items-center transition-transform duration-300 hover:scale-105">
            <router-link :to="stage.route" class="block group flex flex-col items-center">
              <div class="w-40 h-40 rounded-full overflow-hidden mb-5 shadow-soft-lg relative">
                <div class="absolute inset-0 bg-teal-500 opacity-0 transition-opacity group-hover:opacity-20"></div>
                <img :src="stage.image" :alt="stage.alt" class="w-full h-full object-cover" />
              </div>
              <h3 class="font-semibold text-lg text-teal-700 group-hover:text-teal-600 transition-colors">{{ stage.title }}</h3>
            </router-link>
          </div>
        </div>

        <div class="text-center mt-12">
          <Button :to="{ name: 'que-ofrecemos' }" text="Ver todos los servicios" variant="teal" class="px-6 shadow-teal transform transition-all duration-300 hover:scale-105" />
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

// Importación de imágenes
import imgChild from '@/assets/images/child.png';
import imgTeen from '@/assets/images/teen.png';
import imgAdult from '@/assets/images/adult.png';
import imgPerinatal from '@/assets/images/perinatal.png';
import imgThirdAge from '@/assets/images/third_age.png';

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

  console.log('Formulario enviado:', formData);


  alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
};
</script>

<style scoped>

.text-teal-600 {
  color: #009B8F;
}
.text-teal-700 {
  color: #00877C;
}
.text-teal-800 {
  color: #007267;
}
.bg-teal-50 {
  background-color: #E6F7F5;
}
.bg-teal-100 {
  background-color: #CCF0EC;
}
.bg-teal-200 {
  background-color: #99E1D9;
}
.bg-teal-300 {
  background-color: #66D2C6;
}
.bg-teal-500 {
  background-color: #009B8F;
}
.bg-teal-600 {
  background-color: #00877C;
}
.bg-teal-700 {
  background-color: #007267;
}
.hover\:bg-teal-700:hover {
  background-color: #007267;
}
.border-teal-50 {
  border-color: #E6F7F5;
}
.border-teal-100 {
  border-color: #CCF0EC;
}
.focus\:ring-teal-200:focus {
  --tw-ring-color: #99E1D9;
}
.focus\:border-teal-400:focus {
  border-color: #33C3B3;
}
.shadow-soft {
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
}
.shadow-soft-lg {
  box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.05);
}
.shadow-teal {
  box-shadow: 0 4px 14px -2px rgba(0, 155, 143, 0.35);
}
.shadow-teal-sm {
  box-shadow: 0 4px 8px -1px rgba(0, 155, 143, 0.25);
}
.shadow-teal-lg {
  box-shadow: 0 10px 20px -5px rgba(0, 155, 143, 0.3);
}
.hover\:shadow-teal-lg:hover {
  box-shadow: 0 10px 20px -5px rgba(0, 155, 143, 0.3);
}
.hover\:shadow-teal-sm:hover {
  box-shadow: 0 4px 8px -1px rgba(0, 155, 143, 0.25);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content {
  animation: fadeInUp 1.2s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
}
</style>
