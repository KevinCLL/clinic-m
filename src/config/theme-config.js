/**
 * Configuración del tema
 * 
 * Para cambiar el tema de la aplicación, modifica los valores aquí.
 * Los cambios se aplicarán en toda la aplicación.
 */

export const themeConfig = {
  // =============================
  // COLORES PRINCIPALES
  // =============================
  colors: {
    // Para cambiar el color principal, cambia 'teal' por otro color
    // Opciones disponibles: 'teal', 'purple', 'blue', 'green', 'red', etc.
    primary: 'teal',
    secondary: 'purple'
  },

  // =============================
  // TIPOGRAFÍA
  // =============================
  typography: {
    // Fuente principal para todo el texto
    fontFamily: {
      // Ejemplos de fuentes web:
      // google: "'Roboto', sans-serif"
      // google: "'Open Sans', sans-serif"
      // google: "'Lato', sans-serif"
      // google: "'Montserrat', sans-serif"
      // google: "'Poppins', sans-serif"
      base: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      
      // Fuente para títulos (opcional, por defecto usa la base)
      heading: null, // Si es null, usa la fuente base
      
      // Fuente monoespaciada para código
      mono: "'Courier New', monospace"
    },
    
    // Tamaño base de fuente (afecta a toda la escala)
    baseFontSize: 16, // en píxeles
    
    // Escala de tamaños (multiplicadores del tamaño base)
    scale: {
      xs: 0.75,    // 12px
      sm: 0.875,   // 14px
      md: 1,       // 16px
      lg: 1.125,   // 18px
      xl: 1.25,    // 20px
      '2xl': 1.5,  // 24px
      '3xl': 1.875,// 30px
      '4xl': 2.25, // 36px
      '5xl': 3     // 48px
    }
  },

  // =============================
  // ESPACIADO
  // =============================
  spacing: {
    // Unidad base de espaciado
    baseUnit: 4, // en píxeles
    
    // Escala de espaciado (multiplicadores de la unidad base)
    scale: {
      xs: 1,   // 4px
      sm: 2,   // 8px
      md: 4,   // 16px
      lg: 6,   // 24px
      xl: 8,   // 32px
      '2xl': 12,// 48px
      '3xl': 16 // 64px
    }
  },

  // =============================
  // OTROS
  // =============================
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px'
  },
  
  transitions: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms'
  }
};

// Función para aplicar el tema dinámicamente
export function applyTheme(config = themeConfig) {
  const root = document.documentElement;
  
  // Aplicar colores
  if (config.colors.primary !== 'teal') {
    // Aquí podrías mapear otros colores si los agregas
    console.warn('Solo los colores teal y purple están configurados actualmente');
  }
  
  // Aplicar tipografía
  if (config.typography.fontFamily.base) {
    root.style.setProperty('--font-family-base', config.typography.fontFamily.base);
  }
  
  if (config.typography.fontFamily.heading) {
    root.style.setProperty('--font-family-heading', config.typography.fontFamily.heading);
  }
  
  if (config.typography.baseFontSize) {
    root.style.setProperty('--font-size-base', `${config.typography.baseFontSize}px`);
  }
  
  // Aplicar escala de tamaños
  Object.entries(config.typography.scale).forEach(([key, value]) => {
    root.style.setProperty(`--font-size-${key}`, `calc(var(--font-size-base) * ${value})`);
  });
}

// Exportar configuración por defecto
export default themeConfig;