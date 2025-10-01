<template>
  <div class="overflow-hidden">

    <SectionHeader title="Nuestro Espacio" :backgroundImage="nuestroEspacioImg">
      <p class="text-justify">
        En nuestra clínica, entendemos que <strong>el entorno juega un papel crucial en el bienestar emocional</strong> de las personas que nos consultan.
        Por eso, hemos diseñado cada espacio para crear un <strong>ambiente de seguridad y calidez</strong> que promueva la relajación y <strong>reduzca el estrés</strong>. Utilizamos colores suaves y naturales, iluminación adecuada, materiales orgánicos y elementos naturales como plantas para generar una sensación de tranquilidad y conexión.
      </p>
    </SectionHeader>


    <section class="facilities-section bg-white relative overflow-hidden">
      <ResponsiveImage :src="plantImages.ramasFondoDerecha" alt="" img-class="absolute right-0 top-40 w-48 md:w-64 lg:w-80 h-auto opacity-10 pointer-events-none animate-pulse-slow z-0" loading="lazy" />

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="section-title-primary text-2xl md:text-3xl font-bold text-center mb-12">NUESTRAS INSTALACIONES</h2>


        <div class="max-w-6xl mx-auto facility-item relative z-20">
          <div class="flex flex-col md:flex-row items-center">
            <div class="facility-image-wrapper group">
              <div class="facility-image-container shadow-soft group-hover:shadow-teal-lg">
                <ResponsiveImage :src="placeholderImg" alt="Recepción" img-class="facility-image" loading="lazy" />
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


        <ResponsiveImage :src="plantImages.ramasFondoIzquierda" alt="" img-class="absolute -left-10 top-[300px] w-48 md:w-64 lg:w-80 h-auto opacity-7 pointer-events-none animate-sway-subtle z-0" loading="lazy" />

        <div class="max-w-6xl mx-auto facility-item relative z-20">
          <div class="flex flex-col md:flex-row-reverse items-center relative">
            <div class="facility-image-wrapper group md:pl-8">
              <div class="facility-image-container shadow-soft group-hover:shadow-teal-lg">
                <ResponsiveImage :src="placeholderImg" alt="Sala de terapia" img-class="facility-image" loading="lazy" />
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



        <div class="max-w-6xl mx-auto facility-item relative z-20">
          <div class="flex flex-col md:flex-row items-center">
            <div class="facility-image-wrapper group">
              <div class="facility-image-container shadow-soft group-hover:shadow-teal-lg">
                <ResponsiveImage :src="placeholderImg" alt="Sala infantil" img-class="facility-image" loading="lazy" />
              </div>
            </div>
            <div class="facility-content" data-aos="fade-left">
              <h3 class="facility-title text-primary">Espacio Infantojuvenil</h3>
              <p class="text-gray-700 facility-description text-justify">
                Un ambiente colorido y adaptado para los más pequeños, con materiales y juegos terapéuticos que facilitan la expresión y el desarrollo de habilidades socioemocionales. El espacio está especialmente diseñado para que niños y adolescentes se sientan cómodos y tengan juegos, materiales y recursos adaptados a su momento evolutivo.
              </p>
            </div>
          </div>
        </div>


        <ResponsiveImage :src="plantImages.ramasFondoDerecha" alt="" img-class="absolute -right-10 top-[700px] w-48 md:w-64 lg:w-80 h-auto opacity-7 pointer-events-none animate-sway-subtle-reverse z-0" loading="lazy" />

        <div class="max-w-6xl mx-auto facility-item relative z-20">
          <div class="flex flex-col md:flex-row-reverse items-center relative">
            <div class="facility-image-wrapper group md:pl-8">
              <div class="facility-image-container shadow-soft group-hover:shadow-teal-lg">
                <ResponsiveImage :src="placeholderImg" alt="Sala de terapia grupal" img-class="facility-image" loading="lazy" />
              </div>
            </div>
            <div class="facility-content md:pr-8" data-aos="fade-right">
              <h3 class="facility-title text-primary">Sala grupal</h3>
              <p class="text-gray-700 facility-description text-justify">
                Espacio amplio y versátil para sesiones grupales, talleres de mindfulness, práctica de yoga… diseñado para fomentar la interacción y el aprendizaje compartido. Equipado con todo lo necesario para diversas dinámicas terapéuticas y formativas.
              </p>
            </div>
          </div>
        </div>


        <div class="max-w-6xl mx-auto facility-item relative z-20">
          <div class="flex flex-col md:flex-row items-center">
            <div class="facility-image-wrapper group">
              <div class="facility-image-container shadow-soft group-hover:shadow-teal-lg">
                <ResponsiveImage :src="placeholderImg" alt="Terraza" img-class="facility-image" loading="lazy" />
              </div>
            </div>
            <div class="facility-content" data-aos="fade-left">
              <h3 class="facility-title text-primary">Terraza</h3>
              <p class="text-gray-700 facility-description text-justify">
                Un espacio al aire libre donde disfrutar de momentos de tranquilidad y conexión con la naturaleza. Nuestra terraza ofrece un ambiente relajante ideal para sesiones terapéuticas al aire libre o simplemente para tomar un respiro entre sesiones.
              </p>
            </div>
          </div>
        </div>


        <ResponsiveImage :src="plantImages.ramasFondoIzquierda" alt="" img-class="absolute -left-10 bottom-[200px] w-48 md:w-64 lg:w-80 h-auto opacity-7 pointer-events-none animate-float-subtle z-0" loading="lazy" />

        <div class="max-w-6xl mx-auto facility-item relative z-20">
          <div class="flex flex-col md:flex-row-reverse items-center relative">
            <div class="facility-image-wrapper group md:pl-8">
              <div class="facility-image-container shadow-soft group-hover:shadow-teal-lg">
                <ResponsiveImage :src="placeholderImg" alt="Exterior" img-class="facility-image" loading="lazy" />
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
import ResponsiveImage from '@/components/ResponsiveImage.vue';
import { plantImages } from '@/assets/plantImages.js';
import nuestroEspacioImg from '@/assets/images/nuestro_espacio.jpg';
import placeholderImg from '@/assets/images/placeholder.jpg';
</script>

<style scoped>

@import '@/styles/theme.css';


.container-padding {
  padding-left: 1rem;
  padding-right: 1rem;
}


.hero-section {
  padding: 2rem 0;
  background: linear-gradient(to bottom right, var(--primary-50), white);
}

@media (min-width: 768px) {
  .hero-section {
    padding: 2.5rem 0;
  }
}



.content-section {
  padding: 4rem 0;
}

@media (min-width: 768px) {
  .content-section {
    padding: 5rem 0;
  }
}





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
  font-family: 'Montserrat', sans-serif;
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

@media (min-width: 769px) {
  .facility-image-wrapper:hover {
    transform: translateY(-0.5rem);
  }
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

@media (min-width: 769px) {
  .group:hover .facility-image {
    transform: scale(1.05);
  }
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

@media (min-width: 769px) {
  .facility-content:hover {
    opacity: 1;
  }
}


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


.shadow-soft {
  box-shadow: var(--shadow-lg);
}

.shadow-teal-lg {
  box-shadow: 0 10px 20px -5px rgba(0, 121, 113, 0.3);
}

</style>
