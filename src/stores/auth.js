
import { defineStore } from 'pinia'
import authService from '../services/authService'

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

        const response = await authService.login(credentials)


        this.token = response.token
        this.user = response.user


        localStorage.setItem('token', this.token)

        return true
      } catch (error) {
        this.error = error.response?.data?.message || 'Error al iniciar sesión'
        return false
      } finally {
        this.loading = false
      }
    },

    async checkAuth() {
      if (!this.token) return false

      try {
        const isValid = await authService.checkAuth()
        if (!isValid) this.logout()
        return isValid
      } catch (error) {
        this.logout()
        return false
      }
    },

    async getProfile() {
      try {
        const response = await authService.getProfile()
        this.user = response.user
        return this.user
      } catch (error) {
        console.error('Error al obtener perfil:', error)
        return null
      }
    },

    async changePassword(passwords) {
      this.loading = true
      this.error = null

      try {
        await authService.changePassword(passwords)
        return true
      } catch (error) {
        this.error = error.response?.data?.message || 'Error al cambiar la contraseña'
        return false
      } finally {
        this.loading = false
      }
    },

    logout() {

      this.token = null
      this.user = null
      localStorage.removeItem('token')
    }
  }
})
