<template>
  <div class="overflow-hidden">

    <SectionHeader title="NUESTRO ESPACIO" :backgroundImage="nuestroEspacioImg">
      <p class="text-justify">
        En nuestra clínica, entendemos que el entorno juega un papel crucial en el bienestar emocional de las personas que nos consultan.
      </p>
      
      <p class="text-justify">
        Por eso, hemos diseñado cada espacio para crear un ambiente de seguridad y calidez que promueva la relajación y reduzca el estrés.
      </p>
      
      <p class="text-justify">
        Utilizamos colores suaves y naturales, iluminación adecuada, materiales orgánicos y elementos naturales como plantas para generar una sensación de tranquilidad y conexión.
      </p>
    </SectionHeader>


    <section class="facilities-section bg-white relative">
      <div class="absolute -right-32 top-1/3 w-96 h-96 rounded-full bg-primary-light opacity-50"></div>
      <div class="absolute -left-20 bottom-1/3 w-64 h-64 rounded-full bg-primary-light opacity-50"></div>

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="section-subtitle text-center text-primary-dark">Nuestras Instalaciones</h2>


        <div class="max-w-6xl mx-auto facility-item">
          <div class="flex flex-col md:flex-row items-center">
            <div class="facility-image-wrapper group">
              <div class="facility-image-container shadow-soft group-hover:shadow-teal-lg">
                <img src="@/assets/images/recepcion.png" alt="Recepción" class="facility-image">
              </div>
            </div>
            <div class="facility-content" data-aos="fade-left">
              <h3 class="facility-title text-primary">Recepción</h3>
              <p class="text-gray-700 facility-description text-justify">
                Espacio acogedor donde te recibimos y te acompañamos desde el primer momento. Nuestro personal te atenderá con calidez, haciendo que te sientas bienvenido/a desde que cruzas nuestra puerta. Diseñado para transmitir serenidad y profesionalidad, es el primer contacto con nuestro concepto de bienestar.
              </p>
            </div>
          </div>
        </div>


        <div class="max-w-6xl mx-auto facility-item">
          <div class="flex flex-col md:flex-row-reverse items-center">
            <div class="facility-image-wrapper group md:pl-8">
              <div class="facility-image-container shadow-soft group-hover:shadow-teal-lg">
                <img src="@/assets/images/sala_terapia.png" alt="Sala de terapia" class="facility-image">
              </div>
            </div>
            <div class="facility-content md:pr-8" data-aos="fade-right">
              <h3 class="facility-title text-primary">Sala de Terapia</h3>
              <p class="text-gray-700 facility-description text-justify">
                Nuestras salas de terapia individual están diseñadas para proporcionar un ambiente íntimo y seguro donde puedas expresarte con total libertad y confianza. Con aislamiento acústico, mobiliario confortable y una iluminación cuidadosamente seleccionada, creamos el entorno perfecto para el proceso terapéutico.
              </p>
            </div>
          </div>
        </div>


        <div class="max-w-6xl mx-auto facility-item">
          <div class="flex flex-col md:flex-row items-center">
            <div class="facility-image-wrapper group">
              <div class="facility-image-container shadow-soft group-hover:shadow-teal-lg">
                <img src="@/assets/images/sala_espera.png" alt="Sala de espera" class="facility-image">
              </div>
            </div>
            <div class="facility-content" data-aos="fade-left">
              <h3 class="facility-title text-primary">Sala de Espera</h3>
              <p class="text-gray-700 facility-description text-justify">
                Un espacio tranquilo con asientos cómodos donde podrás relajarte antes de tu cita. Disponemos de agua, revistas y una pequeña biblioteca con material sobre bienestar emocional. Hemos cuidado cada detalle para que incluso el tiempo de espera sea una experiencia agradable y relajante.
              </p>
            </div>
          </div>
        </div>


        <div class="max-w-6xl mx-auto facility-item">
          <div class="flex flex-col md:flex-row-reverse items-center">
            <div class="facility-image-wrapper group md:pl-8">
              <div class="facility-image-container shadow-soft group-hover:shadow-teal-lg">
                <img src="@/assets/images/espacio_infantil.png" alt="Sala infantil" class="facility-image">
              </div>
            </div>
            <div class="facility-content md:pr-8" data-aos="fade-right">
              <h3 class="facility-title text-primary">Espacio Infantil</h3>
              <p class="text-gray-700 facility-description text-justify">
                Un ambiente colorido y adaptado para los más pequeños, con materiales y juegos terapéuticos que facilitan la expresión y el desarrollo de habilidades socio-emocionales. Este espacio está especialmente diseñado para que niños y adolescentes se sientan cómodos y puedan trabajar a través del juego.
              </p>
            </div>
          </div>
        </div>


        <div class="max-w-6xl mx-auto facility-item">
          <div class="flex flex-col md:flex-row items-center">
            <div class="facility-image-wrapper group">
              <div class="facility-image-container shadow-soft group-hover:shadow-teal-lg">
                <img src="@/assets/images/terapia_grupal.png" alt="Sala de terapia grupal" class="facility-image">
              </div>
            </div>
            <div class="facility-content" data-aos="fade-left">
              <h3 class="facility-title text-primary">Sala de Terapia Grupal</h3>
              <p class="text-gray-700 facility-description text-justify">
                Espacio amplio y versátil para sesiones grupales, talleres y actividades de mindfulness, diseñado para fomentar la interacción y el aprendizaje compartido. Equipado con todo lo necesario para diversas dinámicas terapéuticas y formativas en un ambiente cálido y profesional.
              </p>
            </div>
          </div>
        </div>


        <div class="max-w-6xl mx-auto facility-item">
          <div class="flex flex-col md:flex-row-reverse items-center">
            <div class="facility-image-wrapper group md:pl-8">
              <div class="facility-image-container shadow-soft group-hover:shadow-teal-lg">
                <img src="@/assets/images/exterior.png" alt="Exterior" class="facility-image">
              </div>
            </div>
            <div class="facility-content md:pr-8" data-aos="fade-right">
              <h3 class="facility-title text-primary">Exterior</h3>
              <p class="text-gray-700 facility-description text-justify">
                La fachada y entrada a nuestra clínica, con acceso adaptado y un diseño que refleja la calidez y profesionalidad que encontrarás en nuestro interior. Nuestra ubicación ofrece comodidad y accesibilidad para todos nuestros visitantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import SectionHeader from '@/components/SectionHeader.vue';
import nuestroEspacioImg from '@/assets/images/nuestro_espacio.jpg';
</script>

<style scoped>
/* Import theme variables */
@import '@/styles/theme.css';

/* Container padding */
.container-padding {
  padding-left: 1rem;
  padding-right: 1rem;
}

/* Hero Section */
.hero-section {
  padding: 2rem 0;
  background: linear-gradient(to bottom right, var(--primary-50), white);
}

@media (min-width: 768px) {
  .hero-section {
    padding: 2.5rem 0;
  }
}


/* Content Section */
.content-section {
  padding: 4rem 0;
}

@media (min-width: 768px) {
  .content-section {
    padding: 5rem 0;
  }
}




/* Facilities Section */
.facilities-section {
  padding: 3rem 0;
}

@media (min-width: 768px) {
  .facilities-section {
    padding: 4rem 0;
  }
}

.section-subtitle {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: 3rem;
}

.facility-item {
  margin-bottom: 4rem;
}

.facility-item:last-child {
  margin-bottom: 0;
}

.facility-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: 1rem;
}

.facility-description {
  line-height: var(--line-height-relaxed);
}

/* Facility Image and Content */
.facility-image-wrapper {
  width: 100%;
  margin-bottom: var(--spacing-xl);
  transform: translateY(0);
  transition: transform var(--transition-slow);
}

@media (min-width: 768px) {
  .facility-image-wrapper {
    width: 50%;
    margin-bottom: 0;
    padding-right: var(--spacing-xl);
  }
  
  .facility-image-wrapper.md\:pl-8 {
    padding-right: 0;
    padding-left: var(--spacing-xl);
  }
}

.facility-image-wrapper:hover {
  transform: translateY(-0.5rem);
}

.facility-image-container {
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  transition: box-shadow var(--transition-normal);
}

.facility-image {
  width: 100%;
  height: 16rem;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

@media (min-width: 768px) {
  .facility-image {
    height: 20rem;
  }
}

.group:hover .facility-image {
  transform: scale(1.05);
}

.facility-content {
  width: 100%;
  opacity: 0.9;
  transition: opacity var(--transition-slow);
}

@media (min-width: 768px) {
  .facility-content {
    width: 50%;
    padding-left: var(--spacing-xl);
  }
  
  .facility-content.md\:pr-8 {
    padding-left: 0;
    padding-right: var(--spacing-xl);
  }
}

.facility-content:hover {
  opacity: 1;
}

/* Colors */
.bg-primary {
  background-color: var(--primary-500);
}

.bg-primary-light {
  background-color: var(--primary-50);
}

.text-primary {
  color: var(--primary-700);
}

.text-primary-dark {
  color: var(--primary-800);
}

/* Shadows */
.shadow-soft {
  box-shadow: var(--shadow-lg);
}

.shadow-teal-lg {
  box-shadow: 0 10px 20px -5px rgba(0, 121, 113, 0.3);
}

</style>
