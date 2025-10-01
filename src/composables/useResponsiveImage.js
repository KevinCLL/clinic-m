import { computed } from 'vue';

export function useResponsiveImage(imagePath) {
  const isMobile = computed(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768;
  });

  const responsiveImagePath = computed(() => {
    if (!imagePath) return '';

    const pathParts = imagePath.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const ext = fileName.substring(fileName.lastIndexOf('.'));
    const baseName = fileName.substring(0, fileName.lastIndexOf('.'));

    if (isMobile.value) {
      pathParts[pathParts.length - 1] = `${baseName}-mobile${ext}`;
      return pathParts.join('/');
    }

    return imagePath;
  });

  return {
    imagePath: responsiveImagePath,
    isMobile
  };
}
