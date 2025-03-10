<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 md:py-24 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Atención Integral a la Salud Mental</h1>
          <p class="text-gray-700 mb-8 leading-relaxed">
            Entendemos que la salud mental y física están intrínsecamente relacionadas y deben
            ser abordadas de manera integral y multidisciplinar. Nos dedicamos a ofrecer
            tratamientos especializados respaldados por la evidencia científica, proporcionando
            atención tanto a niños y adolescentes como a adultos.
          </p>
          <Button to="/servicios" text="Ver Servicios" />
        </div>
      </div>
    </section>

    <!-- Slider Section "Dónde ponemos el foco" -->
    <section class="py-16 bg-gray-800 text-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Dónde ponemos el foco</h2>

        <Slider :slides="focusSlides">
          <template #default="{ slide }">
            <div class="text-center px-4 md:px-16">
              <h3 class="text-xl font-semibold mb-4">{{ slide.title }}</h3>
              <p class="italic text-gray-200">{{ slide.content }}</p>
            </div>
          </template>
        </Slider>
      </div>
    </section>

    <!-- Sobre Nosotras Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row gap-8 items-center">
          <div class="md:w-1/2">
            <img src="@/assets/images/team-meeting.jpg" alt="Equipo de profesionales" class="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div class="md:w-1/2">
            <div class="text-sm uppercase tracking-wide text-blue-800 font-semibold mb-2">SOBRE NOSOTRAS</div>
            <h2 class="text-3xl font-bold text-blue-900 mb-4">Equipo Interdisciplinar de Profesionales</h2>
            <p class="text-gray-700 mb-6">
              Nuestro equipo está liderado por profesionales de la psiquiatría y la
              psicología clínica, con una amplia experiencia en el abordaje del trauma, los
              trastornos de personalidad y el trastorno mental grave entre otras. Adoptamos un
              enfoque colaborativo y personalizado para cada paciente, evaluando los casos de
              manera conjunta para poder combinar diferentes perspectivas y modelos
              terapéuticos y hacer la derivación al profesional que más se adapte a las
              necesidades específicas de cada persona.
            </p>
            <Button to="/quienes-somos" text="Leer Más" />
          </div>
        </div>
      </div>
    </section>

    <!-- Etapas Vitales Section -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-blue-900 text-center mb-12">Te acompañamos en todas las etapas de la vida</h2>

        <div class="flex overflow-x-auto pb-8 space-x-6 justify-center">
          <div v-for="(stage, index) in lifeStages" :key="index" class="flex-shrink-0">
            <div class="w-40 h-40 rounded-full overflow-hidden">
              <img src="@/assets/images/child.jpg" :alt="stage.alt" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row">
          <!-- Información de contacto -->
          <div class="bg-gray-800 text-white p-8 md:w-2/5">
            <h2 class="text-2xl font-bold mb-6">Contacto</h2>
            <div class="mb-4">
              <p class="mb-1">C/Péris y Valero 178, bajo</p>
              <p>46006 Valencia</p>
            </div>
            <div class="mb-6">
              <p class="mb-1">688764073</p>
              <p>info@clinicasati.es</p>
            </div>
            <div class="flex space-x-3">
              <a href="#" class="bg-white text-gray-800 h-8 w-8 rounded-full flex items-center justify-center">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="bg-white text-gray-800 h-8 w-8 rounded-full flex items-center justify-center">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="bg-white text-gray-800 h-8 w-8 rounded-full flex items-center justify-center">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="bg-white text-gray-800 h-8 w-8 rounded-full flex items-center justify-center">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <!-- Formulario de contacto -->
          <div class="bg-white p-8 md:w-3/5 shadow-lg">
            <h2 class="text-2xl font-bold text-blue-900 mb-6">Envíanos un mensaje</h2>
            <form @submit.prevent="submitForm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label for="nombre" class="block text-sm text-gray-700 mb-1">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    v-model="form.nombre"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                </div>
                <div>
                  <label for="apellidos" class="block text-sm text-gray-700 mb-1">Apellidos</label>
                  <input
                    type="text"
                    id="apellidos"
                    v-model="form.apellidos"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                </div>
              </div>

              <div class="mb-4">
                <label for="email" class="block text-sm text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
              </div>

              <div class="mb-6">
                <label for="mensaje" class="block text-sm text-gray-700 mb-1">Mensaje</label>
                <textarea
                  id="mensaje"
                  v-model="form.mensaje"
                  rows="5"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full py-3 bg-coral-500 text-white font-medium rounded hover:bg-coral-600 transition"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from '@/components/Button.vue';
import Slider from '@/components/Slider.vue';

// Datos para el slider de "Dónde ponemos el foco"
const focusSlides = [
  {
    title: "El vínculo terapéutico:",
    content: "es el término utilizado para describir la relación entre el terapeuta y el paciente en una sesión de terapia. Se trata de una relación que se basa en la confianza, la empatía y el respeto mutuo, y que es esencial para el éxito de cualquier proceso terapéutico."
  },
  {
    title: "La evidencia científica:",
    content: "Utilizamos técnicas y métodos terapéuticos respaldados por la investigación científica, asegurando que nuestros tratamientos sean efectivos y estén a la vanguardia de la práctica clínica."
  },
  {
    title: "Enfoque multidisciplinar:",
    content: "Creemos en la importancia de abordar la salud mental desde diferentes perspectivas profesionales, integrando conocimientos de psiquiatría, psicología, neuropsicología y otras disciplinas."
  }
];

// Datos para la sección de etapas vitales
const lifeStages = [
  {  alt: 'Infancia' },
  { alt: 'Adolescencia' },
  { alt: 'Adultos jóvenes' },
  { alt: 'Maternidad' },
  { alt: 'Tercera edad' }
];

// Estado del formulario
const form = ref({
  nombre: '',
  apellidos: '',
  email: '',
  mensaje: ''
});

// Método para enviar el formulario
const submitForm = () => {
  // Aquí implementarías la lógica para enviar el formulario
  console.log('Formulario enviado:', form.value);
  // Restablecer el formulario después del envío
  form.value = {
    nombre: '',
    apellidos: '',
    email: '',
    mensaje: ''
  };
  // Mostrar un mensaje de confirmación
  alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
};
</script>

<style scoped>
.bg-coral-500 {
  background-color: #ff8c7a;
}
.hover\:bg-coral-600:hover {
  background-color: #ff7c6a;
}
</style>
