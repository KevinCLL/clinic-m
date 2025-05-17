<template>
  <div class="min-h-screen flex flex-col">

    <header class="bg-slate-800 text-white shadow-md">
      <div class="container mx-auto px-4 py-2">
        <div class="flex justify-between items-center">

          <div class="flex items-center">
            <h1 class="text-xl font-bold text-white">Panel Administrador</h1>
          </div>


          <nav class="hidden md:flex space-x-8">
            <router-link to="/admin" class="text-gray-300 hover:text-white transition px-2 py-1">
              Dashboard
            </router-link>
          </nav>


          <div class="flex items-center space-x-4">
            <span class="text-sm">Admin</span>
            <button @click="logout" class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm">
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </header>


    <main class="flex-grow bg-gray-100 overflow-hidden">
      <div class="container mx-auto px-4 py-8">
        <router-view v-slot="{ Component }">
          <transition name="page-transition" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>


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


const logout = () => {
  authStore.logout()
  router.push('/admin-login')
}
</script>

<style scoped>
.page-transition-enter-active,
.page-transition-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-transition-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-transition-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
