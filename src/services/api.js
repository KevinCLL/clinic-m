
import axios from 'axios';


const baseURL = import.meta.env.VITE_API_URL;



const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});


api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');




    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }


    return config;
  },
  (error) => {
    console.error('[API Interceptor] Error en la solicitud:', error);
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => {



    return response;
  },
  (error) => {
    console.error('[API Interceptor] Error en la respuesta:', error);


    if (error.response) {
      console.error('[API Interceptor] Datos del error:', error.response.data);
      console.error('[API Interceptor] Estado del error:', error.response.status);


      if (error.response.status === 401) {
        console.warn('[API Interceptor] Sesión caducada o token inválido');

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
