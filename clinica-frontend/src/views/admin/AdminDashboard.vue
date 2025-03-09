<template>
  <div>
    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center items-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
      <strong class="font-bold">Error!</strong>
      <span class="block sm:inline">{{ error }}</span>
      <button @click="error = null" class="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <title>Cerrar</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
        </svg>
      </button>
    </div>

    <!-- Dashboard Content -->
    <div v-else>
      <h1 class="text-2xl font-bold mb-6">Panel de Administración</h1>

      <!-- Dashboard Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-lg font-semibold mb-2 text-gray-700">Contenido del Sitio</h2>
          <p class="text-gray-600 mb-4">Editar el contenido de las páginas del sitio web.</p>
          <div class="mt-auto">
            <router-link to="/admin/editar/inicio" class="text-teal-600 hover:text-teal-800 font-medium">
              Gestionar contenido →
            </router-link>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-lg font-semibold mb-2 text-gray-700">Último acceso</h2>
          <p class="text-gray-600 mb-4">{{ formattedLastLogin }}</p>
          <div class="mt-auto">
            <span class="text-gray-500 text-sm">Sesión actual</span>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-lg font-semibold mb-2 text-gray-700">Usuario</h2>
          <p class="text-gray-600 mb-4">{{ adminInfo?.username || 'Administrador' }}</p>
          <div class="mt-auto">
            <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Activo</span>
          </div>
        </div>
      </div>

      <!-- Secciones Editables -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4">Secciones Editables</h2>

        <div v-if="secciones.length === 0" class="text-center py-4 text-gray-600">
          No se encontraron secciones. Contacta con el administrador del sistema.
        </div>

        <div v-else class="overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3">Sección</th>
                <th scope="col" class="px-6 py-3">Última actualización</th>
                <th scope="col" class="px-6 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(seccion, index) in secciones" :key="index" class="bg-white border-b">
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {{ seccion.nombre }}
                </td>
                <td class="px-6 py-4">
                  {{ seccion.ultimaActualizacion }}
                </td>
                <td class="px-6 py-4">
                  <router-link :to="`/admin/editar/${seccion.id}`" class="font-medium text-teal-600 hover:underline mr-3">
                    Editar
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useAuthStore } from '../../stores/auth'
import clinicInfoService from '../../services/clinicInfoService'

// Store de autenticación
const authStore = useAuthStore()

// Estado
const secciones = ref([])
const loading = ref(false)
const error = ref(null)
const adminInfo = ref(null)

// Formato de último acceso
const formattedLastLogin = computed(() => {
  if (adminInfo.value?.lastLogin) {
    return new Date(adminInfo.value.lastLogin).toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }
  return 'No disponible'
})

// Cargar datos al iniciar
onMounted(async () => {
  try {
    loading.value = true

    // Cargar información del perfil
    const profileResponse = await authStore.getProfile()
    if (profileResponse) {
      adminInfo.value = profileResponse
    }

    // Cargar secciones
    const sectionsResponse = await clinicInfoService.getAllSections(true)
    if (sectionsResponse && sectionsResponse.data) {
      secciones.value = sectionsResponse.data.map(section => ({
        id: section.sectionId,
        nombre: section.sectionName,
        ultimaActualizacion: new Date(section.updatedAt).toLocaleDateString('es-ES')
      }))
    }
  } catch (err) {
    console.error('Error al cargar datos del dashboard:', err)
    error.value = 'Error al cargar los datos. Por favor, intenta de nuevo.'
  } finally {
    loading.value = false
  }
})
</script>
