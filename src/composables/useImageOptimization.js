import { ref, onMounted } from 'vue';

export function useImageOptimization() {
  const isMobile = ref(window.innerWidth <= 768);
  const isSlowConnection = ref(false);

  onMounted(() => {
    if ('connection' in navigator) {
      const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (conn) {
        isSlowConnection.value = conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g' || conn.saveData;
      }
    }

    const handleResize = () => {
      isMobile.value = window.innerWidth <= 768;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const shouldLoadImage = (priority = 'normal') => {
    if (priority === 'high') return true;
    if (isSlowConnection.value && isMobile.value) return false;
    return true;
  };

  return {
    isMobile,
    isSlowConnection,
    shouldLoadImage
  };
}
