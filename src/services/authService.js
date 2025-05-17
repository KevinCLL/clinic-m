
import api from './api';

/**
 * Servicio para gestionar la autenticación
 */
const authService = {
  /**
   * Iniciar sesión con credenciales
   * @param {Object} credentials - Credenciales {username, password}
   * @returns {Promise} - Respuesta del servidor con token y datos de usuario
   */
  async login(credentials) {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  /**
   * Obtener información del perfil del administrador
   * @returns {Promise} - Datos del perfil
   */
  async getProfile() {
    const response = await api.get('/auth/profile');
    return response.data;
  },

  /**
   * Cambiar la contraseña del administrador
   * @param {Object} passwords - Contraseñas {currentPassword, newPassword}
   * @returns {Promise} - Respuesta del servidor
   */
  async changePassword(passwords) {
    const response = await api.put('/auth/change-password', passwords);
    return response.data;
  },

  /**
   * Verificar si el token es válido
   * @returns {Promise<boolean>} - true si el token es válido
   */
  async checkAuth() {
    try {
      await this.getProfile();
      return true;
    } catch (error) {
      return false;
    }
  }
};

export default authService;
