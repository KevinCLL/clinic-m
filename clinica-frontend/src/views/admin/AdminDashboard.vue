<template>
  <div>
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
        <h2 class="text-lg font-semibold mb-2 text-gray-700">Versión</h2>
        <p class="text-gray-600 mb-4">Clínica App v1.0</p>
        <div class="mt-auto">
          <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Actualizado</span>
        </div>
      </div>
    </div>

    <!-- Secciones Editables -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-xl font-semibold mb-4">Secciones Editables</h2>

      <div class="overflow-x-auto">
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
</template>

<script setup>
import { ref, computed } from 'vue'

// Simulación de datos para testing
const secciones = ref([
  { id: 'inicio', nombre: 'Página de Inicio', ultimaActualizacion: '10/03/2023' },
  { id: 'servicios', nombre: 'Servicios', ultimaActualizacion: '05/03/2023' },
  { id: 'contacto', nombre: 'Contacto', ultimaActualizacion: '01/03/2023' },
  { id: 'nosotros', nombre: 'Sobre Nosotros', ultimaActualizacion: '28/02/2023' },
])

// Simulación de último acceso
const formattedLastLogin = computed(() => {
  return new Date().toLocaleString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
})
</script>
