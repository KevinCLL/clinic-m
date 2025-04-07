// src/services/api.js
import axios from 'axios';

// Obtener la URL base desde las variables de entorno
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
console.log('[API] Usando URL base:', baseURL);

// Crear una instancia de axios con configuración base
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para incluir el token en las solicitudes
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    console.log('[API Interceptor] Enviando solicitud a:', config.url);
    console.log('[API Interceptor] Método:', config.method.toUpperCase());
    console.log('[API Interceptor] Token disponible:', !!token);

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    console.log('[API Interceptor] Datos enviados:', config.data);
    return config;
  },
  (error) => {
    console.error('[API Interceptor] Error en la solicitud:', error);
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores de respuesta
api.interceptors.response.use(
  (response) => {
    console.log('[API Interceptor] Respuesta recibida de:', response.config.url);
    console.log('[API Interceptor] Código de estado:', response.status);
    console.log('[API Interceptor] Datos recibidos:', response.data);
    return response;
  },
  (error) => {
    console.error('[API Interceptor] Error en la respuesta:', error);

    // Detalles adicionales del error
    if (error.response) {
      console.error('[API Interceptor] Datos del error:', error.response.data);
      console.error('[API Interceptor] Estado del error:', error.response.status);

      // Si hay error 401 (no autorizado), podríamos manejar el logout
      if (error.response.status === 401) {
        console.warn('[API Interceptor] Sesión caducada o token inválido');
        // Si no estamos en la página de login, redirigir
        if (window.location.pathname !== '/admin-login') {
          localStorage.removeItem('token');
          window.location.href = '/admin-login';
        }
      }
    } else if (error.request) {
      console.error('[API Interceptor] No se recibió respuesta del servidor');
    } else {
      console.error('[API Interceptor] Error en la configuración de la solicitud:', error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
