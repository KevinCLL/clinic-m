// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

// Layouts
import MainLayout from '../layouts/MainLayout.vue'
import AdminLayout from '../layouts/AdminLayout.vue'

// Public Views
import HomeView from '../views/public/HomeView.vue'

// Admin Views
import LoginView from '../views/admin/LoginView.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'
import EditarContenido from '../views/admin/EditarContenido.vue'

// Route configuration
const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: 'quienes-somos',
        name: 'quienes-somos',
        component: () => import('@/views/public/QuienesSomos.vue')
      },
      {
        path: 'que-ofrecemos',
        name: 'que-ofrecemos',
        component: () => import('@/views/public/QueOfrecemos.vue')
      },
      {
        path: 'actividades',
        name: 'actividades',
        component: () => import('@/views/public/Actividades.vue')
      },
      {
        path: 'servicios/:id',
        name: 'servicio-detalle',
        component: () => import('@/views/public/ServicioDetalle.vue')
      },
      {
        path: 'actividades/:id',
        name: 'actividad-detalle',
        component: () => import('@/views/public/ActividadDetalle.vue')
      },
      {
        path: 'nuestro-espacio',
        name: 'nuestro-espacio',
        component: () => import('@/views/public/NuestroEspacio.vue')
      },
      {
        path: 'contacto',
        name: 'contacto',
        component: () => import('@/views/public/Contacto.vue')
      }
    ]
  },

  // Admin login (no layout, standalone)
  {
    path: '/admin-login',
    name: 'login',
    component: LoginView,
    meta: { requiresAuth: false, hideInMenu: true }
  },

  // Admin routes with AdminLayout (protected)
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'admin-dashboard',
        component: AdminDashboard,
        meta: { requiresAuth: true }
      },
      {
        path: 'editar/:seccion',
        name: 'editar-contenido',
        component: EditarContenido,
        meta: { requiresAuth: true }
      }
    ]
  },

  // Ruta para 404
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Configuración para desplazar al principio de la página en cada navegación
  scrollBehavior(to, from, savedPosition) {
    // Si hay una posición guardada (usando botones de navegación), usar esa posición
    if (savedPosition) {
      return savedPosition
    }
    // De lo contrario, desplazarse al principio
    return { top: 0 }
  }
})

// Navigation guard para proteger rutas
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  // Si la ruta requiere autenticación y el usuario no está autenticado
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/admin-login')
  } else {
    next()
  }
})

export default router
