<template>
  <div class="overflow-hidden">

    <SectionHeader title="Sobre Nosotras" :backgroundImage="quienesSomosImg">
      <p class="text-justify">
        En nuestra Clínica de Salud Mental somos un <strong>equipo interdisciplinar</strong> compuesto por profesionales con formación especializada en salud mental (psiquiatría y psicologías clínicas). Acompañamos a personas en todas las etapas de la vida, teniendo en cuenta su individualidad, acordando los objetivos de tratamiento de forma conjunta.
      </p>

      <p class="text-justify">
        <strong>Entendemos la salud mental no solo como la ausencia de enfermedad</strong>, sino como un estado de bienestar que permite a la persona desarrollar sus capacidades, relacionarse, trabajar, aprender y disfrutar de su vida. Por eso, además del <strong>tratamiento</strong> de los problemas de salud mental, también <strong>apostamos por la promoción activa del bienestar y la prevención</strong>, a través de actividades grupales, talleres y propuestas que fomenten la conciencia, la reflexión y el autocuidado.
      </p>

      <p class="text-justify">
        Creemos en la importancia de crear un <strong>espacio de encuentro en el que cualquier persona pueda sentirse segura, aceptada y acompañada</strong>, contemplando la diversidad de cada persona (sexual, de género, raza, etnia, creencias religiosas, modelos relacionales, diversidad funcional, estilo de vida...) y sus vivencias subjetivas.
      </p>
    </SectionHeader>

    <section class="py-8 md:py-12 bg-gray-50 relative overflow-hidden">
      <ResponsiveImage :src="plantImages.ramasFondoDerecha" alt="" img-class="absolute right-0 top-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-breeze" />
      <ResponsiveImage :src="plantImages.ramasFondoIzquierda" alt="" img-class="absolute left-0 bottom-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-breeze-reverse" />

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="section-title-primary text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">PILARES DEL PROYECTO</h2>

        <div class="max-w-4xl mx-auto mb-8">
          <div class="bg-white rounded-xl shadow-soft overflow-hidden p-6">
            <h3 class="text-xl md:text-2xl font-bold text-center text-primary-600 uppercase mb-6" style="font-family: 'Montserrat', sans-serif;">UNA MIRADA INTEGRAL QUE PONE EN EL CENTRO A LA PERSONA</h3>
            <p class="text-gray-700 text-justify text-base md:text-lg">
              Atendemos a las personas desde una mirada integral, considerando a cada una en todas sus dimensiones: biológica, psicológica, social, relacional y espiritual. Atender la salud mental desde una perspectiva integral significa tener en cuenta no solo los síntomas o diagnósticos, sino también el contexto de vida, la historia personal, las relaciones, los recursos internos y externos de cada persona y su forma única de experimentar el malestar o el bienestar.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div class="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-primary-lg transition-all duration-300 transform hover:-translate-y-1">
            <div class="bg-primary-600 text-white py-3 px-4 rounded-lg mb-4">
              <h3 class="text-xl font-bold text-center uppercase">VÍNCULO TERAPÉUTICO</h3>
            </div>
            <div class="px-6 pb-6">
              <p class="text-gray-700 text-base md:text-lg leading-relaxed mb-4 text-justify">
                Ponemos en el centro la atención a la persona, considerando que lo más importante es el <strong>vínculo</strong>, es decir, la <strong>relación de confianza, empatía y respeto</strong> mutuo que establecemos entre terapeuta y paciente.
              </p>
              <p class="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                <strong>Acompañamos cada proceso desde el respeto, la empatía y la colaboración</strong>, concibiendo a la persona que tenemos delante como un todo, reconociendo su complejidad y unicidad y atendiendo a sus preferencias, prioridades y necesidades.
              </p>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-primary-lg transition-all duration-300 transform hover:-translate-y-1">
            <div class="bg-primary-600 text-white py-3 px-4 rounded-lg mb-4">
              <h3 class="text-xl font-bold text-center uppercase">EQUIPO</h3>
            </div>
            <div class="px-6 pb-6">
              <p class="text-gray-700 text-base md:text-lg leading-relaxed mb-4 text-justify">
                Nuestro <strong>abordaje clínico es integrativo</strong>. Aunque cada profesional del equipo se ha formado en una o varias corrientes psicoterapéuticas, compartimos una forma de trabajar que <strong>combina herramientas de distintos modelos terapéuticos</strong>, siempre desde una <strong>mirada amplia, flexible y basada en la evidencia científica</strong> que nos permite adaptar la intervención a las necesidades de cada persona.
              </p>
              <p class="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                <strong>Trabajamos en equipo</strong>, seguimos en formación continua y nos supervisamos para profundizar y ampliar nuestra comprensión de las personas a las que acompañamos.
              </p>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-primary-lg transition-all duration-300 transform hover:-translate-y-1">
            <div class="bg-primary-600 text-white py-3 px-4 rounded-lg mb-4">
              <h3 class="text-xl font-bold text-center uppercase">PERSPECTIVA INTEGRADORA</h3>
            </div>
            <div class="px-6 pb-6">
              <p class="text-gray-700 text-base leading-relaxed mb-4 text-justify">
                Desde una perspectiva integradora, apostamos por una <strong>atención coordinada y continua</strong>, que ponga en diálogo a los <strong>distintos profesionales</strong> implicados en el cuidado de la salud mental y también que incluya y acompañe a las <strong>familias</strong>.
              </p>
              <p class="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                <strong>Trabajamos en red</strong> para evitar la fragmentación del cuidado y facilitar el acceso a diferentes niveles de atención, asegurando que las personas se sientan acompañadas de forma coherente y sostenida en su proceso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="py-12 md:py-16 bg-gradient-to-br from-primary-50 via-white to-primary-50 relative overflow-hidden">
      <ResponsiveImage :src="plantImages.ramasFondoDerecha" alt="" img-class="absolute right-0 top-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-breeze" />
      <ResponsiveImage :src="plantImages.ramasFondoIzquierda" alt="" img-class="absolute left-0 bottom-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-gentle-breeze-reverse" />

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="section-title-primary text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">CONOCE A NUESTRO EQUIPO</h2>

        <div class="max-w-6xl mx-auto">
          <div class="flex flex-wrap justify-center gap-8">
            <TeamCard
              v-for="member in teamMembers"
              :key="member.id"
              :name="member.name"
              :role="member.role"
              :specialties="member.specialties"
              :image="member.image"
              class="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import TeamCard from '@/components/TeamCard.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import ResponsiveImage from '@/components/ResponsiveImage.vue';
import { plantImages } from '@/assets/plantImages.js';
import quienesSomosImg from '@/assets/images/quienes_somos.jpg';
import { getTeamMembersWithSpecialtyColors } from '@/data/team.js';

const teamMembers = getTeamMembersWithSpecialtyColors();
</script>

<style scoped>

.hero-section {
  padding: var(--spacing-xl) 0;
  background: linear-gradient(to bottom right, var(--primary-50), white);
}

@media (min-width: 768px) {
  .hero-section {
    padding: calc(var(--spacing-xl) * 1.25) 0;
  }
}

.hero-decoration {
  border-radius: var(--border-radius-full);
  opacity: 0.05;
}

.hero-decoration-1 {
  width: 16rem;
  height: 16rem;
  background-color: var(--primary-500);
  transform: translate(5rem, -5rem);
}

.hero-decoration-2 {
  width: 12rem;
  height: 12rem;
  background-color: var(--primary-500);
  transform: translate(-4rem, 4rem);
}




.section-padding {
  padding: var(--spacing-3xl) 0;
}

@media (min-width: 768px) {
  .section-padding {
    padding: calc(var(--spacing-3xl) * 1.5) 0;
  }
}


.content-card {
  border-radius: var(--border-radius-xl);
  padding: calc(var(--spacing-xl) * 1.25);
  box-shadow: var(--shadow-xl);
}

@media (min-width: 768px) {
  .content-card {
    padding: var(--spacing-2xl);
  }
}






.content-spacing {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}


.text-relaxed {
  line-height: var(--line-height-relaxed);
}


.section-bg-gradient {
  background: linear-gradient(to bottom right, var(--primary-50), white);
}

.section-decoration {
  border-radius: var(--border-radius-full);
  background-color: var(--primary-500);
  opacity: 0.05;
}

.section-decoration-1 {
  width: 24rem;
  height: 24rem;
  transform: translate(6rem, -6rem);
}

.section-decoration-2 {
  width: 16rem;
  height: 16rem;
  transform: translate(-5rem, 5rem);
}


.card-rounded {
  border-radius: var(--border-radius-lg);
}

.card-rounded-xl {
  border-radius: var(--border-radius-xl);
}

.card-shadow {
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
}

.card-padding {
  padding: var(--spacing-xl);
}

.content-card-large {
  padding: calc(var(--spacing-xl) * 2.5);
  box-shadow: var(--shadow-xl);
}

@media (min-width: 768px) {
  .content-card-large {
    padding: var(--spacing-2xl);
  }
}


.pilares-title-spacing {
  margin-bottom: calc(var(--spacing-xl) * 1.25);
}

.pilares-grid-gap {
  gap: var(--spacing-xl);
}



.pilar-paragraph-spacing {
  margin-bottom: var(--spacing-md);
}


.team-section-bg {
  background: linear-gradient(to bottom right, var(--primary-50), white, var(--primary-50));
}

.team-decoration {
  border-radius: var(--border-radius-full);
  background-color: var(--primary-50);
  opacity: 0.7;
}

.team-decoration-1 {
  width: 24rem;
  height: 24rem;
}

.team-decoration-2 {
  width: 16rem;
  height: 16rem;
}

.team-title-spacing {
  margin-bottom: calc(var(--spacing-xl) * 1.25);
}

.team-grid-gap {
  gap: var(--spacing-xl);
}

.team-second-row {
  margin-top: var(--spacing-xl);
}

.team-card {
  transition: all var(--transition-normal);
}

.team-card:hover {
  box-shadow: 0 10px 20px -5px rgba(0, 121, 113, 0.3);
  transform: translateY(-0.25rem);
}

.shadow-soft {
  box-shadow: var(--shadow-lg);
}
.shadow-primary-lg {
  box-shadow: 0 10px 20px -5px rgba(0, 121, 113, 0.3);
}
.text-icon {
  font-size: 1.25rem;
}

.team-card-padding {
  padding: var(--spacing-lg);
}


.team-role {
  font-weight: var(--font-weight-medium);
  margin-bottom: calc(var(--spacing-sm) * 1.5);
}



.container-padding {
  padding-left: var(--spacing-md);
  padding-right: var(--spacing-md);
}


.content-max-width {
  max-width: 56rem;
}

.content-max-width-lg {
  max-width: 48rem;
}

.content-max-width-xl {
  max-width: 80rem;
}

.content-max-width-2xl {
  max-width: 96rem;
}


.pilar-accent-bar {
  height: 0.125rem;
}


.team-image-container {
  height: 16rem;
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

.bg-primary-600 {
  background-color: var(--primary-600);
}


.text-gray-700 {
  color: #374151;
}

.text-black {
  color: #1f2937;
}

.bg-gray-50 {
  background-color: #f9fafb;
}

.animate-gentle-breeze {
  animation: gentle-breeze 12s ease-in-out infinite;
}

.animate-gentle-breeze-reverse {
  animation: gentle-breeze-reverse 12s ease-in-out infinite;
  animation-delay: 3s;
}
</style>
