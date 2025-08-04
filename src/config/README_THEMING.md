# Guía del Sistema de Theming

## Resumen
Todo el tema de la aplicación está centralizado en dos archivos principales:
- `/src/styles/theme.css` - Variables CSS del tema
- `/src/config/theme-config.js` - Configuración JavaScript del tema

## Cómo cambiar los colores

### Opción 1: Cambiar qué color es el principal
En `/src/styles/theme.css`, puedes cambiar qué paleta usar:

```css
/* Para usar purple como color principal en lugar de teal */
--primary-50: var(--purple-50);
--primary-100: var(--purple-100);
/* ... etc */
```

### Opción 2: Cambiar los valores de los colores
Si quieres otros tonos de verde, modifica los valores hex:

```css
/* Cambiar tonos de teal/verde */
--teal-600: #009B8F;  /* Cambia este valor hex */
--teal-700: #00877C;  /* Cambia este valor hex */
```

## Cómo cambiar las fuentes

### 1. Usando Google Fonts
Primero, añade el link en `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Luego, actualiza en `/src/styles/theme.css`:

```css
--font-family-base: 'Poppins', sans-serif;
```

### 2. Fuentes locales
Coloca los archivos de fuente en `/src/assets/fonts/` y añade en `theme.css`:

```css
@font-face {
  font-family: 'MiFuente';
  src: url('@/assets/fonts/mifuente.woff2') format('woff2');
}

:root {
  --font-family-base: 'MiFuente', sans-serif;
}
```

## Cómo cambiar tamaños de fuente

### Cambiar el tamaño base (afecta a todo)
En `/src/styles/theme.css`:

```css
--font-size-base: 18px; /* Por defecto es 16px */
```

### Cambiar la escala de tamaños
Modifica los multiplicadores:

```css
--font-size-lg: calc(var(--font-size-base) * 1.25); /* Más grande */
--font-size-xl: calc(var(--font-size-base) * 1.5);  /* Aún más grande */
```

## Uso en componentes

### Colores
```css
.mi-elemento {
  color: var(--primary-700);
  background-color: var(--primary-50);
  border-color: var(--secondary-400);
}
```

### Tipografía
```css
.mi-titulo {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}
```

### Espaciado
```css
.mi-contenedor {
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}
```

## Cambios rápidos comunes

### Hacer toda la web con otra fuente
Solo cambia esta línea en `theme.css`:
```css
--font-family-base: 'Tu Nueva Fuente', sans-serif;
```

### Cambiar verde por azul
En `theme.css`, añade una paleta azul y cambia las referencias:
```css
/* Añade paleta azul */
--blue-600: #2563EB;
--blue-700: #1D4ED8;
/* ... */

/* Cambia primary para usar azul */
--primary-600: var(--blue-600);
--primary-700: var(--blue-700);
```

### Hacer el texto más grande en móviles
Ya está configurado, pero puedes ajustarlo:
```css
@media (max-width: 768px) {
  :root {
    --font-size-base: 15px; /* Ajusta este valor */
  }
}
```