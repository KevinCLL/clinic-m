// src/stores/auth.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: null,
    loading: false,
    error: null
  }),
  
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  
  actions: {
    async login(credentials) {
      this.loading = true
      this.error = null
      
      try {
        // En una versión real, esto apuntaría a tu API en Railway
        // const response = await axios.post('https://tu-api.railway.app/api/auth/login', credentials)
        
        // Para testing, simulamos un login exitoso
        const response = { 
          data: { 
            token: 'fake-jwt-token',
            user: { username: 'admin' }
          } 
        }
        
        // Almacenamos el token y la info del usuario
        this.token = response.data.token
        this.user = response.data.user
        
        // Guardamos el token en localStorage para persistencia
        localStorage.setItem('token', this.token)
        
        return true
      } catch (error) {
        this.error = error.response?.data?.message || 'Error al iniciar sesión'
        return false
      } finally {
        this.loading = false
      }
    },
    
    logout() {
      // Limpiamos el estado y el localStorage
      this.token = null
      this.user = null
      localStorage.removeItem('token')
    }
  }
})
