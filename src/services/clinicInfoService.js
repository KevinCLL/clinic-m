
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

    try {
      const response = await api.get('/clinic-info', { params: { all } });

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

    try {
      const response = await api.get(`/clinic-info/${sectionId}`);

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

    try {
      const response = await api.post('/clinic-info', sectionData);

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


    try {

      const token = localStorage.getItem('token');


      const response = await api.put(`/clinic-info/${sectionId}`, sectionData);

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

    try {
      const response = await api.delete(`/clinic-info/${sectionId}`);

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

    try {
      const response = await api.post('/clinic-info/initialize');

      return response.data;
    } catch (error) {
      console.error('[clinicInfoService] Error inicializando secciones:', error);
      throw error;
    }
  }
};

export default clinicInfoService;
