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
        component: HomeView,
        meta: { title: 'CODA - Salud Mental Integral en Valencia | Psiquiatría y Psicología Clínica' }
      },
      {
        path: 'quienes-somos',
        name: 'quienes-somos',
        component: () => import('@/views/public/QuienesSomos.vue'),
        meta: { title: 'Equipo de Profesionales - CODA Salud Mental Valencia' }
      },
      {
        path: 'que-ofrecemos',
        name: 'que-ofrecemos',
        component: () => import('@/views/public/QueOfrecemos.vue'),
        meta: { title: 'Servicios de Salud Mental - CODA Valencia | Psiquiatría, Psicología, EMDR' }
      },
      {
        path: 'actividades',
        name: 'actividades',
        component: () => import('@/views/public/Actividades.vue'),
        meta: { title: 'Actividades - CODA Salud Mental Valencia | Yoga, Mindfulness, Retiros' }
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
        component: () => import('@/views/public/NuestroEspacio.vue'),
        meta: { title: 'Nuestro Espacio - CODA Salud Mental Valencia' }
      },
      {
        path: 'contacto',
        name: 'contacto',
        component: () => import('@/views/public/Contacto.vue'),
        meta: { title: 'Contacto - CODA Salud Mental Valencia | Avinguda Peris i Valero 178' }
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
  history: createWebHistory(import.meta.env.BASE_URL),
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

const serviceTitles = {
  'psiquiatria': 'Psiquiatría en Valencia - CODA Salud Mental',
  'psicologia-clinica': 'Psicología Clínica en Valencia - CODA Salud Mental',
  'infancia-adolescencia': 'Salud Mental Infantil y Adolescente en Valencia - CODA',
  'terapia-emdr': 'Terapia EMDR en Valencia - CODA Salud Mental',
  'mindfulness': 'Mindfulness en Valencia - CODA Salud Mental',
  'perinatal': 'Salud Mental Perinatal en Valencia - CODA'
}

const activityTitles = {
  'yoga': 'Yoga Terapéutico en Valencia - CODA Salud Mental',
  'yoga-trauma': 'Yoga Sensible al Trauma en Valencia - CODA Salud Mental',
  'mindfulness': 'Grupos de Mindfulness en Valencia - CODA Salud Mental',
  'retiros': 'Retiros de Mindfulness - CODA Salud Mental Valencia'
}

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else if (to.name === 'servicio-detalle' && to.params.id) {
    document.title = serviceTitles[to.params.id] || 'CODA - Salud Mental Integral en Valencia'
  } else if (to.name === 'actividad-detalle' && to.params.id) {
    document.title = activityTitles[to.params.id] || 'CODA - Salud Mental Integral en Valencia'
  } else {
    document.title = 'CODA - Salud Mental Integral en Valencia'
  }
})

export default router
