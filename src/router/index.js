import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'


import MainLayout from '../layouts/MainLayout.vue'
import AdminLayout from '../layouts/AdminLayout.vue'


import HomeView from '../views/public/HomeView.vue'


import LoginView from '../views/admin/LoginView.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'
import EditarContenido from '../views/admin/EditarContenido.vue'


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


  {
    path: '/admin-login',
    name: 'login',
    component: LoginView,
    meta: { requiresAuth: false, hideInMenu: true }
  },


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


  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {

    return new Promise((resolve) => {
      setTimeout(() => {
        if (to.hash) {
          resolve({
            el: to.hash,
            behavior: 'smooth',
            top: 80
          })
        } else if (savedPosition) {
          resolve({
            ...savedPosition,
            behavior: 'smooth'
          })
        } else {
          resolve({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
        }
      }, 350)
    })
  }
})


router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()


  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/admin-login')
  } else {
    next()
  }
})

export default router
