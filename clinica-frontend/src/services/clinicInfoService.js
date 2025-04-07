// src/services/clinicInfoService.js
import api from './api';

/**
 * Servicio para gestionar la información de la clínica
 */
const clinicInfoService = {
  /**
   * Obtener todas las secciones
   * @param {boolean} all - Si true, obtiene todas las secciones (requiere auth)
   * @returns {Promise} - Lista de secciones
   */
  async getAllSections(all = false) {
    console.log(`[clinicInfoService] Obteniendo secciones. all=${all}`);
    try {
      const response = await api.get('/clinic-info', { params: { all } });
      console.log('[clinicInfoService] Secciones obtenidas:', response.data);
      return response.data;
    } catch (error) {
      console.error('[clinicInfoService] Error obteniendo secciones:', error);
      throw error;
    }
  },

  /**
   * Obtener una sección específica por su ID
   * @param {string} sectionId - ID de la sección
   * @returns {Promise} - Datos de la sección
   */
  async getSectionById(sectionId) {
    console.log(`[clinicInfoService] Obteniendo sección: ${sectionId}`);
    try {
      const response = await api.get(`/clinic-info/${sectionId}`);
      console.log('[clinicInfoService] Sección obtenida:', response.data);
      return response.data;
    } catch (error) {
      console.error(`[clinicInfoService] Error obteniendo sección ${sectionId}:`, error);
      throw error;
    }
  },

  /**
   * Crear una nueva sección
   * @param {Object} sectionData - Datos de la sección
   * @returns {Promise} - Sección creada
   */
  async createSection(sectionData) {
    console.log('[clinicInfoService] Creando sección:', sectionData);
    try {
      const response = await api.post('/clinic-info', sectionData);
      console.log('[clinicInfoService] Sección creada:', response.data);
      return response.data;
    } catch (error) {
      console.error('[clinicInfoService] Error creando sección:', error);
      throw error;
    }
  },

  /**
   * Actualizar una sección existente
   * @param {string} sectionId - ID de la sección a actualizar
   * @param {Object} sectionData - Nuevos datos de la sección
   * @returns {Promise} - Sección actualizada
   */
  async updateSection(sectionId, sectionData) {
    console.log(`[clinicInfoService] Actualizando sección ${sectionId}:`, sectionData);
    console.log(`[clinicInfoService] URL: /clinic-info/${sectionId}`);
    try {
      // Verificar token antes de actualizar
      const token = localStorage.getItem('token');
      console.log('[clinicInfoService] Token disponible:', !!token);

      const response = await api.put(`/clinic-info/${sectionId}`, sectionData);
      console.log('[clinicInfoService] Sección actualizada:', response.data);
      return response.data;
    } catch (error) {
      console.error(`[clinicInfoService] Error actualizando sección ${sectionId}:`, error);
      if (error.response) {
        console.error('Detalles del error:', {
          status: error.response.status,
          data: error.response.data,
          headers: error.response.headers
        });
      } else if (error.request) {
        console.error('No se recibió respuesta:', error.request);
      } else {
        console.error('Error en la configuración de la solicitud:', error.message);
      }
      throw error;
    }
  },

  /**
   * Eliminar una sección
   * @param {string} sectionId - ID de la sección a eliminar
   * @returns {Promise} - Respuesta del servidor
   */
  async deleteSection(sectionId) {
    console.log(`[clinicInfoService] Eliminando sección: ${sectionId}`);
    try {
      const response = await api.delete(`/clinic-info/${sectionId}`);
      console.log('[clinicInfoService] Sección eliminada:', response.data);
      return response.data;
    } catch (error) {
      console.error(`[clinicInfoService] Error eliminando sección ${sectionId}:`, error);
      throw error;
    }
  },

  /**
   * Inicializar secciones predeterminadas (solo si no hay secciones)
   * @returns {Promise} - Respuesta del servidor
   */
  async initializeDefaultSections() {
    console.log('[clinicInfoService] Inicializando secciones predeterminadas');
    try {
      const response = await api.post('/clinic-info/initialize');
      console.log('[clinicInfoService] Secciones inicializadas:', response.data);
      return response.data;
    } catch (error) {
      console.error('[clinicInfoService] Error inicializando secciones:', error);
      throw error;
    }
  }
};

export default clinicInfoService;
