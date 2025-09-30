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

        <div class="mb-6">
          <label for="titulo" class="block mb-2 text-sm font-medium text-gray-900">Título</label>
          <input
            type="text"
            id="titulo"
            v-model="formData.titulo"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            required
          />
        </div>


        <div class="mb-6">
          <label for="contenido" class="block mb-2 text-sm font-medium text-gray-900">Contenido</label>
          <textarea
            id="contenido"
            v-model="formData.contenido"
            rows="8"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            required
          ></textarea>
        </div>


        <div class="flex items-center mb-6">
          <input
            id="publicado"
            type="checkbox"
            v-model="formData.publicado"
            class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
          />
          <label for="publicado" class="ml-2 text-sm font-medium text-gray-900">Publicado</label>
        </div>


        <div v-if="mensajeExito" class="p-4 mb-6 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
          {{ mensajeExito }}
        </div>

        <div v-if="mensajeError" class="p-4 mb-6 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
          {{ mensajeError }}
        </div>


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
            class="py-2 px-4 text-sm font-medium text-white bg-primary-600 rounded-lg border border-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300"
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
import clinicInfoService from '../../services/clinicInfoService'

const route = useRoute()
const seccion = computed(() => route.params.seccion)


const mensajeExito = ref('')
const mensajeError = ref('')
const guardando = ref(false)


const secciones = ref({})


const seccionData = computed(() => {
  return secciones.value[seccion.value] || {
    id: 'desconocido',
    nombre: 'Sección Desconocida',
    titulo: '',
    contenido: '',
    publicado: false
  }
})


const formData = ref({
  titulo: '',
  contenido: '',
  publicado: true
})


onMounted(async () => {
  try {
    guardando.value = true;


    const response = await clinicInfoService.getAllSections(true);


    if (response && response.data) {

      response.data.forEach(section => {
        secciones.value[section.sectionId] = {
          id: section.sectionId,
          nombre: section.sectionName,
          titulo: section.title,
          contenido: section.content,
          publicado: section.published
        };
      });


    }

    reiniciarForm();
  } catch (error) {
    console.error('Error al cargar las secciones:', error);
    mensajeError.value = 'No se pudieron cargar los datos. Por favor, intenta de nuevo más tarde.';
  } finally {
    guardando.value = false;
  }
});


const reiniciarForm = () => {
  if (seccionData.value) {
    formData.value = {
      titulo: seccionData.value.titulo,
      contenido: seccionData.value.contenido,
      publicado: seccionData.value.publicado
    };

  } else {
    formData.value = {
      titulo: '',
      contenido: '',
      publicado: true
    };

  }
  mensajeExito.value = '';
  mensajeError.value = '';
};


const guardarCambios = async () => {
  guardando.value = true;
  mensajeExito.value = '';
  mensajeError.value = '';

  try {




    const sectionData = {
      title: formData.value.titulo,
      content: formData.value.contenido,
      published: formData.value.publicado
    };




    await clinicInfoService.updateSection(seccion.value, sectionData);



    if (secciones.value[seccion.value]) {
      secciones.value[seccion.value] = {
        ...secciones.value[seccion.value],
        titulo: formData.value.titulo,
        contenido: formData.value.contenido,
        publicado: formData.value.publicado
      };
    }

    mensajeExito.value = '¡Los cambios se han guardado correctamente!';
  } catch (error) {
    console.error('Error al guardar cambios:', error);
    if (error.response) {
      console.error('Respuesta de error:', error.response.data);
      console.error('Estado HTTP:', error.response.status);
    }
    mensajeError.value = error.response?.data?.message || 'Hubo un error al guardar los cambios. Inténtalo de nuevo.';
  } finally {
    guardando.value = false;
  }
};
</script>
