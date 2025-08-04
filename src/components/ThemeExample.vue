<template>
  <div class="theme-example">
    <h1 class="heading-1">Título Principal</h1>
    <h2 class="heading-2">Subtítulo</h2>
    <p class="body-text">
      Este es un ejemplo de texto usando el sistema de theming.
      Los tamaños y fuentes se ajustan automáticamente.
    </p>
    
    <div class="color-samples">
      <div class="color-box primary">Color Primario</div>
      <div class="color-box secondary">Color Secundario</div>
    </div>
    
    <button class="btn-primary">Botón Primario</button>
    <button class="btn-secondary">Botón Secundario</button>
  </div>
</template>

<style scoped>
/* Uso del sistema de theming */

.heading-1 {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--primary-800);
  margin-bottom: var(--spacing-md);
}

.heading-2 {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--primary-700);
  margin-bottom: var(--spacing-sm);
}

.body-text {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--primary-900);
  margin-bottom: var(--spacing-lg);
}

.color-samples {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.color-box {
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  color: white;
  font-weight: var(--font-weight-medium);
}

.color-box.primary {
  background-color: var(--primary-600);
}

.color-box.secondary {
  background-color: var(--secondary-600);
}

.btn-primary,
.btn-secondary {
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  border: none;
  cursor: pointer;
  transition: all var(--transition-normal);
  margin-right: var(--spacing-sm);
}

.btn-primary {
  background-color: var(--primary-600);
  color: white;
}

.btn-primary:hover {
  background-color: var(--primary-700);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background-color: var(--secondary-600);
  color: white;
}

.btn-secondary:hover {
  background-color: var(--secondary-700);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
</style>