<template>
  <div class="flex flex-col min-h-screen">
    <SiteHeader />
    <main class="flex-grow overflow-hidden">
      <router-view v-slot="{ Component }">
        <transition name="page-transition" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import SiteHeader from '@/components/layout/SiteHeader.vue';
import Footer from '@/components/layout/Footer.vue';
</script>

<style scoped>
.page-transition-enter-active,
.page-transition-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-transition-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-transition-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
