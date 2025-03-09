<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Editar {{ seccionData.nombre }}</h1>
      <router-link to="/admin" class="text-gray-600 hover:text-gray-900">
        ← Volver al Dashboard
      </router-link>
    </div>

    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <form @submit.prevent="guardarCambios">
        <!-- Título -->
        <div class="mb-6">
          <label for="titulo" class="block mb-2 text-sm font-medium text-gray-900">Título</label>
          <input
            type="text"
            id="titulo"
            v-model="formData.titulo"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
            required
          />
        </div>

        <!-- Contenido -->
        <div class="mb-6">
          <label for="contenido" class="block mb-2 text-sm font-medium text-gray-900">Contenido</label>
          <textarea
            id="contenido"
            v-model="formData.contenido"
            rows="8"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
            required
          ></textarea>
        </div>

        <!-- Estado de publicación -->
        <div class="flex items-center mb-6">
          <input
            id="publicado"
            type="checkbox"
            v-model="formData.publicado"
            class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500"
          />
          <label for="publicado" class="ml-2 text-sm font-medium text-gray-900">Publicado</label>
        </div>

        <!-- Mensaje de estado -->
        <div v-if="mensajeExito" class="p-4 mb-6 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
          {{ mensajeExito }}
        </div>

        <div v-if="mensajeError" class="p-4 mb-6 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
          {{ mensajeError }}
        </div>

        <!-- Botones de acción -->
        <div class="flex justify-end space-x-2">
          <button
            type="button"
            @click="reiniciarForm"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
          >
            Cancelar
          </button>
          <button
            type="submit"
            :disabled="guardando"
            class="py-2 px-4 text-sm font-medium text-white bg-teal-600 rounded-lg border border-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300"
          >
            <span v-if="guardando">Guardando...</span>
            <span v-else>Guardar cambios</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const seccion = computed(() => route.params.seccion)

// Estado para los mensajes
const mensajeExito = ref('')
const mensajeError = ref('')
const guardando = ref(false)

// Datos de las secciones (simulados para testing)
const secciones = {
  inicio: {
    id: 'inicio',
    nombre: 'Página de Inicio',
    titulo: 'Bienvenido a Clínica Salud',
    contenido: 'Somos una clínica comprometida con tu salud y bienestar...',
    publicado: true
  },
  servicios: {
    id: 'servicios',
    nombre: 'Nuestros Servicios',
    titulo: 'Servicios que ofrecemos',
    contenido: 'En Clínica Salud ofrecemos una amplia gama de servicios médicos...',
    publicado: true
  },
  contacto: {
    id: 'contacto',
    nombre: 'Información de Contacto',
    titulo: 'Contacta con nosotros',
    contenido: 'Puedes encontrarnos en la siguiente dirección...',
    publicado: true
  },
  nosotros: {
    id: 'nosotros',
    nombre: 'Sobre Nosotros',
    titulo: 'Nuestra Historia',
    contenido: 'Clínica Salud fue fundada en el año 2010 con el objetivo de...',
    publicado: true
  }
}

// Datos de la sección actual
const seccionData = computed(() => {
  return secciones[seccion.value] || {
    id: 'desconocido',
    nombre: 'Sección Desconocida',
    titulo: '',
    contenido: '',
    publicado: false
  }
})

// Datos del formulario
const formData = ref({
  titulo: '',
  contenido: '',
  publicado: true
})

// Cargar datos iniciales
onMounted(() => {
  reiniciarForm()
})

// Reiniciar formulario con los datos originales
const reiniciarForm = () => {
  formData.value = {
    titulo: seccionData.value.titulo,
    contenido: seccionData.value.contenido,
    publicado: seccionData.value.publicado
  }
  mensajeExito.value = ''
  mensajeError.value = ''
}

// Simular guardar cambios
const guardarCambios = () => {
  guardando.value = true
  mensajeExito.value = ''
  mensajeError.value = ''

  // Simulación de una petición al backend
  setTimeout(() => {
    try {
      // Actualizamos los datos de la sección (en un caso real esto se enviaría al backend)
      secciones[seccion.value] = {
        ...seccionData.value,
        titulo: formData.value.titulo,
        contenido: formData.value.contenido,
        publicado: formData.value.publicado
      }

      mensajeExito.value = '¡Los cambios se han guardado correctamente!'
    } catch (error) {
      mensajeError.value = 'Hubo un error al guardar los cambios. Inténtalo de nuevo.'
    } finally {
      guardando.value = false
    }
  }, 1000)
}
</script>
