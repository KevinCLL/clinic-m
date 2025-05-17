<template>

  <header class="sticky top-0 z-50">

    <nav class="w-full flex items-center justify-between px-4 py-2 text-white glass-nav">

      <router-link :to="localePath('" class="flex items-center space-x-2">
        <img class="max-w-full h-auto w-12" src="@/assets/images/logo-mini.png" alt="Logo" />

        <span class="hidden sm:inline font-bold text-xl titulo-mini">
          {{ 'dragonCojo' }}
        </span>
      </router-link>


      <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false" class="text-white">

        <el-sub-menu index="1">
          <template #title><i class="fa-solid fa-circle-info mr-2"></i>{{ 'info' }}</template>
          <el-menu-item @click="() => switchPath('')" index="home">
            <span>{{ 'aboutus' }}</span>
          </el-menu-item>
          <el-menu-item @click="() => switchPath('contacto" index="contact">
            <span>{{ 'contact' }}</span>
          </el-menu-item>
        </el-sub-menu>


        <el-sub-menu index="2">
          <template #title
            ><i class="fa-solid fa-language mr-2"></i> {{ 'languages' }}</template
          >
          <el-menu-item @click="switchLang('es')" index="es">
            <span>Español</span>
          </el-menu-item>
          <el-menu-item @click="switchLang('en')" index="en">
            <span>English</span>
          </el-menu-item>
          <el-menu-item @click="switchLang('ca')" index="ca">
            <span>Català</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'


const activeIndex = ref('1')


const slugMap = {
  '': { es: '', en: '', ca: '' },

  contacto: { es: 'contacto', en: 'contact', ca: 'contacta' },

  contact: { es: 'contacto', en: 'contact', ca: 'contacta' },

  contacta: { es: 'contacto', en: 'contact', ca: 'contacta' },
}

const router = useRouter()
const route = useRoute()


const activeItem = computed(() => {
  if (!route.params.lang) return 'home'
  const sub = route.path.split('/')[2] || ''
  if (sub.includes('contact')) return 'contact'
  return 'home'
})


const currentLang = computed(() => {
  const segments = route.path.split('/')
  const lang = segments[1]
  return lang || 'es'
})


function switchLang(lang) {
  const segments = route.path.split('/')
  if (segments.length > 1) {
    segments[1] = lang
  }

  if (segments[2] && slugMap[segments[2]]) {
    const currentSlug = segments[2]
    segments[2] = slugMap[currentSlug][lang]
  }
  const newPath = segments.join('/')
  router.replace(newPath)
}


function localePath(slug) {
  const lang = currentLang.value
  if (slugMap[slug]) {
    return `/${lang}/${slugMap[slug][lang]}`
  }
  return `/${lang}/${slug}`
}


function switchPath(slug) {
  const path = localePath(slug)
  router.replace(path)
}
</script>

<style scoped>
.el-menu--horizontal {
  border-bottom: 0 !important;
}
</style>
