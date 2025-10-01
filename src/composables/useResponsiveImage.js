import { computed } from 'vue';
import { getImageWithVariants } from '@/utils/imageUtils.js';

export function useResponsiveImage(imagePath) {
  const isMobile = computed(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768;
  });

  const imageVariants = computed(() => getImageWithVariants(imagePath));

  const responsiveImagePath = computed(() => {
    if (isMobile.value) {
      return imageVariants.value.mobile;
    }
    return imageVariants.value.desktop;
  });

  return {
    imagePath: responsiveImagePath,
    isMobile
  };
}
