<template>
  <div class="overflow-hidden">

    <SectionHeader title="Sobre Nosotras" :backgroundImage="quienesSomosImg">
      <p class="text-justify">
        En nuestra Clínica de Salud Mental somos un <strong>equipo interdisciplinar</strong> compuesto por profesionales con formación especializada en salud mental (psiquiatría y psicologías clínicas). Acompañamos a personas en todas las etapas de la vida, teniendo en cuenta su individualidad, acordando los objetivos de tratamiento de forma conjunta.
      </p>
      
      <p class="text-justify">
        Entendemos la salud mental no solo como la ausencia de enfermedad, sino como un <strong>estado de bienestar</strong> que permite a la persona desarrollar sus capacidades, relacionarse, trabajar, aprender y disfrutar de su vida. Por eso, además del <strong>tratamiento</strong> de los problemas de salud mental, también <strong>apostamos por la promoción activa del bienestar y la prevención</strong>, a través de actividades grupales, talleres y propuestas que fomenten la conciencia, la reflexión y el autocuidado.
      </p>
      
      <p class="text-justify">
        Creemos en la importancia de crear un <strong>espacio de encuentro</strong> en el que <strong>cualquier persona pueda sentirse segura, aceptada y acompañada</strong>, contemplando la diversidad de cada persona (sexual, de género, raza, etnia, creencias religiosas, modelos relacionales, diversidad funcional, estilo de vida...) y sus vivencias subjetivas.
      </p>
    </SectionHeader>

    <section class="py-8 md:py-12 bg-gray-50 relative overflow-hidden">
      <img src="@/assets/images/ramas_fondo_derecha.png" alt="" class="absolute right-0 top-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-float-slow" />
      <img src="@/assets/images/ramas_fondo_izquierda.png" alt="" class="absolute left-0 bottom-10 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-float-slow-reverse" />
      
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-2xl md:text-3xl font-bold text-primary-700 text-center mb-6">PILARES DEL PROYECTO</h2>
        
        <div class="max-w-4xl mx-auto mb-8">
          <div class="bg-white rounded-xl shadow-soft overflow-hidden p-6">
            <h3 class="text-xl font-bold text-center text-black uppercase mb-4">UNA MIRADA INTEGRAL QUE PONE EN EL CENTRO A LA PERSONA</h3>
            <p class="text-gray-700 text-justify">
              Atendemos a las personas desde una mirada integral, considerando a cada una en todas sus dimensiones: biológica, psicológica, social, relacional y espiritual. Atender la salud mental desde una perspectiva integral significa tener en cuenta no solo los síntomas o diagnósticos, sino también el contexto de vida, la historia personal, las relaciones, los recursos internos y externos de cada persona y su forma única de experimentar el malestar o el bienestar.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div class="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-primary-lg transition-all duration-300 transform hover:-translate-y-1">
            <div class="bg-primary-600 text-white py-2 px-4 rounded-lg mb-4">
              <h3 class="text-lg font-bold text-center uppercase">VÍNCULO TERAPÉUTICO</h3>
            </div>
            <div class="px-6 pb-6">
              <p class="text-gray-700 text-base leading-relaxed mb-4 text-justify">
                Ponemos en el centro la atención a la persona, considerando que lo más importante es el <strong>vínculo</strong>, es decir, la <strong>relación de confianza, empatía y respeto</strong> mutuo que establecemos entre terapeuta y paciente.
              </p>
              <p class="text-gray-700 text-base leading-relaxed text-justify">
                Acompañamos cada proceso desde el respeto, la empatía y la colaboración, concibiendo a la persona que tenemos delante como un todo, reconociendo su complejidad y unicidad y atendiendo a sus preferencias, prioridades y necesidades.
              </p>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-primary-lg transition-all duration-300 transform hover:-translate-y-1">
            <div class="bg-primary-600 text-white py-2 px-4 rounded-lg mb-4">
              <h3 class="text-lg font-bold text-center uppercase">EQUIPO</h3>
            </div>
            <div class="px-6 pb-6">
              <p class="text-gray-700 text-base leading-relaxed mb-4 text-justify">
                Nuestro abordaje clínico es integrativo. Aunque cada profesional del equipo se ha formado en una o varias corrientes psicoterapéutica, compartimos una forma de trabajar que combina herramientas de distintos modelos terapéuticos, siempre desde una mirada amplia, flexible y basada en la evidencia científica que nos permite adaptar la intervención a las necesidades de cada persona.
              </p>
              <p class="text-gray-700 text-base leading-relaxed text-justify">
                Seguimos en formación continua y nos supervisamos para aprender las unas de las otras y ampliar nuestra comprensión de las personas a las que acompañamos.
              </p>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-primary-lg transition-all duration-300 transform hover:-translate-y-1">
            <div class="bg-primary-600 text-white py-2 px-4 rounded-lg mb-4">
              <h3 class="text-lg font-bold text-center uppercase">PERSPECTIVA INTEGRADORA</h3>
            </div>
            <div class="px-6 pb-6">
              <p class="text-gray-700 text-base leading-relaxed mb-4 text-justify">
                Desde una perspectiva integradora, apostamos por una atención coordinada y continua, que ponga en diálogo a los distintos profesionales implicados en el cuidado de la salud mental y también que incluya y acompañe a las familias.
              </p>
              <p class="text-gray-700 text-base leading-relaxed text-justify">
                Trabajamos en red para evitar la fragmentación del cuidado y facilitar el acceso a diferentes niveles de atención, asegurando que las personas se sientan acompañadas de forma coherente y sostenida en su proceso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="py-12 md:py-16 bg-gradient-to-br from-primary-50 via-white to-primary-50 relative">
      <div class="absolute -right-32 top-1/4 team-decoration team-decoration-1"></div>
      <div class="absolute -left-20 bottom-1/3 team-decoration team-decoration-2"></div>

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-primary-800 mb-12">CONOCE A NUESTRO EQUIPO</h2>

        <div class="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          <TeamCard
            v-for="(member, index) in teamMembers"
            :key="index"
            :name="member.name"
            :role="member.role"
            :description="member.description"
            :image="member.image"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import TeamCard from '@/components/TeamCard.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import unknownImg from '@/assets/images/unknown.jpg';
import quienesSomosImg from '@/assets/images/quienes_somos.jpg';

const teamMembers = [
  {
    name: 'Dra. María García',
    role: 'Psiquiatra',
    description: 'Especialista en trastornos del estado de ánimo y ansiedad, con más de 15 años de experiencia en el campo de la psiquiatría.',
    image: unknownImg
  },
  {
    name: 'Dr. Carlos Martínez',
    role: 'Psicólogo Clínico',
    description: 'Especializado en terapia cognitivo-conductual y EMDR para el tratamiento del trauma y trastornos de ansiedad.',
    image: unknownImg
  },
  {
    name: 'Dra. Laura Sánchez',
    role: 'Neuropsicóloga',
    description: 'Especialista en evaluación y rehabilitación neuropsicológica, con formación específica en deterioro cognitivo y daño cerebral.',
    image: unknownImg
  },
  {
    name: 'Dr. Javier López',
    role: 'Psiquiatra Infantojuvenil',
    description: 'Especializado en trastornos del neurodesarrollo y problemas emocionales en niños y adolescentes.',
    image: unknownImg
  },
  {
    name: 'Dra. Ana Rodríguez',
    role: 'Psicóloga Clínica',
    description: 'Especialista en trastornos de personalidad y terapia dialéctico-conductual, con amplia experiencia en terapia grupal.',
    image: unknownImg
  }
];
</script>

<style scoped>
/* Hero Section */
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

/* Page Title */

/* Section Spacing */
.section-padding {
  padding: var(--spacing-3xl) 0;
}

@media (min-width: 768px) {
  .section-padding {
    padding: calc(var(--spacing-3xl) * 1.5) 0;
  }
}

/* Content Card */
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

/* Section Title */

/* Body Text */

/* Content Spacing */
.content-spacing {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

/* Text Line Height */
.text-relaxed {
  line-height: var(--line-height-relaxed);
}

/* Section Background */
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

/* Card Styles */
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

/* Pilares Section */
.pilares-title-spacing {
  margin-bottom: calc(var(--spacing-xl) * 1.25);
}

.pilares-grid-gap {
  gap: var(--spacing-xl);
}



.pilar-paragraph-spacing {
  margin-bottom: var(--spacing-md);
}

/* Team Section */
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


/* Container Padding */
.container-padding {
  padding-left: var(--spacing-md);
  padding-right: var(--spacing-md);
}

/* Content Max Widths */
.content-max-width {
  max-width: 56rem; /* ~896px */
}

.content-max-width-lg {
  max-width: 48rem; /* ~768px */
}

.content-max-width-xl {
  max-width: 80rem; /* ~1280px */
}

.content-max-width-2xl {
  max-width: 96rem; /* ~1536px */
}

/* Pilar Accent Bar */
.pilar-accent-bar {
  height: 0.125rem; /* 2px */
}

/* Team Image Container */
.team-image-container {
  height: 16rem; /* 256px */
}

/* Color Classes */
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

/* Gray Colors - using standard CSS colors */
.text-gray-700 {
  color: #374151;
}

.text-black {
  color: #1f2937;
}

.bg-gray-50 {
  background-color: #f9fafb;
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes float-slow-reverse {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(15px);
  }
}

.animate-float-slow {
  animation: float-slow 12s ease-in-out infinite;
}

.animate-float-slow-reverse {
  animation: float-slow-reverse 12s ease-in-out infinite;
  animation-delay: 3s;
}
</style>
