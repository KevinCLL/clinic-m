<template>
  <div class="min-h-screen flex flex-col">
    <!-- Admin Header -->
    <header class="bg-slate-800 text-white shadow-md">
      <div class="container mx-auto px-4 py-2">
        <div class="flex justify-between items-center">
          <!-- Admin Logo -->
          <div class="flex items-center">
            <h1 class="text-xl font-bold text-white">Panel Administrador</h1>
          </div>

          <!-- Admin Navigation -->
          <nav class="hidden md:flex space-x-8">
            <router-link to="/admin" class="text-gray-300 hover:text-white transition px-2 py-1">
              Dashboard
            </router-link>
          </nav>

          <!-- User menu -->
          <div class="flex items-center space-x-4">
            <span class="text-sm">Admin</span>
            <button @click="logout" class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm">
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Admin Main content -->
    <main class="flex-grow bg-gray-100">
      <div class="container mx-auto px-4 py-8">
        <router-view />
      </div>
    </main>

    <!-- Admin Footer -->
    <footer class="bg-slate-800 text-white">
      <div class="container mx-auto px-4 py-3">
        <div class="text-center text-sm">
          <p>Panel de Administración - Clínica Salud</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

// Función para cerrar sesión
const logout = () => {
  authStore.logout()
  router.push('/admin-login')
}
</script>
