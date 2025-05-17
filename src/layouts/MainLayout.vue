<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';

const route = useRoute();


watch(
  () => route.path,
  () => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }
);

onMounted(() => {

  window.scrollTo(0, 0);
});
</script>
