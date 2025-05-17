<template>
  <footer>
    <div class="text-center text-sm py-3 border-t border-gray-500">
      <p>{{ 'footer', { currentYear: currentYear })' }}</p>
      <p>
        {{ 'footerCreated' }}
        <a
          href="http://malkevnia.com/"
          target="_blank"
          rel="noopener"
          style="color: var(--color-dorado)"
        >
          Malkev
        </a>
        {{ 'footerWith' }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
const currentYear = ref(new Date().getFullYear())
</script>

<style scoped></style>
