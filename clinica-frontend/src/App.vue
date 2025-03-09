<template>
  <component :is="layoutComponent" />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'

const layouts = {
  MainLayout
}

const route = useRoute()

const layoutComponent = computed(() => {
  const layoutName = route.meta.layout
  return layouts[layoutName] || layouts.MainLayout
})
</script>
